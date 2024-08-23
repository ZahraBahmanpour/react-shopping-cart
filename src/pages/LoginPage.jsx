import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target["username"].value;
    const password = e.target["password"].value;
    try {
      await dispatch(login({ username, password })).unwrap();
      navigate("/");
    } catch (e) {
      navigate("/login");
    }
  };
  return (
    <div>
      Login Page
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" id="username" />
        </label>
        <br />
        <label>
          Password
          <input type="password" id="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
