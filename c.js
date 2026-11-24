var params = new URLSearchParams(window.location.search);
var moduleName = params.get('module');
var lessonIndex = Number(params.get('lesson'));
var content = document.getElementById('course-content');
var title = document.getElementById('page-title');
var back = document.getElementById('back-link');
document.body.classList.toggle('dark-mode', localStorage.getItem('theme-preference') === 'dark');
function findModule() { return cLessons.find(function(item) { return item.name === moduleName; }); }
if (!moduleName) {
  cLessons.forEach(function(item) {
    var link = document.createElement('a');
    link.className = 'course-card';
    link.href = 'c.html?module=' + encodeURIComponent(item.name);
    link.innerHTML = '<strong>' + item.name + '</strong><span>' + item.lessons.length + ' 课</span>';
    content.appendChild(link);
  });
} else if (!params.has('lesson')) {
  var selectedModule = findModule();
  title.textContent = selectedModule ? selectedModule.name : '课程模块';
  back.href = 'c.html';
  back.textContent = '返回模块';
  (selectedModule ? selectedModule.lessons : []).forEach(function(lesson, index) {
    var link = document.createElement('a');
    link.className = 'lesson-link';
    link.href = 'c.html?module=' + encodeURIComponent(selectedModule.name) + '&lesson=' + index;
    link.textContent = lesson.title;
    content.appendChild(link);
  });
} else {
  var activeModule = findModule();
  var lesson = activeModule && activeModule.lessons[lessonIndex];
  back.href = 'c.html?module=' + encodeURIComponent(moduleName);
  back.textContent = '返回课列表';
  if (lesson) {
    title.textContent = lesson.title;
    content.innerHTML = '<section><h2>讲解</h2><p>' + lesson.explanation + '</p></section><section><h2>示例代码</h2><pre><code></code></pre></section><section><h2>练习题</h2><p>' + lesson.exercise + '</p></section>';
    content.querySelector('code').textContent = lesson.code;
  }
}
