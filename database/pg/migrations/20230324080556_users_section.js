/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  // await knex.schema
  // .raw('DROP TYPE acc_status;')
  await knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .dropTableIfExists('users_section')
    .createTable('users_section', function (table) {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('u_name').notNullable();
      table.string('u_email').unique().notNullable();
      table.string('u_password').notNullable();
      table.string('u_phone').notNullable();
      table.string('u_tokens');
      table.boolean('u_validation').notNullable().defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).defaultTo(null);
    });

  return true
};

exports.down = async function (knex) {
  return await knex.schema
    .dropTableIfExists('users_section');
};
