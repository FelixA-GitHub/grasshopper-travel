<<<<<<< HEAD:seeds/consultant-seeds.js
const sequelize = require('../config/connection');
const { Consultant } = require('../models');
=======
const sequelize = require('../config/config');
const { User, Post } = require('../models');
>>>>>>> 7c8ee4643d7c79a7dfbb3bbe5a8153306a806a57:seeds/user-seeds.js

const userdata = [
    {
      username: 'alesmonde0',
      password: 'password123',
      email: 'nwestnedge0@cbc.ca',
      role: 'consultant'
    },
    {
      username: 'jwilloughway1',
      password: 'password123',
      email: 'rmebes1@sogou.com',
      role: 'consultant'
    },
    {
      username: 'iboddam2',
      password: 'password123',
      email: 'cstoneman2@last.fm',
      role: 'consultant'
    },
    {
      username: 'dstanmer3',
      password: 'password123',
      email: 'ihellier3@goo.ne.jp',
      role: 'consultant'
    },
    {
      username: 'djiri4',
      password: 'password123',
      email: 'gmidgley4@weather.com',
      role: 'consultant'
    },
    {
      username: 'msprague5',
      password: 'password123',
      email: 'larnout5@imdb.com',
      role: 'employer'
    },
    {
      username: 'mpergens6',
      password: 'password123',
      email: 'hnapleton6@feedburner.com',
      role: 'employer'
    },
    {
      username: 'tpenniell7',
      password: 'password123',
      email: 'kperigo7@china.com.cn',
      role: 'employer'
    },
    {
      username: 'msabbins8',
      password: 'password123',
      email: 'lmongain8@google.ru',
      role: 'employer'
    },
    {
      username: 'jmacarthur9',
      password: 'password123',
      email: 'bsteen9@epa.gov',
      role: 'employer'
    }
  ];
  
  const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});
  
  module.exports = seedUsers;