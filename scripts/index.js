
let movies = [];
let movie = ["batman","superman","The Dark Knight","love","avengers","bahubali","spider man","Band of Brothers","The Godfather"];
let n = movie.length;

function sk(){
    for(let i=0;i<n;i++)
    {
        let url = `https://www.omdbapi.com/?i=tt3896198&apikey=ed004b4f&t=${movie[i]}`
        kich(url,"app");
        // console.log(url)
    }
}

function kich(url,w){
    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        if(w==="app")
        {
             display(res);
             movies.push(res);
        }
        else
        {
            dis(res);
        }
        
    }).catch(function (err){
        console.log("err",err)
    })
}

function display(res){
    // document.querySelector("#movies").innerHTML= null;
    let div1 = document.createElement("div");
    let im = document.createElement("img");
    im.src = res.Poster;
    let p1 = document.createElement("p");
    p1.innerText = `Title ${res.Title}`;
    let p3 = document.createElement("p");
    p3.innerText = `Release Date : ${res.Released}`
    let p2 = document.createElement("p");
    p2.innerText = `imdbRating : ${res.imdbRating}`;
    div1.append(im,p1,p3,p2);
    document.querySelector("#movies").append(div1);
}
sk();

function slide(){
    let count =0;
    setInterval(function(){
        let ur = `https://www.omdbapi.com/?i=tt3896198&apikey=ed004b4f&t=${movie[count]}`;
      
        kich(ur,"hi");
        if(count==n-1) count=0;
        
        count++;
    },3000)
}
slide()
function dis(r)
{
    
    document.querySelector("#slideshow").innerHTML=null;
    let im1 = document.createElement("img");
    im1.src= r.Poster;
    im1.style.width="60%";
    im1.style.height="200px";
    im1.style.margin="auto"
    im1.style.display="block"
    document.querySelector("#slideshow").append(im1);
}

function lh(){
    let map1 = movies.sort(function (a,b){
        return Number(a.imdbRating) - Number(b.imdbRating);
    })
    document.querySelector("#movies").innerHTML= null;
    map1.map(function (ele,index){
        display(ele);
    })
    
}

function hl(){
    let map1 = movies.sort(function (a,b){
        return Number(b.imdbRating) - Number(a.imdbRating);
    })
    document.querySelector("#movies").innerHTML= null;
    map1.map(function (ele,index){
        display(ele);
    })
}
console.log(movies);