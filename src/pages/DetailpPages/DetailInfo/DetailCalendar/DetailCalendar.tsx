import * as React from "react";
import DateRangePicker, {
  OnSelectCallbackParam,
  StateDefinitions,
} from "react-daterange-picker";
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment:any = extendMoment(Moment);

const stateDefinitions: StateDefinitions = {
  available:{
    color : 'null',
    label: "Available",
  },
  unavailable: {
    selectable: false,
    color: "#78818b",
    label: "Unavailable",
  },
  fancy: {
    color: "purple",
    label: "Fancy",
  },
};

const dateRanges = [
  // {
  //   state: "enquire",
  //   range: moment.range(
  //     moment().add(2, "weeks").subtract(5, "days"),
  //     moment().add(2, "weeks").add(6, "days")
  //   ),
  // },
  {
    state: "fancy",
    range: moment.range(moment().add(1, "days"), moment().add(3, "days")),
  },
  {
    state: "unavailable",
    range: moment.range(
      moment().add(3, "weeks"),
      moment().add(3, "weeks").add(5, "days")
    ),
  },
];

export const DetailCalendar: React.FC<{}> = () => {
  const [value, setValue] = React.useState();

  const handleSelect=(value: OnSelectCallbackParam)=>{
    setValue(moment.range(value.start, value.end));
  }

  return (
    <DateRangePicker
      firstOfWeek={1}
      numberOfCalendars={2}
      selectionType="range"
      minimumDate={new Date()}
      stateDefinitions={stateDefinitions}
      dateStates={dateRanges}
      defaultState="available"
      showLegend={true}
      value={value}
      onSelect={handleSelect}
    />
  );
};
