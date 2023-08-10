import "./login.css";

const Login = () => {
  const logo = "/assets/logo/logoo 2.png";

  return (
    <div className="boxLogin">
      <div className="logoLogin">
        <img
          src={logo}
          alt=""
          width="300px"
          heigt="350px"
          style={{ marginBottom: "50px", marginTop: "60px" }}
        />
      </div>
      <div className="formLogin">
        <form action="/login">
          <h1>Login</h1>
          <input type="text" placeholder="Username" required id="username"/>
          <br />
          <input type="password" placeholder="Password" required id="password"/>
        <div className="buttonLogin">
        <button>Login</button>
        <div className="buttonMasuk">
          <button>Masuk dengan Google</button>
        </div>
          <button>Masuk dengan Facebook</button>
        </div>
        <p>
          Dont have an account? <a href="/register">Register</a><br/>
        </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

// const loginAkun = () => {
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;

//   var username1 = localStorage.getItem("username")
//   var password1 = localStorage.getItem("password")

//   if (username === username1 && password === password1) {
//     window.location.href = "/home";
//   } else {
//     alert("Username atau Password Salah")
//   }
// }