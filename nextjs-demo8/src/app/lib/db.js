import mysql from "serverless-mysql";

export const pool = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "1chenxueweiB",
    port: 3306,
    database: "even",
  },
});
