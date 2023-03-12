<template>
    <section class="about-me__text">
        <p>I am a Tech enthusiast</p>
        <p>My name is Tobiloba Odukoya from Lagos state, Nigeria. I am a Front-end developer and an aspiring Fullstack developer. In my spare time, when I am not coding, I love listening to music, watching movies and sometimes, I read novels. I am a very friendly person and I love to connect and meet new people. I am also a very hardworking person and I am always ready to learn new things.</p>
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