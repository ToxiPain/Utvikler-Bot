// |-------CODIGO DE "START" DEL BOT---------|
//
// **Importar Dependencias**
"use strict";
const { default: makeWASocket, initInMemoryKeyStore, BufferJSON, DisconnectReason, delay, AnyMessageContent, useMultiFileAuthState, makeInMemoryStore, } = require("@whiskeysockets/baileys");
const { Boom } = require('@hapi/boom');
const fs = require("fs");
const logg = require('pino');
const figlet = require("figlet"); // Estilo de texto
const clui = require('clui'); // Permite meterle modificaciones a la consola
const { Spinner } = clui; // Complemento de Clui para añadir color
const moment = require('moment'); // Alternativa a readline para JS
const { color, mylog, infolog } = require("./lib/color"); // Importar color
const { MAIN_LOGGER } = require("./ruta/logger"); //PENDIENTE POR EDITAR
// **Constantes**
const useStore = !process.argv.includes('--no-store'); //Se encarga de procesar MakeInMemory Store
const usePairingCode = process.argv.includes('--use-pairing-code'); // Se usa para la parte del QR
const useMobile = process.argv.includes('--mobile'); //Weas de Native Mobile API

// **Definir el nombre de la sesión**
let setting = JSON.parse(fs.readFileSync('./global.json')); //Setting = Global.json
let session = `./${setting.sessionName}.json`;

// **Crear texto de Conexión**
function title() {
    console.clear();
    console.log(figlet.textSync('Utvikler', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 50,
        whitespaceBreak: false
    }));
    console.log(`Whatsapp Bot made by ToxiPain`);
}

// **Node Cache**
function nocache(module, cb = () => { }) {
    console.log(`Node Cache ${module} Watch`);
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module));
        cb(module);
    });
}

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)];
            resolve();
        } catch (e) {
            reject(e);
        }
    });
}
// **Estado de conexión en caso de detectar cambios**
const status = new Spinner('Iniciando el Bot');
const starting = new Spinner('Preparando para conectarse');
const reconnect = new Spinner('Reconectando Utvikler-Bot');

// **Iniciar Conexión**
async function fanStart() {
    const connectToWhatsApp = async () => {
        const { state, saveCreds } = await useMultiFileAuthState('Utvikler_Sesion');
        const store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) }); 
        const conn = makeWASocket({ 
          printQRInTerminal: true,
            logger: logg({ level: 'fatal' }), auth: state, browser: ["Utvikler Bot", "Safari", "3.0"],
            getMessage: async key => ({})
        });
        title();
        // 
        store.bind(conn.ev);
    }
}

// **Output de mensajes en la consola**
	conn.prefijo = true // el prefijo definido
	conn.nopref = false // sin uso de prefijo
	conn.prefa = '|' // prefijo de ejemplo
            if (!m.messages) return;
            var msg = m.messages[0];
            msg = serialize(conn, msg);
            msg.isBaileys = msg.key.id.startsWith('BAE5') || msg.key.id.startsWith('3EB0');
            require('./whisp')(conn, msg, m, setting, store);
        });
// Actualización de conexión y cerrado de sesión
        conn.ev.on('connection.update', (update) => {
            if (global.qr !== update.qr) {
                global.qr = update.qr;
            }
            const { connection, lastDisconnect } = update;
            if (connection === 'close') {
                lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? connectToWhatsApp() : console.log('Cesión cerrada. Bot desconectado...');
            }
        });

        conn.ev.on('creds.update', saveCreds); // Guardado de sesión


// FINAL DEL CODIGO DE EXAMPLE.TS EN JS
       conn.reply = (from, content, msg) => conn.sendMessage(from, { text: content }, { quoted: msg });

        return conn;
    };
// Detección de error
    try {
        await connectToWhatsApp();
    } catch (error) {
        console.error('Error iniciando el bot:', error);
    }
}
// Equivalente de Main start
fanStart();
