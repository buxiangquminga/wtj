<script setup lang="ts">
</script>

<template>
  <!-- 网格背景 -->
  <div class="grid-background"></div>

  <!-- 头部导航 -->
  <header class="header">
    <div class="logo">
      <div class="logo-circle">
        <img src="../public/logo.png">
      </div>
      <div class="logo-text">智教视界</div>
    </div>

    <nav class="nav">
      <!--      <div class="nav-item active">产品</div>-->
      <!--      <div class="nav-item">使用案例</div>-->
      <!--      <div class="nav-item">定价</div>-->
    </nav>

    <div class="auth-buttons">
      <button class="login-btn">登录</button>
      <button class="signup-btn">免费开始</button>
    </div>
  </header>

  <!-- 主要内容 -->
  <main class="main-content">
    <div class="feature-tag">AI 教学视频多模态解析与知识重构系统</div>
    <h1 class="main-title"><span>教学视频</span>智能化升级，开启高效学习新时代！</h1>
    <p class="main-description">智教视界，您的智能教学助手。</p>

    <div class="action-buttons">
      <button class="primary-btn">免费开始</button>
    </div>

    <div class="comparison-section">
      <div class="comparison-card">
        <p class="comparison-note">支持多语言字幕选项</p>
        <h2 class="card-title">智能字幕生成</h2>
      </div>

      <div class="comparison-card">
        <p class="comparison-note">教学大纲和时间轴概览</p>
        <h2 class="card-title">教学大纲构建</h2>
      </div>

      <div class="comparison-card">
        <p class="comparison-note">提炼视频核心内容</p>
        <h2 class="card-title">视频内容精炼</h2>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
/* 重置样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #333;
  background-color: #f8f9fa;
  line-height: 1.5;
  min-height: 100vh;
}

/* 网格背景 */
.grid-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
          rgba(255, 255, 255, 0.1),
          rgba(255, 255, 255, 0.1)
  ),
  repeating-linear-gradient(
          0deg,
          transparent,
          transparent 39px,
          rgba(0, 0, 0, 0.05) 39px,
          rgba(0, 0, 0, 0.05) 40px
  ),
  repeating-linear-gradient(
          90deg,
          transparent,
          transparent 39px,
          rgba(0, 0, 0, 0.05) 39px,
          rgba(0, 0, 0, 0.05) 40px
  );
  z-index: -1;
}

/* 头部导航 */
.header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 2;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-circle {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.auth-buttons {
  display: flex;
  align-items: center;
}

.login-btn {
  padding: 10px 25px;
  margin-right: 15px;
  background-color: #f8f9fa;
  border: none;
  border-radius: 5px;
  color: #333;
  font-size: 16px;
  cursor: pointer;
}

.signup-btn {
  padding: 10px 25px;
  background: linear-gradient(135deg, #8a4fff, #5d1b9c);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

/* 主要内容 */
.main-content {
  display: grid;
  grid-template-rows: auto auto auto auto;
  text-align: center;
  padding: 120px 0 60px;
  max-width: 1100px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 40px;
}

.feature-tag {
  display: inline-block;
  padding: 8px 20px;
  background:
      linear-gradient(
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0.1)
      ),
      linear-gradient(135deg, #8a4fff, #5d1b9c),
      linear-gradient(
              rgba(255, 255, 255, 0.5),
              rgba(255, 255, 255, 0.5)
      );
  border-radius: 60px;
  color: white;
  font-size: 24px;
  justify-self: center;
  box-shadow: 0 0 50px rgba(106, 49, 215, 0.6);
}

.main-title {
  font-size: 48px;
  font-weight: bold;
  color: #252525;
  justify-self: center;
}

.main-title span {
  color: #8a4fff;
}

.main-description {
  font-size: 18px;
  color: #666;
  max-width: 900px;
  justify-self: center;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.primary-btn {
  padding: 15px 35px;
  background: linear-gradient(135deg, #8a4fff, #5d1b9c);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 17px;
  cursor: pointer;
}

.secondary-btn {
  padding: 15px 35px;
  background: none;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #666;
  font-size: 17px;
  cursor: pointer;
}

/* 对比卡片 */
.comparison-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 三列布局 */
  gap: 100px; /* 增大间隔 */
  max-width: 1200px; /* 增大最大宽度以适应更大的间隔 */
  margin: 0 auto;
}

.comparison-card {
  background: white;
  border-radius: 10px;
  padding: 60px 40px; /* 增加垂直方向的内边距来提高卡片高度 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  height: 100%; /* 确保卡片占用整个网格单元的高度 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中内容 */
  transition: all 0.3s ease; /* 添加过渡效果 */
}

.comparison-card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* 悬浮时增加阴影 */
  transform: translateY(-5px); /* 悬浮时轻微抬升 */
}

.card-title {
  font-size: 28px;
  font-weight: bold;
  color: #252525;
  margin-bottom: 15px;
}

.card-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 25px;
}

.comparison-note {
  font-size: 14px;
  color: #999;
  text-align: left;
  margin-top: 15px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header {
    grid-template-columns: 1fr;
    padding: 20px 30px;
  }

  .main-title {
    font-size: 40px;
  }

  .comparison-section {
    grid-template-columns: 1fr;
    gap: 40px; /* 在小屏幕上适当减小间隔 */
  }
}
</style>
