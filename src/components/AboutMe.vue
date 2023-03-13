<template>
    <!-- ABOUT ME SECTION -->
    <section class="about-me__text">
        <p>My name is Tobiloba Odukoya, a Tech enthusiast from Lagos state, Nigeria. I am a Front-end developer and an aspiring Full-stack developer. In my spare time, when I am not coding, I love listening to music, watching movies and sometimes, I read novels. I am a friendly person, who loves to connect and meet new people and also learn new things.</p>
    </section>
</template>

<script>
    export default {
        name: "AboutMe",
    }
</script>

<style scoped>
.about-me__text { font-size: 14px; }
.about-me__text p {
    color: var(--light-gray-70);
    font-weight: 400;
    margin-bottom: 15px;
}

@media screen and (min-width: 580px) {
    .about-me__text {
        margin-bottom: 40px;
        font-size: 15px;
    }
}
</style>