import React, { useState } from "react";
function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  async function signup() {
    let item = { name, password, email };
    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.warn("result", result);
  }
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>User Sign Up</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="formcontrol"
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="formcontrol"
      />
      <br />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="formcontrol"
      />
      <br />
      <button onClick={signup} className="btn btn-primary">
        Sign Up
      </button>
    </div>
  );
}

export default Register;
