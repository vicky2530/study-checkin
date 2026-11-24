var cLessons = [
  { name: '基础入门', lessons: [
    { title: '第 1 课：第一个 C 程序', explanation: '认识 main 函数、头文件和 printf，理解程序从 main 开始执行。', code: '#include <stdio.h>\n\nint main(void) {\n    printf("Hello, C!\\n");\n    return 0;\n}', exercise: '修改程序，让它分两行输出你的姓名和学习目标。' },
    { title: '第 2 课：变量与数据类型', explanation: '使用 int、double 和 char 保存不同类型的数据，并用合适的格式符输出。', code: 'int age = 18;\ndouble score = 92.5;\nchar level = 65;\nprintf("%d %.1f %c\\n", age, score, level);', exercise: '定义身高、体重和等级三个变量，并把它们输出。' }
  ]},
  { name: '条件判断', lessons: [
    { title: '第 1 课：if 与 else', explanation: '条件表达式为真时执行 if 分支，否则执行 else 分支。', code: 'int score = 85;\nif (score >= 60) {\n    printf("及格\\n");\n} else {\n    printf("继续努力\\n");\n}', exercise: '输入一个整数，判断它是正数、负数还是零。' },
    { title: '第 2 课：switch 多分支', explanation: '当一个值需要匹配多个固定选项时，可以使用 switch 组织分支。', code: 'switch (day) {\ncase 1: printf("周一"); break;\ncase 2: printf("周二"); break;\ndefault: printf("其他");\n}', exercise: '用 switch 根据 1 到 4 输出春、夏、秋、冬。' }
  ]},
  { name: '循环', lessons: [
    { title: '第 1 课：for 循环', explanation: 'for 循环适合已知重复次数的任务，由初始化、条件和更新三部分组成。', code: 'int sum = 0;\nfor (int i = 1; i <= 100; i++) {\n    sum += i;\n}\nprintf("%d\\n", sum);', exercise: '用 for 循环计算 1 到 20 中所有偶数的和。' },
    { title: '第 2 课：while 循环', explanation: 'while 会在条件为真时持续执行，适合重复次数不确定的场景。', code: 'int n = 3;\nwhile (n > 0) {\n    printf("%d\\n", n);\n    n--;\n}', exercise: '使用 while 循环输出 10 到 1 的倒序数字。' }
  ]},
  { name: '数组', lessons: [
    { title: '第 1 课：一维数组', explanation: '数组在连续内存中保存相同类型的数据，下标从 0 开始。', code: 'int scores[3] = {88, 92, 79};\nfor (int i = 0; i < 3; i++) {\n    printf("%d\\n", scores[i]);\n}', exercise: '创建一个含 5 个整数的数组，找出其中的最大值。' },
    { title: '第 2 课：字符数组', explanation: 'C 字符串是以空字符结尾的字符数组，可以用 %s 输出。', code: 'char name[] = "Codex";\nprintf("%s\\n", name);', exercise: '读取一个单词，统计它包含多少个字符。' }
  ]},
  { name: '函数', lessons: [
    { title: '第 1 课：定义与调用函数', explanation: '函数把一段逻辑封装为可复用单元，通过参数接收数据，通过返回值给出结果。', code: 'int add(int a, int b) {\n    return a + b;\n}\n\nint result = add(3, 5);', exercise: '编写 max 函数，返回两个整数中较大的一个。' },
    { title: '第 2 课：作用域', explanation: '局部变量只在所在代码块内有效，不同函数可以拥有同名局部变量。', code: 'void show(void) {\n    int count = 1;\n    printf("%d\\n", count);\n}', exercise: '写两个函数，各自定义同名变量并输出，观察它们互不影响。' }
  ]},
  { name: '指针', lessons: [
    { title: '第 1 课：地址与指针', explanation: '指针保存变量的内存地址，& 获取地址，* 访问地址指向的值。', code: 'int value = 10;\nint *p = &value;\n*p = 20;\nprintf("%d\\n", value);', exercise: '用指针把一个整数变量的值增加 5。' },
    { title: '第 2 课：指针参数', explanation: '把变量地址传给函数后，函数可以直接修改调用者的变量。', code: 'void swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}', exercise: '编写函数，通过指针同时返回两个数的和与差。' }
  ]},
  { name: '结构体', lessons: [
    { title: '第 1 课：定义结构体', explanation: '结构体把不同类型的字段组合成一个完整的数据对象。', code: 'struct Student {\n    char name[20];\n    int age;\n    double score;\n};', exercise: '定义 Book 结构体，包含书名、价格和页数。' },
    { title: '第 2 课：结构体变量', explanation: '使用点运算符访问结构体变量的字段，结构体也可以组成数组。', code: 'struct Student s = {"Lin", 18, 95.0};\nprintf("%s %.1f\\n", s.name, s.score);', exercise: '创建 3 个学生的结构体数组，输出成绩最高的学生。' }
  ]}
];
