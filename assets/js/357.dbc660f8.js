(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{710:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#dto"}},[s._v("DTO")])]),a("li",[a("a",{attrs:{href:"#vo"}},[s._v("VO")])]),a("li",[a("a",{attrs:{href:"#dto-和-vo-区别"}},[s._v("DTO 和 VO 区别")])]),a("li",[a("a",{attrs:{href:"#po"}},[s._v("PO")])]),a("li",[a("a",{attrs:{href:"#bo"}},[s._v("BO")])]),a("li",[a("a",{attrs:{href:"#bo-和-dto-的区别"}},[s._v("BO 和 DTO 的区别")])]),a("li",[a("a",{attrs:{href:"#do"}},[s._v("DO")])]),a("li",[a("a",{attrs:{href:"#to"}},[s._v("TO")])]),a("li",[a("a",{attrs:{href:"#pojo"}},[s._v("POJO")])]),a("li",[a("a",{attrs:{href:"#dao"}},[s._v("DAO")])])])]),a("p"),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Spring%20Boot/20230704235634.png",alt:"image-20230704235632652"}})]),s._v(" "),a("h2",{attrs:{id:"dto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dto"}},[s._v("#")]),s._v(" DTO")]),s._v(" "),a("p",[s._v("DTO：（Data Transfer Object）数据传输对象，这个传输通常指的前后端之间的传输")]),s._v(" "),a("p",[s._v("这个概念来源于 J2EE 的设计模式，原来的目的是为了 EJB 的分布式应用提供粗粒度的数据实体，以减少分布式调用的次数，从而提高分布式调用的性能和降低网络负载，但在这里，泛指用于展示层与服务层之间的数据传输对象。")]),s._v(" "),a("p",[s._v("在 SpringMVC 中，它是 Controller 方法参数上接收请求（前端）的一个类。如 UserDTO：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RestController")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserController")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/login"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("login")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserDTO")]),s._v(" userDTO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" userDTO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getUsername")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" userDTO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getPassword")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" : "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserDTO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// setter、getter")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("DTO 本身的一个隐含的意义是要能够完整的表达一个业务模块的输出。")]),s._v(" "),a("p",[s._v("如果服务和服务之间相对独立，那就可以叫 DTO")]),s._v(" "),a("p",[s._v("如果服务和服务之间不独立，每个都不是一个完整的业务模块，拆开可能仅仅是因为计算复杂度或者性能的问题，那这就不能够叫做 DTO，只能是 BO。")]),s._v(" "),a("h2",{attrs:{id:"vo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vo"}},[s._v("#")]),s._v(" VO")]),s._v(" "),a("p",[s._v("VO（value object）：值对象")]),s._v(" "),a("p",[s._v("通常用于业务层之间的数据传递，和 PO 一样也是仅仅包含数据而已。但应是抽象出的业务对象，可以和表对应，也可以不，这根据业务的需要。用 new 关键字创建，由 GC 回收的。")]),s._v(" "),a("p",[s._v("VO（View object）：视图对象")]),s._v(" "),a("p",[s._v("接受页面传递来的数据，封装对象将业务处理完成的对象，封装成页面要用的数据。")]),s._v(" "),a("p",[s._v("在 SpringMVC 中，它是 Controller 方法返回响应（前端）的一个封装类。如：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RestController")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserController")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/login"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserVO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("login")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserVO")]),s._v(" userVO "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserVO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        userVO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setUsername")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        userVO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setPassword")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin1234"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" userVO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserVO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// setter、getter")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"dto-和-vo-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dto-和-vo-区别"}},[s._v("#")]),s._v(" DTO 和 VO 区别")]),s._v(" "),a("p",[s._v("这里以 SpringMVC 举例，DTO 是接收请求（前端）参数的一个封装类，VO 是返回响应（前端）的一个封装类。")]),s._v(" "),a("p",[s._v("请求（前端）携带的参数多种多样，所以以 DTO 来接收。")]),s._v(" "),a("p",[s._v("我们返回响应（前端）应该只返回部分关注的数据，而不是把所有数据都返回，所以 VO 进行响应（前端）需要的数据进行封装来返回。")]),s._v(" "),a("p",[s._v("如果接收和返回的数据一样，那么可以认为这两种模型一样，但是从规范来说，还是要定义 DTO、VO 来处理（不嫌麻烦的话）。")]),s._v(" "),a("h2",{attrs:{id:"po"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#po"}},[s._v("#")]),s._v(" PO")]),s._v(" "),a("p",[s._v("PO（persistant object）： 持久对象")]),s._v(" "),a("p",[s._v("它跟持久层（通常是关系型数据库）的数据结构形成一一对应的映射关系，如果持久层是关系型数据库，那么，数据表中的每个字段（或若干个）就对应 PO 的一个（或若干个）属性。")]),s._v(" "),a("p",[s._v("对于 PO 来说，数量是相对固定的，一定不会超过数据库表的数量。")]),s._v(" "),a("p",[s._v("假设数据库有一张 user 表，有两个字段：username、password、status。那么对应的 PO：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// setter、getter")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"bo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bo"}},[s._v("#")]),s._v(" BO")]),s._v(" "),a("p",[s._v("BO（business object）：业务对象")]),s._v(" "),a("p",[s._v("从业务模型的角度看，见 UML 元件领域模型中的领域对象。封装业务逻辑的 Java 对象，通过调用 DAO 方法，结合 PO、VO 进行业务操作。")]),s._v(" "),a("p",[s._v("主要作用是把业务逻辑封装为一个对象。这个对象可以包括一个或多个其它的对象。比如一个简历，有教育经历、工作经历、社会关系等等。我们可以把教育经历对应一个 PO，工作经历对应一个 PO，社会关系对应一个 PO。建立一个对应简历的 BO 对象处理简历，每个 BO 包含这些 PO。这样处理业务逻辑时，我们就可以针对 BO 去处理，会有很多针对自身数据进行计算的方法。")]),s._v(" "),a("p",[s._v("为什么上面 BO 也画成横跨两层呢？原因是现在很多持久层框架自身就提供了数据组合的功能，因此 BO 有可能是在业务层由业务来拼装 PO 而成，也有可能是在数据库访问层由框架直接生成。")]),s._v(" "),a("p",[s._v("很多情况下为了追求查询的效率，框架跳过 PO 直接生成 BO 的情况非常普遍，PO 只是用来增删改使用。")]),s._v(" "),a("h2",{attrs:{id:"bo-和-dto-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bo-和-dto-的区别"}},[s._v("#")]),s._v(" BO 和 DTO 的区别")]),s._v(" "),a("p",[s._v("这两个的区别主要是就是字段的删减：")]),s._v(" "),a("p",[s._v("BO 对内，为了进行业务计算需要辅助数据，或者是一个业务有多个对外的接口，BO 可能会含有很多接口对外所不需要的数据。")]),s._v(" "),a("p",[s._v("DTO 对外，因此 DTO 需要在 BO 的基础上，只要自己需要的数据，然后对外提供。")]),s._v(" "),a("p",[s._v("在这个关系上，通常不会有数据内容的变化，内容变化要么在BO内部业务计算的时候完成，要么在 VO 的时候完成。")]),s._v(" "),a("h2",{attrs:{id:"do"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do"}},[s._v("#")]),s._v(" DO")]),s._v(" "),a("p",[s._v("DO（Domain Object）：领域对象")]),s._v(" "),a("p",[s._v("就是从现实世界中抽象出来的有形或无形的业务实体，等同于 PO 或者 BO。")]),s._v(" "),a("h2",{attrs:{id:"to"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to"}},[s._v("#")]),s._v(" TO")]),s._v(" "),a("p",[s._v("TO（Transfer Object）：数据传输对象")]),s._v(" "),a("p",[s._v("不同的应用程序之间传输的对象，如微服务架构之间的传输（OpenFeign）会用到 TO。")]),s._v(" "),a("p",[s._v("为什么不用 DTO 呢？DTO 是接收对外的，如前端传的参数，而 TO 是对内的应用与应用的接收，就像是一个微服务项目，有支付和订单，两个微服务之间用 OpenFeign 来通信，则传的参数用 TO 来接或者取。")]),s._v(" "),a("h2",{attrs:{id:"pojo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pojo"}},[s._v("#")]),s._v(" POJO")]),s._v(" "),a("p",[s._v("POJO（plain ordinary java object）：简单无规则 Java 对象")]),s._v(" "),a("p",[s._v("传统意义的 Java 对象。就是说在一些 Object/Relation Mapping 工具中，能够做到维护数据库表记录的 persisent object 完全是一个符合 Java Bean 规范的纯 Java 对象，没有增加别的属性和方法。我的理解就是最基本的 java Bean，只有属性字段及 setter 和 getter 方法。POJO 是 DO/DTO/BO/VO 的统称。")]),s._v(" "),a("h2",{attrs:{id:"dao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dao"}},[s._v("#")]),s._v(" DAO")]),s._v(" "),a("p",[s._v("DAO（data access object）：数据访问对象")]),s._v(" "),a("p",[s._v("是一个 sun 的一个标准 j2ee 设计模式，这个模式中有个接口就是 DAO，它负持久层的操作。为业务层提供接口。此对象用于访问数据库。通常和 PO 结合使用，DAO 中包含了各种数据库的操作方法。通过它的方法，结合 PO 对数据库进行相关的操作。夹在业务逻辑与数据库资源中间。配合 VO，提供数据库的 CRUD 操作。")])])}),[],!1,null,null,null);a.default=e.exports}}]);