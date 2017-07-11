
/*
登陆 注册转化记录中间表
*/
DROP TABLE IF EXISTS `b_conver_record`;
CREATE TABLE `b_conver_record` (
  `crid` int(100) PRIMARY KEY  auto_increment COMMENT '来源记录  主id',
  `visitid` varchar(200)   COMMENT '来源记录id',
  `jfuid`  varchar(200) COMMENT '对应的用户id',  
  `crtype` varchar(100) COMMENT '1 注册   2 登录',
  `createtime` varchar(100)  COMMENT '创建时间 ',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8  COMMENT='登陆 注册转化记录中间表';








/*
行业动态  列表表
*/
DROP TABLE IF EXISTS `industry_dynamics`;
CREATE TABLE `industry_dynamics` (
  `indyid` int(100) PRIMARY KEY  auto_increment COMMENT '行业动态id',
  `userid` varchar(100)   COMMENT '操作用户userid 对应sys_user USER_ID',
  `title`  varchar(1000) COMMENT '业务标题',  
  `remark` varchar(500) COMMENT '备注',
  `industrytime` varchar(100) DEFAULT '' COMMENT '业务时间',
  `createtime` varchar(100)  COMMENT '创建时间 ',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8  COMMENT='行业动态 ';
/*
平台动态 
*/
DROP TABLE IF EXISTS `platform_dynamics`;
CREATE TABLE `platform_dynamics` (
  `platformid` int(100) PRIMARY KEY  auto_increment COMMENT '平台动态id',
  `userid` varchar(100)   COMMENT '操作用户userid 对应sys_user USER_ID',
  `content`  varchar(1000) COMMENT '业务内容',  
  `titleurl` varchar(500) COMMENT '平台titile图片url',
  `createtime` varchar(100)  COMMENT '创建时间 ',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8  COMMENT='平台动态 ';



/*
手机验证码记录表
*/
DROP TABLE IF EXISTS `sms_code`;
CREATE TABLE `sms_code` (
  `smsid` int(100) PRIMARY KEY  auto_increment COMMENT '主键id',
  `username` varchar(100)   COMMENT '手机号码 对应2.0版本后登录用户账号',
  `smscode`  varchar(1000) COMMENT '验证码',  
  `ip`  varchar(1000) COMMENT 'ip地址',  
  `createtime` varchar(100)  COMMENT '创建时间 ',
  `updatetime` varchar(100)  COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8  COMMENT='手机验证码记录表 ';







