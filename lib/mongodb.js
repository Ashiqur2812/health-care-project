// connect to mongodb
export const connectMongodb = `mongodb+srv://${process.env.mongodbAdmin}:${process.env.password}@cluster0.qbgt9.mongodb.net/healthCareDatabase?retryWrites=true&w=majority&appName=Cluster0`;

console.log(process.env.mongodbAdmin);
