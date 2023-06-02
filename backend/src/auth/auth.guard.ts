import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    const refresh = request.headers.refresh;

    let isValid = false;

    if (token || refresh) {
      const getJwtToken = refresh ? refresh : token;
      try {
        const payload = await this.jwtService.verifyAsync(getJwtToken, {
          secret: process.env.SECRET_KEY,
        });

        request['user'] = payload;
        isValid = true;
      } catch {
        throw new UnauthorizedException();
      }
    }

    if (!isValid) throw new UnauthorizedException();

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    return type === 'Bearer' ? token : undefined;
  }
}
