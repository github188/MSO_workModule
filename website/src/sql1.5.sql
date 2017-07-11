SELECT  * from h_jf_user
SELECT  * from self_event
SELECT  * from h_j_intention_tourists
SELECT  * from h_f_intention_tourists

/*
发包方行业：
1-成人教育   2-青少儿教育   3-房地产  4-汽车业   5-汽车后市场   6-金融  7-互联网  8-电商平台  9-运营商增值服务
select * from h_f_industry

DROP TABLE IF EXISTS `h_f_industry`;
CREATE TABLE `h_f_industry` (
  `fiid` varchar(100) PRIMARY KEY   COMMENT '发包方行业主键id',
  `finame` varchar(60)  COMMENT '行业名称',
  `filogo` varchar(60)  COMMENT '行业显示图片-一定尺寸的图片url',
  `createtime` varchar(100)  COMMENT '创建时间',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8  COMMENT='发包方行业:1-成人教育   2-青少儿教育   3-房地产  4-汽车业   5-汽车后市场   6-金融  7-互联网  8-电商平台  9-运营商增值服务';


INSERT INTO `h_f_industry` VALUES ('1', '成人教育','','','');
INSERT INTO `h_f_industry` VALUES ('2', '青少儿教育','','','');
INSERT INTO `h_f_industry` VALUES ('3', '房地产','','','');
INSERT INTO `h_f_industry` VALUES ('4', '汽车业','','','');
INSERT INTO `h_f_industry` VALUES ('5', '汽车后市场','','','');
INSERT INTO `h_f_industry` VALUES ('6', '金融','','','');
INSERT INTO `h_f_industry` VALUES ('7', '互联网','','','');
INSERT INTO `h_f_industry` VALUES ('8', '电商平台','','','');
INSERT INTO `h_f_industry` VALUES ('9', '运营商增值服务','','','');
*/


