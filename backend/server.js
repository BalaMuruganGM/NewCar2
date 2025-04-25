const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const cors = require('cors');
const app = express();
app.use(cors());
app.use('/api', bodyParser.json());



const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "bala"
});

db.connect((error)=>{
    if(!error){
        console.log("database connection")
    }else{
        console.log(error);
    }
});

const storage = multer.diskStorage({
    destination : function(req , file , cb){
        cb(null , 'uploads/');
    },
    filename : function(req , file , cb){
        cb(null , Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage : storage});

app.post('/images/post' , upload.single('images') , function(req, res , error){

    if(!req.file){
        return res.send("file not uploaded");
    }

    const query = "insert into photo1 (name , photo) values (?,?)";
    
    const imgname = req.file.filename;
    const imgpath = req.file.path;
    
    db.query(query , [imgname , imgpath] , function(error , result){
        if(error){
            res.send({status:false , message : "not data req", data:error});
        }
        else{
            res.send({status : true , data : result});
        }
    })

});


// app.post('/images/post', upload.single('images'), function(req, res) {
//     if (!req.file) {
//         return res.status(400).json({ status: false, message: "File not uploaded" });
//     }

//     const query = "INSERT INTO photo (name, photo) VALUES (?, ?)";
//     const imgname = req.file.filename;
//     const imgpath = req.file.path;

//     db.query(query, [imgname, imgpath], function(error, result) {
//         if (error) {
//             console.error("Database Error: ", error);
//             return res.status(500).json({ status: false, message: "Database insertion failed", error });
//         } else {
//             res.status(200).json({ status: true, data: result, message: "File uploaded successfully" });
//         }
//     });
// });




app.get('/images/get', function(req, res) {
    const query = "SELECT * FROM photo1";
    db.query(query, function(error, result) {
        if (error) {
            console.error("Error fetching images:", error);
            res.status(500).send({ message: "Error fetching images", error });
        } else {
            const dataWithUrls = result.map(row => ({
                id: row.id,
                name: row.name,
                // url: `${req.protocol}://${req.get('host')}/uploads/${row.photo}`
                url: `${req.protocol}://${req.get('host')}/${row.photo.replace(/\\/g, '/')}` // Normalize slashes

            }));
            res.send({ data: dataWithUrls });
        }
    });
});


app.put('/images/put/:id' ,upload.single('images') , function(req,res){
    const id = req.params.id;
    const name = req.file ? req.file.filename : null;
    const url = req.file ? req.file.path:null;

    // const query = "update photo set name = ? , photo = ? , where id=?";
    const query = "UPDATE photo1 SET name = ?, photo = ? WHERE id = ?";

    db.query(query , [name , url , id] , function(error , result){
        if(error){
            res.send("Its error");
        }else{
            res.send({status:true , data:result , message : "data successfully"});
        }
    })

})


app.delete('/image/delete/:id' , function(req ,res){
    const query = "DELETE FROM PHOTO1 WHERE ID = ?";
    const id = req.params.id;

    db.query(query , [id] , (error , result)=>{
        if(error){
            res.send({message : "Data cannot delete" , data : result});
        }else{
            res.send({message : "Data delete successfully", data : result} )
        }
    })

})


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(4015 , (error)=>{
    if(error){
        console.log(error);
    }
    console.log("port is running");
})




