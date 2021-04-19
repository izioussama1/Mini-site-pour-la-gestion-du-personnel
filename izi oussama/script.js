$(document).ready(function(){

    document.getElementById("add").addEventListener('click' ,function(){
        document.getElementById("crud-form").style.display="block";
    })

    document.getElementById("selectAll").addEventListener('click',function(){
        var elements = document.getElementsByTagName("input");
        for (var i=0; i < elements.length; i++) {
        if (elements[i].type == "checkbox") {
            if(document.getElementById('selectAll').checked)
            {
                elements[i].checked = true;
            }
            else{
                elements[i].checked = false;
            }
            
        }
       
    }
    })
 
// valider    
    document.getElementById("valider").addEventListener('click',function(){
        if(selectedRow==null){
            var nom=document.getElementById("name").value;
            var mail=document.getElementById("email").value;
            var addr=document.getElementById("address").value;
            var tele=document.getElementById("phone").value;
            var spc=document.getElementById("speci").value;
            var dat=document.getElementById("Date").value;
            $('#myTable').append("<tr><td><span class='custom-checkbox'><input type='checkbox' id='checkbox1' name='options[]' value='1'><label for='checkbox1'></label></span></td><td>"+nom+"</td><td>"+mail+"</td><td>"+addr+"</td><td>"+tele+"</td><td>"+spc+"</td><td>"+dat+"</td><td><a href='#' class='edit' onclick='edit(this)'><i class='material-icons' title='Edit'>&#xE254;</i></a><a href='#' class='delete' onclick='ddelete()'><i class='material-icons' title='Delete'>&#xE872;</i></a></td></tr>")
        
        }
        else{
          selectedRow.cells[1].innerHTML=document.getElementById("name").value;
          selectedRow.cells[2].innerHTML=document.getElementById("email").value;
          selectedRow.cells[3].innerHTML=document.getElementById("address").value;
          selectedRow.cells[4].innerHTML=document.getElementById("phone").value;
          selectedRow.cells[5].innerHTML=document.getElementById("speci").value;
          selectedRow.cells[6].innerHTML=document.getElementById("Date").value;
        }
    })
});

// vider

function vider(){
     document.getElementById("name").value="";
     document.getElementById("email").value="";
     document.getElementById("address").value="";
     document.getElementById("phone").value="";
     document.getElementById("speci").value="";
     document.getElementById("date").value="";
    }

// delete by icon trash
const table = document.getElementById('body')
table.addEventListener('click' , function deletitem(e) {
    if (e.target.parentElement.classList.contains('delete')) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
})

// delete all
function deleteall(){
  var supp = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr')
  var i= supp.length
alert('are you sure');
  while(i--){
    if(supp[i].getElementsByTagName('input')[0].checked){
      supp[i].parentNode.removeChild(supp[i])
    }
  }
}


// edit
let selectedRow=null;
function edit(td){
    selectedRow =td.parentElement.parentElement;
    document.getElementById("name").value=selectedRow.cells[1].innerHTML;
    document.getElementById("email").value=selectedRow.cells[2].innerHTML;
    document.getElementById("address").value=selectedRow.cells[3].innerHTML;
    document.getElementById("phone").value=selectedRow.cells[4].innerHTML;
    document.getElementById("speci").value=selectedRow.cells[5].innerHTML;
    document.getElementById("Date").value=selectedRow.cells[6].innerHTML;
}


// filter
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#mytable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});




// show data on html
var xhr=new XMLHttpRequest();
xhr.open('GET','users.json',true);

  xhr.onload = function (){
  if(xhr.status == 200){
    var data = JSON.parse(xhr.responseText);
    for(var i=0;i<data.length;i++){
        $('#myTable').append("<tr><td><span class='custom-checkbox'><input type='checkbox' id='checkbox1' name='options[]' value='1'><label for='checkbox1'></label></span></td><td>"+data[i].name+"</td><td>"+data[i].email+"</td><td>"+data[i].address+"</td><td>"+data[i].phone+"</td><td>"+data[i].spécialité+"</td><td>"+data[i].date+"</td><td><a href='#' class='edit' onclick='edit(this)'><i class='material-icons' title='Edit'>&#xE254;</i></a><a href='#' class='delete' onclick='ddelete()'><i class='material-icons' title='Delete'>&#xE872;</i></a></td></tr>")
    }
  }
}
xhr.send();






















// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });