window.onload = function() {
    main();
}

function main() {
    document.getElementById('Copy').addEventListener('click', copy)
    document.getElementById('Cut').addEventListener('click', cut)
    document.getElementById('Paste').addEventListener('click', paste)


}

var copied = "nothing copied yet"

function copy() {
    var copyText = document.getElementById("textarea");
    copyText.select();
    copied = window.getSelection && window.getSelection().toString() || "nothing selected";
    document.execCommand('copy');
    alert("Copied the text: " + copied);
}

function cut() {
    var cutText = document.getElementById("textarea");
    cutText.select();
    copied = window.getSelection && window.getSelection().toString() || "nothing selected";
    document.execCommand('cut');
    alert("Cut the text: " + copied);
}

function paste() {
    var pasteText = document.getElementById("textarea");
    pasteText.focus()
    document.execCommand('insertText', false, copied)
    alert("Paste the text: " + copied);
}