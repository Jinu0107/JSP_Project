<%@page import="javax.sound.midi.SysexMessage"%>
<%@page import="test.StudentDAO"%>
<%@page import="test.StudentVO"%>
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
		String name = request.getParameter("name");
	String id = request.getParameter("id");
	String pass = request.getParameter("pass");
	String passc = request.getParameter("passc");

	int math = Integer.parseInt(request.getParameter("m"));
	int l = Integer.parseInt(request.getParameter("l"));
	int so = Integer.parseInt(request.getParameter("so"));
	int sc = Integer.parseInt(request.getParameter("sc"));
	
	if(math >= 100) math = 100;
    if(math <= 0) math = 0;
	if(so >= 100) so = 100;
    if(so <= 0) so = 0;
	if(l >= 100) l = 100;
    if(l <= 0) l = 0;
	if(sc >= 100) sc = 100;
    if(sc <= 0) sc = 0;

	StudentVO vo = new StudentVO();
	StudentDAO manager = StudentDAO.getInstance();
	vo.setId(id);
	int check = manager.checkId(vo);
	System.out.println(name + pass + id + passc);
	if (!pass.equals(passc)) {
	%>
	<script type="text/javascript">
		Notiflix.Report.Failure('실패', '비밀번호 확인이 다릅니다.', 'Click', function() {
			location.href = 'index.jsp';
		});
	</script>
	<%
		return;
	}

	if (check == -1) {
		vo.setPw(pass);
		vo.setName(name);
		vo.setMath(math);
		vo.setLang(l);
		vo.setScience(sc);
		vo.setSociety(so);
		vo.setTotal();
		manager.addStudent(vo);
	%>
	<script type="text/javascript">
		Notiflix.Report.Success('성공', '회원가입 성공', 'Click', function() {
			location.href = 'index.jsp';
		});
	</script>
	<%
		} else {
	%>
	<script type="text/javascript">
		Notiflix.Report.Failure('실패', '이미 존재하는 아이디 입니다.', 'Click', function() {
			location.href = 'index.jsp';
		});
	</script>
	<%
		}
	%>

	<script type="text/javascript">
		
	</script>



</body>
</html>