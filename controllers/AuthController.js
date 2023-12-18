const db = require('../utils/db');
const bcrypt = require('bcrypt');

class AuthController {
  async register(req, res) {
    const data = req.body;

    const nama = data.nama;
    const email = data.email;
    const telpon = data.telpon;
    const password = data.password;

    // check email
    const checkEmail = await db
      .promise()
      .query(`SELECT email from users WHERE email = '${email}'`);

    if (checkEmail[0].length == 1) {
      return res.json({
        error: 'maaf email sudah terdaftar',
      });
    }

    const salt = await bcrypt.genSalt(10);
    const encryptPassword = await bcrypt.hash(password, salt);

    const insert = await db
      .promise()
      .query(
        `INSERT INTO users (nama, email, telpon, password) VALUES ('${nama}', '${email}', '${telpon}', '${encryptPassword}')`
      );

    return res.json({
      message: 'users berhasil terdaftar',
    });
  }

  async login(req, res) {
    const data = req.body;

    const nama = data.nama;
    const email = data.email;
    const password = data.password;

    const checkNamaOrEmail = await db
      .promise()
      .query(
        `SELECT nama, email, telpon, password FROM users WHERE nama = '${nama}' OR email = '${email}'`
      );

    // check nama atau email
    if (checkNamaOrEmail[0].length == 0) {
      return res.json({
        message: 'maaf nama atau email anda tidak terdaftar',
      });
    }

    // check password
    const checkPassword = await bcrypt.compare(
      password,
      checkNamaOrEmail[0][0].password
    );

    if (!checkPassword) {
      return res.json({
        message: 'maaf password anda salah',
      });
    }

    return res.json({
      success: true,
      user: {
        nama: checkNamaOrEmail[0][0].nama,
        email: checkNamaOrEmail[0][0].email,
      },
    });
  }
}

module.exports = new AuthController();
