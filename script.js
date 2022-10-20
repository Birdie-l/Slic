let buttonCopy = document.getElementsByClassName("button copy");
buttonCopy.onclick = copy;
function copy() {

};

function deleteB(caller) {
    let divToDelete = caller.parentElement.parentElement;
    $(divToDelete).remove();
};

let newId = 1;

function newLine() {
    let divToCopy = $('#' + newId).clone();
    newId += 1;
    divToCopy.prop('id', newId);
    $('#' + (newId - 1)).after(divToCopy);
    let valTime = $('input.inputTime').val();
    let valDesc = $('input.inputDescription').val();

};

