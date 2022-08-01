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
      "subcategories",
      [
        {
          id: 1,
          name: "All sofas & chairs",
          categoryID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Shop by brand",
          categoryID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "All beds",
          categoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "All bedroom",
          categoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Shop by brand",
          categoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "All dining",
          categoryID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: "Shop by brand",
          categoryID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: "All living room",
          categoryID: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name: "Shop by brand",
          categoryID: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          name: "Flooring design studio",
          categoryID: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          name: "Style studio",
          categoryID: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          name: "All accessories",
          categoryID: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
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
    await queryInterface.bulkDelete("subcategories", null, {});
  },
};
