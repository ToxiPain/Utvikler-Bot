// **Importar Dependencias**
"use strict";
const { default: makeWASocket, initInMemoryKeyStore, BufferJSON, DisconnectReason, delay, AnyMessageContent, useMultiFileAuthState, makeInMemoryStore, } = require("@whiskeysockets/baileys");
const { Boom } = require('@hapi/boom');
const fs = require("fs");
const logg = require('pino');
const NodeCache = require('node-cache');
const { MAIN_LOGGER } = require("./ruta/logger"); //PENDIENTE POR EDITAR

const useStore = !process.argv.includes('--no-store'); //Se encarga de procesar MakeInMemory Store
const usePairingCode = process.argv.includes('--use-pairing-code'); // Se usa para la parte del QR
const useMobile = process.argv.includes('--mobile'); //Weas de Native Mobile API

const msgRetryCounterCache = new NodeCache();

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
