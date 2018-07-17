function getEmployees(){
    $("#employeeName").html("");
    $("#employeeList").html("");
    $.getJSON("/api/employee", function(data){
        data.employeeUpdates.forEach(element => {
            $("#employeeList").append(
            `<div class="wrapper">
            <li id="employeeBranchEl"><span id="deleteButton" data-id="${element.employeeId}">&times;</span> Branch: ${element.employeeBranchName}</li>
            <li id="employeeNameEl"> Employee: ${element.employeeName} </li>
            <li>Email:${element.employeeEmail}</li>
            <li>Comment:${element.employeeText}</li>
            </div>`);
        })  
        deleteButtonListener();
    })
}
getEmployees();
//form submission
$('#employeeForm').on("submit", function(e){
    e.preventDefault();
    const employeeName = $("#employeeNameInput").val();
    const employeeBranchName = $("#employeeBranchNameInput").val();
    const employeeEmail = $("#employeeEmailInput").val(); 
    const employeeText = $("#employeeComments").val();
    const employeeId = $("#employeeIdInput").val();
    $.ajax({
        contentType: 'application/json',
        method: "POST", url: "/employee", data:JSON.stringify({employeeName:employeeName, employeeBranchName: employeeBranchName, employeeEmail: employeeEmail, employeeText:employeeText, employeeId:employeeId}) 
    }).done(function(){
        getEmployees();
    })
})



//Delete button function

function deleteButtonListener(){
    $('#deleteButton').on('click', function(){
        const employeeId = $(this).data("id");
        console.log(employeeId)
        $.ajax({
            contentType: 'application/json',
            method: "DELETE", url: "/employee/" + employeeId,  
        }).done(function(){
            getEmployees();
        })
    });
}




//Top nav hamburger
function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
