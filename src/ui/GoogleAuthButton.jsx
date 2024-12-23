import { useAuth } from "../context/useAuth";

export default function GoogleAuthButton() {
  const { signInWithGoogle } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("Google sign-in successful");
    } catch {
      alert("Google sign-in failed");
    }
  };

  return <button onClick={handleGoogleSignIn}>Sign In with Google</button>;
}
