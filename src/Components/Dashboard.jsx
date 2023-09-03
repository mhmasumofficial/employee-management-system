import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import Add from "./Add";
import Edit from "./Edit";
import Header from "./Header";
import DataTable from "./DataTable";

function Dashboard() {
  const [employeeData, setEmployeeData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [employeeCount, setEmployeeCount] = useState();
  const [salary, setSalary] = useState();
  const [age, setAge] = useState();

  const handleEdit = (id) => {
    const [employee] = employeeData.filter((employee) => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [employee] = employeeData.filter(
          (employee) => employee.id === id
        );

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setEmployeeData(employeeData.filter((employee) => employee.id !== id));
      }
    });
  };

  useEffect(() => {
    fetch("../../public/mockData.json")
      .then((res) => {
        setEmployeeCount(res.employeeData[0].id);
      })
      .catch((err) => console.log(err));

    fetch("../../public/mockData.json")
      .then((res) => {
        setSalary(res.employeeData[0].salary);
      })
      .catch((err) => console.log(err));

    fetch("../../public/mockData.json")
      .then((res) => {
        setAge(res.employeeData[0].age);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* List */}
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <div>
            <div className="p-5 flex justify-center gap-5 mt-3">
              <div className="p-5 pt-2 pb-3 border shadow-md w-96">
                <div className="text-center pb-1">
                  <h1>Total Employee</h1>
                </div>
                <hr />
                <div className="">
                  <h1>Total</h1>
                </div>
              </div>
              <div className="p-5 pt-2 pb-3 border shadow-md w-96">
                <div className="text-center pb-1">
                  <h1>Average Salary</h1>
                </div>
                <hr />
                <div className="">
                  <h5>Total</h5>
                </div>
              </div>
              <div className="p-5 pt-2 pb-3 border shadow-md w-96">
                <div className="text-center pb-1">
                  <h4>Average Age</h4>
                </div>
                <hr />
                <div className="">
                  <h5>Total</h5>
                </div>
              </div>
            </div>
          </div>
          <DataTable
            employees={employeeData}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {/* Add */}
      {isAdding && (
        <Add
          employees={employeeData}
          setEmployees={setEmployeeData}
          setIsAdding={setIsAdding}
        />
      )}
      {/* Edit */}
      {isEditing && (
        <Edit
          employees={employeeData}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployeeData}
          setIsEditing={setIsEditing}
        />
      )}
    </>
  );
}

export default Dashboard;