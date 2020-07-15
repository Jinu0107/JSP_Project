const log = console.log;


window.addEventListener("load", () => {
	let user = getUser();
    let app = new App(user);
});



class App {
    constructor(user) {
    	this.user = user;
        log(this.user);
        this.addEvent();
        if(this.user != "null"){
        	this.drawcard();
        }
        
    }
    
    

    addEvent() {
    	if(this.user == "null"){
    		 document.querySelector(".login_input_id").addEventListener("focus", (e) => {
    	            e.target.style.border = "2px solid #75d2d7";
    	        });
    	        document.querySelector(".login_input_id").addEventListener("focusout", (e) => {
    	            e.target.style.border = "2px solid #ecebf0";
    	        });
    	        document.querySelector(".login_input_pass").addEventListener("focus", (e) => {
    	            e.target.style.border = "2px solid #75d2d7";
    	        });
    	        document.querySelector(".login_input_pass").addEventListener("focusout", (e) => {
    	            e.target.style.border = "2px solid #ecebf0";
    	        });



    	        document.querySelector(".register_move_btn").addEventListener("click", () => {
    	            document.querySelector(".login_popup").style.display = "none";
    	            document.querySelector(".register_popup").style.display = "flex";
    	        });

    	        document.querySelector(".login_move_btn").addEventListener("click", () => {
    	            document.querySelector(".register_popup").style.display = "none";
    	            document.querySelector(".login_popup").style.display = "flex";
    	        });




    	        document.querySelector(".register_input_name").addEventListener("focus", (e) => {
    	            e.target.style.border = "2px solid #75d2d7";
    	        });
    	        document.querySelector(".register_input_name").addEventListener("focusout", (e) => {
    	            e.target.style.border = "2px solid #ecebf0";
    	        });





    	        document.querySelector(".register_input_id").addEventListener("focus", (e) => {
    	            e.target.style.border = "2px solid #75d2d7";
    	        });
    	        document.querySelector(".register_input_id").addEventListener("focusout", (e) => {
    	            e.target.style.border = "2px solid #ecebf0";
    	        });


    	        document.querySelector(".register_input_pass").addEventListener("focus", (e) => {
    	            e.target.style.border = "2px solid #75d2d7";
    	        });
    	        document.querySelector(".register_input_pass").addEventListener("focusout", (e) => {
    	            e.target.style.border = "2px solid #ecebf0";
    	        });



    	        document.querySelector(".register_input_passc").addEventListener("focus", (e) => {
    	            e.target.style.border = "2px solid #75d2d7";
    	        });
    	        document.querySelector(".register_input_passc").addEventListener("focusout", (e) => {
    	            e.target.style.border = "2px solid #ecebf0";
    	        });









    	        document.querySelector(".score_input_name").addEventListener("focus", (e) => {
    	            e.target.style.border = "2px solid #75d2d7";
    	        });
    	        document.querySelector(".score_input_name").addEventListener("focusout", (e) => {
    	            e.target.style.border = "2px solid #ecebf0";
    	        });



    	        

    	        document.querySelector(".score_input_id").addEventListener("focus", (e) => {
    	            e.target.style.border = "2px solid #75d2d7";
    	        });
    	        document.querySelector(".score_input_id").addEventListener("focusout", (e) => {
    	            e.target.style.border = "2px solid #ecebf0";
    	        });


    	        document.querySelector(".score_input_pass").addEventListener("focus", (e) => {
    	            e.target.style.border = "2px solid #75d2d7";
    	        });
    	        document.querySelector(".score_input_pass").addEventListener("focusout", (e) => {
    	            e.target.style.border = "2px solid #ecebf0";
    	        });



    	        document.querySelector(".score_passc").addEventListener("focus", (e) => {
    	            e.target.style.border = "2px solid #75d2d7";
    	        });
    	        document.querySelector(".score_passc").addEventListener("focusout", (e) => {
    	            e.target.style.border = "2px solid #ecebf0";
    	        });


    	        document.querySelector(".register_btn").addEventListener("click", (e) => {
    	            let name = document.querySelector(".register_input_name").value;
    	            let id = document.querySelector(".register_input_id").value;
    	            let pass = document.querySelector(".register_input_pass").value;
    	            let passc = document.querySelector(".register_input_passc").value;

    	            if (name == "" || id == "" || pass == "" || passc == "") {
    	                Notiflix.Report.Failure('경고',
    	                    '모든 필드의 값을 넣어 주세요',
    	                    'Click');
    	                return;
    	            }

    	            document.querySelector(".register_name").value = name;
    	            document.querySelector(".register_id").value = id;
    	            document.querySelector(".register_pass").value = pass;
    	            document.querySelector(".register_passc").value = passc;

    	            document.querySelector(".register_popup").style.display = "none";
    	            document.querySelector(".score_popup").style.display = "flex";
    	        });
    	        
    	        
    	}
       
        

        document.querySelector(".tab_2").addEventListener("click", () => {
            document.querySelector(".main_tab").style.display = "none";
            document.querySelector(".sub_tab").style.display = "block";
        });

        document.querySelector(".tab_1").addEventListener("click", () => {
            document.querySelector(".sub_tab").style.display = "none";
            document.querySelector(".main_tab").style.display = "block";
        });

    }

    drawcard() {
    	
        let math = getM();
        if(math >= 100) math = 100;
        if(math <= 0) math = 0;
        let color = "";
        if (math >= 80) {
            color = "#42cf97"
        } else if (math >= 40) {
            color = "#f79f24";
        } else {
            color = "#f76277";
        }

        document.querySelector(".math_score").style.background = `conic-gradient(${color} ${math}%, #d4d4d4 0)`;
        document.querySelector(".math_score_text > p").innerHTML = math + "<span>점</span>";
        document.querySelector(".math_score_text").style.color = color;
        let s = getso();
        if(s >= 100) s = 100;
        if(s <= 0) s = 0;
        if (s >= 80) {
            color = "#42cf97"
        } else if (s >= 40) {
            color = "#f79f24";
        } else {
            color = "#f76277";
        }
        document.querySelector(".s_score").style.background = `conic-gradient(${color} ${s}%, #d4d4d4 0)`;
        document.querySelector(".s_score_text > p").innerHTML = s + "<span>점</span>";
        document.querySelector(".s_score_text").style.color = color;
        let g = getl();
        if(g >= 100) g = 100;
        if(g <= 0) g = 0;
        if (g >= 80) {
            color = "#42cf97"
        } else if (g >= 40) {
            color = "#f79f24";
        } else {
            color = "#f76277";
        }

        document.querySelector(".g_score").style.background = `conic-gradient(${color} ${g}%, #d4d4d4 0)`;
        document.querySelector(".g_score_text > p").innerHTML = g + "<span>점</span>";
        document.querySelector(".g_score_text").style.color = color;
        let sc = getsc();
        if(sc >= 100) sc = 100;
        if(sc <= 0) sc = 0;
        if (sc >= 80) {
            color = "#42cf97"
        } else if (sc >= 40) {
            color = "#f79f24";
        } else {
            color = "#f76277";
        }

        document.querySelector(".sc_score").style.background = `conic-gradient(${color} ${sc}%, #d4d4d4 0)`;
        document.querySelector(".sc_score_text > p").innerHTML = sc + "<span>점</span>";
        document.querySelector(".sc_score_text").style.color = color;

      

    }




    
}