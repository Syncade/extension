var tt,
    l,
    Gt,
    A,
    xt,
    Xt,
    lt,
    I = {},
    Yt = [],
    be = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    et = Array.isArray;
function H(t, e) {
    for (var n in e) t[n] = e[n];
    return t;
}
function qt(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
}
function at(t, e, n) {
    var r,
        i,
        o,
        u = {};
    for (o in e) o == "key" ? (r = e[o]) : o == "ref" ? (i = e[o]) : (u[o] = e[o]);
    if ((arguments.length > 2 && (u.children = arguments.length > 3 ? tt.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)) for (o in t.defaultProps) u[o] === void 0 && (u[o] = t.defaultProps[o]);
    return X(t, u, r, i, null);
}
function X(t, e, n, r, i) {
    var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Gt };
    return i == null && l.vnode != null && l.vnode(o), o;
}
function L(t) {
    return t.children;
}
function T(t, e) {
    (this.props = t), (this.context = e);
}
function F(t, e) {
    if (e == null) return t.__ ? F(t.__, t.__.__k.indexOf(t) + 1) : null;
    for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
    return typeof t.type == "function" ? F(t) : null;
}
function Zt(t) {
    var e, n;
    if ((t = t.__) != null && t.__c != null) {
        for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
            if ((n = t.__k[e]) != null && n.__e != null) {
                t.__e = t.__c.base = n.__e;
                break;
            }
        return Zt(t);
    }
}
function wt(t) {
    ((!t.__d && (t.__d = !0) && A.push(t) && !Z.__r++) || xt !== l.debounceRendering) && ((xt = l.debounceRendering) || Xt)(Z);
}
function Z() {
    var t, e, n, r, i, o, u, s, _;
    for (A.sort(lt); (t = A.shift()); )
        t.__d &&
            ((e = A.length),
            (r = void 0),
            (i = void 0),
            (o = void 0),
            (s = (u = (n = t).__v).__e),
            (_ = n.__P) && ((r = []), (i = []), ((o = H({}, u)).__v = u.__v + 1), gt(_, u, o, n.__n, _.ownerSVGElement !== void 0, u.__h != null ? [s] : null, r, s ?? F(u), u.__h, i), te(r, u, i), u.__e != s && Zt(u)),
            A.length > e && A.sort(lt));
    Z.__r = 0;
}
function Jt(t, e, n, r, i, o, u, s, _, d, a) {
    var c,
        v,
        h,
        f,
        g,
        O,
        y,
        x,
        C,
        k = 0,
        w = (r && r.__k) || Yt,
        B = w.length,
        N = B,
        D = e.length;
    for (n.__k = [], c = 0; c < D; c++)
        (f = n.__k[c] =
            (f = e[c]) == null || typeof f == "boolean" || typeof f == "function"
                ? null
                : typeof f == "string" || typeof f == "number" || typeof f == "bigint"
                ? X(null, f, null, null, f)
                : et(f)
                ? X(L, { children: f }, null, null, null)
                : f.__b > 0
                ? X(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v)
                : f) != null
            ? ((f.__ = n),
              (f.__b = n.__b + 1),
              (x = xe(f, w, (y = c + k), N)) === -1 ? (h = I) : ((h = w[x] || I), (w[x] = void 0), N--),
              gt(t, f, h, i, o, u, s, _, d, a),
              (g = f.__e),
              (v = f.ref) && h.ref != v && (h.ref && vt(h.ref, null, f), a.push(v, f.__c || g, f)),
              g != null &&
                  (O == null && (O = g),
                  (C = h === I || h.__v === null) ? x == -1 && k-- : x !== y && (x === y + 1 ? k++ : x > y ? (N > D - y ? (k += x - y) : k--) : (k = x < y && x == y - 1 ? x - y : 0)),
                  (y = c + k),
                  typeof f.type != "function" || (x === y && h.__k !== f.__k)
                      ? typeof f.type == "function" || (x === y && !C)
                          ? f.__d !== void 0
                              ? ((_ = f.__d), (f.__d = void 0))
                              : (_ = g.nextSibling)
                          : (_ = Qt(t, g, _))
                      : (_ = Kt(f, _, t)),
                  typeof n.type == "function" && (n.__d = _)))
            : (h = w[c]) && h.key == null && h.__e && (h.__e == _ && (_ = F(h)), ft(h, h, !1), (w[c] = null));
    for (n.__e = O, c = B; c--; ) w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = w[c].__e.nextSibling), ft(w[c], w[c]));
}
function Kt(t, e, n) {
    for (var r, i = t.__k, o = 0; i && o < i.length; o++) (r = i[o]) && ((r.__ = t), (e = typeof r.type == "function" ? Kt(r, e, n) : Qt(n, r.__e, e)));
    return e;
}
function J(t, e) {
    return (
        (e = e || []),
        t == null ||
            typeof t == "boolean" ||
            (et(t)
                ? t.some(function (n) {
                      J(n, e);
                  })
                : e.push(t)),
        e
    );
}
function Qt(t, e, n) {
    return n == null || n.parentNode !== t ? t.insertBefore(e, null) : (e == n && e.parentNode != null) || t.insertBefore(e, n), e.nextSibling;
}
function xe(t, e, n, r) {
    var i = t.key,
        o = t.type,
        u = n - 1,
        s = n + 1,
        _ = e[n];
    if (_ === null || (_ && i == _.key && o === _.type)) return n;
    if (r > (_ != null ? 1 : 0))
        for (; u >= 0 || s < e.length; ) {
            if (u >= 0) {
                if ((_ = e[u]) && i == _.key && o === _.type) return u;
                u--;
            }
            if (s < e.length) {
                if ((_ = e[s]) && i == _.key && o === _.type) return s;
                s++;
            }
        }
    return -1;
}
function we(t, e, n, r, i) {
    var o;
    for (o in n) o === "children" || o === "key" || o in e || K(t, o, null, n[o], r);
    for (o in e) (i && typeof e[o] != "function") || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || K(t, o, e[o], n[o], r);
}
function kt(t, e, n) {
    e[0] === "-" ? t.setProperty(e, n ?? "") : (t[e] = n == null ? "" : typeof n != "number" || be.test(e) ? n : n + "px");
}
function K(t, e, n, r, i) {
    var o;
    t: if (e === "style")
        if (typeof n == "string") t.style.cssText = n;
        else {
            if ((typeof r == "string" && (t.style.cssText = r = ""), r)) for (e in r) (n && e in n) || kt(t.style, e, "");
            if (n) for (e in n) (r && n[e] === r[e]) || kt(t.style, e, n[e]);
        }
    else if (e[0] === "o" && e[1] === "n")
        (o = e !== (e = e.replace(/(PointerCapture)$|Capture$/, "$1"))),
            (e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)),
            t.l || (t.l = {}),
            (t.l[e + o] = n),
            n ? r || t.addEventListener(e, o ? Ct : Et, o) : t.removeEventListener(e, o ? Ct : Et, o);
    else if (e !== "dangerouslySetInnerHTML") {
        if (i) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e in t)
            try {
                t[e] = n ?? "";
                break t;
            } catch {}
        typeof n == "function" || (n == null || (n === !1 && e[4] !== "-") ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Et(t) {
    return this.l[t.type + !1](l.event ? l.event(t) : t);
}
function Ct(t) {
    return this.l[t.type + !0](l.event ? l.event(t) : t);
}
function gt(t, e, n, r, i, o, u, s, _, d) {
    var a,
        c,
        v,
        h,
        f,
        g,
        O,
        y,
        x,
        C,
        k,
        w,
        B,
        N,
        D,
        E = e.type;
    if (e.constructor !== void 0) return null;
    n.__h != null && ((_ = n.__h), (s = e.__e = n.__e), (e.__h = null), (o = [s])), (a = l.__b) && a(e);
    t: if (typeof E == "function")
        try {
            if (
                ((y = e.props),
                (x = (a = E.contextType) && r[a.__c]),
                (C = a ? (x ? x.props.value : a.__) : r),
                n.__c
                    ? (O = (c = e.__c = n.__c).__ = c.__E)
                    : ("prototype" in E && E.prototype.render ? (e.__c = c = new E(y, C)) : ((e.__c = c = new T(y, C)), (c.constructor = E), (c.render = Ee)),
                      x && x.sub(c),
                      (c.props = y),
                      c.state || (c.state = {}),
                      (c.context = C),
                      (c.__n = r),
                      (v = c.__d = !0),
                      (c.__h = []),
                      (c._sb = [])),
                c.__s == null && (c.__s = c.state),
                E.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = H({}, c.__s)), H(c.__s, E.getDerivedStateFromProps(y, c.__s))),
                (h = c.props),
                (f = c.state),
                (c.__v = e),
                v)
            )
                E.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
            else {
                if (
                    (E.getDerivedStateFromProps == null && y !== h && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, C),
                    !c.__e && ((c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, C) === !1) || e.__v === n.__v))
                ) {
                    for (
                        e.__v !== n.__v && ((c.props = y), (c.state = c.__s), (c.__d = !1)),
                            e.__e = n.__e,
                            e.__k = n.__k,
                            e.__k.forEach(function (z) {
                                z && (z.__ = e);
                            }),
                            k = 0;
                        k < c._sb.length;
                        k++
                    )
                        c.__h.push(c._sb[k]);
                    (c._sb = []), c.__h.length && u.push(c);
                    break t;
                }
                c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, C),
                    c.componentDidUpdate != null &&
                        c.__h.push(function () {
                            c.componentDidUpdate(h, f, g);
                        });
            }
            if (((c.context = C), (c.props = y), (c.__P = t), (c.__e = !1), (w = l.__r), (B = 0), "prototype" in E && E.prototype.render)) {
                for (c.state = c.__s, c.__d = !1, w && w(e), a = c.render(c.props, c.state, c.context), N = 0; N < c._sb.length; N++) c.__h.push(c._sb[N]);
                c._sb = [];
            } else
                do (c.__d = !1), w && w(e), (a = c.render(c.props, c.state, c.context)), (c.state = c.__s);
                while (c.__d && ++B < 25);
            (c.state = c.__s),
                c.getChildContext != null && (r = H(H({}, r), c.getChildContext())),
                v || c.getSnapshotBeforeUpdate == null || (g = c.getSnapshotBeforeUpdate(h, f)),
                Jt(t, et((D = a != null && a.type === L && a.key == null ? a.props.children : a)) ? D : [D], e, n, r, i, o, u, s, _, d),
                (c.base = e.__e),
                (e.__h = null),
                c.__h.length && u.push(c),
                O && (c.__E = c.__ = null);
        } catch (z) {
            (e.__v = null), (_ || o != null) && ((e.__e = s), (e.__h = !!_), (o[o.indexOf(s)] = null)), l.__e(z, e, n);
        }
    else o == null && e.__v === n.__v ? ((e.__k = n.__k), (e.__e = n.__e)) : (e.__e = ke(n.__e, e, n, r, i, o, u, _, d));
    (a = l.diffed) && a(e);
}
function te(t, e, n) {
    for (var r = 0; r < n.length; r++) vt(n[r], n[++r], n[++r]);
    l.__c && l.__c(e, t),
        t.some(function (i) {
            try {
                (t = i.__h),
                    (i.__h = []),
                    t.some(function (o) {
                        o.call(i);
                    });
            } catch (o) {
                l.__e(o, i.__v);
            }
        });
}
function ke(t, e, n, r, i, o, u, s, _) {
    var d,
        a,
        c,
        v = n.props,
        h = e.props,
        f = e.type,
        g = 0;
    if ((f === "svg" && (i = !0), o != null)) {
        for (; g < o.length; g++)
            if ((d = o[g]) && "setAttribute" in d == !!f && (f ? d.localName === f : d.nodeType === 3)) {
                (t = d), (o[g] = null);
                break;
            }
    }
    if (t == null) {
        if (f === null) return document.createTextNode(h);
        (t = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, h.is && h)), (o = null), (s = !1);
    }
    if (f === null) v === h || (s && t.data === h) || (t.data = h);
    else {
        if (((o = o && tt.call(t.childNodes)), (a = (v = n.props || I).dangerouslySetInnerHTML), (c = h.dangerouslySetInnerHTML), !s)) {
            if (o != null) for (v = {}, g = 0; g < t.attributes.length; g++) v[t.attributes[g].name] = t.attributes[g].value;
            (c || a) && ((c && ((a && c.__html == a.__html) || c.__html === t.innerHTML)) || (t.innerHTML = (c && c.__html) || ""));
        }
        if ((we(t, h, v, i, s), c)) e.__k = [];
        else if ((Jt(t, et((g = e.props.children)) ? g : [g], e, n, r, i && f !== "foreignObject", o, u, o ? o[0] : n.__k && F(n, 0), s, _), o != null)) for (g = o.length; g--; ) o[g] != null && qt(o[g]);
        s ||
            ("value" in h && (g = h.value) !== void 0 && (g !== t.value || (f === "progress" && !g) || (f === "option" && g !== v.value)) && K(t, "value", g, v.value, !1),
            "checked" in h && (g = h.checked) !== void 0 && g !== t.checked && K(t, "checked", g, v.checked, !1));
    }
    return t;
}
function vt(t, e, n) {
    try {
        typeof t == "function" ? t(e) : (t.current = e);
    } catch (r) {
        l.__e(r, n);
    }
}
function ft(t, e, n) {
    var r, i;
    if ((l.unmount && l.unmount(t), (r = t.ref) && ((r.current && r.current !== t.__e) || vt(r, null, e)), (r = t.__c) != null)) {
        if (r.componentWillUnmount)
            try {
                r.componentWillUnmount();
            } catch (o) {
                l.__e(o, e);
            }
        (r.base = r.__P = null), (t.__c = void 0);
    }
    if ((r = t.__k)) for (i = 0; i < r.length; i++) r[i] && ft(r[i], e, n || typeof t.type != "function");
    n || t.__e == null || qt(t.__e), (t.__ = t.__e = t.__d = void 0);
}
function Ee(t, e, n) {
    return this.constructor(t, n);
}
function Ce(t, e, n) {
    var r, i, o, u;
    l.__ && l.__(t, e),
        (i = (r = typeof n == "function") ? null : (n && n.__k) || e.__k),
        (o = []),
        (u = []),
        gt(e, (t = ((!r && n) || e).__k = at(L, null, [t])), i || I, I, e.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : e.firstChild ? tt.call(e.childNodes) : null, o, !r && n ? n : i ? i.__e : e.firstChild, r, u),
        te(o, t, u);
}
(tt = Yt.slice),
    (l = {
        __e: function (t, e, n, r) {
            for (var i, o, u; (e = e.__); )
                if ((i = e.__c) && !i.__)
                    try {
                        if (((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), (u = i.__d)), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), (u = i.__d)), u))
                            return (i.__E = i);
                    } catch (s) {
                        t = s;
                    }
            throw t;
        },
    }),
    (Gt = 0),
    (T.prototype.setState = function (t, e) {
        var n;
        (n = this.__s != null && this.__s !== this.state ? this.__s : (this.__s = H({}, this.state))), typeof t == "function" && (t = t(H({}, n), this.props)), t && H(n, t), t != null && this.__v && (e && this._sb.push(e), wt(this));
    }),
    (T.prototype.forceUpdate = function (t) {
        this.__v && ((this.__e = !0), t && this.__h.push(t), wt(this));
    }),
    (T.prototype.render = L),
    (A = []),
    (Xt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
    (lt = function (t, e) {
        return t.__v.__b - e.__v.__b;
    }),
    (Z.__r = 0);
var M,
    m,
    it,
    Tt,
    W = 0,
    ee = [],
    Y = [],
    St = l.__b,
    Nt = l.__r,
    Ht = l.diffed,
    $t = l.__c,
    Pt = l.unmount;
function nt(t, e) {
    l.__h && l.__h(m, t, W || e), (W = 0);
    var n = m.__H || (m.__H = { __: [], __h: [] });
    return t >= n.__.length && n.__.push({ __V: Y }), n.__[t];
}
function R(t) {
    return (W = 1), Te(re, t);
}
function Te(t, e, n) {
    var r = nt(M++, 2);
    if (
        ((r.t = t),
        !r.__c &&
            ((r.__ = [
                n ? n(e) : re(void 0, e),
                function (s) {
                    var _ = r.__N ? r.__N[0] : r.__[0],
                        d = r.t(_, s);
                    _ !== d && ((r.__N = [d, r.__[1]]), r.__c.setState({}));
                },
            ]),
            (r.__c = m),
            !m.u))
    ) {
        var i = function (s, _, d) {
            if (!r.__c.__H) return !0;
            var a = r.__c.__H.__.filter(function (v) {
                return v.__c;
            });
            if (
                a.every(function (v) {
                    return !v.__N;
                })
            )
                return !o || o.call(this, s, _, d);
            var c = !1;
            return (
                a.forEach(function (v) {
                    if (v.__N) {
                        var h = v.__[0];
                        (v.__ = v.__N), (v.__N = void 0), h !== v.__[0] && (c = !0);
                    }
                }),
                !(!c && r.__c.props === s) && (!o || o.call(this, s, _, d))
            );
        };
        m.u = !0;
        var o = m.shouldComponentUpdate,
            u = m.componentWillUpdate;
        (m.componentWillUpdate = function (s, _, d) {
            if (this.__e) {
                var a = o;
                (o = void 0), i(s, _, d), (o = a);
            }
            u && u.call(this, s, _, d);
        }),
            (m.shouldComponentUpdate = i);
    }
    return r.__N || r.__;
}
function $(t, e) {
    var n = nt(M++, 3);
    !l.__s && yt(n.__H, e) && ((n.__ = t), (n.i = e), m.__H.__h.push(n));
}
function Se(t, e) {
    var n = nt(M++, 4);
    !l.__s && yt(n.__H, e) && ((n.__ = t), (n.i = e), m.__h.push(n));
}
function S(t) {
    return (
        (W = 5),
        ne(function () {
            return { current: t };
        }, [])
    );
}
function ne(t, e) {
    var n = nt(M++, 7);
    return yt(n.__H, e) ? ((n.__V = t()), (n.i = e), (n.__h = t), n.__V) : n.__;
}
function rt(t, e) {
    return (
        (W = 8),
        ne(function () {
            return t;
        }, e)
    );
}
function Ne() {
    for (var t; (t = ee.shift()); )
        if (t.__P && t.__H)
            try {
                t.__H.__h.forEach(q), t.__H.__h.forEach(dt), (t.__H.__h = []);
            } catch (e) {
                (t.__H.__h = []), l.__e(e, t.__v);
            }
}
(l.__b = function (t) {
    (m = null), St && St(t);
}),
    (l.__r = function (t) {
        Nt && Nt(t), (M = 0);
        var e = (m = t.__c).__H;
        e &&
            (it === m
                ? ((e.__h = []),
                  (m.__h = []),
                  e.__.forEach(function (n) {
                      n.__N && (n.__ = n.__N), (n.__V = Y), (n.__N = n.i = void 0);
                  }))
                : (e.__h.forEach(q), e.__h.forEach(dt), (e.__h = []), (M = 0))),
            (it = m);
    }),
    (l.diffed = function (t) {
        Ht && Ht(t);
        var e = t.__c;
        e &&
            e.__H &&
            (e.__H.__h.length && ((ee.push(e) !== 1 && Tt === l.requestAnimationFrame) || ((Tt = l.requestAnimationFrame) || He)(Ne)),
            e.__H.__.forEach(function (n) {
                n.i && (n.__H = n.i), n.__V !== Y && (n.__ = n.__V), (n.i = void 0), (n.__V = Y);
            })),
            (it = m = null);
    }),
    (l.__c = function (t, e) {
        e.some(function (n) {
            try {
                n.__h.forEach(q),
                    (n.__h = n.__h.filter(function (r) {
                        return !r.__ || dt(r);
                    }));
            } catch (r) {
                e.some(function (i) {
                    i.__h && (i.__h = []);
                }),
                    (e = []),
                    l.__e(r, n.__v);
            }
        }),
            $t && $t(t, e);
    }),
    (l.unmount = function (t) {
        Pt && Pt(t);
        var e,
            n = t.__c;
        n &&
            n.__H &&
            (n.__H.__.forEach(function (r) {
                try {
                    q(r);
                } catch (i) {
                    e = i;
                }
            }),
            (n.__H = void 0),
            e && l.__e(e, n.__v));
    });
var At = typeof requestAnimationFrame == "function";
function He(t) {
    var e,
        n = function () {
            clearTimeout(r), At && cancelAnimationFrame(e), setTimeout(t);
        },
        r = setTimeout(n, 100);
    At && (e = requestAnimationFrame(n));
}
function q(t) {
    var e = m,
        n = t.__c;
    typeof n == "function" && ((t.__c = void 0), n()), (m = e);
}
function dt(t) {
    var e = m;
    (t.__c = t.__()), (m = e);
}
function yt(t, e) {
    return (
        !t ||
        t.length !== e.length ||
        e.some(function (n, r) {
            return n !== t[r];
        })
    );
}
function re(t, e) {
    return typeof e == "function" ? e(t) : e;
}
function $e() {
    const t = S(!0),
        [e, n] = R(!0);
    $(() => {
        chrome.runtime.onMessage.addListener(function (i, o, u) {
            i.toggle === !0 && ((t.current = !t.current), n(t.current));
        }),
            chrome.runtime.onMessage.addListener((i, o, u) => {
                i.currentState === !0 && u(t.current);
            });
    }, []);
    const r = rt(() => {
        try {
            chrome.runtime.sendMessage({ close: !0 });
        } catch {}
    }, []);
    return [e, r];
}
function Pe(t, e) {
    for (var n in e) t[n] = e[n];
    return t;
}
function Lt(t, e) {
    for (var n in t) if (n !== "__source" && !(n in e)) return !0;
    for (var r in e) if (r !== "__source" && t[r] !== e[r]) return !0;
    return !1;
}
function Rt(t) {
    this.props = t;
}
((Rt.prototype = new T()).isPureReactComponent = !0),
    (Rt.prototype.shouldComponentUpdate = function (t, e) {
        return Lt(this.props, t) || Lt(this.state, e);
    });
var Ot = l.__b;
l.__b = function (t) {
    t.type && t.type.__f && t.ref && ((t.props.ref = t.ref), (t.ref = null)), Ot && Ot(t);
};
var Ae = l.__e;
l.__e = function (t, e, n, r) {
    if (t.then) {
        for (var i, o = e; (o = o.__); ) if ((i = o.__c) && i.__c) return e.__e == null && ((e.__e = n.__e), (e.__k = n.__k)), i.__c(t, e);
    }
    Ae(t, e, n, r);
};
var Dt = l.unmount;
function oe(t, e, n) {
    return (
        t &&
            (t.__c &&
                t.__c.__H &&
                (t.__c.__H.__.forEach(function (r) {
                    typeof r.__c == "function" && r.__c();
                }),
                (t.__c.__H = null)),
            (t = Pe({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), (t.__c = null)),
            (t.__k =
                t.__k &&
                t.__k.map(function (r) {
                    return oe(r, e, n);
                }))),
        t
    );
}
function ie(t, e, n) {
    return (
        t &&
            ((t.__v = null),
            (t.__k =
                t.__k &&
                t.__k.map(function (r) {
                    return ie(r, e, n);
                })),
            t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), (t.__c.__e = !0), (t.__c.__P = n))),
        t
    );
}
function ct() {
    (this.__u = 0), (this.t = null), (this.__b = null);
}
function ce(t) {
    var e = t.__.__c;
    return e && e.__a && e.__a(t);
}
function j() {
    (this.u = null), (this.o = null);
}
(l.unmount = function (t) {
    var e = t.__c;
    e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), Dt && Dt(t);
}),
    ((ct.prototype = new T()).__c = function (t, e) {
        var n = e.__c,
            r = this;
        r.t == null && (r.t = []), r.t.push(n);
        var i = ce(r.__v),
            o = !1,
            u = function () {
                o || ((o = !0), (n.__R = null), i ? i(s) : s());
            };
        n.__R = u;
        var s = function () {
                if (!--r.__u) {
                    if (r.state.__a) {
                        var d = r.state.__a;
                        r.__v.__k[0] = ie(d, d.__c.__P, d.__c.__O);
                    }
                    var a;
                    for (r.setState({ __a: (r.__b = null) }); (a = r.t.pop()); ) a.forceUpdate();
                }
            },
            _ = e.__h === !0;
        r.__u++ || _ || r.setState({ __a: (r.__b = r.__v.__k[0]) }), t.then(u, u);
    }),
    (ct.prototype.componentWillUnmount = function () {
        this.t = [];
    }),
    (ct.prototype.render = function (t, e) {
        if (this.__b) {
            if (this.__v.__k) {
                var n = document.createElement("div"),
                    r = this.__v.__k[0].__c;
                this.__v.__k[0] = oe(this.__b, n, (r.__O = r.__P));
            }
            this.__b = null;
        }
        var i = e.__a && at(L, null, t.fallback);
        return i && (i.__h = null), [at(L, null, e.__a ? null : t.children), i];
    });
