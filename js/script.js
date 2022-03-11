/*olá nome o seu IMC FOI DE: IMCe definicão x*/
const nome = document.querySelector('.nome');
const peso = document.querySelector('.peso');
const altura = document.querySelector('.altura');
const calcular = document.querySelector('.calcular');
const monstarResultado = document.querySelector('.mostrar-resultado');
const resposta = document.querySelector('.resposta');

const condicao = () =>{
    let pesoN = Number(peso.value);
    let alturaN = Number(altura.value);
    let imc = pesoN / (alturaN * alturaN);
    if(imc < 18.5){
        return 'Você Está Abaixo Do Peso'
    }else if(18.5 <= imc < 25){
        return 'Você Está Na Faixa De Peso Ideal'
    }else if(25 <= imc < 30){
        return 'Você Está Acima Do Peso'
    }else if(30 <= imc < 35){
        return 'Você Está Com Obesidade Grau 1'
    }else if(35 <= imc < 40){
        return 'Você Está Com Obesidade Grau 2'
    }else{
        return 'Você Está Com Obesidade Grau 3'
    }
}

const inserirResultado = () => {
    let pesoN = Number(peso.value);
    let alturaN = Number(altura.value);
    let imc = pesoN / (alturaN * alturaN);
    let resultado = imc.toFixed(2)

    if(imc){
        resposta.innerHTML = `Olá ${nome.value}, o seu IMC é de: ${resultado}. E ${condicao()}`
    }
    if(!imc){
        alert('Dados inválidos tente novamente');
    }

}

const limpar = () => {
    peso.value =''
    altura.value =''
    nome.value = ""
}

calcular.addEventListener('click', (e) =>{
    resposta.innerHTML = ''
    inserirResultado()
    limpar()
})
document.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        resposta.innerHTML = ''
        inserirResultado()
        limpar()
    }
})