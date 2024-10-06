export default function createEmployeesObject(departmentName, employees) {
  const allEmployees = {
    [departmentName]: employees,
  };

  return allEmployees;
}