var It = function (t, e, n) {
    if ((++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size)))
        for (n = t.u; n; ) {
            for (; n.length > 3; ) n.pop()();
            if (n[1] < n[0]) break;
            t.u = n = n[2];
        }
};
((j.prototype = new T()).__a = function (t) {
    var e = this,
        n = ce(e.__v),
        r = e.o.get(t);
    return (
        r[0]++,
        function (i) {
            var o = function () {
                e.props.revealOrder ? (r.push(i), It(e, t, r)) : i();
            };
            n ? n(o) : o();
        }
    );
}),
    (j.prototype.render = function (t) {
        (this.u = null), (this.o = new Map());
        var e = J(t.children);
        t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
        for (var n = e.length; n--; ) this.o.set(e[n], (this.u = [1, 0, this.u]));
        return t.children;
    }),
    (j.prototype.componentDidUpdate = j.prototype.componentDidMount = function () {
        var t = this;
        this.o.forEach(function (e, n) {
            It(t, n, e);
        });
    });
var Le = (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) || 60103,
    Re = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Oe = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    De = /[A-Z0-9]/g,
    Ie = typeof document < "u",
    Me = function (t) {
        return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
    };
(T.prototype.isReactComponent = {}),
    ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
        Object.defineProperty(T.prototype, t, {
            configurable: !0,
            get: function () {
                return this["UNSAFE_" + t];
            },
            set: function (e) {
                Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
            },
        });
    });
