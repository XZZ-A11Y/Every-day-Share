<p align="center">
  <img src="https://socialify.git.ci/XZZ-A11Y/Every-day-Share/image?font=Inter&language=1&name=1&owner=1&pattern=Transparent&stargazers=1&theme=Light" alt="Social Preview" width="800"/>
</p>

<div align="center">
  
  <p>开源、免费的日常资源分享与投稿发布平台</p>
  
  [![release](https://img.shields.io/badge/release-v10.0.0-blue.svg)](https://github.com/XZZ-A11Y/Every-day-Share/releases)
  [![license](https://img.shields.io/badge/license-GPL--3.0-orange.svg)](LICENSE)
  [![downloads](https://img.shields.io/badge/downloads-10+-green.svg)](https://github.com/XZZ-A11Y/Every-day-Share/releases)
  [![stars](https://img.shields.io/badge/stars-welcome-blueviolet.svg)](https://github.com/XZZ-A11Y/Every-day-Share/stargazers)
  [![build](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/XZZ-A11Y/Every-day-Share/actions)

  🌐 [站点](https://xzz-a11y.github.io/Every-day-Share/) · [博客](https://blogxzz.gt.tc) · [下载地址](https://github.com/XZZ-A11Y/Every-day-Share/releases)
  
  **[项目官网](https://xzz-a11y.github.io/Every-day-Share/) · [说明文档](https://blogxzz.gt.tc) · [下载地址](https://github.com/XZZ-A11Y/Every-day-Share/releases)**
</div>

---

## ✨ 项目特性

- 📦 **自动发布**：通过 Issue 表单投稿，关闭即自动生成 Release（版本号自动递增 `v1` -> `v2`...）
- 📄 **PDF 附件（可选）**：GitHub Action 支持自动将 Markdown 转换为精美 PDF，随版本发布附带下载
- 🙌 **贡献署名**：自动提取投稿人昵称、收费信息，完整记录在发布正文中
- 🔄 **跨平台**：资源涵盖各类型日常学习资料（如英语四级单词等）
- 🆓 **开源免费**：遵循 GPL-3.0 协议，部分资源支持免费分享

## 🛠️ 程序特性（自动化流程）

- **表单投稿**：集成 GitHub Issue 模板，字段包含贡献者、资源标题、内容、是否收费
- **智能解析**：关闭 Issue 时，Action 自动解析正文，生成标准 Release 描述
- **中文 PDF**：使用 `pandoc + xelatex` 渲染，完美支持中文字体（Noto Sans CJK SC）
- **资产挂载**：自动上传 PDF 文件作为 Release Asset，一键下载
- **标签管理**：自动生成 `v{数字}` 顺序标签，避免重复冲突（当前已发至 v10）

## 📥 下载地址

| 平台 | 说明 | 下载 |
| :--- | :--- | :--- |
| **GitHub Releases** | 最新正式版（含历史资源） | [下载地址](https://github.com/XZZ-A11Y/Every-day-Share/releases/latest) |
| **历史版本** | 往期资源归档（v1~v10） | [查看全部](https://github.com/XZZ-A11Y/Every-day-Share/releases) |
| **Pages 站点** | 静态展示页 | [访问](https://xzz-a11y.github.io/Every-day-Share/) |

## 📝 投稿指南

1. 点击 [新建 Issue](https://github.com/XZZ-A11Y/Every-day-Share/issues/new?template=resource-submit.yml)
2. 填写资源标题、内容、贡献者昵称、是否收费
3. 提交后自动回复，等待管理员审核关闭
4. 关闭后自动触发：
   - 版本号递增（如 `v11`）
   - 生成 Release 正文（含贡献者+收费信息）
   - （若已配置）转换 PDF 并附加到 Release

## 📜 使用协议

本项目遵循 [GPL-3.0](LICENSE) 开源协议。
部分投稿资源可能包含独立授权，请在下载后遵守原作者声明。

## 🙏 支持作者

如果本仓库对你有帮助，欢迎 Star ⭐ 或推荐给更多朋友！

[![Star](https://img.shields.io/github/stars/XZZ-A11Y/Every-day-Share?style=social)](https://github.com/XZZ-A11Y/Every-day-Share/stargazers)

## 相关链接

- GitHub 仓库：https://github.com/XZZ-A11Y/Every-day-Share
- 官方站点：https://xzz-a11y.github.io/Every-day-Share/
- 官方留言板：
- 关联博客：https://blogxzz.gt.tc
