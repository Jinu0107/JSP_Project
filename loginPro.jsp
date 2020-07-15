<%@page import="test.StudentVO"%>
<%@page import="test.StudentDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="notiflix.css">
<script src="notiflix.js"></script>
</head>
<body>
	<%
		StudentDAO ins = StudentDAO.getInstance();
	StudentVO vo = new StudentVO();
	String id = request.getParameter("id");
	String pass = request.getParameter("pass");
	StudentVO flag = ins.checkLogin(id, pass);
	if (flag == null) {
	%>
	<script type="text/javascript">
		Notiflix.Report.Failure('실패', '아이디 또는 비빌번호가 존재하지 않습니다.', 'Click',
				function() {
					location.href = 'index.jsp';
				});
	</script>
	<%
		return;
	} else {
		session.setAttribute("user", flag);
	%>


	<script type="text/javascript">
		Notiflix.Report.Success('성공', '로그인 성공', 'Click', function() {
			location.href = 'index.jsp';
		});
	</script>



	<%
		}
	%>




</body>
</html>