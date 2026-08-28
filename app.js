// Tab 切换
function switchTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(`tab-${tabId}`).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

  if (tabId === 'guestbook') loadGiscus();
  if (tabId === 'readme') loadReadme();
  if (tabId === 'releases') loadReleases();
}
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// 模拟 Release 数据（对应仓库文件状态）
const releases = [
  { v: "v10.0.0", date: "最新", desc: "更新 README 排版、添加留言板与投稿功能" },
  { v: "v9.0.0", date: "历史", desc: "日常资源分享与单词发布" }
];
function loadReleases() {
  const list = document.getElementById('release-list');
  list.innerHTML = releases.map(r => `
    <div class="release-item">
      <h4>📌 ${r.v} <span style="font-size:0.8rem;color:#888">(${r.date})</span></h4>
      <p>${r.desc}</p>
      <div class="release-meta">文件: index.html, guestbook.html, README.md, LICENSE</div>
    </div>
  `).join('');
}

// 投稿表单（跳转 GitHub Issue）
document.getElementById('submit-form').addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('sub-title').value;
  const desc = document.getElementById('sub-desc').value;
  const url = `https://github.com/XZZ-A11Y/Every-day-Share/issues/new?title=${encodeURIComponent('[投稿] '+title)}&body=${encodeURIComponent(desc)}&labels=resource-request`;
  window.open(url, '_blank');
});

// Giscus 留言板（公网生效）
function loadGiscus() {
  const container = document.getElementById('giscus-container');
  if (container.dataset.loaded) return;
  container.innerHTML = '<script src="https://giscus.app/client.js" data-repo="XZZ-A11Y/Every-day-Share" data-repo-id="" data-category="General" data-category-id="" data-mapping="pathname" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="bottom" data-theme="light" data-lang="zh-CN" crossorigin="anonymous" async><\/script>';
  container.dataset.loaded = "1";
}

// README 渲染（提取核心文本）
function loadReadme() {
  const content = document.getElementById('readme-content');
  content.innerHTML = `
    <h3>Every-day-Share</h3>
    <p>开源、免费的日常资源分享与投稿发布平台</p>
    <ul>
      <li>✅ 资源发布与版本管理</li>
      <li>✅ 用户投稿 (GitHub Issue)</li>
      <li>✅ 留言板 (Giscus)</li>
      <li>✅ GPL-3.0 开源协议</li>
    </ul>
    <p>站点 · 博客 · 下载地址</p>
  `;
}

// 初始化
loadReleases();
