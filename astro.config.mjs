import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  // 你的自定义域名配置（如果有的话，没有先空着）
  site: 'https://mc.your-domain.com', 
  
  integrations: [
    starlight({
      title: '名字没想好', // 对应 VitePress 的 title
      
      // ✅ 修复：社交链接（顶部右上角）改为数组格式
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/FILLYLIN/player'
        }
        // 可以继续添加更多社交链接
        // {
        //   icon: 'discord',
        //   label: 'Discord',
        //   href: 'https://discord.gg/xxx'
        // }
      ],

      // 侧边栏导航
      sidebar: [
        {
          label: '玩家指南',
          items: [
            { label: '首页', link: '/' },
            { label: '服务器规则', link: '/guide/rules' },
            { label: '如何加入', link: '/guide/join' },
            // 把卫星地图作为外部链接放在这里
            { 
              label: '🌍 卫星地图', 
              link: 'http://map.yourserver.com', 
              attrs: { target: '_blank' } 
            },
            // 把 QQ 群也放在这里方便查找
            { 
              label: '💬 加入 QQ 群', 
              link: 'https://qm.qq.com/q/mjQzjc7Udi', 
              attrs: { target: '_blank' } 
            },
          ],
        },
        {
          label: '技术文档',
          items: [
            { label: '红石限制说明', link: '/guide/redstone-limits' },
            { label: '允许的客户端模组', link: '/guide/allowed-mods' },
          ],
        },
      ],

      // 自定义 CSS（可选，用来微调样式）
      customCss: [
        // './src/styles/custom.css',
      ],
    }),
  ],
});