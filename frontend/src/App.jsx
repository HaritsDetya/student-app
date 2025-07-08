import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { getStudents, createStudent, deleteStudent } from "./api/studentApi";

function App() {
  const [students, setStudents] = useState([]);

  const load = () => getStudents().then(setStudents);

  useEffect(() => {
    load();
  }, []);

  const handleSave = async (student) => {
    await createStudent(student);
    load();
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    load();
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Manajemen Mahasiswa</h1>
      <StudentForm onSave={handleSave} />
      <StudentList students={students} onDelete={handleDelete} />
    </div>
  );
}

export default App;
