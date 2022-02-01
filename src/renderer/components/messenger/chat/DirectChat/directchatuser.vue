<template>
  <!--Direct Chat User start -->
  <div>
    <div class="search2">
      <div>
        <div class="input-group">
          <div class="input-group-append">
            <span class="input-group-text"><i class="fa fa-search"></i></span>
          </div>
          <input class="form-control" type="text" placeholder="Search" />
        </div>
      </div>
    </div>
    <li
      :class="{ active: activeIndex === index }"
      v-for="(user, index) in chatUser"
      :key="user.id"
      @click="setActive(index), setActiveuser(user.id)"
    >
      <div class="chat-box">
        <!-- <div
          :style="[
            { 'background-image': 'url(' + getImgUrl(user.avatars.thumbnail) + ')' },
            styleObject,
          ]"
        ></div> -->
        <div class="details">
          <h5>{{ user.displayName }}</h5>
          <!-- <h6>{{ user.status }}</h6> -->
        </div>
        <div class="date-status">
          <i class="ti-pin2"></i>
          <!-- <h6>{{ user.date }}</h6>
          <div v-html="user.active"></div> -->
        </div>
      </div>
    </li>
  </div>
  <!--Direct Chat User end -->
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      activeIndex: 0,
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
      chatUser: [],
    };
  },
  mounted() {
    this.getChat();
  },
  computed: {
    // ...mapState({
    //   chatuser: (state) => state.chat.users,
    //   activechatType: (state) => state.common.activechatType,
    // }),
  },
  methods: {
    getImgUrl(path) {
      return require("../../../../assets/images/" + path);
    },
    setActiveuser: function (id) {
      this.$store.dispatch("chat/setActiveuser", id);
      if (process.client) {
        this.width = window.innerWidth;
        if (this.width < 992) {
          document
            .querySelector(".sidebar-toggle")
            .classList.add("mobile-menu");
        }
      } else {
        return null;
      }
      this.$store.state.common.showsticker = false;
      this.$store.state.common.showemogi = false;
      this.$store.state.common.showcontactcontent = false;
    },
    setActive(index) {
      this.activeIndex = index;
    },
    async getChat() {
      try {
        const payload = {
          dateTime: "2017-01-01 00:00:00",
          page: 1,
          limit: 10,
        };
        const response = await this.$store.dispatch(
          "contact/requestContactFrinds",
          payload
        );
        if (response.status === 200) {
         this.chatUser = response.data.data
        }
      } catch (error) {
      } finally {
        console.log()
      }
    },
  },
};
</script>
