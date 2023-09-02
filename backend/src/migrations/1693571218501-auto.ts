import { MigrationInterface, QueryRunner } from 'typeorm';

export class Auto1693571218501 implements MigrationInterface {
  name = 'Auto1693571218501';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name_en" character varying NOT NULL, "name_ua" character varying NOT NULL, "description_en" character varying, "description_ua" character varying, "img_url" character varying, "months" text array, "category_id" uuid, CONSTRAINT "UQ_aed9a569a2d7b3bc3be80555f5c" UNIQUE ("name_en"), CONSTRAINT "UQ_8c670e30af496fb5db7dc2bf92e" UNIQUE ("name_ua"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name_en" character varying NOT NULL, "name_ua" character varying NOT NULL, CONSTRAINT "UQ_c861ed65e9f01d9d535f6bba14d" UNIQUE ("name_en"), CONSTRAINT "UQ_3cd4c8d67736ba3481f67cf0119" UNIQUE ("name_ua"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "role" character varying NOT NULL, "password" character varying NOT NULL, "refresh_token" character varying, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "FK_9a5f6868c96e0069e699f33e124" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "FK_9a5f6868c96e0069e699f33e124"`,
    );
    await queryRunner.query(`DROP TABLE "roles"`);
    await queryRunner.query(`DROP TABLE "categories"`);
    await queryRunner.query(`DROP TABLE "products"`);
  }
}
