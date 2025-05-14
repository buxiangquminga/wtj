<script setup lang="ts">
// 菜单项激活逻辑
const activeMenuItem = ref('首页');

const handleClickMenuItem = (itemName: string) => {
  activeMenuItem.value = itemName;
  console.log(`导航到: ${itemName}`);
};

// 退出功能
const handleLogout = () => {
  console.log('退出登录');
  // 实现退出逻辑
};
</script>

<template>
  <div class="sidebar">
    <div class="logo-container">
      <div class="logo">
        <div class="logo-icon">
          <img src="../public/logo.png">
        </div>
        <span>智慧视界</span>
      </div>
    </div>

    <div class="overview-title">OVERVIEW</div>

    <ul class="menu-list">
      <li class="menu-item active">
        <img src="../public/btn.png">
        <span>首页</span>
        <span class="active-dot"></span>
      </li>
      <li class="menu-item">
        <i class="icon multi-teaching-icon"></i>
        <span>多模教学</span>
      </li>
<!--      <li class="menu-item">-->
<!--        <i class="icon syllabus-icon"></i>-->
<!--        <span>教学大纲生成</span>-->
<!--      </li>-->
<!--      <li class="menu-item">-->
<!--        <i class="icon video-summary-icon"></i>-->
<!--        <span>视频内容总结</span>-->
<!--      </li>-->
<!--      <li class="menu-item">-->
<!--        <i class="icon knowledge-graph-icon"></i>-->
<!--        <span>知识图谱构建</span>-->
<!--      </li>-->
    </ul>

    <div class="logout-container">
      <button class="logout-button">
        <i class="icon logout-icon"></i>
        <span>退出</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  width: calc(100% - 20px);
  max-width: 240px;
  background-color: white;
  border-right: 1px solid #e9ecef;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 让侧边栏高度覆盖整个页面 */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
}

/* Logo部分 */
.logo-container {
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
}

.logo {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background-color: #6c5ce7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  position: relative;
}


.logo span {
  color: #6c5ce7;
  font-weight: bold;
  font-size: 16px;
}

/* Overview标题 */
.overview-title {
  padding: 15px 20px 10px;
  color: #495057;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.5px;
}

/* 菜单项 */
.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  padding: 12px 20px;
  display: flex;
  align-items: center;
  color: #495057;
  cursor: pointer;
  position: relative;
  margin-bottom: 2px;

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #6c5ce7;
  }

  span {
    font-size: 14px;
  }
}

.menu-item.active {
  color: #6c5ce7;
  font-weight: 500;
  background-color: rgba(108, 92, 231, 0.1);
  border-radius: 4px;
  margin-left: -2px;
  margin-right: -2px;
}

.active-dot {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background-color: #6c5ce7;
  border-radius: 50%;
}

/* 退出按钮 */
.logout-container {
  margin-top: auto;
  padding: 20px;
}

.logout-button {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: #e74c3c;
  cursor: pointer;
  padding: 8px 12px;
  font-size: 14px;
}

.logout-button .icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

/* 模拟图标样式 */
.home-icon::before {
  content: '';
  display: block;
  width: 12px;
  height: 12px;
  background-color: #6c5ce7;
  border-radius: 50% 50% 0 0;
  transform: rotate(45deg);
}

.multi-teaching-icon::before {
  content: '';
  display: block;
  width: 12px;
  height: 12px;
  background-color: #6c5ce7;
  border-radius: 2px;
}

.syllabus-icon::before {
  content: '';
  display: block;
  width: 12px;
  height: 12px;
  background-color: #6c5ce7;
  border-radius: 2px;
}

.video-summary-icon::before {
  content: '';
  display: block;
  width: 12px;
  height: 12px;
  background-color: #6c5ce7;
  border-radius: 50%;
}

.knowledge-graph-icon::before {
  content: '';
  display: block;
  width: 12px;
  height: 12px;
  background-color: #6c5ce7;
  border-radius: 50%;
}

.logout-icon::before {
  content: '';
  display: block;
  width: 12px;
  height: 12px;
  background-color: #e74c3c;
  border-radius: 50%;
}

/* 适应不同设备 */
@media (max-width: 768px) {
  .sidebar {
    padding: 0 10px;
    width: 100%;
    max-width: none;
    box-shadow: none;
    border-right: none;
  }

  .menu-item {
    padding: 10px 15px;
  }

  .menu-item span {
    font-size: 13px;
  }
}
</style>


