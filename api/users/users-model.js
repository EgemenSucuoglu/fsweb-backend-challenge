const db = require("../../data/db-config");

async function getAllUsers() {
  const users = await db("users").select("*");
  return users;
}
async function getById(user_id) {
  const user = await db("users").where({ user_id: user_id }).first();
  return user;
}
async function findByFilter(filter) {
  return db("users").where(filter).select("*").first();
}
async function findById(user_id) {
  return db("users")
    .select("user_id", "username")
    .where("user_id", user_id)
    .first();
}
async function addUser(user) {
  const [user_id] = await db("users").insert(user);
  return await findById(user_id);
}
async function updateUser(user, user_id) {
  await db("users").where("user_id", user_id).update(user);
  return findById(user_id);
}
async function deleteUser(user_id) {
  return db("users").where("user_id", user_id).delete();
}

module.exports = {
  getAllUsers,
  findByFilter,
  addUser,
  getById,
  findById,
  updateUser,
  deleteUser,
};
