const moment = require('moment')

function sayMyNmae(name)  {
    console.log (name);
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
}

sayMyNmae('Pedro Gazola')