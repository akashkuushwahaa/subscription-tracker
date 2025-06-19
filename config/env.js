import { config } from "dotenv";

// Correct path formatting
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

// Export environment variables
export const { PORT, NODE_ENV, DB_URI } = process.env;
