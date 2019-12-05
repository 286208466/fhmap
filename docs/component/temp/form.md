## Functions

<dl>
<dt><a href="#validate">validate(selector, callback, [options])</a></dt>
<dd><p>表单校验</p>
</dd>
<dt><a href="#checkIfBlur">checkIfBlur(selector, [options])</a></dt>
<dd><p>checkIfBlur 当表单的input失去焦点时校验</p>
</dd>
<dt><a href="#showErrorTips">showErrorTips(error)</a></dt>
<dd><p>showErrorTips 显示错误提示</p>
</dd>
<dt><a href="#hideErrorTips">hideErrorTips(ele)</a></dt>
<dd><p>hideErrorTips 隐藏错误提示</p>
</dd>
</dl>

<a name="validate"></a>

## validate(selector, callback, [options])
表单校验

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | 表单的selector |
| callback | <code>function</code> | 校验后的回调 |
| [options] | <code>Object</code> | 配置项 |
| [options.regexp] | <code>object</code> | 表单所需的正则表达式 |

**Example**  
##### 普通input的HTML
<a name="checkIfBlur"></a>

## checkIfBlur(selector, [options])
checkIfBlur 当表单的input失去焦点时校验

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | 表单的selector |
| [options] | <code>Object</code> | 配置项 |
| [options.regexp] | <code>object</code> | 表单所需的正则表达式 |

**Example**  
```js
weui.form.checkIfBlur('#form', {
```
<a name="showErrorTips"></a>

## showErrorTips(error)
showErrorTips 显示错误提示

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>Object</code> | 错误数据 |
| error.ele | <code>string</code> | 出错了的dom元素 |
| error.msg | <code>string</code> | 出错了的msg。会根据此`msg`找到对应的`Tips`（比如`msg`是`empty`），那么`ele`上的`emptyTips`就会以`topTips`显示 |

**Example**  
```js
weui.form.showErrorTips({
```
<a name="hideErrorTips"></a>

## hideErrorTips(ele)
hideErrorTips 隐藏错误提示

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ele | <code>Object</code> | dom元素 |

**Example**  
```js
weui.form.hideErrorTips(document.getElementById("xxxInput"));
```