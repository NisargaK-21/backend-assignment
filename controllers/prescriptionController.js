const {
    createPrescription,
    updatePrescription,
    getDoctorPrescriptions,
    getPatientPrescriptions
} = require("../models/prescriptionModel");

const addPrescription = (req, res) => {

    const doctor_id = req.user.id;

    const {
        patient_id,
        medicine,
        dosage,
        notes
    } = req.body;

    if (!patient_id || !medicine || !dosage) {

        return res.status(400).json({
            message: "Required fields missing"
        });
    }

    createPrescription(
        doctor_id,
        patient_id,
        medicine,
        dosage,
        notes,
        (err) => {

            if (err) {

                return res.status(500).json({
                    message: err.message
                });
            }

            res.status(201).json({
                message: "Prescription created successfully"
            });
        }
    );
};


const editPrescription = (req, res) => {

    const doctor_id = req.user.id;

    const prescriptionId = req.params.id;

    const {
        medicine,
        dosage,
        notes
    } = req.body;

    updatePrescription(
        prescriptionId,
        doctor_id,
        medicine,
        dosage,
        notes,
        function(err) {

            if (err) {

                return res.status(500).json({
                    message: err.message
                });
            }

            if (this.changes === 0) {

                return res.status(404).json({
                    message: "Prescription not found or unauthorized"
                });
            }

            res.json({
                message: "Prescription updated successfully"
            });
        }
    );
};

const doctorPrescriptions = (req, res) => {

    const doctor_id = req.user.id;

    getDoctorPrescriptions(
        doctor_id,
        (err, prescriptions) => {

            if (err) {

                return res.status(500).json({
                    message: err.message
                });
            }

            res.json(prescriptions);
        }
    );
};

const patientPrescriptions = (req, res) => {

    const patient_id = req.user.id;

    getPatientPrescriptions(
        patient_id,
        (err, prescriptions) => {

            if (err) {

                return res.status(500).json({
                    message: err.message
                });
            }

            res.json(prescriptions);
        }
    );
};


module.exports = {
    addPrescription,
    editPrescription,
    doctorPrescriptions,
    patientPrescriptions
};