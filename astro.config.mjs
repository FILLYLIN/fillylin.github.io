import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://mc.asahi-rokka.top',
  
  integrations: [
    starlight({
      title: '名字没想好',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/FILLYLIN/player'
        },
      ],

      // 侧边栏导航
      sidebar: [
        {
          label: '玩家指南',
          items: [
            { label: '首页', link: '/' },
            { label: '服务器规则', link: './guide/rules' },
            { label: '如何加入', link: './guide/join' },
            // 把卫星地图作为外部链接放在这里
            { 
              label: '🌍 卫星地图', 
              link: 'http://43.248.187.86:26275/', 
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
            { label: '生存说明', link: './guide/survival' },
            { label: '允许的客户端模组', link: './guide/allowed-mods' },
          ],
        },
      ],
      customCss: 
      [
       './src/assets/custom.css',
      ],
    }),
  ],
});
