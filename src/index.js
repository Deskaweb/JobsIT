const express = require('express');

const config = require('./server/config');

require('./database');
const app = config(express());



app.listen(app.get('port'), () => {
    console.log('Sever funcionando', app.get('port'));
})