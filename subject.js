var fixedTasks = [
  { id: 'task1', text: '高数 3 道' },
  { id: 'task2', text: '线代 3 道' },
  { id: 'task3', text: 'C 语言 1 个小程序' },
  { id: 'task4', text: '四级单词 20 个' },
  { id: 'task5', text: '听力 10 分钟' },
  { id: 'task6', text: '技术英语 1 小段' },
  { id: 'task7', text: 'Python 30 分钟' },
  { id: 'task8', text: '本周迷你项目', days: [0, 6] }
];
var subject = new URLSearchParams(window.location.search).get('name') || '地基';
var subjectModules = {
  '地基': ['C语言', '高数', '线代'],
  '英语四级': ['单词', '听力', '阅读', '写作翻译'],
  '前端': ['HTML/CSS/JavaScript', 'TypeScript', 'Vue或React'],
  '后端': ['Python', 'FastAPI/Flask', 'RESTful API', 'MySQL', '向量库'],
  'AI层': ['调大模型API', '提示词工程', 'Function Calling', 'RAG', 'Agent编排', 'MCP'],
  '工程': ['Git', 'Linux', 'Docker', 'CI/CD', '测试'],
  '贯穿': ['业务理解', '英语读文档', 'AI编程工具']
};
var moduleNames = subjectModules[subject] || [];
var currentModule = new URLSearchParams(window.location.search).get('module');
var today = new Date();
function dateText(date) {
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}
function mondayOf(date) {
  var result = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  result.setDate(result.getDate() - ((result.getDay() || 7) - 1));
  return result;
}
function subjectOf(task) {
  var name = task.text || '';
  if (/高数|线代|C语言|C 语言/.test(name)) return '地基';
  if (/四级|单词|听力|英语阅读|写作翻译/.test(name)) return '英语四级';
  if (/HTML|CSS|JavaScript|TypeScript|Vue|React|前端/i.test(name)) return '前端';
  if (/Python|FastAPI|Flask|RESTful|MySQL|向量库|后端/i.test(name)) return '后端';
  if (/大模型|提示词|Function Calling|RAG|Agent|MCP|AI层/i.test(name)) return 'AI层';
  if (/Git|Linux|Docker|CI\/CD|测试|工程/i.test(name)) return '工程';
  if (/业务理解|技术英语|英语读文档|AI编程工具|贯穿/i.test(name)) return '贯穿';
  var custom = [];
  try { custom = JSON.parse(localStorage.getItem('custom-subjects') || '[]'); } catch (e) {}
  for (var i = 0; i < custom.length; i++) {
    if (name.indexOf(custom[i]) !== -1) return custom[i];
  }
  return '';
}
function moduleOf(task) {
  var name = task.text || '';
  var rules = {
    '地基': [['C语言', /C语言|C 语言/], ['高数', /高数/], ['线代', /线代/]],
    '英语四级': [['单词', /单词/], ['听力', /听力/], ['阅读', /阅读/], ['写作翻译', /写作|翻译/]],
    '前端': [['HTML/CSS/JavaScript', /HTML|CSS|JavaScript/i], ['TypeScript', /TypeScript/i], ['Vue或React', /Vue|React/i]],
    '后端': [['Python', /Python/i], ['FastAPI/Flask', /FastAPI|Flask/i], ['RESTful API', /RESTful/i], ['MySQL', /MySQL/i], ['向量库', /向量库/]],
    'AI层': [['调大模型API', /大模型.*API|API.*大模型/i], ['提示词工程', /提示词/], ['Function Calling', /Function Calling/i], ['RAG', /RAG/i], ['Agent编排', /Agent/i], ['MCP', /MCP/i]],
    '工程': [['Git', /Git/i], ['Linux', /Linux/i], ['Docker', /Docker/i], ['CI/CD', /CI\/CD/i], ['测试', /测试/]],
    '贯穿': [['业务理解', /业务理解/], ['英语读文档', /技术英语|英语读文档/], ['AI编程工具', /AI编程工具/i]]
  };
  var entries = rules[subject] || [];
  for (var i = 0; i < entries.length; i++) {
    if (entries[i][1].test(name)) return entries[i][0];
  }
  return task.module || '';
}
function parseValue(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch (e) { return fallback; }
}
var currentWeek = dateText(mondayOf(today));
var weekSelect = document.getElementById('week-select');
for (var offset = -4; offset <= 4; offset++) {
  var monday = mondayOf(today);
  monday.setDate(monday.getDate() + offset * 7);
  var sunday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 6);
  var option = document.createElement('option');
  option.value = dateText(monday);
  option.textContent = (offset === 0 ? '本周 ' : '') + dateText(monday) + ' 至 ' + dateText(sunday);
  weekSelect.appendChild(option);
}
weekSelect.value = currentWeek;
var saved = parseValue('checkin', null);
if (!saved || !saved.done) saved = { date: dateText(today), done: {} };
var customTasks = parseValue('custom-tasks', []);
if (!Array.isArray(customTasks)) customTasks = [];
var priorities = parseValue('task-priorities', {});
if (!priorities || Array.isArray(priorities)) priorities = {};
var title = document.getElementById('subject-title');
title.textContent = subject;
document.title = subject + '学习';
var moduleEntries = document.getElementById('module-entries');
if (moduleNames.length) {
  moduleEntries.hidden = false;
  document.getElementById('subject-content').hidden = !currentModule;
  moduleEntries.classList.toggle('module-page', !!currentModule);
  if (currentModule && moduleNames.indexOf(currentModule) !== -1) {
    title.textContent = currentModule;
    document.title = currentModule + ' | ' + subject;
    document.querySelector('.back-link').href = 'subject.html?name=' + encodeURIComponent(subject);
    document.querySelector('.back-link').textContent = '返回' + subject;
  } else {
    moduleNames.forEach(function(name) {
      var link = document.createElement('a');
      link.className = 'module-entry';
      link.href = 'subject.html?name=' + encodeURIComponent(subject) + '&module=' + encodeURIComponent(name);
      link.textContent = name;
      moduleEntries.appendChild(link);
    });
  }
}
var darkMode = localStorage.getItem('theme-preference') === 'dark';
document.body.classList.toggle('dark-mode', darkMode);
var themeButton = document.getElementById('theme-toggle');
function updateTheme() {
  themeButton.textContent = darkMode ? '日' : '月';
  themeButton.setAttribute('aria-label', darkMode ? '切换浅色模式' : '切换深色模式');
  themeButton.title = darkMode ? '切换浅色模式' : '切换深色模式';
}
updateTheme();
themeButton.addEventListener('click', function() {
  darkMode = !darkMode;
  document.body.classList.toggle('dark-mode', darkMode);
  localStorage.setItem('theme-preference', darkMode ? 'dark' : 'light');
  updateTheme();
});
function render() {
  if (moduleNames.length && !currentModule) return;
  var week = weekSelect.value;
  var replaced = customTasks.some(function(task) { return task.week === week && task.replacement; });
  var weekCustom = customTasks.filter(function(task) { return task.week === week && !task.replacement; });
  var tasks = (replaced ? weekCustom : fixedTasks.concat(weekCustom)).filter(function(task) {
    return subjectOf(task) === subject && (!currentModule || moduleOf(task) === currentModule);
  });
  var doneForWeek = saved.done[week] || {};
  var priorityForWeek = priorities[week] || {};
  var list = document.getElementById('tasks');
  list.innerHTML = '';
  tasks.forEach(function(task) {
    var label = document.createElement('label');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!doneForWeek[task.id];
    checkbox.addEventListener('change', function() {
      if (!saved.done[week]) saved.done[week] = {};
      saved.done[week][task.id] = checkbox.checked;
      localStorage.setItem('checkin', JSON.stringify(saved));
      if (week === currentWeek) {
        var allDailyTasks = (replaced ? weekCustom : fixedTasks.concat(weekCustom)).filter(function(item) {
          return !item.days || item.days.indexOf(today.getDay()) !== -1;
        });
        var totalDone = allDailyTasks.filter(function(item) { return !!saved.done[week][item.id]; }).length;
        var history = parseValue('checkin-history', {});
        history[dateText(today)] = { done: totalDone, total: allDailyTasks.length };
        localStorage.setItem('checkin-history', JSON.stringify(history));
      }
      render();
    });
    var name = document.createElement('span');
    name.textContent = task.text;
    label.appendChild(checkbox);
    label.appendChild(name);
    var priority = document.createElement('select');
    priority.setAttribute('aria-label', '任务优先级');
    [['low', '低'], ['medium', '中'], ['high', '高']].forEach(function(item) {
      var option = document.createElement('option');
      option.value = item[0];
      option.textContent = item[1];
      priority.appendChild(option);
    });
    priority.value = priorityForWeek[task.id] || 'medium';
    priority.addEventListener('change', function() {
      if (!priorities[week]) priorities[week] = {};
      priorities[week][task.id] = priority.value;
      localStorage.setItem('task-priorities', JSON.stringify(priorities));
    });
    label.appendChild(priority);
    list.appendChild(label);
  });
  document.getElementById('empty-state').hidden = tasks.length > 0;
  var completed = tasks.filter(function(task) { return !!doneForWeek[task.id]; }).length;
  var percent = tasks.length ? Math.round(completed / tasks.length * 100) : 0;
  document.getElementById('progress-bar').style.width = percent + '%';
  document.getElementById('progress-text').textContent = percent + '%（' + completed + '/' + tasks.length + '）';
}
weekSelect.addEventListener('change', render);
render();
