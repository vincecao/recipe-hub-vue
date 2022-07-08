import { User as FirebaseUser } from "firebase/auth";

export const useUser = () => useState<FirebaseUser>('firebaseUser', () => undefined);