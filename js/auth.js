const signupForm=document.querySelector("#volunteer-form");
signupForm.addEventListener('submit',(e)=>{
  e.preventDefault();

  //get user info
  const email=signupForm['signup-email']
.value;
const password=signupForm['signup-password'].value;

//signup the user
auth.createUserWithEmailAndPassword(email,password).then(cred =>{
console.log(cred.user);
signupForm.reset();
});
})

//LOG OUT USER
document.querySelector('#logout').addEventListener('click',()=>{
  window.location.href="index.html";
})
