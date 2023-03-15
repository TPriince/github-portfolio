<template>
    <!-- REPOSITORY DETAILS SECTION-->
    <section class="repo-details">
        <h1 class="repo-details__title">Repository details</h1>
        <div v-if="loading">
            <h3 class="loading">Loading...</h3>
        </div>
        <div v-else-if="repoNotFound">
            <h3 class="not-found__heading">Repository not found</h3>
        </div>
        <div class="repo-info" v-else>
                <h2 class="repo-name">{{ repo.name }}</h2>
                <h3 class="repo-fullname"><span>Full Name:</span> {{ repo.full_name }}</h3>
                <p v-if="repo.description"><span>Desricption:</span> {{ repo.description }}</p>
                <p><span>Default branch:</span> {{ repo.default_branch }}</p>
                <p><span>Repository size:</span> {{ repo.size }}KB</p>
                <p v-if="repo.language"><span>Language:</span> {{ repo.language }}</p>
                <p><span>Number of forks:</span> {{ repo.forks_count }}</p>
                <p><span>Visibilty:</span> {{ repo.visibility }}</p>

                <button class="btn" @click="$router.push(`/repository/${repo.name}/link`)">Show link to respository</button>

                <RouterView :href="repo.svn_url"/>
        </div>
    </section>
</template>

<script>
import { RouterView } from 'vue-router';
    export default {
        name: 'RepositoryView',
        components: {
            RouterView,
        },
        data() {
            return {
                pathName: null,
                repo: {},
                loading: true,
                repoNotFound: false,
            }
        },
        created() {
            this.pathName = this.$route.params.name;
            this.getData();
        },
        methods: {
            getData() {
                fetch(`https://api.github.com/repos/TPriince/${this.pathName}`)
                .then(response => {
                    if (response.ok) {
                        this.loading = false;
                        return response.json();
                    } else {
                        this.loading = false;
                        throw new Error('Something went wrong while fetching repository details');
                    }
                })
                .then(data => {
                    this.repo = data;
                })
                .catch(err => {
                    this.repoNotFound = true;
                    console.log(err);
                })
            },
        }
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

.repo-name { text-align: center; }

.repo-fullname { font-size: 1rem; }

.repo-info p {
    font-size: 0.8rem;
    color: var(--light-gray-70);
    font-weight: 400;
    letter-spacing: 1px;
}

.repo-info p span { font-weight: 700;}

.btn {
    font-weight: 500;
    padding: 3px 16px;
    border-radius: 10px;
    box-shadow: var(--shadow-1);
    color: var(--greenish);
    margin-top: 15px;
    font-size: 0.8rem;
}

.btn:hover, .btn:focus { background: var(--bg-gradient-onyx); }

.loading, .not-found__heading {
    text-align: center;
    color: var(--light-gray-70);
    font-weight: 500;
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

  .btn { font-size: 0.9rem; }
}

@media screen and (min-width: 768px) {
    .repo-fullname { font-size: 1.1rem; }

    .repo-info p { font-size: 1rem; }
}

@media screen and (min-width: 1024px) {
    .repo-details {
        position: relative;
        margin: auto;
    }

    .repo-fullname { font-size: 1.2rem; }

    .repo-info p { font-size: 1.2rem; }

    .btn { font-size: 0.9rem; }
}

@media screen and (min-width: 1250px) {
    .repo-details {
        min-width: 75%;
        margin: 0;
    }
}
</style>