import { JwtGuard } from './../auth/guard';
import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { GetUser } from './../auth/decorator';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  // @Patch()
  // editUser(@GetUser() user: User) {

  // }
}
