<template>
  <form class="for-mobile">
    <div class="input-primary">
      <input v-model="login" type="text" required>
      <div class="label" :class="{'not-empty': login !== ''}">*E-mail</div>
    </div>
    <div class="btn-primary">Получить промокод</div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      login: ""
    };
  }
};
</script>

<style lang="less">
@import url("../style/animation.less");

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
    transition: color .3s, background .3s;
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
        transition: color .3s, background .3s;
        cursor: pointer;
    }
  }
}
</style>
