import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../context/useAuth";
import useAuthForm from "../../hooks/useAuthForm";
import Input from "./Input";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BackgroundImg = styled.img`
  position: absolute;
  width: 100vw;
  height: 100%;
`;
const Form = styled.form`
  display: block;
  background-color: rgba(0, 0, 0, 0.2);
  color: var(--color-grey-50);
  border-radius: var(--border-radius-sm);
  margin: 4rem auto;
  width: 60rem;
  height: 100%;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Error = styled.p`
  color: var(--color-red-300);
`;

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
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <Error>{error}</Error>}
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        {/* <TogglePassword /> */}
        <button title="Sign up" type="submit">
          Sign Up
        </button>
      </Form>
    </Container>
  );
}
