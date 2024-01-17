(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{859:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("一、前言")]),s._v(" "),t("p",[s._v("本文主要解释以下几个问题：")]),s._v(" "),t("p",[s._v("1.什么是回表查询？")]),s._v(" "),t("p",[s._v("2.什么是索引覆盖？")]),s._v(" "),t("p",[s._v("3.如何实现索引覆盖？")]),s._v(" "),t("p",[s._v("4.那些场景可以利用索引覆盖优化sql？")]),s._v(" "),t("p",[s._v("本文实验基于8.0版本innodb")]),s._v(" "),t("p",[s._v("二、回表查询")]),s._v(" "),t("p",[s._v("1.建表")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("sex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("InnoDB")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARSET")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("2.分析下面两个查询")]),s._v(" "),t("p",[s._v("explain select id,name from user where name='lihua'")]),s._v(" "),t("p",[s._v("explain select id,name,sex from user where name='lihua'")]),s._v(" "),t("p",[s._v("通过explain可以看出当我们增加了sex字段做查询时extra为NULL，意味着本次查询进行了“回表”操作，我们知道innodb采用B+树聚集索引，主键和数据绑定在一起，主键索引b+树的叶子节点存储了数据信息，而普通索引叶子节点存储的是主键值。因此，我们可以得知当通过普通索引查询时无法直接定位行记录，通常情况下，需要扫描两遍索引树。")]),s._v(" "),t("p",[s._v("select * from user where name='lisi';")]),s._v(" "),t("p",[s._v("还是以现有表举例，它是如何执行的？")]),s._v(" "),t("p",[s._v("1)先扫描name索引树，找到主键值id=5。")]),s._v(" "),t("p",[s._v("2)再扫描主键索引，找到对应行。")]),s._v(" "),t("p",[s._v("这就是“回表查询”，先定位主键值，再通过主键值定位行记录，性能上较之直接查询索引树定位行记录更慢。")]),s._v(" "),t("p",[s._v("三、覆盖索引")]),s._v(" "),t("p",[s._v("1.什么是覆盖索引？")]),s._v(" "),t("p",[s._v("1)只需要在一棵索引树上就可以获取sql所需所有的列数据，不需要回表，较之回表速度要更快。")]),s._v(" "),t("p",[s._v("2)explain输出结果extra字段为Using index时，触发了索引覆盖。")]),s._v(" "),t("p",[s._v("2.如何实现覆盖索引？")]),s._v(" "),t("p",[s._v("办法：将被查询的字段建立到联合索引中")]),s._v(" "),t("p",[s._v("接我们上面的例子，因为我们对name字段建立了普通索引，且基于name的索引叶子节点存有主键id值，因此满足了在一颗索引树上获得sql所需的所有列数据这一条件，通过观察extra也可发现是Using Index无需回表。")]),s._v(" "),t("p",[s._v("select id,name from user where name='lihua'")]),s._v(" "),t("p",[s._v("观察第二个例子，因为sex并没有被建立到联合索引中，且在name索引树上也无法直接获得，因此只能通过回表查询，两次扫描索引树，效率更低。")]),s._v(" "),t("p",[s._v("explain select id,name,sex from user where name='lihua'")]),s._v(" "),t("p",[s._v("针对第二个例子，我们将sex建立到联合索引中去。")]),s._v(" "),t("p",[s._v("ALTER TABLE "),t("code",[s._v("test")]),s._v("."),t("code",[s._v("user")]),s._v("DROP INDEX"),t("code",[s._v("name")]),s._v(",ADD INDEX "),t("code",[s._v("idx_name_sex")]),s._v("("),t("code",[s._v("name")]),s._v(", "),t("code",[s._v("sex")]),s._v(");")]),s._v(" "),t("p",[s._v("再次执行查询，可以看到extra已经变为Using index了,命中了索引覆盖无需回表。")]),s._v(" "),t("p",[s._v("四、使用索引覆盖的场景")]),s._v(" "),t("p",[s._v("1.count查询优化")]),s._v(" "),t("p",[s._v("先对表做修改增加一个address字段，直接count(address)全表查询，可以发现extra为NULL，没有利用到索引覆盖。")]),s._v(" "),t("p",[s._v("ALTER TABLE "),t("code",[s._v("test")]),s._v("."),t("code",[s._v("user")]),s._v("ADD COLUMN "),t("code",[s._v("address")]),s._v(" varchar(255) NULL AFTER "),t("code",[s._v("sex")]),s._v(";")]),s._v(" "),t("p",[s._v("explain select count(address) from user")]),s._v(" "),t("p",[s._v("现对address加索引，再做查询，可以观察到extra变为Using index使用了索引覆盖。")]),s._v(" "),t("p",[s._v("ALTER TABLE "),t("code",[s._v("test")]),s._v("."),t("code",[s._v("user")]),s._v("DROP INDEX"),t("code",[s._v("idx_name_sex")]),s._v(",ADD INDEX "),t("code",[s._v("idx_name_sex")]),s._v("("),t("code",[s._v("name")]),s._v(", "),t("code",[s._v("sex")]),s._v(", "),t("code",[s._v("address")]),s._v(") USING BTREE;")]),s._v(" "),t("p",[s._v("2.列查询回表优化，上述例二建立联合索引解决。")]),s._v(" "),t("p",[s._v("3.分页查询，也可建立联合索引解决，针对下例可以建立(name,sex)覆盖索引。")]),s._v(" "),t("p",[s._v("select id,name,sex ... order by name limit 500,100;")]),s._v(" "),t("p",[s._v("五、结语")]),s._v(" "),t("p",[s._v("本文主要记录mysql学习过程，如有错误请指正。")])])}),[],!1,null,null,null);t.default=n.exports}}]);