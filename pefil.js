const campos = ['nome', 'habilidade', 'sobre', 'linkedin', 'github'];

function editarPerfil() {
  campos.forEach(campo => {
    document.getElementById(`${campo}Texto`).style.display = 'none';
    const input = document.getElementById(`${campo}Input`);
    input.style.display = 'block';
    if (campo === 'linkedin' || campo === 'github') {
      input.value = document.getElementById(`${campo}Texto`).href;
    } else {
      input.value = document.getElementById(`${campo}Texto`).textContent;
    }
  });

  document.getElementById('fotoInput').style.display = 'block';
}

function salvarPerfil() {
  campos.forEach(campo => {
    const input = document.getElementById(`${campo}Input`);
    const texto = document.getElementById(`${campo}Texto`);
    input.style.display = 'none';
    texto.style.display = 'inline';

    if (campo === 'linkedin' || campo === 'github') {
      texto.href = input.value;
      texto.textContent = input.value;
    } else {
      texto.textContent = input.value;
    }
  });

  document.getElementById('fotoInput').style.display = 'none';
}

document.getElementById('fotoInput').addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('fotoPerfil').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
