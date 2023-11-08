import { FC } from "react";
import GroceryItemComponent from "./GroceryItemComponent";
import { Category } from "./Interfaces";



interface ContentProps {
  data: Category[];
}

const Content: FC<ContentProps> = ({ data }) => {
  return (
    <>
      {data && Array.isArray(data) && data.map((category, index) => (
        <div className="main-card" key={index}>
          <div className="main-card-title"> {category.name}</div>
          {/* <div className="main-card-text"> */}
            <GroceryItemComponent data={category.groceryItems}></GroceryItemComponent>
          {/* </div> */}
        </div>
      ))}
    </>
  );
};

export default Content;
