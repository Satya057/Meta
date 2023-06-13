async function getData(){
    try{
        let res =await fetch ("http://localhost:3000/data");
        let data=await res.json();
        console.log(data);

    }catch (error){
        console.log(error);

    }


}

getData();
let container =document.getElementById("cardsimg");


function appendData(data){
    data.forEach((el)=>{
        let div=document.getElementById("div");
        div.setAttribute("classimg","smallcard");

        let img=document.createElement("img");
        img.src=el.ImgUrl;
        img.setAttribute("class","img");
        
    })
}
