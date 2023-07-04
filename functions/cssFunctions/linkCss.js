
window.linkCss = (route) => {

    // Link the styles from the CSS file
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = route//'../homeSlider/homeSlider.css';

    return linkElement;
};