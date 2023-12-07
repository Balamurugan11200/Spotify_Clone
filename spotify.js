const songs=new Array(31);
var index=0;
let audioElement=new Audio("./Songs/0.mp3")
var count=0 ,type="pause" ,progress;
var bool="noloop";
var myprogress=document.getElementById("myprogress")
var looping=document.getElementsByClassName("looping")
var playertext=document.getElementById("playertext")
playertext.style.color="White"
var playerimage=document.getElementById("image")
var subscription=document.getElementById("subscription")
var searcharia=document.getElementById("searcharia")
var container=document.getElementById("container")
container.style.display="inline-flex"
var plays=document.getElementById("plays")
var image=document.getElementById("image")
var findedsong=document.getElementById("findedsong")
var librarydiv=document.getElementById("librarydiv")
var albumnameofid;
var albumsong=document.getElementById("albumsong")
var cardform=document.getElementById("cardform")
var paymentprocess=document.getElementById("paymentprocess")

for (i=0;i<songs.length;i++){
    songs[i]=[
    {id :`${i}`,className:"sng",filePath :`./Songs/${i}.mp3`}, 
    ]   
}
console.log(songs)
let pause=document.getElementById("pause")
let smallpause=document.getElementById("smallpause")
pause.addEventListener("click",element)
smallpause.addEventListener("click",element)

