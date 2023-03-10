<template>
    <div class="home-page-container">
        <div class="intro-text-container">
            <p class="intro-text-first">so you want to travel to</p>
            <p class="intro-text-second">space</p>
            <p class="intro-text-third">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div class="explore-btn-container">
            <button class="explore-btn">explore</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    document.body.style.backgroundImage = "url('/assets/bg.png')"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"
});
</script>


<style lang="scss">
@import "styles/variables.scss";

.home-page-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}


.intro-text-container {
    max-width: 500px;
    padding: 60px 80px;
    color: $white;
}

.intro-text-first {
    font-size: 28px;
    letter-spacing: 4.72px;
    font-family: $font-barlow-condensed;
}

.intro-text-second {
    font-size: 150px;
    margin: 0;
    padding: 0;
}

.intro-text-second,
.explore-btn {
    font-family: $font-bellefair;;
}

.intro-text-first,
.intro-text-second,
.explore-btn {
    text-transform: uppercase;
}

.intro-text-first,
.intro-text-third {
    color: $light-blue;
}

.intro-text-third {
    font-family: $font-barlow;
    font-size: 18px;
    line-height: 32px;
}

.explore-btn {
    width: 274px;
    height: 274px;
    border-radius: 50%;
    font-size: 32px;
    letter-spacing: 2px;
    margin: 120px 200px 0;
    border: none;
}

</style>