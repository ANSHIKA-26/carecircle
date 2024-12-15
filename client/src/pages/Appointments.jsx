import React from "react";
import { useSelector } from "react-redux";
import "../styles/user.css";
import DoctorAppointments from "./DoctorAppointments";
import PatientAppointments from "./PatientAppointments";

const Appointments = () => {
  // Get user data from the store
  const user = useSelector((state) => state.user);
  const isDoctor = user?.isDoctor

  return (
    <>
      {isDoctor ? <DoctorAppointments /> : <PatientAppointments />}
    </>
  );
};

export default Appointments;
