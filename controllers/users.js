   const usersData = require('../database/users.json') //menampilkan file database user

   function users(req, res) {
       res.render('login');
       res.status(200);
       return res.json(usersData);
   };

   function usersById(req, res) {

       const id = req.params.id;
       console.log(id);
       const result = usersData.find((item) => {
           return item.id == id;
       });
       if (!result) {
           return res.status(404).json({
               message: 'User not found'
           });
       } else {
           return res.status(200).json({
               message: 'User found',
               data: result,
           });
       };
   };
   module.exports = {
       users,
       usersById
   };