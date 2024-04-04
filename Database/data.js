import mongoose from "mongoose";

export const mongoDB = () => {
    mongoose
    .connect('mongodb://localhost:27017',{
        dbName:"URL-Shorty"
    })
    .then((e) => console.log(`Database Connected with ${e.connection.host}`))
    .catch((err) => console.log(err));
}