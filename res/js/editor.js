const editor = ace.edit("editor");
ace.config.set('basePath', 'path');
editor.setOptions({
    fontSize: "24px",
    maxLines: editor.session.getLength()
});
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/html");

const code = document.getElementById("code"),
    play = document.getElementById("play");
let timeout;
play.onclick = () => {
    code.srcdoc = editor.getValue();
};

const codeSamples = document.getElementsByClassName('code-sample');
[...codeSamples].forEach((sample) => {
    const type = sample.dataset.type;
    const e = ace.edit(sample);
    e.setReadOnly(true);
    e.setOptions({
        fontSize: "24px",
        maxLines: e.session.getLength()
    });
    e.setTheme("ace/theme/monokai");
    e.session.setMode(`ace/mode/${type}`);
});