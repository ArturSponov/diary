const path=require('path')
const express = require("express");
const { resolve } = require('path')
const hbs = require('hbs')
let currentDate = new Date();
global.date = currentDate

const app = express();

const fs = require('fs');
const { response } = require('express');
const { Admin } = require('mongodb');
const authRouter = require('./routs/auth');
const roleRouter = require('./routs/roles');

app.use(express.static(path.resolve(__dirname + '/public')))  
const productRouter = express.Router();
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose")


const urlencodedParser = express.urlencoded({extended: false})


// const url = 'mongodb+srv://kamartur778:oPa0j6q0YXecSdPS@cluster0.pxcvidg.mongodb.net/';
// const url = "mongodb://127.0.0.1:27017/";

const keys = require('./config/bd')
mongoose.connect(keys.mongoUrl)  
.then(()=> console.log('поключено'))
.catch(error=> console.log(error))
// const mongoClient = new MongoClient(url);  
const objectId = require("mongodb").ObjectId;

app.set("view engine", "hbs");        
         

 

// async function run() {
//     try {
//         await mongoClient.connect();
//         const db = mongoClient.db("Users");
//         const collection = db.collection("users");
//         const result = await collection.find().toArray();
//         // console.log(result);
         
//     }catch(err) {
//         console.log(err);
//     }
// }

app.use('/add', authRouter)
app.use('/role', roleRouter)

app.get("/", function(req, res) {
    res.render("main.hbs")
})

// productRouter.post('/', urlencodedParser, async function (request, response){
//     try{
//         await mongoClient.connect();
//         const db = mongoClient.db("Users");
//         const collection = db.collection("users");
//         const testadmin = await collection.find({name: name})
//         // const users = await collection.find().toArray();
//         if (request.body.Login == 'admin' & request.body.pass == `777777`){
            
//         }
//         // console.log(users);
//         response.redirect("/produts" );
        

        
//     }
//     catch(err){
//         console.log(err);
//         response.sendStatus(500);
//     } 
// })
// app.get("/add/login", async function (request, response) {
//     try{
//         // await mongoClient.connect();
//         // const db = mongoClient.db("Users");
//         // const collection = db.collection("users");
//         // const users = await collection.find().toArray();
//         // console.log(users);
//         response.render("classi.hbs" );
        

        
//     }
//     catch(err){
//         console.log(err);
//         response.sendStatus(500);
//     }  
// })




// app.get("/adminpanel/:id",urlencodedParser, async(req, res)=>{
//     // await mongoClient.connect();
//     // const db = mongoClient.db("Users");
//     // const collection = db.collection("homeworks"); 
//     const id = new objectId(req.params.id);
//     // получаем одного пользователя по id
//     const result = await collection.findOneAndDelete({_id: id})
//     // const user = await User.findById(id);
//     // if(user) res.send(user);
//     // else res.sendStatus(404);
//     console.log(result)
//     console.log(id)
//     if (result) {
//         res.redirect('/products/adminpanel')
//     }
// });

// app.get('/adminpanel/admin/:id', urlencodedParser, async (req, res) => {
//         // try {
//                 const userId = req.params.id;
//             //      console.log(userId)
//                 // await mongoClient.connect();
//                 // const db = mongoClient.db("Users");
//                 // const collection = db.collection("users");
//                 // const { ObjectId } = require('mongodb');
//                 const objectId = new ObjectId(userId);
//             //     const result = await collection.findOneAndUpdate({ _id: userId },{ $set: { role: 'admin' } });
        
//             //     if (result) {
//             //         res.redirect('/products/adminpanel');
//             //     } else {
//             //         res.status(404).send('Пользователь не найден');
//             //     }
//             // } catch (error) {
//             //     console.error(error);
//             //     res.status(500).send('Ошибка сервера');
//             // }
//             // const user = await collection.findOneAndUpdate({ _id: objectId }, { $set: { role: 'user' } });
//         if (user) {
//             // Пользователь найден
//             console.log('изменено');
//             res.redirect('/products/adminpanel')
//         } else {
//             // Пользователь не найден
//             console.log('Пользователь не найден');
//             res.status(404).send('Пользователь не найден');
//             return;
//         }
// })
// app.get('/adminpanel/deleteadmin/:id', urlencodedParser, async (req, res) => {
//     // await mongoClient.connect();
//     // const db = mongoClient.db("Users");
//     // const collection = db.collection("users"); 
//     const id = new objectId(req.params.id);
//     // получаем одного пользователя по id
//     // const result = await collection.findOneAndDelete({_id: id})
//     // const user = await User.findById(id);
//     // if(user) res.send(user);
//     // else res.sendStatus(404);
//     console.log(result)
//     console.log(id)
//     if (result) {
//         res.redirect('/products/adminpanel')
//     }
// })
// app.get('/adminpanel/deleteuser/:id', urlencodedParser, async (req, res) => {
//     // await mongoClient.connect();
//     // const db = mongoClient.db("Users");
//     // const collection = db.collection("users"); 
//     // const id = new objectId(req.params.id);
//     // получаем одного пользователя по id
//     // const result = await collection.findOneAndDelete({_id: id})
//     // const user = await User.findById(id);
//     // if(user) res.send(user);
//     // else res.sendStatus(404);
//     console.log(result)
//     console.log(id)
//     if (result) {
//         res.redirect('/products/adminpanel')
//     }
// })

