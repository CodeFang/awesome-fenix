(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{572:function(e,t,r){"use strict";r.r(t);var s=r(11),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"rest设计风格"}},[e._v("REST设计风格")]),e._v(" "),r("p",[e._v("很多人会拿REST与RPC互相比较，其实，REST无论是在思想上、概念上，还是使用范围上，与RPC都不尽相同，充其量只能算是有一些相似，应用会有一部分重合之处，但本质上并不是同一类型的东西。")]),e._v(" "),r("p",[e._v("REST与RPC在思想上差异的核心是抽象的目标不一样，既面向过程的编程思想与面向资源的编程思想两者之间的区别。面向过程编程、面向对象编程大家想必听说过，但什么是面向资源编程？这个问题等介绍完REST的特征之后我们再回头细说。")]),e._v(" "),r("p",[e._v("而概念上的不同是指REST并不是一种远程服务调用协议，甚至可以把定语也去掉，它就不是一种协议。协议都带有一定的规范性和强制性，最起码也该有个规约文档，譬如JSON-RPC，它哪怕再简单，也要有个《"),r("a",{attrs:{href:"https://www.jsonrpc.org/specification",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON-RPC Specification"),r("OutboundLink")],1),e._v("》来规定协议的格式细节、异常、响应码等信息，但是REST并没有定义这些内容，尽管有一些指导原则，但实际上并不受任何强制的约束。常有人批评某个系统接口“设计得不够RESTful”，其实这句话本身就有些争议，REST只能说是风格而不是规范、协议，并且能完全达到REST所有指导原则的系统也是不多见的，这一点我们同样将在后文中详细讨论。")]),e._v(" "),r("p",[e._v("至于使用范围，REST与RPC作为主流的两种远程调用方式，在使用上是确有重合的，但重合的区域有多大就见仁见智了。上一节提到了当前的RPC协议框架都各有侧重点，并且列举了RPC一些发展方向，如分布式对象、提升调用效率、简化调用复杂性等等。这里面分布式对象这一条线的应用与REST可以说是毫无关联；而能够重视远程服务调用效率的应用场景，就基本上已经排除了REST应用得最多的供浏览器端消费的远程服务，因为以浏览器作为前端，对于传输协议、序列化器这两点都不会有什么选择的权力，哪怕想要更高效率也有心无力。而在移动端、桌面端或者分布式服务端的节点之间通讯这一块，REST虽然照样有宽阔的用武之地，只要支持HTTP就可以用于任何语言之间的交互，不过通常都会以网络没有成为性能瓶颈为使用前提，在需要追求传输效率的场景里，REST提升传输效率的潜力有限，死磕REST又想要好的网络性能，一般不会有好效果；对追求简化调用的场景——前面提到的浏览器端就属于这一类的典型，众多RPC里也就JSON-RPC有机会与REST竞争，其他RPC协议与框架，哪怕是能够支持HTTP协议，哪怕提供了JavaScript版本的客户端（如gRPC-Web），也只是具备前端使用的"),r("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/aspnet/core/grpc/browser?view=aspnetcore-3.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("理论可行性"),r("OutboundLink")],1),e._v("，很少见有实际项目把它们真的用到浏览器上的。")]),e._v(" "),r("p",[e._v("但尽管有着种种不同，这两者还是产生了很频繁的比较与争论，这两种分别面向资源和面向过程的远程调用方式，就如同当年面向对象与面向过程的编程思想一样，非得分出个高低不可。")]),e._v(" "),r("h2",{attrs:{id:"理解rest"}},[e._v("理解REST")]),e._v(" "),r("p",[e._v("个人会有好恶偏爱，但计算机科学是务实的，有了RPC，还会提出REST，有了面向过程编程之后，还能产生面向资源编程，并引起广泛的关注、使用和讨论，说明后者一定是有一些前者没有的闪光点，或者解决、避免了一些面向过程中的缺陷。我们不妨先去理解REST为什么会出现，然后再来讨论评价它。")]),e._v(" "),r("p",[e._v("简单搜索就能找到REST源于Roy Thomas Fielding在2000年发表的博士论文：《"),r("a",{attrs:{href:"https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Architectural Styles and the Design of Network-based Software Architectures"),r("OutboundLink")],1),e._v("》，此文的确是REST的源头，但我们不应该忽略Fielding的身份和此前的工作背景，这些信息对理解REST的设计思想至关重要。")]),e._v(" "),r("p",[e._v("首先，Fielding是一名很优秀的软件工程师，他是Apache服务器的核心开发者，后来成为了著名的"),r("a",{attrs:{href:"https://www.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache软件基金会"),r("OutboundLink")],1),e._v("的联合创始人；同时，Fielding也是HTTP 1.0协议（1996年发布）的专家组成员，后来还晋升为HTTP 1.1协议（1999年发布）的负责人。HTTP 1.1协议设计得极为成功，以至于发布之后长达十年的时间里，都没有收到多少修订的意见。用来指导HTTP 1.1协议设计的理论和思想，最初是以备忘录的形式用作专家组成员之间交流，除了IETF、W3C的专家外，并没有在外界广泛流传。")]),e._v(" "),r("p",[e._v("从时间上看，对HTTP 1.1协议的设计工作贯穿了Fielding的整个博士研究生涯，当起草HTTP 1.1协议的工作完成后，Fielding回到了加州大学欧文分校继续攻读自己的博士学位。第二年，他更为系统、严谨地阐述了这套理论框架，并且以这套理论框架导出了一种新的编程思想，他为这种程序设计风格取了一个很多人难以理解，但是今天已经广为人知的名字REST，即“表征状态转移”的缩写。")]),e._v(" "),r("p",[e._v("哪怕对编程和网络都很熟悉的同学，只从标题中也不太可能直接弄明白什么叫“表征”、啥东西的“状态”、从哪“转移”到哪。尽管在论文原文中确有论述这些概念，但写得确实相当晦涩（不想读英文的同学从此处"),r("a",{attrs:{href:"https://www.infoq.cn/article/2007/07/dlee-fielding-rest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("获得中文翻译版本"),r("OutboundLink")],1),e._v("），笔者推荐比较容易理解REST思想的途径是先理解什么是HTTP，再配合一些实际例子来进行类比，你会发现“REST”（"),r("strong",[e._v("Re")]),e._v("presentational "),r("strong",[e._v("S")]),e._v("tate "),r("strong",[e._v("T")]),e._v("ransfer）实际上是“HTT”（"),r("strong",[e._v("H")]),e._v("yper"),r("strong",[e._v("t")]),e._v("ext "),r("strong",[e._v("T")]),e._v("ransfer）的进一步抽象，两者就如同接口与实现类的关系一般。")]),e._v(" "),r("p",[e._v("HTTP中使用的“超文本”（Hypertext）一词是美国社会学家Theodor Holm Nelson在1967年于《"),r("a",{attrs:{href:"https://archive.org/details/SelectedPapers1977",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brief Words on the Hypertext"),r("OutboundLink")],1),e._v("》一文里提出的，下面引用的是他本人在1992年修正后的定义：")]),e._v(" "),r("div",{staticClass:"quote"},[r("p",{staticClass:"title"},[e._v("Hypertext")]),r("p",[e._v('By now the word "hypertext" has become generally accepted for branching and responding text, but the corresponding word "hypermedia", meaning complexes of branching and responding graphics, movies and sound – as well as text – is much less used.')]),e._v(" "),r("p",[e._v('现在，"超文本 "一词已被普遍接受，它指的是能够进行分支判断和差异响应的文本，相应地， "超媒体 "一词指的是能够进行分支判断和差异响应的图形、电影和声音（也包括文本）的复合体。')]),e._v(" "),r("div",{staticClass:"custom-block right"},[r("p",[e._v("—— Theodor Holm Nelson "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Literary_Machines",target:"_blank",rel:"noopener noreferrer"}},[e._v(" Literary Machines"),r("OutboundLink")],1),e._v(", 1992")])])]),r("p",[e._v("以上定义描述的“超文本（或超媒体，Hypermedia）”是一种“能够对操作进行判断和响应的文本（或声音、图像等）”，这个概念在上世纪60年代提出时应该还属于科幻的范畴，但是今天大众已经完全接受了它，互联网中一段文字可以点击、可以触发脚本执行、可以调用服务端，这一切已毫不稀奇。下面我们继续尝试从“超文本”或者“超媒体”的含义来理解什么是“表征”以及REST中其他关键概念，这里使用一个具体事例将其描述如下。")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("资源")]),e._v("（Resource）：譬如你现在正在阅读一篇名为《REST设计风格》的文章，这篇文章的内容本身（你可以将其理解为其蕴含的信息、数据）我们称之为“资源”。无论你是购买的书籍、是在浏览器看的网页、是打印出来看的文稿、是在电脑屏幕上阅读抑或是手机上浏览，尽管呈现的样子各不相同，但其中的信息是不变的，你所阅读的仍是同一份“资源”。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("表征")]),e._v("（Representation）：当你通过电脑浏览器阅读此文章时，浏览器向服务端发出请求“我需要这个资源的HTML格式”，服务端向浏览器返回的这个HTML就被称之为“表征”，你可能通过其他方式拿到本文的PDF、Markdown、RSS等其他形式的版本，它们也同样是一个资源的多种表征。可见“表征”这个概念是指信息与用户交互时的表示形式，这与我们软件分层架构中常说的“表示层”（Presentation Layer）的语义其实是一致的。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("状态")]),e._v("（State）：当你读完了这篇文章，想看后面是什么内容时，你向服务器发出请求“给我下一篇文章”。但是“下一篇”是个相对概念，必须依赖“当前你正在阅读的文章是哪一篇”才能正确回应，这类在特定语境中才能产生的上下文信息即被称为“状态”。我们所说的有状态（Stateful）抑或是无状态（Stateless），都是只相对于服务端来说的，服务器要完成“取下一篇”的请求，要么自己记住用户的状态：这个用户现在阅读的是哪一篇文章，这称为有状态；要么客户端来记住状态，在请求的时候明确告诉服务器：我正在阅读某某文章，现在要读它的下一篇，这称为无状态。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("转移")]),e._v("（Transfer）：l 无论状态是由服务端还是客户端来提供的，“取下一篇文章”这个行为逻辑必然只能由服务端来提供，因为只有服务端拥有该资源及其表征形式。服务器通过某种方式，把“用户当前阅读的文章”转变成“下一篇文章”，这就被称为“表征状态转移”。")])])]),e._v(" "),r("p",[e._v("通过“阅读文章”这个例子，笔者对资源等概念进行通俗的释义，你应该能够理解REST所说的“表征状态转移”的含义了。借着这个故事的上下文状态，笔者再继续介绍几个现在不涉及但稍后要用到的概念名词。")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("统一接口")]),e._v("（Uniform Interface）：上面说的服务器“通过某种方式”让表征状态发生转移，具体是什么方式？如果你真的是用浏览器阅读本文电子版的话，请把本文滚动到结尾处，右下角有下一篇文章的URI超链接地址，这是服务端渲染这篇文章时就预置好的，点击它让页面跳转到下一篇，就是所谓“某种方式”的其中一种方式。任何人都不会对点击超链接网页会出现跳转感到奇怪，但你细想一下，URI的含义是统一资源标识符，是一个名词，如何能表达出“转移”动作的含义呢？答案是HTTP协议中已经提前约定好了一套“统一接口”，它包括：GET、HEAD、POST、PUT、DELETE、TRACE、OPTIONS七种基本操作，任何一个支持HTTP协议的服务器都会遵守这套规定，对特定的URI采取这些操作，服务器就会触发相应的表征状态转移。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("超文本驱动")]),e._v("（Hypertext Driven）：尽管表征状态转移是由浏览器主动向服务器发出请求所引发的，该请求导致了“在浏览器屏幕上显示出了下一篇文章的内容”这个结果的出现。但是，你我都清楚这不可能真的是浏览器的主动意图，浏览器是根据用户输入的URI地址来找到网站首页，服务器给予的首页超文本内容后，浏览器再通过超文本内部的链接来导航到了这篇文章，阅读结束时，也是通过超文本内部的链接来再导航到下一篇。浏览器作为所有网站的通用的客户端，任何网站的导航（状态转移）行为都不可能是预置于浏览器代码之中，而是由服务器发出的请求响应信息（超文本）来驱动的。这点与其他带有客户端的软件有十分本质的区别，在那些软件中，业务逻辑往往是预置于程序代码之中的，有专门的页面控制器（无论在服务端还是在客户端中）来驱动页面的状态转移。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("自描述消息")]),e._v("（Self-Descriptive Messages）：由于资源的表征可能存在多种不同形态，在消息中应当有明确的信息来告知客户端该消息的类型以及应如何处理这条消息。一种被广泛采用的自描述方法是在名为“Content-Type”的HTTP Header中标识出"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Media_type",target:"_blank",rel:"noopener noreferrer"}},[e._v("互联网媒体类型"),r("OutboundLink")],1),e._v("（MIME type），譬如“Content-Type : application/json; charset=utf-8”，则说明该资源会以JSON的格式来返回，请使用UTF-8字符集进行处理。")])])]),e._v(" "),r("p",[e._v("除了以上列出的这些看名字不容易弄懂的概念外，在理解REST的过程中，还有一个常见的误区值得注意，Fielding提出REST时所谈论的范围是“架构风格与网络的软件架构设计”（Architectural Styles and Design of Network-based Software Architectures），而不是现在被人们所狭义理解的一种“远程服务设计风格”，这两者的范围差别就好比本书所谈论的话题“软件架构”与本章谈论话题“访问远程服务”的关系那样，前者是后者的一个很大的超集，尽管基于本节的主题和多数人的关注点考虑，我们确实是会以“远程服务设计风格”作为讨论的重点，但至少应该说明清楚它们范围上的差别。")]),e._v(" "),r("h2",{attrs:{id:"restful的系统"}},[e._v("RESTful的系统")]),e._v(" "),r("p",[e._v("如果你已经理解了上面这些概念，我们就可以开始讨论面向资源的编程思想与Fielding所提出的几个具体的软件架构设计原则了。Fielding认为，一套理想的、完全满足REST风格的系统应该满足以下六大原则。")]),e._v(" "),r("ol",[r("li",[r("p",[r("strong",[e._v("服务端与客户端分离")]),e._v("（Client-Server）"),r("br"),e._v("将用户界面所关注的逻辑和数据存储所关注的逻辑分离开来，有助于提高用户界面的跨平台的可移植性，这一点正越来越受到广大开发者所认可，以前完全基于服务端控制和渲染（如JSF这类）框架实际用户已甚少，而在服务端进行界面控制（Controller），通过服务端或者客户端的模版渲染引擎来进行界面渲染的框架（如Struts、SpringMVC这类）也受到了颇大的冲击。这一点主要推动力量与REST可能关系并不大，前端技术（从ES规范，到语言实现，到前端框架等）的近年来的高速发展，使得前端表达能力大幅度加强才是真正的幕后推手。由于前端的日渐强势，现在还流行起由前端代码反过来驱动服务端进行渲染的SSR（Server-Side Rendering）技术，在Serverless、SEO等场景中已经占领了一块领地。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("无状态")]),e._v("（Stateless）"),r("br"),e._v("无状态是REST的一条核心原则，部分开发者在做服务接口规划时，觉得REST风格的服务怎么设计都感觉别扭，很有可能的一种原因是在服务端持有着比较重的状态。REST希望服务器不要去负责维护状态，每一次从客户端发送的请求中，应包括所有的必要的上下文信息，会话信息也由客户端负责保存维护，服务端依据客户端传递的状态来执行业务处理逻辑，驱动整个应用的状态变迁。客户端承担状态维护职责以后，会产生一些新的问题，譬如身份认证、授权等可信问题，它们都应有针对性的解决方案（这部分内容可参见“"),r("a",{attrs:{href:"../system-security"}},[e._v("安全架构")]),e._v("”的内容）。"),r("br"),e._v("但必须承认的现状是，目前大多数的系统都达不到这个要求，往往越复杂、越大型的系统越是如此。服务端无状态可以在分布式计算中获得非常高价值的好处，但大型系统的上下文状态数量完全可能膨胀到让客户端在每次请求时提供变得不切实际的程度，在服务端的内存、会话、数据库或者缓存等地方持有一定的状态成为一种是事实上存在，并将长期存在、被广泛使用的主流的方案。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("可缓存")]),e._v("（Cacheability）"),r("br"),e._v("无状态服务虽然提升了系统的可见性、可靠性和可伸缩性，但降低了系统的网络性。“降低网络性”的通俗解释是某个功能如果使用有状态的设计只需要一次（或少量）请求就能完成，使用无状态的设计则可能会需要多次请求，或者在请求中带有额外冗余的信息。为了缓解这个矛盾，REST希望软件系统能够如同万维网一样，允许客户端和中间的通讯传递者（譬如代理）将部分服务端的应答缓存起来。当然，为了缓存能够正确地运作，服务端的应答中必须明确地或者间接地表明本身是否可以进行缓存、可以缓存多长时间，以避免客户端在将来进行请求的时候得到过时的数据。运作良好的缓存机制可以减少客户端、服务器之间的交互，甚至有些场景中可以完全避免交互，这就进一步提了高性能。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("分层系统")]),e._v("（Layered System）"),r("br"),e._v("这里所指的并不是表示层、服务层、持久层这种意义上的分层。而是指客户端一般不需要知道是否直接连接到了最终的服务器，抑或连接到路径上的中间服务器。中间服务器可以通过负载均衡和共享缓存的机制提高系统的可扩展性，这样也便于缓存、伸缩和安全策略的部署。该原则的典型的应用是内容分发网络（Content Distribution Network，CDN）。如果你是通过网站浏览到这篇文章的话，你所发出的请求一般（假设你在中国国境内的话）并不是直接访问位于GitHub Pages的源服务器，而是访问了位于国内的CDN服务器，但作为用户，你完全不需要感知到这一点。我们将在“"),r("a",{attrs:{href:"../diversion-system"}},[e._v("透明多级分流系统")]),e._v("”中讨论如何构建自动的、可缓存的分层系统。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("统一接口")]),e._v("（Uniform Interface）"),r("br"),e._v("这是REST的另一条核心原则，REST希望开发者面向资源编程，希望软件系统设计的重点放在抽象系统该有哪些资源上，而不是抽象系统该有哪些行为（服务）上。这条原则你可以类比计算机中对文件管理的操作来理解，管理文件可能会进行创建、修改、删除、移动等操作，这些操作数量是可数的，而且对所有文件都是固定的、统一的。如果面向资源来设计系统，同样会具有类似的操作特征，由于REST并没有设计新的协议，所以这些操作都借用了HTTP协议中固有的操作命令来完成。"),r("br"),e._v("统一接口也是REST最容易陷入争论的地方，基于网络的软件系统，到底是面向资源更好，还是面向服务更合适，这事情哪怕是很长时间里都不会有个定论，也许永远都没有。但是，已经有一个基本清晰的结论是：面向资源编程的抽象程度通常更高。抽象程度高意味着坏处是往往距离人类的思维方式更远，而好处是往往通用程度会更好。用这样的语言去诠释REST，大概本身就挺抽象的，笔者还是举个例子来说明：譬如，几乎每个系统都有的登录和注销功能，如果你理解成登录对应于login()服务，注销对应于logout()服务这样两个独立服务，这是“符合人类思维”的；如果你理解成登录是PUT Session，注销是DELETE Session，这样你只需要设计一种“Session资源”即可满足需求，甚至以后对Session的其他需求，如查询登陆用户的信息，就是GET Session而已，其他操作如修改用户信息等都可以被这同一套设计囊括在内，这便是“抽象程度更高”带来的好处。"),r("br"),e._v("想要在架构设计中合理恰当地利用统一接口，Fielding建议系统应能做到每次请求中都包含资源的ID，所有操作均通过资源ID来进行；建议每个资源都应该是自描述的消息；建议通过超文本来驱动应用状态的转移。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("按需代码")]),e._v("（"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Code_on_demand",target:"_blank",rel:"noopener noreferrer"}},[e._v("Code-On-Demand"),r("OutboundLink")],1),e._v("）"),r("br"),e._v("按需代码被Fielding列为一条可选原则。它是指任何按照客户端（譬如浏览器）的请求，将可执行的软件程序从服务器发送到客户端的技术，按需代码赋予了客户端无需事先知道所有来自服务端的信息应该如何处理、如何运行的宽容度。举个具体例子，以前的"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Java_applet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java Applet"),r("OutboundLink")],1),e._v("技术，今天的"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/WebAssembly",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebAssembly"),r("OutboundLink")],1),e._v("等都属于典型的按需代码，蕴含着具体执行逻辑的代码是存放在服务端，只有当客户端请求了某个Java Applet之后，代码才会被传输并在客户端机器中运行，结束后通常也会随即在客户端中被销毁掉。将按需代码列为可选原则的原因并非是它特别难以达到，而更多是出于必要性和性价比的实际考虑。")])])]),e._v(" "),r("p",[e._v("至此，REST中的主要概念与思想原则已经介绍完毕，我们再回过头来讨论本节开篇提出的REST与RPC在思想上的差异。REST的基本思想是面向资源来抽象问题，它与此前流行的编程思想——面向过程的编程在抽象主体上有本质的差别。在REST提出以前，人们设计分布式系统服务的唯一方案就只有RPC，RPC是将本地的方法调用思路迁移到远程方法调用上，开发者是围绕着“远程方法”去设计两个系统间交互的，譬如CORBA、RMI、DCOM，等等。这样做的坏处不仅是“如何在异构系统间表示一个方法”、“如何获得接口能够提供的方法清单”都成了需要专门协议去解决的问题（RPC的三大基本问题之一），更在于服务的每个方法都是完全独立的，服务使用者必须逐个学习才能正确地使用它们。Google在《"),r("a",{attrs:{href:"https://cloud.google.com/apis/design",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google API  Design Guide"),r("OutboundLink")],1),e._v("》中曾经写下这样一段话：")]),e._v(" "),r("blockquote",[r("p",[e._v("Traditionally, people design RPC APIs in terms of API interfaces and methods, such as CORBA and Windows COM. As time goes by, more and more interfaces and methods are introduced. The end result can be an overwhelming number of interfaces and methods, each of them different from the others. Developers have to learn each one carefully in order to use it correctly, which can be both time consuming and error prone")]),e._v(" "),r("p",[e._v("以前，人们面向方法去设计RPC API，譬如CORBA和DCOM，随着时间推移，接口与方法越来越多却又各不相同，开发人员必须了解每一个方法才能正确使用它们，这样既耗时又容易出错。")]),e._v(" "),r("div",{staticClass:"custom-block right"},[r("p",[e._v("—— "),r("a",{attrs:{href:"https://cloud.google.com/apis/design",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google API Deign Guide"),r("OutboundLink")],1),e._v(", 2017")])])]),e._v(" "),r("p",[e._v("REST提出以资源为主体进行服务设计的风格，能为它带来不少好处（自然也有坏处，笔者将在下一节集中谈论REST的不足与争议），譬如：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("降低的服务接口的学习成本。统一接口（Uniform Interface）是REST的重要标志，将对资源的标准操作都映射到了标准的HTTP方法上去，这些方法对于每个资源的用法都是一致的，语义都是类似的，不需要刻意去学习，更不需要有什么Interface Description Language之类的协议存在。")])]),e._v(" "),r("li",[r("p",[e._v("资源天然具有集合与层次结构。以方法为中心抽象的接口，由于方法是动词，逻辑上决定了每个接口都是互相独立的；但以资源为中心抽象的接口，由于资源是名词，天然就可以产生集合与层次结构。举个具体例子，你想像一个商城用户中心的接口设计：用户资源会拥有多个不同的下级的资源，譬如若干条短消息资源、一份用户资料资源、一部购物车资源，购物车中又会有自己的下级资源，譬如多本书籍资源。很容易在程序接口中构造出这些资源的集合关系与层次关系，而且是符合人们长期在单机或网络环境中管理数据的直觉的。相信你不需要专门阅读接口说明书，也能轻易推断出获取用户"),r("code",[e._v("icyfenix")]),e._v("的购物车中的第"),r("code",[e._v("2")]),e._v("本书的REST接口应该表示为：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[e._v("GET /users/icyfenix/cart/2\n")])])])]),e._v(" "),r("li",[r("p",[e._v("REST绑定于HTTP协议。面向资源编程不是必须构筑在HTTP之上，但REST是，这是缺点，也是优点。因为HTTP本来就是面向资源而设计的网络协议，纯粹只用HTTP（而不是SOAP over HTTP那样在再构筑协议）带来的好处是RPC中的Wire Protocol问题就无需再多考虑了，REST将复用HTTP协议中已经定义的概念和相关基础支持来解决问题。HTTP协议已经有效运作了三十年，其相关的技术基础设施已是千锤百炼，无比成熟。而坏处自然是，当你想去考虑那些HTTP不提供的特性时，便会彻底地束手无策。")])]),e._v(" "),r("li",[r("p",[e._v("……")])])]),e._v(" "),r("p",[e._v("以上列举了一些面向资源的优点，笔者并非要证明它比面向过程、面向对象更优秀，是否选用REST的API设计风格，需要权衡的是你的需求场景、你团队的设计和开发人员是否能够适应面向资源的思想来设计软件，来编写代码。在互联网中，面向资源来进行网络传输是这三十年来HTTP协议精心培养出来的用户习惯，如果开发者能够适应REST不太符合人类思维习惯的抽象方式，那REST通常能够更好地匹配在HTTP基础上构建的互联网，在效率与扩展性方面会有可观的收益。")]),e._v(" "),r("h2",{attrs:{id:"rmm成熟度"}},[e._v("RMM成熟度")]),e._v(" "),r("p",[e._v("前面我们花费大量篇幅讨论了REST的思想、概念和指导原则等理论方面的内容，在这个小节里，我们将把重心放在实践上，把目光从整个软件架构设计进一步聚焦到REST接口设计上，以切合本节的题目“REST设计风格”，也顺带填了前面埋下的“如何评价服务是否RESTful”的坑。")]),e._v(" "),r("p",[e._v("《"),r("a",{attrs:{href:"https://book.douban.com/subject/22139962/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RESTful Web APIs"),r("OutboundLink")],1),e._v("》和《"),r("a",{attrs:{href:"https://book.douban.com/subject/2054201/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RESTful Web Services"),r("OutboundLink")],1),e._v("》的作者Leonard Richardson曾提出过一个衡量“服务有多么REST”的Richardson成熟度模型（"),r("a",{attrs:{href:"https://martinfowler.com/articles/richardsonMaturityModel.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Richardson Maturity Model"),r("OutboundLink")],1),e._v("），便于那些原本不使用REST的系统，能够逐步地导入REST。Richardson将服务接口“REST的程度”从低到高，分为0至3级：")]),e._v(" "),r("ol",{attrs:{start:"0"}},[r("li",[e._v("The Swamp of "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Plain_Old_XML",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plain Old XML"),r("OutboundLink")],1),e._v("：完全不REST。另外，关于Plain Old XML这说法，SOAP表示"),r("a",{attrs:{href:"https://baike.baidu.com/item/%E6%84%9F%E8%A7%89%E6%9C%89%E8%A2%AB%E5%86%92%E7%8A%AF%E5%88%B0",target:"_blank",rel:"noopener noreferrer"}},[e._v("感觉有被冒犯到"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("li",[e._v("Resources：开始引入资源的概念。")]),e._v(" "),r("li",[e._v("HTTP Verbs：引入统一接口，映射到HTTP协议的方法上。")]),e._v(" "),r("li",[e._v("Hypermedia Controls：超媒体控制在本文里面的说法是“超文本驱动”，在Fielding论文里的说法是“Hypertext As The Engine Of Application State，HATEOAS”，其实都是指同一件事情。")])]),e._v(" "),r("p",[e._v("笔者借用Martin Fowler撰写的关于RMM成熟度模型的"),r("a",{attrs:{href:"https://martinfowler.com/articles/richardsonMaturityModel.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("文章"),r("OutboundLink")],1),e._v("中的实际例子（原文是XML写的，这里简化为JSON表示），来具体展示一下四种不同程度的REST反应到实际接口中会是怎样的。假设你是一名软件工程师，接到需求（原文中的需求复杂一些，这里简化了）的UserStory描述是这样的：")]),e._v(" "),r("div",{staticClass:"quote"},[r("p",{staticClass:"title"},[e._v("医生预约系统")]),r("p",[e._v("作为一名病人，我想要从系统中得知指定日期内我熟悉的医生是否具有空闲时间，以便于我向该医生预约就诊。")])]),r("h3",{attrs:{id:"第0级"}},[e._v("第0级")]),e._v(" "),r("p",[e._v("医院开放了一个"),r("code",[e._v("/appointmentService")]),e._v("的Web API，传入日期、医生姓名作为参数，可以得到该时间段该名医生的空闲时间，该API的一次HTTP调用如下所示：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token request-line"}},[r("span",{pre:!0,attrs:{class:"token property"}},[e._v("POST")]),e._v(" /appointmentService?action=query HTTP/1.1")]),e._v('\n\n{date: "2020-03-04", doctor: "mjones"}\n')])])]),r("p",[e._v("然后服务器会传回一个包含了所需信息的回应：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v('\n\n[\n\t{start:"14:00", end: "14:50", doctor: "mjones"},\n\t{start:"16:00", end: "16:50", doctor: "mjones"}\n]\n')])])]),r("p",[e._v("得到了医生空闲的结果后，我觉得14:00的时间比较合适，于是进行预约确认，并提交了我的基本信息：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token request-line"}},[r("span",{pre:!0,attrs:{class:"token property"}},[e._v("POST")]),e._v(" /appointmentService?action=comfirm HTTP/1.1")]),e._v('\n\n{\n\tappointment: {date: "2020-03-04", start:"14:00", doctor: "mjones"},\n\tpatient: {name: icyfenix, age: 30, ……}\n}\n')])])]),r("p",[e._v("如果预约成功，那我能够收到一个预约成功的响应：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v('\n\n{\n\tcode: 0,\n\tmessage: "Successful confirmation of appointment"\n}\n')])])]),r("p",[e._v("如果发生了问题，譬如有人在我前面抢先预约了，那么我会在响应中收到某种错误信息：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v('\n\n{\n\tcode: 1\n\tmessage: "doctor not available"\n}\n')])])]),r("p",[e._v("到此，整个预约服务宣告完成，直接明了，我们采用的是非常直观的基于RPC风格的服务设计似乎很容易就解决了所有问题……了吗？")]),e._v(" "),r("h3",{attrs:{id:"第1级"}},[e._v("第1级")]),e._v(" "),r("p",[e._v("第0级是RPC的风格，如果需求永远不会变化，也不会增加，那它完全可以良好地工作下去。但是，如果你不想为预约医生之外的其他操作、为获取空闲时间之外的其他信息去编写额外的方法，或者改动现有方法的接口，那还是应该考虑一下如何使用REST来抽象资源。")]),e._v(" "),r("p",[e._v("通往REST的第一步是引入资源的概念，在API中基本的体现是围绕着资源而不是过程来设计服务，说的直白一点，可以理解为服务的Endpoint应该是一个名词而不是动词。此外，每次请求中都应包含资源的ID，所有操作均通过资源ID来进行，譬如，获取医生指定时间的空闲档期：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token request-line"}},[r("span",{pre:!0,attrs:{class:"token property"}},[e._v("POST")]),e._v(" /doctors/mjones HTTP/1.1")]),e._v('\n\n{date: "2020-03-04"}\n')])])]),r("p",[e._v("然后服务器传回一组包含了ID信息的档期清单，注意，ID是资源的唯一编号，有ID即代表“医生的档期”被视为一种资源：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v('\n\n[\n\t{id: 1234, start:"14:00", end: "14:50", doctor: "mjones"},\n\t{id: 5678, start:"16:00", end: "16:50", doctor: "mjones"}\n]\n')])])]),r("p",[e._v("我还是觉得14:00的时间比较合适，于是又进行预约确认，并提交了我的基本信息：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token request-line"}},[r("span",{pre:!0,attrs:{class:"token property"}},[e._v("POST")]),e._v(" /schedules/1234 HTTP/1.1")]),e._v("\n\n{name: icyfenix, age: 30, ……}\n")])])]),r("p",[e._v("后面预约成功或者失败的响应消息在这个级别里面与之前一致，就不重复了。比起第0级，第1级的特征是引入了资源，通过资源ID作为主要线索与服务交互，但第1级至少还有三个问题并没有解决：一是只处理了查询和预约，如果我临时想换个时间，要调整预约，或者我的病忽然好了，想删除预约，这都需要提供新的服务接口。二是处理结果响应时，只能靠着结果中的"),r("code",[e._v("code")]),e._v("、"),r("code",[e._v("message")]),e._v("这些字段做分支判断，每一套服务都要设计可能发生错误的code，这很难考虑全面，而且也不利于对某些通用的错误做统一处理；三是并没有考虑认证授权等安全方面的内容，譬如要求只有登陆用户才允许查询医生档期时间，某些医生可能只对VIP开放，需要特定级别的病人才能预约，等等。")]),e._v(" "),r("h3",{attrs:{id:"第2级"}},[e._v("第2级")]),e._v(" "),r("p",[e._v("第1级遗留三个问题都可以靠引入统一接口来解决。HTTP协议的七个标准方法是经过精心设计的，只要架构师的抽象能力够用，它们几乎能涵盖资源可能遇到的所有操作场景。REST的做法是把不同业务需求抽象为对资源的增加、修改、删除等操作来解决第一个问题；使用HTTP协议的Status Code，可以涵盖大多数资源操作可能出现的异常，而且Status Code也是可以自定义扩展，以此解决第二个问题；依靠HTTP Header中携带的额外认证、授权信息来解决第三个问题，这个在实战中并没有体现，请参考安全架构中的“"),r("a",{attrs:{href:"../system-security/credentials"}},[e._v("凭证")]),e._v("”相关内容。")]),e._v(" "),r("p",[e._v("按这个思路，获取医生档期，应采用具有查询语义的GET操作进行：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token request-line"}},[r("span",{pre:!0,attrs:{class:"token property"}},[e._v("GET")]),e._v(" /doctors/mjones/schedule?date=2020-03-04&status=open HTTP/1.1")]),e._v("\n")])])]),r("p",[e._v("然后服务器会传回一个包含了所需信息的回应：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v('\n\n[\n\t{id: 1234, start:"14:00", end: "14:50", doctor: "mjones"},\n\t{id: 5678, start:"16:00", end: "16:50", doctor: "mjones"}\n]\n')])])]),r("p",[e._v("我仍然觉得14:00的时间比较合适，于是双进行预约确认，并提交了我的基本信息，用以创建预约，这是符合POST的语义的：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token request-line"}},[r("span",{pre:!0,attrs:{class:"token property"}},[e._v("POST")]),e._v(" /schedules/1234 HTTP/1.1")]),e._v("\n\n{name: icyfenix, age: 30, ……}\n")])])]),r("p",[e._v("如果预约成功，那我能够收到一个预约成功的响应：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("201 Created")])]),e._v("\n\nSuccessful confirmation of appointment\n")])])]),r("p",[e._v("如果发生了问题，譬如有人在我前面抢先预约了，那么我会在响应中收到某种错误信息：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("409 Conflict")])]),e._v("\n\ndoctor not available\n")])])]),r("h3",{attrs:{id:"第3级"}},[e._v("第3级")]),e._v(" "),r("p",[e._v("第2级是目前绝大多数系统所到达的REST级别，但仍不是完美的，至少还存在一个问题：你是如何知道预约mjones医生的档期是需要访问"),r("code",[e._v("/schedules/1234")]),e._v("这个服务Endpoint的？也许你甚至第一时间无法理解为何我会有这样的疑问，这当然是程序代码写的呀！但REST并不认同这种已烙在程序员脑海中许久的想法。RMM中的Hypermedia Controls、Fielding论文中的HATEOAS和现在提的比较多的“超文本驱动”，所希望的是除了第一个请求是有你在浏览器地址栏输入所驱动之外，其他的请求都应该能够自己描述清楚后续可能发生的状态转移，由超文本自身来驱动。所以，当你输入了查询的指令之后：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token request-line"}},[r("span",{pre:!0,attrs:{class:"token property"}},[e._v("GET")]),e._v(" /doctors/mjones/schedule?date=2020-03-04&status=open HTTP/1.1")]),e._v("\n")])])]),r("p",[e._v("服务器传回的响应信息应该包括诸如如何预约档期、如何了解医生信息等可能的后续操作：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v('\n\n{\n\tschedules：[\n\t\t{\n\t\t\tid: 1234, start:"14:00", end: "14:50", doctor: "mjones",\n\t\t\tlinks: [\n\t\t\t\t{rel: "comfirm schedule", href: "/schedules/1234"}\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\tid: 5678, start:"16:00", end: "16:50", doctor: "mjones",\n\t\t\tlinks: [\n\t\t\t\t{rel: "comfirm schedule", href: "/schedules/5678"}\n\t\t\t]\n\t\t}\n\t],\n\tlinks: [\n\t\t{rel: "doctor info", href: "/doctors/mjones/info"}\n\t]\n}\n')])])]),r("p",[e._v("如果做到了第3级REST，那服务端的API和客户端也是完全解耦的，你要调整服务数量，或者同一个服务做API升级将会变得非常简单。")]),e._v(" "),r("h2",{attrs:{id:"不足与争议"}},[e._v("不足与争议")]),e._v(" "),r("p",[e._v("以下是笔者所见过的怀疑REST能否在实践中真正良好应用的部分争议问题，笔者将自己的观点总结如下：")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("面向资源的编程思想只适合做CRUD，面向过程、面向对象编程才能处理真正复杂的业务逻辑")]),r("br"),e._v("这是遇到最多的一个问题。HTTP的四个最基础的命令POST、GET、PUT和DELETE很容易让人直接联想到CRUD操作，以至于在脑海中自然产生了直接的对应。REST所能涵盖的范围当然远不止于此，不过要说POST、GET、PUT和DELETE对应于CRUD其实也没什么不对，只是这个CRUD必须泛化去理解，它们涵盖了信息在客户端与服务端之间如何流动的几种主要方式，所有基于网络的操作逻辑，都可以对应到信息在服务端与客户端之间如何流动来理解，有的场景里比较直观，而另一些场景中可能比较抽象。"),r("br"),e._v("针对那些比较抽象的场景，如果真不好把HTTP方法映射为资源的所需操作，REST也并非刻板的教条，用户是可以使用自定义方法的，按Google推荐的REST API风格，"),r("a",{attrs:{href:"https://cloud.google.com/apis/design/custom_methods",target:"_blank",rel:"noopener noreferrer"}},[e._v("自定义方法"),r("OutboundLink")],1),e._v("应该放在资源路径末尾，嵌入冒号加自定义动词的后缀。譬如，我可以把删除操作映射到标准DELETE方法上，如果此外还要提供一个恢复删除的API，那它可能会被设计为：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("POST /user/user_id/cart/book_id:undelete\n")])])]),r("p",[e._v("如果你不想使用自定义方法，那就设计一个回收站的资源，在那里保留着还能被恢复的商品，将恢复删除视为对该资源某个状态值的修改，映射到PUT或者PATCH方法上，这也是一种完全可行的设计。"),r("br"),e._v("最后，笔者再重复一遍，面向资源的编程思想与另外两种主流编程思想只是抽象问题时所处的立场不同，只有选择问题，没有高下之分：")]),e._v(" "),r("ul",[r("li",[e._v("面向过程编程时，为什么要以算法和处理过程为中心，输入数据，输出结果？当然是为了符合计算机世界中主流的交互方式。")]),e._v(" "),r("li",[e._v("面向对象编程时，为什么要将数据和行为统一起来、封装成对象？当然是为了符合现实世界的主流的交互方式。")]),e._v(" "),r("li",[e._v("面向资源编程时，为什么要将数据（资源）作为抽象的主体，把行为看作是统一的接口？当然是为了符合网络世界的主流的交互方式。")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("REST与HTTP完全绑定，不适合应用于要求高性能传输的场景中")]),r("br"),e._v("笔者个人很大程度上赞同此观点，但并不认为这是REST的缺陷，锤子不能当扳手用并不是锤子的质量有问题。面向资源编程与协议无关，但是REST（特指Fielding论文中所定义的REST，而不是泛指面向资源的思想）的确依赖着HTTP协议的标准方法、状态码、协议头等各个方面。HTTP并不是传输层协议，它是应用层协议，如果仅将HTTP当作传输是不恰当的（SOAP：再次感觉有被冒犯到）。对于需要直接控制传输，如二进制细节、编码形式、报文格式、连接方式等细节的场景中，REST确实不合适，这些场景往往存在于服务集群的内部节点之间，这也是之前曾提及的，REST和RPC尽管应用确有所重合，但重合的范围有多大就是见仁见智的事情。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("REST不利于事务支持")]),r("br"),e._v("这个问题首先要看你怎么看待“事务（Transaction）”这个概念。如果“事务”指的是数据库那种的狭义的刚性ACID事务，那除非完全不持有状态，否则分布式系统本身与此就是有矛盾的（CAP不可兼得），这是分布式的问题而不是REST的问题。如果“事务”是指通过服务协议或架构，在分布式服务中，获得对多个数据同时提交的统一协调能力（2PC/3PC），譬如"),r("a",{attrs:{href:"http://docs.oasis-open.org/ws-tx/wstx-wsat-1.1-spec-errata-os/wstx-wsat-1.1-spec-errata-os.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("WS-AtomicTransaction"),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"http://docs.oasis-open.org/ws-tx/wstx-wscoor-1.1-spec-errata-os/wstx-wscoor-1.1-spec-errata-os.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("WS-Coordination"),r("OutboundLink")],1),e._v("这样的功能性协议，这REST确实不支持，假如你已经理解了这样做的代价，仍决定要这样做的话，Web Service是比较好的选择。如果“事务”只是指希望保障数据的最终一致性，说明你已经放弃刚性事务了，这才是分布式系统中的正常交互方式，使用REST肯定不会有什么阻碍，谈不上“不利于”。当然，对此REST也并没有什么帮助，这完全取决于你系统的事务设计，我们会在"),r("a",{attrs:{href:"../transaction"}},[e._v("事务处理")]),e._v("中再详细讨论。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("REST没有传输可靠性支持")]),r("br"),e._v("是的，并没有。在HTTP中你发送出去一个请求，通常会收到一个与之相对的响应，譬如HTTP/1.1 200 OK或者HTTP/1.1 404 Not Found诸如此类的。但如果你没有收到任何响应，那就无法确定消息到底是没有发送出去，抑或是没有从服务端返回回来，这其中的关键差别是服务端到底是否被触发了某些处理？应对传输可靠性最简单粗暴的做法是把消息再重发一遍。这种简单处理能够成立的前提是服务应具有"),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%86%AA%E7%AD%89",target:"_blank",rel:"noopener noreferrer"}},[e._v("幂等性"),r("OutboundLink")],1),e._v("（Idempotency），即服务被重复执行多次的效果与执行一次是相等的。HTTP协议要求GET、PUT和DELETE应具有幂等性，我们把REST服务映射到这些方法时，也应当保证幂等性。对于POST方法，曾经有过一些专门的提案（如"),r("a",{attrs:{href:"https://tools.ietf.org/html/draft-nottingham-http-poe-00",target:"_blank",rel:"noopener noreferrer"}},[e._v("POE"),r("OutboundLink")],1),e._v("，POST Once Exactly），但并未得到IETF的通过。对于POST的重复提交，浏览器会出现相应警告，如Chrome中“确认重新提交表单”的提示，对于服务端，就应该做预校验，如果发现可能重复，返回HTTP/1.1 425 Too Early。另，Web Service中有"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/WS-ReliableMessaging",target:"_blank",rel:"noopener noreferrer"}},[e._v("WS-ReliableMessaging"),r("OutboundLink")],1),e._v("功能协议用于支持消息可靠投递。类似的，由于REST没有采用额外的Wire Protocol，所以除了事务、可靠传输这些功能以外，一定还可以在WS-*协议中找到很多REST不支持的特性。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("REST缺乏对资源进行“部分”和“批量”的处理能力")]),r("br"),e._v("这个观点笔者是认同的，这很可能是未来面向资源的思想和API设计风格的发展方向。REST开创了面向资源的服务风格，却肯定仍并不完美。以HTTP协议为基础给REST带来了极大的便捷（不需要额外协议，不需要重复解决一堆基础网络问题，等等），但也是HTTP本身成了束缚REST的无形牢笼。这里仍通过具体例子来解释REST这方面的局限性：譬如你仅仅想获得某个用户的姓名，RPC风格中可以设计一个“getUsernameById”的服务，返回一个字符串，尽管这种服务的通用性实在称不上“设计”二字，但确实可以工作；而REST风格中你将向服务端请求整个用户对象，然后丢弃掉返回的结果中该用户除用户名外的其他属性，这便是一种“过度获取”（Overfetching）。REST的应对手段是通过位于中间节点或客户端的缓存来缓解这种问题，但此缺陷的本质是由于HTTP协议完全没有对请求资源的结构化描述能力（但有非结构化的部分内容获取能力，即今天多用于断点续传的"),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Range_requests",target:"_blank",rel:"noopener noreferrer"}},[e._v("Range Header"),r("OutboundLink")],1),e._v("），所以返回资源的哪些内容、以什么数据类型返回等等，都不可能得到协议层面的支持，要做你就只能自己在GET方法的Endpoint上设计各种参数来实现。而另外一方面，与此相对的缺陷是对资源的批量操作的支持，有时候我们不得不为此而专门设计一些抽象的资源才能应对。譬如你准备把某个用户的名字增加一个“VIP”前缀，提交一个PUT请求修改这个用户的名称即可，而你要给1000个用户加VIP时，如果真的去调用1000次PUT，浏览器会回应你HTTP/1.1 429 Too Many Requests，老板则会揍你一顿。此时，你就不得不先创建一个（如名为“VIP-Modify-Task”）任务资源，把1000个用户的ID交给这个任务，最后驱动任务进入执行状态。又譬如你去网店买东西，下单、冻结库存、支付、加积分、扣减库存这一系列步骤会涉及到多个资源的变化，你可能面临不得不创建一种“事务”的抽象资源，或者用某种具体的资源（譬如“结算单”）贯穿这个过程的始终，每次操作其他资源时都带着事务或者结算单的ID。HTTP协议由于本身的无状态性，会相对不适应（并非不能够）处理这类业务场景。"),r("br"),e._v("目前，一种理论上较优秀的可以解决以上这几类问题的方案是"),r("a",{attrs:{href:"https://graphql.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GraphQL"),r("OutboundLink")],1),e._v("，这是由Facebook提出并开源的一种面向资源API的数据查询语言，如同SQL一样，挂了个“查询语言”的名字，但其实CRUD都有涉猎。比起依赖HTTP无协议的REST，GraphQL可以说是另一种“有协议”的、更彻底地面向资源的服务方式。然而凡事都有两面，离开了HTTP，它又面临着几乎所有RPC框架所遇到的那个如何推广交互接口的问题。")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);