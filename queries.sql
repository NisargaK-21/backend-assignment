CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT CHECK(role IN ('doctor', 'patient')) NOT NULL
);

CREATE TABLE prescriptions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    doctor_id INTEGER,
    patient_id INTEGER,
    medicine TEXT NOT NULL,
    dosage TEXT NOT NULL,
    notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (doctor_id) REFERENCES users(id),
    FOREIGN KEY (patient_id) REFERENCES users(id)
);

INSERT INTO users (name, email, password, role)
VALUES
('Nishu', 'nishu@gmail.com', 'hashed_password', 'patient'),
('Dr Strange', 'doctor@gmail.com', 'hashed_password', 'doctor');

INSERT INTO prescriptions
(doctor_id, patient_id, medicine, dosage, notes)
VALUES
(2, 1, 'Ibuprofen', 'Three times daily', 'Drink more water');