var listAccount = [];
const Account_URL = "https://61b5b8db0e84b70017331bac.mockapi.io/accounts";

document.getElementById('buttonLog-in').addEventListener("click",function(){
    var email = document.getElementById('email').value;
    var password =  CryptoJS.MD5(document.getElementById('password').value).toString();
    axios(Account_URL)
    .then(async (res) =>{
        for(var ele of res.data){
            if(email == ele.email){
                data ={
                    email:email,
                    account:password,
                    type:false,
                    id:ele.id
                };
                await udatePassword(ele.id,data);
                alert('Đăng nhập thành công');
                window.location.href = 'question.html';
                return false;
            };
        }
        return true;
    })
    .then(function(status){
        if(status){
            alert("Email hoặc Mật khẩu không đúng hoặc Account không thuộc tổ chức PNV! Bạn hãy đăng nhập lại.");
            document.getElementById('email').value ='';
            document.getElementById('password').value ='';
        };
    })
});

async function udatePassword(id,data){
    await axios.put(`${Account_URL}/${id}`,data)
};
