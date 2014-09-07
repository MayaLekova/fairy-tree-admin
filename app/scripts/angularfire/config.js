'use strict';

// Declare app level module which depends on filters, and services
angular.module('fairyTreeAdminApp')

  // version of this seed app is compatible with angularFire 0.6
  // see tags for other versions: https://github.com/firebase/angularFire-seed/tags
  .constant('angularFireVersion', '0.6')

  // where to redirect users if they need to authenticate (see module.routeSecurity)
  .constant('loginRedirectPath', '/login')

  // which login service we're using
  .constant('loginProviders', 'facebook,password')

  // your Firebase URL goes here
  .constant('FBURL', 'https://fairybase.firebaseio.com');