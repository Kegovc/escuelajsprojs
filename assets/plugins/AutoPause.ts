import MediaPlayer from "../MediaPlayer";

class AutoPause {
    threshold: number
    isBelowThreshold: boolean
    player: MediaPlayer

    constructor(threshold = 0.25){
        this.threshold = threshold;
        this.isBelowThreshold = false;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    run(player: MediaPlayer){
        this.player = player
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        })

        observer.observe(player.media)

        document.addEventListener('visibilitychange',this.handleVisibilityChange)

    }
    private handleIntersection(entries: IntersectionObserverEntry[]){
        const enty = entries[0]

        this.isBelowThreshold = !enty.isIntersecting
        if(enty.isIntersecting){
            this.player.play()
        }
        else{
            this.player.pause()
        }
    }
    private handleVisibilityChange(){
        const isVisibility = document.visibilityState === "visible"
        if(isVisibility && !this.isBelowThreshold){
            this.player.play()
        }
        else{
            this.player.pause()
        }
    }
}
export default AutoPause