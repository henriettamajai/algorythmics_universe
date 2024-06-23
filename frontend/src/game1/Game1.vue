<template>
  <div>
    <Navigation />
    <div class="flex justify-center items-center pt-6">
      <div class="relative">
        <div class="game-relative">
          <canvas id="game-canvas" width="1280" height="720" class="rounded-lg"></canvas>
        </div>
        <div class="absolute bottom-4 left-4 bg-black bg-opacity-50 p-2 rounded text-white text-lg">
          <p>Collected items: {{ collectedCount }}</p>
        </div>
      </div>
    </div>

    <IntroModal :visible="introVisible" @close="closeIntroModal" />
    <QuestionModal 
      v-if="questionVisible" 
      :visible="questionVisible" 
      :question="currentQuestion.question"
      :choices="currentQuestion.choices" 
      :answerIndex="currentQuestion.answerIndex"
      @answerEvent="handleAnswer"
     </QuestionModal>
      <OutroModal :visible="congratulationsVisible" @close="closeCongratulationsModal" />
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { Vector2 } from './Vector2';
import { resources } from './Resource';
import { Sprite } from './Sprite';
import { GameLoop } from './GameLoop';
import Navigation from '@/components/Navigation.vue';
import { Collectible } from './Collectible.js';
import IntroModal from './IntroModal.vue';
import QuestionModal from './QuestionModal.vue';
import OutroModal from './OutroModal.vue';
import api from '@/services/api';

const introVisible = ref(true);
const questionVisible = ref(false);
const congratulationsVisible = ref(false);
const currentQuestion = ref(null);
const collectedCount = ref(0);
var gameLoop = null;
var collectibles = [];



const startGame = () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  const skySprite = new Sprite({
    resource: resources.images.sky,
    frameSize: new Vector2(1280, 720)
  });

  const groundSprite = new Sprite({
    resource: resources.images.ground,
    frameSize: new Vector2(1280, 720)
  });

  const character = new Sprite({
    resource: resources.images.character,
    frameSize: new Vector2(64, 64),
    hFrames: 4,
    vFrames: 4,
    frame: 1
  });

  const characterPos = new Vector2((canvas.width - 64) / 2, (canvas.width - 64) / 2);

  gameLoop = new GameLoop(character, characterPos, skySprite, groundSprite, ctx, canvas, collectibles, showQuestionModal);
  gameLoop.start();
};

const closeIntroModal = () => {
  introVisible.value = false;
};

const showQuestionModal = (item) => {
  questionVisible.value = true;

  currentQuestion.value = {
    visible: true,
    question: item.question,
    choices: item.choices,
    answerIndex: item.answerIndex,
  };
};

const handleAnswer = () => {
  const collectible = collectibles.find(item => item.question === currentQuestion.value.question);
  if (collectible) {
    collectible.collected = true;
    collectedCount.value++;
    if (collectedCount.value === 4) {
      congratulationsVisible.value = true;
    } else {
      gameLoop.start();
    }
  }
  questionVisible.value = false;
};

const closeCongratulationsModal = () => {
  congratulationsVisible.value = false;
};

async function setup() {

  const currentUrl = window.location.href;
  const urlObj = new URL(currentUrl);
  const courseId = urlObj.searchParams.get('courseId');
  const questionList = await api.getCourseQuestions(courseId);
 
  questionList.forEach(question => {
    collectibles.push(new Collectible(question.question, question.choices, question.answerIndex, question.imagePath, question.positionX, question.positionY))
  })

  startGame();
}

onMounted(() => {
 
  setup()
});
</script>