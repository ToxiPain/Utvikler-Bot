module.exports = async (conn, msg, m, setting, store) => {
    try {
        let { ownerNumber, botName, gamewaktu, limitCount } = setting
        const { type, quotedMsg, mentioned, now, fromMe } = msg
        if (msg.isBaileys) return
        const content = JSON.stringify(msg.message)
        const from = msg.key.remoted

if (prefijo) {
    var prefix = /^[./#@]/;
} else {
    prefix = [];
} 
    }

