const blacklist = [
{
    username:"Player123",
    reason:"ใช้โปรโกง",
    duration:"ถาวร",
    staff:"ADMIN"
}
];

function searchUser(){

    const input = document.getElementById("searchInput").value.toLowerCase();

    const result = document.getElementById("result");

    const user = blacklist.find(
        u => u.username.toLowerCase() === input
    );

    if(user){

        result.innerHTML = `
        <div class="card">

        <h2>${user.username}</h2>

        <p style="color:red;font-weight:bold;">
        BLACKLIST
        </p>

        <p>เหตุผล: ${user.reason}</p>

        <p>ระยะเวลา: ${user.duration}</p>

        <p>Staff: ${user.staff}</p>

        </div>
        `;

    }else{

        result.innerHTML = `
        <div class="card">

        <h2>ไม่พบข้อมูล</h2>

        <p style="color:green;font-weight:bold;">
        CLEAR ✅
        </p>

        </div>
        `;
    }
}

function openLogin(){
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin(){
    document.getElementById("loginModal").style.display = "none";
}

function login(){

    const username = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    if(username === "admin" && password === "1234"){

        alert("เข้าสู่ระบบสำเร็จ");

    }else{

        alert("ชื่อผู้ใช้หรือรหัสผ่านผิด");

    }

}
