function buildUrl(url, options) {
    var queryString = [];
    var key;
    var builtUrl;

    if (url === null) {
      builtUrl = '';
    } else if (typeof(url) === 'object') {
      builtUrl = '';
      options = url;
    } else {
      builtUrl = url;
    }

    if (options) {
      if (options.path) {
        builtUrl += '/' + options.path;
      }

      if (options.queryParams) {
        for (key in options.queryParams) {
          if (options.queryParams.hasOwnProperty(key)) {
            queryString.push(key + '=' + options.queryParams[key]);
          }
        }
        builtUrl += '?' + queryString.join('&');
      }

      if (options.hash) {
        builtUrl += '#' + options.hash;
      }
    }

    return builtUrl;
};
function buildUrl(url, options) {
    var builtUrl = verifierUrl(url, options);

    if (options) {
        if (options.path) {
            builtUrl = ajouterUrl(builtUrl, options.path);
        }

        if (options.queryParams) {
            builtUrl = parametreUrl(builtUrl, options.queryParams);
        }

        if (options.hash) {
            builtUrl = hash(builtUrl, options.hash);
        }
    }

    return builtUrl;
}

function verifierUrl(url, options) {
    var finalUrl
    if (url === null) {
        finalUrl = '';
      } else if (typeof(url) === 'object') {
        finalUrl = '';
        options = url;
      } else {
        finalUrl = url;
      }
}

function ajouterUrl(url, path) {
    return url += '/' + path;
}

function parametreUrl(url, queryParams) {
    var queryString = [];
    var key;
    for (key in queryParams) {
        if (queryParams.hasOwnProperty(key)) {
            queryString.push(key + '=' + queryParams[key]);
        }
    }
    return url += '?' + queryString.join('&');
}

function hash(url, hash) {
    return url += '#' + hash;
}