var Mt = l.event;
function Ve() {}
function Ue() {
    return this.cancelBubble;
}
function Be() {
    return this.defaultPrevented;
}
l.event = function (t) {
    return Mt && (t = Mt(t)), (t.persist = Ve), (t.isPropagationStopped = Ue), (t.isDefaultPrevented = Be), (t.nativeEvent = t);
};
var Fe = {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this.class;
        },
    },
    Vt = l.vnode;
l.vnode = function (t) {
    typeof t.type == "string" &&
        (function (e) {
            var n = e.props,
                r = e.type,
                i = {};
            for (var o in n) {
                var u = n[o];
                if (!((o === "value" && "defaultValue" in n && u == null) || (Ie && o === "children" && r === "noscript") || o === "class" || o === "className")) {
                    var s = o.toLowerCase();
                    o === "defaultValue" && "value" in n && n.value == null
                        ? (o = "value")
                        : o === "download" && u === !0
                        ? (u = "")
                        : s === "ondoubleclick"
                        ? (o = "ondblclick")
                        : s !== "onchange" || (r !== "input" && r !== "textarea") || Me(n.type)
                        ? s === "onfocus"
                            ? (o = "onfocusin")
                            : s === "onblur"
                            ? (o = "onfocusout")
                            : Oe.test(o)
                            ? (o = s)
                            : r.indexOf("-") === -1 && Re.test(o)
                            ? (o = o.replace(De, "-$&").toLowerCase())
                            : u === null && (u = void 0)
                        : (s = o = "oninput"),
                        s === "oninput" && i[(o = s)] && (o = "oninputCapture"),
                        (i[o] = u);
                }
            }
            r == "select" &&
                i.multiple &&
                Array.isArray(i.value) &&
                (i.value = J(n.children).forEach(function (_) {
                    _.props.selected = i.value.indexOf(_.props.value) != -1;
                })),
                r == "select" &&
                    i.defaultValue != null &&
                    (i.value = J(n.children).forEach(function (_) {
                        _.props.selected = i.multiple ? i.defaultValue.indexOf(_.props.value) != -1 : i.defaultValue == _.props.value;
                    })),
                n.class && !n.className ? ((i.class = n.class), Object.defineProperty(i, "className", Fe)) : ((n.className && !n.class) || (n.class && n.className)) && (i.class = i.className = n.className),
                (e.props = i);
        })(t),
        (t.$$typeof = Le),
        Vt && Vt(t);
};
var Ut = l.__r;
l.__r = function (t) {
    Ut && Ut(t), t.__c;
};
var Bt = l.diffed;
l.diffed = function (t) {
    Bt && Bt(t);
    var e = t.props,
        n = t.__e;
    n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value);
};
const We = new Set(["P", "H1", "H2", "H3", "H4", "H5", "H6", "A", "SPAN", "DIV", "STRONG", "B", "I", "BUTTON"]),
    ue = new Set(["P", "H1", "H2", "H3", "H4", "H5", "H6", "STRONG", "B", "I"]),
    ze = new Set(["P", "H1", "H2", "H3", "H4", "H5", "H6", "DIV"]),
    mt = /^(?:(?:\\n|\\t|\\s|\n|\t| )*|\n*\t* *)$/;
