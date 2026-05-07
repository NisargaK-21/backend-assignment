const express = require("express");

const router = express.Router();

const {
    addPrescription,
    editPrescription,
    doctorPrescriptions,
    patientPrescriptions
} = require("../controllers/prescriptionController");

const authMiddleware = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");

router.post(
    "/",
    authMiddleware,
    roleMiddleware("doctor"),
    addPrescription
);

router.put(
    "/:id",
    authMiddleware,
    roleMiddleware("doctor"),
    editPrescription
);

router.get(
    "/doctor",
    authMiddleware,
    roleMiddleware("doctor"),
    doctorPrescriptions
);

router.get(
    "/patient",
    authMiddleware,
    roleMiddleware("patient"),
    patientPrescriptions
);

module.exports = router;