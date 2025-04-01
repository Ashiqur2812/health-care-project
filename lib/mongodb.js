const { default: mongoose, connect } = require("mongoose");

const connectMongoSrting = `mongodb+srv://${process.env.mongodbAdmin}:${process.env.password}@cluster0.qbgt9.mongodb.net/healthCareDatabase?retryWrites=true&w=majority&appName=Cluster0`;

async function connectMongodb () {
  try {
    if (mongoose.connection.readyState === 0) {
        await connect(connectMongoSrting)
        console.log('Connected to MongoDB');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Re-throw the error to be caught by the caller
  }
  }
  export{connectMongodb}
