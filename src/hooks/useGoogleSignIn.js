import { auth, googleProvider } from '../firebase/config';

const useGoogleSignIn = () => {
  let user = null;

  auth
    .signInWithPopup(googleProvider)
    .then((result) => {
      user = result.user;

      // Check for admin token
      user.getIdTokenResult().then((idTokenResult) => {
        // console.log(idTokenResult.claims.admin);
      });
    })
    .catch((err) => {
      alert(err.message);
    });

  return user;
};

export default useGoogleSignIn;
