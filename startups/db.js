import mongoose from "mongoose";
const db = () => {
mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("mongoose disconnected", err);
  });
}
export default db

