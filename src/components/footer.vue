<template>
  <div class="f-footer">
    <el-main class="main">
      <el-row>
        <el-col :span="8" class="item-col weside">
          <!-- <div class="item">
            <i class="el-icon-caret-right"></i>
            本站已稳定运行123天4时36分22秒
          </div>-->
          <div class="item">
            <i class="el-icon-caret-right"></i>
            841169871@qq.com
          </div>
          <div class="item">
            <i class="el-icon-caret-right"></i>
            © wukang | 京ICP备88888888
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.main {
  width: 70%;
  margin: 0 auto;
  color: #ccc;
}
.out-link {
  text-decoration: none;
  color: #ccc;
}
.out-link:hover {
  color: #ffffff;
}
.item-col {
  text-align: left;
}
.item-col.weside {
  font-size: 14px;
}
.item-col .title {
  color: #ddd;
  margin-bottom: 5px;
}
.item span {
  margin-right: 5px;
  position: absolute;
}
.f-footer {
  padding: 0px;
  text-align: center;
  color: #fff;
  background-color: #555;
}
</style>
