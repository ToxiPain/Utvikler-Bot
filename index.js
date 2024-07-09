// |-------CODIGO DE "START" DEL BOT---------|


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
// ¿¿??

// Guardar la sesión en:
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
