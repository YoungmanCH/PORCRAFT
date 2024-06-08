/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import UseAuth from "../auth/UseAuth";

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
      const apiEndpoint = import.meta.env.VITE_APP_CREATE_USE_API_ENDPOINT;
      const jsonData = _stringfyToJsonForUser();
      console.log('jsonData:', jsonData);
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
      console.log("response:", { response });
      const responseData = await response.json();
      console.log("responseData:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const exportDatabase = async () => {
    try {
      await _handleToGetCurrentUser();
      if (currentUser == null) {
        console.log("State: User is not sign in.");
        return;
      }
      const jsonData = _stringfyToJsonForScene();
      const exportApiEndpoint = import.meta.env.VITE_APP_EXPORT_API_ENDPOINT;
      const response = await _fetchResponse(exportApiEndpoint, jsonData);

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

  const _stringfyToJsonForUser = () => {
    return JSON.stringify({
      userId: currentUser.userId,
      email: currentUser.signInDetails.loginId,
      name: currentUser.name ? currentUser.name : currentUser.userId,
    });
  };

  const _stringfyToJsonForScene = () => {
    const serializedObjects = serializeObjects(objects);
    const serializedField = serializeField(field);

    return JSON.stringify({
      objects: serializedObjects,
      field: serializedField,
    });
  };

  const _fetchResponse = async (exportApiEndpoint, jsonData) => {
    const responseData = await fetch(exportApiEndpoint, {
      method: "POST",
      body: jsonData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("responseData:", responseData);

    return responseData;
  };

  return { createUserDatabase, exportDatabase };
};

export default UseDatabase;
