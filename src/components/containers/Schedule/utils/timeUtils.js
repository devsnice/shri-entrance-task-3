import moment from 'moment';

const formatTime = time => `${moment(time).hours()}:${moment(time).minutes()}`;

export { formatTime };
