export default function createEmployeesObject(departmentName, employees) {
  const $departmentName = departmentName;
  const $employees = employees;

  const allEmployees = {
    $departmentName: [
      $employees
    ]
  };

  return allEmployees;
}
