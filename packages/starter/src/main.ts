import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';

export async function bootstrap() {
  const app = await NestFactory.create(RootModule, { cors: true });
  await app.listen(4501, () => {
    console.log('Orakul UI is accessible at http://localhost:4501');
  });
}
bootstrap();
