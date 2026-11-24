// 今日任务：固定任务 + 自己加的任务，存在浏览器里
// days 不写 = 每天都显示；[1,2,3,4,5] = 仅周一到周五；[0,6] = 仅周末（0=周日，6=周六）
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

// 周期表：用每周周一的日期做周编号，避免不同年份串在一起
var d = new Date();
var today = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
var darkMode = localStorage.getItem('theme-preference') === 'dark';
if (darkMode) document.body.classList.add('dark-mode');
function updateThemeButton() {
  var button = document.getElementById('theme-toggle');
  button.textContent = darkMode ? '日' : '月';
  button.setAttribute('aria-label', darkMode ? '切换浅色模式' : '切换深色模式');
  button.title = darkMode ? '切换浅色模式' : '切换深色模式';
}
updateThemeButton();
function dateText(date) {
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}
function mondayOf(date) {
  var result = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  var day = result.getDay() || 7;
  result.setDate(result.getDate() - day + 1);
  return result;
}
var currentWeek = dateText(mondayOf(d));
var selectedWeek = currentWeek;
var selectedSubject = '全部';
var checkinHistory = {};
try { checkinHistory = JSON.parse(localStorage.getItem('checkin-history') || '{}'); } catch (e) { checkinHistory = {}; }
if (!checkinHistory || Array.isArray(checkinHistory)) checkinHistory = {};
var baseSubjects = ['全部', '高数', '线代', 'C语言', '英语', 'Python'];
var customSubjects = [];
try { customSubjects = JSON.parse(localStorage.getItem('custom-subjects') || '[]'); } catch (e) { customSubjects = []; }
if (!Array.isArray(customSubjects)) customSubjects = [];
customSubjects = customSubjects.filter(function(name, index, all) {
  return typeof name === 'string' && name.trim() && baseSubjects.indexOf(name) === -1 && all.indexOf(name) === index;
});

// 打卡状态仍存在 checkin；done 里面按周分开。每天第一次打开会清空所有周的勾。
var saved = null;
try { saved = JSON.parse(localStorage.getItem('checkin') || 'null'); } catch (e) { saved = null; }
if (!saved || saved.date !== today) {
  saved = { date: today, done: {} };
  // 兼容旧版：如果今天旧的打勾还在，把它搬过来
  if (localStorage.getItem('checkin-date') === today) {
    ['task1', 'task2', 'task3', 'task4', 'task5', 'task6'].forEach(function(id) {
      if (localStorage.getItem(id) === 'yes') {
        if (!saved.done[currentWeek]) saved.done[currentWeek] = {};
        saved.done[currentWeek][id] = true;
      }
    });
  }
  localStorage.setItem('checkin', JSON.stringify(saved));
}
// 兼容上一版扁平的 done：把今天已有的勾放进本周
var oldDone = saved.done || {};
var hasOldDone = Object.keys(oldDone).some(function(key) { return typeof oldDone[key] === 'boolean'; });
if (hasOldDone) {
  saved.done = {};
  saved.done[currentWeek] = oldDone;
  localStorage.setItem('checkin', JSON.stringify(saved));
}
// 旧的零散 key 清掉
['task1', 'task2', 'task3', 'task4', 'task5', 'task6', 'checkin-date'].forEach(function(k) {
  localStorage.removeItem(k);
});

function loadCustom() {
  try { return JSON.parse(localStorage.getItem('custom-tasks') || '[]'); } catch (e) { return []; }
}
var customTasks = loadCustom();
// 兼容旧任务：没有 week 的任务属于本周
customTasks.forEach(function(t) { if (!t.week) t.week = currentWeek; });
localStorage.setItem('custom-tasks', JSON.stringify(customTasks));

function loadPriorities() {
  try { return JSON.parse(localStorage.getItem('task-priorities') || '{}'); } catch (e) { return {}; }
}
var priorities = loadPriorities();
// 兼容旧优先级：旧的任务 id 映射搬到本周
var hasOldPriority = Object.keys(priorities).some(function(key) { return typeof priorities[key] === 'string'; });
if (hasOldPriority) {
  var oldPriorities = priorities;
  priorities = {};
  priorities[currentWeek] = oldPriorities;
  localStorage.setItem('task-priorities', JSON.stringify(priorities));
}

function weekDone() {
  if (!saved.done[selectedWeek]) saved.done[selectedWeek] = {};
  return saved.done[selectedWeek];
}
function weekPriorities() {
  if (!priorities[selectedWeek]) priorities[selectedWeek] = {};
  return priorities[selectedWeek];
}

// 默认显示本周，也可以查看前后四周
var weekSelect = document.getElementById('week-select');
for (var offset = -4; offset <= 4; offset++) {
  var monday = mondayOf(d);
  monday.setDate(monday.getDate() + offset * 7);
  var sunday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 6);
  var option = document.createElement('option');
  option.value = dateText(monday);
  option.textContent = (offset === 0 ? '本周 ' : '') + dateText(monday) + ' 至 ' + dateText(sunday);
  weekSelect.appendChild(option);
}
weekSelect.value = currentWeek;

