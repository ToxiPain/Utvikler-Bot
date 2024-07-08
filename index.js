// Codigo de inicio del Bot (start)
//-
// Importar constantes de Baileys
"use strict";
const { default: makeWASocket, initInMemoryKeyStore, BufferJSON, DisconnectReason, delay, AnyMessageContent, useMultiFileAuthState, makeInMemoryStore, } = require("@whiskeysockets/baileys");
const { Boom } = require('@hapi/boom');
const fs = require("fs");
const logg = require('pino');
const { MAIN_LOGGER } = require("./ruta/logger"); //Equivalente a "Logger.js" o "Simple.js"

const useStore = !process.argv.includes('--no-store'); //Se encarga de procesar MakeInMemory Store
const usePairingCode = process.argv.includes('--use-pairing-code'); // Se usa para la parte del QE
const useMobile = process.argv.includes('--mobile'); //Weas de Native Mobile API
