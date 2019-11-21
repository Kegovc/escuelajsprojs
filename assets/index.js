import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'



const video = document.querySelector("video")

const player = new MediaPlayer({
    el: video,
    plugins:[
        new AutoPlay(),
    ]
});

const play_btn = document.querySelector("#play")
play_btn.onclick = ()=> player.togglePlay()

const mute_btn = document.querySelector("#mute")
mute_btn.onclick = ()=> player.toggleMute()

