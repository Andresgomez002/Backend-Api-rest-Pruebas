import { connect } from "mongoose";

async function dbconnect(): Promise<void> {
    const DB_URI = 'mongodb://127.0.0.1:27017';
    await connect( DB_URI)
}

export default dbconnect;