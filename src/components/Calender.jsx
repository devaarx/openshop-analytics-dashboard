import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Calender() {

    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };

    return (
            <div >
                <Calendar
                    onChange={onChange}
                    value={date}
                />
            </div>
    )
}

export default Calender
