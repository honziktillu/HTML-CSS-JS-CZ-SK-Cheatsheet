const img = document.getElementById('img');
const button = document.getElementById('button');
const input = document.getElementById('input');
const predictionsP = document.getElementById('predictions');

button.onclick = () => {
    img.src = `./img/${input.value}`; 
    mobilenet.load().then(model => {
        model.classify(img).then(predictions => {
            console.log({predictions});
            predictionsP.innerHTML = "";
            predictions.forEach(element => {
                predictionsP.innerHTML += `<p>ClassName: ${element.className}, probability: ${element.probability}</p>`;
            });
        });
    })
}