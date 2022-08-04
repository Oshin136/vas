import { Calendar } from "antd";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";
import type { Moment } from "moment";

function AppointmentCalendar() {
  const onPanelChange = (value: Moment, mode: CalendarMode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <div>
      <h1>Appointment Schedules</h1>
      <Calendar onPanelChange={onPanelChange} />;
    </div>
  );
}

export default AppointmentCalendar;
