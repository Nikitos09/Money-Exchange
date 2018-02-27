module.exports = function makeExchange(currency) {
    if (currency <=10000 && currency >= 0 ) { // 1 case
      h=currency / 50;
      h= h - (h%1);

      q=(currency - 50 * h) / 25;
      q= q - (q%1);

      d=(currency - ( 50 * h + 25 * q)) / 10;
      d= d - (d%1);

      n=(currency - ( 50 * h + 25 * q + 10 * d)) / 5;
      n= n - (n%1);

      p=(currency - ( 50 * h + 25 * q + 10 * d + 5 * n));
      p= p - (p%1);

      let user= {
        H :h,
        Q :q,
        D :d,
        N :n,
        P :p,
    };

    if (h==0)delete user.H;
    if (q==0)delete user.Q;
    if (d==0)delete user.D;
    if (n==0)delete user.N;
    if (p==0)delete user.P;
    return(user);
    }

    if (currency > 10000) { // 2 case
      let user = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
      }
      return(user);
    }

    if (currency<0) {
      let user = {};
      return user;
    }
}
