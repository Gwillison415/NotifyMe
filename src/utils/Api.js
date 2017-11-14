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

  static findAvatar(personStr = 'grant') {

    switch (personStr) {
      case 'jeff':
        return "https://media.licdn.com/media/AAEAAQAAAAAAAAXhAAAAJGY3MDhmNGY2LWE5OTktNGE5MS1iM2QyLTk4YTk1MTkxYTM1Mg.jpg"
      case 'andrew':
        return "https://media.licdn.com/media/AAEAAQAAAAAAAAstAAAAJDBmOTZiZTVkLTQyMGYtNDM4ZS1hOTA5LTc2MjI5ZTkxZDcyYg.jpg"
      case 'neil':
        return "https://media.licdn.com/media/p/3/000/042/346/0892fab.jpg"
      case "grant":
       return "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/10347425_10154552968930344_3019511571965366529_n.jpg?oh=589ec00f0630750a24196b15fb0ccd76&oe=5A943FA8"
      case "adrian":
        return "https://media.licdn.com/media/AAEAAQAAAAAAAAOEAAAAJDczNzAzZTVjLWQxN2ItNGI3ZC1hNTliLWNiOWZmNTI2MzU1Ng.jpg"
      case "mike":
        return "https://media.licdn.com/media/p/5/000/21d/0d4/3539fea.jpg"
      default:
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_l6tnaf5dv6g7lKi7MZnW6NzW_dOdcUatQNWvNdaDMoPGPe03Q"

    }

  }
}
