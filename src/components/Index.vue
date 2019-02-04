<template lang="pug">
  .wrapper
    canvas(id="heart", class="heartbeat")
    main(v-if="!promocode", :class="{'subscribe': subscribe}")
      .subscribe__title Digital валентинка - скоро
      .subscribe__subtitle Оставь свою почту и будь в числе первых. <br/>А как дополнение получи промокод на скидку в 30%
      SubscribeForm
    aside(else)
</template>

<script>
import Heart from "../service/heart.js";
import SubscribeForm from "../components/SubscribeForm";

export default {
  data() {
    return {
      subscribe: false,
      email: "",
      promocode: ""
    };
  },
  created() {
    this.$nextTick(() => {
      Heart.runHeart();
      setTimeout(() => {
        this.subscribe = true;
      }, 3000);
    });
  },
  components: {
    SubscribeForm
  }
};
</script>

<style scoped lang="less">
@import url("../style/variables.less");

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
</style>
