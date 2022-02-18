var term = require('terminal-kit').terminal;
const Schema = require('./classes')
const newPlayer = require('./index')

term.cyan('List of arguments for playing the game:')
var items = [
    'a. help',
    'b. work',
    'c. pickpocket',
    'd. invest',
]

term.singleColumnMenu(items, function(error, response){
    term('\n').eraseLineAfter.red(
        '#%s selected: %s\n',
        response.selectedIndex,
        response.selectedText,
    )
    if(response.selectedIndex === 0){
        term.green('help command shows a list of available arguments')
    } else if(response.selectedIndex === 1){
        newPlayer.work()
    }
})