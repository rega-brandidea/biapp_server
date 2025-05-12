const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const login = async (username,password) => {
    let message = {};
    const password1 = 'Pass@123';
    const hash =  await bcrypt.hash(password1,10);
    console.log('Hash:', hash);
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [username]);
    if(rows.length > 0)
    {
         
         stored_password=rows[0]['password'];        
         const match = await bcrypt.compare(password, stored_password);
         if(match)
         {
            const payload = {
                id: rows[0]['id'],
                email: rows[0]['email'],
              };
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN || '1h',
              });
            message.status='true';
            message.message=' Login successfully';
            message.data = { 
                user: payload,
                token: token,
              };
         }
         else{
            message.status='false';
            message.message='Unauthorized User';
            message.data=[];
         }
         
       
    }
    else
    {
        message.status='false';
        message.message='No user';
        message.data=[];
        
    }

    return message; // Returns the first matching user
  };
  module.exports = { login };