package com.mso.utils;

import java.util.List;

import com.mso.model.GXJOrderUploadReport;

/**
 * 分页封装类
 * 用于做分页查询的基础类，封装了一些分页的相关属性
 * @author 闫洲
 * @version v1.0
 * @param <T>
 */
public class PageResults<T> {
 
	
	private GXJOrderUploadReport report;

	// 下一页
    private int pageNo;
 
    // 当前页
    private int currentPage;
 
    // 每页个个数
    private int pageSize=10;
 
    
    //是否需要分页
	private boolean entityOrField=true;	//true:需要分页的地方，传入的参数就是Page实体；false:需要分页的地方，传入的参数所代表的实体拥有Page属性
    
	
	// 分页url
    private String url;

	// 总条数
    private int totalCount;
 
    // 总页数
    private int pageCount;
 
    // 记录
    private List<T> results;
    
    
    //拼接的pageStr 
    private String pageStr;
	
    
    //拼接的ajaxpageStr 
    private String ajaxPageStr;
    
	public void setAjaxPageStr(String ajaxPageStr) {
		this.ajaxPageStr = ajaxPageStr;
	}
	public void setPageStr(String pageStr) {
		this.pageStr = pageStr;
	}



	

	
	public String getAjaxPageStr() {
		StringBuffer sb = new StringBuffer();
		
		//当前页大于最大页数就显示在最大页数
		if(currentPage>pageCount){
			currentPage=pageCount;
		}
		//当前页小于0  默认在第一页
		if(currentPage<=0){
			currentPage=1;
		}
		
		if(pageCount!=1){//总共就一页 就不显示分页了
			if(totalCount>0){
				sb.append("	<div class=\"page\">\n");
				sb.append("	<span>共"+pageCount+"页，"+totalCount+"条<input id=\"tolPageValue\" type=\"hidden\" value=\""+pageCount+"\" \" /></span>\n");
				
				if(currentPage==pageCount){
					sb.append("	<a href=\"javascript:\" onclick=\"nextPage("+(currentPage-1)+")\" class=\"prev_page\">上页</a>\n");
				}else{
					if(currentPage!=1){
						sb.append("	<a href=\"javascript:\" onclick=\"nextPage("+(currentPage-1)+")\" class=\"prev_page\">上页</a>\n");
					}
				}
				sb.append("	<span>到</span><input id=\"toGoPage\" type=\"text\" pattern=\"[0-9]{3}\" /><span>页</span> \n");
				sb.append("	<button onclick=\"toTZ();\">Go</button>\n");
				
				int showTag = 5;//分页标签显示数量
				int startTag = 1;
				if(currentPage>showTag){
					startTag = currentPage-1;
				}
				int endTag = startTag+showTag-1;
				
				if(pageCount<=showTag*3){
					for(int i=1; i<=pageCount; i++){
						if(currentPage==i){
							sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+(currentPage)+")\" class=\"selected\">"+i+"</a>\n");
						}
						else{
							sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+i+")\">"+i+"</a>\n");
						}
					}
				}else{
					if(startTag<showTag){
						for(int i=startTag; i<=pageCount && i<=endTag; i++){
							if(currentPage==i){
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+(currentPage)+")\" class=\"selected\">"+i+"</a>\n");
							}
							else{
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+i+")\">"+i+"</a>\n");
							}
						}
						
						sb.append(" ... ");
						for(int i=pageCount-showTag+1; i<=pageCount ; i++){
							if(currentPage==i){
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+(currentPage)+")\" class=\"selected\">"+i+"</a>\n");
							}
							else{
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+i+")\">"+i+"</a>\n");
							}
						}
					}
					
					if(startTag>=showTag&&startTag<pageCount-showTag){
						for(int i=1; i<=showTag; i++){
							if(currentPage==i){
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+(currentPage)+")\" class=\"selected\">"+i+"</a>\n");
							}
							else{
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+i+")\">"+i+"</a>\n");
							}
						}
						sb.append(" ... ");
						for(int i=startTag+1; i<=pageCount && i<=endTag+1; i++){
							if(currentPage==i){
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+(currentPage)+")\" class=\"selected\">"+i+"</a>\n");
							}
							else{
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+i+")\">"+i+"</a>\n");
							}
						}
						sb.append(" ... ");
						for(int i=pageCount-showTag+1; i<=pageCount ; i++){
							if(currentPage==i){
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+(currentPage)+")\" class=\"selected\">"+i+"</a>\n");
							}
							else{
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+i+")\">"+i+"</a>\n");
							}
						}
					}
					
					if(startTag>=pageCount-showTag){
						for(int i=1; i<=showTag; i++){
							if(currentPage==i){
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+(currentPage)+")\" class=\"selected\">"+i+"</a>\n");
							}
							else{
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+i+")\">"+i+"</a>\n");
							}
						}
						sb.append(" ... ");
						for(int i=pageCount-showTag+1; i<=pageCount ; i++){
							if(currentPage==i){
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+(currentPage)+")\" class=\"selected\">"+i+"</a>\n");
							}
							else{
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+i+")\">"+i+"</a>\n");
							}
						}
					}
					
				}

				
				
				
				if(currentPage==1){
					sb.append("	<a  href=\"javascript:\" onclick=\"nextPage("+(currentPage+1)+")\" class=\"next_page\">下页</a>\n");
				}else{
					if(currentPage!=pageCount){
						sb.append("	<a  href=\"javascript:\" onclick=\"nextPage("+(currentPage+1)+")\" class=\"next_page\">下页</a>\n");
					}
				}
				sb.append("</div>\n");
				
				sb.append("<script type=\"text/javascript\">\n");
				
				//换页函数
