/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("likes").truncate();
  await knex("comments").truncate();
  await knex("tweets").truncate();
  await knex("users").truncate();

  await knex("users").insert([
    {
      username: "Egemen",
      password: 1234,
      email: "Egemen@gma.com",
      location: "İstanbul",
      signup_date: "05/01/2023",
    },
    {
      username: "Senem",
      password: 1234,
      email: "senem@gma.com",
      location: "Ankara",
      signup_date: "08/12/2023",
    },
    {
      username: "Süleyman",
      password: 1234,
      email: "süleyman@gma.com",
      location: "Kadıköy",
      signup_date: "09/12/2023",
    },
    {
      username: "Deniz",
      password: 1234,
      email: "deniz@gma.com",
      location: "Kadıköy",
      signup_date: "11/01/2023",
    },
    {
      username: "Karen",
      password: 1234,
      email: "karen@gma.com",
      location: "Kadıköy",
      signup_date: "05/08/2023",
    },
    {
      username: "Sam",
      password: 1234,
      email: "sam@gma.com",
      location: "Kadıköy",
      signup_date: "19/06/2023",
    },
    {
      username: "Mali",
      password: 1234,
      email: "mali@gma.com",
      location: "Toronto",
      signup_date: "02/10/2023",
    },
    {
      username: "Kayra",
      password: 1234,
      email: "kayra@gma.com",
      location: "Kadıköy",
      signup_date: "15/11/2023",
    },
    {
      username: "Fatih",
      password: 1234,
      email: "fatih@gma.com",
      location: "Kadıköy",
      signup_date: "31/12/2023",
    },
    {
      username: "Micheal",
      password: 1234,
      email: "micheal@gma.com",
      location: "kartal",
      signup_date: "15/08/2023",
    },
  ]);
  await knex("tweets").insert([
    {
      title: "hey world",
      content: "This is my message",
      location: "Kocaeli",
      tweet_date: "01/01/2023",
      user_id: 1,
    },
    {
      title: "This is my message",
      content: "This is my message",
      location: "Toronto",
      tweet_date: "04/12/2023",
      user_id: 2,
    },
    {
      title: "This is my message",
      content: "This is my message",
      location: "Kadıköy",
      tweet_date: "04/12/2023",
      user_id: 3,
    },
    {
      title: "hiiii!",
      content: "this is my message",
      location: "Kadıköy",
      tweet_date: "11/01/2023",
      user_id: 4,
    },
    {
      title: "This is my message",
      content: "This is my message",
      location: "Kadıköy",
      tweet_date: "05/08/2023",
      user_id: 5,
    },
    {
      title: "This is my message",
      content: "This is my message",
      location: "Kadıköy",
      tweet_date: "19/06/2023",
      user_id: 6,
    },
    {
      title: "This is my message",
      content: "This is my message",
      location: "Toronto",
      tweet_date: "02/10/2023",
      user_id: 7,
    },
    {
      title: "This is my message",
      content: "This is my message",
      location: "Kadıköy",
      tweet_date: "15/08/2023",
      user_id: 10,
    },
  ]);
  await knex("comments").insert([
    {
      content: "this is my message",
      comment_date: "01/01/2023",
      location: "Kocaeli",
      tweet_id: 2,
      user_id: 1,
    },
    {
      content: "message",
      comment_date: "02/01/2023",
      location: "Toronto",
      tweet_id: 2,
      user_id: 2,
    },
  ]);
  await knex("likes").insert([
    {
      like: "up",
      like_date: "02/01/2023",
      tweet_id: 1,
      user_id: 2,
    },
    {
      like: "up",
      like_date: "02/01/2023",
      tweet_id: 2,
      user_id: 2,
    },
    {
      like: "up",
      like_date: "02/01/2023",
      tweet_id: 3,
      user_id: 2,
    },
  ]);
};
