import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('clases_schedule',table => {
        table.increments("id").primary();
        
        table.integer('wek_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('clases')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('clases_schedule');
}

