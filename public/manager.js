

function getManagers(){
    $("#managerName").html("");
    $("#managerList").html("");

    $.getJSON("/api/manager", function(data){
        data.managerUpdates.forEach(element => {
            $("#managerList").append(
            `<div class="wrapper">
            <li id="managerBranchEl"><span id="deleteButton" data-id="${element.managerId}">&times;</span> Branch: ${element.managerBranchName}</li>
            <li id="managerNameEl"> Manager: ${element.managerName} </li>
            <li>Email:${element.managerEmail}</li>
            <li>Comment:${element.managerText}</li>
            </div>`);
        })  
        deleteButtonListener();
    })
}
getManagers();
//form submission
$('#managerForm').on("submit", function(e){
    e.preventDefault();
    const managerName = $("#managerNameInput").val();
    const managerBranchName = $("#managerBranchNameInput").val();
    const managerEmail = $("#managerEmailInput").val(); 
    const managerText = $("#managerComments").val();
    const managerId = $("#managerIdInput").val();
    $.ajax({
        contentType: 'application/json',
        method: "POST", url: "/manager", data:JSON.stringify({managerName:managerName, managerBranchName: managerBranchName, managerEmail: managerEmail, managerText:managerText, managerId:managerId}) 
    }).done(function(){
        getManagers();
    })
})



//Delete button function

function deleteButtonListener(){
    $('#deleteButton').on('click', function(){
        const managerId = $(this).data("id");
        console.log(managerId)
        $.ajax({
            contentType: 'application/json',
            method: "DELETE", url: "/manager/" + managerId,  
        }).done(function(){
            getManagers();
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
