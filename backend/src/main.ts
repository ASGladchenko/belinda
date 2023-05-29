import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const configSwagger = new DocumentBuilder()
    .setTitle('Belinda - BACKEND')
    .setDescription('Rest API Documentation')
    .setVersion('1.0.0')
    .addTag('Belinda')
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('swagger-ui', app, document);

  await app.listen(port || 5000, () =>
    console.log(`Started on the port:${port}`),
  );
}
bootstrap();
