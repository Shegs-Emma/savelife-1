const toggleModal = () => {
    document.querySelector('.modal')
      .classList.toggle('modal--hidden');
    document.querySelector('.overlay')
      .classList.toggle('overlay--hidden');
  }
  document.querySelector('#show-modal')
    .addEventListener('click', toggleModal);
  
  document.querySelector('.overlay')
    .addEventListener('click', toggleModal);
  
  // document.querySelector('#volunteer-form')
  //   .addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   toggleModal();
  // });
  
  document.querySelector('.modal__close-bar span')
    .addEventListener('click', toggleModal);
  document.querySelector('.overlay')
    .addEventListener('click', toggleModal);


    //redirect to welcome page after submission
    document.querySelector('#submit').addEventListener('click',()=>{
      window.location.href="welcome.html";

    })
//     function Lsubmit()
// {
//     window.location.href="welcome.html";
// }
// document.getElementById("submit").onclick = function () {
//   location.href = "welcome.html";
// };


    