function V(t) {
    if (!t || !We.has(t.tagName)) return !1;
    if (!ue.has(t.tagName)) {
        const e = t.firstChild;
        if (!e || e.nodeType !== Node.TEXT_NODE || !e.textContent || mt.test(e.textContent) || t.children.length > 1 || Array.from(t.children).some((n) => ze.has(n.tagName))) return !1;
    }
    return !0;
}
function se(t) {
    return t.tagName === "IMG" || t.tagName === "svg";
}
function je(t) {
    if (t.tagName !== "A" || t.children.length > 0) return !1;
    const e = t.firstChild;
    return !e || e.nodeType !== Node.TEXT_NODE || !e.textContent ? !0 : !mt.test(e.textContent);
}
function _e(t) {
    for (const e of t) if (!je(e) && ot(e) && e.nodeType !== Node.TEXT_NODE && !(e instanceof SVGElement) && !e.getAttribute("data-framer-link")) return e;
}
function le(t, e = 1) {
    let n = t,
        r = 0;
    for (; r < e; ) {
        const i = n == null ? void 0 : n.parentElement;
        if (!i) break;
        const o = i ? _e([i]) : void 0;
        (n = i), o && r++;
    }
    return n;
}
function ot(t) {
    const e = window.getComputedStyle(t);
    return e.getPropertyValue("display") !== "none" && e.getPropertyValue("visibility") !== "hidden" && e.getPropertyValue("opacity") !== "0";
}
const Ge = new Set(["foreignObject"]);
function ae(t, e) {
    for (const n of t.children) if (e.has(n.tagName) || ae(n, e)) return !0;
}
const ut = new WeakMap();
function Xe(t) {
    switch (t == null ? void 0 : t.tagName) {
        case "CANVAS":
        case "BODY":
        case "foreignObject":
            return !0;
        case "VIDEO":
            return !!t.getAttribute("poster");
        case "svg":
            return ae(t, Ge);
        default:
            return !1;
    }
}
function bt(t) {
    if (!t) return !1;
    if (ut.has(t)) return !!ut.get(t);
    const e = !!Xe(t);
    return ut.set(t, e), e;
}
function G(t, e) {
    if (!V(t)) return 0;
    const n = parseInt(e);
    return Number.isInteger(n) ? n : 0;
}
function pt(t) {
    const e = t.getBoundingClientRect(),
        n = document.documentElement.scrollTop || document.body.scrollTop || 0,
        r = document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        i = window.getComputedStyle(t),
        o = G(t, i.getPropertyValue("padding-left")),
        u = G(t, i.getPropertyValue("padding-right")),
        s = G(t, i.getPropertyValue("padding-top")),
        _ = G(t, i.getPropertyValue("padding-bottom"));
    return { x: e.left + o + r, y: e.top + s + n, width: e.width - o - u, height: e.height - s - _ };
}
function Ye(t) {
    switch (t == null ? void 0 : t.tagName) {
        case "IMG":
            return "Image";
        case "P":
        case "H1":
        case "H2":
        case "H3":
        case "H4":
        case "H5":
        case "H6":
        case "SPAN":
            return "Text";
        case "DIV":
        case "SECTION":
        case "FOOTER":
        case "NAV":
        case "UL":
        case "LI":
            return V(t) ? "Text" : "Layout";
        case "A":
            return "Link";
        case "BUTTON":
            return "Button";
        case "svg":
            return "SVG";
        default:
            return "Element";
    }
}
globalThis && globalThis.__awaiter;
function Q(t, e, n, r) {
    const i = S(e);
    qe(() => {
        i.current = e;
    }, [e]),
        $(() => {
            var o;
            const u = (o = n == null ? void 0 : n.current) !== null && o !== void 0 ? o : window;
            if (!(u && u.addEventListener)) return;
            const s = (_) => i.current(_);
            return (
                u.addEventListener(t, s, r),
                () => {
                    u.removeEventListener(t, s, r);
                }
            );
        }, [t, n, r]);
}
globalThis && globalThis.__awaiter;
const qe = typeof window < "u" ? Se : $;
function Ze(t) {
    if (t.nodeType !== Node.TEXT_NODE) return !1;
    const e = t.textContent;
    if (!e) return !1;
    const n = document.createRange(),
        r = [];
    let i = [];
    try {
        for (let o = 0; o < e.length; o++) {
            n.setStart(t, 0), n.setEnd(t, o + 1);
            const u = n.getClientRects().length - 1;
            r[u] || r.push((i = [])), i.push(e.charAt(o));
        }
        return r.map((o) => Je(o.join(""))).length <= 1;
    } catch {
        return !1;
    }
}
function Je(t) {
    return t.trim().replace(/\s+/g, " ");
}
function Ke(t, e) {
    if (t.nodeType !== Node.TEXT_NODE) return !1;
    const n = t.textContent;
    if (!n) return !1;
    const r = document.createRange();
    try {
        r.setStart(t, 0), r.setEnd(t, n.length);
        const [i] = r.getClientRects();
        return i.left - 3 > e.left && i.right + 3 < e.right;
    } catch {
        return !1;
    }
}
const fe = (t, e, n) => Object.entries(t).map(e).join(n);
function Qe(t) {
    return fe(t, ([e, n]) => `${e}: ${n}`, "; ");
}
function tn(t) {
    return fe(t, ([e, n]) => `${e}='${n}'`, " ");
}
function en(t) {
    switch (t.tagName) {
        case "svg": {
            const u = window.getComputedStyle(t);
            return { viewBox: t.getAttribute("viewBox") ?? "", height: t.getAttribute("height") ?? "", width: t.getAttribute("width") ?? "", xmlns: t.getAttribute("xmlns") ?? "", fill: u.getPropertyValue("fill") ?? "" };
        }
        case "IMG": {
            const u = t.getAttribute("src");
            return { src: u ? new URL(u, window.location.origin) : void 0, alt: t.getAttribute("alt") || "" };
        }
        case "VIDEO": {
            const u = t.getAttribute("poster");
            return { src: u ? new URL(u, window.location.origin) : void 0 };
        }
        default:
            const n = window.getComputedStyle(t).getPropertyValue("background-image");
            if (!n) return;
            const i = n.split(",").find((u) => u.startsWith("url("));
            if (!i) return;
            const o = i.match(/url\("([^"]*)"\)/);
            return o ? { src: o[1], alt: t.getAttribute("alt") || "" } : void 0;
    }
}
const de = ["opacity", "z-index", "mix-blend-mode", "pointer-events", "user-select", "filter"],
    pe = "rgba(0, 0, 0, 0)",
    st = [
        ...de,
        "color",
        "font-family",
        "font-size",
        "font-weight",
        "letter-spacing",
        "line-height",
        "text-align",
        "text-decoration-line",
        "text-transform",
        "background-color",
        "background-image",
        "border-top",
        "border-right",
        "border-bottom",
        "border-left",
        "border-radius",
        "padding",
        "align-items",
    ];
