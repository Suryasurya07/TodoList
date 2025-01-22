import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-purple-100 p-4 rounded shadow-md mb-4">
      <h3 className="text-lg font-bold">Calendar</h3>
      <Calendar onChange={setDate} value={date} />
      <p className="mt-2">Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default CalendarComponent;
