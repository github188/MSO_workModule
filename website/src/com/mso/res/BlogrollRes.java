/**
 * 
 */
package com.mso.res;

import java.util.List;

import com.mso.model.Blogroll;

import BaseRes.CbaseRes;

/**
 * @author 
 * Method:
 * toTest:
 * Expect:
 * Result:
 * 
 */
public class BlogrollRes extends CbaseRes{

	/**
	 * @param code
	 * @param msg
	 */
	public BlogrollRes(String code, String msg) {
		super(code, msg);
	}
	
	private List<Blogroll> blogrollList;

	public List<Blogroll> getBlogrollList() {
		return blogrollList;
	}

	public void setBlogrollList(List<Blogroll> blogrollList) {
		this.blogrollList = blogrollList;
	}
	

	

}
