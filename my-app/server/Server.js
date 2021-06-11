require("dotenv").config(); //For environmental variable access for ports
const express = require("express");
const morgan = require("morgan");
const db = require("./db");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

//Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM restaurants;")
        console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurant: results.rows,
            },
        });
    } catch (error) {
        console.log(error);
    }
    
});
//Server running on localhost, when frontend wants to send an http request

//Get specific restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "McDonald's"
        }
    })
});

//Create restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
    res.status(201).json({
        status: "success",
        data: {
            restaurant: "McDonald's"
        }
    });
});

//Update restaurants
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "McDonald's"
        }
    });
});

//Delete restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "success"
    });
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});

