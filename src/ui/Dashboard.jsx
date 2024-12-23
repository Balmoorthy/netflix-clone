import { useAuth } from "../context/useAuth";
import LogoutButton from "./LogoutButton";

function Dashboard() {
  const { currentUser } = useAuth();
  return (
    <div>
      Dashboard
      <nav>
        <h1>My App</h1>
        {currentUser ? (
          <>
            <span>Welcome, {currentUser.email}</span>
            <LogoutButton />
          </>
        ) : (
          <a href="/login">Log In</a>
        )}
      </nav>
    </div>
  );
}

export default Dashboard;
