

var selectedrow = null;

function onFormSubmit(){
    var formdata = formData();
    if(selectedrow == null){
        insertData(formdata);
    }
        
        else{
            updateFunction(formdata);
        }
        
    
    reset();

}

function formData(){
    var alldata = {}
       alldata["taskname"]=document.forms["myform"]['taskname'].value;
       return alldata;
   
}

function insertData(data){
    var table = document.getElementById("tasklist").getElementsByTagName('tbody')[0];
    var rownumber = document.getElementById("tasklist").getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    var count = rownumber.length;
    console.log(count);
    var newrow = table.insertRow();
    
    cell1 = newrow.insertCell(0);
    cell1.innerHTML =count;
    

    cell2 = newrow.insertCell(1);
    cell2.innerHTML = data.taskname;

    cell3 = newrow.insertCell(2);
    cell3.innerHTML=`<a href = "#" onClick = 'editFunction(this)' > Edit</a> <a onClick = "deleteFunction(this);" href = "#"> Delete</a>`


}

function reset(){
    document.forms["myform"]['taskname'].value="";
    selectedrow = null;
    
}

function editFunction(owner){
    selectedrow = owner.parentElement.parentElement;
    console.log(selectedrow);

    document.forms["myform"]['taskname'].value = selectedrow.cells[1].innerHTML;
}

function updateFunction(formdata){
    selectedrow.cells[1].innerHTML = formdata.taskname;
}

function deleteFunction(ownthis){
    if(confirm("Do you want to delete it")){
                    
    var row = ownthis.parentElement.parentElement;
    document.getElementById("tasklist").deleteRow(row.rowIndex);
    }

}

