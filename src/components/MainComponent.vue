<template>
        <!-- MAIN -->
        <main class="main">
            <header>
                <h1 class="about-me__title">About Me</h1>
            </header>

            <AboutMe />

            <RepoList />
        </main>
</template>

<script>
import AboutMe from './AboutMe.vue'
import RepoList from './RepoList.vue'
    export default {
        name: "MainComponent",
        components: {
            AboutMe,
            RepoList,
        }
    }
</script>

<style scoped>
.about-me__title {
    position: relative;
    font-size: 24px;
    margin-bottom: 15px;
}

.about-me__title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 35px;
    height: 3px;
    background: var(--greenish);
    border-radius: 3px;
}

@media screen and (min-width: 580px) {
  .about-me__title {
    font-size: 32px;
    font-weight: 600;
    padding-bottom: 15px;
    margin-bottom: 20px;
  }

  .about-me__title::after {
    width: 45px;
    height: 5px;
  }
}
</style>