const db = require("../../data/db-config");

async function getAll() {
  const comments = await db("comments")
    .leftJoin("users", "user.user_id", "comments.user_id")
    .leftJoin("tweets", "tweets.tweets_id", "comments.tweet_id")
    .select("comments.*", "users.*", "tweets.tweet_id");
  return comments;
}

async function getBy(filter) {
  const result = await db("comments").where(filter).first(); //object
  return result;
}
async function getById(comment_id) {
  const result = await db("comments").where("comment_id", comment_id).first();
  return result;
}
async function add(comment) {
  const commentIdArray = await db("comments").insert(comment);
  const commentId = commentIdArray[0];
  const result = await db("comments").where("comment_id", commentId).first();
  return result;
}
module.exports = {
  getAll,
  getBy,
  add,
  getById,
};
