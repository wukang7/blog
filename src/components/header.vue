<template>
  <el-header class="f-header">
    <el-menu :default-active="activeIndex" class="d-flex" mode="horizontal" type="flex" index="1">
      <el-menu-item class="mr-auto">wk</el-menu-item>
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/archive">归档</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
      <el-submenu index="2">
        <template slot="title">language</template>
        <el-menu-item @click="toggleLang('zh')">chinaese</el-menu-item>
        <el-menu-item @click="toggleLang('en')">english</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/home'
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
