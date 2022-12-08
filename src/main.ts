/*
 * @Date: 2022-11-24 19:44:05
 * @Author: Fancyicookie
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

document.body.onclick = function() {
    const audio = document.getElementsByClassName("audio");
    if(audio.audio.paused) {
        audio.audio.play()
    } else {
        console.log(audio.audio.paused);
        audio.audio.pause()
    }
}