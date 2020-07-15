<%@page import="test.StudentDAO"%>
<%@page import="test.StudentVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>20117 안진우</title>
<link rel="stylesheet" href="bootstrap-4.3.1-dist/css/bootstrap.css">
<link rel="stylesheet" href="app.css">
<script src="app.js"></script>
<link rel="stylesheet" href="notiflix.css">
<script src="notiflix.js"></script>
<link rel="stylesheet" href="fontawesome-free-5.13.1-web/css/all.css">

</head>

<body>

	<%
		StudentVO user = (StudentVO) session.getAttribute("user");
		StudentDAO ins = StudentDAO.getInstance();
	%>
	<script type="text/javascript">
	function getUser() {
		return "<%=session.getAttribute("user")%>";
		}
	<%if (user != null) {%>
		function logout() {
	
		}
		function getM() {
			return  "<%=user.getMath()%>";
		}
		function getl() {
			return  "<%=user.getLang()%>";
		}
		function getso() {
			return  "<%=user.getSociety()%>";
		}
		function getsc() {
			return  "<%=user.getScience()%>";
		}
		
		<%}%>
	</script>

	<%
		if (session.getAttribute("user") == null) {
	%>
	<div class="login_popup">
		<div class="main_logo">
			<span>학생관리 <span>프로그램</span></span>
			<p>깔끔한 디자인의 학생관리 프로그램 Ver.1.0</p>
		</div>
		<div class="text">로그인</div>
		<form action="loginPro.jsp" class="form">
			<div class="input_box">
				<div class="input_text">
					<p>아이디</p>
					<p>비밀번호</p>
				</div>
				<div class="input_input">
					<input type="text" placeholder="아이디를 입력해주세요." name="id"
						class="login_input_id" required> <input type="password"
						placeholder="비밀번호를 입력해주세요." name="pass" class="login_input_pass"
						required>
				</div>
				<div class="fail login_fail">아이디,또는 비밀번호가 잘못되었습니다.</div>
				<div class="btn_box">
					<button class="btn_submit login_btn" type="submit">로그인</button>
					<div class="register_move_btn">처음이시면 회원가입을 해주세요.</div>
				</div>
			</div>
		</form>
	</div>

	<div class="register_popup">
		<div class="main_logo">
			<span>학생관리 <span>프로그램</span></span>
			<p>깔끔한 디자인의 학생관리 프로그램 Ver.1.0</p>
		</div>
		<div class="text">회원가입</div>
		<form action="#" class="form">
			<div class="input_box">
				<div class="input_text">
					<p>이름</p>
					<p>아이디</p>
				</div>
				<div class="input_input">
					<input type="text" required placeholder="이름을 입력해주세요."
						class="register_input_name"> <input type="text" required
						placeholder="아이디를 입력해주세요." class="register_input_id">
				</div>
				<div class="input_text">
					<p>비밀번호</p>
					<p>비밀번호 확인</p>
				</div>
				<div class="input_input">
					<input type="password" required placeholder="비밀번호를 입력해주세요."
						class="register_input_pass"> <input type="password"
						required placeholder="비밀번호를 다시 입력해주세요."
						class="register_input_passc">
				</div>
				<div class="fail register_fail">이미 등록된 아이디 입니다.</div>
				<div class="btn_box">
					<button class="btn_submit register_btn" type="button">회원가입</button>
					<div class="login_move_btn">이미 아이디가 있으신가요?</div>
				</div>
			</div>
		</form>
	</div>


	<div class="score_popup">
		<div class="main_logo">
			<span>학생관리 <span>프로그램</span></span>
			<p>깔끔한 디자인의 학생관리 프로그램 Ver.1.0</p>
		</div>
		<div class="text">성적등록</div>
		<form action="registerPro.jsp" class="form">
			<div class="input_box">
				<div class="input_text">
					<p>국어</p>
					<p>수학</p>
				</div>
				<div class="input_input">
					<input type="number" required placeholder="국어성적을 입력해주세요."
						class="score_input_name" name="l"> <input type="number"
						required placeholder="수학성적을 입력해주세요." class="score_input_id"
						name="m">
				</div>
				<div class="input_text">
					<p>사회</p>
					<p>과학</p>
				</div>
				<div class="input_input">
					<input type="number" required placeholder="사회성적을 입력해주세요."
						class="score_input_pass" name="so"> <input type="number"
						required placeholder="과학성적을 다시 입력해주세요." class="score_passc"
						name="sc">
				</div>
				<input type="hidden" value="" class="register_name" name="name">
				<input type="hidden" value="" class="register_id" name="id">
				<input type="hidden" value="" class="register_pass" name="pass">
				<input type="hidden" value="" class="register_passc" name="passc">
				<div class="fail register_fail">이미 등록된 아이디 입니다.</div>
				<div class="btn_box">
					<button class="btn_submit score_btn" type="submit">성적등록</button>
				</div>
			</div>
		</form>
	</div>

	<%
		} else {
	%>

	<div class="main_page">
		<header>
			<div class="header_logo">
				<span>학생관리 프로그램</span>
			</div>
			<div class="header_right_box">
				<div class="header_input">
					<input type="text" placeholder="검색어를 입력해주세요"> <span><i
						class="fas fa-search"></i></span>
				</div>
				<div class="user_profile">
					<p>
						<%= user.getName() %> <span><%= user.getId() %></span>
					</p>
					<p><a href="logout.jsp">로그아웃</a></p>
				</div>
			</div>
		</header>
		<div class="header_sub">
			<div class="tab tab_1">
				<i class="fas fa-book-open"></i>
				<p>성적 세분화</p>
			</div>
			<div class="tab tab_2">
				<i class="fas fa-chart-line"></i>
				<p>전체 학생</p>
			</div>
		</div>
		<div class="main_tab">
			<span>성적 세분화</span>
			<div class="main_card_list">
				<div class="main_card">
					<div class="card_text">
						<div>
							<i class="fas fa-calculator"></i><span>수학</span>
						</div>
						<div class="menu">
							<i class="fas fa-ellipsis-v"></i>
						</div>
					</div>
					<div class="score_box math_score">
						<div class="score_inner_box math_score_text">
							<p>
								70<span>점</span>
							</p>
							<div class="score_text">내 점수</div>
						</div>
					</div>

				</div>
				<div class="main_card">
					<div class="card_text">
						<div>
							<i class="fas fa-gavel"></i><span>사회</span>
						</div>
						<div class="menu">
							<i class="fas fa-ellipsis-v"></i>
						</div>
					</div>
					<div class="score_box s_score">
						<div class="score_inner_box s_score_text">
							<p>
								70<span>점</span>
							</p>
							<div class="score_text">내 점수</div>
						</div>
					</div>
				</div>
				<div class="main_card">
					<div class="card_text">
						<div>
							<i class="fas fa-book"></i><span>국어</span>
						</div>
						<div class="menu">
							<i class="fas fa-ellipsis-v"></i>
						</div>
					</div>
					<div class="score_box g_score">
						<div class="score_inner_box g_score_text">
							<p>
								70<span>점</span>
							</p>
							<div class="score_text">내 점수</div>
						</div>
					</div>
				</div>
			</div>
			<div class="main_card_list">
				<div class="main_card">
					<div class="card_text">
						<div>
							<i class="fas fa-flask"></i><span>과학</span>
						</div>
						<div class="menu">
							<i class="fas fa-ellipsis-v"></i>
						</div>
					</div>
					<div class="score_box sc_score">
						<div class="score_inner_box sc_score_text">
							<p>
								70<span>점</span>
							</p>
							<div class="score_text">내 점수</div>
						</div>
					</div>
				</div>
				<div class="main_card">
					<div class="card_text">
						<div>
							<i class="fas fa-medal"></i></i><span>당신의 등수</span>
						</div>
						<div class="menu">
							<i class="fas fa-ellipsis-v"></i>
						</div>
					</div>
					<div class="user_score">
						<p>
							<%= ins.getScore(user.getId())+1 %><span>등</span>
						</p>
					</div>
				</div>
				<div class="main_card">
					<div class="card_text">
						<div>
							<i class="fas fa-users"></i><span>전체 유저수</span>
						</div>
						<div class="menu">
							<i class="fas fa-ellipsis-v"></i>
						</div>
					</div>
					<div class="user_cnt">
						<p>
							<%= ins.getSize() %><span>명</span>
						</p>
					</div>

				</div>
			</div>
		</div>
		<div class="sub_tab">
			<span>전체 학생</span>
			<div class="user_list_box">
				<span>전체 학생 목록</span>
				<table class="table">
					<thead class="t_header">
					
						<tr>
							<th scope="col">학생 이름</th>
							<th scope="col">학생아이디</th>
							<th scope="col">수학</th>
							<th scope="col">사회</th>
							<th scope="col">국어</th>
							<th scope="col">과학</th>
							<th scope="col">평균</th>
							<th scope="col">등수</th>
						</tr>
					</thead>
					<tbody>
					<% for(int i =0; i < ins.getSize(); i++) {
						ins.sortData();
						StudentVO a = ins.getList().get(i);
						%>
						<tr>
							<td><%= a.getName()%></td>
							<td><%= a.getId()%></td>
							<td><%= a.getMath()%></td>
							<td><%= a.getLang()%></td>
							<td><%= a.getSociety()%></td>
							<td><%= a.getScience()%></td>
							<td><%= a.getTotal()%></td>
							<td><%= i+1%>등</td>
						</tr>
						<% } %>
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<%
		}
	%>


</body>

</html>