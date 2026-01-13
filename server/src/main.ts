import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // ⭐ DEBUGGING - sprawdź zmienne środowiskowe
  console.log('🔍 NODE_ENV:', process.env.NODE_ENV);
  console.log('🔍 DB_GCG_URL exists:', !!process.env.DB_GCG_URL);
  console.log('🔍 DB_GCG_URL (first 50 chars):', process.env.DB_GCG_URL?.substring(0, 50));

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'https://mazpawel94.github.io'],
    credentials: true,
  });

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`🚀 Server running on port ${port}`);
}
bootstrap();
