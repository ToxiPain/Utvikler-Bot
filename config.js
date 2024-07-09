import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = "";
global.sessionCode = "";

global.owner = [
  ["50557418454",'owner',true],
  ["50585424403"],
  ["50584051357"],
  ["50587390513"],
  ["584246303295"],
  ["5350224003"],
  ["5351100717"],
  ["50589746581"],
  ["+50670238298"],
  ["5493883302144"],
  ["50586985163"],
  ["51935748512"],
  ["50558137244"],
  ["50577576427"]]

global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) //pendiente
// Sticker WM
global.packname = ''
global.author = 'UtviklerBot'

global.wm = 'UtviklerBot'
global.igfg = 'UtviklerBot'
global.wait = '*⌛ _Cargando..._ ▬▬▬▭*'

const setting = {
  sessionName: "Utvikler_Sesion", 
};

export { watchFile, unwatchFile, fileURLToPath, fs, cheerio, fetch, axios, moment, setting };
