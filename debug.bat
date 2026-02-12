# 1. 确保目录存在
New-Item -Path src\content\docs\guide -ItemType Directory -Force

# 2. 删除可能存在的旧文件（如果存在）
Remove-Item src\content\docs\guide\join.mdx -Force -ErrorAction SilentlyContinue

# 3. 创建全新的 join.mdx
@"
---
title: '如何加入服务器'
description: 'Minecraft 服务器加入指南'
---

# 如何加入服务器

## 服务器地址

`play.yourserver.com`

## 如何连接

1. 打开 Minecraft
2. 点击“多人游戏”
3. 点击“添加服务器”
4. 输入地址：`play.yourserver.com`
5. 加入游戏

## 注意事项

- 请确保使用正确的 Minecraft 版本
- 首次加入可能需要等待资源包下载
- 遇到问题请加入 QQ 群咨询
"@ | Out-File -FilePath src\content\docs\guide\join.mdx -Encoding UTF8

# 4. 验证文件是否创建成功
Write-Host "`n文件已创建在：" -ForegroundColor Green
Resolve-Path src\content\docs\guide\join.mdx

# 5. 显示文件内容前几行
Write-Host "`n文件内容预览：" -ForegroundColor Yellow
Get-Content src\content\docs\guide\join.mdx -TotalCount 10