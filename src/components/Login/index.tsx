import React, { FunctionComponent, useEffect, useState } from "react";
import "./styles.css";

const Login: FunctionComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const validadeEmail = () => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    return emailRegex.test(email);
  };

  const handleLoginSubmit = () => {
    const isEmailValid = validadeEmail();
    if (isEmailValid) {
      alert("Email correto");
    } else {
      alert("Email no formato incorreto");
    }
  };

  const validadePassword = () => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/i;
    return passwordRegex.test(password);
  };

  const handlePasswordSubmit = () => {
    const isPasswordValide = validadePassword();
    if (isPasswordValide) {
      alert("Senha correta.");
    } else {
      alert("Senha Incorreta!");
    }
  };
  return (
    <>
      <div className="container">
        <div className="inputsWrapper">
          <h1>Login</h1>
          <label htmlFor="email">E-mail</label>
          <input
            title="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button onClick={() => handleLoginSubmit()}>Entrar</button>
        </div>
      </div>
    </>
  );
};

export default Login;
