package BaseRes;


public class BaseNoageRes<T> {
	
	//	ER001
	//	手机号已经被注册!
	
	   private String code;//状态   Y 为成功
	   private String msg; //提示信息  为空不提示
	   private String newId;//新增或者修改的keyid
	   
	    public BaseNoageRes( String code, String msg,final String newId){
			 this.code=code;
		     this.msg=msg;
			 this.newId=newId;
	    }
	    public BaseNoageRes(String code,String msg){
			 this.code=code;
			 this.msg=msg;
	    }	
	    
		public String getCode() {
			return code;
		}
		public void setCode(String code) {
			this.code = code;
		}
		public String getMsg() {
			return msg;
		}
		public void setMsg(String msg) {
			this.msg = msg;
		}
		public String getNewId() {
			return newId;
		}
		public void setNewId(String newId) {
			this.newId = newId;
		}
	   
	   
}
