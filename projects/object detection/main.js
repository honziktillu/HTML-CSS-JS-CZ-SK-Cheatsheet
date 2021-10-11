const img = document.getElementById('img');
const button = document.getElementById('button');
const input = document.getElementById('input');
const predictionsP = document.getElementById('predictions');
const borders = document.getElementById('borders');

button.onclick = () => {
    borders.innerHTML = "";
    predictionsP.innerHTML = "";
    img.src = `./img/${input.value}`; 
    cocoSsd.load().then(model => {
        model.detect(img).then(predictions => {
            predictions.forEach(element => {
                const border = document.createElement('div');
                border.style.left = `${element.bbox[0]}px`;
                border.style.top = `${element.bbox[1]}px`;
                border.style.width = `${element.bbox[2]}px`;
                border.style.height = `${element.bbox[3]}px`;
                border.classList.add('red');
                borders.appendChild(border);
                console.log(element);
                predictionsP.innerHTML += `<p>Class: ${element.class}, score: ${element.score}</p>`;
            });
        });
    })
}