const express = require('express')
const Users = require('../schema/user')
const Homeworks = require('../schema/homeworks')
module.exports.registration = async function (request, response) {

    try{
   
       const user = new Users({
        name: request.body.Login,
        age: request.body.pass,
        role: 'user'

       })
      
        const users = await Users.findOne({name: request.body.Login})
        // console.log(users);
        if (users){
            response.render('class.hbs',{
            message: 'Такой пользователь есть'
        })
            console.log('такой пользователь есть')
        } else {
            const collection = user.save().then(() => console.log('пользователь сохранен'))
            response.render('class.hbs', {
                message: 'Пользователь сохранен'
            })
        }

        // console.log(request.body)

  
        

        
    }
    catch(err){
        console.log(err);
        response.sendStatus(500);
    }  

   
}
module.exports.login =  async function (request, response) {
    // console.log(request.body)
    try{
  
        const users = await Users.findOne({name: request.body.Login, age: request.body.pass})
        console.log('user is ', users)
        if (users) {
            
            console.log('User role:', users.role);

            if (users.role === "mainadmin") {
                response.redirect("/adminpanel" );
                console.log('dasdasd')
            }
            else if (users.role === 'admin') {
                response.redirect("/homeworkadmin" );

            }if (users.role === 'user'){
                response.redirect('/homework')
            }
        } else {
            response.render('classi.hbs', {
                message: 'Неверный логин или пароль'
             })
        }
        // console.log('login');

        

        
    }
    catch(err){
        console.log(err);
        response.sendStatus(500);
    }  
}
module.exports.homework =  async function (req, res) {
    // await mongoClient.connect();
    // const db = mongoClient.db("Users");
    const collection = await Homeworks.find({});
    // const result = Homeworks
        const uniqueNames = [];
        const uniqueObjects = [];
        const userId = []   

       console.log('sdasd')
        // Homeworks.forEach(obj => {
  
        //     userId.push(obj._id.toString());
        //     // console.log(obj._id.toString());
            
        // });
        // userId.push(Homeworks._id.toString());
        //  // Проверьте, есть ли данные в коллекции
        res.render("homeworknoadmin.hbs", { objects:  collection, name: collection});

}
module.exports.addhomework = async function (req, res) {
    try {
        // await mongoClient.connect();
        // const db = mongoClient.db("Users");
        // const collection = db.collection("homeworks");
        const result = await Homeworks.find({});
        const uniqueNames = [];
        const uniqueObjects = [];
        const userId = []   

       

            userId.push(obj._id);
            // console.log(obj._id.toString());
            

         // Проверьте, есть ли данные в коллекции
        res.render("homework.hbs", { objects:  result, name: result, id: userId });
        // console.log('asdasd')
        // console.log(userId)
        // console.log(result)
      
    } catch (err) {
        console.error('Ошибка при получении данных из MongoDB:', err);
    console.log(err); // Добавьте эту строку для вывода конкретной ошибки
    res.status(500).send('Ошибка сервера');
}}