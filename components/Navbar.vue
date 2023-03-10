<template>
    <div>
        <div class="header-container">
            <div class="logo-container">  
                <img src="@/assets/logo.png">
            </div>
            <div class="navbar-container">
                <NuxtLink to="/" class="nav-link"><span class="page-no">00</span>home</NuxtLink>
                <NuxtLink to="/destination" class="nav-link"><span class="page-no">01</span> destination</NuxtLink>
                <NuxtLink to="/crew" class="nav-link"><span class="page-no">02</span> crew</NuxtLink>
                <NuxtLink to="/technology" class="nav-link"><span class="page-no">03</span> technology</NuxtLink>
            </div>
        </div>
        <div>
            <hr>
        </div>
    </div>
 
</template>

<style lang="scss">
@import "styles/variables.scss";

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: $font-barlow-condensed;
    color: $white;
    padding: 30px 0px 30px 50px;
    text-transform: uppercase;
    letter-spacing: 2.7px;
}

.navbar-container {
    position: relative;
    background-color: $transparent-bg;
    // background-color: blue;
    padding: 30px 150px 30px 70px;
    backdrop-filter: $filter;
}

.nav-link {
    color: $white;
    text-decoration: none;
    margin-right: 55px;
}

.page-no {
    font-weight: bold;
    margin-right: 5px;
}

hr {
    position: absolute;
    left: 200px;
    width: 500px;
    opacity: 0.5;
    top: 60px;
}

</style>