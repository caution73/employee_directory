import EmployeeInfo from "../components/EmployeeInfo"
import Header from "../components/Header"
import { useParams } from "react-router-dom"

export default function EmployeePage(props){
    const {id} = useParams()
    console.log(id)
    return(
        <div className="employeePage">
            <Header title="Employee" showBack="true"/>
            <EmployeeInfo employee={props.employees[id]}/>
        </div>
    )
}