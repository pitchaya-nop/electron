<template>
  <!-- Main Left Sidebar Menu start -->
  <nav class="main-nav custom-scroll" :class="toggleleftside">
    <div class="logo-warpper">
      <a>
        <nuxt-link to="/">
          <img src="../../assets/images/logo/logo.png" alt="logo" />
        </nuxt-link>
      </a>
    </div>
    <div class="sidebar-main">
      <ul class="sidebar-top">
        <li>
          <a
            class="icon-btn btn-light button-effect"
            :class="activesidebar == 1 ? 'active' : ''"
            href="javascript:void(0)"
            @click="activemenu(1), disableactivechat(null)"
            v-b-tooltip.hover.topright
            title="Contacts"
            data-tippy-content="Contacts"
            ><i class="fa fa-users"> </i
          ></a>
        </li>
        <li>
          <a
            class="icon-btn btn-light button-effect"
            :class="activesidebar == 2 ? 'active' : ''"
            href="javascript:void(0)"
            @click="activemenu(2, false)"
            v-b-tooltip.hover.topright
            title="Chats"
            data-tippy-content="Chats"
            ><i class="fa fa-users"> </i
          ></a>
        </li>
      </ul>
      <ul class="sidebar-bottom">
        <!-- <li><a class="icon-btn btn-light button-effect mode" href="javascript:void(0)" v-b-tooltip.hover.topright title="Theme Mode" data-tippy-content="Theme Mode" data-intro="Change mode" @click="customizeMixLayout()"><i class="fa" :class="this.mixLayout===''? 'fa-moon-o': 'fa-lightbulb-o'"></i></a></li> -->
        <li>
          <div @click="handleSingOut" class="icon-btn btn-light button-effect">
            <i
              class="fa fa-power-off"
              v-b-tooltip.hover.topright
              title="SignOut"
              data-tippy-content=" SignOut"
            ></i>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <!-- Main Left Sidebar Menu end -->
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      mixLayout: "",
      status: "avtar/2.jpg",
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
    };
  },
  computed: {
    ...mapState({
      toggleleftside: (state) => state.common.toggleleftside,
      activesidebar: (state) => state.common.activesidebar,
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
    activemenu(id, type) {
      console.log(type);
      this.$store.state.common.activesidebar = id;
      this.$store.state.common.iscontact = type;
    },
    disableactivechat(type) {
      // this.$store.state.chat.
    },
    customizeMixLayout() {
      if (this.mixLayout === "") {
        this.mixLayout = "dark";
      } else {
        this.mixLayout = "";
      }
      this.$store.dispatch("layout/setLayout", this.mixLayout);
    },

    handleSingOut() {
      this.$router.push("/authentication/login");
      this.$store.dispatch("auth/setToken", "");
      this.$store.dispatch("auth/setProfile", "");
      this.sockets.unsubscribe("socketId");
      this.sockets.unsubscribe(`rooms:${window.localStorage.getItem("_ref")}`);
      this.getdataDB.then((data) => {
        let rooms = data.objects("ROOM");
        rooms.map((data)=>{
              this.sockets.unsubscribe(`messages:${data.sessionId}`);
              this.sockets.unsubscribe(`messages:update:${data.sessionId}`);
        })
      });
    },
  },
};
</script>