function nn(t) {
    const e = {};
    for (let r = 0; r < st.length; r++) e[st[r]] = t.getPropertyValue(st[r]);
    return t.getPropertyValue("-webkit-text-fill-color") === pe && (e["background-image"] = void 0), e;
}
const Ft = [...de, "border-radius", "overflow", "background-color", "background-image", "background", "box-shadow", "border-top", "border-right", "border-bottom", "border-left"];
function rn(t) {
    const e = {};
    for (let n = 0; n < Ft.length; n++) {
        const r = Ft[n],
            i = t.getPropertyValue(r);
        !i || i === "none" || i === "normal" || i === "auto" || i === pe || (e[r] = i);
    }
    return e;
}
function on(t) {
    return { "object-fit": t.getPropertyValue("object-fit") };
}
function cn(t) {
    const e = window.getComputedStyle(t);
    return { ...(V(t) ? nn(e) : rn(e)), ...(se(t) ? on(e) : void 0) };
}
async function un(t, e = "text/html") {
    return navigator.clipboard.write([new ClipboardItem({ "text/html": new Blob([t], { type: e }) })]);
}
function sn(t) {
    const e = pt(t),
        n = { top: Math.ceil(e.y) + "px", left: Math.ceil(e.x) + "px", width: Math.ceil(e.width) + "px", height: Math.ceil(e.height) + "px" };
    return !V(t) || Array.from(t.childNodes).filter((i) => (i instanceof Element ? ot(i) : !0)).length !== 1 || !t.firstChild ? n : Ze(t.firstChild) && !Ke(t.firstChild, t.getBoundingClientRect()) ? { ...n, width: "auto" } : n;
}
function _n(t) {
    return tn({ style: Qe({ ...sn(t), ...cn(t) }), ...en(t) });
}
function he(t, e) {
    if (!t.children) return "";
    let n = "";
    for (const r of t.children) n += ve(r, e);
    return n;
}
const ln = new Set(["STRONG", "BOLD", "B", "I", "U", "EM", "S", "SMALL", "SUB", "SUP"]);
function ge(t, e) {
    if (!ot(t) || (t.textContent && mt.test(t.textContent))) return e.replace(t.outerHTML, "");
    let n = e;
    ln.has(t.tagName) && (n = e.replace(t.outerHTML, t.innerHTML));
    for (const r of t.children) n = ge(r, n);
    return n;
}
function an(t, e) {
    return se(t) ? t.innerHTML : V(t) ? ge(t, t.innerHTML).trim() : t.tagName === "VIDEO" ? "" : he(t, e);
}
function fn(t) {
    return V(t) && !ue.has(t.tagName) ? "p" : t.tagName === "VIDEO" ? "img" : t.tagName.toLowerCase();
}
function ve(t, e) {
    if (!ot(t)) return "";
    if (bt(t)) return e.recordDescendants({ invalid: !0 }), he(t, e);
    const n = an(t, e),
        r = fn(t);
    return `<${r} ${_n(t)}>${n}</${r}>`;
}
function dn() {
    const { width: t } = document.body.getBoundingClientRect(),
        e = document.body.scrollHeight;
    return JSON.stringify({ width: t, height: e, url: location.href });
}
function pn(t, e) {
    const n = S(""),
        r = S(0);
    $(() => {
        async function i(o) {
            if (o.target instanceof HTMLElement && o.target.getAttribute("data-framer-link")) return;
            o.stopPropagation(), o.preventDefault();
            const u = t.current;
            if (!u || bt(u)) return;
            let s = !1;
            const _ = {
                    recordDescendants: ({ invalid: c }) => {
                        c && (s || (s = !0));
                    },
                },
                d = `<div data-framer-html-import-extension='${dn()}'>${ve(u, _)}</div>`,
                { current: a } = n;
            o.shiftKey ? ((n.current = a + d), (r.current += 1)) : ((n.current = d), (r.current = 1));
            try {
                await un(n.current), e(r.current, s);
            } catch {
                console.error("Failed to copy html.");
            }
        }
        return (
            document.addEventListener("click", i, !0),
            () => {
                document.removeEventListener("click", i, !0);
            }
        );
    }, [e]);
}
function hn(t) {
    const [e, n] = R(null);
    function r(i) {
        i !== e && n(i);
    }
    return (
        Q(
            "mouseover",
            (i) => {
                if (!i.target) return n(null);
                const u = document.elementsFromPoint(i.clientX, i.clientY),
                    s = t(u);
                r(s || null);
            },
            { current: document }
        ),
        e
    );
}
const gn = "__framer-cursor",
    vn = "__framer-cursor-unsupported";
