// $(document).ready(function(){
//     //this is another way of writing the initial document ready which means to load the jquery only AFTER the rest of the code is done
// //$(function() {

//     // $('#idlikebtn').on('click',function(){
//     //     //this here happen when you click the button
//     //     $(this).find('special').remove();
//     //     $(this).hide();
//     // });

//     //$(selector).action()

// });

//Username Login
// let siteTitle = document.getElementById("siteTitle").innerText;
// console.log(siteTitle);

function inputUser(){
    
    let loginName = document.getElementById("loginName").value;
    console.log(`Hi ${loginName}!`);
    // let siteTitle = document.getElementById("siteTitle").innerText;
    console.log(siteTitle);
    if (loginName != null) {
        document.getElementById("siteTitle").innerHTML = `Hi ${loginName}!`;
    }
}

