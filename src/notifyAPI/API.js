// import moment from 'moment';
var moment = require('moment');
export default class NOTIFY_API {

  static returnDate(unix) {
    let date = new Date(unix);
    let time = moment.unix(unix).format('dd, MMM YYYY, HH:mm')
    return time
  }

  async request(path, method = 'GET', body = null) {
    if (body) body = JSON.stringify(body)
    return await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: body
    })
  }
}