/*
记录首页访问来源  select  * from`h_visit_Record`;
*/
DROP TABLE IF EXISTS `h_visit_Record`;
CREATE TABLE `h_visit_Record` (
  `visitid` varchar(100) PRIMARY KEY  COMMENT '需求包主键id',
  `jfuid` varchar(100)   COMMENT '用户id 对应 h_jf_user-jfuid  基本是空',
  `referrer`  varchar(100) COMMENT '访问网址',  
  `remark` varchar(500) COMMENT '',
  `ip` varchar(100) DEFAULT '' COMMENT '访问ip',
  `createtime` varchar(100)  COMMENT '创建时间  - 访问时间',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8  COMMENT='记录首页访问来源 ';



/*
需求包
*/
DROP TABLE IF EXISTS `h_f_p`;
CREATE TABLE `h_f_p` (
  `pid` varchar(100) PRIMARY KEY  COMMENT '需求包主键id',
  `demandname` varchar(100) DEFAULT '' COMMENT '需求名',
  `demanddescription`  text COMMENT '需求描述 可变长度，最多65535个字符', 
  `fdstate` int(11) DEFAULT 0 COMMENT '发包方需求状态 0(提交中)初始状态(未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回      4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭  8-暂停 ',
  `distributionstate` int(11) DEFAULT 0 COMMENT '后台需求状态 0未分配 1-已分配2-处理中 3-通过 4-驳回  5-驳回再次提交 ',
  `jfuid` varchar(100)   COMMENT '发包方 用户id 对应 h_jf_user-jfuid',
  `demandtype`  INT  COMMENT '需求类型   1-套餐    2-个性化需求', 
  `packageid`  varchar(100) COMMENT 'demandtype 为1-套餐时       对应h_f_package 的主键id',  
  `demandpricetol` decimal(10,2) COMMENT '包总价',
  `releasenum` INT COMMENT '包发布数量',
  `releasetime` varchar(100)  COMMENT '审核通过时间',
  `remark` varchar(500) COMMENT '操作备注      多个备注 用   - 链接',
  `finishnum` INT COMMENT '包完成数量 ',
  `applicationnum` INT COMMENT '包审核通过竞拍数量 ',
  `paymenttime`   varchar(100) DEFAULT NULL COMMENT '结算日期 格式  年月日',    
  `paymentmoney`  decimal(10,2) COMMENT '结算总价 ',    
  `paymentnum` INT COMMENT '结算数量 ',
  `paymentstandard`   varchar(100) DEFAULT NULL COMMENT '结算标准  1-质检结算  2-二访结算',    
  `favorableway` int(11) DEFAULT 0  COMMENT '优惠方式 0-无优惠 1-免手续费',
  `servicetype` varchar(100) DEFAULT '' COMMENT '业务类型      1-销售线索挖掘  2-数据筛选  3-人工客服  4-运营商增值服务 5-到场体验  6-电商代理',
  `begintime`   varchar(100) DEFAULT NULL COMMENT '开始日期 格式  年月日',    
  `endtime`   varchar(100) DEFAULT NULL COMMENT '结束日期 年月日', 
  `pleader`   varchar(100) DEFAULT NULL COMMENT '套餐/项目负责人', 
  `pphone`   varchar(100) DEFAULT NULL COMMENT '套餐/负责人电话', 
  `createtime` varchar(100)  COMMENT '创建时间',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8  COMMENT='需求包 ';

/*
 1-数据筛选  子需求表  Data filtering
*/
DROP TABLE IF EXISTS `h_f_datafiltering`;
CREATE TABLE `h_f_datafiltering` (
  `pcdid` varchar(100) PRIMARY KEY  COMMENT '数据筛选需求包主键id',
  `ordername` varchar(100) DEFAULT '' COMMENT '需求名',
  `pid` varchar(100) DEFAULT '' COMMENT '需求包id',
  `servicetype` varchar(100) DEFAULT '' COMMENT '业务类型      1-销售线索挖掘  2-数据筛选  3-人工客服  4-运营商增值服务 5-到场体验  6-电商代理',
  `industry` varchar(100) DEFAULT '' COMMENT '行业    1-成人教育  2-青少儿教育 3-房地产  4-汽车业  5-汽车后市场  6-金融  7-互联网  8-电商平台  9-运营商增值服务',
  `releasenum` INT COMMENT '需求发布数量 ',
  `cleaningchannel` varchar(100) DEFAULT '' COMMENT '1- 电话',
  `demanddescription`  text COMMENT '需求描述 可变长度，最多65535个字符', 
  `releasetime` varchar(100)  COMMENT '审核通过时间',
  `fdstate` int(11) DEFAULT 0 COMMENT '发包方需求状态 0(提交中)初始状态(未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回      4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭  8-暂停 ',
  `distributionstate` int(11) DEFAULT 0 COMMENT '后台需求状态 0未分配 1-已分配2-处理中 3-通过 4-驳回  5-驳回再次提交 ',
  `jfuid` varchar(100)   COMMENT '发包方 用户id 对应 h_jf_user-jfuid',
  `demandtype`  INT  COMMENT '需求类型   1-套餐    2-个性化需求', 
  `packageid`  varchar(100) COMMENT 'demandtype 为1-套餐时       对应h_f_package 的主键id',  
  `demandpricetol` decimal(10,2) COMMENT '需求总价 ',
  `demandprice` decimal(10,2) COMMENT '需求单价 ',
  `begintime`   varchar(100) DEFAULT NULL COMMENT '开始日期 格式  年月日',    
  `endtime`   varchar(100) DEFAULT NULL COMMENT '结束日期 年月日', 
  `finishtime`   varchar(100) DEFAULT NULL COMMENT '完成日期 年月日', 
  `remark` varchar(500) COMMENT '操作备注      多个备注 用   - 链接',
  `finishnum` INT COMMENT '完成数量 ',
  `applicationnum` INT COMMENT '审核通过竞拍数量 ',
  `paymenttime`   varchar(100) DEFAULT NULL COMMENT '结算日期 格式  年月日',    
  `paymentmoney`  decimal(10,2) COMMENT '结算总价 ',    
  `paymentnum` INT COMMENT '结算数量 ',
  `paymentstandard`   varchar(100) DEFAULT NULL COMMENT '结算标准  1-质检结算  2-二访结算',
  `favorableway` int(11) DEFAULT 0  COMMENT '优惠方式 0-无优惠 1-免手续费',
  `pleader`   varchar(100) DEFAULT NULL COMMENT '套餐/项目负责人', 
  `pphone`   varchar(100) DEFAULT NULL COMMENT '套餐/负责人电话', 
  `createtime` varchar(100)  COMMENT '创建时间',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8  COMMENT='需求包 ';





/*
自定义区域表 
*/
DROP TABLE IF EXISTS `custom_area`;
CREATE TABLE `custom_area` (
  `area_id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `fuid` varchar(100)   COMMENT '所属用户id',
  `area_name` varchar(120) NOT NULL DEFAULT ''  COMMENT '名',
  `area_remark` varchar(500) NOT NULL DEFAULT ''  COMMENT '描述',
  PRIMARY KEY (`area_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3409 DEFAULT CHARSET=utf8 COMMENT='自定义区域表  用户自己定义';
INSERT INTO `custom_area` VALUES ('1','101','一线城市','北京，上海，深圳');








/*
业务类型：1-意向挖掘 2-市场调研 3-意向调研 4-电话销售 5-售后服务6-CPA 7-CPS 8-EDM 9-其他
1.5.2后=====   1-销售线索挖掘  -A  2数据筛选  3-人工客服 4-运营商增值服务  5-到场体验 6-电商代理
*/
DROP TABLE IF EXISTS `h_f_service_type`;
CREATE TABLE `h_f_service_type` (
  `fstid` varchar(100) PRIMARY KEY  COMMENT '发包方行业主键id',
  `fstname` varchar(100) DEFAULT NULL COMMENT '发包方行业主键id',
  `sort` INT DEFAULT 0 COMMENT '排列序列     0-1-2-3 越小越显示在最前方',
  `display` INT DEFAULT 0 COMMENT '前端是否显示   0 显示  1 不显示',
  `open` INT DEFAULT 0 COMMENT '前端是否开放可用   0 开放  1 不开放',
  `introduce` varchar(300)  COMMENT '介绍说明',
  `createtime` varchar(100)  COMMENT '创建时间',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8  COMMENT='业务类型：1-销售线索挖掘  -A  2数据筛选  3-人工客服 4-运营商增值服务  5-到场体验 6-电商代理';

INSERT INTO `h_f_service_type` VALUES ('1', '销售线索挖掘',0,0,0,'通过致电目标群体，以标准话术挖掘意向客户',SYSDATE(),SYSDATE());
INSERT INTO `h_f_service_type` VALUES ('2', '数据筛选',1,0,0,'由甲方提供数据，筛选出意向客户',SYSDATE(),SYSDATE());
INSERT INTO `h_f_service_type` VALUES ('3', '人工客服',2,0,1,'指定坐席人数进行外呼',SYSDATE(),SYSDATE());
INSERT INTO `h_f_service_type` VALUES ('4', '运营商增值服务',3,0,1,'由运营商不定期发布的增值业务任务，如手机套餐，满意度调查',SYSDATE(),SYSDATE());
INSERT INTO `h_f_service_type` VALUES ('5', '到场体验',4,0,1,'以意向客户到达甲方现场为准',SYSDATE(),SYSDATE());
INSERT INTO `h_f_service_type` VALUES ('6', '电商代理',5,0,1,'代理甲方产品进行销售分成',SYSDATE(),SYSDATE());




/*
有意向的游客信息表-发包方
f_intention_tourists  测试库已经创建
*/
DROP TABLE IF EXISTS `h_f_intention_tourists`;
CREATE TABLE `h_f_intention_tourists` (
  `fitid` varchar(100) PRIMARY KEY  COMMENT '有意向的游客信息表-发包方 主键id自增',
  `fiid`  varchar(100) NOT NULL COMMENT '对应   发包方行业(f_industry)fiid',
  `fstid` varchar(100) NOT NULL COMMENT '对应   发包方业务类型(f_service_type)fstid',
  `fitname` varchar(100) DEFAULT NULL COMMENT '称呼-姓名',
  `fitmobilephone` varchar(100) DEFAULT NULL COMMENT '手机号码',
  `fitdemand` text DEFAULT NULL COMMENT '需求介绍       可变长度，最多65535个字符',
  `fitinvitationcode` varchar(120) DEFAULT NULL COMMENT '邀请码',
  `fitstate` INT DEFAULT 0 COMMENT '游客信息当前的状态      0-初始状态  1-已分配  2-跟踪处理中  3-处理完成(已经引导注册)',
  `createtime` varchar(100)  COMMENT '创建时间',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='有意向的游客信息表-发包方';








/*
接包方 所在机构类别表：
1-呼叫中心   2-网络机构推广   3-地推机构  4-其他
*/
DROP TABLE IF EXISTS `h_j_mechanism_category`;
CREATE TABLE `h_j_mechanism_category` (
  `jmcid` varchar(100) PRIMARY KEY   COMMENT '接包方机构类别主键id',
  `jmcname` varchar(100) DEFAULT NULL COMMENT '接包方-机构类别名称',
  `jmclogo` varchar(100) DEFAULT NULL COMMENT '接包方机构类别-显示图片-一定尺寸的图片url',
  `createtime` varchar(100)  COMMENT '创建时间',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8  COMMENT='接包方机构类别:1-呼叫中心   2-网络机构推广   3-地推机构  4-其他';

INSERT INTO `h_j_mechanism_category` VALUES ('1', '呼叫中心','','','');
INSERT INTO `h_j_mechanism_category` VALUES ('2', '网络机构推广','','','');
INSERT INTO `h_j_mechanism_category` VALUES ('3', '地推机构','','','');
INSERT INTO `h_j_mechanism_category` VALUES ('4', '其他','','','');





/*
有意向的游客信息表-接包方
h_j_intention_tourists   测试库已经创建
*/
DROP TABLE IF EXISTS `h_j_intention_tourists`;
CREATE TABLE `h_j_intention_tourists` (
  `jitid` varchar(100) PRIMARY KEY  COMMENT '有意向的游客信息表-发包方 主键id自增',
  `jmcid`  varchar(100) NOT NULL COMMENT '对应   接包方机构类别(j_mechanism_category)jmcid',
  `jitname` varchar(100) DEFAULT NULL COMMENT '称呼-姓名',
  `jitmobilephone` varchar(100) DEFAULT NULL COMMENT '手机号码',
  `jitorganization` varchar(150) DEFAULT NULL COMMENT '机构名称',
  `jitinvitationcode` varchar(120) DEFAULT NULL COMMENT '邀请码',
  `jitstate` INT DEFAULT 0  COMMENT '有意向的游客信息表-接包方当前的状态      0-初始状态  1-已分配  2-跟踪处理中  3-处理完成(已经引导注册)',
  `createtime` varchar(100)  COMMENT '创建时间',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='有意向的游客信息表-接包方';


/*
用户信息表-发包方/接包方
jf_user
*/
DROP TABLE IF EXISTS `h_jf_user`;
CREATE TABLE `h_jf_user` (
  `jfuid` varchar(100) PRIMARY KEY  COMMENT '接包方/发包方 主键',
  `jfutype` varchar(100)  NOT NULL COMMENT '1-发包方   2-接包方',
  `pid`  varchar(100) DEFAULT NULL  COMMENT '是否是子账号       0或者空表示是主账号',
  `jfuname` varchar(120) NOT NULL COMMENT '用户名/昵称-用于登录(3-20 位    不区分大小写)',
  `jfunamelowercase` varchar(120) NOT NULL COMMENT '用户名小写)',
  `jfupassword` varchar(120) NOT NULL COMMENT '密码(密文)用于登录(6-20 位    区分大小写)',
  `jfustate` INT DEFAULT 0 NOT NULL COMMENT '接包方/发包方    0-初始状态(注册未完善资料) 1-填写资料-提交    2-已分配       3-驳回    4-已审核 ',
  `approveremark` varchar(120) DEFAULT NULL COMMENT '审批备注/意见',
  `jfudisable` INT DEFAULT 1 NOT NULL COMMENT '1-启用  2-停用',
  `jfumobilephone` varchar(100) NOT NULL  COMMENT '手机号',
  `jfuinvitationcode` varchar(50)  COMMENT '邀请码',
  `createtime` varchar(100)  COMMENT '创建时间',
  `distributionstate` INT DEFAULT 0 NOT NULL COMMENT '0-初始状态  1-已分配   2-跟踪处理中(注册,完善资料验证中)  3-驳回    4-审核通过处理完成 5-驳回再次提交  ',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='有意向的游客信息表-接包方';







	
 /*
  *  接包方用户详细表
  */
DROP TABLE IF EXISTS `h_j_user_detail`;
CREATE TABLE `h_j_user_detail` (
  `jfuid` varchar(100) PRIMARY KEY COMMENT '发包方 主键  对应 h_jf_user-jfuid',
  `compname` varchar(100) DEFAULT NULL COMMENT '公司名称',
  `realname` varchar(100) DEFAULT NULL COMMENT '您的姓名-昵称',
  `headurl` varchar(120) DEFAULT NULL COMMENT '用户头像图片url',
  `contacts` varchar(100) DEFAULT NULL COMMENT '联系人',
  `contactsphone` varchar(100) DEFAULT NULL COMMENT '联系电话',
  `contactsdep` varchar(100) DEFAULT NULL COMMENT '所属部门',
  `contactsposition` varchar(100) DEFAULT NULL COMMENT '职位',
  `compaddr` varchar(100) DEFAULT NULL COMMENT '公司地址',
  `compind` varchar(100) DEFAULT NULL COMMENT '公司所属行业',
  `compwebsite` varchar(100) DEFAULT NULL COMMENT '公司网站',
  `compemail` varchar(100) DEFAULT NULL COMMENT '电子邮箱',
  `complicense` varchar(100) DEFAULT NULL COMMENT '营业执照',
  `comptaxcer` varchar(100) DEFAULT NULL COMMENT '税务登记证',
  `comporgcode` varchar(100) DEFAULT NULL COMMENT '组织机构代码',
  `fax` varchar(100) DEFAULT NULL COMMENT '传真',
  `postcode` varchar(100) DEFAULT NULL COMMENT '邮政编码',
  `accountname` varchar(100) DEFAULT NULL COMMENT '开户名称',
  `bankaccount` varchar(100) DEFAULT NULL COMMENT '开户行',
  `comaccount` varchar(100) DEFAULT NULL COMMENT '公司账号',
  `companysize` varchar(100) DEFAULT NULL COMMENT '公司规模',
  `dbtype` varchar(100) DEFAULT NULL COMMENT '数据库类型',
  `datacity` text DEFAULT NULL COMMENT '数据分布城市  可多选    {1-上海} json格式',
  `goodpro` varchar(100) DEFAULT NULL COMMENT '擅长项目',
  `createtime` varchar(100)  COMMENT '创建时间',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='接包方-用户明细表';


 
  /*
  *  发包方用户详细表
  */
DROP TABLE IF EXISTS `h_f_user_detail`;
CREATE TABLE `h_f_user_detail` (
  `jfuid` varchar(100) PRIMARY KEY COMMENT '发包方 主键  对应 h_jf_user-jfuid',
  `compname` varchar(100) DEFAULT NULL COMMENT '公司名称',
  `realname` varchar(100) DEFAULT NULL COMMENT '您的姓名-昵称',
  `headurl` varchar(120) DEFAULT NULL COMMENT '用户头像图片url',
  `contacts` varchar(100) DEFAULT NULL COMMENT '联系人',
  `contactsphone` varchar(100) DEFAULT NULL COMMENT '联系电话',
  `contactsdep` varchar(100) DEFAULT NULL COMMENT '所属部门',
  `contactsposition` varchar(100) DEFAULT NULL COMMENT '职位',
  `compaddr` varchar(100) DEFAULT NULL COMMENT '公司地址',
  `compind` varchar(100) DEFAULT NULL COMMENT '公司所属行业',
  `compwebsite` varchar(100) DEFAULT NULL COMMENT '公司网站',
  `compemail` varchar(100) DEFAULT NULL COMMENT '电子邮箱',
  `complicense` varchar(100) DEFAULT NULL COMMENT '营业执照',
  `comptaxcer` varchar(100) DEFAULT NULL COMMENT '税务登记证',
  `comporgcode` varchar(100) DEFAULT NULL COMMENT '组织机构代码',
  `createtime` varchar(100)  COMMENT '创建时间',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='发包方-用户明细表';
  

 
 /*
  *  发包方发布需求表/订单表    竞拍                       需要填写和记录
  */
DROP TABLE IF EXISTS `h_f_demand`;
CREATE TABLE `h_f_demand` (
   `demandid` varchar(100) PRIMARY KEY COMMENT '发包方-需求表-主键  h_f_demand',
   `pid` varchar(100) DEFAULT '' COMMENT '需求包id',
   `jfuid` varchar(100)   COMMENT '发包方 用户id 对应 h_jf_user-jfuid',
   `category1` varchar(100)  COMMENT '类目1  1-线上教育培训  2-线下教育培训  3-房地产  4-汽车  5-汽车后市场   6-金融  7-互联网  8-电商平台  9-运营商增值服务 10-其他行业 ',
   `category2` varchar(100)  COMMENT '类目2  1-电话营销 2-网络营销 3-地推推广',
   `category3` varchar(100)  COMMENT '类目3  1-意向挖掘 2-市场调研 3-意向调研  4-电话销售  5-售后服务  6-其他业务',
   `demandtype`  INT  COMMENT '需求类型   1-套餐    2-个性化需求', 
   `packageid`  varchar(100) COMMENT 'demandtype 为1-套餐时       对应h_f_package 的主键id',  
   `customertype`  varchar(100) DEFAULT NULL  COMMENT '(直客/代理) 客户类型',  
   `ordername` varchar(100) DEFAULT NULL COMMENT '需求标题/套餐名',
   `orderprice` decimal(10,2) COMMENT '需求/套餐单价 ',
   `orderpricetol` decimal(10,2) COMMENT '需求/套餐总价 ',
   `releasenum` INT COMMENT '需求/套餐数量 ',
   `targethumen` varchar(100) DEFAULT NULL COMMENT '套餐/目标人群',  
   `beginage`  INT DEFAULT 0  COMMENT '套餐/对象年龄小',
   `endage`   INT DEFAULT 1 COMMENT '套餐/对象年龄大',
   `targecity`   varchar(100) DEFAULT NULL COMMENT '套餐/目标城市', 
   `begintime`   varchar(100) DEFAULT NULL COMMENT '开始日期 格式  年月日',    
   `endtime`   varchar(100) DEFAULT NULL COMMENT '结束日期 年月日', 
   `standardoperation` varchar(120) DEFAULT NULL COMMENT '套餐/标准话术url',
   `otherreport` varchar(120) DEFAULT NULL COMMENT '其他附件url',
   `pleader`   varchar(100) DEFAULT NULL COMMENT '套餐/项目负责人', 
   `pphone`   varchar(100) DEFAULT NULL COMMENT '套餐/负责人电话', 
   `paytime`   varchar(100) DEFAULT NULL COMMENT '套餐/付款时间 ',     
   `demand`  text DEFAULT NULL COMMENT '需求描述 可变长度，最多65535个字符', 
   `fdstate` INT DEFAULT 0 NOT NULL COMMENT '发包方需求状态 0(提交中)初始状态(未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核用过的需求)]',
   `dremark` varchar(500) COMMENT '操作备注      多个备注 用   - 链接',
   `releasetime` varchar(100)  COMMENT '审核通过时间',
   `finishtime` varchar(100)  COMMENT '完成时间',
   `createtime` varchar(100)  COMMENT '创建时间',
   `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='发包方-发布需求表';





/*
  *  接包方收藏 需求表 已建
  */
DROP TABLE IF EXISTS `h_j_collection_demand`;
CREATE TABLE `h_j_collection_demand` (
  `collectionid` varchar(100)  PRIMARY KEY   COMMENT '收藏id',
  `jfuid` varchar(100)   COMMENT '收藏人-接包方  主键  对应 h_jf_user-jfuid',
  `demandid` varchar(100)  COMMENT '发包方-需求表-主键  h_f_demand',
  `createtime` varchar(100)  COMMENT '收藏时间/创建时间',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='收藏 需求表';


/*
  *  接包方推送 需求表  已建
  */
DROP TABLE IF EXISTS `h_j_push_demand`;
CREATE TABLE `h_j_push_demand` (
  `pushid` varchar(100)  PRIMARY KEY    COMMENT '接包方  主键  对应 h_jf_user-jfuid',
  `jfuid` varchar(100)   COMMENT '接包方  主键  对应 h_jf_user-jfuid',
  `demandid` varchar(100)  COMMENT '发包方-需求表-主键  h_f_demand',
  `pushmode` varchar(100)  COMMENT '推送方式 ',
  `createtime` varchar(100)  COMMENT '推送时间/创建时间',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='推送 需求表';












/*  
package-发包方 套餐表
*/
DROP TABLE IF EXISTS `h_f_package`;
CREATE TABLE `h_f_package` (
   `packageid` varchar(100) DEFAULT NULL COMMENT '需求id',
   `packagename` varchar(100)  COMMENT '套餐名',

	订单单价
	发布数量
	套餐优惠价  （原价 = 单价 X 数量 = 10000元，请填写一个优惠一口价）
	目标城市
	有效时长
	付款时间
	成单需求
	标准术语

   `createtime` varchar(100)  COMMENT '创建时间',
   `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='发包方 套餐表';
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/*
  *  接包方订单表
  */
DROP TABLE IF EXISTS `h_j_order_demand`;
CREATE TABLE `h_j_order_demand` (
  `orderid` varchar(100) PRIMARY KEY COMMENT '接包方-订单表-主键  h_j_order_demand',
  `jfuid` varchar(100)   COMMENT '接包人 主键  对应 h_jf_user-jfuid',
  `demandid` varchar(100)   COMMENT '发包方-需求表-主键  h_f_demand',
  `jdstate` INT DEFAULT 0 NOT NULL COMMENT '(竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭     ',
  `dremark` varchar(500) COMMENT '操作备注      多个备注 用   - 链接',
  `orderprice` decimal(10,2) COMMENT '订单单价  元',
  `auctionnum` INT COMMENT '竞拍数量  个',
  `explicittel` varchar(100)   COMMENT '竞拍-外显号码',
  `executionplan`text DEFAULT NULL COMMENT '接包方计划  {"2016":{"4月3日":"100","4月2日":"100","4月4日":"100","4月5日":"100","4月1日":"100"}}',
  `actualplan`text DEFAULT NULL COMMENT '接包方实际每日统计  h_j_order_executionplan_Actual  {"2016":{"4月3日":"100","4月2日":"100","4月4日":"100","4月5日":"100","4月1日":"100"}}',
  `createtime` varchar(100)  COMMENT '创建时间',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='接包方订单表';

/*
  *  接包方订单表  executionplan  计划实际操作日记表（接包方操作   可能存在多个记录     ）

DROP TABLE IF EXISTS `h_j_order_actualplan`;
CREATE TABLE `h_j_order_actualplan` (
  `jfuid` varchar(100)   COMMENT '接包人 主键  对应 h_jf_user-jfuid',
  `demandid` varchar(100)   COMMENT '发包方-需求表-主键  h_f_demand',
  `actualyear` varchar(100)   COMMENT '对应计划的时间 年份(2016)',
  `actualday` varchar(100)   COMMENT '对应计划的时间 月日(4月2日)',
  `actualnum` INT COMMENT '完成数量 ',
  `actualremark` text DEFAULT NULL COMMENT '完成备注',
  `actualurl` varchar(150) DEFAULT NULL COMMENT '上传的附件url',
  `createtime` varchar(100)  COMMENT '创建时间',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='接包方订单表  executionplan  计划实际操作日记表（接包方操作   可能存在多个记录     ）';
  */

/*
  *  接包方订单表  executionplan  qa db 操作记录表（qs db操作   只存在一个记录  ）
  */
DROP TABLE IF EXISTS `h_j_order_qadb_actualplan`;
CREATE TABLE `h_j_order_qadb_actualplan` (
  `jfuid` varchar(100)   COMMENT '接包人 主键  对应 h_jf_user-jfuid',
  `demandid` varchar(100)   COMMENT '发包方-需求表-主键  h_f_demand',
  `qaactualyear` varchar(100)   COMMENT 'qa对应计划的时间 年份(2016)',
  `qaactualday` varchar(100)   COMMENT 'qa对应计划的时间 月日(4月2日)',
  `qaactualnum` INT COMMENT 'qa完成数量 ',
  `qaactualremark` text DEFAULT NULL COMMENT 'qa完成备注',
  `qaactualurl` varchar(150) DEFAULT NULL COMMENT 'qa上传的附件url',
  `qaadminid` varchar(100)   COMMENT 'qa操作人id 对应管理员操作人',
  `qacreatetime` varchar(100)  COMMENT 'qa创建时间',
  `qaupdatetime` varchar(100)  COMMENT 'qa修改时间',
  `dbactualyear` varchar(100)   COMMENT 'db-对应计划的时间 年份(2016)',
  `dbactualday` varchar(100)   COMMENT 'db-对应计划的时间 月日(4月2日)',
  `dbactualnum` INT COMMENT 'db-完成数量 ',
  `dbactualremark` text DEFAULT NULL COMMENT 'db-完成备注',
  `dbactualurl` varchar(150) DEFAULT NULL COMMENT 'db-上传的附件url',
  `dbadminid` varchar(100)   COMMENT 'db-操作人id 对应管理员操作人',
  `dbcreatetime` varchar(100)  COMMENT 'db-创建时间',
  `dbupdatetime` varchar(100)  COMMENT 'db-修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='接包方订单表  executionplan  qa db 操作记录表（qs db操作   只存在一个记录  ）';




















                             
                             
/*
  *  接包方订单表 完成记录表
  */
DROP TABLE IF EXISTS `h_j_demand_daylog`;
CREATE TABLE `h_j_demand_daylog` (
  `jfuid` varchar(100)   COMMENT '接包人 主键  对应 h_jf_user-jfuid',
  `demandid` varchar(100)   COMMENT '发包方-需求表-主键  h_f_demand',
  
  本次完成的单量为
  点此上传成单报告
  点此上传录音文件
  
  `createtime` varchar(100)  COMMENT '创建/上传时间',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='接包方用户完成金额订单记录表';




/*
  *  接包方用户完成金额订单记录表
  */
DROP TABLE IF EXISTS `h_j_orderamout_log`;
CREATE TABLE `h_j_orderamout_log` (
  `jfuid` varchar(100)   COMMENT '接包人 主键  对应 h_jf_user-jfuid',
  `demandid` varchar(100)   COMMENT '发包方-需求表-主键  h_f_demand',
  `amouttol` varchar(100)   COMMENT '完成总金额累加',
  `amoutavg` varchar(100)   COMMENT '季度完成金额 用于更新接包方会员等级',
  `createtime` varchar(100)  COMMENT '创建/上传时间',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='接包方用户完成金额订单记录表';













