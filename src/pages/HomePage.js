import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import EmployeeList from "../components/EmployeeList"

export default function HomePage(props){

    return(
        <div className="homePageContainer">
            <Header title="Employee Directory"/>
            <SearchBar />
            <EmployeeList employees={props.employees}/>
        </div>
    )
}