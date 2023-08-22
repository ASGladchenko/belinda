import { MigrationInterface, QueryRunner } from 'typeorm';

export class Auto1691582218720 implements MigrationInterface {
  name = 'Auto1691582218720';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "products" ADD "months" text array`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "months"`);
  }
}
