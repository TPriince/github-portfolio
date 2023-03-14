<template>
    <aside :class="showMoreInfo ? 'sidebar active' : 'sidebar' ">
        <div class="sidebar-info">
            <figure class="image-box">
                <img src="../assets/Tobiloba.webp" alt="A picture of myself - Tobiloba Odukoya" loading="lazy" />
            </figure>
            <div class="info-content">
                <h1 class="name" title="Tobiloba Odukoya">Tobiloba Odukoya</h1>
                <p class="title">Software Developer</p>
            </div>
            <button class="info-more__btn" @click="toggleMoreInfo">
                <span v-show="!showMoreInfo">Show Contacts</span>
                <span v-show="showMoreInfo">Hide Contacts</span>
                <i v-show="!showMoreInfo" class="uil uil-angle-down"></i>
                <i v-show="showMoreInfo" class="uil uil-angle-up"></i>
            </button>
        </div>

        <div class="sidebar-more__info">
            <hr>
            <ul>
                <li>
                    <div class="icon-box">
                        <i class='bx bx-envelope'></i>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">EMAIL</p>
                        <a class="contact-link" href='mailto:odukoyatobi37@gmail.com'>odukoyatobi37@gmail.com</a>
                    </div>
                </li>
                <li>
                    <div class="icon-box">
                        <i class='bx bx-phone'></i>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">PHONE</p>
                        <a class="contact-link" href="tel:+2348079877576">+234 8079877576</a>
                    </div>
                </li>
                <li>
                    <div class="icon-box">
                        <i class='bx bx-location-plus'></i>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">LOCATION</p>
                        <address class="contact-link">Lagos State, Nigeria.</address>
                    </div>
                </li>
            </ul>
            <hr>
        </div>
    </aside>
</template>

<script>
    export default {
        name: "SideBar",
        data() {
            return {
                showMoreInfo: false
            }
        },
        methods: {
            toggleMoreInfo() {
                this.showMoreInfo = !this.showMoreInfo;
            }
        },
    }
</script>

<style scoped>
.sidebar { max-height: 112px; }

.sidebar.active { max-height: 405px; }

.sidebar-info {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
}

.image-box img {
    border-radius: 20px;
    width: 80px;
}

.info-more__btn {
    position: absolute;
    top: -15px;
    right: -15px;
    font-size: 13px;
    padding: 8px;
    color: var(--greenish);
    background: var(--border-gradient-onyx);
    border-radius: 0 15px;
    box-shadow: var(--shadow-2);
    z-index: 1;
    transition: var(--transition-1);
}

.info-more__btn::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  background: var(--bg-gradient-jet);
  transition: var(--transition-1);
  z-index: -1;
}

.info-more__btn:hover,
.info-more__btn:focus { background: var(--bg-gradient-green-1); }

.info-more__btn:hover::before,
.info-more__btn:focus::before { background: var(--bg-gradient-green-2); }

.info-more__btn span { display: none; }

.name {
    font-size: 17px;
    font-weight: 500;
    letter-spacing: -0.25px;
    margin-bottom: 10px;
}

.title {
    font-size: 11px;
    background: var(--onyx);
    max-width: max-content;
    padding: 3px 12px;
    border-radius: 8px;
    font-weight: 300;
}

.sidebar-more__info {
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-2);
}

.sidebar.active .sidebar-more__info {
  opacity: 1;
  visibility: visible;
}

hr {
    margin: 16px 0;
    border: 1px solid var(--jet);
}

.sidebar-more__info ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}

.sidebar-more__info ul li {
    display: flex;
    align-items: center;
    gap: 16px;
}

.contact-title {
    font-size: 11px;
    color: var(--light-gray-70);
    margin-bottom: 2px;
}
.contact-link { font-size: 13px; }

.icon-box {
    position: relative;
    background: var(--border-gradient-onyx);
    width: 30px;
    height: 30px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: var(--greenish);
    box-shadow: var(--shadow-1);
    z-index: 1;
}

.icon-box::before {
    content: "";
    position: absolute;
    inset: 1px;
    background: var(--eerie-black-1);
    border-radius: inherit;
    z-index: -1;
}

.contact-info {
  max-width: calc(100% - 46px);
  width: calc(100% - 46px);
}

@media screen and (min-width: 580px) {
    .sidebar {
        max-height: 180px;
        margin-bottom: 30px;
    }

    .sidebar.active { max-height: 584px; }

    .info-more__btn {
        top: -30px;
        right: -30px;
        padding: 10px 15px;
    }

    .sidebar-info { gap: 25px; }

    .image-box img {
        border-radius: 30px;
        width: 120px;
    }

    .name {
        font-size: 26px;
        margin-bottom: 15px;
    }

    .title { padding: 5px 18px; }

    .info-more__btn span {
        display: block;
        font-size: 12px;
    }

    .sidebar-more__info ul { gap: 20px }

    .info-more__btn i { display: none; }
    .icon-box {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        font-size: 18px;
    }

    .contact-info {
        max-width: calc(100% - 64px);
        width: calc(100% - 64px);
    }
}

@media screen and (min-width: 768px) {
    .sidebar-more__info ul {
        grid-template-columns: 1fr 1fr;
        gap: 30px 15px;
    }

    .contact-link { font-size: 15px; }
}

@media screen and (min-width: 1250px) {
    .sidebar {
        position: sticky;
        top: 60px;
        max-height: max-content;
        height: 100%;
        margin-bottom: 0;
        padding-top: 60px;
        z-index: 1;
    }

    .sidebar-info { flex-direction: column; }

    .image-box img { width: 150px; }

    .name { text-align: center; }

    .title { margin: auto}

    .info-more__btn { display: none;}

    .sidebar-more__info ul { grid-template-columns: 1fr; }

    .sidebar-more__info {
        opacity: 1;
        visibility: visible;
    }

    .contact-link { font-size: 14px; }
}
</style>