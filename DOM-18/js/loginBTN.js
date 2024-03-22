

// para limpiar el local store
// localStorage.clear();

// BOTONES DEL LOGIN
// textExplain


// obtencion de datos si no crea el arreglo vacio
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios", JSON.stringify([

  // creacion del usuario SUDO 
  {
    fullName: 'SUDO',
    email: 'SUDO',
    password: '123'
  }
]));


    // Guada o actualiza la lista de los usuarios
    


// Boton para crear la Cuenta
// Este boton se encarga de ocultar el formulario de login y muestra el formulario de registro
const btnCreateAccount = document.getElementById("btnCreateAccount")

btnCreateAccount.addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("createAccountForm").style.display = "block";
    // elimiar el elemento por completo para que n estorbe y no desborde la pag
    document.getElementById("textExplain").remove();
    document.getElementById("DivIzquierdo").classList.remove("col-lg-6")
    document.getElementById("DivIzquierdo").classList.add("col-lg-12")
    document.getElementById("DivBtnLogin").classList.add('col-lg-6')
    document.getElementById("DivBtnCreateAccount").classList.add("col-lg-6")
  });


  // Boton de Login , este oculta el formulario de Registro y muestra el form de incio de secion
const btnLogin =   document.getElementById("btnLogin")


btnLogin.addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("createAccountForm").style.display = "none";
    document.getElementById("DivIzquierdo").classList.remove("col-lg-12")
    document.getElementById("DivIzquierdo").classList.add("col-lg-6")
    // document.getElementById("DivBtnLogin").classList.remove("col-lg-6")
    const newDiv = document.createElement("div");
    newDiv.id = "textExplain";
    newDiv.className = "col-lg-6 d-flex align-items-center gradient-custom-2";
    // Crear el div tal cual existe
    newDiv.innerHTML = `
    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
        <h4 class="mb-4">Nosotros Somos Mas que Una Tienda</h4>
        <p class="small mb-0">Somos tu app favorita de almacenaje, se te olvido tus quehaceres. La tiendita te los recuerda en cualquier dia
            Disfruta siempre junto a Nosotros
        </p>
    </div>`
    document.getElementById("hero").appendChild(newDiv);

    document.getElementById("DivBtnLogin").classList.remove('col-lg-6')
    document.getElementById("DivBtnCreateAccount").classList.remove("col-lg-6")
  });



  document.addEventListener("DOMContentLoaded", function() {


    //Paos para el formulario 
    const form = document.getElementById("createAccountForm");
    const formLogin = document.getElementById("loginForm");

    // llamada a los botones
    const btnCreateAccount = document.getElementById("DivBtnCreateAccountCreate");
    const btnLoginLogin = document.getElementById("btnLogin-Login");

    // ---------------- BOTON INICIAR SESION --------------

    btnLoginLogin.addEventListener("click" , function(){

       // datos del formulario
       const usuario = document.getElementById("email-login").value;
       const password = document.getElementById("password-login").value;

      if(!validarCamposLogin(usuario , password)){
        alert("Alguno de los campos se encuentr vacio")
        return
      }

       
      //  Valida inicio como SUDO
        if (  usuario === 'SUDO' && password === '123') {
          alert("Se Inicio Sesion Correctamente SUPER ADMIN");
          window.location.href = "SUDO.html"
          

        }else{
        // recupera el local store
        const usuarios = JSON.parse(localStorage.getItem("usuarios"));

        // Verifica si existe el usuario
        const UserExiste = usuarios.find( user => 

        {user.email === usuario &&
        user.password === password});
        

        if (UserExiste) {
           // Sesion Abierta
           alert("Se Inicio Sesion Correctamente");
           // sacar los datos del localStore
        
        } else {
          // Sesion negada
          alert("Usuario o Contraseña incorrecto");

        }} 

        formLogin.reset()
    })



    // ------------ BOTON CREAR CUENTA ------------------
    btnCreateAccount.addEventListener("click", function() {
      
      // datos del formulario
      const nombreCompleto = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const ConfirmarPassword = document.getElementById("confirmPassword").value;

        // llamada a la funcion para validar que no se ingresraon algun campo vacio
      if(!validarCampos(nombreCompleto , email , password , ConfirmarPassword)){  
        alert("Hay Campos Vacios");
        return;
      }

      // console.log(email,nombreCompleto , password, ConfirmarPassword);
      // Verificar si las contraseñas coinciden
      if (password != ConfirmarPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }
  
    //  los datos para veriicar por el email si existe o no 
    const emailsExistentes = usuarios.map( user => user.email)

    if(emailsExistentes.includes(email)){
      alert("El correo esta en uso");
      return;
    }

    //Creacion del nuevo usuario
    const newUsuario = {
      fullName: nombreCompleto,
      email: email,
      password: password
    };

    // Apush del nuevo usuarios
    usuarios.push(newUsuario);

    // Guada o actualiza la lista de los usuarios
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("La cuenta se creo correctamente");
    form.reset();
    });
  });


  // ------------------  APARTADO DE FUNCIONES ---------------------


  function validarCampos(nombreCompleto , email , password , ConfirmarPassword){
    
    if ( nombreCompleto.trim()== '' || email.trim()== '' || password.trim()== '' || ConfirmarPassword.trim()== '') {
       return false
    }
    return true
  }
  function validarCamposLogin(usuario , password){
    if ( usuario.trim()== '' || password.trim()== '') {
      return false
   }
   return true
  }
  // console.log(localStorage);
  console.log(localStorage.usuarios);