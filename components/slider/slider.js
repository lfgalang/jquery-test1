

// Link the styles from the CSS file
document.head.appendChild(window.linkCss("../slider/slider.css"));



//constants
const description = {
    "text": "Simplifica y Optimiza tus Cartillas de Acero Figurado y Mejora Tu Eficiencia"
}


//Functions
function printInfo(description) {

    console.log(window.sum(3, 4))


    return (`
            <h1 class="sliderH1">
                impresion desde slider ${description.text}
                <h3>another tag</h3>
            </h1>
        `)
}
document.body.innerHTML = printInfo(description)