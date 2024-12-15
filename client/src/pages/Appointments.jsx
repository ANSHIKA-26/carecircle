import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DoctorAppointments from "./DoctorAppointments";
import PatientAppointments from "./PatientAppointments";
import "../styles/user.css";

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
