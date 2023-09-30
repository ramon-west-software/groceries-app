import React from "react";
import { FC } from "react";
import { Item } from "./Interfaces";

interface ItemsProps {
  data: Item[];
}

const Items: FC<ItemsProps> = ({ data }) => {
  return (
    <>
      {data &&
        Array.isArray(data) &&
        data.map((item, index) => (
          <ul>
            <li key={index}>
              {item.name} - Purchased {item.purchaseDate} - Good for{" "}
              {item.daysLeft} more days
            </li>
          </ul>
        ))}
    </>
  );
};

export default Items;
