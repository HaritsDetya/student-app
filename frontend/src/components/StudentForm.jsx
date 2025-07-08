import { useState } from "react";

export default function StudentForm({ onSave, initialData }) {
  const [form, setForm] = useState(initialData || {
    id: "", namaDepan: "", namaBelakang: "", tanggalLahir: ""
  });

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
        placeholder="NIM" className="w-full border p-2" required />
      <input name="namaDepan" value={form.namaDepan} onChange={handleChange}
        placeholder="Nama Depan" className="w-full border p-2" required />
      <input name="namaBelakang" value={form.namaBelakang} onChange={handleChange}
        placeholder="Nama Belakang (opsional)" className="w-full border p-2" />
      <input name="tanggalLahir" type="date" value={form.tanggalLahir} onChange={handleChange}
        className="w-full border p-2" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Simpan</button>
    </form>
  );
}
