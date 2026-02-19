import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { GrpcClientService } from './grpc-client.service';
import { grpcClientOptions, DISPENSER_PACKAGE } from './grpc-client.options';
import { GrpcController } from './grpc.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: DISPENSER_PACKAGE,
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [GrpcController],
  providers: [GrpcClientService],
  exports: [GrpcClientService],
})
export class GrpcClientModule {}
