// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Contact = require('./models/Contact');

const contacts = [
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.j@example.com',
    favoriteColor: 'blue',
    birthday: new Date('1992-05-14')
  },
  {
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob.smith@example.com',
    favoriteColor: 'green',
    birthday: new Date('1988-11-20')
  },
  {
    firstName: 'Carol',
    lastName: 'Lopez',
    email: 'carol.lopez@example.com',
    favoriteColor: 'purple',
    birthday: new Date('1995-03-08')
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Contact.deleteMany(); 
    await Contact.insertMany(contacts);
    console.log('Contacts inserted!');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
