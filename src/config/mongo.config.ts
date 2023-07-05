import { connect } from "mongoose";

async function dbconnect(): Promise<void> {
    const DB_URI = `${process.env.DB_URI}`;
    await connect( DB_URI)
}

export default dbconnect;