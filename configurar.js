const fs = require('fs')
const chalk = require('chalk')

//coloque o número do dono
global.dono = '18097677081' 

//informações da figurinha 
global.packname = '🔞𝐗-𝐓𝐄𝐂𝐇🔰:\🔞𝐗-𝐓𝐄𝐂𝐇🔰:\+18097677081:'
global.author = '🔞𝐗-𝐓𝐄𝐂𝐇🔰'

//coloque seu prefixo
global.prefixo = ["🔞"]

//auto biografia do whatsapp 
global.autobio = false //true = ativo, false = destivado

//respostas 
global.resposta = {
    feito: 'c,est fait patron !',
    admin: 'Cette fonctionnalité ne peut être utilisée que par les administrateurs',
    botAdmin: 'Cette fonctionnalité ne peut être utilisée que lorsque le bot est un administrateur de groupe',
    dono: 'Cette fonctionnalité ne peut être utilisée que par le propriétaire',
    grupo: 'Cette fonctionnalité est réservée aux groupes',
    private: 'Cette fonctionnalité est réservée aux conversations privées',
    aguarde: 'Attends quelques minutes...',
    error: 'Erreur!',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`'${__filename} foi atualizado'`))
    delete require.cache[file]
    require(file)
})
