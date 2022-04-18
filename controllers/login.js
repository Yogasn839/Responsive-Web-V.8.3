const usersData = require('../database/users.json');

function loginGet(req, res) {
    res.render('login');
    res.status(200).json();
}


function loginPost(req, res) {

    const inputusername = req.body.username;
    const inputPassword = req.body.password;
    const findDataIndex = usersData.findIndex((element) => element.email == inputusername);

    if (findDataIndex == -1) {
        res.status(403).json({ message: 'Email is not registered' });
    } else {
        if (usersData[findDataIndex].password != inputPassword) {
            res.status(403).json({ message: 'Wrong Password' });
        } else { // password sesuai
            res.status(200).json({ message: 'Login successful' });
        };
    };
};
module.exports = {
    loginGet,
    loginPost
}