import { FC } from "react";
import { Item } from "./interfaces";


interface ContentProps {
  data: Item[];
}

const Content: FC<ContentProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div className="main-card" key={index}>
          <div className="main-card-title"> {item.type}</div>
          <div className="main-card-text">
            <p>
              {item.name} - Purchased {item.purchaseDate} - Good for{" "}
              {item.daysLeft} more days
            </p>
          </div>
          <div className="card-footer">Updated {item.purchaseDate}</div>
        </div>
      ))}
    </>
  );
};

export default Content;
