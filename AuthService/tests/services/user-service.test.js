const UserService = require("../../src/services/user-service"); // Update the path to match your file structure
const UserRepository = require("../../src/repository/user-repository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

jest.mock("../../src/repository/user-repository", () => {
  return {
    create: jest.fn(),
    getByEmail: jest.fn(),
    getById: jest.fn(),
    isAdmin: jest.fn(),
  };
});

jest.mock("jsonwebtoken", () => {
  return {
    sign: jest.fn(),
    verify: jest.fn(),
  };
});

jest.mock("bcrypt", () => {
  return {
    compareSync: jest.fn(),
    genSalt: jest.fn().mockReturnValue("mocked-salt"),
  };
});

describe("UserService", () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test the create method
  describe("create", () => {
    it("should create a user", async () => {
      UserRepository.create.mockResolvedValueOnce({
        id: 1,
        email: "admin@example.com",
      });

      const result = await userService.create({
        email: "admin@example.com",
        password: "password",
      });

      expect(result).toEqual({ id: 1, email: "admin@example.com" });
      expect(UserRepository.create).toHaveBeenCalledWith({
        email: "admin@example.com",
        password: "password",
      });
    });

    it("should handle validation error", async () => {
      UserRepository.create.mockRejectedValueOnce({
        name: "SequelizeValidationError",
      });

      await expect(
        userService.create({ email: "admin@example.com", password: "password" })
      ).rejects.toThrowError();
      expect(UserRepository.create).toHaveBeenCalledWith({
        email: "admin@example.com",
        password: "password",
      });
    });

    it("should handle other errors", async () => {
      UserRepository.create.mockRejectedValueOnce(new Error("Database error"));

      await expect(
        userService.create({ email: "admin@example.com", password: "password" })
      ).rejects.toThrowError();
      expect(UserRepository.create).toHaveBeenCalledWith({
        email: "admin@example.com",
        password: "password",
      });
    });
  });

  // Test other methods...
});
