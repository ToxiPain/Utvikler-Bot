// Codigo de inicio del Bot (start)
//-
// Importar constantes de Baileys
"use strict";
const { default: makeWASocket, initInMemoryKeyStore, BufferJSON, DisconnectReason, delay, AnyMessageContent, useMultiFileAuthState, makeInMemoryStore, } = require("@whiskeysockets/baileys");
const { Boom } = require('@hapi/boom');
const fs = require("fs");
const { MAIN_LOGGER } = require("./ruta/logger"); //Equivalente a "Logger.js" o "Simple.js"
//Faltan readers
