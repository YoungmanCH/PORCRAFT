/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import UseAuth from "../auth/UseAuth";
import { v4 as uuidv4 } from "uuid";

const UseDatabase = ({ objects, field, serializeObjects, serializeField }) => {
  const [currentUser, setUser] = useState();
  const [handleToGetCurrentUser] = UseAuth();

  useEffect(() => {
    _handleToGetCurrentUser();
  }, []);

  const createUserDatabase = async () => {
    try {
      await _handleToGetCurrentUser();
      if (currentUser == null) {
        console.log("State: User is not sign in.");
        return;
      }
      const apiEndpoint = import.meta.env.VITE_APP_CREATE_USER_API_ENDPOINT;
      const jsonData = _stringfyToJsonForCreateUser();

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchUserDatabase = async () => {
    try {
      await _handleToGetCurrentUser();
      if (currentUser == null) {
        console.log("State: User is not sign in.");
        return;
      }
      const apiEndpoint = import.meta.env.VITE_APP_GET_USER_API_ENDPOINT;
      const queryParams = _createQueryParams();
      const url = `${apiEndpoint}?${queryParams}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      console.log("jsonData:", jsonData);
      const data = jsonData ? JSON.parse(jsonData.body) : null;
      console.log("data:", data);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const createWorldDatabase = async () => {
    try {
      await _handleToGetCurrentUser();
      if (currentUser == null) {
        console.log("State: User is not sign in.");
        return;
      }
      const apiEndpoint = import.meta.env.VITE_APP_CREATE_WORLD_API_ENDPOINT;
      const userDatabase = await fetchUserDatabase();
      const jsonData = _stringfyToJsonForCreateWorld(userDatabase);
      
      const response = await _fetchResponse(apiEndpoint, jsonData);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("Successfully, response:", { response });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateWorldDatabase = async () => {
    try {
      await _handleToGetCurrentUser();
      if (currentUser == null) {
        console.log("State: User is not sign in.");
        return;
      }
      const jsonData = _stringfyToJsonForUpdateWorld();
      const apiEndpoint = import.meta.env.VITE_APP_EXPORT_API_ENDPOINT;
      const response = await _fetchResponse(apiEndpoint, jsonData);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("response:", { response });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const _handleToGetCurrentUser = async () => {
    const user = await handleToGetCurrentUser();
    setUser(user);
  };

  const _stringfyToJsonForCreateUser = () => {
    return JSON.stringify({
      userId: currentUser.userId,
      email: currentUser.signInDetails.loginId,
      name: currentUser.name ? currentUser.name : currentUser.userId,
    });
  };

  const _createQueryParams = () => {
    return new URLSearchParams({ userId: currentUser.userId }).toString();
  };

  const _stringfyToJsonForCreateWorld = (userDatabase) => {
    const serializedObjects = serializeObjects(objects);
    const serializedField = serializeField(field);
    const id = uuidv4();
    const userId = userDatabase.id.S;
    // TODO set correct project name.
    const projectName = 'project_name';

    return JSON.stringify({
      id: id,
      projectName: projectName,
      userId: userId,
      objects: serializedObjects,
      field: serializedField,
    });
  };

  const _stringfyToJsonForUpdateWorld = () => {
    const serializedObjects = serializeObjects(objects);
    const serializedField = serializeField(field);

    return JSON.stringify({
      objects: serializedObjects,
      field: serializedField,
    });
  };

  const _fetchResponse = async (apiEndpoint, jsonData) => {
    const responseData = await fetch(apiEndpoint, {
      method: "POST",
      body: jsonData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("responseData:", responseData);

    return responseData;
  };

  return { createUserDatabase, fetchUserDatabase, createWorldDatabase, updateWorldDatabase };
};

export default UseDatabase;
