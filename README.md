# Serena 的个人博客

一个纯静态的个人博客网站，使用原生 HTML / CSS / JavaScript 手写，无需构建工具。

## 在线预览

推送到 GitHub 后，可在仓库 Settings → Pages 中开启 GitHub Pages。

## 目录结构

```
personalweb/
├── index.html              # 首页：个人简介 + 文章列表（支持标签筛选）
├── archive.html            # 归档页：按时间倒序列出全部文章
├── about.html              # 关于页
├── posts/                  # 文章正文
│   ├── hello-world.html
│   ├── css-flexbox-grid.html
│   ├── git-commands.html
│   └── markdown-guide.html
├── assets/
│   ├── css/style.css       # 全部样式
│   └── js/main.js          # 移动端菜单 / 标签筛选 / 回到顶部
└── README.md
```

## 本地运行

因为是纯静态站点，直接双击 `index.html` 就能看。如果需要本地服务器（推荐）：

```bash
# Python 3
python -m http.server 8000

# 或 Node
npx serve .
```

然后访问 http://localhost:8000

## 新增一篇文章

1. 在 `posts/` 下新建 `xxx.html`，复制任意一篇现有文章作为模板
2. 修改 `<title>`、文章标题、日期、标签和正文
3. 在 `index.html` 的文章列表里加一个 `.post-card`，注意 `data-tags` 要和筛选按钮对应
4. 在 `archive.html` 的归档列表里加一行
5. 更新相邻文章的「上一篇 / 下一篇」链接

## 技术说明

- 纯静态，零依赖，无构建步骤
- 响应式布局，适配手机 / 平板 / 桌面
- 样式使用 CSS 变量，改主题色只需修改 `assets/css/style.css` 顶部的 `:root`
- 文章列表的标签筛选为纯前端实现，无需后端

## 自定义

几个需要替换成你自己信息的地方：

- `index.html`、`about.html` 中的昵称、简介、社交链接
- `assets/css/style.css` 中 `.brand-mark` 的首字母和 `--accent` 主题色
- 页脚的版权信息

## License

MIT
