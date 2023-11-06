import { selectData, selectDataWithParms, insertData } from "./Database.js";

class UserDao {
  // set sql query and call Database.js query function
  async getUserData(id) {
    // define query string
    // note - MySql lets us return a JSON object using JSON_OBJECT function, meaning we don't need a helper function to format the result set
    const sql = `
      SELECT 
          JSON_ARRAYAGG(
              JSON_OBJECT(
                  'storageId', sa.storage_id,
                  'name', sa.storage_name,
                  'categories', (
                      SELECT JSON_ARRAYAGG(
                          JSON_OBJECT(
                              'categoryId', c.category_id,
                              'name', c.category_name,
                              'items', (
                                  SELECT JSON_ARRAYAGG(
                                      JSON_OBJECT(
                                          'itemId', gi.grocery_item_id,
                                          'name', gi.name,
                                          'duration', gi.item_duration,
                                          'purchaseDate', gi.purchase_date
                                      )
                                  ) 
                                  FROM category_grocery_items cgi
                                  LEFT JOIN grocery_items gi ON cgi.grocery_item_id = gi.grocery_item_id
                                  WHERE cgi.category_id = c.category_id 
                              )
                          )
                      )
                      FROM storage_area_categories sac
                      LEFT JOIN categories c ON c.category_id = sac.category_id
                      WHERE sac.storage_id = sa.storage_id
                  )
              )
          ) as storageAreas
      
      FROM users u
      LEFT JOIN user_storage_areas usa ON u.user_id = usa.user_id
      LEFT JOIN storage_areas sa ON usa.storage_id = sa.storage_id
      WHERE u.user_id = ?;
      `;

      const sqlQuery = `
      SELECT 
        JSON_OBJECT(
            'userId', u.user_id,
            'name', u.user_name,
            'storageAreas', ( SELECT
                JSON_ARRAYAGG(
                    JSON_OBJECT(
                        'storageId', sa.storage_id,
                        'storageName', sa.storage_name,
                        'categories', (
                            SELECT JSON_ARRAYAGG(
                                JSON_OBJECT(
                                    'categoryId', c.category_id,
                                    'categoryName', c.category_name,
                                    'groceryItems', (
                                        SELECT JSON_ARRAYAGG(
                                            JSON_OBJECT(
                                                'groceryItemId', gi.grocery_item_id,
                                                'name', gi.name,
                                                'itemDuration', gi.item_duration,
                                                'purchaseDate', gi.purchase_date
                                            )
                                        ) 
                                        FROM category_grocery_items cgi
                                        LEFT JOIN grocery_items gi ON cgi.grocery_item_id = gi.grocery_item_id
                                        WHERE cgi.category_id = c.category_id 
                                    )
                                )
                            )
                            FROM storage_area_categories sac
                            LEFT JOIN categories c ON c.category_id = sac.category_id
                            WHERE sac.storage_id = sa.storage_id
                        )
                    )
                ) 
            FROM user_storage_areas usa
            LEFT JOIN storage_areas sa ON usa.storage_id = sa.storage_id
            WHERE usa.user_id = u.user_id
            )
        ) as userData
        FROM users u
        where u.user_id = ?;`;
    

    // call the Database.js function to query sql with paramater array
    let userData = await selectDataWithParms(sqlQuery, [id]);
    return userData;
  }

  async getAllUsers() {
    return "all users";
  }
}

export default UserDao;
