<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{_routerRoot._route}}
    <router-link to="/about/a">a组件</router-link>
    <router-link to="/about/b">b组件</router-link>
    <router-view></router-view>
  </div>
</template>
