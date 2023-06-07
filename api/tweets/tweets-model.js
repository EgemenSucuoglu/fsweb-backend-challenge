const db = require("../../data/db-config");

async function getAll() {
  const tweets = await db("tweets").select("*");
  return tweets;
}

async function getById(tweet_id) {
  return db("tweets").where("tweet_id", tweet_id).first();
}
async function add(post) {
  const tweetIdArray = await db("tweets").insert(post);
  const tweetId = tweetIdArray[0];
  const newTweet = await db("tweets").where("tweet_id", tweetId).first();
  return newTweet;
}
async function update(tweet_id, changes) {
  const updatedCount = await db("tweets")
    .where("tweet_id", tweet_id)
    .update(changes);

  if (updatedCount > 0) {
    const updatedTweet = await getById(tweet_id);
    return updatedTweet;
  } else {
    throw new Error("Tweet not found");
  }
}
async function remove(tweet_id) {
  return db("tweets").where("tweet_id", tweet_id).del();
}
module.exports = {
  getAll,
  getById,
  add,
  update,
  remove,
};
