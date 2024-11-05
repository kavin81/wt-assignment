import { useState } from "react";
import "./styles.css";
import { data } from "./data.json";

const App = () => {
    const [appointments, setAppointments] = useState(data);

    const markAsCompleted = (id) => {
        setAppointments(appointments.map(appointment =>
            appointment.id === id ? { ...appointment, status: "completed" } : appointment
        ));
    };

    return (
        <div className="appointment_parent_container">
            <h1>Patient Appointments</h1>
            {appointments.map(({ id, name, reason, date, status }) => (
                <div key={id} className="appointment_child_containers">
                    <h2 className={status === "completed" ? "completed" : ""}>{name}</h2>
                    <p>Reason: {reason}</p>
                    <p>Date: {date}</p>
                    <p>Status: <b>{status}</b></p>
                    {status === "scheduled" && (
                        <button onClick={() => markAsCompleted(id)}>Mark as Completed</button>
                    )}
                </div>
            ))}
            <h2>Total Completed Appointments: {appointments.filter(appointment => appointment.status === "completed").length}</h2>
        </div>
    );
};

export default App;
