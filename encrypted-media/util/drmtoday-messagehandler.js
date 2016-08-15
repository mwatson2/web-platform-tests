// Configuration for DRMs
drmconfig = {
    "com.widevine.alpha": {
        "serverURL": "https://lic.staging.drmtoday.com/license-proxy-widevine/cenc/",
        "httpRequestHeaders": {
            "dt-custom-data": "eyJ1c2VySWQiOiIxMjM0NSIsInNlc3Npb25JZCI6ImV3b2dJQ0p3Y205bWFXeGxJaUE2SUhzS0lDQWdJQ0p3ZFhKamFHRnpaU0lnT2lCN0lIMEtJQ0I5TEFvZ0lDSnZkWFJ3ZFhSUWNtOTBaV04wYVc5dUlpQTZJSHNLSUNBZ0lDSmthV2RwZEdGc0lpQTZJR1poYkhObExBb2dJQ0FnSW1GdVlXeHZaM1ZsSWlBNklHWmhiSE5sTEFvZ0lDQWdJbVZ1Wm05eVkyVWlJRG9nWm1Gc2MyVUtJQ0I5TEFvZ0lDSnpkRzl5WlV4cFkyVnVjMlVpSURvZ1ptRnNjMlVLZlFvSyIsIm1lcmNoYW50IjoiY2FibGVsYWJzIn0K"
        }
    },
    
    "com.microsoft.playready": {
        "serverURL": "http://playready-testserver.azurewebsites.net/rightsmanager.asmx",
        // This is a Netflix certificate
        "certificate" :
        
        "Q0hBSQAAAAEAAAUEAAAAAAAAAAJDRVJUAAAAAQAAAfQAAAFkAAEAAQAAAFjt9G6KdSncCkrjbTQPN+/2AAAAAAAAAAAAAAAJIPbrW9dj0qydQFIomYFHOwbhGZVGP2ZsPwcvjh+NFkP/////AAAAAAAAAAAAAAAAAAAAAAABAAoAAABYxw6TjIuUUmvdCcl00t4RBAAAADpodHRwOi8vcGxheXJlYWR5LmRpcmVjdHRhcHMubmV0L3ByL3N2Yy9yaWdodHNtYW5hZ2VyLmFzbXgAAAAAAQAFAAAADAAAAAAAAQAGAAAAXAAAAAEAAQIAAAAAADBRmRRpqV4cfRLcWz9WoXIGZ5qzD9xxJe0CSI2mXJQdPHEFZltrTkZtdmurwVaEI2etJY0OesCeOCzCqmEtTkcAAAABAAAAAgAAAAcAAAA8AAAAAAAAAAVEVEFQAAAAAAAAABVNZXRlcmluZyBDZXJ0aWZpY2F0ZQAAAAAAAAABAAAAAAABAAgAAACQAAEAQGHic/IPbmLCKXxc/MH20X/RtjhXH4jfowBWsQE1QWgUUBPFId7HH65YuQJ5fxbQJCT6Hw0iHqKzaTkefrhIpOoAAAIAW+uRUsdaChtq/AMUI4qPlK2Bi4bwOyjJcSQWz16LAFfwibn5yHVDEgNA4cQ9lt3kS4drx7pCC+FR/YLlHBAV7ENFUlQAAAABAAAC/AAAAmwAAQABAAAAWMk5Z0ovo2X0b2C9K5PbFX8AAAAAAAAAAAAAAARTYd1EkpFovPAZUjOj2doDLnHiRSfYc89Fs7gosBfar/////8AAAAAAAAAAAAAAAAAAAAAAAEABQAAAAwAAAAAAAEABgAAAGAAAAABAAECAAAAAABb65FSx1oKG2r8AxQjio+UrYGLhvA7KMlxJBbPXosAV/CJufnIdUMSA0DhxD2W3eRLh2vHukIL4VH9guUcEBXsAAAAAgAAAAEAAAAMAAAABwAAAZgAAAAAAAAAgE1pY3Jvc29mdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgFBsYXlSZWFkeSBTTDAgTWV0ZXJpbmcgUm9vdCBDQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgDEuMC4wLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEACAAAAJAAAQBArAKJsEIDWNG5ulOgLvSUb8I2zZ0c5lZGYvpIO56Z0UNk/uC4Mq3jwXQUUN6m/48V5J/vuLDhWu740aRQc1dDDAAAAgCGTWHP8iVuQixWizwoABz7PhUnZYWEugUht5sYKNk23h2Cao/D5uf6epDVyilG8fZKLvufXc/+fkNOtEKT+sWr"
        
            /* "Q0hBSQAAAAEAAAUMAAAAAAAAAAJDRVJUAAAAAQAAAfwAAAFsAAEAAQAAAFhr+y4Ydms5rTmj6bCCteW2AAAAAAAAAAAAAAAJzZtwNxHterM9CAoJYOM3CF9Tj0d9KND413a+UtNzRTb/////AAAAAAAAAAAAAAAAAAAAAAABAAoAAABU8vU0ozkqocBJMVIX2K4dugAAADZodHRwOi8vbnJkcC5uY2NwLm5ldGZsaXguY29tL3Jtc2RrL3JpZ2h0c21hbmFnZXIuYXNteAAAAAABAAUAAAAMAAAAAAABAAYAAABcAAAAAQABAgAAAAAAglDQ2GehCoNSsOaaB8zstNK0cCnf1+9gX8wM+2xwLlqJ1kyokCjt3F8P2NqXHM4mEU/G1T0HBBSI3j6XpKqzgAAAAAEAAAACAAAABwAAAEgAAAAAAAAACE5ldGZsaXgAAAAAH1BsYXlSZWFkeSBNZXRlcmluZyBDZXJ0aWZpY2F0ZQAAAAAABjIwMjQ4AAAAAAEACAAAAJAAAQBAU73up7T8eJYVK4UHuKYgMQIRbo0yf27Y5EPZRPmzkx1ZDMor7Prs77CAOU9S9k0RxpxPnqUwAKRPIVCe0aX2+AAAAgBb65FSx1oKG2r8AxQjio+UrYGLhvA7KMlxJBbPXosAV/CJufnIdUMSA0DhxD2W3eRLh2vHukIL4VH9guUcEBXsQ0VSVAAAAAEAAAL8AAACbAABAAEAAABYyTlnSi+jZfRvYL0rk9sVfwAAAAAAAAAAAAAABFNh3USSkWi88BlSM6PZ2gMuceJFJ9hzz0WzuCiwF9qv/////wAAAAAAAAAAAAAAAAAAAAAAAQAFAAAADAAAAAAAAQAGAAAAYAAAAAEAAQIAAAAAAFvrkVLHWgobavwDFCOKj5StgYuG8DsoyXEkFs9eiwBX8Im5+ch1QxIDQOHEPZbd5EuHa8e6QgvhUf2C5RwQFewAAAACAAAAAQAAAAwAAAAHAAABmAAAAAAAAACATWljcm9zb2Z0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAUGxheVJlYWR5IFNMMCBNZXRlcmluZyBSb290IENBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAMS4wLjAuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAIAAAAkAABAECsAomwQgNY0bm6U6Au9JRvwjbNnRzmVkZi+kg7npnRQ2T+4LgyrePBdBRQ3qb/jxXkn++4sOFa7vjRpFBzV0MMAAACAIZNYc/yJW5CLFaLPCgAHPs+FSdlhYS6BSG3mxgo2TbeHYJqj8Pm5/p6kNXKKUbx9kou+59dz/5+Q060QpP6xas="*/
    },
    
    "com.microsoft.playready2" : {
        "serverURL": "http://playready.directtaps.net/pr/svc/rightsmanager.asmx",
        // This certificate was obtained from the server above
        "certificate" : "Q0hBSQAAAAEAAAUEAAAAAAAAAAJDRVJUAAAAAQAAAfQAAAFkAAEAAQAAAFjt9G6KdSncCkrjbTQPN+/2AAAAAAAAAAAAAAAJIPbrW9dj0qydQFIomYFHOwbhGZVGP2ZsPwcvjh+NFkP/////AAAAAAAAAAAAAAAAAAAAAAABAAoAAABYxw6TjIuUUmvdCcl00t4RBAAAADpodHRwOi8vcGxheXJlYWR5LmRpcmVjdHRhcHMubmV0L3ByL3N2Yy9yaWdodHNtYW5hZ2VyLmFzbXgAAAAAAQAFAAAADAAAAAAAAQAGAAAAXAAAAAEAAQIAAAAAADBRmRRpqV4cfRLcWz9WoXIGZ5qzD9xxJe0CSI2mXJQdPHEFZltrTkZtdmurwVaEI2etJY0OesCeOCzCqmEtTkcAAAABAAAAAgAAAAcAAAA8AAAAAAAAAAVEVEFQAAAAAAAAABVNZXRlcmluZyBDZXJ0aWZpY2F0ZQAAAAAAAAABAAAAAAABAAgAAACQAAEAQGHic/IPbmLCKXxc/MH20X/RtjhXH4jfowBWsQE1QWgUUBPFId7HH65YuQJ5fxbQJCT6Hw0iHqKzaTkefrhIpOoAAAIAW+uRUsdaChtq/AMUI4qPlK2Bi4bwOyjJcSQWz16LAFfwibn5yHVDEgNA4cQ9lt3kS4drx7pCC+FR/YLlHBAV7ENFUlQAAAABAAAC/AAAAmwAAQABAAAAWMk5Z0ovo2X0b2C9K5PbFX8AAAAAAAAAAAAAAARTYd1EkpFovPAZUjOj2doDLnHiRSfYc89Fs7gosBfar/////8AAAAAAAAAAAAAAAAAAAAAAAEABQAAAAwAAAAAAAEABgAAAGAAAAABAAECAAAAAABb65FSx1oKG2r8AxQjio+UrYGLhvA7KMlxJBbPXosAV/CJufnIdUMSA0DhxD2W3eRLh2vHukIL4VH9guUcEBXsAAAAAgAAAAEAAAAMAAAABwAAAZgAAAAAAAAAgE1pY3Jvc29mdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgFBsYXlSZWFkeSBTTDAgTWV0ZXJpbmcgUm9vdCBDQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgDEuMC4wLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEACAAAAJAAAQBArAKJsEIDWNG5ulOgLvSUb8I2zZ0c5lZGYvpIO56Z0UNk/uC4Mq3jwXQUUN6m/48V5J/vuLDhWu740aRQc1dDDAAAAgCGTWHP8iVuQixWizwoABz7PhUnZYWEugUht5sYKNk23h2Cao/D5uf6epDVyilG8fZKLvufXc/+fkNOtEKT+sWr"
    },

    "com.microsoft.playready1": {
        "serverURL": "https://lic.staging.drmtoday.com/license-proxy-headerauth/drmtoday/RightsManager.asmx",
        "certificate" : "Q0hBSQAAAAEAAAUMAAAAAAAAAAJDRVJUAAAAAQAAAfwAAAFsAAEAAQAAAFhr+y4Ydms5rTmj6bCCteW2AAAAAAAAAAAAAAAJzZtwNxHterM9CAoJYOM3CF9Tj0d9KND413a+UtNzRTb/////AAAAAAAAAAAAAAAAAAAAAAABAAoAAABU8vU0ozkqocBJMVIX2K4dugAAADZodHRwOi8vbnJkcC5uY2NwLm5ldGZsaXguY29tL3Jtc2RrL3JpZ2h0c21hbmFnZXIuYXNteAAAAAABAAUAAAAMAAAAAAABAAYAAABcAAAAAQABAgAAAAAAglDQ2GehCoNSsOaaB8zstNK0cCnf1+9gX8wM+2xwLlqJ1kyokCjt3F8P2NqXHM4mEU/G1T0HBBSI3j6XpKqzgAAAAAEAAAACAAAABwAAAEgAAAAAAAAACE5ldGZsaXgAAAAAH1BsYXlSZWFkeSBNZXRlcmluZyBDZXJ0aWZpY2F0ZQAAAAAABjIwMjQ4AAAAAAEACAAAAJAAAQBAU73up7T8eJYVK4UHuKYgMQIRbo0yf27Y5EPZRPmzkx1ZDMor7Prs77CAOU9S9k0RxpxPnqUwAKRPIVCe0aX2+AAAAgBb65FSx1oKG2r8AxQjio+UrYGLhvA7KMlxJBbPXosAV/CJufnIdUMSA0DhxD2W3eRLh2vHukIL4VH9guUcEBXsQ0VSVAAAAAEAAAL8AAACbAABAAEAAABYyTlnSi+jZfRvYL0rk9sVfwAAAAAAAAAAAAAABFNh3USSkWi88BlSM6PZ2gMuceJFJ9hzz0WzuCiwF9qv/////wAAAAAAAAAAAAAAAAAAAAAAAQAFAAAADAAAAAAAAQAGAAAAYAAAAAEAAQIAAAAAAFvrkVLHWgobavwDFCOKj5StgYuG8DsoyXEkFs9eiwBX8Im5+ch1QxIDQOHEPZbd5EuHa8e6QgvhUf2C5RwQFewAAAACAAAAAQAAAAwAAAAHAAABmAAAAAAAAACATWljcm9zb2Z0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAUGxheVJlYWR5IFNMMCBNZXRlcmluZyBSb290IENBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAMS4wLjAuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAIAAAAkAABAECsAomwQgNY0bm6U6Au9JRvwjbNnRzmVkZi+kg7npnRQ2T+4LgyrePBdBRQ3qb/jxXkn++4sOFa7vjRpFBzV0MMAAACAIZNYc/yJW5CLFaLPCgAHPs+FSdlhYS6BSG3mxgo2TbeHYJqj8Pm5/p6kNXKKUbx9kou+59dz/5+Q060QpP6xas=",
        "httpRequestHeaders": {
            "http-header-CustomData": "eyJ1c2VySWQiOiIxMjM0NSIsInNlc3Npb25JZCI6ImV3b2dJQ0p3Y205bWFXeGxJaUE2SUhzS0lDQWdJQ0p3ZFhKamFHRnpaU0lnT2lCN0lIMEtJQ0I5TEFvZ0lDSnZkWFJ3ZFhSUWNtOTBaV04wYVc5dUlpQTZJSHNLSUNBZ0lDSmthV2RwZEdGc0lpQTZJR1poYkhObExBb2dJQ0FnSW1GdVlXeHZaM1ZsSWlBNklHWmhiSE5sTEFvZ0lDQWdJbVZ1Wm05eVkyVWlJRG9nWm1Gc2MyVUtJQ0I5TEFvZ0lDSnpkRzl5WlV4cFkyVnVjMlVpSURvZ1ptRnNjMlVLZlFvSyIsIm1lcmNoYW50IjoiY2FibGVsYWJzIn0K",
        }
    }
};


