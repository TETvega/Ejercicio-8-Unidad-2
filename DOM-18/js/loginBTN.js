
// BOTONES DEL LOGIN
// textExplain

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

