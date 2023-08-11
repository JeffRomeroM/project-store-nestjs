import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarcasModule } from './marcas/marcas.module';
import { ModelsModule } from './models/models.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '090202',
      database: 'store',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    
    MarcasModule, ModelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
