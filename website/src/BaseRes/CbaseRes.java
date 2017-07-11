package BaseRes;


public class CbaseRes<T> {
	
	    private String code;//状态   Y 为成功
	    private String msg; //提示信息  为空不提示
	    public CbaseRes(String code, String msg){
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
}
