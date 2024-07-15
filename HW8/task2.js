// Task 2. Перед вами структура компании, и ниже представлены задания, относящиеся к ней.
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

const enterprises = [
	{
		id: 1,
		name: 'Предприятие 1',
		departments: [
			{
				id: 2,
				name: 'Отдел тестирования',
				employees_count: 9,
			},
			{
				id: 3,
				name: 'Отдел маркетинга',
				employees_count: 20,
			},
			{
				id: 4,
				name: 'Администрация',
				employees_count: 15,
			},
		],
	},
	{
		id: 5,
		name: 'Предприятие 2',
		departments: [
			{
				id: 6,
				name: 'Отдел разработки',
				employees_count: 50,
			},
			{
				id: 7,
				name: 'Отдел маркетинга',
				employees_count: 20,
			},
			{
				id: 8,
				name: 'Отдел охраны труда',
				employees_count: 5,
			},
		],
	},
	{
		id: 9,
		name: 'Предприятие 3',
		departments: [
			{
				id: 10,
				name: 'Отдел аналитики',
				employees_count: 0,
			},
		],
	},
]


/* Задания:
	1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

	**Пример:**

	Предприятие 1 (45 сотрудников)
	- Отдел тестирования (10 сотрудников)
	- Отдел маркетинга (20 сотрудников)
	- Администрация (15 человек)
	Предприятие 2 (75 сотрудников)
	- Отдел разработки (50 сотрудников)
	- Отдел маркетинга (20 сотрудников)
	- Отдел охраны труда (5 сотрудников)
	Предприятие 3 (нет сотрудников)
	- Отдел аналитики (нет сотрудников)
*/

function sumOfEmployers(departments) {
	return departments.reduce((sum, el) => sum + el.employees_count, 0)
}

function printDepartment (departments) {
	return departments.map(el => {
		return `- ${el.name} (${el.employees_count} сотрудников),\n`})
}

function printEnterprise (enterpise) {
	return enterpise.map(el => {
		console.log(`- ${el.name} (${sumOfEmployers(el.departments)} сотрудников): \n ${printDepartment(el.departments)}`)})
}

printEnterprise(enterprises);


// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

function getEnterpriseName(arg) {
	const cloneEnterprises = new Object(enterprises).find(ent => ent.departments.find(dep => dep.id === arg || dep.name === arg))
		
	return cloneEnterprises ? cloneEnterprises.name : 'Department is not exist'
}

console.log(getEnterpriseName(10));
console.log(getEnterpriseName('Отдел маркетинга'))


// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
// Пример:
// addEnterprise("Название нового предприятия")

function findMaxID() {
	const arr = []
	for (let i = 0; i < enterprises.length; i++) {
		arr.push(enterprises[i].id)
		arr.push(...enterprises[i].departments.map(el => el.id))
	}
	return Math.max(...arr)
}

function addEnterprise(name) {
	let nextID = findMaxID() + 1;
	const copyEnterprise = structuredClone(enterprises) 
	const newEnterprise = {
		id: nextID,
		name: name,
		departments: [],
	};
	copyEnterprise.push(newEnterprise)
	
	return copyEnterprise
}

console.log(addEnterprise('Новое предприятие'));


// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
// Пример:
// addDepartment(1, "Название нового отдела")

function addDepartment(id, name) {
	let nextID = findMaxID() + 1;
	let copyEnterprise = structuredClone(enterprises) 
	const newDepartment = {
		id: nextID,
		name: name
	};

	copyEnterprise.find(enterprise => {
		return enterprise.id === id ? enterprise.departments.push(newDepartment) : false
	})

	return copyEnterprise
}

console.log(addDepartment(5, 'Новый отдел'));


// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

function editEnterprise(id, name) {
	const copyEnterprise = structuredClone(enterprises) 

	copyEnterprise.find(enterprise => {
		return enterprise.id === id ? enterprise.name = name : false
	})

	return copyEnterprise
}

console.log(editEnterprise(5, 'Новое название предприятия'));


// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

function editDepartment(id, name) {
	const copyEnterprise = structuredClone(enterprises) 

	for (let i = 0; i < copyEnterprise.length; i++) {
		copyEnterprise[i].departments.find(el => {
			return el.id === id ? el.name = name : false
		})
	}

	return copyEnterprise
}

console.log(editDepartment(7, 'Новое название отдела'));

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
// Пример:
// deleteEnterprise(1)

function deleteEnterprise(id) {
	const copyEnterprise = structuredClone(enterprises) 
	let indexEnterprise = copyEnterprise.findIndex(el => el.id === id)
	
	if (indexEnterprise !== -1) {
		copyEnterprise.splice(indexEnterprise, 1)
		return copyEnterprise
	} else {
		return 'Предприятие не найдено.'
	}
}

console.log(deleteEnterprise(1));



// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
// Пример:
// deleteDepartment(3)

// function checkEmployeesCount(id) {
// 	const copyEnterprise = structuredClone(enterprises) 
// 	let department 
// 	for (let ent of copyEnterprise) {
// 		if (ent.departments.find(el => el.id === id)) {
// 			return ent.departments.employees_count
// 		}
// 		console.log(ent.departments);
// 	}
// 	//return department
// }

// console.log(checkEmployeesCount(7));

// function deleteDepartment(id) {
	
// }

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
// Пример:
// moveEmployees(2, 3)
