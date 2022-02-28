<template>
  <!--Direct Chat start -->
  <div class="contact-chat">
    <ul class="chatappend">
      <!-- {{
        this.currentchat.chat
      }}
      <button type="button" @click="writedb()">write DB</button>
      <button type="button" @click="getdb()">get DB</button> -->
      <!-- <button type="button" @click="emitaction()">emit socket</button> -->
      <!-- {{this.currentchat.count}} -->
      <!-- <button type="button" @click="getdb()">get DB</button> -->
      <!-- {{sessionroom}} -->
      <!-- <p v-for="(chat, index) in currentChat.chat" :key="index">
        {{chat.content}}
      </p> -->
      <!-- {{
        this.testdata
      }} -->
      
        <li
          :class="chat.senderid == userprofile.id ? 'sent' : 'replies'"

          v-for="(chat, index) in currentChat.chat"
          :key="index"
        >
          <div class="media">
            <div
              class="profile mr-4"
              :style="
                chat.senderid == userprofile.id
                  ? [
                      {
                        'background-image':`url(${userprofile.avatars.source})`
                      },
                      styleObject,
                    ]
                  : [
                      {
                        'background-image':`url(${chat.avatar})`,
                      },
                      styleObject,
                    ]
              "
            ></div>
            <div class="media-body">
              <div class="contact-name">
                <h5>
                  {{ chat.senderid == userprofile.id ? "Me" : "You" }}
                </h5>
                <!-- <h6>{{ chat.time }}</h6> -->
                <ul class="msg-box">
                  <!-- v-if="currentChat.chat.id == 0 && !chat.stickerpath" -->
                  <li class="msg-setting-main">
                    <!-- <DropDown v-if="chat.sender == 0 && !chat.lastmsg" /> -->
                    <h5>
                      {{ chat.content }}
                    </h5>
                    <!-- <DropDown v-if="chat.sender == 1" />
                    <DropDown v-if="chat.sender == 0 && chat.lastmsg" /> -->
                  </li>
                  <!-- <li class="msg-setting-main" v-if="!chat.lastmsg">
                    <h5 v-if="chat.text2">{{ chat.text2 }}</h5>

                    <div v-if="chat.document" class="document">
                      <i class="fa fa-file-excel-o font-primary"></i>
                      <div class="details">
                        <h5>Document.xlsx</h5>
                        <h6>25mb Seprate file</h6>
                      </div>
                      <div class="icon-btns">
                        <a
                          class="icon-btn btn-outline-light"
                          :href="chat.document"
                          :download="chat.document"
                          target="_blank"
                          ><feather type="download" size="15" height="15">
                          </feather
                        ></a>
                      </div>
                    </div>

                    <div
                      v-if="chat.read"
                      class="badge sm ml-2"
                      :class="chat.document ? 'badge-dark' : 'badge-success'"
                    >
                      {{ chat.read }}
                    </div>

                    <ul v-if="chat.gallery1" class="auto-gallery">
                      <li
                        :style="[
                          {
                            'background-image':
                              'url(' + getImgUrl(chat.gallery1) + ')',
                          },
                          styleObject,
                        ]"
                      ></li>
                      <li
                        :style="[
                          {
                            'background-image':
                              'url(' + getImgUrl(chat.gallery2) + ')',
                          },
                          styleObject,
                        ]"
                      ></li>
                      <li
                        :style="[
                          {
                            'background-image':
                              'url(' + getImgUrl(chat.gallery3) + ')',
                          },
                          styleObject,
                        ]"
                      ></li>
                    </ul>
                    <div v-if="chat.gallery1" class="refresh-block">
                      <div
                        class="badge badge-outline-primary refresh sm ml-2"
                        :class="refresh ? 'refreshed' : ''"
                      >
                        <i
                          ><feather
                            type="rotate-cw"
                            @click="refresh = !refresh"
                          ></feather
                        ></i>
                      </div>
                      <div class="badge badge-danger sm ml-2">F</div>
                    </div>

                    <DropDown />
                  </li> -->
                </ul>

                <!-- <ul class="msg-box" v-if="currentChat.chat.id !== 0">
                  <li class="msg-setting-main" v-if="chat.sender == 0">
                    <h5 v-if="chat.text">{{ chat.text }}</h5>
                    <DropDown />
                  </li>
                  <li
                    class="msg-setting-main"
                    v-if="chat.sender == 1 && chat.lastmsg"
                  >
                    <h5 v-if="chat.text">{{ chat.text }}</h5>
                    <div class="badge badge-success sm ml-2">R</div>
                    <DropDown />
                  </li>
                </ul>

                <ul class="msg-box" v-if="chat.stickerpath">
                  <li class="msg-setting-main">
                    <h5>
                      <img :src="getImgUrl(chat.stickerpath)" alt="" />
                    </h5>
                  </li>
                </ul> -->
              </div>
            </div>
          </div>
        </li>
        <div id="lastmessage"></div>
        <!-- <li :class="typing ? 'sent last typing-': 'sent'" :style="typing? 'display: block': 'display: none'">
              <div class="media">
                 <div class="profile mr-4" :style="[{'background-image': 'url(' + getImgUrl(currentChat.img) + ')'},styleObject]"></div>
                 <div class="media-body">
                    <div class="contact-name">
                      <h5>{{ currentChat.name }}</h5>
                       <ul class="msg-box">
                          <li>
                             <h5>
                                <div class="type">
                                   <div class="typing-loader"></div>
                                </div>
                             </h5>
                          </li>
                       </ul>
                    </div>
                 </div>
              </div>
            </li> -->
      

      <div v-if="!currentChat.chat">
        <div class="contact-chat">
          <div class="rightchat animat-rate">
            <div class="bg_circle">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="cross"></div>
            <div class="cross1"></div>
            <div class="cross2"></div>
            <div class="dot"></div>
            <div class="dot1"></div>
          </div>
        </div>
        <div class="call-list-center">
          <img src="../../../../assets/images/chat.png" alt="" />
          <div class="animated-bg"><i></i><i></i><i></i></div>
          <p>Select a chat to read messages</p>
        </div>
      </div>
    </ul>
  </div>
  <!--Direct Chat end -->
</template>

<script>
import { mapState } from "vuex";
import DropDown from "../../common/dropdown.vue";

export default {
  components: {
    DropDown,
  },
  data() {
    return {
      currentchat: [],
      testdata: [],
      refresh: false,
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
    };
  },
  mounted() {
    
  },
  methods: {
    writedb() {
      this.addDataToRealm("", "addMessage");
    },
    getImgUrl(path) {
      return require("../../../../assets/images/" + path);
    },
  },
  computed: {
    ...mapState({
      typing: (state) => state.chat.typing,
      sessionroom: (state) => state.chat.session,
      userprofile:(state)=>state.auth.profile,
      currentChat() {
        return (this.currentchat = this.$store.getters["chat/currentChat"]);
        // this.getdataDB.then((data) => { this.testdata = data.objects("MESSAGE").filtered(`sessionid == "${this.sessionroom}"`) })
      },
    }),
  },
};
</script>


