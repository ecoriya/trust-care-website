//import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md">
      <h3 className="text-xl font-semibold">{doctor.name}</h3>
      <p className="text-gray-600">{doctor.specialty}</p>
      <Link to={`/book/${doctor.id}`} className="text-blue-500 mt-2 inline-block">
        Book Appointment
      </Link>
    </div>
  );
};

export default DoctorCard;
