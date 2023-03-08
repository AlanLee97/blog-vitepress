
packages\weex-vue-framework\factory.js
```javascript
// set scope id attribute for scoped CSS.
// this is implemented as a special case to avoid the overhead
// of going through the normal attribute patching process.
function setScope (vnode) {
  var i;
  if (isDef(i = vnode.fnScopeId)) {
    nodeOps.setStyleScope(vnode.elm, i);
  } else {
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
      ancestor = ancestor.parent;
    }
  }
  // for slot content they should also get the scopeId from the host instance.
  if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
     ) {
    nodeOps.setStyleScope(vnode.elm, i);
  }
}
```

src\platforms\web\runtime\node-ops.js
```javascript
export function setStyleScope (node: Element, scopeId: string) {
  node.setAttribute(scopeId, '')
}
```
