// 获取所有DOM元素
const nameInput = document.getElementById('name-input');
const bioInput = document.getElementById('bio-input');
const saveBtn = document.getElementById('save-btn');
const displayName = document.getElementById('display-name');
const displayBio = document.getElementById('display-bio');
const avatarUpload = document.getElementById('avatar-upload');
const avatar = document.getElementById('avatar');

// 1. 保存按钮的点击事件
saveBtn.addEventListener('click', function() {
    // 获取输入框的值
    const newName = nameInput.value.trim();
    const newBio = bioInput.value.trim();

    // 非空验证
    if (!newName) {
        alert('请输入姓名！');
        return;
    }

    // 更新卡片显示的内容
    displayName.textContent = newName;
    displayBio.textContent = newBio || '（暂无简介）';


    // 保存成功的视觉反馈
    this.textContent = '已保存！';
    this.style.background = '#2ecc71';
    setTimeout(() => {
        this.textContent = '保存修改';
        this.style.background = '';
    }, 1500);
});

// 2. 头像上传功能
avatarUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    // 简单验证文件类型
    if (!file.type.startsWith('image/')) {
        alert('请选择图片文件！');
        return;
    }

    // 创建文件阅读器来读取图片
    const reader = new FileReader();
    reader.onload = function(e) {
        // 将头像图片更新为上传的图片
        avatar.src = e.target.result;
        
        // 添加一个短暂的缩放动画效果
        avatar.style.transform = 'scale(1.2)';
        setTimeout(() => {
            avatar.style.transform = 'scale(1)';
        }, 300);
    };
    reader.readAsDataURL(file);
});