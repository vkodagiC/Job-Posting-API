const mongoose = require('mongoose')
 
const connectDatabase = () => {    mongoose
    .connect(process.env.DB_URI,{})
    .then(() => {console.log("DB connected.")})
    .catch((err)=>{console.log("DB connection error",err)
});
};

module.exports = connectDatabase;