function yn(t) {
    const e = hn(_e),
        [n, r] = R(0),
        [i, o] = R(e),
        u = S(null);
    $(() => {
        r(0);
    }, [e]),
        $(() => {
            const d = (u.current = n === 0 ? e : le(e, n));
            o(d);
        }, [n, e]),
        Q(
            "keyup",
            (d) => {
                d.key === "Escape" && r((a) => a + 1);
            },
            document
        );
    const s = !!i,
        _ = bt(i);
    return (
        $(() => {
            var d, a, c, v;
            (a = (d = document.body) == null ? void 0 : d.classList) == null || a.toggle(gn, s), (v = (c = document.body) == null ? void 0 : c.classList) == null || v.toggle(vn, _);
        }, [s, _]),
        pn(u, t),
        { element: i, isUnsupported: _ }
    );
}
var mn = 0;
function p(t, e, n, r, i, o) {
    var u,
        s,
        _ = {};
    for (s in e) s == "ref" ? (u = e[s]) : (_[s] = e[s]);
    var d = { type: t, props: _, key: n, ref: u, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --mn, __source: i, __self: o };
    if (typeof t == "function" && (u = t.defaultProps)) for (s in u) _[s] === void 0 && (_[s] = u[s]);
    return l.vnode && l.vnode(d), d;
}
function bn(t) {
    switch (t) {
        case "start":
            return "flex-start";
        case "end":
            return "flex-end";
        case "space-between":
        case "center":
        default:
            return t;
    }
}
function xn(t) {
    switch (t) {
        case "start":
            return "flex-start";
        case "end":
            return "flex-end";
        case "center":
        default:
            return t;
    }
}
function U({ direction: t, justify: e, align: n, gap: r } = {}) {
    return { display: "flex", flexDirection: t ?? "row", justifyContent: bn(e ?? "center"), alignItems: xn(n ?? "center"), gap: r ?? 0 };
}
function P({ children: t, className: e, justify: n, align: r, gap: i, style: o, ...u }) {
    return p("div", { className: e, style: { ...o, ...U({ direction: "row", justify: n, align: r, gap: i }) }, ...u, children: t });
}
function wn({ children: t, justify: e, align: n, gap: r, style: i, ...o }) {
    return p("div", { style: { ...i, ...U({ direction: "column", justify: e, align: n, gap: r }) }, ...o, children: t });
}
const kn = {
        white: "#fff",
        tint: "#09f",
        alert: "#f90",
        button: "#333",
        background: "#000",
        cardOutline: "rgba(255, 255, 255, 0.1)",
        cardShadow: "rgba(0, 0, 0, 0.1)",
        divider: "rgba(255,255,255, 0.2)",
        kbdBackground: "rgba(255,255,255, 0.2)",
        outlineFill: "rgba(0, 153, 255, 0.05)",
        outlineDisabled: "#999",
        outlineDisabledFill: "rgba(153, 153, 153, 0.05)",
    },
    b = { colors: kn, z: 999999999999999 },
    En = (t) => ({
        ...U({ direction: "row", justify: "space-between" }),
        position: "absolute",
        pointerEvents: "none",
        background: t === "unsupported" ? b.colors.outlineDisabled : b.colors.tint,
        borderRadius: 16,
        padding: "8px 12px",
        zIndex: b.z,
        margin: "-9px 0 0 10px",
        whiteSpace: "nowrap",
    }),
    Wt = 16;
