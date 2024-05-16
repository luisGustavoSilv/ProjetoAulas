// ==============================================
//          RESPOSTAS AOS BOTÕES
// ==============================================

novaAula = function () {
    window.location.href = "http://127.0.0.1:5500/nova.html";
}

calcelarNovaAula = function () {
    window.location.href = "http://127.0.0.1:5500/index.html";
}

editarAula = function (id) {
    window.location.href = "http://127.0.0.1:5500/edit.html" + id;
}


enviarNovaAula = function() {
    let dto = {
        id: '',
        disciplina: '',
        codDisciplina: document.getElementById('disc-id').value,
        assunto: document.getElementById('ass-id').value,
        duracao: document.getElementById('dur-id').value,
        data: document.getElementById('data-id').value,
        horario: document.getElementById('hora-id').value
    };
    if (!validaNovaAula(dto)) {
        document.getElementById('msg-id').style.display = 'block';
        return;
    }
    let request = new XMLHttpRequest();
    request.open('POST', '/registrarNova', true);
    request.setRequestHeader("Content-Type", "application/json");
    let json = JSON.stringify(dto);
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                window.location.href = '/';
            } else {
              
            }
        }
    }
    request.send(json);
}



enviarEdit = function () {
    let dto = {
        id: document.getElementById('id').innerHTML,
        disciplina: '',
        codDisciplina: document.getElementById('disc-id').value,
        assunto: document.getElementById('ass-id').value,
        duracao: document.getElementById('dur-id').value,
        data: document.getElementById('data-id').value,
        horario: document.getElementById('hora-id').value
    };
    let request = new XMLHttpRequest();
    request.open('POST', '/registrarEdit', true);
    request.setRequestHeader("Content-Type", "application/json");
    let json = JSON.stringify(dto);
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                window.location.href = '/';
            } else {
             
            }
        }
    }
    request.send(json);
}


deleta = function(id) {
    let request = new XMLHttpRequest();
    request.open('POST', '/delete', true);
    request.setRequestHeader("Content-Type", "application/json");
    
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                window.location.href = '/';
            } else {
                
            }
        }
    }
    request.send(id);
}


reset = function() {
    let request = new XMLHttpRequest();
    request.open('GET', '/reset', true);
    request.onreadystatechange = function() {
        if (request.status === 200) {
            window.location.href = '/';
        } else {
            
        }
    };
    request.send();
}



validaNovaAula = function(dto) {
    c1 = dto.codDisciplina == '0';
    c2 = dto.horario == '';
    c3 = dto.duracao <= 0;
    c4 = dto.data == '';
    c5 = dto.assunto == '';
    if (c1 || c2 || c3 || c4 || c5) {
        return false;
    }
    return true;
}