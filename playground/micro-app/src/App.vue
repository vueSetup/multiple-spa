<template>
    <div>
        <header>
            <router-link to="/">main app</router-link>
            <router-link to="/app1">app1</router-link>
            <router-link to="/app2">app2</router-link>
            <router-link to="/app3">app3</router-link>
        </header>
        <router-view />
    </div>
</template>

<style scoped>
header a {
    margin-right: 8px;
    font-size: 16px;
}
</style>