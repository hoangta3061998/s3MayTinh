function Output(tinh) {
    let out1 = document.getElementById('screen').value += tinh;

}
function Result() {
    let result = document.getElementById('screen').value ;
    let output = eval(result);
    document.getElementById('screen').value = output;

}
function Clear() {
    document.getElementById('screen').value = "";
}