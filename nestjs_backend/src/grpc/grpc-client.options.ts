import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const DISPENSER_PACKAGE = 'at.spg.protobuf.artemis.silverink';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: DISPENSER_PACKAGE,
    protoPath: join(process.cwd(), '../../frontend/tasks-ui/src/protobuf/dispenser.proto'),
    url: '192.168.178.235:50051', // Dispenser gRPC service address
  },
};
