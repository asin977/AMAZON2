const xhr = new XMLHttpRequest();// creates a new HTTP message to send to the backend.
xhr.open('GET','https://supersimplebackend.dev');
// // (2types of informations )// GET= get some information from backend.//2)whre to  send this HTTP messege.

xhr.addEventListener('load',()=>{
    console.log(xhr.response);
}

)
xhr.send();

