function getEmployeeInfo(name) {
    let employes = ['Jane', 'Alex', 'John', 'Bob', 'Mary'];
    let salary = [1000, 800, 3000, 1500, 2000];
    let employeeInfo = [];

    for (let i = 0; i < employes.length; i++) {
        if(name === employes[i]) {
            employeeInfo.push(name);
            employeeInfo.push(salary[i])
            return employeeInfo
        } 
    }
    return null
}
console.log(getEmployeeInfo('Mary'));
console.log(getEmployeeInfo('Garry'));