/**
 * 
 */
package com.mso.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.ToppostDao;
import com.mso.model.Toppost;
import com.mso.service.ToppostService;
import com.mso.utils.StringUtil;

/**
 * @author 
 * Method:
 * toTest:
 * Expect:
 * Result:
 * 
 */
@Service("toppostService")@Transactional
public class ToppostServiceImpl implements ToppostService {
	
	@Autowired
	ToppostDao toppostDao;
	
	/**
	 * 官网眸事资讯列表页--置顶四篇文章，是图片加文章的标题
	 */

	@Override
	public List<Toppost> listToppost(Toppost toppost){
		
		List list = toppostDao.getToppost(toppost);
//		List<Toppost> tlist = new ArrayList<Toppost>();
//		if(list!=null&&list.size()!=0){
//			for(int i=0;i<list.size();i++){
//				Object[] o = (Object[]) list.get(i);//只有SQL需要list<Object>转成object[],转存到具体对象         
//				String topid = StringUtil.objCovStr(o[0]);
//				String type = StringUtil.objCovStr(o[1]);
//				String topdirection = StringUtil.objCovStr(o[2]);
//				String topphotourl = StringUtil.objCovStr(o[3]);
//				String photodescrip = StringUtil.objCovStr(o[4]);
//				String url = StringUtil.objCovStr(o[5]);
//				String title = StringUtil.objCovStr(o[6]);
//				String thumbnail = StringUtil.objCovStr(o[7]);
//				
//				Toppost top = new Toppost();
//				top.setTopid(topid);
//				top.setType(type);
//				top.setTopdirection(topdirection);
//				top.setTopphotourl(topphotourl);
//				top.setPhotodescrip(photodescrip);
//				top.setUrl(url);
//				top.setTitle(title);
//				top.setThumbnail(thumbnail);
//				tlist.add(top);
//			}
//		}
		return list;
		
		
	}
	


}
