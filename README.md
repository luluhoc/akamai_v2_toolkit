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
