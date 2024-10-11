const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://richasahu4190:I09ENzvNjL03Qrth@cluster0.01n7k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection successfully");
  } catch (error) {
    console.error("MongoDB error:", error);
    process.exit(1);
  }
};

module.exports = { connectDB };
