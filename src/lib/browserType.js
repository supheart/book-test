

var getBrowserType = function(userAgent){
  if (!userAgent) {
    return false;
  }

  if(isIPad(userAgent)){
    return 1;
  }else if(isIPhone(userAgent)){
    return 2;
  }else if(isMsIe(userAgent)){
    return 3;
  }else if(isMobile(userAgent)){
    return 4;
  }else{
    return 0;
  }
}

var isIPad = function (userAgent) {
  return /ipad/gi.test(ua.toLowerCase());
};

var isIPhone = function (req) {
  return /iphone/gi.test(ua.toLowerCase());
};

var isMsIe = function (userAgent) {
  if (/chrome|webkit/gi.test(ua.toLowerCase())) {
      return false;
  }
  return parseInt((/msie (\d+)/.exec(ua.toLowerCase()) || [])[1], 10);
};

var isMobile = function (userAgent) {
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(ua);
}