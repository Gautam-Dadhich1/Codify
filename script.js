console.log("Welcome to Codify");
let songIndex = 0 ;
let audioElement = new Audio('../Codify/media/sound/DhokaDadi.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
// audioElement.play();

let songs = [
    {songName:"Dhoka Dadi", filePath:"../Codify/media/sound/DhokaDadi.mp3", coverPath:"../Codify/media/images/a.png"},
    {songName:"Dhoka Dadi", filePath:"../Codify/media/sound/DhokaDadi.mp3", coverPath:"../Codify/media/images/a.png"},
    {songName:"Dhoka Dadi", filePath:"../Codify/media/sound/DhokaDadi.mp3", coverPath:"../Codify/media/images/a.png"},
    {songName:"Dhoka Dadi", filePath:"../Codify/media/sound/DhokaDadi.mp3", coverPath:"../Codify/media/images/a.png"},
    {songName:"Dhoka Dadi", filePath:"../Codify/media/sound/DhokaDadi.mp3", coverPath:"../Codify/media/images/a.png"},
    {songName:"Dhoka Dadi", filePath:"../Codify/media/sound/DhokaDadi.mp3", coverPath:"../Codify/media/images/a.png"},
    {songName:"Dhoka Dadi", filePath:"../Codify/media/sound/DhokaDadi.mp3", coverPath:"../Codify/media/images/a.png"},
    {songName:"Dhoka Dadi", filePath:"../Codify/media/sound/DhokaDadi.mp3", coverPath:"../Codify/media/images/a.png"}
]

//event listners 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.replace('fa-play-circle', 'fa-pause-circle')
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.replace('fa-pause-circle', 'fa-play-circle')
        gif.style.opacity = 0;

    }
})

audioElement.addEventListener('timeupdate', ()=>{
    //taking time in percentage that how much it is completed
    let progress = parseFloat((audioElement.currentTime/audioElement.duration)*100)
    //in this we add the value whatever has been completed
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100);
})