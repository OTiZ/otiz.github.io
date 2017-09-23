'use strict';

const moment = require('moment');

const Datetime = {
    getDisplayFromDate: function (datetime) {
        if (datetime === 'Present') {
            return datetime;
        }

        const applyFunc = function (dt) {
            const d = moment(dt, 'MMM YYYY');
            const date = d.date();
            return d.format('MMM YYYY');
        };
        const value = applyFunc(datetime);
        return value === 'Invalid date' ? datetime : value;
    }
};

module.exports = Datetime;
