import { Controller, Post, Body, Get, ConfigurableModuleBuilder } from '@nestjs/common';
import { GrpcClientService } from './grpc-client.service';
import { GcodeEnum, type Gcode, type GcodeLine, type StartDispensingMessage, type RequestStatusMessage, type StopDispensingMessage, type RequestReferenceMessage } from './dispenser.interface';
import * as fs from 'fs';
import * as path from 'path';

@Controller('grpc')
export class GrpcController {
  constructor(private readonly grpcClientService: GrpcClientService) {}

  @Post('set-gcode')
  setGcode(@Body() data: any) {
    console.log('setGcode body type:', typeof data);
    // console.log('setGcode body content:', JSON.stringify(data, null, 2));
    let lines: string[] = [];
    
    if (typeof data === 'string') {
        try {
            const parsed = JSON.parse(data);
            if (Array.isArray(parsed)) {
                lines = parsed;
            } else {
                lines = data.split(/\r?\n/).filter(l => l.trim().length > 0);
            }
        } catch (e) {
             lines = data.split(/\r?\n/).filter(l => l.trim().length > 0);
        }
    } else if (Array.isArray(data)) {
        lines = data;
    }
    
    const gcode: Gcode = {
        line: lines.map(line => this.parseGcodeLine(line))
    };
    // console.log('Parsed Gcode object:', JSON.stringify(gcode, null, 2));
    // console.log('Parsed Gcode lines:', gcode.line.length);

    try {
        const filePath = path.join(process.cwd(), 'last_gcode.json');
        fs.writeFileSync(filePath, JSON.stringify(gcode, null, 2));
        console.log(`Saved last gcode to ${filePath}`);
    } catch (err) {
        console.error('Failed to save last gcode:', err);
    }

    try {
      return this.grpcClientService.getDispenserService().setGcode(gcode);
    } catch (error) {
      console.error('Error sending gcode to dispenser service:', error);
      throw error;
    }
  }

  private parseGcodeLine(lineStr: string): GcodeLine {
    const parts = lineStr.trim().split(/\s+/);
    const idStr = parts[0];
    const id = (GcodeEnum as any)[idStr] || GcodeEnum.err;

    const gcodeLine: GcodeLine = { id };
    console.log(lineStr);
    for (let i = 1; i < parts.length; i++) {
        const part = parts[i];
        if (!part) continue;

        const key = part.charAt(0);
        const value = part.substring(1);

        switch (key) {
            case 'X': gcodeLine.x1 = parseFloat(value); break;
            case 'Y': gcodeLine.y1 = parseFloat(value); break;
            case 'Z': gcodeLine.z1 = parseFloat(value); break;
            case 'U': gcodeLine.x2 = parseFloat(value); break;
            case 'V': gcodeLine.y2 = parseFloat(value); break;
            case 'W': gcodeLine.z2 = parseFloat(value); break;
            case 'A': gcodeLine.A = parseInt(value, 10); break;
            case 'B': gcodeLine.B = parseInt(value, 10); break;
            case 'F': gcodeLine.F = parseInt(value, 10); break;
            case 'T': gcodeLine.T = parseInt(value, 10); break;
            case 'Q': gcodeLine.Q = value; break;
            case 'P':
                if (value.includes(':')) {
                    gcodeLine.data = value.split(':').map(v => parseFloat(v));
                } else {
                    gcodeLine.pattern = value;
                }
                break;
        }
    }
    console.log('Parsed GcodeLine:', JSON.stringify(gcodeLine, null, 2)); 
    // Ensure coordinate pairs are present if one is set
    if (gcodeLine.x1 !== undefined && gcodeLine.y1 === undefined) gcodeLine.y1 = 0;
    if (gcodeLine.y1 !== undefined && gcodeLine.x1 === undefined) gcodeLine.x1 = 0;

    // U/V maps to x2/y2
    if (gcodeLine.x2 !== undefined && gcodeLine.y2 === undefined) gcodeLine.y2 = 0;
    if (gcodeLine.y2 !== undefined && gcodeLine.x2 === undefined) gcodeLine.x2 = 0;

    return gcodeLine;
  }

  @Post('start-dispensing')
  startDispensing(@Body() data: StartDispensingMessage) {
    console.log('startDispensing body:', JSON.stringify(data, null, 2));
    return this.grpcClientService.getDispenserService().startDispensing(data);
  }

  @Post('status')
  requestStatus(@Body() data: RequestStatusMessage) {
    console.log('requestStatus body:', JSON.stringify(data, null, 2));
    return this.grpcClientService.getDispenserService().requestStatus(data);
  }

  @Post('stop-dispensing')
  stopDispensing(@Body() data: StopDispensingMessage) {
    console.log('stopDispensing body:', JSON.stringify(data, null, 2));
    return this.grpcClientService.getDispenserService().stopDispensing(data);
  }

  @Post('reference')
  requestReference(@Body() data: RequestReferenceMessage) {
    console.log('requestReference body:', JSON.stringify(data, null, 2));
    return this.grpcClientService.getDispenserService().requestReference(data);
  }
}
