"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          orderID: null,
          type: "admin",
          firstName: "Tuấn",
          lastName: "Trần",
          address: "Hồ Chí Minh city",
          email: "tuantran@gmail.com",
          phoneNumber: "0987654321",
          password: "@15072022@Abc",
          createdAt: "2022-07-15 05:29:55",
          updatedAt: "2022-07-15 05:29:55",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
