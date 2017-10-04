import Ember from 'ember';

export function initialize() {
    Ember.Router.reopen({
        pendoPageLoad: Ember.on('didTransition', function () {
            if (window.pendo !== undefined) {
              window.pendo.pageLoad();
            }
        })
    });
}
