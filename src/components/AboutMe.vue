<template>
    <!-- ABOUT ME SECTION -->
    <section class="about-me__text">
        <p v-if="loading">Loading...</p>
        <p v-else-if="cantFindUser">Sorry, can't find user details</p>
        <div class="user-details" v-else>
            <p><span>GitHub Username:</span> {{ user.login }}</p>
            <p><span>Bio:</span> {{ user.bio }}</p>
            <p><span>Number of public repositories:</span> {{ user.public_repos }}</p>
            <p><span>Followers:</span> {{ user.followers }}</p>
            <p><span>Following:</span> {{ user.following }}</p>

        </div>
    </section>
</template>

<script>
    export default {
        name: "AboutMe",
        data() {
            return {
                user: null,
                loading: true,
                cantFindUser: false,
            }
        },
        created() {
            this.getUserData();
        },
        methods: {
            getUserData() {
                fetch('https://api.github.com/users/TPriince')
                .then(response => {
                    if (response.ok) {
                        this.loading = false;
                        return response.json();
                    } else {
                        this.loading = false;
                        throw new Error('Something went wrong');
                    }
                })
                .then(data => {
                    this.user = data;
                })
                .catch(error => {
                    this.cantFindUser = true;
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>
.about-me__text { font-size: 14px; }

.user-details {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    margin-bottom: 20px;
}

span {
    color: var(--light-gray-70);
    font-weight: 600;
    text-transform: uppercase;
}
.about-me__text p {
    color: white;
    font-weight: 300;
}

@media screen and (min-width: 580px) {
    .about-me__text {
        margin-bottom: 40px;
        font-size: 15px;
    }
}

@media screen and (min-width: 768px) {
    .user-details {
        grid-template-columns: 1fr 1fr;
        gap: 30px 20px;
    }
    .about-me__text p {
        color: white;
        font-weight: 300;
        font-size: 1.2rem;
    }
}
</style>