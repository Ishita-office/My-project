import mongoose from "mongoose";
const db = () => {
mongoose
  .connect("mongodb://127.0.0.1:27017/prac")
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("mongoose disconnected", err);
  });
}
export default db

