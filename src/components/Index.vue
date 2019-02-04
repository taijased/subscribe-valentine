<template lang="pug">
  .wrapper
    canvas(id="heart", class="heartbeat")
    main(v-if="!promocode", :class="{'subscribe': subscribe}")
      .subscribe__title Digital валентинка - скоро
      .subscribe__subtitle Оставь свою почту и будь в числе первых.<br/>А как дополнение получи промокод на скидку в 30%
      SubscribeForm
    aside(else)
</template>

<script>
import Heart from "../service/heart.js";
import SubscribeForm from '../components/SubscribeForm';

export default {
  data () {
    return {
      subscribe: false,
      email: '',
      promocode: ''
    }
  },
  created() {
    this.$nextTick(() => {
      Heart.runHeart();
      setTimeout(() => {
        this.subscribe = true
      }, 3000);
    });
  },
  components: {
    SubscribeForm
  }
}
</script>

<style scoped lang="stylus">
.wrapper {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 1);
  transition background .5s
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
main 
  opacity 0
  transition opacity 1.5s
.subscribe 
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity 1
  transition opacity 1.5s
  z-index: 15;
  overflow: hidden;
  color: white;
  display flex
  flex-direction column
  justify-content center
  align-items center
  &__title
    font-family: 'RobotoMedium';
    font-style: normal;
    line-height: normal;
    font-size: 40px;
    text-align: center;
  &__subtitle

    font-style: normal;
    font-weight: normal;
    line-height: 33px;
    font-size: 28px;
    text-align: center;
    letter-spacing: -0.875px;
    margin 25px 0
  .subscribe-form 
    display flex
    flex-direction row
    justify-content center
    align-items center
    margin 30px 0
    &__input
      input 
        color #fff
        padding 5px 15px
        width 300px
        font-size 16px
        border-bottom 2px solid #fff
      .label 
        font-size 16px


</style>
