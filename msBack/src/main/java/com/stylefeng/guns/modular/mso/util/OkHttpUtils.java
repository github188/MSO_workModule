package com.stylefeng.guns.modular.mso.util;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;

import com.alibaba.fastjson.JSONObject;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class OkHttpUtils {
	public static Logger log = Logger.getLogger(OkHttpUtils.class);
	
	public static final MediaType JSONTYPE =  MediaType.parse("application/json; charset=utf-8");
	
    private static OkHttpClient mHttpClient = new OkHttpClient().newBuilder().connectTimeout(10, TimeUnit.SECONDS).
    		readTimeout(20, TimeUnit.SECONDS).build();
    private OkHttpUtils() {

    }
 

	public OkHttpClient getmHttpClient() {
		return mHttpClient;
	}
	/**
	 * 同步get方法
	 */
	public static String syncGet(String url){
		//OkHttpClient client = new OkHttpClient();
		Request request = new Request.Builder().url(url).build();
		Response response = null;
		try {
			 response = mHttpClient.newCall(request).execute();
			if(response.isSuccessful()){
				//System.out.println();
				
				return response.body().string();
			}else{
				throw new IOException("message");
			}
		} catch (IOException e) {
			
			e.printStackTrace();
			log.info(e);
			return "error";
		}finally{
			if(response!=null){
				response.close();
			}
		}
	}
	
	/**
	 * 同步patch方法,json对象为数据
	 */
	public static String syncPatch(String url,JSONObject json){
		//OkHttpClient client = new OkHttpClient();
		Request request = new Request.Builder()
				                .url(url)
				                .patch(RequestBody.create(JSONTYPE, json.toJSONString()))
				                .build();	
		Response response = null;
		try {
			 response = mHttpClient.newCall(request).execute();
			if(response.isSuccessful()){
				return response.body().string();
			}else{
				throw new IOException("message");
			}
		} catch (IOException e) {
			e.printStackTrace();
			log.info(e);
			return "error";
		}finally{
			if(response!=null){
				response.close();
			}
		}
	}	
	
	
	
	
	
	
	
	
	
	
	
	/**
	 *  调用同步get方法并返回json数据
	 * @param url  
	 * @return
	 */
	public static JSONObject syncGetToJSON(String url) throws Exception{
		JSONObject json = JSONObject.parseObject(syncGet(url));
		return json;
	}
	/**
	 *  调用同步patch方法并返回json数据
	 * @param url  
	 * @return
	 */
	public static JSONObject syncPatchToJSON(String url,JSONObject json) throws Exception{
		JSONObject jsonr = JSONObject.parseObject(syncPatch(url,json));
		return jsonr;
	}
	
	
	
	public static void main(String[] args) {
	String a = OkHttpUtils.syncGet("https://gateway.mshuoke.com/dbservice/fbfdemands/027eabc1-9fc7-4f5a-af86-93ffaf665f02");
	
//		JSONObject json = JSONObject.parseObject(a);
//		//JSONObject json66 = JSONObject.parseObject("6548787");
//		FbfDemandEntity b =json.parseObject(a, FbfDemandEntity.class);
//		System.out.println(json);
//		System.out.println(b);  
	   JSONObject.parseObject("error");
	
	}
    

}
