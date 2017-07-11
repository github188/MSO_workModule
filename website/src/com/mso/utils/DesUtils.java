package com.mso.utils;

import java.io.IOException;
import java.security.SecureRandom;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;

public class DesUtils {

	private final static String DES = "DES";
//	static String key = (String) CustomizedPropertyPlaceholderConfigurer.getContextProperty("des.key");
	static String key = "MsoDesKey";
	
	public static void main(String[] args) throws Exception {
		
//		JSONObject a=new JSONObject();
//		HashMap<String, String> map=new HashMap<String, String>();
//		map.put("4月1日", "100");
//		map.put("4月2日", "100");
//		map.put("4月3日", "100");
//		map.put("4月4日", "100");
//		map.put("4月5日", "100");
//		
//		JSONObject aa=new JSONObject();
//		aa.put("4月1日", "100");
//		aa.put("4月2日", "100");
//		aa.put("4月3日", "100");
//		aa.put("4月4日", "100");
//		aa.put("4月5日", "100");
//		
//		a.put("2016",map);
//		System.out.println(a.toJSONString());
		
		
		String data = "Q8j/BYW3wyGZiirdWF4L4AQW1zXocmiqJoPm9VVwbmVjouHc7VxW7nclVhhvg0iRR1uMP9kEbingdyeMYqu+IFls5+GYwngMnIlEOJ28TJYoDB+tKo8WLMwGyY0u1quXJTKBAWNY7yk=";
		String dat1a = "xgz5/JftGms4ARmgcf9epg==";
		
		
		
		String key = "MsoDesKey";
		
		
		String ming = decrypt(data);
		String ming1 = decrypt(dat1a);
		System.out.println("ming=:"+ming);
		System.out.println("ming1=:"+ming1);
//		
//		System.err.println("加密前:" + data);
		String mi = encrypt("15710160570");
//		/** 加密 **/
		System.err.println("加密后:" + mi);
		String ming2 = decrypt(mi);
		
//		/** 解密 **/
		System.err.println("解密后:" + ming2);
	}

	/**
	 * 
	 * 根据键值进行加密
	 */

	public static String encrypt(String data) throws Exception {

		byte[] bt = encrypt(data.getBytes(), key.getBytes());

		String strs = Base64.encode(bt);

		return strs;

	}

	/**
	 * 
	 * 根据键值进行解密
	 */

	public static String decrypt(String data) throws IOException,Exception {
		if (data == null)
			return null;

		byte[] buf = Base64.decode(data);
System.out.println("------------!");
		byte[] bt = decrypt(buf, key.getBytes());

		return new String(bt);

	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/**
	 * 
	 * 根据键值进行加密
	 */

	private static byte[] encrypt(byte[] data, byte[] key) throws Exception {

		Cipher cipher = cipherInit(data, key, Cipher.ENCRYPT_MODE);

		return cipher.doFinal(data);

	}

	/**
	 * 
	 * 根据键值进行解密
	 */

	private static byte[] decrypt(byte[] data, byte[] key) throws Exception {

		Cipher cipher = cipherInit(data, key, Cipher.DECRYPT_MODE);

		return cipher.doFinal(data);

	}

	private static Cipher cipherInit(byte[] data, byte[] key, int cipherValue)
			throws Exception {

		/** 生成一个可信任的随机数源 **/

		SecureRandom sr = new SecureRandom();

		/** 从原始密钥数据创建DESKeySpec对象 **/

		DESKeySpec dks = new DESKeySpec(key);

		/** 创建一个密钥工厂，然后用它把DESKeySpec转换成SecretKey对象 **/

		SecretKeyFactory keyFactory = SecretKeyFactory.getInstance(DES);

		SecretKey securekey = keyFactory.generateSecret(dks);

		/** Cipher对象实际完成加密或解密操作 **/

		Cipher cipher = Cipher.getInstance(DES);

		/** 用密钥初始化Cipher对象 **/

		cipher.init(cipherValue, securekey, sr);

		return cipher;

	}

}
