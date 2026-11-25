/* C 语言学习页内容数据：7 模块 / 22 知识点 / 110 道题 / 错题库
   讲解、易错点、经典例题按《C 语言学习》Word 文档详细版编写；
   题目按 PTA 习题集、谭浩强《C 程序设计》、洛谷入门题单等规格编写；
   自编综合题如实标注“综合自编题”。
   挂载为 window.C_LESSONS，供 c.html 引用渲染。 */
window.C_LESSONS = {
  "modules": [
    {
      "id": "m1",
      "num": "01",
      "title": "基础入门",
      "desc": "从概念到代码，按顺序掌握本模块核心能力。5 个知识点 / 25 道题",
      "topics": [
        {
          "id": "m1t1",
          "title": "程序结构与输出",
          "explain": [
            {
              "h": "一个 C 程序长什么样",
              "b": "一个 C 程序是由函数组成的，函数就是一段一段的代码块。程序里可以有很多函数，但入口只有一个，就是 main 函数，程序从 main 函数的第一条语句开始执行，一直执行到 main 里的 return 才结束。你可以把 main 想成程序的大门，电脑一运行程序，就先走进这扇门。写一个最简单的程序分 4 步：第 1 步：写上 #include <stdio.h>，把标准输入输出库引进来，这样后面才能用 printf；第 2 步：写 int main() {，告诉电脑程序从这里开始；第 3 步：在大括号里面写要做的事，比如用 printf 输出一句话；第 4 步：写 return 0;，表示程序正常结束，再补上右大括号。记住这个骨架，以后程序再复杂，都是在这个骨架上往里加东西。",
              "code": "#include <stdio.h>\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}"
            },
            {
              "h": "printf 是怎么输出的",
              "b": "printf 是 C 语言里最常用的输出函数，作用就是把东西打印到屏幕上。它的用法很直白：双引号里写什么，屏幕上就原样显示什么，比如 printf(\"Hello World\\n\"); 就会在屏幕上打出 Hello World 这几个字。里面有几个特殊写法要记住：\\n 表示换行，打印完这一行就换到下一行去；%d 是一个占位符，输出的时候会被后面给的值替换掉，比如 printf(\"和=%d\", 8); 会打出“和=8”。如果想在输出的文字里显示一个真正的双引号，不能直接写 \"，因为电脑会以为字符串到这里就结束了，要写成 \\\" 才行，这叫转义字符。还有一个规矩：printf 后面一定要加分号，这是每条语句的结束标志。",
              "code": "int a = 3, b = 5;\nprintf(\"和=%d 差=%d\\n\", a + b, a - b);\n// 输出：和=8 差=-2"
            },
            {
              "h": "程序是怎么一步步跑起来的",
              "b": "电脑执行一个 C 程序不是一下子全跑完的，而是一条语句一条语句按顺序往下走的，弄清这个顺序，写代码心里才有底。以打印两行文字为例，执行过程是这样的：第 1 步：执行 #include <stdio.h>，把标准输入输出库的内容接进来，这样 printf 才能用；第 2 步：进入 main 函数，从它的第一条语句开始执行；第 3 步：执行第一个 printf(\"Hello World\\n\");，屏幕上打出第一行 Hello World，然后 \\n 让光标换到下一行；第 4 步：执行第二个 printf，屏幕上打出第二行文字，同样换行；第 5 步：执行 return 0;，告诉电脑程序正常结束了，程序退出。只要记住“从上往下、一条一条来”，以后读任何程序都按这个顺序一步一步跟，就不会晕。",
              "code": ""
            },
            {
              "h": "动手写第一个程序",
              "b": "学编程最好的办法就是自己动手敲一遍，光看是记不住的。第一个程序就写经典的 Hello World：先在编辑器里新建一个 .c 文件，把骨架敲出来，再在 main 里面写 printf(\"Hello World\\n\");，保存后编译运行，屏幕上出现 Hello World 就成功了。熟练后可以试着改一改：第 1 步：把 Hello World 换成自己的名字，看看输出会不会跟着变；第 2 步：再加一个 printf，打出第二行字，比如你的学校和专业；第 3 步：试试只用一个 printf 打出两行字，在字符串中间再写一个 \\n 就行，比如 printf(\"Hello\\nWorld\\n\");，第一个 \\n 换行，第二个 \\n 再换行。改完每次都编译运行看结果，输出和你想的一样，就说明真的理解了。",
              "code": "#include <stdio.h>\nint main() {\n    printf(\"Hello\\nWorld\\n\");\n    return 0;\n}"
            }
          ],
          "pitfalls": [
            {
              "wrong": "printf(\"Hello\");\n// 漏了分号，写成 printf(\"Hello\")",
              "correct": "printf(\"Hello\");\n// 每条语句结束都要加分号",
              "note": "C 语言里每条语句结束都要加分号，少了分号编译会直接报错，连运行都运行不了。这是最常见的低级错误，写完一行就顺手检查一下分号有没有漏。"
            },
            {
              "wrong": "int Main() {\n    printf(\"Hello\\n\");\n    return 0;\n}",
              "correct": "int main() {\n    printf(\"Hello\\n\");\n    return 0;\n}",
              "note": "main 只能全部小写，写成 Main 编译器根本不认识，会报错说找不到入口。C 语言区分大小写，main、printf、int 这些关键字都要按小写写。"
            },
            {
              "wrong": "printf(\"Hello World\");\nprintf(\"我开始学 C 语言了\");",
              "correct": "printf(\"Hello World\\n\");\nprintf(\"我开始学 C 语言了\\n\");",
              "note": "不写 \\n 就不会换行，两句话会挤在同一行显示。想让每句话各占一行，每句末尾都要加 \\n。"
            }
          ],
          "example": {
            "title": "打印两行文字",
            "code": "#include <stdio.h>\nint main() {\n    printf(\"Hello World\\n\");\n    printf(\"我开始学 C 语言了\\n\");\n    return 0;\n}",
            "analysis": "这个例题用了两个 printf，各打印一行文字。程序从 main 的第一条语句开始跑：第 1 步执行第一个 printf，屏幕上打出 Hello World，末尾的 \\n 让光标换到下一行；第 2 步执行第二个 printf，屏幕上打出“我开始学 C 语言了”，同样换行；第 3 步执行 return 0，程序正常结束。关键就是 \\n 的作用：没有它，两行字会连在同一行。记住这个套路，想打几行字就写几个 printf，每句末尾加 \\n。"
          },
          "problems": [
            {
              "id": "m1t1p1",
              "level": "基础",
              "title": "输出 Hello, World!",
              "statement": "在屏幕上输出一行：Hello, World!",
              "input": "无输入。",
              "output": "输出一行 Hello, World!",
              "sampleIn": "（无）",
              "sampleOut": "Hello, World!",
              "hint": "用 printf 输出，记得加换行。",
              "answer": "#include <stdio.h>\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}",
              "analysis": "C 程序的第一个程序。printf 按格式串原样输出，\\n 换行。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m1t1p2",
              "level": "基础",
              "title": "输出两行文字",
              "statement": "在屏幕上输出两行：第一行 Welcome to C，第二行 Let's learn together。",
              "input": "无输入。",
              "output": "输出两行指定文字。",
              "sampleIn": "（无）",
              "sampleOut": "Welcome to C\nLet's learn together",
              "hint": "两个 printf，或者一个 printf 里写两个 \\n。",
              "answer": "#include <stdio.h>\nint main() {\n    printf(\"Welcome to C\\n\");\n    printf(\"Let's learn together\\n\");\n    return 0;\n}",
              "analysis": "每个 \\n 换一行。也可以写成一个 printf(\"Welcome to C\\nLet's learn together\\n\");。",
              "source": "PTA 习题集"
            },
            {
              "id": "m1t1p3",
              "level": "进阶",
              "title": "格式化输出成绩表",
              "statement": "输出一张成绩表：第一行是表头 Name Score，第二行是 Tom 95。要求名字占 10 列左对齐，分数占 4 列右对齐。",
              "input": "无输入。",
              "output": "按格式输出两行。",
              "sampleIn": "（无）",
              "sampleOut": "Name       Score\nTom           95",
              "hint": "%-10s 是左对齐占 10 列，%4d 是右对齐占 4 列。",
              "answer": "#include <stdio.h>\nint main() {\n    printf(\"%-10s%4s\\n\", \"Name\", \"Score\");\n    printf(\"%-10s%4d\\n\", \"Tom\", 95);\n    return 0;\n}",
              "analysis": "%-10s 表示字符串左对齐、占 10 列，不足补空格；%4d 表示整数右对齐、占 4 列。格式控制符决定输出长什么样。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m1t1p4",
              "level": "进阶",
              "title": "转义字符输出",
              "statement": "输出一行：He said: \"C is fun!\"，注意引号和换行都要正确显示。",
              "input": "无输入。",
              "output": "输出一行指定文字，包含双引号。",
              "sampleIn": "（无）",
              "sampleOut": "He said: \"C is fun!\"",
              "hint": "双引号在字符串里要写成 \\\"。",
              "answer": "#include <stdio.h>\nint main() {\n    printf(\"He said: \\\"C is fun!\\\"\\n\");\n    return 0;\n}",
              "analysis": "字符串里的双引号会提前结束字符串，所以要写成转义字符 \\\"，表示一个真正的引号。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m1t1p5",
              "level": "难题",
              "title": "输出九九乘法表表头",
              "statement": "用格式化输出打印九九乘法表的第一行表头：先输出两个空格，再依次输出 1 到 9，每个数字占 4 列右对齐。",
              "input": "无输入。",
              "output": "输出一行表头。",
              "sampleIn": "（无）",
              "sampleOut": "     1   2   3   4   5   6   7   8   9",
              "hint": "用循环输出 1~9，每个数字用 %4d；前面先输出两个空格。",
              "answer": "#include <stdio.h>\nint main() {\n    int i;\n    printf(\"  \");\n    for (i = 1; i <= 9; i++) {\n        printf(\"%4d\", i);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
              "analysis": "综合了循环和格式化输出。%4d 让每个数字占 4 列右对齐，表头就整齐了。这是后面做完整九九乘法表的基础。",
              "source": "综合自编题"
            }
          ]
        },
        {
          "id": "m1t2",
          "title": "变量与数据类型",
          "explain": [
            {
              "h": "变量就是存数据的格子",
              "b": "变量就是用来存数据的格子，每个格子都有名字和类型，程序要用一个数的时候，就先把它放进格子里，用的时候再取出来。用变量之前要先声明，就是告诉电脑：我要一个格子，它叫什么名字、存什么类型的数据。比如 int age; 就是声明一个名叫 age 的整数格子。声明之后才能用它，没声明就直接写 age = 18;，编译会报错。声明有两种写法：第 1 种是声明的同时就赋值，int age = 18;，一步到位；第 2 种是先声明再赋值，先写 int age;，后面再写 age = 18;。两种写法效果一样，刚学的时候推荐第一种，写得少还不容易忘。",
              "code": "int age = 18;    // 声明的同时赋值\nint height;\nheight = 165;  // 先声明，再赋值"
            },
            {
              "h": "四种常见数据类型",
              "b": "格子能存什么样的数据，由类型决定，最常用的有四种，记住它们各自管什么就够了：第 1 种是 int，存整数，比如年龄 18、人数 100，不能存小数；第 2 种是 float，存小数，比如身高 1.65，精度一般，平时够用；第 3 种是 double，也是存小数，但比 float 更精确，需要精确计算的时候用它，比如钱、科学计算；第 4 种是 char，存一个字符，比如 'A'、'a'、'5'，注意字符要用单引号包起来，而且单引号里只能放一个字符。选类型有个简单的原则：整数用 int，小数优先用 double，单个字符用 char，选对了类型，后面打印和计算才不会出怪结果。",
              "code": "int age = 18;\ndouble pi = 3.14;\nchar grade = 'A';"
            },
            {
              "h": "变量的值可以改",
              "b": "变量和常量最大的区别就是：变量里的值可以改，格子还是那个格子，里面的东西可以换。声明的时候给它一个初值，比如 int a = 10;，a 里面现在是 10。后面想改，直接写 a = 20; 就行，这条语句的意思是把 20 放进 a 这个格子，替换掉原来的 10。改完之后再用 a，拿到的就是新的值 20，旧的 10 已经没了。这个特点在程序里用得非常多，比如计数、累加，都是先给变量一个初值，再一轮一轮改它的值。要注意，赋值号 = 的方向是把右边的值放进左边的格子，写反了意思就全变了，也编译不过。",
              "code": "int a = 10;\na = 20;          // 把 a 改成 20\nprintf(\"%d\\n\", a);  // 输出 20"
            },
            {
              "h": "打印要对上占位符",
              "b": "变量存进格子之后，要把它打印出来看，就要用 printf 加占位符，而且占位符和变量的类型必须一一对应，对不上就会打出乱七八糟的结果。对应关系要背下来：%d 打印 int 整数；%f 打印 float 或 double 小数；%c 打印 char 字符；%.2f 打印小数并保留两位，比如身高 1.65 用 %.2f 打出来就是 1.65，价格 9.9 用 %.1f 打出来就是 9.9。打印的过程是这样的：第 1 步，printf 先看格式串里的占位符；第 2 步，按顺序把后面变量的值填进去；第 3 步，把填好的结果打到屏幕上。另外要小心整数除法：7 / 2 的结果是 3 不是 3.5，因为两个都是 int，电脑按整数除法算，小数部分直接丢掉，想要 3.5 得写成 7.0 / 2。",
              "code": "int age = 18;\nfloat height = 1.65;\nchar grade = 'A';\nprintf(\"年龄：%d\\n\", age);\nprintf(\"身高：%.2f\\n\", height);\nprintf(\"等级：%c\\n\", grade);"
            }
          ],
          "pitfalls": [
            {
              "wrong": "char c = 'AB';",
              "correct": "char c = 'A';",
              "note": "char 只能存一个字符，单引号里只能放一个字符，写 'AB' 就是两个字符了，编译会报错。想存多个字符要用字符串，那是后面才学的内容，现在记住：char 的单引号里永远只放一个字符。"
            },
            {
              "wrong": "float pi = 3.14159265358979;",
              "correct": "double pi = 3.14159265358979;",
              "note": "float 能记住的小数位数有限，位数多了后面的就丢了、不准了。需要精确的小数就用 double，它的精度比 float 高得多。平时算小数优先用 double，基本不会错。"
            },
            {
              "wrong": "int a;\nprintf(\"%d\\n\", a);",
              "correct": "int a = 0;\nprintf(\"%d\\n\", a);",
              "note": "只声明不赋值，格子里装的是电脑之前留下的随机值，打印出来是个莫名其妙的数，每次运行还可能不一样。养成习惯：声明变量的时候就给它一个初值，比如 int a = 0;，或者在使用之前先赋值。"
            }
          ],
          "example": {
            "title": "打印个人信息",
            "code": "#include <stdio.h>\nint main() {\n    int age = 18;\n    float height = 1.65;\n    char grade = 'A';\n    printf(\"年龄：%d\\n\", age);\n    printf(\"身高：%.2f\\n\", height);\n    printf(\"等级：%c\\n\", grade);\n    return 0;\n}",
            "analysis": "这个例题一次用了三种类型，正好练占位符和变量类型的一一对应。程序先声明三个变量：int 型的 age 存年龄 18，float 型的 height 存身高 1.65，char 型的 grade 存等级 'A'。然后三个 printf 各打一行：%d 对应 int，打出年龄 18；%.2f 对应 float，保留两位小数打出 1.65；%c 对应 char，打出字母 A。每行末尾的 \\n 负责换行。记住检查方法：数一数格式串里有几个占位符，后面就有几个变量，类型一个一个对上，就不会打错。"
          },
          "problems": [
            {
              "id": "m1t2p1",
              "level": "基础",
              "title": "交换两个整数",
              "statement": "输入两个整数 a 和 b，交换它们的值后输出。",
              "input": "输入两个整数 a b。",
              "output": "输出交换后的 a b，用空格分隔。",
              "sampleIn": "3 5",
              "sampleOut": "5 3",
              "hint": "借助第三个变量 t 来交换。",
              "answer": "#include <stdio.h>\nint main() {\n    int a, b, t;\n    scanf(\"%d %d\", &a, &b);\n    t = a; a = b; b = t;\n    printf(\"%d %d\\n\", a, b);\n    return 0;\n}",
              "analysis": "用 t 暂存 a 的值，再依次交换。直接 a=b 会丢掉 a 的原值。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m1t2p2",
              "level": "基础",
              "title": "计算圆的面积",
              "statement": "输入圆的半径 r，输出圆的面积（π 取 3.14159，结果保留 2 位小数）。",
              "input": "输入一个实数 r。",
              "output": "输出圆的面积，保留 2 位小数。",
              "sampleIn": "2",
              "sampleOut": "12.57",
              "hint": "面积 = π×r×r，用 %.2f 输出。",
              "answer": "#include <stdio.h>\nint main() {\n    double r;\n    scanf(\"%lf\", &r);\n    printf(\"%.2f\\n\", 3.14159 * r * r);\n    return 0;\n}",
              "analysis": "半径是小数，用 double 存；%.2f 表示保留 2 位小数输出。",
              "source": "PTA 习题集"
            },
            {
              "id": "m1t2p3",
              "level": "进阶",
              "title": "摄氏转华氏",
              "statement": "输入摄氏温度 C，输出对应的华氏温度 F（F = C×9/5 + 32，结果保留 1 位小数）。",
              "input": "输入一个实数 C。",
              "output": "输出华氏温度，保留 1 位小数。",
              "sampleIn": "100",
              "sampleOut": "212.0",
              "hint": "注意 9/5 要写成 9.0/5，不然整数除法得 1。",
              "answer": "#include <stdio.h>\nint main() {\n    double c;\n    scanf(\"%lf\", &c);\n    printf(\"%.1f\\n\", c * 9.0 / 5 + 32);\n    return 0;\n}",
              "analysis": "C 里整数除以整数得整数，9/5 等于 1。写成 9.0/5 才能得到 1.8。这是类型转换的典型坑。",
              "source": "PTA 习题集"
            },
            {
              "id": "m1t2p4",
              "level": "进阶",
              "title": "字符与 ASCII 码互转",
              "statement": "输入一个大写字母，输出它的小写字母和对应的 ASCII 码。",
              "input": "输入一个大写字母。",
              "output": "输出小写字母和它的 ASCII 码，用空格分隔。",
              "sampleIn": "A",
              "sampleOut": "a 97",
              "hint": "大写转小写加 32；字符用 %c 读入和输出，ASCII 码用 %d 输出同一个字符。",
              "answer": "#include <stdio.h>\nint main() {\n    char ch;\n    scanf(\"%c\", &ch);\n    printf(\"%c %d\\n\", ch + 32, ch + 32);\n    return 0;\n}",
              "analysis": "字符在内存里存的就是 ASCII 码，'A' 是 65，'a' 是 97，相差 32。%c 按字符输出，%d 按数字输出同一个值。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m1t2p5",
              "level": "难题",
              "title": "混合类型运算",
              "statement": "输入一个整数 a 和一个实数 b，输出 a+b、a-b、a*b、a/b 四个结果。a+b 和 a-b 按整数输出，a*b 和 a/b 保留 2 位小数。",
              "input": "输入一个整数 a 和一个实数 b。",
              "output": "输出四行结果。",
              "sampleIn": "5 2.5",
              "sampleOut": "7\n2\n12.50\n2.00",
              "hint": "a+b 时 b 会先转成整数再加；a/b 要保留小数，a 要先转成 double。",
              "answer": "#include <stdio.h>\nint main() {\n    int a;\n    double b;\n    scanf(\"%d %lf\", &a, &b);\n    printf(\"%d\\n\", a + (int)b);\n    printf(\"%d\\n\", a - (int)b);\n    printf(\"%.2f\\n\", a * b);\n    printf(\"%.2f\\n\", a / b);\n    return 0;\n}",
              "analysis": "综合了类型转换。整数和实数混合运算时，整数会先提升为实数；想按整数算要强制转换 (int)b。a/b 里 a 是 int、b 是 double，结果是 double。",
              "source": "综合自编题"
            }
          ]
        },
        {
          "id": "m1t3",
          "title": "常量",
          "explain": [
            {
              "h": "常量是什么",
              "b": "常量就是值不会变的数据，和变量正好相反：变量是格子里的东西可以换，常量是一旦定下来，程序运行过程中就永远不变。比如 100、3.14、'A' 这些直接写在代码里的数和字符，就叫字面常量，看到是多少就是多少。还有一种是给常量起个名字，比如把圆周率 3.14 起个名字叫 PI，以后代码里写 PI 就等于写 3.14，读起来一下子就知道这是什么意思。给常量起名字有两个好处：第 1 个是代码更好读，看到 PI 就知道是圆周率，看到 3.14 还得想一下；第 2 个是改起来方便，圆周率想改成更精确的 3.14159，只改定义的那一处，全程序就都改过来了。",
              "code": "100        // 字面常量：整数\n3.14       // 字面常量：小数\n'A'        // 字面常量：字符"
            },
            {
              "h": "#define 给常量起名字",
              "b": "#define 是给常量起名字的一种写法，格式是 #define 名字 值，比如 #define PI 3.14，意思就是：从现在起，代码里出现的 PI 都代表 3.14。它的原理是文本替换，编译之前电脑先把程序里所有的 PI 换成 3.14，再开始编译，改的时候只改 #define 这一行。写 #define 有两个规矩要记住：第 1 个是名字一般用大写字母，比如 PI、MAX、WEEK，这样一眼就能看出来它是个常量，不是普通变量；第 2 个是后面不要加分号，写成 #define PI 3.14; 的话，分号也会被当成替换内容的一部分换进去，程序就会出错。#define 要写在程序的最前面，一般放在 #include 的下面、main 函数的上面。",
              "code": "#define PI 3.14\n#define WEEK 7\nint main() {\n    printf(\"%d\\n\", WEEK * 3);  // 输出 21\n    return 0;\n}"
            },
            {
              "h": "const 声明常量",
              "b": "const 是给常量起名字的另一种写法，格式是 const 类型 名字 = 值;，比如 const int MAX = 100;，意思就是声明一个 int 型的量 MAX，它的值是 100，而且以后不许改。和 #define 不同，const 定义的常量是有类型的，电脑会检查类型合不合理，比如 const int 型的量就不能拿去存小数，存错了编译会提醒你。const 常量在程序运行的时候会占一块内存，但这块内存是只读的，任何想改它的语句都会被编译器拦下来。用法也很简单：定义的时候就要给值，比如 const int DAYS = 7;，后面直接拿 DAYS 当 7 用就行，打印、计算都可以，就是不能再给它赋值。",
              "code": "const int DAYS = 7;\nconst float TAX = 0.13;\nprintf(\"%d\\n\", DAYS);  // 输出 7"
            },
            {
              "h": "两种方法怎么选",
              "b": "同样是给常量起名字，#define 和 const 该用哪个？先记住它们的区别：#define 是编译前的文本替换，没有类型，换进去的就是一串字符；const 是有类型的只读变量，编译器会帮你检查类型，写错了能及时发现。执行过程也不一样：第 1 步，#define 在编译开始之前就把名字替换成值，程序里根本看不到 PI 这个名字；第 2 步，const 变量在程序运行时占一块内存，值存在里面，但不允许改。对于刚开始学的人，有个简单的选法：需要类型检查、想让编译器帮你把关的时候用 const；只是想给一个固定数字起个短名字、图方便的时候用 #define。两种写法都很常见，看到都要认识，写代码的时候优先用 const，更不容易出错。",
              "code": ""
            }
          ],
          "pitfalls": [
            {
              "wrong": "#define PI 3.14;",
              "correct": "#define PI 3.14",
              "note": "#define 后面不要加分号。因为 #define 是原样替换，分号也会被一起换进去，比如 PI * r * r 会变成 3.14; * r * r，编译直接报错。记住：#define 那一行末尾什么都不要加。"
            },
            {
              "wrong": "const int a = 5;\na = 6;",
              "correct": "const int a = 5;\n// a 不能改，想改就不要加 const",
              "note": "const 的意思就是“这个值不许改”，定义之后再写 a = 6;，编译器会报错。想让一个量能改，就不要给它加 const；加了 const，就要把它当成固定不变的数来用。"
            }
          ],
          "example": {
            "title": "用常量算圆的面积",
            "code": "#include <stdio.h>\n#define PI 3.14\nint main() {\n    float r = 2.0;\n    printf(\"%.2f\\n\", PI * r * r);\n    return 0;\n}",
            "analysis": "这个例题用 #define 定义常量 PI 代表圆周率 3.14。跑起来是这样的：第 1 步，编译之前先把所有的 PI 替换成 3.14；第 2 步，进入 main，声明 float 变量 r 并赋值为 2.0；第 3 步，执行 printf，算 PI * r * r，也就是 3.14 * 2.0 * 2.0，结果 12.56，用 %.2f 保留两位小数打出来。用常量的好处是：圆周率只在 #define 那行出现一次，想改成 3.14159 只改那一处就行，不用满程序去找，代码也更好读。"
          },
          "problems": [
            {
              "id": "m1t3p1",
              "level": "基础",
              "title": "用 const 算圆周长",
              "statement": "用 const 定义圆周率 3.14159，输入半径 r，输出圆的周长（保留 2 位小数）。",
              "input": "输入一个实数 r。",
              "output": "输出圆的周长，保留 2 位小数。",
              "sampleIn": "3",
              "sampleOut": "18.85",
              "hint": "周长 = 2×π×r。",
              "answer": "#include <stdio.h>\nint main() {\n    const double PI = 3.14159;\n    double r;\n    scanf(\"%lf\", &r);\n    printf(\"%.2f\\n\", 2 * PI * r);\n    return 0;\n}",
              "analysis": "const 定义常量，程序里用 PI 代替 3.14159，清晰又不容易写错。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m1t3p2",
              "level": "基础",
              "title": "宏定义求正方形面积",
              "statement": "用 #define 定义边长 SIDE 为 5，输出正方形的面积。",
              "input": "无输入。",
              "output": "输出正方形的面积。",
              "sampleIn": "（无）",
              "sampleOut": "25",
              "hint": "#define SIDE 5，然后用 SIDE*SIDE。",
              "answer": "#include <stdio.h>\n#define SIDE 5\nint main() {\n    printf(\"%d\\n\", SIDE * SIDE);\n    return 0;\n}",
              "analysis": "#define 是文本替换，编译前 SIDE 会被换成 5。注意 #define 行末尾不要加分号。",
              "source": "PTA 习题集"
            },
            {
              "id": "m1t3p3",
              "level": "进阶",
              "title": "符号常量与字面常量",
              "statement": "输入一个整数 n，先用字面常量 10 输出 n+10，再用符号常量 TEN（值为 10）输出 n+TEN。两行输出。",
              "input": "输入一个整数 n。",
              "output": "输出两行结果。",
              "sampleIn": "5",
              "sampleOut": "15\n15",
              "hint": "#define TEN 10 定义符号常量。",
              "answer": "#include <stdio.h>\n#define TEN 10\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    printf(\"%d\\n\", n + 10);\n    printf(\"%d\\n\", n + TEN);\n    return 0;\n}",
              "analysis": "字面常量 10 是直接写在代码里的数；符号常量 TEN 是给 10 起的名字。用符号常量的好处是改一处就全改了。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m1t3p4",
              "level": "进阶",
              "title": "枚举常量表示星期",
              "statement": "用枚举定义星期一到星期日为 1~7，输入一个数字 1~7，输出对应的英文星期名（只要求输出 Monday~Sunday 其中一个）。",
              "input": "输入一个整数 1~7。",
              "output": "输出对应的英文星期名。",
              "sampleIn": "1",
              "sampleOut": "Monday",
              "hint": "enum Week {Mon=1, Tue, Wed, Thu, Fri, Sat, Sun}; 再用 switch 输出。",
              "answer": "#include <stdio.h>\nenum Week { Mon = 1, Tue, Wed, Thu, Fri, Sat, Sun };\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    switch (n) {\n        case Mon: printf(\"Monday\\n\"); break;\n        case Tue: printf(\"Tuesday\\n\"); break;\n        case Wed: printf(\"Wednesday\\n\"); break;\n        case Thu: printf(\"Thursday\\n\"); break;\n        case Fri: printf(\"Friday\\n\"); break;\n        case Sat: printf(\"Saturday\\n\"); break;\n        case Sun: printf(\"Sunday\\n\"); break;\n    }\n    return 0;\n}",
              "analysis": "枚举是给一组相关的整数常量起名字。Mon=1 后，Tue 会自动是 2，依此类推。switch 里用枚举名比用数字更清楚。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m1t3p5",
              "level": "难题",
              "title": "宏定义与 const 综合",
              "statement": "用 #define 定义 TAX_RATE 为 0.13（税率），用 const 定义 PRICE 为 100（单价）。输入购买数量 n，输出总价（含税，保留 2 位小数）。",
              "input": "输入一个整数 n。",
              "output": "输出总价（含税），保留 2 位小数。",
              "sampleIn": "3",
              "sampleOut": "339.00",
              "hint": "总价 = 单价×数量×(1+税率)。",
              "answer": "#include <stdio.h>\n#define TAX_RATE 0.13\nint main() {\n    const double PRICE = 100;\n    int n;\n    scanf(\"%d\", &n);\n    printf(\"%.2f\\n\", PRICE * n * (1 + TAX_RATE));\n    return 0;\n}",
              "analysis": "综合了 #define 和 const 两种定义常量的方式。#define 做文本替换，const 是有类型的只读变量。税率用 #define、单价用 const，各取所长。",
              "source": "综合自编题"
            }
          ]
        },
        {
          "id": "m1t4",
          "title": "运算符",
          "explain": [
            {
              "h": "算术运算符：加减乘除取余",
              "b": "算术运算符就是用来做数学计算的符号，一共有 5 个：+ 加、- 减、* 乘、/ 除、% 取余数。前四个和数学课上的一样，% 是 C 语言里新出现的，它的意思是求余数，比如 7 % 3 = 1，因为 7 除以 3 商 2 余 1。% 在编程里用得非常多，判断能不能整除、拆出一个数的个位十位，都靠它。还有一个要特别小心的点：整数除法。两个 int 相除，结果还是 int，小数部分直接丢掉，比如 7 / 2 = 3，不是 3.5。想要 3.5 怎么办？把其中一个数写成小数就行，7.0 / 2 的结果就是 3.5。记住这个规则，算平均值、算比例的时候就不会莫名其妙少了小数部分。",
              "code": "int a = 7, b = 3;\n// a + b = 10, a - b = 4, a * b = 21\n// a / b = 2, a % b = 1\n// 7.0 / 2 = 3.5"
            },
            {
              "h": "赋值运算符：= 和复合赋值",
              "b": "赋值运算符 = 的意思是把右边的值放进左边的变量里，比如 a = 5 就是把 5 存进 a 这个格子。注意它和数学里的“等于”不一样，数学里 a = 5 表示 a 和 5 相等，C 语言里它表示一个动作：把 5 赋给 a。除了单个 =，还有几个简写，叫复合赋值运算符：a += 2 等于 a = a + 2，就是把 a 加 2 再存回 a；a -= 2 等于 a = a - 2；a *= 2 等于 a = a * 2；a /= 2 等于 a = a / 2。简写的好处是少写一遍变量名，代码更短，也不容易抄错。比如 a = 10，执行 a += 5 之后 a 变成 15，再执行 a *= 2，a 就变成 30。这几个简写在循环和累加里天天都能见到，要认得。",
              "code": "int a = 10;\na += 5;   // a 变成 15，等于 a = a + 5\na *= 2;   // a 变成 30，等于 a = a * 2"
            },
            {
              "h": "比较运算符和逻辑运算符",
              "b": "比较运算符是用来比大小、判断相等不相等的，一共有 6 个：== 等于、!= 不等于、> 大于、< 小于、>= 大于等于、<= 小于等于。比较的结果只有两种：成立就是 1，表示真；不成立就是 0，表示假。比如 5 == 5 的结果是 1，5 == 3 的结果是 0。最容易弄混的是 == 和 =：== 是比较，问两边是不是相等；= 是赋值，把右边放进左边，写错了意思全变。逻辑运算符是用来把几个条件组合起来的，有 3 个：&& 表示“并且”，两个条件都成立才为真，比如 a > 0 && b > 0；|| 表示“或者”，只要有一个成立就为真；! 表示“非”，把真变假、假变真。判断闰年就要把它们组合起来用。",
              "code": "int a = 5;\n// a == 5 的结果是 1，a == 3 的结果是 0\n// a > 0 && a < 10 的结果是 1\n// !(a > 0) 的结果是 0"
            },
            {
              "h": "自增自减：i++ 和 ++i",
              "b": "自增自减是让变量自己加 1 或减 1 的简写，i++ 表示 i 加 1，i-- 表示 i 减 1，++i 和 --i 也是一样的意思。区别在于加 1 这个动作发生在“用 i”之前还是之后：i++ 是先用 i 原来的值，用完之后 i 才加 1；++i 是先让 i 加 1，再用加完之后的新值。比如 i 一开始是 5，执行 printf(\"%d\", i++); 会先打出 5，打完之后 i 变成 6；再执行 printf(\"%d\", ++i); 会先把 i 加到 7，再打出 7。i-- 和 --i 同理，一个是先用后减，一个是先减后用。刚开始用的时候，只在单独的一行写 i++ 或 ++i，不要把它和其他计算混在一条语句里，等熟练了再组合使用。",
              "code": "int i = 5;\nprintf(\"%d\\n\", i++);  // 输出 5，之后 i 变成 6\nprintf(\"%d\\n\", i);   // 输出 6\nprintf(\"%d\\n\", ++i);  // 先加到 7，输出 7"
            }
          ],
          "pitfalls": [
            {
              "wrong": "if (a = 5) {\n    printf(\"相等\\n\");\n}",
              "correct": "if (a == 5) {\n    printf(\"相等\\n\");\n}",
              "note": "if (a = 5) 是把 5 赋给 a，不是比较，而且赋值语句的值就是 5，不等于 0，所以条件永远为真，不管 a 原来是多少都会进分支。要比较两个数是不是相等，一定要写两个等号 ==，一个等号是赋值，两个等号才是比较。"
            },
            {
              "wrong": "int a = 7 / 2;  // 以为 a 是 3.5",
              "correct": "double a = 7.0 / 2;  // a 是 3.5",
              "note": "两个 int 相除是整数除法，小数部分直接丢掉，7 / 2 的结果是 3，不是 3.5。想要小数结果，至少要把其中一个数写成小数，比如 7.0 / 2，结果就是 3.5。算平均值的时候最容易栽在这里，记得除数写 3.0 而不是 3。"
            }
          ],
          "example": {
            "title": "判断一个数是不是偶数",
            "code": "#include <stdio.h>\nint main() {\n    int n = 8;\n    if (n % 2 == 0) {\n        printf(\"偶数\\n\");\n    } else {\n        printf(\"奇数\\n\");\n    }\n    return 0;\n}",
            "analysis": "这个例题把取余 % 和比较 == 组合起来判断奇偶。跑起来是这样的：第 1 步，声明 int 变量 n 并赋值为 8；第 2 步，算 n % 2，也就是 8 除以 2 的余数，结果是 0；第 3 步，用 == 比较余数是不是等于 0，8 % 2 == 0 成立，走 if 的分支；第 4 步，执行 printf 打出“偶数”。如果 n 是 7，7 % 2 余 1，1 == 0 不成立，就走 else 分支打出“奇数”。记住套路：想判断能不能整除，就用 % 算余数，再用 == 判断余数是不是 0。"
          },
          "problems": [
            {
              "id": "m1t4p1",
              "level": "基础",
              "title": "求余与整除",
              "statement": "输入两个整数 a 和 b（b 不为 0），输出 a 除以 b 的商和余数。",
              "input": "输入两个整数 a b。",
              "output": "输出商和余数，用空格分隔。",
              "sampleIn": "7 3",
              "sampleOut": "2 1",
              "hint": "商用 a/b，余数用 a%b。",
              "answer": "#include <stdio.h>\nint main() {\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    printf(\"%d %d\\n\", a / b, a % b);\n    return 0;\n}",
              "analysis": "/ 是整除，% 是取余。7/3 商 2 余 1。",
              "source": "PTA 习题集"
            },
            {
              "id": "m1t4p2",
              "level": "基础",
              "title": "自增自减",
              "statement": "输入一个整数 n，先输出 n++ 的值，再输出 ++n 的值（两行）。",
              "input": "输入一个整数 n。",
              "output": "输出两行结果。",
              "sampleIn": "5",
              "sampleOut": "5\n7",
              "hint": "n++ 是先用再加，++n 是先加再用。第一行输出后 n 变成 6，第二行 ++n 先加到 7 再输出。",
              "answer": "#include <stdio.h>\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    printf(\"%d\\n\", n++);\n    printf(\"%d\\n\", ++n);\n    return 0;\n}",
              "analysis": "n++ 先把 n 的原值拿去用，用完 n 才加 1；++n 是先加 1 再拿去用。n=5 时，第一行输出 5（之后 n 变 6），第二行先加到 7 再输出 7。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m1t4p3",
              "level": "进阶",
              "title": "位运算",
              "statement": "输入两个整数 a 和 b，输出 a&b、a|b、a^b 的结果。",
              "input": "输入两个整数 a b。",
              "output": "输出三行结果。",
              "sampleIn": "5 3",
              "sampleOut": "1\n7\n6",
              "hint": "& 是按位与，| 是按位或，^ 是按位异或。先把 5 和 3 写成二进制再算。",
              "answer": "#include <stdio.h>\nint main() {\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    printf(\"%d\\n\", a & b);\n    printf(\"%d\\n\", a | b);\n    printf(\"%d\\n\", a ^ b);\n    return 0;\n}",
              "analysis": "5 是 101，3 是 011。按位与：101&011=001=1；按位或：101|011=111=7；按位异或：101^011=110=6。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m1t4p4",
              "level": "进阶",
              "title": "复合赋值",
              "statement": "输入一个整数 n，依次执行 n+=5、n*=2、n%=3，输出每次执行后的 n（共三行）。",
              "input": "输入一个整数 n。",
              "output": "输出三行结果。",
              "sampleIn": "10",
              "sampleOut": "15\n30\n0",
              "hint": "n+=5 等价于 n=n+5，依次执行。",
              "answer": "#include <stdio.h>\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    n += 5; printf(\"%d\\n\", n);\n    n *= 2; printf(\"%d\\n\", n);\n    n %= 3; printf(\"%d\\n\", n);\n    return 0;\n}",
              "analysis": "复合赋值是简写：n+=5 就是 n=n+5。n=10 时，+=5 得 15，*=2 得 30，%=3 得 0。",
              "source": "PTA 习题集"
            },
            {
              "id": "m1t4p5",
              "level": "难题",
              "title": "运算符优先级综合",
              "statement": "输入三个整数 a、b、c，输出表达式 a+b*c、(a+b)*c、a++ + ++b（a、b 用原值参与计算）三个结果。注意第三个表达式会改变 a 和 b 的值，按顺序输出。",
              "input": "输入三个整数 a b c。",
              "output": "输出三行结果。",
              "sampleIn": "2 3 4",
              "sampleOut": "14\n20\n6",
              "hint": "先乘除后加减；a++ 是先用再加，++b 是先加再用。",
              "answer": "#include <stdio.h>\nint main() {\n    int a, b, c;\n    scanf(\"%d %d %d\", &a, &b, &c);\n    printf(\"%d\\n\", a + b * c);\n    printf(\"%d\\n\", (a + b) * c);\n    printf(\"%d\\n\", a++ + ++b);\n    return 0;\n}",
              "analysis": "综合了优先级和自增。a+b*c 先算 b*c=12 再加 a 得 14；(a+b)*c 先算括号得 20；a++ + ++b 里 a++ 取原值 2（之后 a 变 3），++b 先加到 4 再取，2+4=6。",
              "source": "综合自编题"
            }
          ]
        },
        {
          "id": "m1t5",
          "title": "输入输出",
          "explain": [
            {
              "h": "printf 输出：格式和占位符",
              "b": "printf 是用来输出的，格式是 printf(\"格式串\", 变量);，格式串就是双引号里的内容，里面既可以写要原样显示的文字，也可以写占位符。电脑输出的时候，先看格式串里写了什么字，就原样打什么字，遇到占位符就把后面变量的值填进去。比如 printf(\"姓名：%s，年龄：%d\\n\", name, age);，会先打出“姓名：”，再把 name 的值填到 %s 的位置，接着打出“，年龄：”，再把 age 的值填到 %d 的位置，最后 \\n 换行。常用占位符要背下来：%d 打 int 整数，%f 打 float 小数，%c 打 char 字符，%s 打字符串，%.2f 打小数并保留两位。最关键的一条规矩：占位符和变量要一一对应，有几个占位符，后面就要有几个变量，顺序和类型都要对上。",
              "code": "printf(\"%d %.2f %c\\n\", 3, 3.14, 'A');\n// 输出：3 3.14 A"
            },
            {
              "h": "scanf 输入：& 是什么意思",
              "b": "scanf 是用来从键盘读数据的，和 printf 正好反过来：printf 是把东西打出来，scanf 是把你敲进去的东西收进来。格式是 scanf(\"%d\", &n);，意思是按 %d 的格式读一个整数，存进变量 n 里。这里最容易错的就是那个 &，它表示“取地址”，也就是告诉 scanf：把读到的值放进 n 这个格子所在的位置。为什么非要加 &？因为 scanf 要往格子里写东西，必须知道格子在哪里，光给它一个值是不够的。记住一条铁律：scanf 里普通变量前面都要加 &，比如 &n、&a、&b，少了 & 程序轻则读错数，重则直接崩溃。唯一的例外是读字符串的时候，数组名本身就是地址，不用加 &，这个例外在例题里会讲到。",
              "code": "int n;\nscanf(\"%d\", &n);   // &n 是 n 的地址\n// 输入 18 后，n 就是 18"
            },
            {
              "h": "一次读多个数",
              "b": "scanf 一次可以读多个数，不用一个一个写。格式是 scanf(\"%d %d\", &a, &b);，意思是按顺序读两个整数，第一个存进 a，第二个存进 b。输入的时候，两个数之间用空格隔开，比如敲 3 5 再按回车，a 就是 3，b 就是 5。对应关系要对齐：第 1 个占位符 %d 对应第 1 个变量 &a，第 2 个占位符 %d 对应第 2 个变量 &b，顺序不能乱，类型也要对上，%d 对 int，%f 对 float。三个数、四个数也是同样的写法，格式串里写几个占位符，后面就写几个带 & 的变量。输入的时候除了空格，用回车隔开也行，scanf 会自动跳过中间的空格和换行，只管按顺序把数一个一个收进来。",
              "code": "int a, b;\nscanf(\"%d %d\", &a, &b);\n// 输入：3 5\n// 之后 a 是 3，b 是 5"
            },
            {
              "h": "完整执行过程：读入、计算、输出",
              "b": "一个带输入输出的程序，执行过程分三段，照着这个顺序想就不会乱：第 1 步是声明变量，比如 int a, b;，先把要用的格子准备好；第 2 步是 scanf 读入，程序停在这里等你从键盘输入，你敲完数字按回车，数就被存进对应的变量里了；第 3 步是计算和输出，比如算 a + b，再用 printf 按题目要求的格式打出来。这里有个细节要特别注意：printf 写什么就输出什么，题目要求输出“和=8 差=-2”，格式串里就要原样写上“和=”和“差=”，中间是空格还是逗号也要照题目写，差一个符号判题都会判错。写完之后对照检查一遍：scanf 有没有漏 &，占位符和变量类型对没对上，printf 的文字和题目要求一不一样，这三处对了，程序基本就没问题了。",
              "code": ""
            }
          ],
          "pitfalls": [
            {
              "wrong": "int n;\nscanf(\"%d\", n);",
              "correct": "int n;\nscanf(\"%d\", &n);",
              "note": "scanf 要的是变量的地址，不是变量本身，少了 &，scanf 不知道该把读到的数往哪里放，程序会读错数甚至直接崩溃。这就是新手最常犯的错，写 scanf 的时候先写 & 再写变量名，养成习惯就不会漏。"
            },
            {
              "wrong": "float x;\nscanf(\"%d\", &x);",
              "correct": "float x;\nscanf(\"%f\", &x);",
              "note": "占位符和变量类型必须匹配，用 %d 去读 float、或者用 %f 去读 int，读出来的数都是错的。记住对应关系：int 用 %d，float 用 %f，double 用 %lf，char 用 %c，写 scanf 之前先看一眼变量是什么类型。"
            },
            {
              "wrong": "double x;\nscanf(\"%f\", &x);",
              "correct": "double x;\nscanf(\"%lf\", &x);",
              "note": "读 double 要用 %lf，%f 是读 float 的。虽然 printf 里 %f 能打 double，但 scanf 里 %f 和 %lf 是严格区分的，用 %f 读 double 读出来的数是错的。float 用 %f，double 用 %lf，分清楚再写。"
            }
          ],
          "example": {
            "title": "输入姓名和年龄并打印",
            "code": "#include <stdio.h>\nint main() {\n    char name[20];\n    int age;\n    scanf(\"%s %d\", name, &age);\n    printf(\"姓名：%s，年龄：%d\\n\", name, age);\n    return 0;\n}",
            "analysis": "这个例题一次练了两种 scanf 的写法，区别就在 & 上。跑起来是这样的：第 1 步，声明数组 name 和 int 变量 age；第 2 步，执行 scanf，等你输入小明 18 再按回车，%s 把小明存进 name，%d 把 18 存进 age；第 3 步，执行 printf，打出姓名：小明，年龄：18。关键点有两个：读字符串时 name 前面不用加 &，因为数组名本身就是地址；读 int 时 age 前面一定要加 &。输出时 %s 对应 name，%d 对应 age，一一对应。"
          },
          "problems": [
            {
              "id": "m1t5p1",
              "level": "基础",
              "title": "输入两个整数输出和与差",
              "statement": "输入两个整数，输出它们的和与差。",
              "input": "输入两个整数。",
              "output": "输出和与差，格式为“和=8 差=-2”。",
              "sampleIn": "3 5",
              "sampleOut": "和=8 差=-2",
              "hint": "scanf 记得加 &；printf 写什么就输出什么。",
              "answer": "#include <stdio.h>\nint main() {\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    printf(\"和=%d 差=%d\\n\", a + b, a - b);\n    return 0;\n}",
              "analysis": "这是 practice1 的原题。scanf 要地址 &a、&b；printf 的格式串里写什么就输出什么。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m1t5p2",
              "level": "基础",
              "title": "输入输出一个字符",
              "statement": "输入一个字符，输出这个字符和它的 ASCII 码。",
              "input": "输入一个字符。",
              "output": "输出字符和 ASCII 码，用空格分隔。",
              "sampleIn": "A",
              "sampleOut": "A 65",
              "hint": "%c 读字符，%d 输出同一个字符的 ASCII 码。",
              "answer": "#include <stdio.h>\nint main() {\n    char ch;\n    scanf(\"%c\", &ch);\n    printf(\"%c %d\\n\", ch, ch);\n    return 0;\n}",
              "analysis": "字符在内存里就是 ASCII 码。%c 按字符输出，%d 按整数输出同一个值。",
              "source": "PTA 习题集"
            },
            {
              "id": "m1t5p3",
              "level": "进阶",
              "title": "保留小数输出",
              "statement": "输入一个实数，分别输出保留 1 位、2 位、3 位小数的结果（共三行）。",
              "input": "输入一个实数。",
              "output": "输出三行结果。",
              "sampleIn": "3.14159",
              "sampleOut": "3.1\n3.14\n3.142",
              "hint": "%.1f、%.2f、%.3f 控制保留几位小数。",
              "answer": "#include <stdio.h>\nint main() {\n    double x;\n    scanf(\"%lf\", &x);\n    printf(\"%.1f\\n\", x);\n    printf(\"%.2f\\n\", x);\n    printf(\"%.3f\\n\", x);\n    return 0;\n}",
              "analysis": "%.nf 表示保留 n 位小数输出，多的位按四舍五入。3.14159 保留 3 位是 3.142。",
              "source": "PTA 习题集"
            },
            {
              "id": "m1t5p4",
              "level": "进阶",
              "title": "多组输入求和",
              "statement": "输入若干组数据，每组两个整数，输出它们的和。输入以 0 0 结束（0 0 这组不算）。",
              "input": "多组两个整数，以 0 0 结束。",
              "output": "每组输出一行和。",
              "sampleIn": "3 5\n10 20\n0 0",
              "sampleOut": "8\n30",
              "hint": "用 while 循环读，读到 0 0 就停。",
              "answer": "#include <stdio.h>\nint main() {\n    int a, b;\n    while (scanf(\"%d %d\", &a, &b) == 2) {\n        if (a == 0 && b == 0) break;\n        printf(\"%d\\n\", a + b);\n    }\n    return 0;\n}",
              "analysis": "多组输入的套路：while 循环里读数据，读到结束标志就 break。scanf 返回成功读入的个数，==2 表示两个都读到了。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m1t5p5",
              "level": "难题",
              "title": "scanf 返回值综合",
              "statement": "输入若干个整数，统计一共输入了多少个、其中有多少个是偶数。输入以 EOF 结束（用 Ctrl+Z 或重定向文件输入）。",
              "input": "若干个整数，以 EOF 结束。",
              "output": "输出两行：总个数、偶数个数。",
              "sampleIn": "1 2 3 4 5",
              "sampleOut": "5\n2",
              "hint": "scanf 返回 EOF 时循环结束；用 while(scanf(...) != EOF)。",
              "answer": "#include <stdio.h>\nint main() {\n    int n, total = 0, even = 0;\n    while (scanf(\"%d\", &n) != EOF) {\n        total++;\n        if (n % 2 == 0) even++;\n    }\n    printf(\"%d\\n%d\\n\", total, even);\n    return 0;\n}",
              "analysis": "综合了 scanf 返回值和循环。scanf 读到文件末尾返回 EOF，循环就结束。total 计数，even 只在 n 是偶数时加 1。",
              "source": "综合自编题"
            }
          ]
        }
      ]
    },
    {
      "id": "m2",
      "num": "02",
      "title": "条件判断",
      "desc": "从概念到代码，按顺序掌握本模块核心能力。4 个知识点 / 20 道题",
      "topics": [
        {
          "id": "m2t1",
          "title": "if 与 switch",
          "explain": [
            {
              "h": "if 是什么",
              "b": "if 是最基本的条件判断，写法是 if (条件) { 条件成立时执行的代码 }。它的意思是：先看小括号里的条件成不成立，成立就执行大括号里的代码，不成立就直接跳过，继续往下走。比如想判断成绩及格，就写 if (score >= 60) { printf(\"及格\\n\"); }。第 1 步：先算出 score 的值；第 2 步：判断 score >= 60 是真是假；第 3 步：如果是真，就打印及格；如果是假，什么都不做，直接跳到 if 后面。if 只管一件事：条件成立就做，不成立就不做，没有第二条路可以走。",
              "code": "if (score >= 60) {\n    printf(\"及格\\n\");\n}"
            },
            {
              "h": "加上 else：二选一",
              "b": "光有 if 只能做到成立时做事，不成立时什么都不做；加上 else 就变成二选一：条件成立走 if 里面的，不成立走 else 里面的，两条路必走一条。写法是 if (条件) { ... } else { ... }。比如判断成绩：if (score >= 60) { printf(\"及格\\n\"); } else { printf(\"不及格\\n\"); }。第 1 步：算 score >= 60；第 2 步：成立就打印及格，跳过 else；第 3 步：不成立就跳过 if，直接打印不及格。score 是 75 就走第一条路，score 是 45 就走第二条路，不管分数是多少，总有一行字被打印出来，不会出现什么都不输出的情况。",
              "code": "if (score >= 60) {\n    printf(\"及格\\n\");\n} else {\n    printf(\"不及格\\n\");\n}"
            },
            {
              "h": "条件怎么写",
              "b": "条件写在 if 小括号里，常用比较运算符和逻辑运算符组合。比较运算符有六个：大于 >、小于 <、等于 ==、不等于 !=、大于等于 >=、小于等于 <=，比如 score >= 60、n % 2 == 0。逻辑运算符有三个：并且 &&、或者 ||、取反 !，可以把几个小条件拼成一个大条件。比如判断闰年要写 (y % 400 == 0) || (y % 4 == 0 && y % 100 != 0)，意思是能被 400 整除，或者能被 4 整除但不能被 100 整除，两个小条件只要有一个成立，整个条件就成立。记住：判断两个数等不等要用两个等号 ==，一个等号 = 是赋值，意思完全不一样。",
              "code": "if ((y % 400 == 0) || (y % 4 == 0 && y % 100 != 0)) {\n    printf(\"是闰年\\n\");\n} else {\n    printf(\"不是闰年\\n\");\n}"
            },
            {
              "h": "大括号能不能省",
              "b": "if 后面如果只有一条语句，大括号可以省略，比如 if (n > 0) printf(\"正数\\n\");，这样写能通过编译，看起来也短。但是初学建议不管有几条语句都把大括号写上，原因有两个：第一，省了大括号之后再加第二条语句，很容易以为两条都在 if 里面，其实只有紧跟在 if 后面的第一条才受条件管，第二条不管条件成不成立都会执行；第二，大括号把分支的范围画得清清楚楚，自己回头看代码、别人帮你看错的时候都一眼就能看明白。等写熟练了再考虑省不省，现在先养成写大括号的习惯，能少踩很多莫名其妙的坑。",
              "code": "if (n > 0) {\n    printf(\"正数\\n\");\n}"
            }
          ],
          "pitfalls": [
            {
              "wrong": "if (a = 5) {\n    printf(\"相等\\n\");\n}",
              "correct": "if (a == 5) {\n    printf(\"相等\\n\");\n}",
              "note": "一个等号 = 是赋值：先把 5 放进 a，再拿 a 的值当条件，a 是 5 就恒成立，不管 a 原来是多少。判断相等必须用两个等号 ==。看到 if 括号里只有一个等号，先怀疑是不是写错了。"
            },
            {
              "wrong": "if (a > 0); {\n    printf(\"正数\\n\");\n}",
              "correct": "if (a > 0) {\n    printf(\"正数\\n\");\n}",
              "note": "if 后面多了一个分号，分号本身就是一条空语句，if 管的就只有这个空语句，大括号里的代码和 if 没关系了，不管 a 是正是负都会执行。记住：if (条件) 后面直接写大括号，中间不要加分号。"
            }
          ],
          "example": {
            "title": "判断成绩是否及格",
            "code": "#include <stdio.h>\n\nint main() {\n    int score;\n    scanf(\"%d\", &score);\n    if (score >= 60) {\n        printf(\"及格\\n\");\n    } else {\n        printf(\"不及格\\n\");\n    }\n    return 0;\n}",
            "analysis": "第 1 步：先读入 score；第 2 步：判断 score >= 60 成不成立，>= 是大于等于，60 分正好算及格；第 3 步：成立就打印及格，不成立就走 else 打印不及格。比如输入 75，75 >= 60 成立，输出及格；输入 45，45 >= 60 不成立，输出不及格。if-else 是二选一，不管输入多少分，总有一行结果，而且只输出一行，不会两行都打出来。"
          },
          "problems": [
            {
              "id": "m2t1p1",
              "level": "基础",
              "title": "判断奇偶数",
              "statement": "输入一个整数，判断它是奇数还是偶数。",
              "input": "输入一个整数。",
              "output": "输出“奇数”或“偶数”。",
              "sampleIn": "7",
              "sampleOut": "奇数",
              "hint": "n%2==0 是偶数，否则是奇数。",
              "answer": "#include <stdio.h>\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    if (n % 2 == 0) printf(\"偶数\\n\");\n    else printf(\"奇数\\n\");\n    return 0;\n}",
              "analysis": "取余判断奇偶是最基础的条件判断。n%2==0 偶数，否则奇数。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m2t1p2",
              "level": "基础",
              "title": "判断正负零",
              "statement": "输入一个整数，判断它是正数、负数还是零。",
              "input": "输入一个整数。",
              "output": "输出“正数”“负数”或“零”。",
              "sampleIn": "-3",
              "sampleOut": "负数",
              "hint": "if-else if-else 三分支。",
              "answer": "#include <stdio.h>\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    if (n > 0) printf(\"正数\\n\");\n    else if (n < 0) printf(\"负数\\n\");\n    else printf(\"零\\n\");\n    return 0;\n}",
              "analysis": "三分支用 if-else if-else。注意条件顺序：先判 >0，再判 <0，剩下的就是 0。",
              "source": "PTA 习题集"
            },
            {
              "id": "m2t1p3",
              "level": "进阶",
              "title": "比较三个数大小",
              "statement": "输入三个整数，输出其中最大的数。",
              "input": "输入三个整数。",
              "output": "输出最大的数。",
              "sampleIn": "3 9 5",
              "sampleOut": "9",
              "hint": "设 max=a，再依次跟 b、c 比，大的就换掉 max。",
              "answer": "#include <stdio.h>\nint main() {\n    int a, b, c, max;\n    scanf(\"%d %d %d\", &a, &b, &c);\n    max = a;\n    if (b > max) max = b;\n    if (c > max) max = c;\n    printf(\"%d\\n\", max);\n    return 0;\n}",
              "analysis": "打擂台法：先设 a 是最大，再让 b、c 依次挑战，大的就当新的 max。这是求最值的通用套路。",
              "source": "PTA 习题集"
            },
            {
              "id": "m2t1p4",
              "level": "进阶",
              "title": "闰年判断",
              "statement": "输入一个年份，判断是不是闰年。闰年条件：能被 400 整除，或者能被 4 整除但不能被 100 整除。",
              "input": "输入一个年份。",
              "output": "输出“是闰年”或“不是闰年”。",
              "sampleIn": "2000",
              "sampleOut": "是闰年",
              "hint": "条件是 (y%400==0) || (y%4==0 && y%100!=0)。",
              "answer": "#include <stdio.h>\nint main() {\n    int y;\n    scanf(\"%d\", &y);\n    if ((y % 400 == 0) || (y % 4 == 0 && y % 100 != 0))\n        printf(\"是闰年\\n\");\n    else\n        printf(\"不是闰年\\n\");\n    return 0;\n}",
              "analysis": "闰年有两个条件，用 || 连接。注意 && 优先级比 || 高，所以 y%4==0 && y%100!=0 要加括号才清楚。2000 能被 400 整除，是闰年；1900 能被 100 但不能被 400，不是闰年。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m2t1p5",
              "level": "难题",
              "title": "分段函数求值",
              "statement": "输入一个实数 x，按下面分段函数求 y 并输出（保留 2 位小数）：x<0 时 y=x*x；0<=x<10 时 y=2x+1；x>=10 时 y=100。",
              "input": "输入一个实数 x。",
              "output": "输出 y，保留 2 位小数。",
              "sampleIn": "5",
              "sampleOut": "11.00",
              "hint": "用 if-else if-else 按区间分段。",
              "answer": "#include <stdio.h>\nint main() {\n    double x, y;\n    scanf(\"%lf\", &x);\n    if (x < 0) y = x * x;\n    else if (x < 10) y = 2 * x + 1;\n    else y = 100;\n    printf(\"%.2f\\n\", y);\n    return 0;\n}",
              "analysis": "分段函数是多分支的典型。注意区间的边界：x<0、0<=x<10、x>=10 三段不重不漏。x=5 落在第二段，y=2×5+1=11。",
              "source": "综合自编题"
            }
          ]
        },
        {
          "id": "m2t2",
          "title": "else if",
          "explain": [
            {
              "h": "else if 是什么",
              "b": "else if 是在 if 不成立时再判断一个新条件，可以一层一层往下接，适合条件不止两种、要分好几档的情况。比如成绩分档：90 分以上优秀、80 分以上良好、60 分以上及格，其他不及格，一共四档，用一个 if 加两个 else if 再加一个 else 就能写完。写法是 if (条件1) { ... } else if (条件2) { ... } else if (条件3) { ... } else { ... }。每一个 else if 都是一次新的判断机会，上一个条件不成立才轮到它。",
              "code": "if (score >= 90) printf(\"优秀\\n\");\nelse if (score >= 80) printf(\"良好\\n\");\nelse if (score >= 60) printf(\"及格\\n\");\nelse printf(\"不及格\\n\");"
            },
            {
              "h": "执行过程：从上往下试",
              "b": "else if 的执行过程是：从上往下，一个条件一个条件试，遇到第一个成立的条件就执行它，后面的条件连看都不看，整个结构马上结束。比如 score 是 85：第 1 步，判断 score >= 90，不成立；第 2 步，判断 score >= 80，成立，打印良好；第 3 步，结构结束，后面的 >=60 和 else 直接跳过。score 是 95 时第一步就成立，打印优秀，后面全都不判断。score 是 55 时，三个条件全都不成立，最后走 else 打印不及格。",
              "code": ""
            },
            {
              "h": "条件顺序为什么不能反",
              "b": "写 else if 时，条件的顺序特别重要，判断成绩要从高到低写，先写 >=90，再写 >=80，最后写 >=60。原因很简单：程序是从上往下试的，遇到第一个成立的就停下。如果顺序写反了，先写 >=60，那 95 分一来，第一步 >=60 就成立了，直接打印及格，后面的 >=90 再也没有机会被判断，95 分的好成绩就被错当成刚及格。所以要记住：范围大的条件要放在后面，范围小的、要求高的条件放在前面，让高分先被高档拦住。",
              "code": ""
            },
            {
              "h": "最后的 else 是兜底",
              "b": "最后的 else 是兜底，前面所有条件都不成立时才执行它。比如成绩分档里，前面的 >=90、>=80、>=60 全都不成立，说明分数不到 60 分，else 就打印不及格。else 后面没有条件，也不用写条件，它的意思就是除了前面那些情况，剩下的全归我管。有了 else，不管输入什么值，程序都有一个明确的去处，不会出现前面条件全都不成立、程序什么都不做的情况。else 可以不写，不写就是全都不成立时什么都不做；但分档、定等级这类题，建议把 else 写上，兜底更稳当。",
              "code": ""
            }
          ],
          "pitfalls": [
            {
              "wrong": "if (score >= 60) printf(\"及格\\n\");\nelse if (score >= 80) printf(\"良好\\n\");\nelse if (score >= 90) printf(\"优秀\\n\");",
              "correct": "if (score >= 90) printf(\"优秀\\n\");\nelse if (score >= 80) printf(\"良好\\n\");\nelse if (score >= 60) printf(\"及格\\n\");",
              "note": "从低到高写，90 分一来就先被 >=60 拦住，打印及格，后面的条件再也没机会判断。成绩分档一定要从高到低写，让要求高的条件先判断。"
            },
            {
              "wrong": "else {\n    if (score >= 80) printf(\"良好\\n\");\n    else printf(\"及格\\n\");\n}",
              "correct": "else if (score >= 80) printf(\"良好\\n\");\nelse printf(\"及格\\n\");",
              "note": "else 里面再套一个 if，虽然效果一样，但分支一多就嵌套得很深，大括号一层套一层，很容易数错、看错。直接写 else if 更简洁，结构一目了然，别把简单的事情写复杂了。"
            }
          ],
          "example": {
            "title": "成绩分档",
            "code": "#include <stdio.h>\n\nint main() {\n    int score;\n    scanf(\"%d\", &score);\n    if (score >= 90) printf(\"优秀\\n\");\n    else if (score >= 80) printf(\"良好\\n\");\n    else if (score >= 60) printf(\"及格\\n\");\n    else printf(\"不及格\\n\");\n    return 0;\n}",
            "analysis": "从高到低判断：先看是不是 >=90，是就打印优秀；不是再看 >=80，以此类推。顺序不能反，90 分要先被 >=90 拦住。第 1 步：输入 score；第 2 步：score 是 85 时，>=90 不成立，>=80 成立，打印良好，后面的条件不再判断；第 3 步：score 是 55 时，三个条件全都不成立，走 else 打印不及格。每一档只会命中一次，分数落在哪个区间就输出哪一档的结果。"
          },
          "problems": [
            {
              "id": "m2t2p1",
              "level": "基础",
              "title": "成绩等级",
              "statement": "输入百分制成绩，输出等级：90 及以上 A，80~89 B，70~79 C，60~69 D，60 以下 E。",
              "input": "输入一个整数成绩。",
              "output": "输出等级字母。",
              "sampleIn": "85",
              "sampleOut": "B",
              "hint": "用 else if 从高到低依次判断。",
              "answer": "#include <stdio.h>\nint main() {\n    int s;\n    scanf(\"%d\", &s);\n    if (s >= 90) printf(\"A\\n\");\n    else if (s >= 80) printf(\"B\\n\");\n    else if (s >= 70) printf(\"C\\n\");\n    else if (s >= 60) printf(\"D\\n\");\n    else printf(\"E\\n\");\n    return 0;\n}",
              "analysis": "等级互斥，用 else if 从高到低判断。注意边界：80 属于 B，79 属于 C。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m2t2p2",
              "level": "基础",
              "title": "BMI 判断",
              "statement": "输入身高（米）和体重（千克），算 BMI = 体重/身高²，输出体型：BMI<18.5 偏瘦，18.5~24 正常，24~28 超重，28 及以上肥胖。",
              "input": "输入身高和体重。",
              "output": "输出体型。",
              "sampleIn": "1.75 70",
              "sampleOut": "正常",
              "hint": "BMI=体重/(身高*身高)，用 else if 分段。",
              "answer": "#include <stdio.h>\nint main() {\n    double h, w, bmi;\n    scanf(\"%lf %lf\", &h, &w);\n    bmi = w / (h * h);\n    if (bmi < 18.5) printf(\"偏瘦\\n\");\n    else if (bmi < 24) printf(\"正常\\n\");\n    else if (bmi < 28) printf(\"超重\\n\");\n    else printf(\"肥胖\\n\");\n    return 0;\n}",
              "analysis": "BMI 是实数，分段用 else if。h=1.75、w=70 时 BMI≈22.86，落在 18.5~24，正常。",
              "source": "PTA 习题集"
            },
            {
              "id": "m2t2p3",
              "level": "进阶",
              "title": "个人所得税",
              "statement": "输入月工资（元），按下面规则算应缴个人所得税并输出（保留 2 位小数）：不超过 3000 的部分按 3% 缴；3000~12000 的部分按 10% 缴；12000 以上的部分按 20% 缴。",
              "input": "输入月工资。",
              "output": "输出应缴税额，保留 2 位小数。",
              "sampleIn": "15000",
              "sampleOut": "1590.00",
              "hint": "分段累进：每一段只对落在本段的钱征税。",
              "answer": "#include <stdio.h>\nint main() {\n    double salary, tax = 0;\n    scanf(\"%lf\", &salary);\n    if (salary <= 3000) tax = salary * 0.03;\n    else if (salary <= 12000) tax = 3000 * 0.03 + (salary - 3000) * 0.10;\n    else tax = 3000 * 0.03 + 9000 * 0.10 + (salary - 12000) * 0.20;\n    printf(\"%.2f\\n\", tax);\n    return 0;\n}",
              "analysis": "分段累进税：每一段只对落在本段的钱征税。15000 元：3000×3%=90，9000×10%=900，3000×20%=600，合计 1590.00。注意不是全额按最高税率算。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m2t2p4",
              "level": "进阶",
              "title": "出租车计费",
              "statement": "输入行驶里程（千米）和等待时间（分钟），算车费：起步价 10 元（含 3 千米），3~10 千米每千米 2 元，10 千米以上每千米 3 元；等待每分钟 0.5 元。输出车费（保留 2 位小数）。",
              "input": "输入里程和等待时间。",
              "output": "输出车费，保留 2 位小数。",
              "sampleIn": "12 5",
              "sampleOut": "32.50",
              "hint": "分段：3 千米内 10 元，3~10 千米 2 元/千米，10 千米以上 3 元/千米，再加等待费。",
              "answer": "#include <stdio.h>\nint main() {\n    double km, wait, fee;\n    scanf(\"%lf %lf\", &km, &wait);\n    if (km <= 3) fee = 10;\n    else if (km <= 10) fee = 10 + (km - 3) * 2;\n    else fee = 10 + 7 * 2 + (km - 10) * 3;\n    fee += wait * 0.5;\n    printf(\"%.2f\\n\", fee);\n    return 0;\n}",
              "analysis": "分段计费：12 千米是 10 + 7×2 + 2×3 = 30 元，等待 5 分钟 2.5 元，合计 32.50 元。",
              "source": "PTA 习题集"
            },
            {
              "id": "m2t2p5",
              "level": "难题",
              "title": "多分支嵌套综合",
              "statement": "输入一个年份和月份，输出该月的天数。2 月要判断闰年（闰年 29 天，平年 28 天）；4、6、9、11 月 30 天；其余 31 天。",
              "input": "输入年份和月份。",
              "output": "输出该月天数。",
              "sampleIn": "2024 2",
              "sampleOut": "29",
              "hint": "先用 if-else 判断月份，再在 2 月里嵌套判断闰年。",
              "answer": "#include <stdio.h>\nint main() {\n    int y, m;\n    scanf(\"%d %d\", &y, &m);\n    if (m == 2) {\n        if ((y % 400 == 0) || (y % 4 == 0 && y % 100 != 0))\n            printf(\"29\\n\");\n        else\n            printf(\"28\\n\");\n    } else if (m == 4 || m == 6 || m == 9 || m == 11) {\n        printf(\"30\\n\");\n    } else {\n        printf(\"31\\n\");\n    }\n    return 0;\n}",
              "analysis": "综合了 else if 和嵌套 if。先分月份：2 月单独处理（里面再嵌套闰年判断），4/6/9/11 月 30 天，其余 31 天。2024 是闰年，2 月 29 天。",
              "source": "综合自编题"
            }
          ]
        },
        {
          "id": "m2t3",
          "title": "switch",
          "explain": [
            {
              "h": "switch 是什么",
              "b": "switch 是按值分情况：先看 switch 小括号里的变量等于几，再去找值相同的 case，从那个 case 开始执行。写法是 switch (变量) { case 值1: ...; break; case 值2: ...; break; default: ...; }。比如输入 1 到 7 打印星期几，值是几就对应星期几，一共有 7 种情况，用 switch 写比写 7 个 else if 更清楚。switch 适合的情况是：一个变量有好几个固定的取值，每种取值要做不同的事。",
              "code": "switch (n) {\n    case 1: printf(\"一\\n\"); break;\n    case 2: printf(\"二\\n\"); break;\n    default: printf(\"其他\\n\");\n}"
            },
            {
              "h": "执行过程：先算值，再找 case",
              "b": "switch 的执行过程分两步：第 1 步，先算出 switch 小括号里的值，比如 day 是 3；第 2 步，从上往下找值等于 3 的 case，找到 case 3 就从那里开始执行。注意找 case 只比值等不等，不比大小，找到就进去，找不到就走 default。执行是从匹配的 case 开始往下走的，不是从 switch 的第一行开始走的，所以 day 是 3 时，case 1 和 case 2 的代码根本不会被执行，程序直接跳到 case 3。",
              "code": ""
            },
            {
              "h": "break 是干什么的",
              "b": "每个 case 后面要写 break，break 的意思是立刻跳出 switch，后面的 case 不再执行。如果 case 后面没有 break，程序执行完这个 case 的代码，会继续往下执行下一个 case 的代码，这就叫穿透。比如输入 1，case 1 打印一，后面没有 break，就会接着执行 case 2 打印二，直到遇到 break 才停，最后打出来一二。穿透有时候是故意用的，比如月份天数里 1、3、5、7 月都是 31 天，可以让这几个 case 共用一段代码；但大多数时候穿透是忘写 break 造成的错，所以写完每个 case 先把 break 补上。",
              "code": "switch (1) {\n    case 1: printf(\"一\");\n    case 2: printf(\"二\"); break;\n    default: printf(\"其他\");\n}\n// 输出：一二"
            },
            {
              "h": "default 和 case 的规矩",
              "b": "default 是兜底，没有任何 case 匹配时执行。比如输入 8，1 到 7 的 case 全都对不上，就走 default 打印输入错误。default 可以不写，但写上能让非法输入也有一个明确的说法，而不是什么都不输出。另外 case 后面的值必须是常量，比如 case 1:、case 'A':，不能是变量，写 case n: 是错的，因为 switch 是拿一个确定的值去比一堆确定的值，变量的值在运行前不知道，没法拿来当比对的标准。case 的值也不能重复，两个 case 写同一个值，程序会不知道该进哪一个。",
              "code": ""
            }
          ],
          "pitfalls": [
            {
              "wrong": "case 1: printf(\"星期一\\n\");\ncase 2: printf(\"星期二\\n\");",
              "correct": "case 1: printf(\"星期一\\n\"); break;\ncase 2: printf(\"星期二\\n\"); break;",
              "note": "case 1 执行完没有 break，会穿透到 case 2，输入 1 会同时打印星期一和星期二。每个 case 执行完都要写 break，除非你是故意让几个 case 共用一段代码。"
            },
            {
              "wrong": "int n = 1;\nswitch (day) {\n    case n: printf(\"一\\n\"); break;\n}",
              "correct": "switch (day) {\n    case 1: printf(\"一\\n\"); break;\n    case 2: printf(\"二\\n\"); break;\n}",
              "note": "case 后面只能是常量，不能是变量。case n: 是错的，因为 n 是变量，它的值在运行前不确定。想分情况就把每种取值写成常量，比如 case 1:、case 'A':。"
            }
          ],
          "example": {
            "title": "输入数字打印星期",
            "code": "#include <stdio.h>\n\nint main() {\n    int day;\n    scanf(\"%d\", &day);\n    switch (day) {\n        case 1: printf(\"星期一\\n\"); break;\n        case 2: printf(\"星期二\\n\"); break;\n        case 3: printf(\"星期三\\n\"); break;\n        case 4: printf(\"星期四\\n\"); break;\n        case 5: printf(\"星期五\\n\"); break;\n        case 6: printf(\"星期六\\n\"); break;\n        case 7: printf(\"星期日\\n\"); break;\n        default: printf(\"输入错误\\n\");\n    }\n    return 0;\n}",
            "analysis": "第 1 步：读入 day；第 2 步：switch 按 day 的值去找对应的 case，day 是 3 就找到 case 3，打印星期三，然后遇到 break 跳出 switch；第 3 步：如果 day 是 1 到 7 之外的值，比如 8，没有任何 case 匹配，就走 default 打印输入错误。每个 case 后面都有 break，所以只会打印一行，不会穿透到下一个 case。"
          },
          "problems": [
            {
              "id": "m2t3p1",
              "level": "基础",
              "title": "星期几",
              "statement": "输入 1~7，输出对应的英文星期名（Monday~Sunday）。输入其他数字输出“输入错误”。",
              "input": "输入一个整数。",
              "output": "输出英文星期名或“输入错误”。",
              "sampleIn": "3",
              "sampleOut": "Wednesday",
              "hint": "用 switch，case 1~7，default 输出输入错误。",
              "answer": "#include <stdio.h>\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    switch (n) {\n        case 1: printf(\"Monday\\n\"); break;\n        case 2: printf(\"Tuesday\\n\"); break;\n        case 3: printf(\"Wednesday\\n\"); break;\n        case 4: printf(\"Thursday\\n\"); break;\n        case 5: printf(\"Friday\\n\"); break;\n        case 6: printf(\"Saturday\\n\"); break;\n        case 7: printf(\"Sunday\\n\"); break;\n        default: printf(\"输入错误\\n\");\n    }\n    return 0;\n}",
              "analysis": "switch 的典型用法。每个 case 写 break，不然会穿透到下一个 case。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m2t3p2",
              "level": "基础",
              "title": "月份天数",
              "statement": "输入月份 1~12，输出该月有多少天（2 月按 28 天算）。",
              "input": "输入一个整数月份。",
              "output": "输出该月天数。",
              "sampleIn": "4",
              "sampleOut": "30",
              "hint": "1、3、5、7、8、10、12 月 31 天；4、6、9、11 月 30 天；2 月 28 天。多个 case 可以共用一段代码。",
              "answer": "#include <stdio.h>\nint main() {\n    int m;\n    scanf(\"%d\", &m);\n    switch (m) {\n        case 1: case 3: case 5: case 7:\n        case 8: case 10: case 12:\n            printf(\"31\\n\"); break;\n        case 4: case 6: case 9: case 11:\n            printf(\"30\\n\"); break;\n        case 2:\n            printf(\"28\\n\"); break;\n    }\n    return 0;\n}",
              "analysis": "多个 case 共用一段代码的写法：case 1、3、5、7、8、10、12 后面都不写 break，直接落到 printf(\"31\")，再 break。这是 switch 穿透的合理利用。",
              "source": "PTA 习题集"
            },
            {
              "id": "m2t3p3",
              "level": "进阶",
              "title": "简单计算器",
              "statement": "输入两个数和一个运算符（+、-、*、/），输出运算结果。输入格式：3 + 5。结果保留 2 位小数。",
              "input": "输入“数 运算符 数”。",
              "output": "输出运算结果，保留 2 位小数。",
              "sampleIn": "3 + 5",
              "sampleOut": "8.00",
              "hint": "用 char 读运算符，switch 按运算符分支；注意 scanf 里 %c 前面加空格跳过空白。",
              "answer": "#include <stdio.h>\nint main() {\n    double a, b;\n    char op;\n    scanf(\"%lf %c %lf\", &a, &op, &b);\n    switch (op) {\n        case '+': printf(\"%.2f\\n\", a + b); break;\n        case '-': printf(\"%.2f\\n\", a - b); break;\n        case '*': printf(\"%.2f\\n\", a * b); break;\n        case '/': printf(\"%.2f\\n\", a / b); break;\n    }\n    return 0;\n}",
              "analysis": "switch 按字符分支。scanf 里 %c 前面要加空格，不然会读到前面的空格。3+5=8.00。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m2t3p4",
              "level": "进阶",
              "title": "成绩等级 switch 版",
              "statement": "输入百分制成绩，用 switch 输出等级：90 及以上 A，80~89 B，70~79 C，60~69 D，60 以下 E。",
              "input": "输入一个整数成绩。",
              "output": "输出等级字母。",
              "sampleIn": "85",
              "sampleOut": "B",
              "hint": "先把成绩除以 10，再 switch：9 和 10 是 A，8 是 B，依此类推。",
              "answer": "#include <stdio.h>\nint main() {\n    int s;\n    scanf(\"%d\", &s);\n    switch (s / 10) {\n        case 10: case 9: printf(\"A\\n\"); break;\n        case 8: printf(\"B\\n\"); break;\n        case 7: printf(\"C\\n\"); break;\n        case 6: printf(\"D\\n\"); break;\n        default: printf(\"E\\n\"); break;\n    }\n    return 0;\n}",
              "analysis": "switch 的 case 只能是常量，不能写范围，所以先把成绩除以 10 变成 0~10 的数，再按这个数分支。100 分时 s/10=10，和 9 共用 A。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m2t3p5",
              "level": "难题",
              "title": "switch 穿透综合",
              "statement": "输入一个月份和年份，输出该月有多少天。2 月要判断闰年。用 switch 实现，多个 case 共用代码。",
              "input": "输入年份和月份。",
              "output": "输出该月天数。",
              "sampleIn": "2024 2",
              "sampleOut": "29",
              "hint": "switch 按月份分支，2 月的 case 里再用 if 判断闰年。",
              "answer": "#include <stdio.h>\nint main() {\n    int y, m;\n    scanf(\"%d %d\", &y, &m);\n    switch (m) {\n        case 1: case 3: case 5: case 7:\n        case 8: case 10: case 12:\n            printf(\"31\\n\"); break;\n        case 4: case 6: case 9: case 11:\n            printf(\"30\\n\"); break;\n        case 2:\n            if ((y % 400 == 0) || (y % 4 == 0 && y % 100 != 0))\n                printf(\"29\\n\");\n            else\n                printf(\"28\\n\");\n            break;\n    }\n    return 0;\n}",
              "analysis": "综合了 switch 穿透和嵌套 if。多个 case 共用 31 天的代码；2 月的 case 里嵌套 if 判断闰年。2024 是闰年，2 月 29 天。",
              "source": "综合自编题"
            }
          ]
        },
        {
          "id": "m2t4",
          "title": "三目运算符",
          "explain": [
            {
              "h": "三目运算符是什么",
              "b": "三目运算符是条件判断的简写，写法是 条件 ? 值1 : 值2，读作如果条件成立就取冒号前面的值1，不成立就取冒号后面的值2。之所以叫三目，是因为它有三个部分：条件、值1、值2，中间用问号和冒号隔开。比如 max = (a > b) ? a : b; 的意思是：如果 a 大于 b，max 就是 a，否则 max 就是 b。一行代码就把二选一写完了，不用写完整的 if 和 else，也不用写大括号。",
              "code": "int max = (a > b) ? a : b;"
            },
            {
              "h": "一步一步看它怎么跑",
              "b": "以 a = 3、b = 5 为例，看 max = (a > b) ? a : b; 是怎么跑的：第 1 步，先算问号前面的条件 a > b，也就是 3 > 5，不成立；第 2 步，条件不成立，就跳过冒号前面的 a，取冒号后面的 b；第 3 步，把 b 的值 5 赋给 max。所以 max 是 5。如果反过来 a = 8、b = 5，第 1 步算 8 > 5 成立，第 2 步就取冒号前面的 a，max 就是 8。三目运算符先算条件，再按成立还是不成立选一边的值，整个过程只有这两步。",
              "code": ""
            },
            {
              "h": "什么时候用三目",
              "b": "三目运算符适合简单的二选一，尤其是二选一赋值，比如取两个数里大的、算绝对值、判断及格不及格。写成三目只要一行，写成 if-else 要四五行，简单的题用三目更清爽。但是复杂的判断还是用 if-else 更清楚，比如条件很长、分支里要做好几件事、或者要分三档以上的情况，硬写成三目会挤在一行里，很难读也很容易改错。记住一个分界：分支里只有一句话、只取一个值时用三目；分支里事情多、逻辑复杂时用 if-else。",
              "code": "int abs = (n >= 0) ? n : -n;"
            },
            {
              "h": "三目还能选字符串",
              "b": "三目运算符选的不只是数字，也可以是字符串。比如判断及格可以写 printf(\"%s\\n\", (score >= 60) ? \"及格\" : \"不及格\");，条件成立就取及格，不成立取不及格，再用 %s 打印出来。判断奇偶也可以写 printf(\"%s\\n\", (n % 2 == 0) ? \"偶数\" : \"奇数\");。注意三目运算符两边的类型要一致，一边是字符串、一边是数字就乱了。还有条件最好加括号，写成 (a > b) ? a : b，括号能把条件圈清楚，不容易和别的运算符混在一起算错。",
              "code": "printf(\"%s\\n\", (score >= 60) ? \"及格\" : \"不及格\");"
            }
          ],
          "pitfalls": [
            {
              "wrong": "max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);",
              "correct": "max = (a > b) ? a : b;\nmax = (max > c) ? max : c;",
              "note": "三目运算符嵌套太多，虽然能用，但一行里套了好几层问号冒号，很难读，改的时候也很容易改错。求三个数最大，分两步写更清楚：先求 a、b 里大的存到 max，再让 max 跟 c 比。"
            },
            {
              "wrong": "int x = (a > b) ? a : 3.5;",
              "correct": "int x = (a > b) ? a : b;\n// 两边都是 int，结果才是 int",
              "note": "三目运算符两边的类型要一致，一边是 int、一边是 float，结果会按 float 算，再存回 int 时小数部分会被丢掉，容易出错。写三目之前先看一眼两边是不是同一种类型。"
            }
          ],
          "example": {
            "title": "求两个数的最大值",
            "code": "#include <stdio.h>\n\nint main() {\n    int a = 3, b = 5;\n    int max = (a > b) ? a : b;\n    printf(\"%d\\n\", max);\n    return 0;\n}",
            "analysis": "第 1 步：a = 3、b = 5；第 2 步：算条件 (a > b)，也就是 3 > 5，不成立；第 3 步：条件不成立，取冒号后面的 b，把 5 赋给 max；第 4 步：打印 max，输出 5。整个判断只用了一行代码，(a > b) ? a : b 的意思是 a 大于 b 时取 a，否则取 b，这里条件不成立，所以 max 是 b，也就是 5。"
          },
          "problems": [
            {
              "id": "m2t4p1",
              "level": "基础",
              "title": "两数取大",
              "statement": "输入两个整数，输出其中较大的数。",
              "input": "输入两个整数。",
              "output": "输出较大的数。",
              "sampleIn": "3 5",
              "sampleOut": "5",
              "hint": "用三目运算符：(a>b)?a:b。",
              "answer": "#include <stdio.h>\nint main() {\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    printf(\"%d\\n\", (a > b) ? a : b);\n    return 0;\n}",
              "analysis": "三目运算符是 if-else 的简写。a>b 成立取 a，否则取 b。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m2t4p2",
              "level": "基础",
              "title": "绝对值",
              "statement": "输入一个整数，输出它的绝对值。",
              "input": "输入一个整数。",
              "output": "输出绝对值。",
              "sampleIn": "-7",
              "sampleOut": "7",
              "hint": "(n>=0)?n:-n。",
              "answer": "#include <stdio.h>\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    printf(\"%d\\n\", (n >= 0) ? n : -n);\n    return 0;\n}",
              "analysis": "n>=0 取 n，否则取 -n。-7 的绝对值是 7。",
              "source": "PTA 习题集"
            },
            {
              "id": "m2t4p3",
              "level": "进阶",
              "title": "三数取大",
              "statement": "输入三个整数，输出其中最大的数。要求用三目运算符。",
              "input": "输入三个整数。",
              "output": "输出最大的数。",
              "sampleIn": "3 9 5",
              "sampleOut": "9",
              "hint": "先用三目求 a、b 的最大，再跟 c 比：((a>b)?a:b)>c ? ((a>b)?a:b) : c。可以先存到变量里再比。",
              "answer": "#include <stdio.h>\nint main() {\n    int a, b, c, max;\n    scanf(\"%d %d %d\", &a, &b, &c);\n    max = (a > b) ? a : b;\n    max = (max > c) ? max : c;\n    printf(\"%d\\n\", max);\n    return 0;\n}",
              "analysis": "三目嵌套写起来容易乱，分两步写更清楚：先求 a、b 的最大存到 max，再让 max 跟 c 比。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m2t4p4",
              "level": "进阶",
              "title": "判断闰年三目版",
              "statement": "输入一个年份，用三目运算符输出“是闰年”或“不是闰年”。",
              "input": "输入一个年份。",
              "output": "输出判断结果。",
              "sampleIn": "2000",
              "sampleOut": "是闰年",
              "hint": "条件是 (y%400==0)||(y%4==0&&y%100!=0)，用三目选字符串。",
              "answer": "#include <stdio.h>\nint main() {\n    int y;\n    scanf(\"%d\", &y);\n    printf(\"%s\\n\", ((y % 400 == 0) || (y % 4 == 0 && y % 100 != 0)) ? \"是闰年\" : \"不是闰年\");\n    return 0;\n}",
              "analysis": "三目运算符也可以选字符串。条件成立取“是闰年”，否则取“不是闰年”。%s 输出字符串。",
              "source": "PTA 习题集"
            },
            {
              "id": "m2t4p5",
              "level": "难题",
              "title": "嵌套三目综合",
              "statement": "输入一个百分制成绩，用嵌套三目运算符输出等级：90 及以上 A，80~89 B，70~79 C，60~69 D，60 以下 E。",
              "input": "输入一个整数成绩。",
              "output": "输出等级字母。",
              "sampleIn": "85",
              "sampleOut": "B",
              "hint": "嵌套三目：(s>=90)?'A':(s>=80)?'B':(s>=70)?'C':(s>=60)?'D':'E'。",
              "answer": "#include <stdio.h>\nint main() {\n    int s;\n    scanf(\"%d\", &s);\n    printf(\"%c\\n\", (s >= 90) ? 'A' : (s >= 80) ? 'B' : (s >= 70) ? 'C' : (s >= 60) ? 'D' : 'E');\n    return 0;\n}",
              "analysis": "嵌套三目是从右往左结合的。s=85 时，>=90 不成立，往后看 >=80 成立，取 'B'。嵌套三目写起来紧凑但容易看错，复杂逻辑还是用 else if 更清楚。",
              "source": "综合自编题"
            }
          ]
        }
      ]
    },
    {
      "id": "m3",
      "num": "03",
      "title": "循环",
      "desc": "从概念到代码，按顺序掌握本模块核心能力。3 个知识点 / 15 道题",
      "topics": [
        {
          "id": "m3t1",
          "title": "for 与 while",
          "explain": [
            {
              "h": "for 是什么",
              "b": "for 循环适合次数已知的情况，写法是 for (起点; 条件; 每轮变化) { 重复做的事 }。括号里有三部分，用分号隔开：第 1 部分是起点，比如 i = 1；第 2 部分是条件，比如 i <= n，条件成立才继续跑；第 3 部分是每轮变化，比如 i++，每跑完一轮就让 i 加 1。最常见的用法是 for (i = 1; i <= n; i++)，意思是 i 从 1 开始，每轮加 1，一直到 n 为止。想打印 1 到 5、求 1 到 n 的和，次数都是事先知道的，用 for 写最合适。",
              "code": "for (i = 1; i <= 5; i++) {\n    printf(\"%d \", i);\n}\n// 输出：1 2 3 4 5"
            },
            {
              "h": "执行顺序：一步一步来",
              "b": "for 的执行顺序是固定的：第 1 步，先做起点，比如 i = 1，只做一次；第 2 步，判断条件 i <= 5，成立就往下走；第 3 步，执行大括号里的内容，比如打印 i；第 4 步，做每轮变化 i++，i 变成 2；第 5 步，回到第 2 步再判断条件，成立就再跑一轮。这样一轮一轮跑：i 是 1 时打印 1，i 是 2 时打印 2，一直跑到 i 是 6，判断 6 <= 5 不成立，循环才停下。起点只做一次，条件每轮都要判断一次，每轮变化在每轮结束时做一次。",
              "code": ""
            },
            {
              "h": "累加的套路",
              "b": "累加的套路是：先准备一个 sum = 0，在循环里反复写 sum = sum + i，把每个 i 都攒进去。比如求 1 到 100 的和，第 1 步 sum 是 0；第 2 步 i = 1 时，sum = 0 + 1，变成 1；第 3 步 i = 2 时，sum = 1 + 2，变成 3；第 4 步 i = 3 时，sum = 3 + 3，变成 6；就这样一直攒到 i = 100，sum 最后变成 5050。注意 sum 一定要先设成 0 再进循环，而且打印 sum 的 printf 要写在循环外面，只打印一次最终结果，写在循环里面会把每轮的中间结果全打出来。",
              "code": "int sum = 0;\nfor (i = 1; i <= 100; i++) {\n    sum = sum + i;\n}\nprintf(\"%d\\n\", sum);"
            },
            {
              "h": "计数的套路",
              "b": "计数的套路和累加差不多：先准备一个 count = 0，符合条件时就 count++。比如打印 1 到 100 里所有 3 的倍数、每行 5 个：第 1 步 count 是 0；第 2 步 i 从 1 跑到 100，每轮先判断 i % 3 == 0，是 3 的倍数才打印 i，然后 count++；第 3 步，每打印完一个就判断 count % 5 == 0，满 5 个就换行。比如 i 是 3 时 count 变成 1，i 是 6 时 count 变成 2，一直数到 i 是 15，count 变成 5，满 5 个就换行。count 的初值也要先设成 0，不然里面是随机数，数出来的个数全是错的。",
              "code": "int count = 0;\nfor (i = 1; i <= 100; i++) {\n    if (i % 3 == 0) {\n        printf(\"%d \", i);\n        count++;\n        if (count % 5 == 0) printf(\"\\n\");\n    }\n}"
            },
            {
              "h": "break 和 continue",
              "b": "break 是立刻跳出整个循环，后面的轮次都不跑了；continue 是跳过这一轮剩下的代码，直接进下一轮，循环本身不停。比如判断质数，一旦找到一个能整除的因子，就能确定不是质数，立刻 break，不用再试下去，省了很多轮。再比如打印 1 到 20 里除了 3 的倍数以外的数，遇到 i % 3 == 0 就 continue，这一轮的打印被跳过，直接进下一轮，3、6、9 这些数就都不会被打印。记住：break 是整个循环提前结束，continue 只是这一轮提前结束，两个词别弄混。",
              "code": "for (i = 1; i <= 20; i++) {\n    if (i % 3 == 0) continue;\n    printf(\"%d\\n\", i);\n}"
            },
            {
              "h": "嵌套循环和质数判断",
              "b": "嵌套循环是循环里面还有循环，执行过程是：外层走一步，内层要完整跑完一遍，外层才走下一步。以九九乘法表为例，外层 i 管行，i 固定在某一行时，内层 j 从 1 一直跑到 i，把这一行的算式打完，然后打印换行，i 才变成下一行。内层条件 j <= i 决定了每一行有几个算式：第 1 行 1 个，第 2 行 2 个，第 9 行 9 个。判断质数也靠这个思路：先假设是质数，flag = 1，从 2 试到 n - 1，只要有一个能整除就把 flag 改成 0 并 break；循环全部跑完都没找到因子，flag 还是 1，才是质数。判断和打印要放在循环结束后做，不能放在循环里每一轮都判断。",
              "code": "int flag = 1;\nfor (i = 2; i < n; i++) {\n    if (n % i == 0) { flag = 0; break; }\n}\nif (flag) printf(\"是素数\\n\");\nelse printf(\"不是素数\\n\");"
            }
          ],
          "pitfalls": [
            {
              "wrong": "for (i = 1; i <= n; i++) {\n    i = i + 1;\n    printf(\"%d \", i);\n}",
              "correct": "for (i = 1; i <= n; i++) {\n    printf(\"%d \", i);\n    // 循环体里不要再改 i\n}",
              "note": "for 括号里已经有 i++，循环体里再写 i = i + 1，i 一轮就加 2，会跳着数，比如只跑奇数。for 的变化只写在括号里，循环体里不要再动 i。"
            },
            {
              "wrong": "int sum;\nfor (i = 1; i <= n; i++) {\n    sum = sum + i;\n}",
              "correct": "int sum = 0;\nfor (i = 1; i <= n; i++) {\n    sum = sum + i;\n}",
              "note": "sum 和 count 忘了初始化为 0，没赋初值的变量里面是随机数，累加结果全错。累加先把 sum 设成 0，计数先把 count 设成 0，阶乘先把 ans 设成 1，进循环之前先把初值写好。"
            },
            {
              "wrong": "for (i = 1; i < n; i++) {\n    // 想跑到 n\n}",
              "correct": "for (i = 1; i <= n; i++) {\n    // 想跑到 n 就必须带等号\n}",
              "note": "条件写成 i < n 还是 i <= n 差一个：i < n 只跑到 n - 1，i <= n 才能跑到 n。想把 n 也算进去，条件必须带等号，写完先数一遍首尾两个值对不对。"
            },
            {
              "wrong": "for (i = 2; i <= n; i++) {\n    if (n % i == 0) { flag = 0; break; }\n}",
              "correct": "for (i = 2; i < n; i++) {\n    if (n % i == 0) { flag = 0; break; }\n}\n// 或者 i * i <= n",
              "note": "质数判断把条件写成 i <= n 是错的：i 等于 n 时 n % n == 0 永远成立，任何数最后都会被判成不是质数。条件应该是 i < n，或者更省的 i * i <= n，试到 n - 1 就够了。"
            },
            {
              "wrong": "for (i = 2; i < n; i++) {\n    if (n % i == 0) flag = 0;\n    // 找到因子后没有 break\n}",
              "correct": "for (i = 2; i < n; i++) {\n    if (n % i == 0) { flag = 0; break; }\n}",
              "note": "找到因子后把 break 漏写，循环还会继续跑，后面的判断会把结论改来改去。找到一个因子就够了，立刻 break 停下，后面的轮次不用再试。"
            },
            {
              "wrong": "for (i = 2; i < n; i++) {\n    if (n % i == 0) printf(\"不是素数\\n\");\n    else printf(\"是素数\\n\");\n}",
              "correct": "for (i = 2; i < n; i++) {\n    if (n % i == 0) { flag = 0; break; }\n}\nif (flag) printf(\"是素数\\n\");\nelse printf(\"不是素数\\n\");",
              "note": "把判断和打印写在循环里面，每一轮都会打印一次，一个数会输出很多行，而且每轮的结论都可能不一样。判断要等循环跑完再做，打印也要写在循环外面，只打印一次。"
            },
            {
              "wrong": "// 以为外层 i 和内层 j 一起变\nfor (i = 1; i <= 9; i++)\n    for (j = 1; j <= i; j++)\n        printf(\"%d*%d=%d \", j, i, j * i);",
              "correct": "// 外层 i 走一步，内层 j 从 1 跑到 i 才算完，i 再走下一步\nfor (i = 1; i <= 9; i++) {\n    for (j = 1; j <= i; j++) {\n        printf(\"%d*%d=%d \", j, i, j * i);\n    }\n    printf(\"\\n\");\n}",
              "note": "分不清外层和内层谁先变：内层跑完一整遍，外层才变一次。i 是 1 时 j 跑 1 次，i 是 2 时 j 跑 2 次。把 i、j 每一轮的值写在纸上推一遍最清楚。"
            }
          ],
          "example": {
            "title": "求 1 到 100 的和",
            "code": "#include <stdio.h>\n\nint main() {\n    int i, sum = 0;\n    for (i = 1; i <= 100; i++) {\n        sum = sum + i;\n    }\n    printf(\"%d\\n\", sum);\n    return 0;\n}",
            "analysis": "第 1 步：sum 先设成 0，i 从 1 开始；第 2 步：i = 1 时 sum = 0 + 1，变成 1；第 3 步：i = 2 时 sum = 1 + 2，变成 3；第 4 步：i = 3 时 sum = 3 + 3，变成 6；之后每轮都把新的 i 加进 sum，一直攒到 i = 100，sum 变成 5050；第 5 步：i 变成 101，条件不成立，循环停下；第 6 步：循环外面的 printf 只打印一次最终结果 5050，写在里面会把中间结果全打出来。"
          },
          "problems": [
            {
              "id": "m3t1p1",
              "level": "基础",
              "title": "1 到 n 求和",
              "statement": "输入 n，求 1 到 n 所有整数的和。",
              "input": "输入一个整数 n。",
              "output": "输出和。",
              "sampleIn": "5",
              "sampleOut": "15",
              "hint": "sum=0，for 循环里 sum=sum+i。",
              "answer": "#include <stdio.h>\nint main() {\n    int n, i, sum = 0;\n    scanf(\"%d\", &n);\n    for (i = 1; i <= n; i++) {\n        sum = sum + i;\n    }\n    printf(\"%d\\n\", sum);\n    return 0;\n}",
              "analysis": "累加套路：sum 初始化为 0，每轮加 i。n=5 时，1+2+3+4+5=15。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m3t1p2",
              "level": "基础",
              "title": "九九乘法表",
              "statement": "用双重 for 循环输出九九乘法表（1×1 到 9×9）。每行格式：1×1=1，算式之间用空格分隔。",
              "input": "无输入。",
              "output": "输出九九乘法表。",
              "sampleIn": "（无）",
              "sampleOut": "1×1=1\n1×2=2 2×2=4\n1×3=3 2×3=6 3×3=9",
              "hint": "外层 i 控制行，内层 j 从 1 到 i；j<=i 控制每行算式个数。",
              "answer": "#include <stdio.h>\nint main() {\n    int i, j;\n    for (i = 1; i <= 9; i++) {\n        for (j = 1; j <= i; j++) {\n            printf(\"%d×%d=%d \", j, i, i * j);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
              "analysis": "嵌套循环：外层 i 固定一行，内层 j 从 1 跑到 i 才换行。j<=i 的意思是第 i 行输出 i 个算式。",
              "source": "PTA 习题集"
            },
            {
              "id": "m3t1p3",
              "level": "进阶",
              "title": "斐波那契前 n 项",
              "statement": "输入 n，输出斐波那契数列的前 n 项（从 1、1 开始，后一项等于前两项之和），每项用空格分隔。",
              "input": "输入一个整数 n。",
              "output": "输出前 n 项，用空格分隔。",
              "sampleIn": "6",
              "sampleOut": "1 1 2 3 5 8",
              "hint": "用 a、b 存前两项，每轮输出 a，再让 a、b 往后滚：t=a+b，a=b，b=t。",
              "answer": "#include <stdio.h>\nint main() {\n    int n, i, a = 1, b = 1, t;\n    scanf(\"%d\", &n);\n    for (i = 1; i <= n; i++) {\n        printf(\"%d \", a);\n        t = a + b;\n        a = b;\n        b = t;\n    }\n    printf(\"\\n\");\n    return 0;\n}",
              "analysis": "斐波那契的递推：后一项 = 前两项之和。用 a、b 两个变量滚动存前两项，每轮输出 a，再更新。n=6 输出 1 1 2 3 5 8。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m3t1p4",
              "level": "进阶",
              "title": "奇数求和",
              "statement": "输入 n，求 1 到 n 所有奇数的和。",
              "input": "输入一个整数 n。",
              "output": "输出奇数的和。",
              "sampleIn": "10",
              "sampleOut": "25",
              "hint": "i%2!=0 是奇数，累加进 sum。",
              "answer": "#include <stdio.h>\nint main() {\n    int n, i, sum = 0;\n    scanf(\"%d\", &n);\n    for (i = 1; i <= n; i++) {\n        if (i % 2 != 0) {\n            sum = sum + i;\n        }\n    }\n    printf(\"%d\\n\", sum);\n    return 0;\n}",
              "analysis": "奇数是 i%2!=0。注意不要写反：i%2==0 是偶数。这是奇数求和错题的原题，错在把判断写反了。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m3t1p5",
              "level": "难题",
              "title": "水仙花数",
              "statement": "输出 100~999 之间所有的水仙花数（一个三位数，各位数字的立方和等于它本身，如 153=1³+5³+3³），每行输出一个。",
              "input": "无输入。",
              "output": "每行输出一个水仙花数。",
              "sampleIn": "（无）",
              "sampleOut": "153\n370\n371\n407",
              "hint": "拆出百位 a=n/100、十位 b=n/10%10、个位 c=n%10，判断 a³+b³+c³==n。",
              "answer": "#include <stdio.h>\nint main() {\n    int n, a, b, c;\n    for (n = 100; n <= 999; n++) {\n        a = n / 100;\n        b = n / 10 % 10;\n        c = n % 10;\n        if (a*a*a + b*b*b + c*c*c == n) {\n            printf(\"%d\\n\", n);\n        }\n    }\n    return 0;\n}",
              "analysis": "综合了 for 循环、拆位数、立方判断。拆位套路：百位 n/100，十位 n/10%10，个位 n%10。100~999 之间只有 153、370、371、407 是水仙花数。",
              "source": "PTA 习题集"
            }
          ]
        },
        {
          "id": "m3t2",
          "title": "while 循环",
          "explain": [
            {
              "h": "while 是什么",
              "b": "while 循环适合次数不确定的情况，写法是 while (条件) { 重复做的事 }，条件成立就一直做。它的意思是：先看条件成不成立，成立就执行大括号里的内容，执行完再回来看条件，成立就再做一遍，直到条件不成立才停下。比如反转一个数，不知道这个数有几位，要反转几轮只有算着才知道，次数不确定，就用 while。不知道要输几次、不知道要猜几次、不知道要算几轮的时候，用 while 最合适。",
              "code": "int n;\nscanf(\"%d\", &n);\nwhile (n != 0) {\n    printf(\"%d\\n\", n);\n    scanf(\"%d\", &n);\n}"
            },
            {
              "h": "while 和 for 的区别",
              "b": "while 和 for 最大的区别是：while 没有固定的起点和每轮变化的写法，变量怎么变要自己写在循环里。for 是把起点、条件、变化都写在括号里，一眼就能看全；while 只在括号里写条件，变量的初值要写在循环前面，变量的变化要写在循环体里面。比如 for (i = 1; i <= 5; i++) 写成 while 就是先写 i = 1，再写 while (i <= 5) { ...; i++; }。次数事先知道的用 for 更清楚，次数不知道、靠条件控制的用 while 更合适，两个循环能做的事本质上是一样的。",
              "code": "int i = 1;\nwhile (i <= 5) {\n    printf(\"%d \", i);\n    i++;\n}"
            },
            {
              "h": "死循环是怎么来的",
              "b": "while 最容易出的问题是死循环：条件一直成立，循环停不下来，程序就卡死了，只能强制关掉。所以循环里一定要有让条件变假的语句，比如 i++，或者重新读入一个新数。比如 while (i <= 10) 里面不写 i++，i 永远是 1，条件 1 <= 10 永远成立，循环就永远停不下来。再比如读数直到输入 0 为止，每轮都要重新 scanf 读一个新数，读到 0 条件才变假。写 while 的时候先问自己一句：这轮跑完，条件离变假近了一步吗？如果没有，马上补上让变量变化的语句。",
              "code": ""
            },
            {
              "h": "执行过程：以反转整数为例",
              "b": "以反转 123 为例，看 while 是怎么一轮一轮跑的：第 1 步，n = 123，rev = 0，判断 n > 0 成立；第 2 步，第一轮：rev = 0 * 10 + 123 % 10，变成 3，n = 123 / 10，变成 12；第 3 步，第二轮：判断 12 > 0 成立，rev = 3 * 10 + 2，变成 32，n = 12 / 10，变成 1；第 4 步，第三轮：判断 1 > 0 成立，rev = 32 * 10 + 1，变成 321，n = 1 / 10，变成 0；第 5 步，判断 0 > 0 不成立，循环停下，打印 rev，也就是 321。每轮做两件事：n % 10 取出个位拼到 rev 后面，n / 10 把个位去掉。",
              "code": "int n, rev = 0;\nscanf(\"%d\", &n);\nwhile (n > 0) {\n    rev = rev * 10 + n % 10;\n    n = n / 10;\n}"
            }
          ],
          "pitfalls": [
            {
              "wrong": "int i = 1;\nwhile (i <= 10) {\n    printf(\"%d\\n\", i);\n}",
              "correct": "int i = 1;\nwhile (i <= 10) {\n    printf(\"%d\\n\", i);\n    i++;\n}",
              "note": "while 括号里没有 i++ 的位置，变量变化要自己写在循环体里。忘了写 i++，i 永远是 1，条件永远成立，程序卡死，只能强制关掉。写 while 一定要检查：循环体里有没有让条件变假的语句。"
            },
            {
              "wrong": "while (i <= 10); {\n    printf(\"%d\\n\", i);\n    i++;\n}",
              "correct": "while (i <= 10) {\n    printf(\"%d\\n\", i);\n    i++;\n}",
              "note": "while 后面多了一个分号，分号本身就是一条空语句，循环管的就只有这个空语句，大括号里的代码和循环没关系了。i 不变，条件永远成立，空循环会一直转下去，程序卡死。记住：while (条件) 后面直接写大括号，中间不要加分号。"
            }
          ],
          "example": {
            "title": "反转一个整数",
            "code": "#include <stdio.h>\n\nint main() {\n    int n, rev = 0;\n    scanf(\"%d\", &n);\n    while (n > 0) {\n        rev = rev * 10 + n % 10;\n        n = n / 10;\n    }\n    printf(\"%d\\n\", rev);\n    return 0;\n}",
            "analysis": "第 1 步：n = 123，rev = 0，判断 n > 0 成立；第 2 步：第一轮 rev = 0 * 10 + 3，变成 3，n = 123 / 10，变成 12；第 3 步：第二轮 rev = 3 * 10 + 2，变成 32，n 变成 1；第 4 步：第三轮 rev = 32 * 10 + 1，变成 321，n 变成 0；第 5 步：判断 0 > 0 不成立，循环停下，打印 321。n % 10 是取出个位，n / 10 是去掉个位，rev = rev * 10 + n % 10 是把个位拼到 rev 后面，三轮下来 123 就反转成了 321。"
          },
          "problems": [
            {
              "id": "m3t2p1",
              "level": "基础",
              "title": "猜数字",
              "statement": "程序预设答案是 42。输入你猜的数，如果猜大了输出“大了”，猜小了输出“小了”，猜对输出“猜对了”，程序结束。最多猜 5 次，5 次没猜对输出“没猜对，答案是 42”。",
              "input": "输入猜的数（最多 5 个）。",
              "output": "按提示输出。",
              "sampleIn": "30\n50\n42",
              "sampleOut": "小了\n大了\n猜对了",
              "hint": "用 while 循环，计数器控制最多 5 次；猜对就 break。",
              "answer": "#include <stdio.h>\nint main() {\n    int guess, count = 0;\n    while (count < 5) {\n        scanf(\"%d\", &guess);\n        count++;\n        if (guess > 42) printf(\"大了\\n\");\n        else if (guess < 42) printf(\"小了\\n\");\n        else { printf(\"猜对了\\n\"); return 0; }\n    }\n    printf(\"没猜对，答案是 42\\n\");\n    return 0;\n}",
              "analysis": "while 循环 + break。猜对就 break 退出，5 次都没对就输出答案。count 计数，控制最多 5 次。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m3t2p2",
              "level": "基础",
              "title": "输入直到 0 停止求和",
              "statement": "输入若干个整数，求它们的和。输入 0 时停止（0 不算）。",
              "input": "输入若干个整数，以 0 结束。",
              "output": "输出和。",
              "sampleIn": "3 5 7 0",
              "sampleOut": "15",
              "hint": "while 循环读数，读到 0 就 break。",
              "answer": "#include <stdio.h>\nint main() {\n    int n, sum = 0;\n    while (1) {\n        scanf(\"%d\", &n);\n        if (n == 0) break;\n        sum += n;\n    }\n    printf(\"%d\\n\", sum);\n    return 0;\n}",
              "analysis": "while(1) 是死循环，靠 break 退出。读到 0 就 break，0 不加进 sum。",
              "source": "PTA 习题集"
            },
            {
              "id": "m3t2p3",
              "level": "进阶",
              "title": "牛顿迭代求平方根",
              "statement": "输入一个正数 a，用牛顿迭代法求它的平方根（保留 4 位小数）。迭代公式：x = (x + a/x) / 2，初始 x=a，当 |x*x - a| < 0.0001 时停止。",
              "input": "输入一个正数 a。",
              "output": "输出平方根，保留 4 位小数。",
              "sampleIn": "2",
              "sampleOut": "1.4142",
              "hint": "x 从 a 开始，每轮 x=(x+a/x)/2，直到 x*x 和 a 的差小于 0.0001。",
              "answer": "#include <stdio.h>\n#include <math.h>\nint main() {\n    double a, x;\n    scanf(\"%lf\", &a);\n    x = a;\n    while (fabs(x * x - a) >= 0.0001) {\n        x = (x + a / x) / 2;\n    }\n    printf(\"%.4f\\n\", x);\n    return 0;\n}",
              "analysis": "牛顿迭代：x 越来越接近真实平方根。fabs 是绝对值函数。2 的平方根约 1.4142。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m3t2p4",
              "level": "进阶",
              "title": "辗转相除求最大公约数",
              "statement": "输入两个正整数，输出它们的最大公约数。",
              "input": "输入两个正整数。",
              "output": "输出最大公约数。",
              "sampleIn": "12 8",
              "sampleOut": "4",
              "hint": "辗转相除：a%b 得余数，再让 a=b、b=余数，直到余数为 0。",
              "answer": "#include <stdio.h>\nint main() {\n    int a, b, t;\n    scanf(\"%d %d\", &a, &b);\n    while (b != 0) {\n        t = a % b;\n        a = b;\n        b = t;\n    }\n    printf(\"%d\\n\", a);\n    return 0;\n}",
              "analysis": "辗转相除法：12%8=4，8%4=0，余数为 0 时 a=4，就是最大公约数。while 循环直到 b 为 0。",
              "source": "PTA 习题集"
            },
            {
              "id": "m3t2p5",
              "level": "难题",
              "title": "猴子吃桃",
              "statement": "猴子第一天摘了若干个桃子，每天吃掉一半多一个，到第 10 天早上只剩 1 个。问第一天摘了多少个桃子。",
              "input": "无输入。",
              "output": "输出第一天桃子的个数。",
              "sampleIn": "（无）",
              "sampleOut": "1534",
              "hint": "倒推：第 10 天 1 个，第 9 天是 (1+1)×2=4 个，依次倒推到第 1 天。用 while 循环倒推 9 次。",
              "answer": "#include <stdio.h>\nint main() {\n    int day = 10, peach = 1;\n    while (day > 1) {\n        peach = (peach + 1) * 2;\n        day--;\n    }\n    printf(\"%d\\n\", peach);\n    return 0;\n}",
              "analysis": "倒推的经典题。正着算不知道第一天多少，倒着算：第 10 天 1 个，第 9 天 (1+1)×2=4，第 8 天 (4+1)×2=10……倒推 9 次到第 1 天是 1534。",
              "source": "谭浩强《C 程序设计》"
            }
          ]
        },
        {
          "id": "m3t3",
          "title": "do-while 循环",
          "explain": [
            {
              "h": "do-while 是什么",
              "b": "do-while 的写法是 do { 重复做的事 } while (条件);，意思是先做一次，再判断条件，条件成立就继续做。do 的意思是做，while 的意思是当条件成立时，所以合起来就是：先把大括号里的事做一遍，做完再看条件，成立就再做一遍，不成立就停下。比如输入校验：先让用户输入一次，再判断合不合要求，不合要求就再输一次，直到输对为止。do-while 的循环体至少会执行一次，这是它和 while 最大的不同。",
              "code": "int i = 1;\ndo {\n    printf(\"%d \", i);\n    i++;\n} while (i <= 5);"
            },
            {
              "h": "do-while 和 while 的区别",
              "b": "do-while 和 while 的唯一区别是：do-while 至少执行一次，while 可能一次都不执行。while 是先判断后执行，条件一开始就不成立，循环体一次都不跑；do-while 是先执行后判断，条件一开始就不成立，循环体还是会先跑一次。比如输入校验只接受 1 到 9，条件是 n < 1 || n > 9，用 while 写，n 一开始要是合法的还好，要是不合法也要先读一次才能判断；用 do-while 写，不管 n 一开始是多少，循环体里的 scanf 一定会先跑一次，把数读进来再判断。记住这句：先判断后执行是 while，先执行后判断是 do-while。",
              "code": ""
            },
            {
              "h": "执行过程：以输入校验为例",
              "b": "以只接受 1 到 9 的输入校验为例，看 do-while 是怎么跑的：第 1 步，先执行 do 里面的 scanf，读一次 n，假设用户输了 0；第 2 步，判断条件 n < 1 || n > 9，0 < 1 成立，继续循环；第 3 步，回到 do 再读一次，假设用户输了 15；第 4 步，判断 15 > 9 成立，继续循环；第 5 步，再读一次，假设用户输了 5；第 6 步，判断 5 < 1 不成立、5 > 9 也不成立，整个条件不成立，循环停下；第 7 步，打印输入的是 5。用户输错多少次，do 里面的 scanf 就跑多少次，直到输对为止。",
              "code": "do {\n    printf(\"请输入1~9：\");\n    scanf(\"%d\", &n);\n} while (n < 1 || n > 9);"
            },
            {
              "h": "最后的分号不能忘",
              "b": "do-while 最后的 while 后面要加分号，写成 do { ... } while (条件);，这是它和普通 while 写法上唯一不同的地方。普通 while 是 while (条件) { ... }，while 后面直接跟大括号，不用加分号；do-while 是整个 do-while 语句的结尾，所以 while (条件) 后面要加分号表示这条语句结束了。忘了这个分号会直接报错，编译都过不了。还有一点：do-while 最适合的场景是输入校验和菜单，先让用户做一次，再判断合不合要求，不合要求就再做一次，这种先做后判断的场合，用 do-while 写最自然。",
              "code": ""
            }
          ],
          "pitfalls": [
            {
              "wrong": "do {\n    scanf(\"%d\", &n);\n} while (n < 1 || n > 9)",
              "correct": "do {\n    scanf(\"%d\", &n);\n} while (n < 1 || n > 9);",
              "note": "do-while 最后的 while 后面要加分号，忘了会直接报错。普通 while 的后面不用加分号，do-while 的后面必须加，这是两者写法上唯一不同的地方，写完 do-while 先检查分号在不在。"
            },
            {
              "wrong": "// 条件一开始就不成立，do-while 和 while 一样一次都不执行",
              "correct": "// 条件一开始就不成立：while 一次都不执行，do-while 还是会先跑一次",
              "note": "do-while 是先执行后判断，条件一开始就不成立，循环体还是会先跑一次。以为 do-while 和 while 完全一样，就会把只该跑一次、甚至不该跑的代码放错地方。输入校验要先让用户输一次，所以用 do-while，不是 while。"
            }
          ],
          "example": {
            "title": "输入校验：只接受 1 到 9",
            "code": "#include <stdio.h>\n\nint main() {\n    int n;\n    do {\n        scanf(\"%d\", &n);\n    } while (n < 1 || n > 9);\n    printf(\"输入的是 %d\\n\", n);\n    return 0;\n}",
            "analysis": "第 1 步：先执行 do 里面的 scanf 读一次 n，不管 n 一开始是多少，这一次一定会读；第 2 步：判断 n 在不在 1 到 9 之间，条件是 n < 1 || n > 9，不在就回到 do 再读一次；第 3 步：直到读到 1 到 9 之间的数，条件不成立，循环停下；第 4 步：打印输入的是几。这正是先做后判断的典型用法：先让用户输入一次，再判断合不合要求，不合要求就再输一次，直到输对为止。"
          },
          "problems": [
            {
              "id": "m3t3p1",
              "level": "基础",
              "title": "数字三角形",
              "statement": "输入 n（1~9），打印数字三角形：第 i 行是 1~i，每个数字后跟一个空格。",
              "input": "输入一个整数 n（1~9）。",
              "output": "输出数字三角形。",
              "sampleIn": "5",
              "sampleOut": "1 \n1 2 \n1 2 3 \n1 2 3 4 \n1 2 3 4 5 ",
              "hint": "双重 for：外层 i 控制行，内层 j 从 1 到 i，输出 \"%d \"。",
              "answer": "#include <stdio.h>\nint main() {\n    int n, i, j;\n    scanf(\"%d\", &n);\n    for (i = 1; i <= n; i++) {\n        for (j = 1; j <= i; j++) {\n            printf(\"%d \", j);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
              "analysis": "数字三角形的原题。内层输出 \"%d \"（%d 后面加空格），数字之间才有空格，不然会连成 12345。",
              "source": "PTA 习题集"
            },
            {
              "id": "m3t3p2",
              "level": "基础",
              "title": "菜单循环",
              "statement": "显示菜单：1.加法 2.减法 0.退出。输入选择，1 就输入两个数输出和，2 就输入两个数输出差，0 就退出。其他输入提示“输入错误，请重新选择”。",
              "input": "输入选择和数据。",
              "output": "按菜单输出。",
              "sampleIn": "1\n3 5\n0",
              "sampleOut": "8",
              "hint": "用 do-while 循环显示菜单，switch 按选择分支。",
              "answer": "#include <stdio.h>\nint main() {\n    int choice, a, b;\n    do {\n        printf(\"1.加法 2.减法 0.退出\\n\");\n        scanf(\"%d\", &choice);\n        switch (choice) {\n            case 1:\n                scanf(\"%d %d\", &a, &b);\n                printf(\"%d\\n\", a + b);\n                break;\n            case 2:\n                scanf(\"%d %d\", &a, &b);\n                printf(\"%d\\n\", a - b);\n                break;\n            case 0: break;\n            default: printf(\"输入错误，请重新选择\\n\");\n        }\n    } while (choice != 0);\n    return 0;\n}",
              "analysis": "菜单是 do-while 的典型场景：至少显示一次菜单，选 0 才退出。do-while + switch 的组合。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m3t3p3",
              "level": "进阶",
              "title": "完数",
              "statement": "输出 1000 以内所有的完数（一个数等于它所有真因子之和，如 6=1+2+3）。",
              "input": "无输入。",
              "output": "每行输出一个完数。",
              "sampleIn": "（无）",
              "sampleOut": "6\n28\n496",
              "hint": "外层循环 2~1000，内层循环找因子并求和，判断和是否等于它本身。",
              "answer": "#include <stdio.h>\nint main() {\n    int n, i, sum;\n    for (n = 2; n <= 1000; n++) {\n        sum = 0;\n        for (i = 1; i < n; i++) {\n            if (n % i == 0) sum += i;\n        }\n        if (sum == n) printf(\"%d\\n\", n);\n    }\n    return 0;\n}",
              "analysis": "完数：真因子之和等于它本身。6 的真因子是 1、2、3，和是 6。1000 以内只有 6、28、496 是完数。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m3t3p4",
              "level": "进阶",
              "title": "密码验证",
              "statement": "预设密码是 123456。输入密码，正确输出“欢迎”，错误输出“密码错误”，最多试 3 次，3 次都错输出“锁定”。",
              "input": "输入密码（最多 3 次）。",
              "output": "按提示输出。",
              "sampleIn": "111111\n123456",
              "sampleOut": "密码错误\n欢迎",
              "hint": "用 do-while 循环，计数器控制最多 3 次；对了就 break。",
              "answer": "#include <stdio.h>\nint main() {\n    int pwd, count = 0;\n    do {\n        scanf(\"%d\", &pwd);\n        count++;\n        if (pwd == 123456) {\n            printf(\"欢迎\\n\");\n            return 0;\n        } else {\n            printf(\"密码错误\\n\");\n        }\n    } while (count < 3);\n    printf(\"锁定\\n\");\n    return 0;\n}",
              "analysis": "do-while 至少试一次。密码对了就 return 退出；3 次都错，循环结束输出“锁定”。",
              "source": "PTA 习题集"
            },
            {
              "id": "m3t3p5",
              "level": "难题",
              "title": "百钱买百鸡",
              "statement": "公鸡 5 元一只，母鸡 3 元一只，小鸡 1 元三只。用 100 元买 100 只鸡，问公鸡、母鸡、小鸡各多少只？输出所有可能的组合。",
              "input": "无输入。",
              "output": "每行输出一种组合：公鸡 母鸡 小鸡。",
              "sampleIn": "（无）",
              "sampleOut": "4 18 78\n8 11 81\n12 4 84",
              "hint": "三重循环枚举公鸡 x、母鸡 y，小鸡 z=100-x-y，判断 5x+3y+z/3==100 且 z%3==0。",
              "answer": "#include <stdio.h>\nint main() {\n    int x, y, z;\n    for (x = 0; x <= 20; x++) {\n        for (y = 0; y <= 33; y++) {\n            z = 100 - x - y;\n            if (z % 3 == 0 && 5 * x + 3 * y + z / 3 == 100) {\n                printf(\"%d %d %d\\n\", x, y, z);\n            }\n        }\n    }\n    return 0;\n}",
              "analysis": "百钱买百鸡是枚举的经典题。公鸡最多 20 只，母鸡最多 33 只，小鸡 z=100-x-y。条件：z 能被 3 整除，且总价 5x+3y+z/3=100。共 3 种组合：4 18 78、8 11 81、12 4 84。",
              "source": "PTA 习题集"
            }
          ]
        }
      ]
    },
    {
      "id": "m4",
      "num": "04",
      "title": "数组",
      "desc": "从概念到代码，按顺序掌握本模块核心能力。3 个知识点 / 15 道题",
      "topics": [
        {
          "id": "m4t1",
          "title": "一维数组",
          "explain": [
            {
              "h": "数组是什么",
              "b": "数组就是把一串类型相同的数据排成一排，用一个名字统一管起来。以前要存 5 个分数，得写 5 个变量 int a, b, c, d, e;，用数组只要写一句 int a[5];，意思是一次声明 5 个连在一起的 int。它们共用一个名字 a，靠下标区分谁是谁。数组的好处是能用循环批量处理：不用把 5 个变量一个一个写出来，写一个循环就全处理完了。以后要存 100 个数，也只要把 5 改成 100，写法一点都不变。",
              "code": "int a[5] = {1, 2, 3, 4, 5};\n// a[0]=1, a[1]=2, a[2]=3, a[3]=4, a[4]=5"
            },
            {
              "h": "下标从 0 开始",
              "b": "数组里的每个位置叫一个元素，用下标找到它。C 语言的下标从 0 开始数，不是从 1 开始：int a[5]; 里 a[0] 是第 1 个元素，a[1] 是第 2 个，a[2] 是第 3 个，a[3] 是第 4 个，a[4] 是第 5 个，也就是最后一个。记住一个换算：下标 = 第几个 - 1，想找第 3 个数就写 a[2]。用的时候和普通变量一样：a[0] = 10; 是给第 1 个位置赋值，printf(\"%d\", a[2]); 是打印第 3 个位置的值。下标可以是变量，比如 a[i]，i 是几就指第 i+1 个位置。",
              "code": "int a[5];\na[0] = 10;      // 给第 1 个位置赋值\nprintf(\"%d\\n\", a[2]);  // 打印第 3 个位置的值"
            },
            {
              "h": "声明时直接给值",
              "b": "声明数组的时候可以直接把值写进去，叫初始化：int a[5] = {1, 2, 3, 4, 5};，意思是 a[0]=1、a[1]=2、a[2]=3、a[3]=4、a[4]=5，一次全给好。如果只给一部分，比如 int a[5] = {1, 2};，那 a[0]=1、a[1]=2，剩下的 a[2]、a[3]、a[4] 会自动变成 0，不用你一个一个补。也可以把个数空出来，让编译器自己数：int a[] = {1, 2, 3}; 就是 3 个元素的数组。注意：不写初始值的数组，里面的值是随机的垃圾值，用之前一定要先赋值。",
              "code": "int a[5] = {1, 2, 3, 4, 5};\nint b[5] = {1, 2};  // b[2]、b[3]、b[4] 自动是 0\nint c[] = {1, 2, 3};  // 编译器数出是 3 个元素"
            },
            {
              "h": "数组几乎总是配循环用",
              "b": "数组很少一个一个单独用，几乎总是配循环一起用，套路固定：for (i = 0; i < 5; i++) 从头到尾依次处理每个位置。执行过程是这样的：第 1 步，i 从 0 开始；第 2 步，检查 i < 5，成立就处理 a[i]，比如读入一个数、打印一个数，或者加进总和；第 3 步，i 加 1，回到第 2 步；第 4 步，i 变成 5，条件不成立，循环结束。读入、打印、求和、找最大全是这个套路，变的只是循环里那一行对 a[i] 做什么。记住循环条件永远写 i < n，n 是数组长度。",
              "code": "int a[5], i, sum = 0;\nfor (i = 0; i < 5; i++) scanf(\"%d\", &a[i]);\nfor (i = 0; i < 5; i++) sum += a[i];"
            }
          ],
          "pitfalls": [
            {
              "wrong": "int a[5];\na[5] = 10;  // 想给第 5 个数赋值",
              "correct": "int a[5];\na[4] = 10;  // 第 5 个数是 a[4]",
              "note": "int a[5] 只有 a[0] 到 a[4]，a[5] 根本不存在。写 a[5] 是下标越界，程序不会报错，但会改到数组外面别的内存，结果乱套，是最难查的错。"
            },
            {
              "wrong": "int a[5], i;\nfor (i = 0; i <= 5; i++) scanf(\"%d\", &a[i]);",
              "correct": "int a[5], i;\nfor (i = 0; i < 5; i++) scanf(\"%d\", &a[i]);",
              "note": "数组长度是 5，下标最大是 4。i <= 5 会多跑一次，访问到 a[5] 就越界了。数组长度是 n 时，循环条件永远写 i < n。"
            },
            {
              "wrong": "int a[5], i, sum, max;\nfor (i = 0; i < 5; i++) sum += a[i];  // sum 没给初值",
              "correct": "int a[5], i, sum = 0, max;\nmax = a[0];\nfor (i = 0; i < 5; i++) sum += a[i];",
              "note": "求和前 sum 要先等于 0，不然一开始就是随机值，加出来全是错的。找最大要先让 max = a[0]，不能随便写 max = 0：要是 5 个数全是负数，max = 0 就永远比所有数大，答案就错了。"
            }
          ],
          "example": {
            "title": "输入 5 个数，求和与平均值",
            "code": "#include <stdio.h>\n\nint main() {\n    int a[5], i, sum = 0;\n    for (i = 0; i < 5; i++) scanf(\"%d\", &a[i]);\n    for (i = 0; i < 5; i++) sum = sum + a[i];\n    printf(\"和=%d 平均=%.2f\\n\", sum, sum / 5.0);\n    return 0;\n}",
            "analysis": "第 1 个循环把 5 个数依次读进 a[0] 到 a[4]，注意 scanf 里写的是 &a[i]，i 是几就读进第几个位置。第 2 个循环从头到尾把每个位置加进 sum：sum 一开始是 0，依次加上 a[0]、a[1]，一直加到 a[4]。平均值要写 sum / 5.0，用 5.0 而不是 5：5.0 是实数，整数除以实数得实数，小数部分能保留；写 5 会做整数除法，小数直接丢掉。比如输入 1 2 3 4 5，和是 15，平均值是 3.00。"
          },
          "problems": [
            {
              "id": "m4t1p1",
              "level": "基础",
              "title": "求数组最大值",
              "statement": "输入 5 个整数，输出其中最大的数。",
              "input": "输入 5 个整数。",
              "output": "输出最大的数。",
              "sampleIn": "3 9 5 7 1",
              "sampleOut": "9",
              "hint": "存进数组，打擂台法求最大。",
              "answer": "#include <stdio.h>\nint main() {\n    int a[5], i, max;\n    for (i = 0; i < 5; i++) scanf(\"%d\", &a[i]);\n    max = a[0];\n    for (i = 1; i < 5; i++) {\n        if (a[i] > max) max = a[i];\n    }\n    printf(\"%d\\n\", max);\n    return 0;\n}",
              "analysis": "打擂台法求最值：先设 a[0] 最大，再依次比较。下标从 0 开始。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m4t1p2",
              "level": "基础",
              "title": "数组求和与平均值",
              "statement": "输入 5 个整数，输出它们的和与平均值（平均值保留 1 位小数）。",
              "input": "输入 5 个整数。",
              "output": "输出和与平均值。",
              "sampleIn": "1 2 3 4 5",
              "sampleOut": "15\n3.0",
              "hint": "循环累加求和，平均值 = 和/5.0。",
              "answer": "#include <stdio.h>\nint main() {\n    int a[5], i, sum = 0;\n    for (i = 0; i < 5; i++) {\n        scanf(\"%d\", &a[i]);\n        sum += a[i];\n    }\n    printf(\"%d\\n%.1f\\n\", sum, sum / 5.0);\n    return 0;\n}",
              "analysis": "累加求和。平均值要保留小数，sum/5.0 里 5.0 是实数，结果就是实数。",
              "source": "PTA 习题集"
            },
            {
              "id": "m4t1p3",
              "level": "进阶",
              "title": "冒泡排序",
              "statement": "输入 5 个整数，用冒泡排序从小到大排序后输出。",
              "input": "输入 5 个整数。",
              "output": "输出排序后的 5 个数，用空格分隔。",
              "sampleIn": "5 2 8 1 9",
              "sampleOut": "1 2 5 8 9",
              "hint": "双重循环：外层 n-1 趟，内层比较相邻两个，大的往后换。",
              "answer": "#include <stdio.h>\nint main() {\n    int a[5], i, j, t;\n    for (i = 0; i < 5; i++) scanf(\"%d\", &a[i]);\n    for (i = 0; i < 4; i++) {\n        for (j = 0; j < 4 - i; j++) {\n            if (a[j] > a[j + 1]) {\n                t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;\n            }\n        }\n    }\n    for (i = 0; i < 5; i++) printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    return 0;\n}",
              "analysis": "冒泡排序：每趟把最大的冒到最后。外层 4 趟，内层比较相邻元素，大的往后换。内层 j<4-i 是因为后面 i 个已经排好了。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m4t1p4",
              "level": "进阶",
              "title": "数组逆序",
              "statement": "输入 5 个整数，把数组逆序后输出。",
              "input": "输入 5 个整数。",
              "output": "输出逆序后的 5 个数，用空格分隔。",
              "sampleIn": "1 2 3 4 5",
              "sampleOut": "5 4 3 2 1",
              "hint": "首尾交换：a[0] 和 a[4] 换，a[1] 和 a[3] 换，中间不动。",
              "answer": "#include <stdio.h>\nint main() {\n    int a[5], i, t;\n    for (i = 0; i < 5; i++) scanf(\"%d\", &a[i]);\n    for (i = 0; i < 5 / 2; i++) {\n        t = a[i];\n        a[i] = a[4 - i];\n        a[4 - i] = t;\n    }\n    for (i = 0; i < 5; i++) printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    return 0;\n}",
              "analysis": "逆序就是首尾交换：a[i] 和 a[4-i] 换。循环 i<5/2，只换前一半，不然会换回来。",
              "source": "PTA 习题集"
            },
            {
              "id": "m4t1p5",
              "level": "难题",
              "title": "去重与统计综合",
              "statement": "输入 10 个整数，先去掉重复的数，再按从小到大排序输出去重后的数，最后输出去重后有多少个数。",
              "input": "输入 10 个整数。",
              "output": "第一行输出去重排序后的数，第二行输出个数。",
              "sampleIn": "5 2 5 1 2 8 1 9 8 3",
              "sampleOut": "1 2 3 5 8 9\n6",
              "hint": "先排序，再用新数组只收和前一个不同的数。",
              "answer": "#include <stdio.h>\nint main() {\n    int a[10], b[10], i, j, t, n = 0;\n    for (i = 0; i < 10; i++) scanf(\"%d\", &a[i]);\n    for (i = 0; i < 9; i++)\n        for (j = 0; j < 9 - i; j++)\n            if (a[j] > a[j + 1]) { t = a[j]; a[j] = a[j + 1]; a[j + 1] = t; }\n    b[0] = a[0]; n = 1;\n    for (i = 1; i < 10; i++) {\n        if (a[i] != a[i - 1]) b[n++] = a[i];\n    }\n    for (i = 0; i < n; i++) printf(\"%d \", b[i]);\n    printf(\"\\n%d\\n\", n);\n    return 0;\n}",
              "analysis": "综合了排序和去重。先冒泡排序，再用新数组 b 只收和前一个不同的数。排序后相同的数都挨在一起，所以只跟前一个比就行。输入去重后是 1 2 3 5 8 9，共 6 个。",
              "source": "综合自编题"
            }
          ]
        },
        {
          "id": "m4t2",
          "title": "二维数组",
          "explain": [
            {
              "h": "二维数组就是一张表",
              "b": "一维数组是一排数，二维数组就是一张表，有行有列。写法是 int a[3][4];，意思是 3 行 4 列，一共 3×4=12 个格子。可以把它想成成绩表：每一行是一个学生，每一列是一门课，a[1][2] 就是第 2 个学生的第 3 门课成绩。行和列的个数写在声明里，想存 5 个学生、3 门课就写 int score[5][3];。二维数组里的每个格子还是一个普通的 int，能存数、能赋值、能参加运算。",
              "code": "int a[3][4];  // 3 行 4 列，一共 12 个格子\nint score[5][3];  // 5 个学生，每人 3 门课"
            },
            {
              "h": "两个下标，先行后列",
              "b": "访问二维数组要写两个下标：a[行][列]，先写行、再写列，两个下标都从 0 开始。int a[3][4]; 里 a[0][0] 是第 1 行第 1 列，a[0][3] 是第 1 行第 4 列，a[2][0] 是第 3 行第 1 列，a[2][3] 是最后一行最后一列。行下标最大是行数减 1，列下标最大是列数减 1。写的时候别把顺序弄反：a[2][1] 和 a[1][2] 是两个完全不同的格子，一个是第 3 行第 2 列，一个是第 2 行第 3 列。",
              "code": "int a[3][4];\na[0][0] = 1;  // 第 1 行第 1 列\na[2][3] = 12;  // 第 3 行第 4 列，最后一格"
            },
            {
              "h": "嵌套循环：外层管行，内层管列",
              "b": "处理二维数组要用嵌套循环，和九九乘法表的结构一模一样：外层循环管行，内层循环管列。执行过程是这样的：第 1 步，外层 i = 0，定住第 0 行；第 2 步，内层 j 从 0 跑到列数减 1，把这一行的每个格子依次处理完；第 3 步，i 加 1，换到下一行，再把内层从头跑一遍；第 4 步，所有行都跑完，循环结束。读入、打印、求和都是这个套路。打印时要注意：内层结束后要单独打印一个换行，不然所有数会挤成一行，表格就散了。",
              "code": "int a[3][3], i, j;\nfor (i = 0; i < 3; i++)\n    for (j = 0; j < 3; j++)\n        scanf(\"%d\", &a[i][j]);"
            },
            {
              "h": "常见用法：成绩表和矩阵",
              "b": "二维数组最常见的用法有两个。第一个是存成绩表：每行一个学生、每列一科，想算某个学生的总分，就把他那一行的数加起来；想算某门课的平均分，就把那一列的数加起来。第二个是矩阵运算：两个矩阵相加，就是对应位置的数相加；转置就是行变列、列变行，打印的时候把下标交换一下，输出 a[j][i] 就行了。这两个用法后面做题会反复遇到，套路都是嵌套循环加 a[i][j]，先把行和列的循环写对，里面的操作都是一行代码的事。",
              "code": "// 转置：打印时交换下标\nfor (i = 0; i < 3; i++) {\n    for (j = 0; j < 3; j++) printf(\"%d \", a[j][i]);\n    printf(\"\\n\");\n}"
            }
          ],
          "pitfalls": [
            {
              "wrong": "int a[3][4];\nint x = a[2][1];  // 想取第 2 行第 3 列",
              "correct": "int a[3][4];\nint x = a[1][2];  // 第 2 行是下标 1，第 3 列是下标 2",
              "note": "声明是 [行][列]，访问时也是先行后列，而且下标从 0 开始：第 2 行是下标 1，第 3 列是下标 2。行列写反了，取到的数据就对不上号了。"
            },
            {
              "wrong": "int a[3][4], i, j;\nfor (i = 0; i < 3; i++)\n    for (j = 0; j < 3; j++) scanf(\"%d\", &a[i][j]);",
              "correct": "int a[3][4], i, j;\nfor (i = 0; i < 3; i++)\n    for (j = 0; j < 4; j++) scanf(\"%d\", &a[i][j]);",
              "note": "外层 i 管行，上限是行数 3；内层 j 管列，上限应该是列数 4，不是行数。行数和列数相等时写错也看不出来，行列不相等时（比如 2 行 3 列）马上就错：要么少读一列，要么越界。"
            }
          ],
          "example": {
            "title": "输入 3 行 3 列并按表格打印",
            "code": "#include <stdio.h>\n\nint main() {\n    int a[3][3], i, j;\n    for (i = 0; i < 3; i++)\n        for (j = 0; j < 3; j++) scanf(\"%d\", &a[i][j]);\n    for (i = 0; i < 3; i++) {\n        for (j = 0; j < 3; j++) printf(\"%d \", a[i][j]);\n        printf(\"\\n\");\n    }\n    return 0;\n}",
            "analysis": "读入和打印都用嵌套循环。读入时外层 i 固定一行，内层 j 把这一行的 3 个数依次读进 a[i][0]、a[i][1]、a[i][2]，再换下一行。打印时同样：i = 0 时内层打印 a[0][0]、a[0][1]、a[0][2]，每个数后面跟一个空格；内层结束后单独打印一个换行，换到下一行。关键点就是这个换行：它写在内层循环外面、每行只执行一次，所以 9 个数会排成 3 行 3 列的表格；如果不写换行，9 个数会全挤在一行里。"
          },
          "problems": [
            {
              "id": "m4t2p1",
              "level": "基础",
              "title": "矩阵转置",
              "statement": "输入一个 2 行 3 列的矩阵，输出它的转置矩阵（3 行 2 列）。",
              "input": "输入 2 行，每行 3 个整数。",
              "output": "输出转置后的矩阵。",
              "sampleIn": "1 2 3\n4 5 6",
              "sampleOut": "1 4 \n2 5 \n3 6 ",
              "hint": "输出时外层控制列、内层控制行。",
              "answer": "#include <stdio.h>\nint main() {\n    int a[2][3], i, j;\n    for (i = 0; i < 2; i++)\n        for (j = 0; j < 3; j++)\n            scanf(\"%d\", &a[i][j]);\n    for (j = 0; j < 3; j++) {\n        for (i = 0; i < 2; i++) {\n            printf(\"%d \", a[i][j]);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
              "analysis": "转置是行列互换。输出时外层 j 控制列、内层 i 控制行，a[i][j] 按列输出。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m4t2p2",
              "level": "基础",
              "title": "杨辉三角",
              "statement": "输入 n，输出 n 行杨辉三角。每行第一个和最后一个是 1，中间的数等于上一行同列和前一列之和。",
              "input": "输入一个整数 n。",
              "output": "输出 n 行杨辉三角。",
              "sampleIn": "5",
              "sampleOut": "1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1",
              "hint": "a[i][0]=a[i][i]=1，a[i][j]=a[i-1][j-1]+a[i-1][j]。",
              "answer": "#include <stdio.h>\nint main() {\n    int a[20][20], n, i, j;\n    scanf(\"%d\", &n);\n    for (i = 0; i < n; i++) {\n        a[i][0] = 1;\n        a[i][i] = 1;\n        for (j = 1; j < i; j++) {\n            a[i][j] = a[i - 1][j - 1] + a[i - 1][j];\n        }\n    }\n    for (i = 0; i < n; i++) {\n        for (j = 0; j <= i; j++) printf(\"%d \", a[i][j]);\n        printf(\"\\n\");\n    }\n    return 0;\n}",
              "analysis": "杨辉三角的规律：每行两端是 1，中间的数是上一行同列和前一列之和。用二维数组存下来再输出。",
              "source": "PTA 习题集"
            },
            {
              "id": "m4t2p3",
              "level": "进阶",
              "title": "矩阵乘法",
              "statement": "输入两个 2×2 矩阵，输出它们的乘积矩阵。",
              "input": "输入 2 行，每行 2 个整数（第一个矩阵）；再输入 2 行，每行 2 个整数（第二个矩阵）。",
              "output": "输出乘积矩阵。",
              "sampleIn": "1 2\n3 4\n5 6\n7 8",
              "sampleOut": "19 22 \n43 50 ",
              "hint": "C[i][j] = A[i][0]*B[0][j] + A[i][1]*B[1][j]，三重循环。",
              "answer": "#include <stdio.h>\nint main() {\n    int a[2][2], b[2][2], c[2][2], i, j, k;\n    for (i = 0; i < 2; i++)\n        for (j = 0; j < 2; j++) scanf(\"%d\", &a[i][j]);\n    for (i = 0; i < 2; i++)\n        for (j = 0; j < 2; j++) scanf(\"%d\", &b[i][j]);\n    for (i = 0; i < 2; i++) {\n        for (j = 0; j < 2; j++) {\n            c[i][j] = 0;\n            for (k = 0; k < 2; k++) c[i][j] += a[i][k] * b[k][j];\n        }\n    }\n    for (i = 0; i < 2; i++) {\n        for (j = 0; j < 2; j++) printf(\"%d \", c[i][j]);\n        printf(\"\\n\");\n    }\n    return 0;\n}",
              "analysis": "矩阵乘法：C[i][j] 是 A 的第 i 行和 B 的第 j 列对应相乘再相加。三重循环：i、j 定位置，k 做累加。1×5+2×7=19，1×6+2×8=22，3×5+4×7=43，3×6+4×8=50。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m4t2p4",
              "level": "进阶",
              "title": "鞍点",
              "statement": "输入一个 3×3 矩阵，找出鞍点（该行最大、该列最小的元素）并输出它的值和位置。如果没有鞍点，输出“没有鞍点”。",
              "input": "输入 3 行，每行 3 个整数。",
              "output": "输出鞍点的值和行列位置，或“没有鞍点”。",
              "sampleIn": "1 2 3\n4 5 6\n7 8 9",
              "sampleOut": "没有鞍点",
              "hint": "先找每行的最大值，再判断它是不是所在列的最小值。",
              "answer": "#include <stdio.h>\nint main() {\n    int a[3][3], i, j, k, max, found = 0;\n    for (i = 0; i < 3; i++)\n        for (j = 0; j < 3; j++) scanf(\"%d\", &a[i][j]);\n    for (i = 0; i < 3; i++) {\n        max = a[i][0]; k = 0;\n        for (j = 1; j < 3; j++)\n            if (a[i][j] > max) { max = a[i][j]; k = j; }\n        int isMin = 1;\n        for (j = 0; j < 3; j++)\n            if (a[j][k] < max) isMin = 0;\n        if (isMin) {\n            printf(\"%d %d %d\\n\", max, i + 1, k + 1);\n            found = 1;\n        }\n    }\n    if (!found) printf(\"没有鞍点\\n\");\n    return 0;\n}",
              "analysis": "鞍点是行最大、列最小。先找每行最大值及其列，再检查它是不是该列最小。1 2 3 / 4 5 6 / 7 8 9 这个矩阵没有鞍点。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m4t2p5",
              "level": "难题",
              "title": "螺旋矩阵",
              "statement": "输入 n，输出 n×n 的螺旋矩阵（从左上角开始，顺时针由外向内填 1~n²）。",
              "input": "输入一个整数 n。",
              "output": "输出 n×n 螺旋矩阵。",
              "sampleIn": "3",
              "sampleOut": "1 2 3 \n8 9 4 \n7 6 5 ",
              "hint": "用四个边界 top、bottom、left、right 控制方向，走完一边就收紧边界。",
              "answer": "#include <stdio.h>\nint main() {\n    int n, a[10][10], num = 1;\n    int top = 0, bottom, left = 0, right, i, j;\n    scanf(\"%d\", &n);\n    bottom = n - 1; right = n - 1;\n    while (top <= bottom && left <= right) {\n        for (j = left; j <= right; j++) a[top][j] = num++;\n        top++;\n        for (i = top; i <= bottom; i++) a[i][right] = num++;\n        right--;\n        for (j = right; j >= left; j--) a[bottom][j] = num++;\n        bottom--;\n        for (i = bottom; i >= top; i--) a[i][left] = num++;\n        left++;\n    }\n    for (i = 0; i < n; i++) {\n        for (j = 0; j < n; j++) printf(\"%d \", a[i][j]);\n        printf(\"\\n\");\n    }\n    return 0;\n}",
              "analysis": "螺旋矩阵：用四个边界控制方向。先从左往右填顶行，再从上往下填右列，再从右往左填底行，再从下往上填左列，每填完一边就收紧边界。综合了二维数组和边界控制。",
              "source": "综合自编题"
            }
          ]
        },
        {
          "id": "m4t3",
          "title": "字符数组与字符串",
          "explain": [
            {
              "h": "字符串就是字符数组",
              "b": "字符串就是一串字符，本质上是字符数组：char s[20]; 能存一个字符串。要注意大小：char s[20] 最多只能存 19 个真正的字符，最后一个位置要留给结束标志 '\\0'。比如 \"hello\" 是 5 个字母，但它在数组里占 6 个位置：h、e、l、l、o，再加一个 '\\0'。所以想存 5 个字母的单词，数组至少要声明成 6 大。'\\0' 不是字母，它只是一个记号，告诉程序字符串到这里结束了。",
              "code": "char s[] = \"hello\";\n// s 里是 h e l l o \\0，一共 6 个字符"
            },
            {
              "h": "读入：scanf 读一个单词",
              "b": "读入一个单词用 scanf(\"%s\", s)，注意这里不加 &，因为数组名 s 本身就代表地址，这和读普通变量正好相反，普通变量要写 &a，字符串不用。执行过程是：第 1 步，scanf 等你输入；第 2 步，你敲的字符一个一个存进 s[0]、s[1]、s[2]……；第 3 步，遇到空格或者回车就停下，并在最后自动补一个 '\\0'。所以 scanf 只能读一个单词：输入 \"hello world\"，它只会读到 hello，空格后面的 world 读不进来。",
              "code": "char s[20];\nscanf(\"%s\", s);  // 不加 &，只能读一个单词\nprintf(\"%s\\n\", s);"
            },
            {
              "h": "读一整行：fgets",
              "b": "想把一整行连空格一起读进来，要用 fgets(s, 20, stdin)，意思是最多读 19 个字符（留一个位置给 '\\0'），从键盘读。fgets 不怕空格，\"hello world\" 能整个读进来。但它有个小毛病：你按回车产生的换行符也会被读进来，存在字符串的末尾。打印的时候多一个换行，一般没事；要是拿这个字符串去比较或者算长度，就得先把末尾的换行去掉。只读单词用 scanf，读整行用 fgets，两个场合别用混。",
              "code": "char s[20];\nfgets(s, 20, stdin);  // 能读空格，读一整行\nprintf(\"%s\", s);"
            },
            {
              "h": "常用函数都在 string.h 里",
              "b": "处理字符串不用自己从头写，C 语言在 string.h 这个头文件里准备好了现成的函数，用之前要先在代码最上面引用它。strlen(s) 是数长度：返回字符个数，不算最后的 '\\0'，\"hello\" 的长度是 5。strcpy(a, b) 是把 b 的内容复制到 a 里，a 要够大，装得下 b 再加一个 '\\0'。strcmp(a, b) 是比较两个字符串：内容完全一样返回 0，a 更大返回正数，a 更小返回负数。记住这三个就够应付大部分题目了，用的时候照着格式写就行。",
              "code": "#include <string.h>\nstrlen(s);       // 长度，不算 \\0\nstrcpy(a, b);    // 把 b 复制到 a\nstrcmp(a, b);    // 相等返回 0"
            }
          ],
          "pitfalls": [
            {
              "wrong": "char s[5];\ns[0] = 'h'; s[1] = 'i';\n// 忘了加结束标志",
              "correct": "char s[5];\ns[0] = 'h'; s[1] = 'i'; s[2] = '\\0';  // 手动补上结束标志",
              "note": "字符串没有 '\\0'，printf 会一直往后打印，打印到乱码为止。用 scanf 和库函数读入的会自动加 '\\0'，但自己逐个字符赋值时，一定要手动在最后补一个 '\\0'。"
            },
            {
              "wrong": "char s[20];\nscanf(\"%s\", &s);  // 字符串读入加了 &",
              "correct": "char s[20];\nscanf(\"%s\", s);  // 数组名本身就是地址，不加 &",
              "note": "读普通变量要写 &a，是因为 scanf 要的是地址；数组名 s 本身就代表地址，再写 &s 就错了。这和普通变量正好相反，是最容易顺手写错的地方。"
            },
            {
              "wrong": "if (s1 == s2) printf(\"相同\\n\");  // 用 == 比较字符串",
              "correct": "if (strcmp(s1, s2) == 0) printf(\"相同\\n\");  // 比较内容用 strcmp",
              "note": "s1 == s2 比的是两个数组的地址，不是里面的内容，地址几乎永远不一样，所以永远对不上。想比较字符串内容是不是一样，必须用 strcmp，返回 0 就是完全相同。"
            }
          ],
          "example": {
            "title": "输入一个单词，打印它的长度和每个字符",
            "code": "#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s[100];\n    int i;\n    scanf(\"%s\", s);\n    printf(\"长度=%d\\n\", (int)strlen(s));\n    for (i = 0; s[i] != '\\0'; i++) printf(\"%c\\n\", s[i]);\n    return 0;\n}",
            "analysis": "scanf 用 %s 读入一个单词，不加 &，读完后 s 里是每个字符加最后的 '\\0'。strlen(s) 数出长度，\"hello\" 就是 5。循环用 s[i] != '\\0' 做条件，这是遍历字符串的标准写法：第 1 步，i = 0，检查 s[0] 是不是 '\\0'，不是就打印它；第 2 步，i 加 1，继续检查下一个；第 3 步，一直走到 s[5] 是 '\\0'，循环停下。循环跑的次数和 strlen 的结果是一样的，都是 5 次。"
          },
          "problems": [
            {
              "id": "m4t3p1",
              "level": "基础",
              "title": "统计字符个数",
              "statement": "输入一个字符串，输出其中数字字符的个数。",
              "input": "输入一个字符串（不含空格）。",
              "output": "输出数字字符的个数。",
              "sampleIn": "abc123",
              "sampleOut": "3",
              "hint": "遍历字符串，字符在 '0' 到 '9' 之间就是数字。",
              "answer": "#include <stdio.h>\nint main() {\n    char s[100];\n    int i, count = 0;\n    scanf(\"%s\", s);\n    for (i = 0; s[i] != '\\0'; i++) {\n        if (s[i] >= '0' && s[i] <= '9') count++;\n    }\n    printf(\"%d\\n\", count);\n    return 0;\n}",
              "analysis": "遍历到 '\\0' 停。'0'~'9' 是数字字符。abc123 里有 3 个数字。",
              "source": "PTA 习题集"
            },
            {
              "id": "m4t3p2",
              "level": "基础",
              "title": "字符串长度",
              "statement": "输入一个字符串，输出它的长度（不用 strlen，自己写循环数）。",
              "input": "输入一个字符串（不含空格）。",
              "output": "输出字符串长度。",
              "sampleIn": "hello",
              "sampleOut": "5",
              "hint": "从 s[0] 开始数，数到 '\\0' 停。",
              "answer": "#include <stdio.h>\nint main() {\n    char s[100];\n    int i = 0;\n    scanf(\"%s\", s);\n    while (s[i] != '\\0') i++;\n    printf(\"%d\\n\", i);\n    return 0;\n}",
              "analysis": "字符串以 '\\0' 结尾。从 s[0] 开始数，数到 '\\0' 停，i 就是长度。hello 长度 5。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m4t3p3",
              "level": "进阶",
              "title": "字符串逆序",
              "statement": "输入一个字符串，把它逆序后输出。",
              "input": "输入一个字符串（不含空格）。",
              "output": "输出逆序后的字符串。",
              "sampleIn": "hello",
              "sampleOut": "olleh",
              "hint": "先求长度 len，首尾交换 s[i] 和 s[len-1-i]。",
              "answer": "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100];\n    int i, len, t;\n    scanf(\"%s\", s);\n    len = strlen(s);\n    for (i = 0; i < len / 2; i++) {\n        t = s[i];\n        s[i] = s[len - 1 - i];\n        s[len - 1 - i] = t;\n    }\n    printf(\"%s\\n\", s);\n    return 0;\n}",
              "analysis": "字符串逆序就是首尾交换。和数组逆序一样，只换前一半。hello 逆序是 olleh。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m4t3p4",
              "level": "进阶",
              "title": "回文判断",
              "statement": "输入一个字符串，判断它是不是回文（正着读和倒着读一样）。是输出“是回文”，不是输出“不是回文”。",
              "input": "输入一个字符串（不含空格）。",
              "output": "输出判断结果。",
              "sampleIn": "level",
              "sampleOut": "是回文",
              "hint": "首尾比较：s[i] 和 s[len-1-i] 一样就是回文。",
              "answer": "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[100];\n    int i, len, flag = 1;\n    scanf(\"%s\", s);\n    len = strlen(s);\n    for (i = 0; i < len / 2; i++) {\n        if (s[i] != s[len - 1 - i]) flag = 0;\n    }\n    if (flag) printf(\"是回文\\n\");\n    else printf(\"不是回文\\n\");\n    return 0;\n}",
              "analysis": "回文是首尾对称。s[i] 和 s[len-1-i] 逐对比较，有一对不一样就不是回文。level 正反都一样，是回文。",
              "source": "PTA 习题集"
            },
            {
              "id": "m4t3p5",
              "level": "难题",
              "title": "字符串处理综合",
              "statement": "输入一个字符串，输出：① 大写字母个数；② 小写字母个数；③ 数字个数；④ 其他字符个数（共四行）。",
              "input": "输入一个字符串（不含空格）。",
              "output": "输出四行统计结果。",
              "sampleIn": "Hello123!",
              "sampleOut": "1\n4\n3\n1",
              "hint": "遍历字符串，用 if-else if 按字符范围分类计数。",
              "answer": "#include <stdio.h>\nint main() {\n    char s[100];\n    int i, up = 0, low = 0, digit = 0, other = 0;\n    scanf(\"%s\", s);\n    for (i = 0; s[i] != '\\0'; i++) {\n        if (s[i] >= 'A' && s[i] <= 'Z') up++;\n        else if (s[i] >= 'a' && s[i] <= 'z') low++;\n        else if (s[i] >= '0' && s[i] <= '9') digit++;\n        else other++;\n    }\n    printf(\"%d\\n%d\\n%d\\n%d\\n\", up, low, digit, other);\n    return 0;\n}",
              "analysis": "综合了字符串遍历和字符分类。Hello123! 里：大写 H 是 1 个，小写 ello 是 4 个，数字 123 是 3 个，! 是 1 个其他字符。",
              "source": "综合自编题"
            }
          ]
        }
      ]
    },
    {
      "id": "m5",
      "num": "05",
      "title": "函数",
      "desc": "从概念到代码，按顺序掌握本模块核心能力。3 个知识点 / 15 道题",
      "topics": [
        {
          "id": "m5t1",
          "title": "函数定义与调用",
          "explain": [
            {
              "h": "函数是把一段功能打包起来",
              "b": "函数就是把一段要反复用的代码打包起来，起个名字，以后想用就喊这个名字，不用把代码重抄一遍。比如求两数之和的代码，main 里要用 3 次，不用函数就得抄 3 遍；写成一个叫 add 的函数，main 里写 3 次 add(3, 5) 就行了。函数让代码分工清楚：每个函数只做一件事，哪里出问题就去看哪个函数，改起来也方便。学到后面，程序就是由很多小函数拼起来的。",
              "code": "int add(int a, int b) {\n    return a + b;\n}\n// main 里用 3 次：add(3, 5)、add(1, 2)、add(9, 9)"
            },
            {
              "h": "定义长什么样",
              "b": "函数定义写在 main 外面，格式是：返回类型 函数名(参数) { 函数体 }。比如 int add(int a, int b) { return a + b; }：int 是返回类型，意思是这个函数算完会带回一个整数；add 是函数名；括号里的 int a, int b 是参数，意思是调用时要传两个整数进来；大括号里的 return a + b; 是函数体，是真正干活的代码。不需要返回值的函数，返回类型写 void，比如 void printStars(int n) 只打印、不带回任何值。",
              "code": "int add(int a, int b) {  // 返回 int，两个 int 参数\n    return a + b;\n}\nvoid printStars(int n) {  // 不返回值，写 void\n    int i;\n    for (i = 0; i < n; i++) printf(\"*\");\n    printf(\"\\n\");\n}"
            },
            {
              "h": "调用时发生了什么",
              "b": "调用写在需要它的地方，比如 int s = add(3, 5);，程序执行到这一句会发生这些事：第 1 步，跳进 add 函数里，把 3 传给 a、5 传给 b；第 2 步，在函数里执行 return a + b;，算出 8；第 3 步，带着 8 跳回 main，回到调用的地方，8 存进 s；第 4 步，继续执行 main 后面的代码。记住：函数不调用就不会执行，定义只是把代码放在那里，调用才是真正让它跑起来。",
              "code": "int main() {\n    int s = add(3, 5);  // 跳进 add，算出 8，回来存进 s\n    printf(\"%d\\n\", s);\n    return 0;\n}"
            },
            {
              "h": "先定义或先声明，再调用",
              "b": "函数要先定义（或者先声明）再调用。最简单的办法是把函数定义写在 main 上面，main 里直接调用，不会出错。如果非要把定义写在 main 后面，就得在 main 前面先写一行声明，告诉编译器有这么个函数：int add(int a, int b);。声明只有一行函数头，后面要加分号；定义有大括号包着函数体，大括号后面不用加分号。这两个分号的位置别弄反。",
              "code": "int add(int a, int b);  // 声明：只有函数头，后面加分号\nint main() {\n    printf(\"%d\\n\", add(3, 5));\n    return 0;\n}\nint add(int a, int b) {  // 定义写在后面，大括号后不用分号\n    return a + b;\n}"
            }
          ],
          "pitfalls": [
            {
              "wrong": "int add(a, b) { return a + b; }  // 参数没写类型",
              "correct": "int add(int a, int b) { return a + b; }  // 每个参数都要单独写类型",
              "note": "每个参数都要单独写类型，int add(a, b) 是错的，编译器不知道 a、b 是什么类型。两个参数都是 int，也要写两遍 int，不能只写一次。"
            },
            {
              "wrong": "int s = add(int 3, int 5);  // 调用时又把类型写上",
              "correct": "int s = add(3, 5);  // 调用时只给值，不写类型",
              "note": "类型只在定义的时候写，调用的时候只给值。add(int 3, int 5) 是错的，调用时写 int 3 根本不是合法的写法。"
            },
            {
              "wrong": "int add(int a, int b) { return a + b; };\n// 定义后面多了分号",
              "correct": "int add(int a, int b) { return a + b; }\n// 定义的大括号后面不用加分号",
              "note": "函数定义的大括号后面不用加分号，多写一个分号虽然一般不报错，但它是多余的。需要分号的是声明：int add(int a, int b); 只有一行函数头，后面才加分号。"
            }
          ],
          "example": {
            "title": "写一个求两数之和的函数并调用",
            "code": "#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int s = add(3, 5);\n    printf(\"%d\\n\", s);\n    return 0;\n}",
            "analysis": "add 定义在 main 上面，main 里可以直接调用。执行过程是：第 1 步，main 执行到 int s = add(3, 5);，跳进 add 函数；第 2 步，3 传给 a、5 传给 b；第 3 步，执行 return a + b;，算出 8 带回来；第 4 步，8 存进 s，回到 main 继续执行，printf 把 8 打印出来。函数里的 a、b 和 main 里的 s 是不同的变量，各管各的。"
          },
          "problems": [
            {
              "id": "m5t1p1",
              "level": "基础",
              "title": "写函数求两数和",
              "statement": "写一个函数 add，输入两个整数，调用 add 输出它们的和。",
              "input": "输入两个整数。",
              "output": "输出和。",
              "sampleIn": "3 5",
              "sampleOut": "8",
              "hint": "定义 int add(int a, int b)，返回 a+b；main 里调用。",
              "answer": "#include <stdio.h>\nint add(int a, int b) {\n    return a + b;\n}\nint main() {\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    printf(\"%d\\n\", add(a, b));\n    return 0;\n}",
              "analysis": "函数定义：返回值类型 int，函数名 add，参数 a、b，函数体 return a+b。main 里调用 add(a,b)。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m5t1p2",
              "level": "基础",
              "title": "判断质数函数",
              "statement": "写一个函数 isPrime，输入一个整数，调用它判断是不是质数。是输出“是质数”，不是输出“不是质数”。",
              "input": "输入一个整数。",
              "output": "输出判断结果。",
              "sampleIn": "7",
              "sampleOut": "是质数",
              "hint": "isPrime 返回 1 表示是质数，返回 0 表示不是；循环 i 从 2 到 n-1，看 n 能不能被整除。",
              "answer": "#include <stdio.h>\nint isPrime(int n) {\n    int i;\n    if (n < 2) return 0;\n    for (i = 2; i < n; i++) {\n        if (n % i == 0) return 0;\n    }\n    return 1;\n}\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    if (isPrime(n)) printf(\"是质数\\n\");\n    else printf(\"不是质数\\n\");\n    return 0;\n}",
              "analysis": "isPrime 里从 2 试到 n-1，能整除就 return 0（不是质数），都试完就 return 1。n<2 不是质数。",
              "source": "PTA 习题集"
            },
            {
              "id": "m5t1p3",
              "level": "进阶",
              "title": "求阶乘函数",
              "statement": "写一个函数 fact，输入 n，调用它输出 n!（n 的阶乘）。",
              "input": "输入一个整数 n。",
              "output": "输出 n!。",
              "sampleIn": "5",
              "sampleOut": "120",
              "hint": "fact 里用循环从 1 乘到 n。",
              "answer": "#include <stdio.h>\nlong long fact(int n) {\n    long long result = 1;\n    int i;\n    for (i = 1; i <= n; i++) result *= i;\n    return result;\n}\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    printf(\"%lld\\n\", fact(n));\n    return 0;\n}",
              "analysis": "阶乘是 1×2×…×n。fact 里循环累乘。n! 增长很快，用 long long 存。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m5t1p4",
              "level": "进阶",
              "title": "最大公约数函数",
              "statement": "写一个函数 gcd，输入两个正整数，调用它输出最大公约数。",
              "input": "输入两个正整数。",
              "output": "输出最大公约数。",
              "sampleIn": "12 8",
              "sampleOut": "4",
              "hint": "gcd 里用辗转相除法。",
              "answer": "#include <stdio.h>\nint gcd(int a, int b) {\n    int t;\n    while (b != 0) {\n        t = a % b;\n        a = b;\n        b = t;\n    }\n    return a;\n}\nint main() {\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    printf(\"%d\\n\", gcd(a, b));\n    return 0;\n}",
              "analysis": "把辗转相除法写成函数 gcd，main 里直接调用。12 和 8 的最大公约数是 4。",
              "source": "PTA 习题集"
            },
            {
              "id": "m5t1p5",
              "level": "难题",
              "title": "多函数协作菜单",
              "statement": "写三个函数：add（加法）、sub（减法）、mul（乘法）。main 里显示菜单，输入选择 1/2/3，再输入两个数，调用对应函数输出结果；输入 0 退出。",
              "input": "输入选择和两个数。",
              "output": "按菜单输出结果。",
              "sampleIn": "1\n3 5\n0",
              "sampleOut": "8",
              "hint": "三个函数各做一件事，main 里用 switch 按选择调用。",
              "answer": "#include <stdio.h>\nint add(int a, int b) { return a + b; }\nint sub(int a, int b) { return a - b; }\nint mul(int a, int b) { return a * b; }\nint main() {\n    int choice, a, b;\n    while (1) {\n        printf(\"1.加 2.减 3.乘 0.退出\\n\");\n        scanf(\"%d\", &choice);\n        if (choice == 0) break;\n        scanf(\"%d %d\", &a, &b);\n        switch (choice) {\n            case 1: printf(\"%d\\n\", add(a, b)); break;\n            case 2: printf(\"%d\\n\", sub(a, b)); break;\n            case 3: printf(\"%d\\n\", mul(a, b)); break;\n        }\n    }\n    return 0;\n}",
              "analysis": "多函数协作：每个函数只做一件事，main 负责菜单和调用。函数让代码分工清楚，改一个功能不用动别的。",
              "source": "综合自编题"
            }
          ]
        },
        {
          "id": "m5t2",
          "title": "参数与返回值",
          "explain": [
            {
              "h": "值传递：传的是拷贝",
              "b": "参数是调用时传进函数的值，函数里用的是它的一份拷贝，这叫值传递。执行过程是：第 1 步，main 里调用 change(x)，x 的值是 5；第 2 步，程序把 5 复制一份，交给函数里的参数；第 3 步，函数改的是这份拷贝；第 4 步，函数结束，拷贝就没了，main 里的 x 从头到尾没被动过，还是 5。记住一句话：在函数里改参数，影响不到 main 里的原变量。想让函数真正改外面的变量，要传地址（指针），那是下一个模块的内容。",
              "code": "void change(int x) {\n    x = 100;  // 改的是拷贝\n}\nint main() {\n    int x = 5;\n    change(x);  // 调用后 x 还是 5\n    return 0;\n}"
            },
            {
              "h": "return：一执行，函数立刻结束",
              "b": "return 有两个作用：结束函数，并且把后面的值带回调用处。return 一执行，函数立刻结束，return 后面再写的代码永远不会执行。还要注意：一个函数一次只能 return 一个值，想带回两个结果，return 只能写一个，另一个得想别的办法。return 后面不跟值也可以写成 return;，意思是直接结束函数，什么都不带回，一般用在 void 函数里提前退出。调用处拿到返回值后，可以直接打印，也可以存进变量再用。",
              "code": "int max2(int a, int b) {\n    if (a > b) return a;  // 一执行就结束并带回 a\n    return b;\n}"
            },
            {
              "h": "局部变量和全局变量",
              "b": "在函数里面定义的变量叫局部变量，只在这个函数里有效，出了函数就不存在了。函数里的 a 和 main 里的 a 是两个完全不同的格子，名字一样也不相干，互不影响。定义在所有函数外面的叫全局变量，程序里哪里都能用。听起来很方便，但初学阶段要少用：哪里都能改，就意味着哪里改错了都很难查，程序一乱就找不着是谁改的。先养成用局部变量和参数传值的习惯。",
              "code": "int g = 10;  // 全局变量：所有函数都能用，少用\nint f(int a) {  // a 是参数，也是局部的\n    int t = a + 1;  // t 只在 f 里有效\n    return t;\n}"
            },
            {
              "h": "变量的有效范围：出了大括号就用不了",
              "b": "变量只在它所在的那对大括号里有效，出了大括号就用不了了。函数里的局部变量出了函数不能用，道理是一样的：在 for 里声明的 i 只在循环里有效，出了循环就用不了，这和你以前在找约数那道题里踩的坑是同一件事。写代码的时候注意：变量要在哪里用，就在那一层的大括号里声明；想在循环外面用 i，就把 int i; 写在循环外面。作用范围这个概念后面还会反复遇到，先记住“出了大括号就没了”这句话。",
              "code": "for (int i = 0; i < 5; i++) {\n    printf(\"%d\\n\", i);  // i 只在这里有效\n}\n// 出了循环，i 就用不了了"
            }
          ],
          "pitfalls": [
            {
              "wrong": "void change(int x) { x = 100; }\nint main() { int x = 5; change(x); /* 以为 x 变成了 100 */ }",
              "correct": "void change(int x) { x = 100; }\nint main() { int x = 5; change(x); /* x 还是 5 */ }\n// 想改外面的变量要传地址（指针）",
              "note": "值传递传的是拷贝，函数里改的是拷贝，main 里的原变量纹丝不动。以为改了参数原变量也会变，是学函数时最常见的误会。想让函数改外面的变量，要传地址（指针），这是下一个模块的内容。"
            },
            {
              "wrong": "int f(int n) {\n    return n + 1;\n    printf(\"算完了\\n\");  // 以为会打印\n}",
              "correct": "int f(int n) {\n    printf(\"算完了\\n\");\n    return n + 1;\n}",
              "note": "return 一执行函数就结束了，return 后面写的代码永远不会执行。想在返回前打印点什么，要把 printf 写在 return 前面。"
            },
            {
              "wrong": "int a = 10;  // main 里的 a\nint f(int a) { return a + 1; }  // 以为改的是 main 里的 a",
              "correct": "int f(int a) { return a + 1; }  // 函数里的 a 是参数，是传进来的拷贝",
              "note": "函数里的 a 和 main 里的 a 是两个不同的格子，只是名字碰巧一样，互不影响。函数里的 a 是参数，存的是传进来的拷贝；改它不会动到 main 里的 a。"
            }
          ],
          "example": {
            "title": "改参数不会影响原变量",
            "code": "#include <stdio.h>\n\nvoid change(int x) {\n    x = 100;\n    printf(\"函数里 x=%d\\n\", x);\n}\n\nint main() {\n    int x = 5;\n    change(x);\n    printf(\"main 里 x=%d\\n\", x);\n    return 0;\n}",
            "analysis": "输出是两行：函数里 x=100，main 里 x=5。执行过程是：第 1 步，main 里 x = 5，调用 change(x)；第 2 步，5 被复制一份交给函数里的参数 x；第 3 步，函数把拷贝改成 100，打印“函数里 x=100”；第 4 步，函数结束，拷贝消失，回到 main，x 还是原来的 5，打印“main 里 x=5”。这个实验就是值传递最直接的证据：函数改的永远是拷贝，不是原变量。"
          },
          "problems": [
            {
              "id": "m5t2p1",
              "level": "基础",
              "title": "值传递交换（失败版）",
              "statement": "写一个函数 swap(int a, int b) 交换两个数，在 main 里调用它，观察 x、y 变了没有，输出调用前后的 x、y。",
              "input": "输入两个整数。",
              "output": "输出调用前和调用后的 x、y。",
              "sampleIn": "3 5",
              "sampleOut": "调用前：3 5\n调用后：3 5",
              "hint": "值传递改的是副本，实参不变。",
              "answer": "#include <stdio.h>\nvoid swap(int a, int b) {\n    int t = a; a = b; b = t;\n}\nint main() {\n    int x, y;\n    scanf(\"%d %d\", &x, &y);\n    printf(\"调用前：%d %d\\n\", x, y);\n    swap(x, y);\n    printf(\"调用后：%d %d\\n\", x, y);\n    return 0;\n}",
              "analysis": "值传递：swap 里的 a、b 是 x、y 的副本，改副本不影响 x、y。所以调用后 x、y 还是 3 5。这是理解值传递的关键实验。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m5t2p2",
              "level": "基础",
              "title": "指针交换两数",
              "statement": "写一个函数 swap(int *a, int *b)，在 main 里调用它交换两个数，输出交换后的值。",
              "input": "输入两个整数。",
              "output": "输出交换后的两个数。",
              "sampleIn": "3 5",
              "sampleOut": "5 3",
              "hint": "传地址 &x、&y，函数里用 *a、*b 操作。",
              "answer": "#include <stdio.h>\nvoid swap(int *a, int *b) {\n    int t = *a; *a = *b; *b = t;\n}\nint main() {\n    int x, y;\n    scanf(\"%d %d\", &x, &y);\n    swap(&x, &y);\n    printf(\"%d %d\\n\", x, y);\n    return 0;\n}",
              "analysis": "传地址才能改实参。swap(&x,&y) 把地址传进去，*a 就是 x 本身，改 *a 就是改 x。输出 5 3。",
              "source": "PTA 习题集"
            },
            {
              "id": "m5t2p3",
              "level": "进阶",
              "title": "函数返回多个值",
              "statement": "写一个函数 calc，输入两个数，通过指针参数同时返回它们的和与差。main 里输出和与差。",
              "input": "输入两个整数。",
              "output": "输出和与差。",
              "sampleIn": "3 5",
              "sampleOut": "8 -2",
              "hint": "calc(int a, int b, int *sum, int *diff)，函数里 *sum=a+b、*diff=a-b。",
              "answer": "#include <stdio.h>\nvoid calc(int a, int b, int *sum, int *diff) {\n    *sum = a + b;\n    *diff = a - b;\n}\nint main() {\n    int a, b, s, d;\n    scanf(\"%d %d\", &a, &b);\n    calc(a, b, &s, &d);\n    printf(\"%d %d\\n\", s, d);\n    return 0;\n}",
              "analysis": "一个函数只能 return 一个值，想返回多个值就用指针参数。calc 把和写进 *sum、差写进 *diff，main 里的 s、d 就被改了。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m5t2p4",
              "level": "进阶",
              "title": "静态变量计数",
              "statement": "写一个函数 call，里面用 static 变量记录被调用了几次。main 里调用它 3 次，每次输出这是第几次调用。",
              "input": "无输入。",
              "output": "输出三行调用次数。",
              "sampleIn": "（无）",
              "sampleOut": "第 1 次调用\n第 2 次调用\n第 3 次调用",
              "hint": "static int count=0; 每次调用 count++，static 变量只初始化一次，下次调用还记得上次的值。",
              "answer": "#include <stdio.h>\nvoid call() {\n    static int count = 0;\n    count++;\n    printf(\"第 %d 次调用\\n\", count);\n}\nint main() {\n    call(); call(); call();\n    return 0;\n}",
              "analysis": "static 局部变量只初始化一次，函数退出后值还保留着，下次调用继续用。所以三次调用输出 1、2、3。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m5t2p5",
              "level": "难题",
              "title": "函数指针综合",
              "statement": "写两个函数 add 和 mul，再写一个函数 operate，接受一个函数指针和两个数，调用这个函数指针输出结果。main 里先用 add 算 3+5，再用 mul 算 3*5。",
              "input": "无输入（数写在代码里）。",
              "output": "输出两行结果。",
              "sampleIn": "（无）",
              "sampleOut": "8\n15",
              "hint": "函数指针类型：int (*p)(int, int)。operate(int (*p)(int,int), int a, int b) 里调用 p(a,b)。",
              "answer": "#include <stdio.h>\nint add(int a, int b) { return a + b; }\nint mul(int a, int b) { return a * b; }\nvoid operate(int (*p)(int, int), int a, int b) {\n    printf(\"%d\\n\", p(a, b));\n}\nint main() {\n    operate(add, 3, 5);\n    operate(mul, 3, 5);\n    return 0;\n}",
              "analysis": "函数指针：把函数当参数传。operate 接受一个函数指针 p，调用 p(a,b) 就是调用传进来的那个函数。传 add 得 8，传 mul 得 15。",
              "source": "综合自编题"
            }
          ]
        },
        {
          "id": "m5t3",
          "title": "递归",
          "explain": [
            {
              "h": "递归就是函数自己调用自己",
              "b": "递归就是函数自己调用自己。听起来很绕，但套路是固定的，只有两件事：第 1 件，先写什么时候停，叫出口；第 2 件，再写怎么把问题缩小一步，叫递推。写递归的第一件事就是先写出口，再写递推，顺序不能反。出口是最小的、不用再分的情况，直接给答案；递推是把大问题变成一个小一点的同类问题，交给自己再算一遍。一层一层缩小，总有一天会小到出口，直接停住。",
              "code": "int fact(int n) {\n    if (n == 1) return 1;       // 出口：先写\n    return n * fact(n - 1);    // 递推：缩小一步\n}"
            },
            {
              "h": "阶乘：递归的经典例子",
              "b": "阶乘是最适合讲递归的例子：n 的阶乘 = n × (n-1) 的阶乘，一直缩小，到 1 的阶乘 = 1 就停。代码只有两行：if (n == 1) return 1; 是出口，n 是 1 就直接返回 1，不再调用自己；return n * fact(n - 1); 是递推，把 n 的阶乘变成 n 乘上 (n-1) 的阶乘。注意 n - 1 是缩小一步：每次调用，n 都比上一次小 1，离出口越来越近。",
              "code": "int fact(int n) {\n    if (n == 1) return 1;\n    return n * fact(n - 1);\n}\n// fact(5) = 5 × fact(4)，fact(4) = 4 × fact(3)……"
            },
            {
              "h": "执行过程：先一层层深入，再一层层返回",
              "b": "以 fact(5) 为例。深入阶段：第 1 步，fact(5) 要算 5 × fact(4)，先去算 fact(4)；第 2 步，fact(4) 要算 4 × fact(3)；第 3 步，fact(3) 要算 3 × fact(2)；第 4 步，fact(2) 要算 2 × fact(1)；第 5 步，fact(1) 碰到出口，直接返回 1，深入到此为止。返回阶段：第 6 步，fact(2) 拿到 1，算出 2 × 1 = 2；第 7 步，fact(3) 拿到 2，算出 3 × 2 = 6；第 8 步，fact(4) 拿到 6，算出 4 × 6 = 24；第 9 步，fact(5) 拿到 24，算出 5 × 24 = 120，main 打印 120。记住：先深入到出口，再倒着乘回来。",
              "code": ""
            },
            {
              "h": "没有出口会崩溃，简单问题优先用循环",
              "b": "没有出口的递归会无限调用自己：fact 里如果没有 if (n == 1) return 1;，n 会一直减到 0、减到负数还不停，调用一层套一层，最后把内存占满，程序直接崩溃，这叫栈溢出。所以写递归第一件事就是先写出口。还有一个选择问题：能用循环写的简单问题优先用循环，比如求和、阶乘，循环更直观、也不容易错；递归适合问题本身就是层层缩小的，比如阶乘、斐波那契、汉诺塔，用递归写反而更清楚。",
              "code": "int fact(int n) {\n    return n * fact(n - 1);  // 没有出口：千万别这么写\n}"
            }
          ],
          "pitfalls": [
            {
              "wrong": "int fact(int n) {\n    return n * fact(n - 1);  // 没有出口\n}",
              "correct": "int fact(int n) {\n    if (n == 1) return 1;\n    return n * fact(n - 1);\n}",
              "note": "没有出口的递归会一直调用自己，n 减到 0、减到负数还不停，最后栈溢出、程序崩溃。写递归第一件事就是先写出口。"
            },
            {
              "wrong": "int fact(int n) {\n    if (n == 1) return 1;\n    return n * fact(n + 1);  // 缩小方向写错了\n}",
              "correct": "int fact(int n) {\n    if (n == 1) return 1;\n    return n * fact(n - 1);  // 每次减 1，离出口越来越近\n}",
              "note": "fact(n + 1) 是越变越大，n 永远到不了出口 1，只会无限调用下去。递推一定要朝着出口缩小：出口是 1，就要写 n - 1，每次离 1 近一步。"
            }
          ],
          "example": {
            "title": "用递归求阶乘",
            "code": "#include <stdio.h>\n\nint fact(int n) {\n    if (n == 1) return 1;\n    return n * fact(n - 1);\n}\n\nint main() {\n    printf(\"%d\\n\", fact(5));\n    return 0;\n}",
            "analysis": "fact(5) = 5 × fact(4)，fact(4) = 4 × fact(3)，fact(3) = 3 × fact(2)，fact(2) = 2 × fact(1)，深入到 fact(1) = 1 停住。再倒着乘回来：fact(2) 是 1 × 2 = 2，fact(3) 是 2 × 3 = 6，fact(4) 是 6 × 4 = 24，fact(5) 是 24 × 5 = 120，main 打印 120。深入的时候每一层都在等下一层的结果，返回的时候每一层都把自己的 n 乘上去。"
          },
          "problems": [
            {
              "id": "m5t3p1",
              "level": "基础",
              "title": "递归求阶乘",
              "statement": "用递归写一个函数 fact，输入 n，输出 n!。",
              "input": "输入一个整数 n。",
              "output": "输出 n!。",
              "sampleIn": "5",
              "sampleOut": "120",
              "hint": "fact(n) = n * fact(n-1)，终止条件 n<=1 返回 1。",
              "answer": "#include <stdio.h>\nint fact(int n) {\n    if (n <= 1) return 1;\n    return n * fact(n - 1);\n}\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    printf(\"%d\\n\", fact(n));\n    return 0;\n}",
              "analysis": "递归求阶乘：fact(5)=5×fact(4)=5×4×fact(3)……直到 fact(1)=1，再乘回来得 120。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m5t3p2",
              "level": "基础",
              "title": "斐波那契递归",
              "statement": "用递归写一个函数 fib，输入 n，输出斐波那契数列的第 n 项（从 1、1 开始）。",
              "input": "输入一个整数 n。",
              "output": "输出第 n 项。",
              "sampleIn": "6",
              "sampleOut": "8",
              "hint": "fib(n)=fib(n-1)+fib(n-2)，终止条件 n<=2 返回 1。",
              "answer": "#include <stdio.h>\nint fib(int n) {\n    if (n <= 2) return 1;\n    return fib(n - 1) + fib(n - 2);\n}\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    printf(\"%d\\n\", fib(n));\n    return 0;\n}",
              "analysis": "斐波那契递归：fib(6)=fib(5)+fib(4)，一直拆到 fib(1)、fib(2) 返回 1，再加回来得 8。",
              "source": "PTA 习题集"
            },
            {
              "id": "m5t3p3",
              "level": "进阶",
              "title": "汉诺塔",
              "statement": "有 3 根柱子 A、B、C，A 上有 n 个盘子（从大到小叠放）。每次只能移动一个盘子，大盘子不能放在小盘子上面。输入 n，输出把 n 个盘子从 A 移到 C 的步骤（每步输出“盘子编号：A->C”这样的格式）。",
              "input": "输入一个整数 n（盘子数）。",
              "output": "输出移动步骤。",
              "sampleIn": "3",
              "sampleOut": "1: A->C\n2: A->B\n1: C->B\n3: A->C\n1: B->A\n2: B->C\n1: A->C",
              "hint": "递归：先把 n-1 个盘子从 A 借助 C 移到 B，再把最大的盘子从 A 移到 C，最后把 n-1 个盘子从 B 借助 A 移到 C。",
              "answer": "#include <stdio.h>\nvoid hanoi(int n, char from, char to, char aux) {\n    if (n == 1) {\n        printf(\"1: %c->%c\\n\", from, to);\n        return;\n    }\n    hanoi(n - 1, from, aux, to);\n    printf(\"%d: %c->%c\\n\", n, from, to);\n    hanoi(n - 1, aux, to, from);\n}\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    hanoi(n, 'A', 'C', 'B');\n    return 0;\n}",
              "analysis": "汉诺塔是递归的经典题。n 个盘子：先把上面 n-1 个借助 C 移到 B，再把最大的从 A 移到 C，最后把 n-1 个从 B 借助 A 移到 C。3 个盘子共 7 步。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m5t3p4",
              "level": "进阶",
              "title": "递归求和",
              "statement": "用递归写一个函数 sum，输入 n，输出 1 到 n 的和。",
              "input": "输入一个整数 n。",
              "output": "输出和。",
              "sampleIn": "5",
              "sampleOut": "15",
              "hint": "sum(n) = n + sum(n-1)，终止条件 n<=1 返回 n。",
              "answer": "#include <stdio.h>\nint sum(int n) {\n    if (n <= 1) return n;\n    return n + sum(n - 1);\n}\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    printf(\"%d\\n\", sum(n));\n    return 0;\n}",
              "analysis": "递归求和：sum(5)=5+sum(4)=5+4+sum(3)……直到 sum(1)=1，再加回来得 15。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m5t3p5",
              "level": "难题",
              "title": "全排列",
              "statement": "输入 n，输出 1~n 的所有全排列（每行一种，字典序）。",
              "input": "输入一个整数 n。",
              "output": "输出所有全排列。",
              "sampleIn": "3",
              "sampleOut": "1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1",
              "hint": "回溯：用数组存当前排列，用 used 标记哪个数用过了；排满 n 个就输出，回溯时取消标记。",
              "answer": "#include <stdio.h>\nint n, a[10], used[10] = {0};\nvoid dfs(int pos) {\n    int i;\n    if (pos == n) {\n        for (i = 0; i < n; i++) printf(\"%d \", a[i]);\n        printf(\"\\n\");\n        return;\n    }\n    for (i = 1; i <= n; i++) {\n        if (!used[i]) {\n            used[i] = 1;\n            a[pos] = i;\n            dfs(pos + 1);\n            used[i] = 0;\n        }\n    }\n}\nint main() {\n    scanf(\"%d\", &n);\n    dfs(0);\n    return 0;\n}",
              "analysis": "全排列是递归+回溯的经典题。dfs 每次选一个没用过的数放进当前位置，排满就输出，回来时取消标记（回溯），再试下一个数。3 个数共 6 种排列。",
              "source": "综合自编题"
            }
          ]
        }
      ]
    },
    {
      "id": "m6",
      "num": "06",
      "title": "指针",
      "desc": "从概念到代码，按顺序掌握本模块核心能力。2 个知识点 / 10 道题",
      "topics": [
        {
          "id": "m6t1",
          "title": "指针基础",
          "explain": [
            {
              "h": "每个变量都有一个地址",
              "b": "每个变量在内存里都有自己的住处，住处的门牌号就叫地址。地址是一个编号，你不用去背它具体是多少，只要知道每个变量都有一个独一无二的地址就行了。想拿到一个变量的地址，要用取地址符 &，写成 &a 的样子，读作 a 的地址。举个例子，int a = 10; 这句话先在内存里给 a 分了一块地方、放进 10；&a 就是这块地方的门牌号。地址本身也是一个值，只不过它长得像个很大的十六进制数，平时我们不直接算它，只把它存起来、传给别人用。记住这个对应关系：变量 a 里面装的是值，比如 10；&a 里面装的是 a 住在哪，也就是地址。一个是东西，一个是地址，千万别把它们当成同一个东西。",
              "code": "int a = 10;\n// &a 是 a 的地址，比如 0x7ffee4（每次运行可能不同）\nprintf(\"%p\\n\", &a); // 打印地址用 %p"
            },
            {
              "h": "指针就是存地址的变量",
              "b": "指针就是专门用来存地址的变量。普通变量存的是数，指针变量存的是地址。声明指针的写法是 int *p;，这句话的意思是：p 是一个指针，它里面存的是一个 int 变量的地址，星号 * 在这里是声明的一部分，表示 p 是指针。让指针指向 a 要写 p = &a;，意思是把 a 的地址装进 p 里，从此 p 就指向 a 了。也可以在声明时一步到位，写成 int *p = &a;。声明时的 * 和后面取值时的 * 写法一样、意思不一样：声明时表示这是一个指针，取值时表示顺着地址去找变量。指针也有自己的类型，int * 只能指向 int 变量，指向别的类型会出错，类型要对上。",
              "code": "int a = 10;\nint *p;    // 声明一个指向 int 的指针 p\np = &a;   // 把 a 的地址装进 p，p 指向 a\n// 也可以一步到位：int *p = &a;"
            },
            {
              "h": "*p 就是顺着地址找到变量本身",
              "b": "*p 的意思是顺着 p 里存的地址，找到那个变量本身，所以 *p 和 a 是同一个东西。执行过程一步步来看：第 1 步：int a = 10; 给 a 分地方、放进 10；第 2 步：int *p = &a; 把 a 的地址装进 p，p 指向 a；第 3 步：printf(\"%d\", *p); 顺着 p 的地址找到 a，读出 10 打印出来；第 4 步：*p = 20; 顺着地址找到 a，把里面的 10 换成 20；第 5 步：再看 a，它已经变成 20 了。p 里面存的是地址，*p 是顺着地址找到的变量，p 和 *p 是两个完全不同的东西：打印 p 得到的是地址，要用 %p；打印 *p 得到的是值，要用 %d。什么时候用哪个，就看你想要的是地址还是值。",
              "code": "int a = 10;\nint *p = &a;\nprintf(\"%d\\n\", *p); // 10，读 *p 就是读 a\n*p = 20;             // 改 *p 就是改 a\nprintf(\"%d\\n\", a);  // 20"
            },
            {
              "h": "scanf 早就用过 &",
              "b": "其实你早就用过地址了，只是当时没意识到。scanf(\"%d\", &a) 里面的 &a，就是把 a 的地址交给 scanf。为什么 scanf 非要地址不可呢？因为 scanf 要把你输入的数放进 a，它必须知道 a 住在哪，才能顺着地址把数送过去。执行过程是这样的：第 1 步：&a 把 a 的地址算出来；第 2 步：scanf 拿到地址，等你输入一个数、按回车；第 3 步：scanf 顺着地址找到 a，把数放进 a 的内存里；第 4 步：a 里面已经是你输入的数了。如果只写 scanf(\"%d\", a)，就等于把 a 里面的值当成地址交给 scanf，scanf 顺着这个乱七八糟的地址去放数，程序轻则读错数，重则直接崩溃。所以普通变量读入必须加 &，这是你已经犯过两次的错，一定要记牢。",
              "code": "int a;\nscanf(\"%d\", &a); // 把 a 的地址交给 scanf\nprintf(\"%d\\n\", a);"
            }
          ],
          "pitfalls": [
            {
              "wrong": "int a;\nscanf(\"%d\", a); // 忘了 &",
              "correct": "int a;\nscanf(\"%d\", &a); // 普通变量读入必须加 &",
              "note": "scanf 要的是地址，不是值。忘了 &，scanf 不知道往哪放数，程序会出错甚至崩溃。这是你已经犯过两次的错（practice1、数字三角形），一定要记牢。字符串读入不加 &，别记反。"
            },
            {
              "wrong": "int *p;\n*p = 5; // p 还没指向任何变量",
              "correct": "int a;\nint *p = &a;\n*p = 5; // 先让 p 指向 a，再用 *p",
              "note": "没指向任何变量的指针叫野指针，里面存的是乱七八糟的地址，顺着它去改值会改到不该改的地方，程序会崩溃。用 *p 之前，一定要先写 p = &a;。"
            },
            {
              "wrong": "int *p; // 读成 int 乘 p",
              "correct": "int *p; // * 在这里是声明指针：p 存的是地址",
              "note": "* 的意思要看它出现的位置：声明和取值时 * 是指针的意思，只有 a * b 里才是乘法。int *p 里的 * 和 a * b 里的 * 不是一回事。"
            },
            {
              "wrong": "int a = 10;\nint *p;\n*p = &a; // 把地址赋给了 *p",
              "correct": "int a = 10;\nint *p;\np = &a; // 地址装进 p，*p 才是 a 本身",
              "note": "p 和 *p 是两个东西：p 存的是地址，*p 是顺着地址找到的变量。p = &a 是把地址装进指针；*p = &a 是把地址当成一个数塞进 a 里，意思全错了。"
            }
          ],
          "example": {
            "title": "用指针改变量的值",
            "code": "#include <stdio.h>\n\nint main() {\n    int a = 10;\n    int *p = &a;\n    printf(\"a=%d 地址=%p\\n\", a, p);\n    *p = 20;\n    printf(\"改后 a=%d\\n\", a);\n    return 0;\n}",
            "analysis": "执行过程一步步来看：第 1 步：int a = 10; 给 a 分地方、放进 10；第 2 步：int *p = &a; 把 a 的地址装进 p，p 指向 a；第 3 步：printf 打印 a 的值 10 和 p 里存的地址，打印地址用 %p，打印值用 %d；第 4 步：*p = 20; 顺着 p 的地址找到 a，把里面的 10 换成 20；第 5 步：再打印 a，已经变成 20 了。*p 就是 a 本身，改 *p 就是改 a，这就是指针最核心的一句话。"
          },
          "problems": [
            {
              "id": "m6t1p1",
              "level": "基础",
              "title": "指针取地址",
              "statement": "输入一个整数 a，定义指针 p 指向 a，输出 a 的值和 *p 的值。",
              "input": "输入一个整数。",
              "output": "输出 a 和 *p 的值。",
              "sampleIn": "5",
              "sampleOut": "5 5",
              "hint": "int *p = &a; *p 就是 a。",
              "answer": "#include <stdio.h>\nint main() {\n    int a;\n    scanf(\"%d\", &a);\n    int *p = &a;\n    printf(\"%d %d\\n\", a, *p);\n    return 0;\n}",
              "analysis": "p 存 a 的地址，*p 就是 a 本身，所以 a 和 *p 一样。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m6t1p2",
              "level": "基础",
              "title": "指针交换两数",
              "statement": "输入两个整数，用指针交换它们的值后输出。",
              "input": "输入两个整数。",
              "output": "输出交换后的值。",
              "sampleIn": "3 5",
              "sampleOut": "5 3",
              "hint": "int *p=&a, *q=&b; 交换 *p 和 *q。",
              "answer": "#include <stdio.h>\nint main() {\n    int a, b, t;\n    scanf(\"%d %d\", &a, &b);\n    int *p = &a, *q = &b;\n    t = *p; *p = *q; *q = t;\n    printf(\"%d %d\\n\", a, b);\n    return 0;\n}",
              "analysis": "交换 *p 和 *q 就是交换 a 和 b。指针让交换的写法更灵活。",
              "source": "PTA 习题集"
            },
            {
              "id": "m6t1p3",
              "level": "进阶",
              "title": "指针遍历数组",
              "statement": "输入 5 个整数存进数组，用指针遍历数组并输出所有元素。",
              "input": "输入 5 个整数。",
              "output": "输出 5 个数，用空格分隔。",
              "sampleIn": "1 2 3 4 5",
              "sampleOut": "1 2 3 4 5",
              "hint": "int *p = a; 循环里输出 *p，再 p++。",
              "answer": "#include <stdio.h>\nint main() {\n    int a[5], *p, i;\n    for (i = 0; i < 5; i++) scanf(\"%d\", &a[i]);\n    for (p = a; p < a + 5; p++) {\n        printf(\"%d \", *p);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
              "analysis": "数组名 a 就是首元素的地址。p=a 后，p++ 让指针移到下一个元素，*p 就是那个元素。p<a+5 控制范围。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m6t1p4",
              "level": "进阶",
              "title": "指针与函数",
              "statement": "写一个函数 maxPtr，接受两个 int 指针，返回指向较大值的指针。main 里输入两个数，输出较大的数。",
              "input": "输入两个整数。",
              "output": "输出较大的数。",
              "sampleIn": "3 5",
              "sampleOut": "5",
              "hint": "int *maxPtr(int *a, int *b) { return (*a > *b) ? a : b; }。",
              "answer": "#include <stdio.h>\nint *maxPtr(int *a, int *b) {\n    return (*a > *b) ? a : b;\n}\nint main() {\n    int x, y;\n    scanf(\"%d %d\", &x, &y);\n    printf(\"%d\\n\", *maxPtr(&x, &y));\n    return 0;\n}",
              "analysis": "函数返回指针：maxPtr 返回指向较大值的指针，main 里 *maxPtr(&x,&y) 取出那个值。3 和 5 里较大的是 5。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m6t1p5",
              "level": "难题",
              "title": "二级指针与动态内存",
              "statement": "输入 n，用 malloc 动态分配一个有 n 个整数的数组，输入 n 个数，用二级指针修改其中一个元素后输出整个数组。",
              "input": "输入 n，再输入 n 个整数，最后输入要修改的位置 pos 和新值 val。",
              "output": "输出修改后的数组。",
              "sampleIn": "5\n1 2 3 4 5\n2 99",
              "sampleOut": "1 2 99 4 5",
              "hint": "int *a = malloc(n*sizeof(int)); int **pp = &a; 用 (*pp)[pos] = val 修改。",
              "answer": "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n, i, pos, val;\n    scanf(\"%d\", &n);\n    int *a = (int *)malloc(n * sizeof(int));\n    for (i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    scanf(\"%d %d\", &pos, &val);\n    int **pp = &a;\n    (*pp)[pos] = val;\n    for (i = 0; i < n; i++) printf(\"%d \", a[i]);\n    printf(\"\\n\");\n    free(a);\n    return 0;\n}",
              "analysis": "综合了动态内存和二级指针。malloc 在堆上分配数组，pp 是指向指针的指针，(*pp)[pos] 就是 a[pos]。用完 free 释放。pos=2 时 a[2] 改成 99。",
              "source": "综合自编题"
            }
          ]
        },
        {
          "id": "m6t2",
          "title": "指针与数组",
          "explain": [
            {
              "h": "数组名就是第一个元素的地址",
              "b": "int a[5] = {1, 2, 3, 4, 5}; 定义了一个有 5 个 int 的数组，a[0] 到 a[4] 在内存里是挨着排成一排的。数组名 a 本身就是第一个元素 a[0] 的地址，所以 a 和 &a[0] 完全是一回事，值是一样的。这就是为什么 scanf 读字符串不用加 &：字符串就是字符数组，数组名 s 本身已经是地址了，直接写 s 就行。普通变量读入要写 &a，因为 a 是值、不是地址；数组名天生就是地址，所以不用再加 &。记住这个区别：变量名代表值，要地址就加 &；数组名代表地址，直接用。a + 1 是第二个元素的地址，也就是 &a[1]，a + i 就是 &a[i]，这个规律后面到处都要用。",
              "code": "int a[5] = {1, 2, 3, 4, 5};\n// a == &a[0]，a + 1 == &a[1]，a + i == &a[i]\nint *p = a; // p 指向 a[0]"
            },
            {
              "h": "指针加 1 是跳到下一个元素",
              "b": "指针加 1 不是地址加 1，而是跳到下一个元素。执行过程一步步来看：第 1 步：int *p = a; 让 p 指向 a[0]，也就是数组的第一个元素；第 2 步：p + 1 不是在地址上加 1，而是往后跳一个 int 的位置，指向 a[1]，因为一个 int 占 4 个字节；第 3 步：*(p + 1) 是顺着这个新地址取值，得到的就是 a[1]；第 4 步：p++ 也是同样的意思，p 原来指向 a[0]，p++ 之后指向 a[1]，再 p++ 就指向 a[2]。所以 p + i 指向 a[i]，*(p + i) 就是 a[i]，写成 p[i] 也完全一样。指针加法按元素个数走，编译器按类型自动算字节数：int 指针一次跳 4 个字节，char 指针一次跳 1 个字节。",
              "code": "int a[5] = {1, 2, 3, 4, 5};\nint *p = a;\nprintf(\"%d\\n\", *(p + 1)); // a[1]，等于 2\np++; // p 从 a[0] 移到 a[1]\nprintf(\"%d\\n\", *p);      // 2"
            },
            {
              "h": "数组传给函数，传的是地址",
              "b": "把数组传给函数，传的其实是地址，不是把整个数组复制一份。执行过程是这样的：第 1 步：main 里定义好数组 int a[3] = {1, 2, 3};，调用 addOne(a, 3);，传过去的 a 是首元素的地址；第 2 步：函数里的参数 int a[] 收到这个地址，它和 main 里的 a 指向的是同一块内存，是同一个数组；第 3 步：函数里循环 a[i]++，改的是这块内存里的真数据；第 4 步：函数结束回到 main，再打印数组，里面的数真的变了，变成了 2、3、4。这和普通变量正好相反：普通变量传给函数是把值复制一份，函数里改的是拷贝，外面的原变量纹丝不动；数组传的是地址，函数里改的就是原件。所以写函数时要想清楚：你是在改谁的数据，改完外面会不会跟着变。",
              "code": "void addOne(int a[], int n) {\n    int i;\n    for (i = 0; i < n; i++) {\n        a[i]++;\n    }\n}\n// main 里：int a[3] = {1, 2, 3}; addOne(a, 3); 后 a 变成 {2, 3, 4}"
            },
            {
              "h": "传普通变量的地址，函数就能改原变量",
              "b": "想让函数改到外面的普通变量，就要把这个变量的地址传进去，函数里用 * 解开再改。执行过程以交换两个变量为例：第 1 步：main 里 x = 1、y = 2，调用 swap(&x, &y)，把地址传进去；第 2 步：函数收到两个地址，a 指向 x，b 指向 y；第 3 步：int t = *a; 取出 x 的 1 存进 t；第 4 步：*a = *b; 把 y 的 2 放进 x；第 5 步：*b = t; 把 1 放进 y；第 6 步：回到 main 打印 x、y，输出 2 1，真的换过来了。如果 swap 用普通参数，函数里换的只是拷贝，外面的 x、y 一点都不会动。scanf 也是这个原理：拿到 &a，顺着地址把数放进 a。",
              "code": "void swap(int *a, int *b) {\n    int t = *a;\n    *a = *b;\n    *b = t;\n}\n// main 里：int x = 1, y = 2; swap(&x, &y); 后 x=2, y=1"
            }
          ],
          "pitfalls": [
            {
              "wrong": "addOne(a, 3); // 以为函数里 a[i]++ 只改拷贝，外面不变",
              "correct": "// 数组传的是地址，函数里 a[i]++ 改的就是原数组，外面真的会变",
              "note": "数组传给函数传的是地址，不是复制一份。函数里的参数和外面的数组指向同一块内存，改了就是真改。写函数时要清楚自己在改谁的数据。"
            },
            {
              "wrong": "void swap(int a, int b) {\n    int t = a;\n    a = b;\n    b = t;\n} // 交换的只是拷贝",
              "correct": "void swap(int *a, int *b) {\n    int t = *a;\n    *a = *b;\n    *b = t;\n} // 传地址、用 * 解开，改的是原变量",
              "note": "普通参数传的是值的拷贝，函数里怎么换，外面的变量都纹丝不动。想让函数改到外面的原变量，必须传地址，调用写 swap(&x, &y)，函数里用 *a、*b 解开再改。"
            },
            {
              "wrong": "int *p = a;\np + 1; // 以为地址只加了 1",
              "correct": "// p + 1 指向 a[1]：int 指针一次跳 4 个字节，不是 1 个字节",
              "note": "指针加 1 是跳到下一个元素，不是地址加 1。int 占 4 个字节，p + 1 的地址实际加了 4；char 指针加 1 才是地址加 1。记住：指针加几，就是往后移几个元素。"
            }
          ],
          "example": {
            "title": "用指针交换两个变量",
            "code": "#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int t = *a;\n    *a = *b;\n    *b = t;\n}\n\nint main() {\n    int x = 1, y = 2;\n    swap(&x, &y);\n    printf(\"%d %d\\n\", x, y);\n    return 0;\n}",
            "analysis": "执行过程一步步来看：第 1 步：main 里 x = 1、y = 2，调用 swap(&x, &y)，把 x 和 y 的地址传进去；第 2 步：函数里 a 指向 x，b 指向 y，*a 就是 x 本人，*b 就是 y 本人；第 3 步：t = *a，取出 x 的 1；第 4 步：*a = *b，把 y 的 2 放进 x；第 5 步：*b = t，把 1 放进 y；第 6 步：回到 main 打印，输出 2 1。交换的是原变量本身，所以 main 里的 x、y 真的换过来了。"
          },
          "problems": [
            {
              "id": "m6t2p1",
              "level": "基础",
              "title": "指针访问数组元素",
              "statement": "输入 5 个整数存进数组，用指针输出第 1 个、第 3 个、第 5 个元素。",
              "input": "输入 5 个整数。",
              "output": "输出第 1、3、5 个元素，用空格分隔。",
              "sampleIn": "1 2 3 4 5",
              "sampleOut": "1 3 5",
              "hint": "int *p = a; 输出 *p、*(p+2)、*(p+4)。",
              "answer": "#include <stdio.h>\nint main() {\n    int a[5];\n    int i;\n    for (i = 0; i < 5; i++) scanf(\"%d\", &a[i]);\n    int *p = a;\n    printf(\"%d %d %d\\n\", *p, *(p + 2), *(p + 4));\n    return 0;\n}",
              "analysis": "*(p+2) 就是 a[2]，*(p+4) 就是 a[4]。指针加几就是往后移几个元素。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m6t2p2",
              "level": "基础",
              "title": "指针算术",
              "statement": "输入 5 个整数存进数组，用指针 p 从 a 开始，每次 p++ 输出 *p，直到输出完 5 个数。",
              "input": "输入 5 个整数。",
              "output": "输出 5 个数，用空格分隔。",
              "sampleIn": "1 2 3 4 5",
              "sampleOut": "1 2 3 4 5",
              "hint": "for (p = a; p < a + 5; p++) 输出 *p。",
              "answer": "#include <stdio.h>\nint main() {\n    int a[5];\n    int *p;\n    int i;\n    for (i = 0; i < 5; i++) scanf(\"%d\", &a[i]);\n    for (p = a; p < a + 5; p++) printf(\"%d \", *p);\n    printf(\"\\n\");\n    return 0;\n}",
              "analysis": "p++ 让指针移到下一个元素。p<a+5 控制范围，输出 *p 就是当前元素。",
              "source": "PTA 习题集"
            },
            {
              "id": "m6t2p3",
              "level": "进阶",
              "title": "字符串指针操作",
              "statement": "输入一个字符串，用指针统计其中大写字母的个数。",
              "input": "输入一个字符串（不含空格）。",
              "output": "输出大写字母个数。",
              "sampleIn": "HelloWorld",
              "sampleOut": "2",
              "hint": "char *p = s; 循环到 *p=='\\0'，判断 *p 在 'A'~'Z' 之间就计数。",
              "answer": "#include <stdio.h>\nint main() {\n    char s[100];\n    char *p;\n    int count = 0;\n    scanf(\"%s\", s);\n    for (p = s; *p != '\\0'; p++) {\n        if (*p >= 'A' && *p <= 'Z') count++;\n    }\n    printf(\"%d\\n\", count);\n    return 0;\n}",
              "analysis": "指针遍历字符串：p 从 s 开始，每次 p++，*p 是当前字符，遇到 '\\0' 停。HelloWorld 里 H、W 是大写，共 2 个。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m6t2p4",
              "level": "进阶",
              "title": "指针数组",
              "statement": "输入 3 个字符串，用指针数组存起来，按输入顺序输出它们。",
              "input": "输入 3 个字符串（每个不含空格）。",
              "output": "输出 3 个字符串，每行一个。",
              "sampleIn": "apple\nbanana\ncherry",
              "sampleOut": "apple\nbanana\ncherry",
              "hint": "char *p[3]; 每个 p[i] 指向一个字符串；用二维字符数组存字符串，再让指针指向每一行。",
              "answer": "#include <stdio.h>\nint main() {\n    char s[3][20];\n    char *p[3];\n    int i;\n    for (i = 0; i < 3; i++) {\n        scanf(\"%s\", s[i]);\n        p[i] = s[i];\n    }\n    for (i = 0; i < 3; i++) printf(\"%s\\n\", p[i]);\n    return 0;\n}",
              "analysis": "指针数组：p[i] 是指向字符串的指针。p[i]=s[i] 让指针指向第 i 行，printf(\"%s\", p[i]) 输出那个字符串。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m6t2p5",
              "level": "难题",
              "title": "指针与结构体综合",
              "statement": "定义学生结构体（姓名、成绩），输入 3 个学生的信息，用结构体指针数组按成绩从高到低排序后输出姓名和成绩。",
              "input": "输入 3 行，每行姓名和成绩。",
              "output": "输出排序后的姓名和成绩。",
              "sampleIn": "Tom 85\nJerry 92\nSpike 78",
              "sampleOut": "Jerry 92\nTom 85\nSpike 78",
              "hint": "struct Student s[3]; struct Student *p[3]; 指针数组指向结构体，排序时交换指针。",
              "answer": "#include <stdio.h>\n#include <string.h>\nstruct Student { char name[20]; int score; };\nint main() {\n    struct Student s[3];\n    struct Student *p[3];\n    int i, j;\n    struct Student *t;\n    for (i = 0; i < 3; i++) {\n        scanf(\"%s %d\", s[i].name, &s[i].score);\n        p[i] = &s[i];\n    }\n    for (i = 0; i < 2; i++)\n        for (j = 0; j < 2 - i; j++)\n            if (p[j]->score < p[j + 1]->score) {\n                t = p[j]; p[j] = p[j + 1]; p[j + 1] = t;\n            }\n    for (i = 0; i < 3; i++) printf(\"%s %d\\n\", p[i]->name, p[i]->score);\n    return 0;\n}",
              "analysis": "综合了结构体、指针数组和冒泡排序。p[i] 是指向结构体的指针，p[i]->score 访问成绩。排序时只交换指针，不用搬整个结构体。92、85、78 从高到低是 Jerry、Tom、Spike。",
              "source": "综合自编题"
            }
          ]
        }
      ]
    },
    {
      "id": "m7",
      "num": "07",
      "title": "结构体",
      "desc": "从概念到代码，按顺序掌握本模块核心能力。2 个知识点 / 10 道题",
      "topics": [
        {
          "id": "m7t1",
          "title": "结构体定义",
          "explain": [
            {
              "h": "结构体是把不同类型打包成整体",
              "b": "一个学生有好几样信息：姓名是字符串，年龄是 int，成绩是 float，类型各不相同。如果用三个散开的变量存，一个学生就要三个变量，十个学生就要三十个变量，又乱又容易对不上号。结构体就是把几个不同类型的数据打包成一个整体的办法：定义一个 Student 类型，里面装着 name、age、score 三个成员，从此一个学生就是一个整体，走到哪都带着自己的三样信息。打包的好处是数据不会散：姓名、年龄、成绩绑在一起，传一个学生就等于传了三样东西，读一个学生就等于读了三样东西。结构体是 C 语言里自己造新类型的方法，int、float 是现成的类型，struct Student 是你自己造出来的新类型，造好之后用起来和 int 一样自然。",
              "code": "struct Student {\n    char name[20];\n    int age;\n    float score;\n}; // 一个学生 = 姓名 + 年龄 + 成绩，打包成一个整体"
            },
            {
              "h": "定义写法：struct 加大括号加分号",
              "b": "定义结构体的写法是：先写 struct，再写类型名 Student，再用一对大括号把成员列在里面，最后别忘了加分号。第 1 步：写 struct Student {，告诉编译器我要造一个叫 Student 的新类型；第 2 步：在大括号里一行写一个成员，char name[20]; 是姓名，int age; 是年龄，float score; 是成绩，每个成员都有自己的类型和名字，成员之间用分号隔开；第 3 步：写完右大括号 }，再加一个分号 ;，整个定义才算结束。这个最后的分号最容易漏，漏了报错经常指到下一行，很难看出来。注意：定义结构体只是造了一个新类型，告诉编译器 Student 长什么样，这时候还没有真正分配内存、没有真正的学生，就像画了一张户型图，还没有盖出房子。",
              "code": "struct Student {\n    char name[20]; // 姓名\n    int age;       // 年龄\n    float score;   // 成绩\n}; // 最后这个分号不能少"
            },
            {
              "h": "声明变量与点访问",
              "b": "有了这个新类型，就可以像用 int 一样声明变量：struct Student s1; 声明一个学生 s1，这时才真正分配了内存。访问里面的成员要用点号：点号前是变量名、后是成员名，s1.age 就是 s1 这个学生的年龄。执行过程是这样的：第 1 步：声明变量 s1；第 2 步：s1.age = 18; 找到 s1 里面的 age，放进 18；第 3 步：s1.score = 92.5; 同样放进成绩；第 4 步：printf 读出 s1.age 打印。点号就是在这一整包数据里按名字找到你要的那一份。字符串成员要特别注意：s1.name 是字符数组，不能用 = 赋值，要用 strcpy(s1.name, \"冯雅诗\"); 复制进去。",
              "code": "struct Student s1;\ns1.age = 18;\ns1.score = 92.5;\nstrcpy(s1.name, \"冯雅诗\"); // 字符串成员用 strcpy，不能用 =\nprintf(\"%s %d %.1f\\n\", s1.name, s1.age, s1.score);"
            },
            {
              "h": "从定义到打印，完整走一遍",
              "b": "把上面三步连起来走一遍：第 1 步：写好 struct Student 的定义，别漏分号；第 2 步：struct Student s1; 声明一个学生；第 3 步：逐个赋值，name 用 strcpy，age 写 s1.age = 18;，score 写 s1.score = 92.5;；第 4 步：printf(\"%s %d %.1f\\n\", s1.name, s1.age, s1.score); 打印，%s 对名字，%d 对年龄，%.1f 对成绩。如果用 scanf 读入：读字符串成员写 scanf(\"%s\", s1.name);，不用加 &；读 int、float 成员要加 &，写 scanf(\"%d\", &s1.age);。这就是用结构体的固定套路。",
              "code": "struct Student s1;\nscanf(\"%s %d %f\", s1.name, &s1.age, &s1.score);\n// 读 name 不用 &，读 age、score 要加 &"
            }
          ],
          "pitfalls": [
            {
              "wrong": "struct Student {\n    char name[20];\n    int age;\n    float score;\n} // 漏了最后的分号",
              "correct": "struct Student {\n    char name[20];\n    int age;\n    float score;\n}; // 右大括号后面必须加分号",
              "note": "定义最后忘了分号是初学最常见的报错，而且报错位置经常指到下一行，很难看出来。写完结构体定义，第一件事就是检查分号有没有。"
            },
            {
              "wrong": "age = 18; // 直接写成员名",
              "correct": "s1.age = 18; // 点号前写变量名，指明是哪个学生的年龄",
              "note": "成员名 age 不是一个独立的变量，它只在某个学生里面才有意义。直接写 age = 18，编译器不知道是哪个学生的年龄，一定要写 s1.age，指明是哪个变量的哪个成员。"
            },
            {
              "wrong": "s1.name = \"小明\"; // 字符串成员用 = 赋值",
              "correct": "#include <string.h>\nstrcpy(s1.name, \"小明\"); // 字符串用 strcpy 复制进去",
              "note": "s1.name 是字符数组，数组名不能直接用 = 赋值，字符串要一个字符一个字符复制进去，strcpy 就是干这个的。记得在文件开头写 #include <string.h>。"
            }
          ],
          "example": {
            "title": "定义学生结构体并打印信息",
            "code": "#include <stdio.h>\n#include <string.h>\n\nstruct Student {\n    char name[20];\n    int age;\n    float score;\n};\n\nint main() {\n    struct Student s1;\n    strcpy(s1.name, \"冯雅诗\");\n    s1.age = 18;\n    s1.score = 92.5;\n    printf(\"%s %d %.1f\\n\", s1.name, s1.age, s1.score);\n    return 0;\n}",
            "analysis": "执行过程一步步来看：第 1 步：定义 struct Student 新类型，别漏最后的分号；第 2 步：struct Student s1; 声明一个学生；第 3 步：name 用 strcpy 填，age 和 score 用点号赋值；第 4 步：printf 打印，每个成员单独对应一个占位符，%s 对名字，%d 对年龄，%.1f 对成绩。运行结果是：冯雅诗 18 92.5。"
          },
          "problems": [
            {
              "id": "m7t1p1",
              "level": "基础",
              "title": "定义学生结构体并输出",
              "statement": "定义学生结构体（姓名、年龄、成绩），输入一个学生的信息并输出。",
              "input": "输入姓名、年龄、成绩。",
              "output": "输出姓名、年龄、成绩。",
              "sampleIn": "Tom 18 95.5",
              "sampleOut": "Tom 18 95.5",
              "hint": "struct Student {char name[20]; int age; double score;}; 用 scanf 读入，用点号访问。",
              "answer": "#include <stdio.h>\n#include <string.h>\nstruct Student {\n    char name[20];\n    int age;\n    double score;\n};\nint main() {\n    struct Student s;\n    scanf(\"%s %d %lf\", s.name, &s.age, &s.score);\n    printf(\"%s %d %.1f\\n\", s.name, s.age, s.score);\n    return 0;\n}",
              "analysis": "结构体把姓名、年龄、成绩打包。scanf 读字符串成员不用 &（数组名就是地址），读 int、double 成员要加 &。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m7t1p2",
              "level": "基础",
              "title": "结构体赋值",
              "statement": "定义两个学生结构体变量 s1 和 s2，给 s1 赋值后，把 s1 整体赋值给 s2，输出 s2 的信息。",
              "input": "输入一个学生的姓名、年龄、成绩。",
              "output": "输出 s2 的信息。",
              "sampleIn": "Tom 18 95.5",
              "sampleOut": "Tom 18 95.5",
              "hint": "结构体变量可以直接整体赋值：s2 = s1。",
              "answer": "#include <stdio.h>\nstruct Student {\n    char name[20];\n    int age;\n    double score;\n};\nint main() {\n    struct Student s1, s2;\n    scanf(\"%s %d %lf\", s1.name, &s1.age, &s1.score);\n    s2 = s1;\n    printf(\"%s %d %.1f\\n\", s2.name, s2.age, s2.score);\n    return 0;\n}",
              "analysis": "结构体变量可以直接整体赋值，s2=s1 会把所有成员都复制过去。这是结构体和数组的区别：数组不能整体赋值，结构体可以。",
              "source": "PTA 习题集"
            },
            {
              "id": "m7t1p3",
              "level": "进阶",
              "title": "结构体数组排序",
              "statement": "输入 3 个学生的姓名和成绩，按成绩从高到低排序后输出。",
              "input": "输入 3 行，每行姓名和成绩。",
              "output": "输出排序后的姓名和成绩。",
              "sampleIn": "Tom 85\nJerry 92\nSpike 78",
              "sampleOut": "Jerry 92\nTom 85\nSpike 78",
              "hint": "struct Student s[3]; 冒泡排序比较 s[j].score。",
              "answer": "#include <stdio.h>\nstruct Student {\n    char name[20];\n    int score;\n};\nint main() {\n    struct Student s[3], t;\n    int i, j;\n    for (i = 0; i < 3; i++) scanf(\"%s %d\", s[i].name, &s[i].score);\n    for (i = 0; i < 2; i++)\n        for (j = 0; j < 2 - i; j++)\n            if (s[j].score < s[j + 1].score) {\n                t = s[j]; s[j] = s[j + 1]; s[j + 1] = t;\n            }\n    for (i = 0; i < 3; i++) printf(\"%s %d\\n\", s[i].name, s[i].score);\n    return 0;\n}",
              "analysis": "结构体数组排序：比较 s[j].score，交换时整个结构体一起换（t=s[j] 整体赋值）。92、85、78 从高到低是 Jerry、Tom、Spike。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m7t1p4",
              "level": "进阶",
              "title": "结构体嵌套",
              "statement": "定义日期结构体（年、月、日），再定义学生结构体（姓名、生日是日期结构体）。输入一个学生的姓名和生日，输出姓名和生日。",
              "input": "输入姓名、年、月、日。",
              "output": "输出姓名和生日（年-月-日）。",
              "sampleIn": "Tom 2006 5 20",
              "sampleOut": "Tom 2006-5-20",
              "hint": "struct Date {int y, m, d;}; struct Student {char name[20]; struct Date birth;}; 访问生日用 s.birth.y。",
              "answer": "#include <stdio.h>\nstruct Date { int y, m, d; };\nstruct Student {\n    char name[20];\n    struct Date birth;\n};\nint main() {\n    struct Student s;\n    scanf(\"%s %d %d %d\", s.name, &s.birth.y, &s.birth.m, &s.birth.d);\n    printf(\"%s %d-%d-%d\\n\", s.name, s.birth.y, s.birth.m, s.birth.d);\n    return 0;\n}",
              "analysis": "结构体嵌套：学生结构体的成员 birth 本身也是一个结构体。访问时用两级点号：s.birth.y。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m7t1p5",
              "level": "难题",
              "title": "结构体与文件操作",
              "statement": "输入 3 个学生的姓名和成绩，把它们写入文件 students.txt，再从文件读出来按成绩从高到低输出。",
              "input": "输入 3 行，每行姓名和成绩。",
              "output": "输出排序后的姓名和成绩。",
              "sampleIn": "Tom 85\nJerry 92\nSpike 78",
              "sampleOut": "Jerry 92\nTom 85\nSpike 78",
              "hint": "fopen 写文件，fprintf 存数据；再 fopen 读文件，fscanf 读出来排序输出。",
              "answer": "#include <stdio.h>\nstruct Student {\n    char name[20];\n    int score;\n};\nint main() {\n    struct Student s[3], t;\n    int i, j;\n    FILE *fp = fopen(\"students.txt\", \"w\");\n    for (i = 0; i < 3; i++) {\n        scanf(\"%s %d\", s[i].name, &s[i].score);\n        fprintf(fp, \"%s %d\\n\", s[i].name, s[i].score);\n    }\n    fclose(fp);\n    fp = fopen(\"students.txt\", \"r\");\n    for (i = 0; i < 3; i++) fscanf(fp, \"%s %d\", s[i].name, &s[i].score);\n    fclose(fp);\n    for (i = 0; i < 2; i++)\n        for (j = 0; j < 2 - i; j++)\n            if (s[j].score < s[j + 1].score) {\n                t = s[j]; s[j] = s[j + 1]; s[j + 1] = t;\n            }\n    for (i = 0; i < 3; i++) printf(\"%s %d\\n\", s[i].name, s[i].score);\n    return 0;\n}",
              "analysis": "综合了结构体、文件读写和排序。fprintf 把数据写进文件，fscanf 再读出来。写完要 fclose，读之前要重新 fopen。",
              "source": "综合自编题"
            }
          ]
        },
        {
          "id": "m7t2",
          "title": "结构体数组",
          "explain": [
            {
              "h": "结构体数组就是一排学生",
              "b": "一个学生是一整包数据，一群学生就是一排整包数据，这就是结构体数组。写法是 struct Student cls[3];，意思是 3 个学生排成一个数组，cls[0]、cls[1]、cls[2] 是 3 个学生，每人都有自己的 name、age、score。练习题里写作 struct Student a[3];，意思一样。下标的规矩和普通数组一样：从 0 开始数，3 个学生就是 0、1、2，没有 cls[3]。访问某个学生的某个成员要写两层：先写下标挑出第几个学生，再写点号挑出哪个成员，比如 a[1].score 是第 2 个学生的成绩，a[0].name 是第 1 个学生的姓名。先 a[i] 挑学生，再 .score 挑成员，合起来 a[i].score 才完整。",
              "code": "struct Student cls[3]; // 3 个学生排成数组\n// cls[0] 是第 1 个学生，cls[1] 是第 2 个，cls[2] 是第 3 个\n// a[1].score 是第 2 个学生的成绩，a[0].name 是第 1 个学生的姓名"
            },
            {
              "h": "配合循环一个一个输入输出",
              "b": "最常见的用法就是配合循环一个一个处理，以输入 3 个学生为例：第 1 步：struct Student a[3]; 定义好 3 个学生的数组；第 2 步：for (i = 0; i < 3; i++)，i 就是第几个学生；第 3 步：循环里写 scanf(\"%s %f\", a[i].name, &a[i].score);，i 换一个值就读一个学生；第 4 步：再用一个循环打印，把每个学生的姓名和成绩打出来。& 的规矩要记牢：a[i].name 是字符数组，本身就是地址，读字符串不用加 &；a[i].score 是 float 变量，读数要加 &，写成 &a[i].score。千万别记反。",
              "code": "struct Student a[3];\nint i;\nfor (i = 0; i < 3; i++) {\n    scanf(\"%s %f\", a[i].name, &a[i].score);\n}\nfor (i = 0; i < 3; i++) {\n    printf(\"%s %.1f\\n\", a[i].name, a[i].score);\n}"
            },
            {
              "h": "配合循环找最高分",
              "b": "找最高分用打擂台的办法：先假定第 1 个学生最高，再让后面的一个一个来挑战。执行过程是这样的：第 1 步：int best = 0; 假定 0 号 a[0] 最高，best 存的是下标；第 2 步：for (i = 1; i < 3; i++) 从第 2 个学生开始挨个比较；第 3 步：每次比较 a[i].score > a[best].score，高的就把 best 换成 i，让 a[i] 当新擂主；第 4 步：循环结束，best 就是最高分学生的下标，打印 a[best].name 就是他的姓名。记的是下标 best，不是分数，因为最后要的是这个学生的姓名，光记分数找不到人名。",
              "code": "struct Student a[3];\nint i, best = 0;\nfor (i = 0; i < 3; i++) {\n    scanf(\"%s %f\", a[i].name, &a[i].score);\n}\nfor (i = 1; i < 3; i++) {\n    if (a[i].score > a[best].score) {\n        best = i;\n    }\n}\nprintf(\"%s\\n\", a[best].name); // 最高分学生的姓名"
            },
            {
              "h": "配合循环算平均分",
              "b": "算平均分也是配合循环：先把所有人的成绩加起来，再除以人数。执行过程是这样的：第 1 步：float sum = 0; 准备 sum 用来累加；第 2 步：for 循环读入每个学生，每读一个就 sum += a[i].score;，读完 sum 就是全班总分；第 3 步：算平均分要小心类型：sum 和 n 都是 int 时，sum / n 是整数除法，小数会被丢掉，要写成 1.0 * sum / n，让结果变小数；第 4 步：printf(\"%.2f\\n\", ...) 用 %.2f 打印，保留 2 位小数。找最高分和算平均分可以写在同一个循环里，一趟循环办两件事。",
              "code": "struct Student a[100];\nint n, i;\nfloat sum = 0;\nscanf(\"%d\", &n);\nfor (i = 0; i < n; i++) {\n    scanf(\"%s %f\", a[i].name, &a[i].score);\n    sum += a[i].score;\n}\nprintf(\"%.2f\\n\", 1.0 * sum / n); // 平均分，保留 2 位小数"
            }
          ],
          "pitfalls": [
            {
              "wrong": "struct Student s[3];\nprintf(\"%d\", s.score); // s 是数组，没写下标",
              "correct": "struct Student s[3];\nprintf(\"%d\", s[0].score); // 先写下标挑学生，再写点号挑成员",
              "note": "结构体数组要加下标 s[i] 挑出第几个学生，再用点号访问成员。直接写 s.score，编译器不知道你要的是哪个学生的成绩。"
            },
            {
              "wrong": "scanf(\"%s\", &a[i].name); // 读姓名多加了 &",
              "correct": "scanf(\"%s\", a[i].name); // name 是字符数组，数组名本身就是地址",
              "note": "a[i].name 是字符数组，数组名本身就是地址，再加 & 就错了。记住：读字符串成员不用 &，读 int、float 成员要加 &，两个地方的规矩正好相反。"
            },
            {
              "wrong": "scanf(\"%f\", a[i].score); // 读成绩忘了 &",
              "correct": "scanf(\"%f\", &a[i].score); // score 是 float 变量，读数要加 &",
              "note": "scanf 要的是地址。a[i].score 只是一个 float 值，忘了 &，scanf 不知道往哪放数，程序会出错。读字符串不用 &、读数字要加 &，别记反。"
            },
            {
              "wrong": "int sum = 0, n;\nprintf(\"%.2f\\n\", sum / n); // sum 和 n 都是 int",
              "correct": "printf(\"%.2f\\n\", 1.0 * sum / n); // 先乘 1.0 变成小数再除",
              "note": "整数除以整数得整数，小数部分会被丢掉：比如总分 260 除以 3，整数除法得 86，平均分就错了。写成 1.0 * sum / n，让除法按小数算，结果才是 86.67。"
            }
          ],
          "example": {
            "title": "定义学生结构体并打印信息",
            "code": "#include <stdio.h>\n#include <string.h>\n\nstruct Student {\n    char name[20];\n    int age;\n    float score;\n};\n\nint main() {\n    struct Student s1;\n    strcpy(s1.name, \"冯雅诗\");\n    s1.age = 18;\n    s1.score = 92.5;\n    printf(\"%s %d %.1f\\n\", s1.name, s1.age, s1.score);\n    return 0;\n}",
            "analysis": "先定义类型、声明 s1，name 用 strcpy 填，age、score 用点号赋值，打印时成员各对一个占位符，结果是：冯雅诗 18 92.5。结构体数组是延伸用法：a[3] 是 3 个学生，循环里 a[i].name 读姓名不用 &，&a[i].score 读成绩要加 &；找最高分用打擂台记下标 best，a[i].score 更大就换 best，最后打印 a[best].name；算平均分是循环累加 sum，再用 1.0 * sum / n 防整数除法丢小数。"
          },
          "problems": [
            {
              "id": "m7t2p1",
              "level": "基础",
              "title": "结构体数组输入输出",
              "statement": "输入 3 个学生的姓名和成绩，输出他们的信息。",
              "input": "输入 3 行，每行姓名和成绩。",
              "output": "输出 3 行信息。",
              "sampleIn": "Tom 85\nJerry 92\nSpike 78",
              "sampleOut": "Tom 85\nJerry 92\nSpike 78",
              "hint": "struct Student s[3]; 循环输入输出。",
              "answer": "#include <stdio.h>\nstruct Student {\n    char name[20];\n    int score;\n};\nint main() {\n    struct Student s[3];\n    int i;\n    for (i = 0; i < 3; i++) scanf(\"%s %d\", s[i].name, &s[i].score);\n    for (i = 0; i < 3; i++) printf(\"%s %d\\n\", s[i].name, s[i].score);\n    return 0;\n}",
              "analysis": "结构体数组：s[i] 是第 i 个学生。读姓名不用 &，读成绩要加 &。",
              "source": "谭浩强《C 程序设计》"
            },
            {
              "id": "m7t2p2",
              "level": "基础",
              "title": "查找最高分",
              "statement": "输入 3 个学生的姓名和成绩，输出最高分学生的姓名和成绩。",
              "input": "输入 3 行，每行姓名和成绩。",
              "output": "输出最高分学生的姓名和成绩。",
              "sampleIn": "Tom 85\nJerry 92\nSpike 78",
              "sampleOut": "Jerry 92",
              "hint": "打擂台：先设 s[0] 最高，再依次比较 s[i].score。",
              "answer": "#include <stdio.h>\nstruct Student {\n    char name[20];\n    int score;\n};\nint main() {\n    struct Student s[3];\n    int i, max = 0;\n    for (i = 0; i < 3; i++) scanf(\"%s %d\", s[i].name, &s[i].score);\n    for (i = 1; i < 3; i++) {\n        if (s[i].score > s[max].score) max = i;\n    }\n    printf(\"%s %d\\n\", s[max].name, s[max].score);\n    return 0;\n}",
              "analysis": "打擂台法：max 存最高分学生的下标，依次比较 s[i].score，大的就换 max。Jerry 92 最高。",
              "source": "PTA 习题集"
            },
            {
              "id": "m7t2p3",
              "level": "进阶",
              "title": "结构体数组排序（按成绩）",
              "statement": "输入 5 个学生的姓名和成绩，按成绩从高到低排序后输出。",
              "input": "输入 5 行，每行姓名和成绩。",
              "output": "输出排序后的姓名和成绩。",
              "sampleIn": "Tom 85\nJerry 92\nSpike 78\nTyke 88\nButch 95",
              "sampleOut": "Butch 95\nJerry 92\nTyke 88\nTom 85\nSpike 78",
              "hint": "冒泡排序，比较 s[j].score，交换整个结构体。",
              "answer": "#include <stdio.h>\nstruct Student {\n    char name[20];\n    int score;\n};\nint main() {\n    struct Student s[5], t;\n    int i, j;\n    for (i = 0; i < 5; i++) scanf(\"%s %d\", s[i].name, &s[i].score);\n    for (i = 0; i < 4; i++)\n        for (j = 0; j < 4 - i; j++)\n            if (s[j].score < s[j + 1].score) {\n                t = s[j]; s[j] = s[j + 1]; s[j + 1] = t;\n            }\n    for (i = 0; i < 5; i++) printf(\"%s %d\\n\", s[i].name, s[i].score);\n    return 0;\n}",
              "analysis": "结构体数组冒泡排序：比较成绩，交换时整个结构体一起换。95、92、88、85、78 从高到低。",
              "source": "洛谷入门题单"
            },
            {
              "id": "m7t2p4",
              "level": "进阶",
              "title": "统计平均分与高于平均分人数",
              "statement": "输入一个班级 5 个学生的姓名和成绩，输出平均分（保留 1 位小数）和高于平均分的人数。",
              "input": "输入 5 行，每行姓名和成绩。",
              "output": "第一行输出平均分，第二行输出高于平均分的人数。",
              "sampleIn": "Tom 85\nJerry 92\nSpike 78\nTyke 88\nButch 95",
              "sampleOut": "87.6\n3",
              "hint": "先求和算平均分，再循环数高于平均分的人。",
              "answer": "#include <stdio.h>\nstruct Student {\n    char name[20];\n    int score;\n};\nint main() {\n    struct Student s[5];\n    int i, sum = 0, count = 0;\n    for (i = 0; i < 5; i++) {\n        scanf(\"%s %d\", s[i].name, &s[i].score);\n        sum += s[i].score;\n    }\n    double avg = sum / 5.0;\n    for (i = 0; i < 5; i++) {\n        if (s[i].score > avg) count++;\n    }\n    printf(\"%.1f\\n%d\\n\", avg, count);\n    return 0;\n}",
              "analysis": "先求和：85+92+78+88+95=438，平均分 438/5=87.6。高于 87.6 的是 92、88、95，共 3 人。",
              "source": "PTA 习题集"
            },
            {
              "id": "m7t2p5",
              "level": "难题",
              "title": "结构体与指针综合",
              "statement": "输入 3 个学生的姓名和成绩，用结构体指针数组按成绩从高到低排序后输出（排序时只交换指针，不搬结构体）。",
              "input": "输入 3 行，每行姓名和成绩。",
              "output": "输出排序后的姓名和成绩。",
              "sampleIn": "Tom 85\nJerry 92\nSpike 78",
              "sampleOut": "Jerry 92\nTom 85\nSpike 78",
              "hint": "struct Student *p[3]; p[i]=&s[i]; 排序交换 p[j] 和 p[j+1]，输出用 p[i]->name。",
              "answer": "#include <stdio.h>\nstruct Student {\n    char name[20];\n    int score;\n};\nint main() {\n    struct Student s[3];\n    struct Student *p[3];\n    struct Student *t;\n    int i, j;\n    for (i = 0; i < 3; i++) {\n        scanf(\"%s %d\", s[i].name, &s[i].score);\n        p[i] = &s[i];\n    }\n    for (i = 0; i < 2; i++)\n        for (j = 0; j < 2 - i; j++)\n            if (p[j]->score < p[j + 1]->score) {\n                t = p[j]; p[j] = p[j + 1]; p[j + 1] = t;\n            }\n    for (i = 0; i < 3; i++) printf(\"%s %d\\n\", p[i]->name, p[i]->score);\n    return 0;\n}",
              "analysis": "综合了结构体、指针数组和排序。p[i] 是指向结构体的指针，p[i]->score 访问成绩。排序只交换指针，结构体本身不动，效率更高。92、85、78 从高到低。",
              "source": "综合自编题"
            }
          ]
        }
      ]
    }
  ],
  "mistakes": [
    {
      "id": "err1",
      "title": "practice1",
      "topic": "基础入门",
      "date": "2026-11-23",
      "status": "待复习",
      "error": "scanf 缺少 &（应写 &a, &b）；输出分隔符用了逗号。",
      "understanding": "scanf 要的是变量的地址（& 是取地址），不是变量本身；printf 里写什么就原样输出什么。",
      "detail": "scanf 是用来读入数据的，它要把你输入的数字存到变量里。电脑存东西要知道“存到哪个地址”，所以 scanf 的参数必须是地址，&a 就是变量 a 的地址。写成 scanf(\"%d %d\", a, b) 时，传进去的是 a、b 的值（这时候 a、b 还没被赋值，是随机值），scanf 会把输入往那个随机地址里写，程序会崩溃。正确写法是 scanf(\"%d %d\", &a, &b)。printf 是按格式原样输出，格式串里写了什么符号，输出就有那个符号。题目要求输出“和=8 差=-2”，中间是空格，你写了逗号就输出“和=8,差=-2”，和要求不符。记住：printf 里写什么就输出什么，想输出空格就写空格。",
      "myCode": "#include <stdio.h>\nint main() {\n    int a, b;\n    scanf(\"%d %d\", a, b);\n    printf(\"和=%d,差=%d\", a + b, a - b);\n    return 0;\n}",
      "correctCode": "#include <stdio.h>\nint main() {\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    printf(\"和=%d 差=%d\\n\", a + b, a - b);\n    return 0;\n}"
    },
    {
      "id": "err2",
      "title": "practice2",
      "topic": "基础入门",
      "date": "2026-11-23",
      "status": "待复习",
      "error": "i 未声明；scanf 缺少 &n；循环里多写 i=i+1 导致跳数；偶数判断写的是 n 不是 i 且写在循环外；没有 sum 累加，计数变量未初始化。",
      "understanding": "变量要先声明/初始化才能用；循环里每轮变化的是 i，n 是固定不变的输入；累加要靠 sum=sum+i 一轮一轮攒；循环里和循环外的代码执行时机不同。",
      "detail": "这道题一次犯了 5 个错，一个一个看。① i 未声明：C 语言里用一个变量之前必须先声明（int i;），不然编译器不认识 i。② scanf 缺 &n：跟 practice1 一样，scanf 要地址。③ 循环里多写 i=i+1：for 循环的括号里已经有 i++，每轮结束 i 会自己加 1，你在循环体里又写 i=i+1，等于每轮 i 加了 2 次，1、3、5 这样跳着数，2 和 4 就被跳过去了。④ 偶数判断写 n 不是 i 且写在循环外：要判断的是每一轮的 i 是不是偶数，n 是你输入的那个固定数，它不变，判断 n 没有意义；而且判断要写在循环里面，每轮都判断一次，写在循环外只判断一次。⑤ 没有 sum 累加、计数未初始化：求和要靠 sum=sum+i，每轮把 i 加到 sum 上；计数变量 count 也要先设为 0，每遇到一个偶数 count++。sum 和 count 用之前都要先初始化为 0，不然里面是随机值。",
      "myCode": "#include <stdio.h>\nint main() {\n    int n, sum, count;\n    scanf(\"%d\", n);\n    for (i = 1; i <= n; i++) {\n        i = i + 1;\n    }\n    if (n % 2 == 0) {\n        count = count + 1;\n    }\n    printf(\"和=%d 偶数个数=%d\", sum, count);\n    return 0;\n}",
      "correctCode": "#include <stdio.h>\nint main() {\n    int n, sum = 0, count = 0;\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++) {\n        sum = sum + i;\n        if (i % 2 == 0) {\n            count = count + 1;\n        }\n    }\n    printf(\"和=%d 偶数个数=%d\\n\", sum, count);\n    return 0;\n}"
    },
    {
      "id": "err3",
      "title": "九九乘法表",
      "topic": "循环",
      "date": "2026-11-23",
      "status": "待复习",
      "error": "看了答案和运行结果仍不懂嵌套循环的执行过程（i、j 如何变化、为什么 j<=i）。",
      "understanding": "外层 i 固定一行，内层 j 从 1 跑到 i 才换行；j<=i 控制每行算式个数。",
      "detail": "嵌套循环就是“循环里面再套一个循环”。外层 i 控制行，内层 j 控制每行有几个算式。执行顺序是：i 先取 1，然后内层 j 从 1 跑到 i（这时 i=1，j 只跑到 1，输出 1×1=1），内层跑完才换行；接着 i 变成 2，内层 j 从 1 跑到 2，输出 1×2=2、2×2=4，再换行；以此类推。j<=i 的意思是“第 i 行输出 i 个算式”，第 1 行 1 个，第 2 行 2 个，第 9 行 9 个，正好是九九乘法表的形状。记住：外层每变一次，内层要从头跑完一轮。",
      "myCode": "// 这道题没有写出错误版本，错在没理解嵌套循环的执行过程，\n// 而不是某行代码写错了。重点看下面的正确代码和执行过程。",
      "correctCode": "#include <stdio.h>\nint main() {\n    int i, j;\n    for (i = 1; i <= 9; i++) {\n        for (j = 1; j <= i; j++) {\n            printf(\"%d×%d=%d \", j, i, i * j);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}"
    },
    {
      "id": "err4",
      "title": "奇数求和",
      "topic": "循环",
      "date": "2026-11-23",
      "status": "待复习",
      "error": "没写 scanf 读 n（n 未初始化就用在循环条件里）；sum 未初始化为 0；奇偶判断写反，i%2==0 求的是偶数和，奇数该用 i%2!=0。",
      "understanding": "变量用之前要先读入/赋值；% 是取余，i%2==0 是偶数，奇数是 i%2!=0。",
      "detail": "① 没写 scanf：n 是要从键盘输入的，不写 scanf，n 就是个没被赋值的随机数，循环 for(i=1; i<=n; i++) 的条件就用了一个随机数，结果完全不可控。② sum 未初始化：sum 是用来累加的，累加要从 0 开始，不写 sum=0，sum 里是随机值，最后的结果会错。③ 奇偶判断写反：% 是取余运算符，i%2 是 i 除以 2 的余数。偶数除以 2 余 0，所以 i%2==0 是偶数；奇数除以 2 余 1，所以奇数是 i%2!=0（或者 i%2==1）。你写 i%2==0，筛出来的是偶数，求的是偶数和，不是奇数和。",
      "myCode": "#include <stdio.h>\nint main() {\n    int n, i, sum;\n    for (i = 1; i <= n; i++) {\n        if (i % 2 == 0) {\n            sum = sum + i;\n        }\n    }\n    printf(\"%d\", sum);\n    return 0;\n}",
      "correctCode": "#include <stdio.h>\nint main() {\n    int n, i, sum = 0;\n    scanf(\"%d\", &n);\n    for (i = 1; i <= n; i++) {\n        if (i % 2 != 0) {\n            sum = sum + i;\n        }\n    }\n    printf(\"%d\\n\", sum);\n    return 0;\n}"
    },
    {
      "id": "err5",
      "title": "判断质数",
      "topic": "循环",
      "date": "2026-11-23",
      "status": "待复习",
      "error": "判断和打印写在循环里，每轮 i 都输出一次；循环条件写成 i<=n，i=n 时 n%n==0 恒成立，任何数最后都会被判不是素数；把 break 划掉了，发现因子后没有跳出循环。",
      "understanding": "循环的执行流程——循环里的代码每轮都跑、循环条件决定什么时候停和停时 i 是多少、break 是中途跳出。",
      "detail": "① 打印写在循环里：循环体里的代码每轮都会执行一次，你把 printf 写在循环里，i 每变一次就打印一次，n=7 时会打印好几次。判断和打印应该写在循环外面，等循环跑完、结论定了再打印一次。② 条件写成 i<=n：判断质数是从 i=2 开始试，看 n 能不能被 i 整除。试到 i=n 时，n%n 一定等于 0（任何数除以自己余 0），所以任何数都会被判“不是素数”。正确条件是 i<n，i 到 n 之前就停。③ 划掉 break：break 是“找到因子就立刻跳出循环”。n=8 时 i=2 就能整除，发现 8 不是质数就该马上跳出，不用再试 3、4、5。你把 break 划掉，循环会一直跑到 i=n，白白浪费时间，结论还可能被后面的轮次改错。",
      "myCode": "#include <stdio.h>\nint main() {\n    int n, i;\n    scanf(\"%d\", &n);\n    for (i = 2; i <= n; i++) {\n        if (n % i == 0) {\n            printf(\"%d 不是素数\", n);\n        } else {\n            printf(\"%d 是素数\", n);\n        }\n    }\n    return 0;\n}",
      "correctCode": "#include <stdio.h>\nint main() {\n    int n, i, flag = 1;\n    scanf(\"%d\", &n);\n    for (i = 2; i < n; i++) {\n        if (n % i == 0) {\n            flag = 0;\n            break;\n        }\n    }\n    if (flag) printf(\"%d 是素数\\n\", n);\n    else printf(\"%d 不是素数\\n\", n);\n    return 0;\n}"
    },
    {
      "id": "err6",
      "title": "找约数",
      "topic": "循环",
      "date": "2026-11-23",
      "status": "待复习",
      "error": "最后一行 printf 里用了 n/i，但 i 是在 for 循环里声明的，出了循环就不存在，编译报错 'i' undeclared。",
      "understanding": "变量的作用域——在 for 循环小括号里声明的变量只在循环里面有效，出了循环就用不了了；想在循环外面用，就要在循环外面声明。",
      "detail": "变量有个“有效范围”，叫作用域。写在 for (int i = 1; i <= n; i++) 的小括号里的 i，只在 for 循环的大括号里面有效，出了循环，i 就“不存在”了。你在循环外面的 printf 里用 i，编译器会报错 'i' undeclared（i 未声明）。想在循环外面用 i，有两种改法：① 把 i 声明在循环外面，开头写 int i;，循环写 for (i = 1; i <= n; i++)；② 循环外面不要用 i，约数就是 i 本身（能整除 n 的那个 i），不是 n/i——n/i 是商，不是约数，输出约数直接输出 i 就行。",
      "myCode": "#include <stdio.h>\nint main() {\n    int n, count = 0;\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++) {\n        if (n % i == 0) {\n            printf(\"%d \", i);\n            count++;\n        }\n    }\n    printf(\"，共%d个\", n / i);\n    return 0;\n}",
      "correctCode": "#include <stdio.h>\nint main() {\n    int n, count = 0;\n    scanf(\"%d\", &n);\n    printf(\"约数：\");\n    for (int i = 1; i <= n; i++) {\n        if (n % i == 0) {\n            printf(\"%d \", i);\n            count++;\n        }\n    }\n    printf(\"，共%d个\\n\", count);\n    return 0;\n}"
    },
    {
      "id": "err7",
      "title": "数字三角形",
      "topic": "循环",
      "date": "2026-11-23",
      "status": "待复习",
      "error": "int n 后面少了分号，编译报错；scanf 少了 &n，不加 & 程序会崩溃；printf 用 \"%d\" 没加空格，输出是 12345 不是 1 2 3 4 5；没写 do-while 输入校验。",
      "understanding": "每条语句结束都要加分号；scanf 要的是变量的地址（&），不是变量本身；printf 里写什么就输出什么，想分开就要加空格；写代码前要先对一遍题目的要求。",
      "detail": "① 少分号：C 语言里每条语句结束都要加分号，int n 后面没分号，编译器不知道这条语句在哪结束，会直接报错。② scanf 少 &n：跟前面一样，scanf 要地址，不加 & 程序会崩溃（这是 practice1 犯过的错，又犯了一次）。③ printf 没加空格：printf 是原样输出，格式串 \"%d\" 里没空格，数字就连着输出 12345；题目要求 1 2 3 4 5，数字之间有空格，格式串要写 \"%d \"（%d 后面加一个空格）。④ 没写 do-while 校验：题目要求 n 在 1~9 之间，要用 do-while 循环先让用户输入，输入不在范围就重输，直到输入合法才往下走。写代码前先对一遍题目要求，题目让做的事不要漏。",
      "myCode": "#include <stdio.h>\nint main() {\n    int n\n    int i, j;\n    scanf(\"%d\", n);\n    for (i = 1; i <= n; i++) {\n        for (j = 1; j <= i; j++) {\n            printf(\"%d\", j);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      "correctCode": "#include <stdio.h>\nint main() {\n    int n;\n    int i, j;\n    do {\n        printf(\"请输入1~9：\");\n        scanf(\"%d\", &n);\n    } while (n < 1 || n > 9);\n    for (i = 1; i <= n; i++) {\n        for (j = 1; j <= i; j++) {\n            printf(\"%d \", j);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}"
    }
  ]
};
