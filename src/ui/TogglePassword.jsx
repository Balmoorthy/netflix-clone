import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import styled from "styled-components";

const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: inherit;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

function TogglePassword() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <ToggleButton onClick={togglePasswordVisibility}>
      {showPassword ? <VscEye /> : <VscEyeClosed />}
    </ToggleButton>
  );
}

export default TogglePassword;
