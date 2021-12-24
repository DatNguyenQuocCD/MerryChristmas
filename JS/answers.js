// const answers = (x,y,z) =>{
//     if(x == 3 || x==7){
//         document.getElementById('true-1').style.display='block';
//     }else{
//         document.getElementById('false-1').style.display='block';
//     };

//     document.getElementById('question-'+z).style.display='none';
//     document.getElementById('question-'+y).style.display='block';
    
// };
var points = 0;
const answers = (x,y) =>{
    if(x == 3 || x==7 || x==10 || x==16 || x==18 || x==23 || x==25 || x==32 || x==35){
        document.getElementById('true-'+y).style.display='block';
        points ++;
    }else if(x==37 || x==38 || x==39 || x==40){
        points++;
        document.getElementById('true-'+y).style.display='block';
        document.getElementById('question-'+y).style.display='none';
        document.getElementById('point').innerHTML += `
            <h1 id="points">Đúng ${points}/10 Câu hỏi</h1>
            <button type="button" class="btn btn-danger size" data-bs-toggle="modal" data-bs-target="#exampleModal"><h2>Mở Quà</h2></button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title text-danger hat" id="exampleModalLabel">
                        <img id="hat" src="./img/hat.png" alt="">
                        Quá Giáng Sinh
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h3 class="text-dark">
                        <img id="wreath" src="./img/christmas-wreath.png" alt="">
                        Nhân dịp lễ giáng sinh mình sinh chúc tất cả mọi người có một kỳ giáng sinh vui vẻ
                        <img id="santa" src="./img/santa-claus.png" alt="">
                        <img id="santa" src="./img/santa-claus.png" alt="">
                    </h3>
                    <h3 class="text-dark">Và đây là phần quà của bạn:</h3>
                    <div id = "gifts1"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"><h4>Nhận Quà</h4></button>
                </div>
                </div>
            </div>
            </div>
        `;
        randomGifts();
        return;
    }else{
        document.getElementById('false-'+y).style.display='block';
    };
    function times(){
        var time = setInterval (function(){
            document.getElementById('question-'+y).style.display='none';
            document.getElementById('question-'+(y+1)).style.display='block';
            clearInterval(time);
        },1500);
    };
    times();
    
};

const gifts_URL = "https://61b5b8db0e84b70017331bac.mockapi.io/gifts";

function randomGifts(){
    var a = Math.floor(Math.random() * 10) + 1;
    getData(a);
}

function getData(id){
    axios(`${gifts_URL}/${id}`)
    .then(res => {
        document.getElementById('gifts1').innerHTML = `
        <img id="gift" src="${res.data.img}" alt="">
        `;
    });
};

