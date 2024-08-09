import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to={"/"}>Back to home</Link>
      <button onClick={() => navigate(-1)}>Back to home</button>
    </div>
  );
}
