import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;//添加项

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  //添加项
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
