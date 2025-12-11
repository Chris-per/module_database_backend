import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: [
  //     'http://192.168.178.143:8081',
  //     // 'http://localhost:4200',
  //     'http://localhost:8081',
      
  //   ], // allow both local and LAN frontend
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true,
  // });

  app.enableCors({
    origin: '*', // allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false, // must be false when using '*'
  });
    
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
