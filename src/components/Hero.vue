<script setup lang="ts">
import {ref, onMounted} from "vue";

const quote = ref<string>('');

const quoteCollection = [
  `Hello!`,
  `I'm Tomislav Levkuš, a web developer.`,
  `This page is currently under construction.`,
  `But while you wait, I’d love to share some inspiring quotes with you:`,
  `"Websites promote you 24/7: No employee will do that.” - Paul Cookson`,
  `"Learning to code is useful no matter what your career ambitions are.”`,
  `"Talk is cheap. Show me the code.” - Linus Torvalds`,
  `"As a programmer, it is your job to put yourself out of business. What you do today can be automated tomorrow.” - Doug McIlroy`,
  `"What separates design from art is that design is meant to be… functional.” - Cameron Moll`,
  `"First, solve the problem. Then write the code.” - John Johnson`,
  `"Your most unhappy customers are your greatest source of learning.” - Bill Gates`,
  `"A user interface is like a joke. If you have to explain it, it’s not that good.” – Unknown`,
  `"Good design is as little design as possible." - Dieter Rams`,
  `"Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs`,
  `"Code is like humor. When you have to explain it, it’s bad." - Cory House`,
  `"The best way to predict the future is to invent it." - Alan Kay`,
  `"In programming, clarity is more important than cleverness." - John Hughes`,
  `"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie`,
  `"Any application that can be written in JavaScript will eventually be written in JavaScript." - Jeff Atwood`,
  `"The user interface is the first thing that people see. If it’s not right, they won’t stick around." - Unknown`,
  `"A good programmer is someone who always looks both ways before crossing a one-way street." - Doug L. Peddle`,
  `"Don’t worry if it doesn’t work right. If everything did, you’d be out of a job." - Mosher’s Law of Software Engineering`,
  `"The most dangerous kind of waste is the waste we do not recognize." - Shigeo Shingo`,
  `Thank you for your patience, and I hope you enjoy these quotes!`,
]


onMounted(() => {
  let index = 0;
  quote.value = quoteCollection[index];

  setInterval(() => {
    if (index < quoteCollection.length) {
      index++;
      quote.value = quoteCollection[index];
    } else {
      index = 4;
    }
  }, 7000)


})
</script>

<template>
  <img id="hero-image" src="/logo.svg" alt="logo"/>

  <p id="story-element" class="animated-text">{{ quote }}</p>


</template>

<style>
#story-element {

}

#hero-image {
  animation-name: pulse;
  animation-duration: 7000ms;
  animation-iteration-count: infinite;
  min-width: 200px;
  width: 300px;

}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

.animated-text {
  padding: 20px;
  text-align: center;
  animation-name: animate-text;
  animation-duration: 7000ms;
  animation-iteration-count: infinite;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-size: 20px;
  font-style: normal;
  min-height: 200px;

}

@keyframes animate-text {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>