const usersData = require('../database/users.json'); //menampilkan file database user

function loginGet(req, res) {
    res.render('login'); //menampilkan form login
    res.status(200).json(); //menampilkan status
}


function loginPost(req, res) {

    const inputusername = req.body.username;
    const inputpassword = req.body.password;
    const findDataIndex = usersData.findIndex((element) => element.email == inputusername); //menampilkan data dari database

    if (findDataIndex == -1) {
        res.status(403).json({ message: 'email tidak terdaftar' });
    } else {
        if (usersData[findDataIndex].password != inputpassword) {
            res.status(403).json({ message: 'password salah' });
        } else { // password sesuai
            res.status(200).json({ message: 'login berhasil' });
        };
    };
};
module.exports = {
    loginGet,
    loginPost
}