import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuToggle from "./MenuToggle";
import Content from "./Content";
import { Item } from "./interfaces";


const Home: React.FC = () => {
  const [selectedView, setSelectedView] = useState("Log in"); // Default view
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [data, setData] = useState<Item[]>([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleViewSelect = (view: string) => {
    setSelectedView(view);
  };

  // Called when component is mounted
  useEffect(() => {
    // Make a GET request to the server
    axios
      .get<Item[]>("http://localhost:8080/refrigerator-items") // todo: get all data in one call, not just fridge data
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
            <div className="card-text">
              <div className="freezer-icon"></div>
            </div>
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
          {/* Render the content based on the selected view */}
          {selectedView === "Refrigerator" && <Content data={data} />}
          {selectedView === "Freezer" && <Content data={data} />}
          {selectedView === "Pantry" && <Content data={data} />}
        </div>
      </div>
    </>
  );
};

export default Home;
