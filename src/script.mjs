var socket = io();
import {dom, log} from '../libs/concise.mjs';

const sargs = [2500,'rsc/index.html','kill','log']; //sub-server arguments

dom.idGet('kill' ).addEventListener('click', () => socket.emit('kill'));
dom.idGet('serve').addEventListener('click', () => socket.emit('serve', sargs));
