// Configuration file for Natomas local news website

const config = {
    siteName: "Natomas Local News",
    apiUrl: "https://api.natomaslocalnews.com",
    port: 3000,
    database: {
        host: "localhost",
        user: "root",
        password: "your_password",
        database: "natomas_local_news"
    }
};

module.exports = config;