app.get("/newspaper", function(req, res) {
    res.render("newspaper.hbs")
})
app.get("/homeworkadmin", async function(request, response) {
    try {
        // await mongoClient.connect();
        // const db = mongoClient.db("Users");
        // const collection = db.collection("homeworks");
        // const result = await collection.find({}).toArray();
        const uniqueNames = [];
        const uniqueObjects = [];
        const userId = []   

       
        result.forEach(obj => {
  
            userId.push(obj._id.toString());
            // console.log(obj._id.toString());
            
        });
         // Проверьте, есть ли данные в коллекции
        response.render("homework.hbs", { objects:  result, name: result, id: userId });
        // console.log('asdasd')
        // console.log(userId)
        // console.log(result)
      
    } catch (err) {
        console.error('Ошибка при получении данных из MongoDB:', err);
    console.log(err); // Добавьте эту строку для вывода конкретной ошибки
    response.status(500).send('Ошибка сервера');
    } 
     
    app.get("/homeworkadmin/:id",urlencodedParser, async(req, res)=>{
        // await mongoClient.connect();
        // const db = mongoClient.db("Users");
        // const collection = db.collection("homeworks"); 
        // const id = new objectId(req.params.id);
        // получаем одного пользователя по id
        const result = await collection.findOneAndDelete({_id: id})
        // const user = await User.findById(id);
        // if(user) res.send(user);
        // else res.sendStatus(404);
        console.log(result)
        console.log(id)
        console.log('dftyu')
        if (result) {
            res.redirect('/products/homeworkadmin')
        }
    }); 

})
app.get("/galery", function(req, res) {
    let name = req.query.name;
    res.render("galery.hbs", {names: name})
})

app.get("/addhomework", function(req, res) {
    
    res.render("addhomework.hbs")
})
app.get("/deletehomework", function(req, res) {
    
    res.render("deletehomework.hbs")
})
// регистрация
// app.post("/api/add/homework", urlencodedParser, async function(req, res) {
//     await mongoClient.connect();
//     const db = mongoClient.db("Users");
//     const collection = db.collection("users");
//     const result = await collection.findOne({name: req.body.Login});
//     console.log(result)
//     if (result) {
//         // const user = {name: `${req.body.Login}`, age: `${req.body.pass}`, role: 'admin'};

//             res.render('class.hbs', {
//                 message: "Такой пользователь уже существует"
//             })
        
//     }else{
//         const user = {name: `${req.body.Login}`, age: `${req.body.pass}`, role: `user`}
//         const   adduser = await collection.insertOne(user);
        
        
//             res.render('class.hbs', {
//                 message: "Пользователь зарегестрирован"
//             })
       
//         }
    
    
    

 
// })
// app.get('/homework', urlencodedParser, async function (req, res) {
//     // await mongoClient.connect();
//     // const db = mongoClient.db("Users");
//     // const collection = db.collection("homeworks");
//     // const result = await collection.find({}).toArray();
//         const uniqueNames = [];
//         const uniqueObjects = [];
//         const userId = []   

       
//         forEach(obj => {
  
//             userId.push(obj._id.toString());
//             // console.log(obj._id.toString());
            
//         });
//          // Проверьте, есть ли данные в коллекции
//         res.render("homeworknoadmin.hbs", { objects:  result, name: result, id: userId });

// })
// app.post("/homework", urlencodedParser, async function (req, res) {
//     // await mongoClient.connect();
//     // const db = mongoClient.db("Users");
//     // const collection = db.collection("homeworks");
//     const homework = {name: `${req.body.Login}`, age: `${req.body.pass}`}
//     // const result = await collection.insertOne(homework);
//     if(result){
//         res.redirect('/products/homeworkadmin')
//     } else {
//         alert("Не заполнено")
//     }
// })
app.use("/products", productRouter);
// productRouter.post("/homework", urlencodedParser, async function(req, res) {
//     try {
//         await mongoClient.connect();
//         const db = mongoClient.db("Users");
//         const collection = db.collection("homeworks");
//         const homework = {name: req.body.Name};
//         const result = await collection.findOneAndDelete(homework);

//         if (result.value) {
//             console.log('Успешно удалено:', result.value);
//             res.send('Deleted');
//         } else {
//             console.log('Не найдено');
//             res.send('Not Found');
//         }
//     } catch (err) {
//         console.error('Ошибка при удалении данных из MongoDB:', err);
//         res.sendStatus(500);
//     } finally {
//         await mongoClient.close();
//     }
// });


// process.on("SIGINT", async() => {
      
//          await mongoClient.close();
//          console.log("Приложение завершило работу");
//         process.exit();  
//  });
// run().catch(console.error);
app.listen(3001, ()=>console.log("Сервер запущен..."));             