package com.mso.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.security.MessageDigest;
import java.text.SimpleDateFormat;
import java.util.Date;



public class SmsUtils {
	public static void main(String[] args) {
		try {
//			System.out.println(new SmsUtils().sendSms("xiao.gu@lzcallcenter.com", "asd321", "15001957936", "您的验证码是：456789  "));
			System.out.println(new SmsUtils().sendSms("xiao.gu@lzcallcenter.com", "asd321", "15001957936", "眸事网用户注册验证码：000000。请确认该申请是您本人操作！【眸事网】"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public  String sendSms(String accName,String accPwd,String mobies,String content) throws IOException {
		StringBuffer sb = new StringBuffer("http://www.lx198.com/sdk/send?");
			sb.append("accName="+accName); 
			sb.append("&accPwd="+getMd5String(accPwd)); 
			sb.append("&aimcodes="+mobies);
			sb.append("&content="+URLEncoder.encode(content,"UTF-8"));
			sb.append("&bizId="+createBizId());
			sb.append("&dataType=json");

//			System.out.println(sb.toString());
			URL url = new URL(sb.toString());
			HttpURLConnection connection = (HttpURLConnection) url.openConnection();
			connection.setRequestMethod("POST");
			BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));
			return in.readLine();
	}
	
	public static  int curttNo;
	
	private final static String dataFormatString="yyMMddHHmmss";
	
	public  synchronized static final String createBizId(){
		if(curttNo<999) {
			curttNo++;
		}else{
			curttNo=1;
		}
		String curttNoStr=String.valueOf(curttNo);
		while(curttNoStr.length()<3){;
			curttNoStr="0"+curttNoStr;
		}
		return new SimpleDateFormat(dataFormatString).format(new Date())+curttNoStr;
	}
	
	private final static char[] hexDigits = { '0', '1', '2', '3', '4', '5',
		'6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' };

private static String bytes2hex(byte[] bytes) {
	StringBuffer sb = new StringBuffer();
	int t;
	for (int i = 0; i < 16; i++) {// 16 == bytes.length;
		t = bytes[i];
		if (t < 0)
			t += 256;
		sb.append(hexDigits[(t >>> 4)]);
		sb.append(hexDigits[(t % 16)]);
	}
	return sb.toString();
}

public static String getMd5String(String strSrc) {
	try {
		// 确定计算方法
		MessageDigest md5 = MessageDigest.getInstance("MD5");
		// 加密后的字符串
		return bytes2hex(md5.digest(strSrc.getBytes()));
	} catch (Exception e) {
		e.printStackTrace();
	}
	return null;
}

	
		



}
