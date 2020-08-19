import { SET_USER, REMOVE_USER } from './types';
import { auth } from '../firebase/config';

// Set User
export const setUser = () => (dispatch) => {
  // listen for auth status changes
  auth.onAuthStateChanged((user) => {
    if (user) {
      user.getIdTokenResult().then((idTokenResult) => {
        user.admin = idTokenResult.claims.admin;
        dispatch({
          type: SET_USER,
          payload: user,
        });
      });
    } else {
      dispatch({
        type: REMOVE_USER,
      });
    }
  });
};

// Sign Up User
export const signUp = (formData) => {
  const { email, password, displayName } = formData;

  // sign up the user & add firestore data
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      cred.user.updateProfile({
        displayName: displayName,
      });
    })
    .catch((err) => {
      alert(err.message);
    });
};
