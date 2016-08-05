function runTest(config, testname) {

    var testname = config.keysystem + ', retrieve persistent-usage-record in new window, '
                                    + /video\/([^;]*)/.exec( config.videoType )[ 1 ];

    var configuration = {   initDataTypes: [ config.initDataType ],
                            audioCapabilities: [ { contentType: config.audioType } ],
                            videoCapabilities: [ { contentType: config.videoType } ],
                            sessionTypes: [ 'persistent-usage-record' ] };


    async_test( function( test ) {

        var _video = config.video,
            _mediaKeys,
            _mediaKeySession,
            _mediaSource,
            _sessionId,
            _closing = false;
            
        function onFailure(location, error) {
            if ( location ) consoleWrite( error + ": " + location );
            forceTestFailureFromPromise(test, error);
        }

        function onEncrypted(event) {
            consoleWrite('onEncrypted');
        
            assert_equals(event.target, _video);
            assert_true(event instanceof window.MediaEncryptedEvent);
            assert_equals(event.type, 'encrypted');

            waitForEventAndRunStep('message', _mediaKeySession, onMessage, test);
            waitForEventAndRunStep('keystatuseschange', _mediaKeySession, onKeyStatusesChange, test);

            return _mediaKeySession.generateRequest(
                                config.initData ? config.initDataType : event.initDataType,
                                                config.initData || event.initData )
            .then( function() {
                _sessionId = _mediaKeySession.sessionId;
                dumpKeyStatusesForEdge( _mediaKeySession.keyStatuses );
            }).catch(onFailure.bind( null, 'generateRequest' ) );
            
            consoleWrite('onEncrypted done');
        }

        function onMessage(event) {
            consoleWrite('onMessage');
            assert_equals( event.target, _mediaKeySession );
            assert_true( event instanceof window.MediaKeyMessageEvent );
            assert_equals( event.type, 'message');

            assert_in_array(  event.messageType, [ 'license-request', 'individualization-request' ] );
            
            consoleWrite('Received ' + event.messageType );
            
            dumpKeyStatusesForEdge( _mediaKeySession.keyStatuses );

            config.messagehandler( config.keysystem, event.messageType, event.message ).then( function( response ) {
            
                consoleWrite('Received license');

                return _mediaKeySession.update( response );
            }).then( function() {
                
                dumpKeyStatusesForEdge( _mediaKeySession.keyStatuses );
                
                _video.setMediaKeys( _mediaKeys );
                
            }).catch(onFailure);
        }
        
        function onKeyStatusesChange(event) {
            consoleWrite('onKeyStatusesChange');
            dumpKeyStatusesForEdge( _mediaKeySession.keyStatuses );
        }

        function onPlaying(event) {
        
            consoleWrite('onPlaying');

            // Not using waitForEventAndRunStep() to avoid too many
            // EVENT(onTimeUpdate) logs.
            _video.addEventListener('timeupdate', onTimeupdate, true);
        }

        function onTimeupdate(event) {
            consoleWrite('onTimeupdate');
            if ( !_closing && _video.currentTime > ( config.duration || 5 ) ) {

                _closing = true;
               
                _video.removeEventListener('timeupdate', onTimeupdate );

                _video.pause();

                _mediaKeySession.closed.then( test.step_func( onClosed ) );

                _mediaKeySession.close();
            }
        }

        function onClosed(event) {
        
            consoleWrite('onClosed');

            _video.src = "";
            _video.setMediaKeys( null );
            
            delete config.video;
            delete config.messagehandler;

            var posted = false;
            var win = window.open( config.windowscript );
            win.onload = function() {
                if ( !posted ) {
                    consoleWrite('posting to other window from onload');
                    posted = true;
                    win.postMessage( { config: config, sessionId: _sessionId }, '*' );
                }
            }
            
            setTimeout( function() {
                if ( !posted ) {
                    consoleWrite('posting to other window from timeout');
                    posted = true;
                    win.postMessage( { config: config, sessionId: _sessionId }, '*' );
                }
            }, 2000 );
            
            window.addEventListener('message', test.step_func(function( event ) {

                event.data.forEach(test.step_func(function( assertion ) {

                    assert_equals(assertion.actual, assertion.expected, assertion.message);

                }));

                win.close();

                test.done();
            }));
        }
        
        function onError(event) {
            consoleWrite('onError');
            consoleWrite(_video.error.code + ", " + _video.error.msExtendedCode);
        }

        navigator.requestMediaKeySystemAccess(config.keysystem, [ configuration ]).then(function(access) {
            return access.createMediaKeys();
        }).then(function(mediaKeys) {
            _mediaKeys = mediaKeys;
        
            return config.servercertificate ? _mediaKeys.setServerCertificate( config.servercertificate ) : true;
        }).then( function( success ) {
            consoleWrite( 'setServerCertificate ' + success );
            
            _mediaKeySession = _mediaKeys.createSession( 'persistent-usage-record' );

            waitForEventAndRunStep('encrypted', _video, onEncrypted, test);
            waitForEventAndRunStep('playing', _video, onPlaying, test);
            waitForEventAndRunStep('error', _video, onError, test);

            return testmediasource(config);
        }).then(function(source) {
            consoleWrite('MediaSource created');
            _mediaSource = source;
            _video.src = URL.createObjectURL(_mediaSource);
            _video.play();
        }).catch(onFailure);
    }, testname);
}