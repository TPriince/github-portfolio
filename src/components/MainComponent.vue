<template>
    <!-- MAIN-CONTENT -->
    <div class="main-content">
        <NavBar />

        <!-- MAIN -->
        <main class="main">
            <header>
                <h1 class="about-me__title">About Me</h1>
            </header>

            <AboutMe />

            <RepoList />
        </main>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
import AboutMe from './AboutMe.vue'
import RepoList from './RepoList.vue'
    export default {
        name: "MainComponent",
        components: {
            NavBar,
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

@media screen and (min-width: 1024px) {
    .main-content {
        position: relative;
        width: max-content;
        margin: auto;
    }    
}

@media screen and (min-width: 1250px) {
    .main-content {
        min-width: 75%;
        margin: 0;
    }
    
    .main { min-height: 100%; }
}
</style>