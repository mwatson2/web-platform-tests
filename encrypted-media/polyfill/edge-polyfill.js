(function() {

    if ( navigator.userAgent.toLowerCase().indexOf('edge') > -1) ) {

        var _mediaKeySystemAccessCreateMediaKeys = MediakKeySystemAccess.prototype.createMediaKeys;
            _mediaKeysCreateSession = MediaKeys.prototype.createSession,
            _mediaKeySessionLoad = MediaKeySession.prototype.load,
            _mediaKeySessionUpdate = MediaKeySession.prototype.update,
            _mediaKeySessionRemove = MediaKeySession.prototype.remove;
    
        // Annotate MediaKeys with the keysystem
        MediaKeySystemAccess.prototype.createMediaKeys = function createMediaKeys() {
            return _mediaKeySystemAccessCreateMediaKeys.call( this ).then( function( mediaKeys ) {
                mediaKeys._playready = ( this.keySystem === 'com.microsoft.playready' );
                return mediaKeys;
            }.bind( this ) );
        };
    
        // Annotate the session with the session type
        MediaKeys.prototype.createSession = function createSession( sessionType ) {
            var actualSessionType = ( sessionType === 'persistent-usage-record' ) ? 'persistent-release-message' : sessionType;
            var session = _mediaKeysCreateSession.call( this, actualSessionType );
            if ( this._playready && sessionType === 'persistent-usage-record' ) session._playready_pur = true;
            return session;
        };
    
        // Call remove automatically on load for PlayReady persistent-usage-record sessions
        MediaKeySession.prototype.load = function load( sessionId )
        {
            _mediaKeySessionLoad._loaded = true;
            return _mediaKeySessionLoad.call( this, sessionId ).then( function( success ) {
                if ( success && this._playready_pur )
                {
                    return this.remove().then( function() { return true; } );
                }
                return success;
            }.bind( this ) );
        };
    
        // Annote the session if we have called remove on a PlayReady persistent-usage-record session
        MediaKeySession.prototype.remove = function remove()
        {
            // Return an error on a pur session that was loaded
            if ( this._playready_pur && this._loaded ) return Promise.reject( new Exception('InvalidAccessError') );
            if ( this._playready_pur ) {
                // Work around absense of in-session remove functionality
            
            }
        };
    
        // Close the session automatically on update after remove on a PlayReady persistent-usage-record session
        MediaKeySession.prototype.update = function update( message )
        {
            return _mediaKeySessionUpdate.call( this, message ).then( function() {
                if ( this._remove ) return this.close();
            }.bind( this ) );
        };
    }
})();