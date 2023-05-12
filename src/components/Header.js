import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="header">
      {props?.showBack ? (
        <div className="backCarrotCont">
          <Link to="/" id="backCarrot">
            <h1 className="backCarrotCont">&lt;</h1>
          </Link>
        </div>
      ) : (
        console.log("Nope")
      )}

      <h3 id="headerTitle">{props.title}</h3>
    </div>
  );
}
