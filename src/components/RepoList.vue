<template>
    <!-- REPOSITORIES SECTION -->
    <section class="repos">
        <h3 class="section-title">My GitHub repositories</h3>
        <input type="text" placeholder="Search for repository" v-model="search" />
        <h3 class="loading" v-if="loading">
            <div class="custom-loader"></div>
        </h3>
        <h3 class="error-finding-repo__text" v-else-if="errorFindingRepo">Something went wrong. Please, refresh or try again some other time.</h3>
        <h3 class="no-repo__text" v-else-if="pages === 0">No repositories found</h3>
        <ul class="repo-list" v-else>
            <li v-for="repo in pagination" :key="repo.id">
                <h4 class="repo-name">{{ repo.name }}</h4>
                <p class="repo-description">{{ repo.description }}</p>
                <div>
                    <button class="repo-details__btn page-btn" @click="$router.push(`/repository/${repo.name}`)">Link to details</button>
                </div>
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
                filteredRepos: [],
                PER_PAGE: 6,
                total: null,
                pages: null,
                page: 1,
                from: null,
                search: '',
                loading: true,
                errorFindingRepo: false,
                activePage: 1,
            }
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                fetch('https://api.github.com/users/TPriince/repos?per_page=100')
                .then(response => {
                    if (response.ok) {
                        this.loading = false;
                        return response.json();
                    } else {
                        this.loading = false;
                        throw new Error('Something went wrong while fetching list of repositories');
                    }
                })
                .then(data => {
                    this.repos = data;
                    this.filteredRepos = this.repos;
                    this.total = this.repos.length;
                    this.pages = Math.ceil(this.total / this.PER_PAGE);
                    this.from = (this.page * this.PER_PAGE) - this.PER_PAGE;
                })
                .catch(err => {
                    this.errorFindingRepo = true;
                    console.log(err);
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
            },
        },
        watch: {
            page() {
                this.from = (this.page * this.PER_PAGE) - this.PER_PAGE;
            },
            filteredRepos() {
                this.total = this.filteredRepos.length;
                this.pages = Math.ceil(this.total / this.PER_PAGE);
            },
            search() {
                if (this.search === '') {
                    this.page = this.activePage;
                    this.filteredRepos = this.repos;
                } else {
                    this.page = 1;
                    this.filteredRepos = this.repos.filter(repo => repo.name.toLowerCase().includes(this.search.toLowerCase()));
                }
            }
        },
        computed: {
            buttonPages() {
                return Array.from({ length: this.pages }, (_, i) => i + 1);
            },
            pagination() {
                let to = this.from + this.PER_PAGE;
                return this.filteredRepos.slice(this.from, to);
            }
        }
    }
</script>

<style scoped>
.section-title {
    position: relative;
    font-size: 21px;
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

.repos input {
    width: 100%;
    padding: 4px;
    border: 2px inset var(--light-gray-70);
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 0.8rem;
}

.repos input::placeholder { font-weight: 100; }

.repos input:focus {
    outline: none;
    border: 1px solid var(--greenish);
    background: var(--bg-gradient-jet);
    color: white;
}

.error-finding-repo__text, .no-repo__text {
    color: var(--light-gray-70);
    text-align: center;
}

.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
}

.custom-loader {
  width: 50px;
  height: 50px;
  --c: radial-gradient(farthest-side, var(--greenish) 92%, #0000);
  background: 
    var(--c) 50%  0, 
    var(--c) 50%  100%, 
    var(--c) 100% 50%, 
    var(--c) 0    50%;
  background-size: 10px 10px;
  background-repeat: no-repeat;
  animation: s8 1s infinite;
  position: relative;
}

.custom-loader::before {    
  content: "";
  position: absolute;
  inset: 0;
  margin: 3px;
  background: repeating-conic-gradient(#0000 0 35deg, var(--greenish) 0 90deg);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 3px),#000 0);
  border-radius: 50%;
}

@keyframes s8 { 
  100% { transform: rotate(.5turn) }
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
    min-height: 120px;
    z-index: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
    margin-bottom: 10px;
    font-weight: 400;
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

.repo-details__btn {
    background: var(--bg-gradient-onyx);
}

.pages-box p { font-size: 14px; }

.btn-set {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
}

.btn-set .page-btn {
    padding: 3px 11px;
    border-radius: 6px;
    font-size: 12px;
}

.btn-set .page-btn.active-page { background: var(--bg-gradient-onyx); }

@media screen and (min-width: 425px) {
    .section-title { font-size: 24px; }
    
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
    .loading-text, .error-finding-repo__text, .no-repo-text { font-size: 1.4rem; }

    .repos input {
        display: block;
        padding: 6px;
        font-size: 0.9rem;
        width: 80%;
        margin: 0 auto 20px;
    }
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

    .repos input {
        font-size: 0.8rem;
        width: 50%;
        margin-left: auto;
        margin-right: 0;
    }
    .loading__text, .error-finding-repo__text, .no-repo__text { font-size: 1.6rem; }
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