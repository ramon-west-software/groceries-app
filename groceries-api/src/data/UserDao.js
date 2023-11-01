// import ConnectionRequest from "./ConnectionRequest.js";

import {
  selectData,
  selectDataWithParms,
  insertData,
} from "./ConnectionRequest.js";

class UserDao {


  async getUserData(id) {
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
      "group by sa.storage_id, sa.storage_name, c.category_id, c.category_name, gi.grocery_item_id, gi.name, gi.item_duration, gi.purchase_date";

    const userData = await selectDataWithParms(sql, [id]);
    
    return userData;
  }

  async getAllUsers() {
    return "all users";
  }
}

export default UserDao;
