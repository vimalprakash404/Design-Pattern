const ChatBot = require("./chatBot.js");

const bot = new ChatBot("Hello, I'm a chatbot! How can I help you?");

bot.reply();

bot.message("I need help with my order.");

bot.reply();


const bot2 = bot.clone();

bot2.message("I need help with my order. form bot 2");

bot2.reply();