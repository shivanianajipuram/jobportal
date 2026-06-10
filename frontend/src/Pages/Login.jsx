import { useState } from "react";
import { useAuth } from "../context/AuthContext";
//import BASE_URL from "../config";
const BASE_URL = import.meta.env.VITE_API_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useAuth();



  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      localStorage.setItem("email", data.user.email);
      loginUser(data.user);

      alert("Login success");

    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;