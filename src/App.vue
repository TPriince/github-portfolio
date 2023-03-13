<template>
  <!-- CONTAINER -->
  <div class="container">
    <!-- SIDEBAR -->
    <SideBar />

    <!-- MAIN-CONTENT -->
    <div class="main-content">
      <!-- NAVBAR -->
      <NavBar />

      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import SideBar from './components/SideBar.vue';
import NavBar from './components/NavBar.vue';
  export default {
    name: 'App',
    components: {
      RouterView,
      SideBar,
      NavBar,
    },
  }
</script>

<style>
:root {
  /* Colors */
  --smoky-black: hsl(0, 0%, 7%);
  --eerie-black-1: hsl(240, 2%, 13%);
  --eerie-black-2: hsl(240, 2%, 12%);
  --onyx: hsl(240, 1%, 17%);
  --light-gray-70: hsla(0, 0%, 84%, 0.7);
  --bg-gradient-onyx: linear-gradient(
    to bottom right, 
    hsl(240, 1%, 25%) 3%, 
    hsl(0, 0%, 19%) 97%
  );
  --border-gradient-onyx: linear-gradient(
    to bottom right, 
    hsl(0, 0%, 25%) 0%, 
    hsla(0, 0%, 25%, 0) 50%
  );
  --bg-gradient-jet: linear-gradient(
    to bottom right, 
    hsla(240, 1%, 18%, 0.251) 0%, 
    hsla(240, 2%, 11%, 0) 100%
  ), hsl(240, 2%, 13%);
  --bg-gradient-green-1: linear-gradient(
    to bottom right, 
    hsl(105, 47%, 71%) 0%, 
    hsla(36, 100%, 69%, 0) 50%
  );
  --bg-gradient-green-2: linear-gradient(
    135deg, 
    hsla(105, 28%, 42%, 0.251) 0%, 
    hsla(35, 100%, 68%, 0) 59.86%
  ), hsl(240, 2%, 13%);
  --jet: hsl(0, 0%, 22%);
  --greenish: hsl(98, 65%, 55%);
  --shadow-1: -4px 8px 24px hsla(0, 0%, 0%, 0.25);
  --shadow-2: 0 16px 30px hsla(0, 0%, 0%, 0.25);
  --shadow-3: 0 24px 80px hsla(0, 0%, 0%, 0.25);

  /* Typography */
  /* fonts */
  --ff-poppins: 'Poppins', sans-serif;
  
  /* Transitions */
  --transition-1: 0.25s ease;
  --transition-2: 0.5s ease-in-out;
}
  
/* Resets */
*, *::before, *::after  {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background: var(--smoky-black);
  color: white;
  font-family: var(--ff-poppins);
}
  
a {
  color: inherit;
  text-decoration: none;
}
  
li { list-style: none; }
  
img, picture, video, canvas, svg {
  display: block;
}
  
input, button, textarea, select, address {
  font: inherit;
}
  
button {
  cursor: pointer;
  border: none;
}
  
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
  
::selection {
  background: var(--greenish);
  color: var(--smoky-black);
}
  
.container {
  margin: 15px 16px 75px;
  min-width: 260px;
}

.sidebar, .main, .repo-details, .not-found__page {
  background: var(--eerie-black-2);
  border: 1px solid var(--jet);
  box-shadow: var(--shadow-1);
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 15px;
  z-index: 1;
  transition: var(--transition-2);
}

@media screen and (max-width: 280px) {
  .container {
    max-width: 260px;
    margin: 15px auto 75px;
  }
}

@media screen and (min-width: 580px) {
  .container {
    margin-top: 60px;
    margin-bottom: 100px;
  }

  .sidebar, .main, .repo-details, .not-found__page {
    width: 520px;
    margin-inline: auto;
    padding: 30px;
  }
}
@media screen and (min-width: 768px) {
  .sidebar, .main, .repo-details, .not-found__page { width: 700px; }
}

@media screen and (min-width: 1024px) {
  .container { margin-bottom: 60px; }

  .sidebar, .main, .repo-details, .not-found__page {
    width: 950px;
    box-shadow: var(--shadow-3);
  }

  .main-content {
    position: relative;
    width: max-content;
    margin: auto;
  }
}

@media screen and (min-width: 1250px) {
  .container {
    max-width: 1200px;
    margin-inline: auto;
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 25px;
  }

  .sidebar, .main, .repo-details, .not-found__page { width: auto; }

  .sidebar, .main, .repo-details, .not-found__page { min-height: 100%; }

  .main-content {
    min-width: 75%;
    margin: 0;
  }
}   
</style>