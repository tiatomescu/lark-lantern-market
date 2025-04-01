import { createContext } from "react";

const AuthContext = createContext({auth: 0, setAuth: () => {}});

export default AuthContext;