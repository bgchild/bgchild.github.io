---
title: Java最常见200+面试题全面解析
date: 2020-09-03 20:36:35
categories: 
  - Java
tags: 
  - Java
typora-root-url: ..
permalink: /pages/c974d1/
sidebar: auto
author: 
  name: AnWen
  link: https://github.com/micolor
---

本文为十九个模块，分别是：Java基础、容器、多线程、反射、对象拷贝、JavaWeb、异常、网络、设计模式、Spring/Spring MVC、SpringBoot/Spring Cloud、Hibernate、MyBatis、RabbitMQ、Kafka、Zookeeper、Mysql、Redis、JVM，共包含208道面试题。



# Java基础

##### 1. JDK和JRE有什么区别？

- JDK：Java Development Kit的简称，Java开发工具包，提供了Java的开发环境和运行环境。
- JRE：Java Runtime Environment的简称，Java运行环境，为Java的运行提供了所需的环境 。

##### 2. ==和equals的区别是什么？

**==的作用**

- 基础类型：比较的是值是否相同。
- 引用类型：比较的是引用是否相同。

**equals的作用**：比较的都是值是否相同。

代码示例：

```
String x = "sting";
String y = "string";
String z = new String("string");
System.out.print(x==y); //true
System.out.print(x==z); //false
System.out.print(x.equals(y)); //true
System.out.print(x.equals(z)); //true
```

代码解读：因为x和y指向的是同一个引用，所以==也是true，而new String()方法则重新开辟了内存空间，所以==结果为false，而equals比较的一直是值，所以结果都为true。

##### 3.  两个对象hashCode()相同，则equals()也一定为true,对吗？

不对，两个对象的hashCode()相同，equals()不一定true。

代码示例：

```
String str1 = "通话";
String str2 = "重地";
System.out.println(String.format("str1:%d | str2:%d",str1.hashCode(),str2.hashCode()));
System.out.println(str1.equals(str2));
```

执行结果：

```
str1：1179395 | str2：1179395
false
```

代码解读：很显然""和“”的hashCod()相同，然后equals()则为false，因为在散列表中，hashCode()相等即两个键值对的哈希值相等，然而哈希值相等，并不一定能得出键值对相等。

##### 4. final在Java中有什么作用？

- final修饰的类叫做最终类，该类不能被继承。
- final修饰的方法不能被重写。
- final修饰的变量叫常量，常量必须初始化，初始化之后值就不能被修改。

##### 5. Java中的Math.round(-1.5)等于多少？

等于-1，Math.round四舍五入大于0.5向上取整。

##### 6. String属于基础的数据类型吗？

String不属于基础类型，基础类型有8种：byte、boolear、char、short、int、float、long、double、String属于对象。

##### 7. Java中操作字符串都有哪些类？他们之间有什么区别？

操作字符串的类有：String、StringBuffer、StringBuilder。

String和StringBuffer、StringBuilder的区别在于String声明的是不可变的对象，每次操作都会生产新的String对象，然后将指针指向新的String对象，而StringBuffer、StringBuilder可以在原有的对象的基础上进行操作，所以在经常改变字符串内容的情况下最好不要使用String。

StringBuffer和StringBuilder最大的区别在于，StringBuffer，所以在单线程环境下推荐使用StringBuilder，多线程环境下推荐使用StringBuffer。

##### 8. String str="i"与String str=new String("i")一样吗？

不一样，因为内存的分配方式不一样。String str="i"的方式，Java虚拟机会将其分配到常量池中；而String str=new String("i")则会被分到堆内存中。

##### 9. 如何将字符串反转？

使用StringBuilder或者StringBuffer的reverse()方法。

示例代码：

```
//StringBuffer reverse
StringBuffer StringBuffer = new StringBuffer();
stringBuffer.append("abcdefg");
System.out.println(stringBiffer.reverse());//gfedcba
//StringBuilder reverse
StringBuilder stringBuilder = new StringBuilder();
StringBuilder.append("abcdefg");
System.out.println(stringBuilder.reverse());//gfedcba
```



##### 10. String类的常用方法都有哪些？

- indexOf()：返回指定字符的索引。
- charAt()：返回指定索引处的字符。
- replace()：字符串替换。
- trim()：去除字符串两端空白。
- split()：分割字符串，返回一个分割后的字符串数组。
- getBytes()：返回字符串的byte类型数组。
- length()：返回字符串长度。
- toLowerCase()：将字符串转成小写字母。
- toUppeerCase()：将字符串转成大写字符。
- substring()：截取字符串。
- equals()：字符串比较。

##### 11. 抽象类必须要有抽象方法吗？

不需要，抽象类不一定非要有抽象方法。

示例代码：

```
abstract calss Cat{
   public static void sayHi(){
     System.out.printtln("hi~");  
   }
}
```



##### 12. 普通类和抽象类有哪些区别？

- 普通类不能包含抽象方法，抽象类可以包含抽象方法。
- 抽象类不能直接实例化，普通类可以直接实例化。

##### 13. 抽象类能使用final修饰吗？

不能，定义抽象类就是让其他类继承的，如果定义为fina该类不能被继承，这样彼此就会产生矛盾，所以final不能修饰抽象类，如下图所示，编辑器也会提示错误信息：

