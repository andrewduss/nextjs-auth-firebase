import { initializeApp } from 'firebase/app';
import { clientConfig } from './config';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const firebaseApp = initializeApp(clientConfig);
export const auth = getAuth(firebaseApp)

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
}