
<template>
  <!--SignIn start -->
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-12">
        <div class="login-contain-main">
          <div class="left-page">
            <div class="login-content">
              <div class="login-content-header mt-3 mb-3">
                <img
                  class="image-fluid my-auto"
                  src="../../assets/images/logo/logo-circle.png"
                  alt="images"
                />
              </div>
              <h3>Hello Everyone , We are GoChat</h3>
              <h4>Welcome to GoChat please login to your account.</h4>

              <form class="form1">
                <div class="form-group">
                  <label class="col-form-label" for="inputEmail3"
                    >Email Address</label
                  >
                  <input
                    class="form-control"
                    id="inputEmail3"
                    type="email"
                    v-model="email"
                    required
                    email
                    placeholder="Demo@123gmail.com"
                  />
                </div>
                <div class="form-group">
                  <label class="col-form-label" for="inputPassword3"
                    >Password</label
                  ><span> </span>

                  <input
                    class="form-control"
                    id="inputPassword3"
                    type="password"
                    v-model="password"
                    required
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <div class="rememberchk">
                    <div class="form-check pl-0">
                      <input
                        class="form-check-input m-0"
                        id="gridCheck1"
                        type="checkbox"
                      />
                      <label class="form-check-label" for="gridCheck1"
                        >Remember Me</label
                      >
                      <h6>
                        <nuxt-link to="/authentication/login"
                          >Forgot Password?</nuxt-link
                        >
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="buttons">
                    <a
                      class="btn btn-primary button-effect"
                      href="javascript:void(0)"
                      @click="handleLogin"
                      >Login</a
                    >
                    <nuxt-link
                      class="btn button-effect btn-signup"
                      to="/authentication/signup"
                    >
                      SignUp
                    </nuxt-link>
                  </div>
                </div>
              </form>

              <!--              <div>-->
              <!--              <div class="line">-->
              <!--                <h6>OR Connect with</h6>-->
              <!--              </div>-->
              <!--              <div class="medialogo">-->
              <!--                <ul>-->
              <!--                  <li>-->
              <!--                    <a-->
              <!--                      class="icon-btn btn-danger button-effect"-->
              <!--                      href="https://www.google.com/"-->
              <!--                      ><i class="fa fa-google"></i-->
              <!--                    ></a>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <a-->
              <!--                      class="icon-btn btn-primary button-effect"-->
              <!--                      href="https://twitter.com/"-->
              <!--                      ><i class="fa fa-twitter"></i-->
              <!--                    ></a>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <a-->
              <!--                      class="icon-btn btn-facebook button-effect"-->
              <!--                      href="https://www.facebook.com/"-->
              <!--                      ><i class="fa fa-facebook-f"></i-->
              <!--                    ></a>-->
              <!--                  </li>-->
              <!--                </ul>-->
              <!--              </div>-->
              <!--              <div class="termscondition">-->
              <!--                <h4 class="mb-0">-->
              <!--                  <span>*</span>Terms and condition<b>&amp;</b>Privacy policy-->
              <!--                </h4>-->
              <!--              </div>        -->
              <!--              </div>-->
            </div>
          </div>
          <div class="right-page">
            <div class="right-login animat-rate">
              <div class="animation-block">
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
                <div class="maincircle"></div>
                <div class="top-circle"></div>
                <div class="center-circle"></div>
                <div class="bottom-circle"></div>
                <div class="bottom-circle1"></div>
                <div class="right-circle"></div>
                <div class="right-circle1"></div>
                <img
                  class="heart-logo"
                  src="../../assets/images/login_signup/5.png"
                  alt="login logo"
                /><img
                  class="has-logo"
                  src="../../assets/images/login_signup/4.png"
                  alt="login logo"
                /><img
                  class="login-img"
                  src="../../assets/images/login_signup/1.png"
                  alt="login logo"
                /><img
                  class="boy-logo"
                  src="../../assets/images/login_signup/6.png"
                  alt="login boy logo"
                /><img
                  class="girl-logo"
                  src="../../assets/images/login_signup/7.png"
                  alt="girllogo"
                /><img
                  class="cloud-logo"
                  src="../../assets/images/login_signup/2.png"
                  alt="login logo"
                /><img
                  class="cloud-logo1"
                  src="../../assets/images/login_signup/2.png"
                  alt="login logo"
                /><img
                  class="cloud-logo2"
                  src="../../assets/images/login_signup/2.png"
                  alt="login logo"
                /><img
                  class="cloud-logo3"
                  src="../../assets/images/login_signup/2.png"
                  alt="login logo"
                /><img
                  class="cloud-logo4"
                  src="../../assets/images/login_signup/2.png"
                  alt="login logo"
                /><img
                  class="has-logo1"
                  src="../../assets/images/login_signup/4.png"
                  alt="login logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--SignIn end -->
</template>

<script>
const CryptoJS = require("crypto-js");
export default {
  data() {
    return {
      //dev
      email: "official1@mail.com",
      password: "Aa1234",
      //sit
      // email: "juhand@gochat.com",
      // password: "P@ssw0rd",
    };
  },
  methods: {
    async handleLogin() {
      console.log("email", this.email);
      console.log("password", this.password);
      try {
        var keyHex = CryptoJS.enc.Utf8.parse(
          "4a310288218c3394d829e49bd187c395"
        );
        console.log(keyHex);
        var encrypted = CryptoJS.AES.encrypt(this.password, keyHex, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        });
        console.log("qwe", encrypted);

        const payload = new FormData();
        payload.append("email", this.email);
        payload.append("password", encrypted);

        const response = await this.$store.dispatch(
          "auth/requestSignInViaEmail",
          payload
        );
        console.log("response", response);

        if (response.code === "0000") {
          const data = response.data;
          await this.$store.dispatch("auth/setToken", data.accessToken);
          await this.$store.dispatch("auth/setProfile", data.userProfile);

          this.$router.push("/");
        }
        console.log(data);
        console.log(response);
      } catch {
        console.log("err");
      }
    },
  },
};
</script>
