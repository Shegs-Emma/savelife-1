
//User CLASS:Represents the class
 class User{
     constructor(name,gender,phoneno,age,state,blood,health,date,bloodBank){
         this.name=name;
         this.gender=gender;
         this.phoneno=phoneno;
         this.age=age;

         this.state=state;
         this.blood=blood;
         this.health=health;
         this.bloodBank=bloodBank;
         this.date=date;
         
     }}
     //UI CLASS:Handle UI Tasks
     class UI{
         static displayUsers(){
             const users=Store.getUser();

            users.forEach((user)=>UI.addUserToList(user)); 
         }

         static addUserToList(user){
             const list=document.querySelector('#detail-list ')
             const row=document.createElement('tr');

             row.innerHTML=`
             <td>${user.name}</td>
             <td>${user.gender}</td>
             <td>${user.phoneno}</td>
             <td>${user.age}</td>
             <td>${user.state}</td>
             <td>${user.blood}</td>
             <td>${user.health}</td>
             <td>${user.date}</td>
             <td>${user.bloodBank}</td>
           
            
             <td><a hred="#" class="btn btn-danger btn-sm delete">X</a></td>
             
             `;
             list.appendChild(row); 

         }

         static deleteUser(el){
             if(el.classList.contains('delete')){
                 el.parentElement.parentElement.remove(); 
             }
         }


         static showAlert(message, classsName){
             const div= document.createElement('div');
             div.className=`alert alert-${classsName}`;
             div.appendChild(document.createTextNode(message));
             const container=document.querySelector('.container');
             const form=document.querySelector('#detailForm');
             container.insertBefore(div,form);

             //Make it vanish in 3 seconds
             setTimeout(()=> document.querySelector('.alert').remove(),3000);
         }

         static clearFields(){
             document.querySelector('#name').value= ''; 
             document.querySelector('#gender').value= '';
             document.querySelector('#phoneno').value= '';
             document.querySelector('#age').value= '';
             document.querySelector('#state').value= '';
             document.querySelector('#blood').value= '';
             document.querySelector('#health').value= '';
             document.querySelector('#date').value= '';
             document.querySelector('#bloodBank').value= '';

         }
     }
    




//STORE CLASS: Storage

class Store{
    static getUser(){
         let users;
         if(localStorage.getItem('users')===null){
             users=[];
         }else{
     users=JSON.parse(localStorage.getItem('users'))
         }
 
         return users;

     }



     static addUser(user){   
        const users=Store.getUser();
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users));


     }

     static removeUser(bloodBank){
        const users= Store.getUser();
        users.forEach((user,index)=>{ 
            
            if(user.bloodBank === bloodBank){
              users.splice(index,1);  
            }
        });
         localStorage.setItem('users', JSON.stringify(users));
             
          };
     }
        
    











//Event:Display Books
document.addEventListener('DOMContentLoaded',UI.displayUsers);

//Event: Add a User
document.querySelector("#detailForm").addEventListener('submit',(e) =>{

    //prevebt actual 
    e.preventDefault();
    //Get form values
    const name=document.querySelector("#name").value;
    const gender=document.querySelector("#gender").value;
    const phoneno=document.querySelector("#phoneno").value;
    const age=document.querySelector("#age").value;
    
    const state=document.querySelector("#state").value;
    const blood=document.querySelector("#blood").value;
    const health=document.querySelector("#health").value;

    const date=document.querySelector("#date").value;
    const bloodBank=document.querySelector("#bloodBank").value;
   
    //Validate
    if(name === '' || gender=== '' || age === '' || state === '' || phoneno === '' || blood === '' || health === '' || date === '' ||  bloodBank=== ''){
    UI.showAlert ('Please fill in all fields', 'danger');
   }else{
    //instatiate user
    const user=new User(name,gender,phoneno,age,state,blood,health,date,bloodBank);

    //Add User to UI
    UI.addUserToList(user);

    //Add User to Store
    Store.addUser(user);

    //show success message
    UI.showAlert('Your Information is Added','success') 

    //Clear Fields
    UI.clearFields(); 
   }
});

//Event: Remove a User
document.querySelector('#detail-list').addEventListener('click',(e)=>{

    //Remove user form UI
    UI.deleteUser(e.target); 

    //Remove book from store
    Store.removeUser(e.target.parentElement.previousElementSibling.textContent);
  
    //show success meesage
    UI.showAlert(' Information is Removed','success') 
})