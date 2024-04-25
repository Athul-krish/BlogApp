const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://athulkrishnapanamakkal:athulpu@cluster0.oll34kg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connneted")
})
.catch(()=>{
    console.log(error)
})