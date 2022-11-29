const express = require("express");
const app = express();

const courses = [
	{
		id: 1000,
		name: "Frontend Fundamentals",
		students: [2000],
	},
];

const students = [
	{
		id: 2000,
		name: "Juan",
		lastName: "Perez",
	},
];

// Obtener todos los cursos
// GET /courses
app.get("/courses", function (request, response) {
	response.status(200).json(courses);
});

// Obtener un curso en particular
// GET /courses/:id
// Ejemplo: GET /courses/5000
app.get("/courses/:id", function (request, response) {
	const { id } = request.params;
	const course = courses.find((c) => c.id.toString() === id);

	if (!course) {
		response.status(404).json({
			error: `No se encontró el curso ${id}`,
		});
	} else {
		response.status(200).json({
			...course,
			students: course.students.map((id) => students.find((s) => s.id === id)),
		});
	}
});

// Obtener todos los alumnos
// GET /alumnos
app.get("/students", function (request, response) {
	response.status(200).json(students);
});

// Obtener los alumnos de un curso en particular
// GET /courses/:id/students
app.get("/courses/:id/students", function (request, response) {
	const { id } = request.params;
	const course = courses.find((c) => c.id.toString() === id);

	if (!course) {
		response.status(404).json({
			error: `No se encontró el curso ${id}`,
		});
	} else {
		const courseStudents = course.students.map((id) =>
			students.find((s) => s.id === id)
		);
		response.status(200).json(courseStudents);
	}
});

// Crear un nuevo curso

// Crear un nuevo alumno

// Asignar un alumno a un curso

app.listen(8080);
