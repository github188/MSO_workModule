ALTER TABLE h_f_demand  MODIFY COLUMN `category2` varchar(100)  COMMENT '获客渠道/类目2  1-电话营销 2-网络营销 3-地推推广';
ALTER TABLE h_f_demand  MODIFY COLUMN `demand` varchar(100)  COMMENT '产品描述 可变长度，最多65535个字符';
ALTER TABLE h_f_demand  MODIFY COLUMN `category3` varchar(100)  COMMENT '业务类型 1-意向挖掘 2-数据清洗  3-包坐席 4-到访';
ALTER TABLE `h_f_demand` ADD COLUMN `demanddescription`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '需求描述' AFTER `paymentday`;
#注释变更
ALTER TABLE `h_f_demand` MODIFY COLUMN `demand`  text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '产品介绍 可变长度，最多65535个字符' AFTER `paytime`;
#优惠方式字段追加
ALTER TABLE `h_f_demand` ADD COLUMN `favorableway`  int(11) NULL DEFAULT NULL COMMENT '优惠方式' AFTER `demanddescription`;





SELECT * FROM `h_f_industry` where finame='线上教育培训';
SELECT * FROM `h_f_industry` where finame='线下教育培训';

update set finame='成人教育' `h_f_industry` where finame='线上教育培训';
update set finame='青少儿教育' `h_f_industry` where finame='线下教育培训';

update set category1='成人教育' `h_f_demand` where finame='线上教育培训';
update set category1='青少儿教育' `h_f_demand` where finame='线下教育培训';
update h_f_demand set orderpricetol=releasenum*orderprice  where (orderpricetol=0 or   ISNULL(orderpricetol));





ALTER TABLE `h_f_demand` MODIFY COLUMN `demanddescription`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '需求描述' AFTER `paymentday`;
ALTER TABLE `h_f_demand` MODIFY COLUMN `favorableway`  int(11) NULL DEFAULT NULL COMMENT '优惠方式 0-无优惠 1-免手续费' AFTER `demanddescription`;











