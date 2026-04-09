import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

export interface PresetMeta {
  id: string;
  name: string;
  savedAt: string;
}

@Injectable()
export class BatchPresetsService {
  private readonly savesDir: string;

  constructor() {
    this.savesDir = path.resolve(__dirname, '..', '..', 'batch-presets');
    if (!fs.existsSync(this.savesDir)) {
      fs.mkdirSync(this.savesDir, { recursive: true });
    }
  }

  list(): PresetMeta[] {
    const files = fs.readdirSync(this.savesDir).filter(f => f.endsWith('.json'));
    return files
      .map(file => {
        const filepath = path.join(this.savesDir, file);
        const id = file.replace(/\.json$/, '');
        try {
          const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
          return {
            id,
            name: data.meta?.name ?? id,
            savedAt: data.meta?.savedAt ?? fs.statSync(filepath).mtime.toISOString(),
          };
        } catch {
          return { id, name: id, savedAt: fs.statSync(filepath).mtime.toISOString() };
        }
      })
      .sort((a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime());
  }

  get(id: string): any {
    this.validateId(id);
    const filepath = this.filePath(id);
    if (!fs.existsSync(filepath)) throw new NotFoundException(`Preset "${id}" not found`);
    return JSON.parse(fs.readFileSync(filepath, 'utf8'));
  }

  create(name: string, data: any): { id: string } {
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    data.meta = { ...data.meta, name, savedAt: new Date().toISOString() };
    fs.writeFileSync(this.filePath(id), JSON.stringify(data, null, 2), 'utf8');
    return { id };
  }

  update(id: string, name: string | undefined, data: any): void {
    this.validateId(id);
    const filepath = this.filePath(id);
    if (!fs.existsSync(filepath)) throw new NotFoundException(`Preset "${id}" not found`);
    data.meta = { ...data.meta, name: name ?? data.meta?.name, savedAt: new Date().toISOString() };
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf8');
  }

  delete(id: string): void {
    this.validateId(id);
    const filepath = this.filePath(id);
    if (!fs.existsSync(filepath)) throw new NotFoundException(`Preset "${id}" not found`);
    fs.unlinkSync(filepath);
  }

  private filePath(id: string): string {
    return path.join(this.savesDir, `${id}.json`);
  }

  private validateId(id: string): void {
    if (!/^[a-z0-9]+$/i.test(id)) throw new BadRequestException('Invalid preset ID');
  }
}
