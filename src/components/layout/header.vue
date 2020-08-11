<template>
  <div class="header">
    <div class="left">
      <div class="buttons">
        <div class="mac-button red">
          <i class="el-icon-house"></i>
        </div>
        <div class="mac-button yellow">
          <i class="el-icon-minus"></i>
        </div>
        <div class="mac-button green">
          <i class="el-icon-full-screen"></i>
        </div>
      </div>
      <!-- 路由记录器 -->
        <div class="history">
          <i class="el-icon-arrow-left"></i>
          <i class="el-icon-arrow-right"></i>
        </div>
    </div>
    <div class="right">
      <div class="search-wrap">
        
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  background: #F9F9F9;
  height: 50px;
  .left {
    display: flex;
    padding: 14px 14px 0 8px;
    .buttons {
      display: flex;
      .mac-button {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        cursor: pointer;
        text-align: center;
        margin-right: 12px;
        &:hover {
          i {
            display: inline;
          }
        }
        &.red {
          background: #ed655a;
        }
        &.yellow {
          background-color: #e0c04c;
        }
        &.green {
          background-color: #72be47;
        }
        i {
          display: none;
          font-size: 14px;
          opacity: 0.5;
          color: #000;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
