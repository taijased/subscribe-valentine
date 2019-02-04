<template lang="pug">
  .wrapper(id="wrapper")
    canvas(id="heart", class="heartbeat")
    main(v-if="!promocode", :class="{'subscribe': subscribe}")
      .subscribe__title Digital валентинка - скоро
      .subscribe__subtitle Оставь свою почту и будь в числе первых. <br/>А как дополнение получи промокод на скидку в 30%
      form(class="for-mobile")
        .input-primary(:class="{'error': send_error}")
          input(v-model="email", type="text", required)
          .label(class="email", :class="{'not-empty': email !== ''}") *E-mail
        .btn-primary(@click="sendMail()") Получить промокод
    aside(v-else) 
      h1 Промокод отправлен {{email}}!
</template>

<script>
import Heart from "../service/heart.js";
import FormService from "../service/FromService.js";

export default {
  data() {
    return {
      subscribe: false,
      email: "",
      promocode: false,
      send_error: false
    };
  },
  methods: {
    sendMail() {
      if (this.validEmail()) {
        new Promise((resolve, reject) => {
          FormService.sendMail(this.email)
            .then(response => {
              this.promocode = true;
              resolve(response);
            })
            .catch(error => {
              this.send_error = true;
              reject(error);
            });
        });
      } else {
        this.send_error = true;
      }
    },
    validEmail() {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email);
    },
    toggleFullScreen() {
      var elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
      }
    }
  },
  created() {
    this.toggleFullScreen();
    this.$nextTick(() => {
      Heart.runHeart();
      setTimeout(() => {
        this.subscribe = true;
      }, 3000);
    });
  }
};
</script>

<style scoped lang="less">
@import url("../style/variables.less");
@import url("../style/animation.less");

.wrapper {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 1);
  transition: background 0.5s;
}

canvas {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 1);
  z-index: 10;
}

main {
  opacity: 0;
  transition: opacity 1.5s;
}
aside {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 15;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    line-height: 50px;
  }
}
.subscribe {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 1;
  transition: opacity 1.5s;
  z-index: 15;
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    font-family: TT Norms Medium;
    font-style: normal;
    font-weight: 500;
    line-height: 47px;
    font-size: 36px;
    text-align: center;
    letter-spacing: -1.25px;
    @media @xs {
      font-size: 24px;
    }
  }

  &__subtitle {
    width: 500px;
    font-family: TT Norms Light;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    text-align: center;
    margin: 18px 0;
    @media @xs {
      font-size: 14px;
    }
  }
}

form {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-end;
  height: @form-height;
  margin-top: 48px;
  .input-primary {
    margin-right: 20px;
    @media @xs {
      margin: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    input {
      margin: 0;
      border: 0;
      padding-left: 10px;
      padding-bottom: 5px;
      display: inline-block;
      vertical-align: middle;
      white-space: normal;
      background: none;
      line-height: 1;
      color: white;
      border-bottom: 1px solid white;
      transition: color @time-description, border-bottom @time-description;
      height: @input-height;
      width: 300px;
      margin-top: -3px;
      margin-right: 20px;
      font-family: TT Norms Medium;
      font-style: normal;
      font-weight: normal;
      line-height: 21px;
      font-size: 18px;
      @media @xs {
        margin: 0;
        width: 90%;
      }
      &:focus {
        outline: 0;
      }
    }
    // src style animation.less
    .input-hover();
  }
  .error {
    input {
      border-bottom: 1px solid @btn-primary;
      transition: border-bottom @time-description;
    }
    .label {
      color: @btn-primary;
      transition: color @time-description;
    }
  }
  .btn-primary {
    height: 50px;
    border-radius: 15px;
    padding: 0 45px;
    background: #990e1f;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: color 0.3s, background 0.3s;
    font-family: TT Norms Light;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
    font-size: 18px;
    @media @xs {
      margin-top: 20px;
      width: 65%;
    }
    &:hover {
      color: #000;
      background: #fff;
      transition: color 0.3s, background 0.3s;
      cursor: pointer;
    }
  }
}
</style>
