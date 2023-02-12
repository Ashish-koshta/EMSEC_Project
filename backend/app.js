const express = require("express");
const app = express();
const port = 5000;
require("./conn/conn")
const Register =require("./model/model.js")
app.use(express.json())

// create
app.post('/add', async (req, res) => {
    const { task, is_completed, end_date} = req.body;
    
    if (!task || !is_completed || !end_date) {
        return res.status(422).json({ error: "fill all the details" });
    }
    try {
        const register = new Register({ task: task, is_completed: is_completed, end_date: end_date})
        const ToTask = await register.save();
        res.status(201).json({message:"task added"})
    } catch (err) {
        console.log(err);
    }
});

// read
app.get('/read', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    try {
        const posts = await Register.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await Register.countDocuments();

        res.json({
            posts,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        console.error(err.message);
    }
});

//update
app.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const updatetask = await Register.findOneAndUpdate({ _id: id }, {
            $set: {
                task : utask,
                is_completed : uis_completed,
                end_date: uis_completed
            }
        });
        console.log(updatetask);
    } catch (error) {
        console.log(error);
    }
})

// delete
app.delete('/delete/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        const deleteRegister = await Register.findByIdAndDelete(req.params.id);
        if (!deleteRegister) {
            return res.status(400).send("task not foundes for delete");
        }
        res.send(deleteRegister);

    } catch (e) {
        res.status(500).send(e);

    }
})



app.get('/',(req,res)=>{ 
    res.status(200).send("hyy")
})



app.listen(port, () => {
    console.log(`this is my port ${port}`);

})


