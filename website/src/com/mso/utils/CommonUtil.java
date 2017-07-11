package com.mso.utils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CommonUtil {

	    public CommonUtil() {
	    }
	    
	    /**
	     * 头像拼接全图片路径
	     */
	    public static String mosaicUserUrl(String src)  {
	    	String url="images/customer/photo.png";
	    	if(StringUtil.isNull(src)){//默认头像图片
	    		url="images/customer/photo.png";
	    	}else{
	    		String image_urlpre=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("image_urlpre");
	    		url =image_urlpre+src;
	    	}
	    	return url;
	    }
	    
	    /**
	     * 拼接全图片路径
	     */
	    public static String mosaicCertificatesUrl(String src)  {
	    	String url="images/public/defaul_img.gif";
	    	if(StringUtil.isNull(src)){//默认头像图片
	    		return "images/public/defaul_img.gif";
	    	}else{
	            String image_urlpre=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("image_urlpre");
	            url =image_urlpre+src;
	    	}
	    	return url;
	    }
	    
	    /**
	     *全图片路径 去掉 绝对路径前缀
	     */
	    public static String replaceUrl(String src)  {
	        String image_urlpre=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("image_urlpre");
	    	if(src.indexOf(src)!=-1){
	    		src=src.replaceAll(image_urlpre,"");
	    	}
	    	return src;
	    }
	    
	    /**
	     * 取得路径前缀
	     */
	    public static String getImageUrlpre()  {
	        String image_urlpre=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("image_urlpre");
	    	return image_urlpre;
	    }
	    
	    /**
	     * 取得路径前缀
	     */
	    public static String getImageUrlOldpre()  {
	        String image_urlpre=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("image_urloldpre");
	    	return image_urlpre;
	    }
	    
	    
	    /** 
	     * 手机号验证 
	     *  
	     * @param  str 
	     * @return 验证通过返回true 
	     */  
	    public static boolean isMobile(String str) {   
	    	System.err.println(str);
	    	  boolean flag = false;
		   	  try{
		         if(11==str.length()){
		           flag = true;
		         }else{
		           flag = false;
		         }	 
//		   	    Pattern regex = Pattern.compile("^(((13[0-9])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8})|(0\\d{2}-\\d{8})|(0\\d{3}-\\d{7})$");
//		   	    Matcher matcher = regex.matcher(str);
//		   	    flag = matcher.matches();
		   	   }catch(Exception e){
		   	     flag = false;
		   	   }
		   	   return flag;
	    }  
	    
	    
	    /**
		  * 验证邮箱
		  * @param email
		  * @return
		  */
		 public static boolean checkEmail(String email){
			  boolean flag = false;
			  try{
				    String check = "^([a-z0-9A-Z]+[-|_|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$";
				    Pattern regex = Pattern.compile(check);
				    Matcher matcher = regex.matcher(email);
				    flag = matcher.matches();
			  }catch(Exception e){
				   flag = false;
			  }
			  return flag;
		 }
	    
}
