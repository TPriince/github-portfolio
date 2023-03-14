<template>
  <!-- NOT FOUND PAGE SECTION-->
    <section class="error-container not-found__page">
        <span>{{ num }}</span>
        <span><span class="screen-reader-text">0</span></span>
        <span>{{ num }}</span>
        <p class="page-not-found__text">Sorry, page not found!</p>
        <button class="home-link" @click="$router.back()">Go back</button>
    </section>
</template>

<script>
    export default {
        name: "NotFoundView",
        data() {
            return {
                num: 0,
                timer: null,
            }
        },
        mounted() {
            setTimeout(() => {
                this.timer = setInterval(() => {
                if (this.num === 3) {
                    clearInterval(this.timer);
                }
                this.num += 1;
            }, 100)
            }, 300)
        }
    }
</script>

<style scoped>
.error-container {
  text-align: center;
  font-size: 40px;
  font-weight: 800;
}

.page-not-found__text { font-size: 0.8rem; }

.error-container > span {
  display: inline-block;
  line-height: 0.7;
  position: relative;
  color: #FFB485;
}

.error-container > span {
  display: inline-block;
  position: relative;
  vertical-align: middle;
}

.error-container > span:nth-of-type(1) {
  color: #D1F2A5;
  animation: colordancing 4s infinite;
}

.error-container > span:nth-of-type(3) {
  color: #F56991;
  animation: colordancing2 4s infinite;
}

.error-container > span:nth-of-type(2) {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.error-container > span:nth-of-type(2):before,
.error-container > span:nth-of-type(2):after {
	border-radius: 0%;
	content:"";
	position: absolute;
	top: 0; left: 0;
	width: inherit; height: inherit;
    border-radius: 999px;
	box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
				inset 0 30px 0 rgba(239, 250, 180, 0.4),
				inset -30px 0 0 rgba(255, 196, 140, 0.4),	
				inset 0 -30px 0 rgba(245, 105, 145, 0.4);
    animation: shadowsdancing 4s infinite;
}
.error-container > span:nth-of-type(2):before {
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	transform: rotate(45deg);
}

.screen-reader-text {
    position: absolute;
    top: -9999em;
    left: -9999em;
}

@keyframes shadowsdancing {
  0% {
    box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
				inset 0 30px 0 rgba(239, 250, 180, 0.4),
				inset -30px 0 0 rgba(255, 196, 140, 0.4),	
				inset 0 -30px 0 rgba(245, 105, 145, 0.4);
  }
  25% {
    box-shadow: inset 30px 0 0 rgba(245, 105, 145, 0.4),
				inset 0 30px 0 rgba(209, 242, 165, 0.4),
				inset -30px 0 0 rgba(239, 250, 180, 0.4),	
				inset 0 -30px 0 rgba(255, 196, 140, 0.4);
  }
  50% {
     box-shadow: inset 30px 0 0 rgba(255, 196, 140, 0.4),
				inset 0 30px 0 rgba(245, 105, 145, 0.4),
				inset -30px 0 0 rgba(209, 242, 165, 0.4),	
				inset 0 -30px 0 rgba(239, 250, 180, 0.4);
  }
  75% {
   box-shadow: inset 30px 0 0 rgba(239, 250, 180, 0.4),
				inset 0 30px 0 rgba(255, 196, 140, 0.4),
				inset -30px 0 0 rgba(245, 105, 145, 0.4),	
				inset 0 -30px 0 rgba(209, 242, 165, 0.4);
  }
  100% {
    box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
				inset 0 30px 0 rgba(239, 250, 180, 0.4),
				inset -30px 0 0 rgba(255, 196, 140, 0.4),	
				inset 0 -30px 0 rgba(245, 105, 145, 0.4);
  }
}

@keyframes colordancing {
  0% {
    color: #D1F2A5;
  }
  25% {
    color: #F56991;
  }
  50% {
    color: #FFC48C;
  }
  75% {
    color: #EFFAB4;
  }
  100% {
    color: #D1F2A5;
  }
}

@keyframes colordancing2 {
  0% {
    color: #FFC48C;
  }
  25% {
    color: #EFFAB4;
  }
  50% {
    color: #D1F2A5;
  }
  75% {
    color: #F56991;
  }
  100% {
    color: #FFC48C;
  }
}

.home-link {
  display: block;
  text-transform: uppercase;
  font-size: 0.6rem;
  background: var(--bg-gradient-green-2);
  padding: 5px 10px;
  color: var(--greenish);
  margin: 15px auto;
  letter-spacing: 1px;
  width: 50%;
  box-shadow: var(--shadow-1);
}

@media screen and (min-width: 768px) {
    .not-found__page { font-size: 80px; }

    .page-not-found__text { font-size: 1.2rem; }
    
    .error-container > span:nth-of-type(2) {
      width: 65px;
      height: 65px;
      border-radius: 50%;
    }
}

@media screen and (min-width: 1024px) {
    .not-found__page {
        position: relative;
        margin: auto;
        font-size: 100px;
    }

    .error-container > span:nth-of-type(2) {
      width: 90px;
      height: 90px;
      border-radius: 50%;
    }

    .home-link { font-size: 1rem; }
}

@media screen and (min-width: 1250px) {
    .not-found__page {
        min-width: 75%;
        margin: 0;
        font-size: 140px;
    }
    
    .error-container > span:nth-of-type(2) {
      width: 125px;
      height: 125px;
      border-radius: 50%;
    }
}
</style>