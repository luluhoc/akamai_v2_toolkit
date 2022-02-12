# Akamai Bot Manager 2.0

Feel free to contact me `@lulu_fr_` on Twitter, open an issue or start a discussion. 

The current stage is deobfuscation of 2.0 version.

Akamai just wasting computer resources lol.

Example Sensor Data
---
```
sensor_data: {"sensor_data":"2;3752257;3555636;10,7,0,0,1;T+de{A`Afgk}AE~*}O`/.Dv@Jv/%8*|vB#*K+I6g2,)#Jz)V-axH{DnRGqfT5 r(O]W:r
s>I>G7_GXBKZdL7%.OZai$1|dT|1%r8B7ZzBH8XhGp`7q7p(p,|GV!l(9!!tN$9MHL|E@<|!h=xOFz_!'@;SAD;]`'a3@*9U=?#Zkc-
M{kNscQ<oKVmR``~]%Fq6l?R7KuiezfnWPxD0Bz%D[EzyO4w<130($4r,X~17 %*b1YZZg}lvw-W`$fo^bo|$482pB8u5E)RF.y
_SDp/`{6Sv/=ta,!nS|=Obj?Pm=1ws2givAg9/FxMvk:-@Mi>NXI1g_O5j6VHi?pcFomTC9Po3Ceac O`pt({fAmiS=x)|0+F18m
~MDFU(p6T2+X_6vB3u|9cZUJ*RJr]xsU!tA9GH+C,%gAlg:&XtHA<T:VtR3%&bpJq8`+ZazuE5?h:/[hb,tx~G{p2}9Yasig8h
~V2~UgjQ6!jC.`h$|UZ<VhGINhy(}amYhi|e/$rcL`8}#|yZ<0s8uMy9!SQ-/FIAQ)zJ:vC+MZM:6A- =A~RQ<L66zH?`@1IlK6+(u,u|.hl`6zYq[t h{t_Na*2pjT
s>$u$1FLs,:/xc]&aMU!(g!a*_?DC~H[zJnDuOT;)GIBz,va[taC,v9$.O?3w)Ku/(AZZ32U!HO3$+Tzi{ce5b^Q^8-(**ZdsAd}:Dm4]A#-G;>I5D8d6qYnJlS.[&3
&7 0Qo/Tfh+Q_Hv{V*!Ehy&dxTT*n5k`v(Wun?"}
```

Current BMAK
```
{
    "firstLoad": false,
    "listFunctions": {},
    "startTs": 1644609588849
}
```

It looks like they are using now ASCII special characters in their script
https://theasciicode.com.ar/


From AKAMAI BRIEF let's reverse it already
```
Sophisticated, dynamic bot detections — Bot Manager accurately detects unknown bots from
the first interaction using a variety of AI and machine learning models and techniques. They
include user behavior analysis, browser fingerprinting, automated browser detection, HTTP
anomaly detection, high request rate, and more. Bot Manager’s dynamic obfuscation of code
and telemetry protects against reverse engineering, keeping Bot Manager’s effectiveness
high over time.
```

Current Dict
```
XX.Sp("\tSJ_-D%\n", rv) = "navigator"
XX.NT("^M_8X", GY) = "length"
XX.gD("9\vG\x00JV\x3f", Z6) = "plugins"
LX["navigator"]["plugins"] = navigator.plugins
XX.ST("#BL)", n6) = "Date"
LX[XX.ST("#BL)", n6)] = Date
XX.WX(bR, W6, Z3) = "getTimeZoneOffset"
XX.XD("Q\bM[-D", XR) = "concat"

XX.wX(mv, TR, Z0) = "window"
XX.rD(",yW`W\"^/N \b\\", H6) = "RTCPeerConnection"
XX.mD("]%h$bFJ_$_*[\bM", hw) = "mozRTCPeerConnection"
XX.hD("\v_:[\bMk8_8],", Cw) = sessionStorage

XX.hT(")[;$]Fy8", d3) = 'charCodeAt'
XX.BT("w[", B3) = "cTc"

XX.jT("PT%S/", cY) = "slice"
XX.wT("QW8_>J,", PY) = "prototype"
XX.QT("\v\nH(", xY) = "Array"
LX["Array"]["prototype"]["slice"] = Array.prototype.slice

XX.Dp("G", RY) = d
XX.OX(OY, vY, K0) = c
XX.lX(fY, YY, K0) = m 
XX.Pp("U$\rW,SO]", gY) enumerable
XX.vX(E0, NY, zY) "defineProperty"
XX.xp("w.Z/N", tY) = "Object"
XX.Gp("", TY) = o;
XX.cp("-N", rY) =  get;
XX.Ip("", mY) r
XX.lp("eA*L\9\/", ZY) __esModule
XX.kX(KY, WY, Z0) object
XX.RX(hY, bY, K0) t
XX.Up("I=[	D", EY) string
XX.ET("BT9U", FY) value
XX.vp("VEY9\>", AY) default
XX.Op("Q]-D/", nY) create
XX.Rp("	", jY) n
XX.kp("", Vl) a
XX.wp("X+\vu>\tbLH)B>", Dl) hasOwnProperty
XX.RT("M\\)V#_-", Wv) undefined
XX.fp("W+\b^", Zv)  Symbol
XX.Yp("\fU\x40M_Q-", Hv) toStringTag
XX.UX(nv, Av, Z0) Module
XX.rp("`Y\"^%\f*\b\\FJ8\x3f^,[\tF\\l_8XT<\v^GWWl_(_*", IU) Cannot convert undefined or null to object

XX.gp("3ZH)u8\nU;", cU) TypeError
XX.tT("", xl) ""
XX.UT("}", BR) "GX"
XX["GX"] = toString()
XX.FT("9B&", lv) "url"
XX.Xp("ST%S/", Wk) splice
XX.Vp("F@<_8I", Zk) exports
XX.pp("T", nk) l 
XX.Tp("[", Hk) i
XX.Lp("\'\bE", A6) "Now"
XX.bp("\'I:U", YU) message // problem
XX.hp("AL#Q", fU) btoa
XX.Np(",\rT*[\bM", xU) function
XX.Cp("u8\nU;", lU) Error
XX.sp("q\"F+S-$ZQY/D/\n;]", DR) InvalidCharacterError
XX.qp("^+_", gY) name
XX.Wp("q\b;~\f!u/jr\x07|\x076u6`4wmg!`(QF^+X#Q%\n\\\bSI>C>\rL>K\t~~M\f~_\vL\f", hv) ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
XX.zT("ZQy8", Wl) charAt
XX.MX(mk, bk, qv) "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
XX.Zp("", bv) =

XX.Kp("\x40M_", dv) String
XX.zp("Q9\vS.\t", PU) assign
XX.dp("/_$S.\x40AT)", vN) configurable
XX.sT("SM\x3fX", kN) push
XX.EX(Mk, Q0, f3) startTs
XX.JT("WwQ!U%\rN", Ov) setTimeout
XX.Ap("Q>", Gv) Math
XX.Ep("H(\tV\bN", Pv) random
XX.MT("N&4FJV+", qM) toString
LX Changes strings to funcs
```