function element(){
    if(audioElement.paused){
        type="play";  
        audioElement.play();
        pause.src="./Image/circle-play-solid.svg"
        smallpause.src="./Image/circle-play-solid.svg"
        if(index=="0"){
            let reference=document.getElementById(`${index}`)
            playertext.textContent=reference.ariaValueMin;
            playerimage.src=`./Image/img/${index}.jpg`
            plays.style.height="100vh";
            image.style.height="80vh";
            image.style.width="100%";
        }
    }else{   
        type="pause";
        count=0;
        tt=3;
        audioElement.pause();
        pause.src="./Image/pause-solid.svg"
        smallpause.src="./Image/pause-solid.svg"
    }
}
var example;
audioElement.addEventListener("ended",(value)=>{  
    console.log(value.target.src)
    console.log(value.target)
    if(bool=="noloop"){
        audioElement.src=`./Songs/${++index}.mp3`; 
        audioElement.currentTime=0;
        audioElement.play();
        pause.src="./Image/circle-play-solid.svg"
        smallpause.src="./Image/circle-play-solid.svg"
    }else 
    if(index==songs.length){
        index=0;
        audioElement.src=`./Songs/${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        pause.src="./Image/circle-play-solid.svg"
        smallpause.src="./Image/circle-play-solid.svg"
    } else 
    if(bool == "looping"){
        audioElement.src=`./Songs/${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        pause.src="./Image/circle-play-solid.svg"
        smallpause.src="./Image/circle-play-solid.svg"
    }
    let reference=document.getElementById(`${index}`)
    playertext.textContent=reference.ariaValueMin;
    playerimage.src=`./Image/img/${index}.jpg`
})

audioElement.addEventListener("timeupdate",(e)=>{
    console.log("timeupdate");
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogress.value = progress;
})
myprogress.addEventListener("change",(value)=>{
    console.log(value.target)
    audioElement.currentTime=(myprogress.value*audioElement.duration/100);
})

let repeat=document.getElementById("repeat")
repeat.addEventListener("click",repeats)

let smallrepeat=document.getElementById("smallrepeat")
smallrepeat.addEventListener("click",repeats)

function repeats(){
    if( bool=="noloop"){
        if(audioElement.paused){
            pause.src="./Image/pause-solid.svg"
            smallpause.src="./Image/pause-solid.svg"
        }else{   
            pause.src="./Image/circle-play-solid.svg"
            smallpause.src="./Image/circle-play-solid.svg"
        }
        looping[0].textContent="loop"
        // looping[1].textContent="loop"
        repeat.src="https://static.thenounproject.com/png/2596210-200.png"
        repeat.style.height="20px"
        repeat.style.width="25px"
        smallrepeat.style.height="40px"
        smallrepeat.src="https://static.thenounproject.com/png/2596210-200.png"  
        bool="looping"
    }else 
    if(bool="looping"){
        looping[0].textContent=""
        looping[1].textContent=""
        bool="noloop"
        repeat.src="./Image/repeat-solid.svg"
        smallrepeat.src="./Image/repeat-solid.svg"
    }
}

let farward=document.getElementById("farward")
farward.addEventListener("click",farwards)

let smallfarward=document.getElementById("smallfarward")
smallfarward.addEventListener("click",farwards)

function farwards(){
    if(index==songs.length){
        index=0;
    }else{
        index+=1;
    }
    audioElement.src=`./Songs/${index}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    pause.src="./Image/circle-play-solid.svg"
    smallpause.src="./Image/circle-play-solid.svg"
    let reference=document.getElementById(`${index}`)
    playertext.textContent=reference.ariaValueMin;
    playerimage.src=`./Image/img/${index}.jpg`
}

let backward=document.getElementById("backward")
backward.addEventListener("click",backwards)

let smallbackward=document.getElementById("smallbackward")
smallbackward.addEventListener("click",backwards)

function backwards(){
    if(index=='0'){
        index=songs.length;
    }else{
        index-=1;
    }
    audioElement.src=`./Songs/${index}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    pause.src="./Image/circle-play-solid.svg"
    smallpause.src="./Image/circle-play-solid.svg"
    let reference=document.getElementById(`${index}`)
    playertext.textContent=reference.ariaValueMin;
    playerimage.src=`./Image/img/${index}.jpg`
}

Array.from(document.getElementsByClassName("listitem")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        console.log(e.target)
        pause.src="./Image/circle-play-solid.svg"
        smallpause.src="./Image/circle-play-solid.svg"
        index =parseInt(e.target.id);
        console.log(index)
        audioElement.src=`./Songs/${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        let reference=document.getElementById(`${index}`)
        playertext.textContent=reference.ariaValueMin;
        console.log(reference.ariaValueMin)
        playerimage.src=`./Image/img/${index}.jpg`
    })
})

let mediaplayer=document.getElementById("mediaplayer")
mediaplayer.addEventListener("click",(value)=>{
    console.log(value.target.id);
    if(value.target.id=="playlist"){
        container.style.display="inline-flex";
        location="#container";
        searcharia.style.display="none";
        subscription.style.display="none";
        paymentprocess.style.display="none";
        cardform.style.display="none";
        librarydiv.style.display="none";
        albumnameofid.style.display="none";
    }else
    if(value.target.id=="mediaplayer"){
        plays.style.display="block";
        location="#plays";
        plays.style.height="90vh";
        image.style.height="480px";
        image.style.width="100%";
        searcharia.style.display="none";
        subscription.style.display="none";
        paymentprocess.style.display="none";
        cardform.style.display="none";
        librarydiv.style.display="none";
        albumnameofid.style.display="none";
    }
})

let screensize=document.getElementById("screensize")
screensize.addEventListener("click",(value)=>{
    console.log(value.target.id);
    if(value.target.id=="smallplaylist"){
        container.style.display="inline-flex";
        searcharia.style.display="none" 
        subscription.style.display="none"
        paymentprocess.style.display="none"
        cardform.style.display="none"
        librarydiv.style.display="none"
        albumnameofid.style.display="none"
        plays.style.display="none"
        location="#container"; 
    }else
    if(value.target.id=="screensize"){ 
        plays.style.display="block"
        location="#plays";
        plays.style.height="90vh";
        image.style.height="430px";
        image.style.width="100%";
        container.style.display="none";
        searcharia.style.display="none" 
        subscription.style.display="none"
        paymentprocess.style.display="none"
        cardform.style.display="none"
        librarydiv.style.display="none"
        albumnameofid.style.display="none"
    }
})

let largehome=document.getElementById("largehome")
largehome.addEventListener("click",homes)

let home=document.getElementById("home")
home.addEventListener("click",homes)

function homes(){
    container.style.display="inline-flex"
    plays.style.display="none"
    searcharia.style.display="none" 
    subscription.style.display="none"
    paymentprocess.style.display="none"
    cardform.style.display="none"
    librarydiv.style.display="none"
    albumnameofid.style.display="none" 
}

let largesearch=document.getElementById("largesearch")
largesearch.addEventListener("click",search)

let smallsearch=document.getElementById("smallsearch")
smallsearch.addEventListener("click",search)

function search(){
    console.log(searcharia.style.display)
    plays.style.display="none"
    searcharia.style.display="block"
    searcharia.style.height="85vh"
    container.style.display="none"
    subscription.style.display="none"
    paymentprocess.style.display="none"
    cardform.style.display="none" 
    librarydiv.style.display="none"
    albumnameofid.style.display="none" 
}

let searchresult=document.getElementById("searchresult")
searchresult.addEventListener("click",(result)=>{  
    console.log(userinput)
    Array.from(document.getElementsByClassName("listitem")).forEach((element)=>{  
        var selector=element.children;
        for(ele of selector){
            var userinput=document.getElementById("userinput").value
            var name=ele.ariaValueMin;
            console.log(name)
            var split=name.split("-");
            console.log(split[0])
            if(split[0]==userinput){
                console.log(name)
                findedsong.style.display="block"
                findedsong.src=`./Image/img/${ele.id}.jpg`
                findedsong.ariaValueMin=ele.ariaValueMin;
                findedsong.id=ele.id;
                console.log(findedsong.id);
                index=findedsong.id;
                findedsong.addEventListener("click",(value)=>{
                    audioElement.src=`./Songs/${index}.mp3`;
                    audioElement.currentTime=0;
                    audioElement.play();
                    pause.src="./Image/circle-play-solid.svg"
                    smallpause.src="./Image/circle-play-solid.svg"
                    let reference=document.getElementById(`${index}`)
                    playertext.textContent=reference.ariaValueMin;
                    playerimage.src=`./Image/img/${index}.jpg`
                    repeats();
                })
            }
        }
    })
})

let largepremium=document.getElementById("largepremium")
largepremium.addEventListener("click",premiums)

let premium=document.getElementById("premium")
premium.addEventListener("click",premiums)

function premiums(){
    container.style.display="none"
    plays.style.display="none"
    searcharia.style.display="none"
    subscription.style.display="inline-flex"
    paymentprocess.style.display="none" 
    cardform.style.display="none"
    librarydiv.style.display="none"
    albumnameofid.style.display="none"     
}

Array.from(document.getElementsByClassName("buynow")).forEach((element)=>{
    element.addEventListener("click",(value)=>{
        container.style.display="none"
        plays.style.display="none"
        searcharia.style.display="none"
        paymentprocess.style.display="inline-flex"
        paymentprocess.style.height="95vh"
        paymentprocess.style.width="100%"
        librarydiv.style.display="none"
        albumnameofid.style.display="none"
    })
})

let debitcard=document.getElementById("debitcard")
debitcard.addEventListener("click",(value)=>{
    cardform.style.display="flex"
    cardform.style.height="95vh"
    cardform.style.width="100%"
    container.style.display="none"
    plays.style.display="none"
    searcharia.style.display="none" 
    subscription.style.display="none" 
    librarydiv.style.display="none"
    albumnameofid.style.display="none"
})

let largelibrary=document.getElementById("largelibrary")
largelibrary.addEventListener("click",librarys)

let library=document.getElementById("library")
library.addEventListener("click",librarys)

function librarys(){
    librarydiv.style.display="inline-flex"
    container.style.display="none"
    plays.style.display="none"
    searcharia.style.display="none"
    subscription.style.display="none"
    paymentprocess.style.display="none"
    cardform.style.display="none"
    albumnameofid.style.display="none"
}

const albumname=["ghilli","jeens","ayan","jawan","kadhalilvizhunthen","leo","unnaleunnale","sachin","jailer","don","petta","vikram","darbar"];

Array.from(document.getElementsByClassName("albums")).forEach((element)=>{
    element.addEventListener("click",(value)=>{
        console.log(element.id)
        albumsong.style.display="inline-flex"
        for(i=0;i<albumname.length;i++){
            if(element.id == i){
                albumnameofid=document.getElementById(albumname[i])
                albumnameofid.style.display="inline-flex "
                albumnameofid.style.height="100vh"
                albumnameofid.style.width="100%"
                albumnameofid.style.alignItems="center";
                container.style.display="none"
                plays.style.display="none"
                librarydiv.style.display="none"
            }
        }
    })
})