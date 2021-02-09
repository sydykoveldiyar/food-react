import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './admin-booking.css'

import "react-datepicker/dist/react-datepicker.css";

const AdminDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker selected={startDate} showTimeSelect dateFormat="Pp" className="booking__date-inp" onChange={date => setStartDate(date)} />
    );
};

export default AdminDatePicker