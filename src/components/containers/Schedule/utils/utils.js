import moment from 'moment';

const formatTime = time => {};

/* 
    getPositionOfTimeFromLeftSide
*/

const getPositionOfTimeFromLeftSide = time => {
  let absoluteHours;

  if (typeof time === 'number') {
    absoluteHours = time;
  } else {
    const hours = moment(time).hours();
    const minutes = moment(time).minutes();

    absoluteHours = hours + minutes / 60;
  }

  if (!absoluteHours) return null;

  // column width of one hour is 65px
  const hourColumnWidth = 65;
  // grid table begins from 8 a.m
  const firstWorkHour = 8;
  // offset from left side of grid
  const offsetFromLeftBorder = 35;

  return (
    hourColumnWidth * (absoluteHours - (firstWorkHour - 1)) -
    offsetFromLeftBorder
  );
};

export { getPositionOfTimeFromLeftSide };
