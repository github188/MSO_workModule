package com.mso.controller.mycenter;

import java.util.Collection;
import java.util.Iterator;
import java.util.Queue;

import com.mso.utils.httpUtil;

//import com.mso.utils.httpUtil;
public class Test {
	
/*
* main 表示的主线程
*/
public static void main(String[] args) {
	
	Queue<Object> q=new Queue<Object>() {

		@Override
		public int size() {
			// TODO Auto-generated method stub
			return 0;
		}

		@Override
		public boolean isEmpty() {
			// TODO Auto-generated method stub
			return false;
		}

		@Override
		public boolean contains(Object o) {
			// TODO Auto-generated method stub
			return false;
		}

		@Override
		public Iterator<Object> iterator() {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public Object[] toArray() {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public <T> T[] toArray(T[] a) {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public boolean remove(Object o) {
			// TODO Auto-generated method stub
			return false;
		}

		@Override
		public boolean containsAll(Collection<?> c) {
			// TODO Auto-generated method stub
			return false;
		}

		@Override
		public boolean addAll(Collection<? extends Object> c) {
			// TODO Auto-generated method stub
			return false;
		}

		@Override
		public boolean removeAll(Collection<?> c) {
			// TODO Auto-generated method stub
			return false;
		}

		@Override
		public boolean retainAll(Collection<?> c) {
			// TODO Auto-generated method stub
			return false;
		}

		@Override
		public void clear() {
			// TODO Auto-generated method stub
			
		}

		@Override
		public boolean add(Object e) {
			// TODO Auto-generated method stub
			return false;
		}

		@Override
		public boolean offer(Object e) {
			// TODO Auto-generated method stub
			return false;
		}

		@Override
		public Object remove() {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public Object poll() {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public Object element() {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public Object peek() {
			// TODO Auto-generated method stub
			return null;
		}
		
		
	};
	
	/*
	  //发送 GET 请求
    String s=httpUtil.sendGet("http://localhost:6144/Home/RequestString", "key=123&v=456");
    System.out.println(s);
    
    //发送 POST 请求
    String sr=httpUtil.sendPost("http://localhost:6144/Home/RequestPostString", "key=123&v=456");
    System.out.println(sr);
    */
	
    //发送 POST 请求
    String sr=httpUtil.sendPost("http://192.168.2.33:8091/gxcms/publicApi/email/resetPwd", "username=15001957936&url=baidu.com&title=找回密码&email=essen.zhang@mso-china.com");
    System.out.println(sr);
	
//    Object a=new Object();
//    Object b=new Object();
//    
//    System.out.println(a.equals(b));
//	
//    
//    String as="";
//    String bs="";
//    System.out.println(as.equals(bs));
    
//	http://www.runoob.com/java/java-character.html
	
//	Character 方法
//	1	isLetter()
//	是否是一个字母
//	2	isDigit()
//	是否是一个数字字符
//	3	isWhitespace()
//	是否一个空格
//	4	isUpperCase()
//	是否是大写字母
//	5	isLowerCase()
//	是否是小写字母
//	6	toUpperCase()
//	指定字母的大写形式
//	7	toLowerCase()
//	指定字母的小写形式
//	8	toString()
//	返回字符的字符串形式，字符串的长度仅为1  结算方式  1-客户效果付费  2-包坐席 
	
	
	
//		System.out.println("aaa");
//		String s="1";
//		int radix=10;
//		 if (s == null) {
//	         throw new NumberFormatException("null");
//	     }
//	
//		if (radix < Character.MIN_RADIX) {
//		    throw new NumberFormatException("radix " + radix +
//						    " less than Character.MIN_RADIX");
//		}
//		if (radix > Character.MAX_RADIX) {
//		    throw new NumberFormatException("radix " + radix +
//						    " greater than Character.MAX_RADIX");
//		}
		
		
		
//		int result = 0;
//		//符号位判断
//		boolean negative = false;
//		//字符串偏移指针
//		int i = 0, max = s.length();
//		//最大边界值
//		int limit;
//		//最大边界值右移一位
//		int multmin;
//		int digit;
//	
//		if (max > 0) {
//			//处理符号
//		    if (s.charAt(0) == '-') {
//				negative = true;
//				//边界值为0x80000000
//				limit = Integer.MIN_VALUE;
//				i++;
//		    } else {
//			    //边界值为-0x7fffffff
//				limit = -Integer.MAX_VALUE;
//		    }
//		    
//		    multmin = limit / radix;
//		    if (i < max) {
//				digit = Character.digit(s.charAt(i++),radix);
//				
//				
//				if (digit < 0) {
//					System.out.println("222222222222");
//				} else {
//				    result = -digit;
//				}
//		    }
//		    while (i < max) {
//				digit = Character.digit(s.charAt(i++),radix);
//				if (digit < 0) {
//					System.out.println("222222222222");
//				}
//				if (result < multmin) {
//					System.out.println("222222222222");
//				}
//				result *= radix;
//				if (result < limit + digit) {
//					System.out.println("222222222222");
//				}
//				result -= digit;
//		    }
//		} else {
//			System.out.println("222222222222");
//		}
//		
//		
//		
//		if (negative) {
//		    if (i > 1) {
//		    	System.out.println(result);
//		    } else {	
//		    	System.out.println("cccccc");
//		    }
//		} else {
//			System.out.println(-result);
//		}
		
	}

}
