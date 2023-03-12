<template>
    <div class="repo-details">
        <NavBar />
        <header>
            <h1 class="repo-details__title">Repository</h1>
        </header>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
    export default {
        name: 'RepositoryView',
        components: {
            NavBar,
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>
.repo-details__title {
    position: relative;
    font-size: 24px;
    margin-bottom: 15px;
}

.repo-details__title::after {
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
  .repo-details__title {
    font-size: 32px;
    font-weight: 600;
    padding-bottom: 15px;
    margin-bottom: 20px;
  }

  .repo-details__title::after {
    width: 45px;
    height: 5px;
  }
}

@media screen and (min-width: 1024px) {
    .repo-details {
        position: relative;
        width: max-content;
        margin: auto;
    }    
}

@media screen and (min-width: 1250px) {
    .repo-details {
        min-width: 75%;
        margin: 0;
    }
}

</style>