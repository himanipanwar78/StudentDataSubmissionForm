function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
    var modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop'));
    modal.hide();
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["rollNo"] = document.getElementById("rollNo").value;
    formData["mobileNo"] = document.getElementById("mobileNo").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    newRow.insertCell(0).innerHTML = data.name;
    newRow.insertCell(1).innerHTML = data.email;
    newRow.insertCell(2).innerHTML = data.rollNo;
    newRow.insertCell(3).innerHTML = data.mobileNo;
    newRow.insertCell(4).innerHTML = `<a href="#" class="btn btn-success" onClick="onEdit(this)">Edit</a> 
                                       <a href="#" class="btn btn-success" onClick="onDelete(this)">Delete</a> `;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("mobileNo").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("rollNo").value = selectedRow.cells[2].innerHTML;
    document.getElementById("mobileNo").value = selectedRow.cells[3].innerHTML;
    var modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    modal.show();
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.rollNo;
    selectedRow.cells[3].innerHTML = formData.mobileNo; 
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record?')) {
        var row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

var selectedRow = null;