//				sb.append("function nextPage(page){");
//				sb.append("		var url = document.location+'';\n");
//				sb.append("		if(url.indexOf('?')>-1){\n");
//				sb.append("			if(url.indexOf('currentPage')>-1){\n");
//				sb.append("				var reg = /currentPage=\\d*/g;\n");
//				sb.append("				url = url.replace(reg,'currentPage=');\n");
//				sb.append("			}else{\n");
//				sb.append("				url += \"&"+(entityOrField?"currentPage":"page.currentPage")+"=\";\n");
//				sb.append("			}\n");
//				sb.append("		}else{url += \"?"+(entityOrField?"currentPage":"page.currentPage")+"=\";}\n");
//				sb.append("		url = url + page ;\n");
//				sb.append("		document.location = url;\n");
//				sb.append("}\n");
				
				//跳转函数   document.getElementById(\"tolPageValue\").value
//				sb.append("function toTZ(){");
//				sb.append("var toPaggeVlue = document.getElementById(\"toGoPage\").value;");
//				sb.append("var tolPageValue = document.getElementById(\"tolPageValue\").value;");
//				
//				sb.append("if(toPaggeVlue == ''){document.getElementById(\"toGoPage\").value=1;return;}");
//				sb.append("if(isNaN(Number(toPaggeVlue))){document.getElementById(\"toGoPage\").value=1;return;}");
//				sb.append("if(Number(toPaggeVlue)>Number(tolPageValue)){document.getElementById(\"toGoPage\").value=tolPageValue;return;}");
//
//				sb.append("nextPage(toPaggeVlue);");
//				sb.append("}\n");
//				sb.append("</script>\n");
				
				
			}
		}else{
			sb.append("	<div class=\"page\">\n");
			sb.append("	<span>共"+pageCount+"页，"+totalCount+"条</span>\n");
			sb.append("</div>\n");
		}

		ajaxPageStr = sb.toString();
		return ajaxPageStr;
	}

	//拼接分页 页面及JS函数
	public String getPageStr() {
		StringBuffer sb = new StringBuffer();
		
		
		//当前页大于最大页数就显示在最大页数
		if(currentPage>pageCount){
			currentPage=pageCount;
		}
		//当前页小于0  默认在第一页
		if(currentPage<=0){
			currentPage=1;
		}
		
		if(pageCount!=1){//总共就一页 就不显示分页了
			if(totalCount>0){
				sb.append("	<div class=\"page\">\n");
				sb.append("	<span>共"+pageCount+"页，"+totalCount+"条<input id=\"tolPageValue\" type=\"hidden\" value=\""+pageCount+"\" \" /></span>\n");
				
				if(currentPage==pageCount){
					sb.append("	<a href=\"javascript:\" onclick=\"nextPage("+(currentPage-1)+")\" class=\"prev_page\">上页</a>\n");
				}else{
					if(currentPage!=1){
						sb.append("	<a href=\"javascript:\" onclick=\"nextPage("+(currentPage-1)+")\" class=\"prev_page\">上页</a>\n");
					}
				}
				sb.append("	<span>到</span><input id=\"toGoPage\" type=\"text\" pattern=\"[0-9]{3}\" /><span>页</span> \n");
				sb.append("	<button onclick=\"toTZ();\">Go</button>\n");
				
				int showTag = 5;//分页标签显示数量
				int startTag = 1;
				if(currentPage>showTag){
					startTag = currentPage-1;
				}
				int endTag = startTag+showTag-1;
				
				if(pageCount<=showTag*3){
					for(int i=1; i<=pageCount; i++){
						if(currentPage==i){
							sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+(currentPage)+")\" class=\"selected\">"+i+"</a>\n");
						}
						else{
							sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+i+")\">"+i+"</a>\n");
						}
					}
				}else{
					if(startTag<showTag){
						for(int i=startTag; i<=pageCount && i<=endTag; i++){
							if(currentPage==i){
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+(currentPage)+")\" class=\"selected\">"+i+"</a>\n");
							}
							else{
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+i+")\">"+i+"</a>\n");
							}
						}
						
						sb.append(" ... ");
						for(int i=pageCount-showTag+1; i<=pageCount ; i++){
							if(currentPage==i){
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+(currentPage)+")\" class=\"selected\">"+i+"</a>\n");
							}
							else{
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+i+")\">"+i+"</a>\n");
							}
						}
					}
					
					if(startTag>=showTag&&startTag<pageCount-showTag){
						for(int i=1; i<=showTag; i++){
							if(currentPage==i){
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+(currentPage)+")\" class=\"selected\">"+i+"</a>\n");
							}
							else{
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+i+")\">"+i+"</a>\n");
							}
						}
						sb.append(" ... ");
						for(int i=startTag+1; i<=pageCount && i<=endTag+1; i++){
							if(currentPage==i){
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+(currentPage)+")\" class=\"selected\">"+i+"</a>\n");
							}
							else{
								sb.append(" <a onclick=\"nextPage("+i+")\">"+i+"</a>\n");
							}
						}
						sb.append(" ... ");
						for(int i=pageCount-showTag+1; i<=pageCount ; i++){
							if(currentPage==i){
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+(currentPage)+")\" class=\"selected\">"+i+"</a>\n");
							}
							else{
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+i+")\">"+i+"</a>\n");
							}
						}
					}
					
					if(startTag>=pageCount-showTag){
						for(int i=1; i<=showTag; i++){
							if(currentPage==i){
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+(currentPage)+")\" class=\"selected\">"+i+"</a>\n");
							}
							else{
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+i+")\">"+i+"</a>\n");
							}
						}
						sb.append(" ... ");
						for(int i=pageCount-showTag+1; i<=pageCount ; i++){
							if(currentPage==i){
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+(currentPage)+")\" class=\"selected\">"+i+"</a>\n");
							}
							else{
								sb.append(" <a href=\"javascript:\" onclick=\"nextPage("+i+")\">"+i+"</a>\n");
							}
						}
					}
					
				}

				
				
				
				if(currentPage==1){
					sb.append("	<a  href=\"javascript:\" onclick=\"nextPage("+(currentPage+1)+")\" class=\"next_page\">下页</a>\n");
				}else{
					if(currentPage!=pageCount){
						sb.append("	<a  href=\"javascript:\" onclick=\"nextPage("+(currentPage+1)+")\" class=\"next_page\">下页</a>\n");
					}
				}
				sb.append("</div>\n");
				
				sb.append("<script type=\"text/javascript\">\n");
				
				//换页函数
				sb.append("function nextPage(page){");
				sb.append("		var url = document.location+'';\n");
				sb.append("		if(url.indexOf('?')>-1){\n");
				sb.append("			if(url.indexOf('currentPage')>-1){\n");
				sb.append("				var reg = /currentPage=\\d*/g;\n");
				sb.append("				url = url.replace(reg,'currentPage=');\n");
				sb.append("			}else{\n");
				sb.append("				url += \"&"+(entityOrField?"currentPage":"page.currentPage")+"=\";\n");
				sb.append("			}\n");
				sb.append("		}else{url += \"?"+(entityOrField?"currentPage":"page.currentPage")+"=\";}\n");
				sb.append("		url = url + page ;\n");
				sb.append("		document.location = url;\n");
				sb.append("}\n");
				
				//跳转函数   document.getElementById(\"tolPageValue\").value
				sb.append("function toTZ(){");
				sb.append("var toPaggeVlue = document.getElementById(\"toGoPage\").value;");
				sb.append("var tolPageValue = document.getElementById(\"tolPageValue\").value;");
				
				sb.append("if(toPaggeVlue == ''){document.getElementById(\"toGoPage\").value=1;return;}");
				sb.append("if(isNaN(Number(toPaggeVlue))){document.getElementById(\"toGoPage\").value=1;return;}");
				sb.append("if(Number(toPaggeVlue)>Number(tolPageValue)){document.getElementById(\"toGoPage\").value=tolPageValue;return;}");

				sb.append("nextPage(toPaggeVlue);");
				sb.append("}\n");
				sb.append("</script>\n");
				
				
			}
		}else{
			sb.append("	<div class=\"page\">\n");
			sb.append("	<span>共"+pageCount+"页，"+totalCount+"条</span>\n");
			sb.append("</div>\n");
		}

		pageStr = sb.toString();
		return pageStr;
	}
	
	
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
    public boolean isEntityOrField() {
		return entityOrField;
	}
	public void setEntityOrField(boolean entityOrField) {
		this.entityOrField = entityOrField;
	}
 
    public int getPageCount() {
        return pageCount;
    }
 
    public void setPageCount(int pageCount) {
        this.pageCount = pageCount;
    }
 
    public int getPageNo() {
        if (pageNo <= 0) {
            return 1;
        } else{
            return pageNo > pageCount ? pageCount : pageNo;
        }
    }
 
    public void setPageNo(int pageNo) {
        this.pageNo = pageNo;
    }
 
    public List<T> getResults() {
        return results;
    }
 
    public void setResults(List<T> results) {
        this.results = results;
    }
 
    public int getCurrentPage() {
        return currentPage;
    }
 
    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }
 
    public int getPageSize() {
        return pageSize;
    }
 
    public void setPageSize(int pageSize) {
        this.pageSize = pageSize <= 0 ? 10 : pageSize;
    }
 
    public int getTotalCount() {
        return totalCount;
    }
 
    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }
 
    public void resetPageNo() {
        pageNo = currentPage + 1;
        pageCount = totalCount % pageSize == 0 ? totalCount / pageSize
                : totalCount / pageSize + 1;
    }
    
    public GXJOrderUploadReport getReport() {
		return report;
	}
	public void setReport(GXJOrderUploadReport report) {
		this.report = report;
	}
 
}
