import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuToggle from "./MenuToggle";
import Content from "./Content";
import { FoodLocation } from "./Interfaces";

const defaultFoodLocation: FoodLocation = {
  name: "Default",
  categories: [],
};

const Home: React.FC = () => {
  const [selectedView, setSelectedView] = useState("Log in"); // Default view
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [data, setData] = useState<FoodLocation[]>([]);
  const [foodLocation, setFoodLocation] = useState<FoodLocation>(defaultFoodLocation);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleViewSelect = (view: string) => {
    setSelectedView(view);
    const foundItem = data.find((item) => item.name === view);
    setFoodLocation(foundItem !== undefined ? foundItem : defaultFoodLocation);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        // Make a GET request to the server
        const response = await axios.get<FoodLocation[]>(
          "http://localhost:8080/items"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

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
          {data.map((location, index) => (
            <div
              key={index}
              className="sidebar-card"
              onClick={() => handleViewSelect(location.name)}
            >
              <div className="card-title"></div>
              <div className="card-text">
                <div className="fridge-icon"></div>
              </div>
              <div className="card-footer">
                <h3>{location.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className={`main-content ${isSidebarOpen ? "show" : ""}`}>
          {/* Render the content based on the selected view  */}
          {(
            <Content
              data={foodLocation !== undefined ? foodLocation.categories : defaultFoodLocation.categories}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
