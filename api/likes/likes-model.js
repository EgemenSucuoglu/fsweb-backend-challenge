const db = require("../../data/db-config");

async function getAll() {
  const likes = await db("likes").select("*");
  return likes;
}

async function getBy(filter) {
  const result = await db("likes").where(filter).first();
  return result;
}

async function getById(like_id) {
  const result = await db("likes").where("like_id", like_id).first();
  return result;
}

function getCurrentUserLike(user_id) {
  const result = db("likes").where("user_id", user_id);
  return result;
}
async function add(like) {
  const likeIdArray = await db("likes").insert(like);
  const likeId = likeIdArray[0];
  const newLike = await db("likes").where("like_id", likeId).first();
  return newLike;
}

async function remove(like_id) {
  return db("likes").where("like_id", like_id).del();
}
module.exports = {
  getAll,
  getBy,
  add,
  getById,
  remove,
  getCurrentUserLike,
};
