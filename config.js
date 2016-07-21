var config = {}

config.host = process.env.HOST || "https://gratitude-db.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "skFgpBLkGySoaes7m9ThvnirANCu9vB3ySAAeSCn4utRI2odiyvVMvK6ou4winYOvhFpDzawyK0mjYUWtveWAg==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;
