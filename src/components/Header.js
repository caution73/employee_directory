import { Link } from "react-router-dom"

export default function Header(props){

    return(
        <div className="header">
            {props?.showBack?
                <Link to="/"  id="backCarrot">
                    <h1>&lt;</h1>
                </Link>
                :
                console.log("Nope")
            }
            
            <h3 id="headerTitle">{props.title}</h3>
            
        </div>
    )
}