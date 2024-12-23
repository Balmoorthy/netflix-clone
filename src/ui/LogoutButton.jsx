import { useAuth } from "../context/useAuth";

export default function LogoutButton() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      alert("Logged out successfully!");
    } catch (error) {
      alert("Failed to log out. Please try again.");
      console.log(error);
    }
  };

  return <button onClick={handleLogout}>Log Out</button>;
}
