<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title></title>
    <script src="js/tj.js"></script>
	<script src="js/jquery.validate.js"></script>
</head>

	  
<div class="content_right">
        <div class="tips">安全提醒：为确保您的账号安全，如果已启用的账号使用者发生人事变更，请及时修改对应的账号权限！</div>
        <p class="title">角色管理</p>
        <div class="RoleManagement">
            <button  type="button" class="btn" id="addrole">新增角色</button>
                <table class="tab">
                    <tbody>
                    <tr>
                        <th width="22%;">角色名称</th>
                        <th width="23%;">描述</th>
                        <th width="20%;">状态</th>
                        <th width="35%;">操作</th>
                    </tr>
                    <tr>
                        <td>管理员</td>
                        <td>拥有全部权限</td>
                        <td>启用</td>
                        <td><a href="javascript:">启用</a><a href="javascript:" class="active">暂停</a><a href="javascript:">编辑</a><a href="javascript:" class="delete">删除</a></td>
                    </tr>
                    <tr>
                        <td>操作员</td>
                        <td>拥有部分权限</td>
                        <td>暂停</td>
                        <td><a href="javascript:" class="active">启用</a><a href="javascript:">暂停</a><a href="javascript:">编辑</a><a href="javascript:" class="delete">删除</a></td>
                    </tr>
                    </tbody>
            </table>
        </div>
    </div>
	 
</html>