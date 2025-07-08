package com.example.demo.controller;

import com.example.demo.dto.StudentDTO;
import com.example.demo.model.Student;
import com.example.demo.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "*")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @GetMapping
    public List<StudentDTO> getAllStudents() {
        return service.getAll().stream().map(StudentDTO::new).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable String id) {
        return service.getById(id);
    }

    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        return service.save(student);
    }

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable String id, @RequestBody Student student) {
        student.setId(id);
        return service.save(student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable String id) {
        service.delete(id);
    }
}
