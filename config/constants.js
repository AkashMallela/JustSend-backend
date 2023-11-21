import dotEnv from "dotenv";

dotEnv.config();

export const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/test';
export const PORT = process.env.PORT || 5000;

export const DEV_MODE = (process.env.NODE_ENV === "development");

export const CLIENT_ID = 'http://590811174729-j0v5ub1ju0ajha6h0ahn0ltdrju4ttor.apps.googleusercontent.com';
export const JWT_SECRET = process.env.JWT_SECRET || "secret";
export const POST_MARK_SERVER_TOKEN = process.env.POST_MARK_SERVER_TOKEN;
export const CLIENT_SECRET = process.env.CLIENT_SECRET