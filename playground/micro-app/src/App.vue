<template>
    <div>
        <nav>
            <router-link to="/">MicroApp</router-link>
            |
            <router-link to="/about">关于</router-link>
            |
            <router-link to="/app1">子应用1</router-link>
            |
            <router-link to="/app2">子应用2</router-link>
            |
            <router-link to="/app3">子应用3</router-link>
        </nav>
        <router-view />
    </div>
</template>

<style scoped>
nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>