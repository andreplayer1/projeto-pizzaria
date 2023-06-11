let textContent = document.getElementById('text-content')
const cad = () => {
    const name = document.querySelector('input#nome').value;
    const sname = document.querySelector('input#sobrenome').value;
    const user = document.querySelector('input#usuario').value;
    const password = document.querySelector('input#senha').value;
    const confirmPassword = document.querySelector('input#senha2').value

    try {
        if(!name || !sname || !user || !password){
            throw new Error('Todos os campos precisam ser preenchidos!')
        }
        if(password !== confirmPassword){
            throw new Error('Senhas não conferem!')
        }
        
        localStorage.setItem("name", name);
        localStorage.setItem("sname", sname);
        localStorage.setItem("user", user);
        localStorage.setItem("password", password);
        
        location.href = "../projeto-pizzaria/login.html";
    } catch (error) {
        textContent.innerText = (error.message)
    }
};

document.getElementById('buttoncadastrar').addEventListener('click', cad)