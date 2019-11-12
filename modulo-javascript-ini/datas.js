var data = new Date()

/*Get retorna os valores e o Set seleciona

console.log(data.getDate()) //buscando data
console.log(data.getMonth()) // buscando mês
console.log(data.getFullYear()) // buscando mês
console.log(`${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`) //template string 

//adicionar ou remover dias
console.log(data.toString())
data.setDate(data.getDate()+1) // adicionando um dia
console.log(data.toString())

*/

// calculando o dia entre duas datas

var data1 = new Date(2019,10,12)

var data2 = new Date(2020,0,9)


//console.log(data1.toString())
//console.log(data2.toString())

//console.log(data1.getTime()) // getTime retorna o valor em milisegundos
//console.log(data2.getTime())

//console.log(`Diferença entre datas: ${Math.abs(data1.getTime() - data2.getTime())}`)

var milisegundosDia = (1*24*60*60*1000)
var milisegundos_entre_Datas = Math.abs(data1.getTime() - data2.getTime())

console.log(milisegundosDia)
console.log(milisegundos_entre_Datas)

console.log(milisegundosDia / milisegundos_entre_Datas )

