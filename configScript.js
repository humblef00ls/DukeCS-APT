import * as fs from 'fs';
import yaml from 'js-yaml';

try {
    let fileContents = fs.readFileSync('./preconfig.yaml', 'utf8');
    let data = yaml.safeLoad(fileContents);

    console.log(data);

    
    let logRows = fs.readFileSync('./src/store/index.js').toString().split('\n');

    logRows[0] = "const config = "+ JSON.stringify(data)
    fs.writeFileSync('./src/store/index.js', logRows.join('\n'));

    let logRows2 = fs.readFileSync('./src/app.css').toString().split('\n');

    logRows2[6] = ":root{"+ Object.keys(data.setup.theme ).map(x=>"--"+ (x.includes('_') ? x.split('_').join('-') : x )+ ":" + data.setup.theme[x]).join(";") +"}" 
    fs.writeFileSync('./src/app.css', logRows2.join('\n'));


} catch (e) {
    console.log(e);
}