import express from 'express'
import db from './startups/db.js';
import routes from './startups/routes.js';
import prod from './startups/prod.js';
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
db()
prod(app)
routes(app)
app.get("/", async (req, res) => {
  return res.send("Server is running in 3000");
});
app.listen(PORT, () => {
console.log(`app is listening to ${PORT}`)
})