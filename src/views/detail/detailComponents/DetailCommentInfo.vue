<template>
  <div v-if="Object.keys(DetailComment).length !== 0 " id="DetailComment">
    <div class="header">
      <span class="left">用户评价</span>
      <span class="right">更多</span>
    </div>
    <div class="content">
      <div class="name">
        <div class="bdrs">
          <img :src="DetailComment.user.avatar" alt />
        </div>
        <span>{{DetailComment.user.uname}}</span>
      </div>
      <div class="font">{{DetailComment.content}}</div>
      <div class="timeInfo">
        <span class="time">{{DetailComment.created | showTime}}</span>
        <span class="style">{{DetailComment.style}}</span>
      </div>
      <div class="CommentImg">
        <img v-for="(item,index) in DetailComment.images" :key="index" :src="item" alt />
      </div>
    </div>
    <!-- 这里写的是推荐组件的内容 -->
    <div class="tuijian">推荐</div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  props: {
    DetailComment: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  components: {},
  // 过滤器
  filters: {
    showTime(value) {
      let data = new Date(value * 1000);
      return formatDate(data, "yyyy-MM-dd");
    }
  }
};
</script>
<style scoped>
#DetailComment {
  margin-top: 20px;
}
.header {
  height: 50px;
  border-top: 3px solid #f5f5f5;
}
.header span {
  line-height: 50px;
}
.left {
  margin-left: 10px;
}
.right {
  margin-right: 10px;
}

.content {
  padding: 0 10px;
}
.name {
  height: 75px;
  border-top: 1px solid #ccc;
  padding-top: 10px;
}
.name img {
  width: 100%;
}
.bdrs {
  float: left;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  overflow: hidden;
}
.name span {
  float: left;
  line-height: 50px;
  margin-left: 10px;
  font-weight: 550;
}
.font {
  font-size: 15px;
}
.timeInfo {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #999;
}
.time {
  margin-right: 10px;
}
.CommentImg {
  margin-top: 10px;
}
.CommentImg img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}

.tuijian {
  height: 40px;
  text-indent: 1em;
  line-height: 40px;
  border-bottom: 3px solid #f5f5f5;
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>