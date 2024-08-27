document.getElementById("form").addEventListener("submit",  (event) => {
    event.preventDefault();
    let userName = document.getElementById('input').value;
   
    console.log(userName);
});