function Cn({ label: t, variant: e }) {
    const n = S(null),
        r = S({ lastX: 0, lastY: 0 }),
        i = rt((o) => {
            if (!n.current) return;
            const { lastX: u, lastY: s } = r.current,
                _ = (o.clientX ?? u) + Wt + window.scrollX,
                d = (o.clientY ?? s) + Wt + window.scrollY;
            (n.current.style.left = _ + "px"), (n.current.style.top = d + "px"), (r.current = { lastX: o.clientX ?? u, lastY: o.clientY ?? s });
        }, []);
    return Q("mousemove", i, document), Q("scroll", i, document), p("p", { className: "framer-copy-badge text", ref: n, style: En(e), children: t });
}
function Tn({ style: t }) {
    return p("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        style: { width: 10, height: 10, ...t },
        children: p("path", { d: "M 8.5 1.5 L 1.5 8.5 M 1.5 1.5 L 8.5 8.5", fill: "transparent", strokeWidth: "1.5", stroke: "#999999", strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: "" }),
    });
}
function ye({ style: t }) {
    return p("svg", { viewBox: "0 0 24 24", role: "img", xmlns: "http://www.w3.org/2000/svg", style: { width: 16, height: 16, fill: "#fff", ...t }, children: p("path", { d: "M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" }) });
}
function _t({ label: t, kbd: e }) {
    return p(P, {
        style: { width: "100%" },
        justify: "space-between",
        align: "center",
        children: [
            p("p", { className: "text", children: t }),
            p("p", { className: "text text-bold", style: { ...U({ direction: "row" }), padding: "0px 8px", borderRadius: 8, background: b.colors.kbdBackground, height: 25 }, children: e }),
        ],
    });
}
function Sn({ text: t, href: e }) {
    return p("a", {
        "data-framer-link": !0,
        target: "_blank",
        href: e,
        className: "text text-bold text-inverted",
        style: { ...U({ direction: "row" }), width: "100%", height: 30, padding: "0px 10px", backgroundColor: b.colors.white, borderRadius: 8, textDecoration: "none", pointerEvents: "auto", marginTop: 5 },
        children: t,
    });
}
function Nn({ onClose: t }) {
    return p(wn, {
        justify: "start",
        align: "start",
        gap: 10,
        style: {
            padding: 15,
            paddingTop: 0,
            background: b.colors.background,
            borderRadius: 20,
            boxShadow: `0px 10px 20px 0px ${b.colors.cardShadow}`,
            width: 210,
            position: "fixed",
            right: 20,
            bottom: 20,
            pointerEvents: "none",
            zIndex: b.z,
            outline: `1px solid ${b.colors.cardOutline}`,
        },
        children: [
            p(P, {
                justify: "space-between",
                align: "center",
                style: { borderBottom: `1px solid ${b.colors.divider}`, width: "100%", height: 50 },
                children: [
                    p(ye, { style: { marginLeft: -1 } }),
                    p("p", { className: "text text-bold", style: { position: "absolute", left: 0, right: 0, textAlign: "center" }, children: "HTML to Framer" }),
                    p(P, { "data-framer-link": !0, onClick: t, style: { pointerEvents: "auto", width: 30, height: 30, marginRight: -10 }, children: p(Tn, { style: { pointerEvents: "none" } }) }),
                ],
            }),
            p(_t, { label: "Copy Element", kbd: "Click" }),
            p(_t, { label: "Copy Multiple", kbd: "⇧ Shift" }),
            p(_t, { label: "Select Parent", kbd: "Esc" }),
            p(Sn, { text: "Watch Tutorial", href: "https://framer.com/html-to-framer" }),
        ],
    });
}
function Hn({ rect: t, type: e = "solid", variant: n = "supported" }) {
    const r = n === "unsupported" ? b.colors.outlineDisabledFill : b.colors.outlineFill,
        i = n === "unsupported" ? b.colors.outlineDisabled : b.colors.tint;
    return {
        position: "absolute",
        border: `1px ${e} ${i}`,
        zIndex: b.z,
        background: e === "solid" ? r : "transparent",
        opacity: e === "dashed" ? 0.8 : 1,
        left: t.x,
        top: t.y,
        width: t.width,
        height: t.height,
        pointerEvents: "none",
        display: "block",
    };
}
function zt(t) {
    return p("div", { style: Hn(t) });
}
const $n = 50,
    Pn = 10,
    An = 150;
