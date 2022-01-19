/*COMMENT*/
import {serve} from '../libs/serve.mjs'
serve(...[2500,"rsc/index.html","kill","log"])
console.log(process.pid)
