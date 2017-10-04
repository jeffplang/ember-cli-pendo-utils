import Ember from 'ember';

export function initialize() {
    Ember.Router.reopen({
        pendoPageLoad: Ember.on('didTransition', function () {
            window.pendo.pageLoad();
        })
    });
}