var tasksBox = document.getElementById('tasks');
document.getElementById('theme-toggle').addEventListener('click', function() {
  darkMode = !darkMode;
  document.body.classList.toggle('dark-mode', darkMode);
  localStorage.setItem('theme-preference', darkMode ? 'dark' : 'light');
  updateThemeButton();
});
var weekday = new Date().getDay();
function subjectOf(task) {
  var name = task.text || '';
  if (name.indexOf('高数') !== -1) return '高数';
  if (name.indexOf('线代') !== -1) return '线代';
  if (name.indexOf('C') !== -1) return 'C语言';
  if (name.indexOf('四级') !== -1 || name.indexOf('英语') !== -1) return '英语';
  if (name.indexOf('Python') !== -1) return 'Python';
  // 未匹配到内置学科时，再检查用户添加的学科
  for (var i = 0; i < customSubjects.length; i++) {
    if (name.indexOf(customSubjects[i]) !== -1) return customSubjects[i];
  }
  return '';
}
function renderSubjects() {
  var subjectsBox = document.getElementById('subjects');
  subjectsBox.innerHTML = '';
  baseSubjects.concat(customSubjects).forEach(function(subject) {
    var button = document.createElement('button');
    button.type = 'button';
    button.textContent = subject;
    button.className = subject === selectedSubject ? 'subject active' : 'subject';
    button.addEventListener('click', function() {
      selectedSubject = subject;
      renderSubjects();
      renderTasks();
    });
    subjectsBox.appendChild(button);
  });
}
renderSubjects();

function addSubject() {
  var input = document.getElementById('new-subject');
  var name = input.value.trim();
  if (!name || baseSubjects.indexOf(name) !== -1 || customSubjects.indexOf(name) !== -1) return;
  customSubjects.push(name);
  localStorage.setItem('custom-subjects', JSON.stringify(customSubjects));
  input.value = '';
  selectedSubject = name;
  renderSubjects();
  renderTasks();
}
document.getElementById('add-subject').addEventListener('click', addSubject);
document.getElementById('new-subject').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addSubject();
});

function showToday(t) {
  return !t.days || t.days.indexOf(weekday) !== -1;
}
function renderTasks() {
  tasksBox.innerHTML = '';
  var replaced = customTasks.some(function(t) {
    return t.week === selectedWeek && t.replacement;
  });
  var weekTasks = customTasks.filter(function(t) {
    return t.week === selectedWeek && !t.replacement;
  });
  var rank = { high: 0, medium: 1, low: 2 };
  var allTasks = (replaced ? weekTasks : fixedTasks.concat(weekTasks)).filter(function(task) {
    return showToday(task) && (selectedSubject === '全部' || subjectOf(task) === selectedSubject);
  });
  allTasks.sort(function(a, b) {
    return rank[weekPriorities()[a.id] || 'medium'] - rank[weekPriorities()[b.id] || 'medium'];
  });
  allTasks.forEach(function(t) {
    var label = document.createElement('label');
    var box = document.createElement('input');
    box.type = 'checkbox';
    box.className = 'task';
    box.checked = !!weekDone()[t.id];
    box.addEventListener('change', function() {
      weekDone()[t.id] = box.checked;
      localStorage.setItem('checkin', JSON.stringify(saved));
      updateProgress();
    });
    var span = document.createElement('span');
    span.textContent = t.text;
    label.appendChild(box);
    label.appendChild(span);
    var priority = document.createElement('select');
    priority.className = 'priority';
    [['low', '低'], ['medium', '中'], ['high', '高']].forEach(function(item) {
      var option = document.createElement('option');
      option.value = item[0];
      option.textContent = item[1];
      priority.appendChild(option);
    });
    priority.value = weekPriorities()[t.id] || 'medium';
    priority.title = '任务优先级';
    priority.addEventListener('change', function() {
      weekPriorities()[t.id] = priority.value;
      localStorage.setItem('task-priorities', JSON.stringify(priorities));
      renderTasks();
    });
    label.appendChild(priority);
    if (t.custom) {
      var del = document.createElement('button');
      del.textContent = '×';
      del.className = 'del';
      del.addEventListener('click', function(e) {
        e.preventDefault();
        customTasks = customTasks.filter(function(x) { return x.id !== t.id; });
        localStorage.setItem('custom-tasks', JSON.stringify(customTasks));
        delete weekDone()[t.id];
        delete weekPriorities()[t.id];
        localStorage.setItem('checkin', JSON.stringify(saved));
        localStorage.setItem('task-priorities', JSON.stringify(priorities));
        renderTasks();
      });
      label.appendChild(del);
    }
    tasksBox.appendChild(label);
  });
  updateProgress();
}

