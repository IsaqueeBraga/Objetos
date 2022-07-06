let dados = {
nome: 'Isaque',
idade: 24,
profissão: 'MEI'
};

console. log(dados);

dados.carro = 'corsa';
console. log(dados)
console. log(dados.carro);

delete dados.profissão;
console. log (dados);





dados.cadastro = ['Ester', 'Kamila', 'Regina', 'Lucas', 'Matheus', 'Cristina'];
console. log(dados);


let cadastro =[{
    nome:"Ester",
    idade: 12,
    telefone:2198890878,
    amigos:["Sophia", "Tattiele", "Yasmin", "Maria"],
},
{
    nome:"Kamila",
    idade: 24,
    telefone:21976522059,
    amigos:["Gabriela", "Andressa", "Fernanda", "Gabriel"],
},   
{
    nome:"Regina",
    idade: 57,
    telefone:2198543090,
    amigos:["Goreth", "Moisés", "Cintia", "Andréia"],
},
{
    nome:"Lucas",
    idade: 24,
    telefone:2195439090,
    amigos:["Isaque", "Matheus", "Camila", "Jorge"],
},
{
    nome:"Matheus",
    idade: 24,
    telefone:2194329068,
    amigos:["Lucas", "Luciano", "Fernando", "Caio"], 
},
{
    nome:"Cristina",
    idade: 22,
    telefone:2196789542,
    amigos: ["Luana", "Fernanda", "Isaque", "Larissa"],
}]
console.log(cadastro)