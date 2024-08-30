const express = require('express');
const path = require('path'); //to find path of directory 

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public'))); //koi bhi request aaye usse public me dudhna aur ye __dirname(path diya gaya hai public folder ka )
app.set('view engine','ejs'); //view kp ejs set kiya (ejs ek tarah ka html and jaha hum operations perform kar sakte hai )

app.get("/",function(req,res){   // ye page load hoga jab hum apna page open karenge , jo render kar raha hai index.ejs file ko
    res.render("index");
})


app.get("/profile/:username",function(req,res){   //isse kahte hai dynamic routing , jo bhi url me ho jo ki change ho raha ho usse aage : lagane se wo part dynamic ban jaata hai and hum usko dynamic banate hai taaki hum use kar sake (jaise /profile/ritik , /profile/muskan to yaha /profile to static hai par /ritik variable so yaha use karte hai /profile/:ritik)
    
    res.send(req.params.username);     //req.params.username se hum wo variable part ko use kar paate hai aur usko print kar sakte hai  
});

app.listen(3000,function(){
    console.log("server is running on port 3000"); // for running the app on port 
});