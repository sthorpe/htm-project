let UserProfile = (function() {
    let full_name = "";
    let currentSession = "";
  
    let getName = function() {
        return full_name;
    };
  
    let setName = function(name) {
        full_name = name;
    };

    let getSession = function() {
        return currentSession;
    };

    let setSession = function(session) {
        currentSession = session;
    };
  
    return {
      getName: getName,
      setName: setName,
      getSession: getSession,
      setSession: setSession
    };
  
  })();
  
export default UserProfile;