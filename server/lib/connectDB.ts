import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected to database');
    return;
  }

  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.polnh.mongodb.net/a_tg_of?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(uri);
    console.log('Connected to database');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
