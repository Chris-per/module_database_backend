import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import { DispenserService } from './dispenser.interface';
import { DISPENSER_PACKAGE } from './grpc-client.options';

@Injectable()
export class GrpcClientService implements OnModuleInit {
  private dispenserService: DispenserService;

  constructor(@Inject(DISPENSER_PACKAGE) private client: ClientGrpc) {}

  onModuleInit() {
    this.dispenserService = this.client.getService<DispenserService>('ServiceDispenser');
  }

  getDispenserService(): DispenserService {
    return this.dispenserService;
  }
}
