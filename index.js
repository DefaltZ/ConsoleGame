var mysql = require('mysql')
var term = require('terminal-kit').terminal;

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'user'
})

class Schema {
	constructor(bal, wallet){
		this.bal = bal;
		this.wallet = wallet;
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
		term.cyan('Yes was selected!')
		process.exit();
	} else {
		term.cyan('No was selected!')
		process.exit();
	}
})

