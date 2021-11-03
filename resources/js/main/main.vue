<template>
    <div>
        <header>
            <h1>Test Site</h1>
            <nav class="main_nav">
                <router-link :to="{ name: 'Items' }">Items</router-link>
                <router-link :to="{ name: 'Items-edit' }"
                    >Items Edit</router-link
                >
                <router-link :to="{ name: 'Images' }">images</router-link>
            </nav>
        </header>
        <div class="box">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
header {
    border-bottom: 1px solid black;
    height: 150px;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.main_nav {
    width: 30%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.main_nav a {
    text-decoration: none;
    font-size: 1.2rem;
}

.box {
    width: 70%;
    padding: 20px;
    margin: 0 auto;
}

.router-link-active {
    background-color: salmon;
    color: white;
    padding: 5px;
}
</style>
