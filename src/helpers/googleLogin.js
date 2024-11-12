import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
import app from "../firebase";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const baseUrl = "https://localizeai-server-da6245e547aa.herokuapp.com";

export const handleLogin = (navigate) => {
  return signInWithPopup(auth, provider)
    .then(async (result) => {
      const token = await result.user.getIdToken();
      return axios.post(`${baseUrl}/users/login`, { id_token: token });
    })
    .then(({ data }) => {
      localStorage.setItem("email", data.email);
      localStorage.setItem("username", data.username);
      localStorage.setItem("status_username", data.status_username);
      localStorage.setItem("name", data.name);
      localStorage.setItem("profile", data.profile);
      localStorage.setItem("access_token", data.access_token);
      navigate("/register");
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error during login:", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email; // optional chaining
      const credentialError = GoogleAuthProvider.credentialFromError(error);
      console.error("Error details:", {
        errorCode,
        errorMessage,
        email,
        credentialError,
      });
    });
};