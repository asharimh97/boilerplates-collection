// TODO: Implement better get profile by using better state management

// import useStore from "lib/stores/rootStore";
// import { useEffect } from "react";
// import { getToken } from "utils/authStore";

function useProfile() {
  // const user = useStore((state) => state.user);
  // const getProfile = useStore((state) => state.getProfile);

  // useEffect(() => {
  //   const token = getToken();

  //   // Do nothing if token is not available
  //   if (!token) {
  //     return;
  //   }

  //   // Get profile if token is available but user profile is still null
  //   if (!user) {
  //     getProfile();
  //   }
  // }, [user]);

  return;
}

export default useProfile;
