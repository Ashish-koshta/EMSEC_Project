const mongoose= require("mongoose");
mongoose.connect("mongodb+srv://ayush:ayush@cluster0.biqhnsq.mongodb.net/?retryWrites=true&w=majority")
.then( () => console.log("connection successfull...."))
.catch(() => console.log("no connection"));