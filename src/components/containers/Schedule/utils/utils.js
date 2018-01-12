import moment from 'moment';

// column width of one hour is 65px
export const HOUR_COLUMN_WIDTH = 65;
// grid table begins from 8 a.m
export const FIRST_WORK_HOUR = 8;
// grid table ends in 11 p.m
export const LAST_WORK_HOUR = 23;
// offset from left side of grid
export const OFFSET_FROM_LEFT_BORDER = 35;

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

  return (
    HOUR_COLUMN_WIDTH * (absoluteHours - (FIRST_WORK_HOUR - 1)) -
    OFFSET_FROM_LEFT_BORDER
  );
};

export { getPositionOfTimeFromLeftSide };
