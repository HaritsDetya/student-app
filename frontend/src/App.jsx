import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import {
  getStudents,
  createStudent,
  deleteStudent,
  updateStudent
} from "./api/studentApi";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const load = () => getStudents().then(setStudents);

  useEffect(() => {
    load();
  }, []);

  const handleSave = async (student) => {
    if (editingStudent) {
      await updateStudent(student.id, student);
      setEditingStudent(null);
    } else {
      await createStudent(student);
    }
    load();
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    load();
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Manajemen Mahasiswa</h1>
      <StudentForm
        onSave={handleSave}
        editingStudent={editingStudent}
        cancelEdit={handleCancelEdit}
      />
      <StudentList
        students={students}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
