function getManagers(){
    $("#managerName").html("");
    $("#managerList").html("");
    //get the json data from the api/manager routes
    $.getJSON("/api/manager", function(data){
        //pull every element from the api
        data.forEach(element => {
            //appends to the manager page 
            $("#managerList").append(
            `<div class="wrapper">
            <li id="managerBranchEl"><span class="deleteButton" data-id="${element.managerId}">&times;</span> Branch: ${element.managerBranchName}</li>
            <li id="managerNameEl"> Manager: ${element.managerName} </li>
            <li>Email:${element.managerEmail}</li>
            <li>Comment:${element.managerText}</li>
            </div>`);
            //appends to the homePage
            $("#homePageManagerList").append(
                `<div class="wrapper">
                <li id="managerBranchEl"> Branch: ${element.managerBranchName}</li>
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
//event listener submit will  post the data to the Post route
$('#managerForm').on("submit", function(e){
    e.preventDefault();
    //get all the values from the users
    const managerName = $("#managerNameInput").val();
    const managerBranchName = $("#managerBranchNameInput").val();
    const managerEmail = $("#managerEmailInput").val(); 
    const managerText = $("#managerComments").val();
    const managerId = $("#managerIdInput").val();
    // push the data to the POST route on the servers
    $.ajax({
        contentType: 'application/json',
        method: "POST", url: "/manager", 
        data: JSON.stringify({managerName:managerName, managerBranchName: managerBranchName, managerEmail: managerEmail, managerText:managerText, managerId:managerId}) 
    }).done(function(){ 
        getManagers();
    })
})



//Delete button function
function deleteButtonListener(){
    $('.deleteButton').on('click', function(){
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
function hamburger() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
