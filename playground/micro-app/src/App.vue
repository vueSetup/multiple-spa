<template>
    <div>
        <nav>
            <router-link to="/">首页</router-link>
            <router-link to="/app1">子应用1</router-link>
            <router-link to="/app2">子应用2</router-link>
            <router-link to="/app3">子应用3</router-link>
        </nav>
        <router-view />
    </div>
</template>

<style scoped>
header a {
    margin-right: 8px;
    font-size: 16px;
}
</style>