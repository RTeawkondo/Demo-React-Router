import { Link, useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate()

  function navigateHandler () {
    navigate("/")
  }
  return (
    <>
      <h1>hehe</h1>
      <p>Go to <Link to="/"> the home</Link></p>
      <p>
        <button onClick={navigateHandler}>Home back</button>
      </p>
    </>
  );
}
