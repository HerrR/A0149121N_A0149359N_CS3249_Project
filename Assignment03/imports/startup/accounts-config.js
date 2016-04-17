import { Accounts } from 'meteor/accounts-base';

// Only require a username and a password for signup
Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY',
});

Accounts.onCreateUser(function(options, user){
	user.profile = options.profile;
	return user;
})