// Expect utf8decoder and utf8decoder to be TextEncoder('utf-8') and TextDecoder('utf-8') respectively
function messagehandler(keysystem, messageType, message) {

    var contentmetadata = this;

    const keySystems = {
        'com.widevine.alpha': {
            responseType: 'json',
            getLicenseMessage: function(response) {
                return base64DecodeToUnit8Array( response.license );
            },
            getErrorResponse: function(response) {
                return response;
            },
            getLicenseRequestFromMessage: function(message) {
                return new Uint8Array(message);
            },
            getRequestHeadersFromMessage: function(/*message*/) {
                return null;
            }
        },
        'com.microsoft.playready': {
            responseType: 'arraybuffer',
            getLicenseMessage: function(response) {
                return response;
            },
            getErrorResponse: function(response) {
                return String.fromCharCode.apply(null, new Uint16Array(response));
            },
            getLicenseRequestFromMessage: function(message) {
                var msg,
                    xmlDoc;
                var licenseRequest = null;
                var parser = new DOMParser();
                var dataview = new Uint16Array(message);

                msg = String.fromCharCode.apply(null, dataview);
                xmlDoc = parser.parseFromString(msg, 'application/xml');

                if (xmlDoc.getElementsByTagName('Challenge')[0]) {
                    var Challenge = xmlDoc.getElementsByTagName('Challenge')[0].childNodes[0].nodeValue;
                    if (Challenge) {
                        licenseRequest = atob(Challenge);
                    }
                }
                return licenseRequest;
            },
            getRequestHeadersFromMessage: function(message) {
                var msg,
                    xmlDoc;
                var headers = {};
                var parser = new DOMParser();
                var dataview = new Uint16Array(message);

                msg = String.fromCharCode.apply(null, dataview);
                xmlDoc = parser.parseFromString(msg, 'application/xml');

                var headerNameList = xmlDoc.getElementsByTagName('name');
                var headerValueList = xmlDoc.getElementsByTagName('value');
                for (var i = 0; i < headerNameList.length; i++) {
                    headers[headerNameList[i].childNodes[0].nodeValue] = headerValueList[i].childNodes[0].nodeValue;
                }
                // some versions of the PlayReady CDM return 'Content' instead of 'Content-Type'.
                // this is NOT w3c conform and license servers may reject the request!
                // -> rename it to proper w3c definition!
                if (headers.hasOwnProperty('Content')) {
                    headers['Content-Type'] = headers.Content;
                    delete headers.Content;
                }
                return headers;
            }
        }
    };

    return new Promise(function(resolve, reject) {

        var protData = drmconfig[keysystem],
            url = undefined,
            reqheaders = {},
            credentials = undefined;

        if (protData) {
            if (protData.serverURL) {
                url = protData.serverURL;
                if(true/*url.indexOf("azurewebsites") > 0 || url.indexOf("directtaps") > 0*/) {
                    url += "?PlayRight=1&SecureStop=1&UseSimpleNonPersistentLicense=1";
                    url += "&AnalogVideoOPL=0";
                    url += "&SecurityLevel=0";
                    url += "&UncompressedDigitalVideoOPL=0";
                    url += "&CompressedDigitalVideoOPL=0";
                    url += "&UncompressedDigitalAudioOPL=0";
                    url += "&CompressedDigitalAudioOPL=0";
                    url += "&PlayEnablers=B621D91F-EDCC-4035-8D4B-DC71760D43E9";
                    url += "&ContentKey=" + encodeURIComponent(btoa(String.fromCharCode.apply(null, contentmetadata.keys[0].key)));
                }
            } else {
                reject('Undefined serverURL');
                return;
            }
        } else {
            reject('Unsupported keySystem');
            return;
        }

        // Ensure valid license server URL
        if (!url) {
            reject('DRM: No license server URL specified!');
            return;
        }

        // Set optional XMLHttpRequest headers from protection data and message
        var updateHeaders = function(headers) {
            var key;
            if (headers) {
                for (key in headers) {
                    if ('authorization' === key.toLowerCase()) {
                        credentials = 'include';
                    }
                    reqheaders[key] = headers[key];
                }
            }
        };

        if (protData) {
            updateHeaders(protData.httpRequestHeaders);
        }

        updateHeaders(keySystems[keysystem].getRequestHeadersFromMessage(message));

        // Set withCredentials property from protData
        if (protData && protData.withCredentials) {
            credentials = 'include';
        }

        fetch(url, {
            method: 'POST',
            headers: reqheaders,
            credentials: credentials,
            body: keySystems[keysystem].getLicenseRequestFromMessage(message)
        }).then(function(response) {
            if(response.status !== 200) {
                reject('DRM: ' + keysystem + ' update, XHR status is "' + response.statusText + '" (' + response.status + '), expected to be 200. readyState is ' + response.readyState + '.  Response is ' + ((response) ? keySystems[keysystem].getErrorResponse(response) : 'NONE'));
                return;
            } else {
                if(keySystems[keysystem].responseType === 'json') {
                    return response.json();
                } else if(keySystems[keysystem].responseType === 'arraybuffer') {
                    return response.arrayBuffer();
                }

            }
        }).then(function(response){
            resolve(keySystems[keysystem].getLicenseMessage(response));
        }).catch(function(error) {
            reject(error);
            return;
        });
    });
}

function getServerCertificate( keySystem ) {
    var certificate = drmconfig[keySystem]['certificate'];
    return certificate ? base64DecodeToUnit8Array( certificate ) : null;
}

