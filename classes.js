var term = require('terminal-kit').terminal;

module.exports = class Schema {
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
	static work(){
		let earnRange = Math.round(Math.random() * (300 - 100) + 100)
		term.green(`you worked and earned ${earnRange} coins`)
		process.exit()
	}
	static pickpocket(){
		let chance = Math.round(Math.random() * (6 - 1) + 1)
		if(chance%2 == 0){
			let pickpocketRange = Math.round(Math.random() * (200 - 50) + 50)
			term.green(`You worked and earned ${pickpocketRange} coins`)
			process.exit()
		} else{
			let lossRange = Math.round(Math.random() * (100 - 50) + 50)
			term.green(`You were caught and lost ${lossRange} coins`)
			process.exit()
		}
	}
	static invest(){
		let returnChance = Math.round(Math.random()* (6 - 1) + 1)
		if(returnChance%2 == 0){
			let investReturn = Math.round(Math.random() * (1000 - 500) + 50)
			term.green(`You invested and earned ${investReturn} coins`)
			process.exit()
		} else {
			let investLoss = Math.round(Math.random() * (1000 - 500) + 50)
			term.green(`You invested and lost ${investLoss} coins`)
			process.exit()
		}
	}
}