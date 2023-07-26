import { Link, useNavigate } from "react-router-dom";

const PRODUCTDUMMY = [
  {id: "p1", title: "haha"},
  {id: "p2", title: "hah2"},
  {id: "p2", title: "hah3"}
]

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
      <ul>
        {PRODUCTDUMMY.map((item)=><li><Link to={`${item.id}`}>{item.title}</Link></li>)}
      </ul>
    </>
  );
}
