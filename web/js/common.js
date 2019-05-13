/**
 * Created by chaosi on 15-11-28.
 */

var domain = "http://localhost:8080/panoj_war_exploded"

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);     //匹配目标参数
    if (r != null){
        decodeURI(r[2]);
        return r[2];
    }
    return null; //返回参数值
}

// function checkIsLogined($http, afterCheck) {
//     $http({
//         method: 'GET',
//         url: './api/index.php?s=/Home/Session/isSessionBind'
//     }).success(afterCheck).error(function (status) {
//         alert(status);
//     })
// }

function readJson ($http, $q) {
    return {
        query: function (url) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: url
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (status) {
                deferred.reject(status);
            });
            return deferred.promise;
        }
    };
}

function doAjax($http, type, url, doSuccess,doError){
    $http({
        method: type,
        url: domain + url
    }).success(function (res) {
        console.log(res);
        if(res.code=='0000'){
            doSuccess(res.result);
        }else{
            //alert(res.info);
            console.log(res.info);
        }
    }).error(function (status) {
        //console.log(status);
        //alert('网络不给力');
        doError();
    });
}

