import React, { useState } from "react";



const AdminDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker selected={startDate} showTimeSelect dateFormat="Pp" className="booking__date-inp" onChange={date => setStartDate(date)} />
    );
};

export default AdminDatePicker