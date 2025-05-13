<script setup lang="ts">
import { ref, onMounted } from 'vue';

const countdown = ref(0);
const timer = ref(null);

const startCountdown = () => {
  countdown.value = 60; // 60秒倒计时
  if (timer.value) clearInterval(timer.value);
  timer.value = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(timer.value);
    }
  }, 1000);
};

// 模拟用户点击获取验证码按钮
const getVerificationCode = () => {
  startCountdown();
  // 这里可以添加发送请求获取验证码的逻辑
  console.log('发送验证码请求');
};

onMounted(() => {
  // 可以在这里初始化任何需要的内容
});
</script>

<template>
  <div class="login-container">
    <div class="login-left">
      <div class="logo-container">
        <img src="../public/logo.png" class="logo">
        <span class="logo-text">智慧视界</span>
      </div>

      <div class="signup-form">
        <div class="header-container">
          <img src="../public/img.png" class="header-img">
          <h2> 欢迎使用!</h2>
        </div>

        <p class="signup-text" style="text-align: center;">使用邮箱注册你的账号</p>
        <p class="terms-text" style="text-align: center;">在注册之前, 你需要同意我们的 <a href="#" class="terms-link">服务条款</a> and <a href="#" class="privacy-link">隐私政策</a></p>

<!--        <div class="social-buttons">-->
<!--          <button class="social-btn microsoft-btn">-->
<!--            使用邮箱登录-->
<!--          </button>-->
<!--        </div>-->

<!--        <div class="divider">-->
<!--          <span>Or</span>-->
<!--        </div>-->

        <div class="email-form">
          <input type="email" placeholder="请输入邮箱号" class="email-input">
          <div class="verification-container">
            <input type="text" placeholder="请输入验证码" class="verification-input">
            <button class="get-verification-btn" :disabled="countdown > 0">
              {{ countdown > 0 ? `${countdown}秒后重新获取` : '获取验证码' }}
            </button>
          </div>
          <button class="continue-btn">继续</button>
        </div>

<!--        <p class="login-text">已经有账号了? <a href="#" class="login-link">登录</a></p>-->

        <p class="help-text">
          <span>账户或订阅遇到问题了吗？别担心，我们的支持团队很乐意为您提供帮助！</span><br>
        </p>
      </div>
    </div>

    <div class="login-right">
      <div class="hero-text">
        <h1>用AI驱动的多模态分析重塑教学视频</h1>
        <div class="partner-logos">
          <div class="partner-logo">
            <span></span>
          </div>
          <div class="partner-logo">
            <span>Teaching Videos with AI-Powered Multimodal Analysis</span>
          </div>
          <div class="partner-logo">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
.login-container {
  display: flex;
  min-height: 100vh;
}

.login-left {
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* 修改为左对齐 */
}

.logo-container {
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  width: 450px; /* 与 signup-form 的宽度一致 */
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 8px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #111;
}

.signup-form {
  max-width: 450px; /* 与 logo-container 的宽度一致 */
  width: 100%;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  width: 95%;
}

.header-img {
  width: 50px;
  height: 40px;
  margin-right: 15px;
}

.signup-text {
  color: #666;
  margin-bottom: 0.5rem;
}

.terms-text {
  font-size: 0.875rem;
  color: #999;
  margin-bottom: 1.5rem;
}

.terms-link, .privacy-link {
  color: #555;
  text-decoration: none;
}

.terms-link:hover, .privacy-link:hover {
  text-decoration: underline;
}

.social-buttons {
  margin-bottom: 1.5rem;
}

.social-btn {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  justify-content: center;
}

.social-btn:hover {
  background-color: #f5f5f5;
}

.divider {
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  color: #999;
}

.divider::before, .divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background-color: #e0e0e0;
}

.divider span {
  padding: 0 0.75rem;
  font-size: 0.875rem;
}

.email-input {
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
}

.verification-container {
  display: flex;
  margin-bottom: 0.5rem;
}

.verification-input {
  flex: 1;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px 0 0 8px;
  font-size: 1rem;
}

.get-verification-btn {
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 0 8px 8px 0;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: -1px;
}

.get-verification-btn:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.continue-btn {
  width: 100%;
  padding: 1rem;
  margin-top: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.continue-btn:hover {
  background-color: #f5f5f5;
}

.login-text {
  text-align: center;
  margin: 1.5rem 0;
  color: #666;
}

.login-link {
  color: #555;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}

.help-text {
  font-size: 0.80rem;
  color: #999;
  max-width: 450px;
  margin-top: 5rem;
}

.help-link {
  color: #555;
  text-decoration: none;
}

.help-link:hover {
  text-decoration: underline;
}

.login-right {
  width: 50%;
  background-color: #6a4c93;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.login-right::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../public/background.png');
  background-size: cover;
  background-position: center;
  opacity: 0.8;
}

.hero-text {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding: 0 2rem;
}

.hero-text h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.partner-logos {
  display: flex;
  justify-content: center;
  gap: 4rem;
}

.partner-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.partner-logo img {
  width: 40px;
  height: 40px;
}

.partner-logo span {
  font-weight: bold;
  font-size: 1.1rem;
}

.hand-icon {
  width: 24px;
  height: 24px;
  margin-right: 12px;
  vertical-align: middle;
}
</style>
