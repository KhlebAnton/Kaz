const loaderBar = document.querySelector('.loader-line');

function setProgress(count) {
    loaderBar.style.width = `${count}%`
}

let countProgress = 3;
let loaderPlay = setInterval(()=> {
    if(countProgress < 100) {
        setProgress(countProgress);
        countProgress += 1;
    } else {
        clearInterval(loaderPlay);
        setProgress(100);
        setTimeout(()=> window.location.href = './option.html', 1000)
    };
    
},10)
