//Classificador de Nivel do Heroi
let nomeHeroi = "Jorge";
let xp = 9999;
let nivel = "";
switch (true){
//Nivel ferro
    case (xp <= 1000) : 
        nivel = "Ferro";
    break
//Nivel Bronze
    case ((xp => 1001)&&(xp<=2000)): 
        nivel = "Bronze";
    break
//Nivel Prata
    case ((xp => 2001)&&(xp<=5000)): 
        nivel = "Prata";
    break
 //Nivel Ouro
    case ((xp => 5001)&&(xp<=7000)):
        nivel = "Ouro";
    break
 //Nivel Platina
    case ((xp => 7001)&&(xp<=8000)):
        nivel = "Platina";
    break
 //Nivel Ascendente
    case ((xp => 8001)&&(xp<=9000)):
        nivel = "Ascendente";
    break
//Nivel Imortal
    case ((xp => 9001)&&(xp<=10000)): 
        nivel = "Imortal";
    break
//Nivel Radiante
    case (xp > 10000): 
        nivel = "Radiante";
    break
}
console.log(`XP do Herói é de ${xp} pontos.`);
console.log(`O Herói de nome ${nomeHeroi} está no níve de ${nivel}.`);