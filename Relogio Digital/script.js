let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
    let horaAtual = new Date();

    hrs.innerHTML = (horaAtual.getHours()<10?"0":"") + horaAtual.getHours();
    min.innerHTML = (horaAtual.getMinutes()<10?"0":"") + horaAtual.getMinutes();
    sec.innerHTML = (horaAtual.getSeconds()<10?"0":"") + horaAtual.getSeconds();
}, 1000)

