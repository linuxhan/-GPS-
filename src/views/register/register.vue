<template>
  <div class="box">
    <div>
      <img src="../../../static/img/logo.png" alt />
    </div>
    <div class="user_name">
      <p>用户名:</p>
      <input type="text" />
    </div>
    <div class="pass">
      <p>密码:</p>
      <input type="password" />
    </div>
    <div class="authcode">
      <p>验证码:</p>
      <input type="password" />
      <p class="num_code" @click="numCode">{{arr[num]}}</p>
    </div>
    <div class="submit">
      <button @click="submit">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1111, 2222, 3333],
      num: 0
    };
  },
  methods: {
    numCode() {
      this.num++;
      if (this.num > this.arr.length - 1) {
        this.num = 0;
      }
    },
    submit() {
      this.$router.push({ path: "/home" });
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.box {
  width: 510px;
  height: auto;
  margin: 170px auto;
  //  border: 1px solid #bbbbbb;
}
.user_name,
.pass,
.authcode {
  padding: 0 46px;
  overflow: hidden;
  p {
    width: 130px;
    height: 40px;
    border: 1px solid #bbbbbb;
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    display: inline-block;
    float: left;
    margin: 15px;
  }
  input {
    width: 204px;
    height: 38px;
    padding: 0 8px;
    float: left;
    margin: 15px;
  }
}
.user_name {
  margin-top: 40px;
}
.authcode {
  input {
    width: 88px;
    padding: 0 8px;
  }
  .num_code {
    width: 85px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
}
.submit {
  width: 220px;
  margin: 20px auto;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  button {
    width: 100%;
    border: none;
    background: none;
    height: 60px;
    font-size: 28px;
    color: #000;
  }
}
</style>
