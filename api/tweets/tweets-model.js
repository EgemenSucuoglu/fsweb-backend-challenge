const db = require("../../data/db-config");

async function getAll() {
  const tweets = await db("tweets")
    .leftJoin("users", "user.user_id", "tweets.user_id")
    .select("tweets.*", "users.*");
  return tweets;
}

async function getBy(filter) {
  const result = await db("tweets").where(filter).first(); //object
  return result;
}
async function add(post) {
  const tweetIdArray = await db("tweets").insert(post);
  const tweetId = tweetIdArray[0];
  const newTweet = await db("tweets").where("tweet_id", tweetId).first();
  return newTweet;
}
async function update(tweet_id, changes) {
  return db("tweets").where("tweet_id", tweet_id).update(changes);
}
async function remove(tweet_id) {
  return db("tweets").where("tweet_id", tweet_id).del();
}
module.exports = {
  getAll,
  getBy,
  add,
  update,
  remove,
};
