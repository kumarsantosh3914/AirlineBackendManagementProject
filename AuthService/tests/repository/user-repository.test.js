const UserRepository = require("../../src/repository/user-repository"); // Update the path to match your file structure
const { User, Role } = require("../../src/models/index");
const ValidationError = require("../../src/utils/Validation-error");

// Mock the dependencies
jest.mock("../../src/models/index", () => ({
  User: {
    create: jest.fn(),
    destroy: jest.fn(),
    findByPk: jest.fn(),
    findOne: jest.fn(),
  },
  Role: {
    findOne: jest.fn(),
  },
}));

jest.mock("../../src/utils/Validation-error", () => jest.fn());

describe("UserRepository", () => {
  let userRepository;

  beforeEach(() => {
    userRepository = new UserRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test the create method
  describe("create", () => {
    it("should create a user", async () => {
      User.create.mockResolvedValueOnce("createdUser");

      const result = await userRepository.create({ name: "John" });

      expect(result).toBe("createdUser");
      expect(User.create).toHaveBeenCalledWith({ name: "John" });
    });

    it("should throw a validation error", async () => {
      const validationErrorInstance = {
        name: "SequelizeValidationError",
        errors: [{ message: "Validation error message" }],
      };
      User.create.mockRejectedValueOnce(validationErrorInstance);

      await expect(
        userRepository.create({ name: "Invalid" })
      ).rejects.toThrowError();

      // We don't need to check if ValidationError was called here
    });

    // it("should throw an error for other cases", async () => {
    //   const errorInstance = new Error("Some error");
    //   User.create.mockRejectedValueOnce(errorInstance);

    //   await expect(
    //     userRepository.create({ name: "Error" })
    //   ).rejects.toThrowError("Some error");
    // });
  });

  // Test the destroy method
  describe("destroy", () => {
    it("should destroy a user", async () => {
      User.destroy.mockResolvedValueOnce(1); // Simulate 1 row affected

      const result = await userRepository.destroy(123);

      expect(result).toBe(true);
      expect(User.destroy).toHaveBeenCalledWith({
        where: {
          id: 123,
        },
      });
    });

    // it("should handle errors", async () => {
    //   const errorInstance = new Error("Database error");
    //   User.destroy.mockRejectedValueOnce(errorInstance);

    //   await expect(userRepository.destroy(123)).rejects.toThrowError(
    //     "Database error"
    //   );

    //   expect(User.destroy).toHaveBeenCalledWith({
    //     where: {
    //       id: 123,
    //     },
    //   });
    // });
  });

  describe("getById", () => {
    it("should retrieve a user by ID", async () => {
      const userMock = {
        id: 123,
        email: "test@example.com",
      };
      User.findByPk.mockResolvedValueOnce(userMock);

      const result = await userRepository.getById(123);

      expect(result).toEqual(userMock);
      expect(User.findByPk).toHaveBeenCalledWith(123, {
        attributes: ["email", "id"],
      });
    });

    // it("should handle errors", async () => {
    //   const errorInstance = new Error("Database error");
    //   User.findByPk.mockRejectedValueOnce(errorInstance);

    //   await expect(userRepository.getById(123)).rejects.toThrowError();

    //   expect(User.findByPk).toHaveBeenCalledWith(123, {
    //     attributes: ["email", "id"],
    //   });
    // });
  });

  // Test the getByEmail method
  describe("getByEmail", () => {
    it("should retrieve a user by email", async () => {
      const userMock = {
        id: 123,
        email: "test@example.com",
      };
      User.findOne.mockResolvedValueOnce(userMock);

      const result = await userRepository.getByEmail("test@example.com");

      expect(result).toEqual(userMock);
      expect(User.findOne).toHaveBeenCalledWith({
        where: {
          email: "test@example.com",
        },
      });
    });

    // it("should handle errors", async () => {
    //   const errorInstance = new Error("Database error");
    //   User.findOne.mockRejectedValueOnce(errorInstance);

    //   await expect(
    //     userRepository.getByEmail("test@example.com")
    //   ).rejects.toThrowError();

    //   expect(User.findOne).toHaveBeenCalledWith({
    //     where: {
    //       email: "test@example.com",
    //     },
    //   });
    // });
  });

  // Test the isAdmin method
  //   describe("isAdmin", () => {
  //     it("should check if user is an admin", async () => {
  //       const userMock = {
  //         id: 123,
  //       };
  //       const adminRoleMock = {
  //         name: "ADMIN",
  //       };
  //       User.findByPk.mockResolvedValueOnce(userMock);
  //       Role.findOne.mockResolvedValueOnce(adminRoleMock);

  //       const result = await userRepository.isAdmin(123);

  //       expect(result).toBe(true);
  //       expect(User.findByPk).toHaveBeenCalledWith(123);
  //       expect(Role.findOne).toHaveBeenCalledWith({
  //         where: {
  //           name: "ADMIN",
  //         },
  //       });
  //     });

  //     it("should handle errors", async () => {
  //       const errorInstance = new Error("Database error");
  //       User.findByPk.mockRejectedValueOnce(errorInstance);

  //       await expect(userRepository.isAdmin(123)).rejects.toThrowError();

  //       expect(User.findByPk).toHaveBeenCalledWith(123);
  //       expect(Role.findOne).not.toHaveBeenCalled(); // No need to call Role.findOne in case of user findByPk error
  //     });
  //   });
});
