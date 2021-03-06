import { auth } from '../firebase/config';

const useAuthStatus = (setUser) => {
  // listen for auth status changes
  auth.onAuthStateChanged((user) => {
    if (user) {
      user.getIdTokenResult().then((idTokenResult) => {
        user.admin = idTokenResult.claims.admin;
        setUser(user);
      });
    } else {
      setUser(null);
    }
  });
};

export default useAuthStatus;
