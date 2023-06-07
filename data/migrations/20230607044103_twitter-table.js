/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments("user_id");
      tbl.string("username", 64).unique().notNullable();
      tbl.string("password", 128).notNullable();
      tbl.string("email").unique().notNullable();
      tbl.string("location").notNullable();
      tbl.timestamp("signup_date").notNullable();
    })
    .createTable("tweets", (tbl) => {
      tbl.increments("tweet_id");
      tbl.string("title", 128).notNullable();

      tbl
        .string("content", 512)

        .notNullable();
      tbl.string("location").notNullable();
      tbl.timestamp("tweet_date").notNullable();

      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("comments", (tbl) => {
      tbl.increments("comment_id");
      tbl.string("content");
      tbl.timestamp("comment_date").notNullable();
      tbl.string("location").notNullable();
      tbl
        .integer("tweet_id")
        .unsigned()
        .references("tweet_id")
        .inTable("tweets")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl
        .integer("user_id")
        .unsigned()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("likes", (tbl) => {
      tbl.increments("like_id");
      tbl.string("like");
      tbl.timestamp("like_date").notNullable();
      tbl
        .integer("tweet_id")
        .unsigned()
        .notNullable()
        .references("tweet_id")
        .inTable("tweets")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl
        .integer("user_id")
        .unsigned()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("likes")
    .dropTableIfExists("comments")
    .dropTableIfExists("tweets")
    .dropTableIfExists("users");
};
