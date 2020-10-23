function clickToChange () {
    var h1 = document.getElementById("clickH1")
    h1.innerText = (random, newTitles[random])
}

const newTitles = ["HEj" , "Tjabba", "Flezx"];

const random = Math.floor(Math.random() * newTitles.length); 


/**
 * Will generate a random number in to dom
 */
function printRandomNumber() {
    const randomNumber = getRandomNumber();
    addNumberToPage(randomNumber)
}

/**
 * Generates random number and returns it
 * @returns {number} genarated number
 */
function getRandomNumber () {
    const randomNumber = Math.random() * 10
    return Math.round(randomNumber)
}

/**
 * places number in to DOM with coma-space
 * @param {Number} number
 */
function addNumberToPage(number) {
    const div = document.getElementById("result")
    div.append(number + " , " )
}


// function random() {
//     const newTitle = ["Title", "Hejsan", "Kalas"]
//     const randomTitle = Math.floor(Math.random() * newTitle.length)
//     return (randomTitle)
// }



