import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PaymentsModule } from './payments/payments.module';
import { SusbscriptionsModule } from './susbscriptions/susbscriptions.module';
import * as crypto from 'crypto';
(global as any).crypto = crypto;


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
      }),
    }),

    UsersModule,

    AuthModule,

    PaymentsModule,

    SusbscriptionsModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}