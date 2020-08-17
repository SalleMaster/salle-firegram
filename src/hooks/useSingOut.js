import { auth } from '../firebase/config';

const useSingOut = () => {
  auth.signOut();
};

export default useSingOut;
