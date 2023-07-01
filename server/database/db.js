import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-prcxb9s-shard-00-00.faarwsb.mongodb.net:27017,ac-prcxb9s-shard-00-01.faarwsb.mongodb.net:27017,ac-prcxb9s-shard-00-02.faarwsb.mongodb.net:27017/CRUD-APPLICATION?ssl=true&replicaSet=atlas-7z4mfh-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected");
  } catch (err) {
    console.log("Error while connecting database", err);
  }
};

export default Connection;
