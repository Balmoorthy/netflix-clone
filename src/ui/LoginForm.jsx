import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import useAuthForm from "../hooks/useAuthForm";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { values, handleChange, error, setError } = useAuthForm({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await login(values.email, values.password);
      toast.success("Logged in successfully");
      navigate("/dashboard");
    } catch {
      setError("Failed to log in");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Log In</button>
    </form>
  );
}
