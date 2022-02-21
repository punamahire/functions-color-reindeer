import { reinDeerHTMLMaker } from "./htmlMaker.js"

export const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    const coloredReindeer = []
    // loop and look at each reindeer
    // Invoke factory function to create reindeer object
    // Put new reindeer object in coloredReindeer array
    reindeer.forEach(name => {
        coloredReindeer.push(createReinDeer(name))
    });
    // Return coloredReindeer array
    return coloredReindeer
}

function createReinDeer(name) {
    const reinDeerFactory = getNextReinDeerColor()
    const reinDeerColor = reinDeerFactory.next().value
    return {
        name: name,
        color: reinDeerColor
    }
}

const getNextReinDeerColor = function* () {
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    let counter = 0

    while (counter < colors.length) {
        let currentReinDeerColor = colors[counter]
        yield currentReinDeerColor
        counter += 1
    }
}

// print all the reindeer objects
const reinDeerArray = coloredReindeerBuilder()
console.log(reinDeerArray);

const htmlMaker = reinDeerHTMLMaker(reinDeerArray);
console.log(htmlMaker);