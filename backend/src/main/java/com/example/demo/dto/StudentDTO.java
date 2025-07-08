package com.example.demo.dto;

import com.example.demo.model.Student;

import java.time.*;

public class StudentDTO {
    private String id;
    private String namaLengkap;
    private int usia;

    public StudentDTO(Student student) {
        this.id = student.getId();
        this.namaLengkap = student.getNamaBelakang() == null || student.getNamaBelakang().isEmpty()
                ? student.getNamaDepan()
                : student.getNamaDepan() + " " + student.getNamaBelakang();

        this.usia = Period.between(student.getTanggalLahir(), LocalDate.now()).getYears();
    }

    public String getId() { return id; }
    public String getNamaLengkap() { return namaLengkap; }
    public int getUsia() { return usia; }
}