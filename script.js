function clickToChange () {
    var h1 = document.getElementById("clickH1")
    h1.innerText = (random, newTitles[random])
}


const newTitles = ["HEj" , "Tjabba", "Flezx"];

const random = Math.floor(Math.random() * newTitles.length); 



function printRandomNumber() {
    const randomNumber = getRandomNumber();
    addNumberToPage(randomNumber)
}

function getRandomNumber () {
    const randomNumber = Math.random() * 10
    return Math.round(randomNumber)
}

function addNumberToPage(number) {
    const div = document.getElementById("result")
    div.append(number + " , " )
}


// function random() {
//     const newTitle = ["Title", "Hejsan", "Kalas"]
//     const randomTitle = Math.floor(Math.random() * newTitle.length)
//     return (randomTitle)
// }



// const months = ["January", "February", "March", "April", "May", "June", "July"];

// const random = Math.floor(Math.random() * months.length);
// console.log(random, months[random]);

