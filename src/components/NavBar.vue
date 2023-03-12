<template>
    <!-- NAVBAR -->
    <nav class="navbar">
        <ul>
            <RouterLink to="/about" ><li :class="{ 'active': activeTab === 'about' }" @click="setActiveTab">About</li></RouterLink>
            <a href="#"><li :class="{ 'active': activeTab === 'contact' }" @click="setActiveTab">Contact</li></a>
            <RouterLink to="/repository"><li :class="{ 'active': activeTab === 'repositories' }" @click="setActiveTab">Repositories</li></RouterLink>
        </ul>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';
    export default {
        name: "NavBar",
        components: {
            RouterLink,
        },
        data() {
            return {
                activeTab: 'about',
            }
        },
        methods: {
            setActiveTab(event) {
                this.activeTab = event.target.innerText.toLowerCase();
            }
        },
    }
</script>

<style scoped>
.navbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: hsla(240, 1%, 17%, 0.75);
    backdrop-filter: blur(10px);
    border: 1px solid var(--jet);
    border-radius: 12px 12px 0 0;
    padding: 16px 7px;
    z-index: 5;
}

.navbar ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    gap: 20px;
}

.navbar ul li {
    font-size: 11px;
    color: var(--light-gray-70);
}

.navbar ul li.active { color: var(--greenish); }

@media screen and (min-width: 580px) {
    .navbar { border-radius: 20px 20px 0 0; }

    .navbar ul li { font-size: 14px; }
}

@media screen and (min-width: 768px) {
    .navbar ul li { font-size: 15px; }
}

@media screen and (min-width: 1024px) {
    .navbar {
        position: absolute;
        top: 0;
        bottom: auto;
        right: 0;
        left: auto;
        width: max-content;
        border-radius: 0 20px;
        padding: 18px 8px;
        box-shadow: none;
    }

    .navbar ul { gap: 30px; }

    .navbar ul li { font-weight: 500; }    
}
</style>