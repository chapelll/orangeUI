# Input-输入框

### 预览
---

<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

### 使用
---
```vue
<o-input></o-input>
<o-input readonly></o-input>
<o-input disabled></o-input>
<o-input value="错误信息" error="输入出错"></o-input>
<o-input :value="message" @input="inputChange"></o-input>
<p>value: {{ message }}</p>
```
### 选项

####  1. 只读输入框
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> readonly </span>属性可以将该输入框设置成一个只读的输入框。

####  2. 禁止输入框
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> disabled </span>属性可以将该输入框设置成一个禁止的输入框。

####  3. 提示错误信息
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> error="输入出错" </span>属性可以在右方显示一个提示图标与文本，文本为自己输入的信息。

####  4. 支持双向绑定
通过在data中设置<span style='color:#3eaf7c;background-color:#F8F8F8'> message </span>属性并在输入框上进行绑定属性 <span style='color:#3eaf7c;background-color:#F8F8F8'> :value="message" </span>和绑定输入事件 <span style='color:#3eaf7c;background-color:#F8F8F8'> @input="inputChange" </span>来实现数据的双向绑定。