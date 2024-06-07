import { getCurrentUser } from "@aws-amplify/auth";

const UseAuth = () => {
  const handleToGetCurrentUser = async () => {
    try {
      const user =  await getCurrentUser();
      return user;
    } catch (error) {
      console.log("error:", error.message);
      return null;
    }
  };

  return [handleToGetCurrentUser];
};

export default UseAuth;
