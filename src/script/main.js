
export default {
    install(Vue, options) {
        Vue.prototype.$date = function (date, type) {
            if (date == "" || date == null) {
                return;
            } else {
                var d = new Date(date);
                var newdate = "";
                if (type == "month") {
                    newdate = d.getFullYear() + "-" + (d.getMonth() > 8 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1));
                } else {
                    newdate = d.getFullYear() + '-'
                        + (d.getMonth() > 8 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1)) + '-'
                        + (d.getDate() > 9 ? d.getDate() : "0" + (d.getDate()));
                }
                return newdate
            }
        },
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
    }
}


