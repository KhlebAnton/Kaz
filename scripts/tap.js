const totalCoin = document.getElementById('total-coin')

document.querySelector('.tap-person').addEventListener('click', function(event) {
    const btn = event.currentTarget;
    const count = 1;

    const outerSpan = document.createElement('span');
    outerSpan.className = 'hero-tap__span';

    const innerSpan = document.createElement('span');
    innerSpan.innerText = `+${count}`;

    outerSpan.appendChild(innerSpan);

    const rect = btn.getBoundingClientRect();
    const x = Math.round(event.clientX - rect.left);
    const y = Math.round(rect.bottom - event.clientY);

    outerSpan.style.left = `${x}px`;
    outerSpan.style.bottom = `${y}px`;

    btn.appendChild(outerSpan);

    setTimeout(() => {
        outerSpan.classList.add('is-show');
    }, 100);

    setTimeout(() => {
        outerSpan.classList.add('is-hide');
    }, 2900);

    setTimeout(() => {
        btn.removeChild(outerSpan);
    }, 3000);
    totalCoin.textContent = (Number(totalCoin.textContent.replace(/\s/g, '')) + (count)).toLocaleString('ru-RU');
});

