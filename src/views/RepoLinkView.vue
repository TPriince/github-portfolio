<template>
    <a :href="href" target="_blank" class="repo-link">Link to repository</a>
</template>

<script>
    export default {
        name: "RepoLinkView",
        props: ["href"],
    }
</script>

<style scoped>
.repo-link {
    display: block;
    text-align: center;
    margin-top: 20px;
    font-weight: 500;
    padding: 4px 18px;
    border-radius: 10px;
    box-shadow: var(--shadow-1);
    color: var(--greenish);
    font-size: 1rem;
    width: 80%;
    margin: 30px auto;
}

.repo-link:hover { background: var(--bg-gradient-onyx); }

@media screen and (min-width: 768px) {
    .repo-link { font-size: 1.1rem; }
}

@media screen and (min-width: 1024px) {
    .repo-link { font-size: 1.3rem; }
}
</style>