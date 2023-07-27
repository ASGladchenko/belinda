import { DeepPartial, Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class DuplicateService {
  async check<T>(
    repository: Repository<T>,
    fields: DeepPartial<T>,
    id: string = null,
  ): Promise<boolean> {
    const entityName = repository.metadata.name;

    const whereClauses = Object.keys(fields).map((field) => {
      if (id) {
        return `${entityName}.${field} = :${field} AND ${entityName}.id != :id`;
      }

      return `${entityName}.${field} = :${field}`;
    });

    const existEntity = await repository
      .createQueryBuilder(entityName)
      .where(whereClauses.join(' OR '), {
        ...fields,
        id,
      })
      .getOne();

    if (existEntity) {
      const duplicatedFields = Object.keys(fields).filter(
        (field) => existEntity[field] === fields[field],
      );

      const errorMessage = duplicatedFields
        .map((field) => {
          return `${field}: ${fields[field]}`;
        })
        .join(', ');

      throw new HttpException(
        `${errorMessage} already exists.`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return true;
  }
}
