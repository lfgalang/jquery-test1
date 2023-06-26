



const title = document.createElement('h1')
title.innerHTML = "<h1>Perritos</h1>"
document.body.append(title)

const button = document.createElement('button')
button.innerText = "clickitr"
button.addEventListener('click', () => {
    console.log("por aca vamo")
})
document.body.append(button)


//Functions
function printInfo() {
    return (`
            <h1 class="sliderH1">
                impresion desde slider 
                <h3>another tag</h3>
            </h1>
        `)
}
document.body.innerHTML = printInfo()
