import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLesson1611019659226 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "lesson",
        columns: [
          {
            name: 'id',
            type: 'varchar'
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default:'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default:'now()'
          }
        ]
      }
    ))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('lesson')
  }

}
