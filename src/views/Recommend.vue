<template>
  <div class="recommend">
    <Title>推荐歌单</Title>
    <ul class="recommendList">
      <router-link
        v-for="rem in recommendMusicList"
        :key="rem.id"
        to="/"
        tag="li"
      >
        <div>
          <img :src="rem.picUrl" />
          <span>{{ rem.playCount | formatNum }}</span>
        </div>
        <p>{{ rem.name }}</p>
      </router-link>
    </ul>
    <Title>最新音乐</Title>
    <MusicItem :newMusicList="newMusicList"></MusicItem>
  </div>
</template>
<script>
import Title from "../components/Title";
import MusicItem from "../components/MusicItem";
export default {
  name: "Recommend",
  components: {
    Title,
    MusicItem,
  },
  data() {
    return {
      recommendMusicList: [],
      newMusicList: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$http.get("/personalized?limit=6").then((data) => {
        //推荐歌单
        vm.recommendMusicList = data.data.result;
        console.log(data);
      });
      vm.$http.get("/personalized/newsong?limit=10").then((data) => {
        //最新歌单
        vm.newMusicList = data.data.result;
        console.log(data);
      });
    });
  },
  filters: {
    formatNum(value) {
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>
<style lang="less" scoped>
.recommendList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 33%;
    margin-bottom: 16px;
    padding-left: 1px;
    padding-right: 1px;
    box-sizing: border-box;
    p {
      padding: 6px 2px 0 6px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1.2;
      font-size: 13px;
      text-align: left;
    }
    div {
      position: relative;
      span {
        top: 2px;
        right: 3px;
        position: absolute;
        color: white;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
      }
    }
  }
}
.ul {
  .list {
    background-color: #faf;
    .span {
      display: block;
      text-align: left;
    }
    .p {
      text-align: left;
    }
    .i {
      display: block;
      text-align: right;
    }
  }
}
</style>