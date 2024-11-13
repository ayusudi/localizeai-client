import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
import app from "../firebase";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const baseUrl = import.meta.env.VITE_BASEURL

export const handleLogin = (navigate) => {
  return signInWithPopup(auth, provider)
    .then(async (result) => {
      const token = await result.user.getIdToken();
      return axios.post(`${baseUrl}/api/v1/auth/login`, { id_token: token });
    })
    .then(({ data }) => {
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("username", data.user.username || '');
      localStorage.setItem("status_username", data.user.status_username);
      localStorage.setItem("name", data.user.name);
      localStorage.setItem("_id", data.user._id);
      localStorage.setItem("profile", data.user.profile);
      localStorage.setItem("access_token", data.token);
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