// App.tsx
import React, { useState } from "react";
import axios from "axios";
import MenuToggle from "./MenuToggle";
import Content from "./Content";

const items: string[] = ["Refrigerator", "Freezer", "Pantry"];
// mock data
const fridgeData = [
  {
    type: "Fruits",
    name: "Banana",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
  {
    type: "Dairy",
    name: "Milk",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
  {
    type: "Dairy",
    name: "Yogurt",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
];
const freezerData = [
  {
    type: "Meats",
    name: "Ribs",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
  {
    type: "Dairy",
    name: "Ice Cream",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
  {
    type: "Hexes",
    name: "Crush hair & toenails",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
];
const pantryData = [
  {
    type: "Grains",
    name: "Bread",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
  {
    type: "Grains",
    name: "Tortillas",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
  {
    type: "Grains",
    name: "Rice",
    purchaseDate: "1/1/23",
    daysLeft: 5,
  },
];
// end mock data

const Home: React.FC = () => {
  const [selectedView, setSelectedView] = useState("Log in"); // Default view

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleViewSelect = (view: string) => {
    try {
      let respData = axios.get("http://localhost:8080/refrigerator-items");
      console.log(`Response Data: ${respData}`);
      console.log(respData);
      // return respData;
    } catch (error) {
      console.error("Error retrieving refrigerator data:", error);
    }

    setSelectedView(view);
  };

  // Mock data for refrigerator section, get this from a GET request to server

  return (
    <>
      <div className="header">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <MenuToggle />
        </button>
        <h1>My Kitchen - {selectedView}</h1>
      </div>
      <div className="">
        <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
          <div
            className="sidebar-card"
            onClick={() => handleViewSelect("Refrigerator")}
          >
            <div className="card-title"></div>
            <div className="card-text">
              <div className="fridge-icon"></div>
            </div>
            <div className="card-footer">
              <h3>Refrigerator</h3>
            </div>
          </div>
          <div
            className="sidebar-card"
            onClick={() => handleViewSelect("Freezer")}
          >
            <div className="card-title"></div>
            <div className="card-text"><div className="freezer-icon"></div></div>
            <div className="card-footer">
              <h3>Freezer</h3>
            </div>
          </div>
          <div
            className="sidebar-card"
            onClick={() => handleViewSelect("Pantry")}
          >
            <div className="card-title"></div>
            <div className="card-text"></div>
            <div className="card-footer">
              <h3>Pantry</h3>
            </div>
          </div>
        </div>
        <div className={`main-content ${isSidebarOpen ? "show" : ""}`}>
          {/* <div className="container"> */}
          {/* Render the content based on the selected view */}
          {selectedView === "Refrigerator" && (
            // <p>Welcome to the Refrigerator Page</p>
            <Content data={fridgeData} />
          )}
          {selectedView === "Freezer" && <Content data={freezerData} />}
          {selectedView === "Pantry" && <Content data={pantryData} />}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
