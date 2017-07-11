package com.mso.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.UUID;

/** 
 * 说明：日期处理
 * 创建人：FH Q313596790
 * 修改时间：2015年11月24日
 * @version
 */
public class DateUtil {
	
	private final static SimpleDateFormat sdfYear = new SimpleDateFormat("yyyy");
	private final static SimpleDateFormat sdfDay = new SimpleDateFormat("yyyy-MM-dd");
	
	private final static SimpleDateFormat sdfMoth = new SimpleDateFormat("yyyy-MM");
	private final static SimpleDateFormat sdfDays = new SimpleDateFormat("yyyyMMdd");
	private final static SimpleDateFormat sdfTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	private final static SimpleDateFormat idTime = new SimpleDateFormat("yyyyMMddhhmmssSSS");

	/**
	 * 获取YYYY格式
	 * @return
	 */
	public static String getYear() {
		return sdfYear.format(new Date());
	}

	/**
	 * 获取YYYY-MM-DD格式
	 * @return
	 */
	public static String getDay() {
		return sdfDay.format(new Date());
	}
	
	
	
	/**
	 * 获取上一个月的日期
	 * @return
	 */
	public static String getPreM() {
		    Date now = new Date();
		    return sdfMoth.format(getLastDate(now));
		    
	}
    private static Date getLastDate(Date date) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        cal.add(Calendar.MONTH, -1);
        return cal.getTime();
    }
    
    
	/**
	 * 获取YYYY-MM格式
	 * @return
	 */
	public static String getCurrMouth() {
		return sdfMoth.format(new Date());
	}
	/**
	 * 获取YYYY-MM格式
	 * @return
	 */
	public static String getCurrYear() {
		return sdfYear.format(new Date());
	}
	
	/**
	 * 获取yyyyMMddhhmmssSSS格式
	 * @return
	 */
	public static String getIdDay() {
		return idTime.format(new Date());
	}

	
	
	/**
	 * 取得3字母加3位数字  验证码
	 * @return
	 */
	public static String getInvitationcodeDay() {
		String uuid=DateUtil.getUuid().toUpperCase();
		String dateid=DateUtil.getIdDay();
		String subuuid=uuid.substring(uuid.length()-3, uuid.length());
		String subdateid=dateid.substring(dateid.length()-3, dateid.length());
		String code=subuuid+subdateid;
		return code;
	}

	
	/**
	 * 取得6位纯数字邀请码 
	 * @return
	 */
	public static String getCode() {
		String dateid=DateUtil.getIdDay();
		String subdateid=dateid.substring(dateid.length()-6, dateid.length());
		return subdateid;
	}
	

	/**
	 * 获取YYYY-MM-DD格式
	 * @return
	 */
	public static String getDay(Date date) {
		return sdfDay.format(date);
	}
	
	/**
	 * 获取YYYYMMDD格式
	 * @return
	 */
	public static String getDays(){
		return sdfDays.format(new Date());
	}

	/**
	 * 获取YYYY-MM-DD HH:mm:ss格式
	 * @return
	 */
	public static String getTime() {
		return sdfTime.format(new Date());
	}

	/**
	* @Title: compareDate
	* @Description: TODO(日期比较，如果s>=e 返回true 否则返回false)
	* @param s
	* @param e
	* @return boolean  
	* @throws
	* @author fh
	 */
	public static boolean compareDate(String s, String e) {
		if(fomatDate(s)==null||fomatDate(e)==null){
			return false;
		}
		return fomatDate(s).getTime() >=fomatDate(e).getTime();
	}

	
	
	/**
	* @Title: compareDate
	* @Description: TODO(日期比较，如果s>e 返回true 否则返回false)
	* @param s
	* @param e
	* @return boolean  
	* @throws
	* @author fh
	 */
	public static boolean compareDateD(String s, String e) {
		if(fomatDate(s)==null||fomatDate(e)==null){
			return false;
		}
		return fomatDate(s).getTime() >fomatDate(e).getTime();
	}
	/**
	 * 格式化日期
	 * @return
	 */
	public static Date fomatDate(String date) {
		DateFormat fmt = new SimpleDateFormat("yyyy-MM-dd");
		try {
			return fmt.parse(date);
		} catch (ParseException e) {
			e.printStackTrace();
			return null;
		}
	}
	

	/**
	 * 校验日期是否合法
	 * @return
	 */
	public static boolean isValidDate(String s) {
		DateFormat fmt = new SimpleDateFormat("yyyy-MM-dd");
		try {
			fmt.parse(s);
			return true;
		} catch (Exception e) {
			// 如果throw java.text.ParseException或者NullPointerException，就说明格式不对
			return false;
		}
	}
	
	/**
	 * @param startTime
	 * @param endTime
	 * @return
	 */
	public static int getDiffYear(String startTime,String endTime) {
		DateFormat fmt = new SimpleDateFormat("yyyy-MM-dd");
		try {
			//long aa=0;
			int years=(int) (((fmt.parse(endTime).getTime()-fmt.parse(startTime).getTime())/ (1000 * 60 * 60 * 24))/365);
			return years;
		} catch (Exception e) {
			// 如果throw java.text.ParseException或者NullPointerException，就说明格式不对
			return 0;
		}
	}
	 
	/**
     * <li>功能描述： q取得当前时间的时间戳
     * @return
     * long 
     * @author Administrator
     */
	 public static Integer getcurrentTimeMillis(){
			 Integer a=(int)  java.lang.Math.abs(System.currentTimeMillis());
			 return a;
	 }
	     /**
	     * <li>功能描述： 取得当前getUuid
	     * @return
	     * long 
	     * @author Administrator
	     */
		 public static String getUuid(){
			 return UUID.randomUUID().toString().trim().replaceAll("-", "");
		 }	 

	
	/**
     * <li>功能描述：时间相减得到天数
     * @param beginDateStr
     * @param endDateStr
     * @return
     * long 
     * @author Administrator
     */
    public static long getDaySub(String beginDateStr,String endDateStr){
        long day=0;
        java.text.SimpleDateFormat format = new java.text.SimpleDateFormat("yyyy-MM-dd");
        java.util.Date beginDate = null;
        java.util.Date endDate = null;
        
            try {
				beginDate = format.parse(beginDateStr);
				endDate= format.parse(endDateStr);
			} catch (ParseException e) {
				e.printStackTrace();
			}
            day=(endDate.getTime()-beginDate.getTime())/(24*60*60*1000);
        return day;
    }
    
    /**
     * 得到n天之后的日期
     * @param days
     * @return
     */
    public static String getAfterDayDate(String days) {
    	int daysInt = Integer.parseInt(days);
    	
        Calendar canlendar = Calendar.getInstance(); // java.util包
        canlendar.add(Calendar.DATE, daysInt); // 日期减 如果不够减会将月变动
        Date date = canlendar.getTime();
        
        SimpleDateFormat sdfd = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateStr = sdfd.format(date);
        
        return dateStr;
    }
    
    
    
    /**
     * 得到传入日期n天之后的日期
     * @param days data
     * @return
     */
    public static String getAfterDay(String days,Date dates) {
    	int daysInt = Integer.parseInt(days);
        Calendar canlendar = Calendar.getInstance(); // java.util包
        canlendar.setTime(dates); 
        canlendar.add(canlendar.DATE, daysInt); // 日期减 如果不够减会将月变动
        Date date = canlendar.getTime();
        SimpleDateFormat sdfd = new SimpleDateFormat("yyyy-MM-dd");
        String dateStr = sdfd.format(date);
        return dateStr;
    }
    
    /**
     * 得到n天之后是周几
     * @param days
     * @return
     */
    public static String getAfterDayWeek(String days) {
    	int daysInt = Integer.parseInt(days);
        Calendar canlendar = Calendar.getInstance(); // java.util包
        canlendar.add(Calendar.DATE, daysInt); // 日期减 如果不够减会将月变动
        Date date = canlendar.getTime();
        SimpleDateFormat sdf = new SimpleDateFormat("E");
        String dateStr = sdf.format(date);
        return dateStr;
    }
    
    
    /**
     * 得到 当天-n天之后的日期数组   
     * @param days
     * @return
     */
    public static ArrayList getAfterDayWeekAr(long days) {
    	ArrayList sortlist=new ArrayList();
        Calendar canlendar = Calendar.getInstance(); // java.util包
        for (int i = 0; i < days; i++) {
        	 if(i!=0){
               canlendar.add(Calendar.DATE,1); 
        	 }
        	 Date date = canlendar.getTime();
             String dateStr = sdfDay.format(date);
             sortlist.add(dateStr);

		}
        return sortlist;
    }
    
    
    
    
    
    
    /**
     *
     * @param plainText
     *            明文
     * @return 32位密文
     */
    public static String encryption(String plainText) {
        String re_md5 = new String();
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(plainText.getBytes());
            byte b[] = md.digest();
 
            int i;
 
            StringBuffer buf = new StringBuffer("");
            for (int offset = 0; offset < b.length; offset++) {
                i = b[offset];
                if (i < 0)
                    i += 256;
                if (i < 16)
                    buf.append("0");
                buf.append(Integer.toHexString(i));
            }
 
            re_md5 = buf.toString();
 
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return re_md5;
    }
    
    
    public static void main(String[] args) {
//    	System.out.println(getDays());
//    	System.out.println(getAfterDayWeek("3"));
//    	System.out.println(getcurrentTimeMillis());
//    	System.out.println(UUID.randomUUID());
    	System.out.println(getIdDay());
    }

}
