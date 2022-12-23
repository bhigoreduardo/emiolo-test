const apiUrl = "http://localhost:3000";

async function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  const pathArray = window.location.pathname.split("/");

  if (pathArray[1] === "") {
    axios({
      method: "POST",
      url: `${apiUrl}/auth/autenticacao`,
      data: {
        email: data.email,
        googleId: data.sub,
      },
    })
      .then(res => {
        localStorage.setItem("tokenJWT", JSON.stringify(res.data.token));
        localStorage.setItem("usuarioAuth", JSON.stringify(res.data.usuario));
        window.location.href = '/painel';
      })
      .catch(error => {
        console.log(error.response.data.errors[0].msg);
      });

    /* Teste modelo com fetch */

    // await fetch(`${apiUrl}/auth/autenticacao`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: body,
    // })
    //   .then((res) => console.log(res))
    //   .catch((error) => console.log(error));

  } else if (pathArray[1] === "cadastro") {
    const usuario = {
      nome: data.given_name,
      sobrenome: data.family_name,
      email: data.email,
      googleId: data.sub,
    };

    axios({
      method: "POST",
      url: `${apiUrl}/auth/cadastro`,
      data: {
        nome: data.given_name,
        sobrenome: data.family_name,
        email: data.email,
        googleId: data.sub,
      },
    })
      .then(res => {
        localStorage.setItem("tokenJWT", JSON.stringify(res.data.token));
        localStorage.setItem("usuarioAuth", JSON.stringify(res.data.usuario));
        window.location.href = '/painel'
      })
      .catch(error => {
        console.log(error.response.data.errors[0].msg);
      });
  }
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "39700198647-ie2kvutoio9c0va8q18fkuna5j31d078.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { 
      theme: "filled_black",
      size: "large",
      type: "standard",
      shape: "pill",
      locale: "pt-BR",
      logo_alignment: "left",
      width: "400" 
    });
  google.accounts.id.prompt();
};
