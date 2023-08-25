
function FindProxyForURL(url, host) {

// proxy list
var PROXY="SOCKS5 127.0.0.1:1337"

// If the hostname matches, send direct.
    if (
     //   shExpMatch(host, "(*.maps.yandex.ru|maps.yandex.ru)") ||
       // shExpMatch(host, "(*.ya.ru|ya.ru)") ||
        shExpMatch(host, "(*.local)")
        )


        return PROXY;

// proxy list
// "SOCKS 172.17.0.1:2033"; // proxy1
// "SOCKS 172.17.2.1:2033"; // proxy2
// "SOCKS 172.17.1.1:2033"; // proxy3 

var PROXY2="SOCKS 127.0.0.1:1337"

if (
  shExpMatch(host, "(*.2ip.ru|2ip.ru)")
// ||   shExpMatch(host, "(*.avito.ru)")
) return PROXY2;

// shExpMatch(host, "(*esia.gosuslugi.ru|esia.gosuslugi.ru))")

// DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return "DIRECT";

}