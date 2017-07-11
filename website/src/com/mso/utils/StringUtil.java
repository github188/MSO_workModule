package com.mso.utils;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.regex.Pattern;

/**
 * 字符串相关方法
 *
 */
public class StringUtil {

	
	/**
	 * @param valStr
	 * @return String[]
	 */
	public static Long toLong(String valStr){
		Long ints=null;
		if(valStr==null||"".equals(valStr)){
			return ints;
		}else{
			ints=new Long(valStr);
		}
		return ints;
	}
	
	
	/**
	 * @param valStr
	 * @return String[]
	 */
	public static Integer toInteger(String valStr){
		Integer ints=new Integer(0);
		if(null==valStr||"".equals(valStr)){
			return ints;
		}else{
			ints=new Integer(valStr);
		}
		return ints;
	}
	
	/**
	 * @param valStr
	 * @return String[]
	 */
	public static Integer toInteger(Object valStr){
		Integer ints=new Integer(0);
		if(null==valStr||"".equals(valStr)){
			return ints;
		}else{
			ints=new Integer(valStr+"");
		}
		return ints;
	}
	
	 public static boolean isInteger(String value) {
		  try {
		   Integer.parseInt(value);
		   return true;
		  } catch (NumberFormatException e) {
		   return false;
		  }
		 }
	
	/**
	 * @param valStr
	 * @return String[]
	 */
	public static BigDecimal toBigDecimal(String valStr){
		BigDecimal ints=new BigDecimal(0.00);
		if(null==valStr||"".equals(valStr)){
			return ints;
		}else{
			ints=new BigDecimal(valStr);
		}
		ints = ints.setScale(2, RoundingMode.HALF_UP); //保留两位小数 
		return ints;
	}
	
	/**
	 * @param valStr
	 * @return String[]
	 */
	public static String ifNull(String valStr){
		if(valStr==null){
			valStr="";
		}
	    return valStr;
	}
	
	
	/**
	 * @param valStr
	 * @return String[]
	 */
	public static String objCovStr(Object valStr){
		if(valStr==null){
			valStr="";
		}
		String valStr1=valStr+"";
		valStr1=valStr1.trim();
	    return valStr1;
	}
	
	
	/**
	 * @param valStr
	 * @return String[]
	 */
	public static Boolean isNull(String valStr){
		if(valStr==null){
			valStr="";
		}
		if("".equals(valStr)){
			return true;
		}else{
			return false;
		}
	}
	
	public static boolean isNumeric(String str){  
	    Pattern pattern = Pattern.compile("[0-9]*");  
	    return pattern.matcher(str).matches();     
	}  
	public static boolean isNumerics(String str){  
		   for(int i=str.length();--i>=0;){  
		      int chr=str.charAt(i);  
		      if(chr<48 || chr>57)  
		         return false;  
		   }  
		   return true;  
		}
	
	/**
	 * 将以逗号分隔的字符串转换成字符串数组
	 * @param valStr
	 * @return String[]
	 */
	public static String[] StrList(String valStr){
	    int i = 0;
	    String TempStr = valStr;
	    String[] returnStr = new String[valStr.length() + 1 - TempStr.replace(",", "").length()];
	    valStr = valStr + ",";
	    while (valStr.indexOf(',') > 0)
	    {
	        returnStr[i] = valStr.substring(0, valStr.indexOf(','));
	        valStr = valStr.substring(valStr.indexOf(',')+1 , valStr.length());
	        
	        i++;
	    }
	    return returnStr;
	}
	
	/**获取字符串编码
	 * @param str
	 * @return
	 */
	public static String getEncoding(String str) {      
	       String encode = "GB2312";      
	      try {      
	          if (str.equals(new String(str.getBytes(encode), encode))) {      
	               String s = encode;      
	              return s;      
	           }      
	       } catch (Exception exception) {      
	       }      
	       encode = "ISO-8859-1";      
	      try {      
	          if (str.equals(new String(str.getBytes(encode), encode))) {      
	               String s1 = encode;      
	              return s1;      
	           }      
	       } catch (Exception exception1) {      
	       }      
	       encode = "UTF-8";      
	      try {      
	          if (str.equals(new String(str.getBytes(encode), encode))) {      
	               String s2 = encode;      
	              return s2;      
	           }      
	       } catch (Exception exception2) {      
	       }      
	       encode = "GBK";      
	      try {      
	          if (str.equals(new String(str.getBytes(encode), encode))) {      
	               String s3 = encode;      
	              return s3;      
	           }      
	       } catch (Exception exception3) {      
	       }      
	      return "";      
	   } 
	
}
