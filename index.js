const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const cors = require("cors");

const moongose = require("mongoose");
const connect = moongose.connect(config.mongoURI, {useNewUrlParser:true,useUnifiedTopology:true})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/user', require('./routes/users'));
app.use("/api/client", require('./routes/client'));
//app.use('/api/client',require('./routes/client'));
app.use('/api/haircut', require('./routes/haircut'));


if (process.env.NODE_ENV === "production") {

    // Set static folder
    app.use(express.static("client/build"));
  
    // index.html for all page routes
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`Server Running at ${port}`)
});