// 今日进度：打了几个勾 / 今天一共几项
function updateProgress() {
  var boxes = document.querySelectorAll('.task');
  var total = boxes.length;
  var done = 0;
  boxes.forEach(function(b) { if (b.checked) done++; });
  var pct = total ? Math.round(done / total * 100) : 0;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-text').textContent = '今日进度：' + pct + '%（' + done + '/' + total + '）';
  recordTodayHistory(done, total);
  renderHeatmap();
}

function recordTodayHistory(done, total) {
  if (selectedSubject !== '全部') return;
  checkinHistory[today] = { done: done, total: total };
  localStorage.setItem('checkin-history', JSON.stringify(checkinHistory));
  updateStreak();
}

function dateKey(date) {
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

function updateStreak() {
  var streak = 0;
  var cursor = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  while (true) {
    var record = checkinHistory[dateKey(cursor)];
    if (!record || Number(record.done) < 1) break;
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  document.getElementById('streak-text').textContent = '已连续打卡 ' + streak + ' 天';
}

function renderHeatmap() {
  var box = document.getElementById('heatmap');
  box.innerHTML = '';
  updateStreak();
  var end = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  var start = new Date(end.getFullYear(), end.getMonth(), end.getDate() - 83);
  for (var i = 0; i < 84; i++) {
    var date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
    var key = dateKey(date);
    var record = checkinHistory[key];
    var cell = document.createElement('button');
    cell.type = 'button';
    cell.className = 'heat-cell';
    cell.setAttribute('role', 'gridcell');
    cell.title = key + '：' + (record ? record.done : 0) + ' 个任务';
    var level = record && record.total ? Math.ceil(record.done / record.total * 4) : 0;
    cell.classList.add('heat-level-' + Math.min(level, 4));
    cell.addEventListener('click', (function(dateKeyValue, recordValue) {
      return function() {
        document.getElementById('heatmap-detail').textContent = dateKeyValue + '：完成 ' + (recordValue ? recordValue.done : 0) + ' 个任务';
      };
    })(key, record));
    box.appendChild(cell);
  }
}
renderTasks();
weekSelect.addEventListener('change', function() {
  selectedWeek = weekSelect.value;
  document.getElementById('upload-status').textContent = '';
  renderTasks();
});

// 上传 md：每个以 “-” 开头的非空行，变成当前周的一项任务
var mdFile = document.getElementById('md-file');
document.getElementById('upload-md').addEventListener('click', function() {
  mdFile.click();
});
mdFile.addEventListener('change', function() {
  var file = mdFile.files[0];
  if (!file) return;
  var uploadWeek = selectedWeek;
  var reader = new FileReader();
  reader.addEventListener('load', function() {
    var lines = String(reader.result).split(/\r?\n/).map(function(line) {
      var match = line.match(/^\s*-\s+(.+?)\s*$/);
      return match ? match[1] : '';
    }).filter(Boolean);
    if (!lines.length) {
      document.getElementById('upload-status').textContent = '没有找到以 - 开头的任务';
      mdFile.value = '';
      return;
    }

    // 只替换上传时选中的周，其他周的数据保持原样
    customTasks = customTasks.filter(function(t) { return t.week !== uploadWeek; });
    customTasks.push({ id: 'replacement-' + uploadWeek, week: uploadWeek, replacement: true });
    lines.forEach(function(text, index) {
      customTasks.push({
        id: 'md-' + uploadWeek + '-' + Date.now() + '-' + index,
        text: text,
        custom: true,
        week: uploadWeek
      });
    });
    saved.done[uploadWeek] = {};
    priorities[uploadWeek] = {};
    localStorage.setItem('custom-tasks', JSON.stringify(customTasks));
    localStorage.setItem('checkin', JSON.stringify(saved));
    localStorage.setItem('task-priorities', JSON.stringify(priorities));
    document.getElementById('upload-status').textContent = '已导入 ' + lines.length + ' 项任务';
    mdFile.value = '';
    if (selectedWeek === uploadWeek) renderTasks();
  });
  reader.readAsText(file, 'UTF-8');
});

// 自己加任务：输入框 + 添加按钮，回车也行
var newTaskInput = document.getElementById('new-task');
function addTask() {
  var text = newTaskInput.value.trim();
  if (!text) return;
  customTasks.push({ id: 'c' + Date.now(), text: text, custom: true, week: selectedWeek });
  localStorage.setItem('custom-tasks', JSON.stringify(customTasks));
  newTaskInput.value = '';
  renderTasks();
}
document.getElementById('add-task').addEventListener('click', addTask);
newTaskInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addTask();
});

const targets = [
  { name: 'Python 第一课 + 第一次 API 调用', date: '2026-11-21' },
  { name: '错题检错', date: '2026-11-23' },
  { name: '11 月结束', date: '2026-11-30' }
];
const list = document.getElementById('countdowns');
targets.forEach(function(t) {
  const days = Math.ceil((new Date(t.date) - new Date()) / 86400000);
  const li = document.createElement('li');
  li.textContent = t.name + '：还剩 ' + days + ' 天';
  list.appendChild(li);
});

