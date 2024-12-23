import { useState } from "react";

export default function useAuthForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setValues(initialValues);

  return { values, handleChange, error, setError, resetForm };
}
