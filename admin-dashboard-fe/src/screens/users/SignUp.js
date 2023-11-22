import { useState } from "react";
import { signUp } from "../../middleware/auth";
import { Select, message } from "antd";
import { useNavigate } from "react-router-dom";
import { USER_TYPE } from "../../constants/constants";

const SignUp = () => {
  const navigate = useNavigate()

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async  (e) => {
    e.preventDefault();
    setError("");

    try {
      await signUp(fullname, username, email, password, userType);
      message.info('User Successfuly Signed Up. Please Verify Your Email');
      navigate("/login")
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="user-form">
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Select
          style={{ width: 100 }}
          onChange={(value) => setUserType(value)}
          placeholder="User Type"
          options={USER_TYPE}
        />
        <button type="submit">SignUp</button>
        {console.log(userType)}
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
