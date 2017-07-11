package com.mso.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.BaseRegionDao;
import com.mso.model.BaseRegion;
import com.mso.service.BaseRegionService;
import com.mso.utils.Pinyin;
/**
 * 地址  (国家大范围的省，市....)业务实现类
 * @author harry
 *2016-09-11
 */
@Service("baseregionservice")@Transactional
public class BaseRegionServiceImpl implements BaseRegionService{
	
	@Autowired
	BaseRegionDao baseReqiondao; 
	

	public BaseRegionDao getBaseReqiondao() {
		return baseReqiondao;
	}

	public void setBaseReqiondao(BaseRegionDao baseReqiondao) {
		this.baseReqiondao = baseReqiondao;
	}

	@Override
	public List getBaseRegion(BaseRegion  base) {
		return baseReqiondao.getBaseRegion(base);
	}

	@Override
	public void updBaseRegion(BaseRegion basreq){
		List<BaseRegion> list=baseReqiondao.getBaseRegion(basreq);
		if(null!=list && list.size()>0){
			for (BaseRegion baseRegion : list) {
				String regionname=baseRegion.getRegionName();//获取地址名称
				String regionPinyyin=Pinyin.getPinYin(regionname);//将汉字转换为拼音全拼
				String firstpy=Pinyin.getPinYinHeadChar(regionname).toUpperCase();//提取拼音首字母,并使其大写
				String firstWord=firstpy.substring(0, 1);
		        String firstwordSize=firstWord.toUpperCase();//名首字母大写
		        
		        baseRegion.setRegionPinyyin(regionPinyyin);
		        baseRegion.setRegionPy(firstpy);
		        baseRegion.setFirstWord(firstwordSize);
		        baseReqiondao.updBaseRegion(baseRegion);
			}
		}
	}
	
	//截取字符串操作
	public void cutOutString(BaseRegion base){
		//String s=base.getFirstWord();
		  String FirstWord=base.getFirstWord();
			ArrayList<String>  listp =new ArrayList<String>();
			char[] c = FirstWord.toCharArray();
			for (int i = 0;i < c.length;i ++)
			{
				listp.add(c[i]+"");
			}
			base.setRegionTypeFristWord(listp);
	}

	@Override
	public void updBaseRegion2(BaseRegion basreq) {
		 String [] s=new String []{"石家庄","太原","呼和浩特","唐山","大同","包头","秦皇岛","阳泉","乌海","邯郸","长治","赤峰","邢台","晋城","呼伦贝尔","保定","朔州",
		    		"通辽","张家口","忻州","乌兰察布","承德","吕梁","鄂尔多斯","沧州","晋中","巴彦淖尔","廊坊","临汾","衡水","运城","沈阳","长春","哈尔滨","大连","吉林",
		    		"齐齐哈尔","鞍山","四平","牡丹江","抚顺","辽源","佳木斯","本溪","通化","大庆","丹东","白山","伊春","锦州","白城","鸡西","营口","松原","鹤岗",
		    		"阜新","双鸭山","辽阳","七台河","盘锦",	"绥化","铁岭","黑河","朝阳","葫芦岛","南京","杭州","合肥","福州","南昌","济南","无锡","宁波","芜湖","莆田",
                 "赣州","青岛","徐州","温州","蚌埠","泉州","宜春","淄博","常州","绍兴","淮南","厦门","吉安","枣庄","苏州","湖州","马鞍山","漳州","上饶","东营","南通",
                 "嘉兴","淮北","龙岩","抚州","烟台","连云港","金华","铜陵","三明","九江","潍坊","淮安","衢州","安庆","南平","景德镇","济宁","盐城","台州","黄山","宁德",
                 "萍乡","泰安","扬州","丽水","阜阳","新余","威海","镇江","舟山","宿州","鹰潭","日照","泰州","滁州","滨州","宿迁","六安","德州","宣城","聊城","池州",
                 "临沂","亳州","菏泽","莱芜","郑州","v武汉","长沙","开封","黄石","株洲","洛阳","十堰","湘潭","平顶山","荆州","衡阳","安阳","宜昌","邵阳",
                 "鹤壁","襄阳","岳阳","新乡","鄂州","张家界","焦作","荆门","益阳","濮阳","黄冈","常德","许昌","孝感","娄底","漯河","咸宁","郴州","三门峡","随州",
                 "永州","商丘","怀化","周口","驻马店","南阳","信阳","广州","南宁"," 海口","深圳","柳州","三亚","珠海","桂林","儋州","汕头","梧州","三沙","佛山","北海",
                 "韶关","崇左","湛江","来宾","肇庆","贺州","江门","玉林","茂名","百色","惠州","河池","梅州","钦州","汕尾","防城港","河源","贵港","阳江","清远",
                 "东莞","中山","潮州","揭阳","云浮","成都","贵阳","昆明","拉萨","绵阳","六盘水","昭通","昌都","自贡","遵义","曲靖","山南","攀枝花"," 铜仁","玉溪",
                 "日喀则","泸州","毕节","普洱","林芝","德阳","安顺","保山","广元",	"丽江","遂宁",	"临沧","内江","乐山","资阳","宜宾","南充","达州","雅安",
                 "广安","巴中","眉山","西安","兰州","西宁","银川","乌鲁木齐","铜川","嘉峪关","海东",	"石嘴山","克拉玛依","宝鸡","金昌","吴忠","吐鲁番","咸阳",
                 "白银","固原","哈密","渭南","天水","中卫","汉中","酒泉","安康","张掖","商洛","武威","延安","定西","榆林","陇南"," 平凉"," 庆阳",};
							 for(int i=0;i<s.length;i++){
						     if(null!=s[i]){
						    	 basreq.setRegionName(s[i]);
						    	 baseReqiondao.updBaseRegion2(basreq);
					         }
				 }
		}
				
	}
	

