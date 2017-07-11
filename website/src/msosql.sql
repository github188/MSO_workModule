SELECT     
c.companyname,p.product_name,od.allocated_qty,op.upload_qty,i.createDate,
			(
				SELECT GROUP_CONCAT(ic.approveCount)
				FROM sys_approve_info_course ic
				WHERE ic.sys_approve_info_id = op.approve_id
				ORDER BY ic.serialNum
			) approveCount,
			(
				SELECT ic.modifyDate
				FROM sys_approve_info_course ic
				WHERE ic.sys_approve_info_id = i.sys_approve_info_id
				ORDER BY ic.serialNum DESC LIMIT 1
			) modifyDate
		FROM
			com_agent_operation op,
			com_agentorderdetail od,
			com_agentorder o,
			com_customer c,
			com_products p,
			sys_approve_info i
		WHERE
			op.com_agentOrder_id = od.com_agentOrder_id
		AND op.com_agentOrder_id = o.com_agentOrder_id
		AND o.sys_login_id = c.sys_login_id
		AND o.com_product_id = p.com_product_id
		AND op.approve_id = i.sys_approve_info_id
		AND i.`status` != 3
		AND EXISTS (
			SELECT u.sys_login_id
			FROM com_customer c,sys_approve_info_course ic,sys_user u
			WHERE c.sys_login_id = p.sys_login_id
			AND ic.sys_approve_info_id = c.sys_approve_info_id
			AND u.sys_user_id = ic.persons
			AND u.sys_login_id = 100
			UNION
				SELECT u.sys_login_id FROM sys_approve_info_course ic,sys_user u
				WHERE ic.sys_approve_info_id = c.sys_approve_info_id AND u.sys_user_id = ic.persons AND u.sys_login_id = 100
				UNION
					SELECT u.sys_login_id
					FROM sys_approve_info_course ic, sys_user u
					WHERE ic.sys_approve_info_id = op.approve_id
					AND u.sys_user_id = ic.persons
					AND u.sys_login_id = 100
		)
		ORDER BY op.createDate DESC
