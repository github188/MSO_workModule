/* 正式库已经修改 */
1.h_f_p  修改 servicetype   业务类型      1-销售线索挖掘，  2-数据筛选， 3-人工客服     去掉  4-运营商增值服务 5-到场体验  6-电商代理
update h_f_p set servicetype='销售线索挖掘' where servicetype='潜在客户挖掘';
2.h_f_demand 修改
update h_f_demand set category3='销售线索挖掘' where category3='潜在客户挖掘';

3.releasetime  少了空格  的数据
select  demandid,length(releasetime),releasetime,substring(releasetime,1,10) from  h_f_demand   where 1=1 and releasetime IS NOT NULL and length(releasetime)=18 ;
UPDATE h_f_demand set releasetime=substring(releasetime,1,10) where 1=1  and releasetime IS NOT NULL and length(releasetime)=18;

4.releasetime  少了空格  的数据
select  pid,length(releasetime),releasetime,substring(releasetime,1,10) from  h_f_p   where 1=1 and releasetime IS NOT NULL and length(releasetime)=18 ;
UPDATE h_f_p set releasetime=substring(releasetime,1,10) where 1=1  and releasetime IS NOT NULL and length(releasetime)=18;



 
5. 执行中的订单讲 whetherupload修改成1  修改成1
SELECT * FROM `h_j_order_demand` where whetherupload=0 and jdstate=4;






















#删除用户信息sql 
select * from h_jf_user where jfuid='187' or jfuname='testtest';
#delete from h_jf_user where jfuid='187' or jfuname='testtest';


#删除接包方用户详情信息sql
select * from h_j_user_detail where jfuid in(select jfuid from h_jf_user where jfuid='187' or jfuname='testtest');
#delete from h_j_user_detail where jfuid in(select jfuid from h_jf_user where jfuid='187' or jfuname='testtest');

#删除发包方用户详情信息sql
select * from h_f_user_detail where jfuid in(select jfuid from h_jf_user where jfuid='187' or jfuname='testtest');
#delete from h_f_user_detail  where jfuid in(select jfuid from h_jf_user where jfuid='187' or jfuname='testtest');

#删除对应用户下的需求包信息
select * from h_f_p where jfuid in(select jfuid from h_jf_user where jfuid='187' or jfuname='testtest');
#delete from h_f_p  where jfuid in(select jfuid from h_jf_user where jfuid='187' or jfuname='testtest');

#删除对应用户下的子需求信息
select * from h_f_demand where jfuid in(select jfuid from h_jf_user where jfuid='187' or jfuname='testtest');
#delete from h_f_demand  where jfuid in(select jfuid from h_jf_user where jfuid='187' or jfuname='testtest');

select * from h_f_datafiltering where jfuid in(select jfuid from h_jf_user where jfuid='187' or jfuname='testtest');
#delete from h_f_datafiltering  where jfuid in(select jfuid from h_jf_user where jfuid='187' or jfuname='testtest');

#删除对应包下的子需求信息
select * from h_f_demand where pid in(select pid from h_f_p where pid='201511206CCA80CC' or demandname='客户B-上海-意向挖掘-1511');
#delete from h_f_demand  where pid in(select pid from h_f_p where pid='201511206CCA80CC' or demandname='客户B-上海-意向挖掘-1511');

select * from h_f_datafiltering where pid in(select pid from h_f_p where pid='201511206CCA80CC' or demandname='客户B-上海-意向挖掘-1511');
#delete from h_f_datafiltering  where pid in(select pid from h_f_p where pid='201511206CCA80CC' or demandname='客户B-上海-意向挖掘-1511');


#删除订单信息 1.根据接包方用户 jfuid 或者  jfuname 删除其对应的订单信息
select * from h_j_order_demand where jfuid in(select jfuid from h_jf_user where jfuid='187' or jfuname='testtest');
#delete from h_j_order_demand where jfuid in(select jfuid from h_jf_user where jfuid='187' or jfuname='testtest');

#删除订单信息 2.根据需求包pid 或者需求包名  demandname 删除其对应的订单信息
select * from h_j_order_demand where pid in(select pid from h_f_p where pid='201511206CCA80CC' or demandname='客户B-上海-意向挖掘-1511');
#delete from h_j_order_demand where pid in(select pid from h_f_p where pid='201511206CCA80CC' or demandname='客户B-上海-意向挖掘-1511');

#删除订单信息 2.根据用jfuid 删除订单信息
select * from h_j_order_demand where pid in(select pid from h_f_p where jfuid='187');
#delete from h_j_order_demand where pid in(select pid from h_f_p where jfuid='187');






#删除订单信息 3.1根据子需求 demandid 或者子需求包名  ordername 删除其对应的订单信息
select * from h_j_order_demand where demandid in(select demandid from h_f_demand where demandid='201511206CCA80CC' or ordername='客户B-上海-意向挖掘-1511');
#delete from h_j_order_demand where demandid in(select demandid from h_f_demand where demandid='201511206CCA80CC' or ordername='客户B-上海-意向挖掘-1511');

#删除订单信息 3.2根据子需求 demandid 或者子需求包名  ordername 删除其对应的订单信息
select * from h_j_order_demand where demandid in(select pcdid from h_f_datafiltering where pcdid='20160920061644791' or ordername='123');
#delete from h_j_order_demand where demandid in(select pcdid from h_f_datafiltering where pcdid='20160920061644791' or ordername='123');



#删除订单信息 3.1 根据发包方用户 jfuid 下的订单  删除其对应的订单信息
select * from h_j_order_demand where demandid in(select demandid from h_f_demand where jfuid='187');
#delete from h_j_order_demand where demandid in(select demandid from h_f_demand where jfuid='187');

#删除订单信息 3.2根据子发包方 jfuid删除其对应的订单信息
select * from h_j_order_demand where demandid in(select pcdid from h_f_datafiltering where jfuid='187');
#delete from h_j_order_demand where demandid in(select pcdid from h_f_datafiltering where jfuid='187');











#删除订单的成单报表信息 1.根据接包方用户 jfuid 或者  jfuname 删除其对应的订单信息
select * from gx_j_order_upload_report where jfuid_j in(select jfuid from h_jf_user where jfuid='187' or jfuname='testtest');
#delete from gx_j_order_upload_report where jfuid_j in(select jfuid from h_jf_user where jfuid='187' or jfuname='testtest');

#删除订单的成单报表信息 2.1根据子需求 demandid 或者子需求包名  ordername 删除其对应的订单信息
select * from gx_j_order_upload_report where demandid in(select demandid from h_f_demand where demandid='201511206CCA80CC' or ordername='客户B-上海-意向挖掘-1511');
#delete from gx_j_order_upload_report where demandid in(select demandid from h_f_demand where demandid='201511206CCA80CC' or ordername='客户B-上海-意向挖掘-1511');

#删除订单信息 2.2根据子需求 demandid 或者子需求包名  ordername 删除其对应的订单信息
select * from gx_j_order_upload_report where demandid in(select pcdid from h_f_datafiltering where pcdid='20160920061644791' or ordername='123');
#delete from gx_j_order_upload_report where demandid in(select pcdid from h_f_datafiltering where pcdid='20160920061644791' or ordername='123');



#删除订单的成单报表信息 1.根据接包方用户 jfuid 或者  jfuname 删除其对应的订单信息
select * from gx_j_order_upload_report where orderid ='2015112075CF758C';
#delete from gx_j_order_upload_report where orderid ='2015112075CF758C';





