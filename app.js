const log = console.log;


window.addEventListener("load", () => {
    let app = new App();
});



class App {
    constructor() {
        log("dsa");
        this.addEvent();
    }


    addEvent() {
        document.querySelector(".login_input_id").addEventListener("focus" , (e)=>{
            e.target.style.border = "2px solid #75d2d7";
        });
        document.querySelector(".login_input_id").addEventListener("focusout" , (e)=>{
            e.target.style.border = "2px solid #ecebf0";
        });
        document.querySelector(".login_input_pass").addEventListener("focus" , (e)=>{
            e.target.style.border = "2px solid #75d2d7";
        });
        document.querySelector(".login_input_pass").addEventListener("focusout" , (e)=>{
            e.target.style.border = "2px solid #ecebf0";
        });



        document.querySelector(".register_move_btn").addEventListener("click" ,()=>{
            document.querySelector(".login_popup").style.display = "none";
            document.querySelector(".register_popup").style.display = "flex";
        });

        document.querySelector(".login_move_btn").addEventListener("click" ,()=>{
            document.querySelector(".register_popup").style.display = "none";
            document.querySelector(".login_popup").style.display = "flex";
        });




        document.querySelector(".register_input_name").addEventListener("focus" , (e)=>{
            e.target.style.border = "2px solid #75d2d7";
        });
        document.querySelector(".register_input_name").addEventListener("focusout" , (e)=>{
            e.target.style.border = "2px solid #ecebf0";
        });




         
        document.querySelector(".register_input_id").addEventListener("focus" , (e)=>{
            e.target.style.border = "2px solid #75d2d7";
        });
        document.querySelector(".register_input_id").addEventListener("focusout" , (e)=>{
            e.target.style.border = "2px solid #ecebf0";
        });


        document.querySelector(".register_input_pass").addEventListener("focus" , (e)=>{
            e.target.style.border = "2px solid #75d2d7";
        });
        document.querySelector(".register_input_pass").addEventListener("focusout" , (e)=>{
            e.target.style.border = "2px solid #ecebf0";
        });



        document.querySelector(".register_input_passc").addEventListener("focus" , (e)=>{
            e.target.style.border = "2px solid #75d2d7";
        });
        document.querySelector(".register_input_passc").addEventListener("focusout" , (e)=>{
            e.target.style.border = "2px solid #ecebf0";
        });



        





        document.querySelector(".score_input_name").addEventListener("focus" , (e)=>{
            e.target.style.border = "2px solid #75d2d7";
        });
        document.querySelector(".score_input_name").addEventListener("focusout" , (e)=>{
            e.target.style.border = "2px solid #ecebf0";
        });




         
        document.querySelector(".score_input_id").addEventListener("focus" , (e)=>{
            e.target.style.border = "2px solid #75d2d7";
        });
        document.querySelector(".score_input_id").addEventListener("focusout" , (e)=>{
            e.target.style.border = "2px solid #ecebf0";
        });


        document.querySelector(".score_input_pass").addEventListener("focus" , (e)=>{
            e.target.style.border = "2px solid #75d2d7";
        });
        document.querySelector(".score_input_pass").addEventListener("focusout" , (e)=>{
            e.target.style.border = "2px solid #ecebf0";
        });



        document.querySelector(".score_passc").addEventListener("focus" , (e)=>{
            e.target.style.border = "2px solid #75d2d7";
        });
        document.querySelector(".score_passc").addEventListener("focusout" , (e)=>{
            e.target.style.border = "2px solid #ecebf0";
        });






        

    }
}