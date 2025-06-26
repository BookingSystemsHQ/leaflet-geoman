(() => {
  var Fl = Object.create;
  var Wi = Object.defineProperty;
  var Vl = Object.getOwnPropertyDescriptor;
  var Ul = Object.getOwnPropertyNames;
  var Kl = Object.getPrototypeOf,
    jl = Object.prototype.hasOwnProperty;
  var S = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
  var Hl = (t, e, i, r) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let n of Ul(e))
        !jl.call(t, n) &&
          n !== i &&
          Wi(t, n, {
            get: () => e[n],
            enumerable: !(r = Vl(e, n)) || r.enumerable,
          });
    return t;
  };
  var kt = (t, e, i) => (
    (i = t != null ? Fl(Kl(t)) : {}),
    Hl(
      e || !t || !t.__esModule
        ? Wi(i, 'default', { value: t, enumerable: !0 })
        : i,
      t
    )
  );
  var er = S((P_, tr) => {
    function Yl() {
      (this.__data__ = []), (this.size = 0);
    }
    tr.exports = Yl;
  });
  var se = S((S_, ir) => {
    function Jl(t, e) {
      return t === e || (t !== t && e !== e);
    }
    ir.exports = Jl;
  });
  var ae = S((B_, rr) => {
    var $l = se();
    function Zl(t, e) {
      for (var i = t.length; i--; ) if ($l(t[i][0], e)) return i;
      return -1;
    }
    rr.exports = Zl;
  });
  var sr = S((T_, nr) => {
    var Wl = ae(),
      Ql = Array.prototype,
      th = Ql.splice;
    function eh(t) {
      var e = this.__data__,
        i = Wl(e, t);
      if (i < 0) return !1;
      var r = e.length - 1;
      return i == r ? e.pop() : th.call(e, i, 1), --this.size, !0;
    }
    nr.exports = eh;
  });
  var or = S((R_, ar) => {
    var ih = ae();
    function rh(t) {
      var e = this.__data__,
        i = ih(e, t);
      return i < 0 ? void 0 : e[i][1];
    }
    ar.exports = rh;
  });
  var hr = S((D_, lr) => {
    var nh = ae();
    function sh(t) {
      return nh(this.__data__, t) > -1;
    }
    lr.exports = sh;
  });
  var cr = S((O_, ur) => {
    var ah = ae();
    function oh(t, e) {
      var i = this.__data__,
        r = ah(i, t);
      return r < 0 ? (++this.size, i.push([t, e])) : (i[r][1] = e), this;
    }
    ur.exports = oh;
  });
  var oe = S((I_, pr) => {
    var lh = er(),
      hh = sr(),
      uh = or(),
      ch = hr(),
      ph = cr();
    function Ut(t) {
      var e = -1,
        i = t == null ? 0 : t.length;
      for (this.clear(); ++e < i; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    Ut.prototype.clear = lh;
    Ut.prototype.delete = hh;
    Ut.prototype.get = uh;
    Ut.prototype.has = ch;
    Ut.prototype.set = ph;
    pr.exports = Ut;
  });
  var dr = S((A_, fr) => {
    var fh = oe();
    function dh() {
      (this.__data__ = new fh()), (this.size = 0);
    }
    fr.exports = dh;
  });
  var mr = S((G_, gr) => {
    function gh(t) {
      var e = this.__data__,
        i = e.delete(t);
      return (this.size = e.size), i;
    }
    gr.exports = gh;
  });
  var yr = S((q_, _r) => {
    function mh(t) {
      return this.__data__.get(t);
    }
    _r.exports = mh;
  });
  var vr = S((N_, Lr) => {
    function _h(t) {
      return this.__data__.has(t);
    }
    Lr.exports = _h;
  });
  var Qe = S((z_, br) => {
    var yh =
      typeof global == 'object' && global && global.Object === Object && global;
    br.exports = yh;
  });
  var At = S((F_, kr) => {
    var Lh = Qe(),
      vh = typeof self == 'object' && self && self.Object === Object && self,
      bh = Lh || vh || Function('return this')();
    kr.exports = bh;
  });
  var Se = S((V_, Mr) => {
    var kh = At(),
      Mh = kh.Symbol;
    Mr.exports = Mh;
  });
  var Er = S((U_, Cr) => {
    var xr = Se(),
      wr = Object.prototype,
      xh = wr.hasOwnProperty,
      wh = wr.toString,
      le = xr ? xr.toStringTag : void 0;
    function Ch(t) {
      var e = xh.call(t, le),
        i = t[le];
      try {
        t[le] = void 0;
        var r = !0;
      } catch {}
      var n = wh.call(t);
      return r && (e ? (t[le] = i) : delete t[le]), n;
    }
    Cr.exports = Ch;
  });
  var Sr = S((K_, Pr) => {
    var Eh = Object.prototype,
      Ph = Eh.toString;
    function Sh(t) {
      return Ph.call(t);
    }
    Pr.exports = Sh;
  });
  var Kt = S((j_, Rr) => {
    var Br = Se(),
      Bh = Er(),
      Th = Sr(),
      Rh = '[object Null]',
      Dh = '[object Undefined]',
      Tr = Br ? Br.toStringTag : void 0;
    function Oh(t) {
      return t == null
        ? t === void 0
          ? Dh
          : Rh
        : Tr && Tr in Object(t)
          ? Bh(t)
          : Th(t);
    }
    Rr.exports = Oh;
  });
  var Pt = S((H_, Dr) => {
    function Ih(t) {
      var e = typeof t;
      return t != null && (e == 'object' || e == 'function');
    }
    Dr.exports = Ih;
  });
  var Be = S((X_, Or) => {
    var Ah = Kt(),
      Gh = Pt(),
      qh = '[object AsyncFunction]',
      Nh = '[object Function]',
      zh = '[object GeneratorFunction]',
      Fh = '[object Proxy]';
    function Vh(t) {
      if (!Gh(t)) return !1;
      var e = Ah(t);
      return e == Nh || e == zh || e == qh || e == Fh;
    }
    Or.exports = Vh;
  });
  var Ar = S((Y_, Ir) => {
    var Uh = At(),
      Kh = Uh['__core-js_shared__'];
    Ir.exports = Kh;
  });
  var Nr = S((J_, qr) => {
    var ti = Ar(),
      Gr = (function () {
        var t = /[^.]+$/.exec((ti && ti.keys && ti.keys.IE_PROTO) || '');
        return t ? 'Symbol(src)_1.' + t : '';
      })();
    function jh(t) {
      return !!Gr && Gr in t;
    }
    qr.exports = jh;
  });
  var Fr = S(($_, zr) => {
    var Hh = Function.prototype,
      Xh = Hh.toString;
    function Yh(t) {
      if (t != null) {
        try {
          return Xh.call(t);
        } catch {}
        try {
          return t + '';
        } catch {}
      }
      return '';
    }
    zr.exports = Yh;
  });
  var Ur = S((Z_, Vr) => {
    var Jh = Be(),
      $h = Nr(),
      Zh = Pt(),
      Wh = Fr(),
      Qh = /[\\^$.*+?()[\]{}|]/g,
      tu = /^\[object .+?Constructor\]$/,
      eu = Function.prototype,
      iu = Object.prototype,
      ru = eu.toString,
      nu = iu.hasOwnProperty,
      su = RegExp(
        '^' +
          ru
            .call(nu)
            .replace(Qh, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      );
    function au(t) {
      if (!Zh(t) || $h(t)) return !1;
      var e = Jh(t) ? su : tu;
      return e.test(Wh(t));
    }
    Vr.exports = au;
  });
  var jr = S((W_, Kr) => {
    function ou(t, e) {
      return t?.[e];
    }
    Kr.exports = ou;
  });
  var Te = S((Q_, Hr) => {
    var lu = Ur(),
      hu = jr();
    function uu(t, e) {
      var i = hu(t, e);
      return lu(i) ? i : void 0;
    }
    Hr.exports = uu;
  });
  var ei = S((ty, Xr) => {
    var cu = Te(),
      pu = At(),
      fu = cu(pu, 'Map');
    Xr.exports = fu;
  });
  var he = S((ey, Yr) => {
    var du = Te(),
      gu = du(Object, 'create');
    Yr.exports = gu;
  });
  var Zr = S((iy, $r) => {
    var Jr = he();
    function mu() {
      (this.__data__ = Jr ? Jr(null) : {}), (this.size = 0);
    }
    $r.exports = mu;
  });
  var Qr = S((ry, Wr) => {
    function _u(t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    }
    Wr.exports = _u;
  });
  var en = S((ny, tn) => {
    var yu = he(),
      Lu = '__lodash_hash_undefined__',
      vu = Object.prototype,
      bu = vu.hasOwnProperty;
    function ku(t) {
      var e = this.__data__;
      if (yu) {
        var i = e[t];
        return i === Lu ? void 0 : i;
      }
      return bu.call(e, t) ? e[t] : void 0;
    }
    tn.exports = ku;
  });
  var nn = S((sy, rn) => {
    var Mu = he(),
      xu = Object.prototype,
      wu = xu.hasOwnProperty;
    function Cu(t) {
      var e = this.__data__;
      return Mu ? e[t] !== void 0 : wu.call(e, t);
    }
    rn.exports = Cu;
  });
  var an = S((ay, sn) => {
    var Eu = he(),
      Pu = '__lodash_hash_undefined__';
    function Su(t, e) {
      var i = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (i[t] = Eu && e === void 0 ? Pu : e),
        this
      );
    }
    sn.exports = Su;
  });
  var ln = S((oy, on) => {
    var Bu = Zr(),
      Tu = Qr(),
      Ru = en(),
      Du = nn(),
      Ou = an();
    function jt(t) {
      var e = -1,
        i = t == null ? 0 : t.length;
      for (this.clear(); ++e < i; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    jt.prototype.clear = Bu;
    jt.prototype.delete = Tu;
    jt.prototype.get = Ru;
    jt.prototype.has = Du;
    jt.prototype.set = Ou;
    on.exports = jt;
  });
  var cn = S((ly, un) => {
    var hn = ln(),
      Iu = oe(),
      Au = ei();
    function Gu() {
      (this.size = 0),
        (this.__data__ = {
          hash: new hn(),
          map: new (Au || Iu)(),
          string: new hn(),
        });
    }
    un.exports = Gu;
  });
  var fn = S((hy, pn) => {
    function qu(t) {
      var e = typeof t;
      return e == 'string' || e == 'number' || e == 'symbol' || e == 'boolean'
        ? t !== '__proto__'
        : t === null;
    }
    pn.exports = qu;
  });
  var ue = S((uy, dn) => {
    var Nu = fn();
    function zu(t, e) {
      var i = t.__data__;
      return Nu(e) ? i[typeof e == 'string' ? 'string' : 'hash'] : i.map;
    }
    dn.exports = zu;
  });
  var mn = S((cy, gn) => {
    var Fu = ue();
    function Vu(t) {
      var e = Fu(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    }
    gn.exports = Vu;
  });
  var yn = S((py, _n) => {
    var Uu = ue();
    function Ku(t) {
      return Uu(this, t).get(t);
    }
    _n.exports = Ku;
  });
  var vn = S((fy, Ln) => {
    var ju = ue();
    function Hu(t) {
      return ju(this, t).has(t);
    }
    Ln.exports = Hu;
  });
  var kn = S((dy, bn) => {
    var Xu = ue();
    function Yu(t, e) {
      var i = Xu(this, t),
        r = i.size;
      return i.set(t, e), (this.size += i.size == r ? 0 : 1), this;
    }
    bn.exports = Yu;
  });
  var ii = S((gy, Mn) => {
    var Ju = cn(),
      $u = mn(),
      Zu = yn(),
      Wu = vn(),
      Qu = kn();
    function Ht(t) {
      var e = -1,
        i = t == null ? 0 : t.length;
      for (this.clear(); ++e < i; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    Ht.prototype.clear = Ju;
    Ht.prototype.delete = $u;
    Ht.prototype.get = Zu;
    Ht.prototype.has = Wu;
    Ht.prototype.set = Qu;
    Mn.exports = Ht;
  });
  var wn = S((my, xn) => {
    var tc = oe(),
      ec = ei(),
      ic = ii(),
      rc = 200;
    function nc(t, e) {
      var i = this.__data__;
      if (i instanceof tc) {
        var r = i.__data__;
        if (!ec || r.length < rc - 1)
          return r.push([t, e]), (this.size = ++i.size), this;
        i = this.__data__ = new ic(r);
      }
      return i.set(t, e), (this.size = i.size), this;
    }
    xn.exports = nc;
  });
  var En = S((_y, Cn) => {
    var sc = oe(),
      ac = dr(),
      oc = mr(),
      lc = yr(),
      hc = vr(),
      uc = wn();
    function Xt(t) {
      var e = (this.__data__ = new sc(t));
      this.size = e.size;
    }
    Xt.prototype.clear = ac;
    Xt.prototype.delete = oc;
    Xt.prototype.get = lc;
    Xt.prototype.has = hc;
    Xt.prototype.set = uc;
    Cn.exports = Xt;
  });
  var ri = S((yy, Pn) => {
    var cc = Te(),
      pc = (function () {
        try {
          var t = cc(Object, 'defineProperty');
          return t({}, '', {}), t;
        } catch {}
      })();
    Pn.exports = pc;
  });
  var Re = S((Ly, Bn) => {
    var Sn = ri();
    function fc(t, e, i) {
      e == '__proto__' && Sn
        ? Sn(t, e, { configurable: !0, enumerable: !0, value: i, writable: !0 })
        : (t[e] = i);
    }
    Bn.exports = fc;
  });
  var ni = S((vy, Tn) => {
    var dc = Re(),
      gc = se();
    function mc(t, e, i) {
      ((i !== void 0 && !gc(t[e], i)) || (i === void 0 && !(e in t))) &&
        dc(t, e, i);
    }
    Tn.exports = mc;
  });
  var Dn = S((by, Rn) => {
    function _c(t) {
      return function (e, i, r) {
        for (var n = -1, s = Object(e), a = r(e), o = a.length; o--; ) {
          var l = a[t ? o : ++n];
          if (i(s[l], l, s) === !1) break;
        }
        return e;
      };
    }
    Rn.exports = _c;
  });
  var In = S((ky, On) => {
    var yc = Dn(),
      Lc = yc();
    On.exports = Lc;
  });
  var zn = S((ce, Yt) => {
    var vc = At(),
      Nn = typeof ce == 'object' && ce && !ce.nodeType && ce,
      An = Nn && typeof Yt == 'object' && Yt && !Yt.nodeType && Yt,
      bc = An && An.exports === Nn,
      Gn = bc ? vc.Buffer : void 0,
      qn = Gn ? Gn.allocUnsafe : void 0;
    function kc(t, e) {
      if (e) return t.slice();
      var i = t.length,
        r = qn ? qn(i) : new t.constructor(i);
      return t.copy(r), r;
    }
    Yt.exports = kc;
  });
  var Vn = S((My, Fn) => {
    var Mc = At(),
      xc = Mc.Uint8Array;
    Fn.exports = xc;
  });
  var jn = S((xy, Kn) => {
    var Un = Vn();
    function wc(t) {
      var e = new t.constructor(t.byteLength);
      return new Un(e).set(new Un(t)), e;
    }
    Kn.exports = wc;
  });
  var Xn = S((wy, Hn) => {
    var Cc = jn();
    function Ec(t, e) {
      var i = e ? Cc(t.buffer) : t.buffer;
      return new t.constructor(i, t.byteOffset, t.length);
    }
    Hn.exports = Ec;
  });
  var Jn = S((Cy, Yn) => {
    function Pc(t, e) {
      var i = -1,
        r = t.length;
      for (e || (e = Array(r)); ++i < r; ) e[i] = t[i];
      return e;
    }
    Yn.exports = Pc;
  });
  var Wn = S((Ey, Zn) => {
    var Sc = Pt(),
      $n = Object.create,
      Bc = (function () {
        function t() {}
        return function (e) {
          if (!Sc(e)) return {};
          if ($n) return $n(e);
          t.prototype = e;
          var i = new t();
          return (t.prototype = void 0), i;
        };
      })();
    Zn.exports = Bc;
  });
  var ts = S((Py, Qn) => {
    function Tc(t, e) {
      return function (i) {
        return t(e(i));
      };
    }
    Qn.exports = Tc;
  });
  var si = S((Sy, es) => {
    var Rc = ts(),
      Dc = Rc(Object.getPrototypeOf, Object);
    es.exports = Dc;
  });
  var ai = S((By, is) => {
    var Oc = Object.prototype;
    function Ic(t) {
      var e = t && t.constructor,
        i = (typeof e == 'function' && e.prototype) || Oc;
      return t === i;
    }
    is.exports = Ic;
  });
  var ns = S((Ty, rs) => {
    var Ac = Wn(),
      Gc = si(),
      qc = ai();
    function Nc(t) {
      return typeof t.constructor == 'function' && !qc(t) ? Ac(Gc(t)) : {};
    }
    rs.exports = Nc;
  });
  var Gt = S((Ry, ss) => {
    function zc(t) {
      return t != null && typeof t == 'object';
    }
    ss.exports = zc;
  });
  var os = S((Dy, as) => {
    var Fc = Kt(),
      Vc = Gt(),
      Uc = '[object Arguments]';
    function Kc(t) {
      return Vc(t) && Fc(t) == Uc;
    }
    as.exports = Kc;
  });
  var oi = S((Oy, us) => {
    var ls = os(),
      jc = Gt(),
      hs = Object.prototype,
      Hc = hs.hasOwnProperty,
      Xc = hs.propertyIsEnumerable,
      Yc = ls(
        (function () {
          return arguments;
        })()
      )
        ? ls
        : function (t) {
            return jc(t) && Hc.call(t, 'callee') && !Xc.call(t, 'callee');
          };
    us.exports = Yc;
  });
  var Jt = S((Iy, cs) => {
    var Jc = Array.isArray;
    cs.exports = Jc;
  });
  var li = S((Ay, ps) => {
    var $c = 9007199254740991;
    function Zc(t) {
      return typeof t == 'number' && t > -1 && t % 1 == 0 && t <= $c;
    }
    ps.exports = Zc;
  });
  var De = S((Gy, fs) => {
    var Wc = Be(),
      Qc = li();
    function tp(t) {
      return t != null && Qc(t.length) && !Wc(t);
    }
    fs.exports = tp;
  });
  var gs = S((qy, ds) => {
    var ep = De(),
      ip = Gt();
    function rp(t) {
      return ip(t) && ep(t);
    }
    ds.exports = rp;
  });
  var _s = S((Ny, ms) => {
    function np() {
      return !1;
    }
    ms.exports = np;
  });
  var hi = S((pe, $t) => {
    var sp = At(),
      ap = _s(),
      vs = typeof pe == 'object' && pe && !pe.nodeType && pe,
      ys = vs && typeof $t == 'object' && $t && !$t.nodeType && $t,
      op = ys && ys.exports === vs,
      Ls = op ? sp.Buffer : void 0,
      lp = Ls ? Ls.isBuffer : void 0,
      hp = lp || ap;
    $t.exports = hp;
  });
  var Ms = S((zy, ks) => {
    var up = Kt(),
      cp = si(),
      pp = Gt(),
      fp = '[object Object]',
      dp = Function.prototype,
      gp = Object.prototype,
      bs = dp.toString,
      mp = gp.hasOwnProperty,
      _p = bs.call(Object);
    function yp(t) {
      if (!pp(t) || up(t) != fp) return !1;
      var e = cp(t);
      if (e === null) return !0;
      var i = mp.call(e, 'constructor') && e.constructor;
      return typeof i == 'function' && i instanceof i && bs.call(i) == _p;
    }
    ks.exports = yp;
  });
  var ws = S((Fy, xs) => {
    var Lp = Kt(),
      vp = li(),
      bp = Gt(),
      kp = '[object Arguments]',
      Mp = '[object Array]',
      xp = '[object Boolean]',
      wp = '[object Date]',
      Cp = '[object Error]',
      Ep = '[object Function]',
      Pp = '[object Map]',
      Sp = '[object Number]',
      Bp = '[object Object]',
      Tp = '[object RegExp]',
      Rp = '[object Set]',
      Dp = '[object String]',
      Op = '[object WeakMap]',
      Ip = '[object ArrayBuffer]',
      Ap = '[object DataView]',
      Gp = '[object Float32Array]',
      qp = '[object Float64Array]',
      Np = '[object Int8Array]',
      zp = '[object Int16Array]',
      Fp = '[object Int32Array]',
      Vp = '[object Uint8Array]',
      Up = '[object Uint8ClampedArray]',
      Kp = '[object Uint16Array]',
      jp = '[object Uint32Array]',
      Y = {};
    Y[Gp] = Y[qp] = Y[Np] = Y[zp] = Y[Fp] = Y[Vp] = Y[Up] = Y[Kp] = Y[jp] = !0;
    Y[kp] =
      Y[Mp] =
      Y[Ip] =
      Y[xp] =
      Y[Ap] =
      Y[wp] =
      Y[Cp] =
      Y[Ep] =
      Y[Pp] =
      Y[Sp] =
      Y[Bp] =
      Y[Tp] =
      Y[Rp] =
      Y[Dp] =
      Y[Op] =
        !1;
    function Hp(t) {
      return bp(t) && vp(t.length) && !!Y[Lp(t)];
    }
    xs.exports = Hp;
  });
  var Es = S((Vy, Cs) => {
    function Xp(t) {
      return function (e) {
        return t(e);
      };
    }
    Cs.exports = Xp;
  });
  var Ss = S((fe, Zt) => {
    var Yp = Qe(),
      Ps = typeof fe == 'object' && fe && !fe.nodeType && fe,
      de = Ps && typeof Zt == 'object' && Zt && !Zt.nodeType && Zt,
      Jp = de && de.exports === Ps,
      ui = Jp && Yp.process,
      $p = (function () {
        try {
          var t = de && de.require && de.require('util').types;
          return t || (ui && ui.binding && ui.binding('util'));
        } catch {}
      })();
    Zt.exports = $p;
  });
  var ci = S((Uy, Rs) => {
    var Zp = ws(),
      Wp = Es(),
      Bs = Ss(),
      Ts = Bs && Bs.isTypedArray,
      Qp = Ts ? Wp(Ts) : Zp;
    Rs.exports = Qp;
  });
  var pi = S((Ky, Ds) => {
    function tf(t, e) {
      if (
        !(e === 'constructor' && typeof t[e] == 'function') &&
        e != '__proto__'
      )
        return t[e];
    }
    Ds.exports = tf;
  });
  var Is = S((jy, Os) => {
    var ef = Re(),
      rf = se(),
      nf = Object.prototype,
      sf = nf.hasOwnProperty;
    function af(t, e, i) {
      var r = t[e];
      (!(sf.call(t, e) && rf(r, i)) || (i === void 0 && !(e in t))) &&
        ef(t, e, i);
    }
    Os.exports = af;
  });
  var Gs = S((Hy, As) => {
    var of = Is(),
      lf = Re();
    function hf(t, e, i, r) {
      var n = !i;
      i || (i = {});
      for (var s = -1, a = e.length; ++s < a; ) {
        var o = e[s],
          l = r ? r(i[o], t[o], o, i, t) : void 0;
        l === void 0 && (l = t[o]), n ? lf(i, o, l) : of(i, o, l);
      }
      return i;
    }
    As.exports = hf;
  });
  var Ns = S((Xy, qs) => {
    function uf(t, e) {
      for (var i = -1, r = Array(t); ++i < t; ) r[i] = e(i);
      return r;
    }
    qs.exports = uf;
  });
  var fi = S((Yy, zs) => {
    var cf = 9007199254740991,
      pf = /^(?:0|[1-9]\d*)$/;
    function ff(t, e) {
      var i = typeof t;
      return (
        (e = e ?? cf),
        !!e &&
          (i == 'number' || (i != 'symbol' && pf.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
      );
    }
    zs.exports = ff;
  });
  var Vs = S((Jy, Fs) => {
    var df = Ns(),
      gf = oi(),
      mf = Jt(),
      _f = hi(),
      yf = fi(),
      Lf = ci(),
      vf = Object.prototype,
      bf = vf.hasOwnProperty;
    function kf(t, e) {
      var i = mf(t),
        r = !i && gf(t),
        n = !i && !r && _f(t),
        s = !i && !r && !n && Lf(t),
        a = i || r || n || s,
        o = a ? df(t.length, String) : [],
        l = o.length;
      for (var h in t)
        (e || bf.call(t, h)) &&
          !(
            a &&
            (h == 'length' ||
              (n && (h == 'offset' || h == 'parent')) ||
              (s &&
                (h == 'buffer' || h == 'byteLength' || h == 'byteOffset')) ||
              yf(h, l))
          ) &&
          o.push(h);
      return o;
    }
    Fs.exports = kf;
  });
  var Ks = S(($y, Us) => {
    function Mf(t) {
      var e = [];
      if (t != null) for (var i in Object(t)) e.push(i);
      return e;
    }
    Us.exports = Mf;
  });
  var Hs = S((Zy, js) => {
    var xf = Pt(),
      wf = ai(),
      Cf = Ks(),
      Ef = Object.prototype,
      Pf = Ef.hasOwnProperty;
    function Sf(t) {
      if (!xf(t)) return Cf(t);
      var e = wf(t),
        i = [];
      for (var r in t)
        (r == 'constructor' && (e || !Pf.call(t, r))) || i.push(r);
      return i;
    }
    js.exports = Sf;
  });
  var di = S((Wy, Xs) => {
    var Bf = Vs(),
      Tf = Hs(),
      Rf = De();
    function Df(t) {
      return Rf(t) ? Bf(t, !0) : Tf(t);
    }
    Xs.exports = Df;
  });
  var Js = S((Qy, Ys) => {
    var Of = Gs(),
      If = di();
    function Af(t) {
      return Of(t, If(t));
    }
    Ys.exports = Af;
  });
  var ea = S((tL, ta) => {
    var $s = ni(),
      Gf = zn(),
      qf = Xn(),
      Nf = Jn(),
      zf = ns(),
      Zs = oi(),
      Ws = Jt(),
      Ff = gs(),
      Vf = hi(),
      Uf = Be(),
      Kf = Pt(),
      jf = Ms(),
      Hf = ci(),
      Qs = pi(),
      Xf = Js();
    function Yf(t, e, i, r, n, s, a) {
      var o = Qs(t, i),
        l = Qs(e, i),
        h = a.get(l);
      if (h) {
        $s(t, i, h);
        return;
      }
      var g = s ? s(o, l, i + '', t, e, a) : void 0,
        _ = g === void 0;
      if (_) {
        var E = Ws(l),
          P = !E && Vf(l),
          T = !E && !P && Hf(l);
        (g = l),
          E || P || T
            ? Ws(o)
              ? (g = o)
              : Ff(o)
                ? (g = Nf(o))
                : P
                  ? ((_ = !1), (g = Gf(l, !0)))
                  : T
                    ? ((_ = !1), (g = qf(l, !0)))
                    : (g = [])
            : jf(l) || Zs(l)
              ? ((g = o),
                Zs(o) ? (g = Xf(o)) : (!Kf(o) || Uf(o)) && (g = zf(l)))
              : (_ = !1);
      }
      _ && (a.set(l, g), n(g, l, r, s, a), a.delete(l)), $s(t, i, g);
    }
    ta.exports = Yf;
  });
  var na = S((eL, ra) => {
    var Jf = En(),
      $f = ni(),
      Zf = In(),
      Wf = ea(),
      Qf = Pt(),
      td = di(),
      ed = pi();
    function ia(t, e, i, r, n) {
      t !== e &&
        Zf(
          e,
          function (s, a) {
            if ((n || (n = new Jf()), Qf(s))) Wf(t, e, a, i, ia, r, n);
            else {
              var o = r ? r(ed(t, a), s, a + '', t, e, n) : void 0;
              o === void 0 && (o = s), $f(t, a, o);
            }
          },
          td
        );
    }
    ra.exports = ia;
  });
  var gi = S((iL, sa) => {
    function id(t) {
      return t;
    }
    sa.exports = id;
  });
  var oa = S((rL, aa) => {
    function rd(t, e, i) {
      switch (i.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, i[0]);
        case 2:
          return t.call(e, i[0], i[1]);
        case 3:
          return t.call(e, i[0], i[1], i[2]);
      }
      return t.apply(e, i);
    }
    aa.exports = rd;
  });
  var ua = S((nL, ha) => {
    var nd = oa(),
      la = Math.max;
    function sd(t, e, i) {
      return (
        (e = la(e === void 0 ? t.length - 1 : e, 0)),
        function () {
          for (
            var r = arguments, n = -1, s = la(r.length - e, 0), a = Array(s);
            ++n < s;

          )
            a[n] = r[e + n];
          n = -1;
          for (var o = Array(e + 1); ++n < e; ) o[n] = r[n];
          return (o[e] = i(a)), nd(t, this, o);
        }
      );
    }
    ha.exports = sd;
  });
  var pa = S((sL, ca) => {
    function ad(t) {
      return function () {
        return t;
      };
    }
    ca.exports = ad;
  });
  var ga = S((aL, da) => {
    var od = pa(),
      fa = ri(),
      ld = gi(),
      hd = fa
        ? function (t, e) {
            return fa(t, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: od(e),
              writable: !0,
            });
          }
        : ld;
    da.exports = hd;
  });
  var _a = S((oL, ma) => {
    var ud = 800,
      cd = 16,
      pd = Date.now;
    function fd(t) {
      var e = 0,
        i = 0;
      return function () {
        var r = pd(),
          n = cd - (r - i);
        if (((i = r), n > 0)) {
          if (++e >= ud) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
      };
    }
    ma.exports = fd;
  });
  var La = S((lL, ya) => {
    var dd = ga(),
      gd = _a(),
      md = gd(dd);
    ya.exports = md;
  });
  var ba = S((hL, va) => {
    var _d = gi(),
      yd = ua(),
      Ld = La();
    function vd(t, e) {
      return Ld(yd(t, e, _d), t + '');
    }
    va.exports = vd;
  });
  var Ma = S((uL, ka) => {
    var bd = se(),
      kd = De(),
      Md = fi(),
      xd = Pt();
    function wd(t, e, i) {
      if (!xd(i)) return !1;
      var r = typeof e;
      return (
        r == 'number' ? kd(i) && Md(e, i.length) : r == 'string' && e in i
      )
        ? bd(i[e], t)
        : !1;
    }
    ka.exports = wd;
  });
  var wa = S((cL, xa) => {
    var Cd = ba(),
      Ed = Ma();
    function Pd(t) {
      return Cd(function (e, i) {
        var r = -1,
          n = i.length,
          s = n > 1 ? i[n - 1] : void 0,
          a = n > 2 ? i[2] : void 0;
        for (
          s = t.length > 3 && typeof s == 'function' ? (n--, s) : void 0,
            a && Ed(i[0], i[1], a) && ((s = n < 3 ? void 0 : s), (n = 1)),
            e = Object(e);
          ++r < n;

        ) {
          var o = i[r];
          o && t(e, o, r, s);
        }
        return e;
      });
    }
    xa.exports = Pd;
  });
  var Oe = S((pL, Ca) => {
    var Sd = na(),
      Bd = wa(),
      Td = Bd(function (t, e, i) {
        Sd(t, e, i);
      });
    Ca.exports = Td;
  });
  var Ie = S((vv, so) => {
    var pg = Kt(),
      fg = Gt(),
      dg = '[object Symbol]';
    function gg(t) {
      return typeof t == 'symbol' || (fg(t) && pg(t) == dg);
    }
    so.exports = gg;
  });
  var oo = S((bv, ao) => {
    var mg = Jt(),
      _g = Ie(),
      yg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Lg = /^\w*$/;
    function vg(t, e) {
      if (mg(t)) return !1;
      var i = typeof t;
      return i == 'number' ||
        i == 'symbol' ||
        i == 'boolean' ||
        t == null ||
        _g(t)
        ? !0
        : Lg.test(t) || !yg.test(t) || (e != null && t in Object(e));
    }
    ao.exports = vg;
  });
  var uo = S((kv, ho) => {
    var lo = ii(),
      bg = 'Expected a function';
    function _i(t, e) {
      if (typeof t != 'function' || (e != null && typeof e != 'function'))
        throw new TypeError(bg);
      var i = function () {
        var r = arguments,
          n = e ? e.apply(this, r) : r[0],
          s = i.cache;
        if (s.has(n)) return s.get(n);
        var a = t.apply(this, r);
        return (i.cache = s.set(n, a) || s), a;
      };
      return (i.cache = new (_i.Cache || lo)()), i;
    }
    _i.Cache = lo;
    ho.exports = _i;
  });
  var po = S((Mv, co) => {
    var kg = uo(),
      Mg = 500;
    function xg(t) {
      var e = kg(t, function (r) {
          return i.size === Mg && i.clear(), r;
        }),
        i = e.cache;
      return e;
    }
    co.exports = xg;
  });
  var go = S((xv, fo) => {
    var wg = po(),
      Cg =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Eg = /\\(\\)?/g,
      Pg = wg(function (t) {
        var e = [];
        return (
          t.charCodeAt(0) === 46 && e.push(''),
          t.replace(Cg, function (i, r, n, s) {
            e.push(n ? s.replace(Eg, '$1') : r || i);
          }),
          e
        );
      });
    fo.exports = Pg;
  });
  var _o = S((wv, mo) => {
    function Sg(t, e) {
      for (var i = -1, r = t == null ? 0 : t.length, n = Array(r); ++i < r; )
        n[i] = e(t[i], i, t);
      return n;
    }
    mo.exports = Sg;
  });
  var Mo = S((Cv, ko) => {
    var yo = Se(),
      Bg = _o(),
      Tg = Jt(),
      Rg = Ie(),
      Dg = 1 / 0,
      Lo = yo ? yo.prototype : void 0,
      vo = Lo ? Lo.toString : void 0;
    function bo(t) {
      if (typeof t == 'string') return t;
      if (Tg(t)) return Bg(t, bo) + '';
      if (Rg(t)) return vo ? vo.call(t) : '';
      var e = t + '';
      return e == '0' && 1 / t == -Dg ? '-0' : e;
    }
    ko.exports = bo;
  });
  var wo = S((Ev, xo) => {
    var Og = Mo();
    function Ig(t) {
      return t == null ? '' : Og(t);
    }
    xo.exports = Ig;
  });
  var Eo = S((Pv, Co) => {
    var Ag = Jt(),
      Gg = oo(),
      qg = go(),
      Ng = wo();
    function zg(t, e) {
      return Ag(t) ? t : Gg(t, e) ? [t] : qg(Ng(t));
    }
    Co.exports = zg;
  });
  var So = S((Sv, Po) => {
    var Fg = Ie(),
      Vg = 1 / 0;
    function Ug(t) {
      if (typeof t == 'string' || Fg(t)) return t;
      var e = t + '';
      return e == '0' && 1 / t == -Vg ? '-0' : e;
    }
    Po.exports = Ug;
  });
  var To = S((Bv, Bo) => {
    var Kg = Eo(),
      jg = So();
    function Hg(t, e) {
      e = Kg(e, t);
      for (var i = 0, r = e.length; t != null && i < r; ) t = t[jg(e[i++])];
      return i && i == r ? t : void 0;
    }
    Bo.exports = Hg;
  });
  var ge = S((Tv, Ro) => {
    var Xg = To();
    function Yg(t, e, i) {
      var r = t == null ? void 0 : Xg(t, e);
      return r === void 0 ? i : r;
    }
    Ro.exports = Yg;
  });
  var Vo = S((xi, wi) => {
    (function (t, e) {
      typeof xi == 'object' && typeof wi < 'u'
        ? (wi.exports = e())
        : typeof define == 'function' && define.amd
          ? define(e)
          : ((t = t || self).RBush = e());
    })(xi, function () {
      'use strict';
      function t(m, x, v, R, D) {
        (function O(I, q, u, c, p) {
          for (; c > u; ) {
            if (c - u > 600) {
              var y = c - u + 1,
                f = q - u + 1,
                k = Math.log(y),
                C = 0.5 * Math.exp((2 * k) / 3),
                d =
                  0.5 *
                  Math.sqrt((k * C * (y - C)) / y) *
                  (f - y / 2 < 0 ? -1 : 1),
                b = Math.max(u, Math.floor(q - (f * C) / y + d)),
                w = Math.min(c, Math.floor(q + ((y - f) * C) / y + d));
              O(I, q, b, w, p);
            }
            var M = I[q],
              B = u,
              A = c;
            for (e(I, u, q), p(I[c], M) > 0 && e(I, u, c); B < A; ) {
              for (e(I, B, A), B++, A--; p(I[B], M) < 0; ) B++;
              for (; p(I[A], M) > 0; ) A--;
            }
            p(I[u], M) === 0 ? e(I, u, A) : e(I, ++A, c),
              A <= q && (u = A + 1),
              q <= A && (c = A - 1);
          }
        })(m, x, v || 0, R || m.length - 1, D || i);
      }
      function e(m, x, v) {
        var R = m[x];
        (m[x] = m[v]), (m[v] = R);
      }
      function i(m, x) {
        return m < x ? -1 : m > x ? 1 : 0;
      }
      var r = function (m) {
        m === void 0 && (m = 9),
          (this._maxEntries = Math.max(4, m)),
          (this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries))),
          this.clear();
      };
      function n(m, x, v) {
        if (!v) return x.indexOf(m);
        for (var R = 0; R < x.length; R++) if (v(m, x[R])) return R;
        return -1;
      }
      function s(m, x) {
        a(m, 0, m.children.length, x, m);
      }
      function a(m, x, v, R, D) {
        D || (D = T(null)),
          (D.minX = 1 / 0),
          (D.minY = 1 / 0),
          (D.maxX = -1 / 0),
          (D.maxY = -1 / 0);
        for (var O = x; O < v; O++) {
          var I = m.children[O];
          o(D, m.leaf ? R(I) : I);
        }
        return D;
      }
      function o(m, x) {
        return (
          (m.minX = Math.min(m.minX, x.minX)),
          (m.minY = Math.min(m.minY, x.minY)),
          (m.maxX = Math.max(m.maxX, x.maxX)),
          (m.maxY = Math.max(m.maxY, x.maxY)),
          m
        );
      }
      function l(m, x) {
        return m.minX - x.minX;
      }
      function h(m, x) {
        return m.minY - x.minY;
      }
      function g(m) {
        return (m.maxX - m.minX) * (m.maxY - m.minY);
      }
      function _(m) {
        return m.maxX - m.minX + (m.maxY - m.minY);
      }
      function E(m, x) {
        return (
          m.minX <= x.minX &&
          m.minY <= x.minY &&
          x.maxX <= m.maxX &&
          x.maxY <= m.maxY
        );
      }
      function P(m, x) {
        return (
          x.minX <= m.maxX &&
          x.minY <= m.maxY &&
          x.maxX >= m.minX &&
          x.maxY >= m.minY
        );
      }
      function T(m) {
        return {
          children: m,
          height: 1,
          leaf: !0,
          minX: 1 / 0,
          minY: 1 / 0,
          maxX: -1 / 0,
          maxY: -1 / 0,
        };
      }
      function G(m, x, v, R, D) {
        for (var O = [x, v]; O.length; )
          if (!((v = O.pop()) - (x = O.pop()) <= R)) {
            var I = x + Math.ceil((v - x) / R / 2) * R;
            t(m, I, x, v, D), O.push(x, I, I, v);
          }
      }
      return (
        (r.prototype.all = function () {
          return this._all(this.data, []);
        }),
        (r.prototype.search = function (m) {
          var x = this.data,
            v = [];
          if (!P(m, x)) return v;
          for (var R = this.toBBox, D = []; x; ) {
            for (var O = 0; O < x.children.length; O++) {
              var I = x.children[O],
                q = x.leaf ? R(I) : I;
              P(m, q) &&
                (x.leaf ? v.push(I) : E(m, q) ? this._all(I, v) : D.push(I));
            }
            x = D.pop();
          }
          return v;
        }),
        (r.prototype.collides = function (m) {
          var x = this.data;
          if (!P(m, x)) return !1;
          for (var v = []; x; ) {
            for (var R = 0; R < x.children.length; R++) {
              var D = x.children[R],
                O = x.leaf ? this.toBBox(D) : D;
              if (P(m, O)) {
                if (x.leaf || E(m, O)) return !0;
                v.push(D);
              }
            }
            x = v.pop();
          }
          return !1;
        }),
        (r.prototype.load = function (m) {
          if (!m || !m.length) return this;
          if (m.length < this._minEntries) {
            for (var x = 0; x < m.length; x++) this.insert(m[x]);
            return this;
          }
          var v = this._build(m.slice(), 0, m.length - 1, 0);
          if (this.data.children.length)
            if (this.data.height === v.height) this._splitRoot(this.data, v);
            else {
              if (this.data.height < v.height) {
                var R = this.data;
                (this.data = v), (v = R);
              }
              this._insert(v, this.data.height - v.height - 1, !0);
            }
          else this.data = v;
          return this;
        }),
        (r.prototype.insert = function (m) {
          return m && this._insert(m, this.data.height - 1), this;
        }),
        (r.prototype.clear = function () {
          return (this.data = T([])), this;
        }),
        (r.prototype.remove = function (m, x) {
          if (!m) return this;
          for (
            var v, R, D, O = this.data, I = this.toBBox(m), q = [], u = [];
            O || q.length;

          ) {
            if (
              (O ||
                ((O = q.pop()), (R = q[q.length - 1]), (v = u.pop()), (D = !0)),
              O.leaf)
            ) {
              var c = n(m, O.children, x);
              if (c !== -1)
                return (
                  O.children.splice(c, 1), q.push(O), this._condense(q), this
                );
            }
            D || O.leaf || !E(O, I)
              ? R
                ? (v++, (O = R.children[v]), (D = !1))
                : (O = null)
              : (q.push(O), u.push(v), (v = 0), (R = O), (O = O.children[0]));
          }
          return this;
        }),
        (r.prototype.toBBox = function (m) {
          return m;
        }),
        (r.prototype.compareMinX = function (m, x) {
          return m.minX - x.minX;
        }),
        (r.prototype.compareMinY = function (m, x) {
          return m.minY - x.minY;
        }),
        (r.prototype.toJSON = function () {
          return this.data;
        }),
        (r.prototype.fromJSON = function (m) {
          return (this.data = m), this;
        }),
        (r.prototype._all = function (m, x) {
          for (var v = []; m; )
            m.leaf ? x.push.apply(x, m.children) : v.push.apply(v, m.children),
              (m = v.pop());
          return x;
        }),
        (r.prototype._build = function (m, x, v, R) {
          var D,
            O = v - x + 1,
            I = this._maxEntries;
          if (O <= I) return s((D = T(m.slice(x, v + 1))), this.toBBox), D;
          R ||
            ((R = Math.ceil(Math.log(O) / Math.log(I))),
            (I = Math.ceil(O / Math.pow(I, R - 1)))),
            ((D = T([])).leaf = !1),
            (D.height = R);
          var q = Math.ceil(O / I),
            u = q * Math.ceil(Math.sqrt(I));
          G(m, x, v, u, this.compareMinX);
          for (var c = x; c <= v; c += u) {
            var p = Math.min(c + u - 1, v);
            G(m, c, p, q, this.compareMinY);
            for (var y = c; y <= p; y += q) {
              var f = Math.min(y + q - 1, p);
              D.children.push(this._build(m, y, f, R - 1));
            }
          }
          return s(D, this.toBBox), D;
        }),
        (r.prototype._chooseSubtree = function (m, x, v, R) {
          for (; R.push(x), !x.leaf && R.length - 1 !== v; ) {
            for (
              var D = 1 / 0, O = 1 / 0, I = void 0, q = 0;
              q < x.children.length;
              q++
            ) {
              var u = x.children[q],
                c = g(u),
                p =
                  ((y = m),
                  (f = u),
                  (Math.max(f.maxX, y.maxX) - Math.min(f.minX, y.minX)) *
                    (Math.max(f.maxY, y.maxY) - Math.min(f.minY, y.minY)) -
                    c);
              p < O
                ? ((O = p), (D = c < D ? c : D), (I = u))
                : p === O && c < D && ((D = c), (I = u));
            }
            x = I || x.children[0];
          }
          var y, f;
          return x;
        }),
        (r.prototype._insert = function (m, x, v) {
          var R = v ? m : this.toBBox(m),
            D = [],
            O = this._chooseSubtree(R, this.data, x, D);
          for (
            O.children.push(m), o(O, R);
            x >= 0 && D[x].children.length > this._maxEntries;

          )
            this._split(D, x), x--;
          this._adjustParentBBoxes(R, D, x);
        }),
        (r.prototype._split = function (m, x) {
          var v = m[x],
            R = v.children.length,
            D = this._minEntries;
          this._chooseSplitAxis(v, D, R);
          var O = this._chooseSplitIndex(v, D, R),
            I = T(v.children.splice(O, v.children.length - O));
          (I.height = v.height),
            (I.leaf = v.leaf),
            s(v, this.toBBox),
            s(I, this.toBBox),
            x ? m[x - 1].children.push(I) : this._splitRoot(v, I);
        }),
        (r.prototype._splitRoot = function (m, x) {
          (this.data = T([m, x])),
            (this.data.height = m.height + 1),
            (this.data.leaf = !1),
            s(this.data, this.toBBox);
        }),
        (r.prototype._chooseSplitIndex = function (m, x, v) {
          for (
            var R, D, O, I, q, u, c, p = 1 / 0, y = 1 / 0, f = x;
            f <= v - x;
            f++
          ) {
            var k = a(m, 0, f, this.toBBox),
              C = a(m, f, v, this.toBBox),
              d =
                ((D = k),
                (O = C),
                (I = void 0),
                (q = void 0),
                (u = void 0),
                (c = void 0),
                (I = Math.max(D.minX, O.minX)),
                (q = Math.max(D.minY, O.minY)),
                (u = Math.min(D.maxX, O.maxX)),
                (c = Math.min(D.maxY, O.maxY)),
                Math.max(0, u - I) * Math.max(0, c - q)),
              b = g(k) + g(C);
            d < p
              ? ((p = d), (R = f), (y = b < y ? b : y))
              : d === p && b < y && ((y = b), (R = f));
          }
          return R || v - x;
        }),
        (r.prototype._chooseSplitAxis = function (m, x, v) {
          var R = m.leaf ? this.compareMinX : l,
            D = m.leaf ? this.compareMinY : h;
          this._allDistMargin(m, x, v, R) < this._allDistMargin(m, x, v, D) &&
            m.children.sort(R);
        }),
        (r.prototype._allDistMargin = function (m, x, v, R) {
          m.children.sort(R);
          for (
            var D = this.toBBox,
              O = a(m, 0, x, D),
              I = a(m, v - x, v, D),
              q = _(O) + _(I),
              u = x;
            u < v - x;
            u++
          ) {
            var c = m.children[u];
            o(O, m.leaf ? D(c) : c), (q += _(O));
          }
          for (var p = v - x - 1; p >= x; p--) {
            var y = m.children[p];
            o(I, m.leaf ? D(y) : y), (q += _(I));
          }
          return q;
        }),
        (r.prototype._adjustParentBBoxes = function (m, x, v) {
          for (var R = v; R >= 0; R--) o(x[R], m);
        }),
        (r.prototype._condense = function (m) {
          for (var x = m.length - 1, v = void 0; x >= 0; x--)
            m[x].children.length === 0
              ? x > 0
                ? (v = m[x - 1].children).splice(v.indexOf(m[x]), 1)
                : this.clear()
              : s(m[x], this.toBBox);
        }),
        r
      );
    });
  });
  var Bi = S((z) => {
    'use strict';
    Object.defineProperty(z, '__esModule', { value: !0 });
    z.earthRadius = 63710088e-1;
    z.factors = {
      centimeters: z.earthRadius * 100,
      centimetres: z.earthRadius * 100,
      degrees: z.earthRadius / 111325,
      feet: z.earthRadius * 3.28084,
      inches: z.earthRadius * 39.37,
      kilometers: z.earthRadius / 1e3,
      kilometres: z.earthRadius / 1e3,
      meters: z.earthRadius,
      metres: z.earthRadius,
      miles: z.earthRadius / 1609.344,
      millimeters: z.earthRadius * 1e3,
      millimetres: z.earthRadius * 1e3,
      nauticalmiles: z.earthRadius / 1852,
      radians: 1,
      yards: z.earthRadius * 1.0936,
    };
    z.unitsFactors = {
      centimeters: 100,
      centimetres: 100,
      degrees: 1 / 111325,
      feet: 3.28084,
      inches: 39.37,
      kilometers: 1 / 1e3,
      kilometres: 1 / 1e3,
      meters: 1,
      metres: 1,
      miles: 1 / 1609.344,
      millimeters: 1e3,
      millimetres: 1e3,
      nauticalmiles: 1 / 1852,
      radians: 1 / z.earthRadius,
      yards: 1.0936133,
    };
    z.areaFactors = {
      acres: 247105e-9,
      centimeters: 1e4,
      centimetres: 1e4,
      feet: 10.763910417,
      hectares: 1e-4,
      inches: 1550.003100006,
      kilometers: 1e-6,
      kilometres: 1e-6,
      meters: 1,
      metres: 1,
      miles: 386e-9,
      millimeters: 1e6,
      millimetres: 1e6,
      yards: 1.195990046,
    };
    function Dt(t, e, i) {
      i === void 0 && (i = {});
      var r = { type: 'Feature' };
      return (
        (i.id === 0 || i.id) && (r.id = i.id),
        i.bbox && (r.bbox = i.bbox),
        (r.properties = e || {}),
        (r.geometry = t),
        r
      );
    }
    z.feature = Dt;
    function lm(t, e, i) {
      switch ((i === void 0 && (i = {}), t)) {
        case 'Point':
          return Ci(e).geometry;
        case 'LineString':
          return Pi(e).geometry;
        case 'Polygon':
          return Ei(e).geometry;
        case 'MultiPoint':
          return Ko(e).geometry;
        case 'MultiLineString':
          return Uo(e).geometry;
        case 'MultiPolygon':
          return jo(e).geometry;
        default:
          throw new Error(t + ' is invalid');
      }
    }
    z.geometry = lm;
    function Ci(t, e, i) {
      if ((i === void 0 && (i = {}), !t))
        throw new Error('coordinates is required');
      if (!Array.isArray(t)) throw new Error('coordinates must be an Array');
      if (t.length < 2)
        throw new Error('coordinates must be at least 2 numbers long');
      if (!Ge(t[0]) || !Ge(t[1]))
        throw new Error('coordinates must contain numbers');
      var r = { type: 'Point', coordinates: t };
      return Dt(r, e, i);
    }
    z.point = Ci;
    function hm(t, e, i) {
      return (
        i === void 0 && (i = {}),
        qe(
          t.map(function (r) {
            return Ci(r, e);
          }),
          i
        )
      );
    }
    z.points = hm;
    function Ei(t, e, i) {
      i === void 0 && (i = {});
      for (var r = 0, n = t; r < n.length; r++) {
        var s = n[r];
        if (s.length < 4)
          throw new Error(
            'Each LinearRing of a Polygon must have 4 or more Positions.'
          );
        for (var a = 0; a < s[s.length - 1].length; a++)
          if (s[s.length - 1][a] !== s[0][a])
            throw new Error('First and last Position are not equivalent.');
      }
      var o = { type: 'Polygon', coordinates: t };
      return Dt(o, e, i);
    }
    z.polygon = Ei;
    function um(t, e, i) {
      return (
        i === void 0 && (i = {}),
        qe(
          t.map(function (r) {
            return Ei(r, e);
          }),
          i
        )
      );
    }
    z.polygons = um;
    function Pi(t, e, i) {
      if ((i === void 0 && (i = {}), t.length < 2))
        throw new Error(
          'coordinates must be an array of two or more positions'
        );
      var r = { type: 'LineString', coordinates: t };
      return Dt(r, e, i);
    }
    z.lineString = Pi;
    function cm(t, e, i) {
      return (
        i === void 0 && (i = {}),
        qe(
          t.map(function (r) {
            return Pi(r, e);
          }),
          i
        )
      );
    }
    z.lineStrings = cm;
    function qe(t, e) {
      e === void 0 && (e = {});
      var i = { type: 'FeatureCollection' };
      return (
        e.id && (i.id = e.id), e.bbox && (i.bbox = e.bbox), (i.features = t), i
      );
    }
    z.featureCollection = qe;
    function Uo(t, e, i) {
      i === void 0 && (i = {});
      var r = { type: 'MultiLineString', coordinates: t };
      return Dt(r, e, i);
    }
    z.multiLineString = Uo;
    function Ko(t, e, i) {
      i === void 0 && (i = {});
      var r = { type: 'MultiPoint', coordinates: t };
      return Dt(r, e, i);
    }
    z.multiPoint = Ko;
    function jo(t, e, i) {
      i === void 0 && (i = {});
      var r = { type: 'MultiPolygon', coordinates: t };
      return Dt(r, e, i);
    }
    z.multiPolygon = jo;
    function pm(t, e, i) {
      i === void 0 && (i = {});
      var r = { type: 'GeometryCollection', geometries: t };
      return Dt(r, e, i);
    }
    z.geometryCollection = pm;
    function fm(t, e) {
      if ((e === void 0 && (e = 0), e && !(e >= 0)))
        throw new Error('precision must be a positive number');
      var i = Math.pow(10, e || 0);
      return Math.round(t * i) / i;
    }
    z.round = fm;
    function Ho(t, e) {
      e === void 0 && (e = 'kilometers');
      var i = z.factors[e];
      if (!i) throw new Error(e + ' units is invalid');
      return t * i;
    }
    z.radiansToLength = Ho;
    function Si(t, e) {
      e === void 0 && (e = 'kilometers');
      var i = z.factors[e];
      if (!i) throw new Error(e + ' units is invalid');
      return t / i;
    }
    z.lengthToRadians = Si;
    function dm(t, e) {
      return Xo(Si(t, e));
    }
    z.lengthToDegrees = dm;
    function gm(t) {
      var e = t % 360;
      return e < 0 && (e += 360), e;
    }
    z.bearingToAzimuth = gm;
    function Xo(t) {
      var e = t % (2 * Math.PI);
      return (e * 180) / Math.PI;
    }
    z.radiansToDegrees = Xo;
    function mm(t) {
      var e = t % 360;
      return (e * Math.PI) / 180;
    }
    z.degreesToRadians = mm;
    function _m(t, e, i) {
      if (
        (e === void 0 && (e = 'kilometers'),
        i === void 0 && (i = 'kilometers'),
        !(t >= 0))
      )
        throw new Error('length must be a positive number');
      return Ho(Si(t, e), i);
    }
    z.convertLength = _m;
    function ym(t, e, i) {
      if (
        (e === void 0 && (e = 'meters'),
        i === void 0 && (i = 'kilometers'),
        !(t >= 0))
      )
        throw new Error('area must be a positive number');
      var r = z.areaFactors[e];
      if (!r) throw new Error('invalid original units');
      var n = z.areaFactors[i];
      if (!n) throw new Error('invalid final units');
      return (t / r) * n;
    }
    z.convertArea = ym;
    function Ge(t) {
      return !isNaN(t) && t !== null && !Array.isArray(t);
    }
    z.isNumber = Ge;
    function Lm(t) {
      return !!t && t.constructor === Object;
    }
    z.isObject = Lm;
    function vm(t) {
      if (!t) throw new Error('bbox is required');
      if (!Array.isArray(t)) throw new Error('bbox must be an Array');
      if (t.length !== 4 && t.length !== 6)
        throw new Error('bbox must be an Array of 4 or 6 numbers');
      t.forEach(function (e) {
        if (!Ge(e)) throw new Error('bbox must only contain numbers');
      });
    }
    z.validateBBox = vm;
    function bm(t) {
      if (!t) throw new Error('id is required');
      if (['string', 'number'].indexOf(typeof t) === -1)
        throw new Error('id must be a number or a string');
    }
    z.validateId = bm;
  });
  var Ri = S((Q) => {
    'use strict';
    Object.defineProperty(Q, '__esModule', { value: !0 });
    var rt = Bi();
    function ke(t, e, i) {
      if (t !== null)
        for (
          var r,
            n,
            s,
            a,
            o,
            l,
            h,
            g = 0,
            _ = 0,
            E,
            P = t.type,
            T = P === 'FeatureCollection',
            G = P === 'Feature',
            m = T ? t.features.length : 1,
            x = 0;
          x < m;
          x++
        ) {
          (h = T ? t.features[x].geometry : G ? t.geometry : t),
            (E = h ? h.type === 'GeometryCollection' : !1),
            (o = E ? h.geometries.length : 1);
          for (var v = 0; v < o; v++) {
            var R = 0,
              D = 0;
            if (((a = E ? h.geometries[v] : h), a !== null)) {
              l = a.coordinates;
              var O = a.type;
              switch (
                ((g = i && (O === 'Polygon' || O === 'MultiPolygon') ? 1 : 0),
                O)
              ) {
                case null:
                  break;
                case 'Point':
                  if (e(l, _, x, R, D) === !1) return !1;
                  _++, R++;
                  break;
                case 'LineString':
                case 'MultiPoint':
                  for (r = 0; r < l.length; r++) {
                    if (e(l[r], _, x, R, D) === !1) return !1;
                    _++, O === 'MultiPoint' && R++;
                  }
                  O === 'LineString' && R++;
                  break;
                case 'Polygon':
                case 'MultiLineString':
                  for (r = 0; r < l.length; r++) {
                    for (n = 0; n < l[r].length - g; n++) {
                      if (e(l[r][n], _, x, R, D) === !1) return !1;
                      _++;
                    }
                    O === 'MultiLineString' && R++, O === 'Polygon' && D++;
                  }
                  O === 'Polygon' && R++;
                  break;
                case 'MultiPolygon':
                  for (r = 0; r < l.length; r++) {
                    for (D = 0, n = 0; n < l[r].length; n++) {
                      for (s = 0; s < l[r][n].length - g; s++) {
                        if (e(l[r][n][s], _, x, R, D) === !1) return !1;
                        _++;
                      }
                      D++;
                    }
                    R++;
                  }
                  break;
                case 'GeometryCollection':
                  for (r = 0; r < a.geometries.length; r++)
                    if (ke(a.geometries[r], e, i) === !1) return !1;
                  break;
                default:
                  throw new Error('Unknown Geometry Type');
              }
            }
          }
        }
    }
    function km(t, e, i, r) {
      var n = i;
      return (
        ke(
          t,
          function (s, a, o, l, h) {
            a === 0 && i === void 0 ? (n = s) : (n = e(n, s, a, o, l, h));
          },
          r
        ),
        n
      );
    }
    function Yo(t, e) {
      var i;
      switch (t.type) {
        case 'FeatureCollection':
          for (
            i = 0;
            i < t.features.length && e(t.features[i].properties, i) !== !1;
            i++
          );
          break;
        case 'Feature':
          e(t.properties, 0);
          break;
      }
    }
    function Mm(t, e, i) {
      var r = i;
      return (
        Yo(t, function (n, s) {
          s === 0 && i === void 0 ? (r = n) : (r = e(r, n, s));
        }),
        r
      );
    }
    function Jo(t, e) {
      if (t.type === 'Feature') e(t, 0);
      else if (t.type === 'FeatureCollection')
        for (
          var i = 0;
          i < t.features.length && e(t.features[i], i) !== !1;
          i++
        );
    }
    function xm(t, e, i) {
      var r = i;
      return (
        Jo(t, function (n, s) {
          s === 0 && i === void 0 ? (r = n) : (r = e(r, n, s));
        }),
        r
      );
    }
    function wm(t) {
      var e = [];
      return (
        ke(t, function (i) {
          e.push(i);
        }),
        e
      );
    }
    function Ti(t, e) {
      var i,
        r,
        n,
        s,
        a,
        o,
        l,
        h,
        g,
        _,
        E = 0,
        P = t.type === 'FeatureCollection',
        T = t.type === 'Feature',
        G = P ? t.features.length : 1;
      for (i = 0; i < G; i++) {
        for (
          o = P ? t.features[i].geometry : T ? t.geometry : t,
            h = P ? t.features[i].properties : T ? t.properties : {},
            g = P ? t.features[i].bbox : T ? t.bbox : void 0,
            _ = P ? t.features[i].id : T ? t.id : void 0,
            l = o ? o.type === 'GeometryCollection' : !1,
            a = l ? o.geometries.length : 1,
            n = 0;
          n < a;
          n++
        ) {
          if (((s = l ? o.geometries[n] : o), s === null)) {
            if (e(null, E, h, g, _) === !1) return !1;
            continue;
          }
          switch (s.type) {
            case 'Point':
            case 'LineString':
            case 'MultiPoint':
            case 'Polygon':
            case 'MultiLineString':
            case 'MultiPolygon': {
              if (e(s, E, h, g, _) === !1) return !1;
              break;
            }
            case 'GeometryCollection': {
              for (r = 0; r < s.geometries.length; r++)
                if (e(s.geometries[r], E, h, g, _) === !1) return !1;
              break;
            }
            default:
              throw new Error('Unknown Geometry Type');
          }
        }
        E++;
      }
    }
    function Cm(t, e, i) {
      var r = i;
      return (
        Ti(t, function (n, s, a, o, l) {
          s === 0 && i === void 0 ? (r = n) : (r = e(r, n, s, a, o, l));
        }),
        r
      );
    }
    function Ne(t, e) {
      Ti(t, function (i, r, n, s, a) {
        var o = i === null ? null : i.type;
        switch (o) {
          case null:
          case 'Point':
          case 'LineString':
          case 'Polygon':
            return e(rt.feature(i, n, { bbox: s, id: a }), r, 0) === !1
              ? !1
              : void 0;
        }
        var l;
        switch (o) {
          case 'MultiPoint':
            l = 'Point';
            break;
          case 'MultiLineString':
            l = 'LineString';
            break;
          case 'MultiPolygon':
            l = 'Polygon';
            break;
        }
        for (var h = 0; h < i.coordinates.length; h++) {
          var g = i.coordinates[h],
            _ = { type: l, coordinates: g };
          if (e(rt.feature(_, n), r, h) === !1) return !1;
        }
      });
    }
    function Em(t, e, i) {
      var r = i;
      return (
        Ne(t, function (n, s, a) {
          s === 0 && a === 0 && i === void 0 ? (r = n) : (r = e(r, n, s, a));
        }),
        r
      );
    }
    function $o(t, e) {
      Ne(t, function (i, r, n) {
        var s = 0;
        if (i.geometry) {
          var a = i.geometry.type;
          if (!(a === 'Point' || a === 'MultiPoint')) {
            var o,
              l = 0,
              h = 0,
              g = 0;
            if (
              ke(i, function (_, E, P, T, G) {
                if (o === void 0 || r > l || T > h || G > g) {
                  (o = _), (l = r), (h = T), (g = G), (s = 0);
                  return;
                }
                var m = rt.lineString([o, _], i.properties);
                if (e(m, r, n, G, s) === !1) return !1;
                s++, (o = _);
              }) === !1
            )
              return !1;
          }
        }
      });
    }
    function Pm(t, e, i) {
      var r = i,
        n = !1;
      return (
        $o(t, function (s, a, o, l, h) {
          n === !1 && i === void 0 ? (r = s) : (r = e(r, s, a, o, l, h)),
            (n = !0);
        }),
        r
      );
    }
    function Zo(t, e) {
      if (!t) throw new Error('geojson is required');
      Ne(t, function (i, r, n) {
        if (i.geometry !== null) {
          var s = i.geometry.type,
            a = i.geometry.coordinates;
          switch (s) {
            case 'LineString':
              if (e(i, r, n, 0, 0) === !1) return !1;
              break;
            case 'Polygon':
              for (var o = 0; o < a.length; o++)
                if (e(rt.lineString(a[o], i.properties), r, n, o) === !1)
                  return !1;
              break;
          }
        }
      });
    }
    function Sm(t, e, i) {
      var r = i;
      return (
        Zo(t, function (n, s, a, o) {
          s === 0 && i === void 0 ? (r = n) : (r = e(r, n, s, a, o));
        }),
        r
      );
    }
    function Bm(t, e) {
      if (((e = e || {}), !rt.isObject(e)))
        throw new Error('options is invalid');
      var i = e.featureIndex || 0,
        r = e.multiFeatureIndex || 0,
        n = e.geometryIndex || 0,
        s = e.segmentIndex || 0,
        a = e.properties,
        o;
      switch (t.type) {
        case 'FeatureCollection':
          i < 0 && (i = t.features.length + i),
            (a = a || t.features[i].properties),
            (o = t.features[i].geometry);
          break;
        case 'Feature':
          (a = a || t.properties), (o = t.geometry);
          break;
        case 'Point':
        case 'MultiPoint':
          return null;
        case 'LineString':
        case 'Polygon':
        case 'MultiLineString':
        case 'MultiPolygon':
          o = t;
          break;
        default:
          throw new Error('geojson is invalid');
      }
      if (o === null) return null;
      var l = o.coordinates;
      switch (o.type) {
        case 'Point':
        case 'MultiPoint':
          return null;
        case 'LineString':
          return (
            s < 0 && (s = l.length + s - 1),
            rt.lineString([l[s], l[s + 1]], a, e)
          );
        case 'Polygon':
          return (
            n < 0 && (n = l.length + n),
            s < 0 && (s = l[n].length + s - 1),
            rt.lineString([l[n][s], l[n][s + 1]], a, e)
          );
        case 'MultiLineString':
          return (
            r < 0 && (r = l.length + r),
            s < 0 && (s = l[r].length + s - 1),
            rt.lineString([l[r][s], l[r][s + 1]], a, e)
          );
        case 'MultiPolygon':
          return (
            r < 0 && (r = l.length + r),
            n < 0 && (n = l[r].length + n),
            s < 0 && (s = l[r][n].length - s - 1),
            rt.lineString([l[r][n][s], l[r][n][s + 1]], a, e)
          );
      }
      throw new Error('geojson is invalid');
    }
    function Tm(t, e) {
      if (((e = e || {}), !rt.isObject(e)))
        throw new Error('options is invalid');
      var i = e.featureIndex || 0,
        r = e.multiFeatureIndex || 0,
        n = e.geometryIndex || 0,
        s = e.coordIndex || 0,
        a = e.properties,
        o;
      switch (t.type) {
        case 'FeatureCollection':
          i < 0 && (i = t.features.length + i),
            (a = a || t.features[i].properties),
            (o = t.features[i].geometry);
          break;
        case 'Feature':
          (a = a || t.properties), (o = t.geometry);
          break;
        case 'Point':
        case 'MultiPoint':
          return null;
        case 'LineString':
        case 'Polygon':
        case 'MultiLineString':
        case 'MultiPolygon':
          o = t;
          break;
        default:
          throw new Error('geojson is invalid');
      }
      if (o === null) return null;
      var l = o.coordinates;
      switch (o.type) {
        case 'Point':
          return rt.point(l, a, e);
        case 'MultiPoint':
          return r < 0 && (r = l.length + r), rt.point(l[r], a, e);
        case 'LineString':
          return s < 0 && (s = l.length + s), rt.point(l[s], a, e);
        case 'Polygon':
          return (
            n < 0 && (n = l.length + n),
            s < 0 && (s = l[n].length + s),
            rt.point(l[n][s], a, e)
          );
        case 'MultiLineString':
          return (
            r < 0 && (r = l.length + r),
            s < 0 && (s = l[r].length + s),
            rt.point(l[r][s], a, e)
          );
        case 'MultiPolygon':
          return (
            r < 0 && (r = l.length + r),
            n < 0 && (n = l[r].length + n),
            s < 0 && (s = l[r][n].length - s),
            rt.point(l[r][n][s], a, e)
          );
      }
      throw new Error('geojson is invalid');
    }
    Q.coordAll = wm;
    Q.coordEach = ke;
    Q.coordReduce = km;
    Q.featureEach = Jo;
    Q.featureReduce = xm;
    Q.findPoint = Tm;
    Q.findSegment = Bm;
    Q.flattenEach = Ne;
    Q.flattenReduce = Em;
    Q.geomEach = Ti;
    Q.geomReduce = Cm;
    Q.lineEach = Zo;
    Q.lineReduce = Sm;
    Q.propEach = Yo;
    Q.propReduce = Mm;
    Q.segmentEach = $o;
    Q.segmentReduce = Pm;
  });
  var Wo = S((Oi) => {
    'use strict';
    Object.defineProperty(Oi, '__esModule', { value: !0 });
    var Rm = Ri();
    function Di(t) {
      var e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      return (
        Rm.coordEach(t, function (i) {
          e[0] > i[0] && (e[0] = i[0]),
            e[1] > i[1] && (e[1] = i[1]),
            e[2] < i[0] && (e[2] = i[0]),
            e[3] < i[1] && (e[3] = i[1]);
        }),
        e
      );
    }
    Di.default = Di;
    Oi.default = Di;
  });
  var Ai = S((Bb, Ii) => {
    var vt = Vo(),
      tl = Bi(),
      el = Ri(),
      ee = Wo().default,
      Dm = el.featureEach,
      Pb = el.coordEach,
      Sb = tl.polygon,
      Qo = tl.featureCollection;
    function il(t) {
      var e = new vt(t);
      return (
        (e.insert = function (i) {
          if (i.type !== 'Feature') throw new Error('invalid feature');
          return (
            (i.bbox = i.bbox ? i.bbox : ee(i)),
            vt.prototype.insert.call(this, i)
          );
        }),
        (e.load = function (i) {
          var r = [];
          return (
            Array.isArray(i)
              ? i.forEach(function (n) {
                  if (n.type !== 'Feature') throw new Error('invalid features');
                  (n.bbox = n.bbox ? n.bbox : ee(n)), r.push(n);
                })
              : Dm(i, function (n) {
                  if (n.type !== 'Feature') throw new Error('invalid features');
                  (n.bbox = n.bbox ? n.bbox : ee(n)), r.push(n);
                }),
            vt.prototype.load.call(this, r)
          );
        }),
        (e.remove = function (i, r) {
          if (i.type !== 'Feature') throw new Error('invalid feature');
          return (
            (i.bbox = i.bbox ? i.bbox : ee(i)),
            vt.prototype.remove.call(this, i, r)
          );
        }),
        (e.clear = function () {
          return vt.prototype.clear.call(this);
        }),
        (e.search = function (i) {
          var r = vt.prototype.search.call(this, this.toBBox(i));
          return Qo(r);
        }),
        (e.collides = function (i) {
          return vt.prototype.collides.call(this, this.toBBox(i));
        }),
        (e.all = function () {
          var i = vt.prototype.all.call(this);
          return Qo(i);
        }),
        (e.toJSON = function () {
          return vt.prototype.toJSON.call(this);
        }),
        (e.fromJSON = function (i) {
          return vt.prototype.fromJSON.call(this, i);
        }),
        (e.toBBox = function (i) {
          var r;
          if (i.bbox) r = i.bbox;
          else if (Array.isArray(i) && i.length === 4) r = i;
          else if (Array.isArray(i) && i.length === 6)
            r = [i[0], i[1], i[3], i[4]];
          else if (i.type === 'Feature') r = ee(i);
          else if (i.type === 'FeatureCollection') r = ee(i);
          else throw new Error('invalid geojson');
          return { minX: r[0], minY: r[1], maxX: r[2], maxY: r[3] };
        }),
        e
      );
    }
    Ii.exports = il;
    Ii.exports.default = il;
  });
  Array.prototype.findIndex =
    Array.prototype.findIndex ||
    function (t) {
      if (this === null)
        throw new TypeError(
          'Array.prototype.findIndex called on null or undefined'
        );
      if (typeof t != 'function')
        throw new TypeError('callback must be a function');
      for (
        var e = Object(this), i = e.length >>> 0, r = arguments[1], n = 0;
        n < i;
        n++
      )
        if (t.call(r, e[n], n, e)) return n;
      return -1;
    };
  Array.prototype.find =
    Array.prototype.find ||
    function (t) {
      if (this === null)
        throw new TypeError('Array.prototype.find called on null or undefined');
      if (typeof t != 'function')
        throw new TypeError('callback must be a function');
      for (
        var e = Object(this), i = e.length >>> 0, r = arguments[1], n = 0;
        n < i;
        n++
      ) {
        var s = e[n];
        if (t.call(r, s, n, e)) return s;
      }
    };
  typeof Object.assign != 'function' &&
    (Object.assign = function (t) {
      'use strict';
      if (t == null)
        throw new TypeError('Cannot convert undefined or null to object');
      t = Object(t);
      for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        if (i != null)
          for (var r in i)
            Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
      }
      return t;
    });
  (function (t) {
    t.forEach(function (e) {
      e.hasOwnProperty('remove') ||
        Object.defineProperty(e, 'remove', {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function () {
            this.parentNode.removeChild(this);
          },
        });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
  Array.prototype.includes ||
    Object.defineProperty(Array.prototype, 'includes', {
      value: function (t, e) {
        if (this == null) throw new TypeError('"this" is null or not defined');
        var i = Object(this),
          r = i.length >>> 0;
        if (r === 0) return !1;
        var n = e | 0,
          s = Math.max(n >= 0 ? n : r - Math.abs(n), 0);
        function a(o, l) {
          return (
            o === l ||
            (typeof o == 'number' &&
              typeof l == 'number' &&
              isNaN(o) &&
              isNaN(l))
          );
        }
        for (; s < r; ) {
          if (a(i[s], t)) return !0;
          s++;
        }
        return !1;
      },
    });
  var Qi = {
    name: '@geoman-io/leaflet-geoman-free',
    version: '2.18.3',
    description: 'A Leaflet Plugin For Editing Geometry Layers in Leaflet 1.0',
    keywords: [
      'leaflet',
      'geoman',
      'polygon management',
      'geometry editing',
      'map data',
      'map overlay',
      'polygon',
      'geojson',
      'leaflet-draw',
      'data-field-geojson',
      'ui-leaflet-draw',
    ],
    files: ['dist'],
    main: 'dist/leaflet-geoman.js',
    types: 'dist/leaflet-geoman.d.ts',
    dependencies: {
      '@turf/boolean-contains': '^6.5.0',
      '@turf/kinks': '^6.5.0',
      '@turf/line-intersect': '^6.5.0',
      '@turf/line-split': '^6.5.0',
      lodash: '4.17.21',
      'polyclip-ts': '^0.16.5',
    },
    devDependencies: {
      '@types/leaflet': '^1.9.12',
      'cross-env': '^7.0.3',
      cypress: '^13.11.0',
      esbuild: '^0.20.2',
      eslint: '8.56.0',
      'eslint-config-airbnb-base': '15.0.0',
      'eslint-config-prettier': '9.1.0',
      'eslint-plugin-cypress': '2.15.1',
      'eslint-plugin-import': '2.29.1',
      husky: '^9.0.11',
      leaflet: '1.9.3',
      'lint-staged': '^15.2.5',
      prettier: '3.2.4',
      'prosthetic-hand': '1.3.1',
      'ts-node': '^10.9.2',
    },
    peerDependencies: { leaflet: '^1.2.0' },
    scripts: {
      start: 'npm run dev',
      dev: 'cross-env DEV=true ts-node bundle.mjs',
      build: 'ts-node bundle.mjs',
      test: 'cypress run --browser chrome',
      cypress: 'cypress open',
      prepare: 'npm run build && husky',
      'eslint-check': 'eslint --print-config . | eslint-config-prettier-check',
      eslint: 'eslint "{src,demo}/**/*.js" --fix ',
      prettier: 'prettier --write "{src,demo}/**/*.{js,css}" --log-level=warn',
      lint: 'npm run eslint && npm run prettier',
    },
    repository: {
      type: 'git',
      url: 'git://github.com/geoman-io/leaflet-geoman.git',
    },
    author: {
      name: 'Geoman.io',
      email: 'sales@geoman.io',
      url: 'http://geoman.io',
    },
    license: 'MIT',
    bugs: { url: 'https://github.com/geoman-io/leaflet-geoman/issues' },
    homepage: 'https://geoman.io',
    prettier: { trailingComma: 'es5', tabWidth: 2, semi: !0, singleQuote: !0 },
    'lint-staged': {
      '*.js': 'eslint "{src,demo}/**/*.js" --fix',
      '*.{js,css,md}': 'prettier --write "{src,demo}/**/*.{js,css}"',
    },
  };
  var bi = kt(Oe());
  var Ea = {
    tooltips: {
      placeMarker: 'Click to place marker',
      firstVertex: 'Click to place first vertex',
      continueLine: 'Click to continue drawing',
      finishLine: 'Click any existing marker to finish',
      finishPoly: 'Click first marker to finish',
      finishRect: 'Click to finish',
      startCircle: 'Click to place circle center',
      finishCircle: 'Click to finish circle',
      placeCircleMarker: 'Click to place circle marker',
      placeText: 'Click to place text',
      selectFirstLayerFor: 'Select first layer for {action}',
      selectSecondLayerFor: 'Select second layer for {action}',
    },
    actions: {
      finish: 'Finish',
      cancel: 'Cancel',
      removeLastVertex: 'Remove Last Vertex',
    },
    buttonTitles: {
      drawMarkerButton: 'Draw Marker',
      drawPolyButton: 'Draw Polygons',
      drawLineButton: 'Draw Polyline',
      drawCircleButton: 'Draw Circle',
      drawRectButton: 'Draw Rectangle',
      editButton: 'Edit Layers',
      dragButton: 'Drag Layers',
      cutButton: 'Cut Layers',
      deleteButton: 'Remove Layers',
      drawCircleMarkerButton: 'Draw Circle Marker',
      snappingButton: 'Snap dragged marker to other layers and vertices',
      pinningButton: 'Pin shared vertices together',
      rotateButton: 'Rotate Layers',
      drawTextButton: 'Draw Text',
      scaleButton: 'Scale Layers',
      autoTracingButton: 'Auto trace Line',
      snapGuidesButton: 'Show SnapGuides',
      unionButton: 'Union layers',
      differenceButton: 'Subtract layers',
    },
    measurements: {
      totalLength: 'Length',
      segmentLength: 'Segment length',
      area: 'Area',
      radius: 'Radius',
      perimeter: 'Perimeter',
      height: 'Height',
      width: 'Width',
      coordinates: 'Position',
      coordinatesMarker: 'Position Marker',
    },
  };
  var Pa = {
    tooltips: {
      placeMarker: 'Platziere den Marker mit Klick',
      firstVertex: 'Platziere den ersten Marker mit Klick',
      continueLine: 'Klicke, um weiter zu zeichnen',
      finishLine: 'Beende mit Klick auf existierenden Marker',
      finishPoly: 'Beende mit Klick auf ersten Marker',
      finishRect: 'Beende mit Klick',
      startCircle: 'Platziere das Kreiszentrum mit Klick',
      finishCircle: 'Beende den Kreis mit Klick',
      placeCircleMarker: 'Platziere den Kreismarker mit Klick',
      placeText: 'Platziere den Text mit Klick',
    },
    actions: {
      finish: 'Beenden',
      cancel: 'Abbrechen',
      removeLastVertex: 'Letzten Vertex l\xF6schen',
    },
    buttonTitles: {
      drawMarkerButton: 'Marker zeichnen',
      drawPolyButton: 'Polygon zeichnen',
      drawLineButton: 'Polyline zeichnen',
      drawCircleButton: 'Kreis zeichnen',
      drawRectButton: 'Rechteck zeichnen',
      editButton: 'Layer editieren',
      dragButton: 'Layer bewegen',
      cutButton: 'Layer schneiden',
      deleteButton: 'Layer l\xF6schen',
      drawCircleMarkerButton: 'Kreismarker zeichnen',
      snappingButton: 'Bewegter Layer an andere Layer oder Vertexe einhacken',
      pinningButton: 'Vertexe an der gleichen Position verkn\xFCpfen',
      rotateButton: 'Layer drehen',
      drawTextButton: 'Text zeichnen',
      scaleButton: 'Layer skalieren',
      autoTracingButton: 'Linie automatisch nachzeichen',
    },
    measurements: {
      totalLength: 'L\xE4nge',
      segmentLength: 'Segment L\xE4nge',
      area: 'Fl\xE4che',
      radius: 'Radius',
      perimeter: 'Umfang',
      height: 'H\xF6he',
      width: 'Breite',
      coordinates: 'Position',
      coordinatesMarker: 'Position Marker',
    },
  };
  var Sa = {
    tooltips: {
      placeMarker: 'Clicca per posizionare un Marker',
      firstVertex: 'Clicca per posizionare il primo vertice',
      continueLine: 'Clicca per continuare a disegnare',
      finishLine: 'Clicca qualsiasi marker esistente per terminare',
      finishPoly: 'Clicca il primo marker per terminare',
      finishRect: 'Clicca per terminare',
      startCircle: 'Clicca per posizionare il punto centrale del cerchio',
      finishCircle: 'Clicca per terminare il cerchio',
      placeCircleMarker: 'Clicca per posizionare un Marker del cherchio',
    },
    actions: {
      finish: 'Termina',
      cancel: 'Annulla',
      removeLastVertex: "Rimuovi l'ultimo vertice",
    },
    buttonTitles: {
      drawMarkerButton: 'Disegna Marker',
      drawPolyButton: 'Disegna Poligoni',
      drawLineButton: 'Disegna Polilinea',
      drawCircleButton: 'Disegna Cerchio',
      drawRectButton: 'Disegna Rettangolo',
      editButton: 'Modifica Livelli',
      dragButton: 'Sposta Livelli',
      cutButton: 'Ritaglia Livelli',
      deleteButton: 'Elimina Livelli',
      drawCircleMarkerButton: 'Disegna Marker del Cerchio',
      snappingButton:
        'Snap ha trascinato il pennarello su altri strati e vertici',
      pinningButton: 'Pin condiviso vertici insieme',
      rotateButton: 'Ruota livello',
    },
  };
  var Ba = {
    tooltips: {
      placeMarker: 'Klik untuk menempatkan marker',
      firstVertex: 'Klik untuk menempatkan vertex pertama',
      continueLine: 'Klik untuk meneruskan digitasi',
      finishLine: 'Klik pada sembarang marker yang ada untuk mengakhiri',
      finishPoly: 'Klik marker pertama untuk mengakhiri',
      finishRect: 'Klik untuk mengakhiri',
      startCircle: 'Klik untuk menempatkan titik pusat lingkaran',
      finishCircle: 'Klik untuk mengakhiri lingkaran',
      placeCircleMarker: 'Klik untuk menempatkan penanda lingkarann',
    },
    actions: {
      finish: 'Selesai',
      cancel: 'Batal',
      removeLastVertex: 'Hilangkan Vertex Terakhir',
    },
    buttonTitles: {
      drawMarkerButton: 'Digitasi Marker',
      drawPolyButton: 'Digitasi Polygon',
      drawLineButton: 'Digitasi Polyline',
      drawCircleButton: 'Digitasi Lingkaran',
      drawRectButton: 'Digitasi Segi Empat',
      editButton: 'Edit Layer',
      dragButton: 'Geser Layer',
      cutButton: 'Potong Layer',
      deleteButton: 'Hilangkan Layer',
      drawCircleMarkerButton: 'Digitasi Penanda Lingkaran',
      snappingButton:
        'Jepretkan penanda yang ditarik ke lapisan dan simpul lain',
      pinningButton: 'Sematkan simpul bersama bersama',
      rotateButton: 'Putar lapisan',
    },
  };
  var Ta = {
    tooltips: {
      placeMarker: 'Adaug\u0103 un punct',
      firstVertex: 'Apas\u0103 aici pentru a ad\u0103uga primul Vertex',
      continueLine: 'Apas\u0103 aici pentru a continua desenul',
      finishLine: 'Apas\u0103 pe orice obiect pentru a finisa desenul',
      finishPoly: 'Apas\u0103 pe primul obiect pentru a finisa',
      finishRect: 'Apas\u0103 pentru a finisa',
      startCircle: 'Apas\u0103 pentru a desena un cerc',
      finishCircle: 'Apas\u0103 pentru a finisa un cerc',
      placeCircleMarker: 'Adaug\u0103 un punct',
    },
    actions: {
      finish: 'Termin\u0103',
      cancel: 'Anuleaz\u0103',
      removeLastVertex: '\u0218terge ultimul Vertex',
    },
    buttonTitles: {
      drawMarkerButton: 'Adaug\u0103 o bulin\u0103',
      drawPolyButton: 'Deseneaz\u0103 un poligon',
      drawLineButton: 'Deseneaz\u0103 o linie',
      drawCircleButton: 'Deseneaz\u0103 un cerc',
      drawRectButton: 'Deseneaz\u0103 un dreptunghi',
      editButton: 'Editeaz\u0103 straturile',
      dragButton: 'Mut\u0103 straturile',
      cutButton: 'Taie straturile',
      deleteButton: '\u0218terge straturile',
      drawCircleMarkerButton: 'Deseneaz\u0103 marcatorul cercului',
      snappingButton:
        'Fixa\u021Bi marcatorul glisat pe alte straturi \u0219i v\xE2rfuri',
      pinningButton: 'Fixa\u021Bi v\xE2rfurile partajate \xEEmpreun\u0103',
      rotateButton: 'Roti\u021Bi stratul',
    },
  };
  var Ra = {
    tooltips: {
      placeMarker:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043C\u0430\u0440\u043A\u0435\u0440',
      firstVertex:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043F\u0435\u0440\u0432\u044B\u0439 \u043E\u0431\u044A\u0435\u043A\u0442',
      continueLine:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435',
      finishLine:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043B\u044E\u0431\u043E\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440 \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F',
      finishPoly:
        '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0435\u0440\u0432\u0443\u044E \u0442\u043E\u0447\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C',
      finishRect:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C',
      startCircle:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0446\u0435\u043D\u0442\u0440 \u043A\u0440\u0443\u0433\u0430',
      finishCircle:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0434\u0430\u0442\u044C \u0440\u0430\u0434\u0438\u0443\u0441',
      placeCircleMarker:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043A\u0440\u0443\u0433\u043E\u0432\u043E\u0439 \u043C\u0430\u0440\u043A\u0435\u0440',
    },
    actions: {
      finish: '\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C',
      cancel: '\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C',
      removeLastVertex:
        '\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435',
    },
    buttonTitles: {
      drawMarkerButton:
        '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0430\u0440\u043A\u0435\u0440',
      drawPolyButton:
        '\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u0438\u0433\u043E\u043D',
      drawLineButton:
        '\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043A\u0440\u0438\u0432\u0443\u044E',
      drawCircleButton:
        '\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043A\u0440\u0443\u0433',
      drawRectButton:
        '\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A',
      editButton:
        '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043B\u043E\u0439',
      dragButton:
        '\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0441\u043B\u043E\u0439',
      cutButton:
        '\u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C \u0441\u043B\u043E\u0439',
      deleteButton:
        '\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043B\u043E\u0439',
      drawCircleMarkerButton:
        '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0440\u0443\u0433\u043E\u0432\u043E\u0439 \u043C\u0430\u0440\u043A\u0435\u0440',
      snappingButton:
        '\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043C\u0430\u0440\u043A\u0435\u0440 \u043A \u0434\u0440\u0443\u0433\u0438\u043C \u0441\u043B\u043E\u044F\u043C \u0438 \u0432\u0435\u0440\u0448\u0438\u043D\u0430\u043C',
      pinningButton:
        '\u0421\u0432\u044F\u0437\u0430\u0442\u044C \u043E\u0431\u0449\u0438\u0435 \u0442\u043E\u0447\u043A\u0438 \u0432\u043C\u0435\u0441\u0442\u0435',
      rotateButton:
        '\u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u0441\u043B\u043E\u044F',
    },
  };
  var Da = {
    tooltips: {
      placeMarker: 'Presiona para colocar un marcador',
      firstVertex: 'Presiona para colocar el primer v\xE9rtice',
      continueLine: 'Presiona para continuar dibujando',
      finishLine: 'Presiona cualquier marcador existente para finalizar',
      finishPoly: 'Presiona el primer marcador para finalizar',
      finishRect: 'Presiona para finalizar',
      startCircle: 'Presiona para colocar el centro del c\xEDrculo',
      finishCircle: 'Presiona para finalizar el c\xEDrculo',
      placeCircleMarker: 'Presiona para colocar un marcador de c\xEDrculo',
    },
    actions: {
      finish: 'Finalizar',
      cancel: 'Cancelar',
      removeLastVertex: 'Eliminar \xFAltimo v\xE9rtice',
    },
    buttonTitles: {
      drawMarkerButton: 'Dibujar Marcador',
      drawPolyButton: 'Dibujar Pol\xEDgono',
      drawLineButton: 'Dibujar L\xEDnea',
      drawCircleButton: 'Dibujar C\xEDrculo',
      drawRectButton: 'Dibujar Rect\xE1ngulo',
      editButton: 'Editar Capas',
      dragButton: 'Arrastrar Capas',
      cutButton: 'Cortar Capas',
      deleteButton: 'Eliminar Capas',
      drawCircleMarkerButton: 'Dibujar Marcador de C\xEDrculo',
      snappingButton:
        'El marcador de Snap arrastrado a otras capas y v\xE9rtices',
      pinningButton: 'Fijar juntos los v\xE9rtices compartidos',
      rotateButton: 'Rotar capa',
    },
  };
  var Oa = {
    tooltips: {
      placeMarker: 'Klik om een marker te plaatsen',
      firstVertex: 'Klik om het eerste punt te plaatsen',
      continueLine: 'Klik om te blijven tekenen',
      finishLine: 'Klik op een bestaand punt om te be\xEBindigen',
      finishPoly: 'Klik op het eerst punt om te be\xEBindigen',
      finishRect: 'Klik om te be\xEBindigen',
      startCircle: 'Klik om het middelpunt te plaatsen',
      finishCircle: 'Klik om de cirkel te be\xEBindigen',
      placeCircleMarker: 'Klik om een marker te plaatsen',
    },
    actions: {
      finish: 'Bewaar',
      cancel: 'Annuleer',
      removeLastVertex: 'Verwijder laatste punt',
    },
    buttonTitles: {
      drawMarkerButton: 'Plaats Marker',
      drawPolyButton: 'Teken een vlak',
      drawLineButton: 'Teken een lijn',
      drawCircleButton: 'Teken een cirkel',
      drawRectButton: 'Teken een vierkant',
      editButton: 'Bewerk',
      dragButton: 'Verplaats',
      cutButton: 'Knip',
      deleteButton: 'Verwijder',
      drawCircleMarkerButton: 'Plaats Marker',
      snappingButton: 'Snap gesleepte marker naar andere lagen en hoekpunten',
      pinningButton: 'Speld gedeelde hoekpunten samen',
      rotateButton: 'Laag roteren',
    },
  };
  var Ia = {
    tooltips: {
      placeMarker: 'Cliquez pour placer un marqueur',
      firstVertex: 'Cliquez pour placer le premier sommet',
      continueLine: 'Cliquez pour continuer \xE0 dessiner',
      finishLine: "Cliquez sur n'importe quel marqueur pour terminer",
      finishPoly: 'Cliquez sur le premier marqueur pour terminer',
      finishRect: 'Cliquez pour terminer',
      startCircle: 'Cliquez pour placer le centre du cercle',
      finishCircle: 'Cliquez pour finir le cercle',
      placeCircleMarker: 'Cliquez pour placer le marqueur circulaire',
    },
    actions: {
      finish: 'Terminer',
      cancel: 'Annuler',
      removeLastVertex: 'Retirer le dernier sommet',
    },
    buttonTitles: {
      drawMarkerButton: 'Placer des marqueurs',
      drawPolyButton: 'Dessiner des polygones',
      drawLineButton: 'Dessiner des polylignes',
      drawCircleButton: 'Dessiner un cercle',
      drawRectButton: 'Dessiner un rectangle',
      editButton: '\xC9diter des calques',
      dragButton: 'D\xE9placer des calques',
      cutButton: 'Couper des calques',
      deleteButton: 'Supprimer des calques',
      drawCircleMarkerButton: 'Dessiner un marqueur circulaire',
      snappingButton: "Glisser le marqueur vers d'autres couches et sommets",
      pinningButton: '\xC9pingler ensemble les sommets partag\xE9s',
      rotateButton: 'Tourner des calques',
    },
  };
  var Aa = {
    tooltips: {
      placeMarker: '\u5355\u51FB\u653E\u7F6E\u6807\u8BB0',
      firstVertex: '\u5355\u51FB\u653E\u7F6E\u9996\u4E2A\u9876\u70B9',
      continueLine: '\u5355\u51FB\u7EE7\u7EED\u7ED8\u5236',
      finishLine:
        '\u5355\u51FB\u4EFB\u4F55\u5B58\u5728\u7684\u6807\u8BB0\u4EE5\u5B8C\u6210',
      finishPoly:
        '\u5355\u51FB\u7B2C\u4E00\u4E2A\u6807\u8BB0\u4EE5\u5B8C\u6210',
      finishRect: '\u5355\u51FB\u5B8C\u6210',
      startCircle: '\u5355\u51FB\u653E\u7F6E\u5706\u5FC3',
      finishCircle: '\u5355\u51FB\u5B8C\u6210\u5706\u5F62',
      placeCircleMarker: '\u70B9\u51FB\u653E\u7F6E\u5706\u5F62\u6807\u8BB0',
    },
    actions: {
      finish: '\u5B8C\u6210',
      cancel: '\u53D6\u6D88',
      removeLastVertex: '\u79FB\u9664\u6700\u540E\u7684\u9876\u70B9',
    },
    buttonTitles: {
      drawMarkerButton: '\u7ED8\u5236\u6807\u8BB0',
      drawPolyButton: '\u7ED8\u5236\u591A\u8FB9\u5F62',
      drawLineButton: '\u7ED8\u5236\u7EBF\u6BB5',
      drawCircleButton: '\u7ED8\u5236\u5706\u5F62',
      drawRectButton: '\u7ED8\u5236\u957F\u65B9\u5F62',
      editButton: '\u7F16\u8F91\u56FE\u5C42',
      dragButton: '\u62D6\u62FD\u56FE\u5C42',
      cutButton: '\u526A\u5207\u56FE\u5C42',
      deleteButton: '\u5220\u9664\u56FE\u5C42',
      drawCircleMarkerButton: '\u753B\u5706\u5708\u6807\u8BB0',
      snappingButton:
        '\u5C06\u62D6\u52A8\u7684\u6807\u8BB0\u6355\u6349\u5230\u5176\u4ED6\u56FE\u5C42\u548C\u9876\u70B9',
      pinningButton:
        '\u5C06\u5171\u4EAB\u9876\u70B9\u56FA\u5B9A\u5728\u4E00\u8D77',
      rotateButton: '\u65CB\u8F6C\u56FE\u5C42',
    },
  };
  var Ga = {
    tooltips: {
      placeMarker: '\u55AE\u64CA\u653E\u7F6E\u6A19\u8A18',
      firstVertex: '\u55AE\u64CA\u653E\u7F6E\u7B2C\u4E00\u500B\u9802\u9EDE',
      continueLine: '\u55AE\u64CA\u7E7C\u7E8C\u7E6A\u88FD',
      finishLine:
        '\u55AE\u64CA\u4EFB\u4F55\u5B58\u5728\u7684\u6A19\u8A18\u4EE5\u5B8C\u6210',
      finishPoly:
        '\u55AE\u64CA\u7B2C\u4E00\u500B\u6A19\u8A18\u4EE5\u5B8C\u6210',
      finishRect: '\u55AE\u64CA\u5B8C\u6210',
      startCircle: '\u55AE\u64CA\u653E\u7F6E\u5713\u5FC3',
      finishCircle: '\u55AE\u64CA\u5B8C\u6210\u5713\u5F62',
      placeCircleMarker: '\u9EDE\u64CA\u653E\u7F6E\u5713\u5F62\u6A19\u8A18',
    },
    actions: {
      finish: '\u5B8C\u6210',
      cancel: '\u53D6\u6D88',
      removeLastVertex: '\u79FB\u9664\u6700\u5F8C\u4E00\u500B\u9802\u9EDE',
    },
    buttonTitles: {
      drawMarkerButton: '\u653E\u7F6E\u6A19\u8A18',
      drawPolyButton: '\u7E6A\u88FD\u591A\u908A\u5F62',
      drawLineButton: '\u7E6A\u88FD\u7DDA\u6BB5',
      drawCircleButton: '\u7E6A\u88FD\u5713\u5F62',
      drawRectButton: '\u7E6A\u88FD\u65B9\u5F62',
      editButton: '\u7DE8\u8F2F\u5716\u5F62',
      dragButton: '\u79FB\u52D5\u5716\u5F62',
      cutButton: '\u88C1\u5207\u5716\u5F62',
      deleteButton: '\u522A\u9664\u5716\u5F62',
      drawCircleMarkerButton: '\u756B\u5713\u5708\u6A19\u8A18',
      snappingButton:
        '\u5C07\u62D6\u52D5\u7684\u6A19\u8A18\u5C0D\u9F4A\u5230\u5176\u4ED6\u5716\u5C64\u548C\u9802\u9EDE',
      pinningButton:
        '\u5C07\u5171\u4EAB\u9802\u9EDE\u56FA\u5B9A\u5728\u4E00\u8D77',
      rotateButton: '\u65CB\u8F49\u5716\u5F62',
    },
  };
  var qa = {
    tooltips: {
      placeMarker: 'Clique para posicionar o marcador',
      firstVertex: 'Clique para posicionar o primeiro v\xE9rtice',
      continueLine: 'Clique para continuar desenhando',
      finishLine: 'Clique em qualquer marcador existente para finalizar',
      finishPoly: 'Clique no primeiro marcador para finalizar',
      finishRect: 'Clique para finalizar',
      startCircle: 'Clique para posicionar o centro do c\xEDrculo',
      finishCircle: 'Clique para finalizar o c\xEDrculo',
      placeCircleMarker: 'Clique para posicionar o marcador circular',
      placeText: 'Clique para inserir texto',
    },
    actions: {
      finish: 'Finalizar',
      cancel: 'Cancelar',
      removeLastVertex: 'Remover \xFAltimo v\xE9rtice',
    },
    buttonTitles: {
      drawMarkerButton: 'Desenhar Marcador',
      drawPolyButton: 'Desenhar Pol\xEDgonos',
      drawLineButton: 'Desenhar Linha Poligonal',
      drawCircleButton: 'Desenhar C\xEDrculo',
      drawRectButton: 'Desenhar Ret\xE2ngulo',
      editButton: 'Editar Camadas',
      dragButton: 'Arrastar Camadas',
      cutButton: 'Recortar Camadas',
      deleteButton: 'Remover Camadas',
      drawCircleMarkerButton: 'Desenhar Marcador de C\xEDrculo',
      snappingButton:
        'Ajustar marcador arrastado a outras camadas e v\xE9rtices',
      pinningButton: 'Unir v\xE9rtices compartilhados',
      rotateButton: 'Rotacionar Camadas',
      drawTextButton: 'Desenhar Texto',
      scaleButton: 'Redimensionar Camadas',
      autoTracingButton: 'Tra\xE7ado Autom\xE1tico de Linha',
    },
    measurements: {
      totalLength: 'Comprimento',
      segmentLength: 'Comprimento do Segmento',
      area: '\xC1rea',
      radius: 'Raio',
      perimeter: 'Per\xEDmetro',
      height: 'Altura',
      width: 'Largura',
      coordinates: 'Posi\xE7\xE3o',
      coordinatesMarker: 'Marcador de Posi\xE7\xE3o',
    },
  };
  var mi = {
    tooltips: {
      placeMarker: 'Clique para colocar marcador',
      firstVertex: 'Clique para colocar primeiro v\xE9rtice',
      continueLine: 'Clique para continuar a desenhar',
      finishLine: 'Clique num marcador existente para terminar',
      finishPoly: 'Clique no primeiro marcador para terminar',
      finishRect: 'Clique para terminar',
      startCircle: 'Clique para colocar o centro do c\xEDrculo',
      finishCircle: 'Clique para terminar o c\xEDrculo',
      placeCircleMarker: 'Clique para colocar marcador de c\xEDrculo',
      placeText: 'Clique para colocar texto',
    },
    actions: {
      finish: 'Terminar',
      cancel: 'Cancelar',
      removeLastVertex: 'Remover \xDAltimo V\xE9rtice',
    },
    buttonTitles: {
      drawMarkerButton: 'Desenhar Marcador',
      drawPolyButton: 'Desenhar Pol\xEDgonos',
      drawLineButton: 'Desenhar Polilinha',
      drawCircleButton: 'Desenhar C\xEDrculo',
      drawRectButton: 'Desenhar Ret\xE2ngulo',
      editButton: 'Editar Camadas',
      dragButton: 'Arrastar Camadas',
      cutButton: 'Cortar Camadas',
      deleteButton: 'Remover Camadas',
      drawCircleMarkerButton: 'Desenhar Marcador de C\xEDrculo',
      snappingButton:
        'Ajustar marcador arrastado a outras camadas e v\xE9rtices',
      pinningButton: 'Unir v\xE9rtices partilhados',
      rotateButton: 'Rodar Camadas',
      drawTextButton: 'Desenhar Texto',
      scaleButton: 'Escalar Camadas',
      autoTracingButton: 'Tra\xE7ado Autom\xE1tico de Linha',
    },
    measurements: {
      totalLength: 'Comprimento',
      segmentLength: 'Comprimento do Segmento',
      area: '\xC1rea',
      radius: 'Raio',
      perimeter: 'Per\xEDmetro',
      height: 'Altura',
      width: 'Largura',
      coordinates: 'Posi\xE7\xE3o',
      coordinatesMarker: 'Marcador de Posi\xE7\xE3o',
    },
  };
  var Na = {
    tooltips: {
      placeMarker: 'Kliknij, aby umie\u015Bci\u0107 znacznik',
      firstVertex: 'Kliknij, aby umie\u015Bci\u0107 pierwszy wierzcho\u0142ek',
      continueLine: 'Kliknij, aby kontynuowa\u0107 rysowanie',
      finishLine:
        'Kliknij dowolny istniej\u0105cy znacznik, aby zako\u0144czy\u0107',
      finishPoly: 'Kliknij pierwszy znacznik, aby zako\u0144czy\u0107',
      finishRect: 'Kliknij, aby zako\u0144czy\u0107',
      startCircle: 'Kliknij, aby umie\u015Bci\u0107 \u015Brodek okr\u0119gu',
      finishCircle: 'Kliknij, aby zako\u0144czy\u0107 okr\u0105g',
      placeCircleMarker: 'Kliknij, aby umie\u015Bci\u0107 znacznik okr\u0119gu',
      placeText: 'Kliknij, aby umie\u015Bci\u0107 tekst',
    },
    actions: {
      finish: 'Zako\u0144cz',
      cancel: 'Anuluj',
      removeLastVertex: 'Usu\u0144 ostatni wierzcho\u0142ek',
    },
    buttonTitles: {
      drawMarkerButton: 'Rysuj znacznik',
      drawPolyButton: 'Rysuj wielok\u0105t',
      drawLineButton: 'Rysuj lini\u0119',
      drawCircleButton: 'Rysuj okr\u0105g',
      drawRectButton: 'Rysuj prostok\u0105t',
      editButton: 'Edytuj warstwy',
      dragButton: 'Przeci\u0105gnij warstwy',
      cutButton: 'Wytnij warstwy',
      deleteButton: 'Usu\u0144 warstwy',
      drawCircleMarkerButton: 'Rysuj znacznik okr\u0105g\u0142y',
      snappingButton:
        'Przyci\u0105gnij przenoszony znacznik do innych warstw i wierzcho\u0142k\xF3w',
      pinningButton: 'Przypnij wsp\xF3lne wierzcho\u0142ki razem',
      rotateButton: 'Obr\xF3\u0107 warstwy',
      drawTextButton: 'Rysuj tekst',
      scaleButton: 'Skaluj warstwy',
      autoTracingButton: 'Automatyczne \u015Bledzenie linii',
    },
    measurements: {
      totalLength: 'D\u0142ugo\u015B\u0107',
      segmentLength: 'D\u0142ugo\u015B\u0107 odcinka',
      area: 'Obszar',
      radius: 'Promie\u0144',
      perimeter: 'Obw\xF3d',
      height: 'Wysoko\u015B\u0107',
      width: 'Szeroko\u015B\u0107',
      coordinates: 'Pozycja',
      coordinatesMarker: 'Znacznik pozycji',
    },
  };
  var za = {
    tooltips: {
      placeMarker: 'Klicka f\xF6r att placera mark\xF6r',
      firstVertex: 'Klicka f\xF6r att placera f\xF6rsta h\xF6rnet',
      continueLine: 'Klicka f\xF6r att forts\xE4tta rita',
      finishLine: 'Klicka p\xE5 en existerande punkt f\xF6r att slutf\xF6ra',
      finishPoly: 'Klicka p\xE5 den f\xF6rsta punkten f\xF6r att slutf\xF6ra',
      finishRect: 'Klicka f\xF6r att slutf\xF6ra',
      startCircle: 'Klicka f\xF6r att placera cirkelns centrum',
      finishCircle: 'Klicka f\xF6r att slutf\xF6ra cirkeln',
      placeCircleMarker: 'Klicka f\xF6r att placera cirkelmark\xF6r',
    },
    actions: {
      finish: 'Slutf\xF6r',
      cancel: 'Avbryt',
      removeLastVertex: 'Ta bort sista h\xF6rnet',
    },
    buttonTitles: {
      drawMarkerButton: 'Rita Mark\xF6r',
      drawPolyButton: 'Rita Polygoner',
      drawLineButton: 'Rita Linje',
      drawCircleButton: 'Rita Cirkel',
      drawRectButton: 'Rita Rektangel',
      editButton: 'Redigera Lager',
      dragButton: 'Dra Lager',
      cutButton: 'Klipp i Lager',
      deleteButton: 'Ta bort Lager',
      drawCircleMarkerButton: 'Rita Cirkelmark\xF6r',
      snappingButton: 'Sn\xE4pp dra mark\xF6ren till andra lager och h\xF6rn',
      pinningButton: 'F\xE4st delade h\xF6rn tillsammans',
      rotateButton: 'Rotera lagret',
    },
  };
  var Fa = {
    tooltips: {
      placeMarker:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03B5\u03C4\u03B5 \u0394\u03B5\u03AF\u03BA\u03C4\u03B7',
      firstVertex:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF \u03C0\u03C1\u03CE\u03C4\u03BF \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF',
      continueLine:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03C3\u03C7\u03B5\u03B4\u03B9\u03AC\u03B6\u03B5\u03C4\u03B5',
      finishLine:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03C3\u03B5 \u03BF\u03C0\u03BF\u03B9\u03BF\u03BD\u03B4\u03AE\u03C0\u03BF\u03C4\u03B5 \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03BD \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03C9\u03B8\u03B5\u03AF',
      finishPoly:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03C3\u03C4\u03BF \u03C0\u03C1\u03CE\u03C4\u03BF \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03C3\u03B5\u03C4\u03B5',
      finishRect:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03C3\u03B5\u03C4\u03B5',
      startCircle:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03B5\u03C4\u03B5 \u03BA\u03AD\u03BD\u03C4\u03C1\u03BF \u039A\u03CD\u03BA\u03BB\u03BF\u03C5',
      finishCircle:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF\u03BD \u039A\u03CD\u03BA\u03BB\u03BF',
      placeCircleMarker:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03B5\u03C4\u03B5 \u039A\u03C5\u03BA\u03BB\u03B9\u03BA\u03CC \u0394\u03B5\u03AF\u03BA\u03C4\u03B7',
    },
    actions: {
      finish: '\u03A4\u03AD\u03BB\u03BF\u03C2',
      cancel: '\u0391\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7',
      removeLastVertex:
        '\u039A\u03B1\u03C4\u03AC\u03C1\u03B3\u03B7\u03C3\u03B7 \u03C4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF\u03C5 \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF\u03C5',
    },
    buttonTitles: {
      drawMarkerButton:
        '\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u0394\u03B5\u03AF\u03BA\u03C4\u03B7',
      drawPolyButton:
        '\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u03A0\u03BF\u03BB\u03C5\u03B3\u03CE\u03BD\u03BF\u03C5',
      drawLineButton:
        '\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE\u03C2',
      drawCircleButton:
        '\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u039A\u03CD\u03BA\u03BB\u03BF\u03C5',
      drawRectButton:
        '\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u039F\u03C1\u03B8\u03BF\u03B3\u03C9\u03BD\u03AF\u03BF\u03C5',
      editButton:
        '\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1 \u0395\u03C0\u03B9\u03C0\u03AD\u03B4\u03C9\u03BD',
      dragButton:
        '\u039C\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC \u0395\u03C0\u03B9\u03C0\u03AD\u03B4\u03C9\u03BD',
      cutButton:
        '\u0391\u03C0\u03BF\u03BA\u03BF\u03C0\u03AE \u0395\u03C0\u03B9\u03C0\u03AD\u03B4\u03C9\u03BD',
      deleteButton:
        '\u039A\u03B1\u03C4\u03AC\u03C1\u03B3\u03B7\u03C3\u03B7 \u0395\u03C0\u03B9\u03C0\u03AD\u03B4\u03C9\u03BD',
      drawCircleMarkerButton:
        '\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u039A\u03C5\u03BA\u03BB\u03B9\u03BA\u03BF\u03CD \u0394\u03B5\u03AF\u03BA\u03C4\u03B7',
      snappingButton:
        '\u03A0\u03C1\u03BF\u03C3\u03BA\u03CC\u03BB\u03BB\u03B7\u03C3\u03B7 \u03C4\u03BF\u03C5 \u0394\u03B5\u03AF\u03BA\u03C4\u03B7 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2 \u03C3\u03B5 \u03AC\u03BB\u03BB\u03B1 \u0395\u03C0\u03AF\u03C0\u03B5\u03B4\u03B1 \u03BA\u03B1\u03B9 \u039A\u03BF\u03C1\u03C5\u03C6\u03AD\u03C2',
      pinningButton:
        '\u03A0\u03B5\u03C1\u03B9\u03BA\u03BF\u03C0\u03AE \u03BA\u03BF\u03B9\u03BD\u03CE\u03BD \u03BA\u03BF\u03C1\u03C5\u03C6\u03CE\u03BD \u03BC\u03B1\u03B6\u03AF',
      rotateButton:
        '\u03A0\u03B5\u03C1\u03B9\u03C3\u03C4\u03C1\u03AD\u03C8\u03C4\u03B5 \u03C4\u03BF \u03C3\u03C4\u03C1\u03CE\u03BC\u03B1',
    },
  };
  var Va = {
    tooltips: {
      placeMarker: 'Kattintson a jel\xF6l\u0151 elhelyez\xE9s\xE9hez',
      firstVertex: 'Kattintson az els\u0151 pont elhelyez\xE9s\xE9hez',
      continueLine: 'Kattintson a k\xF6vetkez\u0151 pont elhelyez\xE9s\xE9hez',
      finishLine: 'A befejez\xE9shez kattintson egy megl\xE9v\u0151 pontra',
      finishPoly: 'A befejez\xE9shez kattintson az els\u0151 pontra',
      finishRect: 'Kattintson a befejez\xE9shez',
      startCircle:
        'Kattintson a k\xF6r k\xF6z\xE9ppontj\xE1nak elhelyez\xE9s\xE9hez',
      finishCircle: 'Kattintson a k\xF6r befejez\xE9s\xE9hez',
      placeCircleMarker:
        'Kattintson a k\xF6rjel\xF6l\u0151 elhelyez\xE9s\xE9hez',
    },
    actions: {
      finish: 'Befejez\xE9s',
      cancel: 'M\xE9gse',
      removeLastVertex: 'Utols\xF3 pont elt\xE1vol\xEDt\xE1sa',
    },
    buttonTitles: {
      drawMarkerButton: 'Jel\xF6l\u0151 rajzol\xE1sa',
      drawPolyButton: 'Poligon rajzol\xE1sa',
      drawLineButton: 'Vonal rajzol\xE1sa',
      drawCircleButton: 'K\xF6r rajzol\xE1sa',
      drawRectButton: 'N\xE9gyzet rajzol\xE1sa',
      editButton: 'Elemek szerkeszt\xE9se',
      dragButton: 'Elemek mozgat\xE1sa',
      cutButton: 'Elemek v\xE1g\xE1sa',
      deleteButton: 'Elemek t\xF6rl\xE9se',
      drawCircleMarkerButton: 'K\xF6r jel\xF6l\u0151 rajzol\xE1sa',
      snappingButton:
        'Kapcsolja a jel\xF6lt\u0151t m\xE1sik elemhez vagy ponthoz',
      pinningButton: 'K\xF6z\xF6s pontok \xF6sszek\xF6t\xE9se',
      rotateButton: 'F\xF3lia elforgat\xE1sa',
    },
  };
  var Ua = {
    tooltips: {
      placeMarker: 'Tryk for at placere en mark\xF8r',
      firstVertex: 'Tryk for at placere det f\xF8rste punkt',
      continueLine: 'Tryk for at forts\xE6tte linjen',
      finishLine: 'Tryk p\xE5 et eksisterende punkt for at afslutte',
      finishPoly: 'Tryk p\xE5 det f\xF8rste punkt for at afslutte',
      finishRect: 'Tryk for at afslutte',
      startCircle: 'Tryk for at placere cirklens center',
      finishCircle: 'Tryk for at afslutte cirklen',
      placeCircleMarker: 'Tryk for at placere en cirkelmark\xF8r',
    },
    actions: {
      finish: 'Afslut',
      cancel: 'Afbryd',
      removeLastVertex: 'Fjern sidste punkt',
    },
    buttonTitles: {
      drawMarkerButton: 'Placer mark\xF8r',
      drawPolyButton: 'Tegn polygon',
      drawLineButton: 'Tegn linje',
      drawCircleButton: 'Tegn cirkel',
      drawRectButton: 'Tegn firkant',
      editButton: 'Rediger',
      dragButton: 'Tr\xE6k',
      cutButton: 'Klip',
      deleteButton: 'Fjern',
      drawCircleMarkerButton: 'Tegn cirkelmark\xF8r',
      snappingButton: 'Fastg\xF8r trukket mark\xF8r til andre elementer',
      pinningButton: 'Sammenl\xE6g delte elementer',
      rotateButton: 'Roter laget',
    },
  };
  var Ka = {
    tooltips: {
      placeMarker: 'Klikk for \xE5 plassere punkt',
      firstVertex: 'Klikk for \xE5 plassere f\xF8rste punkt',
      continueLine: 'Klikk for \xE5 tegne videre',
      finishLine: 'Klikk p\xE5 et eksisterende punkt for \xE5 fullf\xF8re',
      finishPoly: 'Klikk f\xF8rste punkt for \xE5 fullf\xF8re',
      finishRect: 'Klikk for \xE5 fullf\xF8re',
      startCircle: 'Klikk for \xE5 sette sirkel midtpunkt',
      finishCircle: 'Klikk for \xE5 fullf\xF8re sirkel',
      placeCircleMarker: 'Klikk for \xE5 plassere sirkel',
      placeText: 'Klikk for \xE5 plassere tekst',
    },
    actions: {
      finish: 'Fullf\xF8r',
      cancel: 'Kanseller',
      removeLastVertex: 'Fjern forrige punkt',
    },
    buttonTitles: {
      drawMarkerButton: 'Tegn punkt',
      drawPolyButton: 'Tegn flate',
      drawLineButton: 'Tegn linje',
      drawCircleButton: 'Tegn sirkel',
      drawRectButton: 'Tegn rektangel',
      editButton: 'Rediger objekter',
      dragButton: 'Dra objekter',
      cutButton: 'Kutt objekter',
      deleteButton: 'Fjern objekter',
      drawCircleMarkerButton: 'Tegn sirkel-punkt',
      snappingButton: 'Fest dratt punkt til andre objekter og punkt',
      pinningButton: 'Pin delte punkter sammen',
      rotateButton: 'Rot\xE9r objekter',
      drawTextButton: 'Tegn tekst',
      scaleButton: 'Skal\xE9r objekter',
      autoTracingButton: 'Automatisk sporing av linje',
    },
    measurements: {
      totalLength: 'Lengde',
      segmentLength: 'Segmentlengde',
      area: 'Omr\xE5de',
      radius: 'Radius',
      perimeter: 'Omriss',
      height: 'H\xF8yde',
      width: 'Bredde',
      coordinates: 'Posisjon',
      coordinatesMarker: 'Posisjonsmark\xF8r',
    },
  };
  var ja = {
    tooltips: {
      placeMarker:
        '\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u062C\u0627\u0646\u0645\u0627\u06CC\u06CC \u0646\u0634\u0627\u0646',
      firstVertex:
        '\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0631\u0633\u0645 \u0627\u0648\u0644\u06CC\u0646 \u0631\u0623\u0633',
      continueLine:
        '\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0627\u062F\u0627\u0645\u0647 \u0631\u0633\u0645',
      finishLine:
        '\u06A9\u0644\u06CC\u06A9 \u0631\u0648\u06CC \u0647\u0631 \u0646\u0634\u0627\u0646 \u0645\u0648\u062C\u0648\u062F \u0628\u0631\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646',
      finishPoly:
        '\u06A9\u0644\u06CC\u06A9 \u0631\u0648\u06CC \u0627\u0648\u0644\u06CC\u0646 \u0646\u0634\u0627\u0646 \u0628\u0631\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646',
      finishRect:
        '\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646',
      startCircle:
        '\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0631\u0633\u0645 \u0645\u0631\u06A9\u0632 \u062F\u0627\u06CC\u0631\u0647',
      finishCircle:
        '\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u0645 \u062F\u0627\u06CC\u0631\u0647',
      placeCircleMarker:
        '\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0631\u0633\u0645 \u0646\u0634\u0627\u0646 \u062F\u0627\u06CC\u0631\u0647',
      placeText:
        '\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0646\u0648\u0634\u062A\u0646 \u0645\u062A\u0646',
    },
    actions: {
      finish: '\u067E\u0627\u06CC\u0627\u0646',
      cancel: '\u0644\u0641\u0648',
      removeLastVertex:
        '\u062D\u0630\u0641 \u0622\u062E\u0631\u06CC\u0646 \u0631\u0623\u0633',
    },
    buttonTitles: {
      drawMarkerButton: '\u062F\u0631\u062C \u0646\u0634\u0627\u0646',
      drawPolyButton:
        '\u0631\u0633\u0645 \u0686\u0646\u062F\u0636\u0644\u0639\u06CC',
      drawLineButton: '\u0631\u0633\u0645 \u062E\u0637',
      drawCircleButton: '\u0631\u0633\u0645 \u062F\u0627\u06CC\u0631\u0647',
      drawRectButton:
        '\u0631\u0633\u0645 \u0686\u0647\u0627\u0631\u0636\u0644\u0639\u06CC',
      editButton:
        '\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0644\u0627\u06CC\u0647\u200C\u0647\u0627',
      dragButton:
        '\u062C\u0627\u0628\u062C\u0627\u06CC\u06CC \u0644\u0627\u06CC\u0647\u200C\u0647\u0627',
      cutButton:
        '\u0628\u0631\u0634 \u0644\u0627\u06CC\u0647\u200C\u0647\u0627',
      deleteButton:
        '\u062D\u0630\u0641 \u0644\u0627\u06CC\u0647\u200C\u0647\u0627',
      drawCircleMarkerButton:
        '\u0631\u0633\u0645 \u0646\u0634\u0627\u0646 \u062F\u0627\u06CC\u0631\u0647',
      snappingButton:
        '\u0646\u0634\u0627\u0646\u06AF\u0631 \u0631\u0627 \u0628\u0647 \u0644\u0627\u06CC\u0647\u200C\u0647\u0627 \u0648 \u0631\u0626\u0648\u0633 \u062F\u06CC\u06AF\u0631 \u0628\u06A9\u0634\u06CC\u062F',
      pinningButton:
        '\u0631\u0626\u0648\u0633 \u0645\u0634\u062A\u0631\u06A9 \u0631\u0627 \u0628\u0627 \u0647\u0645 \u067E\u06CC\u0646 \u06A9\u0646\u06CC\u062F',
      rotateButton: '\u0686\u0631\u062E\u0634 \u0644\u0627\u06CC\u0647',
      drawTextButton: '\u0631\u0633\u0645 \u0645\u062A\u0646',
      scaleButton:
        '\u0645\u0642\u06CC\u0627\u0633\u200C\u06AF\u0630\u0627\u0631\u06CC',
      autoTracingButton:
        '\u0631\u062F\u06CC\u0627\u0628 \u062E\u0648\u062F\u06A9\u0627\u0631',
    },
    measurements: {
      totalLength: '\u0637\u0648\u0644',
      segmentLength: '\u0637\u0648\u0644 \u0628\u062E\u0634',
      area: '\u0646\u0627\u062D\u06CC\u0647',
      radius: '\u0634\u0639\u0627\u0639',
      perimeter: '\u0645\u062D\u06CC\u0637',
      height: '\u0627\u0631\u062A\u0641\u0627\u0639',
      width: '\u0639\u0631\u0636',
      coordinates: '\u0645\u0648\u0642\u0639\u06CC\u062A',
      coordinatesMarker:
        '\u0645\u0648\u0642\u0639\u06CC\u062A \u0646\u0634\u0627\u0646',
    },
  };
  var Ha = {
    tooltips: {
      placeMarker:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043C\u0430\u0440\u043A\u0435\u0440',
      firstVertex:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043F\u0435\u0440\u0448\u0443 \u0432\u0435\u0440\u0448\u0438\u043D\u0443',
      continueLine:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043C\u0430\u043B\u044E\u0432\u0430\u0442\u0438',
      finishLine:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0456\u0441\u043D\u0443\u044E\u0447\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440 \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F',
      finishPoly:
        '\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u043F\u0435\u0440\u0448\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440, \u0449\u043E\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438',
      finishRect:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438',
      startCircle:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0434\u043E\u0434\u0430\u0442\u0438 \u0446\u0435\u043D\u0442\u0440 \u043A\u043E\u043B\u0430',
      finishCircle:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u043A\u043E\u043B\u043E',
      placeCircleMarker:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043A\u0440\u0443\u0433\u043E\u0432\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440',
    },
    actions: {
      finish: '\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438',
      cancel: '\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438',
      removeLastVertex:
        '\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044E \u0432\u0435\u0440\u0448\u0438\u043D\u0443',
    },
    buttonTitles: {
      drawMarkerButton:
        '\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043C\u0430\u0440\u043A\u0435\u0440',
      drawPolyButton:
        '\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043F\u043E\u043B\u0456\u0433\u043E\u043D',
      drawLineButton:
        '\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043A\u0440\u0438\u0432\u0443',
      drawCircleButton:
        '\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043A\u043E\u043B\u043E',
      drawRectButton:
        '\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043F\u0440\u044F\u043C\u043E\u043A\u0443\u0442\u043D\u0438\u043A',
      editButton:
        '\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0448\u0430\u0440\u0438',
      dragButton:
        '\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0448\u0430\u0440\u0438',
      cutButton:
        '\u0412\u0438\u0440\u0456\u0437\u0430\u0442\u0438 \u0448\u0430\u0440\u0438',
      deleteButton:
        '\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0448\u0430\u0440\u0438',
      drawCircleMarkerButton:
        '\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043A\u0440\u0443\u0433\u043E\u0432\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440',
      snappingButton:
        '\u041F\u0440\u0438\u0432\u2019\u044F\u0437\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0443\u0442\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440 \u0434\u043E \u0456\u043D\u0448\u0438\u0445 \u0448\u0430\u0440\u0456\u0432 \u0442\u0430 \u0432\u0435\u0440\u0448\u0438\u043D',
      pinningButton:
        "\u0417\u0432'\u044F\u0437\u0430\u0442\u0438 \u0441\u043F\u0456\u043B\u044C\u043D\u0456 \u0432\u0435\u0440\u0448\u0438\u043D\u0438 \u0440\u0430\u0437\u043E\u043C",
      rotateButton:
        '\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0448\u0430\u0440',
    },
  };
  var Xa = {
    tooltips: {
      placeMarker:
        '\u0130\u015Faret\xE7i yerle\u015Ftirmek i\xE7in t\u0131klay\u0131n',
      firstVertex:
        '\u0130lk tepe noktas\u0131n\u0131 yerle\u015Ftirmek i\xE7in t\u0131klay\u0131n',
      continueLine: '\xC7izime devam etmek i\xE7in t\u0131klay\u0131n',
      finishLine:
        'Bitirmek i\xE7in mevcut herhangi bir i\u015Faret\xE7iyi t\u0131klay\u0131n',
      finishPoly: 'Bitirmek i\xE7in ilk i\u015Faret\xE7iyi t\u0131klay\u0131n',
      finishRect: 'Bitirmek i\xE7in t\u0131klay\u0131n',
      startCircle:
        'Daire merkezine yerle\u015Ftirmek i\xE7in t\u0131klay\u0131n',
      finishCircle: 'Daireyi bitirmek i\xE7in t\u0131klay\u0131n',
      placeCircleMarker:
        'Daire i\u015Faret\xE7isi yerle\u015Ftirmek i\xE7in t\u0131klay\u0131n',
    },
    actions: {
      finish: 'Bitir',
      cancel: '\u0130ptal',
      removeLastVertex: 'Son k\xF6\u015Feyi kald\u0131r',
    },
    buttonTitles: {
      drawMarkerButton: '\xC7izim \u0130\u015Faret\xE7isi',
      drawPolyButton: '\xC7okgenler \xE7iz',
      drawLineButton: '\xC7oklu \xE7izgi \xE7iz',
      drawCircleButton: '\xC7ember \xE7iz',
      drawRectButton: 'Dikd\xF6rtgen \xE7iz',
      editButton: 'Katmanlar\u0131 d\xFCzenle',
      dragButton: 'Katmanlar\u0131 s\xFCr\xFCkle',
      cutButton: 'Katmanlar\u0131 kes',
      deleteButton: 'Katmanlar\u0131 kald\u0131r',
      drawCircleMarkerButton: 'Daire i\u015Faret\xE7isi \xE7iz',
      snappingButton:
        'S\xFCr\xFCklenen i\u015Faret\xE7iyi di\u011Fer katmanlara ve k\xF6\u015Felere yap\u0131\u015Ft\u0131r',
      pinningButton: 'Payla\u015F\u0131lan k\xF6\u015Feleri birbirine sabitle',
      rotateButton: 'Katman\u0131 d\xF6nd\xFCr',
    },
  };
  var Ya = {
    tooltips: {
      placeMarker: 'Kliknut\xEDm vytvo\u0159\xEDte zna\u010Dku',
      firstVertex: 'Kliknut\xEDm vytvo\u0159\xEDte prvn\xED objekt',
      continueLine: 'Kliknut\xEDm pokra\u010Dujte v kreslen\xED',
      finishLine:
        'Kliknut\xED na libovolnou existuj\xEDc\xED zna\u010Dku pro dokon\u010Den\xED',
      finishPoly: 'Vyberte prvn\xED bod pro dokon\u010Den\xED',
      finishRect: 'Klikn\u011Bte pro dokon\u010Den\xED',
      startCircle: 'Kliknut\xEDm p\u0159idejte st\u0159ed kruhu',
      finishCircle:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0434\u0430\u0442\u044C \u0440\u0430\u0434\u0438\u0443\u0441',
      placeCircleMarker: 'Kliknut\xEDm nastavte polom\u011Br',
    },
    actions: {
      finish: 'Dokon\u010Dit',
      cancel: 'Zru\u0161it',
      removeLastVertex: 'Zru\u0161it posledn\xED akci',
    },
    buttonTitles: {
      drawMarkerButton: 'P\u0159idat zna\u010Dku',
      drawPolyButton: 'Nakreslit polygon',
      drawLineButton: 'Nakreslit k\u0159ivku',
      drawCircleButton: 'Nakreslit kruh',
      drawRectButton: 'Nakreslit obd\xE9ln\xEDk',
      editButton: 'Upravit vrstvu',
      dragButton: 'P\u0159eneste vrstvu',
      cutButton: 'Vyjmout vrstvu',
      deleteButton: 'Smazat vrstvu',
      drawCircleMarkerButton: 'P\u0159idat kruhovou zna\u010Dku',
      snappingButton:
        'Nav\xE1zat ta\u017Enou zna\u010Dku k dal\u0161\xEDm vrstv\xE1m a vrchol\u016Fm',
      pinningButton: 'Spojit spole\u010Dn\xE9 body dohromady',
      rotateButton: 'Oto\u010Dte vrstvu',
    },
  };
  var Ja = {
    tooltips: {
      placeMarker:
        '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30DE\u30FC\u30AB\u30FC\u3092\u914D\u7F6E',
      firstVertex:
        '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u6700\u521D\u306E\u9802\u70B9\u3092\u914D\u7F6E',
      continueLine:
        '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u63CF\u753B\u3092\u7D9A\u3051\u308B',
      finishLine:
        '\u4EFB\u610F\u306E\u30DE\u30FC\u30AB\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7D42\u4E86',
      finishPoly:
        '\u6700\u521D\u306E\u30DE\u30FC\u30AB\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7D42\u4E86',
      finishRect: '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7D42\u4E86',
      startCircle:
        '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u5186\u306E\u4E2D\u5FC3\u3092\u914D\u7F6E',
      finishCircle:
        '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u5186\u306E\u63CF\u753B\u3092\u7D42\u4E86',
      placeCircleMarker:
        '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u5186\u30DE\u30FC\u30AB\u30FC\u3092\u914D\u7F6E',
      placeText:
        '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30C6\u30AD\u30B9\u30C8\u3092\u914D\u7F6E',
    },
    actions: {
      finish: '\u7D42\u4E86',
      cancel: '\u30AD\u30E3\u30F3\u30BB\u30EB',
      removeLastVertex: '\u6700\u5F8C\u306E\u9802\u70B9\u3092\u524A\u9664',
    },
    buttonTitles: {
      drawMarkerButton: '\u30DE\u30FC\u30AB\u30FC\u3092\u63CF\u753B',
      drawPolyButton: '\u30DD\u30EA\u30B4\u30F3\u3092\u63CF\u753B',
      drawLineButton: '\u6298\u308C\u7DDA\u3092\u63CF\u753B',
      drawCircleButton: '\u5186\u3092\u63CF\u753B',
      drawRectButton: '\u77E9\u5F62\u3092\u63CF\u753B',
      editButton: '\u30EC\u30A4\u30E4\u30FC\u3092\u7DE8\u96C6',
      dragButton: '\u30EC\u30A4\u30E4\u30FC\u3092\u30C9\u30E9\u30C3\u30B0',
      cutButton: '\u30EC\u30A4\u30E4\u30FC\u3092\u5207\u308A\u53D6\u308A',
      deleteButton: '\u30EC\u30A4\u30E4\u30FC\u3092\u524A\u9664',
      drawCircleMarkerButton:
        '\u5186\u30DE\u30FC\u30AB\u30FC\u3092\u63CF\u753B',
      snappingButton:
        '\u30C9\u30E9\u30C3\u30B0\u3057\u305F\u30DE\u30FC\u30AB\u30FC\u3092\u4ED6\u306E\u30EC\u30A4\u30E4\u30FC\u3084\u9802\u70B9\u306B\u30B9\u30CA\u30C3\u30D7\u3059\u308B',
      pinningButton:
        '\u5171\u6709\u3059\u308B\u9802\u70B9\u3092\u540C\u6642\u306B\u52D5\u304B\u3059',
      rotateButton: '\u30EC\u30A4\u30E4\u30FC\u3092\u56DE\u8EE2',
      drawTextButton: '\u30C6\u30AD\u30B9\u30C8\u3092\u63CF\u753B',
    },
  };
  var $a = {
    tooltips: {
      placeMarker: 'Klikkaa asettaaksesi merkin',
      firstVertex: 'Klikkaa asettaakseni ensimm\xE4isen osuuden',
      continueLine: 'Klikkaa jatkaaksesi piirt\xE4mist\xE4',
      finishLine: 'Klikkaa olemassa olevaa merkki\xE4 lopettaaksesi',
      finishPoly: 'Klikkaa ensimm\xE4ist\xE4 merkki\xE4 lopettaaksesi',
      finishRect: 'Klikkaa lopettaaksesi',
      startCircle: 'Klikkaa asettaaksesi ympyr\xE4n keskipisteen',
      finishCircle: 'Klikkaa lopettaaksesi ympyr\xE4n',
      placeCircleMarker: 'Klikkaa asettaaksesi ympyr\xE4merkin',
      placeText: 'Klikkaa asettaaksesi tekstin',
    },
    actions: {
      finish: 'Valmis',
      cancel: 'Peruuta',
      removeLastVertex: 'Poista viimeinen osuus',
    },
    buttonTitles: {
      drawMarkerButton: 'Piirr\xE4 merkkej\xE4',
      drawPolyButton: 'Piirr\xE4 monikulmioita',
      drawLineButton: 'Piirr\xE4 viivoja',
      drawCircleButton: 'Piirr\xE4 ympyr\xE4',
      drawRectButton: 'Piirr\xE4 neliskulmioita',
      editButton: 'Muokkaa',
      dragButton: 'Siirr\xE4',
      cutButton: 'Leikkaa',
      deleteButton: 'Poista',
      drawCircleMarkerButton: 'Piirr\xE4 ympyr\xE4merkki',
      snappingButton: 'Kiinnit\xE4 siirrett\xE4v\xE4 merkki toisiin muotoihin',
      pinningButton: 'Kiinnit\xE4 jaetut muodot yhteen',
      rotateButton: 'K\xE4\xE4nn\xE4',
      drawTextButton: 'Piirr\xE4 teksti\xE4',
    },
  };
  var Za = {
    tooltips: {
      placeMarker:
        '\uB9C8\uCEE4 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC138\uC694',
      firstVertex:
        '\uCCAB\uBC88\uC9F8 \uAF2D\uC9C0\uC810 \uC704\uCE58\uC744 \uD074\uB9AD\uD558\uC138\uC694',
      continueLine:
        '\uACC4\uC18D \uADF8\uB9AC\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694',
      finishLine:
        '\uB05D\uB0B4\uB824\uBA74 \uAE30\uC874 \uB9C8\uCEE4\uB97C \uD074\uB9AD\uD558\uC138\uC694',
      finishPoly:
        '\uB05D\uB0B4\uB824\uBA74 \uCC98\uC74C \uB9C8\uCEE4\uB97C \uD074\uB9AD\uD558\uC138\uC694',
      finishRect: '\uB05D\uB0B4\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694',
      startCircle:
        '\uC6D0\uC758 \uC911\uC2EC\uC774 \uB420 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC138\uC694',
      finishCircle:
        '\uC6D0\uC744 \uB05D\uB0B4\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694',
      placeCircleMarker:
        '\uC6D0 \uB9C8\uCEE4 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC138\uC694',
      placeText:
        '\uD14D\uC2A4\uD2B8 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC138\uC694',
    },
    actions: {
      finish: '\uB05D\uB0B4\uAE30',
      cancel: '\uCDE8\uC18C',
      removeLastVertex: '\uB9C8\uC9C0\uB9C9 \uAF2D\uC9C0\uC810 \uC81C\uAC70',
    },
    buttonTitles: {
      drawMarkerButton: '\uB9C8\uCEE4 \uADF8\uB9AC\uAE30',
      drawPolyButton: '\uB2E4\uAC01\uD615 \uADF8\uB9AC\uAE30',
      drawLineButton: '\uB2E4\uAC01\uC120 \uADF8\uB9AC\uAE30',
      drawCircleButton: '\uC6D0 \uADF8\uB9AC\uAE30',
      drawRectButton: '\uC9C1\uC0AC\uAC01\uD615 \uADF8\uB9AC\uAE30',
      editButton: '\uB808\uC774\uC5B4 \uD3B8\uC9D1\uD558\uAE30',
      dragButton: '\uB808\uC774\uC5B4 \uB04C\uAE30',
      cutButton: '\uB808\uC774\uC5B4 \uC790\uB974\uAE30',
      deleteButton: '\uB808\uC774\uC5B4 \uC81C\uAC70\uD558\uAE30',
      drawCircleMarkerButton: '\uC6D0 \uB9C8\uCEE4 \uADF8\uB9AC\uAE30',
      snappingButton:
        '\uC7A1\uC544\uB048 \uB9C8\uCEE4\uB97C \uB2E4\uB978 \uB808\uC774\uC5B4 \uBC0F \uAF2D\uC9C0\uC810\uC5D0 \uB4E4\uB7EC\uBD99\uAC8C \uD558\uAE30',
      pinningButton:
        '\uACF5\uC720 \uAF2D\uC9C0\uC810\uC744 \uD568\uAED8 \uCC0D\uAE30',
      rotateButton: '\uB808\uC774\uC5B4 \uD68C\uC804\uD558\uAE30',
      drawTextButton: '\uD14D\uC2A4\uD2B8 \uADF8\uB9AC\uAE30',
    },
  };
  var Wa = {
    tooltips: {
      placeMarker:
        '\u041C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044B\u0440\u0443\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      firstVertex:
        '\u0411\u0438\u0440\u0438\u043D\u0447\u0438 \u0447\u043E\u043A\u0443\u043D\u0443 \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044B\u0440\u0443\u0443\u043D\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      continueLine:
        '\u0421\u04AF\u0440\u04E9\u0442 \u0442\u0430\u0440\u0442\u0443\u0443\u043D\u0443 \u0443\u043B\u0430\u043D\u0442\u0443\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      finishLine:
        '\u0410\u044F\u043A\u0442\u043E\u043E \u04AF\u0447\u04AF\u043D \u0443\u0447\u0443\u0440\u0434\u0430\u0433\u044B \u043C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      finishPoly:
        '\u0411\u04AF\u0442\u04AF\u0440\u04AF\u04AF \u04AF\u0447\u04AF\u043D \u0431\u0438\u0440\u0438\u043D\u0447\u0438 \u043C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      finishRect:
        '\u0411\u04AF\u0442\u04AF\u0440\u04AF\u04AF \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      startCircle:
        '\u0410\u0439\u043B\u0430\u043D\u0430\u043D\u044B\u043D \u0431\u043E\u0440\u0431\u043E\u0440\u0443\u043D \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044B\u0440\u0443\u0443\u043D\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      finishCircle:
        '\u0410\u0439\u043B\u0430\u043D\u0430\u043D\u044B \u0431\u04AF\u0442\u04AF\u0440\u04AF\u04AF \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      placeCircleMarker:
        '\u0422\u0435\u0433\u0435\u0440\u0435\u043A \u043C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044B\u0440\u0443\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      placeText:
        '\u0422\u0435\u043A\u0441\u0442\u0442\u0438 \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044B\u0440\u0443\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
    },
    actions: {
      finish: '\u0410\u044F\u0433\u044B',
      cancel: '\u0416\u043E\u043A \u043A\u044B\u043B\u0443\u0443',
      removeLastVertex:
        '\u0410\u043A\u044B\u0440\u043A\u044B \u0447\u043E\u043A\u0443\u043D\u0443 \u04E9\u0447\u04AF\u0440\u04AF\u04AF',
    },
    buttonTitles: {
      drawMarkerButton:
        '\u041C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0447\u0438\u0437\u0443\u0443',
      drawPolyButton:
        '\u041F\u043E\u043B\u0438\u0433\u043E\u043D \u0447\u0438\u0437\u0443\u0443',
      drawLineButton:
        '\u041F\u043E\u043B\u0438\u043B\u0438\u043D\u0438\u044F \u0447\u0438\u0437\u0443\u0443',
      drawCircleButton:
        '\u0414\u0430\u0439\u044B\u043D\u0434\u044B \u0447\u0438\u0437\u0443\u0443',
      drawRectButton:
        '\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0447\u0438\u0437\u0443\u0443',
      editButton:
        '\u0421\u043B\u043E\u043E\u043F\u0442\u0443 \u0442\u04AF\u0437\u04E9\u0442\u04AF\u04AF',
      dragButton:
        '\u0421\u043B\u043E\u043E\u043F\u0442\u0443 \u043A\u0430\u0440\u0430\u043F \u0441\u04AF\u0439\u043B\u04E9\u04AF',
      cutButton:
        '\u0421\u043B\u043E\u043E\u043F\u0442\u0443\u043D \u0431\u0430\u0448\u044B\u043D \u043A\u0435\u0441\u04AF\u04AF',
      deleteButton:
        '\u0421\u043B\u043E\u043E\u043F\u0442\u0443\u043D \u04E9\u0447\u04AF\u0440\u04AF\u04AF',
      drawCircleMarkerButton:
        '\u0414\u0430\u0439\u044B\u043D\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0447\u0438\u0437\u0443\u0443',
      snappingButton:
        '\u0411\u0430\u0448\u043A\u0430 \u0441\u043B\u043E\u043E\u043F\u0442\u043E\u0440\u0434\u0443\u043D \u0436\u0430\u043D\u0430 \u0432\u0435\u0440\u0442\u0435\u043A\u0441\u0442\u0435\u0440\u0434\u0438\u043D \u0430\u0440\u0430\u0441\u044B\u043D\u0430 \u0447\u0435\u043A\u0438\u043B\u0434\u04E9\u04E9',
      pinningButton:
        '\u0411\u04E9\u043B\u04AF\u0448\u043A\u04E9\u043D \u0432\u0435\u0440\u0442\u0435\u043A\u0441\u0442\u0435\u0440\u0434\u0438 \u0431\u0438\u0440\u0433\u0435 \u0442\u0443\u0442\u0443\u0448\u0442\u0443\u0440\u0443\u0443',
      rotateButton:
        '\u0421\u043B\u043E\u043E\u043F\u0442\u0443\u043D \u04E9\u0437\u0433\u04E9\u0440\u0442\u04AF\u04AF',
      drawTextButton:
        '\u0422\u0435\u043A\u0441\u0442 \u0447\u0438\u0437\u0443\u0443',
      scaleButton:
        '\u0421\u043B\u043E\u043E\u043F\u0442\u0443\u043D \u04E9\u043B\u0447\u04E9\u043C\u04AF\u043D \u04E9\u0437\u0433\u04E9\u0440\u0442\u04AF\u04AF',
      autoTracingButton:
        '\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0442\u044B\u043A \u0442\u0438\u0437\u043C\u0435\u0433\u0438 \u0447\u0438\u0437\u0443\u0443',
    },
    measurements: {
      totalLength: '\u0423\u0437\u0443\u043D\u0434\u0443\u043A',
      segmentLength:
        '\u0421\u0435\u0433\u043C\u0435\u043D\u0442 \u0443\u0437\u0443\u043D\u0434\u0443\u0433\u0443',
      area: '\u0410\u0439\u043C\u0430\u043A',
      radius: '\u0420\u0430\u0434\u0438\u0443\u0441',
      perimeter: '\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440',
      height: '\u0414\u0438\u0430\u043C\u0435\u0442\u0440',
      width: '\u041A\u0435\u043D\u0447\u0438\u043B\u0438\u043A',
      coordinates:
        '\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0442\u0430\u0440',
      coordinatesMarker:
        '\u041C\u0430\u0440\u043A\u0435\u0440\u0434\u0438\u043D \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0442\u0430\u0440\u044B',
    },
  };
  var sg = mi,
    St = {
      en: Ea,
      de: Pa,
      it: Sa,
      id: Ba,
      ro: Ta,
      ru: Ra,
      es: Da,
      nl: Oa,
      fr: Ia,
      pt: sg,
      pt_br: qa,
      pt_pt: mi,
      zh: Aa,
      zh_tw: Ga,
      pl: Na,
      sv: za,
      el: Fa,
      hu: Va,
      da: Ua,
      no: Ka,
      fa: ja,
      ua: Ha,
      tr: Xa,
      cz: Ya,
      ja: Ja,
      fi: $a,
      ko: Za,
      ky: Wa,
    };
  var ag = {
      _globalEditModeEnabled: !1,
      enableGlobalEditMode(t) {
        let e = { ...t };
        (this._globalEditModeEnabled = !0),
          this.Toolbar.toggleButton('editMode', this.globalEditModeEnabled()),
          L.PM.Utils.findLayers(this.map).forEach((r) => {
            this._isRelevantForEdit(r) && r.pm.enable(e);
          }),
          this.throttledReInitEdit ||
            (this.throttledReInitEdit = L.Util.throttle(
              this.handleLayerAdditionInGlobalEditMode,
              100,
              this
            )),
          (this._addedLayersEdit = {}),
          this.map.on('layeradd', this._layerAddedEdit, this),
          this.map.on('layeradd', this.throttledReInitEdit, this),
          this._fireGlobalEditModeToggled(!0);
      },
      disableGlobalEditMode() {
        (this._globalEditModeEnabled = !1),
          L.PM.Utils.findLayers(this.map).forEach((e) => {
            e.pm.disable();
          }),
          this.map.off('layeradd', this._layerAddedEdit, this),
          this.map.off('layeradd', this.throttledReInitEdit, this),
          this.Toolbar.toggleButton('editMode', this.globalEditModeEnabled()),
          this._fireGlobalEditModeToggled(!1);
      },
      globalEditEnabled() {
        return this.globalEditModeEnabled();
      },
      globalEditModeEnabled() {
        return this._globalEditModeEnabled;
      },
      toggleGlobalEditMode(t = this.globalOptions) {
        this.globalEditModeEnabled()
          ? this.disableGlobalEditMode()
          : this.enableGlobalEditMode(t);
      },
      handleLayerAdditionInGlobalEditMode() {
        let t = this._addedLayersEdit;
        if (((this._addedLayersEdit = {}), this.globalEditModeEnabled()))
          for (let e in t) {
            let i = t[e];
            this._isRelevantForEdit(i) &&
              i.pm.enable({ ...this.globalOptions });
          }
      },
      _layerAddedEdit({ layer: t }) {
        this._addedLayersEdit[L.stamp(t)] = t;
      },
      _isRelevantForEdit(t) {
        return (
          t.pm &&
          !(t instanceof L.LayerGroup) &&
          ((!L.PM.optIn && !t.options.pmIgnore) ||
            (L.PM.optIn && t.options.pmIgnore === !1)) &&
          !t._pmTempLayer &&
          t.pm.options.allowEditing
        );
      },
    },
    Qa = ag;
  var og = {
      _globalDragModeEnabled: !1,
      enableGlobalDragMode() {
        let t = L.PM.Utils.findLayers(this.map);
        (this._globalDragModeEnabled = !0),
          (this._addedLayersDrag = {}),
          t.forEach((e) => {
            this._isRelevantForDrag(e) && e.pm.enableLayerDrag();
          }),
          this.throttledReInitDrag ||
            (this.throttledReInitDrag = L.Util.throttle(
              this.reinitGlobalDragMode,
              100,
              this
            )),
          this.map.on('layeradd', this._layerAddedDrag, this),
          this.map.on('layeradd', this.throttledReInitDrag, this),
          this.Toolbar.toggleButton('dragMode', this.globalDragModeEnabled()),
          this._fireGlobalDragModeToggled(!0);
      },
      disableGlobalDragMode() {
        let t = L.PM.Utils.findLayers(this.map);
        (this._globalDragModeEnabled = !1),
          t.forEach((e) => {
            e.pm.disableLayerDrag();
          }),
          this.map.off('layeradd', this._layerAddedDrag, this),
          this.map.off('layeradd', this.throttledReInitDrag, this),
          this.Toolbar.toggleButton('dragMode', this.globalDragModeEnabled()),
          this._fireGlobalDragModeToggled(!1);
      },
      globalDragModeEnabled() {
        return !!this._globalDragModeEnabled;
      },
      toggleGlobalDragMode() {
        this.globalDragModeEnabled()
          ? this.disableGlobalDragMode()
          : this.enableGlobalDragMode();
      },
      reinitGlobalDragMode() {
        let t = this._addedLayersDrag;
        if (((this._addedLayersDrag = {}), this.globalDragModeEnabled()))
          for (let e in t) {
            let i = t[e];
            this._isRelevantForDrag(i) && i.pm.enableLayerDrag();
          }
      },
      _layerAddedDrag({ layer: t }) {
        this._addedLayersDrag[L.stamp(t)] = t;
      },
      _isRelevantForDrag(t) {
        return (
          t.pm &&
          !(t instanceof L.LayerGroup) &&
          ((!L.PM.optIn && !t.options.pmIgnore) ||
            (L.PM.optIn && t.options.pmIgnore === !1)) &&
          !t._pmTempLayer &&
          t.pm.options.draggable
        );
      },
    },
    to = og;
  var lg = {
      _globalRemovalModeEnabled: !1,
      enableGlobalRemovalMode() {
        (this._globalRemovalModeEnabled = !0),
          this.map.eachLayer((t) => {
            this._isRelevantForRemoval(t) &&
              (t.pm.enabled() && t.pm.disable(),
              t.on('click', this.removeLayer, this));
          }),
          this.throttledReInitRemoval ||
            (this.throttledReInitRemoval = L.Util.throttle(
              this.handleLayerAdditionInGlobalRemovalMode,
              100,
              this
            )),
          (this._addedLayersRemoval = {}),
          this.map.on('layeradd', this._layerAddedRemoval, this),
          this.map.on('layeradd', this.throttledReInitRemoval, this),
          this.Toolbar.toggleButton(
            'removalMode',
            this.globalRemovalModeEnabled()
          ),
          this._fireGlobalRemovalModeToggled(!0);
      },
      disableGlobalRemovalMode() {
        (this._globalRemovalModeEnabled = !1),
          this.map.eachLayer((t) => {
            t.off('click', this.removeLayer, this);
          }),
          this.map.off('layeradd', this._layerAddedRemoval, this),
          this.map.off('layeradd', this.throttledReInitRemoval, this),
          this.Toolbar.toggleButton(
            'removalMode',
            this.globalRemovalModeEnabled()
          ),
          this._fireGlobalRemovalModeToggled(!1);
      },
      globalRemovalEnabled() {
        return this.globalRemovalModeEnabled();
      },
      globalRemovalModeEnabled() {
        return !!this._globalRemovalModeEnabled;
      },
      toggleGlobalRemovalMode() {
        this.globalRemovalModeEnabled()
          ? this.disableGlobalRemovalMode()
          : this.enableGlobalRemovalMode();
      },
      removeLayer(t) {
        let e = t.target;
        this._isRelevantForRemoval(e) &&
          !e.pm.dragging() &&
          (e.removeFrom(this.map.pm._getContainingLayer()),
          e.remove(),
          e instanceof L.LayerGroup
            ? (this._fireRemoveLayerGroup(e),
              this._fireRemoveLayerGroup(this.map, e))
            : (e.pm._fireRemove(e), e.pm._fireRemove(this.map, e)));
      },
      _isRelevantForRemoval(t) {
        return (
          t.pm &&
          !(t instanceof L.LayerGroup) &&
          ((!L.PM.optIn && !t.options.pmIgnore) ||
            (L.PM.optIn && t.options.pmIgnore === !1)) &&
          !t._pmTempLayer &&
          t.pm.options.allowRemoval
        );
      },
      handleLayerAdditionInGlobalRemovalMode() {
        let t = this._addedLayersRemoval;
        if (((this._addedLayersRemoval = {}), this.globalRemovalModeEnabled()))
          for (let e in t) {
            let i = t[e];
            this._isRelevantForRemoval(i) &&
              (i.pm.enabled() && i.pm.disable(),
              i.on('click', this.removeLayer, this));
          }
      },
      _layerAddedRemoval({ layer: t }) {
        this._addedLayersRemoval[L.stamp(t)] = t;
      },
    },
    eo = lg;
  var hg = {
      _globalRotateModeEnabled: !1,
      enableGlobalRotateMode() {
        (this._globalRotateModeEnabled = !0),
          L.PM.Utils.findLayers(this.map)
            .filter((e) => e instanceof L.Polyline)
            .forEach((e) => {
              this._isRelevantForRotate(e) && e.pm.enableRotate();
            }),
          this.throttledReInitRotate ||
            (this.throttledReInitRotate = L.Util.throttle(
              this.handleLayerAdditionInGlobalRotateMode,
              100,
              this
            )),
          (this._addedLayersRotate = {}),
          this.map.on('layeradd', this._layerAddedRotate, this),
          this.map.on('layeradd', this.throttledReInitRotate, this),
          this.Toolbar.toggleButton(
            'rotateMode',
            this.globalRotateModeEnabled()
          ),
          this._fireGlobalRotateModeToggled();
      },
      disableGlobalRotateMode() {
        (this._globalRotateModeEnabled = !1),
          L.PM.Utils.findLayers(this.map)
            .filter((e) => e instanceof L.Polyline)
            .forEach((e) => {
              e.pm.disableRotate();
            }),
          this.map.off('layeradd', this._layerAddedRotate, this),
          this.map.off('layeradd', this.throttledReInitRotate, this),
          this.Toolbar.toggleButton(
            'rotateMode',
            this.globalRotateModeEnabled()
          ),
          this._fireGlobalRotateModeToggled();
      },
      globalRotateModeEnabled() {
        return !!this._globalRotateModeEnabled;
      },
      toggleGlobalRotateMode() {
        this.globalRotateModeEnabled()
          ? this.disableGlobalRotateMode()
          : this.enableGlobalRotateMode();
      },
      _isRelevantForRotate(t) {
        return (
          t.pm &&
          t instanceof L.Polyline &&
          !(t instanceof L.LayerGroup) &&
          ((!L.PM.optIn && !t.options.pmIgnore) ||
            (L.PM.optIn && t.options.pmIgnore === !1)) &&
          !t._pmTempLayer &&
          t.pm.options.allowRotation
        );
      },
      handleLayerAdditionInGlobalRotateMode() {
        let t = this._addedLayersRotate;
        if (((this._addedLayersRotate = {}), this.globalRotateModeEnabled()))
          for (let e in t) {
            let i = t[e];
            this._isRelevantForRemoval(i) && i.pm.enableRotate();
          }
      },
      _layerAddedRotate({ layer: t }) {
        this._addedLayersRotate[L.stamp(t)] = t;
      },
    },
    io = hg;
  var ro = kt(Oe()),
    ug = {
      _fireDrawStart(t = 'Draw', e = {}) {
        this.__fire(
          this._map,
          'pm:drawstart',
          { shape: this._shape, workingLayer: this._layer },
          t,
          e
        );
      },
      _fireDrawEnd(t = 'Draw', e = {}) {
        this.__fire(this._map, 'pm:drawend', { shape: this._shape }, t, e);
      },
      _fireCreate(t, e = 'Draw', i = {}) {
        this.__fire(
          this._map,
          'pm:create',
          { shape: this._shape, marker: t, layer: t },
          e,
          i
        );
      },
      _fireCenterPlaced(t = 'Draw', e = {}) {
        let i = t === 'Draw' ? this._layer : void 0,
          r = t !== 'Draw' ? this._layer : void 0;
        this.__fire(
          this._layer,
          'pm:centerplaced',
          {
            shape: this._shape,
            workingLayer: i,
            layer: r,
            latlng: this._layer.getLatLng(),
          },
          t,
          e
        );
      },
      _fireCut(t, e, i, r = 'Draw', n = {}) {
        this.__fire(
          t,
          'pm:cut',
          { shape: this._shape, layer: e, originalLayer: i },
          r,
          n
        );
      },
      _fireEdit(t = this._layer, e = 'Edit', i = {}) {
        this.__fire(
          t,
          'pm:edit',
          { layer: this._layer, shape: this.getShape() },
          e,
          i
        );
      },
      _fireEnable(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:enable',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireDisable(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:disable',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireUpdate(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:update',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireMarkerDragStart(t, e = void 0, i = 'Edit', r = {}) {
        this.__fire(
          this._layer,
          'pm:markerdragstart',
          {
            layer: this._layer,
            markerEvent: t,
            shape: this.getShape(),
            indexPath: e,
          },
          i,
          r
        );
      },
      _fireMarkerDrag(t, e = void 0, i = 'Edit', r = {}) {
        this.__fire(
          this._layer,
          'pm:markerdrag',
          {
            layer: this._layer,
            markerEvent: t,
            shape: this.getShape(),
            indexPath: e,
          },
          i,
          r
        );
      },
      _fireMarkerDragEnd(t, e = void 0, i = void 0, r = 'Edit', n = {}) {
        this.__fire(
          this._layer,
          'pm:markerdragend',
          {
            layer: this._layer,
            markerEvent: t,
            shape: this.getShape(),
            indexPath: e,
            intersectionReset: i,
          },
          r,
          n
        );
      },
      _fireDragStart(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:dragstart',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireDrag(t, e = 'Edit', i = {}) {
        this.__fire(
          this._layer,
          'pm:drag',
          { ...t, shape: this.getShape() },
          e,
          i
        );
      },
      _fireDragEnd(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:dragend',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireDragEnable(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:dragenable',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireDragDisable(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:dragdisable',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireRemove(t, e = t, i = 'Edit', r = {}) {
        this.__fire(t, 'pm:remove', { layer: e, shape: this.getShape() }, i, r);
      },
      _fireVertexAdded(t, e, i, r = 'Edit', n = {}) {
        this.__fire(
          this._layer,
          'pm:vertexadded',
          {
            layer: this._layer,
            workingLayer: this._layer,
            marker: t,
            indexPath: e,
            latlng: i,
            shape: this.getShape(),
          },
          r,
          n
        );
      },
      _fireVertexRemoved(t, e, i = 'Edit', r = {}) {
        this.__fire(
          this._layer,
          'pm:vertexremoved',
          {
            layer: this._layer,
            marker: t,
            indexPath: e,
            shape: this.getShape(),
          },
          i,
          r
        );
      },
      _fireVertexClick(t, e, i = 'Edit', r = {}) {
        this.__fire(
          this._layer,
          'pm:vertexclick',
          {
            layer: this._layer,
            markerEvent: t,
            indexPath: e,
            shape: this.getShape(),
          },
          i,
          r
        );
      },
      _fireIntersect(t, e = this._layer, i = 'Edit', r = {}) {
        this.__fire(
          e,
          'pm:intersect',
          { layer: this._layer, intersection: t, shape: this.getShape() },
          i,
          r
        );
      },
      _fireLayerReset(t, e, i = 'Edit', r = {}) {
        this.__fire(
          this._layer,
          'pm:layerreset',
          {
            layer: this._layer,
            markerEvent: t,
            indexPath: e,
            shape: this.getShape(),
          },
          i,
          r
        );
      },
      _fireChange(t, e = 'Edit', i = {}) {
        this.__fire(
          this._layer,
          'pm:change',
          { layer: this._layer, latlngs: t, shape: this.getShape() },
          e,
          i
        );
      },
      _fireTextChange(t, e = 'Edit', i = {}) {
        this.__fire(
          this._layer,
          'pm:textchange',
          { layer: this._layer, text: t, shape: this.getShape() },
          e,
          i
        );
      },
      _fireTextFocus(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:textfocus',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireTextBlur(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:textblur',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireSnapDrag(t, e, i = 'Snapping', r = {}) {
        this.__fire(t, 'pm:snapdrag', e, i, r);
      },
      _fireSnap(t, e, i = 'Snapping', r = {}) {
        this.__fire(t, 'pm:snap', e, i, r);
      },
      _fireUnsnap(t, e, i = 'Snapping', r = {}) {
        this.__fire(t, 'pm:unsnap', e, i, r);
      },
      _fireRotationEnable(t, e, i = 'Rotation', r = {}) {
        this.__fire(
          t,
          'pm:rotateenable',
          {
            layer: this._layer,
            helpLayer: this._rotatePoly,
            shape: this.getShape(),
          },
          i,
          r
        );
      },
      _fireRotationDisable(t, e = 'Rotation', i = {}) {
        this.__fire(
          t,
          'pm:rotatedisable',
          { layer: this._layer, shape: this.getShape() },
          e,
          i
        );
      },
      _fireRotationStart(t, e, i = 'Rotation', r = {}) {
        this.__fire(
          t,
          'pm:rotatestart',
          {
            layer: this._rotationLayer,
            helpLayer: this._layer,
            startAngle: this._startAngle,
            originLatLngs: e,
          },
          i,
          r
        );
      },
      _fireRotation(t, e, i, r = this._rotationLayer, n = 'Rotation', s = {}) {
        this.__fire(
          t,
          'pm:rotate',
          {
            layer: r,
            helpLayer: this._layer,
            startAngle: this._startAngle,
            angle: r.pm.getAngle(),
            angleDiff: e,
            oldLatLngs: i,
            newLatLngs: r.getLatLngs(),
          },
          n,
          s
        );
      },
      _fireRotationEnd(t, e, i, r = 'Rotation', n = {}) {
        this.__fire(
          t,
          'pm:rotateend',
          {
            layer: this._rotationLayer,
            helpLayer: this._layer,
            startAngle: e,
            angle: this._rotationLayer.pm.getAngle(),
            originLatLngs: i,
            newLatLngs: this._rotationLayer.getLatLngs(),
          },
          r,
          n
        );
      },
      _fireActionClick(t, e, i, r = 'Toolbar', n = {}) {
        this.__fire(
          this._map,
          'pm:actionclick',
          { text: t.text, action: t, btnName: e, button: i },
          r,
          n
        );
      },
      _fireButtonClick(t, e, i = 'Toolbar', r = {}) {
        this.__fire(
          this._map,
          'pm:buttonclick',
          { btnName: t, button: e },
          i,
          r
        );
      },
      _fireLangChange(t, e, i, r, n = 'Global', s = {}) {
        this.__fire(
          this.map,
          'pm:langchange',
          { oldLang: t, activeLang: e, fallback: i, translations: r },
          n,
          s
        );
      },
      _fireGlobalDragModeToggled(t, e = 'Global', i = {}) {
        this.__fire(
          this.map,
          'pm:globaldragmodetoggled',
          { enabled: t, map: this.map },
          e,
          i
        );
      },
      _fireGlobalEditModeToggled(t, e = 'Global', i = {}) {
        this.__fire(
          this.map,
          'pm:globaleditmodetoggled',
          { enabled: t, map: this.map },
          e,
          i
        );
      },
      _fireGlobalRemovalModeToggled(t, e = 'Global', i = {}) {
        this.__fire(
          this.map,
          'pm:globalremovalmodetoggled',
          { enabled: t, map: this.map },
          e,
          i
        );
      },
      _fireGlobalCutModeToggled(t = 'Global', e = {}) {
        this.__fire(
          this._map,
          'pm:globalcutmodetoggled',
          { enabled: !!this._enabled, map: this._map },
          t,
          e
        );
      },
      _fireGlobalDrawModeToggled(t = 'Global', e = {}) {
        this.__fire(
          this._map,
          'pm:globaldrawmodetoggled',
          { enabled: this._enabled, shape: this._shape, map: this._map },
          t,
          e
        );
      },
      _fireGlobalRotateModeToggled(t = 'Global', e = {}) {
        this.__fire(
          this.map,
          'pm:globalrotatemodetoggled',
          { enabled: this.globalRotateModeEnabled(), map: this.map },
          t,
          e
        );
      },
      _fireRemoveLayerGroup(t, e = t, i = 'Edit', r = {}) {
        this.__fire(t, 'pm:remove', { layer: e, shape: void 0 }, i, r);
      },
      _fireKeyeventEvent(t, e, i, r = 'Global', n = {}) {
        this.__fire(
          this.map,
          'pm:keyevent',
          { event: t, eventType: e, focusOn: i },
          r,
          n
        );
      },
      __fire(t, e, i, r, n = {}) {
        (i = (0, ro.default)(i, n, { source: r })),
          L.PM.Utils._fireEvent(t, e, i);
      },
    },
    Bt = ug;
  var cg = () => ({
      _lastEvents: { keydown: void 0, keyup: void 0, current: void 0 },
      _initKeyListener(t) {
        (this.map = t),
          L.DomEvent.on(document, 'keydown keyup', this._onKeyListener, this),
          L.DomEvent.on(window, 'blur', this._onBlur, this),
          t.once('unload', this._unbindKeyListenerEvents, this);
      },
      _unbindKeyListenerEvents() {
        L.DomEvent.off(document, 'keydown keyup', this._onKeyListener, this),
          L.DomEvent.off(window, 'blur', this._onBlur, this);
      },
      _onKeyListener(t) {
        let e = 'document';
        this.map.getContainer().contains(t.target) && (e = 'map');
        let i = { event: t, eventType: t.type, focusOn: e };
        (this._lastEvents[t.type] = i),
          (this._lastEvents.current = i),
          this.map.pm._fireKeyeventEvent(t, t.type, e);
      },
      _onBlur(t) {
        t.altKey = !1;
        let e = { event: t, eventType: t.type, focusOn: 'document' };
        (this._lastEvents[t.type] = e), (this._lastEvents.current = e);
      },
      getLastKeyEvent(t = 'current') {
        return this._lastEvents[t];
      },
      isShiftKeyPressed() {
        return this._lastEvents.current?.event.shiftKey;
      },
      isAltKeyPressed() {
        return this._lastEvents.current?.event.altKey;
      },
      isCtrlKeyPressed() {
        return this._lastEvents.current?.event.ctrlKey;
      },
      isMetaKeyPressed() {
        return this._lastEvents.current?.event.metaKey;
      },
      getPressedKey() {
        return this._lastEvents.current?.event.key;
      },
    }),
    no = cg;
  var yi = kt(ge());
  function V(t) {
    let e = L.PM.activeLang;
    return (0, yi.default)(St[e], t) || (0, yi.default)(St.en, t) || t;
  }
  function me(t) {
    for (let e = 0; e < t.length; e += 1) {
      let i = t[e];
      if (Array.isArray(i)) {
        if (me(i)) return !0;
      } else if (i != null && i !== '') return !0;
    }
    return !1;
  }
  function _e(t) {
    return t.reduce((e, i) => {
      if (i.length !== 0) {
        let r = Array.isArray(i) ? _e(i) : i;
        Array.isArray(r) ? r.length !== 0 && e.push(r) : e.push(r);
      }
      return e;
    }, []);
  }
  function Jg(t, e, i) {
    let r = { a: L.CRS.Earth.R, b: 63567523142e-4, f: 0.0033528106647474805 },
      { a: n, b: s, f: a } = r,
      o = t.lng,
      l = t.lat,
      h = i,
      g = Math.PI,
      _ = (e * g) / 180,
      E = Math.sin(_),
      P = Math.cos(_),
      T = (1 - a) * Math.tan((l * g) / 180),
      G = 1 / Math.sqrt(1 + T * T),
      m = T * G,
      x = Math.atan2(T, P),
      v = G * E,
      R = 1 - v * v,
      D = (R * (n * n - s * s)) / (s * s),
      O = 1 + (D / 16384) * (4096 + D * (-768 + D * (320 - 175 * D))),
      I = (D / 1024) * (256 + D * (-128 + D * (74 - 47 * D))),
      q = h / (s * O),
      u = 2 * Math.PI,
      c,
      p,
      y;
    for (; Math.abs(q - u) > 1e-12; ) {
      (c = Math.cos(2 * x + q)), (p = Math.sin(q)), (y = Math.cos(q));
      let B =
        I *
        p *
        (c +
          (I / 4) *
            (y * (-1 + 2 * c * c) -
              (I / 6) * c * (-3 + 4 * p * p) * (-3 + 4 * c * c)));
      (u = q), (q = h / (s * O) + B);
    }
    let f = m * p - G * y * P,
      k = Math.atan2(m * y + G * p * P, (1 - a) * Math.sqrt(v * v + f * f)),
      C = Math.atan2(p * E, G * y - m * p * P),
      d = (a / 16) * R * (4 + a * (4 - 3 * R)),
      b = C - (1 - d) * a * v * (q + d * p * (c + d * y * (-1 + 2 * c * c))),
      w = o + (b * 180) / g,
      M = (k * 180) / g;
    return L.latLng(w, M);
  }
  function Li(t, e, i, r, n = !0) {
    let s,
      a,
      o,
      l = [];
    for (let h = 0; h < i; h += 1) {
      if (n)
        (s = (h * 360) / i + r),
          (a = Jg(t, s, e)),
          (o = L.latLng(a.lng, a.lat));
      else {
        let g = t.lat + Math.cos((2 * h * Math.PI) / i) * e,
          _ = t.lng + Math.sin((2 * h * Math.PI) / i) * e;
        o = L.latLng(g, _);
      }
      l.push(o);
    }
    return l;
  }
  function $g(t, e, i) {
    e = (e + 360) % 360;
    let r = Math.PI / 180,
      n = 180 / Math.PI,
      { R: s } = L.CRS.Earth,
      a = t.lng * r,
      o = t.lat * r,
      l = e * r,
      h = Math.sin(o),
      g = Math.cos(o),
      _ = Math.cos(i / s),
      E = Math.sin(i / s),
      P = Math.asin(h * _ + g * E * Math.cos(l)),
      T = a + Math.atan2(Math.sin(l) * E * g, _ - h * Math.sin(P));
    T *= n;
    let G = T - 360,
      m = T < -180 ? T + 360 : T;
    return (T = T > 180 ? G : m), L.latLng([P * n, T]);
  }
  function ye(t, e, i) {
    let r = t.latLngToContainerPoint(e),
      n = t.latLngToContainerPoint(i),
      s = (Math.atan2(n.y - r.y, n.x - r.x) * 180) / Math.PI + 90;
    return (s += s < 0 ? 360 : 0), s;
  }
  function Wt(t, e, i, r) {
    let n = ye(t, e, i);
    return $g(e, n, r);
  }
  function Do(t, e, i = 'asc') {
    if (!e || Object.keys(e).length === 0) return (l, h) => l - h;
    let r = Object.keys(e),
      n,
      s = r.length - 1,
      a = {};
    for (; s >= 0; ) (n = r[s]), (a[n.toLowerCase()] = e[n]), (s -= 1);
    function o(l) {
      if (l instanceof L.Marker) return 'Marker';
      if (l instanceof L.Circle) return 'Circle';
      if (l instanceof L.CircleMarker) return 'CircleMarker';
      if (l instanceof L.Rectangle) return 'Rectangle';
      if (l instanceof L.Polygon) return 'Polygon';
      if (l instanceof L.Polyline) return 'Line';
    }
    return (l, h) => {
      let g, _;
      if (t === 'instanceofShape') {
        if (
          ((g = o(l.layer).toLowerCase()),
          (_ = o(h.layer).toLowerCase()),
          !g || !_)
        )
          return 0;
      } else {
        if (!l.hasOwnProperty(t) || !h.hasOwnProperty(t)) return 0;
        (g = l[t].toLowerCase()), (_ = h[t].toLowerCase());
      }
      let E = g in a ? a[g] : Number.MAX_SAFE_INTEGER,
        P = _ in a ? a[_] : Number.MAX_SAFE_INTEGER,
        T = 0;
      return E < P ? (T = -1) : E > P && (T = 1), i === 'desc' ? T * -1 : T;
    };
  }
  function Lt(t, e = t.getLatLngs()) {
    return t instanceof L.Polygon
      ? L.polygon(e).getLatLngs()
      : L.polyline(e).getLatLngs();
  }
  function vi(t, e) {
    if (e.options.crs?.projection?.MAX_LATITUDE) {
      let i = e.options.crs?.projection?.MAX_LATITUDE;
      t.lat = Math.max(Math.min(i, t.lat), -i);
    }
    return t;
  }
  function Tt(t) {
    return (
      t.options.renderer ||
      (t._map &&
        (t._map._getPaneRenderer(t.options.pane) ||
          t._map.options.renderer ||
          t._map._renderer)) ||
      t._renderer
    );
  }
  var Zg = L.Class.extend({
      includes: [Qa, to, eo, io, Bt],
      initialize(t) {
        (this.map = t),
          (this.Draw = new L.PM.Draw(t)),
          (this.Toolbar = new L.PM.Toolbar(t)),
          (this.Keyboard = no()),
          (this.globalOptions = {
            snappable: !0,
            layerGroup: void 0,
            snappingOrder: [
              'Marker',
              'CircleMarker',
              'Circle',
              'Line',
              'Polygon',
              'Rectangle',
            ],
            panes: {
              vertexPane: 'markerPane',
              layerPane: 'overlayPane',
              markerPane: 'markerPane',
            },
            draggable: !0,
          }),
          this.Keyboard._initKeyListener(t);
      },
      setLang(t = 'en', e, i = 'en') {
        if (((t = t.trim().toLowerCase()), !/^[a-z]{2}$/.test(t))) {
          let s = t
            .replace(/[-_\s]/g, '-')
            .replace(/^(\w{2})$/, '$1-')
            .match(/([a-z]{2})-?([a-z]{2})?/);
          if (s) {
            let a = [`${s[1]}_${s[2]}`, `${s[1]}`];
            for (let o of a)
              if (St[o]) {
                t = o;
                break;
              }
          }
        }
        let r = L.PM.activeLang;
        e && (St[t] = (0, bi.default)(St[i], e)),
          (L.PM.activeLang = t),
          this.map.pm.Toolbar.reinit(),
          this._fireLangChange(r, t, i, St[t]);
      },
      addControls(t) {
        this.Toolbar.addControls(t);
      },
      removeControls() {
        this.Toolbar.removeControls();
      },
      toggleControls() {
        this.Toolbar.toggleControls();
      },
      controlsVisible() {
        return this.Toolbar.isVisible;
      },
      enableDraw(t = 'Polygon', e) {
        t === 'Poly' && (t = 'Polygon'), this.Draw.enable(t, e);
      },
      disableDraw(t = 'Polygon') {
        t === 'Poly' && (t = 'Polygon'), this.Draw.disable(t);
      },
      setPathOptions(t, e = {}) {
        let i = e.ignoreShapes || [],
          r = e.merge || !1;
        this.map.pm.Draw.shapes.forEach((n) => {
          i.indexOf(n) === -1 && this.map.pm.Draw[n].setPathOptions(t, r);
        });
      },
      getGlobalOptions() {
        return this.globalOptions;
      },
      setGlobalOptions(t) {
        let e = (0, bi.default)(this.globalOptions, t);
        e.editable &&
          ((e.resizeableCircleMarker = e.editable), delete e.editable);
        let i = !1;
        this.map.pm.Draw.CircleMarker.enabled() &&
          !!this.map.pm.Draw.CircleMarker.options.resizeableCircleMarker !=
            !!e.resizeableCircleMarker &&
          (this.map.pm.Draw.CircleMarker.disable(), (i = !0));
        let r = !1;
        this.map.pm.Draw.Circle.enabled() &&
          !!this.map.pm.Draw.Circle.options.resizeableCircle !=
            !!e.resizeableCircle &&
          (this.map.pm.Draw.Circle.disable(), (r = !0)),
          this.map.pm.Draw.shapes.forEach((s) => {
            this.map.pm.Draw[s].setOptions(e);
          }),
          i && this.map.pm.Draw.CircleMarker.enable(),
          r && this.map.pm.Draw.Circle.enable(),
          L.PM.Utils.findLayers(this.map).forEach((s) => {
            s.pm.setOptions(e);
          }),
          this.map.fire('pm:globaloptionschanged'),
          (this.globalOptions = e),
          this.applyGlobalOptions();
      },
      applyGlobalOptions() {
        L.PM.Utils.findLayers(this.map).forEach((e) => {
          e.pm.enabled() && e.pm.applyOptions();
        });
      },
      globalDrawModeEnabled() {
        return !!this.Draw.getActiveShape();
      },
      globalCutModeEnabled() {
        return !!this.Draw.Cut.enabled();
      },
      enableGlobalCutMode(t) {
        return this.Draw.Cut.enable(t);
      },
      toggleGlobalCutMode(t) {
        return this.Draw.Cut.toggle(t);
      },
      disableGlobalCutMode() {
        return this.Draw.Cut.disable();
      },
      getGeomanLayers(t = !1) {
        let e = L.PM.Utils.findLayers(this.map);
        if (!t) return e;
        let i = L.featureGroup();
        return (
          (i._pmTempLayer = !0),
          e.forEach((r) => {
            i.addLayer(r);
          }),
          i
        );
      },
      getGeomanDrawLayers(t = !1) {
        let e = L.PM.Utils.findLayers(this.map).filter(
          (r) => r._drawnByGeoman === !0
        );
        if (!t) return e;
        let i = L.featureGroup();
        return (
          (i._pmTempLayer = !0),
          e.forEach((r) => {
            i.addLayer(r);
          }),
          i
        );
      },
      _getContainingLayer() {
        return this.globalOptions.layerGroup &&
          this.globalOptions.layerGroup instanceof L.LayerGroup
          ? this.globalOptions.layerGroup
          : this.map;
      },
      _isCRSSimple() {
        return this.map.options.crs === L.CRS.Simple;
      },
      _touchEventCounter: 0,
      _addTouchEvents(t) {
        this._touchEventCounter === 0 &&
          (L.DomEvent.on(t, 'touchmove', this._canvasTouchMove, this),
          L.DomEvent.on(
            t,
            'touchstart touchend touchcancel',
            this._canvasTouchClick,
            this
          )),
          (this._touchEventCounter += 1);
      },
      _removeTouchEvents(t) {
        this._touchEventCounter === 1 &&
          (L.DomEvent.off(t, 'touchmove', this._canvasTouchMove, this),
          L.DomEvent.off(
            t,
            'touchstart touchend touchcancel',
            this._canvasTouchClick,
            this
          )),
          (this._touchEventCounter =
            this._touchEventCounter <= 1 ? 0 : this._touchEventCounter - 1);
      },
      _canvasTouchMove(t) {
        Tt(this.map)._onMouseMove(this._createMouseEvent('mousemove', t));
      },
      _canvasTouchClick(t) {
        let e = '';
        t.type === 'touchstart' || t.type === 'pointerdown'
          ? (e = 'mousedown')
          : (t.type === 'touchend' ||
              t.type === 'pointerup' ||
              t.type === 'touchcancel' ||
              t.type === 'pointercancel') &&
            (e = 'mouseup'),
          e && Tt(this.map)._onClick(this._createMouseEvent(e, t));
      },
      _createMouseEvent(t, e) {
        let i,
          r = e.touches[0] || e.changedTouches[0];
        try {
          i = new MouseEvent(t, {
            bubbles: e.bubbles,
            cancelable: e.cancelable,
            view: e.view,
            detail: r.detail,
            screenX: r.screenX,
            screenY: r.screenY,
            clientX: r.clientX,
            clientY: r.clientY,
            ctrlKey: e.ctrlKey,
            altKey: e.altKey,
            shiftKey: e.shiftKey,
            metaKey: e.metaKey,
            button: e.button,
            relatedTarget: e.relatedTarget,
          });
        } catch {
          (i = document.createEvent('MouseEvents')),
            i.initMouseEvent(
              t,
              e.bubbles,
              e.cancelable,
              e.view,
              r.detail,
              r.screenX,
              r.screenY,
              r.clientX,
              r.clientY,
              e.ctrlKey,
              e.altKey,
              e.shiftKey,
              e.metaKey,
              e.button,
              e.relatedTarget
            );
        }
        return i;
      },
    }),
    Oo = Zg;
  var Wg = L.Control.extend({
      includes: [Bt],
      options: { position: 'topleft', disableByOtherButtons: !0 },
      initialize(t) {
        this._button = L.Util.extend({}, this.options, t);
      },
      onAdd(t) {
        return (
          (this._map = t),
          this._map.pm.Toolbar.options.oneBlock
            ? (this._container = this._map.pm.Toolbar._createContainer(
                this.options.position
              ))
            : this._button.tool === 'edit'
              ? (this._container = this._map.pm.Toolbar.editContainer)
              : this._button.tool === 'options'
                ? (this._container = this._map.pm.Toolbar.optionsContainer)
                : this._button.tool === 'custom'
                  ? (this._container = this._map.pm.Toolbar.customContainer)
                  : (this._container = this._map.pm.Toolbar.drawContainer),
          this._renderButton(),
          this._container
        );
      },
      _renderButton() {
        let t = this.buttonsDomNode;
        (this.buttonsDomNode = this._makeButton(this._button)),
          t
            ? t.replaceWith(this.buttonsDomNode)
            : this._container.appendChild(this.buttonsDomNode);
      },
      onRemove() {
        return this.buttonsDomNode.remove(), this._container;
      },
      getText() {
        return this._button.text;
      },
      getIconUrl() {
        return this._button.iconUrl;
      },
      destroy() {
        (this._button = {}), this._update();
      },
      toggle(t) {
        return (
          typeof t == 'boolean'
            ? (this._button.toggleStatus = t)
            : (this._button.toggleStatus = !this._button.toggleStatus),
          this._applyStyleClasses(),
          this._updateActiveAction(this._button),
          this._button.toggleStatus
        );
      },
      toggled() {
        return this._button.toggleStatus;
      },
      onCreate() {
        this.toggle(!1);
      },
      disable() {
        this.toggle(!1), (this._button.disabled = !0), this._updateDisabled();
      },
      enable() {
        (this._button.disabled = !1),
          this._updateDisabled(),
          this._updateActiveAction(this._button);
      },
      _triggerClick(t) {
        t && t.preventDefault(),
          !this._button.disabled &&
            (this._button.onClick(t, { button: this, event: t }),
            this._clicked(t),
            this._button.afterClick(t, { button: this, event: t }));
      },
      _makeButton(t) {
        let e = this.options.position.indexOf('right') > -1 ? 'pos-right' : '',
          i = L.DomUtil.create(
            'div',
            `button-container  ${e}`,
            this._container
          );
        t.title && i.setAttribute('title', t.title);
        let r = L.DomUtil.create('a', 'leaflet-buttons-control-button', i);
        r.setAttribute('role', 'button'),
          r.setAttribute('tabindex', '0'),
          (r.href = '#');
        let n = L.DomUtil.create('div', `leaflet-pm-actions-container ${e}`, i),
          s = t.actions,
          a = {
            cancel: {
              text: V('actions.cancel'),
              title: V('actions.cancel'),
              onClick() {
                this._triggerClick();
              },
            },
            finishMode: {
              text: V('actions.finish'),
              title: V('actions.finish'),
              onClick() {
                this._triggerClick();
              },
            },
            removeLastVertex: {
              text: V('actions.removeLastVertex'),
              title: V('actions.removeLastVertex'),
              onClick() {
                this._map.pm.Draw[t.jsClass]._removeLastVertex();
              },
            },
            finish: {
              text: V('actions.finish'),
              title: V('actions.finish'),
              onClick(l) {
                this._map.pm.Draw[t.jsClass]._finishShape(l);
              },
            },
          };
        (t._preparedActions = s.map((l) => {
          let h = typeof l == 'string' ? l : l.name,
            g;
          if (a[h]) g = a[h];
          else if (l.text) g = l;
          else return g;
          let _ = L.DomUtil.create(
            'a',
            `leaflet-pm-action ${e} action-${h}`,
            n
          );
          if (
            (_.setAttribute('role', 'button'),
            _.setAttribute('tabindex', '0'),
            (_.href = '#'),
            g.title && (_.title = g.title),
            (_.innerHTML = g.text),
            L.DomEvent.disableClickPropagation(_),
            L.DomEvent.on(_, 'click', L.DomEvent.stop),
            (g._node = _),
            !t.disabled && g.onClick)
          ) {
            let E = (P) => {
              P.preventDefault();
              let T = '',
                { buttons: G } = this._map.pm.Toolbar;
              for (let m in G)
                if (G[m]._button === t) {
                  T = m;
                  break;
                }
              this._fireActionClick(g, T, t);
            };
            L.DomEvent.addListener(_, 'click', E, this),
              L.DomEvent.addListener(_, 'click', g.onClick, this),
              L.DomEvent.addListener(_, 'click', () =>
                this._updateActiveAction(t)
              );
          }
          return g;
        })),
          this._updateActiveAction(t),
          t.toggleStatus && L.DomUtil.addClass(i, 'active');
        let o = L.DomUtil.create('div', 'control-icon', r);
        return (
          t.iconUrl && o.setAttribute('src', t.iconUrl),
          t.className && L.DomUtil.addClass(o, t.className),
          L.DomEvent.disableClickPropagation(r),
          L.DomEvent.on(r, 'click', L.DomEvent.stop),
          t.disabled ||
            (L.DomEvent.addListener(r, 'click', this._onBtnClick, this),
            L.DomEvent.addListener(r, 'click', this._triggerClick, this)),
          t.disabled &&
            (L.DomUtil.addClass(r, 'pm-disabled'),
            r.setAttribute('aria-disabled', 'true')),
          i
        );
      },
      _applyStyleClasses() {
        this._container &&
          (!this._button.toggleStatus || this._button.cssToggle === !1
            ? (L.DomUtil.removeClass(this.buttonsDomNode, 'active'),
              L.DomUtil.removeClass(this._container, 'activeChild'))
            : (L.DomUtil.addClass(this.buttonsDomNode, 'active'),
              L.DomUtil.addClass(this._container, 'activeChild')));
      },
      _onBtnClick() {
        if (this._button.disabled) return;
        this._button.disableOtherButtons &&
          this._map.pm.Toolbar.triggerClickOnToggledButtons(this);
        let t = '',
          { buttons: e } = this._map.pm.Toolbar;
        for (let i in e)
          if (e[i]._button === this._button) {
            t = i;
            break;
          }
        this._fireButtonClick(t, this._button);
      },
      _clicked() {
        this._button.doToggle && this.toggle();
      },
      _updateDisabled() {
        if (!this._container) return;
        let t = 'pm-disabled',
          e = this.buttonsDomNode.children[0];
        this._button.disabled
          ? (L.DomUtil.addClass(e, t), e.setAttribute('aria-disabled', 'true'))
          : (L.DomUtil.removeClass(e, t),
            e.setAttribute('aria-disabled', 'false'));
      },
      _updateActiveAction(t) {
        t._preparedActions?.forEach((e) => {
          e?._node &&
            (e.isActive && e.isActive.call(this)
              ? L.DomUtil.addClass(e._node, 'active-action')
              : L.DomUtil.removeClass(e._node, 'active-action'));
        });
      },
    }),
    Io = Wg;
  L.Control.PMButton = Io;
  var Qg = L.Class.extend({
      options: {
        drawMarker: !0,
        drawRectangle: !0,
        drawPolyline: !0,
        drawPolygon: !0,
        drawCircle: !0,
        drawCircleMarker: !0,
        drawText: !0,
        editMode: !0,
        dragMode: !0,
        cutPolygon: !0,
        removalMode: !0,
        rotateMode: !0,
        snappingOption: !0,
        drawControls: !0,
        editControls: !0,
        optionsControls: !0,
        customControls: !0,
        oneBlock: !1,
        position: 'topleft',
        positions: { draw: '', edit: '', options: '', custom: '' },
      },
      customButtons: [],
      initialize(t) {
        (this.customButtons = []),
          (this.options.positions = {
            draw: '',
            edit: '',
            options: '',
            custom: '',
          }),
          this.init(t);
      },
      reinit() {
        let t = this.isVisible;
        this.removeControls(), this._defineButtons(), t && this.addControls();
      },
      init(t) {
        (this.map = t),
          (this.buttons = {}),
          (this.isVisible = !1),
          (this.drawContainer = L.DomUtil.create(
            'div',
            'leaflet-pm-toolbar leaflet-pm-draw leaflet-bar leaflet-control'
          )),
          (this.editContainer = L.DomUtil.create(
            'div',
            'leaflet-pm-toolbar leaflet-pm-edit leaflet-bar leaflet-control'
          )),
          (this.optionsContainer = L.DomUtil.create(
            'div',
            'leaflet-pm-toolbar leaflet-pm-options leaflet-bar leaflet-control'
          )),
          (this.customContainer = L.DomUtil.create(
            'div',
            'leaflet-pm-toolbar leaflet-pm-custom leaflet-bar leaflet-control'
          )),
          this._defineButtons();
      },
      _createContainer(t) {
        let e = `${t}Container`;
        return (
          this[e] ||
            (this[e] = L.DomUtil.create(
              'div',
              `leaflet-pm-toolbar leaflet-pm-${t} leaflet-bar leaflet-control`
            )),
          this[e]
        );
      },
      getButtons() {
        return this.buttons;
      },
      addControls(t = this.options) {
        typeof t.editPolygon < 'u' && (t.editMode = t.editPolygon),
          typeof t.deleteLayer < 'u' && (t.removalMode = t.deleteLayer),
          L.Util.setOptions(this, t),
          this.applyIconStyle(),
          (this.isVisible = !0),
          this._showHideButtons();
      },
      applyIconStyle() {
        let t = this.getButtons(),
          e = {
            geomanIcons: {
              drawMarker: 'control-icon leaflet-pm-icon-marker',
              drawPolyline: 'control-icon leaflet-pm-icon-polyline',
              drawRectangle: 'control-icon leaflet-pm-icon-rectangle',
              drawPolygon: 'control-icon leaflet-pm-icon-polygon',
              drawCircle: 'control-icon leaflet-pm-icon-circle',
              drawCircleMarker: 'control-icon leaflet-pm-icon-circle-marker',
              editMode: 'control-icon leaflet-pm-icon-edit',
              dragMode: 'control-icon leaflet-pm-icon-drag',
              cutPolygon: 'control-icon leaflet-pm-icon-cut',
              removalMode: 'control-icon leaflet-pm-icon-delete',
              drawText: 'control-icon leaflet-pm-icon-text',
            },
          };
        for (let i in t) {
          let r = t[i];
          L.Util.setOptions(r, { className: e.geomanIcons[i] });
        }
      },
      removeControls() {
        let t = this.getButtons();
        for (let e in t) t[e].remove();
        this.isVisible = !1;
      },
      deleteControl(t) {
        let e = this._btnNameMapping(t);
        this.buttons[e] && (this.buttons[e].remove(), delete this.buttons[e]);
      },
      toggleControls(t = this.options) {
        this.isVisible ? this.removeControls() : this.addControls(t);
      },
      _addButton(t, e) {
        return (
          (this.buttons[t] = e),
          (this.options[t] = !!this.options[t] || !1),
          this.buttons[t]
        );
      },
      triggerClickOnToggledButtons(t) {
        for (let e in this.buttons) {
          let i = this.buttons[e];
          i._button.disableByOtherButtons &&
            i !== t &&
            i.toggled() &&
            i._triggerClick();
        }
      },
      toggleButton(t, e, i = !0) {
        t === 'editPolygon' && (t = 'editMode'),
          t === 'deleteLayer' && (t = 'removalMode');
        let r = t;
        return (
          i && this.triggerClickOnToggledButtons(this.buttons[r]),
          this.buttons[r] ? this.buttons[r].toggle(e) : !1
        );
      },
      _defineButtons() {
        let t = {
            className: 'control-icon leaflet-pm-icon-marker',
            title: V('buttonTitles.drawMarkerButton'),
            jsClass: 'Marker',
            onClick: () => {},
            afterClick: (E, P) => {
              this.map.pm.Draw[P.button._button.jsClass].toggle();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            actions: ['cancel'],
          },
          e = {
            title: V('buttonTitles.drawPolyButton'),
            className: 'control-icon leaflet-pm-icon-polygon',
            jsClass: 'Polygon',
            onClick: () => {},
            afterClick: (E, P) => {
              this.map.pm.Draw[P.button._button.jsClass].toggle();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            actions: ['finish', 'removeLastVertex', 'cancel'],
          },
          i = {
            className: 'control-icon leaflet-pm-icon-polyline',
            title: V('buttonTitles.drawLineButton'),
            jsClass: 'Line',
            onClick: () => {},
            afterClick: (E, P) => {
              this.map.pm.Draw[P.button._button.jsClass].toggle();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            actions: ['finish', 'removeLastVertex', 'cancel'],
          },
          r = {
            title: V('buttonTitles.drawCircleButton'),
            className: 'control-icon leaflet-pm-icon-circle',
            jsClass: 'Circle',
            onClick: () => {},
            afterClick: (E, P) => {
              this.map.pm.Draw[P.button._button.jsClass].toggle();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            actions: ['cancel'],
          },
          n = {
            title: V('buttonTitles.drawCircleMarkerButton'),
            className: 'control-icon leaflet-pm-icon-circle-marker',
            jsClass: 'CircleMarker',
            onClick: () => {},
            afterClick: (E, P) => {
              this.map.pm.Draw[P.button._button.jsClass].toggle();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            actions: ['cancel'],
          },
          s = {
            title: V('buttonTitles.drawRectButton'),
            className: 'control-icon leaflet-pm-icon-rectangle',
            jsClass: 'Rectangle',
            onClick: () => {},
            afterClick: (E, P) => {
              this.map.pm.Draw[P.button._button.jsClass].toggle();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            actions: ['cancel'],
          },
          a = {
            title: V('buttonTitles.editButton'),
            className: 'control-icon leaflet-pm-icon-edit',
            onClick: () => {},
            afterClick: () => {
              this.map.pm.toggleGlobalEditMode();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            tool: 'edit',
            actions: ['finishMode'],
          },
          o = {
            title: V('buttonTitles.dragButton'),
            className: 'control-icon leaflet-pm-icon-drag',
            onClick: () => {},
            afterClick: () => {
              this.map.pm.toggleGlobalDragMode();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            tool: 'edit',
            actions: ['finishMode'],
          },
          l = {
            title: V('buttonTitles.cutButton'),
            className: 'control-icon leaflet-pm-icon-cut',
            jsClass: 'Cut',
            onClick: () => {},
            afterClick: (E, P) => {
              this.map.pm.Draw[P.button._button.jsClass].toggle({
                snappable: !0,
                cursorMarker: !0,
                allowSelfIntersection: !1,
              });
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            tool: 'edit',
            actions: ['finish', 'removeLastVertex', 'cancel'],
          },
          h = {
            title: V('buttonTitles.deleteButton'),
            className: 'control-icon leaflet-pm-icon-delete',
            onClick: () => {},
            afterClick: () => {
              this.map.pm.toggleGlobalRemovalMode();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            tool: 'edit',
            actions: ['finishMode'],
          },
          g = {
            title: V('buttonTitles.rotateButton'),
            className: 'control-icon leaflet-pm-icon-rotate',
            onClick: () => {},
            afterClick: () => {
              this.map.pm.toggleGlobalRotateMode();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            tool: 'edit',
            actions: ['finishMode'],
          },
          _ = {
            className: 'control-icon leaflet-pm-icon-text',
            title: V('buttonTitles.drawTextButton'),
            jsClass: 'Text',
            onClick: () => {},
            afterClick: (E, P) => {
              this.map.pm.Draw[P.button._button.jsClass].toggle();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            actions: ['cancel'],
          };
        this._addButton('drawMarker', new L.Control.PMButton(t)),
          this._addButton('drawPolyline', new L.Control.PMButton(i)),
          this._addButton('drawRectangle', new L.Control.PMButton(s)),
          this._addButton('drawPolygon', new L.Control.PMButton(e)),
          this._addButton('drawCircle', new L.Control.PMButton(r)),
          this._addButton('drawCircleMarker', new L.Control.PMButton(n)),
          this._addButton('drawText', new L.Control.PMButton(_)),
          this._addButton('editMode', new L.Control.PMButton(a)),
          this._addButton('dragMode', new L.Control.PMButton(o)),
          this._addButton('cutPolygon', new L.Control.PMButton(l)),
          this._addButton('removalMode', new L.Control.PMButton(h)),
          this._addButton('rotateMode', new L.Control.PMButton(g));
      },
      _showHideButtons() {
        if (!this.isVisible) return;
        this.removeControls(), (this.isVisible = !0);
        let t = this.getButtons(),
          e = [];
        this.options.drawControls === !1 &&
          (e = e.concat(Object.keys(t).filter((i) => !t[i]._button.tool))),
          this.options.editControls === !1 &&
            (e = e.concat(
              Object.keys(t).filter((i) => t[i]._button.tool === 'edit')
            )),
          this.options.optionsControls === !1 &&
            (e = e.concat(
              Object.keys(t).filter((i) => t[i]._button.tool === 'options')
            )),
          this.options.customControls === !1 &&
            (e = e.concat(
              Object.keys(t).filter((i) => t[i]._button.tool === 'custom')
            ));
        for (let i in t)
          if (this.options[i] && e.indexOf(i) === -1) {
            let r = t[i]._button.tool;
            r || (r = 'draw'),
              t[i].setPosition(this._getBtnPosition(r)),
              t[i].addTo(this.map);
          }
      },
      _getBtnPosition(t) {
        return this.options.positions && this.options.positions[t]
          ? this.options.positions[t]
          : this.options.position;
      },
      setBlockPosition(t, e) {
        (this.options.positions[t] = e),
          this._showHideButtons(),
          this.changeControlOrder();
      },
      getBlockPositions() {
        return this.options.positions;
      },
      copyDrawControl(t, e) {
        if (e) typeof e != 'object' && (e = { name: e });
        else throw new TypeError('Button has no name');
        let i = this._btnNameMapping(t);
        if (!e.name) throw new TypeError('Button has no name');
        if (this.buttons[e.name])
          throw new TypeError('Button with this name already exists');
        let r = this.map.pm.Draw.createNewDrawInstance(e.name, i);
        e = { ...this.buttons[i]._button, ...e };
        let s = this.createCustomControl(e);
        return { drawInstance: r, control: s };
      },
      createCustomControl(t) {
        if (!t.name) throw new TypeError('Button has no name');
        if (this.buttons[t.name])
          throw new TypeError('Button with this name already exists');
        t.onClick || (t.onClick = () => {}),
          t.afterClick || (t.afterClick = () => {}),
          t.toggle !== !1 && (t.toggle = !0),
          t.block && (t.block = t.block.toLowerCase()),
          (!t.block || t.block === 'draw') && (t.block = ''),
          t.className
            ? t.className.indexOf('control-icon') === -1 &&
              (t.className = `control-icon ${t.className}`)
            : (t.className = 'control-icon');
        let e = {
          tool: t.block,
          className: t.className,
          title: t.title || '',
          jsClass: t.name,
          onClick: t.onClick,
          afterClick: t.afterClick,
          doToggle: t.toggle,
          toggleStatus: !1,
          disableOtherButtons: t.disableOtherButtons ?? !0,
          disableByOtherButtons: t.disableByOtherButtons ?? !0,
          cssToggle: t.toggle,
          position: this.options.position,
          actions: t.actions || [],
          disabled: !!t.disabled,
        };
        this.options[t.name] !== !1 && (this.options[t.name] = !0);
        let i = this._addButton(t.name, new L.Control.PMButton(e));
        return this.changeControlOrder(), i;
      },
      controlExists(t) {
        return !!this.getButton(t);
      },
      getButton(t) {
        return this.getButtons()[t];
      },
      getButtonsInBlock(t) {
        let e = {};
        if (t)
          for (let i in this.getButtons()) {
            let r = this.getButtons()[i];
            (r._button.tool === t || (t === 'draw' && !r._button.tool)) &&
              (e[i] = r);
          }
        return e;
      },
      changeControlOrder(t = []) {
        let e = this._shapeMapping(),
          i = [];
        t.forEach((h) => {
          e[h] ? i.push(e[h]) : i.push(h);
        });
        let r = this.getButtons(),
          n = {};
        i.forEach((h) => {
          r[h] && (n[h] = r[h]);
        }),
          Object.keys(r)
            .filter((h) => !r[h]._button.tool || r[h]._button.tool === 'draw')
            .forEach((h) => {
              i.indexOf(h) === -1 && (n[h] = r[h]);
            }),
          Object.keys(r)
            .filter((h) => r[h]._button.tool === 'edit')
            .forEach((h) => {
              i.indexOf(h) === -1 && (n[h] = r[h]);
            }),
          Object.keys(r)
            .filter((h) => r[h]._button.tool === 'options')
            .forEach((h) => {
              i.indexOf(h) === -1 && (n[h] = r[h]);
            }),
          Object.keys(r)
            .filter((h) => r[h]._button.tool === 'custom')
            .forEach((h) => {
              i.indexOf(h) === -1 && (n[h] = r[h]);
            }),
          Object.keys(r).forEach((h) => {
            i.indexOf(h) === -1 && (n[h] = r[h]);
          }),
          (this.map.pm.Toolbar.buttons = n),
          this._showHideButtons();
      },
      getControlOrder() {
        let t = this.getButtons(),
          e = [];
        for (let i in t) e.push(i);
        return e;
      },
      changeActionsOfControl(t, e) {
        let i = this._btnNameMapping(t);
        if (!i) throw new TypeError('No name passed');
        if (!e) throw new TypeError('No actions passed');
        if (!this.buttons[i])
          throw new TypeError('Button with this name not exists');
        (this.buttons[i]._button.actions = e), this.changeControlOrder();
      },
      setButtonDisabled(t, e) {
        let i = this._btnNameMapping(t);
        e ? this.buttons[i].disable() : this.buttons[i].enable();
      },
      _shapeMapping() {
        return {
          Marker: 'drawMarker',
          Circle: 'drawCircle',
          Polygon: 'drawPolygon',
          Rectangle: 'drawRectangle',
          Polyline: 'drawPolyline',
          Line: 'drawPolyline',
          CircleMarker: 'drawCircleMarker',
          Edit: 'editMode',
          Drag: 'dragMode',
          Cut: 'cutPolygon',
          Removal: 'removalMode',
          Rotate: 'rotateMode',
          Text: 'drawText',
        };
      },
      _btnNameMapping(t) {
        let e = this._shapeMapping();
        return e[t] ? e[t] : t;
      },
    }),
    Ao = Qg;
  var Go = kt(Oe());
  var tm = {
      _initSnappableMarkers() {
        (this.options.snapDistance = this.options.snapDistance || 30),
          (this.options.snapSegment =
            this.options.snapSegment === void 0
              ? !0
              : this.options.snapSegment),
          this._assignEvents(this._markers),
          this._layer.off('pm:dragstart', this._unsnap, this),
          this._layer.on('pm:dragstart', this._unsnap, this);
      },
      _disableSnapping() {
        this._layer.off('pm:dragstart', this._unsnap, this);
      },
      _assignEvents(t) {
        t.forEach((e) => {
          if (Array.isArray(e)) {
            this._assignEvents(e);
            return;
          }
          e.off('drag', this._handleSnapping, this),
            e.on('drag', this._handleSnapping, this),
            e.off('dragend', this._cleanupSnapping, this),
            e.on('dragend', this._cleanupSnapping, this);
        });
      },
      _cleanupSnapping(t) {
        if (t) {
          let e = t.target;
          e._snapped = !1;
        }
        delete this._snapList,
          this.throttledList &&
            (this._map.off('layeradd', this.throttledList, this),
            (this.throttledList = void 0)),
          this._map.off('layerremove', this._handleSnapLayerRemoval, this),
          this.debugIndicatorLines &&
            this.debugIndicatorLines.forEach((e) => {
              e.remove();
            });
      },
      _handleThrottleSnapping() {
        this.throttledList && this._createSnapList();
      },
      _handleSnapping(t) {
        let e = t.target;
        if (
          ((e._snapped = !1),
          this.throttledList ||
            (this.throttledList = L.Util.throttle(
              this._handleThrottleSnapping,
              100,
              this
            )),
          t?.originalEvent?.altKey ||
            this._map?.pm?.Keyboard.isAltKeyPressed() ||
            (this._snapList === void 0 &&
              (this._createSnapList(),
              this._map.off('layeradd', this.throttledList, this),
              this._map.on('layeradd', this.throttledList, this)),
            this._snapList.length <= 0))
        )
          return !1;
        let i = this._calcClosestLayer(e.getLatLng(), this._snapList);
        if (Object.keys(i).length === 0) return !1;
        let r =
            i.layer instanceof L.Marker ||
            i.layer instanceof L.CircleMarker ||
            !this.options.snapSegment,
          n;
        r ? (n = i.latlng) : (n = this._checkPrioritiySnapping(i));
        let s = this.options.snapDistance,
          a = {
            marker: e,
            shape: this._shape,
            snapLatLng: n,
            segment: i.segment,
            layer: this._layer,
            workingLayer: this._layer,
            layerInteractedWith: i.layer,
            distance: i.distance,
          };
        if (
          (this._fireSnapDrag(a.marker, a),
          this._fireSnapDrag(this._layer, a),
          i.distance < s)
        ) {
          (e._orgLatLng = e.getLatLng()),
            e.setLatLng(n),
            (e._snapped = !0),
            (e._snapInfo = a);
          let o = () => {
              (this._snapLatLng = n),
                this._fireSnap(e, a),
                this._fireSnap(this._layer, a);
            },
            l = this._snapLatLng || {},
            h = n || {};
          (l.lat !== h.lat || l.lng !== h.lng) && o();
        } else
          this._snapLatLng &&
            (this._unsnap(a),
            (e._snapped = !1),
            (e._snapInfo = void 0),
            this._fireUnsnap(a.marker, a),
            this._fireUnsnap(this._layer, a));
        return !0;
      },
      _createSnapList() {
        let t = [],
          e = [],
          i = this._map;
        i.off('layerremove', this._handleSnapLayerRemoval, this),
          i.on('layerremove', this._handleSnapLayerRemoval, this),
          i.eachLayer((r) => {
            if (
              (r instanceof L.Polyline ||
                r instanceof L.Marker ||
                r instanceof L.CircleMarker ||
                r instanceof L.ImageOverlay) &&
              r.options.snapIgnore !== !0
            ) {
              if (
                r.options.snapIgnore === void 0 &&
                ((!L.PM.optIn && r.options.pmIgnore === !0) ||
                  (L.PM.optIn && r.options.pmIgnore !== !1))
              )
                return;
              (r instanceof L.Circle || r instanceof L.CircleMarker) &&
              r.pm &&
              r.pm._hiddenPolyCircle
                ? t.push(r.pm._hiddenPolyCircle)
                : r instanceof L.ImageOverlay &&
                  (r = L.rectangle(r.getBounds())),
                t.push(r);
              let n = L.polyline([], { color: 'red', pmIgnore: !0 });
              (n._pmTempLayer = !0),
                e.push(n),
                (r instanceof L.Circle || r instanceof L.CircleMarker) &&
                  e.push(n);
            }
          }),
          (t = t.filter((r) => this._layer !== r)),
          (t = t.filter((r) => r._latlng || (r._latlngs && me(r._latlngs)))),
          (t = t.filter((r) => !r._pmTempLayer)),
          this._otherSnapLayers
            ? (this._otherSnapLayers.forEach(() => {
                let r = L.polyline([], { color: 'red', pmIgnore: !0 });
                (r._pmTempLayer = !0), e.push(r);
              }),
              (this._snapList = t.concat(this._otherSnapLayers)))
            : (this._snapList = t),
          (this.debugIndicatorLines = e);
      },
      _handleSnapLayerRemoval({ layer: t }) {
        if (!t._leaflet_id || !this._snapList) return;
        let e = this._snapList.findIndex(
          (i) => i._leaflet_id === t._leaflet_id
        );
        e > -1 && this._snapList.splice(e, 1);
      },
      _calcClosestLayer(t, e) {
        return this._calcClosestLayers(t, e, 1)[0];
      },
      _calcClosestLayers(t, e, i = 1) {
        let r = [],
          n = {};
        e.forEach((a, o) => {
          if (
            (a._parentCopy && a._parentCopy === this._layer) ||
            a.getLatLngs?.().flat(5).length < 2
          )
            return;
          let l = this._calcLayerDistances(t, a);
          if (
            ((l.distance = Math.floor(l.distance)), this.debugIndicatorLines)
          ) {
            if (!this.debugIndicatorLines[o]) {
              let h = L.polyline([], { color: 'red', pmIgnore: !0 });
              (h._pmTempLayer = !0), (this.debugIndicatorLines[o] = h);
            }
            this.debugIndicatorLines[o].setLatLngs([t, l.latlng]);
          }
          i === 1 && (n.distance === void 0 || l.distance - 5 <= n.distance)
            ? (l.distance + 5 < n.distance && (r = []),
              (n = l),
              (n.layer = a),
              r.push(n))
            : i !== 1 && ((n = {}), (n = l), (n.layer = a), r.push(n));
        }),
          i !== 1 && (r = r.sort((a, o) => a.distance - o.distance)),
          i === -1 && (i = r.length);
        let s = this._getClosestLayerByPriority(r, i);
        return L.Util.isArray(s) ? s : [s];
      },
      _calcLayerDistances(t, e) {
        let i = this._map,
          r = e instanceof L.Marker || e instanceof L.CircleMarker,
          n = e instanceof L.Polygon,
          s = t;
        if (r) {
          let a = e.getLatLng();
          return { latlng: { ...a }, distance: this._getDistance(i, a, s) };
        }
        return this._calcLatLngDistances(s, e.getLatLngs(), i, n);
      },
      _calcLatLngDistances(t, e, i, r = !1) {
        let n,
          s,
          a,
          o = (l) => {
            l.forEach((h, g) => {
              if (Array.isArray(h)) {
                o(h);
                return;
              }
              if (this.options.snapSegment) {
                let _ = h,
                  E;
                r
                  ? (E = g + 1 === l.length ? 0 : g + 1)
                  : (E = g + 1 === l.length ? void 0 : g + 1);
                let P = l[E];
                if (P) {
                  let T = this._getDistanceToSegment(i, t, _, P);
                  (s === void 0 || T < s) && ((s = T), (a = [_, P]));
                }
              } else {
                let _ = this._getDistance(i, t, h);
                (s === void 0 || _ < s) && ((s = _), (n = h));
              }
            });
          };
        return (
          o(e),
          this.options.snapSegment
            ? {
                latlng: { ...this._getClosestPointOnSegment(i, t, a[0], a[1]) },
                segment: a,
                distance: s,
              }
            : { latlng: n, distance: s }
        );
      },
      _getClosestLayerByPriority(t, e = 1) {
        t = t.sort((a, o) => a._leaflet_id - o._leaflet_id);
        let i = [
            'Marker',
            'CircleMarker',
            'Circle',
            'Line',
            'Polygon',
            'Rectangle',
          ],
          r = this._map.pm.globalOptions.snappingOrder || [],
          n = 0,
          s = {};
        return (
          r.concat(i).forEach((a) => {
            s[a] || ((n += 1), (s[a] = n));
          }),
          t.sort(Do('instanceofShape', s)),
          e === 1 ? t[0] || {} : t.slice(0, e)
        );
      },
      _checkPrioritiySnapping(t) {
        let e = this._map,
          i = t.segment[0],
          r = t.segment[1],
          n = t.latlng,
          s = n;
        if (this.options.snapVertex) {
          let a = this._getDistance(e, i, n),
            o = this._getDistance(e, r, n),
            l = a < o ? i : r,
            h = a < o ? a : o;
          if (this.options.snapMiddle) {
            let _ = L.PM.Utils.calcMiddleLatLng(e, i, r),
              E = this._getDistance(e, _, n);
            E < a && E < o && ((l = _), (h = E));
          }
          let g = this.options.snapDistance;
          h < g && (s = l);
        }
        return { ...s };
      },
      _unsnap() {
        delete this._snapLatLng;
      },
      _getClosestPointOnSegment(t, e, i, r) {
        let n = t.getMaxZoom();
        n === 1 / 0 && (n = t.getZoom());
        let s = t.project(e, n),
          a = t.project(i, n),
          o = t.project(r, n),
          l = L.LineUtil.closestPointOnSegment(s, a, o);
        return t.unproject(l, n);
      },
      _getDistanceToSegment(t, e, i, r) {
        let n = t.latLngToContainerPoint(e),
          s = t.latLngToContainerPoint(i),
          a = t.latLngToContainerPoint(r);
        return L.LineUtil.pointToSegmentDistance(n, s, a);
      },
      _getDistance(t, e, i) {
        return t
          .latLngToContainerPoint(e)
          .distanceTo(t.latLngToContainerPoint(i));
      },
    },
    Ae = tm;
  var em = L.Class.extend({
      includes: [Ae, Bt],
      options: {
        snappable: !0,
        snapDistance: 20,
        snapMiddle: !1,
        allowSelfIntersection: !0,
        tooltips: !0,
        templineStyle: {},
        hintlineStyle: { color: '#3388ff', dashArray: '5,5' },
        pathOptions: null,
        cursorMarker: !0,
        finishOn: null,
        markerStyle: { draggable: !0, icon: L.icon() },
        hideMiddleMarkers: !1,
        minRadiusCircle: null,
        maxRadiusCircle: null,
        minRadiusCircleMarker: null,
        maxRadiusCircleMarker: null,
        resizeableCircleMarker: !1,
        resizeableCircle: !0,
        markerEditable: !0,
        continueDrawing: !1,
        snapSegment: !0,
        requireSnapToFinish: !1,
        rectangleAngle: 0,
        textOptions: {
          text: null,
          focusAfterDraw: null,
          removeIfEmpty: null,
          className: null,
        },
        snapVertex: !0,
      },
      setOptions(t) {
        L.Util.setOptions(this, t), this.setStyle(this.options);
      },
      setStyle() {},
      getOptions() {
        return this.options;
      },
      initialize(t) {
        let e = new L.Icon.Default();
        (e.options.tooltipAnchor = [0, 0]),
          (this.options.markerStyle.icon = e),
          (this._map = t),
          (this.shapes = [
            'Marker',
            'CircleMarker',
            'Line',
            'Polygon',
            'Rectangle',
            'Circle',
            'Cut',
            'Text',
          ]),
          this.shapes.forEach((i) => {
            this[i] = new L.PM.Draw[i](this._map);
          }),
          this.Marker.setOptions({ continueDrawing: !0 }),
          this.CircleMarker.setOptions({ continueDrawing: !0 });
      },
      setPathOptions(t, e = !1) {
        e
          ? (this.options.pathOptions = (0, Go.default)(
              this.options.pathOptions,
              t
            ))
          : (this.options.pathOptions = t);
      },
      getShapes() {
        return this.shapes;
      },
      getShape() {
        return this._shape;
      },
      enable(t, e) {
        if (!t)
          throw new Error(
            `Error: Please pass a shape as a parameter. Possible shapes are: ${this.getShapes().join(',')}`
          );
        this.disable(), this[t].enable(e);
      },
      disable() {
        this.shapes.forEach((t) => {
          this[t].disable();
        });
      },
      addControls() {
        this.shapes.forEach((t) => {
          this[t].addButton();
        });
      },
      getActiveShape() {
        let t;
        return (
          this.shapes.forEach((e) => {
            this[e]._enabled && (t = e);
          }),
          t
        );
      },
      _setGlobalDrawMode() {
        this._shape === 'Cut'
          ? this._fireGlobalCutModeToggled()
          : this._fireGlobalDrawModeToggled();
        let t = [];
        this._map.eachLayer((e) => {
          (e instanceof L.Polyline ||
            e instanceof L.Marker ||
            e instanceof L.Circle ||
            e instanceof L.CircleMarker ||
            e instanceof L.ImageOverlay) &&
            (e._pmTempLayer || t.push(e));
        }),
          this._enabled
            ? t.forEach((e) => {
                L.PM.Utils.disablePopup(e);
              })
            : t.forEach((e) => {
                L.PM.Utils.enablePopup(e);
              });
      },
      createNewDrawInstance(t, e) {
        let i = this._getShapeFromBtnName(e);
        if (this[t]) throw new TypeError('Draw Type already exists');
        if (!L.PM.Draw[i])
          throw new TypeError(`There is no class L.PM.Draw.${i}`);
        return (
          (this[t] = new L.PM.Draw[i](this._map)),
          (this[t].toolbarButtonName = t),
          (this[t]._shape = t),
          this.shapes.push(t),
          this[e] && this[t].setOptions(this[e].options),
          this[t].setOptions(this[t].options),
          this[t]
        );
      },
      _getShapeFromBtnName(t) {
        let e = {
          drawMarker: 'Marker',
          drawCircle: 'Circle',
          drawPolygon: 'Polygon',
          drawPolyline: 'Line',
          drawRectangle: 'Rectangle',
          drawCircleMarker: 'CircleMarker',
          editMode: 'Edit',
          dragMode: 'Drag',
          cutPolygon: 'Cut',
          removalMode: 'Removal',
          rotateMode: 'Rotate',
          drawText: 'Text',
        };
        return e[t] ? e[t] : this[t] ? this[t]._shape : t;
      },
      _finishLayer(t) {
        t.pm &&
          (t.pm.setOptions(this.options),
          (t.pm._shape = this._shape),
          (t.pm._map = this._map)),
          this._addDrawnLayerProp(t);
      },
      _addDrawnLayerProp(t) {
        t._drawnByGeoman = !0;
      },
      _setPane(t, e) {
        e === 'layerPane'
          ? (t.options.pane =
              (this._map.pm.globalOptions.panes &&
                this._map.pm.globalOptions.panes.layerPane) ||
              'overlayPane')
          : e === 'vertexPane'
            ? (t.options.pane =
                (this._map.pm.globalOptions.panes &&
                  this._map.pm.globalOptions.panes.vertexPane) ||
                'markerPane')
            : e === 'markerPane' &&
              (t.options.pane =
                (this._map.pm.globalOptions.panes &&
                  this._map.pm.globalOptions.panes.markerPane) ||
                'markerPane');
      },
      _isFirstLayer() {
        return (
          (this._map || this._layer._map).pm.getGeomanLayers().length === 0
        );
      },
    }),
    X = em;
  X.Marker = X.extend({
    initialize(t) {
      (this._map = t),
        (this._shape = 'Marker'),
        (this.toolbarButtonName = 'drawMarker'),
        (this._layerIsDragging = !1);
    },
    enable(t) {
      L.Util.setOptions(this, t),
        (this._enabled = !0),
        this._map.getContainer().classList.add('geoman-draw-cursor'),
        this._map.on('click', this._createMarker, this),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
        (this._hintMarker = L.marker(
          this._map.getCenter(),
          this.options.markerStyle
        )),
        this._setPane(this._hintMarker, 'markerPane'),
        (this._hintMarker._pmTempLayer = !0),
        this._hintMarker.addTo(this._map),
        this.options.tooltips &&
          this._hintMarker
            .bindTooltip(V('tooltips.placeMarker'), {
              permanent: !0,
              offset: L.point(0, 10),
              direction: 'bottom',
              opacity: 0.8,
            })
            .openTooltip(),
        (this._layer = this._hintMarker),
        this._map.on('mousemove', this._syncHintMarker, this),
        this.options.markerEditable &&
          this._map.eachLayer((e) => {
            this.isRelevantMarker(e) && e.pm.enable();
          }),
        this._fireDrawStart(),
        this._setGlobalDrawMode();
    },
    disable() {
      this._enabled &&
        ((this._enabled = !1),
        this._map.getContainer().classList.remove('geoman-draw-cursor'),
        this._map.off('click', this._createMarker, this),
        this._hintMarker.remove(),
        this._map.off('mousemove', this._syncHintMarker, this),
        this._map.eachLayer((t) => {
          this.isRelevantMarker(t) && t.pm.disable();
        }),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
        this.options.snappable && this._cleanupSnapping(),
        this._fireDrawEnd(),
        this._setGlobalDrawMode());
    },
    enabled() {
      return this._enabled;
    },
    toggle(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    isRelevantMarker(t) {
      return (
        t instanceof L.Marker &&
        t.pm &&
        !t._pmTempLayer &&
        !t.pm._initTextMarker
      );
    },
    _syncHintMarker(t) {
      if ((this._hintMarker.setLatLng(t.latlng), this.options.snappable)) {
        let e = t;
        (e.target = this._hintMarker), this._handleSnapping(e);
      }
      this._fireChange(this._hintMarker.getLatLng(), 'Draw');
    },
    _createMarker(t) {
      if (
        !t.latlng ||
        this._layerIsDragging ||
        (this.options.requireSnapToFinish &&
          !this._hintMarker._snapped &&
          !this._isFirstLayer())
      )
        return;
      this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
      let e = this._hintMarker.getLatLng(),
        i = new L.Marker(e, this.options.markerStyle);
      this._setPane(i, 'markerPane'),
        this._finishLayer(i),
        i.pm || (i.options.draggable = !1),
        i.addTo(this._map.pm._getContainingLayer()),
        i.pm && this.options.markerEditable
          ? i.pm.enable()
          : i.dragging && i.dragging.disable(),
        this._fireCreate(i),
        this._cleanupSnapping(),
        this.options.continueDrawing || this.disable();
    },
    setStyle() {
      this.options.markerStyle?.icon &&
        this._hintMarker?.setIcon(this.options.markerStyle.icon);
    },
  });
  var st = 63710088e-1,
    qo = {
      centimeters: st * 100,
      centimetres: st * 100,
      degrees: st / 111325,
      feet: st * 3.28084,
      inches: st * 39.37,
      kilometers: st / 1e3,
      kilometres: st / 1e3,
      meters: st,
      metres: st,
      miles: st / 1609.344,
      millimeters: st * 1e3,
      millimetres: st * 1e3,
      nauticalmiles: st / 1852,
      radians: 1,
      yards: st * 1.0936,
    },
    ib = {
      centimeters: 100,
      centimetres: 100,
      degrees: 1 / 111325,
      feet: 3.28084,
      inches: 39.37,
      kilometers: 1 / 1e3,
      kilometres: 1 / 1e3,
      meters: 1,
      metres: 1,
      miles: 1 / 1609.344,
      millimeters: 1e3,
      millimetres: 1e3,
      nauticalmiles: 1 / 1852,
      radians: 1 / st,
      yards: 1.0936133,
    };
  function Rt(t, e, i) {
    i === void 0 && (i = {});
    var r = { type: 'Feature' };
    return (
      (i.id === 0 || i.id) && (r.id = i.id),
      i.bbox && (r.bbox = i.bbox),
      (r.properties = e || {}),
      (r.geometry = t),
      r
    );
  }
  function gt(t, e, i) {
    if ((i === void 0 && (i = {}), !t))
      throw new Error('coordinates is required');
    if (!Array.isArray(t)) throw new Error('coordinates must be an Array');
    if (t.length < 2)
      throw new Error('coordinates must be at least 2 numbers long');
    if (!ki(t[0]) || !ki(t[1]))
      throw new Error('coordinates must contain numbers');
    var r = { type: 'Point', coordinates: t };
    return Rt(r, e, i);
  }
  function Mt(t, e, i) {
    if ((i === void 0 && (i = {}), t.length < 2))
      throw new Error('coordinates must be an array of two or more positions');
    var r = { type: 'LineString', coordinates: t };
    return Rt(r, e, i);
  }
  function mt(t, e) {
    e === void 0 && (e = {});
    var i = { type: 'FeatureCollection' };
    return (
      e.id && (i.id = e.id), e.bbox && (i.bbox = e.bbox), (i.features = t), i
    );
  }
  function No(t, e) {
    e === void 0 && (e = 'kilometers');
    var i = qo[e];
    if (!i) throw new Error(e + ' units is invalid');
    return t * i;
  }
  function zo(t, e) {
    e === void 0 && (e = 'kilometers');
    var i = qo[e];
    if (!i) throw new Error(e + ' units is invalid');
    return t / i;
  }
  function Le(t) {
    var e = t % (2 * Math.PI);
    return (e * 180) / Math.PI;
  }
  function ot(t) {
    var e = t % 360;
    return (e * Math.PI) / 180;
  }
  function ki(t) {
    return !isNaN(t) && t !== null && !Array.isArray(t);
  }
  function qt(t) {
    var e,
      i,
      r = { type: 'FeatureCollection', features: [] };
    if (
      (t.type === 'Feature' ? (i = t.geometry) : (i = t),
      i.type === 'LineString')
    )
      e = [i.coordinates];
    else if (i.type === 'MultiLineString') e = i.coordinates;
    else if (i.type === 'MultiPolygon') e = [].concat.apply([], i.coordinates);
    else if (i.type === 'Polygon') e = i.coordinates;
    else
      throw new Error(
        'Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry'
      );
    return (
      e.forEach(function (n) {
        e.forEach(function (s) {
          for (var a = 0; a < n.length - 1; a++)
            for (var o = a; o < s.length - 1; o++)
              if (
                !(
                  n === s &&
                  (Math.abs(a - o) === 1 ||
                    (a === 0 &&
                      o === n.length - 2 &&
                      n[a][0] === n[n.length - 1][0] &&
                      n[a][1] === n[n.length - 1][1]))
                )
              ) {
                var l = im(
                  n[a][0],
                  n[a][1],
                  n[a + 1][0],
                  n[a + 1][1],
                  s[o][0],
                  s[o][1],
                  s[o + 1][0],
                  s[o + 1][1]
                );
                l && r.features.push(gt([l[0], l[1]]));
              }
        });
      }),
      r
    );
  }
  function im(t, e, i, r, n, s, a, o) {
    var l,
      h,
      g,
      _,
      E,
      P = { x: null, y: null, onLine1: !1, onLine2: !1 };
    return (
      (l = (o - s) * (i - t) - (a - n) * (r - e)),
      l === 0
        ? P.x !== null && P.y !== null
          ? P
          : !1
        : ((h = e - s),
          (g = t - n),
          (_ = (a - n) * h - (o - s) * g),
          (E = (i - t) * h - (r - e) * g),
          (h = _ / l),
          (g = E / l),
          (P.x = t + h * (i - t)),
          (P.y = e + h * (r - e)),
          h >= 0 && h <= 1 && (P.onLine1 = !0),
          g >= 0 && g <= 1 && (P.onLine2 = !0),
          P.onLine1 && P.onLine2 ? [P.x, P.y] : !1)
    );
  }
  X.Line = X.extend({
    initialize(t) {
      (this._map = t),
        (this._shape = 'Line'),
        (this.toolbarButtonName = 'drawPolyline'),
        (this._doesSelfIntersect = !1);
    },
    enable(t) {
      L.Util.setOptions(this, t),
        (this._enabled = !0),
        (this._markers = []),
        (this._layerGroup = new L.FeatureGroup()),
        (this._layerGroup._pmTempLayer = !0),
        this._layerGroup.addTo(this._map),
        (this._layer = L.polyline([], {
          ...this.options.templineStyle,
          pmIgnore: !1,
        })),
        this._setPane(this._layer, 'layerPane'),
        (this._layer._pmTempLayer = !0),
        this._layerGroup.addLayer(this._layer),
        (this._hintline = L.polyline([], this.options.hintlineStyle)),
        this._setPane(this._hintline, 'layerPane'),
        (this._hintline._pmTempLayer = !0),
        this._layerGroup.addLayer(this._hintline),
        (this._hintMarker = L.marker(this._map.getCenter(), {
          interactive: !1,
          zIndexOffset: 100,
          icon: L.divIcon({ className: 'marker-icon cursor-marker' }),
        })),
        this._setPane(this._hintMarker, 'vertexPane'),
        (this._hintMarker._pmTempLayer = !0),
        this._layerGroup.addLayer(this._hintMarker),
        this.options.cursorMarker &&
          L.DomUtil.addClass(this._hintMarker._icon, 'visible'),
        this.options.tooltips &&
          this._hintMarker
            .bindTooltip(V('tooltips.firstVertex'), {
              permanent: !0,
              offset: L.point(0, 10),
              direction: 'bottom',
              opacity: 0.8,
            })
            .openTooltip(),
        this._map.getContainer().classList.add('geoman-draw-cursor'),
        this._map.on('click', this._createVertex, this),
        this.options.finishOn &&
          this.options.finishOn !== 'snap' &&
          this._map.on(this.options.finishOn, this._finishShape, this),
        this.options.finishOn === 'dblclick' &&
          ((this.tempMapDoubleClickZoomState =
            this._map.doubleClickZoom._enabled),
          this.tempMapDoubleClickZoomState &&
            this._map.doubleClickZoom.disable()),
        this._map.on('mousemove', this._syncHintMarker, this),
        this._hintMarker.on('move', this._syncHintLine, this),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
        (this._otherSnapLayers = []),
        (this.isRed = !1),
        this._fireDrawStart(),
        this._setGlobalDrawMode();
    },
    disable() {
      this._enabled &&
        ((this._enabled = !1),
        this._map.getContainer().classList.remove('geoman-draw-cursor'),
        this._map.off('click', this._createVertex, this),
        this._map.off('mousemove', this._syncHintMarker, this),
        this.options.finishOn &&
          this.options.finishOn !== 'snap' &&
          this._map.off(this.options.finishOn, this._finishShape, this),
        this.tempMapDoubleClickZoomState && this._map.doubleClickZoom.enable(),
        this._map.removeLayer(this._layerGroup),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
        this.options.snappable && this._cleanupSnapping(),
        this._fireDrawEnd(),
        this._setGlobalDrawMode());
    },
    enabled() {
      return this._enabled;
    },
    toggle(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    _syncHintLine() {
      let t = this._layer.getLatLngs();
      if (t.length > 0) {
        let e = t[t.length - 1];
        this._hintline.setLatLngs([e, this._hintMarker.getLatLng()]);
      }
    },
    _syncHintMarker(t) {
      if ((this._hintMarker.setLatLng(t.latlng), this.options.snappable)) {
        let i = t;
        (i.target = this._hintMarker), this._handleSnapping(i);
      }
      this.options.allowSelfIntersection ||
        this._handleSelfIntersection(!0, this._hintMarker.getLatLng());
      let e = this._layer._defaultShape().slice();
      e.push(this._hintMarker.getLatLng()), this._change(e);
    },
    hasSelfIntersection() {
      return qt(this._layer.toGeoJSON(15)).features.length > 0;
    },
    _handleSelfIntersection(t, e) {
      let i = L.polyline(this._layer.getLatLngs());
      t && (e || (e = this._hintMarker.getLatLng()), i.addLatLng(e));
      let r = qt(i.toGeoJSON(15));
      (this._doesSelfIntersect = r.features.length > 0),
        this._doesSelfIntersect
          ? this.isRed ||
            ((this.isRed = !0),
            this._hintline.setStyle({ color: '#f00000ff' }),
            this._fireIntersect(r, this._map, 'Draw'))
          : this._hintline.isEmpty() ||
            ((this.isRed = !1),
            this._hintline.setStyle(this.options.hintlineStyle));
    },
    _createVertex(t) {
      if (
        !this.options.allowSelfIntersection &&
        (this._handleSelfIntersection(!0, t.latlng), this._doesSelfIntersect)
      )
        return;
      this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
      let e = this._hintMarker.getLatLng(),
        i = this._layer.getLatLngs(),
        r = i[i.length - 1];
      if (e.equals(i[0]) || (i.length > 0 && e.equals(r))) {
        this._finishShape();
        return;
      }
      (this._layer._latlngInfo = this._layer._latlngInfo || []),
        this._layer._latlngInfo.push({
          latlng: e,
          snapInfo: this._hintMarker._snapInfo,
        }),
        this._layer.addLatLng(e);
      let n = this._createMarker(e);
      this._setTooltipText(),
        this._setHintLineAfterNewVertex(e),
        this._fireVertexAdded(n, void 0, e, 'Draw'),
        this._change(this._layer.getLatLngs()),
        this.options.finishOn === 'snap' &&
          this._hintMarker._snapped &&
          this._finishShape(t);
    },
    _setHintLineAfterNewVertex(t) {
      this._hintline.setLatLngs([t, t]);
    },
    _removeLastVertex() {
      let t = this._markers;
      if (t.length <= 1) {
        this.disable();
        return;
      }
      let e = this._layer.getLatLngs(),
        i = t[t.length - 1],
        { indexPath: r } = L.PM.Utils.findDeepMarkerIndex(t, i);
      t.pop(), this._layerGroup.removeLayer(i);
      let n = t[t.length - 1],
        s = e.indexOf(n.getLatLng());
      (e = e.slice(0, s + 1)),
        this._layer.setLatLngs(e),
        this._layer._latlngInfo.pop(),
        this._syncHintLine(),
        this._setTooltipText(),
        this._fireVertexRemoved(i, r, 'Draw'),
        this._change(this._layer.getLatLngs());
    },
    _finishShape() {
      if (
        (!this.options.allowSelfIntersection &&
          (this._handleSelfIntersection(!1), this._doesSelfIntersect)) ||
        (this.options.requireSnapToFinish &&
          !this._hintMarker._snapped &&
          !this._isFirstLayer())
      )
        return;
      let t = this._layer.getLatLngs();
      if (t.length <= 1) return;
      let e = L.polyline(t, this.options.pathOptions);
      this._setPane(e, 'layerPane'),
        this._finishLayer(e),
        e.addTo(this._map.pm._getContainingLayer()),
        this._fireCreate(e),
        this.options.snappable && this._cleanupSnapping();
      let i = this._hintMarker.getLatLng();
      this.disable(),
        this.options.continueDrawing &&
          (this.enable(), this._hintMarker.setLatLng(i));
    },
    _createMarker(t) {
      let e = new L.Marker(t, {
        draggable: !1,
        icon: L.divIcon({ className: 'marker-icon' }),
      });
      return (
        this._setPane(e, 'vertexPane'),
        (e._pmTempLayer = !0),
        this._layerGroup.addLayer(e),
        this._markers.push(e),
        e.on('click', this._finishShape, this),
        e
      );
    },
    _setTooltipText() {
      let { length: t } = this._layer.getLatLngs().flat(),
        e = '';
      t <= 1
        ? (e = V('tooltips.continueLine'))
        : (e = V('tooltips.finishLine')),
        this._hintMarker.setTooltipContent(e);
    },
    _change(t) {
      this._fireChange(t, 'Draw');
    },
    setStyle() {
      this._layer?.setStyle(this.options.templineStyle),
        this._hintline?.setStyle(this.options.hintlineStyle);
    },
  });
  X.Polygon = X.Line.extend({
    initialize(t) {
      (this._map = t),
        (this._shape = 'Polygon'),
        (this.toolbarButtonName = 'drawPolygon');
    },
    enable(t) {
      L.PM.Draw.Line.prototype.enable.call(this, t),
        (this._layer.pm._shape = 'Polygon');
    },
    _createMarker(t) {
      let e = new L.Marker(t, {
        draggable: !1,
        icon: L.divIcon({ className: 'marker-icon' }),
      });
      return (
        this._setPane(e, 'vertexPane'),
        (e._pmTempLayer = !0),
        this._layerGroup.addLayer(e),
        this._markers.push(e),
        this._layer.getLatLngs().flat().length === 1
          ? (e.on('click', this._finishShape, this),
            (this._tempSnapLayerIndex = this._otherSnapLayers.push(e) - 1),
            this.options.snappable && this._cleanupSnapping())
          : e.on('click', () => 1),
        e
      );
    },
    _setTooltipText() {
      let { length: t } = this._layer.getLatLngs().flat(),
        e = '';
      t <= 2
        ? (e = V('tooltips.continueLine'))
        : (e = V('tooltips.finishPoly')),
        this._hintMarker.setTooltipContent(e);
    },
    _finishShape() {
      if (
        (!this.options.allowSelfIntersection &&
          (this._handleSelfIntersection(!0, this._layer.getLatLngs()[0]),
          this._doesSelfIntersect)) ||
        (this.options.requireSnapToFinish &&
          !this._hintMarker._snapped &&
          !this._isFirstLayer())
      )
        return;
      let t = this._layer.getLatLngs();
      if (t.length <= 2) return;
      let e = L.polygon(t, this.options.pathOptions);
      this._setPane(e, 'layerPane'),
        this._finishLayer(e),
        e.addTo(this._map.pm._getContainingLayer()),
        this._fireCreate(e),
        this._cleanupSnapping(),
        this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1),
        delete this._tempSnapLayerIndex;
      let i = this._hintMarker.getLatLng();
      this.disable(),
        this.options.continueDrawing &&
          (this.enable(), this._hintMarker.setLatLng(i));
    },
  });
  X.Rectangle = X.extend({
    initialize(t) {
      (this._map = t),
        (this._shape = 'Rectangle'),
        (this.toolbarButtonName = 'drawRectangle');
    },
    enable(t) {
      if (
        (L.Util.setOptions(this, t),
        (this._enabled = !0),
        (this._layerGroup = new L.FeatureGroup()),
        (this._layerGroup._pmTempLayer = !0),
        this._layerGroup.addTo(this._map),
        (this._layer = L.rectangle(
          [
            [0, 0],
            [0, 0],
          ],
          this.options.pathOptions
        )),
        this._setPane(this._layer, 'layerPane'),
        (this._layer._pmTempLayer = !0),
        (this._startMarker = L.marker(this._map.getCenter(), {
          icon: L.divIcon({ className: 'marker-icon rect-start-marker' }),
          draggable: !1,
          zIndexOffset: -100,
          opacity: this.options.cursorMarker ? 1 : 0,
        })),
        this._setPane(this._startMarker, 'vertexPane'),
        (this._startMarker._pmTempLayer = !0),
        this._layerGroup.addLayer(this._startMarker),
        (this._hintMarker = L.marker(this._map.getCenter(), {
          zIndexOffset: 150,
          icon: L.divIcon({ className: 'marker-icon cursor-marker' }),
        })),
        this._setPane(this._hintMarker, 'vertexPane'),
        (this._hintMarker._pmTempLayer = !0),
        this._layerGroup.addLayer(this._hintMarker),
        this.options.cursorMarker &&
          L.DomUtil.addClass(this._hintMarker._icon, 'visible'),
        this.options.tooltips &&
          this._hintMarker
            .bindTooltip(V('tooltips.firstVertex'), {
              permanent: !0,
              offset: L.point(0, 10),
              direction: 'bottom',
              opacity: 0.8,
            })
            .openTooltip(),
        this.options.cursorMarker)
      ) {
        this._styleMarkers = [];
        for (let e = 0; e < 2; e += 1) {
          let i = L.marker(this._map.getCenter(), {
            icon: L.divIcon({ className: 'marker-icon rect-style-marker' }),
            draggable: !1,
            zIndexOffset: 100,
          });
          this._setPane(i, 'vertexPane'),
            (i._pmTempLayer = !0),
            this._layerGroup.addLayer(i),
            this._styleMarkers.push(i);
        }
      }
      this._map.getContainer().classList.add('geoman-draw-cursor'),
        this._map.on('click', this._placeStartingMarkers, this),
        this._map.on('mousemove', this._syncHintMarker, this),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
        (this._otherSnapLayers = []),
        this._fireDrawStart(),
        this._setGlobalDrawMode();
    },
    disable() {
      this._enabled &&
        ((this._enabled = !1),
        this._map.getContainer().classList.remove('geoman-draw-cursor'),
        this._map.off('click', this._finishShape, this),
        this._map.off('click', this._placeStartingMarkers, this),
        this._map.off('mousemove', this._syncHintMarker, this),
        this._map.removeLayer(this._layerGroup),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
        this.options.snappable && this._cleanupSnapping(),
        this._fireDrawEnd(),
        this._setGlobalDrawMode());
    },
    enabled() {
      return this._enabled;
    },
    toggle(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    _placeStartingMarkers(t) {
      this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
      let e = this._hintMarker.getLatLng();
      L.DomUtil.addClass(this._startMarker._icon, 'visible'),
        this._startMarker.setLatLng(e),
        this.options.cursorMarker &&
          this._styleMarkers &&
          this._styleMarkers.forEach((i) => {
            L.DomUtil.addClass(i._icon, 'visible'), i.setLatLng(e);
          }),
        this._map.off('click', this._placeStartingMarkers, this),
        this._map.on('click', this._finishShape, this),
        this._hintMarker.setTooltipContent(V('tooltips.finishRect')),
        this._setRectangleOrigin();
    },
    _setRectangleOrigin() {
      let t = this._startMarker.getLatLng();
      t &&
        (this._layerGroup.addLayer(this._layer),
        this._layer.setLatLngs([t, t]),
        this._hintMarker.on('move', this._syncRectangleSize, this));
    },
    _syncHintMarker(t) {
      if ((this._hintMarker.setLatLng(t.latlng), this.options.snappable)) {
        let i = t;
        (i.target = this._hintMarker), this._handleSnapping(i);
      }
      let e =
        this._layerGroup && this._layerGroup.hasLayer(this._layer)
          ? this._layer.getLatLngs()
          : [this._hintMarker.getLatLng()];
      this._fireChange(e, 'Draw');
    },
    _syncRectangleSize() {
      let t = vi(this._startMarker.getLatLng(), this._map),
        e = vi(this._hintMarker.getLatLng(), this._map),
        i = L.PM.Utils._getRotatedRectangle(
          t,
          e,
          this.options.rectangleAngle || 0,
          this._map
        );
      if (
        (this._layer.setLatLngs(i),
        this.options.cursorMarker && this._styleMarkers)
      ) {
        let r = [];
        i.forEach((n) => {
          !n.equals(t, 1e-8) && !n.equals(e, 1e-8) && r.push(n);
        }),
          r.forEach((n, s) => {
            try {
              this._styleMarkers[s].setLatLng(n);
            } catch {}
          });
      }
    },
    _findCorners() {
      let t = this._layer.getLatLngs()[0];
      return L.PM.Utils._getRotatedRectangle(
        t[0],
        t[2],
        this.options.rectangleAngle || 0,
        this._map
      );
    },
    _finishShape(t) {
      this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
      let e = this._hintMarker.getLatLng(),
        i = this._startMarker.getLatLng();
      if (
        (this.options.requireSnapToFinish &&
          !this._hintMarker._snapped &&
          !this._isFirstLayer()) ||
        i.equals(e)
      )
        return;
      let r = L.rectangle([i, e], this.options.pathOptions);
      if (this.options.rectangleAngle) {
        let s = L.PM.Utils._getRotatedRectangle(
          i,
          e,
          this.options.rectangleAngle || 0,
          this._map
        );
        r.setLatLngs(s),
          r.pm && r.pm._setAngle(this.options.rectangleAngle || 0);
      }
      this._setPane(r, 'layerPane'),
        this._finishLayer(r),
        r.addTo(this._map.pm._getContainingLayer()),
        this._fireCreate(r);
      let n = this._hintMarker.getLatLng();
      this.disable(),
        this.options.continueDrawing &&
          (this.enable(), this._hintMarker.setLatLng(n));
    },
    setStyle() {
      this._layer?.setStyle(this.options.pathOptions);
    },
  });
  X.CircleMarker = X.extend({
    initialize(t) {
      (this._map = t),
        (this._shape = 'CircleMarker'),
        (this.toolbarButtonName = 'drawCircleMarker'),
        (this._layerIsDragging = !1),
        (this._BaseCircleClass = L.CircleMarker),
        (this._minRadiusOption = 'minRadiusCircleMarker'),
        (this._maxRadiusOption = 'maxRadiusCircleMarker'),
        (this._editableOption = 'resizeableCircleMarker'),
        (this._defaultRadius = 10);
    },
    enable(t) {
      if (
        (L.Util.setOptions(this, t),
        this.options.editable &&
          ((this.options.resizeableCircleMarker = this.options.editable),
          delete this.options.editable),
        (this._enabled = !0),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
        this._map.getContainer().classList.add('geoman-draw-cursor'),
        this.options[this._editableOption])
      ) {
        let e = {};
        L.extend(e, this.options.templineStyle),
          (e.radius = 0),
          (this._layerGroup = new L.FeatureGroup()),
          (this._layerGroup._pmTempLayer = !0),
          this._layerGroup.addTo(this._map),
          (this._layer = new this._BaseCircleClass(this._map.getCenter(), e)),
          this._setPane(this._layer, 'layerPane'),
          (this._layer._pmTempLayer = !0),
          (this._centerMarker = L.marker(this._map.getCenter(), {
            icon: L.divIcon({ className: 'marker-icon' }),
            draggable: !1,
            zIndexOffset: 100,
          })),
          this._setPane(this._centerMarker, 'vertexPane'),
          (this._centerMarker._pmTempLayer = !0),
          (this._hintMarker = L.marker(this._map.getCenter(), {
            zIndexOffset: 110,
            icon: L.divIcon({ className: 'marker-icon cursor-marker' }),
          })),
          this._setPane(this._hintMarker, 'vertexPane'),
          (this._hintMarker._pmTempLayer = !0),
          this._layerGroup.addLayer(this._hintMarker),
          this.options.cursorMarker &&
            L.DomUtil.addClass(this._hintMarker._icon, 'visible'),
          this.options.tooltips &&
            this._hintMarker
              .bindTooltip(V('tooltips.startCircle'), {
                permanent: !0,
                offset: L.point(0, 10),
                direction: 'bottom',
                opacity: 0.8,
              })
              .openTooltip(),
          (this._hintline = L.polyline([], this.options.hintlineStyle)),
          this._setPane(this._hintline, 'layerPane'),
          (this._hintline._pmTempLayer = !0),
          this._layerGroup.addLayer(this._hintline),
          this._map.on('click', this._placeCenterMarker, this);
      } else
        this._map.on('click', this._createMarker, this),
          (this._hintMarker = new this._BaseCircleClass(this._map.getCenter(), {
            radius: this._defaultRadius,
            ...this.options.templineStyle,
          })),
          this._setPane(this._hintMarker, 'layerPane'),
          (this._hintMarker._pmTempLayer = !0),
          this._hintMarker.addTo(this._map),
          (this._layer = this._hintMarker),
          this.options.tooltips &&
            this._hintMarker
              .bindTooltip(V('tooltips.placeCircleMarker'), {
                permanent: !0,
                offset: L.point(0, 10),
                direction: 'bottom',
                opacity: 0.8,
              })
              .openTooltip();
      this._map.on('mousemove', this._syncHintMarker, this),
        this._extendingEnable(),
        (this._otherSnapLayers = []),
        this._fireDrawStart(),
        this._setGlobalDrawMode();
    },
    _extendingEnable() {
      !this.options[this._editableOption] &&
        this.options.markerEditable &&
        this._map.eachLayer((t) => {
          this.isRelevantMarker(t) && t.pm.enable();
        }),
        this._layer.bringToBack();
    },
    disable() {
      this._enabled &&
        ((this._enabled = !1),
        this._map.getContainer().classList.remove('geoman-draw-cursor'),
        this.options[this._editableOption]
          ? (this._map.off('click', this._finishShape, this),
            this._map.off('click', this._placeCenterMarker, this),
            this._map.removeLayer(this._layerGroup))
          : (this._map.off('click', this._createMarker, this),
            this._extendingDisable(),
            this._hintMarker.remove()),
        this._map.off('mousemove', this._syncHintMarker, this),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
        this.options.snappable && this._cleanupSnapping(),
        this._fireDrawEnd(),
        this._setGlobalDrawMode());
    },
    _extendingDisable() {
      this._map.eachLayer((t) => {
        this.isRelevantMarker(t) && t.pm.disable();
      });
    },
    enabled() {
      return this._enabled;
    },
    toggle(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    _placeCenterMarker(t) {
      this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng),
        this._layerGroup.addLayer(this._layer),
        this._layerGroup.addLayer(this._centerMarker);
      let e = this._hintMarker.getLatLng();
      this._centerMarker.setLatLng(e),
        this._map.off('click', this._placeCenterMarker, this),
        this._map.on('click', this._finishShape, this),
        this._placeCircleCenter();
    },
    _placeCircleCenter() {
      let t = this._centerMarker.getLatLng();
      t &&
        (this._layer.setLatLng(t),
        this._hintMarker.on('move', this._syncHintLine, this),
        this._hintMarker.on('move', this._syncCircleRadius, this),
        this._hintMarker.setTooltipContent(V('tooltips.finishCircle')),
        this._fireCenterPlaced(),
        this._fireChange(this._layer.getLatLng(), 'Draw'));
    },
    _syncHintLine() {
      let t = this._centerMarker.getLatLng(),
        e = this._getNewDestinationOfHintMarker();
      this._hintline.setLatLngs([t, e]);
    },
    _syncCircleRadius() {
      let t = this._centerMarker.getLatLng(),
        e = this._hintMarker.getLatLng(),
        i = this._distanceCalculation(t, e);
      this.options[this._minRadiusOption] &&
      i < this.options[this._minRadiusOption]
        ? this._layer.setRadius(this.options[this._minRadiusOption])
        : this.options[this._maxRadiusOption] &&
            i > this.options[this._maxRadiusOption]
          ? this._layer.setRadius(this.options[this._maxRadiusOption])
          : this._layer.setRadius(i);
    },
    _syncHintMarker(t) {
      if (
        (this._hintMarker.setLatLng(t.latlng),
        this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker()),
        this.options.snappable)
      ) {
        let i = t;
        (i.target = this._hintMarker), this._handleSnapping(i);
      }
      this._handleHintMarkerSnapping();
      let e =
        this._layerGroup && this._layerGroup.hasLayer(this._centerMarker)
          ? this._centerMarker.getLatLng()
          : this._hintMarker.getLatLng();
      this._fireChange(e, 'Draw');
    },
    isRelevantMarker(t) {
      return (
        t instanceof L.CircleMarker &&
        !(t instanceof L.Circle) &&
        t.pm &&
        !t._pmTempLayer
      );
    },
    _createMarker(t) {
      if (
        (this.options.requireSnapToFinish &&
          !this._hintMarker._snapped &&
          !this._isFirstLayer()) ||
        !t.latlng ||
        this._layerIsDragging
      )
        return;
      this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
      let e = this._hintMarker.getLatLng(),
        i = new this._BaseCircleClass(e, {
          radius: this._defaultRadius,
          ...this.options.pathOptions,
        });
      this._setPane(i, 'layerPane'),
        this._finishLayer(i),
        i.addTo(this._map.pm._getContainingLayer()),
        this._extendingCreateMarker(i),
        this._fireCreate(i),
        this._cleanupSnapping(),
        this.options.continueDrawing || this.disable();
    },
    _extendingCreateMarker(t) {
      t.pm && this.options.markerEditable && t.pm.enable();
    },
    _finishShape(t) {
      if (
        this.options.requireSnapToFinish &&
        !this._hintMarker._snapped &&
        !this._isFirstLayer()
      )
        return;
      this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
      let e = this._centerMarker.getLatLng(),
        i = this._defaultRadius;
      if (this.options[this._editableOption]) {
        let a = this._hintMarker.getLatLng();
        (i = this._distanceCalculation(e, a)),
          this.options[this._minRadiusOption] &&
          i < this.options[this._minRadiusOption]
            ? (i = this.options[this._minRadiusOption])
            : this.options[this._maxRadiusOption] &&
              i > this.options[this._maxRadiusOption] &&
              (i = this.options[this._maxRadiusOption]);
      }
      let r = { ...this.options.pathOptions, radius: i },
        n = new this._BaseCircleClass(e, r);
      this._setPane(n, 'layerPane'),
        this._finishLayer(n),
        n.addTo(this._map.pm._getContainingLayer()),
        n.pm && n.pm._updateHiddenPolyCircle(),
        this._fireCreate(n);
      let s = this._hintMarker.getLatLng();
      this.disable(),
        this.options.continueDrawing &&
          (this.enable(), this._hintMarker.setLatLng(s));
    },
    _getNewDestinationOfHintMarker() {
      let t = this._hintMarker.getLatLng();
      if (this.options[this._editableOption]) {
        if (!this._layerGroup.hasLayer(this._centerMarker)) return t;
        let e = this._centerMarker.getLatLng(),
          i = this._distanceCalculation(e, t);
        this.options[this._minRadiusOption] &&
        i < this.options[this._minRadiusOption]
          ? (t = Wt(this._map, e, t, this._getMinDistanceInMeter()))
          : this.options[this._maxRadiusOption] &&
            i > this.options[this._maxRadiusOption] &&
            (t = Wt(this._map, e, t, this._getMaxDistanceInMeter()));
      }
      return t;
    },
    _getMinDistanceInMeter() {
      return L.PM.Utils.pxRadiusToMeterRadius(
        this.options[this._minRadiusOption],
        this._map,
        this._centerMarker.getLatLng()
      );
    },
    _getMaxDistanceInMeter() {
      return L.PM.Utils.pxRadiusToMeterRadius(
        this.options[this._maxRadiusOption],
        this._map,
        this._centerMarker.getLatLng()
      );
    },
    _handleHintMarkerSnapping() {
      if (this.options[this._editableOption]) {
        if (this._hintMarker._snapped) {
          let t = this._centerMarker.getLatLng(),
            e = this._hintMarker.getLatLng(),
            i = this._distanceCalculation(t, e);
          this._layerGroup.hasLayer(this._centerMarker) &&
            (this.options[this._minRadiusOption] &&
            i < this.options[this._minRadiusOption]
              ? this._hintMarker.setLatLng(this._hintMarker._orgLatLng)
              : this.options[this._maxRadiusOption] &&
                i > this.options[this._maxRadiusOption] &&
                this._hintMarker.setLatLng(this._hintMarker._orgLatLng));
        }
        this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker());
      }
    },
    setStyle() {
      let t = {};
      L.extend(t, this.options.templineStyle),
        this.options[this._editableOption] && (t.radius = 0),
        this._layer?.setStyle(t),
        this._hintline?.setStyle(this.options.hintlineStyle);
    },
    _distanceCalculation(t, e) {
      return this._map.project(t).distanceTo(this._map.project(e));
    },
  });
  X.Circle = X.CircleMarker.extend({
    initialize(t) {
      (this._map = t),
        (this._shape = 'Circle'),
        (this.toolbarButtonName = 'drawCircle'),
        (this._BaseCircleClass = L.Circle),
        (this._minRadiusOption = 'minRadiusCircle'),
        (this._maxRadiusOption = 'maxRadiusCircle'),
        (this._editableOption = 'resizeableCircle'),
        (this._defaultRadius = 100);
    },
    _extendingEnable() {},
    _extendingDisable() {},
    _extendingCreateMarker() {},
    isRelevantMarker() {},
    _getMinDistanceInMeter() {
      return this.options[this._minRadiusOption];
    },
    _getMaxDistanceInMeter() {
      return this.options[this._maxRadiusOption];
    },
    _distanceCalculation(t, e) {
      return this._map.distance(t, e);
    },
  });
  function it(t) {
    if (!t) throw new Error('coord is required');
    if (!Array.isArray(t)) {
      if (
        t.type === 'Feature' &&
        t.geometry !== null &&
        t.geometry.type === 'Point'
      )
        return t.geometry.coordinates;
      if (t.type === 'Point') return t.coordinates;
    }
    if (
      Array.isArray(t) &&
      t.length >= 2 &&
      !Array.isArray(t[0]) &&
      !Array.isArray(t[1])
    )
      return t;
    throw new Error('coord must be GeoJSON Point or an Array of numbers');
  }
  function at(t) {
    if (Array.isArray(t)) return t;
    if (t.type === 'Feature') {
      if (t.geometry !== null) return t.geometry.coordinates;
    } else if (t.coordinates) return t.coordinates;
    throw new Error(
      'coords must be GeoJSON Feature, Geometry Object or an Array'
    );
  }
  function Qt(t) {
    return t.type === 'Feature' ? t.geometry : t;
  }
  function Mi(t, e) {
    return t.type === 'FeatureCollection'
      ? 'FeatureCollection'
      : t.type === 'GeometryCollection'
        ? 'GeometryCollection'
        : t.type === 'Feature' && t.geometry !== null
          ? t.geometry.type
          : t.type;
  }
  function ve(t, e, i) {
    if (t !== null)
      for (
        var r,
          n,
          s,
          a,
          o,
          l,
          h,
          g = 0,
          _ = 0,
          E,
          P = t.type,
          T = P === 'FeatureCollection',
          G = P === 'Feature',
          m = T ? t.features.length : 1,
          x = 0;
        x < m;
        x++
      ) {
        (h = T ? t.features[x].geometry : G ? t.geometry : t),
          (E = h ? h.type === 'GeometryCollection' : !1),
          (o = E ? h.geometries.length : 1);
        for (var v = 0; v < o; v++) {
          var R = 0,
            D = 0;
          if (((a = E ? h.geometries[v] : h), a !== null)) {
            l = a.coordinates;
            var O = a.type;
            switch (
              ((g = i && (O === 'Polygon' || O === 'MultiPolygon') ? 1 : 0), O)
            ) {
              case null:
                break;
              case 'Point':
                if (e(l, _, x, R, D) === !1) return !1;
                _++, R++;
                break;
              case 'LineString':
              case 'MultiPoint':
                for (r = 0; r < l.length; r++) {
                  if (e(l[r], _, x, R, D) === !1) return !1;
                  _++, O === 'MultiPoint' && R++;
                }
                O === 'LineString' && R++;
                break;
              case 'Polygon':
              case 'MultiLineString':
                for (r = 0; r < l.length; r++) {
                  for (n = 0; n < l[r].length - g; n++) {
                    if (e(l[r][n], _, x, R, D) === !1) return !1;
                    _++;
                  }
                  O === 'MultiLineString' && R++, O === 'Polygon' && D++;
                }
                O === 'Polygon' && R++;
                break;
              case 'MultiPolygon':
                for (r = 0; r < l.length; r++) {
                  for (D = 0, n = 0; n < l[r].length; n++) {
                    for (s = 0; s < l[r][n].length - g; s++) {
                      if (e(l[r][n][s], _, x, R, D) === !1) return !1;
                      _++;
                    }
                    D++;
                  }
                  R++;
                }
                break;
              case 'GeometryCollection':
                for (r = 0; r < a.geometries.length; r++)
                  if (ve(a.geometries[r], e, i) === !1) return !1;
                break;
              default:
                throw new Error('Unknown Geometry Type');
            }
          }
        }
      }
  }
  function Nt(t, e) {
    if (t.type === 'Feature') e(t, 0);
    else if (t.type === 'FeatureCollection')
      for (var i = 0; i < t.features.length && e(t.features[i], i) !== !1; i++);
  }
  function Fo(t, e, i) {
    var r = i;
    return (
      Nt(t, function (n, s) {
        s === 0 && i === void 0 ? (r = n) : (r = e(r, n, s));
      }),
      r
    );
  }
  function rm(t, e) {
    var i,
      r,
      n,
      s,
      a,
      o,
      l,
      h,
      g,
      _,
      E = 0,
      P = t.type === 'FeatureCollection',
      T = t.type === 'Feature',
      G = P ? t.features.length : 1;
    for (i = 0; i < G; i++) {
      for (
        o = P ? t.features[i].geometry : T ? t.geometry : t,
          h = P ? t.features[i].properties : T ? t.properties : {},
          g = P ? t.features[i].bbox : T ? t.bbox : void 0,
          _ = P ? t.features[i].id : T ? t.id : void 0,
          l = o ? o.type === 'GeometryCollection' : !1,
          a = l ? o.geometries.length : 1,
          n = 0;
        n < a;
        n++
      ) {
        if (((s = l ? o.geometries[n] : o), s === null)) {
          if (e(null, E, h, g, _) === !1) return !1;
          continue;
        }
        switch (s.type) {
          case 'Point':
          case 'LineString':
          case 'MultiPoint':
          case 'Polygon':
          case 'MultiLineString':
          case 'MultiPolygon': {
            if (e(s, E, h, g, _) === !1) return !1;
            break;
          }
          case 'GeometryCollection': {
            for (r = 0; r < s.geometries.length; r++)
              if (e(s.geometries[r], E, h, g, _) === !1) return !1;
            break;
          }
          default:
            throw new Error('Unknown Geometry Type');
        }
      }
      E++;
    }
  }
  function te(t, e) {
    rm(t, function (i, r, n, s, a) {
      var o = i === null ? null : i.type;
      switch (o) {
        case null:
        case 'Point':
        case 'LineString':
        case 'Polygon':
          return e(Rt(i, n, { bbox: s, id: a }), r, 0) === !1 ? !1 : void 0;
      }
      var l;
      switch (o) {
        case 'MultiPoint':
          l = 'Point';
          break;
        case 'MultiLineString':
          l = 'LineString';
          break;
        case 'MultiPolygon':
          l = 'Polygon';
          break;
      }
      for (var h = 0; h < i.coordinates.length; h++) {
        var g = i.coordinates[h],
          _ = { type: l, coordinates: g };
        if (e(Rt(_, n), r, h) === !1) return !1;
      }
    });
  }
  function nm(t) {
    if (!t) throw new Error('geojson is required');
    var e = [];
    return (
      te(t, function (i) {
        sm(i, e);
      }),
      mt(e)
    );
  }
  function sm(t, e) {
    var i = [],
      r = t.geometry;
    if (r !== null) {
      switch (r.type) {
        case 'Polygon':
          i = at(r);
          break;
        case 'LineString':
          i = [at(r)];
      }
      i.forEach(function (n) {
        var s = am(n, t.properties);
        s.forEach(function (a) {
          (a.id = e.length), e.push(a);
        });
      });
    }
  }
  function am(t, e) {
    var i = [];
    return (
      t.reduce(function (r, n) {
        var s = Mt([r, n], e);
        return (s.bbox = om(r, n)), i.push(s), n;
      }),
      i
    );
  }
  function om(t, e) {
    var i = t[0],
      r = t[1],
      n = e[0],
      s = e[1],
      a = i < n ? i : n,
      o = r < s ? r : s,
      l = i > n ? i : n,
      h = r > s ? r : s;
    return [a, o, l, h];
  }
  var be = nm;
  var nl = kt(Ai(), 1);
  function Om(t, e) {
    var i = {},
      r = [];
    if (
      (t.type === 'LineString' && (t = Rt(t)),
      e.type === 'LineString' && (e = Rt(e)),
      t.type === 'Feature' &&
        e.type === 'Feature' &&
        t.geometry !== null &&
        e.geometry !== null &&
        t.geometry.type === 'LineString' &&
        e.geometry.type === 'LineString' &&
        t.geometry.coordinates.length === 2 &&
        e.geometry.coordinates.length === 2)
    ) {
      var n = rl(t, e);
      return n && r.push(n), mt(r);
    }
    var s = (0, nl.default)();
    return (
      s.load(be(e)),
      Nt(be(t), function (a) {
        Nt(s.search(a), function (o) {
          var l = rl(a, o);
          if (l) {
            var h = at(l).join(',');
            i[h] || ((i[h] = !0), r.push(l));
          }
        });
      }),
      mt(r)
    );
  }
  function rl(t, e) {
    var i = at(t),
      r = at(e);
    if (i.length !== 2)
      throw new Error('<intersects> line1 must only contain 2 coordinates');
    if (r.length !== 2)
      throw new Error('<intersects> line2 must only contain 2 coordinates');
    var n = i[0][0],
      s = i[0][1],
      a = i[1][0],
      o = i[1][1],
      l = r[0][0],
      h = r[0][1],
      g = r[1][0],
      _ = r[1][1],
      E = (_ - h) * (a - n) - (g - l) * (o - s),
      P = (g - l) * (s - h) - (_ - h) * (n - l),
      T = (a - n) * (s - h) - (o - s) * (n - l);
    if (E === 0) return null;
    var G = P / E,
      m = T / E;
    if (G >= 0 && G <= 1 && m >= 0 && m <= 1) {
      var x = n + G * (a - n),
        v = s + G * (o - s);
      return gt([x, v]);
    }
    return null;
  }
  var ut = Om;
  var zi = kt(Ai(), 1);
  function Im(t, e, i) {
    i === void 0 && (i = {});
    var r = it(t),
      n = it(e),
      s = ot(n[1] - r[1]),
      a = ot(n[0] - r[0]),
      o = ot(r[1]),
      l = ot(n[1]),
      h =
        Math.pow(Math.sin(s / 2), 2) +
        Math.pow(Math.sin(a / 2), 2) * Math.cos(o) * Math.cos(l);
    return No(2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)), i.units);
  }
  var xt = Im;
  function Am(t) {
    var e = t[0],
      i = t[1],
      r = t[2],
      n = t[3],
      s = xt(t.slice(0, 2), [r, i]),
      a = xt(t.slice(0, 2), [e, n]);
    if (s >= a) {
      var o = (i + n) / 2;
      return [e, o - (r - e) / 2, r, o + (r - e) / 2];
    } else {
      var l = (e + r) / 2;
      return [l - (n - i) / 2, i, l + (n - i) / 2, n];
    }
  }
  var sl = Am;
  function Gi(t) {
    var e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return (
      ve(t, function (i) {
        e[0] > i[0] && (e[0] = i[0]),
          e[1] > i[1] && (e[1] = i[1]),
          e[2] < i[0] && (e[2] = i[0]),
          e[3] < i[1] && (e[3] = i[1]);
      }),
      e
    );
  }
  Gi.default = Gi;
  var zt = Gi;
  function Gm(t, e) {
    e === void 0 && (e = {});
    var i = e.precision,
      r = e.coordinates,
      n = e.mutate;
    if (
      ((i = i == null || isNaN(i) ? 6 : i),
      (r = r == null || isNaN(r) ? 3 : r),
      !t)
    )
      throw new Error('<geojson> is required');
    if (typeof i != 'number') throw new Error('<precision> must be a number');
    if (typeof r != 'number') throw new Error('<coordinates> must be a number');
    (n === !1 || n === void 0) && (t = JSON.parse(JSON.stringify(t)));
    var s = Math.pow(10, i);
    return (
      ve(t, function (a) {
        qm(a, s, r);
      }),
      t
    );
  }
  function qm(t, e, i) {
    t.length > i && t.splice(i, t.length);
    for (var r = 0; r < t.length; r++) t[r] = Math.round(t[r] * e) / e;
    return t;
  }
  var al = Gm;
  function ze(t, e, i) {
    if ((i === void 0 && (i = {}), i.final === !0)) return Nm(t, e);
    var r = it(t),
      n = it(e),
      s = ot(r[0]),
      a = ot(n[0]),
      o = ot(r[1]),
      l = ot(n[1]),
      h = Math.sin(a - s) * Math.cos(l),
      g =
        Math.cos(o) * Math.sin(l) - Math.sin(o) * Math.cos(l) * Math.cos(a - s);
    return Le(Math.atan2(h, g));
  }
  function Nm(t, e) {
    var i = ze(e, t);
    return (i = (i + 180) % 360), i;
  }
  function Fe(t, e, i, r) {
    r === void 0 && (r = {});
    var n = it(t),
      s = ot(n[0]),
      a = ot(n[1]),
      o = ot(i),
      l = zo(e, r.units),
      h = Math.asin(
        Math.sin(a) * Math.cos(l) + Math.cos(a) * Math.sin(l) * Math.cos(o)
      ),
      g =
        s +
        Math.atan2(
          Math.sin(o) * Math.sin(l) * Math.cos(a),
          Math.cos(l) - Math.sin(a) * Math.sin(h)
        ),
      _ = Le(g),
      E = Le(h);
    return gt([_, E], r.properties);
  }
  function zm(t, e, i) {
    i === void 0 && (i = {});
    var r = gt([1 / 0, 1 / 0], { dist: 1 / 0 }),
      n = 0;
    return (
      te(t, function (s) {
        for (var a = at(s), o = 0; o < a.length - 1; o++) {
          var l = gt(a[o]);
          l.properties.dist = xt(e, l, i);
          var h = gt(a[o + 1]);
          h.properties.dist = xt(e, h, i);
          var g = xt(l, h, i),
            _ = Math.max(l.properties.dist, h.properties.dist),
            E = ze(l, h),
            P = Fe(e, _, E + 90, i),
            T = Fe(e, _, E - 90, i),
            G = ut(
              Mt([P.geometry.coordinates, T.geometry.coordinates]),
              Mt([l.geometry.coordinates, h.geometry.coordinates])
            ),
            m = null;
          G.features.length > 0 &&
            ((m = G.features[0]),
            (m.properties.dist = xt(e, m, i)),
            (m.properties.location = n + xt(l, m, i))),
            l.properties.dist < r.properties.dist &&
              ((r = l), (r.properties.index = o), (r.properties.location = n)),
            h.properties.dist < r.properties.dist &&
              ((r = h),
              (r.properties.index = o + 1),
              (r.properties.location = n + g)),
            m &&
              m.properties.dist < r.properties.dist &&
              ((r = m), (r.properties.index = o)),
            (n += g);
        }
      }),
      r
    );
  }
  var ol = zm;
  function Fm(t, e) {
    if (!t) throw new Error('line is required');
    if (!e) throw new Error('splitter is required');
    var i = Mi(t),
      r = Mi(e);
    if (i !== 'LineString') throw new Error('line must be LineString');
    if (r === 'FeatureCollection')
      throw new Error('splitter cannot be a FeatureCollection');
    if (r === 'GeometryCollection')
      throw new Error('splitter cannot be a GeometryCollection');
    var n = al(e, { precision: 7 });
    switch (r) {
      case 'Point':
        return Ni(t, n);
      case 'MultiPoint':
        return ll(t, n);
      case 'LineString':
      case 'MultiLineString':
      case 'Polygon':
      case 'MultiPolygon':
        return ll(t, ut(t, n));
    }
  }
  function ll(t, e) {
    var i = [],
      r = (0, zi.default)();
    return (
      te(e, function (n) {
        if (
          (i.forEach(function (o, l) {
            o.id = l;
          }),
          !i.length)
        )
          (i = Ni(t, n).features),
            i.forEach(function (o) {
              o.bbox || (o.bbox = sl(zt(o)));
            }),
            r.load(mt(i));
        else {
          var s = r.search(n);
          if (s.features.length) {
            var a = hl(n, s);
            (i = i.filter(function (o) {
              return o.id !== a.id;
            })),
              r.remove(a),
              Nt(Ni(a, n), function (o) {
                i.push(o), r.insert(o);
              });
          }
        }
      }),
      mt(i)
    );
  }
  function Ni(t, e) {
    var i = [],
      r = at(t)[0],
      n = at(t)[t.geometry.coordinates.length - 1];
    if (qi(r, it(e)) || qi(n, it(e))) return mt([t]);
    var s = (0, zi.default)(),
      a = be(t);
    s.load(a);
    var o = s.search(e);
    if (!o.features.length) return mt([t]);
    var l = hl(e, o),
      h = [r],
      g = Fo(
        a,
        function (_, E, P) {
          var T = at(E)[1],
            G = it(e);
          return P === l.id
            ? (_.push(G), i.push(Mt(_)), qi(G, T) ? [G] : [G, T])
            : (_.push(T), _);
        },
        h
      );
    return g.length > 1 && i.push(Mt(g)), mt(i);
  }
  function hl(t, e) {
    if (!e.features.length) throw new Error('lines must contain features');
    if (e.features.length === 1) return e.features[0];
    var i,
      r = 1 / 0;
    return (
      Nt(e, function (n) {
        var s = ol(n, t),
          a = s.properties.dist;
        a < r && ((i = n), (r = a));
      }),
      i
    );
  }
  function qi(t, e) {
    return t[0] === e[0] && t[1] === e[1];
  }
  var ul = Fm;
  function ie(t, e, i) {
    if ((i === void 0 && (i = {}), !t)) throw new Error('point is required');
    if (!e) throw new Error('polygon is required');
    var r = it(t),
      n = Qt(e),
      s = n.type,
      a = e.bbox,
      o = n.coordinates;
    if (a && Vm(r, a) === !1) return !1;
    s === 'Polygon' && (o = [o]);
    for (var l = !1, h = 0; h < o.length && !l; h++)
      if (cl(r, o[h][0], i.ignoreBoundary)) {
        for (var g = !1, _ = 1; _ < o[h].length && !g; )
          cl(r, o[h][_], !i.ignoreBoundary) && (g = !0), _++;
        g || (l = !0);
      }
    return l;
  }
  function cl(t, e, i) {
    var r = !1;
    e[0][0] === e[e.length - 1][0] &&
      e[0][1] === e[e.length - 1][1] &&
      (e = e.slice(0, e.length - 1));
    for (var n = 0, s = e.length - 1; n < e.length; s = n++) {
      var a = e[n][0],
        o = e[n][1],
        l = e[s][0],
        h = e[s][1],
        g =
          t[1] * (a - l) + o * (l - t[0]) + h * (t[0] - a) === 0 &&
          (a - t[0]) * (l - t[0]) <= 0 &&
          (o - t[1]) * (h - t[1]) <= 0;
      if (g) return !i;
      var _ =
        o > t[1] != h > t[1] && t[0] < ((l - a) * (t[1] - o)) / (h - o) + a;
      _ && (r = !r);
    }
    return r;
  }
  function Vm(t, e) {
    return e[0] <= t[0] && e[1] <= t[1] && e[2] >= t[0] && e[3] >= t[1];
  }
  function Um(t, e, i) {
    i === void 0 && (i = {});
    for (var r = it(t), n = at(e), s = 0; s < n.length - 1; s++) {
      var a = !1;
      if (
        (i.ignoreEndVertices &&
          (s === 0 && (a = 'start'),
          s === n.length - 2 && (a = 'end'),
          s === 0 && s + 1 === n.length - 1 && (a = 'both')),
        Km(n[s], n[s + 1], r, a, typeof i.epsilon > 'u' ? null : i.epsilon))
      )
        return !0;
    }
    return !1;
  }
  function Km(t, e, i, r, n) {
    var s = i[0],
      a = i[1],
      o = t[0],
      l = t[1],
      h = e[0],
      g = e[1],
      _ = i[0] - o,
      E = i[1] - l,
      P = h - o,
      T = g - l,
      G = _ * T - E * P;
    if (n !== null) {
      if (Math.abs(G) > n) return !1;
    } else if (G !== 0) return !1;
    if (r) {
      if (r === 'start')
        return Math.abs(P) >= Math.abs(T)
          ? P > 0
            ? o < s && s <= h
            : h <= s && s < o
          : T > 0
            ? l < a && a <= g
            : g <= a && a < l;
      if (r === 'end')
        return Math.abs(P) >= Math.abs(T)
          ? P > 0
            ? o <= s && s < h
            : h < s && s <= o
          : T > 0
            ? l <= a && a < g
            : g < a && a <= l;
      if (r === 'both')
        return Math.abs(P) >= Math.abs(T)
          ? P > 0
            ? o < s && s < h
            : h < s && s < o
          : T > 0
            ? l < a && a < g
            : g < a && a < l;
    } else
      return Math.abs(P) >= Math.abs(T)
        ? P > 0
          ? o <= s && s <= h
          : h <= s && s <= o
        : T > 0
          ? l <= a && a <= g
          : g <= a && a <= l;
    return !1;
  }
  var re = Um;
  function Fi(t, e) {
    var i = Qt(t),
      r = Qt(e),
      n = i.type,
      s = r.type,
      a = i.coordinates,
      o = r.coordinates;
    switch (n) {
      case 'Point':
        switch (s) {
          case 'Point':
            return Vi(a, o);
          default:
            throw new Error('feature2 ' + s + ' geometry not supported');
        }
      case 'MultiPoint':
        switch (s) {
          case 'Point':
            return jm(i, r);
          case 'MultiPoint':
            return Hm(i, r);
          default:
            throw new Error('feature2 ' + s + ' geometry not supported');
        }
      case 'LineString':
        switch (s) {
          case 'Point':
            return re(r, i, { ignoreEndVertices: !0 });
          case 'LineString':
            return Jm(i, r);
          case 'MultiPoint':
            return Xm(i, r);
          default:
            throw new Error('feature2 ' + s + ' geometry not supported');
        }
      case 'Polygon':
        switch (s) {
          case 'Point':
            return ie(r, i, { ignoreBoundary: !0 });
          case 'LineString':
            return $m(i, r);
          case 'Polygon':
            return Zm(i, r);
          case 'MultiPoint':
            return Ym(i, r);
          default:
            throw new Error('feature2 ' + s + ' geometry not supported');
        }
      default:
        throw new Error('feature1 ' + n + ' geometry not supported');
    }
  }
  function jm(t, e) {
    var i,
      r = !1;
    for (i = 0; i < t.coordinates.length; i++)
      if (Vi(t.coordinates[i], e.coordinates)) {
        r = !0;
        break;
      }
    return r;
  }
  function Hm(t, e) {
    for (var i = 0, r = e.coordinates; i < r.length; i++) {
      for (var n = r[i], s = !1, a = 0, o = t.coordinates; a < o.length; a++) {
        var l = o[a];
        if (Vi(n, l)) {
          s = !0;
          break;
        }
      }
      if (!s) return !1;
    }
    return !0;
  }
  function Xm(t, e) {
    for (var i = !1, r = 0, n = e.coordinates; r < n.length; r++) {
      var s = n[r];
      if ((re(s, t, { ignoreEndVertices: !0 }) && (i = !0), !re(s, t)))
        return !1;
    }
    return !!i;
  }
  function Ym(t, e) {
    for (var i = 0, r = e.coordinates; i < r.length; i++) {
      var n = r[i];
      if (!ie(n, t, { ignoreBoundary: !0 })) return !1;
    }
    return !0;
  }
  function Jm(t, e) {
    for (var i = !1, r = 0, n = e.coordinates; r < n.length; r++) {
      var s = n[r];
      if (
        (re({ type: 'Point', coordinates: s }, t, { ignoreEndVertices: !0 }) &&
          (i = !0),
        !re({ type: 'Point', coordinates: s }, t, { ignoreEndVertices: !1 }))
      )
        return !1;
    }
    return i;
  }
  function $m(t, e) {
    var i = !1,
      r = 0,
      n = zt(t),
      s = zt(e);
    if (!pl(n, s)) return !1;
    for (r; r < e.coordinates.length - 1; r++) {
      var a = Wm(e.coordinates[r], e.coordinates[r + 1]);
      if (ie({ type: 'Point', coordinates: a }, t, { ignoreBoundary: !0 })) {
        i = !0;
        break;
      }
    }
    return i;
  }
  function Zm(t, e) {
    if (
      (t.type === 'Feature' && t.geometry === null) ||
      (e.type === 'Feature' && e.geometry === null)
    )
      return !1;
    var i = zt(t),
      r = zt(e);
    if (!pl(i, r)) return !1;
    for (var n = Qt(e).coordinates, s = 0, a = n; s < a.length; s++)
      for (var o = a[s], l = 0, h = o; l < h.length; l++) {
        var g = h[l];
        if (!ie(g, t)) return !1;
      }
    return !0;
  }
  function pl(t, e) {
    return !(t[0] > e[0] || t[2] < e[2] || t[1] > e[1] || t[3] < e[3]);
  }
  function Vi(t, e) {
    return t[0] === e[0] && t[1] === e[1];
  }
  function Wm(t, e) {
    return [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2];
  }
  var Ol = kt(ge());
  var Qm = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    Ui = Math.ceil,
    pt = Math.floor,
    lt = '[BigNumber Error] ',
    fl = lt + 'Number primitive has more than 15 significant digits: ',
    _t = 1e14,
    F = 14,
    Ki = 9007199254740991,
    ji = [
      1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13,
    ],
    Ot = 1e7,
    tt = 1e9;
  function dl(t) {
    var e,
      i,
      r,
      n = (v.prototype = { constructor: v, toString: null, valueOf: null }),
      s = new v(1),
      a = 20,
      o = 4,
      l = -7,
      h = 21,
      g = -1e7,
      _ = 1e7,
      E = !1,
      P = 1,
      T = 0,
      G = {
        prefix: '',
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ',',
        decimalSeparator: '.',
        fractionGroupSize: 0,
        fractionGroupSeparator: '\xA0',
        suffix: '',
      },
      m = '0123456789abcdefghijklmnopqrstuvwxyz',
      x = !0;
    function v(u, c) {
      var p,
        y,
        f,
        k,
        C,
        d,
        b,
        w,
        M = this;
      if (!(M instanceof v)) return new v(u, c);
      if (c == null) {
        if (u && u._isBigNumber === !0) {
          (M.s = u.s),
            !u.c || u.e > _
              ? (M.c = M.e = null)
              : u.e < g
                ? (M.c = [(M.e = 0)])
                : ((M.e = u.e), (M.c = u.c.slice()));
          return;
        }
        if ((d = typeof u == 'number') && u * 0 == 0) {
          if (((M.s = 1 / u < 0 ? ((u = -u), -1) : 1), u === ~~u)) {
            for (k = 0, C = u; C >= 10; C /= 10, k++);
            k > _ ? (M.c = M.e = null) : ((M.e = k), (M.c = [u]));
            return;
          }
          w = String(u);
        } else {
          if (!Qm.test((w = String(u)))) return r(M, w, d);
          M.s = w.charCodeAt(0) == 45 ? ((w = w.slice(1)), -1) : 1;
        }
        (k = w.indexOf('.')) > -1 && (w = w.replace('.', '')),
          (C = w.search(/e/i)) > 0
            ? (k < 0 && (k = C),
              (k += +w.slice(C + 1)),
              (w = w.substring(0, C)))
            : k < 0 && (k = w.length);
      } else {
        if ((J(c, 2, m.length, 'Base'), c == 10 && x))
          return (M = new v(u)), I(M, a + M.e + 1, o);
        if (((w = String(u)), (d = typeof u == 'number'))) {
          if (u * 0 != 0) return r(M, w, d, c);
          if (
            ((M.s = 1 / u < 0 ? ((w = w.slice(1)), -1) : 1),
            v.DEBUG && w.replace(/^0\.0*|\./, '').length > 15)
          )
            throw Error(fl + u);
        } else M.s = w.charCodeAt(0) === 45 ? ((w = w.slice(1)), -1) : 1;
        for (p = m.slice(0, c), k = C = 0, b = w.length; C < b; C++)
          if (p.indexOf((y = w.charAt(C))) < 0) {
            if (y == '.') {
              if (C > k) {
                k = b;
                continue;
              }
            } else if (
              !f &&
              ((w == w.toUpperCase() && (w = w.toLowerCase())) ||
                (w == w.toLowerCase() && (w = w.toUpperCase())))
            ) {
              (f = !0), (C = -1), (k = 0);
              continue;
            }
            return r(M, String(u), d, c);
          }
        (d = !1),
          (w = i(w, c, 10, M.s)),
          (k = w.indexOf('.')) > -1 ? (w = w.replace('.', '')) : (k = w.length);
      }
      for (C = 0; w.charCodeAt(C) === 48; C++);
      for (b = w.length; w.charCodeAt(--b) === 48; );
      if ((w = w.slice(C, ++b))) {
        if (((b -= C), d && v.DEBUG && b > 15 && (u > Ki || u !== pt(u))))
          throw Error(fl + M.s * u);
        if ((k = k - C - 1) > _) M.c = M.e = null;
        else if (k < g) M.c = [(M.e = 0)];
        else {
          if (
            ((M.e = k), (M.c = []), (C = (k + 1) % F), k < 0 && (C += F), C < b)
          ) {
            for (C && M.c.push(+w.slice(0, C)), b -= F; C < b; )
              M.c.push(+w.slice(C, (C += F)));
            C = F - (w = w.slice(C)).length;
          } else C -= b;
          for (; C--; w += '0');
          M.c.push(+w);
        }
      } else M.c = [(M.e = 0)];
    }
    (v.clone = dl),
      (v.ROUND_UP = 0),
      (v.ROUND_DOWN = 1),
      (v.ROUND_CEIL = 2),
      (v.ROUND_FLOOR = 3),
      (v.ROUND_HALF_UP = 4),
      (v.ROUND_HALF_DOWN = 5),
      (v.ROUND_HALF_EVEN = 6),
      (v.ROUND_HALF_CEIL = 7),
      (v.ROUND_HALF_FLOOR = 8),
      (v.EUCLID = 9),
      (v.config = v.set =
        function (u) {
          var c, p;
          if (u != null)
            if (typeof u == 'object') {
              if (
                (u.hasOwnProperty((c = 'DECIMAL_PLACES')) &&
                  ((p = u[c]), J(p, 0, tt, c), (a = p)),
                u.hasOwnProperty((c = 'ROUNDING_MODE')) &&
                  ((p = u[c]), J(p, 0, 8, c), (o = p)),
                u.hasOwnProperty((c = 'EXPONENTIAL_AT')) &&
                  ((p = u[c]),
                  p && p.pop
                    ? (J(p[0], -tt, 0, c),
                      J(p[1], 0, tt, c),
                      (l = p[0]),
                      (h = p[1]))
                    : (J(p, -tt, tt, c), (l = -(h = p < 0 ? -p : p)))),
                u.hasOwnProperty((c = 'RANGE')))
              )
                if (((p = u[c]), p && p.pop))
                  J(p[0], -tt, -1, c),
                    J(p[1], 1, tt, c),
                    (g = p[0]),
                    (_ = p[1]);
                else if ((J(p, -tt, tt, c), p)) g = -(_ = p < 0 ? -p : p);
                else throw Error(lt + c + ' cannot be zero: ' + p);
              if (u.hasOwnProperty((c = 'CRYPTO')))
                if (((p = u[c]), p === !!p))
                  if (p)
                    if (
                      typeof crypto < 'u' &&
                      crypto &&
                      (crypto.getRandomValues || crypto.randomBytes)
                    )
                      E = p;
                    else throw ((E = !p), Error(lt + 'crypto unavailable'));
                  else E = p;
                else throw Error(lt + c + ' not true or false: ' + p);
              if (
                (u.hasOwnProperty((c = 'MODULO_MODE')) &&
                  ((p = u[c]), J(p, 0, 9, c), (P = p)),
                u.hasOwnProperty((c = 'POW_PRECISION')) &&
                  ((p = u[c]), J(p, 0, tt, c), (T = p)),
                u.hasOwnProperty((c = 'FORMAT')))
              )
                if (((p = u[c]), typeof p == 'object')) G = p;
                else throw Error(lt + c + ' not an object: ' + p);
              if (u.hasOwnProperty((c = 'ALPHABET')))
                if (
                  ((p = u[c]),
                  typeof p == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(p))
                )
                  (x = p.slice(0, 10) == '0123456789'), (m = p);
                else throw Error(lt + c + ' invalid: ' + p);
            } else throw Error(lt + 'Object expected: ' + u);
          return {
            DECIMAL_PLACES: a,
            ROUNDING_MODE: o,
            EXPONENTIAL_AT: [l, h],
            RANGE: [g, _],
            CRYPTO: E,
            MODULO_MODE: P,
            POW_PRECISION: T,
            FORMAT: G,
            ALPHABET: m,
          };
        }),
      (v.isBigNumber = function (u) {
        if (!u || u._isBigNumber !== !0) return !1;
        if (!v.DEBUG) return !0;
        var c,
          p,
          y = u.c,
          f = u.e,
          k = u.s;
        t: if ({}.toString.call(y) == '[object Array]') {
          if ((k === 1 || k === -1) && f >= -tt && f <= tt && f === pt(f)) {
            if (y[0] === 0) {
              if (f === 0 && y.length === 1) return !0;
              break t;
            }
            if (
              ((c = (f + 1) % F), c < 1 && (c += F), String(y[0]).length == c)
            ) {
              for (c = 0; c < y.length; c++)
                if (((p = y[c]), p < 0 || p >= _t || p !== pt(p))) break t;
              if (p !== 0) return !0;
            }
          }
        } else if (
          y === null &&
          f === null &&
          (k === null || k === 1 || k === -1)
        )
          return !0;
        throw Error(lt + 'Invalid BigNumber: ' + u);
      }),
      (v.maximum = v.max =
        function () {
          return D(arguments, -1);
        }),
      (v.minimum = v.min =
        function () {
          return D(arguments, 1);
        }),
      (v.random = (function () {
        var u = 9007199254740992,
          c =
            (Math.random() * u) & 2097151
              ? function () {
                  return pt(Math.random() * u);
                }
              : function () {
                  return (
                    ((Math.random() * 1073741824) | 0) * 8388608 +
                    ((Math.random() * 8388608) | 0)
                  );
                };
        return function (p) {
          var y,
            f,
            k,
            C,
            d,
            b = 0,
            w = [],
            M = new v(s);
          if ((p == null ? (p = a) : J(p, 0, tt), (C = Ui(p / F)), E))
            if (crypto.getRandomValues) {
              for (
                y = crypto.getRandomValues(new Uint32Array((C *= 2)));
                b < C;

              )
                (d = y[b] * 131072 + (y[b + 1] >>> 11)),
                  d >= 9e15
                    ? ((f = crypto.getRandomValues(new Uint32Array(2))),
                      (y[b] = f[0]),
                      (y[b + 1] = f[1]))
                    : (w.push(d % 1e14), (b += 2));
              b = C / 2;
            } else if (crypto.randomBytes) {
              for (y = crypto.randomBytes((C *= 7)); b < C; )
                (d =
                  (y[b] & 31) * 281474976710656 +
                  y[b + 1] * 1099511627776 +
                  y[b + 2] * 4294967296 +
                  y[b + 3] * 16777216 +
                  (y[b + 4] << 16) +
                  (y[b + 5] << 8) +
                  y[b + 6]),
                  d >= 9e15
                    ? crypto.randomBytes(7).copy(y, b)
                    : (w.push(d % 1e14), (b += 7));
              b = C / 7;
            } else throw ((E = !1), Error(lt + 'crypto unavailable'));
          if (!E) for (; b < C; ) (d = c()), d < 9e15 && (w[b++] = d % 1e14);
          for (
            C = w[--b],
              p %= F,
              C && p && ((d = ji[F - p]), (w[b] = pt(C / d) * d));
            w[b] === 0;
            w.pop(), b--
          );
          if (b < 0) w = [(k = 0)];
          else {
            for (k = -1; w[0] === 0; w.splice(0, 1), k -= F);
            for (b = 1, d = w[0]; d >= 10; d /= 10, b++);
            b < F && (k -= F - b);
          }
          return (M.e = k), (M.c = w), M;
        };
      })()),
      (v.sum = function () {
        for (var u = 1, c = arguments, p = new v(c[0]); u < c.length; )
          p = p.plus(c[u++]);
        return p;
      }),
      (i = (function () {
        var u = '0123456789';
        function c(p, y, f, k) {
          for (var C, d = [0], b, w = 0, M = p.length; w < M; ) {
            for (b = d.length; b--; d[b] *= y);
            for (d[0] += k.indexOf(p.charAt(w++)), C = 0; C < d.length; C++)
              d[C] > f - 1 &&
                (d[C + 1] == null && (d[C + 1] = 0),
                (d[C + 1] += (d[C] / f) | 0),
                (d[C] %= f));
          }
          return d.reverse();
        }
        return function (p, y, f, k, C) {
          var d,
            b,
            w,
            M,
            B,
            A,
            N,
            K,
            $ = p.indexOf('.'),
            W = a,
            U = o;
          for (
            $ >= 0 &&
              ((M = T),
              (T = 0),
              (p = p.replace('.', '')),
              (K = new v(y)),
              (A = K.pow(p.length - $)),
              (T = M),
              (K.c = c(wt(ct(A.c), A.e, '0'), 10, f, u)),
              (K.e = K.c.length)),
              N = c(p, y, f, C ? ((d = m), u) : ((d = u), m)),
              w = M = N.length;
            N[--M] == 0;
            N.pop()
          );
          if (!N[0]) return d.charAt(0);
          if (
            ($ < 0
              ? --w
              : ((A.c = N),
                (A.e = w),
                (A.s = k),
                (A = e(A, K, W, U, f)),
                (N = A.c),
                (B = A.r),
                (w = A.e)),
            (b = w + W + 1),
            ($ = N[b]),
            (M = f / 2),
            (B = B || b < 0 || N[b + 1] != null),
            (B =
              U < 4
                ? ($ != null || B) && (U == 0 || U == (A.s < 0 ? 3 : 2))
                : $ > M ||
                  ($ == M &&
                    (U == 4 ||
                      B ||
                      (U == 6 && N[b - 1] & 1) ||
                      U == (A.s < 0 ? 8 : 7)))),
            b < 1 || !N[0])
          )
            p = B ? wt(d.charAt(1), -W, d.charAt(0)) : d.charAt(0);
          else {
            if (((N.length = b), B))
              for (--f; ++N[--b] > f; )
                (N[b] = 0), b || (++w, (N = [1].concat(N)));
            for (M = N.length; !N[--M]; );
            for ($ = 0, p = ''; $ <= M; p += d.charAt(N[$++]));
            p = wt(p, w, d.charAt(0));
          }
          return p;
        };
      })()),
      (e = (function () {
        function u(y, f, k) {
          var C,
            d,
            b,
            w,
            M = 0,
            B = y.length,
            A = f % Ot,
            N = (f / Ot) | 0;
          for (y = y.slice(); B--; )
            (b = y[B] % Ot),
              (w = (y[B] / Ot) | 0),
              (C = N * b + w * A),
              (d = A * b + (C % Ot) * Ot + M),
              (M = ((d / k) | 0) + ((C / Ot) | 0) + N * w),
              (y[B] = d % k);
          return M && (y = [M].concat(y)), y;
        }
        function c(y, f, k, C) {
          var d, b;
          if (k != C) b = k > C ? 1 : -1;
          else
            for (d = b = 0; d < k; d++)
              if (y[d] != f[d]) {
                b = y[d] > f[d] ? 1 : -1;
                break;
              }
          return b;
        }
        function p(y, f, k, C) {
          for (var d = 0; k--; )
            (y[k] -= d),
              (d = y[k] < f[k] ? 1 : 0),
              (y[k] = d * C + y[k] - f[k]);
          for (; !y[0] && y.length > 1; y.splice(0, 1));
        }
        return function (y, f, k, C, d) {
          var b,
            w,
            M,
            B,
            A,
            N,
            K,
            $,
            W,
            U,
            j,
            et,
            Pe,
            Ze,
            We,
            yt,
            ne,
            ht = y.s == f.s ? 1 : -1,
            nt = y.c,
            Z = f.c;
          if (!nt || !nt[0] || !Z || !Z[0])
            return new v(
              !y.s || !f.s || (nt ? Z && nt[0] == Z[0] : !Z)
                ? NaN
                : (nt && nt[0] == 0) || !Z
                  ? ht * 0
                  : ht / 0
            );
          for (
            $ = new v(ht),
              W = $.c = [],
              w = y.e - f.e,
              ht = k + w + 1,
              d ||
                ((d = _t),
                (w = ft(y.e / F) - ft(f.e / F)),
                (ht = (ht / F) | 0)),
              M = 0;
            Z[M] == (nt[M] || 0);
            M++
          );
          if ((Z[M] > (nt[M] || 0) && w--, ht < 0)) W.push(1), (B = !0);
          else {
            for (
              Ze = nt.length,
                yt = Z.length,
                M = 0,
                ht += 2,
                A = pt(d / (Z[0] + 1)),
                A > 1 &&
                  ((Z = u(Z, A, d)),
                  (nt = u(nt, A, d)),
                  (yt = Z.length),
                  (Ze = nt.length)),
                Pe = yt,
                U = nt.slice(0, yt),
                j = U.length;
              j < yt;
              U[j++] = 0
            );
            (ne = Z.slice()),
              (ne = [0].concat(ne)),
              (We = Z[0]),
              Z[1] >= d / 2 && We++;
            do {
              if (((A = 0), (b = c(Z, U, yt, j)), b < 0)) {
                if (
                  ((et = U[0]),
                  yt != j && (et = et * d + (U[1] || 0)),
                  (A = pt(et / We)),
                  A > 1)
                )
                  for (
                    A >= d && (A = d - 1),
                      N = u(Z, A, d),
                      K = N.length,
                      j = U.length;
                    c(N, U, K, j) == 1;

                  )
                    A--, p(N, yt < K ? ne : Z, K, d), (K = N.length), (b = 1);
                else A == 0 && (b = A = 1), (N = Z.slice()), (K = N.length);
                if (
                  (K < j && (N = [0].concat(N)),
                  p(U, N, j, d),
                  (j = U.length),
                  b == -1)
                )
                  for (; c(Z, U, yt, j) < 1; )
                    A++, p(U, yt < j ? ne : Z, j, d), (j = U.length);
              } else b === 0 && (A++, (U = [0]));
              (W[M++] = A),
                U[0] ? (U[j++] = nt[Pe] || 0) : ((U = [nt[Pe]]), (j = 1));
            } while ((Pe++ < Ze || U[0] != null) && ht--);
            (B = U[0] != null), W[0] || W.splice(0, 1);
          }
          if (d == _t) {
            for (M = 1, ht = W[0]; ht >= 10; ht /= 10, M++);
            I($, k + ($.e = M + w * F - 1) + 1, C, B);
          } else ($.e = w), ($.r = +B);
          return $;
        };
      })());
    function R(u, c, p, y) {
      var f, k, C, d, b;
      if ((p == null ? (p = o) : J(p, 0, 8), !u.c)) return u.toString();
      if (((f = u.c[0]), (C = u.e), c == null))
        (b = ct(u.c)),
          (b =
            y == 1 || (y == 2 && (C <= l || C >= h))
              ? Ue(b, C)
              : wt(b, C, '0'));
      else if (
        ((u = I(new v(u), c, p)),
        (k = u.e),
        (b = ct(u.c)),
        (d = b.length),
        y == 1 || (y == 2 && (c <= k || k <= l)))
      ) {
        for (; d < c; b += '0', d++);
        b = Ue(b, k);
      } else if (((c -= C), (b = wt(b, k, '0')), k + 1 > d)) {
        if (--c > 0) for (b += '.'; c--; b += '0');
      } else if (((c += k - d), c > 0))
        for (k + 1 == d && (b += '.'); c--; b += '0');
      return u.s < 0 && f ? '-' + b : b;
    }
    function D(u, c) {
      for (var p, y, f = 1, k = new v(u[0]); f < u.length; f++)
        (y = new v(u[f])),
          (!y.s || (p = Ft(k, y)) === c || (p === 0 && k.s === c)) && (k = y);
      return k;
    }
    function O(u, c, p) {
      for (var y = 1, f = c.length; !c[--f]; c.pop());
      for (f = c[0]; f >= 10; f /= 10, y++);
      return (
        (p = y + p * F - 1) > _
          ? (u.c = u.e = null)
          : p < g
            ? (u.c = [(u.e = 0)])
            : ((u.e = p), (u.c = c)),
        u
      );
    }
    r = (function () {
      var u = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
        c = /^([^.]+)\.$/,
        p = /^\.([^.]+)$/,
        y = /^-?(Infinity|NaN)$/,
        f = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
      return function (k, C, d, b) {
        var w,
          M = d ? C : C.replace(f, '');
        if (y.test(M)) k.s = isNaN(M) ? null : M < 0 ? -1 : 1;
        else {
          if (
            !d &&
            ((M = M.replace(u, function (B, A, N) {
              return (
                (w = (N = N.toLowerCase()) == 'x' ? 16 : N == 'b' ? 2 : 8),
                !b || b == w ? A : B
              );
            })),
            b && ((w = b), (M = M.replace(c, '$1').replace(p, '0.$1'))),
            C != M)
          )
            return new v(M, w);
          if (v.DEBUG)
            throw Error(
              lt + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + C
            );
          k.s = null;
        }
        k.c = k.e = null;
      };
    })();
    function I(u, c, p, y) {
      var f,
        k,
        C,
        d,
        b,
        w,
        M,
        B = u.c,
        A = ji;
      if (B) {
        t: {
          for (f = 1, d = B[0]; d >= 10; d /= 10, f++);
          if (((k = c - f), k < 0))
            (k += F),
              (C = c),
              (b = B[(w = 0)]),
              (M = pt((b / A[f - C - 1]) % 10));
          else if (((w = Ui((k + 1) / F)), w >= B.length))
            if (y) {
              for (; B.length <= w; B.push(0));
              (b = M = 0), (f = 1), (k %= F), (C = k - F + 1);
            } else break t;
          else {
            for (b = d = B[w], f = 1; d >= 10; d /= 10, f++);
            (k %= F),
              (C = k - F + f),
              (M = C < 0 ? 0 : pt((b / A[f - C - 1]) % 10));
          }
          if (
            ((y =
              y || c < 0 || B[w + 1] != null || (C < 0 ? b : b % A[f - C - 1])),
            (y =
              p < 4
                ? (M || y) && (p == 0 || p == (u.s < 0 ? 3 : 2))
                : M > 5 ||
                  (M == 5 &&
                    (p == 4 ||
                      y ||
                      (p == 6 &&
                        (k > 0 ? (C > 0 ? b / A[f - C] : 0) : B[w - 1]) % 10 &
                          1) ||
                      p == (u.s < 0 ? 8 : 7)))),
            c < 1 || !B[0])
          )
            return (
              (B.length = 0),
              y
                ? ((c -= u.e + 1),
                  (B[0] = A[(F - (c % F)) % F]),
                  (u.e = -c || 0))
                : (B[0] = u.e = 0),
              u
            );
          if (
            (k == 0
              ? ((B.length = w), (d = 1), w--)
              : ((B.length = w + 1),
                (d = A[F - k]),
                (B[w] = C > 0 ? pt((b / A[f - C]) % A[C]) * d : 0)),
            y)
          )
            for (;;)
              if (w == 0) {
                for (k = 1, C = B[0]; C >= 10; C /= 10, k++);
                for (C = B[0] += d, d = 1; C >= 10; C /= 10, d++);
                k != d && (u.e++, B[0] == _t && (B[0] = 1));
                break;
              } else {
                if (((B[w] += d), B[w] != _t)) break;
                (B[w--] = 0), (d = 1);
              }
          for (k = B.length; B[--k] === 0; B.pop());
        }
        u.e > _ ? (u.c = u.e = null) : u.e < g && (u.c = [(u.e = 0)]);
      }
      return u;
    }
    function q(u) {
      var c,
        p = u.e;
      return p === null
        ? u.toString()
        : ((c = ct(u.c)),
          (c = p <= l || p >= h ? Ue(c, p) : wt(c, p, '0')),
          u.s < 0 ? '-' + c : c);
    }
    return (
      (n.absoluteValue = n.abs =
        function () {
          var u = new v(this);
          return u.s < 0 && (u.s = 1), u;
        }),
      (n.comparedTo = function (u, c) {
        return Ft(this, new v(u, c));
      }),
      (n.decimalPlaces = n.dp =
        function (u, c) {
          var p,
            y,
            f,
            k = this;
          if (u != null)
            return (
              J(u, 0, tt),
              c == null ? (c = o) : J(c, 0, 8),
              I(new v(k), u + k.e + 1, c)
            );
          if (!(p = k.c)) return null;
          if (((y = ((f = p.length - 1) - ft(this.e / F)) * F), (f = p[f])))
            for (; f % 10 == 0; f /= 10, y--);
          return y < 0 && (y = 0), y;
        }),
      (n.dividedBy = n.div =
        function (u, c) {
          return e(this, new v(u, c), a, o);
        }),
      (n.dividedToIntegerBy = n.idiv =
        function (u, c) {
          return e(this, new v(u, c), 0, 1);
        }),
      (n.exponentiatedBy = n.pow =
        function (u, c) {
          var p,
            y,
            f,
            k,
            C,
            d,
            b,
            w,
            M,
            B = this;
          if (((u = new v(u)), u.c && !u.isInteger()))
            throw Error(lt + 'Exponent not an integer: ' + q(u));
          if (
            (c != null && (c = new v(c)),
            (d = u.e > 14),
            !B.c ||
              !B.c[0] ||
              (B.c[0] == 1 && !B.e && B.c.length == 1) ||
              !u.c ||
              !u.c[0])
          )
            return (
              (M = new v(Math.pow(+q(B), d ? u.s * (2 - Ve(u)) : +q(u)))),
              c ? M.mod(c) : M
            );
          if (((b = u.s < 0), c)) {
            if (c.c ? !c.c[0] : !c.s) return new v(NaN);
            (y = !b && B.isInteger() && c.isInteger()), y && (B = B.mod(c));
          } else {
            if (
              u.e > 9 &&
              (B.e > 0 ||
                B.e < -1 ||
                (B.e == 0
                  ? B.c[0] > 1 || (d && B.c[1] >= 24e7)
                  : B.c[0] < 8e13 || (d && B.c[0] <= 9999975e7)))
            )
              return (
                (k = B.s < 0 && Ve(u) ? -0 : 0),
                B.e > -1 && (k = 1 / k),
                new v(b ? 1 / k : k)
              );
            T && (k = Ui(T / F + 2));
          }
          for (
            d
              ? ((p = new v(0.5)), b && (u.s = 1), (w = Ve(u)))
              : ((f = Math.abs(+q(u))), (w = f % 2)),
              M = new v(s);
            ;

          ) {
            if (w) {
              if (((M = M.times(B)), !M.c)) break;
              k ? M.c.length > k && (M.c.length = k) : y && (M = M.mod(c));
            }
            if (f) {
              if (((f = pt(f / 2)), f === 0)) break;
              w = f % 2;
            } else if (((u = u.times(p)), I(u, u.e + 1, 1), u.e > 14))
              w = Ve(u);
            else {
              if (((f = +q(u)), f === 0)) break;
              w = f % 2;
            }
            (B = B.times(B)),
              k
                ? B.c && B.c.length > k && (B.c.length = k)
                : y && (B = B.mod(c));
          }
          return y
            ? M
            : (b && (M = s.div(M)), c ? M.mod(c) : k ? I(M, T, o, C) : M);
        }),
      (n.integerValue = function (u) {
        var c = new v(this);
        return u == null ? (u = o) : J(u, 0, 8), I(c, c.e + 1, u);
      }),
      (n.isEqualTo = n.eq =
        function (u, c) {
          return Ft(this, new v(u, c)) === 0;
        }),
      (n.isFinite = function () {
        return !!this.c;
      }),
      (n.isGreaterThan = n.gt =
        function (u, c) {
          return Ft(this, new v(u, c)) > 0;
        }),
      (n.isGreaterThanOrEqualTo = n.gte =
        function (u, c) {
          return (c = Ft(this, new v(u, c))) === 1 || c === 0;
        }),
      (n.isInteger = function () {
        return !!this.c && ft(this.e / F) > this.c.length - 2;
      }),
      (n.isLessThan = n.lt =
        function (u, c) {
          return Ft(this, new v(u, c)) < 0;
        }),
      (n.isLessThanOrEqualTo = n.lte =
        function (u, c) {
          return (c = Ft(this, new v(u, c))) === -1 || c === 0;
        }),
      (n.isNaN = function () {
        return !this.s;
      }),
      (n.isNegative = function () {
        return this.s < 0;
      }),
      (n.isPositive = function () {
        return this.s > 0;
      }),
      (n.isZero = function () {
        return !!this.c && this.c[0] == 0;
      }),
      (n.minus = function (u, c) {
        var p,
          y,
          f,
          k,
          C = this,
          d = C.s;
        if (((u = new v(u, c)), (c = u.s), !d || !c)) return new v(NaN);
        if (d != c) return (u.s = -c), C.plus(u);
        var b = C.e / F,
          w = u.e / F,
          M = C.c,
          B = u.c;
        if (!b || !w) {
          if (!M || !B) return M ? ((u.s = -c), u) : new v(B ? C : NaN);
          if (!M[0] || !B[0])
            return B[0] ? ((u.s = -c), u) : new v(M[0] ? C : o == 3 ? -0 : 0);
        }
        if (((b = ft(b)), (w = ft(w)), (M = M.slice()), (d = b - w))) {
          for (
            (k = d < 0) ? ((d = -d), (f = M)) : ((w = b), (f = B)),
              f.reverse(),
              c = d;
            c--;
            f.push(0)
          );
          f.reverse();
        } else
          for (
            y = (k = (d = M.length) < (c = B.length)) ? d : c, d = c = 0;
            c < y;
            c++
          )
            if (M[c] != B[c]) {
              k = M[c] < B[c];
              break;
            }
        if (
          (k && ((f = M), (M = B), (B = f), (u.s = -u.s)),
          (c = (y = B.length) - (p = M.length)),
          c > 0)
        )
          for (; c--; M[p++] = 0);
        for (c = _t - 1; y > d; ) {
          if (M[--y] < B[y]) {
            for (p = y; p && !M[--p]; M[p] = c);
            --M[p], (M[y] += _t);
          }
          M[y] -= B[y];
        }
        for (; M[0] == 0; M.splice(0, 1), --w);
        return M[0]
          ? O(u, M, w)
          : ((u.s = o == 3 ? -1 : 1), (u.c = [(u.e = 0)]), u);
      }),
      (n.modulo = n.mod =
        function (u, c) {
          var p,
            y,
            f = this;
          return (
            (u = new v(u, c)),
            !f.c || !u.s || (u.c && !u.c[0])
              ? new v(NaN)
              : !u.c || (f.c && !f.c[0])
                ? new v(f)
                : (P == 9
                    ? ((y = u.s),
                      (u.s = 1),
                      (p = e(f, u, 0, 3)),
                      (u.s = y),
                      (p.s *= y))
                    : (p = e(f, u, 0, P)),
                  (u = f.minus(p.times(u))),
                  !u.c[0] && P == 1 && (u.s = f.s),
                  u)
          );
        }),
      (n.multipliedBy = n.times =
        function (u, c) {
          var p,
            y,
            f,
            k,
            C,
            d,
            b,
            w,
            M,
            B,
            A,
            N,
            K,
            $,
            W,
            U = this,
            j = U.c,
            et = (u = new v(u, c)).c;
          if (!j || !et || !j[0] || !et[0])
            return (
              !U.s || !u.s || (j && !j[0] && !et) || (et && !et[0] && !j)
                ? (u.c = u.e = u.s = null)
                : ((u.s *= U.s),
                  !j || !et ? (u.c = u.e = null) : ((u.c = [0]), (u.e = 0))),
              u
            );
          for (
            y = ft(U.e / F) + ft(u.e / F),
              u.s *= U.s,
              b = j.length,
              B = et.length,
              b < B && ((K = j), (j = et), (et = K), (f = b), (b = B), (B = f)),
              f = b + B,
              K = [];
            f--;
            K.push(0)
          );
          for ($ = _t, W = Ot, f = B; --f >= 0; ) {
            for (
              p = 0, A = et[f] % W, N = (et[f] / W) | 0, C = b, k = f + C;
              k > f;

            )
              (w = j[--C] % W),
                (M = (j[C] / W) | 0),
                (d = N * w + M * A),
                (w = A * w + (d % W) * W + K[k] + p),
                (p = ((w / $) | 0) + ((d / W) | 0) + N * M),
                (K[k--] = w % $);
            K[k] = p;
          }
          return p ? ++y : K.splice(0, 1), O(u, K, y);
        }),
      (n.negated = function () {
        var u = new v(this);
        return (u.s = -u.s || null), u;
      }),
      (n.plus = function (u, c) {
        var p,
          y = this,
          f = y.s;
        if (((u = new v(u, c)), (c = u.s), !f || !c)) return new v(NaN);
        if (f != c) return (u.s = -c), y.minus(u);
        var k = y.e / F,
          C = u.e / F,
          d = y.c,
          b = u.c;
        if (!k || !C) {
          if (!d || !b) return new v(f / 0);
          if (!d[0] || !b[0]) return b[0] ? u : new v(d[0] ? y : f * 0);
        }
        if (((k = ft(k)), (C = ft(C)), (d = d.slice()), (f = k - C))) {
          for (
            f > 0 ? ((C = k), (p = b)) : ((f = -f), (p = d)), p.reverse();
            f--;
            p.push(0)
          );
          p.reverse();
        }
        for (
          f = d.length,
            c = b.length,
            f - c < 0 && ((p = b), (b = d), (d = p), (c = f)),
            f = 0;
          c;

        )
          (f = ((d[--c] = d[c] + b[c] + f) / _t) | 0),
            (d[c] = _t === d[c] ? 0 : d[c] % _t);
        return f && ((d = [f].concat(d)), ++C), O(u, d, C);
      }),
      (n.precision = n.sd =
        function (u, c) {
          var p,
            y,
            f,
            k = this;
          if (u != null && u !== !!u)
            return (
              J(u, 1, tt), c == null ? (c = o) : J(c, 0, 8), I(new v(k), u, c)
            );
          if (!(p = k.c)) return null;
          if (((f = p.length - 1), (y = f * F + 1), (f = p[f]))) {
            for (; f % 10 == 0; f /= 10, y--);
            for (f = p[0]; f >= 10; f /= 10, y++);
          }
          return u && k.e + 1 > y && (y = k.e + 1), y;
        }),
      (n.shiftedBy = function (u) {
        return J(u, -Ki, Ki), this.times('1e' + u);
      }),
      (n.squareRoot = n.sqrt =
        function () {
          var u,
            c,
            p,
            y,
            f,
            k = this,
            C = k.c,
            d = k.s,
            b = k.e,
            w = a + 4,
            M = new v('0.5');
          if (d !== 1 || !C || !C[0])
            return new v(!d || (d < 0 && (!C || C[0])) ? NaN : C ? k : 1 / 0);
          if (
            ((d = Math.sqrt(+q(k))),
            d == 0 || d == 1 / 0
              ? ((c = ct(C)),
                (c.length + b) % 2 == 0 && (c += '0'),
                (d = Math.sqrt(+c)),
                (b = ft((b + 1) / 2) - (b < 0 || b % 2)),
                d == 1 / 0
                  ? (c = '5e' + b)
                  : ((c = d.toExponential()),
                    (c = c.slice(0, c.indexOf('e') + 1) + b)),
                (p = new v(c)))
              : (p = new v(d + '')),
            p.c[0])
          ) {
            for (b = p.e, d = b + w, d < 3 && (d = 0); ; )
              if (
                ((f = p),
                (p = M.times(f.plus(e(k, f, w, 1)))),
                ct(f.c).slice(0, d) === (c = ct(p.c)).slice(0, d))
              )
                if (
                  (p.e < b && --d,
                  (c = c.slice(d - 3, d + 1)),
                  c == '9999' || (!y && c == '4999'))
                ) {
                  if (!y && (I(f, f.e + a + 2, 0), f.times(f).eq(k))) {
                    p = f;
                    break;
                  }
                  (w += 4), (d += 4), (y = 1);
                } else {
                  (!+c || (!+c.slice(1) && c.charAt(0) == '5')) &&
                    (I(p, p.e + a + 2, 1), (u = !p.times(p).eq(k)));
                  break;
                }
          }
          return I(p, p.e + a + 1, o, u);
        }),
      (n.toExponential = function (u, c) {
        return u != null && (J(u, 0, tt), u++), R(this, u, c, 1);
      }),
      (n.toFixed = function (u, c) {
        return u != null && (J(u, 0, tt), (u = u + this.e + 1)), R(this, u, c);
      }),
      (n.toFormat = function (u, c, p) {
        var y,
          f = this;
        if (p == null)
          u != null && c && typeof c == 'object'
            ? ((p = c), (c = null))
            : u && typeof u == 'object'
              ? ((p = u), (u = c = null))
              : (p = G);
        else if (typeof p != 'object')
          throw Error(lt + 'Argument not an object: ' + p);
        if (((y = f.toFixed(u, c)), f.c)) {
          var k,
            C = y.split('.'),
            d = +p.groupSize,
            b = +p.secondaryGroupSize,
            w = p.groupSeparator || '',
            M = C[0],
            B = C[1],
            A = f.s < 0,
            N = A ? M.slice(1) : M,
            K = N.length;
          if ((b && ((k = d), (d = b), (b = k), (K -= k)), d > 0 && K > 0)) {
            for (k = K % d || d, M = N.substr(0, k); k < K; k += d)
              M += w + N.substr(k, d);
            b > 0 && (M += w + N.slice(k)), A && (M = '-' + M);
          }
          y = B
            ? M +
              (p.decimalSeparator || '') +
              ((b = +p.fractionGroupSize)
                ? B.replace(
                    new RegExp('\\d{' + b + '}\\B', 'g'),
                    '$&' + (p.fractionGroupSeparator || '')
                  )
                : B)
            : M;
        }
        return (p.prefix || '') + y + (p.suffix || '');
      }),
      (n.toFraction = function (u) {
        var c,
          p,
          y,
          f,
          k,
          C,
          d,
          b,
          w,
          M,
          B,
          A,
          N = this,
          K = N.c;
        if (
          u != null &&
          ((d = new v(u)), (!d.isInteger() && (d.c || d.s !== 1)) || d.lt(s))
        )
          throw Error(
            lt +
              'Argument ' +
              (d.isInteger() ? 'out of range: ' : 'not an integer: ') +
              q(d)
          );
        if (!K) return new v(N);
        for (
          c = new v(s),
            w = p = new v(s),
            y = b = new v(s),
            A = ct(K),
            k = c.e = A.length - N.e - 1,
            c.c[0] = ji[(C = k % F) < 0 ? F + C : C],
            u = !u || d.comparedTo(c) > 0 ? (k > 0 ? c : w) : d,
            C = _,
            _ = 1 / 0,
            d = new v(A),
            b.c[0] = 0;
          (M = e(d, c, 0, 1)), (f = p.plus(M.times(y))), f.comparedTo(u) != 1;

        )
          (p = y),
            (y = f),
            (w = b.plus(M.times((f = w)))),
            (b = f),
            (c = d.minus(M.times((f = c)))),
            (d = f);
        return (
          (f = e(u.minus(p), y, 0, 1)),
          (b = b.plus(f.times(w))),
          (p = p.plus(f.times(y))),
          (b.s = w.s = N.s),
          (k = k * 2),
          (B =
            e(w, y, k, o)
              .minus(N)
              .abs()
              .comparedTo(e(b, p, k, o).minus(N).abs()) < 1
              ? [w, y]
              : [b, p]),
          (_ = C),
          B
        );
      }),
      (n.toNumber = function () {
        return +q(this);
      }),
      (n.toPrecision = function (u, c) {
        return u != null && J(u, 1, tt), R(this, u, c, 2);
      }),
      (n.toString = function (u) {
        var c,
          p = this,
          y = p.s,
          f = p.e;
        return (
          f === null
            ? y
              ? ((c = 'Infinity'), y < 0 && (c = '-' + c))
              : (c = 'NaN')
            : (u == null
                ? (c = f <= l || f >= h ? Ue(ct(p.c), f) : wt(ct(p.c), f, '0'))
                : u === 10 && x
                  ? ((p = I(new v(p), a + f + 1, o)),
                    (c = wt(ct(p.c), p.e, '0')))
                  : (J(u, 2, m.length, 'Base'),
                    (c = i(wt(ct(p.c), f, '0'), 10, u, y, !0))),
              y < 0 && p.c[0] && (c = '-' + c)),
          c
        );
      }),
      (n.valueOf = n.toJSON =
        function () {
          return q(this);
        }),
      (n._isBigNumber = !0),
      (n[Symbol.toStringTag] = 'BigNumber'),
      (n[Symbol.for('nodejs.util.inspect.custom')] = n.valueOf),
      t != null && v.set(t),
      v
    );
  }
  function ft(t) {
    var e = t | 0;
    return t > 0 || t === e ? e : e - 1;
  }
  function ct(t) {
    for (var e, i, r = 1, n = t.length, s = t[0] + ''; r < n; ) {
      for (e = t[r++] + '', i = F - e.length; i--; e = '0' + e);
      s += e;
    }
    for (n = s.length; s.charCodeAt(--n) === 48; );
    return s.slice(0, n + 1 || 1);
  }
  function Ft(t, e) {
    var i,
      r,
      n = t.c,
      s = e.c,
      a = t.s,
      o = e.s,
      l = t.e,
      h = e.e;
    if (!a || !o) return null;
    if (((i = n && !n[0]), (r = s && !s[0]), i || r))
      return i ? (r ? 0 : -o) : a;
    if (a != o) return a;
    if (((i = a < 0), (r = l == h), !n || !s)) return r ? 0 : !n ^ i ? 1 : -1;
    if (!r) return (l > h) ^ i ? 1 : -1;
    for (o = (l = n.length) < (h = s.length) ? l : h, a = 0; a < o; a++)
      if (n[a] != s[a]) return (n[a] > s[a]) ^ i ? 1 : -1;
    return l == h ? 0 : (l > h) ^ i ? 1 : -1;
  }
  function J(t, e, i, r) {
    if (t < e || t > i || t !== pt(t))
      throw Error(
        lt +
          (r || 'Argument') +
          (typeof t == 'number'
            ? t < e || t > i
              ? ' out of range: '
              : ' not an integer: '
            : ' not a primitive number: ') +
          String(t)
      );
  }
  function Ve(t) {
    var e = t.c.length - 1;
    return ft(t.e / F) == e && t.c[e] % 2 != 0;
  }
  function Ue(t, e) {
    return (
      (t.length > 1 ? t.charAt(0) + '.' + t.slice(1) : t) +
      (e < 0 ? 'e' : 'e+') +
      e
    );
  }
  function wt(t, e, i) {
    var r, n;
    if (e < 0) {
      for (n = i + '.'; ++e; n += i);
      t = n + t;
    } else if (((r = t.length), ++e > r)) {
      for (n = i, e -= r; --e; n += i);
      t += n;
    } else e < r && (t = t.slice(0, e) + '.' + t.slice(e));
    return t;
  }
  var t_ = dl(),
    dt = t_;
  var e_ = class {
      key;
      left = null;
      right = null;
      constructor(t) {
        this.key = t;
      }
    },
    Me = class extends e_ {
      constructor(t) {
        super(t);
      }
    };
  var i_ = class {
    size = 0;
    modificationCount = 0;
    splayCount = 0;
    splay(t) {
      let e = this.root;
      if (e == null) return this.compare(t, t), -1;
      let i = null,
        r = null,
        n = null,
        s = null,
        a = e,
        o = this.compare,
        l;
      for (;;)
        if (((l = o(a.key, t)), l > 0)) {
          let h = a.left;
          if (
            h == null ||
            ((l = o(h.key, t)),
            l > 0 &&
              ((a.left = h.right),
              (h.right = a),
              (a = h),
              (h = a.left),
              h == null))
          )
            break;
          i == null ? (r = a) : (i.left = a), (i = a), (a = h);
        } else if (l < 0) {
          let h = a.right;
          if (
            h == null ||
            ((l = o(h.key, t)),
            l < 0 &&
              ((a.right = h.left),
              (h.left = a),
              (a = h),
              (h = a.right),
              h == null))
          )
            break;
          n == null ? (s = a) : (n.right = a), (n = a), (a = h);
        } else break;
      return (
        n != null && ((n.right = a.left), (a.left = s)),
        i != null && ((i.left = a.right), (a.right = r)),
        this.root !== a && ((this.root = a), this.splayCount++),
        l
      );
    }
    splayMin(t) {
      let e = t,
        i = e.left;
      for (; i != null; ) {
        let r = i;
        (e.left = r.right), (r.right = e), (e = r), (i = e.left);
      }
      return e;
    }
    splayMax(t) {
      let e = t,
        i = e.right;
      for (; i != null; ) {
        let r = i;
        (e.right = r.left), (r.left = e), (e = r), (i = e.right);
      }
      return e;
    }
    _delete(t) {
      if (this.root == null || this.splay(t) != 0) return null;
      let i = this.root,
        r = i,
        n = i.left;
      if ((this.size--, n == null)) this.root = i.right;
      else {
        let s = i.right;
        (i = this.splayMax(n)), (i.right = s), (this.root = i);
      }
      return this.modificationCount++, r;
    }
    addNewRoot(t, e) {
      this.size++, this.modificationCount++;
      let i = this.root;
      if (i == null) {
        this.root = t;
        return;
      }
      e < 0
        ? ((t.left = i), (t.right = i.right), (i.right = null))
        : ((t.right = i), (t.left = i.left), (i.left = null)),
        (this.root = t);
    }
    _first() {
      let t = this.root;
      return t == null ? null : ((this.root = this.splayMin(t)), this.root);
    }
    _last() {
      let t = this.root;
      return t == null ? null : ((this.root = this.splayMax(t)), this.root);
    }
    clear() {
      (this.root = null), (this.size = 0), this.modificationCount++;
    }
    has(t) {
      return this.validKey(t) && this.splay(t) == 0;
    }
    defaultCompare() {
      return (t, e) => (t < e ? -1 : t > e ? 1 : 0);
    }
    wrap() {
      return {
        getRoot: () => this.root,
        setRoot: (t) => {
          this.root = t;
        },
        getSize: () => this.size,
        getModificationCount: () => this.modificationCount,
        getSplayCount: () => this.splayCount,
        setSplayCount: (t) => {
          this.splayCount = t;
        },
        splay: (t) => this.splay(t),
        has: (t) => this.has(t),
      };
    }
  };
  var Vt = class xe extends i_ {
      root = null;
      compare;
      validKey;
      constructor(e, i) {
        super(),
          (this.compare = e ?? this.defaultCompare()),
          (this.validKey = i ?? ((r) => r != null && r != null));
      }
      delete(e) {
        return this.validKey(e) ? this._delete(e) != null : !1;
      }
      deleteAll(e) {
        for (let i of e) this.delete(i);
      }
      forEach(e) {
        let i = this[Symbol.iterator](),
          r;
        for (; (r = i.next()), !r.done; ) e(r.value, r.value, this);
      }
      add(e) {
        let i = this.splay(e);
        return i != 0 && this.addNewRoot(new Me(e), i), this;
      }
      addAndReturn(e) {
        let i = this.splay(e);
        return i != 0 && this.addNewRoot(new Me(e), i), this.root.key;
      }
      addAll(e) {
        for (let i of e) this.add(i);
      }
      isEmpty() {
        return this.root == null;
      }
      isNotEmpty() {
        return this.root != null;
      }
      single() {
        if (this.size == 0) throw 'Bad state: No element';
        if (this.size > 1) throw 'Bad state: Too many element';
        return this.root.key;
      }
      first() {
        if (this.size == 0) throw 'Bad state: No element';
        return this._first().key;
      }
      last() {
        if (this.size == 0) throw 'Bad state: No element';
        return this._last().key;
      }
      lastBefore(e) {
        if (e == null) throw 'Invalid arguments(s)';
        if (this.root == null) return null;
        if (this.splay(e) < 0) return this.root.key;
        let r = this.root.left;
        if (r == null) return null;
        let n = r.right;
        for (; n != null; ) (r = n), (n = r.right);
        return r.key;
      }
      firstAfter(e) {
        if (e == null) throw 'Invalid arguments(s)';
        if (this.root == null) return null;
        if (this.splay(e) > 0) return this.root.key;
        let r = this.root.right;
        if (r == null) return null;
        let n = r.left;
        for (; n != null; ) (r = n), (n = r.left);
        return r.key;
      }
      retainAll(e) {
        let i = new xe(this.compare, this.validKey),
          r = this.modificationCount;
        for (let n of e) {
          if (r != this.modificationCount)
            throw 'Concurrent modification during iteration.';
          this.validKey(n) && this.splay(n) == 0 && i.add(this.root.key);
        }
        i.size != this.size &&
          ((this.root = i.root),
          (this.size = i.size),
          this.modificationCount++);
      }
      lookup(e) {
        return !this.validKey(e) || this.splay(e) != 0 ? null : this.root.key;
      }
      intersection(e) {
        let i = new xe(this.compare, this.validKey);
        for (let r of this) e.has(r) && i.add(r);
        return i;
      }
      difference(e) {
        let i = new xe(this.compare, this.validKey);
        for (let r of this) e.has(r) || i.add(r);
        return i;
      }
      union(e) {
        let i = this.clone();
        return i.addAll(e), i;
      }
      clone() {
        let e = new xe(this.compare, this.validKey);
        return (e.size = this.size), (e.root = this.copyNode(this.root)), e;
      }
      copyNode(e) {
        if (e == null) return null;
        function i(n, s) {
          let a, o;
          do {
            if (((a = n.left), (o = n.right), a != null)) {
              let l = new Me(a.key);
              (s.left = l), i(a, l);
            }
            if (o != null) {
              let l = new Me(o.key);
              (s.right = l), (n = o), (s = l);
            }
          } while (o != null);
        }
        let r = new Me(e.key);
        return i(e, r), r;
      }
      toSet() {
        return this.clone();
      }
      entries() {
        return new n_(this.wrap());
      }
      keys() {
        return this[Symbol.iterator]();
      }
      values() {
        return this[Symbol.iterator]();
      }
      [Symbol.iterator]() {
        return new r_(this.wrap());
      }
      [Symbol.toStringTag] = '[object Set]';
    },
    gl = class {
      tree;
      path = new Array();
      modificationCount = null;
      splayCount;
      constructor(t) {
        (this.tree = t), (this.splayCount = t.getSplayCount());
      }
      [Symbol.iterator]() {
        return this;
      }
      next() {
        return this.moveNext()
          ? { done: !1, value: this.current() }
          : { done: !0, value: null };
      }
      current() {
        if (!this.path.length) return null;
        let t = this.path[this.path.length - 1];
        return this.getValue(t);
      }
      rebuildPath(t) {
        this.path.splice(0, this.path.length),
          this.tree.splay(t),
          this.path.push(this.tree.getRoot()),
          (this.splayCount = this.tree.getSplayCount());
      }
      findLeftMostDescendent(t) {
        for (; t != null; ) this.path.push(t), (t = t.left);
      }
      moveNext() {
        if (this.modificationCount != this.tree.getModificationCount()) {
          if (this.modificationCount == null) {
            this.modificationCount = this.tree.getModificationCount();
            let i = this.tree.getRoot();
            for (; i != null; ) this.path.push(i), (i = i.left);
            return this.path.length > 0;
          }
          throw 'Concurrent modification during iteration.';
        }
        if (!this.path.length) return !1;
        this.splayCount != this.tree.getSplayCount() &&
          this.rebuildPath(this.path[this.path.length - 1].key);
        let t = this.path[this.path.length - 1],
          e = t.right;
        if (e != null) {
          for (; e != null; ) this.path.push(e), (e = e.left);
          return !0;
        }
        for (
          this.path.pop();
          this.path.length && this.path[this.path.length - 1].right === t;

        )
          t = this.path.pop();
        return this.path.length > 0;
      }
    },
    r_ = class extends gl {
      getValue(t) {
        return t.key;
      }
    },
    n_ = class extends gl {
      getValue(t) {
        return [t.key, t.key];
      }
    };
  var bl = (t) => () => t,
    Hi = (t) => {
      let e = t ? (i, r) => r.minus(i).abs().isLessThanOrEqualTo(t) : bl(!1);
      return (i, r) => (e(i, r) ? 0 : i.comparedTo(r));
    };
  function s_(t) {
    let e = t
      ? (i, r, n, s, a) =>
          i
            .exponentiatedBy(2)
            .isLessThanOrEqualTo(
              s
                .minus(r)
                .exponentiatedBy(2)
                .plus(a.minus(n).exponentiatedBy(2))
                .times(t)
            )
      : bl(!1);
    return (i, r, n) => {
      let s = i.x,
        a = i.y,
        o = n.x,
        l = n.y,
        h = a
          .minus(l)
          .times(r.x.minus(o))
          .minus(s.minus(o).times(r.y.minus(l)));
      return e(h, s, a, o, l) ? 0 : h.comparedTo(0);
    };
  }
  var a_ = (t) => t,
    o_ = (t) => {
      if (t) {
        let e = new Vt(Hi(t)),
          i = new Vt(Hi(t)),
          r = (s, a) => a.addAndReturn(s),
          n = (s) => ({ x: r(s.x, e), y: r(s.y, i) });
        return n({ x: new dt(0), y: new dt(0) }), n;
      }
      return a_;
    },
    Xi = (t) => ({
      set: (e) => {
        Ct = Xi(e);
      },
      reset: () => Xi(t),
      compare: Hi(t),
      snap: o_(t),
      orient: s_(t),
    }),
    Ct = Xi(),
    we = (t, e) =>
      t.ll.x.isLessThanOrEqualTo(e.x) &&
      e.x.isLessThanOrEqualTo(t.ur.x) &&
      t.ll.y.isLessThanOrEqualTo(e.y) &&
      e.y.isLessThanOrEqualTo(t.ur.y),
    Yi = (t, e) => {
      if (
        e.ur.x.isLessThan(t.ll.x) ||
        t.ur.x.isLessThan(e.ll.x) ||
        e.ur.y.isLessThan(t.ll.y) ||
        t.ur.y.isLessThan(e.ll.y)
      )
        return null;
      let i = t.ll.x.isLessThan(e.ll.x) ? e.ll.x : t.ll.x,
        r = t.ur.x.isLessThan(e.ur.x) ? t.ur.x : e.ur.x,
        n = t.ll.y.isLessThan(e.ll.y) ? e.ll.y : t.ll.y,
        s = t.ur.y.isLessThan(e.ur.y) ? t.ur.y : e.ur.y;
      return { ll: { x: i, y: n }, ur: { x: r, y: s } };
    },
    Ke = (t, e) => t.x.times(e.y).minus(t.y.times(e.x)),
    kl = (t, e) => t.x.times(e.x).plus(t.y.times(e.y)),
    He = (t) => kl(t, t).sqrt(),
    l_ = (t, e, i) => {
      let r = { x: e.x.minus(t.x), y: e.y.minus(t.y) },
        n = { x: i.x.minus(t.x), y: i.y.minus(t.y) };
      return Ke(n, r).div(He(n)).div(He(r));
    },
    h_ = (t, e, i) => {
      let r = { x: e.x.minus(t.x), y: e.y.minus(t.y) },
        n = { x: i.x.minus(t.x), y: i.y.minus(t.y) };
      return kl(n, r).div(He(n)).div(He(r));
    },
    ml = (t, e, i) =>
      e.y.isZero()
        ? null
        : { x: t.x.plus(e.x.div(e.y).times(i.minus(t.y))), y: i },
    _l = (t, e, i) =>
      e.x.isZero()
        ? null
        : { x: i, y: t.y.plus(e.y.div(e.x).times(i.minus(t.x))) },
    u_ = (t, e, i, r) => {
      if (e.x.isZero()) return _l(i, r, t.x);
      if (r.x.isZero()) return _l(t, e, i.x);
      if (e.y.isZero()) return ml(i, r, t.y);
      if (r.y.isZero()) return ml(t, e, i.y);
      let n = Ke(e, r);
      if (n.isZero()) return null;
      let s = { x: i.x.minus(t.x), y: i.y.minus(t.y) },
        a = Ke(s, e).div(n),
        o = Ke(s, r).div(n),
        l = t.x.plus(o.times(e.x)),
        h = i.x.plus(a.times(r.x)),
        g = t.y.plus(o.times(e.y)),
        _ = i.y.plus(a.times(r.y)),
        E = l.plus(h).div(2),
        P = g.plus(_).div(2);
      return { x: E, y: P };
    },
    bt = class Ml {
      point;
      isLeft;
      segment;
      otherSE;
      consumedBy;
      static compare(e, i) {
        let r = Ml.comparePoints(e.point, i.point);
        return r !== 0
          ? r
          : (e.point !== i.point && e.link(i),
            e.isLeft !== i.isLeft
              ? e.isLeft
                ? 1
                : -1
              : Ye.compare(e.segment, i.segment));
      }
      static comparePoints(e, i) {
        return e.x.isLessThan(i.x)
          ? -1
          : e.x.isGreaterThan(i.x)
            ? 1
            : e.y.isLessThan(i.y)
              ? -1
              : e.y.isGreaterThan(i.y)
                ? 1
                : 0;
      }
      constructor(e, i) {
        e.events === void 0 ? (e.events = [this]) : e.events.push(this),
          (this.point = e),
          (this.isLeft = i);
      }
      link(e) {
        if (e.point === this.point)
          throw new Error('Tried to link already linked events');
        let i = e.point.events;
        for (let r = 0, n = i.length; r < n; r++) {
          let s = i[r];
          this.point.events.push(s), (s.point = this.point);
        }
        this.checkForConsuming();
      }
      checkForConsuming() {
        let e = this.point.events.length;
        for (let i = 0; i < e; i++) {
          let r = this.point.events[i];
          if (r.segment.consumedBy === void 0)
            for (let n = i + 1; n < e; n++) {
              let s = this.point.events[n];
              s.consumedBy === void 0 &&
                r.otherSE.point.events === s.otherSE.point.events &&
                r.segment.consume(s.segment);
            }
        }
      }
      getAvailableLinkedEvents() {
        let e = [];
        for (let i = 0, r = this.point.events.length; i < r; i++) {
          let n = this.point.events[i];
          n !== this &&
            !n.segment.ringOut &&
            n.segment.isInResult() &&
            e.push(n);
        }
        return e;
      }
      getLeftmostComparator(e) {
        let i = new Map(),
          r = (n) => {
            let s = n.otherSE;
            i.set(n, {
              sine: l_(this.point, e.point, s.point),
              cosine: h_(this.point, e.point, s.point),
            });
          };
        return (n, s) => {
          i.has(n) || r(n), i.has(s) || r(s);
          let { sine: a, cosine: o } = i.get(n),
            { sine: l, cosine: h } = i.get(s);
          return a.isGreaterThanOrEqualTo(0) && l.isGreaterThanOrEqualTo(0)
            ? o.isLessThan(h)
              ? 1
              : o.isGreaterThan(h)
                ? -1
                : 0
            : a.isLessThan(0) && l.isLessThan(0)
              ? o.isLessThan(h)
                ? -1
                : o.isGreaterThan(h)
                  ? 1
                  : 0
              : l.isLessThan(a)
                ? -1
                : l.isGreaterThan(a)
                  ? 1
                  : 0;
        };
      }
    },
    c_ = class Ji {
      events;
      poly;
      _isExteriorRing;
      _enclosingRing;
      static factory(e) {
        let i = [];
        for (let r = 0, n = e.length; r < n; r++) {
          let s = e[r];
          if (!s.isInResult() || s.ringOut) continue;
          let a = null,
            o = s.leftSE,
            l = s.rightSE,
            h = [o],
            g = o.point,
            _ = [];
          for (; (a = o), (o = l), h.push(o), o.point !== g; )
            for (;;) {
              let E = o.getAvailableLinkedEvents();
              if (E.length === 0) {
                let G = h[0].point,
                  m = h[h.length - 1].point;
                throw new Error(
                  `Unable to complete output ring starting at [${G.x}, ${G.y}]. Last matching segment found ends at [${m.x}, ${m.y}].`
                );
              }
              if (E.length === 1) {
                l = E[0].otherSE;
                break;
              }
              let P = null;
              for (let G = 0, m = _.length; G < m; G++)
                if (_[G].point === o.point) {
                  P = G;
                  break;
                }
              if (P !== null) {
                let G = _.splice(P)[0],
                  m = h.splice(G.index);
                m.unshift(m[0].otherSE), i.push(new Ji(m.reverse()));
                continue;
              }
              _.push({ index: h.length, point: o.point });
              let T = o.getLeftmostComparator(a);
              l = E.sort(T)[0].otherSE;
              break;
            }
          i.push(new Ji(h));
        }
        return i;
      }
      constructor(e) {
        this.events = e;
        for (let i = 0, r = e.length; i < r; i++) e[i].segment.ringOut = this;
        this.poly = null;
      }
      getGeom() {
        let e = this.events[0].point,
          i = [e];
        for (let h = 1, g = this.events.length - 1; h < g; h++) {
          let _ = this.events[h].point,
            E = this.events[h + 1].point;
          Ct.orient(_, e, E) !== 0 && (i.push(_), (e = _));
        }
        if (i.length === 1) return null;
        let r = i[0],
          n = i[1];
        Ct.orient(r, e, n) === 0 && i.shift(), i.push(i[0]);
        let s = this.isExteriorRing() ? 1 : -1,
          a = this.isExteriorRing() ? 0 : i.length - 1,
          o = this.isExteriorRing() ? i.length : -1,
          l = [];
        for (let h = a; h != o; h += s)
          l.push([i[h].x.toNumber(), i[h].y.toNumber()]);
        return l;
      }
      isExteriorRing() {
        if (this._isExteriorRing === void 0) {
          let e = this.enclosingRing();
          this._isExteriorRing = e ? !e.isExteriorRing() : !0;
        }
        return this._isExteriorRing;
      }
      enclosingRing() {
        return (
          this._enclosingRing === void 0 &&
            (this._enclosingRing = this._calcEnclosingRing()),
          this._enclosingRing
        );
      }
      _calcEnclosingRing() {
        let e = this.events[0];
        for (let n = 1, s = this.events.length; n < s; n++) {
          let a = this.events[n];
          bt.compare(e, a) > 0 && (e = a);
        }
        let i = e.segment.prevInResult(),
          r = i ? i.prevInResult() : null;
        for (;;) {
          if (!i) return null;
          if (!r) return i.ringOut;
          if (r.ringOut !== i.ringOut)
            return r.ringOut?.enclosingRing() !== i.ringOut
              ? i.ringOut
              : i.ringOut?.enclosingRing();
          (i = r.prevInResult()), (r = i ? i.prevInResult() : null);
        }
      }
    },
    yl = class {
      exteriorRing;
      interiorRings;
      constructor(t) {
        (this.exteriorRing = t), (t.poly = this), (this.interiorRings = []);
      }
      addInterior(t) {
        this.interiorRings.push(t), (t.poly = this);
      }
      getGeom() {
        let t = this.exteriorRing.getGeom();
        if (t === null) return null;
        let e = [t];
        for (let i = 0, r = this.interiorRings.length; i < r; i++) {
          let n = this.interiorRings[i].getGeom();
          n !== null && e.push(n);
        }
        return e;
      }
    },
    p_ = class {
      rings;
      polys;
      constructor(t) {
        (this.rings = t), (this.polys = this._composePolys(t));
      }
      getGeom() {
        let t = [];
        for (let e = 0, i = this.polys.length; e < i; e++) {
          let r = this.polys[e].getGeom();
          r !== null && t.push(r);
        }
        return t;
      }
      _composePolys(t) {
        let e = [];
        for (let i = 0, r = t.length; i < r; i++) {
          let n = t[i];
          if (!n.poly)
            if (n.isExteriorRing()) e.push(new yl(n));
            else {
              let s = n.enclosingRing();
              s?.poly || e.push(new yl(s)), s?.poly?.addInterior(n);
            }
        }
        return e;
      }
    },
    f_ = class {
      queue;
      tree;
      segments;
      constructor(t, e = Ye.compare) {
        (this.queue = t), (this.tree = new Vt(e)), (this.segments = []);
      }
      process(t) {
        let e = t.segment,
          i = [];
        if (t.consumedBy)
          return (
            t.isLeft ? this.queue.delete(t.otherSE) : this.tree.delete(e), i
          );
        t.isLeft && this.tree.add(e);
        let r = e,
          n = e;
        do r = this.tree.lastBefore(r);
        while (r != null && r.consumedBy != null);
        do n = this.tree.firstAfter(n);
        while (n != null && n.consumedBy != null);
        if (t.isLeft) {
          let s = null;
          if (r) {
            let o = r.getIntersection(e);
            if (
              o !== null &&
              (e.isAnEndpoint(o) || (s = o), !r.isAnEndpoint(o))
            ) {
              let l = this._splitSafely(r, o);
              for (let h = 0, g = l.length; h < g; h++) i.push(l[h]);
            }
          }
          let a = null;
          if (n) {
            let o = n.getIntersection(e);
            if (
              o !== null &&
              (e.isAnEndpoint(o) || (a = o), !n.isAnEndpoint(o))
            ) {
              let l = this._splitSafely(n, o);
              for (let h = 0, g = l.length; h < g; h++) i.push(l[h]);
            }
          }
          if (s !== null || a !== null) {
            let o = null;
            s === null
              ? (o = a)
              : a === null
                ? (o = s)
                : (o = bt.comparePoints(s, a) <= 0 ? s : a),
              this.queue.delete(e.rightSE),
              i.push(e.rightSE);
            let l = e.split(o);
            for (let h = 0, g = l.length; h < g; h++) i.push(l[h]);
          }
          i.length > 0
            ? (this.tree.delete(e), i.push(t))
            : (this.segments.push(e), (e.prev = r));
        } else {
          if (r && n) {
            let s = r.getIntersection(n);
            if (s !== null) {
              if (!r.isAnEndpoint(s)) {
                let a = this._splitSafely(r, s);
                for (let o = 0, l = a.length; o < l; o++) i.push(a[o]);
              }
              if (!n.isAnEndpoint(s)) {
                let a = this._splitSafely(n, s);
                for (let o = 0, l = a.length; o < l; o++) i.push(a[o]);
              }
            }
          }
          this.tree.delete(e);
        }
        return i;
      }
      _splitSafely(t, e) {
        this.tree.delete(t);
        let i = t.rightSE;
        this.queue.delete(i);
        let r = t.split(e);
        return r.push(i), t.consumedBy === void 0 && this.tree.add(t), r;
      }
    },
    d_ = class {
      type;
      numMultiPolys;
      run(t, e, i) {
        Ce.type = t;
        let r = [new vl(e, !0)];
        for (let h = 0, g = i.length; h < g; h++) r.push(new vl(i[h], !1));
        if (((Ce.numMultiPolys = r.length), Ce.type === 'difference')) {
          let h = r[0],
            g = 1;
          for (; g < r.length; )
            Yi(r[g].bbox, h.bbox) !== null ? g++ : r.splice(g, 1);
        }
        if (Ce.type === 'intersection')
          for (let h = 0, g = r.length; h < g; h++) {
            let _ = r[h];
            for (let E = h + 1, P = r.length; E < P; E++)
              if (Yi(_.bbox, r[E].bbox) === null) return [];
          }
        let n = new Vt(bt.compare);
        for (let h = 0, g = r.length; h < g; h++) {
          let _ = r[h].getSweepEvents();
          for (let E = 0, P = _.length; E < P; E++) n.add(_[E]);
        }
        let s = new f_(n),
          a = null;
        for (n.size != 0 && ((a = n.first()), n.delete(a)); a; ) {
          let h = s.process(a);
          for (let g = 0, _ = h.length; g < _; g++) {
            let E = h[g];
            E.consumedBy === void 0 && n.add(E);
          }
          n.size != 0 ? ((a = n.first()), n.delete(a)) : (a = null);
        }
        Ct.reset();
        let o = c_.factory(s.segments);
        return new p_(o).getGeom();
      }
    },
    Ce = new d_(),
    Xe = Ce,
    g_ = 0,
    Ye = class je {
      id;
      leftSE;
      rightSE;
      rings;
      windings;
      ringOut;
      consumedBy;
      prev;
      _prevInResult;
      _beforeState;
      _afterState;
      _isInResult;
      static compare(e, i) {
        let r = e.leftSE.point.x,
          n = i.leftSE.point.x,
          s = e.rightSE.point.x,
          a = i.rightSE.point.x;
        if (a.isLessThan(r)) return 1;
        if (s.isLessThan(n)) return -1;
        let o = e.leftSE.point.y,
          l = i.leftSE.point.y,
          h = e.rightSE.point.y,
          g = i.rightSE.point.y;
        if (r.isLessThan(n)) {
          if (l.isLessThan(o) && l.isLessThan(h)) return 1;
          if (l.isGreaterThan(o) && l.isGreaterThan(h)) return -1;
          let _ = e.comparePoint(i.leftSE.point);
          if (_ < 0) return 1;
          if (_ > 0) return -1;
          let E = i.comparePoint(e.rightSE.point);
          return E !== 0 ? E : -1;
        }
        if (r.isGreaterThan(n)) {
          if (o.isLessThan(l) && o.isLessThan(g)) return -1;
          if (o.isGreaterThan(l) && o.isGreaterThan(g)) return 1;
          let _ = i.comparePoint(e.leftSE.point);
          if (_ !== 0) return _;
          let E = e.comparePoint(i.rightSE.point);
          return E < 0 ? 1 : E > 0 ? -1 : 1;
        }
        if (o.isLessThan(l)) return -1;
        if (o.isGreaterThan(l)) return 1;
        if (s.isLessThan(a)) {
          let _ = i.comparePoint(e.rightSE.point);
          if (_ !== 0) return _;
        }
        if (s.isGreaterThan(a)) {
          let _ = e.comparePoint(i.rightSE.point);
          if (_ < 0) return 1;
          if (_ > 0) return -1;
        }
        if (!s.eq(a)) {
          let _ = h.minus(o),
            E = s.minus(r),
            P = g.minus(l),
            T = a.minus(n);
          if (_.isGreaterThan(E) && P.isLessThan(T)) return 1;
          if (_.isLessThan(E) && P.isGreaterThan(T)) return -1;
        }
        return s.isGreaterThan(a)
          ? 1
          : s.isLessThan(a) || h.isLessThan(g)
            ? -1
            : h.isGreaterThan(g)
              ? 1
              : e.id < i.id
                ? -1
                : e.id > i.id
                  ? 1
                  : 0;
      }
      constructor(e, i, r, n) {
        (this.id = ++g_),
          (this.leftSE = e),
          (e.segment = this),
          (e.otherSE = i),
          (this.rightSE = i),
          (i.segment = this),
          (i.otherSE = e),
          (this.rings = r),
          (this.windings = n);
      }
      static fromRing(e, i, r) {
        let n,
          s,
          a,
          o = bt.comparePoints(e, i);
        if (o < 0) (n = e), (s = i), (a = 1);
        else if (o > 0) (n = i), (s = e), (a = -1);
        else
          throw new Error(
            `Tried to create degenerate segment at [${e.x}, ${e.y}]`
          );
        let l = new bt(n, !0),
          h = new bt(s, !1);
        return new je(l, h, [r], [a]);
      }
      replaceRightSE(e) {
        (this.rightSE = e),
          (this.rightSE.segment = this),
          (this.rightSE.otherSE = this.leftSE),
          (this.leftSE.otherSE = this.rightSE);
      }
      bbox() {
        let e = this.leftSE.point.y,
          i = this.rightSE.point.y;
        return {
          ll: { x: this.leftSE.point.x, y: e.isLessThan(i) ? e : i },
          ur: { x: this.rightSE.point.x, y: e.isGreaterThan(i) ? e : i },
        };
      }
      vector() {
        return {
          x: this.rightSE.point.x.minus(this.leftSE.point.x),
          y: this.rightSE.point.y.minus(this.leftSE.point.y),
        };
      }
      isAnEndpoint(e) {
        return (
          (e.x.eq(this.leftSE.point.x) && e.y.eq(this.leftSE.point.y)) ||
          (e.x.eq(this.rightSE.point.x) && e.y.eq(this.rightSE.point.y))
        );
      }
      comparePoint(e) {
        return Ct.orient(this.leftSE.point, e, this.rightSE.point);
      }
      getIntersection(e) {
        let i = this.bbox(),
          r = e.bbox(),
          n = Yi(i, r);
        if (n === null) return null;
        let s = this.leftSE.point,
          a = this.rightSE.point,
          o = e.leftSE.point,
          l = e.rightSE.point,
          h = we(i, o) && this.comparePoint(o) === 0,
          g = we(r, s) && e.comparePoint(s) === 0,
          _ = we(i, l) && this.comparePoint(l) === 0,
          E = we(r, a) && e.comparePoint(a) === 0;
        if (g && h) return E && !_ ? a : !E && _ ? l : null;
        if (g) return _ && s.x.eq(l.x) && s.y.eq(l.y) ? null : s;
        if (h) return E && a.x.eq(o.x) && a.y.eq(o.y) ? null : o;
        if (E && _) return null;
        if (E) return a;
        if (_) return l;
        let P = u_(s, this.vector(), o, e.vector());
        return P === null || !we(n, P) ? null : Ct.snap(P);
      }
      split(e) {
        let i = [],
          r = e.events !== void 0,
          n = new bt(e, !0),
          s = new bt(e, !1),
          a = this.rightSE;
        this.replaceRightSE(s), i.push(s), i.push(n);
        let o = new je(n, a, this.rings.slice(), this.windings.slice());
        return (
          bt.comparePoints(o.leftSE.point, o.rightSE.point) > 0 &&
            o.swapEvents(),
          bt.comparePoints(this.leftSE.point, this.rightSE.point) > 0 &&
            this.swapEvents(),
          r && (n.checkForConsuming(), s.checkForConsuming()),
          i
        );
      }
      swapEvents() {
        let e = this.rightSE;
        (this.rightSE = this.leftSE),
          (this.leftSE = e),
          (this.leftSE.isLeft = !0),
          (this.rightSE.isLeft = !1);
        for (let i = 0, r = this.windings.length; i < r; i++)
          this.windings[i] *= -1;
      }
      consume(e) {
        let i = this,
          r = e;
        for (; i.consumedBy; ) i = i.consumedBy;
        for (; r.consumedBy; ) r = r.consumedBy;
        let n = je.compare(i, r);
        if (n !== 0) {
          if (n > 0) {
            let s = i;
            (i = r), (r = s);
          }
          if (i.prev === r) {
            let s = i;
            (i = r), (r = s);
          }
          for (let s = 0, a = r.rings.length; s < a; s++) {
            let o = r.rings[s],
              l = r.windings[s],
              h = i.rings.indexOf(o);
            h === -1
              ? (i.rings.push(o), i.windings.push(l))
              : (i.windings[h] += l);
          }
          (r.rings = null),
            (r.windings = null),
            (r.consumedBy = i),
            (r.leftSE.consumedBy = i.leftSE),
            (r.rightSE.consumedBy = i.rightSE);
        }
      }
      prevInResult() {
        return this._prevInResult !== void 0
          ? this._prevInResult
          : (this.prev
              ? this.prev.isInResult()
                ? (this._prevInResult = this.prev)
                : (this._prevInResult = this.prev.prevInResult())
              : (this._prevInResult = null),
            this._prevInResult);
      }
      beforeState() {
        if (this._beforeState !== void 0) return this._beforeState;
        if (!this.prev)
          this._beforeState = { rings: [], windings: [], multiPolys: [] };
        else {
          let e = this.prev.consumedBy || this.prev;
          this._beforeState = e.afterState();
        }
        return this._beforeState;
      }
      afterState() {
        if (this._afterState !== void 0) return this._afterState;
        let e = this.beforeState();
        this._afterState = {
          rings: e.rings.slice(0),
          windings: e.windings.slice(0),
          multiPolys: [],
        };
        let i = this._afterState.rings,
          r = this._afterState.windings,
          n = this._afterState.multiPolys;
        for (let o = 0, l = this.rings.length; o < l; o++) {
          let h = this.rings[o],
            g = this.windings[o],
            _ = i.indexOf(h);
          _ === -1 ? (i.push(h), r.push(g)) : (r[_] += g);
        }
        let s = [],
          a = [];
        for (let o = 0, l = i.length; o < l; o++) {
          if (r[o] === 0) continue;
          let h = i[o],
            g = h.poly;
          if (a.indexOf(g) === -1)
            if (h.isExterior) s.push(g);
            else {
              a.indexOf(g) === -1 && a.push(g);
              let _ = s.indexOf(h.poly);
              _ !== -1 && s.splice(_, 1);
            }
        }
        for (let o = 0, l = s.length; o < l; o++) {
          let h = s[o].multiPoly;
          n.indexOf(h) === -1 && n.push(h);
        }
        return this._afterState;
      }
      isInResult() {
        if (this.consumedBy) return !1;
        if (this._isInResult !== void 0) return this._isInResult;
        let e = this.beforeState().multiPolys,
          i = this.afterState().multiPolys;
        switch (Xe.type) {
          case 'union': {
            let r = e.length === 0,
              n = i.length === 0;
            this._isInResult = r !== n;
            break;
          }
          case 'intersection': {
            let r, n;
            e.length < i.length
              ? ((r = e.length), (n = i.length))
              : ((r = i.length), (n = e.length)),
              (this._isInResult = n === Xe.numMultiPolys && r < n);
            break;
          }
          case 'xor': {
            let r = Math.abs(e.length - i.length);
            this._isInResult = r % 2 === 1;
            break;
          }
          case 'difference': {
            let r = (n) => n.length === 1 && n[0].isSubject;
            this._isInResult = r(e) !== r(i);
            break;
          }
        }
        return this._isInResult;
      }
    },
    Ll = class {
      poly;
      isExterior;
      segments;
      bbox;
      constructor(t, e, i) {
        if (!Array.isArray(t) || t.length === 0)
          throw new Error(
            'Input geometry is not a valid Polygon or MultiPolygon'
          );
        if (
          ((this.poly = e),
          (this.isExterior = i),
          (this.segments = []),
          typeof t[0][0] != 'number' || typeof t[0][1] != 'number')
        )
          throw new Error(
            'Input geometry is not a valid Polygon or MultiPolygon'
          );
        let r = Ct.snap({ x: new dt(t[0][0]), y: new dt(t[0][1]) });
        this.bbox = { ll: { x: r.x, y: r.y }, ur: { x: r.x, y: r.y } };
        let n = r;
        for (let s = 1, a = t.length; s < a; s++) {
          if (typeof t[s][0] != 'number' || typeof t[s][1] != 'number')
            throw new Error(
              'Input geometry is not a valid Polygon or MultiPolygon'
            );
          let o = Ct.snap({ x: new dt(t[s][0]), y: new dt(t[s][1]) });
          (o.x.eq(n.x) && o.y.eq(n.y)) ||
            (this.segments.push(Ye.fromRing(n, o, this)),
            o.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = o.x),
            o.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = o.y),
            o.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = o.x),
            o.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = o.y),
            (n = o));
        }
        (!r.x.eq(n.x) || !r.y.eq(n.y)) &&
          this.segments.push(Ye.fromRing(n, r, this));
      }
      getSweepEvents() {
        let t = [];
        for (let e = 0, i = this.segments.length; e < i; e++) {
          let r = this.segments[e];
          t.push(r.leftSE), t.push(r.rightSE);
        }
        return t;
      }
    },
    m_ = class {
      multiPoly;
      exteriorRing;
      interiorRings;
      bbox;
      constructor(t, e) {
        if (!Array.isArray(t))
          throw new Error(
            'Input geometry is not a valid Polygon or MultiPolygon'
          );
        (this.exteriorRing = new Ll(t[0], this, !0)),
          (this.bbox = {
            ll: {
              x: this.exteriorRing.bbox.ll.x,
              y: this.exteriorRing.bbox.ll.y,
            },
            ur: {
              x: this.exteriorRing.bbox.ur.x,
              y: this.exteriorRing.bbox.ur.y,
            },
          }),
          (this.interiorRings = []);
        for (let i = 1, r = t.length; i < r; i++) {
          let n = new Ll(t[i], this, !1);
          n.bbox.ll.x.isLessThan(this.bbox.ll.x) &&
            (this.bbox.ll.x = n.bbox.ll.x),
            n.bbox.ll.y.isLessThan(this.bbox.ll.y) &&
              (this.bbox.ll.y = n.bbox.ll.y),
            n.bbox.ur.x.isGreaterThan(this.bbox.ur.x) &&
              (this.bbox.ur.x = n.bbox.ur.x),
            n.bbox.ur.y.isGreaterThan(this.bbox.ur.y) &&
              (this.bbox.ur.y = n.bbox.ur.y),
            this.interiorRings.push(n);
        }
        this.multiPoly = e;
      }
      getSweepEvents() {
        let t = this.exteriorRing.getSweepEvents();
        for (let e = 0, i = this.interiorRings.length; e < i; e++) {
          let r = this.interiorRings[e].getSweepEvents();
          for (let n = 0, s = r.length; n < s; n++) t.push(r[n]);
        }
        return t;
      }
    },
    vl = class {
      isSubject;
      polys;
      bbox;
      constructor(t, e) {
        if (!Array.isArray(t))
          throw new Error(
            'Input geometry is not a valid Polygon or MultiPolygon'
          );
        try {
          typeof t[0][0][0] == 'number' && (t = [t]);
        } catch {}
        (this.polys = []),
          (this.bbox = {
            ll: {
              x: new dt(Number.POSITIVE_INFINITY),
              y: new dt(Number.POSITIVE_INFINITY),
            },
            ur: {
              x: new dt(Number.NEGATIVE_INFINITY),
              y: new dt(Number.NEGATIVE_INFINITY),
            },
          });
        for (let i = 0, r = t.length; i < r; i++) {
          let n = new m_(t[i], this);
          n.bbox.ll.x.isLessThan(this.bbox.ll.x) &&
            (this.bbox.ll.x = n.bbox.ll.x),
            n.bbox.ll.y.isLessThan(this.bbox.ll.y) &&
              (this.bbox.ll.y = n.bbox.ll.y),
            n.bbox.ur.x.isGreaterThan(this.bbox.ur.x) &&
              (this.bbox.ur.x = n.bbox.ur.x),
            n.bbox.ur.y.isGreaterThan(this.bbox.ur.y) &&
              (this.bbox.ur.y = n.bbox.ur.y),
            this.polys.push(n);
        }
        this.isSubject = e;
      }
      getSweepEvents() {
        let t = [];
        for (let e = 0, i = this.polys.length; e < i; e++) {
          let r = this.polys[e].getSweepEvents();
          for (let n = 0, s = r.length; n < s; n++) t.push(r[n]);
        }
        return t;
      }
    };
  var xl = (t, ...e) => Xe.run('intersection', t, e);
  var wl = (t, ...e) => Xe.run('difference', t, e),
    Gk = Ct.set;
  function $e(t) {
    let e = { type: 'Feature' };
    return (e.geometry = t), e;
  }
  function Je(t) {
    return t.type === 'Feature' ? t.geometry : t;
  }
  function Cl(t) {
    return t && t.geometry && t.geometry.coordinates
      ? t.geometry.coordinates
      : t;
  }
  function y_(t) {
    return $e({ type: 'LineString', coordinates: t });
  }
  function L_(t) {
    return $e({ type: 'MultiLineString', coordinates: t });
  }
  function El(t) {
    return $e({ type: 'Polygon', coordinates: t });
  }
  function Pl(t) {
    return $e({ type: 'MultiPolygon', coordinates: t });
  }
  function Sl(t, e) {
    let i = Je(t),
      r = Je(e),
      n = xl(i.coordinates, r.coordinates);
    return n.length === 0 ? null : n.length === 1 ? El(n[0]) : Pl(n);
  }
  function Bl(t, e) {
    let i = Je(t),
      r = Je(e),
      n = wl(i.coordinates, r.coordinates);
    return n.length === 0 ? null : n.length === 1 ? El(n[0]) : Pl(n);
  }
  function Tl(t) {
    return Array.isArray(t) ? 1 + Tl(t[0]) : -1;
  }
  function Rl(t) {
    t instanceof L.Polyline && (t = t.toGeoJSON(15));
    let e = Cl(t),
      i = Tl(e),
      r = [];
    return (
      i > 1
        ? e.forEach((n) => {
            r.push(y_(n));
          })
        : r.push(t),
      r
    );
  }
  function Dl(t) {
    let e = [];
    return (
      t.eachLayer((i) => {
        e.push(Cl(i.toGeoJSON(15)));
      }),
      L_(e)
    );
  }
  X.Cut = X.Polygon.extend({
    initialize(t) {
      (this._map = t),
        (this._shape = 'Cut'),
        (this.toolbarButtonName = 'cutPolygon');
    },
    _finishShape() {
      if (
        ((this._editedLayers = []),
        (!this.options.allowSelfIntersection &&
          (this._handleSelfIntersection(!0, this._layer.getLatLngs()[0]),
          this._doesSelfIntersect)) ||
          (this.options.requireSnapToFinish &&
            !this._hintMarker._snapped &&
            !this._isFirstLayer()))
      )
        return;
      let t = this._layer.getLatLngs();
      if (t.length <= 2) return;
      let e = L.polygon(t, this.options.pathOptions);
      (e._latlngInfos = this._layer._latlngInfo),
        this.cut(e),
        this._cleanupSnapping(),
        this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1),
        delete this._tempSnapLayerIndex,
        this._editedLayers.forEach(({ layer: r, originalLayer: n }) => {
          this._fireCut(n, r, n),
            this._fireCut(this._map, r, n),
            n.pm._fireEdit();
        }),
        (this._editedLayers = []);
      let i = this._hintMarker.getLatLng();
      this.disable(),
        this.options.continueDrawing &&
          (this.enable(), this._hintMarker.setLatLng(i));
    },
    cut(t) {
      let e = this._map._layers,
        i = t._latlngInfos || [];
      Object.keys(e)
        .map((n) => e[n])
        .filter((n) => n.pm)
        .filter((n) => !n._pmTempLayer)
        .filter(
          (n) =>
            (!L.PM.optIn && !n.options.pmIgnore) ||
            (L.PM.optIn && n.options.pmIgnore === !1)
        )
        .filter((n) => n instanceof L.Polyline)
        .filter((n) => n !== t)
        .filter((n) => n.pm.options.allowCutting)
        .filter((n) =>
          this.options.layersToCut &&
          L.Util.isArray(this.options.layersToCut) &&
          this.options.layersToCut.length > 0
            ? this.options.layersToCut.indexOf(n) > -1
            : !0
        )
        .filter((n) => !this._layerGroup.hasLayer(n))
        .filter((n) => {
          try {
            let s = !!ut(t.toGeoJSON(15), n.toGeoJSON(15)).features.length > 0;
            return s || (n instanceof L.Polyline && !(n instanceof L.Polygon))
              ? s
              : !!Sl(t.toGeoJSON(15), n.toGeoJSON(15));
          } catch {
            return (
              n instanceof L.Polygon &&
                console.error("You can't cut polygons with self-intersections"),
              !1
            );
          }
        })
        .forEach((n) => {
          let s;
          if (n instanceof L.Polygon) {
            s = L.polygon(n.getLatLngs());
            let h = s.getLatLngs();
            i.forEach((g) => {
              if (g && g.snapInfo) {
                let { latlng: _ } = g,
                  E = this._calcClosestLayer(_, [s]);
                if (E && E.segment && E.distance < this.options.snapDistance) {
                  let { segment: P } = E;
                  if (P && P.length === 2) {
                    let {
                      indexPath: T,
                      parentPath: G,
                      newIndex: m,
                    } = L.PM.Utils._getIndexFromSegment(h, P);
                    (T.length > 1 ? (0, Ol.default)(h, G) : h).splice(m, 0, _);
                  }
                }
              }
            });
          } else s = n;
          let a = this._cutLayer(t, s),
            o = L.geoJSON(a, n.options);
          o.getLayers().length === 1 && ([o] = o.getLayers()),
            this._setPane(o, 'layerPane');
          let l = o.addTo(this._map.pm._getContainingLayer());
          if (
            (l.pm.enable(n.pm.options),
            l.pm.disable(),
            (n._pmTempLayer = !0),
            (t._pmTempLayer = !0),
            n.remove(),
            n.removeFrom(this._map.pm._getContainingLayer()),
            t.remove(),
            t.removeFrom(this._map.pm._getContainingLayer()),
            l.getLayers &&
              l.getLayers().length === 0 &&
              this._map.pm.removeLayer({ target: l }),
            l instanceof L.LayerGroup
              ? (l.eachLayer((h) => {
                  this._addDrawnLayerProp(h);
                }),
                this._addDrawnLayerProp(l))
              : this._addDrawnLayerProp(l),
            this.options.layersToCut &&
              L.Util.isArray(this.options.layersToCut) &&
              this.options.layersToCut.length > 0)
          ) {
            let h = this.options.layersToCut.indexOf(n);
            h > -1 && this.options.layersToCut.splice(h, 1);
          }
          this._editedLayers.push({ layer: l, originalLayer: n });
        });
    },
    _cutLayer(t, e) {
      let i = L.geoJSON(),
        r;
      if (e instanceof L.Polygon) r = Bl(e.toGeoJSON(15), t.toGeoJSON(15));
      else {
        let n = Rl(e);
        n.forEach((s) => {
          let a = ul(s, t.toGeoJSON(15)),
            o;
          a && a.features.length > 0 ? (o = L.geoJSON(a)) : (o = L.geoJSON(s)),
            o.getLayers().forEach((l) => {
              Fi(t.toGeoJSON(15), l.toGeoJSON(15)) || l.addTo(i);
            });
        }),
          n.length > 1 ? (r = Dl(i)) : (r = i.toGeoJSON(15));
      }
      return r;
    },
    _change: L.Util.falseFn,
  });
  X.Text = X.extend({
    initialize(t) {
      (this._map = t),
        (this._shape = 'Text'),
        (this.toolbarButtonName = 'drawText');
    },
    enable(t) {
      L.Util.setOptions(this, t),
        (this._enabled = !0),
        this._map.on('click', this._createMarker, this),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
        (this._hintMarker = L.marker(this._map.getCenter(), {
          interactive: !1,
          zIndexOffset: 100,
          icon: L.divIcon({ className: 'marker-icon cursor-marker' }),
        })),
        this._setPane(this._hintMarker, 'vertexPane'),
        (this._hintMarker._pmTempLayer = !0),
        this._hintMarker.addTo(this._map),
        this.options.cursorMarker &&
          L.DomUtil.addClass(this._hintMarker._icon, 'visible'),
        this.options.tooltips &&
          this._hintMarker
            .bindTooltip(V('tooltips.placeText'), {
              permanent: !0,
              offset: L.point(0, 10),
              direction: 'bottom',
              opacity: 0.8,
            })
            .openTooltip(),
        (this._layer = this._hintMarker),
        this._map.on('mousemove', this._syncHintMarker, this),
        this._map.getContainer().classList.add('geoman-draw-cursor'),
        this._fireDrawStart(),
        this._setGlobalDrawMode();
    },
    disable() {
      this._enabled &&
        ((this._enabled = !1),
        this._map.off('click', this._createMarker, this),
        this._hintMarker?.remove(),
        this._map.getContainer().classList.remove('geoman-draw-cursor'),
        this._map.off('mousemove', this._syncHintMarker, this),
        this._map.off('mousemove', this._showHintMarker, this),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
        this.options.snappable && this._cleanupSnapping(),
        this._fireDrawEnd(),
        this._setGlobalDrawMode());
    },
    enabled() {
      return this._enabled;
    },
    toggle(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    _syncHintMarker(t) {
      if ((this._hintMarker.setLatLng(t.latlng), this.options.snappable)) {
        let e = t;
        (e.target = this._hintMarker), this._handleSnapping(e);
      }
    },
    _createMarker(t) {
      if (
        !t.latlng ||
        (this.options.requireSnapToFinish &&
          !this._hintMarker._snapped &&
          !this._isFirstLayer())
      )
        return;
      this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
      let e = this._hintMarker.getLatLng();
      if (
        ((this.textArea = this._createTextArea()),
        this.options.textOptions?.className)
      ) {
        let n = this.options.textOptions.className.split(' ');
        this.textArea.classList.add(...n);
      }
      let i = this._createTextIcon(this.textArea),
        r = new L.Marker(e, { textMarker: !0, _textMarkerOverPM: !0, icon: i });
      if (
        (this._setPane(r, 'markerPane'),
        this._finishLayer(r),
        r.pm || (r.options.draggable = !1),
        r.addTo(this._map.pm._getContainingLayer()),
        r.pm)
      ) {
        (r.pm.textArea = this.textArea),
          L.setOptions(r.pm, {
            removeIfEmpty: this.options.textOptions?.removeIfEmpty ?? !0,
          });
        let n = this.options.textOptions?.focusAfterDraw ?? !0;
        r.pm._createTextMarker(n),
          this.options.textOptions?.text &&
            r.pm.setText(this.options.textOptions.text);
      }
      this._fireCreate(r),
        this._cleanupSnapping(),
        this.disable(),
        this.options.continueDrawing &&
          this._map.once('mousemove', this._showHintMarkerAfterMoving, this);
    },
    _showHintMarkerAfterMoving(t) {
      this.enable(), this._hintMarker.setLatLng(t.latlng);
    },
    _createTextArea() {
      let t = document.createElement('textarea');
      return (
        (t.readOnly = !0), t.classList.add('pm-textarea', 'pm-disabled'), t
      );
    },
    _createTextIcon(t) {
      return L.divIcon({ className: 'pm-text-marker', html: t });
    },
  });
  var v_ = {
      enableLayerDrag() {
        if (!this.options.draggable || !this._layer._map) return;
        this.disable(),
          (this._layerDragEnabled = !0),
          this._map || (this._map = this._layer._map),
          (this._layer instanceof L.Marker ||
            this._layer instanceof L.ImageOverlay) &&
            L.DomEvent.on(
              this._getDOMElem(),
              'dragstart',
              this._stopDOMImageDrag
            ),
          this._layer.dragging && this._layer.dragging.disable(),
          (this._tempDragCoord = null),
          Tt(this._layer) instanceof L.Canvas
            ? (this._layer.on('mouseout', this.removeDraggingClass, this),
              this._layer.on('mouseover', this.addDraggingClass, this))
            : this.addDraggingClass(),
          (this._originalMapDragState = this._layer._map.dragging._enabled),
          (this._safeToCacheDragState = !0);
        let t = this._getDOMElem();
        t &&
          (Tt(this._layer) instanceof L.Canvas
            ? (this._layer.on(
                'touchstart mousedown',
                this._dragMixinOnMouseDown,
                this
              ),
              this._map.pm._addTouchEvents(t))
            : L.DomEvent.on(
                t,
                'touchstart mousedown',
                this._simulateMouseDownEvent,
                this
              )),
          this._fireDragEnable();
      },
      disableLayerDrag() {
        (this._layerDragEnabled = !1),
          Tt(this._layer) instanceof L.Canvas
            ? (this._layer.off('mouseout', this.removeDraggingClass, this),
              this._layer.off('mouseover', this.addDraggingClass, this))
            : this.removeDraggingClass(),
          this._originalMapDragState &&
            this._dragging &&
            this._map.dragging.enable(),
          (this._safeToCacheDragState = !1),
          this._layer.dragging && this._layer.dragging.disable();
        let t = this._getDOMElem();
        t &&
          (Tt(this._layer) instanceof L.Canvas
            ? (this._layer.off(
                'touchstart mousedown',
                this._dragMixinOnMouseDown,
                this
              ),
              this._map.pm._removeTouchEvents(t))
            : L.DomEvent.off(
                t,
                'touchstart mousedown',
                this._simulateMouseDownEvent,
                this
              )),
          this._layerDragged && this._fireUpdate(),
          (this._layerDragged = !1),
          this._fireDragDisable();
      },
      dragging() {
        return this._dragging;
      },
      layerDragEnabled() {
        return !!this._layerDragEnabled;
      },
      _simulateMouseDownEvent(t) {
        let e = t.touches ? t.touches[0] : t,
          i = { originalEvent: e, target: this._layer };
        return (
          (i.containerPoint = this._map.mouseEventToContainerPoint(e)),
          (i.latlng = this._map.containerPointToLatLng(i.containerPoint)),
          this._dragMixinOnMouseDown(i),
          !1
        );
      },
      _simulateMouseMoveEvent(t) {
        let e = t.touches ? t.touches[0] : t,
          i = { originalEvent: e, target: this._layer };
        return (
          (i.containerPoint = this._map.mouseEventToContainerPoint(e)),
          (i.latlng = this._map.containerPointToLatLng(i.containerPoint)),
          this._dragMixinOnMouseMove(i),
          !1
        );
      },
      _simulateMouseUpEvent(t) {
        let i = {
          originalEvent: t.touches ? t.touches[0] : t,
          target: this._layer,
        };
        return (
          t.type.indexOf('touch') === -1 &&
            ((i.containerPoint = this._map.mouseEventToContainerPoint(t)),
            (i.latlng = this._map.containerPointToLatLng(i.containerPoint))),
          this._dragMixinOnMouseUp(i),
          !1
        );
      },
      _dragMixinOnMouseDown(t) {
        if (t.originalEvent.button > 0) return;
        this._overwriteEventIfItComesFromMarker(t);
        let e = t._fromLayerSync,
          i = this._syncLayers('_dragMixinOnMouseDown', t);
        if (
          (this._layer instanceof L.Marker &&
            (this.options.snappable && !e && !i
              ? this._initSnappableMarkers()
              : this._disableSnapping()),
          this._layer instanceof L.CircleMarker)
        ) {
          let r = 'resizeableCircleMarker';
          this._layer instanceof L.Circle && (r = 'resizeableCircle'),
            this.options.snappable && !e && !i
              ? this._layer.pm.options[r] || this._initSnappableMarkersDrag()
              : this._layer.pm.options[r]
                ? this._layer.pm._disableSnapping()
                : this._layer.pm._disableSnappingDrag();
        }
        this._safeToCacheDragState &&
          ((this._originalMapDragState = this._layer._map.dragging._enabled),
          (this._safeToCacheDragState = !1)),
          (this._tempDragCoord = t.latlng),
          L.DomEvent.on(
            this._map.getContainer(),
            'touchend mouseup',
            this._simulateMouseUpEvent,
            this
          ),
          L.DomEvent.on(
            this._map.getContainer(),
            'touchmove mousemove',
            this._simulateMouseMoveEvent,
            this
          );
      },
      _dragMixinOnMouseMove(t) {
        this._overwriteEventIfItComesFromMarker(t);
        let e = this._getDOMElem();
        this._syncLayers('_dragMixinOnMouseMove', t),
          this._dragging ||
            ((this._dragging = !0),
            L.DomUtil.addClass(e, 'leaflet-pm-dragging'),
            this._layer instanceof L.Marker || this._layer.bringToFront(),
            this._originalMapDragState && this._map.dragging.disable(),
            this._fireDragStart()),
          this._tempDragCoord || (this._tempDragCoord = t.latlng),
          this._onLayerDrag(t),
          this._layer instanceof L.CircleMarker &&
            this._layer.pm._updateHiddenPolyCircle();
      },
      _dragMixinOnMouseUp(t) {
        let e = this._getDOMElem();
        return (
          this._syncLayers('_dragMixinOnMouseUp', t),
          this._originalMapDragState && this._map.dragging.enable(),
          (this._safeToCacheDragState = !0),
          L.DomEvent.off(
            this._map.getContainer(),
            'touchmove mousemove',
            this._simulateMouseMoveEvent,
            this
          ),
          L.DomEvent.off(
            this._map.getContainer(),
            'touchend mouseup',
            this._simulateMouseUpEvent,
            this
          ),
          this._dragging
            ? (this._layer instanceof L.CircleMarker &&
                this._layer.pm._updateHiddenPolyCircle(),
              (this._layerDragged = !0),
              window.setTimeout(() => {
                (this._dragging = !1),
                  e && L.DomUtil.removeClass(e, 'leaflet-pm-dragging'),
                  this._fireDragEnd(),
                  this._fireEdit(),
                  (this._layerEdited = !0);
              }, 10),
              !0)
            : !1
        );
      },
      _onLayerDrag(t) {
        let { latlng: e } = t,
          i = {
            lat: e.lat - this._tempDragCoord.lat,
            lng: e.lng - this._tempDragCoord.lng,
          },
          r = (n) =>
            n.map((s) => {
              if (Array.isArray(s)) return r(s);
              let a = { lat: s.lat + i.lat, lng: s.lng + i.lng };
              return (s.alt || s.alt === 0) && (a.alt = s.alt), a;
            });
        if (
          (this._layer instanceof L.Circle &&
            this._layer.options.resizeableCircle) ||
          (this._layer instanceof L.CircleMarker &&
            this._layer.options.resizeableCircleMarker)
        ) {
          let n = r([this._layer.getLatLng()]);
          this._layer.setLatLng(n[0]),
            this._fireChange(this._layer.getLatLng(), 'Edit');
        } else if (
          this._layer instanceof L.CircleMarker ||
          this._layer instanceof L.Marker
        ) {
          let n = this._layer.getLatLng();
          this._layer._snapped && (n = this._layer._orgLatLng);
          let s = r([n]);
          this._layer.setLatLng(s[0]),
            this._fireChange(this._layer.getLatLng(), 'Edit');
        } else if (this._layer instanceof L.ImageOverlay) {
          let n = r([
            this._layer.getBounds().getNorthWest(),
            this._layer.getBounds().getSouthEast(),
          ]);
          this._layer.setBounds(n),
            this._fireChange(this._layer.getBounds(), 'Edit');
        } else {
          let n = r(this._layer.getLatLngs());
          this._layer.setLatLngs(n),
            this._fireChange(this._layer.getLatLngs(), 'Edit');
        }
        (this._tempDragCoord = e), (t.layer = this._layer), this._fireDrag(t);
      },
      addDraggingClass() {
        let t = this._getDOMElem();
        t && L.DomUtil.addClass(t, 'leaflet-pm-draggable');
      },
      removeDraggingClass() {
        let t = this._getDOMElem();
        t && L.DomUtil.removeClass(t, 'leaflet-pm-draggable');
      },
      _getDOMElem() {
        let t = null;
        return (
          this._layer._path
            ? (t = this._layer._path)
            : this._layer._renderer && this._layer._renderer._container
              ? (t = this._layer._renderer._container)
              : this._layer._image
                ? (t = this._layer._image)
                : this._layer._icon && (t = this._layer._icon),
          t
        );
      },
      _overwriteEventIfItComesFromMarker(t) {
        t.target.getLatLng &&
          (!t.target._radius || t.target._radius <= 10) &&
          ((t.containerPoint = this._map.mouseEventToContainerPoint(
            t.originalEvent
          )),
          (t.latlng = this._map.containerPointToLatLng(t.containerPoint)));
      },
      _syncLayers(t, e) {
        if (this.enabled()) return !1;
        if (
          !e._fromLayerSync &&
          this._layer === e.target &&
          this.options.syncLayersOnDrag
        ) {
          e._fromLayerSync = !0;
          let i = [];
          if (L.Util.isArray(this.options.syncLayersOnDrag))
            (i = this.options.syncLayersOnDrag),
              this.options.syncLayersOnDrag.forEach((r) => {
                r instanceof L.LayerGroup && (i = i.concat(r.pm.getLayers(!0)));
              });
          else if (
            this.options.syncLayersOnDrag === !0 &&
            this._parentLayerGroup
          )
            for (let r in this._parentLayerGroup) {
              let n = this._parentLayerGroup[r];
              n.pm && (i = n.pm.getLayers(!0));
            }
          return (
            L.Util.isArray(i) &&
              i.length > 0 &&
              ((i = i
                .filter((r) => !!r.pm)
                .filter((r) => !!r.pm.options.draggable)),
              i.forEach((r) => {
                r !== this._layer && r.pm[t] && ((r._snapped = !1), r.pm[t](e));
              })),
            i.length > 0
          );
        }
        return !1;
      },
      _stopDOMImageDrag(t) {
        return t.preventDefault(), !1;
      },
    },
    Il = v_;
  var Al = kt(ge());
  function b_(t, e, i, r) {
    return i.unproject(e.transform(i.project(t, r)), r);
  }
  function $i(t, e, i) {
    let r = i.getMaxZoom();
    if ((r === 1 / 0 && (r = i.getZoom()), L.Util.isArray(t))) {
      let n = [];
      return (
        t.forEach((s) => {
          n.push($i(s, e, i));
        }),
        n
      );
    }
    return t instanceof L.LatLng ? b_(t, e, i, r) : null;
  }
  function It(t, e) {
    e instanceof L.Layer && (e = e.getLatLng());
    let i = t.getMaxZoom();
    return i === 1 / 0 && (i = t.getZoom()), t.project(e, i);
  }
  function Ee(t, e) {
    let i = t.getMaxZoom();
    return i === 1 / 0 && (i = t.getZoom()), t.unproject(e, i);
  }
  var k_ = {
      _onRotateStart(t) {
        this._preventRenderingMarkers(!0),
          (this._rotationOriginLatLng = this._getRotationCenter().clone()),
          (this._rotationOriginPoint = It(
            this._map,
            this._rotationOriginLatLng
          )),
          (this._rotationStartPoint = It(this._map, t.target.getLatLng())),
          (this._initialRotateLatLng = Lt(this._layer)),
          (this._startAngle = this.getAngle());
        let e = Lt(
          this._rotationLayer,
          this._rotationLayer.pm._rotateOrgLatLng
        );
        this._fireRotationStart(this._rotationLayer, e),
          this._fireRotationStart(this._map, e);
      },
      _onRotate(t) {
        let e = It(this._map, t.target.getLatLng()),
          i = this._rotationStartPoint,
          r = this._rotationOriginPoint,
          n =
            Math.atan2(e.y - r.y, e.x - r.x) - Math.atan2(i.y - r.y, i.x - r.x);
        this._layer.setLatLngs(
          this._rotateLayer(
            n,
            this._initialRotateLatLng,
            this._rotationOriginLatLng,
            L.PM.Matrix.init(),
            this._map
          )
        );
        let s = this;
        function a(g, _ = [], E = -1) {
          if ((E > -1 && _.push(E), L.Util.isArray(g[0])))
            g.forEach((P, T) => a(P, _.slice(), T));
          else {
            let P =
              _.length > 0 ? (0, Al.default)(s._markers, _) : s._markers[0];
            g.forEach((T, G) => {
              P[G].setLatLng(T);
            });
          }
        }
        a(this._layer.getLatLngs());
        let o = Lt(this._rotationLayer);
        this._rotationLayer.setLatLngs(
          this._rotateLayer(
            n,
            this._rotationLayer.pm._rotateOrgLatLng,
            this._rotationOriginLatLng,
            L.PM.Matrix.init(),
            this._map
          )
        );
        let l = (n * 180) / Math.PI;
        l = l < 0 ? l + 360 : l;
        let h = l + this._startAngle;
        this._setAngle(h),
          this._rotationLayer.pm._setAngle(h),
          this._fireRotation(this._rotationLayer, l, o),
          this._fireRotation(this._map, l, o),
          this._rotationLayer.pm._fireChange(
            this._rotationLayer.getLatLngs(),
            'Rotation'
          );
      },
      _onRotateEnd() {
        let t = this._startAngle;
        delete this._rotationOriginLatLng,
          delete this._rotationOriginPoint,
          delete this._rotationStartPoint,
          delete this._initialRotateLatLng,
          delete this._startAngle;
        let e = Lt(
          this._rotationLayer,
          this._rotationLayer.pm._rotateOrgLatLng
        );
        (this._rotationLayer.pm._rotateOrgLatLng = Lt(this._rotationLayer)),
          this._fireRotationEnd(this._rotationLayer, t, e),
          this._fireRotationEnd(this._map, t, e),
          this._rotationLayer.pm._fireEdit(this._rotationLayer, 'Rotation'),
          this._preventRenderingMarkers(!1),
          (this._layerRotated = !0);
      },
      _rotateLayer(t, e, i, r, n) {
        let s = It(n, i);
        return (
          (this._matrix = r.clone().rotate(t, s).flip()), $i(e, this._matrix, n)
        );
      },
      _setAngle(t) {
        (t = t < 0 ? t + 360 : t), (this._angle = t % 360);
      },
      _getRotationCenter() {
        if (this._rotationCenter) return this._rotationCenter;
        let t = L.polygon(this._layer.getLatLngs(), {
            stroke: !1,
            fill: !1,
            pmIgnore: !0,
          }).addTo(this._layer._map),
          e = t.getCenter();
        return t.removeFrom(this._layer._map), e;
      },
      enableRotate() {
        if (!this.options.allowRotation) {
          this.disableRotate();
          return;
        }
        this.rotateEnabled() && this.disableRotate(),
          this._layer instanceof L.Rectangle &&
            this._angle === void 0 &&
            this.setInitAngle(
              ye(
                this._layer._map,
                this._layer.getLatLngs()[0][0],
                this._layer.getLatLngs()[0][1]
              ) || 0
            );
        let t = { fill: !1, stroke: !1, pmIgnore: !1, snapIgnore: !0 };
        (this._rotatePoly = L.polygon(this._layer.getLatLngs(), t)),
          (this._rotatePoly._pmTempLayer = !0),
          this._rotatePoly.addTo(this._layer._map),
          this._rotatePoly.pm._setAngle(this.getAngle()),
          this._rotatePoly.pm.setRotationCenter(this.getRotationCenter()),
          this._rotatePoly.pm.setOptions(
            this._layer._map.pm.getGlobalOptions()
          ),
          this._rotatePoly.pm.setOptions({
            rotate: !0,
            snappable: !1,
            hideMiddleMarkers: !0,
          }),
          (this._rotatePoly.pm._rotationLayer = this._layer),
          this._rotatePoly.pm.enable(),
          (this._rotateOrgLatLng = Lt(this._layer)),
          (this._rotateEnabled = !0),
          this._layer.on('remove', this.disableRotate, this),
          this._fireRotationEnable(this._layer),
          this._fireRotationEnable(this._layer._map);
      },
      disableRotate() {
        this.rotateEnabled() &&
          (this._rotatePoly.pm._layerRotated && this._fireUpdate(),
          (this._rotatePoly.pm._layerRotated = !1),
          this._rotatePoly.pm.disable(),
          this._rotatePoly.remove(),
          this._rotatePoly.pm.setOptions({ rotate: !1 }),
          (this._rotatePoly = void 0),
          (this._rotateOrgLatLng = void 0),
          this._layer.off('remove', this.disableRotate, this),
          (this._rotateEnabled = !1),
          this._fireRotationDisable(this._layer),
          this._fireRotationDisable(this._layer._map));
      },
      rotateEnabled() {
        return !!this._rotateEnabled;
      },
      rotateLayer(t) {
        let e = this.getAngle(),
          i = this._layer.getLatLngs(),
          r = t * (Math.PI / 180);
        this._layer.setLatLngs(
          this._rotateLayer(
            r,
            this._layer.getLatLngs(),
            this._getRotationCenter(),
            L.PM.Matrix.init(),
            this._layer._map
          )
        ),
          (this._rotateOrgLatLng = L.polygon(
            this._layer.getLatLngs()
          ).getLatLngs()),
          this._setAngle(this.getAngle() + t),
          this.rotateEnabled() &&
            this._rotatePoly &&
            this._rotatePoly.pm.enabled() &&
            (this._rotatePoly.setLatLngs(
              this._rotateLayer(
                r,
                this._rotatePoly.getLatLngs(),
                this._getRotationCenter(),
                L.PM.Matrix.init(),
                this._rotatePoly._map
              )
            ),
            this._rotatePoly.pm._initMarkers());
        let n = this.getAngle() - e;
        (n = n < 0 ? n + 360 : n),
          (this._startAngle = e),
          this._fireRotation(this._layer, n, i, this._layer),
          this._fireRotation(this._map || this._layer._map, n, i, this._layer),
          delete this._startAngle,
          this._fireChange(this._layer.getLatLngs(), 'Rotation');
      },
      rotateLayerToAngle(t) {
        let e = t - this.getAngle();
        this.rotateLayer(e);
      },
      getAngle() {
        return this._angle || 0;
      },
      setInitAngle(t) {
        this._setAngle(t);
      },
      getRotationCenter() {
        return this._getRotationCenter();
      },
      setRotationCenter(t) {
        (this._rotationCenter = t),
          this._rotatePoly && this._rotatePoly.pm.setRotationCenter(t);
      },
    },
    Gl = k_;
  var M_ = L.Class.extend({
      includes: [Il, Ae, Gl, Bt],
      options: {
        snappable: !0,
        snapDistance: 20,
        allowSelfIntersection: !0,
        allowSelfIntersectionEdit: !1,
        preventMarkerRemoval: !1,
        removeLayerBelowMinVertexCount: !0,
        limitMarkersToCount: -1,
        hideMiddleMarkers: !1,
        snapSegment: !0,
        syncLayersOnDrag: !1,
        draggable: !0,
        allowEditing: !0,
        allowRemoval: !0,
        allowCutting: !0,
        allowRotation: !0,
        addVertexOn: 'click',
        removeVertexOn: 'contextmenu',
        removeVertexValidation: void 0,
        addVertexValidation: void 0,
        moveVertexValidation: void 0,
        resizeableCircleMarker: !1,
        resizeableCircle: !0,
        snapMiddle: !1,
        snapVertex: !0,
      },
      setOptions(t) {
        L.Util.setOptions(this, t);
      },
      getOptions() {
        return this.options;
      },
      applyOptions() {},
      isPolygon() {
        return this._layer instanceof L.Polygon;
      },
      getShape() {
        return this._shape;
      },
      _setPane(t, e) {
        e === 'layerPane'
          ? (t.options.pane =
              (this._map.pm.globalOptions.panes &&
                this._map.pm.globalOptions.panes.layerPane) ||
              'overlayPane')
          : e === 'vertexPane'
            ? (t.options.pane =
                (this._map.pm.globalOptions.panes &&
                  this._map.pm.globalOptions.panes.vertexPane) ||
                'markerPane')
            : e === 'markerPane' &&
              (t.options.pane =
                (this._map.pm.globalOptions.panes &&
                  this._map.pm.globalOptions.panes.markerPane) ||
                'markerPane');
      },
      remove() {
        (this._map || this._layer._map).pm.removeLayer({ target: this._layer });
      },
      _vertexValidation(t, e) {
        let i = e.target,
          r = { layer: this._layer, marker: i, event: e },
          n = '';
        return (
          t === 'move'
            ? (n = 'moveVertexValidation')
            : t === 'add'
              ? (n = 'addVertexValidation')
              : t === 'remove' && (n = 'removeVertexValidation'),
          this.options[n] &&
          typeof this.options[n] == 'function' &&
          !this.options[n](r)
            ? (t === 'move' && (i._cancelDragEventChain = i.getLatLng()), !1)
            : ((i._cancelDragEventChain = null), !0)
        );
      },
      _vertexValidationDrag(t) {
        return t._cancelDragEventChain
          ? ((t._latlng = t._cancelDragEventChain), t.update(), !1)
          : !0;
      },
      _vertexValidationDragEnd(t) {
        return t._cancelDragEventChain
          ? ((t._cancelDragEventChain = null), !1)
          : !0;
      },
    }),
    H = M_;
  H.LayerGroup = L.Class.extend({
    initialize(t) {
      (this._layerGroup = t),
        (this._layers = this.getLayers()),
        this._getMap(),
        this._layers.forEach((r) => this._initLayer(r));
      let e = (r) => {
        if (r.layer._pmTempLayer) return;
        this._layers = this.getLayers();
        let n = this._layers.filter(
          (s) =>
            !s.pm._parentLayerGroup ||
            !(this._layerGroup._leaflet_id in s.pm._parentLayerGroup)
        );
        n.forEach((s) => {
          this._initLayer(s);
        }),
          n.length > 0 &&
            this._getMap() &&
            this._getMap().pm.globalEditModeEnabled() &&
            this.enabled() &&
            this.enable(this.getOptions());
      };
      this._layerGroup.on('layeradd', L.Util.throttle(e, 100, this), this),
        this._layerGroup.on(
          'layerremove',
          (r) => {
            this._removeLayerFromGroup(r.target);
          },
          this
        );
      let i = (r) => {
        r.target._pmTempLayer || (this._layers = this.getLayers());
      };
      this._layerGroup.on('layerremove', L.Util.throttle(i, 100, this), this);
    },
    enable(t, e = []) {
      e.length === 0 && (this._layers = this.getLayers()),
        (this._options = t),
        this._layers.forEach((i) => {
          i instanceof L.LayerGroup
            ? e.indexOf(i._leaflet_id) === -1 &&
              (e.push(i._leaflet_id), i.pm.enable(t, e))
            : i.pm.enable(t);
        });
    },
    disable(t = []) {
      t.length === 0 && (this._layers = this.getLayers()),
        this._layers.forEach((e) => {
          e instanceof L.LayerGroup
            ? t.indexOf(e._leaflet_id) === -1 &&
              (t.push(e._leaflet_id), e.pm.disable(t))
            : e.pm.disable();
        });
    },
    enabled(t = []) {
      return (
        t.length === 0 && (this._layers = this.getLayers()),
        !!this._layers.find((i) =>
          i instanceof L.LayerGroup
            ? t.indexOf(i._leaflet_id) === -1
              ? (t.push(i._leaflet_id), i.pm.enabled(t))
              : !1
            : i.pm.enabled()
        )
      );
    },
    toggleEdit(t, e = []) {
      e.length === 0 && (this._layers = this.getLayers()),
        (this._options = t),
        this._layers.forEach((i) => {
          i instanceof L.LayerGroup
            ? e.indexOf(i._leaflet_id) === -1 &&
              (e.push(i._leaflet_id), i.pm.toggleEdit(t, e))
            : i.pm.toggleEdit(t);
        });
    },
    _initLayer(t) {
      let e = L.Util.stamp(this._layerGroup);
      t.pm._parentLayerGroup || (t.pm._parentLayerGroup = {}),
        (t.pm._parentLayerGroup[e] = this._layerGroup);
    },
    _removeLayerFromGroup(t) {
      if (t.pm && t.pm._layerGroup) {
        let e = L.Util.stamp(this._layerGroup);
        delete t.pm._layerGroup[e];
      }
    },
    dragging() {
      return (
        (this._layers = this.getLayers()),
        this._layers ? !!this._layers.find((e) => e.pm.dragging()) : !1
      );
    },
    getOptions() {
      return this.options;
    },
    _getMap() {
      return this._map || this._layers.find((t) => !!t._map)?._map || null;
    },
    getLayers(t = !1, e = !0, i = !0, r = []) {
      let n = [];
      return (
        t
          ? this._layerGroup.getLayers().forEach((s) => {
              n.push(s),
                s instanceof L.LayerGroup &&
                  r.indexOf(s._leaflet_id) === -1 &&
                  (r.push(s._leaflet_id),
                  (n = n.concat(s.pm.getLayers(!0, !0, !0, r))));
            })
          : (n = this._layerGroup.getLayers()),
        i && (n = n.filter((s) => !(s instanceof L.LayerGroup))),
        e &&
          ((n = n.filter((s) => !!s.pm)),
          (n = n.filter((s) => !s._pmTempLayer)),
          (n = n.filter(
            (s) =>
              (!L.PM.optIn && !s.options.pmIgnore) ||
              (L.PM.optIn && s.options.pmIgnore === !1)
          ))),
        n
      );
    },
    setOptions(t, e = []) {
      e.length === 0 && (this._layers = this.getLayers()),
        (this.options = t),
        this._layers.forEach((i) => {
          i.pm &&
            (i instanceof L.LayerGroup
              ? e.indexOf(i._leaflet_id) === -1 &&
                (e.push(i._leaflet_id), i.pm.setOptions(t, e))
              : i.pm.setOptions(t));
        });
    },
  });
  H.Marker = H.extend({
    _shape: 'Marker',
    initialize(t) {
      (this._layer = t),
        (this._enabled = !1),
        this._layer.on('dragend', this._onDragEnd, this);
    },
    enable(t = { draggable: !0 }) {
      if (
        (L.Util.setOptions(this, t),
        !this.options.allowEditing || !this._layer._map)
      ) {
        this.disable();
        return;
      }
      (this._map = this._layer._map),
        this.enabled() && this.disable(),
        this.applyOptions(),
        this._layer.on('remove', this.disable, this),
        (this._enabled = !0),
        this._layer.on('pm:dragstart', this._onDragStart, this),
        this._layer.on('pm:dragend', this._onMarkerDragEnd, this),
        this._fireEnable();
    },
    disable() {
      this.enabled() &&
        (this.disableLayerDrag(),
        this._layer.off('remove', this.disable, this),
        this._layer.off('contextmenu', this._removeMarker, this),
        this._layerEdited && this._fireUpdate(),
        (this._layerEdited = !1),
        this._fireDisable(),
        (this._enabled = !1));
    },
    enabled() {
      return this._enabled;
    },
    toggleEdit(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    applyOptions() {
      this.options.snappable
        ? this._initSnappableMarkers()
        : this._disableSnapping(),
        this.options.draggable
          ? this.enableLayerDrag()
          : this.disableLayerDrag(),
        this.options.preventMarkerRemoval ||
          this._layer.on('contextmenu', this._removeMarker, this);
    },
    _removeMarker(t) {
      let e = t.target;
      e.remove(), this._fireRemove(e), this._fireRemove(this._map, e);
    },
    _onDragStart() {
      this._map.pm.Draw.Marker._layerIsDragging = !0;
    },
    _onMarkerDragEnd() {
      this._map.pm.Draw.Marker._layerIsDragging = !1;
    },
    _onDragEnd() {
      this._fireEdit(), (this._layerEdited = !0);
    },
    _initSnappableMarkers() {
      let t = this._layer;
      (this.options.snapDistance = this.options.snapDistance || 30),
        (this.options.snapSegment =
          this.options.snapSegment === void 0 ? !0 : this.options.snapSegment),
        t.off('pm:drag', this._handleSnapping, this),
        t.on('pm:drag', this._handleSnapping, this),
        t.off('pm:dragend', this._cleanupSnapping, this),
        t.on('pm:dragend', this._cleanupSnapping, this),
        t.off('pm:dragstart', this._unsnap, this),
        t.on('pm:dragstart', this._unsnap, this);
    },
    _disableSnapping() {
      let t = this._layer;
      t.off('pm:drag', this._handleSnapping, this),
        t.off('pm:dragend', this._cleanupSnapping, this),
        t.off('pm:dragstart', this._unsnap, this);
    },
  });
  var Et = kt(ge());
  var x_ = {
      filterMarkerGroup() {
        (this.markerCache = []),
          this.createCache(),
          this._layer.on('pm:edit', this.createCache, this),
          this.applyLimitFilters({}),
          this.throttledApplyLimitFilters ||
            (this.throttledApplyLimitFilters = L.Util.throttle(
              this.applyLimitFilters,
              100,
              this
            )),
          this._layer.on('pm:disable', this._removeMarkerLimitEvents, this),
          this._layer.on('remove', this._removeMarkerLimitEvents, this),
          this.options.limitMarkersToCount > -1 &&
            (this._layer.on('pm:vertexremoved', this._initMarkers, this),
            this._map.on('mousemove', this.throttledApplyLimitFilters, this));
      },
      _removeMarkerLimitEvents() {
        this._map.off('mousemove', this.throttledApplyLimitFilters, this),
          this._layer.off('pm:edit', this.createCache, this),
          this._layer.off('pm:disable', this._removeMarkerLimitEvents, this),
          this._layer.off('pm:vertexremoved', this._initMarkers, this);
      },
      createCache() {
        let t = [...this._markerGroup.getLayers(), ...this.markerCache];
        this.markerCache = t.filter((e, i, r) => r.indexOf(e) === i);
      },
      _removeFromCache(t) {
        let e = this.markerCache.indexOf(t);
        e > -1 && this.markerCache.splice(e, 1);
      },
      renderLimits(t) {
        this.markerCache.forEach((e) => {
          t.includes(e)
            ? this._markerGroup.addLayer(e)
            : this._markerGroup.removeLayer(e);
        });
      },
      applyLimitFilters({ latlng: t = { lat: 0, lng: 0 } }) {
        if (this._preventRenderMarkers) return;
        let i = [...this._filterClosestMarkers(t)];
        this.renderLimits(i);
      },
      _filterClosestMarkers(t) {
        let e = [...this.markerCache],
          i = this.options.limitMarkersToCount;
        return i === -1
          ? e
          : (e.sort((n, s) => {
              let a = n._latlng.distanceTo(t),
                o = s._latlng.distanceTo(t);
              return a - o;
            }),
            e.filter((n, s) => (i > -1 ? s < i : !0)));
      },
      _preventRenderMarkers: !1,
      _preventRenderingMarkers(t) {
        this._preventRenderMarkers = !!t;
      },
    },
    ql = x_;
  H.Line = H.extend({
    includes: [ql],
    _shape: 'Line',
    initialize(t) {
      (this._layer = t), (this._enabled = !1);
    },
    enable(t) {
      if (
        (L.Util.setOptions(this, t),
        (this._map = this._layer._map),
        !!this._map)
      ) {
        if (!this.options.allowEditing) {
          this.disable();
          return;
        }
        this.enabled() && this.disable(),
          (this._enabled = !0),
          this._initMarkers(),
          this.applyOptions(),
          this._layer.on('remove', this.disable, this),
          this.options.allowSelfIntersection ||
            this._layer.on(
              'pm:vertexremoved',
              this._handleSelfIntersectionOnVertexRemoval,
              this
            ),
          this.options.allowSelfIntersection
            ? (this.cachedColor = void 0)
            : (this._layer.options.color !== '#f00000ff'
                ? ((this.cachedColor = this._layer.options.color),
                  (this.isRed = !1))
                : (this.isRed = !0),
              this._handleLayerStyle()),
          this._fireEnable();
      }
    },
    disable() {
      if (!this.enabled() || this._dragging) return;
      (this._enabled = !1),
        this._markerGroup.clearLayers(),
        this._markerGroup.removeFrom(this._map),
        this._layer.off('remove', this.disable, this),
        this.options.allowSelfIntersection ||
          this._layer.off(
            'pm:vertexremoved',
            this._handleSelfIntersectionOnVertexRemoval,
            this
          );
      let t = this._layer._path
        ? this._layer._path
        : this._layer._renderer._container;
      L.DomUtil.removeClass(t, 'leaflet-pm-draggable'),
        this._layerEdited && this._fireUpdate(),
        (this._layerEdited = !1),
        this._fireDisable();
    },
    enabled() {
      return this._enabled;
    },
    toggleEdit(t) {
      return this.enabled() ? this.disable() : this.enable(t), this.enabled();
    },
    applyOptions() {
      this.options.snappable
        ? this._initSnappableMarkers()
        : this._disableSnapping();
    },
    _initMarkers() {
      let t = this._map,
        e = this._layer.getLatLngs();
      this._markerGroup &&
        (this._markerGroup.removeFrom(t), this._markerGroup.clearLayers()),
        (this._markerGroup = new L.FeatureGroup()),
        (this._markerGroup._pmTempLayer = !0);
      let i = (r) => {
        if (Array.isArray(r[0])) return r.map(i, this);
        let n = r.map(this._createMarker, this);
        return (
          this.options.hideMiddleMarkers !== !0 &&
            r.map((s, a) => {
              let o = this.isPolygon() ? (a + 1) % r.length : a + 1;
              return this._createMiddleMarker(n[a], n[o]);
            }),
          n
        );
      };
      (this._markers = i(e)),
        this.filterMarkerGroup(),
        t.addLayer(this._markerGroup);
    },
    _createMarker(t) {
      let e = new L.Marker(t, {
        draggable: !0,
        icon: L.divIcon({ className: 'marker-icon' }),
      });
      return (
        this._setPane(e, 'vertexPane'),
        (e._pmTempLayer = !0),
        this.options.rotate
          ? (e.on('dragstart', this._onRotateStart, this),
            e.on('drag', this._onRotate, this),
            e.on('dragend', this._onRotateEnd, this))
          : (e.on('click', this._onVertexClick, this),
            e.on('dragstart', this._onMarkerDragStart, this),
            e.on('move', this._onMarkerDrag, this),
            e.on('dragend', this._onMarkerDragEnd, this),
            this.options.preventMarkerRemoval ||
              e.on(this.options.removeVertexOn, this._removeMarker, this)),
        this._markerGroup.addLayer(e),
        e
      );
    },
    _createMiddleMarker(t, e) {
      if (!t || !e) return !1;
      let i = L.PM.Utils.calcMiddleLatLng(
          this._map,
          t.getLatLng(),
          e.getLatLng()
        ),
        r = this._createMarker(i),
        n = L.divIcon({ className: 'marker-icon marker-icon-middle' });
      return (
        r.setIcon(n),
        (r.leftM = t),
        (r.rightM = e),
        (t._middleMarkerNext = r),
        (e._middleMarkerPrev = r),
        r.on(this.options.addVertexOn, this._onMiddleMarkerClick, this),
        r.on('movestart', this._onMiddleMarkerMoveStart, this),
        r
      );
    },
    _onMiddleMarkerClick(t) {
      let e = t.target;
      if (!this._vertexValidation('add', t)) return;
      let i = L.divIcon({ className: 'marker-icon' });
      e.setIcon(i), this._addMarker(e, e.leftM, e.rightM);
    },
    _onMiddleMarkerMoveStart(t) {
      let e = t.target;
      if (
        (e.on('moveend', this._onMiddleMarkerMoveEnd, this),
        !this._vertexValidation('add', t))
      ) {
        e.on('move', this._onMiddleMarkerMovePrevent, this);
        return;
      }
      (e._dragging = !0), this._addMarker(e, e.leftM, e.rightM);
    },
    _onMiddleMarkerMovePrevent(t) {
      let e = t.target;
      this._vertexValidationDrag(e);
    },
    _onMiddleMarkerMoveEnd(t) {
      let e = t.target;
      if (
        (e.off('move', this._onMiddleMarkerMovePrevent, this),
        e.off('moveend', this._onMiddleMarkerMoveEnd, this),
        !this._vertexValidationDragEnd(e))
      )
        return;
      let i = L.divIcon({ className: 'marker-icon' });
      e.setIcon(i),
        setTimeout(() => {
          delete e._dragging;
        }, 100);
    },
    _addMarker(t, e, i) {
      t.off('movestart', this._onMiddleMarkerMoveStart, this),
        t.off(this.options.addVertexOn, this._onMiddleMarkerClick, this);
      let r = t.getLatLng(),
        n = this._layer._latlngs;
      delete t.leftM, delete t.rightM;
      let {
          indexPath: s,
          index: a,
          parentPath: o,
        } = L.PM.Utils.findDeepMarkerIndex(this._markers, e),
        l = s.length > 1 ? (0, Et.default)(n, o) : n,
        h = s.length > 1 ? (0, Et.default)(this._markers, o) : this._markers;
      l.splice(a + 1, 0, r),
        h.splice(a + 1, 0, t),
        this._layer.setLatLngs(n),
        this.options.hideMiddleMarkers !== !0 &&
          (this._createMiddleMarker(e, t), this._createMiddleMarker(t, i)),
        this._fireEdit(),
        (this._layerEdited = !0),
        this._fireChange(this._layer.getLatLngs(), 'Edit'),
        this._fireVertexAdded(
          t,
          L.PM.Utils.findDeepMarkerIndex(this._markers, t).indexPath,
          r
        ),
        this.options.snappable && this._initSnappableMarkers();
    },
    hasSelfIntersection() {
      return qt(this._layer.toGeoJSON(15)).features.length > 0;
    },
    _handleSelfIntersectionOnVertexRemoval() {
      this._handleLayerStyle(!0) &&
        (this._layer.setLatLngs(this._coordsBeforeEdit),
        (this._coordsBeforeEdit = null),
        this._initMarkers());
    },
    _handleLayerStyle(t) {
      let e = this._layer,
        i,
        r;
      if (
        (this.options.allowSelfIntersection
          ? (i = !1)
          : ((r = qt(this._layer.toGeoJSON(15))), (i = r.features.length > 0)),
        i)
      ) {
        if (
          (!this.options.allowSelfIntersection &&
            this.options.allowSelfIntersectionEdit &&
            this._updateDisabledMarkerStyle(this._markers, !0),
          this.isRed)
        )
          return i;
        t
          ? this._flashLayer()
          : (e.setStyle({ color: '#f00000ff' }), (this.isRed = !0)),
          this._fireIntersect(r);
      } else
        e.setStyle({ color: this.cachedColor }),
          (this.isRed = !1),
          !this.options.allowSelfIntersection &&
            this.options.allowSelfIntersectionEdit &&
            this._updateDisabledMarkerStyle(this._markers, !1);
      return i;
    },
    _flashLayer() {
      this.cachedColor || (this.cachedColor = this._layer.options.color),
        this._layer.setStyle({ color: '#f00000ff' }),
        (this.isRed = !0),
        window.setTimeout(() => {
          this._layer.setStyle({ color: this.cachedColor }), (this.isRed = !1);
        }, 200);
    },
    _updateDisabledMarkerStyle(t, e) {
      t.forEach((i) => {
        Array.isArray(i)
          ? this._updateDisabledMarkerStyle(i, e)
          : i._icon &&
            (e && !this._checkMarkerAllowedToDrag(i)
              ? L.DomUtil.addClass(i._icon, 'vertexmarker-disabled')
              : L.DomUtil.removeClass(i._icon, 'vertexmarker-disabled'));
      });
    },
    _removeMarker(t) {
      let e = t.target;
      if (!this._vertexValidation('remove', t)) return;
      this.options.allowSelfIntersection ||
        (this._coordsBeforeEdit = Lt(this._layer, this._layer.getLatLngs()));
      let i = this._layer.getLatLngs(),
        {
          indexPath: r,
          index: n,
          parentPath: s,
        } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
      if (!r) return;
      let a = r.length > 1 ? (0, Et.default)(i, s) : i,
        o = r.length > 1 ? (0, Et.default)(this._markers, s) : this._markers,
        l = s[s.length - 1] > 0 && this._layer instanceof L.Polygon;
      if (
        !this.options.removeLayerBelowMinVertexCount &&
        !l &&
        (a.length <= 2 || (this.isPolygon() && a.length <= 3))
      ) {
        this._flashLayer();
        return;
      }
      a.splice(n, 1),
        this._layer.setLatLngs(i),
        this.isPolygon() && a.length <= 2 && a.splice(0, a.length);
      let h = !1;
      if (
        (a.length <= 1 &&
          (a.splice(0, a.length),
          s.length > 1 && r.length > 1 && (i = _e(i)),
          this._layer.setLatLngs(i),
          this._initMarkers(),
          (h = !0)),
        me(i) || this._layer.remove(),
        (i = _e(i)),
        this._layer.setLatLngs(i),
        (this._markers = _e(this._markers)),
        !h &&
          ((o =
            r.length > 1 ? (0, Et.default)(this._markers, s) : this._markers),
          e._middleMarkerPrev &&
            (this._markerGroup.removeLayer(e._middleMarkerPrev),
            this._removeFromCache(e._middleMarkerPrev)),
          e._middleMarkerNext &&
            (this._markerGroup.removeLayer(e._middleMarkerNext),
            this._removeFromCache(e._middleMarkerNext)),
          this._markerGroup.removeLayer(e),
          this._removeFromCache(e),
          o))
      ) {
        let g, _;
        if (
          (this.isPolygon()
            ? ((g = (n + 1) % o.length), (_ = (n + (o.length - 1)) % o.length))
            : ((_ = n - 1 < 0 ? void 0 : n - 1),
              (g = n + 1 >= o.length ? void 0 : n + 1)),
          g !== _)
        ) {
          let E = o[_],
            P = o[g];
          this.options.hideMiddleMarkers !== !0 &&
            this._createMiddleMarker(E, P);
        }
        o.splice(n, 1);
      }
      this._fireEdit(),
        (this._layerEdited = !0),
        this._fireVertexRemoved(e, r),
        this._fireChange(this._layer.getLatLngs(), 'Edit');
    },
    updatePolygonCoordsFromMarkerDrag(t) {
      let e = this._layer.getLatLngs(),
        i = t.getLatLng(),
        {
          indexPath: r,
          index: n,
          parentPath: s,
        } = L.PM.Utils.findDeepMarkerIndex(this._markers, t),
        a = r.length > 1 ? (0, Et.default)(e, s) : e;
      (i.alt = a[n].alt), a.splice(n, 1, i), this._layer.setLatLngs(e);
    },
    _getNeighborMarkers(t) {
      let {
          indexPath: e,
          index: i,
          parentPath: r,
        } = L.PM.Utils.findDeepMarkerIndex(this._markers, t),
        n = e.length > 1 ? (0, Et.default)(this._markers, r) : this._markers,
        s = (i + 1) % n.length,
        a = (i + (n.length - 1)) % n.length,
        o = n[a],
        l = n[s];
      return { prevMarker: o, nextMarker: l };
    },
    _checkMarkerAllowedToDrag(t) {
      let { prevMarker: e, nextMarker: i } = this._getNeighborMarkers(t),
        r = L.polyline([e.getLatLng(), t.getLatLng()]),
        n = L.polyline([t.getLatLng(), i.getLatLng()]),
        s = ut(this._layer.toGeoJSON(15), r.toGeoJSON(15)).features.length,
        a = ut(this._layer.toGeoJSON(15), n.toGeoJSON(15)).features.length;
      return (
        t.getLatLng() === this._markers[0][0].getLatLng()
          ? (a += 1)
          : t.getLatLng() ===
              this._markers[0][this._markers[0].length - 1].getLatLng() &&
            (s += 1),
        !(s <= 2 && a <= 2)
      );
    },
    _onMarkerDragStart(t) {
      let e = t.target;
      if (
        (this._preventRenderingMarkers(!0),
        this.cachedColor || (this.cachedColor = this._layer.options.color),
        !this._vertexValidation('move', t))
      )
        return;
      let { indexPath: i } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
      this._fireMarkerDragStart(t, i),
        this.options.allowSelfIntersection ||
          (this._coordsBeforeEdit = Lt(this._layer, this._layer.getLatLngs())),
        !this.options.allowSelfIntersection &&
        this.options.allowSelfIntersectionEdit &&
        this.hasSelfIntersection()
          ? (this._markerAllowedToDrag = this._checkMarkerAllowedToDrag(e))
          : (this._markerAllowedToDrag = null);
    },
    _onMarkerDrag(t) {
      let e = t.target;
      if (!this._vertexValidationDrag(e)) return;
      let {
        indexPath: i,
        index: r,
        parentPath: n,
      } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
      if (!i) return;
      if (
        !this.options.allowSelfIntersection &&
        this.options.allowSelfIntersectionEdit &&
        this.hasSelfIntersection() &&
        this._markerAllowedToDrag === !1
      ) {
        this._layer.setLatLngs(this._coordsBeforeEdit),
          this._initMarkers(),
          this._handleLayerStyle();
        return;
      }
      this.updatePolygonCoordsFromMarkerDrag(e);
      let s = i.length > 1 ? (0, Et.default)(this._markers, n) : this._markers,
        a = (r + 1) % s.length,
        o = (r + (s.length - 1)) % s.length,
        l = e.getLatLng(),
        h = s[o].getLatLng(),
        g = s[a].getLatLng();
      if (e._middleMarkerNext) {
        let _ = L.PM.Utils.calcMiddleLatLng(this._map, l, g);
        e._middleMarkerNext.setLatLng(_);
      }
      if (e._middleMarkerPrev) {
        let _ = L.PM.Utils.calcMiddleLatLng(this._map, l, h);
        e._middleMarkerPrev.setLatLng(_);
      }
      this.options.allowSelfIntersection || this._handleLayerStyle(),
        this._fireMarkerDrag(t, i),
        this._fireChange(this._layer.getLatLngs(), 'Edit');
    },
    _onMarkerDragEnd(t) {
      let e = t.target;
      if (
        (this._preventRenderingMarkers(!1), !this._vertexValidationDragEnd(e))
      )
        return;
      let { indexPath: i } = L.PM.Utils.findDeepMarkerIndex(this._markers, e),
        r = !this.options.allowSelfIntersection && this.hasSelfIntersection();
      r &&
        this.options.allowSelfIntersectionEdit &&
        this._markerAllowedToDrag &&
        (r = !1);
      let n = !this.options.allowSelfIntersection && r;
      if ((this._fireMarkerDragEnd(t, i, n), n)) {
        this._layer.setLatLngs(this._coordsBeforeEdit),
          (this._coordsBeforeEdit = null),
          this._initMarkers(),
          this.options.snappable && this._initSnappableMarkers(),
          this._handleLayerStyle(),
          this._fireLayerReset(t, i);
        return;
      }
      !this.options.allowSelfIntersection &&
        this.options.allowSelfIntersectionEdit &&
        this._handleLayerStyle(),
        this._fireEdit(),
        (this._layerEdited = !0),
        this._fireChange(this._layer.getLatLngs(), 'Edit');
    },
    _onVertexClick(t) {
      let e = t.target;
      if (e._dragging) return;
      let { indexPath: i } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
      this._fireVertexClick(t, i);
    },
  });
  H.Polygon = H.Line.extend({
    _shape: 'Polygon',
    _checkMarkerAllowedToDrag(t) {
      let { prevMarker: e, nextMarker: i } = this._getNeighborMarkers(t),
        r = L.polyline([e.getLatLng(), t.getLatLng()]),
        n = L.polyline([t.getLatLng(), i.getLatLng()]),
        s = ut(this._layer.toGeoJSON(15), r.toGeoJSON(15)).features.length,
        a = ut(this._layer.toGeoJSON(15), n.toGeoJSON(15)).features.length;
      return !(s <= 2 && a <= 2);
    },
  });
  H.Rectangle = H.Polygon.extend({
    _shape: 'Rectangle',
    _initMarkers() {
      let t = this._map,
        e = this._findCorners();
      this._markerGroup && this._markerGroup.clearLayers(),
        (this._markerGroup = new L.FeatureGroup()),
        (this._markerGroup._pmTempLayer = !0),
        t.addLayer(this._markerGroup),
        (this._markers = []),
        (this._markers[0] = e.map(this._createMarker, this)),
        ([this._cornerMarkers] = this._markers),
        this._layer.getLatLngs()[0].forEach((i, r) => {
          let n = this._cornerMarkers.find((s) => s._index === r);
          n && n.setLatLng(i);
        });
    },
    applyOptions() {
      this.options.snappable
        ? this._initSnappableMarkers()
        : this._disableSnapping(),
        this._addMarkerEvents();
    },
    _createMarker(t, e) {
      let i = new L.Marker(t, {
        draggable: !0,
        icon: L.divIcon({ className: 'marker-icon' }),
      });
      return (
        this._setPane(i, 'vertexPane'),
        (i._origLatLng = t),
        (i._index = e),
        (i._pmTempLayer = !0),
        i.on('click', this._onVertexClick, this),
        this._markerGroup.addLayer(i),
        i
      );
    },
    _addMarkerEvents() {
      this._markers[0].forEach((t) => {
        t.on('dragstart', this._onMarkerDragStart, this),
          t.on('drag', this._onMarkerDrag, this),
          t.on('dragend', this._onMarkerDragEnd, this),
          this.options.preventMarkerRemoval ||
            t.on('contextmenu', this._removeMarker, this);
      });
    },
    _removeMarker() {
      return null;
    },
    _onMarkerDragStart(t) {
      if (!this._vertexValidation('move', t)) return;
      let e = t.target,
        i = this._cornerMarkers;
      (e._oppositeCornerLatLng = i
        .find((n) => n._index === (e._index + 2) % 4)
        .getLatLng()),
        (e._snapped = !1);
      let { indexPath: r } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
      this._fireMarkerDragStart(t, r);
    },
    _onMarkerDrag(t) {
      let e = t.target;
      if (!this._vertexValidationDrag(e) || e._index === void 0) return;
      this._adjustRectangleForMarkerMove(e);
      let { indexPath: i } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
      this._fireMarkerDrag(t, i),
        this._fireChange(this._layer.getLatLngs(), 'Edit');
    },
    _onMarkerDragEnd(t) {
      let e = t.target;
      if (!this._vertexValidationDragEnd(e)) return;
      this._cornerMarkers.forEach((r) => {
        delete r._oppositeCornerLatLng;
      });
      let { indexPath: i } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
      this._fireMarkerDragEnd(t, i),
        this._fireEdit(),
        (this._layerEdited = !0),
        this._fireChange(this._layer.getLatLngs(), 'Edit');
    },
    _adjustRectangleForMarkerMove(t) {
      L.extend(t._origLatLng, t._latlng);
      let e = L.PM.Utils._getRotatedRectangle(
        t.getLatLng(),
        t._oppositeCornerLatLng,
        this.getAngle(),
        this._map
      );
      this._layer.setLatLngs(e),
        this._adjustAllMarkers(t),
        this._layer.redraw();
    },
    _adjustAllMarkers(t) {
      let e = this._layer.getLatLngs()[0];
      if (e && e.length !== 4 && e.length > 0)
        e.forEach((r, n) => {
          this._cornerMarkers[n].setLatLng(r);
        }),
          this._cornerMarkers.slice(e.length).forEach((r) => {
            r.setLatLng(e[0]);
          });
      else if (!e || !e.length) console.error('The layer has no LatLngs');
      else {
        let i = e.findIndex((r) => t.getLatLng().equals(r));
        i > -1
          ? (this._cornerMarkers[(t._index + 1) % 4].setLatLng(e[(i + 1) % 4]),
            this._cornerMarkers[(t._index + 2) % 4].setLatLng(e[(i + 2) % 4]),
            this._cornerMarkers[(t._index + 3) % 4].setLatLng(e[(i + 3) % 4]))
          : this._cornerMarkers.forEach((r) => {
              r.setLatLng(e[r._index]);
            });
      }
    },
    _findCorners() {
      this._angle === void 0 &&
        this.setInitAngle(
          ye(
            this._map,
            this._layer.getLatLngs()[0][0],
            this._layer.getLatLngs()[0][1]
          ) || 0
        );
      let t = this._layer.getLatLngs()[0];
      return L.PM.Utils._getRotatedRectangle(
        t[0],
        t[2],
        this.getAngle(),
        this._map || this
      );
    },
  });
  H.CircleMarker = H.extend({
    _shape: 'CircleMarker',
    initialize(t) {
      (this._layer = t),
        (this._enabled = !1),
        (this._minRadiusOption = 'minRadiusCircleMarker'),
        (this._maxRadiusOption = 'maxRadiusCircleMarker'),
        (this._editableOption = 'resizeableCircleMarker'),
        this._updateHiddenPolyCircle();
    },
    enable(t = { draggable: !0, snappable: !0 }) {
      if (
        (L.Util.setOptions(this, t),
        this.options.editable &&
          ((this.options.resizeableCircleMarker = this.options.editable),
          delete this.options.editable),
        !this.options.allowEditing || !this._layer._map)
      ) {
        this.disable();
        return;
      }
      (this._map = this._layer._map),
        this.enabled() && this.disable(),
        this.applyOptions(),
        this._layer.on('remove', this.disable, this),
        (this._enabled = !0),
        this._extendingEnable(),
        this._updateHiddenPolyCircle(),
        this._fireEnable();
    },
    _extendingEnable() {
      this._layer.on('pm:dragstart', this._onDragStart, this),
        this._layer.on('pm:drag', this._onMarkerDrag, this),
        this._layer.on('pm:dragend', this._onMarkerDragEnd, this);
    },
    disable() {
      this.dragging() ||
        (this._map || (this._map = this._layer._map),
        this._map &&
          this.enabled() &&
          (this.layerDragEnabled() && this.disableLayerDrag(),
          this._helperLayers &&
            (this._helperLayers.clearLayers(),
            this._helperLayers.removeFrom(this._map)),
          this.options[this._editableOption]
            ? (this._map.off('move', this._syncMarkers, this),
              this._outerMarker.off(
                'drag',
                this._handleOuterMarkerSnapping,
                this
              ))
            : this._map.off('move', this._updateHiddenPolyCircle, this),
          this._extendingDisable(),
          this._layer.off('remove', this.disable, this),
          this._layerEdited && this._fireUpdate(),
          (this._layerEdited = !1),
          this._fireDisable(),
          (this._enabled = !1)));
    },
    _extendingDisable() {
      this._layer.off('contextmenu', this._removeMarker, this);
    },
    enabled() {
      return this._enabled;
    },
    toggleEdit(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    applyOptions() {
      this.options[this._editableOption]
        ? (this._initMarkers(),
          this._map.on('move', this._syncMarkers, this),
          this.options.snappable
            ? (this._initSnappableMarkers(),
              this._outerMarker.on(
                'drag',
                this._handleOuterMarkerSnapping,
                this
              ),
              this._outerMarker.on('move', this._syncHintLine, this),
              this._outerMarker.on('move', this._syncCircleRadius, this))
            : this._disableSnapping())
        : (this.options.draggable && this.enableLayerDrag(),
          this._map.on('move', this._updateHiddenPolyCircle, this),
          this.options.snappable
            ? this._initSnappableMarkersDrag()
            : this._disableSnappingDrag()),
        this._extendingApplyOptions();
    },
    _extendingApplyOptions() {
      this.options.preventMarkerRemoval ||
        this._layer.on('contextmenu', this._removeMarker, this);
    },
    _initMarkers() {
      let t = this._map;
      this._helperLayers &&
        (this._helperLayers.removeFrom(t), this._helperLayers.clearLayers()),
        (this._helperLayers = new L.FeatureGroup()),
        (this._helperLayers._pmTempLayer = !0),
        this._helperLayers.addTo(t);
      let e = this._layer.getLatLng(),
        i = this._layer._radius,
        r = this._getLatLngOnCircle(e, i);
      (this._centerMarker = this._createCenterMarker(e)),
        (this._outerMarker = this._createOuterMarker(r)),
        (this._markers = [this._centerMarker, this._outerMarker]),
        this._createHintLine(this._centerMarker, this._outerMarker);
    },
    _getLatLngOnCircle(t, e) {
      let i = this._map.project(t),
        r = L.point(i.x + e, i.y);
      return this._map.unproject(r);
    },
    _createHintLine(t, e) {
      let i = t.getLatLng(),
        r = e.getLatLng();
      (this._hintline = L.polyline([i, r], this.options.hintlineStyle)),
        this._setPane(this._hintline, 'layerPane'),
        (this._hintline._pmTempLayer = !0),
        this._helperLayers.addLayer(this._hintline);
    },
    _createCenterMarker(t) {
      let e = this._createMarker(t);
      return (
        this.options.draggable
          ? (L.DomUtil.addClass(e._icon, 'leaflet-pm-draggable'),
            e.on('move', this._moveCircle, this))
          : e.dragging.disable(),
        e
      );
    },
    _createOuterMarker(t) {
      let e = this._createMarker(t);
      return e.on('drag', this._resizeCircle, this), e;
    },
    _createMarker(t) {
      let e = new L.Marker(t, {
        draggable: !0,
        icon: L.divIcon({ className: 'marker-icon' }),
      });
      return (
        this._setPane(e, 'vertexPane'),
        (e._origLatLng = t),
        (e._pmTempLayer = !0),
        e.on('dragstart', this._onMarkerDragStart, this),
        e.on('drag', this._onMarkerDrag, this),
        e.on('dragend', this._onMarkerDragEnd, this),
        e.on('click', this._onVertexClick, this),
        this._helperLayers.addLayer(e),
        e
      );
    },
    _moveCircle(t) {
      if (t.target._cancelDragEventChain) return;
      let i = this._centerMarker.getLatLng();
      this._layer.setLatLng(i);
      let r = this._layer._radius,
        n = this._getLatLngOnCircle(i, r);
      (this._outerMarker._latlng = n),
        this._outerMarker.update(),
        this._syncHintLine(),
        this._updateHiddenPolyCircle(),
        this._fireCenterPlaced('Edit'),
        this._fireChange(this._layer.getLatLng(), 'Edit');
    },
    _syncMarkers() {
      let t = this._layer.getLatLng(),
        e = this._layer._radius,
        i = this._getLatLngOnCircle(t, e);
      this._outerMarker.setLatLng(i),
        this._centerMarker.setLatLng(t),
        this._syncHintLine(),
        this._updateHiddenPolyCircle();
    },
    _resizeCircle() {
      this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker()),
        this._syncHintLine(),
        this._syncCircleRadius();
    },
    _syncCircleRadius() {
      let t = this._centerMarker.getLatLng(),
        e = this._outerMarker.getLatLng(),
        i = this._distanceCalculation(t, e);
      this.options[this._minRadiusOption] &&
      i < this.options[this._minRadiusOption]
        ? this._layer.setRadius(this.options[this._minRadiusOption])
        : this.options[this._maxRadiusOption] &&
            i > this.options[this._maxRadiusOption]
          ? this._layer.setRadius(this.options[this._maxRadiusOption])
          : this._layer.setRadius(i),
        this._updateHiddenPolyCircle(),
        this._fireChange(this._layer.getLatLng(), 'Edit');
    },
    _syncHintLine() {
      let t = this._centerMarker.getLatLng(),
        e = this._outerMarker.getLatLng();
      this._hintline.setLatLngs([t, e]);
    },
    _removeMarker() {
      this.options[this._editableOption] && this.disable(),
        this._layer.remove(),
        this._fireRemove(this._layer),
        this._fireRemove(this._map, this._layer);
    },
    _onDragStart() {
      this._map.pm.Draw.CircleMarker._layerIsDragging = !0;
    },
    _onMarkerDragStart(t) {
      this._vertexValidation('move', t) && this._fireMarkerDragStart(t);
    },
    _onMarkerDrag(t) {
      let e = t.target;
      (e instanceof L.Marker && !this._vertexValidationDrag(e)) ||
        this._fireMarkerDrag(t);
    },
    _onMarkerDragEnd(t) {
      this._extedingMarkerDragEnd();
      let e = t.target;
      this._vertexValidationDragEnd(e) &&
        (this.options[this._editableOption] &&
          (this._fireEdit(), (this._layerEdited = !0)),
        this._fireMarkerDragEnd(t));
    },
    _extedingMarkerDragEnd() {
      this._map.pm.Draw.CircleMarker._layerIsDragging = !1;
    },
    _initSnappableMarkersDrag() {
      let t = this._layer;
      (this.options.snapDistance = this.options.snapDistance || 30),
        (this.options.snapSegment =
          this.options.snapSegment === void 0 ? !0 : this.options.snapSegment),
        t.off('pm:drag', this._handleSnapping, this),
        t.on('pm:drag', this._handleSnapping, this),
        t.off('pm:dragend', this._cleanupSnapping, this),
        t.on('pm:dragend', this._cleanupSnapping, this),
        t.off('pm:dragstart', this._unsnap, this),
        t.on('pm:dragstart', this._unsnap, this);
    },
    _disableSnappingDrag() {
      let t = this._layer;
      t.off('pm:drag', this._handleSnapping, this),
        t.off('pm:dragend', this._cleanupSnapping, this),
        t.off('pm:dragstart', this._unsnap, this);
    },
    _updateHiddenPolyCircle() {
      let t = this._layer._map || this._map;
      if (t) {
        let e = L.PM.Utils.pxRadiusToMeterRadius(
            this._layer.getRadius(),
            t,
            this._layer.getLatLng()
          ),
          i = L.circle(this._layer.getLatLng(), this._layer.options);
        i.setRadius(e);
        let r = t && t.pm._isCRSSimple();
        this._hiddenPolyCircle
          ? this._hiddenPolyCircle.setLatLngs(
              L.PM.Utils.circleToPolygon(i, 200, !r).getLatLngs()
            )
          : (this._hiddenPolyCircle = L.PM.Utils.circleToPolygon(i, 200, !r)),
          this._hiddenPolyCircle._parentCopy ||
            (this._hiddenPolyCircle._parentCopy = this._layer);
      }
    },
    _getNewDestinationOfOuterMarker() {
      let t = this._centerMarker.getLatLng(),
        e = this._outerMarker.getLatLng(),
        i = this._distanceCalculation(t, e);
      return (
        this.options[this._minRadiusOption] &&
        i < this.options[this._minRadiusOption]
          ? (e = Wt(this._map, t, e, this._getMinDistanceInMeter(t)))
          : this.options[this._maxRadiusOption] &&
            i > this.options[this._maxRadiusOption] &&
            (e = Wt(this._map, t, e, this._getMaxDistanceInMeter(t))),
        e
      );
    },
    _handleOuterMarkerSnapping() {
      if (this._outerMarker._snapped) {
        let t = this._centerMarker.getLatLng(),
          e = this._outerMarker.getLatLng(),
          i = this._distanceCalculation(t, e);
        this.options[this._minRadiusOption] &&
        i < this.options[this._minRadiusOption]
          ? this._outerMarker.setLatLng(this._outerMarker._orgLatLng)
          : this.options[this._maxRadiusOption] &&
            i > this.options[this._maxRadiusOption] &&
            this._outerMarker.setLatLng(this._outerMarker._orgLatLng);
      }
      this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker());
    },
    _distanceCalculation(t, e) {
      return this._map.project(t).distanceTo(this._map.project(e));
    },
    _getMinDistanceInMeter(t) {
      return L.PM.Utils.pxRadiusToMeterRadius(
        this.options[this._minRadiusOption],
        this._map,
        t
      );
    },
    _getMaxDistanceInMeter(t) {
      return L.PM.Utils.pxRadiusToMeterRadius(
        this.options[this._maxRadiusOption],
        this._map,
        t
      );
    },
    _onVertexClick(t) {
      t.target._dragging || this._fireVertexClick(t, void 0);
    },
  });
  H.Circle = H.CircleMarker.extend({
    _shape: 'Circle',
    initialize(t) {
      (this._layer = t),
        (this._enabled = !1),
        (this._minRadiusOption = 'minRadiusCircle'),
        (this._maxRadiusOption = 'maxRadiusCircle'),
        (this._editableOption = 'resizeableCircle'),
        this._updateHiddenPolyCircle();
    },
    enable(t) {
      L.PM.Edit.CircleMarker.prototype.enable.call(this, t || {});
    },
    _extendingEnable() {},
    _extendingDisable() {
      this._layer.off('remove', this.disable, this);
      let t = this._layer._path
        ? this._layer._path
        : this._layer._renderer._container;
      L.DomUtil.removeClass(t, 'leaflet-pm-draggable');
    },
    _extendingApplyOptions() {},
    _syncMarkers() {},
    _removeMarker() {},
    _onDragStart() {},
    _extedingMarkerDragEnd() {},
    _updateHiddenPolyCircle() {
      let t = this._map && this._map.pm._isCRSSimple();
      this._hiddenPolyCircle
        ? this._hiddenPolyCircle.setLatLngs(
            L.PM.Utils.circleToPolygon(this._layer, 200, !t).getLatLngs()
          )
        : (this._hiddenPolyCircle = L.PM.Utils.circleToPolygon(
            this._layer,
            200,
            !t
          )),
        this._hiddenPolyCircle._parentCopy ||
          (this._hiddenPolyCircle._parentCopy = this._layer);
    },
    _distanceCalculation(t, e) {
      return this._map.distance(t, e);
    },
    _getMinDistanceInMeter() {
      return this.options[this._minRadiusOption];
    },
    _getMaxDistanceInMeter() {
      return this.options[this._maxRadiusOption];
    },
    _onVertexClick(t) {
      t.target._dragging || this._fireVertexClick(t, void 0);
    },
  });
  H.ImageOverlay = H.extend({
    _shape: 'ImageOverlay',
    initialize(t) {
      (this._layer = t), (this._enabled = !1);
    },
    toggleEdit(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    enabled() {
      return this._enabled;
    },
    enable(t = { draggable: !0, snappable: !0 }) {
      if (
        (L.Util.setOptions(this, t),
        (this._map = this._layer._map),
        !!this._map)
      ) {
        if (!this.options.allowEditing) {
          this.disable();
          return;
        }
        this.enabled() || this.disable(),
          this.enableLayerDrag(),
          this._layer.on('remove', this.disable, this),
          (this._enabled = !0),
          (this._otherSnapLayers = this._findCorners()),
          this._fireEnable();
      }
    },
    disable() {
      this._dragging ||
        (this._map || (this._map = this._layer._map),
        this.disableLayerDrag(),
        this._layer.off('remove', this.disable, this),
        this.enabled() ||
          (this._layerEdited && this._fireUpdate(),
          (this._layerEdited = !1),
          this._fireDisable()),
        (this._enabled = !1));
    },
    _findCorners() {
      let t = this._layer.getBounds(),
        e = t.getNorthWest(),
        i = t.getNorthEast(),
        r = t.getSouthEast(),
        n = t.getSouthWest();
      return [e, i, r, n];
    },
  });
  H.Text = H.extend({
    _shape: 'Text',
    initialize(t) {
      (this._layer = t), (this._enabled = !1);
    },
    enable(t) {
      if ((L.Util.setOptions(this, t), !!this.textArea)) {
        if (!this.options.allowEditing || !this._layer._map) {
          this.disable();
          return;
        }
        (this._map = this._layer._map),
          this.enabled() && this.disable(),
          this.applyOptions(),
          (this._safeToCacheDragState = !0),
          this._focusChange(),
          (this.textArea.readOnly = !1),
          this.textArea.classList.remove('pm-disabled'),
          this._layer.on('remove', this.disable, this),
          L.DomEvent.on(this.textArea, 'input', this._autoResize, this),
          L.DomEvent.on(this.textArea, 'focus', this._focusChange, this),
          L.DomEvent.on(this.textArea, 'blur', this._focusChange, this),
          this._layer.on('dblclick', L.DomEvent.stop),
          L.DomEvent.off(
            this.textArea,
            'mousedown',
            this._preventTextSelection
          ),
          (this._enabled = !0),
          this._fireEnable();
      }
    },
    disable() {
      if (!this.enabled()) return;
      this._layer.off('remove', this.disable, this),
        L.DomEvent.off(this.textArea, 'input', this._autoResize, this),
        L.DomEvent.off(this.textArea, 'focus', this._focusChange, this),
        L.DomEvent.off(this.textArea, 'blur', this._focusChange, this),
        document.removeEventListener('click', this._documentClickThis, {
          capture: !0,
        }),
        this._focusChange(),
        (this.textArea.readOnly = !0),
        this.textArea.classList.add('pm-disabled');
      let t = document.activeElement;
      this.textArea.focus(),
        (this.textArea.selectionStart = 0),
        (this.textArea.selectionEnd = 0),
        L.DomEvent.on(this.textArea, 'mousedown', this._preventTextSelection),
        t.focus(),
        (this._disableOnBlurActive = !1),
        this._layerEdited && this._fireUpdate(),
        (this._layerEdited = !1),
        this._fireDisable(),
        (this._enabled = !1);
    },
    enabled() {
      return this._enabled;
    },
    toggleEdit(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    applyOptions() {
      this.options.snappable
        ? this._initSnappableMarkers()
        : this._disableSnapping();
    },
    _initSnappableMarkers() {
      let t = this._layer;
      (this.options.snapDistance = this.options.snapDistance || 30),
        (this.options.snapSegment =
          this.options.snapSegment === void 0 ? !0 : this.options.snapSegment),
        t.off('pm:drag', this._handleSnapping, this),
        t.on('pm:drag', this._handleSnapping, this),
        t.off('pm:dragend', this._cleanupSnapping, this),
        t.on('pm:dragend', this._cleanupSnapping, this),
        t.off('pm:dragstart', this._unsnap, this),
        t.on('pm:dragstart', this._unsnap, this);
    },
    _disableSnapping() {
      let t = this._layer;
      t.off('pm:drag', this._handleSnapping, this),
        t.off('pm:dragend', this._cleanupSnapping, this),
        t.off('pm:dragstart', this._unsnap, this);
    },
    _autoResize() {
      (this.textArea.style.height = '1px'), (this.textArea.style.width = '1px');
      let t = this.textArea.scrollHeight > 21 ? this.textArea.scrollHeight : 21,
        e = this.textArea.scrollWidth > 16 ? this.textArea.scrollWidth : 16;
      (this.textArea.style.height = `${t}px`),
        (this.textArea.style.width = `${e}px`),
        (this._layer.options.text = this.getText()),
        this._fireTextChange(this.getText());
    },
    _disableOnBlur() {
      (this._disableOnBlurActive = !0),
        setTimeout(() => {
          this.enabled() &&
            ((this._documentClickThis =
              this._documentClickThis || this._documentClick.bind(this)),
            document.addEventListener('click', this._documentClickThis, {
              capture: !0,
            }));
        }, 100);
    },
    _documentClick(t) {
      t.target !== this.textArea &&
        (this.disable(),
        !this.getText() && this.options.removeIfEmpty && this.remove());
    },
    _focusChange(t = {}) {
      let e = this._hasFocus;
      (this._hasFocus = t.type === 'focus'),
        !e != !this._hasFocus &&
          (this._hasFocus
            ? (this._applyFocus(),
              (this._focusText = this.getText()),
              this._fireTextFocus())
            : (this._removeFocus(),
              this._fireTextBlur(),
              this._focusText !== this.getText() &&
                (this._fireEdit(), (this._layerEdited = !0))));
    },
    _applyFocus() {
      this.textArea.classList.add('pm-hasfocus'),
        this._map.dragging &&
          (this._safeToCacheDragState &&
            ((this._originalMapDragState = this._map.dragging._enabled),
            (this._safeToCacheDragState = !1)),
          this._map.dragging.disable());
    },
    _removeFocus() {
      this._map.dragging &&
        (this._originalMapDragState && this._map.dragging.enable(),
        (this._safeToCacheDragState = !0)),
        this.textArea.classList.remove('pm-hasfocus');
    },
    focus() {
      if (!this.enabled()) throw new TypeError('Layer is not enabled');
      this.textArea.focus();
    },
    blur() {
      if (!this.enabled()) throw new TypeError('Layer is not enabled');
      this.textArea.blur(), this._disableOnBlurActive && this.disable();
    },
    hasFocus() {
      return this._hasFocus;
    },
    getElement() {
      return this.textArea;
    },
    setText(t) {
      t && (this.textArea.value = t), this._autoResize();
    },
    getText() {
      return this.textArea.value;
    },
    _initTextMarker() {
      if (
        ((this.textArea = L.PM.Draw.Text.prototype._createTextArea.call(this)),
        this.options.className)
      ) {
        let e = this.options.className.split(' ');
        this.textArea.classList.add(...e);
      }
      let t = L.PM.Draw.Text.prototype._createTextIcon.call(
        this,
        this.textArea
      );
      this._layer.setIcon(t),
        this._layer.once('add', this._createTextMarker, this);
    },
    _createTextMarker(t = !1) {
      this._layer.off('add', this._createTextMarker, this),
        (this._layer.getElement().tabIndex = -1),
        (this.textArea.wrap = 'off'),
        (this.textArea.style.overflow = 'hidden'),
        (this.textArea.style.height = L.DomUtil.getStyle(
          this.textArea,
          'font-size'
        )),
        (this.textArea.style.width = '1px'),
        this._layer.options.text && this.setText(this._layer.options.text),
        this._autoResize(),
        t === !0 && (this.enable(), this.focus(), this._disableOnBlur());
    },
    _preventTextSelection(t) {
      t.preventDefault();
    },
  });
  var Zi = function (e, i, r, n, s, a) {
    this._matrix = [e, i, r, n, s, a];
  };
  Zi.init = () => new L.PM.Matrix(1, 0, 0, 1, 0, 0);
  Zi.prototype = {
    transform(t) {
      return this._transform(t.clone());
    },
    _transform(t) {
      let e = this._matrix,
        { x: i, y: r } = t;
      return (
        (t.x = e[0] * i + e[1] * r + e[4]),
        (t.y = e[2] * i + e[3] * r + e[5]),
        t
      );
    },
    untransform(t) {
      let e = this._matrix;
      return new L.Point(
        (t.x / e[0] - e[4]) / e[0],
        (t.y / e[2] - e[5]) / e[2]
      );
    },
    clone() {
      let t = this._matrix;
      return new L.PM.Matrix(t[0], t[1], t[2], t[3], t[4], t[5]);
    },
    translate(t) {
      if (t === void 0) return new L.Point(this._matrix[4], this._matrix[5]);
      let e, i;
      return (
        typeof t == 'number' ? ((e = t), (i = t)) : ((e = t.x), (i = t.y)),
        this._add(1, 0, 0, 1, e, i)
      );
    },
    scale(t, e) {
      if (t === void 0) return new L.Point(this._matrix[0], this._matrix[3]);
      let i, r;
      return (
        (e = e || L.point(0, 0)),
        typeof t == 'number' ? ((i = t), (r = t)) : ((i = t.x), (r = t.y)),
        this._add(i, 0, 0, r, e.x, e.y)._add(1, 0, 0, 1, -e.x, -e.y)
      );
    },
    rotate(t, e) {
      let i = Math.cos(t),
        r = Math.sin(t);
      return (
        (e = e || new L.Point(0, 0)),
        this._add(i, r, -r, i, e.x, e.y)._add(1, 0, 0, 1, -e.x, -e.y)
      );
    },
    flip() {
      return (this._matrix[1] *= -1), (this._matrix[2] *= -1), this;
    },
    _add(t, e, i, r, n, s) {
      let a = [[], [], []],
        o = this._matrix,
        l = [
          [o[0], o[2], o[4]],
          [o[1], o[3], o[5]],
          [0, 0, 1],
        ],
        h = [
          [t, i, n],
          [e, r, s],
          [0, 0, 1],
        ],
        g;
      t &&
        t instanceof L.PM.Matrix &&
        ((o = t._matrix),
        (h = [
          [o[0], o[2], o[4]],
          [o[1], o[3], o[5]],
          [0, 0, 1],
        ]));
      for (let _ = 0; _ < 3; _ += 1)
        for (let E = 0; E < 3; E += 1) {
          g = 0;
          for (let P = 0; P < 3; P += 1) g += l[_][P] * h[P][E];
          a[_][E] = g;
        }
      return (
        (this._matrix = [a[0][0], a[1][0], a[0][1], a[1][1], a[0][2], a[1][2]]),
        this
      );
    },
  };
  var Nl = Zi;
  var w_ = {
      calcMiddleLatLng(t, e, i) {
        let r = t.project(e),
          n = t.project(i);
        return t.unproject(r._add(n)._divideBy(2));
      },
      findLayers(t) {
        let e = [];
        return (
          t.eachLayer((i) => {
            (i instanceof L.Polyline ||
              i instanceof L.Marker ||
              i instanceof L.Circle ||
              i instanceof L.CircleMarker ||
              i instanceof L.ImageOverlay) &&
              e.push(i);
          }),
          (e = e.filter((i) => !!i.pm)),
          (e = e.filter((i) => !i._pmTempLayer)),
          (e = e.filter(
            (i) =>
              (!L.PM.optIn && !i.options.pmIgnore) ||
              (L.PM.optIn && i.options.pmIgnore === !1)
          )),
          e
        );
      },
      circleToPolygon(t, e = 60, i = !0) {
        let r = t.getLatLng(),
          n = t.getRadius(),
          s = Li(r, n, e, 0, i),
          a = [];
        for (let o = 0; o < s.length; o += 1) {
          let l = [s[o].lat, s[o].lng];
          a.push(l);
        }
        return L.polygon(a, t.options);
      },
      disablePopup(t) {
        t.getPopup() && ((t._tempPopupCopy = t.getPopup()), t.unbindPopup());
      },
      enablePopup(t) {
        t._tempPopupCopy &&
          (t.bindPopup(t._tempPopupCopy), delete t._tempPopupCopy);
      },
      _fireEvent(t, e, i, r = !1) {
        t.fire(e, i, r);
        let { groups: n } = this.getAllParentGroups(t);
        n.forEach((s) => {
          s.fire(e, i, r);
        });
      },
      getAllParentGroups(t) {
        let e = [],
          i = [],
          r = (n) => {
            for (let s in n._eventParents)
              if (e.indexOf(s) === -1) {
                e.push(s);
                let a = n._eventParents[s];
                i.push(a), r(a);
              }
          };
        return !t._pmLastGroupFetch ||
          !t._pmLastGroupFetch.time ||
          new Date().getTime() - t._pmLastGroupFetch.time > 1e3
          ? (r(t),
            (t._pmLastGroupFetch = {
              time: new Date().getTime(),
              groups: i,
              groupIds: e,
            }),
            { groupIds: e, groups: i })
          : {
              groups: t._pmLastGroupFetch.groups,
              groupIds: t._pmLastGroupFetch.groupIds,
            };
      },
      createGeodesicPolygon: Li,
      getTranslation: V,
      findDeepCoordIndex(t, e, i = !0) {
        let r,
          n = (a) => (o, l) => {
            let h = a.concat(l);
            if (i) {
              if (o.lat && o.lat === e.lat && o.lng === e.lng)
                return (r = h), !0;
            } else if (o.lat && L.latLng(o).equals(e)) return (r = h), !0;
            return Array.isArray(o) && o.some(n(h));
          };
        t.some(n([]));
        let s = {};
        return (
          r &&
            (s = {
              indexPath: r,
              index: r[r.length - 1],
              parentPath: r.slice(0, r.length - 1),
            }),
          s
        );
      },
      findDeepMarkerIndex(t, e) {
        let i,
          r = (s) => (a, o) => {
            let l = s.concat(o);
            return a._leaflet_id === e._leaflet_id
              ? ((i = l), !0)
              : Array.isArray(a) && a.some(r(l));
          };
        t.some(r([]));
        let n = {};
        return (
          i &&
            (n = {
              indexPath: i,
              index: i[i.length - 1],
              parentPath: i.slice(0, i.length - 1),
            }),
          n
        );
      },
      _getIndexFromSegment(t, e) {
        if (e && e.length === 2) {
          let i = this.findDeepCoordIndex(t, e[0]),
            r = this.findDeepCoordIndex(t, e[1]),
            n = Math.max(i.index, r.index);
          return (
            (i.index === 0 || r.index === 0) && n !== 1 && (n += 1),
            {
              indexA: i,
              indexB: r,
              newIndex: n,
              indexPath: i.indexPath,
              parentPath: i.parentPath,
            }
          );
        }
        return null;
      },
      _getRotatedRectangle(t, e, i, r) {
        let n = It(r, t),
          s = It(r, e),
          a = (i * Math.PI) / 180,
          o = Math.cos(a),
          l = Math.sin(a),
          h = (s.x - n.x) * o + (s.y - n.y) * l,
          g = (s.y - n.y) * o - (s.x - n.x) * l,
          _ = h * o + n.x,
          E = h * l + n.y,
          P = -g * l + n.x,
          T = g * o + n.y,
          G = Ee(r, n),
          m = Ee(r, { x: _, y: E }),
          x = Ee(r, s),
          v = Ee(r, { x: P, y: T });
        return [G, m, x, v];
      },
      pxRadiusToMeterRadius(t, e, i) {
        let r = e.project(i),
          n = L.point(r.x + t, r.y);
        return e.distance(e.unproject(n), i);
      },
    },
    zl = w_;
  L.PM = L.PM || {
    version: Qi.version,
    Map: Oo,
    Toolbar: Ao,
    Draw: X,
    Edit: H,
    Utils: zl,
    Matrix: Nl,
    activeLang: 'en',
    optIn: !1,
    initialize(t) {
      this.addInitHooks(t);
    },
    setOptIn(t) {
      this.optIn = !!t;
    },
    addInitHooks() {
      function t() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Map(this))
            : this.options.pmIgnore || (this.pm = new L.PM.Map(this)),
          this.pm && this.pm.setGlobalOptions({});
      }
      L.Map.addInitHook(t);
      function e() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 &&
              (this.pm = new L.PM.Edit.LayerGroup(this))
            : this.options.pmIgnore ||
              (this.pm = new L.PM.Edit.LayerGroup(this));
      }
      L.LayerGroup.addInitHook(e);
      function i() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 &&
              (this.options.textMarker
                ? ((this.pm = new L.PM.Edit.Text(this)),
                  this.options._textMarkerOverPM || this.pm._initTextMarker(),
                  delete this.options._textMarkerOverPM)
                : (this.pm = new L.PM.Edit.Marker(this)))
            : this.options.pmIgnore ||
              (this.options.textMarker
                ? ((this.pm = new L.PM.Edit.Text(this)),
                  this.options._textMarkerOverPM || this.pm._initTextMarker(),
                  delete this.options._textMarkerOverPM)
                : (this.pm = new L.PM.Edit.Marker(this)));
      }
      L.Marker.addInitHook(i);
      function r() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 &&
              (this.pm = new L.PM.Edit.CircleMarker(this))
            : this.options.pmIgnore ||
              (this.pm = new L.PM.Edit.CircleMarker(this));
      }
      L.CircleMarker.addInitHook(r);
      function n() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 &&
              (this.pm = new L.PM.Edit.Line(this))
            : this.options.pmIgnore || (this.pm = new L.PM.Edit.Line(this));
      }
      L.Polyline.addInitHook(n);
      function s() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 &&
              (this.pm = new L.PM.Edit.Polygon(this))
            : this.options.pmIgnore || (this.pm = new L.PM.Edit.Polygon(this));
      }
      L.Polygon.addInitHook(s);
      function a() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 &&
              (this.pm = new L.PM.Edit.Rectangle(this))
            : this.options.pmIgnore ||
              (this.pm = new L.PM.Edit.Rectangle(this));
      }
      L.Rectangle.addInitHook(a);
      function o() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 &&
              (this.pm = new L.PM.Edit.Circle(this))
            : this.options.pmIgnore || (this.pm = new L.PM.Edit.Circle(this));
      }
      L.Circle.addInitHook(o);
      function l() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 &&
              (this.pm = new L.PM.Edit.ImageOverlay(this))
            : this.options.pmIgnore ||
              (this.pm = new L.PM.Edit.ImageOverlay(this));
      }
      L.ImageOverlay.addInitHook(l);
    },
    reInitLayer(t) {
      t instanceof L.LayerGroup &&
        t.eachLayer((e) => {
          this.reInitLayer(e);
        }),
        t.pm ||
          (L.PM.optIn && t.options.pmIgnore !== !1) ||
          t.options.pmIgnore ||
          (t instanceof L.Map
            ? (t.pm = new L.PM.Map(t))
            : t instanceof L.Marker
              ? t.options.textMarker
                ? ((t.pm = new L.PM.Edit.Text(t)),
                  t.pm._initTextMarker(),
                  t.pm._createTextMarker(!1))
                : (t.pm = new L.PM.Edit.Marker(t))
              : t instanceof L.Circle
                ? (t.pm = new L.PM.Edit.Circle(t))
                : t instanceof L.CircleMarker
                  ? (t.pm = new L.PM.Edit.CircleMarker(t))
                  : t instanceof L.Rectangle
                    ? (t.pm = new L.PM.Edit.Rectangle(t))
                    : t instanceof L.Polygon
                      ? (t.pm = new L.PM.Edit.Polygon(t))
                      : t instanceof L.Polyline
                        ? (t.pm = new L.PM.Edit.Line(t))
                        : t instanceof L.LayerGroup
                          ? (t.pm = new L.PM.Edit.LayerGroup(t))
                          : t instanceof L.ImageOverlay &&
                            (t.pm = new L.PM.Edit.ImageOverlay(t)));
    },
  };
  L.version === '1.7.1' &&
    L.Canvas.include({
      _onClick(t) {
        let e = this._map.mouseEventToLayerPoint(t),
          i,
          r;
        for (let n = this._drawFirst; n; n = n.next)
          (i = n.layer),
            i.options.interactive &&
              i._containsPoint(e) &&
              (!(t.type === 'click' || t.type === 'preclick') ||
                !this._map._draggableMoved(i)) &&
              (r = i);
        r && (L.DomEvent.fakeStop(t), this._fireEvent([r], t));
      },
    });
  L.PM.initialize();
})();
//# sourceMappingURL=leaflet-geoman.js.map
