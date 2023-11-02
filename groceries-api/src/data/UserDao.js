import { selectData, selectDataWithParms, insertData } from "./Database.js";
import GroceryItem from "../model/GroceryItem.js";
import Category from "../model/Category.js";
import StorageArea from "../model/StorageArea.js";

class UserDao {
  // set sql query and call Database.js query function
  async getUserData(id) {
    // define query string
    const sql =
      "SELECT sa.storage_id, sa.storage_name, c.category_id, c.category_name, gi.grocery_item_id, gi.name, gi.item_duration, gi.purchase_date " +
      "FROM users u " +
      "LEFT JOIN user_storage_areas usa ON u.user_id = usa.user_id " +
      "LEFT JOIN storage_areas sa ON usa.storage_id = sa.storage_id " +
      "LEFT JOIN storage_area_categories sac ON sa.storage_id = sac.storage_id " +
      "LEFT JOIN categories c ON sac.category_id = c.category_id " +
      "LEFT JOIN category_grocery_items cgi ON c.category_id = cgi.category_id " +
      "LEFT JOIN grocery_items gi ON cgi.grocery_item_id = gi.grocery_item_id " +
      "WHERE u.user_id = ?" +
      "GROUP BY sa.storage_id, sa.storage_name, c.category_id, c.category_name, gi.grocery_item_id, gi.name, gi.item_duration, gi.purchase_date";

    // call async Database.js function to query the database
    let userData = await selectDataWithParms(sql, [id]);

    // format the data returned by Database
    userData = formatResults(userData);

    // return formatted data
    return userData;
  }

  async getAllUsers() {
    return "all users";
  }
}

// helper function to format query results
// TODO: is this function private to this file if not exported??
function formatResults(data) {
  console.log("private helper function");

  const storageAreas = {};

  // for each row/item in the result array
  data
  .filter(item => item.category_id !== null) 
  .forEach((item) => {
    const storageId = item.storage_id;
    const categoryId = item.category_id;

    if (!storageAreas[storageId]) {
      storageAreas[storageId] = new StorageArea(storageId, item.storage_name);
    }

    const storage = storageAreas[storageId];

    if (!storage.categories[categoryId]) {
      storage.categories[categoryId] = new Category(
        categoryId,
        item.category_name
      );
    }

    const category = storage.categories[categoryId];

    const groceryItem = new GroceryItem(
      item.grocery_item_id,
      item.name,
      item.item_duration,
      item.purchase_date
    );

    category.addItem(groceryItem);
  });

  const result = Object.values(storageAreas);
  return result;
}

export default UserDao;
