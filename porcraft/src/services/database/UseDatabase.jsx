/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import UseAuth from "../auth/UseAuth";

const UseDatabase = ({ objects, field, serializeObjects, serializeField }) => {
  const [currentUser, setUser] = useState();
  const [handleToGetCurrentUser] = UseAuth();

  useEffect(() => {
    _handleToGetCurrentUser();
  }, []);

  const exportDatabase = async () => {
    try {
      await _handleToGetCurrentUser();
      if (currentUser == null) {
        console.log("State: User is not sign in.");
        return;
      }
      const jsonData = _stringfyToJson();
      const exportApiEndpoint = import.meta.env.VITE_APP_EXPORT_API_ENDPOINT;
      const response = await fetch(exportApiEndpoint, {
        method: "POST",
        body: jsonData,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("response:", { response });
      }

      await _fetchResponse(exportApiEndpoint, jsonData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const _handleToGetCurrentUser = async () => {
    const user = await handleToGetCurrentUser();
    setUser(user);
  };

  const _stringfyToJson = () => {
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

  return exportDatabase;
};

export default UseDatabase;
