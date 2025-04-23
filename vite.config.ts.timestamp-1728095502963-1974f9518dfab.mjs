// vite.config.ts
import { defineConfig } from "file:///E:/A_devTool/%E6%98%9F%E7%90%83%E9%A1%B9%E7%9B%AE/partner-frontend/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/A_devTool/%E6%98%9F%E7%90%83%E9%A1%B9%E7%9B%AE/partner-frontend/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///E:/A_devTool/%E6%98%9F%E7%90%83%E9%A1%B9%E7%9B%AE/partner-frontend/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///E:/A_devTool/%E6%98%9F%E7%90%83%E9%A1%B9%E7%9B%AE/partner-frontend/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///E:/A_devTool/%E6%98%9F%E7%90%83%E9%A1%B9%E7%9B%AE/partner-frontend/node_modules/@vant/auto-import-resolver/dist/index.esm.mjs";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()]
    }),
    Components({
      resolvers: [VantResolver()]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxBX2RldlRvb2xcXFxcXHU2NjFGXHU3NDAzXHU5ODc5XHU3NkVFXFxcXHBhcnRuZXItZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXEFfZGV2VG9vbFxcXFxcdTY2MUZcdTc0MDNcdTk4NzlcdTc2RUVcXFxccGFydG5lci1mcm9udGVuZFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovQV9kZXZUb29sLyVFNiU5OCU5RiVFNyU5MCU4MyVFOSVBMSVCOSVFNyU5QiVBRS9wYXJ0bmVyLWZyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSc7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gJ0B2YW50L2F1dG8taW1wb3J0LXJlc29sdmVyJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpXSxcbiAgICB9KSxcblxuICBdLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1UsU0FBUyxvQkFBb0I7QUFDN1YsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsb0JBQW9CO0FBRzdCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxhQUFhLENBQUM7QUFBQSxJQUM1QixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsYUFBYSxDQUFDO0FBQUEsSUFDNUIsQ0FBQztBQUFBLEVBRUg7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
