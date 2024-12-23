import { useState } from "react";
import { useAuth } from "../context/useAuth";

export default function PhoneAuthForm() {
  const { setupRecaptcha } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [error, setError] = useState("");

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const result = await setupRecaptcha(phoneNumber);
      setConfirmationResult(result);
    } catch {
      setError("Failed to send OTP");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      await confirmationResult.confirm(otp);
      alert("Phone authentication successful");
    } catch {
      setError("Invalid OTP");
    }
  };

  return (
    <div>
      <form onSubmit={confirmationResult ? handleVerifyOtp : handleSendOtp}>
        <h2>Phone Authentication</h2>
        {error && <p>{error}</p>}
        {!confirmationResult ? (
          <>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div id="recaptcha-container"></div>
            <button type="submit">Send OTP</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button type="submit">Verify OTP</button>
          </>
        )}
      </form>
    </div>
  );
}
