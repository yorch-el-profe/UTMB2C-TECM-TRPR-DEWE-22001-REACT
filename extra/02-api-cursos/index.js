const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();

// Middleware
// app.use(function) => Para todas las rutas
// app.use("/ruta", function) => Únicamente para la ruta "/ruta"
// app.post("/ruta", mw1, mw2, mw3, function(request, response) {})

// Middleware que en cada petición imprime la ruta accesada
app.use(function (request, response, next) {
	console.log(request.method, request.url);
	next(); // La petición continue su camino (es decir, otro middleware o la petición final)
});

// Middleware que convierta el binario del body a un JSON
app.use(express.json());

// Middleware que ejecuta las validaciones de "express-validator"
function validate(request, response, next) {
	const errors = validationResult(request);

	if (!errors.isEmpty()) {
		return response.status(400).json({ errors: errors.array() });
	}

	next();
}

let lastCourseId = 1000;
let lastStudentId = 2000;

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
		age: 28,
	},
	{
		id: 2001,
		name: "Luis",
		lastName: "Fuentes",
		age: 25,
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
// GET /students
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
// POST /courses
app.post(
	"/courses",
	body("name").isLength({ min: 1 }),
	validate,
	function (request, response) {
		const { name } = request.body;
		const newCourse = { id: ++lastCourseId, name, students: [] };
		courses.push(newCourse);
		response.status(201).json(newCourse);
	}
);

// Crear un nuevo alumno
// POST /students

// Asignar un alumno a un curso
// PUT /courses/:id/students/:id
app.put("/courses/:courseId/students/:studentId", function (request, response) {
	const { courseId, studentId } = request.params;
	const course = courses.find((c) => c.id.toString() === courseId);

	if (!course) {
		return response.status(404).json({
			error: `El curso con id ${courseId} no existe`,
		});
	}

	const student = students.find((s) => s.id.toString() === studentId);

	if (!student) {
		return response.status(404).json({
			error: `El alumno con id ${studentId} no existe`,
		});
	}

	if (course.students.includes(student.id)) {
		return response.status(400).json({
			error: `El alumno ${student.name} ya está asignado al curso ${course.name}`,
		});
	}

	course.students.push(student.id);

	response.status(204).end();
});

app.listen(8080);

// Códigos de respuesta
// 200 - OK
// 201 - Creado
// 204 - OK sin respuesta
// 300 - Redirecciones
// 400 - Error por parte del usuario
// 401 - No autorizado
// 404 - No encontrado
// 500 - Error por parte del servidor
