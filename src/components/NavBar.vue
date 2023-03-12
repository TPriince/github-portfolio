<template>
    <!-- NAVBAR -->
    <nav class="navbar">
        <ul>
            <li><RouterLink active-class="active-link" to="/">Home</RouterLink></li>
            <li><RouterLink active-class="active-link" to="/404-page">404 Page</RouterLink></li>
            <li><a href="https://github.com/TPriince" target="_blank">GitHub Profile</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "NavBar",
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

.navbar ul li:hover {
    color: var(--greenish);
}

.active-link { color: var(--greenish); }

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

    .navbar ul li { font-weight: 400; }    
}
</style>