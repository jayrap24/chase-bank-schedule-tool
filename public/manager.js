

function getManagers(){
    $("#managerName").html("");
    $("#managerList").html("");

    $.getJSON("/api/manager", function(data){
        data.managerUpdates.forEach(element => {
            $("#managerList").append(
            `<div class="wrapper">
            <li id="branchEl"><span id="deleteButton">&times;</span> Branch: ${element.branchName}</li>
            <li id="managerNameEl"> Manager: ${element.managerName} </li>
            <li>Email:${element.email}</li>
            <li>Comment:${element.text}</li>
            </div>`);
        })  
    })
}
getManagers();
//form submission
$('#managerForm').on("submit", function(e){
    e.preventDefault();
    const managerName = $("#managerNameInput").val();
    const branchName = $("#branchNameInput").val();
    const email = $("#emailInput").val(); 
    $.ajax({
        contentType: 'application/json',
        method: "POST", url: "/manager", data:JSON.stringify({managerName:managerName, branchName: branchName, email: email}) 
    }).done(function(){
        getManagers();
    })
})



function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
