package BaseRes;

public class BasePut {
	
	   private String ip;//客户端请求的ip
	   private String souce;//客户端请求的来源
	   
		public BasePut( String ip, String souce){
			 this.souce=souce;
		     this.ip=ip;
	    }
		
		    public String getIp() {
				return ip;
			}

			public void setIp(String ip) {
				this.ip = ip;
			}

			public String getSouce() {
				return souce;
			}

			public void setSouce(String souce) {
				this.souce = souce;
			}

	   
}
