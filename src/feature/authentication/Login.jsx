import { useState } from "react";
import { useLogin } from "./useLogin";

const Login = () => {
  const { login, loading, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
      />
      <button disabled={loading} type="submit">
        {loading ? "Logging in..." : "Login"}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
