let data = JSON.parse(localStorage.getItem("ids"));

function my2(){
    event.preventDefault();
    let form = document.querySelector("#log");
    let email1 = form.email.value;
    let password1 = form.password.value;
    let count=0;
    // console.log(email1)
    // console.log(data[0].email);
    for(let i=0;i<data.length;i++)
    {
        if(data[i].email==email1)
        {
            
            count++;
            if(data[i].password==password1)
            {
                window.location.href="./index.html"
            }
            else alert("invalid password")
        }
        
    }
    if(count==0) alert("invalid email");
}

