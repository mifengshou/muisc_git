<template>
  <div class="notice">
    <div class="hotop">
      <div class="hotopct">
        <div class="u-hmsprt hoticon"></div>
        <div class="hottime">更新日期： 01月07日</div>
      </div>
    </div>
    <ul class="noticeList">
      <router-link
        v-for="inx in notice"
        :key="inx.id"
        :index="index++"
        to="/hot"
        tag="li"
      >
        <div>
          <span>{{ 10 > index ? "0" + index : index }}</span>
        </div>
        <p>{{ inx.name }}</p>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Notice",
  components: {},
  data() {
    return {
      notice: [],
      index: 0,
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$http.get("/personalized/newsong?limit=10").then((data) => {
        //最新歌单
        vm.notice = data.data.result;
        console.log(data);
      });
    });
  },
};
</script>
<style lang="less" scoped>
.hotop {
  background: url(../assets/hot_music_bg_2x.jpg) no-repeat;
  background-size: contain;
  position: relative;
  padding-top: 38.9%;
  overflow: hidden;
}
.hotop:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
}
.hotopct {
  padding-left: 20px;
  .u-hmsprt {
    position: absolute;
    top: 30px;
    left: 20px;
    width: 142px;
    height: 67px;
    background: url(../assets/index_icon_2x.png) no-repeat;
    background-position: -24px -30px;
    z-index: 2;
    background-size: 166px 97px;
  }
  .hottime {
    position: absolute;
    bottom: 25px;
    left: 20px;
    height: 22px;
    font-size: 12px;
    z-index: 2;
    color: #ddd;
  }
}
</style>