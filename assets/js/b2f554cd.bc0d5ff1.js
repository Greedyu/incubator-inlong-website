"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1477],{30010:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/apache-inlong-0.11.0","metadata":{"permalink":"/blog/apache-inlong-0.11.0","editUrl":"https://github.com/apache/incubator-inlong-website/edit/master/blog/blog/apache-inlong-0.11.0.md","source":"@site/blog/apache-inlong-0.11.0.md","title":"Apache InLong 0.11.0","description":"Apache InLong (incubating)  has been renamed from the original Apache TubeMQ (incubating) from 0.9.0.  With the name change,  InLong has also been upgraded from a single message queue to a one-stop integration framework for massive data.  InLong supports data collection,  aggregation,  caching,  and sorting,  users can import data from the data source to the real-time computing engine or land to offline storage with a simple configuration.","date":"2022-03-02T10:01:29.000Z","formattedDate":"March 2, 2022","tags":[],"readingTime":4.915,"truncated":false,"authors":[],"frontMatter":{"title":"Apache InLong 0.11.0","sidebar_position":2},"nextItem":{"title":"Apache InLong 0.12.0","permalink":"/blog/apache-inlong-0.12.0"}},"content":"Apache InLong (incubating)  has been renamed from the original Apache TubeMQ (incubating) from 0.9.0.  With the name change,  InLong has also been upgraded from a single message queue to a one-stop integration framework for massive data.  InLong supports data collection,  aggregation,  caching,  and sorting,  users can import data from the data source to the real-time computing engine or land to offline storage with a simple configuration.\\nThe just-released version `0.11.0-incubating` is the third version after the name changed.  This version includes next features:\\n- Lower the user\'s threshold for use further.  Support all modules of InLong to be deployed on Kubernetes,  and refactor the official website,  so that users can more easily access related documents.\\n- Support more usage scenarios,  increase the data flow direction of `Dataproxy -> Pulsar`,  and cover scenarios with higher requirements for data integrity and consistency.\\n- Supports SDKs in more languages for TubeMQ.  This version opens the production-level TubeMQ Go SDK, which is convenient for users who use the Go language to access\\n\\nThis version closed more than 80 issues, including four significant features and 35 improvements.\\n\\n### Apache InLong(incubating) Introduction\\n[Apache InLong](https://inlong.apache.org) is a one-stop integration framework for massive data donated by Tencent to the Apache community.  It provides automatic,  safe,  reliable,  and high-performance data transmission capabilities to facilitate the construction of streaming-based data analysis,  modeling,  and applications.  \\nThe Apache InLong project was originally called TubeMQ,  focusing on high-performance,  low-cost message queuing services.  In order to further release the surrounding ecological capabilities of TubeMQ,  we upgraded the project to InLong,  focusing on creating a one-stop integration framework for massive data.\\n\\nApache InLong uses TDBank internally used by Tencent as the prototype,  and relies on trillion-level data access and processing capabilities to integrate the entire process of data collection,  aggregation,  storage,  and sorting data processing.  It is simple to use,  flexible to expand,  stable and reliable characteristic.\\n<img src=\\"/img/inlong-structure-en.png\\" align=\\"center\\" alt=\\"Apache InLong\\"/>\\n\\nApache InLong serves the entire life cycle from data collection to landing,  and provides different processing modules according to different stages of data,  including the next modules:\\n- **inlong-agent**,  data collection agent, supports reading regular logs from specified directories or files and reporting data one by one.  In the future,  DB collection and HTTP reporting capabilities will also be expanded.\\n- **inlong-dataproxy**,  a Proxy component based on Flume-ng,  supports data transmission blocking,  placing retransmission, and has the ability to forward received data to different MQ (message queues).\\n- **inlong-tubemq**,  Tencent\'s self-developed message queuing service,  focuses on high-performance storage and transmission of massive data in big data scenarios and has a relatively good core advantage in mass practice and low cost.\\n- **inlong-sort**,  after consuming data from different MQ services,  perform ETL processing,  and then aggregate and write the data into Apache Hive, ClickHouse,  Hbase,  IceBerg,  etc.\\n- **inlong-manager**, provides complete data service management and control capabilities,  including metadata,  OpenAPI,  task flow,  authority,  etc.\\n- **inlong-website**, a front-end page for managing data access,  simplifying the use of the entire InLong control platform.\\n\\n### What\u2019s New in Apache InLong(incubating) 0.11.0\\n#### InLong on Kubernetes \\nApache InLong includes multiple components such as data collection,  data aggregation,  data caching,  data sorting,  and cluster management and control.  In order to facilitate users to use and support cloud-native features,  all components currently support deployment in Kubernetes.\\nThanks to @shink for contributing to this feature.  For specific details,  please refer to [INLONG-1308](https://github.com/apache/incubator-inlong/issues/1308).\\n\\n#### Open up dataproxy->pulsar data flow\\nBefore version 0.11.0,  InLong\'s data caching layer could only support TubeMQ.  TubeMQ is very suitable for scenarios with huge data volumes,  but in extreme scenarios,  there may be a small amount of data loss. To provide data reliability, the Inlong added support for Apache Pulsar in version 0.11.0.  Now InLong backend can support data flow `agent -> dataProxy -> tubeMQ/pulsar -> sort.` The introduction of Pulsar makes the application scenarios covered by InLong more abundant,  which could meet the needs of more users.\\nThanks to @baomingyu for his contribution to this feature.  For more details,  please refer to [INLONG-1330](https://github.com/apache/incubator-inlong/issues/1330).\\n\\n#### Go SDK for InLong TubeMQ\\nBefore version 0.11.0,  InLong TubeMQ supports SDKs in three languages:  Java,  C++,  and Python.  With more and more applications of Go language,  the demand for Go language SDK in the community is also increasing. Version 0.11.0 was officially introduced to the Go language SDK of TubeMQ.  The multilingual SDK is enriched,  and the difficulty of access and use for Go language users is also reduced.\\nThanks to @TszKitLo40 for contributing to this feature. For more details, please refer to:\\n- [INLONG-624](https://github.com/apache/incubator-inlong/issues/624)\\n- [INLONG-1578](https://github.com/apache/incubator-inlong/issues/1570)\\n- [INLONG-1584](https://github.com/apache/incubator-inlong/issues/1584)\\n- [INLONG-1666](https://github.com/apache/incubator-inlong/issues/1666)\\n- [INLONG-1682](https://github.com/apache/incubator-inlong/issues/1682)\\n\\n#### refactor the official website\\nIn version 0.11.0,  InLong uses Docusaurus to refactor the [official website](https://inlong.apache.org/) to provide a more concise and intuitive document management and display.\\nThanks to @leezng for his contribution to this feature. For more details,  please refer to:\\n- [INLONG-1631](https://github.com/apache/incubator-inlong/issues/1631)\\n- [INLONG-1632](https://github.com/apache/incubator-inlong/issues/1632)\\n- [INLONG-1633](https://github.com/apache/incubator-inlong/issues/1633)\\n- [INLONG-1634](https://github.com/apache/incubator-inlong/issues/1634)\\n- [INLONG-1635](https://github.com/apache/incubator-inlong/issues/1635)\\n- [INLONG-1636](https://github.com/apache/incubator-inlong/issues/1636)\\n- [INLONG-1637](https://github.com/apache/incubator-inlong/issues/1637)\\n- [INLONG-1638](https://github.com/apache/incubator-inlong/issues/1638)\\n\\nIn addition to the above major features,  InLong 0.11.0 version has other key improvements,  including but not limited to:\\n- Added contribution guidelines in the main Repo,  [INLONG-1623](https://github.com/apache/incubator-inlong/issues/1623)\\n- Add Inlong-Manager to DataProxy configuration management, [INLONG-1595](https://github.com/apache/incubator-inlong/issues/1595)\\n- Optimized the GitHub issue template, [INLONG-1585](https://github.com/apache/incubator-inlong/issues/1585)\\n- Code Checkstyle optimization, [INLONG-1571](https://github.com/apache/incubator-inlong/issues/1571), [INLONG-1593](https://github.com/apache/incubator-inlong/issues/1593), [INLONG-1593](https://github.com/apache/incubator-inlong/issues/1593), [INLONG-1662](https://github.com/apache/incubator-inlong/issues/1662)\\n- Agent introduces message filter, [INLONG-1641](https://github.com/apache/incubator-inlong/issues/1641)\\n\\nThe 0.11.0 version also fixes ~45 bugs. Thanks to all the contributions who have contributed to the Inlong community (in no particular order):\\n- shink\\n- baomingyu\\n- TszKitLo40\\n- leezng\\n- ruanwenjun\\n- leo65535\\n- luchunliang\\n- pierre94\\n- EMsnap\\n- dockerzhang\\n- gosonzhang\\n- healchow\\n- guangxuCheng\\n- yuanboliu\\n\\n### Apache InLong(incubating) follow-up planning\\nIn the subsequent version planning of InLong, we will further release the capabilities of InLong to cover more usage scenarios, mainly including\\n- Support Apache Pulsar full link data access capabilities, including back-end processing and front-end management capabilities.\\n- Support data flow such as ClickHouse,  Apache Iceberg,  Apache HBase, etc."},{"id":"/apache-inlong-0.12.0","metadata":{"permalink":"/blog/apache-inlong-0.12.0","editUrl":"https://github.com/apache/incubator-inlong-website/edit/master/blog/blog/apache-inlong-0.12.0.md","source":"@site/blog/apache-inlong-0.12.0.md","title":"Apache InLong 0.12.0","description":"InLong: the sacred animal in Chinese myths stories, draws rivers into the sea, as a metaphor for the InLong system to provide data access capabilities.","date":"2022-03-02T10:01:29.000Z","formattedDate":"March 2, 2022","tags":[],"readingTime":5.15,"truncated":false,"authors":[],"frontMatter":{"title":"Apache InLong 0.12.0","sidebar_position":1},"prevItem":{"title":"Apache InLong 0.11.0","permalink":"/blog/apache-inlong-0.11.0"}},"content":"InLong: the sacred animal in Chinese myths stories, draws rivers into the sea, as a metaphor for the InLong system to provide data access capabilities.\\n\\nApache InLong is a one-stop integration framework for massive data that provides automatic, secure and reliable data transmission capabilities. InLong supports both batch and stream data processing at the same time, which offers great power to build data analysis, modeling and other real-time applications based on streaming data.\\nThe 0.12.0-incubating just released mainly includes the following:\\n- Provide automatic, safe, reliable and high-performance data transmission capabilities, while supporting batch and streaming\\n- Refactor the document structure of the official website to facilitate users to consult related documents based on the main line\\n- The whole process supports Pulsar data flow, and completes the whole process coverage of high-performance and high-reliability scenarios\\n- Full-process support indicators, including JMX and Prometheus output\\n- The first phase of data audit and reconciliation, write audit data to MySQL\\n\\nThis version closed about 120+ issues, including four major features and 35 improvements.\\n\\n\\n### Apache InLong(incubating) Introduction\\n[Apache InLong](https://inlong.apache.org) is a one-stop integration framework for massive data donated by Tencent to the Apache community.  It provides automatic,  safe,  reliable,  and high-performance data transmission capabilities to facilitate the construction of streaming-based data analysis,  modeling,  and applications.  \\nThe Apache InLong project was originally called TubeMQ,  focusing on high-performance,  low-cost message queuing services.  In order to further release the surrounding ecological capabilities of TubeMQ,  we upgraded the project to InLong,  focusing on creating a one-stop integration framework for massive data.\\n\\nApache InLong uses TDBank internally used by Tencent as the prototype,  and relies on trillion-level data access and processing capabilities to integrate the entire process of data collection,  aggregation,  storage,  and sorting data processing.  It is simple to use,  flexible to expand,  stable and reliable characteristic.\\n<img src=\\"/img/inlong-structure-en.png\\" align=\\"center\\" alt=\\"Apache InLong\\"/>\\n\\nApache InLong serves the entire life cycle from data collection to landing,  and provides different processing modules according to different stages of data,  including the next modules:\\n- **inlong-agent**,  data collection agent, supports reading regular logs from specified directories or files and reporting data one by one.  In the future,  DB collection and HTTP reporting capabilities will also be expanded.\\n- **inlong-dataproxy**,  a Proxy component based on Flume-ng,  supports data transmission blocking,  placing retransmission, and has the ability to forward received data to different MQ (message queues).\\n- **inlong-tubemq**,  Tencent\'s self-developed message queuing service,  focuses on high-performance storage and transmission of massive data in big data scenarios and has a relatively good core advantage in mass practice and low cost.\\n- **inlong-sort**,  after consuming data from different MQ services,  perform ETL processing,  and then aggregate and write the data into Apache Hive, ClickHouse,  Hbase,  IceBerg,  etc.\\n- **inlong-manager**, provides complete data service management and control capabilities,  including metadata,  OpenAPI,  task flow,  authority,  etc.\\n- **inlong-website**, a front-end page for managing data access,  simplifying the use of the entire InLong control platform.\\n\\n### What\u2019s New in Apache InLong(incubating) 0.12.0\\n#### 1. Support Apache Pulsar data cache\\nIn version 0.12.0, we have completed the data reporting capability of FileAgent\u2192DataProxy\u2192Pulsar\u2192Sort. So far, InLong supports high-performance and high-reliability data access scenarios: Compared with the high-throughput TubeMQ, Apache Pulsar can provide better data consistency and is more suitable for scenarios that require extremely high data reliability. For example, finance and billing.\\n<img src=\\"/img/pulsar-arch-en.png\\" align=\\"center\\" alt=\\"Report via Pulsar\\"/>\\n\\nThanks to @healzhou, @baomingyu, @leezng, @bruceneenhl, @ifndef-SleePy and others for their contributions to this feature. For more information, please refer to [INLONG-1310](https://github.com/apache/)incubator-inlong/issues/1310), please refer to [Pulsar usage example](https://inlong.apache. org/zh -CN/docs/next/quick_start/pulsar_example/) to get the usage guide.\\n\\n#### 2. Support JMX and Prometheus metrics\\nIn addition to the existing file output metrics, the various components of InLong began to gradually support the output of JMX and Prometheus metrics to improve the visibility of the entire system. Currently, modules including Agent, DataProxy, TubeMQ, Sort-Standalone, etc. already support the above metrics, and the documentation of metrics output by each module is being sorted out.\\n\\nThanks to @shink, @luchunliang, @EMsnap, @gosonzhang and others for their contributions. For related PRs, please see [INLONG-1712](https://github.com/apache/incubator-inlong/issues/1712), [INLONG-1786] (https://github.com/apache/incubator-inlong/issues/1786), [INLONG-1796](https://github.com/apache/incubator-inlong/issues/1796), [INLONG-1827] (https://github.com/apache/incubator-inlong/issues/1827), [INLONG-1851](https://github.com/apache/incubator-inlong/issues/1851), [INLONG-1926] (https://github.com/apache/incubator-inlong/issues/1926).\\n\\n#### 3. Function extension of the modules\\nThe Sort module adds support for Apache Doris storage and realizes the ability to load sorted data into Apache Doris, giving InLong one more storage option. In addition, in order to enrich the functions of the entire data access process, the Audit and Sort-Standalone modules have been added:\\n- The Audit module provides the ability to reconcile the entire process of data flow, and monitor the service quality of the system through data flow indicators;\\n- Sort-Standalone module is a non-Flink-based data sorting module. It adds lightweight data sorting capabilities to the system, facilitating the rapid construction and use of businesses.\\n\\nThe Audit and Sort-Standalone modules are still under development and will be released when the version is stable.\\n\\nThanks to @huzk8, @doleyzi, @luchunliang and others for their contributions, please refer to [INLONG-1821](https://github.com/apache/incubator-inlong/issues/1821), [INLONG-1738]( https: / /github.com/apache/incubator-inlong/issues/1738), [INLONG-1889](https://github.com/apache/incubator-inlong/issues/1889).\\n\\n#### 4. Official website document directory reconstruction\\nIn addition to the improvement of functional modules in version 0.12.0, the official website structure and the use of documents have also been deeply adjusted, including the reconstruction of the document directory structure, supplementing and improving the function introduction of each module, adding document translation, and further improving the documentation of the InLong official website. Readability, to achieve quick search and easy reading. You can check the official website to understand this content. The document is still under construction. We welcome your valuable comments or suggestions.\\n\\nThanks to @bluewang, @dockerzhang, @healchow and others for their contributions, please refer to [INLONG-1711](https://github.com/apache/incubator-inlong/issues/1711), [INLONG-1740](https: //github.com/apache/incubator-inlong/issues/1740), [INLONG-1802](https://github.com/apache/incubator-inlong/issues/1802), [INLONG-1809](https: //github.com/apache/incubator-inlong/issues/1809), [INLONG-1810](https://github.com/apache/incubator-inlong/issues/1810), [INLONG-1815](https: //github.com/apache/incubator-inlong/issues/1815), [INLONG-1822](https://github.com/apache/incubator-inlong/issues/1822), [INLONG-1840](https: //github.com/apache/incubator-inlong/issues/1840), [INLONG-1856](https://github.com/apache/incubator-inlong/issues/1856), [INLONG-1861](https: //github.com/apache/incubator-inlong/issues/1861), [INLONG-1867](https://github.com/apache/incubator-inlong/issues/1867), [INLONG-1878](https: //github.com/apache/incubator-inlong/issues/1878), [INLONG-1901](https://github.com/apache/incubator-inlong/issues/1901), [INLONG-1939](https: //gith ub.com/apache/incubator-inlong/issues/1939).\\n\\n#### 5. Other features and bug fixes\\nFor related content, please refer to [Version Release Notes](https://github.com/apache/incubator-inlong/blob/0.12.0-incubating-RC0/CHANGES.md), which lists the detailed features of this version, Improvements, bug fixes, and specific contributors.\\n\\n\\n### Apache InLong(incubating) follow-up planning\\nIn subsequent versions, we will further enhance the capabilities of InLong to cover more usage scenarios, including:\\n- Support link for data access ClickHouse\\n- Support DB data collection\\n- The second stage full link indicator audit function"}]}')}}]);