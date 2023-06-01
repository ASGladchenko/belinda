import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ValidationPipe } from './pipes';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  const configSwagger = new DocumentBuilder()
    .setTitle('Belinda - BACKEND')
    .setDescription('Rest API Documentation')
    .setVersion('1.0.0')
    .addTag('Belinda')
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('swagger-ui/', app, document);

  await app.listen(port || 4200, () =>
    console.log(`Started on the port:${port}`),
  );
}
bootstrap();
