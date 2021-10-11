const net = new brain.NeuralNetwork();

/*const net = new brain.NeuralNetwork({
    hiddenLayers: [5, 9, 2]
});*/

net.train([
    {
        input: [0, 0],
        output: [0]
    },
    {
        input: [1, 0],
        output: [1]
    },
    {
        input: [0, 1],
        output: [1]
    },
    {
        input: [1, 1],
        output: [0]
    }
]);

const netPic = document.getElementById('netPic');
netPic.innerHTML = brain.utilities.toSVG(net);

console.log(net.run([1, 0]));