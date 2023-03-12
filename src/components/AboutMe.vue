<template>
    <section class="about-me__text">
        <p>I am a Tech enthusiast</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi deleniti animi odit, vitae rem non magni facere reiciendis dolorem quae quas quaerat fugiat voluptate voluptatem quidem neque ipsa explicabo nulla.
            Aliquid culpa modi odit accusantium ipsam ex facere dicta mollitia eos quibusdam itaque libero commodi laborum earum dolores, aliquam, fuga corporis iste. Accusamus, excepturi consectetur? Velit enim doloribus expedita aperiam?</p>
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
    font-weight: 300;
    margin-bottom: 15px;
}

@media screen and (min-width: 580px) {
    .about-me__text {
        margin-bottom: 40px;
        font-size: 15px;
    }
}
</style>