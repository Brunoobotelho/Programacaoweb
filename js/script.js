class Aluno {

    nome;
    matricula;
    nota1;
    nota2;
    nota3;
    media;
  
    constructor(nome, matricula, nota1, nota2, nota3) {
  
       this.nome = nome;
       this.matricula = matricula;
       this.nota1 = nota1;
       this.nota2 = nota2;
       this.nota3 = nota3;
       
       this.arrayAlunos = [];
  
    }

    matricular(aluno) {
      this.arrayAlunos.push(aluno);
    }
    
    salvar(){
      let aluno = this.dadosAluno();

      if(this.validacao(aluno) == true){
        this.matricular(aluno);
        }

      this.listTable();
      this.limpar();
    }

    listTable(){
      let tbody = document.getElementById('tbody');
      tbody.innerText = '';

      for(let i = 0; i < this.arrayAlunos.length; i++){
        let tr = tbody.insertRow();
        let tdNome = tr.insertCell();
        let tdMatricula = tr.insertCell();
        let tdNota1 = tr.insertCell();
        let tdNota2 = tr.insertCell();
        let tdNota3 = tr.insertCell();
        let tdMedia = tr.insertCell();
        let td_opcoes = tr.insertCell();

           
        tdNome.innerText = this.arrayAlunos[i].nome;
        tdMatricula.innerText = this.arrayAlunos[i].matricula;
        tdNota1.innerText = this.arrayAlunos[i].nota1;
        tdNota2.innerText = this.arrayAlunos[i].nota2;
        tdNota3.innerText = this.arrayAlunos[i].nota3;
        tdMedia.innerText = this.arrayAlunos[i].media;

        tdMatricula.classList.add('center');
        tdNome.classList.add('center');
        tdNota1.classList.add('center');
        tdNota2.classList.add('center');
        tdNota3.classList.add('center');
        tdMedia.classList.add('center');
        

        let lixeira = document.createElement('img');
        lixeira.src = 'images/delete.png';
        lixeira.setAttribute("onclick","aluno.deletar("+this.arrayAlunos[i].matricula+")");


        td_opcoes.appendChild(lixeira);
        td_opcoes.classList.add('center');

      }
    }

    dadosAluno() {
      let aluno = {}
      
      aluno.nome = document.getElementById('aluno').value;
      aluno.matricula = document.getElementById('matricula').value;
      aluno.nota1 = document.getElementById('nota1').value;
      aluno.nota2 = document.getElementById('nota2').value;
      aluno.nota3 = document.getElementById('nota3').value;
      aluno.media = (parseFloat(parseFloat(aluno.nota1) + parseFloat(aluno.nota2) + parseFloat(aluno.nota3)) / 3).toFixed(2);

      return aluno;
    }

    validacao(aluno) {
      let alerta = '';

      if(aluno.nome == ''){
        alerta += ' - Preencha o nome do aluno a matricular \n';
      }
      if(aluno.matricula == ''){
        alerta += ' - Preencha o número de matrícula do aluno a matricular \n';
      }
      if(aluno.nota1 == ''){
        alerta += ' - Preencha o campo nota 1 \n';
      }
      if(aluno.nota2 == ''){
        alerta += ' - Preencha o campo nota 2 \n';
      }
      if(aluno.nota3 == ''){
        alerta += ' - Preencha o campo nota 3 \n';
      }
      if(alerta != ''){
        alert(alerta);
        return false;
      }

      for(let i = 0; i < this.arrayAlunos.length; i++){
        if (aluno.matricula == this.arrayAlunos[i].matricula){
          alert('A matricula informada já existe');
          return false;
        }
      }
      

      return true;
    }

    limpar(){      
      document.getElementById('aluno').value = '';
      document.getElementById('matricula').value = '';
      document.getElementById('nota1').value = '';
      document.getElementById('nota2').value = '';
      document.getElementById('nota3').value = '';
    }
    
    deletar(matricula){

      if(confirm('Deletar o aluno?')){

      let tbody = document.getElementById('tbody');

      for(let i = 0; i < this.arrayAlunos.length; i++){
        if (this.arrayAlunos[i].matricula == matricula){
          this.arrayAlunos.splice(i,1);
          tbody.deleteRow(i);
        }
      }
    }
  }  
}

var aluno = new Aluno();

