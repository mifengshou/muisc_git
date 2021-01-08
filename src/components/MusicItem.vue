<template>
  <ul class="newmusiclist">
    <router-link v-for="item in newMusicList" :key="item.id" tag="li" to="/">
      <div class="left">
        <div>{{ item.name }}</div>
        <p>{{ item.song.artists[0].name }}-{{ item.name }}</p>
      </div>
      <div class="right">
        <span></span>
      </div>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: "MusicItem",
  props: {
    newMusicList: Array,
  },
};
</script>
<style lang="less" scoped>
.newmusiclist {
  li {
    display: flex;
    // margin-top: 10px;
    padding: 5px 0px;
    border-bottom: 1px solid #ddd;
  }
  div.left {
    flex: 1;
    padding-left: 10px;
    text-align: left;
    div {
      font-size: 17px;
      color: black;
    }
    p {
      font-size: 12px;
      color: #888;
    }
  }
  div.right {
    padding: 0px 5px;
    display: flex;
    align-items: center;
    span {
      display: inline-block;
      width: 22px;
      height: 22px;
      background-image: url(../assets/index_icon_2x.png);
      background-position: -24px 0px;
      background-size: 166px 97px;
    }
  }
}
</style>