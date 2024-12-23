import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import useAuthForm from "../hooks/useAuthForm";

export default function SignupForm() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const { values, handleChange, error, setError } = useAuthForm({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await signup(values.email, values.password);
      navigate("/dashboard");
    } catch {
      setError("Failed to sign up");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
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
      <button type="submit">Sign Up</button>
    </form>
  );
}
