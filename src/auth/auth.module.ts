import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { authOptions } from '../config/auth.config';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ConfigModule.forFeature(authOptions),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
})
export class AuthModule {}
