const log = console.log;


window.addEventListener("load", () => {
    let app = new App();
});



class App {
    constructor() {
        log("dsa");
        this.addEvent();
        let cvs = document.querySelector("canvas");
        this.drawCanvas(cvs, 100, 70);
    }


    addEvent() {
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

    drawCanvas(canvas, total, current) {
        let ctx = canvas.getContext("2d");
        canvas.width = 300;
        canvas.height = 150;
        let w = canvas.width;
        let h = canvas.height;
        let now = 0;
        let term = current / 45;
        let frame = setInterval(() => {
            now += term;
            if (now >= current) {
                now = current;
                clearInterval(frame);
            }
            this.draw(ctx, w, h, now, total);
        }, 1000 / 60);
    }
    draw(ctx, w, h, now, total) {
        ctx.clearRect(0, 0, w, h);

        ctx.beginPath();
        ctx.moveTo(w / 2, h / 2);
        ctx.arc(w / 2, h / 2, w / 2 - 70, -Math.PI / 2, 3 / 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = "#f4f5f9";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(w / 2, h / 2);
        ctx.arc(w / 2, h / 2, w / 2 - 70, -Math.PI / 2, -Math.PI / 2 + (now / total) * (2 * Math.PI));
        ctx.fillStyle = "#87e0be";
        ctx.fill();
        ctx.closePath();


        ctx.beginPath();
        ctx.moveTo(w / 2, h / 2);
        ctx.arc(w / 2, h / 2, w / 2 - 80, -Math.PI / 2, 3 / 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.fill();

        let percent = Math.floor(now / total * 1000) / 10;
        ctx.moveTo(w / 2, h / 2);
        ctx.font = "25px Arial";
        ctx.fillStyle = "#333030";
        ctx.textAlign = 'center';
        ctx.testBaseline = "middle";
        ctx.fillText(percent + "%", w / 2, h / 2);
    }

}