<template>
    <!-- REPOSITORIES SECTION -->
    <section class="repos">
        <h3 class="section-title">My Repositories</h3>
        <h3 v-if="loading" class="loading-text">Loading...</h3>
        <ul class="repo-list" v-if="!loading">
            <li v-for="repo in reposPerPage" :key="repo.id">
                <h4 class="repo-name">{{ repo.name }}</h4>
                <p class="repo-description">{{ repo.description }}</p>
            </li>
        </ul>
        <div class="pages-box">
            <button class="page-btn" :disabled="page <= 1" @click="handlePrevPage">Prev</button>
            <p>Pages: {{ page }} of {{ pages }}</p>
            <button class="page-btn" :disabled="page >= pages" @click="handleNextPage">Next</button>
        </div>
        <div class="btn-set">
            <button class="page-btn" v-for="(button, idx) in buttonPages" :key="idx" @click="handleSetPage(button)"
                :class="{ 'active-page': activePage === button }"
            >
                {{ button }}
            </button>
        </div>
    </section>
</template>

<script>
    export default {
        name: "RepoList",
        data() {
            return {
                repos: [],
                PER_PAGE: 6,
                total: null,
                pages: null,
                page: 1,
                skip: null,
                reposPerPage: [],
                loading: true,
                activePage: 1,
            }
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                fetch('https://api.github.com/users/TPriince/repos?per_page=100')
                .then(res => res.json())
                .then(data => {
                    this.repos = data;
                    this.total = this.repos.length;
                    this.pages = Math.ceil(this.total / this.PER_PAGE);
                    this.skip = this.page * this.PER_PAGE - this.PER_PAGE;
                    this.reposPerPage = this.repos.slice(this.skip, this.skip + this.PER_PAGE);
                    this.loading = false;
                })
                .catch(err => {
                    console.log(err);
                    this.pages = 0;
                })
            },
            handlePrevPage() {
                this.page--;
                this.activePage = this.page;
            },
            handleNextPage() {
                this.page++;
                this.activePage = this.page;
            },
            handleSetPage(page) {
                this.page = page;
                this.activePage = page;
            }
        },
        watch: {
            page() {
                this.skip = this.page * this.PER_PAGE - this.PER_PAGE;
                this.reposPerPage = this.repos.slice(this.skip, this.skip + this.PER_PAGE);
            }
        },
        computed: {
            buttonPages() {
                return Array.from({ length: this.pages }, (_, i) => i + 1);
            },
        }
    }
</script>

<style scoped>
.section-title {
    position: relative;
    font-size: 24px;
    margin-bottom: 20px;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 35px;
    height: 3px;
    background: var(--greenish);
    border-radius: 3px;
}

.loading-text {
    color: var(--light-gray-70);
    text-align: center;
}
.repo-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

.repo-list li {
    position: relative;
    background: var(--bg-gradient-onyx);
    padding: 20px;
    border-radius: 14px;
    box-shadow: var(--shadow-2);
    height: 150px;
    z-index: 1;
}

.repo-list li::before {
   content: '';
   position: absolute;
   inset: 1px;
   background: var(--bg-gradient-jet);
   border-radius: inherit;
   z-index: -1;
}

.repo-list li:hover {
    background: var(--bg-gradient-green-1);
    cursor: pointer;
}

.repo-name {
    font-size: 0.9rem;
    text-align: center;
}

.repo-description {
    font-size: 0.8rem;
    color: var(--light-gray-70);
    text-align: center;
}

.pages-box {
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
}

.page-btn {
    position: relative;
    font-size: 13px;
    font-weight: 500;
    padding: 5px 20px;
    border-radius: 10px;
    box-shadow: var(--shadow-1);
    color: var(--greenish);
    z-index: 1;
}

.page-btn:hover, .page-btn:focus {
    background: var(--bg-gradient-green-2);
}

.pages-box p { font-size: 14px; }

.btn-set {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
}

.btn-set .page-btn {
    padding: 2px 10px;
    border-radius: 6px;
    font-size: 10px;
}

.btn-set .page-btn.active-page { background: var(--bg-gradient-onyx); }

@media screen and (min-width: 425px) {
    .btn-set { gap: 8px; }

    .btn-set .page-btn {
        padding: 3px 12px;
        font-size: 13px;
    }
}

@media screen and (min-width: 580px) {
    .section-title { padding-bottom: 15px;}

    .section-title::after {
        width: 45px;
        height: 5px;
    }
}

@media screen and (min-width: 768px) {
    .loading-text { font-size: 1.4rem; }
    .repo-name { font-size: 1rem; }

    .repo-description { font-size: 0.9rem; }

    .btn-set { gap: 15px; }

    .btn-set .page-btn {
        padding: 5px 16px;
        border-radius: 8px;
        font-size: 14px;
    }
}

@media screen and (min-width: 1024px) {
    .section-title { font-size: 28px; }
    .loading-text { font-size: 1.6rem; }
    .repo-list {
        grid-template-columns: 1fr 1fr;
        gap: 20px 25px;
    }

    .btn-set { gap: 20px; }

    .btn-set .page-btn {
        padding: 6px 18px;
        border-radius: 10px;
        font-size: 15px;
    }
}
</style>