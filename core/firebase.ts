import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export function getMyAuth() {
  let auth;
  try {
    auth = getAuth();
  } catch (e) {
    const config = useRuntimeConfig();
    const firebaseConfig = {
      apiKey: config.public.FIREBASE_API_KEY,
      authDomain: config.public.FIREBASE_AUTH_DOMAIN,
      databaseURL: config.public.FIREBASE_DATABASE_URL,
      projectId: config.public.FIREBASE_PROJECT_ID,
      storageBucket: config.public.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: config.public.FIREBASE_MESSAGING_SENDER_ID,
      appId: config.public.FIREBASE_APP_ID,
    };
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
  }
  return auth;
}

export function getUser(email: string, password: string, isCreate?: boolean) {
  const auth = getMyAuth();
  return isCreate
    ? createUserWithEmailAndPassword(auth, email, password)
    : signInWithEmailAndPassword(auth, email, password);
}

export async function getUserFromGoogle() {
  const auth = getMyAuth();
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const credential = GoogleAuthProvider.credentialFromResult(result);
  return { result, credential };
}

export function signOutUser() {
  const auth = getMyAuth();
  return signOut(auth);
}
