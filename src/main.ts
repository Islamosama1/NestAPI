import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('NestJS API - by Islam')
    .setDescription(
      'An REST API built with TypeScript and MongoDB, using the NestJS framework. This API is used to manage restaurants and meals, according to user authentication! It also includes unit and e2e tests.',
    )
    .setVersion('1.0')
    .addTag('restaurants')
    .addTag('auth')
    .addTag('meals')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('docs', app, document);
  // SwaggerModule.setup("docs", app, document, {
  //   customSiteTitle: "Api Docs",
  //   customfavIcon: "https://avatars.githubusercontent.com/u/6936373?s=200&v=4",
  //   customJs: [
  //     "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js",
  //     "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js",
  //   ],
  //   customCssUrl: [
  //     "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css",
  //     "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css",
  //     "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css",
  //   ],
  // });

  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: 'API Docs',
    customfavIcon: 'https://avatars.githubusercontent.com/u/6936373?s=200&v=4',
    customJs: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
