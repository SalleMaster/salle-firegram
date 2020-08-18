import React from 'react';
import { auth } from '../firebase/config';

const useSignUp = (email, password, username) => {
  // sign up the user & add firestore data
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      return db.collection('users').doc(cred.user.uid).set({
        displayName: username,
      });
    })
    .then(() => {
      // close the signup modal & reset form
      //   const modal = document.querySelector('#modal-signup');
      //   M.Modal.getInstance(modal).close();
      //   signupForm.reset();
      //   signupForm.querySelector('.error').innerHTML = '';
    })
    .catch((err) => {
      //   signupForm.querySelector('.error').innerHTML = err.message;
    });

  //   return <div></div>;
};

export default useSignUp;
