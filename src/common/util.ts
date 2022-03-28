import _ from 'lodash';

export const isProduction = (): boolean => {
  return process.env.NODE_ENV === 'production';
};

export function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export function getRandomFloat(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

export const randomStr = (length: number) => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const randomInt = (length: number) => {
  let text = '';
  const possible = '0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return +text;
};

export const context = ({ req, connection }) =>
  connection
    ? {
        req: {
          headers: _.transform(
            connection.context,
            (result, val, key: string) => {
              result[key.toLowerCase()] = val;
            },
          ),
        },
      }
    : { req };

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function replaceAllNonDigits(theString: string) {
  const theNumber = Number(theString.replace(/^\D+/g, '').trim());
  return isNaN(theNumber) ? 0 : theNumber;
}

export function deepFind(obj, path) {
  const paths = path.split('.');
  let current = obj;
  let i;

  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] === undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }
  return current;
}

export function getExternalPath(path: string) {
  return process.env.EXT_HOST + '/' + process.env.EXT_MIDDLEWARE + '/' + path;
}

export function isEmpty(data: any) {
  if (typeof data === 'object') {
    if (JSON.stringify(data) === '{}' || JSON.stringify(data) === '[]') {
      return true;
    } else if (!data) {
      return true;
    }
    return false;
  } else if (typeof data === 'string') {
    if (!data.trim()) {
      return true;
    }
    return false;
  } else if (typeof data === 'undefined') {
    return true;
  } else {
    return false;
  }
}

export function randomNonce() {
  return Math.floor(100000 + Math.random() * 900000);
}
