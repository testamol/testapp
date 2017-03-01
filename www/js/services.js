angular.module('starter.services',[])
.service('WC', function(){
    return {
        WC: function(){
            var Woocommerce = new WooCommerceAPI.WooCommerceAPI({
                url: 'http://befabb.com/dev',
                consumerKey: 'ck_556e99cd119321386402e3c2e4beae3be87a530d',
                consumerSecret: 'cs_f12bbb06478b34e94f76fc2577ed3c4b86fe8c89'
            });
            return Woocommerce;
        }
}});