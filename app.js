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

// 打卡状态：日期 + 哪些勾了，存在一个地方，每天第一次打开自动换天
var d = new Date();
var today = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
var saved = null;
try { saved = JSON.parse(localStorage.getItem('checkin') || 'null'); } catch (e) { saved = null; }
if (!saved || saved.date !== today) {
  saved = { date: today, done: {} };
  // 兼容旧版：如果今天旧的打勾还在，把它搬过来
  if (localStorage.getItem('checkin-date') === today) {
    ['task1', 'task2', 'task3', 'task4', 'task5', 'task6'].forEach(function(id) {
      if (localStorage.getItem(id) === 'yes') saved.done[id] = true;
    });
  }
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

var tasksBox = document.getElementById('tasks');
var weekday = new Date().getDay();
function showToday(t) {
  return !t.days || t.days.indexOf(weekday) !== -1;
}
function renderTasks() {
  tasksBox.innerHTML = '';
  fixedTasks.concat(customTasks).forEach(function(t) {
    if (!showToday(t)) return;
    var label = document.createElement('label');
    var box = document.createElement('input');
    box.type = 'checkbox';
    box.className = 'task';
    box.checked = !!saved.done[t.id];
    box.addEventListener('change', function() {
      saved.done[t.id] = box.checked;
      localStorage.setItem('checkin', JSON.stringify(saved));
      updateProgress();
    });
    var span = document.createElement('span');
    span.textContent = t.text;
    label.appendChild(box);
    label.appendChild(span);
    if (t.custom) {
      var del = document.createElement('button');
      del.textContent = '×';
      del.className = 'del';
      del.addEventListener('click', function(e) {
        e.preventDefault();
        customTasks = customTasks.filter(function(x) { return x.id !== t.id; });
        localStorage.setItem('custom-tasks', JSON.stringify(customTasks));
        delete saved.done[t.id];
        localStorage.setItem('checkin', JSON.stringify(saved));
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
}
renderTasks();

// 自己加任务：输入框 + 添加按钮，回车也行
var newTaskInput = document.getElementById('new-task');
function addTask() {
  var text = newTaskInput.value.trim();
  if (!text) return;
  customTasks.push({ id: 'c' + Date.now(), text: text, custom: true });
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

const words = [
  { en: 'tackle', pos: '动词', cn: '处理；应对' },
  { en: 'barrier', pos: '名词', cn: '障碍' },
  { en: 'phenomenon', pos: '名词', cn: '现象' },
  { en: 'hesitate', pos: '动词', cn: '犹豫' },
  { en: 'undertake', pos: '动词', cn: '承担' },
  { en: 'efficient', pos: '形容词', cn: '高效的' },
  { en: 'glimpse', pos: '动词·名词', cn: '瞥见；一瞥' },
  { en: 'negotiate', pos: '动词', cn: '谈判' },
  { en: 'vivid', pos: '形容词', cn: '生动的' },
  { en: 'dedicate', pos: '动词', cn: '致力于' },
  { en: 'reliable', pos: '形容词', cn: '可靠的' },
  { en: 'welfare', pos: '名词', cn: '福利' },
  { en: 'illustrate', pos: '动词', cn: '说明；阐明' },
  { en: 'launch', pos: '动词·名词', cn: '发起；发射' },
  { en: 'capable', pos: '形容词', cn: '有能力的' },
  { en: 'obstacle', pos: '名词', cn: '障碍' },
  { en: 'fluctuate', pos: '动词', cn: '波动' },
  { en: 'justify', pos: '动词', cn: '证明……正当' },
  { en: 'maintain', pos: '动词', cn: '维持' },
  { en: 'sufficient', pos: '形容词', cn: '足够的' },
  { en: 'comprehensive', pos: '形容词', cn: '全面的' },
  { en: 'diverse', pos: '形容词', cn: '多样的；不同的' },
  { en: 'essential', pos: '形容词', cn: '必要的；本质的' },
  { en: 'facilitate', pos: '动词', cn: '促进；使便利' },
  { en: 'guarantee', pos: '动词·名词', cn: '保证；担保' },
  { en: 'hence', pos: '副词', cn: '因此；由此' },
  { en: 'inevitable', pos: '形容词', cn: '不可避免的' },
  { en: 'judge', pos: '动词·名词', cn: '判断；法官' },
  { en: 'keen', pos: '形容词', cn: '热切的；敏锐的' },
  { en: 'likewise', pos: '副词', cn: '同样地' },
  { en: 'massive', pos: '形容词', cn: '巨大的；大量的' },
  { en: 'nevertheless', pos: '副词', cn: '然而；不过' },
  { en: 'obtain', pos: '动词', cn: '获得' },
  { en: 'potential', pos: '形容词·名词', cn: '潜在的；潜力' },
  { en: 'remarkable', pos: '形容词', cn: '显著的；非凡的' },
  { en: 'sustainable', pos: '形容词', cn: '可持续的' },
  { en: 'trend', pos: '名词', cn: '趋势；倾向' },
  { en: 'unique', pos: '形容词', cn: '独特的；唯一的' },
  { en: 'versatile', pos: '形容词', cn: '多才多艺的；多功能的' },
  { en: 'widespread', pos: '形容词', cn: '普遍的；广泛分布的' }
];
const wordsBox = document.getElementById('words');
words.forEach(function(w) {
  const card = document.createElement('div');
  card.textContent = w.en;
  card.addEventListener('click', function() {
    if (card.textContent === w.en) {
      card.textContent = w.cn + '（' + w.pos + '）';
    } else {
      card.textContent = w.en;
    }
  });
  wordsBox.appendChild(card);
});