![](https://jsd.cdn.zzko.cn/gh/micolor/images/note/202401121442563.jpg)

##### 14.接口和抽象类有什么区别？

- 默认方法实现：抽象类可以有默认的方法实现；接口不能有默认的方法实现。
- 实现：抽象类的子类使用extends来继承；接口必须使用implements来实现接口。
- 构造函数：抽象类可以有构造函数；接口不能有。
- main方法：抽象类可以有main方法，并且我们能运行它；接口不能有main方法。
- 实现数量：类可以实现很多个接口；但是只能继承一个抽象类。
- 访问修饰符：接口中的方法默认使用public修饰；抽象类中的方法可以任意访问修饰符。

##### 15.Java中IO流分为几种？

- 按功能来分：输入流（input）、输出流（output）。
- 按类型来分：字节流和字符流。
- 字节流和字符流的区别是：字节流按8位传输以字节为单位输入输出数据，字符流按16位传输以字符为单位输入输出数据。

##### 16.BIO、NIO、AIO有什么区别？

- BIO：Block IO同步阻塞式IO,就是我们平常使用的传统IO,它的特点是模式简单使用方便，并发处理能量低。
- NIO：New IO 同步非阻塞IO,是传统IO的升级，客户端和服务器端通过Channel（通道）通讯，实现了多路复用。
- AIO：Asynchronous IO是NIO的升级，也叫NIO2,实现了异步非堵塞io，异步IO的操作基于事件和回调机制。

##### 17.Files的常用方法有哪些？

- Files.exists()：检测文件路径是否存在。
- Files.createFile()：创建文件。
- Files.createDirectory：创建文件夹。
- Files.delete()：删除一个文件或目录。
- Files.copy()：复制文件。
- Files.move()：移动文件。
- Files.size()：查看文件个数。
- Files.read()：读取文件。
- Files.write()：写入文件。

# 容器

##### 18.Java容器都有哪些？

Java容器分为Collection和Map两大类，其下又有很多子类，如下所示：

- Collection
  - List
  - ArrayList
  - LinkedList
  - Vector
    - Stack
  - Set
  - HashSet
    - LinkedHashSet
  - TreeSet
- Map
  - HashMap
  - LinkedHashMap
  - TreeMap
  - ConcurrentHashMap
  - Hashtable

##### 19.Collection和Collections有什么区别？

Collection是一个集合接口，它提供了对集合对象进行基本操作的通用接口方法，所有集合是它的子类，比如List、Set等。

Collections是一个包装类，包括了很多静态方法，不能被实例化，就像一个工具类，比如提供的排序方法：Collections.sort(list)。

##### 20.List、Set、Map之间的区别是什么？

List、Set、Map的区别主要体现在两个方面：元素是否有序、是否允许元素重复。

三者之间的区别，如下表：

![](https://jsd.cdn.zzko.cn/gh/micolor/images/note/202401121442282.jpg)

##### 21.HashMap和Hashtable有什么区别？

存储：HashMap运行key和value为null，而Hashtable不允许。

线程安全：Hashtable是线程安全的，而HashMap是非线程安全的。

推荐使用：在Hashtable的类注释可以看到，Hashtable是保留类不建议使用，推荐在单线程环境下使用HashMap替代，如果需要多线程使用则用ConcurrentHashMap替代。

##### 22.如何选择使用HashMap还是TreeMap？

对于在Map中插入，删除、定位一个元素这类操作，HashMap是最好的选择，因为相对而言HashMap的插入会更快，但如果你要对一个key集合有序的遍历，那TreeMap是更好的选择。

##### 23.说一下HashMap的实现原理？

HashMap基于Hash算法实现的，我们通过put(key,value)存储，get(key)来获取。当传入key时，HashMap会根据key.hashCode()计算出hash值，根据hash值将value保存在bucket里。当计算出的hash值相同时，我们称之为hash冲突，hashMap的做法是用链表和红黑树存储相同hash值的value。当hash冲突的个数比较少时，使用链表否则使用红黑树。

##### 24.说一下HashSet的实现原理？

HashSet是基本HashMap实现的，HashSet底层使用HashMap来保存所有元素，因此HashSet的实现比较简单，相关HashSet的操作，基本上都是调用底层HashMap的相关方法来完成，HashSet不允许重复的值。

##### 25.ArrayList和LinkedList的区别是什么？

- 数据结构实现：ArrayList是动态数组结构实现，而LinkedList是双向链表的数据结构实现。
- 随机访问效率：ArrayList比LinkedList在随机访问的时候效率要高，因为LinkedList是线性的数据存储方式，所以需要移动指针从前往后一次查找。
- 增加和删除效率：在非首位的增加和删除操作，LinkedList要比ArrayList效率要高，因为ArrayList增删操作要影响数组内的其他数据的下标。
- 综合来说，在需要频繁读取集合中的元素时，更推荐使用ArrayList，而在插入和删除操作较多时，更推荐使用LinkedList。

##### 26.如何实现数组和List之间的转换？

数组转List：使用Arrays.asList(array)进行转换。

List转数组：使用List自带的toArray()方法。

代码示例：

```
//list to array
List<String> list = new ArrayList<String>();
list.add("王磊");
list.add("blog");
list.toArray();
//array to list
String[] array = new String[]{"王磊","blog"};
Arrays.asList(array);
```



##### 27.ArrayList和Vector的区别是什么？

- 线程安全：Vector使用Synchronized来实现线程同步，是线程安全的，而ArrayList是非线程安全的。
- 性能：ArrayList在性能方面也好优于Vector。
- 扩容：ArrayList 和Vector都会根据实际的需要动态的调整容量，只不过在Vector扩容每次会增加1倍，而ArrayList只会增加50%。

##### 28.Array和ArrayList有什么区别？

- Array可以存储基本数据类型和对象，ArrayList只能存储对象。
- Array是指定固定大小的，而ArrayList大小是自动扩展的。
- Array内置方法没有ArrayList多，比如addAll、removeAll、iteration等方法只有ArrayList有。

##### 29.在Queue中poll()和remove()有什么区别？

- 相同点：都是返回第一个元素，并在队列中删除返回的对象。

- 不同点：如果没有元素poll()会返回null,而remove()会直接抛出NoSuchElementException异常。


代码示例：

```
Queue<Stringt> queue = new LinkedList<String>();
queue.offer("String");
System.out.println(queue.poll());
System.out.println(queue.poll());
System.out.println(queue.poll());
```

##### 30.哪些结合类是线程安全的？

Vector、Hashtable、Stack都是线程安全的、而像hashMap则是非线程安全的，不过在JDK1.5之后随着Java.util.concurrent并发包的出现，它们也有了自己对应线程安全类，比如HashMap对应的线程安全类就是ConcurrentHashMap。

##### 31.迭代器Iterator是什么？

Iterator接口提供遍历任何Collection的接口。我们可以从一个Collection中使用迭代器方法来获取迭代器实例。迭代器取代了Java集合框架中的Enumeration，迭代器允许调用者在迭代过程中移除元素。

##### 32.Iterator怎么使用？有什么特点？

Iterator使用代码如下：

```
List<String> list = new ArrayList<>();
Iterator<String> it = list.iterator();
while(it.hasNext()){
   String obj = it.next();
   System.out.println(obj);
}
```

Iterator的特点是更加安全，因为它可以确保，在当前遍历的集合元素被更改的时候，就会抛出ConcurrentModificationException异常。

##### 33.Iterator和ListIterator有什么区别？

- lterator可以遍历Set和List集合，而ListIterator只能遍历List。
- lterator只能单向遍历，而ListIterator可以双向遍历（向前/向后遍历）。
- ListIterator从Iterator接口继承，然后添加了一些额外的功能，比如添加一个元素，替换一个元素、获取前面或者后面元素的索引位置。

##### 34.怎么确保一个集合不能被修改？

可以使用Collections.unmodifiableConllection(Collection c)方法来创建一个只读集合，这样改变集合的任何操作都会抛出Java.lang.UnsupportedOperationException异常。

示例代码如下：

```
List<String> list = new ArrayList<>();
list.add("x");
Collection<String> clist = Collections.
unmodifiableCollection(list);
clist.add("y");//运行时此行报错
System.out.println(list.size());
```



# 多线程

##### 35.并行和并发有什么区别？

- 并行：一个处理器同时处理多个任务。
- 并发：多个处理器或多核处理器同时处理多个不同的任务。

##### 36.线程和进程有什么区别？

一个程序下至少有一个进程，一个进程下至少有一个线程，一个进程下也可以有多个线程来增加程序的执行速度。

##### 37.守护线程是什么？

守护线程是运行在后台的一种或特殊进程。它独立于控制终端并且周期性地执行某种任务或等待处理某些发生的事件。在Java中垃圾回收线程就是特殊的守护线程。

##### 38.创建线程有哪几种方式？

创建线程有三种方式：

- 继承Thread重写run方法；
- 实现Runnable接口；
- 实现Callable接口。

##### 39.说一下runnable和callable有什么区别？

runnable没有返回值，callable可以拿到返回值，callable可以看做runnable的补充。

##### 40.线程有哪些状态？

线程的状态：

- NEW尚未启动
- RUNNABLE正在执行中
- BLOCKED阻塞的（被同步锁或者IO锁阻塞）
- WAITING永久等待状态
- TIMED_WATING等待指定的时间重新被唤醒的状态
- TERMINATED执行完成

##### 41.sleep()和wait()有什么区别？

- 类的不同：sleep()来自Thread，wait()来自Object。
- 释放锁：sleep()不释放锁；wait()释放锁。
- 用法不同：sleep()时间到会自动恢复；wait()可以使用notify()/notifyAll()直接唤醒。

##### 42.notify()和notifyAll()有什么区别？

notifyAll()会唤醒所有的线程，notify()之后唤醒一个线程。notifyAll()调用后，会将全部线程由等待池移到锁池，然后参与锁的竞争，竞争成功则继续执行，如果不成功则留在锁池等待锁被释放后再次参与竞争。而notify()只会唤醒一个线程，具体唤醒哪一个线程由虚拟机控制。

##### 43.线程的run()和start()有什么区别?

start( )方法用于启动线程，run()方法用于执行线程的运行时代码。run()可以重复调用start()只能调用一次。

##### 44.创建线程池有哪几种方式？

线程池创建有七种方式，最核心的是最后一种：

- newSingleThreadExecutor();它的特点在于工作线程数目被限制为1，操作一个无界的工作队列，所以它保证了所有的任务都是被顺序执行，最多会有一个任务处于活动状态，并且不允许使用者改动线程池实例，因此可以避免其改变线程数目；
- newCachedThreadPool()：它是一种用来处理大量短时间工作任务的线程池，具有几个鲜明特点：它会试图缓存线程并重用，当无缓存线程可用时，就会创建新的工作线程；如果线程闲置的时间超过60秒，则被终止并移除缓存；长时间闲置时，这种线程池，不会消耗什么资源。其内部使用SynchronusQueue作为工作队列；
- newFixedThreadPool(int nThreads)：重用指定数目（nThreads）的线程，其背后使用的是无界的工作队列，任何时候最多有nThreads个工作线程是活动的。这意味着，如果任务数量超过了活动队列数目，将在工作队列中等待空闲线程出现；如果有工作线程退出，将会有新的工作线程被创建，以补足指定的数目nThreads；
- newSingleThreadScheduleExecutor()：创建单线程池，返回ScheduledExecutorService,可以进行定时或周期性地工作调度；
- newScheduleThreadPool(int corePoolSize)：和newSingleThreadScheduleExecutor()类似，创建的是ScheduledExecutorService，可以进行定时或周期性的工作调度，区别在于单一工作线程还是多个工作线程。
- newWorkStealingPool(int parallelism)：这是一个经常被人忽略的线程池，Java8才加入这个创建方法，其内部会构建ForkJoinPool，利用Work-Stealing算法，并行地处理任务，不保证处理顺序。
- ThreadPoolExecutor()：是最原始的线程池创建，上面1-3创建方式都是对ThreadPoolExcutor的封装。

##### 45.线程池都有哪些状态？

- RUNNING：这是最正常的状态，接受新的任务，处理等待队列中的任务。
- SHUTDOWN：不接受新的任务提交，但是会继续处理等待队列中的任务。
- STOP：不接受新的任务提交，不再处理等待队列中的任务，中断正在执行任务的线程。
  TIDYING：所有的任务都销毁了，workCount为0，线程池的状态在转换为TIDYING状态时，会执行钩子方法terminated()。
- TERMINATED：terminated()方法结束后，线程池的状态就会变成这个。

##### 46.线程池中submit()和execute()方法有什么区别？

- execute()：只能执行Runnable类型的任务。
- submit()：可以执行Runnable和Callable类型的任务。

Callable类型的任务可以获取执行的返回值，而Runnable执行无返回值。

##### 47.在 Java程序中怎么保证多线程的运行安全？

- 方法一：使用安全类，比如Java.util.concurrent下的类。
- 方法二：使用自动锁synchronized。
- 方法三：使用手动锁Lock。

手动锁Java示例代码如下：

```
Lock lock =  new Reentrantlock();
lock.lock();
try{
   System.out.println("获得锁");
}catch(Exception e){
   //TODO：handle exception
}finally{
   System.out.println("释放锁");
   lock.unlock();
}
```

##### 48.多线程锁的升级原理是什么？

在锁对象的对象头里面有一个threadid字段，在第一次访问的时候threadid为空，JVM让其持有偏向锁，并将threadid设置为其线程id，再次进入的时候会先判断threadid是否尤其线程id一致，如果一致则可以直接使用，如果不一致，则升级偏向锁为轻量级锁，通过自旋循环一定次数来获取锁，不会堵塞，执行一定次数之后就会升级为重量级锁，进入堵塞，整个过程就是锁升级的原理。

锁的升级的目的：在java6之后优化synchronized的实现方式，使用了偏向锁升级为轻量级锁再升级到重量级锁的方式，减低了锁带来的性能消耗。

锁升级是为了减低了锁带来的性能消耗。

##### 49.什么是死锁？

当线程A持有独占锁a，并尝试去获取独占锁b的同时，线程B持有独占锁b,并尝试获取独占锁a的情况下，就会发生AB两个线程由于互相持有对方需要的锁，而发生的阻塞现象，我们称为死锁。

##### 50.怎么防止死锁？

- 尽量使用tryLock(long timeout， TimeUnit unit)的方法（ReentrantLock、ReentrantReadWriteLock）,设置超时时间，超时可以退出防止死锁。
- 尽量使用Java.util.concurrent并发类代替自己手写锁。
- 尽量降低锁的使用粒度，进来不要几个功能用同一把锁。
- 尽量减少同步的代码块。

##### 51.ThreadLocal是什么？有哪些使用场景？

ThreadLocal为每个使用该变量的线程提供独立的变量副本、所以每一个线程都可以独立地改变自己的副本，而不会影响其他线程所对应的的副本。

ThreadLocal的经典使用场景是数据库连接和session管理等。

##### 52.说一下synchronize底层实现原理？

synchronized是有一对monitorenter/monitorexit指令实现的，monitor对象是同步的基本实现单元。在java6之前，monitor的实现完全是依靠操作系统的互斥锁，因为需要进行用户态到内核的切换，所以同步操作时一个无差别的重量级操作，性能也很低。但在Java6的时候，Java虚拟机对此进行了大刀阔斧的改进，提供了三种不同的monitor实现，也就是常说的三种不同的锁：偏向锁（Biased Locking）、轻量级锁和重量级锁，大大改进了其性能。

##### 53.synchronized和volatile的区别是什么？

- volatile是变量修饰符；synchronized是修饰类方法代码段。
- volatile仅能实现变量的修改可见性，不能保证原子性；而synchronized则可以保证变量的修改可见和原子性。
- volatile不会造成线程的阻塞；synchronized可能会造成线程的阻塞。

##### 54.synchronize和Lock有什么区别？

- synchronized可以给类、方法、代码块加锁；而lock只能给代码块加锁。
- synchronized不需要手动获取锁和释放锁，使用简单，发生异常会自动释放锁，不会造成死锁；而lock需要自己加锁和释放锁，如果使用不当没有unLock()去释放锁就会造成死锁。
- 通过Lock可以知道有没有成功获取锁，而synchronized却无法办到。

##### 55.synchronize和ReentrantLock区别是什么？

synchronized早期的实现比较低效，对比ReentrantLock，大多数场景性能都相差较大，但是在Java6中对synchronized进行了非常多的改进。

主要区别如下：

- ReentrantLock使用起来比较灵活，但是必须有释放锁的配合动作；
- ReentrantLock必须手动获取与释放锁，而synchronized不需要手动释放和开启锁；
- ReentrantLock只适合用于代码块锁，而synchronized可用于修饰方法、代码块等。
- volatile标记的变量不会被编译器优化；synchronized标记的变量可以被编译器优化。

##### 56.说一下atomic的原理？

atomic主要利用CAS（Compare And Wwap）和voatile和native方法来保证原子操作，从而避免synchronized的高开销，执行效率大为提升。



# 反射

##### 57.什么是反射？

反射是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意要给方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为Java语言的反射机制。

##### 58.什么是Java序列化？什么情况下需要序列化？

Java序列化是为了保存各种对象在内存中的状态，并且可以把保存的对象状态再读出来 。

以下情况需要使用Java序列化：

想把内存中的对象状态保存到一个文件中或者数据库中时候；

想用套接字在网络上传送对象的时候；

想通过RMI（远程方法调用）传输对象的时候。

##### 59.动态代理是什么？有哪些应用？

动态代理是运行时动态生成的代理类。

动态代理的应用有spring aop、hibernate数据查询、测试框架的后端mock、rpc、java注解对象获取等。

##### 60.怎么实现动态代理？

JDK原生动态代理和cglib动态代理。JDK原生动态代理是基于接口实现的，而cglib是基于继承当前类的子类实现的。



# 对象拷贝

##### 61.为什么要使用克隆？

克隆的对象可能包含一些已经修改过的属性，而new出来的对象向的属性都是初始化时候的值，所以当需要一个新的对象来保存当前对象的“状态”就靠克隆方法了。

##### 62.如何实现对象克隆？

- 实现Cloneable接口并重写Object类中的clone()方法。
- 实现Serializable接口,通过对象的序列化和反序列化实现克隆，可以实现真正的深度克隆。

##### 63.深拷贝和浅拷贝区别是什么？

- 浅克隆：当对象被复制时只复制它本身和其中包含的值类型的成员变量，而引用类型的成员对象并没有复制。
- 深克隆：除了对象本身被复制外，对象所包含的所有成员变量也将复制。



# Java Web

##### 64.JSP和servlet有什么区别？

JSP是servlet技术的扩展，本质上就是servlet的简易方式。servlet和JSP最主要的不同点在于，servlet的应用逻辑是在Java文件中，并且完全从表示层中的html里分离开来，而JSP的情况是Java和html可以组合成一个扩展名为JSP的文件，JSP侧重于视图，servlet主要用于控制逻辑。

##### 65.JSP有哪些内置对象？作用分别是什么？

- request：封装客户端的请求，其中包含来自get或post请求的参数；
- response：封装服务器对客户端的响应；
- pageContext：通过该对象可以获取其他对象；
- session：封装用户会话对象；
- application：封装服务器运行环境的对象。
- out：输出服务器响应的输出流对象。
- config：Web应用的配置对象；
- page：JSP页面本身（相当于java中的this）；
- exception：封装页面抛出异常的对象。

##### 66.说一下JSP的4种作用域？

- page：代表与一个页面相关的对象和属性。
- request：代表与客户端发出的一个请求相关的对象和属性。一个请求可能跨越多个页面，设计多个web组件；需要在页面显示的临时数据可以置于此作用域。
- session：代表某个用户与服务器建立的一次会话相关的对象和属性。跟某个用户相关的数据应该放在用户自己的session中。
- application：代表与整个Web应用程序相关的对象和属性，它实质上是跨越整个Web应用程序，包括多个页面、请求和会话的一个全局作用域。

##### 67.session和cookie有什么区别？

- 存储位置不同：session存储在服务器端；cookie存储在浏览器端。
- 安全性不同：cookie安全性不一般、在浏览器存储，可以被伪造和修改。
- 容量和个数限制：cookie有容量限制，每个站点下的cookie也有个数限制。
- 存储的多样性：session可以存储在Redis中、数据库中、应用程序中；而cookie只能存储在浏览器中。

##### 68.说一下session的工作原理？

session的工作原理是客户端登录完成之后，服务器会创建对应的session，session创建完之后，会把session的id发送给客户端，客户端再存储到浏览器中。这样客户端每次访问服务器时，都会带着sessionid，服务器拿到sessionid之后，在内存找到与之对应的session这样就可以正常工作了。

##### 69.如果客户端禁止cookie能实现session还能用吗？

可以用，session只是依赖cookie存储session，如果cookie被禁止用了，可以使用url中添加sessionid的方式保证session能正常使用。

##### 70.spring mvc和struts的区别是什么？

- 拦截级别：struts2是类级别的拦截；spring mvc是方法级别的拦截。
- 数据独立性：spring mvc的方法之间基本上独立的，独享request和response数据，请求数据通过参数获取，处理结果通过ModelMap交回给框架，方法之间不共享变量；而struts2虽然方法之间也是独立的，但其所有action变量是共享的，这不会影响程序运行，却给我们编码和读程序时带来了一定的麻烦。
- 拦截机制：struts2有以自己的interceptor机制，spring mvc用的是独立的aop方式，这样导致struts2的配置文件量比spring mvc大。
- 对ajax的支持：spring mvc集成了ajax，所有ajax使用很方便，只需要一个注解@ResponseBody就可以实现了；而Struts2一般需要安装插件或者自己写代码才行。

##### 71.如何避免SQL注入？

- 使用预处理PreparedStatement。
- 使用正则表达式过滤掉字符中的特殊字符。

##### 72.什么是XSS攻击，如何避免？

**XSS攻击**：即跨站脚本攻击，它是Web程序中常见的漏洞。原理是攻击者往Web页面里面插入恶意的脚本代码（css代码、JavaScript代码等），当用户浏览该页面时，嵌入其中的脚本代码会被执行，从而达到恶意攻击用户的目的、如盗取用户cookie、破坏页面结构、重定向到其他网站等。

预防XSS的核心是必须对输入的数据做过滤处理。

##### 73.什么是CSRF攻击，如何避免？

CSRF：Crocs-Site Reques Forgery（中文：跨站请求伪造），可以理解为攻击者盗用了你的身份，以你的名义发送恶意请求，比如：以你的名义发送邮件、发消息、购买商品、虚拟货币转账等。

防御手段：

- 验证请求来源地址；
- 关键操作添加验证码；
- 在请求地址添加token并验证。



# 异常

##### 74.throw和throws的区别？

- throw：是真实抛出一个异常
- throws：是声明可以能抛出一个异常

##### 75.final、finally、finalize有什么区别？

- final：是修饰符，如果修饰类，此类不能被继承；如果修饰方法和变量，则表示此方法和此变量不能在被改变，只能使用。
- finally：是try{}catch{}finally{}最后一部分，表示不论发生任何情况都会执行，finally部分可以省略，但如果finally部分存在，则一定会执行finally里面的代码。
- finalize：是Object类的一个方法。在垃圾收集器执行的时候会调用被回收对象的此方法。

##### 76.try-catch-finally中哪个部分可以省略？

try-catch-finally其中catch和finally都可以被省略，但是不能同时省略，也就是说try的时候必须后面跟一个catch或者finally。

##### 77.try-catch-finally中，如果catch中return了，finally还会执行吗？

finally一定会执行，即使是catch中return了，catch中的return会等finally中的代码执行完之后，才会执行。

##### 78.常见的异常类有哪些？

- NullPointException空指针异常
- ClassNotFoundException指定类不存在
- NumberFoundException字符串转换为数值异常
- IndexOutOfBoundsException数组下标越界异常
- ClassCastException数组类型转换异常
- FileNotFoundException文件未找到异常
- NoSuchMethodException方法不存在异常
- IOException IO异常
- SocketException Socket异常



# 网络

##### 79.http响应码301和302代表的是什么？有什么区别？

- 301：永久重定向。
- 302：暂时重定向。

它们的区别是，301对搜索引擎优化（SEO）更加有利；302有被提示为网络拦截的风险。

##### 80.forward和redirect的区别？

forward是转发，redirect是重定向：

- 地址栏url显示：forward不会改变，redirect会发生改变；
- 数据共享：forward可以共享request里的数据，redirect不能共享；
- 效率：forward比redirect效率高。

##### 81.简述tcp和udp的区别？

tcp和udp是OSI模型中的运输层的协议。tcp提供可靠的通信传输，而udp则被用于让广播和细节控制交给应用的通信传输。

- 两者的区别大致如下：
- tcp面向连接，udp面向非连接即发送数据前不需要建立连接；
- tcp提供可靠的服务I（数据传输），udp无法保证；
- tcp面向字节流，udp面向报文；
- tcp数据传输慢，udp数据传输快；

##### 82.tcp为什么要三次握手，两次不行吗？为什么？

如果采用两次握手，那么只要服务器发出确认数据包就会建立连接，但由于客户端此时并未响应服务器端的请求，那此时服务器端就会一直在等待客户端，这样服务器端就白白浪费了一定的资源。若采用三次握手，服务器端没有收到来自客户端的再次确认，则就会知道客户端并没有要求建立请求，就不会浪费服务器的资源。

TCP传输层的一个面向连接的安全可靠的一个传输协议，三次握手的机制是为了保证能建立一个安全可靠的连接，那么第一次握手是由客户端发起，客户端会向服务端发送一个报文，在报文里面：SYN标志位置为1，表示发起新的连接。当服务端收到这个报文之后就知道客户端要和我建立一个新的连接，于是服务端就向客户端发送一个确认消息包，在这个消息包里面：ack标志位置为1，表示确认客户端发起的第一次连接请求。以上两次握手之后，对于客户端而言：已经明确了我既能给服务端成功发消息，也能成功收到服务端的响应。但是对于服务端而言：两次握手是不够的，因为到目前为止，服务端只知道一件事，客户端发给我的消息我能收到，但是我响应给客户端的消息，客户端能不能收到我是不知道的。所以，还需要进行第三次握手，第三次握手就是当客户端收到服务端发送的确认响应报文之后，还要继续去给服务端进行回应，也是一个ack标志位置1的确认消息。通过以上三次连接，不管是客户端还是服务端，都知道我既能给对方发送消息，也能收到对方的响应。那么，这个连接就被安全的建了。

##### 83.说一下tcp粘包是怎么产生的？

tcp粘包可能发生在发送端或者接收端，分别来看两端各种产生粘包的原因：

- 发送端粘包：发送端需要等缓冲区满才发送出去，造成粘包；
- 接收方粘包：接收方不及时接收缓冲区的包，造成多个包接收。

##### 84.OSI的七层模型都有哪些？

- 物理层：利用传输介质为数据链路层提供物理连接，实现比特流的透明传输。
- 数据链路层：负责建立和管理节点间的链路。
- 网路层：通过路由选择算法，为报文或分组通过通信子网选择最适合的路径。
- 传输层：向用户提供可靠的端到端的差错和流量控制，保证报文的正确传输。
- 会话层：向两个实体的表示层提供建立和连接的方法。
- 表示层：处理用户信息的表示问题、如编码、数据格式转换和加密解密等。
- 应用层：直接向用户提供服务，完成用户希望在网络上完成的各种工作。

##### 85.get和post请求有哪些区别？

- get请求会被浏览器主动缓存，而post不会。
- get传递参数有大小限制，而post没有。
- post参数传输更安全，get的参数会明文显示在url上，post不会。

##### 86.如何实现跨域？

实现跨越有以下几种方案：

- 服务器端运行跨域设置CORS等于*；
- 在单个接口使用注释@CrossOrigin运行；
- 使用jsonp跨域

##### 87.说一下JSONP实现原理？

jsonp：JSON with Padding



# 设计模式

##### 88.说一下你熟悉的设计模式？

- 单例模式：保证被创建一次，节省系统开销。
- 工厂模式：（简单工厂、抽象工厂）：解耦代码。
- 观察者模式：定义了对象之间的一对多的依赖，这样一来，当一个对象改变时，它的所有的依赖者都会收到通知并自动更新。
- 外观模式：提供一个统一的接口，用来访问子系统中的一群接口，外观定义了一个高层的接口，让子系统更容易使用。
- 模版方法模式：定义了一个算法的骨架，而将一些步骤延迟到子类中，模板方法使得子类可以在不改变算法结构的情况下，重新定义算法的步骤。
- 状态模式：允许对象在内部状态改变时改变它的行为，对象看起来好像修改了它的类。

##### 89.简单工厂和抽象工厂有什么区别？

- 工厂方法：用来生产同一等级结构中的固定产品，支持增加任意产品。
- 简单工厂：用来生产同一个等级结构中的任意产品，对于增加新产品，无能为力。
- 抽象工厂：用来生产不同产品族的全部产品，对于增加新产品，无能为力，支持增加产品族。



# Spring/Spring MVC

##### 90.为什么要使用spring？

- spring提供ioc技术，容器会帮你管理依赖的对象，从而不需要自己创建和管理依赖对象了，更轻松的实现了程序的解耦。
- spring提供了事务的支持，使得事务操作变的更加方便。
- spring提供了面向切面编程，这样可以更方便的畜类一类的问题。
- 更方便的框架集成，spring可以很方便的集成其他框架，比如MyBatis、hibernate等。

##### 91.解释一下么是aop？

aop是面向切面编程，通过预编译方式和运行期动态代理实现程序功能的统一维护的一种技术。

简单来说就是统一处理某一“切面”（类）的问题的编程思想，比如统一处理日志、异常等。

##### 92.解释一下什么是ioc？

ioc：Inversionof Control（中文：控制反转）是spring的核心，对于spring框架来说，就是由spring来负责控制对象的生命周期和对象间的关系。

简单来说，控制指的是当对象对内部成员的控制权；控制反转指的是，这种控制权不由当前对象管理了，由其他（类，第三方容器）来管理。

##### 93.spring主要有哪些模块？

- spring core：框架的最基础部分，提供ioc和依赖注入特性。
- spring context：构建于core封装包基础上的context封装包，提供了一种框架式的对象访问方法。
- spring dao：Data Access Object提供了JDBC的抽象层。
- spring aop：提供了面向切面的编程实现，让你可以自定义拦截器、切点等。
- spring web：提供了针对Web开发的集成特性，例如文件上传，利用servlet listeners进行ioc容器初始化和针对Web的ApplicationContext。
- spring Web mvc：spring中的mvc封装包提供了Web应用的Model-View-Controller（Mvc）的实现。

##### 94.spring常用的注入方式有哪些？

- setter属性注入
- 构造方法注入
- 注解方式注入

##### 95.spring中的bean是线程安全的吗？

spring的bean默认是单例模式，spring框架并没有对单例bean进行多线程封装处理。

实际上大部分时候spring bean无状态的（比如dao类），所有某种程度上来说bean也是安全的，但如果bean有状态的话（比如view model对象），那就要开发者自己去保证线程安全了，最简单的就是改变bean的作用域，把“singleton”变更为“prototype”，这样请求bean相当于new Bean()了，所以就可以保证线程安全了。

- 有状态就是有数据存储功能。
- 无状态就是不会保存数据。

##### 96.spring支持几种bean的作用域？

- singleton：spring ioc容器中只存在一个bean实例，bean以单例模式存在，是系统默认值；
- prototype：每次从容器调用bean时都会创建一个新的示例，即每次getBean()相当于执行new Bean()操作；
- Web环境下的作用域：
  - request：每次http请求都会创建一个bean；
  - session：同一个http session共享一个bean实例；
  - global-session：用于portlet容器，因为每个portlet有单独的session，globalsession提供一个全局性的http session。

**注意**：使用prototype作用域需要慎重的思考，因为频繁创建和销毁bean会带来很大的性能开销。

##### 97.spring自动装配bean有哪些方式？

- no：默认值，表示没有自动装配，应使用显示bean引用进行装配。
- byName：它根据bean的名称注入对象依赖项。
- byType：它根据类型注入对象依赖项。
- 构造函数：通过构造函数来注入依赖项，需要设置大量参数。
- autodetect：容器首先通过构造函数使用autowire装配，如果不能，则通过byType自动装配。

##### 98.spring事务实现方式有哪些？

- 声明式事务：声明式事务也有两种实现方式，基于xml配置文件的方式和注解方式（在类上添加@Transaction注解）。
- 编码方式：提供编码的形式管理和维护事务。

##### 99.说一下spring的事务隔离级别？

spring有五大隔离级别，默认值为ISOLATION_DEFAULT(使用数据库的设置)，其他四个隔离级别和数据库的隔离级别一致：

ISOLATION_DEFAILT：用底层数据库的设置隔离级别，数据库设置的是什么我就用什么；

ISOLATION_READ_UNCOMMITTED：未提交读，最低隔离级别、事务未提交前，就可以被其他事务读取（会出现幻读、脏读、不可重复读）；

ISOLATION_READ_COMMITTED：提交读，一个事务提交后才能被其他事务读取到（会造成幻读、不可重复读），SQL server的默认级别；

ISOLATION_REPEATABLE_READ：可重复读，保证多次读取同一个数据时，其值都和事务开始时候的内容一致，禁止读取到别的事务未提交的数据（会造成幻读），MySQL的默认级别；

ISOLATION_SERIALIZABLE：序列化，代价最高最可靠的隔离级别，该隔离级别能防止脏读、不可重复读、幻读。

**脏读：**表示一个事物能够读取另个事务中还未提交的数据。比如，某个事务尝试插入记录A，此时该事务还未提交，然后一个事务尝试读取到了记录A。

**不可重复读：**是指在一个事务内，多次读同一个数据。

**幻读：**指同一个事务内多次查询返回的结果集不一样。比如同一个事务A第一次查询时候有n条记录，但是第二次同等条件下查询却有n+1条记录，就好像产生了幻觉。发生幻读的原因也是另一个事务新增或者删除或者修改了第一个事务结果集里面的数据，同一个记录的数据内容被修改，所有数据行记录就变多或者变少了。

##### 100.说一下spring mvc的运行流程？

- spring mvc先将请求发送给DispatcherServlet。
- DispatcherServlet查询一个或多个HandlerMapping,找到处理请求Controller。
- DispatcherServlet再把请求提交到对应的Controller。
- Controller进行业务逻辑处理后，会返回一个ModelAndView。
- DisPatcher查询一个或多个ViewResolver视图解析器，找到ModelAndView对象指定的视图对象。
- 视图对象负责渲染返回给客户端。

##### 101.spring mvc有哪些组件？

- 前置控制器：DispatcherServlet。
- 映射控制器HandlerMapping。
- 处理器Controller。
- 模型和视图ModelAndView。
- 视图解析器ViewResolver。

##### 102.@RequestMapping的作用是什么？

将http请求映射到相应的类/方法上。

##### 103.@Autowired的作用是什么？

@Autowired它可以类成员变量、方法及构造函数进行标注，完成自动装配的工作，通过@Autowired的使用来消除set/get方法。



# Spring Boot/Spring Cloud

##### 104.什么是spring boot？

spring boot是为spring服务的，是用来简化新spring用用的初始搭建以及开发过程的。

##### 105.为什么要用spring boot？

- 配置简单
- 独立运行
- 自动装配
- 无代码生产和xml配置
- 提供应用监控
- 易上手
- 提升开发效率

##### 106.spring boot核心配置文件是什么？

spring boot核心的两个配置文件：

- bootstrap（.ym或者.properties）：bootstrap由父applicationContext加载的，比application优先加载，且bootstrap里面的属性不能被覆盖；
- application（.yml或则.properties）：用于spring boot项目的自动化配置。

##### 107.spring boot 配置文件有哪几种类型？它们有什么区别？

配置文件有.properties格式和.yml格式，它们主要的区别是书法风格不同。

.properties配置如下：

```
spring.RabbitMQ.port=5672
```

.yml配置如下：

```
spring:
   RabbitMQ:
       port: 5672
```

.yml格式不支持@PropertySource注解导入。

##### 108.spring boot 有哪些方式可以实现热部署？

- 使用devtools启动热部署，添加devtools库，在配置文件中spring.devtools.restart.enable设置为true;
- 使用Intellij idea编辑器，勾上自动编译或手动重新编译。

##### 109.jpa和hibernate有什么区别？

jpa全称Java Persistence Api，是Java持久化接口规范，hibernate属于jpa的具体实现。

##### 110.什么是spring cloud？

spring cloud是一系列框架的有序集合。他利用spring boot的开发便利性巧妙的简化了分布式系统基础设施的开发，如服务发现注册、配置中心、消息总线、负载均衡、断路器、数据监控等、都可以用spring boot的开发风格做到一键启动部署。

##### 111.spring cloud断路器的作用是什么？

在分布式架构中，断路器模式的作用也是类似的，当某个服务单元发生故障（类似用电器发生短路）之后，通过断路器的故障监控（类似熔断保险丝），向调用方返回一个错误响应，而不是长时间等待。这样就不会使得线程因调用故障服务被长时间占用不释放，避免了故障在分布式系统中的蔓延。

##### 112.spring cloud的核心组件有哪些？

Eureka：服务注册与发现。

Fegin：基于动态代理机制，根据注解和选择的机器，拼接请求url地址，发起请求。

Ribbon：实现负载均衡，从一个服务的多台机器中选择一台。

Hystrix：提供线程池，不同的服务走不同的线程池，实现了不同服务调用的隔离，避免了服务雪崩的问题。

zuul：网关管理，由Zuul网关转发请求给对应的服务。



# Hibernate

##### 113.为什么要使用hibernate？

- hibernate是对jdbc的封装，大大简化了数据访问层的繁琐的重复性代码。
- hibernate是一个优秀的ORM实现，很多层度上简化了DAO层的编码功能。
- 可以很方便的进行数据库的移植工作。
- 剔红了缓存机制，是程序执行更改的高效。

##### 114.什么是ORM框架？

ORM（objec Relation Mapping）对象关系映射，是把数据库中的福安息数据映射成为程序中的对象。

使用ORM的优点：提高了开发效率降低了开发成本、开发更简单更对象话、可移植更强。

##### 115.hibernate中如何在控制台查看打印SQL语句？

在config里面把hibe.show_SQL设置为true就可以。但不建议开启、开启之后会降低程序运行效率。

##### 116.hibernate有几种查询方式？

三种：hql、原生SQL、条件查询Criteria。

##### 117.hibernate实体类可以被定义为final吗？

实体类可以定义为final类，但这样的话就不能使用hibernate代理模式下的延迟关联提供性能了，所以不建议定义实体类为final。

##### 118.在hibernate中使用Interger和int做映射有什么区别？

Integer类型为对象，它的值允许为null,而int属于基础数据类型，值不能为null。

##### 119.hibernate是如何工作的？

- 读取并解析配置文件。
- 读取并解析映射文件，创建SessionFactory。
- 打开Session。
- 创建事务。
- 进行持久化操作。
- 提交事务。
- 关闭Session。
- 关闭SessionFactory。

##### 120.get()和load()的区别？

- 数据查询时，没有OID指定的对象，get()返回null;load()返回一个代理对象。
- load()支持延迟加载；get()不支持延迟加载。

##### 121.说一下hibernate的缓存机制？

hibernate常用的缓存有一级缓存和二级缓存：

- 一级缓存：也叫Session缓存，只在Session作用范围内有效，不需要用户干涉，由hibernate自身维护，可以通过：evict(object)清楚Object的缓存；clear()清楚一级缓存中的所有缓存；flush()刷出缓存；
- 二级缓存：应用级别的缓存，在所有Session中都有效，支持配置第三方的缓存，如：EhChache。

##### 122.hibernate对象有哪些状态？

- 临时/瞬时状态：直接new出来的对象，该对象还没有被持久化（没保存在数据库中），不受Session管理。
- 持久化状态：当调用Session的save/saveOrupdate/get/load/list等方法的时候，对象就是持久化状态。
- 游离状态：Session关闭之后对象就是游离状态。

##### 123.在hibernate中getCurrentSession和openSession的区别是什么？

- getCurrentSession会绑定当前线程，而openSession则不会。
- getCurrentSession事务式Spring控制的，并且不需要手动关闭，而openSession需要我们自己手动开启和提交事务。

##### 124.hibernate实体必须要有无参构造函数吗？为什么？ 

hibernate中每个实体类必须提供一个无参构造函数，因为hibernate框架要使用reflection api,通过调用ClassnewInstance()来创建实体类的实例，如果没有无参的构造函数就会抛出异常。



# MyBatis

##### 125.MyBatis中#{}和${}的区别是什么？

#{}是预编译处理，${}是字符替换。

在使用#{}时，MyBatis会将SQL中得#{}替换成“？”,配合PreparedStatement的set方法赋值，这样可以有效的防止SQL注入，保证程序的运行安全。

##### 126.MyBatis有几种分页方式？

分页方式：逻辑分页和物理分页。

- 逻辑分页：使用MyBatis自带的RowBounds进行分页，它是一次性查询很多数据、然后再数据中再进行检索。
- 物理分页：自己手写SQL分页或使用分页插件pageHelper,去数据库查询指定条数的分页数据形式。

##### 127.RowBounds是一次性查询全部结果吗？为什么？

RowBounds表面是在“所有”数据中检索数据，其实并非是一次性查询出所有数据，因为MyBatis是对jdbc的封装,在jdbc驱动中有一个Fetch Size的配置，它规定了每次最多从数据库查询多少条数据，假如你要查询更多的数据。就好比你要去他会在你执行next()的时候，去查询更多的数据。就好比你去自动取款机取10000元，但取款机每次最多能取2500元，所以你要4次才能把钱取完。只是对jdbc来说，当你调用next()的时候会自动帮你完成查询工作。这样做的好处可以有效的防止内存溢出。

Fetch Size官方相关文档：http://t.cn/EfSE2g3

##### 128.MyBatis逻辑分页和物理分页区别是什么？

- 逻辑分页是一次性查询很多数据，然后再在结果中检索分页的护具，这样做弊端是需要消耗大量的内存、有内存溢出的风险，对数据库压力较大。
- 物理分页是从数据源库查询指定条数的数据，弥补了一次性全部查出的所有数据的种种缺点，比如需要大量的内存、对数据库查询压力较大的问题。

##### 129.MyBatis是否支持延迟加载？延迟加载的原理是什么？

MyBatis支持延迟加载，设置lazyLoadingEable=true即可。

延时加载的原理是调用的时候触发加载，而不是在初始化的时候就加载信息。比如调用a.getB().getName(),这个时候发现a.getB()的值为null,此时会单独触发事先保存好的关联B对象的SQL，先查询出来B,然后再调用a.setB(b),而这个时候再调用a.getB().getName()就有值了，这就是延迟加载的基础原理。

##### 130.说一下MyBatis的一级缓存和二级缓存？

一级缓存：给予perpetualCache的HashMap你本地缓存,它的声明周期是和SQLSession一致的，有多个SQLSession或者分布式的环境中数据库操作，可能会出现脏数据。当Session flush或close之后，该Session中的所有Cache就将清空，默认一级缓存是开启的。

二级缓存：也是基于PerpetualCache的HashMap本地缓存，不同在于其存储作用域为Mapper级别的，如果过个SQLSession之间需要共享缓存，则需要使用到二级缓存，并且二级缓存可自定义存储源,如Ehcache。默认不打开二级缓存，要开启二级缓存，使用二级缓存属性类需要实现Serializable序列化接口（可用来保存对象的状态）。

开启二级缓存数据查询流程：二级缓存->一级缓存->数据库。

##### 131.MyBatis和hibernate的区别有哪些？

- 灵活性：MyBatis更加灵活，自己可以写SQL语句，使用起来比较方便。
- 可移植性：MyBatis有很多自己写的SQL,因为每个数据库的SQL可能不相同,所以可移植性比较差。
- 学习和使用门槛：MyBatis入门比较简单，使用门槛也更低。
- 二级缓存：hibernate拥有更好的二级缓存，它的二级缓存可以自行更换为第三方的二级缓存。

##### 132.MyBatis有哪些执行器(Executor)？

  MyBatis有三种基本的Executor执行器：

- SimpleExecutor：每次执行一次update或select就开启一个Statement对象,用完立刻关闭Statement对象；
- ReuseExecutor：执行update或select,以SQL作为key查找Statement对象，存在就使用，不存在就创建，用完后不关闭Statement对象而是放置于Map内，供下一次使用。简言之，就是重复使用Statement对象;
- BatchExecutor：执行update（没有select，jdbc批处理不支持select），将所有SQL都添加到批处理中（addBatch()）,等待统一执行（executeBatch()）,它缓存了多个Statement对象，每个Statement对象都是addBatch()完毕后，等待逐一执行executeBatch()批处理，与jdbc相同。

##### 133.MyBatis分页插件的实现原理是什么？

分页插件的基本原理是使用MyBatis提供的插件接口，实现自定义插件，在插件的拦截方法内拦截待执行的SQL，然后重写SQL，根据dialect方言，添加对应的物理分页语句和物理分页参数。

##### 134.MyBatis如何编写一个自定义插件？

**自定义插件实现原理**

MyBatis自定义插件针对MyBatis四大对象（Executor、StatementHandler、ParameterHandler、ResultSetHandler）进行拦截：

- Executor：拦截内部执行器，它负责调用StatementHandler操作数据库，并把结果集通过ResultSetHandler进行自动映射，另外它还处理了二级缓存的操作；
- StatementHandler：拦截SQL语法构建的处理，它是MyBatis直接合数据库执行SQL脚本的对象，另外它也实现了MyBatis的一级缓存；
- ParameterHandler：拦截参数的处理；
- ResultSetHandler：拦截结果集的处理。

**自定义插件实现关键**

MyBatis插件要实现Intercept接口，接口包含的方法如下：

```
public interface Interceptor{
   Object intercept(Invocation invoction) throws Throwable;
   Object plugin(Object target);
   void setProperties(Properties properties);
}
```

- setProperties方法是在MyBatis进行配置插件的时候可以配置自定义相关属性，即：接口实现对象参数配置；
- plugin方法是插件用于封装目标对象的，通过该方法我们可以返回目标对象本身，也可以返回一个它的代理，可以决定是否要进行拦截而决定要返回什么样的目标对象，官方提供了示例：return Plugin.wrap(target,this);
- intercept方法就是要进行拦截的时候要执行的方法。

**自定义插件实现实例**

官方插件实现：

```
@Intercepts({@Signature(type = Executor.class,methond = "query",args = {MappedStatement.class,Object.class.RowBounds.class,ResultHandler.class})})
public calss TestInterceptor implements Interceptor{
    public Object intercept(Invocation invocation) throws Throwable{
        Object target = invocation.getTarget();//被代理对象
        Method method = invocation.getMethod();//代理方法
        Object[] args = invocation.getArgs();//方法参数
        //do something.......方法拦截前执行代码块
        Object Result = invocation.proceed();
        //do something.......方法拦截后执行代码块
        return result;
    }
    public Object plugin(Object target){
        return Plugin.Wrap(target,this);
    }
}
```





# RabbitMQ

##### 135.RabbitMQ的使用场景有哪些？

- 抢购活动，削峰填谷，防止系统崩塌。
- 延迟信息处理，比如10分钟之后给下单未付款的用户发送邮件提醒。
- 解耦系统，对于新增的功能可以单独写模块扩展，比如用户确认评价之后，新增了给用户返积分的功能，这个时候不用再业务代码里面添加新增积分的功能，只需要把新增积分的接口订阅确认评价的消息队列即可，后面再添加任何功能只需要订阅对应的消息队列即可。

##### 136.RabbitMQ有哪些重要的角色？

RabbitMQ中重要的角色有：生产者、消费者和代理：

- 生产者：消息的创建者，负责创建和推送数据到消息服务器；
- 消费者：消息的接收方，用于处理数据和确认消息；
- 代理：就是RabbitMQ本身，用户扮演“快递”的角色，本身不生成消息，只是扮演“快递”的角色。

##### 137.RabbitMQ有哪些重要的组件？

- ConnectionFactory（连接管理器）：应用程序与Rabbit之间建立连接的管理器，程序代码中使用。
- Channel（信道）：消息推送使用的通道。
- Exchange（交换器）：用于接受、分配消息。
- Queue（队列）：用于存储生产者的消息。
- RoutingKey（路由键）：用于把生产者的数据分配到交换器上。
- BindingKey（绑定建）：用于把交换器的消息绑定到队列上。

##### 138.RabbitMQ中vhost的作用是什么？

**vhost：**每个RabbitMQ都能创建很多vhost，我们称之为虚拟主机，每个虚拟主机其实都是muini版的RabbiMQ，它拥有自己的队列，交换器和绑定，拥有自己的权限机制。

##### 139.RabbitMQ的消息是怎么发送的？

首先客户端必须连接到RabbitMQ服务器才能发布和消费消息，客户端和rabbit server之间会创建一个tcp连接，一旦tcp打开并通过了认证（认证就是你发送给rabbit服务器的用户名和密码），你的客户端和RabbitMQ就创建了一条amqp信道（channel），信道是创建在“真实”tcp上的虚拟连接，amqp命令都是通过信道发送出去的 ，每个信道都会有一个唯一的id，不论是发布消息，订阅队列都是通过这个信道完成的。

##### 140.RabbitMQ怎么保证消息的稳定性?

- 提供了事务的功能。
- 通过将channel设置为confirm（确认）模式。

##### 141.RabbitMQ怎么避免消息丢失？

- 把消息持久化到磁盘，保证服务器重启消息不丢失。
- 每个集群中至少有一个物理磁盘，保证消息落入磁盘。

##### 142.要保证消息持久化成功的条件有哪些？

- 声明队列必须设置持久化durable设置为true.
- 消息推送投递模式必须设置持久化，deliveryMode设置为2（持久）。
- 消息已经达到持久化交换器。

##### 143.RabbitMQ持久化有什么缺点？

持久化的缺点就是降低了服务器的吞吐量，因为使用的是磁盘而非内存存储，从而降低了吞吐量。可尽量使用ssd硬盘来缓解吞吐量的问题。

##### 144.RabbitMQ有几种广播类型？

- direct（默认方式）：最基础最简单的模式，发送方把消息发送给订阅方，如果有多个订阅者，默认采取轮询的方式进行消息发送。
- headers：与direct类似，只是性能很差，此类型几乎用不到。
- fanout：分发模式，把消费分发给所有订阅者。
- topic：匹配订阅模式，使用正则匹配到消息队列，能匹配到的都能接收到。

##### 145.RabbitMQ怎么实现延迟消息队列?

延迟队列的实现有两种方式：

- 通过消息后期进入死信交换器，再由交换器转发到延迟消费队列，实现延迟功能；
- 使用RabbitMQ-delayed-message-exchange插件实现延迟功能。

##### 146.RabbitMQ集群有什么用？

集群主要有以下两个用途：

- 高可用：某个服务器出现问题，整个RabbitMQ还可以继续使用；
- 高容量：集群可以承载更多的消息量。

##### 147.RabbitMQ节点的类型有哪些？

- 磁盘节点：消息会存储到磁盘。
- 内存节点：消息都存储在内存中，重启服务器消息丢失，性能高于磁盘类型。

##### 148.RabbitMQ集群搭建要注意哪些问题？

- 各个节点之间使用“-link”连接，此属性不能忽略。
- 各节点使用的erlang cookie值必须相同，此值相当于“秘钥”的功能，用于各节点的认证。

##### 149.RabbitMQ每个节点是其他节点的完整拷贝吗？为什么？

不是，原因有以下两个：

- 存储空间的考虑：如果每个节点都拥有所有队列的完全拷贝，这样新增节点不但没有新增存储空间，反而增加了更多的冗余数据；
- 性能的考虑：如果每条消息都需要完整拷贝到每一个集群节点，那新增节点没有提升处理消息的能力，最多是保持和单节点相同的性能甚至是更糟。

##### 150.RabbitMQ集群中唯一一个磁盘节点崩溃了会发生什么情况？

如果唯一磁盘节点崩溃了，不能进行以下操作：

- 不能创建队列
- 不能创建交换器
- 不能创建绑定
- 不能添加用户
- 不能更改权限
- 不能添加和删除集群节点

##### 151.RabbitMQ对集群节点停止的顺序有要求吗？

RabbitMQ对集群的体制的顺序是有要求的，应该先关闭内存节点，最后再关闭磁盘节点，如果顺序恰好相反的话，可能会造成消息的丢失。



# Kafka

##### 152.kafka可以脱了zookeeper单独使用吗？为什么？

kafka不能脱离zookeeper单独使用，因为kafka使用zookeeper管理协调kafka的节点服务器。

##### 153.kafka有几种数据保留的策略？

kafka有两种数据保留策略：按照过期事件保留和按照存储的消息大小保留。

##### 154.kafka同时设置了7天和10G清除数据，到第五天的时候消息达到了10G，这个时候kafka将如何处理？

这个时候kafka会执行数据清理工作，时间和大小不论哪个满足条件，都会清空数据。

##### 155.什么情况会导致kafka运行变慢？

- cpu性能瓶颈
- 磁盘读写瓶颈
- 网络瓶颈

##### 156.使用kafka集群要注意什么？

- 集群的数量不是越多越好、最好不要超过7个，因为节点越多，消息复制需要的时间就越长，整个群组的吞吐量就越低。
- 集群数量最好是单数，因为超过一半故障集群就不能使用了，设置为单数容错率更高。



# Zookeeper

##### 157.zookeeper是什么？

zookeeper是一个分布式的，开放源码的分布式应用程序协调服务，是google chubby的开源实现，是hadoop和hbase的重要组件。它是一个为分布式应用提供一致性服务的软件，提供的功能包括：配置维护、域名服务、分布式同步、组服务等。

##### 158.zookeeper都有哪些功能?

- 集群管理：监控节点存活状态、运行请求等。
- 主节点选举：主节点挂掉后可以从备用的节点开始新一轮选主，主节点选举说的就是这个选举的过程，使用zookeeper可以协助完成这个过程。
- 分布式锁：zookeeper提供两种锁：独占锁、共享锁。独占锁即一次只能有一个线程使用资源，共享锁是读锁共享、读写互斥、即可以有多个线程同时读同一个资源，如果要使用写锁也只能有一个线程使用。zookeeper可以对分布式锁进行控制。
- 命名服务：在分布式系统中，通过使用命名服务，客户端应用能够根据指定名字来获取资源或服务的地址，提供者等信息。

##### 159.zookeeper有几种部署模式？

- zookeeper有三种部署模式：
- 单机部署：一台集群上运行；
- 集群部署：多台集群运行；
- 伪集群部署：一台集群启动多个zookeeper实例运行。

##### 160.zookeeper怎么保证主从节点的状态同步？

zookeeper的核心是原子广播，这个机制保证了各个server之间的同步。实现这个机制的协议叫做zab协议。zab协议有两种模式，分别是恢复模式（选主）和广播模式（同步）。当服务启动或者领导崩溃后，zab进入了恢复模式，党领导被选举出来，且大多数server完成了和leader的状态同步以后，恢复模式就结束了。状态同步保证了leader和server具有相同的系统状态。

##### 161.集群中为什么要有主节点？

在分布式环境中，有些业务逻辑只需要集群中得某一台进行执行，其他的机器可以共享这个结果，这样可以大大减少重复计算，提高性能，所以就需要主节点。

##### 162.集群中有3台服务器，其中一个节点宕机，这个时候zookeeper还可以使用吗？

可以继续使用，单数服务器只要没有超过一半的服务器宕机就可以继续使用。

##### 163.说一下zookeeper的通知机制？

客户端会对某个znode建立一个watcher事件，当该znode发生变化时，这些客户端会收到zookeeper的通知，然后客户端可以根据znode变化来做出业务上的改变。



# MySQL

##### 164.数据库的三范式是什么？

- 第一范式：强调的是列的原子性，即数据库表的每一列都是不可分割的原子数据项。
- 第二范式：要求实体的属性完全依赖于主关键字。所谓完全依赖是指不能存在仅依赖主关键字的一部分的属性。
- 第三范式：任何非主属性不依赖于其它非主属性。

##### 165.一张自增表里面总共有7条数据，删除了最后2条数据，重启Mysql数据库，又插入了一条数据，此时id是几？

- 表类型如果是MyISAM，那id就是8.
- 表类型如果是InnoDB,那id就是6.

InnoDB表会把自增主键的最大id记录在内存中，所以重启之后会导致最大id丢失。

##### 166.如何获取当前数据库的版本？

使用select version()获取当前Mysql数据库版本。

##### 167.说一下ACID是什么？

- Atomicity（原子性）：一个事务（transaction）中的所有操作，或者全部完成，或者全部不完成，不会结束在某个中间环节。事务在执行过程中发生错误，会被恢复（Rollback）到事务开始前的状态，就像这个事务从来没有执行过一样。即，事务不可分割、不可约简。
- Consistency（一致性）：在事务开始之前和事务结束以后，数据库的完整性没有被破坏。这表示写入的资料必须完全符合所有的预设约束、触发器、级联回滚等。
- Isolation（隔离性）：数据库允许多个并发事务同事对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。事务隔离分为不同级别，包括读未提交（Read uncommitted）、读提交（read committed）、可重复读（repeatable read）和串行化（Serializable）。
- Durability（持久性）：事务处理结束后，对数据的修改是用就的，即便系统故障也不会丢失。

##### 168.char和varchar的区别

- char(n)：固定长度类型、比如订阅char(10),当你输入“abc”三个字符的时候，它们占用的空间还是10个字节，其他7个是空字节。

char优点：效率高；缺点：占用空间；适合场景：存储密码的md5值，固定长度的，使用char非常合适。

- varchar(n)：可变长度，存储的值是每个值占用的字节再加上一个用来记录其长度的字节的长度。

所以，从空间是考虑varchar比较适合；从效率上考虑char比较适合，二者使用需要权衡。

##### 169.float和double的区别是什么？

- float最多可以存储8位的十进制数，并在内存中占4个字节。

- double最多可存储16位的十进制数，并在内存中占8个字节。


##### 170.Mysql的内连接、左连接、右连接有什么区别？

内连接关键字：inner join;左连接：left join; 右连接：right join。

内连接是把匹配的关联数据显示出来；左连接是左边的表全部显示出来，右边的表显示出符合条件的数据，右连接正好相反。

##### 171.MySQL索引是怎么实现的？

索引是满足某种特定查找算法的数据结构，而这些数数据结构会以某种方式指向数据，从而实现高效的查询。

具体来说MySQL中的索引，不同的数据引擎实现有所不同，但目前主流的数据库引擎的索引都是B+树实现的，B+树的搜索效率，可以到达二分法的性能，找到数据区域之后就找到了完整的数据结构了，所有索引的性能也是更好的。

##### 172.怎么验证MySQL的索引是否满足需求？

使用explain语法：explain select * from table where type=1。

##### 173.说一个数据库的事务隔离？

MySQL的事务隔离是在MySQL.ini配置文件里添加的，在文件的最后添加：

```
transaction-isolation=REPEATABLE-READ
```

可用的配置值：READ-UNCOMMITTED、RED-COMMITTED、REPATABLE-RED、SERIALIZABLE。

- RED-UNCOMMITTED：未提交读，最低隔离级别，事务未提交前，就可被其他事务读取（会出现幻读、脏读、不可重复读）。
- RED-COMMITTED：提交读，一个事务提交后才能被其他事务读取到（会造成幻读、不能重复读）。
- REPEATABLE-RED：可重复读，默认级别，保证多次读取同一个数据时，其值都和事务开始时候的内容一致，禁止读取到别的事务未提交的数据（会造成幻读）。
- SERIALIZABLE：序列化，代价最可靠的隔离级别，该隔离级别能防止脏读、不可重复读、幻读。

**脏读：**表示一个事物能够读取另个事务中还未提交的数据。比如，某个事务尝试插入记录A，此时该事务还未提交，然后一个事务尝试读取到了记录A。

**不可重复读：**是指在一个事务内，多次读同一个数据。

**幻读：**指同一个事务内多次查询返回的结果集不一样。比如同一个事务A第一次查询时候有n条记录，但是第二次同等条件下查询却有n+1条记录，就好像产生了幻觉。发生幻读的原因也是另一个事务新增或者删除或者修改了第一个事务结果集里面的数据，同一个记录的数据内容被修改，所有数据行记录就变多或者变少了。

##### 174.说一下MySQL的常用引擎？

InnoDB引擎：InnoDB引擎提供了对数据库acid事务的支持，并且还提供了行级锁和外键约束，它的设计的目标就是处理大数据容量的数据库系统。MySQL运行的时候，InnoDB会在内存中建立缓冲池，用于缓冲数据和索引。但是该引擎是不支持全文搜索，同事启动也比较慢，它是不会保存表的行数的，所以当行select count(*) from table 指令的时候，需要进行扫描全表。由于锁的粒度小，写操作是不会锁定全表的，所以在并发度较高的场景下使用会提升效率的。

MyIASM引擎：MySQL的默认引擎，但不提供事务的支持，也不支持行级锁和外键。因此当执行插入和更新语句时，可以直接的读取已保存的值而不需要进行全表扫描。所以，如果表的读操作远远多于写操作时，并且不需要事务的支持，可以将MyIASM作为数据库引擎的首选。

##### 175.说一下MySQL的行锁和表锁？

MyIASM只支持表锁，InnoDB支持表锁和行锁，默认为行锁。

- 表级锁：开销小，加锁快，不会出现死锁。锁定粒度大，发生锁冲突的概率最高，并发量最低。
- 行级锁：开销大，加锁慢，会出现死锁，锁粒度小，发生冲突的概率小，并发度最高。

##### 176.说一下乐观锁和悲观锁？

- 乐观锁：每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在提交更新的时候会判断一下在此期间别人有没有去更新这个数据。
- 悲观锁：每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会阻止，知道这个锁被释放。

数据库的乐观锁需要自己实现，在表里面添加一个version字段，每次修改成功值加1，这样每次修改的时候先对比一下，自己拥有的version和数据库现在的version是否一致，如果不一致就不修改，这样就实现了乐观锁。

##### 177.MySQL问题排查都有哪些手段？

- 使用show processlist命令查看当前又有连接信息。
- 使用explain命令查询SQL语句执行计划。
- 开启慢查询日志，查看慢查询的SQL。

##### 178.如何做MySQL的性能优化？

- 为字段创建索引。
- 避免使用select *,列出所需要查询的字段。
- 垂直分割分表。
- 选择争取的存储引擎。



# Redis

##### 179.Redis是什么？都有哪些使用场景？

Redis是一个C语言开发的高速缓存数据库。

Redis的使用场景：

- 记录帖子的点赞数、点击数、评论数；
- 缓存近期热贴；
- 缓存文章详情信息；
- 记录用户会话信息。

##### 180.Redis有哪些功能？

- 数据缓存功能
- 分布式锁的功能
- 支持数据持久化
- 支持事务
- 支持消息队列

##### 181.Redis和memcache有什么区别？

- 存储方式不同：memecache把数据全部存在内存之中，断电后会挂掉，数据不能超过内存大小；Redis有部分存在磁盘上，这样保证了数据的持久性。
- 数据支持类型：memecache对数据类型支持相对简单；Redis有复杂的数据类型。
- 使用底层模型不同：它们之间底层实现方式，以及与客户端之间通信的应用协议不一样，Redis自己构建了vm机制，因为一般的系统调用系统函数的话，会浪费一定的时间去移动和请求。
- value值大小不同：Redis最大可达到1gb；memcache只有1mb。

##### 182.Redis为什么是单线程的？

因为cpu不是Redis的瓶颈，Reidis的瓶颈最有可能是机器的内存或者网络带宽。既然单线程容易实现，而且cpu不会成为瓶颈，那就顺理成章的采用单线程的方案了。

关于Redis的性能，官方网站也有，普通的笔记本轻松处理每秒几十万的请求。

而单线程并不代表就慢 nginx和nodejs也都是高性能单线程的代表。

##### 183.什么是缓存穿透？怎么解决？

缓存穿透：指查询一个一定不存在的数据，由于缓存是不命中时需要从数据库查询，查不到数据则不写入缓存，这将导致这个不存在的数据每次请求都要到数据库去查询，造成缓存穿透。

解决方案：最简单粗暴的方法如果一个查询返回的数据为空（不管是数据不存在，还是系统故障），我们就把这个空结果进行缓存，但它的过期时间会很短，最长不超过五分钟。

##### 184.Redis支持的数据类型有哪些？

Redis支持的数据类型：String（字符串）、list（列表）、hash（字典）、set（集合）、zset（有序集合）。

##### 185.Redis支持的Java客户端有哪些？

支持的Java客户端有Redisson、jedis、lettuce等。

##### 186.jedis和Redisson有哪些区别？

jedis：提供了比较全面的Redis命令的支持。

Redisson：实现了分布式和可扩展的Java数据结构，与jedis相比Redisson的功能相对简单，不支持排序、事务、管道、分区等Redis特性。

##### 187.怎么保证缓存和数据库数据一致性？

- 合理设置缓存过去时间。
- 新增、更改、删除数据库操作时更新Redis、可以使用事务机制保证数据的一致性。

##### 188.Redis持久化有几种方式？

Redis的持久化有两种方式，挥着说有两种策略：

RDB（Redis Database）：指定的时间间隔能对你的数据进行快照存储。

AOF（Append only File）：每一个收到的写命令都通过write函数追加到文件中。

##### 189.Redis怎么实现分布式锁？

Redis分布式锁其实就是在系统里面占一个“坑”，其他程序也要占“坑”的时候，占用成功了就可以继续执行，失败了就只能放弃或稍后重试。

占坑一般使用setnx（set if not exists）指令，只允许被一个程序占有，使用完调用del释放锁

##### 190.Redis分布式锁有什么缺陷？

Redis分布式锁不能解决超时的问题，分布式锁有一个超时时间，程序的执行如果超出了锁的超时时间就会出现问题。

##### 191.Redis如何做内存优化？

尽量使用Redis的散列表，把相关的信息放到散列表里面存储，而不是把每个字段单独存储，这样可以有效的减少内存的使用。比如将Web系统的用户对象，应该放到散列变里面再整体存储到Redis，而不是把用户的姓名、年龄、密码、邮箱等字段分别设置key进行存储。

##### 192.Redis淘汰策略有哪些？

- voatile-lru：从已设置过期时间的数据集（server.db[i].expires）中挑选最近最少使用的数据淘汰。
- volatile-ttl：从已设置过期时间的数据集（server.db[i].expires）中挑选将要过期的数据淘汰。
- volatile-random：从已设置过期时间的数据集（server.db[i].expires）中任意选择数据淘汰。
- allkeys-lru：从数据集（server.db[i].expires）中挑选最近最少使用的数据淘汰。
- allkeys-random：从数据集（server.db[i].expires）中任意选择数据淘汰。
- no-enviction（驱逐）：禁止驱逐数据。

##### 193.Redis最常见的性能问题有哪些？该如何解决？

- 主服务器写内存快照，会阻塞主线程的工作，当快照比较大时对性能影响是非常大的，会间断性的暂停服务，所以主服务器最好不要写内存快照。
- Redis主从复制的性能问题，为了主从复制的速度和连接的稳定性，主从库最好在同一个局域网中。



# JVM

##### 194.说一下JVM的主要组成部分？及其作用？

- 类加载器（ClassLoader）

- 运行时数据区 （Runtime Data Area）

- 执行引擎（Execution Engine）

- 本地库接口（Native Interface）

  **组件的作用**：首先通过类加载器（ClassLoader）会把Java转换成字节码，运行数数据区（Runtime Data Area）再把字节码加载到内存中，而字节码文件只是JVM的一套指令集规范，并不能直接交给底层操作系统去执行，因此需要特定的命令解析器 执行引擎（Execution Engine），将字节码翻译成底层系统指令，再交由 CPU去执行，而这个过程只需要调用其他语言的本地库接口（Native Interface）来实现整个程序的功能。

##### 195.说一下JVM运行时数据区？

不同虚拟机的运行时数据区可能略微有所不同，但都会遵从Java虚拟机规范，Java虚拟机规范规定的区域分为以下五个部分：

- 程序计数器（Program Counter Register）：当前线程执行的字节码的行号指示器，字节码解析器的工作通过改变这个计数器的值，来选取下一条需要执行的字节码指令，分支、循环、跳转、异常处理、线程恢复等基础功能、都需要依赖这个计数器来完成;
- JAVA虚拟机栈（Java Virtual Machine Stacks）：用于存储局部变量表、操作数栈、动态链接、方法出口等信息。
- 本地方法栈（Native Methd Stack）：与虚拟机栈的作用是一样的，只不过虚拟机栈是服务Java方法的，而本地方法栈是为虚拟机调用Native方法服务的；
- Java堆（Java Heap）：Java虚拟机中内存最大的一块，是被所有线程共享的，几乎所有的对象实例都在这里分配内存；
- 方法区（Methed Area）：用于存储已被虚拟机加载的类信息、常量、静态变量、即时编译后的代码等数据。

##### 196.说一下堆栈的区别？

- 功能方面：堆用来存放对象，栈用来执行程序的。
- 共享性：堆是线程共享的，栈是线程私有的。
- 空间大小：堆的大小远远大于栈。

##### 197.队列和栈是什么？有什么区别？

队列和栈都是被用来预存数据的。

队列允许先进先出检索元素，但也有例外的情况，Deque接口允许从两端检索元素。

栈和队列相似，但是后进先出进行检索元素。

##### 198.什么是双亲委派模型？

在介绍双亲委派模型前先数一下类加载器。对于任意一个类，都需要由加载它的类加载器和这个类本身一同确立在JVM中的唯一性，每一个类加载器，都有一个独立的类名称空间。类加载器就根据指定的全限定类名称将class文件加载到JVM内存，然后再转化为class对象。

类加载器分类：

- 启动类加载器（Bootstrap ClassLoader），是虚拟机自身的一部分，用来加载JAVA_HOME/lib/目录中的，或者被-Xbootclasspath参数指定的路径中并且被虚拟机识别的类库：
- 其他类加载器：
  - 扩展类加载器（Extension ClassLoader）：负责加载\lib\ext目录或Java.ext.dirs系统变量指定的路径中的所有类库；
  - 应用程序类加载器（Application ClassLoader）。负责加载用户类路径（ClassPath）上的指定类库，我们可以直接使用这个类加载器。一般情况，如果我们没有自定义类加载器默认就是用这个加载器。

双亲委派模型：如果一个类加载器收到类加载请求,它首先不会自己去加载这个类，而是把这个请求委派给父类加载器去完成，每一层的类加载器都是如此，这样所有的加载请求都会被传送到顶层的启动类加载器中，只有当父加载无法完成加载请求（它的搜索范围中没有找到所需的类）时，子加载器才会尝试去加载类。

##### 199.说一下类加载的执行过程？

类加载分为以下5个步骤：

- 加载：根据查找路径找到相应的class文件然后导入;
- 检查：检查加载的class文件的正确性；
- 准备：给类中的静态变量分配内存空间；
- 解析：虚拟机将常量池中的符号引入替换成直接引用的过程。符号引用就理解为一个标示，而在直接引用直接指向内存中的地址；
- 初始化：对静态变量和静态代码块执行初始化工作。

##### 200.怎么判断对象是否可以被回收？

一般有两种方法来判断：

- 引用计数器：为每个对象创建一个引用计数器，有对象引用时计数器+1，引用被释放时计数-1，当计数器为0时就可以被回收。它有一个缺点不能解决循环引用的问题；
- 可达性分析：从GC Roots开始向下搜索，搜索所走过的路径称为引用链。当一个对象到GC Roots没有任何引用链相连时，则证明此对象是可以被回收的。

#####  201.Java中都有哪些应用类型？

- 强引用：发生GC的时候不会被回收。
- 软引用：有用但不是必须的对象，在发生内存溢出之前会被回收。
- 弱引用：有用但不是必须的对象，在下一次GC时会被回收。
- 虚引用（幽灵引用/幻影引用）：无法通过虚拟引用获得对象，用PhantomReference实现虚拟引用，虚引用的用途是在GC时返回一个通知。

##### 202. 说一下JVM有哪些垃圾回收算法？

- 标记-清除算法：标记无用对象，然后进行清除回收。缺点：效率不高，无法清除垃圾碎片。
- 标记-整理算法：标记无用对象，让所有存活的对象向一端移动，然后直接清除掉边界以外的内存。
- 复制算法：按照容量划分二个大小相等的区域，当一块用完的时候将存活着的对象复制到另一块上，然后再把已使用的内存空间一次清理。缺点：内存使用效率不高，只有原来的一半。
- 分代算法：根据对象存活周期的不同将内存划分为几块，一般是新生代和老年代，新生代基本采用复制算法，老年代采用标记整理算法。

##### 203. 说一下JVM有哪些垃圾回收器？

- Serial：最早的单线程串行垃圾回收器。
- Serial Old：Serial垃圾回收器的老版本，同样也是单线程的，可以作为CMS垃圾回收器的备选预案。
- ParNew：是Serial的多线程版本。
- Parallel和ParNew收集器类似，是多线程的，但Parallel是吞吐量优先的收集器，可以牺牲等待时间换取系统的吞吐量。
- Parallel Old是Parallel老生代版本，Parallel使用的是复制的内存回收算法，Parallel Old使用的是标记-整理的内存回收算法。
- CMS：一种以获得最短停顿时间为目标的收集器，非常试用B/S系统。
- G1：一种兼顾吞吐量和挺短时间的GC实现，是JDK9以后默认的GC选项。

##### 204.详细介绍一下CMS垃圾回收器?

CMS是英文Concurrent Mark-Sweep的简称，是以牺牲吞吐量为代价来获得最短回收停顿时间的垃圾回收器。对于要求服务器响应速度的应用上，这种垃圾回收器非常适合。在启动JVM的参数加上"-XX:+UseConcMarkSweepGc"来指定使用CMS垃圾回收器。

CMS使用的是标记-清除的算法实现的，所以在gc的时候会产生大量的内存碎片，当剩余内存不能满足程序运行要求时，系统将会出现Concurrent Mode Failure，临时CMS会采用Serial old 回收器进行垃圾清除，此时的性能将会被降低。

##### 205.新生代垃圾回收器和老生代垃圾回收器都用哪些？有什么区别？

- 新生代回收器：Serial、ParNew、Parallel Scavenge

- 老年代回收器：Serial Old、Parallel Old、CMS

- 整堆回收器：G1

  新生代垃圾回收器一般采用复制算法，复制算法的优点效率高、缺点内存利用率低；老年代回收器一般采用的是标记-整理的算法进行垃圾回收。

##### 206.简述分代垃圾回收器是怎么工作的？

分代回收器有两个分区：老生代和新生代，新生代默认的空间占比是总空间的1/3,老生代的默认占比是2/3。

新生代使用的是复制算法，新生代里有3个分区：Eden、ToSurvivor、From Survivor，它们的默认占比是8:1:1,它的执行流程如下：

- 把Eden+From Survivor存活的对象放入To Survivor 区;
- 清除Eden和From Survivor分区；
- 
- From Survivor 和 To Survivor分区交换，From Survivor 变 To Survivor, To Survivor变From Survivor。

每次在From Surrvivor到To Survivor 移动时都存活的对象，年龄就+1，当年龄到达15（默认配置是15）时，升级为老生代。大对象也会直接进入老生代。

老生代当空间占用到达某个值后就会触发全局垃圾收回，一般使用标记整理的执行算法。以上这些循环往复就构成了整个分代垃圾回收的整体执行流程。

##### 207.说一下JVM的调优工具？

​    JDK自带很多调优工具,都位于JDK的bin目录下，其中最常见的是jconsole和jvisualvm这两款视图工具。

- jconsole：用于JVM中的内存、线程和类进行监控；

- jvisualvm：JDK自带的全能分析工具，可以分析：内存快照、线程快照、程序死锁、监控内存的变化、gc变化等。


##### 208.常用的JVM调优参数都有哪些？

- -Xms2g：初始化堆内存为2g;
- -Xmx2g：堆最大内存为2g;
- -XX:NewRatio=4：设置年轻的和老年代的内存比例为1:4;
- XX:SurvivorRatio=8：设置新生代Eden和Survivor比例为8:2;
- -XX:+UseParNewGC：指定使用ParNew+Serial Old垃圾回收器组合;
- -XX:+UseParallelOldGC：指定使用ParNew+ParNew Old垃圾回收器组合;
- -XX:+UseConcMarkSweepGC：指定使用CMS+Serial old垃圾回收器组合;
- -XX:+PrintGC：开启打印gc信息;
- -XX:+PrintGCDetails：打印gc详细信息。