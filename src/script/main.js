
export default {
    install(Vue, options) {
        //时间过滤器,去掉时分秒
        Vue.filter('date-filter', function (date) {
            if (date == "" || date == null) {
                return;
            } else {
                var d = new Date(date);
                var newdate = "";
                newdate = d.getFullYear() + '-'
                    + (d.getMonth() > 8 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1)) + '-'
                    + (d.getDate() > 9 ? d.getDate() : "0" + (d.getDate()));
                return newdate
            }
        })
        Vue.filter('year-filter', function (date) {
            if (date == "" || date == null) {
                return;
            } else {
                var d = new Date(date);
                var newdate = "";
                newdate = d.getFullYear();
                return newdate
            }
        })
    }
}


