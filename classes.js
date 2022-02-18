export default class Schema {
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
		let earnRange = Math.random() * (500 - 100) + 100;
		return term.green(`you worked and earned ${earnRange} coins`) 
	}
	static pickpocket(){
		let chance = Math.random() * (6 - 1) + 1;
		if(chance%2 == 0){
			let pickpocketRange = Math.random() * (200 - 50) + 50;
			return term.green(`You worked and earned ${pickpocketRange} coins`)
		} else{
			let lossRange = Math.random() * (100 - 50) + 50;
			return term.green(`You were caught and lost ${lossRange} coins`)
		}
	}
	static invest(){
		let returnChance = Math.random()* (6 - 1) + 1;
		if(returnChance%2 == 0){
			let investReturn = Math.random() * (1000 - 500) + 50;
			return term.green(`You invested and earned ${investReturn} coins`)
		} else {
			let investLoss = Math.random() * (1000 - 500) + 50;
			return term.green(`You invested and lost ${investLoss} coins`)
		}
	}
}