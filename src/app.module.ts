import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { AuthModule } from './auth/auth.module';
import { MealModule } from './meal/meal.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    RestaurantsModule,
    AuthModule,
    MealModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
