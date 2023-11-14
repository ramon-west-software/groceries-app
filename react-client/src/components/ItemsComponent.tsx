import React from "react";
import { FC } from "react";
import { Item } from "./Interfaces";

interface ItemsProps {
  data: Item[];
}

const ItemsComponent: FC<ItemsProps> = ({ data }) => {
  return (
    <>
      <div className="main-card-text">
        {data &&
          Array.isArray(data) &&
          data.map((item, index) => (
            <ul>
              <li key={index}>
                {item.name} - Purchased {item.purchaseDate} - Good for{" "}
                {item.duration} more days
              </li>
            </ul>
          ))}
      </div>
    </>
  );
};

export default ItemsComponent;
