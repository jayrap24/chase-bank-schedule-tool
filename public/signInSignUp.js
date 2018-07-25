//Sign up form submit
$('#signUpForm').on("submit",function(e){
    e.preventDefault();
    const signUpName = $("#signUpNameInput").val();
    const signUpEmail = $("#signUpEmailInput").val();
    const signUpPassword = $("#signUpPassswordInput").val();

    $.ajax({
        contentType: 'application/json',
        method: "POST", url: "/signInSignUp", data:JSON.stringify({email: signUpEmail, name:signUpName, password:signUpPassword}) 
    }).catch();


});