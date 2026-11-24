(function () {
  var params = new URLSearchParams(window.location.search), moduleName = params.get('module'), pointIndex = Number(params.get('point'));
  var content = document.getElementById('course-content'), title = document.getElementById('page-title'), back = document.getElementById('back-link');
  document.body.classList.toggle('dark-mode', localStorage.getItem('theme-preference') === 'dark');
  function addLink(label, href, cls) { var a = document.createElement('a'); a.textContent = label; a.href = href; a.className = cls; return a; }
  function findModule() { return cLessons.find(function (item) { return item.name === moduleName; }); }
  function renderExercises(items, parent) {
    items.forEach(function (item, i) {
      var article = document.createElement('article'); article.className = 'exercise';
      var h = document.createElement('h3'); h.textContent = '题' + ['一', '二', '三'][i]; article.appendChild(h);
      var p = document.createElement('p'); p.textContent = item.prompt; article.appendChild(p);
      var input = document.createElement('textarea'); input.className = 'answer-box'; input.placeholder = '在这里写代码...'; article.appendChild(input);
      var btn = document.createElement('button'); btn.className = 'check-answer'; btn.type = 'button'; btn.textContent = '自查'; article.appendChild(btn);
      var reveal = document.createElement('div'); reveal.className = 'answer-reveal'; reveal.hidden = true;
      var answer = document.createElement('pre'); answer.textContent = item.answer; reveal.appendChild(answer);
      var analysis = document.createElement('p'); analysis.textContent = '解析：' + item.analysis; reveal.appendChild(analysis); article.appendChild(reveal);
      btn.addEventListener('click', function () { reveal.hidden = false; btn.textContent = '已显示答案'; btn.disabled = true; }); parent.appendChild(article);
    });
  }
  if (!moduleName) {
    title.textContent = '课程模块';
    cLessons.forEach(function (item) { var card = addLink(item.name, 'c.html?module=' + encodeURIComponent(item.name), 'course-card'); var span = document.createElement('span'); span.textContent = item.points.length + ' 个知识点'; card.appendChild(span); content.appendChild(card); });
  } else if (!params.has('point')) {
    var selected = findModule(); title.textContent = selected ? selected.name : '课程模块'; back.href = 'c.html'; back.textContent = '返回模块';
    (selected ? selected.points : []).forEach(function (item, i) { content.appendChild(addLink(item.title, 'c.html?module=' + encodeURIComponent(moduleName) + '&point=' + i, 'lesson-link')); });
  } else {
    var active = findModule(), point = active && active.points[pointIndex]; back.href = 'c.html?module=' + encodeURIComponent(moduleName); back.textContent = '返回知识点';
    if (point) {
      title.textContent = point.title;
      var section = document.createElement('section'), h2 = document.createElement('h2'), p = document.createElement('p'); h2.textContent = '详细讲解'; p.textContent = point.explanation; section.appendChild(h2); section.appendChild(p); content.appendChild(section);
      section = document.createElement('section'); section.className = 'example'; h2 = document.createElement('h2'); h2.textContent = '经典例题'; section.appendChild(h2); p = document.createElement('p'); p.textContent = point.example.prompt; section.appendChild(p); var pre = document.createElement('pre'); pre.textContent = point.example.code; section.appendChild(pre); p = document.createElement('p'); p.textContent = '解析：' + point.example.analysis; section.appendChild(p); content.appendChild(section);
      section = document.createElement('section'); h2 = document.createElement('h2'); h2.textContent = '练习题'; section.appendChild(h2); renderExercises(point.exercises, section); content.appendChild(section);
    }
  }
}());
