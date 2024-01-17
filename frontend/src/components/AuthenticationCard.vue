<template>
  <div class="h-[50rem] w-[60rem] mx-auto flex sm:justify-center items-center ">
    <div class="back rounded-l-xl hidden sm:flex border-l border-black">
      <div class="back-image rounded-l-xl"></div>
    </div>
    <div class="w-[18rem]">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.back {
  position: relative;
  width: 100%;
}

.back-image {
  background-image: url(@/assets/login_pic.jpg);
  background-size: cover;
  width: 100%;
  padding-bottom: 79%;
}
</style>