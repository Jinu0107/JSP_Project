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
		session.invalidate();

	%>
	
	<script type="text/javascript">
		Notiflix.Report.Success('성공', '성공적으로 로그아웃 됐습니다.', 'Click', function() {
			location.href = 'index.jsp';
		});
	</script>
	
</body>
</html>