import { Link } from "react-router-dom";

export default function EmployeeListItem(props) {
  return (
    <div className="empListItem">
      <Link to={`/employee/${props.employee.id}`}>
        <div className="pic"></div>
        <div className="liInfo">
          <h4>{props.employee.name}</h4>
          <p>{props.employee.title}</p>
        </div>
      </Link>
    </div>
  );
}
