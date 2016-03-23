import Ember from 'ember';
// import $ from 'jquery';
export default Ember.Component.extend({
    actions: {
        autoComplite() {//Скрывает ненужные пункты меню
            var filter = this.filter;
            Ember.$(".sidebar-menu > li").each(function() {
                if (Ember.$(this).text().search(new RegExp(filter, "i")) < 0) {
                    Ember.$(this).hide();
                } else {
                    Ember.$(this).show();
                }
            });
        },
        search(){
            // var filter = this.filter;
        }
    }
});
