var mysql = require('mysql')
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

class Schema {
	constructor(bal, wallet, player){
		this.player = player;
		this.bal = bal;
		this.wallet = wallet;
	}
	player(){
		return this.player;
	}

	bal(){
		return this.bal;
	}

	wallet(){
		return this.wallet;
	}
	static total(){
		let total = this.bal + this.wallet
		return total
	}
}

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
			var sql = "CREATE TABLE player(PlayerName varchar(20), bal int, wallet int)"
			var sql2 = "INSERT INTO player VALUES ('"+info+"', 0, 500)"
			connection.query(sql, function(err, result) {
				if (connection.error === 'ER_TABLE_EXISTS_ERROR'){
					console.log('table already exists')
					connection.query(sql2, function(err, result){
						if(err) throw err;
						console.log('\nPlayer Profile created!')
					})
				} else{
					connection.query(sql2, function(err, result){
						if(err) throw err;
						console.log('\n Player Profile created!')
					})
				}
			})
			term.white("New player info: \n")
		    term.bgRed("player name: " + newPlayer.player + '\n')
		    term.bgRed("Balance: " + newPlayer.bal + '\n')
		    term.bgRed("Wallet: " + newPlayer.wallet + '\n')
		    term.bgGreen("total: " + Schema.total())
		    process.exit()
		})
	} else {
		term.cyan('No was selected!')
		process.exit();
	}
})

