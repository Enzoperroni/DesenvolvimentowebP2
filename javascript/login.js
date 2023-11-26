/*function checkForStoredPassword(redirectPage) {
  var checkedPassword = sessionStorage.getItem("checkedPassword");
  var storedPassword = sessionStorage.getItem("senha");

  if (!checkedPassword && window.location.pathname !== "/index.html") {
    redirectToLogin(redirectPage);
  } else if (checkedPassword === "true" && storedPassword === "SENHA" && window.location.pathname === "/index.html") {
    window.location.href = redirectPage;
  }
}

function redirectToLogin(redirectPage) {
  alert("A senha não está armazenada. Redirecionando para a página de login.");
  window.location.href = "index.html"; // Substitua "login.html" pelo caminho real da sua página de login
}

function checkPassword() {
  var enteredPassword = document.getElementById("senha").value;

  if (enteredPassword === "SENHA") {
    sessionStorage.setItem("senha", enteredPassword);
    sessionStorage.setItem("checkedPassword", "true");
    checkForStoredPassword("elenco.html"); // Substitua "elenco.html" pelo caminho real da página de destino após o login
  } else {
    alert("Senha incorreta. Por favor, insira a senha correta.");
  }
}

// Exemplo de uso na página de elenco.html
checkForStoredPassword("elenco.html");

// Exemplo de uso em outra página
checkForStoredPassword("outra.html");*/

 // Função para verificar a senha e redirecionar
 document.getElementById('botaologin').addEventListener('click', function() {
  // Obtenha o valor inserido pelo usuário no campo de senha
  var senhaInserida = document.getElementById('senha').value;
  // Calcule o hash MD5 da senha inserida
  var senhaInseridaHash = hex_md5(senhaInserida);

  // Substitua 'HASH_MD5_CORRETO' pelo hash MD5 correto da senha
  var senhaCorretaHash = '85ee0fe4f155a9af2657d85054ad63ca';

  // Compare os hashes MD5
  if (senhaInseridaHash === senhaCorretaHash) {
      // Redirecione o usuário para a próxima página
      window.location.href = 'elenco.html';
  } else {
      // Senha incorreta - você pode exibir uma mensagem de erro se desejar
      alert('Senha incorreta. Tente novamente.');
  }
  });

