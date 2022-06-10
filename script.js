function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       //sempre que começar uma variavel vazia começa-se com ''
       var genêro = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genêro = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'menino.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'homem.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'homem.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else if (fsex[1].checked){
            genêro = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'menina.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'mulher.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
           
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genêro} com ${idade} anos.`
        res.appendChild(img)
        //chama as fotos no js
    }
}