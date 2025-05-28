import React, { useEffect, useState } from 'react';

const AppointmentsDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments when the component mounts
  useEffect(() => {
    fetch('http://localhost:3001/api/appointments')
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      })
      .catch((err) => console.error('Error fetching appointments:', err));
  }, []);

  return (
    <div className="appointments-dashboard">
      <h2>Appointments Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Preferred Doctor</th>
            <th>Appointment Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length > 0 ? (
            appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.name}</td>
                <td>{appointment.age}</td>
                <td>{appointment.gender}</td>
                <td>{appointment.preferredDoctor}</td>
                <td>{appointment.appointmentTime}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No appointments available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsDashboard;
