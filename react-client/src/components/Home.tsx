import React, { useState, useEffect } from "react";
import MenuToggle from "./MenuToggle";
import Content from "./Content";
import { StorageArea, UserData } from "./Interfaces";

// default empty intefaces
const defaultData: UserData = {
  id: 0,
  name: "Default",
  storageAreas: [],
};
const defaultStorageArea: StorageArea = {
  id: 0,
  name: "Default",
  categories: [],
};

// HTTP constants, todo: move to a property file
const url = "http://192.168.0.135:8080/v1/api/users/3";
const username = "user";
const password = "pass";
const basicAuthHeader = "Basic " + btoa(username + ":" + password);

const Home: React.FC = () => {
  // Component state variables
  const [data, setData] = useState<UserData>(defaultData);
  const [selectedArea, setSelectedArea] =
    useState<StorageArea>(defaultStorageArea);
  const [selectedView, setSelectedView] = useState("Log in"); // Default view
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Functions to handle state changes
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // when a storage area is selected, find it in the data object and call setSelectedArea useState()
  const handleViewSelect = (view: string) => {
    setSelectedView(view);

    const foundStorageArea = data.storageAreas.find(
      (storageArea) => storageArea.name === view
    );

    // set userData.StorageArea[i] if found, otherwise set default Storage Area
    setSelectedArea(
      foundStorageArea !== undefined ? foundStorageArea : defaultStorageArea
    );
  };

  // useEffect is called each time component is rendered
  // use it to fetch API data
  useEffect(() => {
    // async function to call API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // set data as component state
        setData(json[0].userData);
      } catch (error) {
        console.log("error", error);
      }
    };
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
          {data &&
            data.storageAreas.map((storageArea, index) => (
              <div
                key={index}
                className="sidebar-card"
                onClick={() => handleViewSelect(storageArea.name)}
              >
                <div className="card-title"></div>
                <div className="card-text">
                  <div className="fridge-icon"></div>
                </div>
                <div className="card-footer">
                  <h3>{storageArea.name}</h3>
                </div>
              </div>
            ))}
        </div>
        <div className={`main-content ${isSidebarOpen ? "show" : ""}`}>
          {/* Render the content based on the selected view  */}
          {
            <Content
              data={
                selectedArea !== undefined
                  ? selectedArea.categories
                  : defaultStorageArea.categories
              }
            />
          }
        </div>
      </div>
    </>
  );
};

export default Home;