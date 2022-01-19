require("dotenv").config()

const Express = require("express");
const app = Express()

/* 
    * First we create a variable to import express from node modules folder into our file using require() method.
    * Creating top level function Express() to gain access to all of its methods and properties:
        * HTTPS requests
        * middleware functionality
        * basic app settings
*/

app.listen(process.env.PORT, () => {
    console.log(`[server]: app.js is listening on port 3000`)
    console.log(process.env.PORT)
})