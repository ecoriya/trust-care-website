import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './DoctorCard';
import './Appoinment.css';

function BookAppointment() {
  const location = useLocation();
  const preferredDoctorFromState = location.state?.preferredDoctor || "";

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    history: "",
    symptoms: "",
    preferredDoctor: preferredDoctorFromState,
    mobile: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      preferredDoctor: preferredDoctorFromState,
    }));
  }, [preferredDoctorFromState]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay(); // 0 = Sunday, 6 = Saturday
    return day >= 1 && day <= 6; // Monday to Saturday only
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidDate(formData.date)) {
      alert("Appointments are only available Monday to Saturday.");
      return;
    }

    // Combine date and time for MySQL datetime format
    const appointmentTime = `${formData.date} ${convertTo24Hour(formData.time)}`;

    const submissionData = { ...formData, appointmentTime };

    fetch('http://localhost:3001/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submissionData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to book appointment");
        return res.text();
      })
      .then((data) => {
        alert("Appointment booked successfully!");
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        alert("Error booking appointment.");
      });
  };

  const convertTo24Hour = (time12h) => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");

    if (modifier === "PM" && hours !== "12") {
      hours = parseInt(hours, 10) + 12;
    }
    if (modifier === "AM" && hours === "12") {
      hours = "00";
    }

    return `${hours}:${minutes}:00`;
  };

  return (
    <div className="appointment-page">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          required
        />
        <select name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <textarea
          name="history"
          placeholder="Previous History"
          onChange={handleChange}
        ></textarea>
        <textarea
          name="symptoms"
          placeholder="Symptoms"
          onChange={handleChange}
          required
        ></textarea>
        <select
          name="preferredDoctor"
          value={formData.preferredDoctor}
          onChange={handleChange}
          required
        >
          <option value="">Select Preferred Doctor</option>
          <option value="Dr. Sanjh Sahu">Dr. Sanjh Sahu</option>
          <option value="Dr. Deepthi">Dr. Deepthi</option>
          <option value="Dr. Vishwakanth">Dr. Vishwakanth</option>
          <option value="Dr. Krishna Reddy">Dr. Krishna Reddy</option>
        </select>
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
        />

        {/* Date Picker */}
        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
        />

        {/* Time Slot */}
        <select name="time" onChange={handleChange} required>
          <option value="">Select Time Slot</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="09:30 AM">09:30 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="10:30 AM">10:30 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="11:30 AM">11:30 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="12:30 PM">12:30 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:30 PM">02:30 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="03:30 PM">03:30 PM</option>
          <option value="04:00 PM">04:00 PM</option>
          <option value="04:30 PM">04:30 PM</option>
          <option value="05:00 PM">05:00 PM</option>
        </select>

        <button type="submit">Book Appointment</button>
      </form>
      <button style={{ marginTop: "10px" }}>Make Payment</button>
    </div>
  );
}

export default BookAppointment;
