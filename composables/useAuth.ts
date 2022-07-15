import { Auth } from "firebase/auth";

export const useAuth = () => useState<Auth>("auth", () => undefined);
