
//validation code for inputs
const email=document.forms['form']['email'];
const password=document.forms['form']['password'];

const email_error=document.getElementById('user_error');
const pass_error=document.getElementById('pass_error'); 

email_error.addEventListener('textInput',email_Verify);
password.addEventListener('textInput',pass_Verify);


function validated(){
  if(email.value.length <9){
     email.style.border="1px solid red";
     email_error.style.display="block";
     email.focus();
     return false;

  }

  if(password.value.length <6){
    password.style.border="1px solid red";
    pass_error.style.display="block";
    password.focus();
    return false;

 }
}

function email_Verify(){
  if(email.value.length >=8){
    email.style.border="1px solid silver";
     email_error.style.display="none";
     return true;
  }
}

function pass_Verify(){
  if(password.value.length >=5){
    password.style.border="1px solid silver";
     pass_error.style.display="none";
     return true;
  }
}

 //LOGIN USER

 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in
   document.getElementById("form-login").style.display="block";
  } else {
    // No user is signed in.
  }
});


//  function validated(){
//   const loginEmail=document.getElementById('login-email').value;
//   const loginPass=document.getElementById('login-password').value;

//   // window.alert(loginEmail + " " + loginPass);



const loginForm = document.querySelector('#form-login');
loginForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  
//get user info
const email=loginForm['login-email'].value;
const password=loginForm['login-password'].value;

auth.signInWithEmailAndPassword(email,password).then(cred =>{
  console.log(cred.user);
  loginForm.reset();
})

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  
  window.alert("Error : " + errorMessage);
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //User is signed in.
    document.getElementById("Lsubmit").onclick = function () {
         location.href = "details.html";
       };
      
    
  } else {
    // No user is signed in.
    
  }
});

})



