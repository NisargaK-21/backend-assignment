const db = require("../database/db");

const createPrescription = (
    doctor_id,
    patient_id,
    medicine,
    dosage,
    notes,
    callback
) => {

    const sql = `
        INSERT INTO prescriptions
        (doctor_id, patient_id, medicine, dosage, notes)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.run(
        sql,
        [doctor_id, patient_id, medicine, dosage, notes],
        callback
    );
};


const updatePrescription = (
    id,
    doctor_id,
    medicine,
    dosage,
    notes,
    callback
) => {

    const sql = `
        UPDATE prescriptions
        SET medicine = ?, dosage = ?, notes = ?
        WHERE id = ? AND doctor_id = ?
    `;

    db.run(
        sql,
        [medicine, dosage, notes, id, doctor_id],
        callback
    );
};

const getDoctorPrescriptions = (
    doctor_id,
    callback
) => {

    const sql = `
        SELECT * FROM prescriptions
        WHERE doctor_id = ?
    `;

    db.all(sql, [doctor_id], callback);
};

const getPatientPrescriptions = (
    patient_id,
    callback
) => {

    const sql = `
        SELECT * FROM prescriptions
        WHERE patient_id = ?
    `;

    db.all(sql, [patient_id], callback);
};

module.exports = {
    createPrescription,
    updatePrescription,
    getDoctorPrescriptions,
    getPatientPrescriptions
};