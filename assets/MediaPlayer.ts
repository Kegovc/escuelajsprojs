class MediaPlayer {
    media: HTMLMediaElement
    plugins: Array<any>
    container: HTMLElement

    constructor(config: any) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    private initPlayer() {
        this.container = document.createElement('div')
        this.container.style.position = 'relative'

        this.media.parentNode.insertBefore(this.container,this.media)
        this.container.appendChild(this.media)
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        if (!this.media.paused) {
            this.pause();
        }
        else {
            this.play();
        }
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toggleMute() {
        if (this.media.muted) {
            this.unmute();
        }
        else {
            this.mute();
        }
    }
}








export default MediaPlayer