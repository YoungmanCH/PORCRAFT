/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";
import UseAuth from "../auth/UseAuth";
import { v4 as uuidv4 } from "uuid";

const UseDatabase = ({ objects, field, serializeObjects, serializeField }) => {
  const [currentUser, setUser] = useState();
  const [getAuthenticatedUser] = UseAuth();

  useEffect(() => {
    _handleToGetAuthenticatedUser();
  }, []);

  const createUserDatabase = async (user) => {
    try {
      const apiEndpoint = import.meta.env.VITE_APP_CREATE_USER_API_ENDPOINT;
      const jsonData = _stringfyToJsonForCreateUser(user);

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
      await _handleToGetAuthenticatedUser();
      if (currentUser == null) {
        console.log("State: User is not sign in.");
        return;
      }
      const apiEndpoint = import.meta.env.VITE_APP_GET_USER_API_ENDPOINT;
      const queryParams = _getQueryParams();
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
      const data = jsonData ? JSON.parse(jsonData.body) : null;
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const createWorldDatabase = async (selectedField) => {
    try {
      await _handleToGetAuthenticatedUser();
      if (currentUser == null) {
        console.log("State: User is not sign in.");
        return;
      }
      const apiEndpoint = import.meta.env.VITE_APP_CREATE_WORLD_API_ENDPOINT;
      const userDatabase = await fetchUserDatabase();
      console.log("userDatabase:", userDatabase);
      const userId = userDatabase.id.S;
      const worldId = uuidv4();
      const jsonData = _stringfyToJsonForCreateWorld(
        userId,
        worldId,
        userDatabase,
        selectedField
      );

      const response = await _fetchResponse(apiEndpoint, jsonData);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        return [userId, worldId];
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchWorldDatabase = async (userId, worldId) => {
    try {
      const apiEndpoint = import.meta.env.VITE_APP_GET_WORLD_API_ENDPOINT;
      const queryParams = _getWorldQueryParams(userId, worldId);
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
      return jsonData ? JSON.parse(jsonData.body) : null;
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const fetchAllWorldDatabaseWithUserId = async (userId) => {
    try {
      const apiEndpoint = import.meta.env
        .VITE_APP_GET_ALL_WORLD_WITH_USER_ID_API_ENDPOINT;
      const queryParams = _getWorldQueryParamsWithUserId(userId);
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
      return jsonData ? JSON.parse(jsonData.body) : null;
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const updateWorldDatabase = async (userId, worldId) => {
    try {
      await _handleToGetAuthenticatedUser();
      if (currentUser == null) {
        console.log("State: User is not sign in.");
        return;
      }
      const jsonData = await _stringfyToJsonForUpdateWorld(userId, worldId);
      const apiEndpoint = import.meta.env.VITE_APP_UPDATE_WORLD_API_ENDPOINT;
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

  const _handleToGetAuthenticatedUser = async () => {
    const user = await getAuthenticatedUser();
    setUser(user);
  };

  const _stringfyToJsonForCreateUser = (user) => {
    // TODO: modified name.
    return JSON.stringify({
      userId: user.username,
      email: user.session.signInDetails.loginId,
      name: user.name ? user.name : user.username,
    });
  };

  const _getQueryParams = () => {
    return new URLSearchParams({ userId: currentUser.username }).toString();
  };

  const _getWorldQueryParams = (userId, worldId) => {
    return new URLSearchParams({ userId: userId, worldId: worldId }).toString();
  };

  const _getWorldQueryParamsWithUserId = (userId) => {
    return new URLSearchParams({ userId: userId }).toString();
  };

  const _stringfyToJsonForCreateWorld = (
    userId,
    worldId,
    userDatabase,
    selectedField
  ) => {
    const serializedObjects = objects ? serializeObjects(objects) : [];
    const serializedField = serializeField(selectedField);
    // TODO set correct world name.
    const worldName = "world_name";

    return JSON.stringify({
      userId: userId,
      worldId: worldId,
      worldName: worldName,
      objects: serializedObjects,
      field: serializedField,
    });
  };

  const _stringfyToJsonForUpdateWorld = async (userId, worldId) => {
    const beforeWorld = await fetchWorldDatabase(userId, worldId);
    const serializedObjects = serializeObjects(objects);
    const serializedField = serializeField(field);
    // TODO set correct world name.
    const worldName = "world_name";

    return JSON.stringify({
      userId: beforeWorld.userId.S,
      worldId: beforeWorld.worldId.S,
      worldName: worldName,
      objects: serializedObjects,
      field: serializedField,
      createdAt: beforeWorld.createdAt.S,
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

    return responseData;
  };

  return {
    createUserDatabase,
    fetchUserDatabase,
    fetchWorldDatabase,
    fetchAllWorldDatabaseWithUserId,
    createWorldDatabase,
    updateWorldDatabase,
  };
};

export default UseDatabase;
