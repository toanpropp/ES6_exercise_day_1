let Header = document.querySelector('.heading');    

let B = i =>{
    return [...i].map(i =>`<span>${i}</span>`).join('');

};
(Header.innerHTML = B(Header.innerText));