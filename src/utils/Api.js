// import moment from 'moment';
var moment = require('moment');
export default class NOTIFY_API {

  static returnDate(unix) {
    let date = new Date(unix);
    let time = moment.unix(unix).format('Do, MMM YYYY, HH:mm')
    return time
  }

  async request(path, method = 'GET', body = null) {
    if (body)
      body = JSON.stringify(body)
    return await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: body
    })
  }

  static getDateTimeSince(target) { // target should be a Date object
    var now = new Date(),
      yd, md, dd, hd, nd, sd, out = [];

    yd = now.getFullYear() - target.getFullYear();
    md = now.getMonth() - target.getMonth();
    dd = now.getDate() - target.getDate();
    hd = now.getHours() - target.getHours();
    nd = now.getMinutes() - target.getMinutes();
    sd = now.getSeconds() - target.getSeconds();

    if (md < 0) {
      yd--;
      md += 12;
    }
    if (dd < 0) {
      md--;
      dd += getDaysInMonth(now.getMonth() - 1, now.getFullYear());
    }
    if (hd < 0) {
      dd--;
      hd += 24;
    }
    if (nd < 0) {
      hd--;
      nd += 60;
    }
    if (sd < 0) {
      nd--;
      sd += 60;
    }

    if (yd > 0)
      out.push(yd + " Y" + (
        yd === 1
        ? ""
        : "'s"));
    if (md > 0)
      out.push(md + " MO" + (
        md === 1
        ? ""
        : "'s"));
    if (dd > 0)
      out.push(dd + " day" + (
        dd === 1
        ? ""
        : "s"));
    if (hd > 0)
      out.push(hd + "H" + (
        hd === 1
        ? ""
        : "s"));
    if (nd > 0)
      out.push(nd + "M" + (
        nd === 1
        ? ""
        : "s"));
    if (sd > 0)      out.push(sd + "Second" + (
        sd === 1
        ? ""
        : "s"));
    return out.join(" ");

    function getDaysInMonth(month, year) {
      if (typeof year === "undefined")
        year = 1999; // any non-leap-year works as default
      var currmon = new Date(year, month),
        nextmon = new Date(year, month + 1);
      return Math.floor((nextmon.getTime() - currmon.getTime()) / (24 * 3600 * 1000));
    }
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
