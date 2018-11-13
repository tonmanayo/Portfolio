import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment'

const localizer = BigCalendar.momentLocalizer(moment);
const MyBigCalendar = (props) => (
  <BigCalendar
    {...props}
    localizer={localizer}
    startAccessor="start"
    endAccessor="end"
  />
);

export default MyBigCalendar