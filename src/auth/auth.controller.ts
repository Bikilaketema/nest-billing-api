import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { Public } from './decorators/public.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
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
  
  @Public()
  @Post('login')
  @ApiOperation({ summary: 'Log in a user' })
  @ApiBody({
    description: 'The email and password of the user.',
    type: LoginDto,
  })
  @ApiResponse({
    status: 200,
    description: 'User successfully logged in. Returns an access token.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. Invalid credentials.',
  })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}

