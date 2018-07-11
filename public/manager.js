

function getManagers(){
    $("#managerName").html("");
    $("#managerList").html("");

    $.getJSON("/api/manager", function(data){
        data.managerUpdates.forEach(element => {
            $("#managerList").append(
            `<div id="wrapper">
            <div id="branchEl">Branch: ${element.branchName}</div>
            <div id="managerNameEl"> Manager: ${element.managerName} </div>
            <div>Email:${element.email}</div>
            <div>Comment:${element.text}</div>
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