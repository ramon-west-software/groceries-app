import { FC } from "react";
import Items from "./Items";
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
            <Items data={category.items}></Items>
          {/* </div> */}
        </div>
      ))}
    </>
  );
};

export default Content;
