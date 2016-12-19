// Add your requirements
var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.PORT || 8080, function()
{
   console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
var connector = new builder.ChatConnector({
  appId:'d7e4d8f3-0299-4210-878d-69ac0a16d1f7',
  appPassword: 'khpjtpBTCUPfMQNjXuY4bof' });
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

// Create bot dialogs
bot.dialog('/', function (session) {
    session.send("Hello World");
});

server.get('/', restify.serveStatic({
 directory: __dirname,
 default: '/index.html'
}));
