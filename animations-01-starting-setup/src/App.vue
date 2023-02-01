<template>
  <!-- <div class="container">
    <list-data></list-data>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition
      :css="false"
      @before-enter="beforePara"
      @enter="enterPara"
      @after-enter="afterEnter"
      @before-leave="leavePara"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="pIsVisible">you can see this paragraph because...</p>
    </transition>
    <button @click="pHandler">this p will visible if...</button>
  </div>
  <div class="container">
    <transition name="btn" mode="out-in">
      <button @click="userHandler" v-if="!userVisible">Show User</button>
      <button @click="userHandler" v-else>Hide User</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
  
  <router-view v-slot="slotProps">
    <transition name="btn" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>

</template>

<script>
// import ListData from './components/ListData.vue'
export default {
  // components: {
  //   ListData
  // },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      pIsVisible: false,
      userVisible: false,
      enteredIntv: null,
      leaveIntv: null,
    };
  },
  methods: {
    enterCancelled() {
      clearInterval(this.enteredIntv)
    },
    leaveCancelled() {
      clearInterval(this.leaveIntv)
    },
    afterLeave(el) {
      console.log('after leave');
      console.log(el);
    },
    leave(el, done) {
      console.log('leave para');
      console.log(el);
      let round = 1;
      this.leaveIntv = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++
        if (round > 100) {
          clearInterval(this.leaveIntv)
          done()
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('execute after animation end');
      console.log(el);
    },
    enterPara(el, done) {
      console.log('enter');
      console.log(el);
      let round = 1;
      this.enteredIntv = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++
        if (round > 100) {
          clearInterval(this.enteredIntv)
          done()
        }
      }, 20);
    },
    leavePara(element) {
      console.log('before leave para');
      console.log(element);
      // you can ignore this -> el.style.opacity = 1
    },
    beforePara(el) {
      console.log('before enter');
      console.log(el);
      el.style.opacity = 0;
    },
    pHandler() {
      this.pIsVisible = !this.pIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    userHandler() {
      this.userVisible = !this.userVisible;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.5s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-70px); */
  animation: slide-fade 0.7s ease-out forwards;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.2);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}

.btn-enter-from,
.btn-leave-to {
  opacity: 0;
}

.btn-enter-active {
  transition: opacity 0.3s ease-out;
}

.btn-leave-active {
  transition: opacity 0.3s ease-in;
}

.btn-enter-to,
.btn-leave-from {
  opacity: 1;
}

/* .v-enter-from {
  opacity: 0;
  transform: translateY(-50px);
} */

/* .para-enter-active {
  transition: all 0.7s ease-out;
  animation: slide-scale 0.5s ease-out;
} */

/* .v-enter-to {
 opacity: 1;
 transform: translateY(0);
} */

.v-leave-from {
  /* opacity: 1;
 transform: translateY(0); */
}

/* .para-leave-active {
  transition: all 0.5s ease-out;
  animation: slide-scale 0.3s ease-out;
} */

.v-leave-to {
  /* opacity: 0;
  transform: translateY(40px); */
}

.route-enter-from {

}
.route-enter-active {
  animation: slide-scale 0.5s ease-out;
}
.route-enter-to {
  
}

.route-leave-from {

}
.route-leave-active {
  animation: slide-scale 0.5s ease-in;
}
.route-leave-to {
  
}
</style>