function Ln(t, e) {
    return {
        position: "fixed",
        margin: "0 auto",
        width: "fit-content",
        top: 20,
        left: 0,
        right: 0,
        borderRadius: 14,
        background: b.colors.background,
        zIndex: b.z - t,
        opacity: e && t > 0 ? 1 : 0,
        height: 50,
        transform: `translate(0px, ${($n + Pn) * (t - 1)}px)`,
        transition: `transform ${An}ms ease-in-out, opacity 100ms ease-in-out`,
        outline: `1px solid ${b.colors.cardOutline}`,
        pointerEvents: "none",
    };
}
function me({ children: t }) {
    return p(P, { style: { width: 30, height: 30 }, children: t });
}
var ht = ((t) => ((t[(t.Copied = 0)] = "Copied"), (t[(t.PartiallyCopied = 1)] = "PartiallyCopied"), t))(ht || {});
const jt = { padding: 10, paddingRight: 18 };
function Rn({ toast: t, count: e = 0 }) {
    switch (t) {
        case 0:
            return p(P, { style: jt, gap: 5, children: [p(me, { children: p(ye, {}) }), p("p", { className: "text text-bold", children: ["Copied ", e, " item", e > 1 ? "s" : "", ". Now paste in Framer."] })] });
        case 1:
            return p(P, {
                style: jt,
                gap: 5,
                children: [p(In, {}), p("p", { className: "text text-bold", children: "Some items in your selection can’t be copied." }), p(Mn, { text: "Learn More", href: "https://framer.com/html-to-framer", style: { marginRight: -8 } })],
            });
        default:
            return null;
    }
}
function On({ toast: t, index: e }) {
    const [n, r] = R(!1);
    return (
        $(() => {
            r(!0);
        }, []),
        t ? p(P, { style: { ...Ln(n ? e : e - 1, n && !!t) }, children: p(Rn, { toast: t.type, ...t.props }) }) : null
    );
}
function Dn({ children: t }) {
    const e = S(),
        [n, r] = R({ current: void 0, previous: void 0 });
    function i() {
        clearTimeout(e.current),
            (e.current = setTimeout(() => {
                r(({ current: u }) => ({ previous: u, current: void 0 })), i();
            }, 2e3));
    }
    const o = rt((u, s) => {
        i(), r(({ current: _, previous: d }) => ((_ == null ? void 0 : _.type) === u ? { previous: d, current: { type: u, props: s } } : { previous: _, current: { type: u, props: s } }));
    }, []);
    return p("div", { children: [t({ addToast: o }), [n.previous, n.current].map((u, s) => p(On, { toast: u, index: s }, u == null ? void 0 : u.type))] });
}
function In() {
    return p(me, { children: p(P, { className: "text text-bold", style: { background: b.colors.alert, borderRadius: "50%", height: 20, width: 20 }, children: "!" }) });
}
function Mn({ text: t, href: e, style: n }) {
    return p("a", {
        target: "_blank",
        href: e,
        "data-framer-link": !0,
        className: "text text-bold",
        style: { ...U({ direction: "row" }), height: 30, padding: "0px 10px", backgroundColor: b.colors.button, borderRadius: 8, pointerEvents: "auto", ...n },
        children: t,
    });
}
function Vn({ addToast: t, onClose: e }) {
    const [n, r] = R(),
        i = S(),
        o = rt((d, a) => {
            clearTimeout(i.current),
                r("Copied!"),
                t(a ? ht.PartiallyCopied : ht.Copied, { count: d }),
                (i.current = setTimeout(() => {
                    r(void 0);
                }, 1e3));
        }, []),
        { element: u, isUnsupported: s } = yn(o),
        _ = le(u);
    return p(L, {
        children: [
            u && p(zt, { rect: pt(u), variant: s ? "unsupported" : "supported" }),
            _ && !s && p(zt, { rect: pt(_), type: "dashed" }),
            p(Nn, { onClose: e }),
            u && p(Cn, { variant: s ? "unsupported" : void 0, label: n ?? (s ? "Unsupported" : `Copy ${Ye(u)}`) }),
        ],
    });
}
function Un() {
    const [t, e] = $e();
    return t ? p(Dn, { children: ({ addToast: n }) => p(Vn, { addToast: n, onClose: e }) }) : null;
}
function Bn(t) {
    let e = document.getElementById(t);
    return e || ((e = document.createElement("div")), (e.id = t), document.body.appendChild(e)), e;
}
Ce(p(Un, {}), Bn("framer-quickstart-root"));
