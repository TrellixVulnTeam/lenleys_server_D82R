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
      "subcategoryitems",
      [
        {
          id: 1,
          name: "In stocks",
          categoryID: 1,
          subCategoryID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Sofa collections",
          categoryID: 1,
          subCategoryID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Fabric sofas",
          categoryID: 1,
          subCategoryID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Leather sofas",
          categoryID: 1,
          subCategoryID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Sofas beds",
          categoryID: 1,
          subCategoryID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "Chairs",
          categoryID: 1,
          subCategoryID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: "Footstools",
          categoryID: 1,
          subCategoryID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 8,
          name: "Parker Knoll",
          categoryID: 1,
          subCategoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name: "Collins & Hayes",
          categoryID: 1,
          subCategoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          name: "Footstools",
          categoryID: 1,
          subCategoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          name: "Stressless",
          categoryID: 1,
          subCategoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          name: "G plan",
          categoryID: 1,
          subCategoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          name: "Himolla",
          categoryID: 1,
          subCategoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          name: "ercol",
          categoryID: 1,
          subCategoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          name: "Celebrity",
          categoryID: 1,
          subCategoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          name: "Alexander & James",
          categoryID: 1,
          subCategoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          name: "Orla kiely",
          categoryID: 1,
          subCategoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          name: "SITS",
          categoryID: 1,
          subCategoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 19,
          name: "In stock",
          categoryID: 2,
          subCategoryID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          name: "Divan beds",
          categoryID: 2,
          subCategoryID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          name: "Mattresses",
          categoryID: 2,
          subCategoryID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22,
          name: "Headboards",
          categoryID: 2,
          subCategoryID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 23,
          name: "Bedsteads",
          categoryID: 2,
          subCategoryID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 24,
          name: "Sofa beds",
          categoryID: 2,
          subCategoryID: 3,
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
  },
};
