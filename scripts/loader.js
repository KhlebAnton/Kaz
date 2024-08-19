const loaderBar = document.querySelector('.loader-line');

function setProgress(count) {
    loaderBar.style.width = `${count}%`
}

let countProgress = 3;
setInterval(()=> {
    if(countProgress < 100) {
        setProgress(countProgress);
        countProgress += 1;
    } else {
        setProgress(100);
        setTimeout(()=> window.location.href = './option.html', 500)
    };
    
},10)