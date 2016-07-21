var config = {}

config.host = process.env.HOST || "https://test-nw-hackathon.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "8yYgb0TEdfdwF0px12EUDnqoZw2KrDtRNCwzr7MB9Ja9yU5dswobsxalD0ZIGgfz5KcSSLU8xP55xDpG5dmWEw==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;
