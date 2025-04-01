// OAuthCallback.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/axios";

const OAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      api.post("/oauth/google/", { code }).then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/dashboard");
      });
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default OAuthCallback;