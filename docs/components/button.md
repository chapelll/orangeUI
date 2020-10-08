# Button-按钮

### 预览
---

<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

### 使用
---
```vue
<o-button>默认按钮</o-button>
<o-button icon="setting">icon按钮</o-button>
<o-button icon="loading">加载中</o-button>
<o-button disabled>禁止按钮</o-button>
```
### 选项

####  1. 设置图标
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> icon </span>属性在 Button 内嵌入一个 Icon。  
####  2. 加载中状态
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> icon = "setting" </span>属性可以在 Button 内嵌入一个不断自转的加载状态图标。  
####  2. 禁止点击
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> disabled </span>属性，使该按钮无法被点击。