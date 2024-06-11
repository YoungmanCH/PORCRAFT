import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

const UseAuth = () => {
  const getAuthenticatedUser = async () => {
    try {
      const { username, signInDetails } = await getCurrentUser();
      const { tokens: session } = await fetchAuthSession();
      return {
        username,
        session,
        authenticationFlowType: signInDetails.authFlowType,
      };
    } catch (error) {
      console.log("Failed to getting authenticated user:", error.message);
      return null;
    }
  };

  return [getAuthenticatedUser];
};

export default UseAuth;
