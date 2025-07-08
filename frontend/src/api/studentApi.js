const BASE_URL = "http://localhost:8080/students";

export const getStudents = async () =>
  fetch(BASE_URL).then(res => res.json());

export const createStudent = async (student) =>
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });

export const updateStudent = async (id, student) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });

export const deleteStudent = async (id) =>
  fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
