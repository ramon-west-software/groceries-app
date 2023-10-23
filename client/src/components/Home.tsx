import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import MenuToggle from "./MenuToggle";
import Content from "./Content";
import { StorageArea, UserData } from "./Interfaces";

// default empty intefaces
const defaultData: UserData = {
  userId: 0,
  name: "Default",
  storageAreas: [],
};

const defaultStorageArea: StorageArea = {
  storageId: 0,
  name: "Default",
  categories: [],
};

// HTTP constants, todo: move to a property file
const url = "http://192.168.0.135:8080/api/users/3";
const username = "user";
const password = "pass";
const basicAuthHeader = "Basic " + btoa(username + ":" + password);


const Home: React.FC = () => {
  // Compinent state variables
  const [data, setData] = useState<UserData>(defaultData);
  const [selectedArea, setSelectedArea] =
    useState<StorageArea>(defaultStorageArea);
  const [selectedView, setSelectedView] = useState("Log in"); // Default view
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Functions to handle state changes
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleViewSelect = (view: string) => {
    setSelectedView(view);
    const foundStorageArea = data.storageAreas.find(
      (storageArea) => storageArea.name === view
    );
    setSelectedArea(
      foundStorageArea !== undefined ? foundStorageArea : defaultStorageArea
    );
  };

  useEffect(() => {
    async function fetchData() {
      
      const options = {
        method: 'GET',
        url: url,
        headers: {Authorization: basicAuthHeader}
      };
      
      axios.request(options).then(function (response) {
        console.log('User ID: ' + response.data.userId);
        console.log('User Name: ' + response.data.name);
        console.log('Storage Areas: ' + response.data.storageAreas);
        console.log('#Storage Areas: ' + response.data.storageAreas.length);

        data.storageAreas.forEach((element) => {console.log(element.name)});

        setData(response.data);

      }).catch(function (error) {
        console.error(error);
      });
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
          {data.storageAreas.map((storageArea, index) => (
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
