import postRoute from "../Route/post.js";
import express from 'express'
const routes = (app) => {
app.use(express.json());
app.use(postRoute);
}
export default routes