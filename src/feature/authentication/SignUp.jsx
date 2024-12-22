import { useState } from "react";
import { useSignUp } from "./useSignup";

const SignUp = () => {
  const { signUp, error } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignUp;
