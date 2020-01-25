import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import AdsPlugin from './plugins/Ads';



const video = document.querySelector("video")

const player = new MediaPlayer({
    el: video,
    plugins:[
        new AutoPlay(),
        new AutoPause(),
        new AdsPlugin(),
    ]
});

const play_btn: HTMLElement = document.querySelector("#play")
play_btn.onclick = ()=> player.togglePlay()

const mute_btn: HTMLElement = document.querySelector("#mute")
mute_btn.onclick = ()=> player.toggleMute()

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .catch(err=>{
        console.log(err.message)
    })
}