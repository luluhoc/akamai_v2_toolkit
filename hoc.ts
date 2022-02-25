import { Command } from 'commander';
const program = new Command();
import fs from 'fs';

import chalk from 'chalk';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function Bc(b8: number, m8: number) {
  return b8 % m8;
}

function Gf(sf: number, gF: number) {
  return sf & gF;
}

function Lc(mc: number, zc: number) {
  return mc >> zc;
}
class arrayClass {
  _arr;
  constructor(size: number) {
    this._arr = new Array(size);
  }

  get(index: number) {
    return this._arr.length > index ? this._arr[index] : null;
  }

  set(index: number, value: any) {
    if (this._arr.length <= index) {
      const totalToAdd = index - this._arr.length;
      for (let i = 0; i <= totalToAdd; i++) {
        this._arr.push(null);
      }
    }
    this._arr[index] = value;
  }
}

function CharCodeAt(input: string, index: number): string   {
  return index >= input.length ? "0" : input[index];
}

function Join(list: Array<string>, delimiter: string) {
  let toReturn = "";
  for (let i = 0; i < list.length; i++) {
    toReturn += list[i]?.toString();
    if (i < list.length - 1)
      toReturn += delimiter;
  }

  return toReturn;
}

function Wq(xq: string, nq: number) {
  var b6 = "";
  var m6 = "";
  var j6 = new arrayClass(16);

  if (m6.length === 0) {
    for (var i = 0; i < 127; i++) {
      if (i < 32 || i == 39 || i == 34 || i == 92) {
        j6.set(i, -1);
      } else {
        j6.set(i, m6.length);
        m6 += String.fromCharCode(i).toString();
      }
    }
  }
  for (var i = 0; i < xq.length; i++) {
    var a6 = Number(Gf(Lc(nq, 8), 65535));
    nq *= 65793;
    nq &= Number(4294967295);
    nq += 4282663;
    nq &= 8388607;
    var yq = xq[i].toString();
    for (var j = 1; j <= m6.length; j++) {
      var st = (a6 % m6.length + j);
      if (st % m6.length != j6.get(CharCodeAt(xq, i).charCodeAt(0))) continue;
      var ls = st - a6 % m6.length;
      yq = m6[ls >= m6.length ? ls - m6.length : ls].toString();
    }

    b6 += yq;
  }
  return b6;
}

function Gq(lq: string, zq: number) {
  var oq = lq.split(",");
  const m1 = new Array(oq.length).fill(0);
  const m2 = new Array(oq.length).fill(0);
  for (var vq = 0; vq < oq.length; vq++) {
    var iq = Number(Bc(Gf(Lc(zq, 8), 65535), oq.length));
    zq *= 65793;
    zq &= Number(4294967295);
    zq += 4282663;
    zq &= 8388607;
    var mq = Number(Bc(Gf(Lc(zq, 8), 65535), oq.length));
    zq *= 65793;
    zq &= 4294967295;
    zq += 4282663;
    zq &= 8388607;
    m1[oq.length - 1 - vq] = iq;
    m2[oq.length - 1 - vq] = mq;
  }

  for (var i = 0; i < m1.length; i++) {
    [oq[m2[i]], oq[m1[i]]] = [oq[m1[i]], oq[m2[i]]]
  }

  return Join(oq, ",");
}

function MakeItEvenBetter(sensor: string) {
  var result = sensor;
  // 1
  var match = sensor.match(/,-112,(.{2,25})http[s]*:\//si);
  if (match && match.length && match.length >= 1 && match[0] && match[1]) {
    result = sensor.replace(/t90I:,M93B9,9705,i5_,/sig, "");
  }
  return result;
}



function main(sensor: string) {
  if (!sensor) {
   
  }
  const extract = sensor.substring("{\"sensor_data\":\"".length, sensor.length - 2);
  const match = extract.match(/^([\d]+\;[\d]+\;[\d]+\;[\d]+\,[\d]+\,[\d]+\,[\d]+\,[\d]+;)/s);
  if (!match) {
    throw new Error('No match please verify the sensor provided');
  }
  const keys = match[0].split(';')
  const firstKey = +keys[1];
  const secondKey = +keys[2];
  const decrypted = Wq(extract.substring(match[0].length), firstKey);
  let fixedOrder = Gq(decrypted, secondKey);
  fixedOrder = MakeItEvenBetter(fixedOrder);

  fixedOrder = match[0] + fixedOrder;
  console.log(chalk.bold.red('Decrypted:'))
  console.log(chalk.bold.blue('=================='))
  console.log(chalk.green(fixedOrder));
  console.log(chalk.bold.blue('=================='))
  return fixedOrder;
}

program
  .name('akamai decryptor')
  .description('CLI to decrypt Akamai sensor')
  .version('0.1.0');

program.command('decrypt')
  .description('Decrypt Akamai sensor')
  .argument('<name of the file>', 'filename')
  .action((filename: string) => {
    const data = fs.readFileSync(`${__dirname}/${filename}`, 'utf8');
    main(data)
  });

program.parse();