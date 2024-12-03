const users = [
    {
        userName:"kazi",
        photo:"https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBib3lzfGVufDB8fDB8fHww",
        isView:false
},
{
    userName:"manish",
        photo:"https://images.unsplash.com/photo-1536243298747-ea8874136d64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isView:false
},
{
    userName:"hansh",
        photo:"https://images.unsplash.com/photo-1614916198414-5bc7470beb5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D",
        isView:false
},
{
    userName:"chintu",
        photo:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isView:false
},
];



function showImg(){
    let clutter = "";
    users.forEach(function(elem , index){
        clutter += `<div id="single-status">
              <img id=${index}
                src=${elem.photo}
                alt=""
              />
              <h3>${elem.userName}</h3>
            </div>`
    });
    let statusDiv = document.querySelector("#status-div");
    statusDiv.innerHTML = clutter;
}
showImg();

let statusDiv = document.querySelector("#status-div");
let viewImage = document.querySelector("#viewImage");
let imgSrc = document.querySelector("#viewImage img "); 
let btn = document.querySelector("button")

statusDiv.addEventListener("click", function(details){
    console.log(users[details.target.id]);
    
    if(users[details.target.id].isView === false){
        users[details.target.id].isView =true;
    
            viewImage.style.display = "flex";
        imgSrc.src= users[details.target.id].photo  
    }
    else{
        users[details.target.id].isView =false;
    }

    // setTimeout(function(){
    //     viewImage.style.display = "none";
    // },1000)
   
    btn.addEventListener("click", function(){  
        viewImage.style.display = "none";
    })

    showImg();
});


