import fs from 'fs';

let name = "leekyountaek";
let date = new Date();
let fileName = date.getFullYear() +'_'+ name;

fs.writeFileSync('./' + fileName + '.txt', name);
console.dir(fs);