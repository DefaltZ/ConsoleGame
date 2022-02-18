var mysql = require('mysql')
const Schema = require('./classes.js')
var term = require('terminal-kit').terminal;
const readLine = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'user'
})

connection.connect(function(err){
	if(err) throw err;
})

term.cyan('Is this a new game?')
var items1 = [
	'a. Yes',
	'b. No'
];

term.singleColumnMenu(items1, function(error, response){
	term('\n').eraseLineAfter.green(
		'#%s selected: %s\n',
		response.selectedIndex,
		response.selectedText,
	)
	if(response.selectedIndex === 0){
		readLine.question('Enter player name:', info => {
			const newPlayer = new Schema(0, 500, info)
			term.white("New player info: \n")
		    term.bgRed("player name: " + newPlayer.player + '\n')
		    term.bgRed("Balance: " + newPlayer.bal + '\n')
		    term.bgRed("Wallet: " + newPlayer.wallet + '\n')
		    term.bgGreen("total: " + Schema.total())
			process.exit()
		})
	} else {
		connection.query("SELECT PlayerName from player", function(err, result, fields){
			if(err) throw err;
			console.log(result);
			readLine.question('Profile you want to continue on: ', selectedProfile => {
				connection.query("SELECT PlayerName, bal, wallet from player where PlayerName='"+selectedProfile+"'", function(err, result, fields){
					if(err) throw err;
					Object.keys(result).forEach(function(key){
						var row = result[key];
						console.log(row.PlayerName + ' | ' + row.bal + ' | ' + row.wallet + ' | ' + Schema.total())
						process.exit()
					})
				})
			})
		})

	}
})

