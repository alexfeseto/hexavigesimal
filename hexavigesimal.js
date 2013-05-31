Number.prototype.toBijectiveBase26 = (function () {
  return function toBijectiveBase26() {
    n = this
    ret = "";
    while(parseInt(n)>0){
      --n;
      ret += String.fromCharCode("A".charCodeAt(0)+(n%26));
      n/=26;
    }
    return ret.split("").reverse().join("");
  };
}());
