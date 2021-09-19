require("dotenv").config(); //For environmental variable access for ports
const cors = require("cors")
const express = require("express");
const morgan = require("morgan");
const db = require("./db");

const app = express();

app.use(morgan("dev"));
//for solving different domain issue in CORS
app.use(cors())
app.use(express.json());

//Get all nechromatics
app.get("/api/v1/nechromatics", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM nechromatics;")
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                nechromatics: results.rows,
            },
        });
    } catch (error) {
    }
    
});
//Server running on localhost, when frontend wants to send an http request

//Get a nechromatic
app.get("/api/v1/nechromatics/:color", async (req, res) => {
    try {
        // !!! IMPORTANT !!!
        //The following nomenclature is to prevent SQL injections
        //This would equal to SELECT * FROM nechromatics where id = req.params.id
        const results = await db.query("SELECT * FROM nechromatics WHERE color = $1", [req.params.color]);
        res.status(200).json({
            status:"success",
            data: {
                nechromatics: results.rows[0],
            },
        });
    } catch (error) {
        console.log(error)
    }

    
});



//Create nechromatic
app.post("/api/v1/nechromatics", async (req, res) => {
    try {
        const results = await db.query("INSERT INTO nechromatics (price, color) VALUES ($1, $2);", [req.body.price, req.body.color]);
        res.status(201).json({
            status: "success",
            data: {
                price: req.body.price,
                color: req.body.color,
            }
        });
    } catch (error) {
        console.log(error)
    }
});

//Update nechromatics
app.put("/api/v1/nechromatics/:color", async (req, res) => {
    try {
        const results = await db.query("UPDATE nechromatics SET color = $1 WHERE color = $2 ;", [req.body.new_color, req.params.color])
        res.status(200).json({
            status: "success",
            data: {
                new_color: req.body.new_color
            }
        });
    } catch (error) {
        console.log(error);
    }
});

//Delete nechromatic
app.delete("/api/v1/nechromatics/:id", async (req, res) => {
    try {
        const results = db.query("DELETE FROM nechromatics WHERE id = $1 ;", [req.params.id])
        res.status(204).json({
            status: "success"
        });
    } catch (error){
        console.log(error)
    }
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});

