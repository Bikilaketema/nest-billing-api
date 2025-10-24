import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({
    description: 'The email and password for the new user.',
    type: RegisterDto,
  })
  @ApiResponse({
    status: 201,
    description: 'User successfully registered. Returns the new user object and an access token.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request. Validation failed.' })
  @ApiResponse({ status: 409, description: 'Conflict. Email already in use.' })

  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}

