    const onclick = document.getElementById("getImg"),
      output    = document.getElementById("output")



window.addEventListener("load" , ()=>{
    loader();
    fetchcharcters();
} )

function loader (){
    output.innerHTML=
    `
    <div class= "gif-spinner mx-auto" >
        <img src="img/loader.webp">
        <span class="text-white"> Loading...  </span>
    </div>
    `
}

onclick.addEventListener("click",()=>{
    let btn = onclick.value;
    loader();
    fetchcharcters(btn)
})



async function fetchcharcters(query){

    let res;

    if(query){
        res = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    }else{
        res = await fetch(`https://www.breakingbadapi.com/api/characters`)
    }

    let results = await res.json();

    output.innerHTML=""

    results.map(result =>{
        const htmlstring = 
        `
        <img src=${result.img} class="img" >
        <div class="info-display">
            <h5> Name : <span> ${result.portrayed} </span> </h5>
            <hr>
            <h6> Actor : <span> ${result.name} </span>  </h6>
            <h6> NickName : <span> ${result.nickname} </span>  </h6>
            <h6> Status : <span> ${result.status} </span>  </h6>
            <h6> Birthday : <span> ${result.birthday} </span>  </h6>    
            <h6> occupation : <span> ${result.occupation} </span>  </h6>    
        </div>
        `

        
        let outstring = document.createElement("div")
        outstring.classList.add("col-md-3" , "mb-3" , "img-info")
        outstring.innerHTML=htmlstring
        output.appendChild(outstring)
    })
}
