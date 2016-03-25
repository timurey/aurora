import Ember from 'ember';
// import $ from 'jquery';
export default Ember.Component.extend({
    actions: {
        autoComplite() {//Скрывает ненужные пункты меню
            var filter = this.filter;
            $(".sidebar-menu > li").each(function() {
                if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });
        },
        search(){
            // var filter = this.filter;
        }
    }
});
