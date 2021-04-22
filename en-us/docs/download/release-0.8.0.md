---
title: Download - Apache inlong
---

# Download the inlong releases

Use the links below to download the Apache inlong from one of our mirrors.

## inlong
| Date | Version| Comment | Downloads |
|:---:|:--:|:--:|:--:|
| March. 4th, 2021 | 0.8.0 | Source | [[SRC](http://www.apache.org/dyn/closer.lua/incubator/inlong/0.8.0-incubating/apache-inlong-0.8.0-incubating-src.tar.gz)]                 [[PGP](https://downloads.apache.org/incubator/inlong/0.8.0-incubating/apache-inlong-0.8.0-incubating-src.tar.gz.asc)]             [[SHA512](https://downloads.apache.org/incubator/inlong/0.8.0-incubating/apache-inlong-0.8.0-incubating-src.tar.gz.sha512)] |
| |                       | Client | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/inlong/0.8.0-incubating/apache-inlong-client-0.8.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/inlong/0.8.0-incubating/apache-inlong-client-0.8.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/inlong/0.8.0-incubating/apache-inlong-client-0.8.0-incubating-bin.tar.gz.sha512)] |
| |                       | Server | [[TAR](http://www.apache.org/dyn/closer.lua/incubator/inlong/0.8.0-incubating/apache-inlong-server-0.8.0-incubating-bin.tar.gz)]          [[PGP](https://downloads.apache.org/incubator/inlong/0.8.0-incubating/apache-inlong-server-0.8.0-incubating-bin.tar.gz.asc)]      [[SHA512](https://downloads.apache.org/incubator/inlong/0.8.0-incubating/apache-inlong-server-0.8.0-incubating-bin.tar.gz.sha512)] |


## Release Notes

### IMPROVEMENTS:
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [inlong-430](https://issues.apache.org/jira/browse/inlong-430) | Optimizing the implementation of HTTP API for broke  | Major |
| [inlong-445](https://issues.apache.org/jira/browse/inlong-445) | Adjust the status check default sleep interval of pullConsumeReadyChkSliceMs  | Major |
| [inlong-448](https://issues.apache.org/jira/browse/inlong-448) | Add Committer and PPMC operation process  | Major |
| [inlong-449](https://issues.apache.org/jira/browse/inlong-449) | Adjust Example implementation  | Major |
| [inlong-452](https://issues.apache.org/jira/browse/inlong-452) | Optimize rebalance performance | Major |
| [inlong-467](https://issues.apache.org/jira/browse/inlong-467) | Add WEB APIs of Master and Broker | Major |
| [inlong-489](https://issues.apache.org/jira/browse/inlong-489) | Add the maximum message length parameter setting | Major |
| [inlong-495](https://issues.apache.org/jira/browse/inlong-495) | Code implementation adjustment based on SpotBugs check | Major |
| [inlong-511](https://issues.apache.org/jira/browse/inlong-511) | Replace the conditional operator (?:) with mid()  | Major |
| [inlong-512](https://issues.apache.org/jira/browse/inlong-512) | Add package length control based on Topic  | Major |
| [inlong-515](https://issues.apache.org/jira/browse/inlong-515) | Add cluster Topic view web api  | Major |

### BUG FIXES:
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [inlong-437](https://issues.apache.org/jira/browse/inlong-437) | Fix inlong table source sink factory instance creating problem | Major |
| [inlong-441](https://issues.apache.org/jira/browse/inlong-441) | An error occurred when using the inlong class to create a sink table | Major |
| [inlong-442](https://issues.apache.org/jira/browse/inlong-442) | Modifying the jvm parameters when the broker starts does not take effect  | Major    |
| [inlong-443](https://issues.apache.org/jira/browse/inlong-443) | inlongSourceFunction class prints too many logs problem | Major |
| [inlong-446](https://issues.apache.org/jira/browse/inlong-446) | Small bugs fix that do not affect the main logics | Major |
| [inlong-450](https://issues.apache.org/jira/browse/inlong-450) | TubeClientException: Generate producer id failed  | Major |
| [inlong-453](https://issues.apache.org/jira/browse/inlong-453) | inlongSourceFunction class prints too many logs problem | Major |
| [inlong-506](https://issues.apache.org/jira/browse/inlong-506) | cmakelist error | Major |
| [inlong-510](https://issues.apache.org/jira/browse/inlong-510) | Found a bug in MessageProducerExample class | Major |
| [inlong-518](https://issues.apache.org/jira/browse/inlong-518) | fix parameter pass error | Major |
| [inlong-526](https://issues.apache.org/jira/browse/inlong-526) | Adjust the packaging script and version check list, remove the "-WIP" tag | Major |
| [inlong-555](https://issues.apache.org/jira/browse/inlong-555) | short session data can only be written to a specific partition | Major |
| [inlong-556](https://issues.apache.org/jira/browse/inlong-556) | Index value is bigger than the actual number of records | Low |


### TASK:
| JIRA | Summary | Priority |
|:---- |:---- | :--- |
| [inlong-505](https://issues.apache.org/jira/browse/inlong-505) | Remove the "WIP" label of the DISCLAIMER file  | Major |
| [inlong-543](https://issues.apache.org/jira/browse/inlong-543) | Modify the LICENSE statement of multiple files and others  | Major |
| [inlong-557](https://issues.apache.org/jira/browse/inlong-557) | Handle the issues mentioned in the 0.8.0-RC2 review  | Major |
| [inlong-562](https://issues.apache.org/jira/browse/inlong-562) | Update project contents according to the 0.8.0-RC3 review  | Major |

### SUB-TASK:
| JIRA  | Summary  | Priority |
| :---- | :------- | :------- |
| [inlong-428](https://issues.apache.org/jira/browse/inlong-433) | Bumped version to 0.8.0-SNAPSHOT | Major |
| [inlong-433](https://issues.apache.org/jira/browse/inlong-433) | add inlong perf-consumer/producer scripts | Major |
| [inlong-434](https://issues.apache.org/jira/browse/inlong-434) | Adjust Broker API mapping | Major |
| [inlong-435](https://issues.apache.org/jira/browse/inlong-435) | Create Web field Mapping | Major |
| [inlong-436](https://issues.apache.org/jira/browse/inlong-436) | Adjust Broker's HTTP API implementation | Major |
| [inlong-439](https://issues.apache.org/jira/browse/inlong-439) | Add Cli field Scheme definition | Major |
| [inlong-440](https://issues.apache.org/jira/browse/inlong-440) | Add feature package tube-manager to zip  | Major |
| [inlong-444](https://issues.apache.org/jira/browse/inlong-444) | Add consume and produce Cli commands | Major |
| [inlong-447](https://issues.apache.org/jira/browse/inlong-447) | Add Broker-Admin Cli | Major |
| [inlong-451](https://issues.apache.org/jira/browse/inlong-451) | Replace ConsumeTupleInfo with Tuple2  | Major    |
| [inlong-457](https://issues.apache.org/jira/browse/inlong-457) | There is no need to return StringBuilder in Master.java | Major |
| [inlong-463](https://issues.apache.org/jira/browse/inlong-463) | Adjust Master rebalance process implementation  | Major |
| [inlong-464](https://issues.apache.org/jira/browse/inlong-464) | Add parameter rebalanceParallel in master.ini | Major |
| [inlong-470](https://issues.apache.org/jira/browse/inlong-470) | Add query API of TopicName and BrokerId collection  | Major |
| [inlong-471](https://issues.apache.org/jira/browse/inlong-471) | Add query API Introduction of TopicName and BrokerId collection | Major |
| [inlong-472](https://issues.apache.org/jira/browse/inlong-472) | Adjust Broker's AbstractWebHandler class implementation  | Major |
| [inlong-475](https://issues.apache.org/jira/browse/inlong-475) | add the offset clone api of the consume group  | Major |
| [inlong-482](https://issues.apache.org/jira/browse/inlong-482) | Add offset query api  | Major |
| [inlong-484](https://issues.apache.org/jira/browse/inlong-484) | Add query API for topic publication information  | Major |
| [inlong-485](https://issues.apache.org/jira/browse/inlong-485) | Add the batch setting API of consume group offset  | Major |
| [inlong-486](https://issues.apache.org/jira/browse/inlong-486) | Add the delete API of consumer group offset  | Major |
| [inlong-494](https://issues.apache.org/jira/browse/inlong-494) | Update API interface instruction document | Major |
| [inlong-499](https://issues.apache.org/jira/browse/inlong-499) | Add configure store  | Major |
| [inlong-500](https://issues.apache.org/jira/browse/inlong-500) | Add setting operate API  | Major |
| [inlong-501](https://issues.apache.org/jira/browse/inlong-501) | Adjust max message size check logic  | Major |
| [inlong-502](https://issues.apache.org/jira/browse/inlong-502) | Add setting API interface document  | Major |
| [inlong-504](https://issues.apache.org/jira/browse/inlong-504) | Adjust the WebMethodMapper class interfaces  | Major |
| [inlong-508](https://issues.apache.org/jira/browse/inlong-508) | Optimize Broker's PB parameter check processing logic  | Major |
| [inlong-509](https://issues.apache.org/jira/browse/inlong-509) | Adjust the packet length check when data is loaded  | Major |
| [inlong-522](https://issues.apache.org/jira/browse/inlong-522) | Add admin_query_cluster_topic_view API document  | Major |
| [inlong-544](https://issues.apache.org/jira/browse/inlong-544) | Adjust the LICENSE statement in the client.conf files of Python and C/C++ SDK | Major |
| [inlong-546](https://issues.apache.org/jira/browse/inlong-546) | Restore the original license header of the referenced external source files | Major |
| [inlong-547](https://issues.apache.org/jira/browse/inlong-547) | Recode the implementation of the *Startup.java classes in the Tool package | Major |
| [inlong-548](https://issues.apache.org/jira/browse/inlong-548) | Handle the LICENSE authorization of font files in the resources | Major |
| [inlong-549](https://issues.apache.org/jira/browse/inlong-549) | Handling the problem of compilation failure | Major |
| [inlong-550](https://issues.apache.org/jira/browse/inlong-550) | Adjust LICENSE file content | Major |
| [inlong-551](https://issues.apache.org/jira/browse/inlong-551) | Adjust NOTICE file content | Major |
| [inlong-558](https://issues.apache.org/jira/browse/inlong-558) | Adjust the LICENSE of the file header | Major |
| [inlong-559](https://issues.apache.org/jira/browse/inlong-559) | Update the LICENSE file according to the 0.8.0-RC2 review | Major |
| [inlong-560](https://issues.apache.org/jira/browse/inlong-560) | Remove unprepared modules | Major |