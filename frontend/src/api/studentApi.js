import axios from 'axios';

const BASE_URL = 'http://localhost:8080/students';

// Ambil daftar mahasiswa
export const getStudents = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Gagal mengambil data mahasiswa:', error);
    throw error;
  }
};

// Tambah mahasiswa baru
export const createStudent = async (student) => {
  try {
    const response = await axios.post(BASE_URL, student);
    return response.data;
  } catch (error) {
    console.error('Gagal menambahkan mahasiswa:', error);
    throw error;
  }
};

// Update data mahasiswa
export const updateStudent = async (id, student) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, student);
    return response.data;
  } catch (error) {
    console.error('Gagal memperbarui data mahasiswa:', error);
    throw error;
  }
};

// Hapus mahasiswa
export const deleteStudent = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Gagal menghapus mahasiswa:', error);
    throw error;
  }
};
