let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(pg=0){
    console.log("Engordou")
    this.peso += pg

}
}
amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)