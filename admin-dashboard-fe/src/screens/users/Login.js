import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { message } from "antd";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const { user, signIn } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(username, password);
    } catch (err) {
      message.error(err.message);
    }
  };

  if (user) {
    return <Navigate to="/view-cart" />;
  }

  return (
    <div className="user-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
