var term = require('terminal-kit').terminal;
const Schema = require('./classes')

help_command = function(){
    term.cyan('List of arguments for playing the game:')
    var items = [
        'a. -help',
        'b. -work',
        'c. -pickpocket',
        'd. -invest',
    ]

    term.singleColumnMenu(items, function (error, response) {
        term('\n').eraseLineAfter.red(
            '#%s selected: %s\n',
            response.selectedIndex,
            response.selectedText,
        )
        if (response.selectedIndex === 0) {
            term.green('help command shows a list of available arguments')
            process.exit()
        } else if (response.selectedIndex === 1) {
            term.green('Honest Work! it returns 100-500 coins with a cooldown of ...')
            process.exit()
        } else if (response.selectedIndex === 2) {
            term.green('Pickpocket a passerby! if its your day you will make 50-200 coins, if you are caught you lose around 50-100 coins, cooldown of ...')
            process.exit()
        } else if (response.selectedIndex === 3) {
            term.green('Invest in stonks! you may make a fortune of 500-1000 coins or go bankrupt with a loss of 500-1000 coins! no cooldown on this command')
            process.exit()
        }
    })
}

module.exports = {help_command}