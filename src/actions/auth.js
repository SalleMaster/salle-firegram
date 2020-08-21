import { SET_USER, REMOVE_USER } from './types';
import { auth } from '../firebase/config';

// Listen for auth changes
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

// Get current user
export const getCurrentUser = () => (dispatch) => {
  var user = auth.currentUser;
  if (user) {
    dispatch({
      type: SET_USER,
      payload: user,
    });
  } else {
    dispatch({
      type: REMOVE_USER,
    });
  }
};

// Sign Up User
export const signUp = async (formData) => {
  const { email, password, displayName } = formData;

  // sign up the user & add firestore data
  await auth
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

// Sign In User
export const signIn = (formData) => {
  const { email, password } = formData;

  // sign up the user & add firestore data
  auth.signInWithEmailAndPassword(email, password).catch((err) => {
    alert(err.message);
  });
};
