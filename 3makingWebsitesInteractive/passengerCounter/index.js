//document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

console.log(count)

function increment(){
    count += 1
    countEl.textContent = count
    console.log(count)
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}


