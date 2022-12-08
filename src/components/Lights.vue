<script setup lang="ts">
  // 使用以下选择器会报错的原因，返回值类型如下，而不是NodeListOf<HTMLElement>
  // document.querySelector // Element
  // document.getElementById // HTMLElement
  // document.getElementsByClassName // HTMLCollectionOf<Element> 
  // const circle: HTMLCollectionOf<Element> = document.getElementsByClassName('circle') // 获取元素为8，但ts会报错Element没有style属性

  // 用querySelectorAll无法获取id为circle的元素，但可以获取到#app的元素，即在页面dom渲染到页面之前就执行了
  // const circle: NodeListOf<HTMLElement> = document.querySelectorAll('#circle') // 0
  // console.log(circle);

  // import { onMounted } from "@vue/runtime-core"
  // onMounted(()=>{
  //   const circle: NodeListOf<HTMLElement> = document.querySelectorAll('#circle') // 8
  //   console.log(circle);
  // })
    
  const playLight = function() {
    const circle: NodeListOf<HTMLElement> = document.querySelectorAll('#circle')
    for (let i = 0; i < circle.length; i++) {
      circle[i].removeAttribute("style");
      circle[i].style.animationPlayState = "running";
      // circle[i].style.WebkitAnimationPlayState = "running";   
    } 
  }
  const closeLight = function() {
    // title.style.animation = "none";
    const circle: NodeListOf<HTMLElement> = document.querySelectorAll('#circle')
    // console.log(circle.length); // 8
    for (var i = 0; i < circle.length; i++) {
      circle[i].style.animation = "none";
      circle[i].style.background = "#563260";
    }
  }
</script>
    
<template>
  <div class="lights">
    <div id="circle" class="circle red"></div>
    <div id="circle" class="circle orange"></div>
    <div id="circle" class="circle yellow"></div>
    <div id="circle" class="circle green"></div>
    <div id="circle" class="circle blue"></div>
    <div id="circle" class="circle purple"></div>
    <div id="circle" class="circle red"></div>
    <div id="circle" class="circle orange"></div>
  </div>
  <div><h1>Chtistmas Lights</h1></div>
  <div class="button">
    <button id="play" @click="playLight">On</button>
    <button id="stop" @click="closeLight">Off</button>
    <!-- Speed: <button id="sing" @click="sing">Run</button> -->
    
    <!-- <audio controls="controls" autoplay>
      <source src="JingleBalls.mp3" type="audio/mpeg">
    </audio> -->
  </div>
</template>

<style>
  h1 {
    color: white;
    text-shadow: 0 0 30px white;
  }
  /* 灯上的小柱和线 */
  .circle {
    display: flex;
    margin: 1rem;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background: rgba(0, 0, 0, 0.3);
    position: relative;
    transition: 1s all ease;
  }

  .circle:before {
    position: absolute;
    content: '';
    height: 15px;
    width: 15px;
    left: 17.5px;
    top: -15px;
    margin: 0;
    padding: 0;
    display: block;
    background: rgb(68, 53, 73);
    border-radius: 2px;
    display: inline-block;
    border-bottom: 2px solid rgb(97, 81, 107);
  }

  .circle:after {
    position: absolute;
    content: "";
    top: -20px;
    left: 30px;
    position: absolute;
    width: 70px;
    height: 18.6666666667px;
    border-bottom: solid #222 2px;
    border-radius: 50%;
  }

  .circle:last-child::after {
    content: '';
    position: absolute;
    border: none;
  }

  /* 灯的颜色 */
  .lights {
    border-radius: 25px;
    display: flex;
    height: 20vh;
    width: 1200px;
    /* width: 80vw; */
    justify-content: center;
    align-items: center;
    background-color: rgb(25, 30, 53);
  }
  .circle {
    display: flex;
    margin: 1rem;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: rgba(97, 34, 100, 0.3);
    transition: 1s all ease;
  }

  .red {
    background-color: #c0392b;
    animation: glow-1 1s infinite;
  }
  .orange {
    background-color: rgb(252, 176, 35);
    animation: glow-2 1s infinite;
  }
  .yellow {
    background-color: #f1c40f;
    animation: glow-3 1s infinite;
  }
  .green {
    background-color: #2ecc71;
    animation: glow-4 1s infinite;
  }
  .blue {
    background-color: rgb(86, 202, 248);
    animation: glow-5 1s infinite;
  }
  .purple {
    background-color: rgb(247, 93, 247);
    animation: glow-6 1s infinite;
  }

   /* 灯的动画 */
  @keyframes glow-1 {
    0%,
    100% {
      box-shadow: 0 0 20px 5px #c0392b;
    }
    50% {
      box-shadow: none;
    }
  }
  @keyframes glow-2 {
    0%,
    100% {
      box-shadow: 0 0 20px 5px rgb(252, 176, 35);
    }
    50% {
      box-shadow: none;
    }
  }
  @keyframes glow-3 {
    0%,
    100% {
      box-shadow: 0 0 20px 5px #f1c40f;
    }
    50% {
      box-shadow: none;
    }
  }
  @keyframes glow-4 {
    0%,
    100% {
      box-shadow: 0 0 20px 5px #2ecc71;
    }
    50% {
      box-shadow: none;
    }
  }
  @keyframes glow-5 {
    0%,
    100% {
      box-shadow: 0 0 20px 5px rgb(86, 202, 248);
    }
    50% {
      box-shadow: none;
    }
  }
  @keyframes glow-6 {
    0%,
    100% {
      box-shadow: 0 0 20px 5px rgb(247, 93, 247);
    }
    50% {
      box-shadow: none;
    }
  }


</style>