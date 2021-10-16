require('dotenv').config();

module.exports = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "@dmin123_*",
  database: process.env.DB_DATABASE || "store",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql",
  define: {
    timestamps: true,

    // Genera claves foraneas de este tipo user_id en vez de userId
    underscored: true
  }
}
