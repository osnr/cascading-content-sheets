const customProperties = {
  content(el, content) {
    el.innerText = eval(content);
  },
  '--on-click': (el, onClick) => {
    el.onclick = eval(`(function(event) { ${onClick} })`)
  }
}
function watchCustomProperties(element) {
  let computedStyle = window.getComputedStyle(element);

  const lastComputedStyle = {};
  for (let key in customProperties) {
    lastComputedStyle[key] = computedStyle.getPropertyValue(key);
  }

  var animate = function () {
    try {
      for (let key in lastComputedStyle) {
        const val = computedStyle.getPropertyValue(key);
        if (val !== lastComputedStyle[key]) {
          customProperties[key](element, val);
          lastComputedStyle[key] = val;
        }
      }
    } catch (e) { console.error(e); }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
};
[...document.querySelectorAll('body *')].forEach(el => watchCustomProperties(el));
