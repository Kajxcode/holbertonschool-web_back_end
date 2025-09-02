export default function createReportObject(employeesList) {
return {
    allEmployees: { ...employeesList },

    getNumberofDepartments(employees) {
        return Object.keys(employees).length;
    }
  };
}