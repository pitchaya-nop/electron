<template>
  <!--SignIn Classic start -->
  <div class="login-page2 animat-rate">
    <div class="login-content-main">
      <div class="login-content2">
        <div class="theme-tab">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link"
                id="login-tab"
                data-toggle="tab"
                href="javascript:void(0)"
                role="tab"
                aria-selected="false"
                >login</a
              >
            </li>
            <li class="nav-item">
              <nuxt-link to="/authentication/signup-2">
                <a
                  class="nav-link active"
                  id="signup-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-selected="true"
                  >Signup
                </a>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="login-content">
        <div class="login-content-header">
          <img
            class="img-fluid"
            src="../../assets/images/logo/landing-logo.png"
            alt="images"
          />
        </div>
        <h3>Hello Everyone , We are Chitchat</h3>
        <h4>Welcome to chitchat please, login to your account.</h4>
        <form class="form2">
          <div class="form-group">
            <label class="col-form-label" for="inputEmail3"
              >Email Address</label
            >
            <input
              class="form-control"
              id="inputEmail3"
              type="email"
              placeholder="Demo@123gmail.com"
            />
          </div>
          <div class="form-group">
            <label class="col-form-label" for="inputPassword3">Password</label
            ><span> </span>
            <input
              class="form-control"
              id="inputPassword3"
              type="password"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <div class="rememberchk">
              <div class="form-check">
                <input
                  class="form-check-input"
                  id="gridCheck1"
                  type="checkbox"
                />
                <label class="form-check-label p-0" for="gridCheck1"
                  >Remember Me</label>
                <h6><nuxt-link to="/authentication/login">Forgot Password?</nuxt-link></h6>
              </div>
            </div>
          </div>
          <ul class="medialogo">
            <li>
              <a
                class="icon-btn btn-facebook button-effect rouded15"
                href="https://www.facebook.com/"
                ><i class="fa fa-facebook-f"></i
              ></a>
            </li>
            <li>
              <a
                class="icon-btn btn-danger button-effect rouded15"
                href="https://www.google.com/"
                ><i class="fa fa-google"></i
              ></a>
            </li>
            <li>
              <a
                class="icon-btn btn-primary button-effect rouded15"
                href="https://twitter.com/"
                ><i class="fa fa-twitter"></i
              ></a>
            </li>
          </ul>
          <div class="form-group mb-0">
            <div class="buttons">
              <a class="btn button-effect btn-primary" href="javascript:void(0)"
                >Login</a
              >
            </div>
          </div>
        </form>
      </div>
    </div>
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
      <div class="top-circle"></div>
      <div class="center-circle"></div>
      <div class="bottom-circle1"></div>
      <div class="right-circle"></div>
      <div class="right-circle1"></div>
      <div class="quarterCircle"></div>
      <img
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
        class="cloud-logo5"
        src="../../assets/images/login_signup/2.png"
        alt="login logo"
      />
    </div>
  </div>
  <!--SignIn Classic end -->
</template>
