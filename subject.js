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
var subject = new URLSearchParams(window.location.search).get('name') || '高数';
var moduleNames = ['现代文阅读', '古代诗文阅读', '文言文阅读', '语言文字运用', '名句名篇默写', '写作'];
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
  if (name.indexOf('语文') !== -1) return '语文';
  if (name.indexOf('高数') !== -1) return '高数';
  if (name.indexOf('线代') !== -1) return '线代';
  if (name.indexOf('C') !== -1) return 'C语言';
  if (name.indexOf('四级') !== -1 || name.indexOf('英语') !== -1) return '英语';
  if (name.indexOf('Python') !== -1) return 'Python';
  var custom = [];
  try { custom = JSON.parse(localStorage.getItem('custom-subjects') || '[]'); } catch (e) {}
  for (var i = 0; i < custom.length; i++) {
    if (name.indexOf(custom[i]) !== -1) return custom[i];
  }
  return '';
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
if (subject === '语文') {
  moduleEntries.hidden = false;
  document.getElementById('subject-content').hidden = !currentModule;
  moduleEntries.classList.toggle('module-page', !!currentModule);
  if (currentModule && moduleNames.indexOf(currentModule) !== -1) {
    title.textContent = currentModule;
    document.title = currentModule + ' | 语文学习';
    document.querySelector('.back-link').href = 'subject.html?name=' + encodeURIComponent('语文');
    document.querySelector('.back-link').textContent = '返回语文';
    document.getElementById('subject-content').classList.toggle('literary', [1, 2, 4].indexOf(moduleNames.indexOf(currentModule)) !== -1);
  } else {
    moduleNames.forEach(function(name, index) {
      var link = document.createElement('a');
      link.className = 'module-entry';
      if ([1, 2, 4].indexOf(index) !== -1) link.classList.add('literary');
      link.href = 'subject.html?name=' + encodeURIComponent('语文') + '&module=' + encodeURIComponent(name);
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
  if (subject === '语文' && !currentModule) return;
  var week = weekSelect.value;
  var replaced = customTasks.some(function(task) { return task.week === week && task.replacement; });
  var weekCustom = customTasks.filter(function(task) { return task.week === week && !task.replacement; });
  var tasks = (replaced ? weekCustom : fixedTasks.concat(weekCustom)).filter(function(task) {
    return subjectOf(task) === subject && (!currentModule || task.module === currentModule || task.text.indexOf(currentModule) !== -1);
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
