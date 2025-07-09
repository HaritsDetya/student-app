package com.example.demo.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;

@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public List<Student> getAll() {
        return repository.findAll();
    }

    public Student getById(String id) {
        return repository.findById(id).orElse(null);
    }

    public Student save(Student student) {
        if (student.getTanggalLahir().isAfter(LocalDate.now())) {
            throw new IllegalArgumentException("Tanggal lahir tidak boleh di masa depan.");
        }
            return repository.save(student);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }
}
