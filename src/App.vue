<template>
  <div id="app">
    <f-header></f-header>
    <el-row type="flex" justify="center" id="content">
      <el-col :xs="20" :md="20" :style="{'minHeight':minHeight+'px'}">
        <router-view></router-view>
      </el-col>
    </el-row>
    <!-- <div id="v-content" v-bind:style="{Height: Height+'px'}">
      <router-view />
    </div>-->
    <f-footer></f-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      minHeight: 0
    }
  },
  components: {},
  mounted() {
    let that = this
    that.minHeight = document.documentElement.clientHeight - 61 - 40 - 78 - 19
    window.addEventListener('scroll', that.watchScroll)
    window.onresize = function() {
      that.minHeight = document.documentElement.clientHeight
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'microsoft yahei';
}
#content {
  background-color: #f9f9f9;
  padding: 30px 0;
}
</style>
