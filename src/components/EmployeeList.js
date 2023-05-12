import EmployeeListItem from "./EmployeeListItem"

export default function EmployeeList(props){

    return(
        <div className="empList">
            {props.employees.map((employee, i) => {
                {employee.id = i}
                return(
                    <EmployeeListItem employee={employee} />
                )
            })}
        </div>
    )
}