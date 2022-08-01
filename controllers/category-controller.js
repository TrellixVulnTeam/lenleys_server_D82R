const { Category } = require("../models");
const { sequelize } = require("../models");

// const getCategoryList = async (req, res) => {
//   try {
//     const [results] = await sequelize.query(
//       `
//       select  categories.id as navID ,  categories.name as nav , subcategories.id as subNavID , subcategories.name as subNavTitle , subcategoryitems.name as subNavItem from lenleys_database.categories
//       inner join lenleys_database.subcategories
//       on subcategories.categoryID = categories.id
//       inner join lenleys_database.subcategoryitems
//       on subcategoryitems.subCategoryID = subcategories.id
//       `
//     );

//     const handleFormatResult = (results) => {
//       const originArr = [...results];
//       const resultsArr = originArr
//         .map((originNavData) => {
//           const { navID, nav, subNavID, subNavTitle, subNavItem } =
//             originNavData;
//           return {
//             navID,
//             nav,
//             subNav: [
//               {
//                 subNavID,
//                 data: {
//                   title: subNavTitle,
//                   items: [subNavItem],
//                 },
//               },
//             ],
//           };
//         })
//         .reduce((resultNavArr, currentNavData, currentIndex) => {
//           if (currentIndex === 0) {
//             // ? Khởi tạo giá trị đầu tiên
//             const firstResultNavItem = {
//               id: currentNavData.navID,
//               nav: currentNavData.nav,
//               subNav: [
//                 {
//                   id: currentNavData.subNav[0].subNavID,
//                   data: {
//                     title: currentNavData.subNav[0].data.title,
//                     items: [currentNavData.subNav[0].data.items[0]],
//                   },
//                 },
//               ],
//             };
//             resultNavArr.push(firstResultNavItem);
//           } else if (currentIndex > 0) {
//             for (let index = 0; index < resultNavArr.length; index++) {
//               // * Check id
//               // ? Nếu cùng id thì check tiếp subNav
//               if (currentNavData.navID === resultNavArr[index].id) {
//                 // ? Tạo một list các subNav id đã tồn tại trong resultSubNavArr
//                 const subNavIDList = [];
//                 // ? Add tất cả subNavID vào list để check vs currentSubNav
//                 resultNavArr.forEach((resultNavItem) => {
//                   const currentResultSubNavID = resultNavItem.subNav[0].id;
//                   // ? Kiểm tra id có tồn tại trong list hay chưa
//                   const isSubNavIDExists = subNavIDList.includes(
//                     currentResultSubNavID
//                   );
//                   if (!isSubNavIDExists) {
//                     // ? Nếu chưa -> add new
//                     // todo: Check item is exists or not
//                     subNavIDList.push(currentResultSubNavID);
//                   }
//                 });
//                 // ? Check subNav đã tồn tại trong resultArr hay chưa
//                 const currentSubNavID = currentNavData.subNav[0].subNavID;
//                 // ? Nếu khác id thì add new Cateory
//               }
//               // ? Nếu khác id -> create new
//               else {
//                 const newItem = {
//                   id: currentNavData.navID,
//                   nav: currentNavData.nav,
//                   subNav: [
//                     {
//                       id: currentNavData.subNav[0].subNavID,
//                       data: {
//                         title: currentNavData.subNav[0].data.title,
//                         items: [currentNavData.subNav[0].data.items[0]],
//                       },
//                     },
//                   ],
//                 };
//                 // ? Check xem category đã tồn tại hay chưa
//                 const currentNewCetegoryIndex = resultNavArr.findIndex(
//                   (resultNavItem) =>
//                     resultNavItem.id === currentNavData.subNav[0].subNavID
//                 );
//                 if (currentNewCetegoryIndex !== -1) {
//                   // ? Đã tồn tại -> Check tiếp subNav
//                 } else {
//                   // ? Chưa tồn tại -> Add
//                   resultNavArr.push(newItem);
//                 }
//               }
//             }
//           }

//           return resultNavArr;
//         }, []);
//       // .reduce((resultNavArr, navData, resultNavArrIndex) => {
//       //   if (resultNavArrIndex === 0) {
//       //     const firstItem = {
//       //       id: navData.navID,
//       //       nav: navData.nav,
//       //       subNav: [...navData.subNav],
//       //     };
//       //     resultNavArr.push(firstItem);
//       //   } else {
//       //     for (let index = 0; index < resultNavArr.length; index++) {
//       //       // ? Tạo ra list để lưu các subNavID đã tồn tại ( index - id )
//       //       const resultSubNavIDList = [];
//       //       // ? Nếu = id => Cùng category => Tìm vị trị subCategory id
//       //       if (resultNavArr[index].id === navData.navID) {
//       //         // ? Thêm các id của resultNavArr vào List để check currentNavId có thuộc subCategory đó hay không
//       //         resultNavArr[index].subNav.forEach(
//       //           ({ subNavID }, subNavIndex) => {
//       //             resultSubNavIDList.push({
//       //               subNavID,
//       //               subNavIndex,
//       //             });
//       //           }
//       //         );
//       //         const currentSubNavID = navData.subNav[0].subNavID;
//       //         const currentResultSubNavIndex = resultSubNavIDList.findIndex(
//       //           ({ subNavID }) => subNavID === currentSubNavID
//       //         );
//       //         // ? Nếu is = true => Cùng subNav
//       //         if (currentResultSubNavIndex !== -1) {
//       //           resultNavArr[index].subNav[
//       //             currentResultSubNavIndex
//       //           ].data.items.push(navData.subNav[0].data.items[0]);
//       //         } else {
//       //           const newSubCategory = navData.subNav[0];
//       //           resultNavArr[index].subNav.push(newSubCategory);
//       //         }
//       //       } else {
//       //         // ? Nếu != id => Khác category
//       //         const newResultItem = {
//       //           id: navData.navID,
//       //           nav: navData.nav,
//       //           subNav: [...navData.subNav],
//       //         };
//       //         resultNavArr.push(newResultItem);
//       //       }
//       //     }
//       //   }
//       //   return resultNavArr;
//       // }, []);
//       return resultsArr;
//     };

//     res.status(200).send(handleFormatResult(results));
//     // res.status(200).send(results);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

const getCategoryList = async (req, res) => {
  try {
    const categoryList = await Category.findAll();
    res.status(200).send(categoryList);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const oldCategory = await Category.findOne({
      where: {
        name,
      },
    });
    if (oldCategory) {
      res.status(404).send("Category is already exists!");
    } else {
      const newCategory = { name };
      await Category.create(newCategory);
      res
        .status(201)
        .send(`Create category success - ${JSON.stringify(newCategory)}`);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {
  getCategoryList,
  createCategory,
};
