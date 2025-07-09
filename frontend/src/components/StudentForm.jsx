import { useEffect, useState } from "react";

export default function StudentForm({ onSave, editingStudent, cancelEdit }) {
  const [form, setForm] = useState({
    id: "",
    namaDepan: "",
    namaBelakang: "",
    tanggalLahir: ""
  });

  useEffect(() => {
    if (editingStudent) {
      setForm(editingStudent);
    } else {
      setForm({ id: "", namaDepan: "", namaBelakang: "", tanggalLahir: "" });
    }
  }, [editingStudent]);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onSave(form);
    setForm({ id: "", namaDepan: "", namaBelakang: "", tanggalLahir: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow">
      <input name="id" value={form.id} onChange={handleChange}
        placeholder="NIM" className="w-full border p-2" required disabled={!!editingStudent} />
      <input name="namaDepan" value={form.namaDepan} onChange={handleChange}
        placeholder="Nama Depan" className="w-full border p-2" required />
      <input name="namaBelakang" value={form.namaBelakang} onChange={handleChange}
        placeholder="Nama Belakang (opsional)" className="w-full border p-2" />
      <input name="tanggalLahir" type="date" value={form.tanggalLahir} onChange={handleChange}
        className="w-full border p-2" required />

      <div className="flex space-x-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editingStudent ? "Update" : "Simpan"}
        </button>
        {editingStudent && (
          <button type="button" onClick={cancelEdit} className="bg-gray-400 text-white px-4 py-2 rounded">
            Batal
          </button>
        )}
      </div>
    </form>
  );
}
