const net = new brain.NeuralNetwork();

const data = [
    {
        input: { r: 0, g: 0, b: 0},
        output: [1]
    },
    {
        input: { r: 1, g: 1, b: 1},
        output: [0]
    }
];

// 0 - black, 1 - white
net.train(data);

const netPic = document.getElementById('netPic');
netPic.innerHTML = brain.utilities.toSVG(net);

console.log(net.run({r: 1, g: 0, b: 1}));

let color;
const text = document.getElementById('text');
const run = document.getElementById('run');
const generate = () => {
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    };
    const textColor = net.run(color)[0];
    text.style.color = textColor > .5 ? 'white' : 'black';
    document.body.style.backgroundColor = `rgb(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`;
};
run.onclick = generate;