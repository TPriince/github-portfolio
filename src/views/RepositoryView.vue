<template>
    <!-- REPOSITORY DETAILS SECTION-->
    <section class="repo-details">
        <h1 class="repo-details__title">Repository</h1>
        <div v-if="repoFound" class="repo-info">
                <h2 class="repo-name">{{ repo.name }}</h2>
                <h3 class="repo-fullname"><span>Full Name:</span> {{ repo.full_name }}</h3>
                <p v-if="repo.description"><span>Desricption:</span> {{ repo.description }}</p>
                <p><span>Default branch:</span> {{ repo.default_branch }}</p>
                <p><span>Repository size:</span> {{ repo.size }}KB</p>
                <p v-if="repo.language"><span>Language:</span> {{ repo.language }}</p>
                <p><span>Number of forks:</span> {{ repo.forks_count }}</p>
                <p><span>Visibilty:</span> {{ repo.visibility }}</p>

                <a :href="repo.svn_url" target="_blank" class="repo-link">Link to repository</a>
        </div>
        <div v-else>
            <h3 class="not-found__heading">Repository not found</h3>
        </div>
    </section>
</template>

<script>
import { useRoute } from 'vue-router';
    export default {
        name: 'RepositoryView',
        data() {
            return {
                route: null,
                pathName: null,
                repo: {},
                repoFound: true,
            }
        },
        created() {
            this.route = useRoute();
            this.pathName = this.route.params.name;
            this.getData();
        },
        methods: {
            getData() {
                fetch(`https://api.github.com/repos/TPriince/${this.pathName}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        this.repoFound = false;
                        throw new Error('Something went wrong while fetching repository details');
                    }
                })
                .then(data => {
                    this.repo = data;
                })
                .catch(err => {
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
.repo-link {
    display: block;
    text-align: center;
    margin-top: 20px;
    color: var(--greenish);
    text-decoration: none;
    font-size: 1rem;
}

.not-found__heading {
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
}

@media screen and (min-width: 768px) {
    .repo-fullname { font-size: 1.2rem; }

    .repo-info p { font-size: 1rem; }

    .repo-link { font-size: 1.1rem; }
}

@media screen and (min-width: 1024px) {
    .repo-details {
        position: relative;
        margin: auto;
    }

    .repo-fullname { font-size: 1.4rem; }

    .repo-info p { font-size: 1.2rem; }

    .repo-link { font-size: 1.3rem; }
}

@media screen and (min-width: 1250px) {
    .repo-details {
        min-width: 75%;
        margin: 0;
    }
}
</style>