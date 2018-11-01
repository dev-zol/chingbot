/** VERY IMPORTANT */
const fs = require('fs');
const Discord = require('discord.js');
const { token, prefix } = require('./config.json')

/** make a client */
const client = new Discord.Client();
client.commands = new Discord.Collection();

/** Searches modules folder for anything that ends with '.js' */
const commandFiles = fs.readdirSync('../modules').filter(file => file.endsWith('.js'));
/** for every file it finds, creates a list of commands and adds that to the client */
for (const file of commandFiles) {
  const command = require(`../modules/${file}`);
  client.commands.set(command.name, command);
}

/** when connected and launched */
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

/** on message handler */
client.on('message', message => {

  /** VERY IMPORTANT, NEVER DELETE. MAKES SURE THERE ARE NO INFINITE LOOPS */
  if (message.author.bot) return;

  /** ALSO VERY IMPORTANT. Checks for prefix, slices the rest of the message, takes first index as the command, executes module */
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
      client.commands.get(command).execute(message, args);
    }
    catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
    }
  }

  //obligatory no u
  if (message.content.match(/no u/gi)!=null) {
	const tempNoU=message.content.toLowerCase();
	var response="";
	var userNameFun=""
	var realFlag=0;
	if(tempNoU.length==4){
    	response='no u';
    	realFlag=1;
	}else if (tempNoU === 'no no u') {
  		response='no u infinity';
  		realFlag=1;
  	}else if (tempNoU === 'no u infinity') {
    	response='no u cheater';
    	realFlag=1;
  	}
  	if(message.author.username.toLowerCase()=="willofhope"){
		userNameFun='rock';
	}else if(message.author.username.toLowerCase()=="unholy"){
		userNameFun='lizard';
	}else if(message.author.username.toLowerCase()=="ringalive"){
		userNameFun='bird';
	}else if(message.author.username=="lol"){
		userNameFun='chong';
	}
	if(realFlag==1){
		if(userNameFun==""){
			message.channel.send(response);
		}else{
			message.channel.send(response+", "+userNameFun);
		}
	}
  }

});

//exports the client reference in case any other modules need it (like ?ping)
exports.clientRef = client

client.login(token);