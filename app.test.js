import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "./app.js";

describe("API", () => {
  it("responde Olá Mundo na rota principal", async () => {
    const resposta = await request(app).get("/");
    expect(resposta.status).toBe(200);
    expect(resposta.text).toBe("Olá Mundo");
  });
});