export default function EmployeeInfo(props) {
    const employee = props.employee
    return(
        <div className="employeeInfo">
        <div className="empName">
          <div className="pic"></div>
          <div className="selectedEmp">
            <h4>{employee.name}</h4> {employee.title}
          </div>
        </div>
        <div className="officeNum">
          <h5>Call Office</h5> 425-234-6366
        </div>
        <div className="mobileNum">
          <h5>Call Mobile</h5>
          546-454-4432
        </div>
        <div className="sms">
          <h5>SMS</h5> 234-242-3457
        </div>
        <div className="email">
          <h5>Email</h5>jtaylor@fakemail.com
        </div>
      </div>
    )
}