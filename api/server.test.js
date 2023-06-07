const request = require("supertest");
const server = require("./server");
const db = require("../data/db-config");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("API END POINT TESTLERI", () => {
  describe("[GET] /", () => {
    test("[1] not found mesajını geri dönüyor", async () => {
      const res = await request(server).get("/");
      expect(res.body).toMatchObject({ message: "server not found" });
      expect(res.status).toBe(404);
    });
  });
  describe("[POST] /api/auth", () => {
    test("[2] register olunca doğru status kodu dönüyor", async () => {
      const register = {
        name: "Ayşe",
        email: "Ayşe@Ayşe.com",
        password: "1234",
      };
      const res = await request(server)
        .post("/api/auth/register")
        .send(register);
      expect(res.status).toBe(201);
    });
  });

  test("[3] login olunca doğru status kodu dönüyor", async () => {
    const login = {
      name: "EgemenSucuoglu",
      password: "1234",
    };
    const res = await request(server).post("/api/auth/login").send(login);
    expect(res.status).toBe(400);
  });
});
