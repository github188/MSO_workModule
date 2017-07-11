
update h_f_datafiltering  set jbfprice=demandprice;
update h_f_datafiltering  set jbfpricetol=demandpricetol;

update h_f_demand  set jbfprice=orderprice;
update h_f_demand  set jbfpricetol=orderpricetol;

update h_j_order_demand  set jbfprice=orderprice;


update gx_dba_everyday_statistics set servicetype='数据加工' where servicetype='数据筛选';
update gx_package_manage set servicetype='数据加工' where servicetype='数据筛选';
update gx_qa_everyday_statistics set servicetype='数据加工' where servicetype='数据筛选';
update h_f_datafiltering set servicetype='数据加工' where servicetype='数据筛选';
update h_f_demand set servicetype='数据加工' where servicetype='数据筛选';
update h_f_p set servicetype='数据加工' where servicetype='数据筛选';
update h_f_service_type set servicetype='数据加工' where servicetype='数据筛选';
update h_j_order_demand set servicetype='数据加工' where servicetype='数据筛选';


SELECT count(*) FROM `h_j_order_demand` where jdstate in(2,4,5,6,7); #竞拍订单审核成功的总量    订单数量
SELECT sum(order_num) FROM `gx_j_order_upload_report` where status=6 and dba_check=0 and qa_check=0; #质检成功的订单总量   成单总量
SELECT sum(paymentmoney) FROM `h_j_order_demand` where jdstate in(5,6,7);#订单结算金额的总量    成单金额

















/* 正式库已经修改     成人教育 ，   青少儿教育   ，房地产   汽车后市场   ， 金融互联网  ，  电商平台 ，   运营商增值服务======教育培训，汽车行业，医美行业，房地产，金融，电商，其他*/
/*
 * 正式库存在分类
 成人教育
青少儿教育
其他行业
汽车
电商平台
运营商增值服务
互联网
房地产
汽车后市场
汽车业
金融
 */
/******************************************************************************/

SELECT * FROM `h_f_p` where industry='成人教育';
update h_f_p set twolevindustry='其他' where industry='成人教育';
update h_f_p set industry='教育培训' where industry='成人教育';
SELECT * FROM `h_f_p` where industry='教育培训';

SELECT * FROM `h_f_p` where industry='青少儿教育';
update h_f_p set twolevindustry='其他' where industry='青少儿教育';
update h_f_p set industry='教育培训' where industry='青少儿教育';
SELECT * FROM `h_f_p` where industry='教育培训';
 

SELECT * FROM `h_f_demand` where category1='成人教育';
update h_f_demand set twolevindustry='其他' where category1='成人教育';
update h_f_demand set category1='教育培训' where category1='成人教育';
SELECT * FROM `h_f_demand` where category1='教育培训';

SELECT * FROM `h_f_demand` where category1='青少儿教育';
update h_f_demand set twolevindustry='其他' where category1='青少儿教育';
update h_f_demand set category1='教育培训' where category1='青少儿教育';
SELECT * FROM `h_f_demand` where category1='教育培训';

/******************************************************************************/
SELECT * FROM `h_f_p` where industry='电商平台';
update h_f_p set industry='电商' where industry='电商平台';
SELECT * FROM `h_f_p` where industry='电商';


SELECT * FROM `h_f_demand` where category1='电商平台';
update h_f_demand set category1='电商' where category1='电商平台';
SELECT * FROM `h_f_demand` where category1='电商';


SELECT * FROM `h_f_datafiltering` where industry='电商平台';
update h_f_datafiltering set industry='电商' where industry='电商平台';
SELECT * FROM `h_f_datafiltering` where industry='电商';


/******************************************************************************/





SELECT * FROM `h_f_p` where industry='线下教育培训';
update h_f_p set twolevindustry='线下' where industry='线下教育培训';
update h_f_p set industry='教育培训' where industry='线下教育培训';
SELECT * FROM `h_f_p` where industry='教育培训';


SELECT * FROM `h_f_p` where industry='线上教育培训';
update h_f_p set twolevindustry='线上' where industry='线上教育培训';
update h_f_p set industry='教育培训' where industry='线上教育培训';
SELECT * FROM `h_f_p` where industry='教育培训';


/******************************************************************************/

SELECT * FROM `h_f_p` where industry='青少儿教育';
update h_f_p set threelevindustry='青少儿教育' where industry='青少儿教育';
update h_f_p set industry='教育培训' where industry='青少儿教育';
SELECT * FROM `h_f_p` where industry='教育培训';

SELECT * FROM `h_f_p` where industry='成人教育';
update h_f_p set threelevindustry='成人教育' where industry='成人教育';
update h_f_p set industry='教育培训' where industry='成人教育';
SELECT * FROM `h_f_p` where industry='教育培训';

update h_f_p set industry='汽车行业' where industry='汽车后市场';
update h_f_p set industry='汽车行业' where industry='汽车业';

/******************************************************************************/

SELECT * FROM `h_f_demand` where category1='线下教育培训';
update h_f_demand set twolevindustry='线下' where category1='线下教育培训';
update h_f_demand set category1='教育培训' where category1='线下教育培训';
SELECT * FROM `h_f_demand` where category1='教育培训';


SELECT * FROM `h_f_demand` where category1='线上教育培训';
update h_f_demand set twolevindustry='线上' where category1='线上教育培训';
update h_f_demand set category1='教育培训' where category1='线上教育培训';
SELECT * FROM `h_f_demand` where category1='教育培训';

/******************************************************************************/

SELECT * FROM `h_f_demand` where category1='青少儿教育';
update h_f_demand set threelevindustry='青少儿教育' where category1='青少儿教育';
update h_f_demand set category1='教育培训' where category1='青少儿教育';
SELECT * FROM `h_f_demand` where category1='教育培训';


SELECT * FROM `h_f_demand` where category1='成人教育';
update h_f_demand set threelevindustry='成人教育' where category1='成人教育';
update h_f_demand set category1='教育培训' where category1='成人教育';
SELECT * FROM `h_f_demand` where category1='教育培训';

update h_f_demand set category1='汽车行业' where category1='汽车后市场';
update h_f_demand set category1='汽车行业' where category1='汽车业';

/******************************************************************************/

SELECT * FROM `gx_dba_everyday_statistics` where servicetype='销售线索挖掘';
update gx_dba_everyday_statistics set servicetype='销售线索挖掘' where  servicetype is null or servicetype='';
select * from gx_qa_everyday_statistics  where servicetype='销售线索挖掘';
update gx_qa_everyday_statistics set servicetype='销售线索挖掘' where  servicetype is null or servicetype='';


/*结算模式，除教育行业外，其他行业的结算模式固定为按提交线索数量结算*/

/* 删除草稿箱  原来的*/
SELECT * FROM `h_f_p` where fdstate='0';
SELECT * from h_f_datafiltering where fdstate='0';
SELECT * from h_f_demand where fdstate='0';




