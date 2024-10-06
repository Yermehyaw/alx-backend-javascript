export default function createEmployeesObject(departmentName, employees) {
  const allEmployees = {
    `${departmentName}`: [
      for (const value of employees) {
	return value;
      }
      // `${employees.values()}
    ]
  };

  return allEmployees;
}
