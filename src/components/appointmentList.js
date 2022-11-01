import React from "react";

function AppointmentList({appointmentList}) {
    return (
        <ul>
            {appointmentList?.map((appointment) => (
                <li key={appointment.id}>
                    {appointment.start} - {appointment.end} - {appointment.description}
                </li>
            ))}
        </ul>
    );
}

export default AppointmentList;