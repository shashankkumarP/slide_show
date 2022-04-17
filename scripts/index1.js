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
sk();

let mymovie = JSON.parse(localStorage.getItem("mymovie"));
function make(im,t,r,idb){
    this.img = im;
    this.title = t;
    this.Realesed = r;
    this.imdb = idb
}
// function database(){
//     for(var i=0;i<n;i++)
//     {

//     }
// }


function kich(url,w){
    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        if(w=="app")
        {
            let per = new make(res.Poster,res.Title,res.Released,res.imdbRating)
            movies.push(per);
            localStorage.setItem("mymovie",JSON.stringify(movies));
        }
        else
        {
            dis(res);
        }
        
    }).catch(function (err){
        console.log("err",err)
    })
}

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
    let map1 = mymovie.sort(function (a,b){
        return Number(a.imdb) - Number(b.imdb);
    })
    document.querySelector("#movies").innerHTML= null;
    
    display(map1);
    
    
}

function hl(){
    let map1 = mymovie.sort(function (a,b){
        return Number(b.imdb) - Number(a.imdb);
    })
    document.querySelector("#movies").innerHTML= null;
    display(map1);
}

function display(mymovie){
    mymovie.map(function (ele,index){
        let div1 = document.createElement("div");
        let im = document.createElement("img");
        im.src = ele.img;
        let p1 = document.createElement("p");
        p1.innerText = `Title : ${ele.title}`;
        let p3 = document.createElement("p");
        p3.innerText = `Release Date : ${ele.Realesed}`
        let p2 = document.createElement("p");
        p2.innerText = `imdbRating : ${ele.imdb}`;
        div1.append(im,p1,p3,p2);
        document.querySelector("#movies").append(div1);
    })
}
display(mymovie);
// console.log(movies);