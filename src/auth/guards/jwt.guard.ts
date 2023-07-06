import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export class JwtGuard extends AuthGuard() {
  constructor() {
    super();
  }

  handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: ExecutionContext,
    status?: any,
  ): TUser {
    const authInfo = context.switchToHttp().getRequest()['authInfo'];
    if (authInfo) {
      throw new UnauthorizedException('Invalid Token');
    }

    return super.handleRequest(err, user, info, context, status);
  }
}
