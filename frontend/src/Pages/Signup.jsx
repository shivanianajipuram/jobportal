import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSignup}>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="New password" onChange={(e) => setPassword(e.target.value)} />
      <button>Signup</button>
    </form>
  );
};

export default Signup;