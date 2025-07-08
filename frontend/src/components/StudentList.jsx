export default function StudentList({ students, onDelete }) {
  return (
    <div className="bg-white p-4 shadow rounded mt-4">
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2">NIM</th>
            <th className="border px-2">Nama Lengkap</th>
            <th className="border px-2">Usia</th>
            <th className="border px-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td className="border px-2">{s.id}</td>
              <td className="border px-2">{s.namaLengkap}</td>
              <td className="border px-2">{s.usia}</td>
              <td className="border px-2">
                <button onClick={() => onDelete(s.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
