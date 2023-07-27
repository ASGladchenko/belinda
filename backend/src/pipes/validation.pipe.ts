import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import {
  Injectable,
  HttpStatus,
  PipeTransform,
  HttpException,
  ArgumentMetadata,
} from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    if (metadata.type !== 'body') {
      return value;
    }

    const obj = plainToClass(metadata.metatype, value);

    const errors = await validate(obj);

    if (errors.length > 0) {
      const message = errors.map(
        (err) =>
          `${err.property} - ${Object.values(err.constraints).join(', ')}`,
      );
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: message,
          error: 'Bad request',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return value;
  }
}
