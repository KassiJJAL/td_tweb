var crypto = require('crypto');

//Ce module contient des fonctions permettant de chiffrer/dechiffrer les messages 


exports.decrypter=function(cryptkey, iv, encryptdata) { //chiffrer un message
        var decipher = crypto.createDecipheriv('aes-256-cbc', cryptkey, iv);
        
        return Buffer.concat([
            decipher.update(encryptdata),
            decipher.final()
        ]);
}


exports.encrypter=function(cryptkey, iv, cleardata) { //dechiffrer un message
    var encipher = crypto.createCipheriv('aes-256-cbc', cryptkey, iv);
    return Buffer.concat([
        encipher.update(cleardata),
        encipher.final()
    ]);
}
