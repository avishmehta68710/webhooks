const pjson = require('../package.json');

console.log(`using  ${pjson.name} v${pjson.version}`);
export { default as initModels } from './models';
