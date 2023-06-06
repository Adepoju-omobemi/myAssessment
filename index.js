let Title =document.getElementById ("Title")
let Fullname = document.getElementById ("Fullname")
let PhoneNumber = document.getElementById ("Phone_number")
let Email = document.getElementById ("email")
let HomeAddress = document.getElementById ("Home_address")
let img = document.getElementById("img")
let btn =document.getElementById("btn")




let url = "https://randomuser.me/api/"
 
function getData(){
    fetch(url)
    .then((response) =>{
        return response.json()
    })

   .then((data) =>{
    console.log(data);
    img.src = data.results[0].picture.large
    Title.textContent = data.results[0].name.title
     firstname = data.results[0].name.first
     lastname=data. results[0].name.last
     Fullname.textContent = firstname +'  '+ lastname
     Email.textContent =data.results[0].email
     PhoneNumber.textContent = data.results[0].phone
     HomeAddress.textContent = data.results[0].location.city
     
   } )
}



btn.addEventListener('click',getData())

