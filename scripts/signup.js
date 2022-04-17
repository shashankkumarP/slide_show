let data = JSON.parse(localStorage.getItem("ids")) || [];

function ob(n,cn,e,p){
    this.name=n;
    this.contact_number= cn;
    this.email = e;
    this.password = p;
}

function signup(e){
    e.preventDefault()
    let form = document.querySelector("form");
    let name = form.name.value;
    let contact_number = form.number.value;
    let email = form.email.value;
    let password = form.password.value;
    let p1 = new ob(name,contact_number,email,password);
    data.push(p1);
    
    localStorage.setItem("ids",JSON.stringify(data));

    let  clear = document.querySelectorAll(".em");
    for(let i=0;i<clear.length;i++)
    {
        clear[i].value=null;
    }
    window.location.href="./login.html"
}
