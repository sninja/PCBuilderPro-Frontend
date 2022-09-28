import { Link, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let role;
  if (localStorage.getItem("user") != null) {
    const decoded = jwt_decode(localStorage.getItem("user"));
    role = decoded.roles[0];   // role = admin
  }
  return (
    <>
      {(role === "admin") ? <AdminNavbar /> : <NotLoggedInUser />}
    </>
  );
}




function AdminNavbar() {

  let navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  }
  return (
    <>

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">PCBuilderPro</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">


            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/login" >Login</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/registeruser" >Register</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/components" >Components</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/customers" >Customers</Link>
              </li>
            </ul>

          </div>
          <button class="btn btn-outline-success my-2 my-sm-0 pull-right" type="button" onClick={logout}>Logout</button>
        </div>
      </nav>

      <Outlet />

    </>
  );
};


function NotLoggedInUser() {
  return (
    <>

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">PCBuilderPro</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">


            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/login" >Login</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/registeruser" >Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

    </>
  );
};

export default Navbar;