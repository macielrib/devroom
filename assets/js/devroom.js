(() => {
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Gi = u(() => {
    window.tram = (function (e) {
      function t(l, y) {
        var I = new B.Bare();
        return I.init(l, y);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (y) {
          return "-" + y.toLowerCase();
        });
      }
      function n(l) {
        var y = parseInt(l.slice(1), 16),
          I = (y >> 16) & 255,
          S = (y >> 8) & 255,
          m = 255 & y;
        return [I, S, m];
      }
      function i(l, y, I) {
        return (
          "#" + ((1 << 24) | (l << 16) | (y << 8) | I).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, y) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof y + "] " + y);
      }
      function s(l, y, I) {
        f("Units do not match [" + l + "]: " + y + ", " + I);
      }
      function c(l, y, I) {
        if ((y !== void 0 && (I = y), l === void 0)) return I;
        var S = I;
        return (
          Lt.test(l) || !ht.test(l)
            ? (S = parseInt(l, 10))
            : ht.test(l) && (S = 1e3 * parseFloat(l)),
          0 > S && (S = 0),
          S === S ? S : I
        );
      }
      function f(l) {
        fe.debug && window && window.console.warn(l);
      }
      function g(l) {
        for (var y = -1, I = l ? l.length : 0, S = []; ++y < I; ) {
          var m = l[y];
          m && S.push(m);
        }
        return S;
      }
      var v = (function (l, y, I) {
          function S(oe) {
            return typeof oe == "object";
          }
          function m(oe) {
            return typeof oe == "function";
          }
          function C() {}
          function te(oe, Ee) {
            function z() {
              var De = new le();
              return m(De.init) && De.init.apply(De, arguments), De;
            }
            function le() {}
            Ee === I && ((Ee = oe), (oe = Object)), (z.Bare = le);
            var de,
              Ae = (C[l] = oe[l]),
              it = (le[l] = z[l] = new C());
            return (
              (it.constructor = z),
              (z.mixin = function (De) {
                return (le[l] = z[l] = te(z, De)[l]), z;
              }),
              (z.open = function (De) {
                if (
                  ((de = {}),
                  m(De) ? (de = De.call(z, it, Ae, z, oe)) : S(De) && (de = De),
                  S(de))
                )
                  for (var Ar in de) y.call(de, Ar) && (it[Ar] = de[Ar]);
                return m(it.init) || (it.init = oe), z;
              }),
              z.open(Ee)
            );
          }
          return te;
        })("prototype", {}.hasOwnProperty),
        _ = {
          ease: [
            "ease",
            function (l, y, I, S) {
              var m = (l /= S) * l,
                C = m * l;
              return (
                y +
                I * (-2.75 * C * m + 11 * m * m + -15.5 * C + 8 * m + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, y, I, S) {
              var m = (l /= S) * l,
                C = m * l;
              return y + I * (-1 * C * m + 3 * m * m + -3 * C + 2 * m);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, y, I, S) {
              var m = (l /= S) * l,
                C = m * l;
              return (
                y +
                I * (0.3 * C * m + -1.6 * m * m + 2.2 * C + -1.8 * m + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, y, I, S) {
              var m = (l /= S) * l,
                C = m * l;
              return y + I * (2 * C * m + -5 * m * m + 2 * C + 2 * m);
            },
          ],
          linear: [
            "linear",
            function (l, y, I, S) {
              return (I * l) / S + y;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, y, I, S) {
              return I * (l /= S) * l + y;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, y, I, S) {
              return -I * (l /= S) * (l - 2) + y;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, y, I, S) {
              return (l /= S / 2) < 1
                ? (I / 2) * l * l + y
                : (-I / 2) * (--l * (l - 2) - 1) + y;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, y, I, S) {
              return I * (l /= S) * l * l + y;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, y, I, S) {
              return I * ((l = l / S - 1) * l * l + 1) + y;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, y, I, S) {
              return (l /= S / 2) < 1
                ? (I / 2) * l * l * l + y
                : (I / 2) * ((l -= 2) * l * l + 2) + y;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, y, I, S) {
              return I * (l /= S) * l * l * l + y;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, y, I, S) {
              return -I * ((l = l / S - 1) * l * l * l - 1) + y;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, y, I, S) {
              return (l /= S / 2) < 1
                ? (I / 2) * l * l * l * l + y
                : (-I / 2) * ((l -= 2) * l * l * l - 2) + y;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, y, I, S) {
              return I * (l /= S) * l * l * l * l + y;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, y, I, S) {
              return I * ((l = l / S - 1) * l * l * l * l + 1) + y;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, y, I, S) {
              return (l /= S / 2) < 1
                ? (I / 2) * l * l * l * l * l + y
                : (I / 2) * ((l -= 2) * l * l * l * l + 2) + y;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, y, I, S) {
              return -I * Math.cos((l / S) * (Math.PI / 2)) + I + y;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, y, I, S) {
              return I * Math.sin((l / S) * (Math.PI / 2)) + y;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, y, I, S) {
              return (-I / 2) * (Math.cos((Math.PI * l) / S) - 1) + y;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, y, I, S) {
              return l === 0 ? y : I * Math.pow(2, 10 * (l / S - 1)) + y;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, y, I, S) {
              return l === S
                ? y + I
                : I * (-Math.pow(2, (-10 * l) / S) + 1) + y;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, y, I, S) {
              return l === 0
                ? y
                : l === S
                ? y + I
                : (l /= S / 2) < 1
                ? (I / 2) * Math.pow(2, 10 * (l - 1)) + y
                : (I / 2) * (-Math.pow(2, -10 * --l) + 2) + y;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, y, I, S) {
              return -I * (Math.sqrt(1 - (l /= S) * l) - 1) + y;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, y, I, S) {
              return I * Math.sqrt(1 - (l = l / S - 1) * l) + y;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, y, I, S) {
              return (l /= S / 2) < 1
                ? (-I / 2) * (Math.sqrt(1 - l * l) - 1) + y
                : (I / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + y;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, y, I, S, m) {
              return (
                m === void 0 && (m = 1.70158),
                I * (l /= S) * l * ((m + 1) * l - m) + y
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, y, I, S, m) {
              return (
                m === void 0 && (m = 1.70158),
                I * ((l = l / S - 1) * l * ((m + 1) * l + m) + 1) + y
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, y, I, S, m) {
              return (
                m === void 0 && (m = 1.70158),
                (l /= S / 2) < 1
                  ? (I / 2) * l * l * (((m *= 1.525) + 1) * l - m) + y
                  : (I / 2) *
                      ((l -= 2) * l * (((m *= 1.525) + 1) * l + m) + 2) +
                    y
              );
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        O = document,
        b = window,
        M = "bkwld-tram",
        A = /[\-\.0-9]/g,
        w = /[A-Z]/,
        T = "number",
        q = /^(rgb|#)/,
        L = /(em|cm|mm|in|pt|pc|px)$/,
        D = /(em|cm|mm|in|pt|pc|px|%)$/,
        V = /(deg|rad|turn)$/,
        $ = "unitless",
        Z = /(all|none) 0s ease 0s/,
        ie = /^(width|height)$/,
        W = " ",
        R = O.createElement("a"),
        p = ["Webkit", "Moz", "O", "ms"],
        F = ["-webkit-", "-moz-", "-o-", "-ms-"],
        x = function (l) {
          if (l in R.style) return { dom: l, css: l };
          var y,
            I,
            S = "",
            m = l.split("-");
          for (y = 0; y < m.length; y++)
            S += m[y].charAt(0).toUpperCase() + m[y].slice(1);
          for (y = 0; y < p.length; y++)
            if (((I = p[y] + S), I in R.style))
              return { dom: I, css: F[y] + l };
        },
        U = (t.support = {
          bind: Function.prototype.bind,
          transform: x("transform"),
          transition: x("transition"),
          backface: x("backface-visibility"),
          timing: x("transition-timing-function"),
        });
      if (U.transition) {
        var J = U.timing.dom;
        if (((R.style[J] = _["ease-in-back"][0]), !R.style[J]))
          for (var re in E) _[re][0] = E[re];
      }
      var G = (t.frame = (function () {
          var l =
            b.requestAnimationFrame ||
            b.webkitRequestAnimationFrame ||
            b.mozRequestAnimationFrame ||
            b.oRequestAnimationFrame ||
            b.msRequestAnimationFrame;
          return l && U.bind
            ? l.bind(b)
            : function (y) {
                b.setTimeout(y, 16);
              };
        })()),
        j = (t.now = (function () {
          var l = b.performance,
            y = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return y && U.bind
            ? y.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        Q = v(function (l) {
          function y(ne, pe) {
            var Ie = g(("" + ne).split(W)),
              ve = Ie[0];
            pe = pe || {};
            var Me = Y[ve];
            if (!Me) return f("Unsupported property: " + ve);
            if (!pe.weak || !this.props[ve]) {
              var ze = Me[0],
                Xe = this.props[ve];
              return (
                Xe || (Xe = this.props[ve] = new ze.Bare()),
                Xe.init(this.$el, Ie, Me, pe),
                Xe
              );
            }
          }
          function I(ne, pe, Ie) {
            if (ne) {
              var ve = typeof ne;
              if (
                (pe ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ve == "number" && pe)
              )
                return (
                  (this.timer = new se({
                    duration: ne,
                    context: this,
                    complete: C,
                  })),
                  void (this.active = !0)
                );
              if (ve == "string" && pe) {
                switch (ne) {
                  case "hide":
                    z.call(this);
                    break;
                  case "stop":
                    te.call(this);
                    break;
                  case "redraw":
                    le.call(this);
                    break;
                  default:
                    y.call(this, ne, Ie && Ie[1]);
                }
                return C.call(this);
              }
              if (ve == "function") return void ne.call(this, this);
              if (ve == "object") {
                var Me = 0;
                it.call(
                  this,
                  ne,
                  function (Se, hm) {
                    Se.span > Me && (Me = Se.span), Se.stop(), Se.animate(hm);
                  },
                  function (Se) {
                    "wait" in Se && (Me = c(Se.wait, 0));
                  }
                ),
                  Ae.call(this),
                  Me > 0 &&
                    ((this.timer = new se({ duration: Me, context: this })),
                    (this.active = !0),
                    pe && (this.timer.complete = C));
                var ze = this,
                  Xe = !1,
                  ln = {};
                G(function () {
                  it.call(ze, ne, function (Se) {
                    Se.active && ((Xe = !0), (ln[Se.name] = Se.nextStyle));
                  }),
                    Xe && ze.$el.css(ln);
                });
              }
            }
          }
          function S(ne) {
            (ne = c(ne, 0)),
              this.active
                ? this.queue.push({ options: ne })
                : ((this.timer = new se({
                    duration: ne,
                    context: this,
                    complete: C,
                  })),
                  (this.active = !0));
          }
          function m(ne) {
            return this.active
              ? (this.queue.push({ options: ne, args: arguments }),
                void (this.timer.complete = C))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function C() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ne = this.queue.shift();
              I.call(this, ne.options, !0, ne.args);
            }
          }
          function te(ne) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var pe;
            typeof ne == "string"
              ? ((pe = {}), (pe[ne] = 1))
              : (pe = typeof ne == "object" && ne != null ? ne : this.props),
              it.call(this, pe, De),
              Ae.call(this);
          }
          function oe(ne) {
            te.call(this, ne), it.call(this, ne, Ar, pm);
          }
          function Ee(ne) {
            typeof ne != "string" && (ne = "block"),
              (this.el.style.display = ne);
          }
          function z() {
            te.call(this), (this.el.style.display = "none");
          }
          function le() {
            this.el.offsetHeight;
          }
          function de() {
            te.call(this),
              e.removeData(this.el, M),
              (this.$el = this.el = null);
          }
          function Ae() {
            var ne,
              pe,
              Ie = [];
            this.upstream && Ie.push(this.upstream);
            for (ne in this.props)
              (pe = this.props[ne]), pe.active && Ie.push(pe.string);
            (Ie = Ie.join(",")),
              this.style !== Ie &&
                ((this.style = Ie), (this.el.style[U.transition.dom] = Ie));
          }
          function it(ne, pe, Ie) {
            var ve,
              Me,
              ze,
              Xe,
              ln = pe !== De,
              Se = {};
            for (ve in ne)
              (ze = ne[ve]),
                ve in _e
                  ? (Se.transform || (Se.transform = {}),
                    (Se.transform[ve] = ze))
                  : (w.test(ve) && (ve = r(ve)),
                    ve in Y ? (Se[ve] = ze) : (Xe || (Xe = {}), (Xe[ve] = ze)));
            for (ve in Se) {
              if (((ze = Se[ve]), (Me = this.props[ve]), !Me)) {
                if (!ln) continue;
                Me = y.call(this, ve);
              }
              pe.call(this, Me, ze);
            }
            Ie && Xe && Ie.call(this, Xe);
          }
          function De(ne) {
            ne.stop();
          }
          function Ar(ne, pe) {
            ne.set(pe);
          }
          function pm(ne) {
            this.$el.css(ne);
          }
          function Ke(ne, pe) {
            l[ne] = function () {
              return this.children
                ? vm.call(this, pe, arguments)
                : (this.el && pe.apply(this, arguments), this);
            };
          }
          function vm(ne, pe) {
            var Ie,
              ve = this.children.length;
            for (Ie = 0; ve > Ie; Ie++) ne.apply(this.children[Ie], pe);
            return this;
          }
          (l.init = function (ne) {
            if (
              ((this.$el = e(ne)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              fe.keepInherited && !fe.fallback)
            ) {
              var pe = k(this.el, "transition");
              pe && !Z.test(pe) && (this.upstream = pe);
            }
            U.backface &&
              fe.hideBackface &&
              h(this.el, U.backface.css, "hidden");
          }),
            Ke("add", y),
            Ke("start", I),
            Ke("wait", S),
            Ke("then", m),
            Ke("next", C),
            Ke("stop", te),
            Ke("set", oe),
            Ke("show", Ee),
            Ke("hide", z),
            Ke("redraw", le),
            Ke("destroy", de);
        }),
        B = v(Q, function (l) {
          function y(I, S) {
            var m = e.data(I, M) || e.data(I, M, new Q.Bare());
            return m.el || m.init(I), S ? m.start(S) : m;
          }
          l.init = function (I, S) {
            var m = e(I);
            if (!m.length) return this;
            if (m.length === 1) return y(m[0], S);
            var C = [];
            return (
              m.each(function (te, oe) {
                C.push(y(oe, S));
              }),
              (this.children = C),
              this
            );
          };
        }),
        X = v(function (l) {
          function y() {
            var C = this.get();
            this.update("auto");
            var te = this.get();
            return this.update(C), te;
          }
          function I(C, te, oe) {
            return te !== void 0 && (oe = te), C in _ ? C : oe;
          }
          function S(C) {
            var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(C);
            return (te ? i(te[1], te[2], te[3]) : C).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var m = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (C, te, oe, Ee) {
            (this.$el = C), (this.el = C[0]);
            var z = te[0];
            oe[2] && (z = oe[2]),
              ee[z] && (z = ee[z]),
              (this.name = z),
              (this.type = oe[1]),
              (this.duration = c(te[1], this.duration, m.duration)),
              (this.ease = I(te[2], this.ease, m.ease)),
              (this.delay = c(te[3], this.delay, m.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = ie.test(this.name)),
              (this.unit = Ee.unit || this.unit || fe.defaultUnit),
              (this.angle = Ee.angle || this.angle || fe.defaultAngle),
              fe.fallback || Ee.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    W +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? W + _[this.ease][0] : "") +
                    (this.delay ? W + this.delay + "ms" : "")));
          }),
            (l.set = function (C) {
              (C = this.convert(C, this.type)), this.update(C), this.redraw();
            }),
            (l.transition = function (C) {
              (this.active = !0),
                (C = this.convert(C, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  C == "auto" && (C = y.call(this))),
                (this.nextStyle = C);
            }),
            (l.fallback = function (C) {
              var te =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (C = this.convert(C, this.type)),
                this.auto &&
                  (te == "auto" && (te = this.convert(this.get(), this.type)),
                  C == "auto" && (C = y.call(this))),
                (this.tween = new N({
                  from: te,
                  to: C,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return k(this.el, this.name);
            }),
            (l.update = function (C) {
              h(this.el, this.name, C);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                h(this.el, this.name, this.get()));
              var C = this.tween;
              C && C.context && C.destroy();
            }),
            (l.convert = function (C, te) {
              if (C == "auto" && this.auto) return C;
              var oe,
                Ee = typeof C == "number",
                z = typeof C == "string";
              switch (te) {
                case T:
                  if (Ee) return C;
                  if (z && C.replace(A, "") === "") return +C;
                  oe = "number(unitless)";
                  break;
                case q:
                  if (z) {
                    if (C === "" && this.original) return this.original;
                    if (te.test(C))
                      return C.charAt(0) == "#" && C.length == 7 ? C : S(C);
                  }
                  oe = "hex or rgb string";
                  break;
                case L:
                  if (Ee) return C + this.unit;
                  if (z && te.test(C)) return C;
                  oe = "number(px) or string(unit)";
                  break;
                case D:
                  if (Ee) return C + this.unit;
                  if (z && te.test(C)) return C;
                  oe = "number(px) or string(unit or %)";
                  break;
                case V:
                  if (Ee) return C + this.angle;
                  if (z && te.test(C)) return C;
                  oe = "number(deg) or string(angle)";
                  break;
                case $:
                  if (Ee || (z && D.test(C))) return C;
                  oe = "number(unitless) or string(unit or %)";
              }
              return a(oe, C), C;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        d = v(X, function (l, y) {
          l.init = function () {
            y.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), q));
          };
        }),
        H = v(X, function (l, y) {
          (l.init = function () {
            y.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (I) {
              this.$el[this.name](I);
            });
        }),
        K = v(X, function (l, y) {
          function I(S, m) {
            var C, te, oe, Ee, z;
            for (C in S)
              (Ee = _e[C]),
                (oe = Ee[0]),
                (te = Ee[1] || C),
                (z = this.convert(S[C], oe)),
                m.call(this, te, z, oe);
          }
          (l.init = function () {
            y.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                _e.perspective &&
                  fe.perspective &&
                  ((this.current.perspective = fe.perspective),
                  h(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (S) {
              I.call(this, S, function (m, C) {
                this.current[m] = C;
              }),
                h(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (S) {
              var m = this.values(S);
              this.tween = new Oe({
                current: this.current,
                values: m,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var C,
                te = {};
              for (C in this.current) te[C] = C in m ? m[C] : this.current[C];
              (this.active = !0), (this.nextStyle = this.style(te));
            }),
            (l.fallback = function (S) {
              var m = this.values(S);
              this.tween = new Oe({
                current: this.current,
                values: m,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              h(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (S) {
              var m,
                C = "";
              for (m in S) C += m + "(" + S[m] + ") ";
              return C;
            }),
            (l.values = function (S) {
              var m,
                C = {};
              return (
                I.call(this, S, function (te, oe, Ee) {
                  (C[te] = oe),
                    this.current[te] === void 0 &&
                      ((m = 0),
                      ~te.indexOf("scale") && (m = 1),
                      (this.current[te] = this.convert(m, Ee)));
                }),
                C
              );
            });
        }),
        N = v(function (l) {
          function y(z) {
            oe.push(z) === 1 && G(I);
          }
          function I() {
            var z,
              le,
              de,
              Ae = oe.length;
            if (Ae)
              for (G(I), le = j(), z = Ae; z--; )
                (de = oe[z]), de && de.render(le);
          }
          function S(z) {
            var le,
              de = e.inArray(z, oe);
            de >= 0 &&
              ((le = oe.slice(de + 1)),
              (oe.length = de),
              le.length && (oe = oe.concat(le)));
          }
          function m(z) {
            return Math.round(z * Ee) / Ee;
          }
          function C(z, le, de) {
            return i(
              z[0] + de * (le[0] - z[0]),
              z[1] + de * (le[1] - z[1]),
              z[2] + de * (le[2] - z[2])
            );
          }
          var te = { ease: _.ease[1], from: 0, to: 1 };
          (l.init = function (z) {
            (this.duration = z.duration || 0), (this.delay = z.delay || 0);
            var le = z.ease || te.ease;
            _[le] && (le = _[le][1]),
              typeof le != "function" && (le = te.ease),
              (this.ease = le),
              (this.update = z.update || o),
              (this.complete = z.complete || o),
              (this.context = z.context || this),
              (this.name = z.name);
            var de = z.from,
              Ae = z.to;
            de === void 0 && (de = te.from),
              Ae === void 0 && (Ae = te.to),
              (this.unit = z.unit || ""),
              typeof de == "number" && typeof Ae == "number"
                ? ((this.begin = de), (this.change = Ae - de))
                : this.format(Ae, de),
              (this.value = this.begin + this.unit),
              (this.start = j()),
              z.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = j()), (this.active = !0), y(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), S(this));
            }),
            (l.render = function (z) {
              var le,
                de = z - this.start;
              if (this.delay) {
                if (de <= this.delay) return;
                de -= this.delay;
              }
              if (de < this.duration) {
                var Ae = this.ease(de, 0, 1, this.duration);
                return (
                  (le = this.startRGB
                    ? C(this.startRGB, this.endRGB, Ae)
                    : m(this.begin + Ae * this.change)),
                  (this.value = le + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (le = this.endHex || this.begin + this.change),
                (this.value = le + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (z, le) {
              if (((le += ""), (z += ""), z.charAt(0) == "#"))
                return (
                  (this.startRGB = n(le)),
                  (this.endRGB = n(z)),
                  (this.endHex = z),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var de = le.replace(A, ""),
                  Ae = z.replace(A, "");
                de !== Ae && s("tween", le, z), (this.unit = de);
              }
              (le = parseFloat(le)),
                (z = parseFloat(z)),
                (this.begin = this.value = le),
                (this.change = z - le);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var oe = [],
            Ee = 1e3;
        }),
        se = v(N, function (l) {
          (l.init = function (y) {
            (this.duration = y.duration || 0),
              (this.complete = y.complete || o),
              (this.context = y.context),
              this.play();
          }),
            (l.render = function (y) {
              var I = y - this.start;
              I < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        Oe = v(N, function (l, y) {
          (l.init = function (I) {
            (this.context = I.context),
              (this.update = I.update),
              (this.tweens = []),
              (this.current = I.current);
            var S, m;
            for (S in I.values)
              (m = I.values[S]),
                this.current[S] !== m &&
                  this.tweens.push(
                    new N({
                      name: S,
                      from: this.current[S],
                      to: m,
                      duration: I.duration,
                      delay: I.delay,
                      ease: I.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (I) {
              var S,
                m,
                C = this.tweens.length,
                te = !1;
              for (S = C; S--; )
                (m = this.tweens[S]),
                  m.context &&
                    (m.render(I), (this.current[m.name] = m.value), (te = !0));
              return te
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((y.destroy.call(this), this.tweens)) {
                var I,
                  S = this.tweens.length;
                for (I = S; I--; ) this.tweens[I].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        fe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !U.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!U.transition) return (fe.fallback = !0);
        fe.agentTests.push("(" + l + ")");
        var y = new RegExp(fe.agentTests.join("|"), "i");
        fe.fallback = y.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new N(l);
        }),
        (t.delay = function (l, y, I) {
          return new se({ complete: y, duration: l, context: I });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var h = e.style,
        k = e.css,
        ee = { transform: U.transform && U.transform.css },
        Y = {
          color: [d, q],
          background: [d, q, "background-color"],
          "outline-color": [d, q],
          "border-color": [d, q],
          "border-top-color": [d, q],
          "border-right-color": [d, q],
          "border-bottom-color": [d, q],
          "border-left-color": [d, q],
          "border-width": [X, L],
          "border-top-width": [X, L],
          "border-right-width": [X, L],
          "border-bottom-width": [X, L],
          "border-left-width": [X, L],
          "border-spacing": [X, L],
          "letter-spacing": [X, L],
          margin: [X, L],
          "margin-top": [X, L],
          "margin-right": [X, L],
          "margin-bottom": [X, L],
          "margin-left": [X, L],
          padding: [X, L],
          "padding-top": [X, L],
          "padding-right": [X, L],
          "padding-bottom": [X, L],
          "padding-left": [X, L],
          "outline-width": [X, L],
          opacity: [X, T],
          top: [X, D],
          right: [X, D],
          bottom: [X, D],
          left: [X, D],
          "font-size": [X, D],
          "text-indent": [X, D],
          "word-spacing": [X, D],
          width: [X, D],
          "min-width": [X, D],
          "max-width": [X, D],
          height: [X, D],
          "min-height": [X, D],
          "max-height": [X, D],
          "line-height": [X, $],
          "scroll-top": [H, T, "scrollTop"],
          "scroll-left": [H, T, "scrollLeft"],
        },
        _e = {};
      U.transform &&
        ((Y.transform = [K]),
        (_e = {
          x: [D, "translateX"],
          y: [D, "translateY"],
          rotate: [V],
          rotateX: [V],
          rotateY: [V],
          scale: [T],
          scaleX: [T],
          scaleY: [T],
          skew: [V],
          skewX: [V],
          skewY: [V],
        })),
        U.transform &&
          U.backface &&
          ((_e.z = [D, "translateZ"]),
          (_e.rotateZ = [V]),
          (_e.scaleZ = [T]),
          (_e.perspective = [L]));
      var Lt = /ms/,
        ht = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ts = u((pV, Is) => {
    var Em = window.$,
      gm = Gi() && Em.tram;
    Is.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-spacelDevelopment";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        c = n.toString,
        f = n.hasOwnProperty,
        g = r.forEach,
        v = r.map,
        _ = r.reduce,
        E = r.reduceRight,
        O = r.filter,
        b = r.every,
        M = r.some,
        A = r.indexOf,
        w = r.lastIndexOf,
        T = Array.isArray,
        q = Object.keys,
        L = i.bind,
        D =
          (e.each =
          e.forEach =
            function (p, F, x) {
              if (p == null) return p;
              if (g && p.forEach === g) p.forEach(F, x);
              else if (p.length === +p.length) {
                for (var U = 0, J = p.length; U < J; U++)
                  if (F.call(x, p[U], U, p) === t) return;
              } else
                for (var re = e.keys(p), U = 0, J = re.length; U < J; U++)
                  if (F.call(x, p[re[U]], re[U], p) === t) return;
              return p;
            });
      (e.map = e.collect =
        function (p, F, x) {
          var U = [];
          return p == null
            ? U
            : v && p.map === v
            ? p.map(F, x)
            : (D(p, function (J, re, G) {
                U.push(F.call(x, J, re, G));
              }),
              U);
        }),
        (e.find = e.detect =
          function (p, F, x) {
            var U;
            return (
              V(p, function (J, re, G) {
                if (F.call(x, J, re, G)) return (U = J), !0;
              }),
              U
            );
          }),
        (e.filter = e.select =
          function (p, F, x) {
            var U = [];
            return p == null
              ? U
              : O && p.filter === O
              ? p.filter(F, x)
              : (D(p, function (J, re, G) {
                  F.call(x, J, re, G) && U.push(J);
                }),
                U);
          });
      var V =
        (e.some =
        e.any =
          function (p, F, x) {
            F || (F = e.identity);
            var U = !1;
            return p == null
              ? U
              : M && p.some === M
              ? p.some(F, x)
              : (D(p, function (J, re, G) {
                  if (U || (U = F.call(x, J, re, G))) return t;
                }),
                !!U);
          });
      (e.contains = e.include =
        function (p, F) {
          return p == null
            ? !1
            : A && p.indexOf === A
            ? p.indexOf(F) != -1
            : V(p, function (x) {
                return x === F;
              });
        }),
        (e.delay = function (p, F) {
          var x = a.call(arguments, 2);
          return setTimeout(function () {
            return p.apply(null, x);
          }, F);
        }),
        (e.defer = function (p) {
          return e.delay.apply(e, [p, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (p) {
          var F, x, U;
          return function () {
            F ||
              ((F = !0),
              (x = arguments),
              (U = this),
              gm.frame(function () {
                (F = !1), p.apply(U, x);
              }));
          };
        }),
        (e.debounce = function (p, F, x) {
          var U,
            J,
            re,
            G,
            j,
            Q = function () {
              var B = e.now() - G;
              B < F
                ? (U = setTimeout(Q, F - B))
                : ((U = null), x || ((j = p.apply(re, J)), (re = J = null)));
            };
          return function () {
            (re = this), (J = arguments), (G = e.now());
            var B = x && !U;
            return (
              U || (U = setTimeout(Q, F)),
              B && ((j = p.apply(re, J)), (re = J = null)),
              j
            );
          };
        }),
        (e.defaults = function (p) {
          if (!e.isObject(p)) return p;
          for (var F = 1, x = arguments.length; F < x; F++) {
            var U = arguments[F];
            for (var J in U) p[J] === void 0 && (p[J] = U[J]);
          }
          return p;
        }),
        (e.keys = function (p) {
          if (!e.isObject(p)) return [];
          if (q) return q(p);
          var F = [];
          for (var x in p) e.has(p, x) && F.push(x);
          return F;
        }),
        (e.has = function (p, F) {
          return f.call(p, F);
        }),
        (e.isObject = function (p) {
          return p === Object(p);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var $ = /(.)^/,
        Z = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        ie = /\\|'|\r|\n|\u2028|\u2029/g,
        W = function (p) {
          return "\\" + Z[p];
        },
        R = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (p, F, x) {
          !F && x && (F = x), (F = e.defaults({}, F, e.templateSettings));
          var U = RegExp(
              [
                (F.escape || $).source,
                (F.interpolate || $).source,
                (F.evaluate || $).source,
              ].join("|") + "|$",
              "g"
            ),
            J = 0,
            re = "__p+='";
          p.replace(U, function (B, X, d, H, K) {
            return (
              (re += p.slice(J, K).replace(ie, W)),
              (J = K + B.length),
              X
                ? (re +=
                    `'+
((__t=(` +
                    X +
                    `))==null?'':_.escape(__t))+
'`)
                : d
                ? (re +=
                    `'+
((__t=(` +
                    d +
                    `))==null?'':__t)+
'`)
                : H &&
                  (re +=
                    `';
` +
                    H +
                    `
__p+='`),
              B
            );
          }),
            (re += `';
`);
          var G = F.variable;
          if (G) {
            if (!R.test(G))
              throw new Error("variable is not a bare identifier: " + G);
          } else
            (re =
              `with(obj||{}){
` +
              re +
              `}
`),
              (G = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            re +
            `return __p;
`;
          var j;
          try {
            j = new Function(F.variable || "obj", "_", re);
          } catch (B) {
            throw ((B.source = re), B);
          }
          var Q = function (B) {
            return j.call(this, B, e);
          };
          return (
            (Q.source =
              "function(" +
              G +
              `){
` +
              re +
              "}"),
            Q
          );
        }),
        e
      );
    })();
  });
  var We = u((vV, Ns) => {
    var he = {},
      zt = {},
      Yt = [],
      Xi = window.spacelDevelopment || [],
      It = window.jQuery,
      Qe = It(window),
      _m = It(document),
      ot = It.isFunction,
      Ye = (he._ = Ts()),
      bs = (he.tram = Gi() && It.tram),
      dn = !1,
      Wi = !1;
    bs.config.hideBackface = !1;
    bs.config.keepInherited = !0;
    he.define = function (e, t, r) {
      zt[e] && Ss(zt[e]);
      var n = (zt[e] = t(It, Ye, r) || {});
      return As(n), n;
    };
    he.require = function (e) {
      return zt[e];
    };
    function As(e) {
      he.env() &&
        (ot(e.design) && Qe.on("spacel_design", e.design),
        ot(e.preview) && Qe.on("spacel_preview", e.preview)),
        ot(e.destroy) && Qe.on("spacel_destroy", e.destroy),
        e.ready && ot(e.ready) && ym(e);
    }
    function ym(e) {
      if (dn) {
        e.ready();
        return;
      }
      Ye.contains(Yt, e.ready) || Yt.push(e.ready);
    }
    function Ss(e) {
      ot(e.design) && Qe.off("spacel_design", e.design),
        ot(e.preview) && Qe.off("spacel_preview", e.preview),
        ot(e.destroy) && Qe.off("spacel_destroy", e.destroy),
        e.ready && ot(e.ready) && mm(e);
    }
    function mm(e) {
      Yt = Ye.filter(Yt, function (t) {
        return t !== e.ready;
      });
    }
    he.push = function (e) {
      if (dn) {
        ot(e) && e();
        return;
      }
      Xi.push(e);
    };
    he.env = function (e) {
      var t = window.spacel_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.spacel_slug;
      if (e === "editor") return window.EditarPagina;
      if (e === "test") return window.spacel_test;
      if (e === "frame") return window !== window.top;
    };
    var fn = navigator.userAgent.toLowerCase(),
      ws = (he.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      Im = (he.env.chrome =
        /chrome/.test(fn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(fn.match(/chrome\/(\d+)\./)[1], 10)),
      Tm = (he.env.ios = /(ipod|iphone|ipad)/.test(fn));
    he.env.safari = /safari/.test(fn) && !Im && !Tm;
    var Ui;
    ws &&
      _m.on("touchstart mousedown", function (e) {
        Ui = e.target;
      });
    he.validClick = ws
      ? function (e) {
          return e === Ui || It.contains(e, Ui);
        }
      : function () {
          return !0;
        };
    var Rs = "resize.spacelDevelopment orientationchange.spacelDevelopment load.spacelDevelopment",
      Om = "scroll.spacelDevelopment " + Rs;
    he.resize = Vi(Qe, Rs);
    he.scroll = Vi(Qe, Om);
    he.redraw = Vi();
    function Vi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Ye.throttle(function (i) {
          Ye.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Ye.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Ye.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    he.location = function (e) {
      window.location = e;
    };
    he.env() && (he.location = function () {});
    he.ready = function () {
      (dn = !0), Wi ? bm() : Ye.each(Yt, Os), Ye.each(Xi, Os), he.resize.up();
    };
    function Os(e) {
      ot(e) && e();
    }
    function bm() {
      (Wi = !1), Ye.each(zt, As);
    }
    var Pt;
    he.load = function (e) {
      Pt.then(e);
    };
    function Cs() {
      Pt && (Pt.reject(), Qe.off("load", Pt.resolve)),
        (Pt = new It.Deferred()),
        Qe.on("load", Pt.resolve);
    }
    he.destroy = function (e) {
      (e = e || {}),
        (Wi = !0),
        Qe.triggerHandler("spacel_destroy"),
        e.domready != null && (dn = e.domready),
        Ye.each(zt, Ss),
        he.resize.off(),
        he.scroll.off(),
        he.redraw.off(),
        (Yt = []),
        (Xi = []),
        Pt.state() === "pending" && Cs();
    };
    It(he.ready);
    Cs();
    Ns.exports = window.spacelDevelopment = he;
  });
  var Ls = u((hV, qs) => {
    var xs = We();
    xs.define(
      "brand",
      (qs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-spacelDevelopment-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var E = n.attr("data-sl-status"),
            O = n.attr("data-sl-domain") || "";
          /\.spacelDevelopment\.io$/i.test(O) && a.hostname !== O && (E = !0),
            E &&
              !s &&
              ((f = f || v()),
              _(),
              setTimeout(_, 500),
              e(r).off(c, g).on(c, g));
        };
        function g() {
          var E =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", E ? "display: none !important;" : "");
        }
        function v() {
         
            O = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/spacelDevelopment-badge-icon.f67cd735e3.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "8px", width: "16px" }),
            b = e("<img>")
              .attr(
                "src",
                "https://d1otoma47x30pg.cloudfront.net/img/spacelDevelopment-badge-text.6faa6a38cd.svg"
              )
              .attr("alt", "Made in spacelDevelopment");
          return E.append(O, b), E[0];
        }
        function _() {
          var E = i.children(o),
            O = E.length && E.get(0) === f,
            b = xs.env("editor");
          if (O) {
            b && E.remove();
            return;
          }
          E.length && E.remove(), b || i.append(f);
        }
        return t;
      })
    );
  });
  var Ds = u((EV, Ps) => {
    var Bi = We();
    Bi.define(
      "edit",
      (Ps.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Bi.env("test") || Bi.env("frame")) && !r.fixture && !Am())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          c,
          f = r.load || _,
          g = !1;
        try {
          g =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("EditarPagina");
        } catch {}
        g
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : i.on(s, v).triggerHandler(s);
        function v() {
          c || (/\?edit/.test(a.hash) && f());
        }
        function _() {
          (c = !0),
            (window.EditarPagina = !0),
            i.off(s, v),
            w(function (q) {
              e.ajax({
            
                data: { siteId: o.attr("dr-website") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: E(q),
              });
            });
        }
        function E(q) {
          return function (L) {
            if (!L) {
              console.error("Could not load editor data");
              return;
            }
            (L.thirdPartyCookiesSupported = q),
              O(M(L.bugReporterScriptPath), function () {
                O(M(L.scriptPath), function () {
                  window.EditarPagina(L);
                });
              });
          };
        }
        function O(q, L) {
          e.ajax({ type: "GET", url: q, dataType: "script", cache: !0 }).then(
            L,
            b
          );
        }
        function b(q, L, D) {
          throw (console.error("Could not load editor script: " + L), D);
        }
        function M(q) {
          return q.indexOf("//") >= 0
            ? q
            : A("https://editor-api.spacelDevelopment.com" + q);
        }
        function A(q) {
          return q.replace(/([^:])\/\//g, "$1/");
        }
        function w(q) {
          var L = window.document.createElement("iframe");
          (L.src = "https://spacelDevelopment.com/site/third-party-cookie-check.html"),
            (L.style.display = "none"),
            (L.sandbox = "allow-scripts allow-same-origin");
          var D = function (V) {
            V.data === "sl_third_party_cookies_unsupported"
              ? (T(L, D), q(!1))
              : V.data === "sl_third_party_cookies_supported" &&
                (T(L, D), q(!0));
          };
          (L.onerror = function () {
            T(L, D), q(!1);
          }),
            window.addEventListener("message", D, !1),
            window.document.body.appendChild(L);
        }
        function T(q, L) {
          window.removeEventListener("message", L, !1), q.remove();
        }
        return n;
      })
    );
    function Am() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Fs = u((gV, Ms) => {
    var Sm = We();
    Sm.define(
      "focus-visible",
      (Ms.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(T) {
            return !!(
              T &&
              T !== document &&
              T.nodeName !== "HTML" &&
              T.nodeName !== "BODY" &&
              "classList" in T &&
              "contains" in T.classList
            );
          }
          function c(T) {
            var q = T.type,
              L = T.tagName;
            return !!(
              (L === "INPUT" && a[q] && !T.readOnly) ||
              (L === "TEXTAREA" && !T.readOnly) ||
              T.isContentEditable
            );
          }
          function f(T) {
            T.getAttribute("data-sl-focus-visible") ||
              T.setAttribute("data-sl-focus-visible", "true");
          }
          function g(T) {
            T.getAttribute("data-sl-focus-visible") &&
              T.removeAttribute("data-sl-focus-visible");
          }
          function v(T) {
            T.metaKey ||
              T.altKey ||
              T.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function _() {
            n = !1;
          }
          function E(T) {
            s(T.target) && (n || c(T.target)) && f(T.target);
          }
          function O(T) {
            s(T.target) &&
              T.target.hasAttribute("data-sl-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              g(T.target));
          }
          function b() {
            document.visibilityState === "hidden" && (i && (n = !0), M());
          }
          function M() {
            document.addEventListener("mousemove", w),
              document.addEventListener("mousedown", w),
              document.addEventListener("mouseup", w),
              document.addEventListener("pointermove", w),
              document.addEventListener("pointerdown", w),
              document.addEventListener("pointerup", w),
              document.addEventListener("touchmove", w),
              document.addEventListener("touchstart", w),
              document.addEventListener("touchend", w);
          }
          function A() {
            document.removeEventListener("mousemove", w),
              document.removeEventListener("mousedown", w),
              document.removeEventListener("mouseup", w),
              document.removeEventListener("pointermove", w),
              document.removeEventListener("pointerdown", w),
              document.removeEventListener("pointerup", w),
              document.removeEventListener("touchmove", w),
              document.removeEventListener("touchstart", w),
              document.removeEventListener("touchend", w);
          }
          function w(T) {
            (T.target.nodeName && T.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), A());
          }
          document.addEventListener("keydown", v, !0),
            document.addEventListener("mousedown", _, !0),
            document.addEventListener("pointerdown", _, !0),
            document.addEventListener("touchstart", _, !0),
            document.addEventListener("visibilitychange", b, !0),
            M(),
            r.addEventListener("focus", E, !0),
            r.addEventListener("blur", O, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Xs = u((_V, Us) => {
    var Gs = We();
    Gs.define(
      "focus",
      (Us.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-sl-focus-within") &&
            Gs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Bs = u((yV, Vs) => {
    "use strict";
    var Hi = window.jQuery,
      at = {},
      pn = [],
      Ws = ".w-ix",
      vn = {
        reset: function (e, t) {
          t.spacel_intro = null;
        },
        intro: function (e, t) {
          t.spacel_intro ||
            ((t.spacel_intro = !0), Hi(t).triggerHandler(at.types.INTRO));
        },
        outro: function (e, t) {
          t.spacel_intro &&
            ((t.spacel_intro = null), Hi(t).triggerHandler(at.types.OUTRO));
        },
      };
    at.triggers = {};
    at.types = { INTRO: "w-ix-intro" + Ws, OUTRO: "w-ix-outro" + Ws };
    at.init = function () {
      for (var e = pn.length, t = 0; t < e; t++) {
        var r = pn[t];
        r[0](0, r[1]);
      }
      (pn = []), Hi.extend(at.triggers, vn);
    };
    at.async = function () {
      for (var e in vn) {
        var t = vn[e];
        vn.hasOwnProperty(e) &&
          (at.triggers[e] = function (r, n) {
            pn.push([t, n]);
          });
      }
    };
    at.async();
    Vs.exports = at;
  });
  var Sr = u((mV, js) => {
    "use strict";
    var ki = Bs();
    function Hs(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var wm = window.jQuery,
      hn = {},
      ks = ".w-ix",
      Rm = {
        reset: function (e, t) {
          ki.triggers.reset(e, t);
        },
        intro: function (e, t) {
          ki.triggers.intro(e, t), Hs(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          ki.triggers.outro(e, t), Hs(t, "COMPONENT_INACTIVE");
        },
      };
    hn.triggers = {};
    hn.types = { INTRO: "w-ix-intro" + ks, OUTRO: "w-ix-outro" + ks };
    wm.extend(hn.triggers, Rm);
    js.exports = hn;
  });
  var Ks = u((IV, Et) => {
    function ji(e) {
      return (
        (Et.exports = ji =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (Et.exports.__esModule = !0),
        (Et.exports.default = Et.exports),
        ji(e)
      );
    }
    (Et.exports = ji),
      (Et.exports.__esModule = !0),
      (Et.exports.default = Et.exports);
  });
  var Qt = u((TV, wr) => {
    var Cm = Ks().default;
    function zs(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (zs = function (i) {
        return i ? r : t;
      })(e);
    }
    function Nm(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (Cm(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = zs(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (wr.exports = Nm),
      (wr.exports.__esModule = !0),
      (wr.exports.default = wr.exports);
  });
  var st = u((OV, Rr) => {
    function xm(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Rr.exports = xm),
      (Rr.exports.__esModule = !0),
      (Rr.exports.default = Rr.exports);
  });
  var me = u((bV, Ys) => {
    var En = function (e) {
      return e && e.Math == Math && e;
    };
    Ys.exports =
      En(typeof globalThis == "object" && globalThis) ||
      En(typeof window == "object" && window) ||
      En(typeof self == "object" && self) ||
      En(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var $t = u((AV, Qs) => {
    Qs.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Dt = u((SV, $s) => {
    var qm = $t();
    $s.exports = !qm(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var gn = u((wV, Zs) => {
    var Cr = Function.prototype.call;
    Zs.exports = Cr.bind
      ? Cr.bind(Cr)
      : function () {
          return Cr.apply(Cr, arguments);
        };
  });
  var ru = u((tu) => {
    "use strict";
    var Js = {}.propertyIsEnumerable,
      eu = Object.getOwnPropertyDescriptor,
      Lm = eu && !Js.call({ 1: 2 }, 1);
    tu.f = Lm
      ? function (t) {
          var r = eu(this, t);
          return !!r && r.enumerable;
        }
      : Js;
  });
  var Ki = u((CV, nu) => {
    nu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var $e = u((NV, ou) => {
    var iu = Function.prototype,
      zi = iu.bind,
      Yi = iu.call,
      Pm = zi && zi.bind(Yi);
    ou.exports = zi
      ? function (e) {
          return e && Pm(Yi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Yi.apply(e, arguments);
            }
          );
        };
  });
  var uu = u((xV, su) => {
    var au = $e(),
      Dm = au({}.toString),
      Mm = au("".slice);
    su.exports = function (e) {
      return Mm(Dm(e), 8, -1);
    };
  });
  var lu = u((qV, cu) => {
    var Fm = me(),
      Gm = $e(),
      Um = $t(),
      Xm = uu(),
      Qi = Fm.Object,
      Wm = Gm("".split);
    cu.exports = Um(function () {
      return !Qi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return Xm(e) == "String" ? Wm(e, "") : Qi(e);
        }
      : Qi;
  });
  var $i = u((LV, fu) => {
    var Vm = me(),
      Bm = Vm.TypeError;
    fu.exports = function (e) {
      if (e == null) throw Bm("Can't call method on " + e);
      return e;
    };
  });
  var Nr = u((PV, du) => {
    var Hm = lu(),
      km = $i();
    du.exports = function (e) {
      return Hm(km(e));
    };
  });
  var ut = u((DV, pu) => {
    pu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Zt = u((MV, vu) => {
    var jm = ut();
    vu.exports = function (e) {
      return typeof e == "object" ? e !== null : jm(e);
    };
  });
  var xr = u((FV, hu) => {
    var Zi = me(),
      Km = ut(),
      zm = function (e) {
        return Km(e) ? e : void 0;
      };
    hu.exports = function (e, t) {
      return arguments.length < 2 ? zm(Zi[e]) : Zi[e] && Zi[e][t];
    };
  });
  var gu = u((GV, Eu) => {
    var Ym = $e();
    Eu.exports = Ym({}.isPrototypeOf);
  });
  var yu = u((UV, _u) => {
    var Qm = xr();
    _u.exports = Qm("navigator", "userAgent") || "";
  });
  var Su = u((XV, Au) => {
    var bu = me(),
      Ji = yu(),
      mu = bu.process,
      Iu = bu.Deno,
      Tu = (mu && mu.versions) || (Iu && Iu.version),
      Ou = Tu && Tu.v8,
      Ze,
      _n;
    Ou &&
      ((Ze = Ou.split(".")),
      (_n = Ze[0] > 0 && Ze[0] < 4 ? 1 : +(Ze[0] + Ze[1])));
    !_n &&
      Ji &&
      ((Ze = Ji.match(/Edge\/(\d+)/)),
      (!Ze || Ze[1] >= 74) &&
        ((Ze = Ji.match(/Chrome\/(\d+)/)), Ze && (_n = +Ze[1])));
    Au.exports = _n;
  });
  var eo = u((WV, Ru) => {
    var wu = Su(),
      $m = $t();
    Ru.exports =
      !!Object.getOwnPropertySymbols &&
      !$m(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && wu && wu < 41)
        );
      });
  });
  var to = u((VV, Cu) => {
    var Zm = eo();
    Cu.exports = Zm && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var ro = u((BV, Nu) => {
    var Jm = me(),
      eI = xr(),
      tI = ut(),
      rI = gu(),
      nI = to(),
      iI = Jm.Object;
    Nu.exports = nI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = eI("Symbol");
          return tI(t) && rI(t.prototype, iI(e));
        };
  });
  var qu = u((HV, xu) => {
    var oI = me(),
      aI = oI.String;
    xu.exports = function (e) {
      try {
        return aI(e);
      } catch {
        return "Object";
      }
    };
  });
  var Pu = u((kV, Lu) => {
    var sI = me(),
      uI = ut(),
      cI = qu(),
      lI = sI.TypeError;
    Lu.exports = function (e) {
      if (uI(e)) return e;
      throw lI(cI(e) + " is not a function");
    };
  });
  var Mu = u((jV, Du) => {
    var fI = Pu();
    Du.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : fI(r);
    };
  });
  var Gu = u((KV, Fu) => {
    var dI = me(),
      no = gn(),
      io = ut(),
      oo = Zt(),
      pI = dI.TypeError;
    Fu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && io((r = e.toString)) && !oo((n = no(r, e)))) ||
        (io((r = e.valueOf)) && !oo((n = no(r, e)))) ||
        (t !== "string" && io((r = e.toString)) && !oo((n = no(r, e))))
      )
        return n;
      throw pI("Can't convert object to primitive value");
    };
  });
  var Xu = u((zV, Uu) => {
    Uu.exports = !1;
  });
  var yn = u((YV, Vu) => {
    var Wu = me(),
      vI = Object.defineProperty;
    Vu.exports = function (e, t) {
      try {
        vI(Wu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Wu[e] = t;
      }
      return t;
    };
  });
  var mn = u((QV, Hu) => {
    var hI = me(),
      EI = yn(),
      Bu = "__core-js_shared__",
      gI = hI[Bu] || EI(Bu, {});
    Hu.exports = gI;
  });
  var ao = u(($V, ju) => {
    var _I = Xu(),
      ku = mn();
    (ju.exports = function (e, t) {
      return ku[e] || (ku[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: _I ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var zu = u((ZV, Ku) => {
    var yI = me(),
      mI = $i(),
      II = yI.Object;
    Ku.exports = function (e) {
      return II(mI(e));
    };
  });
  var Tt = u((JV, Yu) => {
    var TI = $e(),
      OI = zu(),
      bI = TI({}.hasOwnProperty);
    Yu.exports =
      Object.hasOwn ||
      function (t, r) {
        return bI(OI(t), r);
      };
  });
  var so = u((eB, Qu) => {
    var AI = $e(),
      SI = 0,
      wI = Math.random(),
      RI = AI((1).toString);
    Qu.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + RI(++SI + wI, 36);
    };
  });
  var uo = u((tB, tc) => {
    var CI = me(),
      NI = ao(),
      $u = Tt(),
      xI = so(),
      Zu = eo(),
      ec = to(),
      Jt = NI("wks"),
      Mt = CI.Symbol,
      Ju = Mt && Mt.for,
      qI = ec ? Mt : (Mt && Mt.withoutSetter) || xI;
    tc.exports = function (e) {
      if (!$u(Jt, e) || !(Zu || typeof Jt[e] == "string")) {
        var t = "Symbol." + e;
        Zu && $u(Mt, e)
          ? (Jt[e] = Mt[e])
          : ec && Ju
          ? (Jt[e] = Ju(t))
          : (Jt[e] = qI(t));
      }
      return Jt[e];
    };
  });
  var oc = u((rB, ic) => {
    var LI = me(),
      PI = gn(),
      rc = Zt(),
      nc = ro(),
      DI = Mu(),
      MI = Gu(),
      FI = uo(),
      GI = LI.TypeError,
      UI = FI("toPrimitive");
    ic.exports = function (e, t) {
      if (!rc(e) || nc(e)) return e;
      var r = DI(e, UI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = PI(r, e, t)), !rc(n) || nc(n))
        )
          return n;
        throw GI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), MI(e, t);
    };
  });
  var co = u((nB, ac) => {
    var XI = oc(),
      WI = ro();
    ac.exports = function (e) {
      var t = XI(e, "string");
      return WI(t) ? t : t + "";
    };
  });
  var fo = u((iB, uc) => {
    var VI = me(),
      sc = Zt(),
      lo = VI.document,
      BI = sc(lo) && sc(lo.createElement);
    uc.exports = function (e) {
      return BI ? lo.createElement(e) : {};
    };
  });
  var po = u((oB, cc) => {
    var HI = Dt(),
      kI = $t(),
      jI = fo();
    cc.exports =
      !HI &&
      !kI(function () {
        return (
          Object.defineProperty(jI("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var vo = u((fc) => {
    var KI = Dt(),
      zI = gn(),
      YI = ru(),
      QI = Ki(),
      $I = Nr(),
      ZI = co(),
      JI = Tt(),
      eT = po(),
      lc = Object.getOwnPropertyDescriptor;
    fc.f = KI
      ? lc
      : function (t, r) {
          if (((t = $I(t)), (r = ZI(r)), eT))
            try {
              return lc(t, r);
            } catch {}
          if (JI(t, r)) return QI(!zI(YI.f, t, r), t[r]);
        };
  });
  var qr = u((sB, pc) => {
    var dc = me(),
      tT = Zt(),
      rT = dc.String,
      nT = dc.TypeError;
    pc.exports = function (e) {
      if (tT(e)) return e;
      throw nT(rT(e) + " is not an object");
    };
  });
  var Lr = u((Ec) => {
    var iT = me(),
      oT = Dt(),
      aT = po(),
      vc = qr(),
      sT = co(),
      uT = iT.TypeError,
      hc = Object.defineProperty;
    Ec.f = oT
      ? hc
      : function (t, r, n) {
          if ((vc(t), (r = sT(r)), vc(n), aT))
            try {
              return hc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw uT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var In = u((cB, gc) => {
    var cT = Dt(),
      lT = Lr(),
      fT = Ki();
    gc.exports = cT
      ? function (e, t, r) {
          return lT.f(e, t, fT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var Eo = u((lB, _c) => {
    var dT = $e(),
      pT = ut(),
      ho = mn(),
      vT = dT(Function.toString);
    pT(ho.inspectSource) ||
      (ho.inspectSource = function (e) {
        return vT(e);
      });
    _c.exports = ho.inspectSource;
  });
  var Ic = u((fB, mc) => {
    var hT = me(),
      ET = ut(),
      gT = Eo(),
      yc = hT.WeakMap;
    mc.exports = ET(yc) && /native code/.test(gT(yc));
  });
  var go = u((dB, Oc) => {
    var _T = ao(),
      yT = so(),
      Tc = _T("keys");
    Oc.exports = function (e) {
      return Tc[e] || (Tc[e] = yT(e));
    };
  });
  var Tn = u((pB, bc) => {
    bc.exports = {};
  });
  var Nc = u((vB, Cc) => {
    var mT = Ic(),
      Rc = me(),
      _o = $e(),
      IT = Zt(),
      TT = In(),
      yo = Tt(),
      mo = mn(),
      OT = go(),
      bT = Tn(),
      Ac = "Object already initialized",
      To = Rc.TypeError,
      AT = Rc.WeakMap,
      On,
      Pr,
      bn,
      ST = function (e) {
        return bn(e) ? Pr(e) : On(e, {});
      },
      wT = function (e) {
        return function (t) {
          var r;
          if (!IT(t) || (r = Pr(t)).type !== e)
            throw To("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    mT || mo.state
      ? ((Ot = mo.state || (mo.state = new AT())),
        (Sc = _o(Ot.get)),
        (Io = _o(Ot.has)),
        (wc = _o(Ot.set)),
        (On = function (e, t) {
          if (Io(Ot, e)) throw new To(Ac);
          return (t.facade = e), wc(Ot, e, t), t;
        }),
        (Pr = function (e) {
          return Sc(Ot, e) || {};
        }),
        (bn = function (e) {
          return Io(Ot, e);
        }))
      : ((Ft = OT("state")),
        (bT[Ft] = !0),
        (On = function (e, t) {
          if (yo(e, Ft)) throw new To(Ac);
          return (t.facade = e), TT(e, Ft, t), t;
        }),
        (Pr = function (e) {
          return yo(e, Ft) ? e[Ft] : {};
        }),
        (bn = function (e) {
          return yo(e, Ft);
        }));
    var Ot, Sc, Io, wc, Ft;
    Cc.exports = { set: On, get: Pr, has: bn, enforce: ST, getterFor: wT };
  });
  var Lc = u((hB, qc) => {
    var Oo = Dt(),
      RT = Tt(),
      xc = Function.prototype,
      CT = Oo && Object.getOwnPropertyDescriptor,
      bo = RT(xc, "name"),
      NT = bo && function () {}.name === "something",
      xT = bo && (!Oo || (Oo && CT(xc, "name").configurable));
    qc.exports = { EXISTS: bo, PROPER: NT, CONFIGURABLE: xT };
  });
  var Gc = u((EB, Fc) => {
    var qT = me(),
      Pc = ut(),
      LT = Tt(),
      Dc = In(),
      PT = yn(),
      DT = Eo(),
      Mc = Nc(),
      MT = Lc().CONFIGURABLE,
      FT = Mc.get,
      GT = Mc.enforce,
      UT = String(String).split("String");
    (Fc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (Pc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!LT(r, "name") || (MT && r.name !== s)) && Dc(r, "name", s),
          (c = GT(r)),
          c.source || (c.source = UT.join(typeof s == "string" ? s : ""))),
        e === qT)
      ) {
        o ? (e[t] = r) : PT(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Dc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Pc(this) && FT(this).source) || DT(this);
    });
  });
  var Ao = u((gB, Uc) => {
    var XT = Math.ceil,
      WT = Math.floor;
    Uc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? WT : XT)(t);
    };
  });
  var Wc = u((_B, Xc) => {
    var VT = Ao(),
      BT = Math.max,
      HT = Math.min;
    Xc.exports = function (e, t) {
      var r = VT(e);
      return r < 0 ? BT(r + t, 0) : HT(r, t);
    };
  });
  var Bc = u((yB, Vc) => {
    var kT = Ao(),
      jT = Math.min;
    Vc.exports = function (e) {
      return e > 0 ? jT(kT(e), 9007199254740991) : 0;
    };
  });
  var kc = u((mB, Hc) => {
    var KT = Bc();
    Hc.exports = function (e) {
      return KT(e.length);
    };
  });
  var So = u((IB, Kc) => {
    var zT = Nr(),
      YT = Wc(),
      QT = kc(),
      jc = function (e) {
        return function (t, r, n) {
          var i = zT(t),
            o = QT(i),
            a = YT(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    Kc.exports = { includes: jc(!0), indexOf: jc(!1) };
  });
  var Ro = u((TB, Yc) => {
    var $T = $e(),
      wo = Tt(),
      ZT = Nr(),
      JT = So().indexOf,
      eO = Tn(),
      zc = $T([].push);
    Yc.exports = function (e, t) {
      var r = ZT(e),
        n = 0,
        i = [],
        o;
      for (o in r) !wo(eO, o) && wo(r, o) && zc(i, o);
      for (; t.length > n; ) wo(r, (o = t[n++])) && (~JT(i, o) || zc(i, o));
      return i;
    };
  });
  var An = u((OB, Qc) => {
    Qc.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var Zc = u(($c) => {
    var tO = Ro(),
      rO = An(),
      nO = rO.concat("length", "prototype");
    $c.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return tO(t, nO);
      };
  });
  var el = u((Jc) => {
    Jc.f = Object.getOwnPropertySymbols;
  });
  var rl = u((SB, tl) => {
    var iO = xr(),
      oO = $e(),
      aO = Zc(),
      sO = el(),
      uO = qr(),
      cO = oO([].concat);
    tl.exports =
      iO("Reflect", "ownKeys") ||
      function (t) {
        var r = aO.f(uO(t)),
          n = sO.f;
        return n ? cO(r, n(t)) : r;
      };
  });
  var il = u((wB, nl) => {
    var lO = Tt(),
      fO = rl(),
      dO = vo(),
      pO = Lr();
    nl.exports = function (e, t) {
      for (var r = fO(t), n = pO.f, i = dO.f, o = 0; o < r.length; o++) {
        var a = r[o];
        lO(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var al = u((RB, ol) => {
    var vO = $t(),
      hO = ut(),
      EO = /#|\.prototype\./,
      Dr = function (e, t) {
        var r = _O[gO(e)];
        return r == mO ? !0 : r == yO ? !1 : hO(t) ? vO(t) : !!t;
      },
      gO = (Dr.normalize = function (e) {
        return String(e).replace(EO, ".").toLowerCase();
      }),
      _O = (Dr.data = {}),
      yO = (Dr.NATIVE = "N"),
      mO = (Dr.POLYFILL = "P");
    ol.exports = Dr;
  });
  var ul = u((CB, sl) => {
    var Co = me(),
      IO = vo().f,
      TO = In(),
      OO = Gc(),
      bO = yn(),
      AO = il(),
      SO = al();
    sl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        c,
        f,
        g;
      if (
        (n
          ? (a = Co)
          : i
          ? (a = Co[r] || bO(r, {}))
          : (a = (Co[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((g = IO(a, s)), (c = g && g.value)) : (c = a[s]),
            (o = SO(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && c !== void 0)
          ) {
            if (typeof f == typeof c) continue;
            AO(f, c);
          }
          (e.sham || (c && c.sham)) && TO(f, "sham", !0), OO(a, s, f, e);
        }
    };
  });
  var ll = u((NB, cl) => {
    var wO = Ro(),
      RO = An();
    cl.exports =
      Object.keys ||
      function (t) {
        return wO(t, RO);
      };
  });
  var dl = u((xB, fl) => {
    var CO = Dt(),
      NO = Lr(),
      xO = qr(),
      qO = Nr(),
      LO = ll();
    fl.exports = CO
      ? Object.defineProperties
      : function (t, r) {
          xO(t);
          for (var n = qO(r), i = LO(r), o = i.length, a = 0, s; o > a; )
            NO.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var vl = u((qB, pl) => {
    var PO = xr();
    pl.exports = PO("document", "documentElement");
  });
  var Tl = u((LB, Il) => {
    var DO = qr(),
      MO = dl(),
      hl = An(),
      FO = Tn(),
      GO = vl(),
      UO = fo(),
      XO = go(),
      El = ">",
      gl = "<",
      xo = "prototype",
      qo = "script",
      yl = XO("IE_PROTO"),
      No = function () {},
      ml = function (e) {
        return gl + qo + El + e + gl + "/" + qo + El;
      },
      _l = function (e) {
        e.write(ml("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      WO = function () {
        var e = UO("iframe"),
          t = "java" + qo + ":",
          r;
        return (
          (e.style.display = "none"),
          GO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(ml("document.F=Object")),
          r.close(),
          r.F
        );
      },
      Sn,
      wn = function () {
        try {
          Sn = new ActiveXObject("htmlfile");
        } catch {}
        wn =
          typeof document < "u"
            ? document.domain && Sn
              ? _l(Sn)
              : WO()
            : _l(Sn);
        for (var e = hl.length; e--; ) delete wn[xo][hl[e]];
        return wn();
      };
    FO[yl] = !0;
    Il.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((No[xo] = DO(t)), (n = new No()), (No[xo] = null), (n[yl] = t))
            : (n = wn()),
          r === void 0 ? n : MO(n, r)
        );
      };
  });
  var bl = u((PB, Ol) => {
    var VO = uo(),
      BO = Tl(),
      HO = Lr(),
      Lo = VO("unscopables"),
      Po = Array.prototype;
    Po[Lo] == null && HO.f(Po, Lo, { configurable: !0, value: BO(null) });
    Ol.exports = function (e) {
      Po[Lo][e] = !0;
    };
  });
  var Al = u(() => {
    "use strict";
    var kO = ul(),
      jO = So().includes,
      KO = bl();
    kO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return jO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    KO("includes");
  });
  var wl = u((FB, Sl) => {
    var zO = me(),
      YO = $e();
    Sl.exports = function (e, t) {
      return YO(zO[e].prototype[t]);
    };
  });
  var Cl = u((GB, Rl) => {
    Al();
    var QO = wl();
    Rl.exports = QO("Array", "includes");
  });
  var xl = u((UB, Nl) => {
    var $O = Cl();
    Nl.exports = $O;
  });
  var Ll = u((XB, ql) => {
    var ZO = xl();
    ql.exports = ZO;
  });
  var Do = u((WB, Pl) => {
    var JO =
      typeof global == "object" && global && global.Object === Object && global;
    Pl.exports = JO;
  });
  var Je = u((VB, Dl) => {
    var eb = Do(),
      tb = typeof self == "object" && self && self.Object === Object && self,
      rb = eb || tb || Function("return this")();
    Dl.exports = rb;
  });
  var er = u((BB, Ml) => {
    var nb = Je(),
      ib = nb.Symbol;
    Ml.exports = ib;
  });
  var Xl = u((HB, Ul) => {
    var Fl = er(),
      Gl = Object.prototype,
      ob = Gl.hasOwnProperty,
      ab = Gl.toString,
      Mr = Fl ? Fl.toStringTag : void 0;
    function sb(e) {
      var t = ob.call(e, Mr),
        r = e[Mr];
      try {
        e[Mr] = void 0;
        var n = !0;
      } catch {}
      var i = ab.call(e);
      return n && (t ? (e[Mr] = r) : delete e[Mr]), i;
    }
    Ul.exports = sb;
  });
  var Vl = u((kB, Wl) => {
    var ub = Object.prototype,
      cb = ub.toString;
    function lb(e) {
      return cb.call(e);
    }
    Wl.exports = lb;
  });
  var bt = u((jB, kl) => {
    var Bl = er(),
      fb = Xl(),
      db = Vl(),
      pb = "[object Null]",
      vb = "[object Undefined]",
      Hl = Bl ? Bl.toStringTag : void 0;
    function hb(e) {
      return e == null
        ? e === void 0
          ? vb
          : pb
        : Hl && Hl in Object(e)
        ? fb(e)
        : db(e);
    }
    kl.exports = hb;
  });
  var Mo = u((KB, jl) => {
    function Eb(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    jl.exports = Eb;
  });
  var Fo = u((zB, Kl) => {
    var gb = Mo(),
      _b = gb(Object.getPrototypeOf, Object);
    Kl.exports = _b;
  });
  var gt = u((YB, zl) => {
    function yb(e) {
      return e != null && typeof e == "object";
    }
    zl.exports = yb;
  });
  var Go = u((QB, Ql) => {
    var mb = bt(),
      Ib = Fo(),
      Tb = gt(),
      Ob = "[object Object]",
      bb = Function.prototype,
      Ab = Object.prototype,
      Yl = bb.toString,
      Sb = Ab.hasOwnProperty,
      wb = Yl.call(Object);
    function Rb(e) {
      if (!Tb(e) || mb(e) != Ob) return !1;
      var t = Ib(e);
      if (t === null) return !0;
      var r = Sb.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && Yl.call(r) == wb;
    }
    Ql.exports = Rb;
  });
  var $l = u((Uo) => {
    "use strict";
    Object.defineProperty(Uo, "__esModule", { value: !0 });
    Uo.default = Cb;
    function Cb(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Zl = u((Wo, Xo) => {
    "use strict";
    Object.defineProperty(Wo, "__esModule", { value: !0 });
    var Nb = $l(),
      xb = qb(Nb);
    function qb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var tr;
    typeof self < "u"
      ? (tr = self)
      : typeof window < "u"
      ? (tr = window)
      : typeof global < "u"
      ? (tr = global)
      : typeof Xo < "u"
      ? (tr = Xo)
      : (tr = Function("return this")());
    var Lb = (0, xb.default)(tr);
    Wo.default = Lb;
  });
  var Vo = u((Fr) => {
    "use strict";
    Fr.__esModule = !0;
    Fr.ActionTypes = void 0;
    Fr.default = rf;
    var Pb = Go(),
      Db = tf(Pb),
      Mb = Zl(),
      Jl = tf(Mb);
    function tf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var ef = (Fr.ActionTypes = { INIT: "@@redux/INIT" });
    function rf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(rf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        c = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function g() {
        return o;
      }
      function v(b) {
        if (typeof b != "function")
          throw new Error("Expected listener to be a function.");
        var M = !0;
        return (
          f(),
          s.push(b),
          function () {
            if (M) {
              (M = !1), f();
              var w = s.indexOf(b);
              s.splice(w, 1);
            }
          }
        );
      }
      function _(b) {
        if (!(0, Db.default)(b))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof b.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (o = i(o, b));
        } finally {
          c = !1;
        }
        for (var M = (a = s), A = 0; A < M.length; A++) M[A]();
        return b;
      }
      function E(b) {
        if (typeof b != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = b), _({ type: ef.INIT });
      }
      function O() {
        var b,
          M = v;
        return (
          (b = {
            subscribe: function (w) {
              if (typeof w != "object")
                throw new TypeError("Expected the observer to be an object.");
              function T() {
                w.next && w.next(g());
              }
              T();
              var q = M(T);
              return { unsubscribe: q };
            },
          }),
          (b[Jl.default] = function () {
            return this;
          }),
          b
        );
      }
      return (
        _({ type: ef.INIT }),
        (n = { dispatch: _, subscribe: v, getState: g, replaceReducer: E }),
        (n[Jl.default] = O),
        n
      );
    }
  });
  var Ho = u((Bo) => {
    "use strict";
    Bo.__esModule = !0;
    Bo.default = Fb;
    function Fb(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var af = u((ko) => {
    "use strict";
    ko.__esModule = !0;
    ko.default = Vb;
    var nf = Vo(),
      Gb = Go(),
      eH = of(Gb),
      Ub = Ho(),
      tH = of(Ub);
    function of(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Xb(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function Wb(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: nf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                nf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function Vb(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        Wb(r);
      } catch (c) {
        s = c;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          g = arguments[1];
        if (s) throw s;
        if (!1) var v;
        for (var _ = !1, E = {}, O = 0; O < o.length; O++) {
          var b = o[O],
            M = r[b],
            A = f[b],
            w = M(A, g);
          if (typeof w > "u") {
            var T = Xb(b, g);
            throw new Error(T);
          }
          (E[b] = w), (_ = _ || w !== A);
        }
        return _ ? E : f;
      };
    }
  });
  var uf = u((jo) => {
    "use strict";
    jo.__esModule = !0;
    jo.default = Bb;
    function sf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function Bb(e, t) {
      if (typeof e == "function") return sf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = sf(a, t));
      }
      return n;
    }
  });
  var zo = u((Ko) => {
    "use strict";
    Ko.__esModule = !0;
    Ko.default = Hb;
    function Hb() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var cf = u((Yo) => {
    "use strict";
    Yo.__esModule = !0;
    var kb =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Yo.default = Yb;
    var jb = zo(),
      Kb = zb(jb);
    function zb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Yb() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            c = s.dispatch,
            f = [],
            g = {
              getState: s.getState,
              dispatch: function (_) {
                return c(_);
              },
            };
          return (
            (f = t.map(function (v) {
              return v(g);
            })),
            (c = Kb.default.apply(void 0, f)(s.dispatch)),
            kb({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var Qo = u((ke) => {
    "use strict";
    ke.__esModule = !0;
    ke.compose =
      ke.applyMiddleware =
      ke.bindActionCreators =
      ke.combineReducers =
      ke.createStore =
        void 0;
    var Qb = Vo(),
      $b = rr(Qb),
      Zb = af(),
      Jb = rr(Zb),
      eA = uf(),
      tA = rr(eA),
      rA = cf(),
      nA = rr(rA),
      iA = zo(),
      oA = rr(iA),
      aA = Ho(),
      aH = rr(aA);
    function rr(e) {
      return e && e.__esModule ? e : { default: e };
    }
    ke.createStore = $b.default;
    ke.combineReducers = Jb.default;
    ke.bindActionCreators = tA.default;
    ke.applyMiddleware = nA.default;
    ke.compose = oA.default;
  });
  var lf = u((Ne) => {
    "use strict";
    Object.defineProperty(Ne, "__esModule", { value: !0 });
    Ne.QuickEffectIds =
      Ne.QuickEffectDirectionConsts =
      Ne.EventTypeConsts =
      Ne.EventLimitAffectedElements =
      Ne.EventContinuousMouseAxes =
      Ne.EventBasedOn =
      Ne.EventAppliesTo =
        void 0;
    var sA = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    Ne.EventTypeConsts = sA;
    var uA = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    Ne.EventAppliesTo = uA;
    var cA = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    Ne.EventBasedOn = cA;
    var lA = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    Ne.EventContinuousMouseAxes = lA;
    var fA = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    Ne.EventLimitAffectedElements = fA;
    var dA = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    Ne.QuickEffectIds = dA;
    var pA = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
    Ne.QuickEffectDirectionConsts = pA;
  });
  var $o = u((nr) => {
    "use strict";
    Object.defineProperty(nr, "__esModule", { value: !0 });
    nr.ActionTypeConsts = nr.ActionAppliesTo = void 0;
    var vA = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    nr.ActionTypeConsts = vA;
    var hA = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
    nr.ActionAppliesTo = hA;
  });
  var ff = u((Rn) => {
    "use strict";
    Object.defineProperty(Rn, "__esModule", { value: !0 });
    Rn.InteractionTypeConsts = void 0;
    var EA = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
    Rn.InteractionTypeConsts = EA;
  });
  var df = u((Cn) => {
    "use strict";
    Object.defineProperty(Cn, "__esModule", { value: !0 });
    Cn.ReducedMotionTypes = void 0;
    var gA = $o(),
      {
        TRANSFORM_MOVE: _A,
        TRANSFORM_SCALE: yA,
        TRANSFORM_ROTATE: mA,
        TRANSFORM_SKEW: IA,
        STYLE_SIZE: TA,
        STYLE_FILTER: OA,
        STYLE_FONT_VARIATION: bA,
      } = gA.ActionTypeConsts,
      AA = {
        [_A]: !0,
        [yA]: !0,
        [mA]: !0,
        [IA]: !0,
        [TA]: !0,
        [OA]: !0,
        [bA]: !0,
      };
    Cn.ReducedMotionTypes = AA;
  });
  var pf = u((ue) => {
    "use strict";
    Object.defineProperty(ue, "__esModule", { value: !0 });
    ue.IX2_VIEWPORT_WIDTH_CHANGED =
      ue.IX2_TEST_FRAME_RENDERED =
      ue.IX2_STOP_REQUESTED =
      ue.IX2_SESSION_STOPPED =
      ue.IX2_SESSION_STARTED =
      ue.IX2_SESSION_INITIALIZED =
      ue.IX2_RAW_DATA_IMPORTED =
      ue.IX2_PREVIEW_REQUESTED =
      ue.IX2_PLAYBACK_REQUESTED =
      ue.IX2_PARAMETER_CHANGED =
      ue.IX2_MEDIA_QUERIES_DEFINED =
      ue.IX2_INSTANCE_STARTED =
      ue.IX2_INSTANCE_REMOVED =
      ue.IX2_INSTANCE_ADDED =
      ue.IX2_EVENT_STATE_CHANGED =
      ue.IX2_EVENT_LISTENER_ADDED =
      ue.IX2_ELEMENT_STATE_CHANGED =
      ue.IX2_CLEAR_REQUESTED =
      ue.IX2_ANIMATION_FRAME_CHANGED =
      ue.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        void 0;
    var SA = "IX2_RAW_DATA_IMPORTED";
    ue.IX2_RAW_DATA_IMPORTED = SA;
    var wA = "IX2_SESSION_INITIALIZED";
    ue.IX2_SESSION_INITIALIZED = wA;
    var RA = "IX2_SESSION_STARTED";
    ue.IX2_SESSION_STARTED = RA;
    var CA = "IX2_SESSION_STOPPED";
    ue.IX2_SESSION_STOPPED = CA;
    var NA = "IX2_PREVIEW_REQUESTED";
    ue.IX2_PREVIEW_REQUESTED = NA;
    var xA = "IX2_PLAYBACK_REQUESTED";
    ue.IX2_PLAYBACK_REQUESTED = xA;
    var qA = "IX2_STOP_REQUESTED";
    ue.IX2_STOP_REQUESTED = qA;
    var LA = "IX2_CLEAR_REQUESTED";
    ue.IX2_CLEAR_REQUESTED = LA;
    var PA = "IX2_EVENT_LISTENER_ADDED";
    ue.IX2_EVENT_LISTENER_ADDED = PA;
    var DA = "IX2_EVENT_STATE_CHANGED";
    ue.IX2_EVENT_STATE_CHANGED = DA;
    var MA = "IX2_ANIMATION_FRAME_CHANGED";
    ue.IX2_ANIMATION_FRAME_CHANGED = MA;
    var FA = "IX2_PARAMETER_CHANGED";
    ue.IX2_PARAMETER_CHANGED = FA;
    var GA = "IX2_INSTANCE_ADDED";
    ue.IX2_INSTANCE_ADDED = GA;
    var UA = "IX2_INSTANCE_STARTED";
    ue.IX2_INSTANCE_STARTED = UA;
    var XA = "IX2_INSTANCE_REMOVED";
    ue.IX2_INSTANCE_REMOVED = XA;
    var WA = "IX2_ELEMENT_STATE_CHANGED";
    ue.IX2_ELEMENT_STATE_CHANGED = WA;
    var VA = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    ue.IX2_ACTION_LIST_PLAYBACK_CHANGED = VA;
    var BA = "IX2_VIEWPORT_WIDTH_CHANGED";
    ue.IX2_VIEWPORT_WIDTH_CHANGED = BA;
    var HA = "IX2_MEDIA_QUERIES_DEFINED";
    ue.IX2_MEDIA_QUERIES_DEFINED = HA;
    var spaceCredits = "IX2_TEST_FRAME_RENDERED";
    ue.IX2_TEST_FRAME_RENDERED = spaceCredits;
  });
  var vf = u((P) => {
    "use strict";
    Object.defineProperty(P, "__esModule", { value: !0 });
    P.W_MOD_JS =
      P.W_MOD_IX =
      P.WILL_CHANGE =
      P.WIDTH =
      P.sl_PAGE =
      P.TRANSLATE_Z =
      P.TRANSLATE_Y =
      P.TRANSLATE_X =
      P.TRANSLATE_3D =
      P.TRANSFORM =
      P.SKEW_Y =
      P.SKEW_X =
      P.SKEW =
      P.SIBLINGS =
      P.SCALE_Z =
      P.SCALE_Y =
      P.SCALE_X =
      P.SCALE_3D =
      P.ROTATE_Z =
      P.ROTATE_Y =
      P.ROTATE_X =
      P.RENDER_TRANSFORM =
      P.RENDER_STYLE =
      P.RENDER_PLUGIN =
      P.RENDER_GENERAL =
      P.PRESERVE_3D =
      P.PLAIN_OBJECT =
      P.PARENT =
      P.OPACITY =
      P.IX2_ID_DELIMITER =
      P.IMMEDIATE_CHILDREN =
      P.HTML_ELEMENT =
      P.HEIGHT =
      P.FONT_VARIATION_SETTINGS =
      P.FLEX =
      P.FILTER =
      P.DISPLAY =
      P.CONFIG_Z_VALUE =
      P.CONFIG_Z_UNIT =
      P.CONFIG_Y_VALUE =
      P.CONFIG_Y_UNIT =
      P.CONFIG_X_VALUE =
      P.CONFIG_X_UNIT =
      P.CONFIG_VALUE =
      P.CONFIG_UNIT =
      P.COMMA_DELIMITER =
      P.COLOR = 
      P.COLON_DELIMITER =   
      P.CHILDREN =  
      P.BOUNDARY_SELECTOR = 
      P.BORDER_COLOR =  
      P.BAR_DELIMITER = 
      P.BACKGROUND_COLOR =  
      P.BACKGROUND =
      P.AUTO =
      P.ABSTRACT_NODE =
        void 0;
    var jA = "|";
    P.IX2_ID_DELIMITER = jA;
    var macielCredits = "creditosWebsite";
    P.sl_PAGE = macielCredits;
    var zA = "w-mod-js";
    P.W_MOD_JS = zA;
    var YA = "w-mod-ix";
    P.W_MOD_IX = YA;
    var QA = ".d-dyn-item";
    P.BOUNDARY_SELECTOR = QA;
    var $A = "xValue";
    P.CONFIG_X_VALUE = $A;
    var ZA = "yValue";
    P.CONFIG_Y_VALUE = ZA;
    var JA = "zValue";
    P.CONFIG_Z_VALUE = JA;
    var eS = "value";
    P.CONFIG_VALUE = eS;
    var tS = "xUnit";
    P.CONFIG_X_UNIT = tS;
    var rS = "yUnit";
    P.CONFIG_Y_UNIT = rS;
    var nS = "zUnit";
    P.CONFIG_Z_UNIT = nS;
    var iS = "unit";
    P.CONFIG_UNIT = iS;
    var oS = "transform";
    P.TRANSFORM = oS;
    var aS = "translateX";
    P.TRANSLATE_X = aS;
    var sS = "translateY";
    P.TRANSLATE_Y = sS;
    var uS = "translateZ";
    P.TRANSLATE_Z = uS;
    var cS = "translate3d";
    P.TRANSLATE_3D = cS;
    var lS = "scaleX";
    P.SCALE_X = lS;
    var fS = "scaleY";
    P.SCALE_Y = fS;
    var dS = "scaleZ";
    P.SCALE_Z = dS;
    var pS = "scale3d";
    P.SCALE_3D = pS;
    var vS = "rotateX";
    P.ROTATE_X = vS;
    var hS = "rotateY";
    P.ROTATE_Y = hS;
    var ES = "rotateZ";
    P.ROTATE_Z = ES;
    var gS = "skew";
    P.SKEW = gS;
    var _S = "skewX";
    P.SKEW_X = _S;
    var yS = "skewY";
    P.SKEW_Y = yS;
    var mS = "opacity";
    P.OPACITY = mS;
    var IS = "filter";
    P.FILTER = IS;
    var TS = "font-variation-settings";
    P.FONT_VARIATION_SETTINGS = TS;
    var OS = "width";
    P.WIDTH = OS;
    var bS = "height";
    P.HEIGHT = bS;
    var AS = "backgroundColor";
    P.BACKGROUND_COLOR = AS;
    var SS = "background";
    P.BACKGROUND = SS;
    var wS = "borderColor";
    P.BORDER_COLOR = wS;
    var RS = "color";
    P.COLOR = RS;
    var CS = "display";
    P.DISPLAY = CS;
    var NS = "flex";
    P.FLEX = NS;
    var xS = "willChange";
    P.WILL_CHANGE = xS;
    var qS = "AUTO";
    P.AUTO = qS;
    var LS = ",";
    P.COMMA_DELIMITER = LS;
    var PS = ":";
    P.COLON_DELIMITER = PS;
    var DS = "|";
    P.BAR_DELIMITER = DS;
    var MS = "CHILDREN";
    P.CHILDREN = MS;
    var FS = "IMMEDIATE_CHILDREN";
    P.IMMEDIATE_CHILDREN = FS;
    var GS = "SIBLINGS";
    P.SIBLINGS = GS;
    var US = "PARENT";
    P.PARENT = US;
    var XS = "preserve-3d";
    P.PRESERVE_3D = XS;
    var WS = "HTML_ELEMENT";
    P.HTML_ELEMENT = WS;
    var VS = "PLAIN_OBJECT";
    P.PLAIN_OBJECT = VS;
    var BS = "ABSTRACT_NODE";
    P.ABSTRACT_NODE = BS;
    var HS = "RENDER_TRANSFORM";
    P.RENDER_TRANSFORM = HS;
    var kS = "RENDER_GENERAL";
    P.RENDER_GENERAL = kS;
    var jS = "RENDER_STYLE";
    P.RENDER_STYLE = jS;
    var KS = "RENDER_PLUGIN";
    P.RENDER_PLUGIN = KS;
  });
  var Ve = u((we) => {
    "use strict";
    var hf = Qt().default;
    Object.defineProperty(we, "__esModule", { value: !0 });
    var Nn = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    we.IX2EngineConstants = we.IX2EngineActionTypes = void 0;
    var Zo = lf();
    Object.keys(Zo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Nn, e) ||
        (e in we && we[e] === Zo[e]) ||
        Object.defineProperty(we, e, {
          enumerable: !0,
          get: function () {
            return Zo[e];
          },
        });
    });
    var Jo = $o();
    Object.keys(Jo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Nn, e) ||
        (e in we && we[e] === Jo[e]) ||
        Object.defineProperty(we, e, {
          enumerable: !0,
          get: function () {
            return Jo[e];
          },
        });
    });
    var ea = ff();
    Object.keys(ea).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Nn, e) ||
        (e in we && we[e] === ea[e]) ||
        Object.defineProperty(we, e, {
          enumerable: !0,
          get: function () {
            return ea[e];
          },
        });
    });
    var ta = df();
    Object.keys(ta).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Nn, e) ||
        (e in we && we[e] === ta[e]) ||
        Object.defineProperty(we, e, {
          enumerable: !0,
          get: function () {
            return ta[e];
          },
        });
    });
    var zS = hf(pf());
    we.IX2EngineActionTypes = zS;
    var YS = hf(vf());
    we.IX2EngineConstants = YS;
  });
  var Ef = u((xn) => {
    "use strict";
    Object.defineProperty(xn, "__esModule", { value: !0 });
    xn.ixData = void 0;
    var QS = Ve(),
      { IX2_RAW_DATA_IMPORTED: $S } = QS.IX2EngineActionTypes,
      ZS = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case $S:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    xn.ixData = ZS;
  });
  var Gr = u((EH, _t) => {
    function ra() {
      return (
        (_t.exports = ra =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
        (_t.exports.__esModule = !0),
        (_t.exports.default = _t.exports),
        ra.apply(this, arguments)
      );
    }
    (_t.exports = ra),
      (_t.exports.__esModule = !0),
      (_t.exports.default = _t.exports);
  });
  var ir = u((Te) => {
    "use strict";
    Object.defineProperty(Te, "__esModule", { value: !0 });
    var JS =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    Te.clone = Ln;
    Te.addLast = yf;
    Te.addFirst = mf;
    Te.removeLast = If;
    Te.removeFirst = Tf;
    Te.insert = Of;
    Te.removeAt = bf;
    Te.replaceAt = Af;
    Te.getIn = Pn;
    Te.set = Dn;
    Te.setIn = Mn;
    Te.update = sl;
    Te.updateIn = Rf;
    Te.merge = Cf;
    Te.mergeDeep = Nf;
    Te.mergeIn = xf;
    Te.omit = qf;
    Te.addDefaults = Lf;
    var gf = "INVALID_ARGS";
    function _f(e) {
      throw new Error(e);
    }
    function na(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var ew = {}.hasOwnProperty;
    function Ln(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = na(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Be(e, t, r) {
      var n = r;
      n == null && _f(gf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var c = 0; c < a.length; c++) {
        var f = a[c];
        if (f != null) {
          var g = na(f);
          if (g.length)
            for (var v = 0; v <= g.length; v++) {
              var _ = g[v];
              if (!(e && n[_] !== void 0)) {
                var E = f[_];
                t && qn(n[_]) && qn(E) && (E = Be(e, t, n[_], E)),
                  !(E === void 0 || E === n[_]) &&
                    (i || ((i = !0), (n = Ln(n))), (n[_] = E));
              }
            }
        }
      }
      return n;
    }
    function qn(e) {
      var t = typeof e > "u" ? "undefined" : JS(e);
      return e != null && (t === "object" || t === "function");
    }
    function yf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function mf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function If(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Tf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Of(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function bf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Af(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Pn(e, t) {
      if ((!Array.isArray(t) && _f(gf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Dn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Ln(i);
      return (o[t] = r), o;
    }
    function Sf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          qn(e) && qn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Sf(a, t, r, n + 1);
      }
      return Dn(e, o, i);
    }
    function Mn(e, t, r) {
      return t.length ? Sf(e, t, r, 0) : r;
    }
    function sl(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Dn(e, t, i);
    }
    function Rf(e, t, r) {
      var n = Pn(e, t),
        i = r(n);
      return Mn(e, t, i);
    }
    function Cf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Be.call.apply(Be, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Be(!1, !1, e, t, r, n, i, o);
    }
    function Nf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Be.call.apply(Be, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Be(!1, !0, e, t, r, n, i, o);
    }
    function xf(e, t, r, n, i, o, a) {
      var s = Pn(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          f = arguments.length,
          g = Array(f > 7 ? f - 7 : 0),
          v = 7;
        v < f;
        v++
      )
        g[v - 7] = arguments[v];
      return (
        g.length
          ? (c = Be.call.apply(Be, [null, !1, !1, s, r, n, i, o, a].concat(g)))
          : (c = Be(!1, !1, s, r, n, i, o, a)),
        Mn(e, t, c)
      );
    }
    function qf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (ew.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = na(e), s = 0; s < a.length; s++) {
        var c = a[s];
        r.indexOf(c) >= 0 || (o[c] = e[c]);
      }
      return o;
    }
    function Lf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Be.call.apply(Be, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Be(!0, !1, e, t, r, n, i, o);
    }
    var tw = {
      clone: Ln,
      addLast: yf,
      addFirst: mf,
      removeLast: If,
      removeFirst: Tf,
      insert: Of,
      removeAt: bf,
      replaceAt: Af,
      getIn: Pn,
      set: Dn,
      setIn: Mn,
      update: sl,
      updateIn: Rf,
      merge: Cf,
      mergeDeep: Nf,
      mergeIn: xf,
      omit: qf,
      addDefaults: Lf,
    };
    Te.default = tw;
  });
  var Df = u((Fn) => {
    "use strict";
    var rw = st().default;
    Object.defineProperty(Fn, "__esModule", { value: !0 });
    Fn.ixRequest = void 0;
    var nw = rw(Gr()),
      iw = Ve(),
      ow = ir(),
      {
        IX2_PREVIEW_REQUESTED: aw,
        IX2_PLAYBACK_REQUESTED: sw,
        IX2_STOP_REQUESTED: uw,
        IX2_CLEAR_REQUESTED: cw,
      } = iw.IX2EngineActionTypes,
      lw = { preview: {}, playback: {}, stop: {}, clear: {} },
      Pf = Object.create(null, {
        [aw]: { value: "preview" },
        [sw]: { value: "playback" },
        [uw]: { value: "stop" },
        [cw]: { value: "clear" },
      }),
      fw = (e = lw, t) => {
        if (t.type in Pf) {
          let r = [Pf[t.type]];
          return (0, ow.setIn)(e, [r], (0, nw.default)({}, t.payload));
        }
        return e;
      };
    Fn.ixRequest = fw;
  });
  var Ff = u((Gn) => {
    "use strict";
    Object.defineProperty(Gn, "__esModule", { value: !0 });
    Gn.ixSession = void 0;
    var dw = Ve(),
      ct = ir(),
      {
        IX2_SESSION_INITIALIZED: pw,
        IX2_SESSION_STARTED: vw,
        IX2_TEST_FRAME_RENDERED: hw,
        IX2_SESSION_STOPPED: Ew,
        IX2_EVENT_LISTENER_ADDED: gw,
        IX2_EVENT_STATE_CHANGED: _w,
        IX2_ANIMATION_FRAME_CHANGED: yw,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: mw,
        IX2_VIEWPORT_WIDTH_CHANGED: Iw,
        IX2_MEDIA_QUERIES_DEFINED: Tw,
      } = dw.IX2EngineActionTypes,
      Mf = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      Ow = 20,
      bw = (e = Mf, t) => {
        switch (t.type) {
          case pw: {
            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
            return (0, ct.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
          }
          case vw:
            return (0, ct.set)(e, "active", !0);
          case hw: {
            let {
              payload: { step: r = Ow },
            } = t;
            return (0, ct.set)(e, "tick", e.tick + r);
          }
          case Ew:
            return Mf;
          case yw: {
            let {
              payload: { now: r },
            } = t;
            return (0, ct.set)(e, "tick", r);
          }
          case gw: {
            let r = (0, ct.addLast)(e.eventListeners, t.payload);
            return (0, ct.set)(e, "eventListeners", r);
          }
          case _w: {
            let { stateKey: r, newState: n } = t.payload;
            return (0, ct.setIn)(e, ["eventState", r], n);
          }
          case mw: {
            let { actionListId: r, isPlaying: n } = t.payload;
            return (0, ct.setIn)(e, ["playbackState", r], n);
          }
          case Iw: {
            let { width: r, mediaQueries: n } = t.payload,
              i = n.length,
              o = null;
            for (let a = 0; a < i; a++) {
              let { key: s, min: c, max: f } = n[a];
              if (r >= c && r <= f) {
                o = s;
                break;
              }
            }
            return (0, ct.merge)(e, { viewportWidth: r, mediaQueryKey: o });
          }
          case Tw:
            return (0, ct.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    Gn.ixSession = bw;
  });
  var Uf = u((mH, Gf) => {
    function Aw() {
      (this.__data__ = []), (this.size = 0);
    }
    Gf.exports = Aw;
  });
  var Un = u((IH, Xf) => {
    function Sw(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Xf.exports = Sw;
  });
  var Ur = u((TH, sl) => {
    var ww = Un();
    function Rw(e, t) {
      for (var r = e.length; r--; ) if (ww(e[r][0], t)) return r;
      return -1;
    }
    sl.exports = Rw;
  });
  var Bf = u((OH, Vf) => {
    var Cw = Ur(),
      Nw = Array.prototype,
      xw = Nw.splice;
    function qw(e) {
      var t = this.__data__,
        r = Cw(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : xw.call(t, r, 1), --this.size, !0;
    }
    Vf.exports = qw;
  });
  var kf = u((bH, Hf) => {
    var Lw = Ur();
    function Pw(e) {
      var t = this.__data__,
        r = Lw(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Hf.exports = Pw;
  });
  var Kf = u((AH, jf) => {
    var Dw = Ur();
    function Mw(e) {
      return Dw(this.__data__, e) > -1;
    }
    jf.exports = Mw;
  });
  var Yf = u((SH, zf) => {
    var Fw = Ur();
    function Gw(e, t) {
      var r = this.__data__,
        n = Fw(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    zf.exports = Gw;
  });
  var Xr = u((wH, Qf) => {
    var Uw = Uf(),
      Xw = Bf(),
      Ww = kf(),
      Vw = Kf(),
      Bw = Yf();
    function or(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    or.prototype.clear = Uw;
    or.prototype.delete = Xw;
    or.prototype.get = Ww;
    or.prototype.has = Vw;
    or.prototype.set = Bw;
    Qf.exports = or;
  });
  var Zf = u((RH, $f) => {
    var Hw = Xr();
    function kw() {
      (this.__data__ = new Hw()), (this.size = 0);
    }
    $f.exports = kw;
  });
  var ed = u((CH, Jf) => {
    function jw(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    Jf.exports = jw;
  });
  var rd = u((NH, td) => {
    function Kw(e) {
      return this.__data__.get(e);
    }
    td.exports = Kw;
  });
  var id = u((xH, nd) => {
    function zw(e) {
      return this.__data__.has(e);
    }
    nd.exports = zw;
  });
  var lt = u((qH, od) => {
    function Yw(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    od.exports = Yw;
  });
  var ia = u((LH, ad) => {
    var Qw = bt(),
      $w = lt(),
      Zw = "[object AsyncFunction]",
      Jw = "[object Function]",
      e0 = "[object GeneratorFunction]",
      t0 = "[object Proxy]";
    function r0(e) {
      if (!$w(e)) return !1;
      var t = Qw(e);
      return t == Jw || t == e0 || t == Zw || t == t0;
    }
    ad.exports = r0;
  });
  var ud = u((PH, sd) => {
    var n0 = Je(),
      i0 = n0["__core-js_shared__"];
    sd.exports = i0;
  });
  var fd = u((DH, ld) => {
    var oa = ud(),
      cd = (function () {
        var e = /[^.]+$/.exec((oa && oa.keys && oa.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function o0(e) {
      return !!cd && cd in e;
    }
    ld.exports = o0;
  });
  var aa = u((MH, dd) => {
    var a0 = Function.prototype,
      s0 = a0.toString;
    function u0(e) {
      if (e != null) {
        try {
          return s0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    dd.exports = u0;
  });
  var vd = u((FH, pd) => {
    var c0 = ia(),
      l0 = fd(),
      f0 = lt(),
      d0 = aa(),
      p0 = /[\\^$.*+?()[\]{}|]/g,
      v0 = /^\[object .+?Constructor\]$/,
      h0 = Function.prototype,
      E0 = Object.prototype,
      g0 = h0.toString,
      _0 = E0.hasOwnProperty,
      y0 = RegExp(
        "^" +
          g0
            .call(_0)
            .replace(p0, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function m0(e) {
      if (!f0(e) || l0(e)) return !1;
      var t = c0(e) ? y0 : v0;
      return t.test(d0(e));
    }
    pd.exports = m0;
  });
  var Ed = u((GH, hd) => {
    function I0(e, t) {
      return e?.[t];
    }
    hd.exports = I0;
  });
  var At = u((UH, gd) => {
    var T0 = vd(),
      O0 = Ed();
    function b0(e, t) {
      var r = O0(e, t);
      return T0(r) ? r : void 0;
    }
    gd.exports = b0;
  });
  var Xn = u((XH, _d) => {
    var A0 = At(),
      S0 = Je(),
      w0 = A0(S0, "Map");
    _d.exports = w0;
  });
  var Wr = u((WH, yd) => {
    var R0 = At(),
      C0 = R0(Object, "create");
    yd.exports = C0;
  });
  var Td = u((VH, Id) => {
    var md = Wr();
    function N0() {
      (this.__data__ = md ? md(null) : {}), (this.size = 0);
    }
    Id.exports = N0;
  });
  var bd = u((BH, Od) => {
    function x0(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Od.exports = x0;
  });
  var Sd = u((HH, Ad) => {
    var q0 = Wr(),
      L0 = "__lodash_hash_undefined__",
      P0 = Object.prototype,
      D0 = P0.hasOwnProperty;
    function M0(e) {
      var t = this.__data__;
      if (q0) {
        var r = t[e];
        return r === L0 ? void 0 : r;
      }
      return D0.call(t, e) ? t[e] : void 0;
    }
    Ad.exports = M0;
  });
  var Rd = u((kH, wd) => {
    var F0 = Wr(),
      G0 = Object.prototype,
      U0 = G0.hasOwnProperty;
    function X0(e) {
      var t = this.__data__;
      return F0 ? t[e] !== void 0 : U0.call(t, e);
    }
    wd.exports = X0;
  });
  var Nd = u((jH, Cd) => {
    var W0 = Wr(),
      V0 = "__lodash_hash_undefined__";
    function B0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = W0 && t === void 0 ? V0 : t),
        this
      );
    }
    Cd.exports = B0;
  });
  var qd = u((KH, xd) => {
    var H0 = Td(),
      k0 = bd(),
      j0 = Sd(),
      K0 = Rd(),
      z0 = Nd();
    function ar(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    ar.prototype.clear = H0;
    ar.prototype.delete = k0;
    ar.prototype.get = j0;
    ar.prototype.has = K0;
    ar.prototype.set = z0;
    xd.exports = ar;
  });
  var Dd = u((zH, Pd) => {
    var Ld = qd(),
      Y0 = Xr(),
      Q0 = Xn();
    function $0() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Ld(),
          map: new (Q0 || Y0)(),
          string: new Ld(),
        });
    }
    Pd.exports = $0;
  });
  var Fd = u((YH, Md) => {
    function Z0(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Md.exports = Z0;
  });
  var Vr = u((QH, Gd) => {
    var J0 = Fd();
    function eR(e, t) {
      var r = e.__data__;
      return J0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Gd.exports = eR;
  });
  var Xd = u(($H, Ud) => {
    var tR = Vr();
    function rR(e) {
      var t = tR(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Ud.exports = rR;
  });
  var Vd = u((ZH, Wd) => {
    var nR = Vr();
    function iR(e) {
      return nR(this, e).get(e);
    }
    Wd.exports = iR;
  });
  var Hd = u((JH, Bd) => {
    var oR = Vr();
    function aR(e) {
      return oR(this, e).has(e);
    }
    Bd.exports = aR;
  });
  var jd = u((ek, kd) => {
    var sR = Vr();
    function uR(e, t) {
      var r = sR(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    kd.exports = uR;
  });
  var Wn = u((tk, Kd) => {
    var cR = Dd(),
      lR = Xd(),
      fR = Vd(),
      dR = Hd(),
      pR = jd();
    function sr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    sr.prototype.clear = cR;
    sr.prototype.delete = lR;
    sr.prototype.get = fR;
    sr.prototype.has = dR;
    sr.prototype.set = pR;
    Kd.exports = sr;
  });
  var Yd = u((rk, zd) => {
    var vR = Xr(),
      hR = Xn(),
      ER = Wn(),
      gR = 200;
    function _R(e, t) {
      var r = this.__data__;
      if (r instanceof vR) {
        var n = r.__data__;
        if (!hR || n.length < gR - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new ER(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    zd.exports = _R;
  });
  var sa = u((nk, Qd) => {
    var yR = Xr(),
      mR = Zf(),
      IR = ed(),
      TR = rd(),
      OR = id(),
      bR = Yd();
    function ur(e) {
      var t = (this.__data__ = new yR(e));
      this.size = t.size;
    }
    ur.prototype.clear = mR;
    ur.prototype.delete = IR;
    ur.prototype.get = TR;
    ur.prototype.has = OR;
    ur.prototype.set = bR;
    Qd.exports = ur;
  });
  var Zd = u((ik, $d) => {
    var AR = "__lodash_hash_undefined__";
    function SR(e) {
      return this.__data__.set(e, AR), this;
    }
    $d.exports = SR;
  });
  var ep = u((ok, Jd) => {
    function wR(e) {
      return this.__data__.has(e);
    }
    Jd.exports = wR;
  });
  var rp = u((ak, tp) => {
    var RR = Wn(),
      CR = Zd(),
      NR = ep();
    function Vn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new RR(); ++t < r; ) this.add(e[t]);
    }
    Vn.prototype.add = Vn.prototype.push = CR;
    Vn.prototype.has = NR;
    tp.exports = Vn;
  });
  var ip = u((sk, np) => {
    function xR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    np.exports = xR;
  });
  var ap = u((uk, op) => {
    function qR(e, t) {
      return e.has(t);
    }
    op.exports = qR;
  });
  var ua = u((ck, sp) => {
    var LR = rp(),
      PR = ip(),
      DR = ap(),
      MR = 1,
      FR = 2;
    function GR(e, t, r, n, i, o) {
      var a = r & MR,
        s = e.length,
        c = t.length;
      if (s != c && !(a && c > s)) return !1;
      var f = o.get(e),
        g = o.get(t);
      if (f && g) return f == t && g == e;
      var v = -1,
        _ = !0,
        E = r & FR ? new LR() : void 0;
      for (o.set(e, t), o.set(t, e); ++v < s; ) {
        var O = e[v],
          b = t[v];
        if (n) var M = a ? n(b, O, v, t, e, o) : n(O, b, v, e, t, o);
        if (M !== void 0) {
          if (M) continue;
          _ = !1;
          break;
        }
        if (E) {
          if (
            !PR(t, function (A, w) {
              if (!DR(E, w) && (O === A || i(O, A, r, n, o))) return E.push(w);
            })
          ) {
            _ = !1;
            break;
          }
        } else if (!(O === b || i(O, b, r, n, o))) {
          _ = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), _;
    }
    sp.exports = GR;
  });
  var cp = u((lk, up) => {
    var UR = Je(),
      XR = UR.Uint8Array;
    up.exports = XR;
  });
  var fp = u((fk, lp) => {
    function WR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    lp.exports = WR;
  });
  var pp = u((dk, dp) => {
    function VR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    dp.exports = VR;
  });
  var _p = u((pk, gp) => {
    var vp = er(),
      hp = cp(),
      BR = Un(),
      HR = ua(),
      kR = fp(),
      jR = pp(),
      KR = 1,
      zR = 2,
      YR = "[object Boolean]",
      QR = "[object Date]",
      $R = "[object Error]",
      ZR = "[object Map]",
      JR = "[object Number]",
      eC = "[object RegExp]",
      tC = "[object Set]",
      rC = "[object String]",
      nC = "[object Symbol]",
      iC = "[object ArrayBuffer]",
      oC = "[object DataView]",
      Ep = vp ? vp.prototype : void 0,
      ca = Ep ? Ep.valueOf : void 0;
    function aC(e, t, r, n, i, o, a) {
      switch (r) {
        case oC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case iC:
          return !(e.byteLength != t.byteLength || !o(new hp(e), new hp(t)));
        case YR:
        case QR:
        case JR:
          return BR(+e, +t);
        case $R:
          return e.name == t.name && e.message == t.message;
        case eC:
        case rC:
          return e == t + "";
        case ZR:
          var s = kR;
        case tC:
          var c = n & KR;
          if ((s || (s = jR), e.size != t.size && !c)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= zR), a.set(e, t);
          var g = HR(s(e), s(t), n, i, o, a);
          return a.delete(e), g;
        case nC:
          if (ca) return ca.call(e) == ca.call(t);
      }
      return !1;
    }
    gp.exports = aC;
  });
  var Bn = u((vk, yp) => {
    function sC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    yp.exports = sC;
  });
  var xe = u((hk, mp) => {
    var uC = Array.isArray;
    mp.exports = uC;
  });
  var la = u((Ek, Ip) => {
    var cC = Bn(),
      lC = xe();
    function fC(e, t, r) {
      var n = t(e);
      return lC(e) ? n : cC(n, r(e));
    }
    Ip.exports = fC;
  });
  var Op = u((gk, Tp) => {
    function dC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Tp.exports = dC;
  });
  var fa = u((_k, bp) => {
    function pC() {
      return [];
    }
    bp.exports = pC;
  });
  var da = u((yk, Sp) => {
    var vC = Op(),
      hC = fa(),
      EC = Object.prototype,
      gC = EC.propertyIsEnumerable,
      Ap = Object.getOwnPropertySymbols,
      _C = Ap
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                vC(Ap(e), function (t) {
                  return gC.call(e, t);
                }));
          }
        : hC;
    Sp.exports = _C;
  });
  var Rp = u((mk, wp) => {
    function yC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    wp.exports = yC;
  });
  var Np = u((Ik, Cp) => {
    var mC = bt(),
      IC = gt(),
      TC = "[object Arguments]";
    function OC(e) {
      return IC(e) && mC(e) == TC;
    }
    Cp.exports = OC;
  });
  var Br = u((Tk, Lp) => {
    var xp = Np(),
      bC = gt(),
      qp = Object.prototype,
      AC = qp.hasOwnProperty,
      SC = qp.propertyIsEnumerable,
      wC = xp(
        (function () {
          return arguments;
        })()
      )
        ? xp
        : function (e) {
            return bC(e) && AC.call(e, "callee") && !SC.call(e, "callee");
          };
    Lp.exports = wC;
  });
  var Dp = u((Ok, Pp) => {
    function RC() {
      return !1;
    }
    Pp.exports = RC;
  });
  var Hn = u((Hr, cr) => {
    var CC = Je(),
      NC = Dp(),
      Gp = typeof Hr == "object" && Hr && !Hr.nodeType && Hr,
      Mp = Gp && typeof cr == "object" && cr && !cr.nodeType && cr,
      xC = Mp && Mp.exports === Gp,
      Fp = xC ? CC.Buffer : void 0,
      qC = Fp ? Fp.isBuffer : void 0,
      LC = qC || NC;
    cr.exports = LC;
  });
  var kn = u((bk, Up) => {
    var PC = 9007199254740991,
      DC = /^(?:0|[1-9]\d*)$/;
    function MC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? PC),
        !!t &&
          (r == "number" || (r != "symbol" && DC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Up.exports = MC;
  });
  var jn = u((Ak, Xp) => {
    var FC = 9007199254740991;
    function GC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= FC;
    }
    Xp.exports = GC;
  });
  var Vp = u((Sk, Wp) => {
    var UC = bt(),
      XC = jn(),
      WC = gt(),
      VC = "[object Arguments]",
      BC = "[object Array]",
      HC = "[object Boolean]",
      kC = "[object Date]",
      jC = "[object Error]",
      KC = "[object Function]",
      zC = "[object Map]",
      YC = "[object Number]",
      QC = "[object Object]",
      $C = "[object RegExp]",
      ZC = "[object Set]",
      JC = "[object String]",
      eN = "[object WeakMap]",
      tN = "[object ArrayBuffer]",
      rN = "[object DataView]",
      nN = "[object Float32Array]",
      iN = "[object Float64Array]",
      oN = "[object Int8Array]",
      aN = "[object Int16Array]",
      sN = "[object Int32Array]",
      uN = "[object Uint8Array]",
      cN = "[object Uint8ClampedArray]",
      lN = "[object Uint16Array]",
      fN = "[object Uint32Array]",
      ye = {};
    ye[nN] =
      ye[iN] =
      ye[oN] =
      ye[aN] =
      ye[sN] =
      ye[uN] =
      ye[cN] =
      ye[lN] =
      ye[fN] =
        !0;
    ye[VC] =
      ye[BC] =
      ye[tN] =
      ye[HC] =
      ye[rN] =
      ye[kC] =
      ye[jC] =
      ye[KC] =
      ye[zC] =
      ye[YC] =
      ye[QC] =
      ye[$C] =
      ye[ZC] =
      ye[JC] =
      ye[eN] =
        !1;
    function dN(e) {
      return WC(e) && XC(e.length) && !!ye[UC(e)];
    }
    Wp.exports = dN;
  });
  var Hp = u((wk, Bp) => {
    function pN(e) {
      return function (t) {
        return e(t);
      };
    }
    Bp.exports = pN;
  });
  var jp = u((kr, lr) => {
    var vN = Do(),
      kp = typeof kr == "object" && kr && !kr.nodeType && kr,
      jr = kp && typeof lr == "object" && lr && !lr.nodeType && lr,
      hN = jr && jr.exports === kp,
      pa = hN && vN.process,
      EN = (function () {
        try {
          var e = jr && jr.require && jr.require("util").types;
          return e || (pa && pa.binding && pa.binding("util"));
        } catch {}
      })();
    lr.exports = EN;
  });
  var Kn = u((Rk, Yp) => {
    var gN = Vp(),
      _N = Hp(),
      Kp = jp(),
      zp = Kp && Kp.isTypedArray,
      yN = zp ? _N(zp) : gN;
    Yp.exports = yN;
  });
  var va = u((Ck, Qp) => {
    var mN = Rp(),
      IN = Br(),
      TN = xe(),
      ON = Hn(),
      bN = kn(),
      AN = Kn(),
      SN = Object.prototype,
      wN = SN.hasOwnProperty;
    function RN(e, t) {
      var r = TN(e),
        n = !r && IN(e),
        i = !r && !n && ON(e),
        o = !r && !n && !i && AN(e),
        a = r || n || i || o,
        s = a ? mN(e.length, String) : [],
        c = s.length;
      for (var f in e)
        (t || wN.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              bN(f, c))
          ) &&
          s.push(f);
      return s;
    }
    Qp.exports = RN;
  });
  var zn = u((Nk, $p) => {
    var CN = Object.prototype;
    function NN(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || CN;
      return e === r;
    }
    $p.exports = NN;
  });
  var Jp = u((xk, Zp) => {
    var xN = Mo(),
      qN = xN(Object.keys, Object);
    Zp.exports = qN;
  });
  var Yn = u((qk, ev) => {
    var LN = zn(),
      PN = Jp(),
      DN = Object.prototype,
      MN = DN.hasOwnProperty;
    function FN(e) {
      if (!LN(e)) return PN(e);
      var t = [];
      for (var r in Object(e)) MN.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    ev.exports = FN;
  });
  var Gt = u((Lk, tv) => {
    var GN = ia(),
      UN = jn();
    function XN(e) {
      return e != null && UN(e.length) && !GN(e);
    }
    tv.exports = XN;
  });
  var Kr = u((Pk, rv) => {
    var WN = va(),
      VN = Yn(),
      BN = Gt();
    function HN(e) {
      return BN(e) ? WN(e) : VN(e);
    }
    rv.exports = HN;
  });
  var iv = u((Dk, nv) => {
    var kN = la(),
      jN = da(),
      KN = Kr();
    function zN(e) {
      return kN(e, KN, jN);
    }
    nv.exports = zN;
  });
  var sv = u((Mk, av) => {
    var ov = iv(),
      YN = 1,
      QN = Object.prototype,
      $N = QN.hasOwnProperty;
    function ZN(e, t, r, n, i, o) {
      var a = r & YN,
        s = ov(e),
        c = s.length,
        f = ov(t),
        g = f.length;
      if (c != g && !a) return !1;
      for (var v = c; v--; ) {
        var _ = s[v];
        if (!(a ? _ in t : $N.call(t, _))) return !1;
      }
      var E = o.get(e),
        O = o.get(t);
      if (E && O) return E == t && O == e;
      var b = !0;
      o.set(e, t), o.set(t, e);
      for (var M = a; ++v < c; ) {
        _ = s[v];
        var A = e[_],
          w = t[_];
        if (n) var T = a ? n(w, A, _, t, e, o) : n(A, w, _, e, t, o);
        if (!(T === void 0 ? A === w || i(A, w, r, n, o) : T)) {
          b = !1;
          break;
        }
        M || (M = _ == "constructor");
      }
      if (b && !M) {
        var q = e.constructor,
          L = t.constructor;
        q != L &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof q == "function" &&
            q instanceof q &&
            typeof L == "function" &&
            L instanceof L
          ) &&
          (b = !1);
      }
      return o.delete(e), o.delete(t), b;
    }
    av.exports = ZN;
  });
  var cv = u((Fk, uv) => {
    var JN = At(),
      ex = Je(),
      tx = JN(ex, "DataView");
    uv.exports = tx;
  });
  var fv = u((Gk, lv) => {
    var rx = At(),
      nx = Je(),
      ix = rx(nx, "Promise");
    lv.exports = ix;
  });
  var pv = u((Uk, dv) => {
    var ox = At(),
      ax = Je(),
      sx = ox(ax, "Set");
    dv.exports = sx;
  });
  var ha = u((Xk, vv) => {
    var ux = At(),
      cx = Je(),
      lx = ux(cx, "WeakMap");
    vv.exports = lx;
  });
  var Qn = u((Wk, Iv) => {
    var Ea = cv(),
      ga = Xn(),
      _a = fv(),
      ya = pv(),
      ma = ha(),
      mv = bt(),
      fr = aa(),
      hv = "[object Map]",
      fx = "[object Object]",
      Ev = "[object Promise]",
      gv = "[object Set]",
      _v = "[object WeakMap]",
      yv = "[object DataView]",
      dx = fr(Ea),
      px = fr(ga),
      vx = fr(_a),
      hx = fr(ya),
      Ex = fr(ma),
      Ut = mv;
    ((Ea && Ut(new Ea(new ArrayBuffer(1))) != yv) ||
      (ga && Ut(new ga()) != hv) ||
      (_a && Ut(_a.resolve()) != Ev) ||
      (ya && Ut(new ya()) != gv) ||
      (ma && Ut(new ma()) != _v)) &&
      (Ut = function (e) {
        var t = mv(e),
          r = t == fx ? e.constructor : void 0,
          n = r ? fr(r) : "";
        if (n)
          switch (n) {
            case dx:
              return yv;
            case px:
              return hv;
            case vx:
              return Ev;
            case hx:
              return gv;
            case Ex:
              return _v;
          }
        return t;
      });
    Iv.exports = Ut;
  });
  var Cv = u((Vk, Rv) => {
    var Ia = sa(),
      gx = ua(),
      _x = _p(),
      yx = sv(),
      Tv = Qn(),
      Ov = xe(),
      bv = Hn(),
      mx = Kn(),
      Ix = 1,
      Av = "[object Arguments]",
      Sv = "[object Array]",
      $n = "[object Object]",
      Tx = Object.prototype,
      wv = Tx.hasOwnProperty;
    function Ox(e, t, r, n, i, o) {
      var a = Ov(e),
        s = Ov(t),
        c = a ? Sv : Tv(e),
        f = s ? Sv : Tv(t);
      (c = c == Av ? $n : c), (f = f == Av ? $n : f);
      var g = c == $n,
        v = f == $n,
        _ = c == f;
      if (_ && bv(e)) {
        if (!bv(t)) return !1;
        (a = !0), (g = !1);
      }
      if (_ && !g)
        return (
          o || (o = new Ia()),
          a || mx(e) ? gx(e, t, r, n, i, o) : _x(e, t, c, r, n, i, o)
        );
      if (!(r & Ix)) {
        var E = g && wv.call(e, "__wrapped__"),
          O = v && wv.call(t, "__wrapped__");
        if (E || O) {
          var b = E ? e.value() : e,
            M = O ? t.value() : t;
          return o || (o = new Ia()), i(b, M, r, n, o);
        }
      }
      return _ ? (o || (o = new Ia()), yx(e, t, r, n, i, o)) : !1;
    }
    Rv.exports = Ox;
  });
  var Ta = u((Bk, qv) => {
    var bx = Cv(),
      Nv = gt();
    function xv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Nv(e) && !Nv(t))
        ? e !== e && t !== t
        : bx(e, t, r, n, xv, i);
    }
    qv.exports = xv;
  });
  var Pv = u((Hk, Lv) => {
    var Ax = sa(),
      Sx = Ta(),
      wx = 1,
      Rx = 2;
    function Cx(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var c = s[0],
          f = e[c],
          g = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(c in e)) return !1;
        } else {
          var v = new Ax();
          if (n) var _ = n(f, g, c, e, t, v);
          if (!(_ === void 0 ? Sx(g, f, wx | Rx, n, v) : _)) return !1;
        }
      }
      return !0;
    }
    Lv.exports = Cx;
  });
  var Oa = u((kk, Dv) => {
    var Nx = lt();
    function xx(e) {
      return e === e && !Nx(e);
    }
    Dv.exports = xx;
  });
  var Fv = u((jk, Mv) => {
    var qx = Oa(),
      Lx = Kr();
    function Px(e) {
      for (var t = Lx(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, qx(i)];
      }
      return t;
    }
    Mv.exports = Px;
  });
  var ba = u((Kk, Gv) => {
    function Dx(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Gv.exports = Dx;
  });
  var Xv = u((zk, Uv) => {
    var Mx = Pv(),
      Fx = Fv(),
      Gx = ba();
    function Ux(e) {
      var t = Fx(e);
      return t.length == 1 && t[0][2]
        ? Gx(t[0][0], t[0][1])
        : function (r) {
            return r === e || Mx(r, e, t);
          };
    }
    Uv.exports = Ux;
  });
  var zr = u((Yk, Wv) => {
    var Xx = bt(),
      Wx = gt(),
      Vx = "[object Symbol]";
    function Bx(e) {
      return typeof e == "symbol" || (Wx(e) && Xx(e) == Vx);
    }
    Wv.exports = Bx;
  });
  var Zn = u((Qk, Vv) => {
    var Hx = xe(),
      kx = zr(),
      jx = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Kx = /^\w*$/;
    function zx(e, t) {
      if (Hx(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        kx(e)
        ? !0
        : Kx.test(e) || !jx.test(e) || (t != null && e in Object(t));
    }
    Vv.exports = zx;
  });
  var kv = u(($k, Hv) => {
    var Bv = Wn(),
      Yx = "Expected a function";
    function Aa(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(Yx);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (Aa.Cache || Bv)()), r;
    }
    Aa.Cache = Bv;
    Hv.exports = Aa;
  });
  var Kv = u((Zk, jv) => {
    var Qx = kv(),
      $x = 500;
    function Zx(e) {
      var t = Qx(e, function (n) {
          return r.size === $x && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    jv.exports = Zx;
  });
  var Yv = u((Jk, zv) => {
    var Jx = Kv(),
      eq =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      tq = /\\(\\)?/g,
      rq = Jx(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(eq, function (r, n, i, o) {
            t.push(i ? o.replace(tq, "$1") : n || r);
          }),
          t
        );
      });
    zv.exports = rq;
  });
  var Sa = u((e5, Qv) => {
    function nq(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    Qv.exports = nq;
  });
  var rh = u((t5, th) => {
    var $v = er(),
      iq = Sa(),
      oq = xe(),
      aq = zr(),
      sq = 1 / 0,
      Zv = $v ? $v.prototype : void 0,
      Jv = Zv ? Zv.toString : void 0;
    function eh(e) {
      if (typeof e == "string") return e;
      if (oq(e)) return iq(e, eh) + "";
      if (aq(e)) return Jv ? Jv.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -sq ? "-0" : t;
    }
    th.exports = eh;
  });
  var ih = u((r5, nh) => {
    var uq = rh();
    function cq(e) {
      return e == null ? "" : uq(e);
    }
    nh.exports = cq;
  });
  var Yr = u((n5, oh) => {
    var lq = xe(),
      fq = Zn(),
      dq = Yv(),
      pq = ih();
    function vq(e, t) {
      return lq(e) ? e : fq(e, t) ? [e] : dq(pq(e));
    }
    oh.exports = vq;
  });
  var dr = u((i5, ah) => {
    var hq = zr(),
      Eq = 1 / 0;
    function gq(e) {
      if (typeof e == "string" || hq(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -Eq ? "-0" : t;
    }
    ah.exports = gq;
  });
  var Jn = u((o5, sh) => {
    var _q = Yr(),
      yq = dr();
    function mq(e, t) {
      t = _q(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[yq(t[r++])];
      return r && r == n ? e : void 0;
    }
    sh.exports = mq;
  });
  var ei = u((a5, uh) => {
    var Iq = Jn();
    function Tq(e, t, r) {
      var n = e == null ? void 0 : Iq(e, t);
      return n === void 0 ? r : n;
    }
    uh.exports = Tq;
  });
  var lh = u((s5, ch) => {
    function Oq(e, t) {
      return e != null && t in Object(e);
    }
    ch.exports = Oq;
  });
  var dh = u((u5, fh) => {
    var bq = Yr(),
      Aq = Br(),
      Sq = xe(),
      wq = kn(),
      Rq = jn(),
      Cq = dr();
    function Nq(e, t, r) {
      t = bq(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = Cq(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && Rq(i) && wq(a, i) && (Sq(e) || Aq(e)));
    }
    fh.exports = Nq;
  });
  var vh = u((c5, ph) => {
    var xq = lh(),
      qq = dh();
    function Lq(e, t) {
      return e != null && qq(e, t, xq);
    }
    ph.exports = Lq;
  });
  var Eh = u((l5, hh) => {
    var Pq = Ta(),
      Dq = ei(),
      Mq = vh(),
      Fq = Zn(),
      Gq = Oa(),
      Uq = ba(),
      Xq = dr(),
      Wq = 1,
      Vq = 2;
    function Bq(e, t) {
      return Fq(e) && Gq(t)
        ? Uq(Xq(e), t)
        : function (r) {
            var n = Dq(r, e);
            return n === void 0 && n === t ? Mq(r, e) : Pq(t, n, Wq | Vq);
          };
    }
    hh.exports = Bq;
  });
  var ti = u((f5, gh) => {
    function Hq(e) {
      return e;
    }
    gh.exports = Hq;
  });
  var wa = u((d5, _h) => {
    function kq(e) {
      return function (t) {
        return t?.[e];
      };
    }
    _h.exports = kq;
  });
  var mh = u((p5, yh) => {
    var jq = Jn();
    function Kq(e) {
      return function (t) {
        return jq(t, e);
      };
    }
    yh.exports = Kq;
  });
  var Th = u((v5, Ih) => {
    var zq = wa(),
      Yq = mh(),
      Qq = Zn(),
      $q = dr();
    function Zq(e) {
      return Qq(e) ? zq($q(e)) : Yq(e);
    }
    Ih.exports = Zq;
  });
  var St = u((h5, Oh) => {
    var Jq = Xv(),
      eL = Eh(),
      tL = ti(),
      rL = xe(),
      nL = Th();
    function iL(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? tL
        : typeof e == "object"
        ? rL(e)
          ? eL(e[0], e[1])
          : Jq(e)
        : nL(e);
    }
    Oh.exports = iL;
  });
  var Ra = u((E5, bh) => {
    var oL = St(),
      aL = Gt(),
      sL = Kr();
    function uL(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!aL(t)) {
          var o = oL(r, 3);
          (t = sL(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    bh.exports = uL;
  });
  var Ca = u((g5, Ah) => {
    function cL(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Ah.exports = cL;
  });
  var wh = u((_5, Sh) => {
    var lL = /\s/;
    function fL(e) {
      for (var t = e.length; t-- && lL.test(e.charAt(t)); );
      return t;
    }
    Sh.exports = fL;
  });
  var Ch = u((y5, Rh) => {
    var dL = wh(),
      pL = /^\s+/;
    function vL(e) {
      return e && e.slice(0, dL(e) + 1).replace(pL, "");
    }
    Rh.exports = vL;
  });
  var ri = u((m5, qh) => {
    var hL = Ch(),
      Nh = lt(),
      EL = zr(),
      xh = 0 / 0,
      gL = /^[-+]0x[0-9a-f]+$/i,
      _L = /^0b[01]+$/i,
      yL = /^0o[0-7]+$/i,
      mL = parseInt;
    function IL(e) {
      if (typeof e == "number") return e;
      if (EL(e)) return xh;
      if (Nh(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Nh(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = hL(e);
      var r = _L.test(e);
      return r || yL.test(e) ? mL(e.slice(2), r ? 2 : 8) : gL.test(e) ? xh : +e;
    }
    qh.exports = IL;
  });
  var Dh = u((I5, Ph) => {
    var TL = ri(),
      Lh = 1 / 0,
      OL = 17976931348623157e292;
    function bL(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = TL(e)), e === Lh || e === -Lh)) {
        var t = e < 0 ? -1 : 1;
        return t * OL;
      }
      return e === e ? e : 0;
    }
    Ph.exports = bL;
  });
  var Na = u((T5, Mh) => {
    var AL = Dh();
    function SL(e) {
      var t = AL(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Mh.exports = SL;
  });
  var Gh = u((O5, Fh) => {
    var wL = Ca(),
      RL = St(),
      CL = Na(),
      NL = Math.max;
    function xL(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : CL(r);
      return i < 0 && (i = NL(n + i, 0)), wL(e, RL(t, 3), i);
    }
    Fh.exports = xL;
  });
  var xa = u((b5, Uh) => {
    var qL = Ra(),
      LL = Gh(),
      PL = qL(LL);
    Uh.exports = PL;
  });
  var ii = u((Fe) => {
    "use strict";
    var DL = st().default;
    Object.defineProperty(Fe, "__esModule", { value: !0 });
    Fe.withBrowser =
      Fe.TRANSFORM_STYLE_PREFIXED =
      Fe.TRANSFORM_PREFIXED =
      Fe.IS_BROWSER_ENV =
      Fe.FLEX_PREFIXED =
      Fe.ELEMENT_MATCHES =
        void 0;
    var ML = DL(xa()),
      Wh = typeof window < "u";
    Fe.IS_BROWSER_ENV = Wh;
    var ni = (e, t) => (Wh ? e() : t);
    Fe.withBrowser = ni;
    var FL = ni(() =>
      (0, ML.default)(
        [
          "matches",
          "matchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
          "webkitMatchesSelector",
        ],
        (e) => e in Element.prototype
      )
    );
    Fe.ELEMENT_MATCHES = FL;
    var GL = ni(() => {
      let e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        r = "";
      try {
        let { length: n } = t;
        for (let i = 0; i < n; i++) {
          let o = t[i];
          if (((e.style.display = o), e.style.display === o)) return o;
        }
        return r;
      } catch {
        return r;
      }
    }, "flex");
    Fe.FLEX_PREFIXED = GL;
    var Vh = ni(() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"],
          r = "Transform",
          { length: n } = t;
        for (let i = 0; i < n; i++) {
          let o = t[i] + r;
          if (e.style[o] !== void 0) return o;
        }
      }
      return "transform";
    }, "transform");
    Fe.TRANSFORM_PREFIXED = Vh;
    var Xh = Vh.split("transform")[0],
      UL = Xh ? Xh + "TransformStyle" : "transformStyle";
    Fe.TRANSFORM_STYLE_PREFIXED = UL;
  });
  var qa = u((S5, Kh) => {
    var XL = 4,
      WL = 0.001,
      VL = 1e-7,
      BL = 10,
      Qr = 11,
      oi = 1 / (Qr - 1),
      HL = typeof Float32Array == "function";
    function Bh(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Hh(e, t) {
      return 3 * t - 6 * e;
    }
    function kh(e) {
      return 3 * e;
    }
    function ai(e, t, r) {
      return ((Bh(t, r) * e + Hh(t, r)) * e + kh(t)) * e;
    }
    function jh(e, t, r) {
      return 3 * Bh(t, r) * e * e + 2 * Hh(t, r) * e + kh(t);
    }
    function kL(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = ai(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > VL && ++s < BL);
      return a;
    }
    function jL(e, t, r, n) {
      for (var i = 0; i < XL; ++i) {
        var o = jh(t, r, n);
        if (o === 0) return t;
        var a = ai(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    Kh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = HL ? new Float32Array(Qr) : new Array(Qr);
      if (t !== r || n !== i)
        for (var a = 0; a < Qr; ++a) o[a] = ai(a * oi, t, n);
      function s(c) {
        for (var f = 0, g = 1, v = Qr - 1; g !== v && o[g] <= c; ++g) f += oi;
        --g;
        var _ = (c - o[g]) / (o[g + 1] - o[g]),
          E = f + _ * oi,
          O = jh(E, t, n);
        return O >= WL ? jL(c, E, t, n) : O === 0 ? E : kL(c, f, f + oi, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : ai(s(f), r, i);
      };
    };
  });
  var La = u((ae) => {
    "use strict";
    var KL = st().default;
    Object.defineProperty(ae, "__esModule", { value: !0 });
    ae.bounce = CP;
    ae.bouncePast = NP;
    ae.easeOut = ae.easeInOut = ae.easeIn = ae.ease = void 0;
    ae.inBack = mP;
    ae.inCirc = EP;
    ae.inCubic = tP;
    ae.inElastic = OP;
    ae.inExpo = pP;
    ae.inOutBack = TP;
    ae.inOutCirc = _P;
    ae.inOutCubic = nP;
    ae.inOutElastic = AP;
    ae.inOutExpo = hP;
    ae.inOutQuad = eP;
    ae.inOutQuart = aP;
    ae.inOutQuint = cP;
    ae.inOutSine = dP;
    ae.inQuad = ZL;
    ae.inQuart = iP;
    ae.inQuint = sP;
    ae.inSine = lP;
    ae.outBack = IP;
    ae.outBounce = yP;
    ae.outCirc = gP;
    ae.outCubic = rP;
    ae.outElastic = bP;
    ae.outExpo = vP;
    ae.outQuad = JL;
    ae.outQuart = oP;
    ae.outQuint = uP;
    ae.outSine = fP;
    ae.swingFrom = wP;
    ae.swingFromTo = SP;
    ae.swingTo = RP;
    var si = KL(qa()),
      yt = 1.70158,
      zL = (0, si.default)(0.25, 0.1, 0.25, 1);
    ae.ease = zL;
    var YL = (0, si.default)(0.42, 0, 1, 1);
    ae.easeIn = YL;
    var QL = (0, si.default)(0, 0, 0.58, 1);
    ae.easeOut = QL;
    var $L = (0, si.default)(0.42, 0, 0.58, 1);
    ae.easeInOut = $L;
    function ZL(e) {
      return Math.pow(e, 2);
    }
    function JL(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function eP(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function tP(e) {
      return Math.pow(e, 3);
    }
    function rP(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function nP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function iP(e) {
      return Math.pow(e, 4);
    }
    function oP(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function aP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function sP(e) {
      return Math.pow(e, 5);
    }
    function uP(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function cP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function lP(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function fP(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function dP(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function pP(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function vP(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function hP(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function EP(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function gP(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function _P(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function yP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function mP(e) {
      let t = yt;
      return e * e * ((t + 1) * e - t);
    }
    function IP(e) {
      let t = yt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function TP(e) {
      let t = yt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function OP(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
    }
    function bP(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) +
            1);
    }
    function AP(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
              (n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) *
                0.5 +
              1);
    }
    function SP(e) {
      let t = yt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function wP(e) {
      let t = yt;
      return e * e * ((t + 1) * e - t);
    }
    function RP(e) {
      let t = yt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function CP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function NP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var Da = u(($r) => {
    "use strict";
    var xP = st().default,
      qP = Qt().default;
    Object.defineProperty($r, "__esModule", { value: !0 });
    $r.applyEasing = DP;
    $r.createBezierEasing = PP;
    $r.optimizeFloat = Pa;
    var zh = qP(La()),
      LP = xP(qa());
    function Pa(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        i = Number(Math.round(e * n) / n);
      return Math.abs(i) > 1e-4 ? i : 0;
    }
    function PP(e) {
      return (0, LP.default)(...e);
    }
    function DP(e, t, r) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : Pa(r ? (t > 0 ? r(t) : t) : t > 0 && e && zh[e] ? zh[e](t) : t);
    }
  });
  var Zh = u((pr) => {
    "use strict";
    Object.defineProperty(pr, "__esModule", { value: !0 });
    pr.createElementState = $h;
    pr.ixElements = void 0;
    pr.mergeActionState = Ma;
    var ui = ir(),
      Qh = Ve(),
      {
        HTML_ELEMENT: C5,
        PLAIN_OBJECT: MP,
        ABSTRACT_NODE: N5,
        CONFIG_X_VALUE: FP,
        CONFIG_Y_VALUE: GP,
        CONFIG_Z_VALUE: UP,
        CONFIG_VALUE: XP,
        CONFIG_X_UNIT: WP,
        CONFIG_Y_UNIT: VP,
        CONFIG_Z_UNIT: BP,
        CONFIG_UNIT: HP,
      } = Qh.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: kP,
        IX2_INSTANCE_ADDED: jP,
        IX2_ELEMENT_STATE_CHANGED: KP,
      } = Qh.IX2EngineActionTypes,
      Yh = {},
      zP = "refState",
      YP = (e = Yh, t = {}) => {
        switch (t.type) {
          case kP:
            return Yh;
          case jP: {
            let {
                elementId: r,
                element: n,
                origin: i,
                actionItem: o,
                refType: a,
              } = t.payload,
              { actionTypeId: s } = o,
              c = e;
            return (
              (0, ui.getIn)(c, [r, n]) !== n && (c = $h(c, n, a, r, o)),
              Ma(c, r, s, i, o)
            );
          }
          case KP: {
            let {
              elementId: r,
              actionTypeId: n,
              current: i,
              actionItem: o,
            } = t.payload;
            return Ma(e, r, n, i, o);
          }
          default:
            return e;
        }
      };
    pr.ixElements = YP;
    function $h(e, t, r, n, i) {
      let o =
        r === MP ? (0, ui.getIn)(i, ["config", "target", "objectId"]) : null;
      return (0, ui.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
    }
    function Ma(e, t, r, n, i) {
      let o = $P(i),
        a = [t, zP, r];
      return (0, ui.mergeIn)(e, a, n, o);
    }
    var QP = [
      [FP, WP],
      [GP, VP],
      [UP, BP],
      [XP, HP],
    ];
    function $P(e) {
      let { config: t } = e;
      return QP.reduce((r, n) => {
        let i = n[0],
          o = n[1],
          a = t[i],
          s = t[o];
        return a != null && s != null && (r[o] = s), r;
      }, {});
    }
  });
  var Jh = u((qe) => {
    "use strict";
    Object.defineProperty(qe, "__esModule", { value: !0 });
    qe.renderPlugin =
      qe.getPluginOrigin =
      qe.getPluginDuration =
      qe.getPluginDestination =
      qe.getPluginConfig =
      qe.createPluginInstance =
      qe.clearPlugin =
        void 0;
    var ZP = (e) => e.value;
    qe.getPluginConfig = ZP;
    var JP = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    qe.getPluginDuration = JP;
    var eD = (e) => e || { value: 0 };
    qe.getPluginOrigin = eD;
    var tD = (e) => ({ value: e.value });
    qe.getPluginDestination = tD;
    var rD = (e) => {
      let t = window.spacelDevelopment.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    qe.createPluginInstance = rD;
    var nD = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    qe.renderPlugin = nD;
    var iD = (e) => {
      window.spacelDevelopment.require("lottie").createInstance(e).stop();
    };
    qe.clearPlugin = iD;
  });
  var Fa = u((Ce) => {
    "use strict";
    Object.defineProperty(Ce, "__esModule", { value: !0 });
    Ce.getPluginOrigin =
      Ce.getPluginDuration =
      Ce.getPluginDestination =
      Ce.getPluginConfig =
      Ce.createPluginInstance =
      Ce.clearPlugin =
        void 0;
    Ce.isPluginType = sD;
    Ce.renderPlugin = void 0;
    var Xt = Jh(),
      eE = Ve(),
      oD = ii(),
      aD = {
        [eE.ActionTypeConsts.PLUGIN_LOTTIE]: {
          getConfig: Xt.getPluginConfig,
          getOrigin: Xt.getPluginOrigin,
          getDuration: Xt.getPluginDuration,
          getDestination: Xt.getPluginDestination,
          createInstance: Xt.createPluginInstance,
          render: Xt.renderPlugin,
          clear: Xt.clearPlugin,
        },
      };
    function sD(e) {
      return e === eE.ActionTypeConsts.PLUGIN_LOTTIE;
    }
    var Wt = (e) => (t) => {
        if (!oD.IS_BROWSER_ENV) return () => null;
        let r = aD[t];
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      },
      uD = Wt("getConfig");
    Ce.getPluginConfig = uD;
    var cD = Wt("getOrigin");
    Ce.getPluginOrigin = cD;
    var lD = Wt("getDuration");
    Ce.getPluginDuration = lD;
    var fD = Wt("getDestination");
    Ce.getPluginDestination = fD;
    var dD = Wt("createInstance");
    Ce.createPluginInstance = dD;
    var pD = Wt("render");
    Ce.renderPlugin = pD;
    var vD = Wt("clear");
    Ce.clearPlugin = vD;
  });
  var rE = u((P5, tE) => {
    function hD(e, t) {
      return e == null || e !== e ? t : e;
    }
    tE.exports = hD;
  });
  var iE = u((D5, nE) => {
    function ED(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    nE.exports = ED;
  });
  var aE = u((M5, oE) => {
    function gD(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var c = a[e ? s : ++i];
          if (r(o[c], c, o) === !1) break;
        }
        return t;
      };
    }
    oE.exports = gD;
  });
  var uE = u((F5, sE) => {
    var _D = aE(),
      yD = _D();
    sE.exports = yD;
  });
  var Ga = u((G5, cE) => {
    var mD = uE(),
      ID = Kr();
    function TD(e, t) {
      return e && mD(e, t, ID);
    }
    cE.exports = TD;
  });
  var fE = u((U5, lE) => {
    var OD = Gt();
    function bD(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!OD(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    lE.exports = bD;
  });
  var Ua = u((X5, dE) => {
    var AD = Ga(),
      SD = fE(),
      wD = SD(AD);
    dE.exports = wD;
  });
  var vE = u((W5, pE) => {
    function RD(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    pE.exports = RD;
  });
  var EE = u((V5, hE) => {
    var CD = iE(),
      ND = Ua(),
      xD = St(),
      qD = vE(),
      LD = xe();
    function PD(e, t, r) {
      var n = LD(e) ? CD : qD,
        i = arguments.length < 3;
      return n(e, xD(t, 4), r, i, ND);
    }
    hE.exports = PD;
  });
  var _E = u((B5, gE) => {
    var DD = Ca(),
      MD = St(),
      FD = Na(),
      GD = Math.max,
      UD = Math.min;
    function XD(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = FD(r)), (i = r < 0 ? GD(n + i, 0) : UD(i, n - 1))),
        DD(e, MD(t, 3), i, !0)
      );
    }
    gE.exports = XD;
  });
  var mE = u((H5, yE) => {
    var WD = Ra(),
      VD = _E(),
      BD = WD(VD);
    yE.exports = BD;
  });
  var TE = u((ci) => {
    "use strict";
    Object.defineProperty(ci, "__esModule", { value: !0 });
    ci.default = void 0;
    var HD = Object.prototype.hasOwnProperty;
    function IE(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function kD(e, t) {
      if (IE(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let i = 0; i < r.length; i++)
        if (!HD.call(t, r[i]) || !IE(e[r[i]], t[r[i]])) return !1;
      return !0;
    }
    var jD = kD;
    ci.default = jD;
  });
  var BE = u((ge) => {
    "use strict";
    var di = st().default;
    Object.defineProperty(ge, "__esModule", { value: !0 });
    ge.cleanupHTMLElement = BM;
    ge.clearAllStyles = VM;
    ge.getActionListProgress = kM;
    ge.getAffectedElements = ka;
    ge.getComputedStyle = gM;
    ge.getDestinationValues = bM;
    ge.getElementId = pM;
    ge.getInstanceId = fM;
    ge.getInstanceOrigin = mM;
    ge.getItemConfigByKey = void 0;
    ge.getMaxDurationItemIndex = VE;
    ge.getNamespacedParameterId = zM;
    ge.getRenderType = UE;
    ge.getStyleProp = AM;
    ge.mediaQueriesEqual = QM;
    ge.observeStore = EM;
    ge.reduceListToGroup = jM;
    ge.reifyState = vM;
    ge.renderHTMLElement = SM;
    Object.defineProperty(ge, "shallowEqual", {
      enumerable: !0,
      get: function () {
        return qE.default;
      },
    });
    ge.shouldAllowMediaQuery = YM;
    ge.shouldNamespaceEventParameter = KM;
    ge.stringifyTarget = $M;
    var wt = di(rE()),
      Wa = di(EE()),
      Xa = di(mE()),
      OE = ir(),
      Vt = Ve(),
      qE = di(TE()),
      KD = Da(),
      pt = Fa(),
      Ge = ii(),
      {
        BACKGROUND: zD,
        TRANSFORM: YD,
        TRANSLATE_3D: QD,
        SCALE_3D: $D,
        ROTATE_X: ZD,
        ROTATE_Y: JD,
        ROTATE_Z: eM,
        SKEW: tM,
        PRESERVE_3D: rM,
        FLEX: nM,
        OPACITY: li,
        FILTER: Zr,
        FONT_VARIATION_SETTINGS: Jr,
        WIDTH: ft,
        HEIGHT: dt,
        BACKGROUND_COLOR: LE,
        BORDER_COLOR: iM,
        COLOR: oM,
        CHILDREN: bE,
        IMMEDIATE_CHILDREN: aM,
        SIBLINGS: AE,
        PARENT: sM,
        DISPLAY: fi,
        WILL_CHANGE: vr,
        AUTO: Rt,
        COMMA_DELIMITER: en,
        COLON_DELIMITER: uM,
        BAR_DELIMITER: SE,
        RENDER_TRANSFORM: PE,
        RENDER_GENERAL: Va,
        RENDER_STYLE: Ba,
        RENDER_PLUGIN: DE,
      } = Vt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: hr,
        TRANSFORM_SCALE: Er,
        TRANSFORM_ROTATE: gr,
        TRANSFORM_SKEW: tn,
        STYLE_OPACITY: ME,
        STYLE_FILTER: rn,
        STYLE_FONT_VARIATION: nn,
        STYLE_SIZE: _r,
        STYLE_BACKGROUND_COLOR: yr,
        STYLE_BORDER: mr,
        STYLE_TEXT_COLOR: Ir,
        GENERAL_DISPLAY: pi,
      } = Vt.ActionTypeConsts,
      cM = "OBJECT_VALUE",
      FE = (e) => e.trim(),
      Ha = Object.freeze({ [yr]: LE, [mr]: iM, [Ir]: oM }),
      GE = Object.freeze({
        [Ge.TRANSFORM_PREFIXED]: YD,
        [LE]: zD,
        [li]: li,
        [Zr]: Zr,
        [ft]: ft,
        [dt]: dt,
        [Jr]: Jr,
      }),
      wE = {},
      lM = 1;
    function fM() {
      return "i" + lM++;
    }
    var dM = 1;
    function pM(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id;
      }
      return "e" + dM++;
    }
    function vM({ events: e, actionLists: t, site: r } = {}) {
      let n = (0, Wa.default)(
          e,
          (a, s) => {
            let { eventTypeId: c } = s;
            return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
          },
          {}
        ),
        i = r && r.mediaQueries,
        o = [];
      return (
        i
          ? (o = i.map((a) => a.key))
          : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: n,
            mediaQueries: i,
            mediaQueryKeys: o,
          },
        }
      );
    }
    var hM = (e, t) => e === t;
    function EM({ store: e, select: t, onChange: r, comparator: n = hM }) {
      let { getState: i, subscribe: o } = e,
        a = o(c),
        s = t(i());
      function c() {
        let f = t(i());
        if (f == null) {
          a();
          return;
        }
        n(f, s) || ((s = f), r(s, e));
      }
      return a;
    }
    function RE(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: o,
          appliesTo: a,
          useEventTarget: s,
        } = e;
        return {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: o,
          appliesTo: a,
          useEventTarget: s,
        };
      }
      return {};
    }
    function ka({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: i,
    }) {
      var o, a, s;
      if (!i) throw new Error("IX2 missing elementApi");
      let { targets: c } = e;
      if (Array.isArray(c) && c.length > 0)
        return c.reduce(
          (x, U) =>
            x.concat(
              ka({
                config: { target: U },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: i,
              })
            ),
          []
        );
      let {
          getValidDocument: f,
          getQuerySelector: g,
          queryDocument: v,
          getChildElements: _,
          getSiblingElements: E,
          matchSelector: O,
          elementContains: b,
          isSiblingNode: M,
        } = i,
        { target: A } = e;
      if (!A) return [];
      let {
        id: w,
        objectId: T,
        selector: q,
        selectorGuids: L,
        appliesTo: D,
        useEventTarget: V,
      } = RE(A);
      if (T) return [wE[T] || (wE[T] = {})];
      if (D === Vt.EventAppliesTo.PAGE) {
        let x = f(w);
        return x ? [x] : [];
      }
      let Z =
          ((o =
            t == null ||
            (a = t.action) === null ||
            a === void 0 ||
            (s = a.config) === null ||
            s === void 0
              ? void 0
              : s.affectedElements) !== null && o !== void 0
            ? o
            : {})[w || q] || {},
        ie = !!(Z.id || Z.selector),
        W,
        R,
        p,
        F = t && g(RE(t.target));
      if (
        (ie
          ? ((W = Z.limitAffectedElements), (R = F), (p = g(Z)))
          : (R = p = g({ id: w, selector: q, selectorGuids: L })),
        t && V)
      ) {
        let x = r && (p || V === !0) ? [r] : v(F);
        if (p) {
          if (V === sM) return v(p).filter((U) => x.some((J) => b(U, J)));
          if (V === bE) return v(p).filter((U) => x.some((J) => b(J, U)));
          if (V === AE) return v(p).filter((U) => x.some((J) => M(J, U)));
        }
        return x;
      }
      return R == null || p == null
        ? []
        : Ge.IS_BROWSER_ENV && n
        ? v(p).filter((x) => n.contains(x))
        : W === bE
        ? v(R, p)
        : W === aM
        ? _(v(R)).filter(O(p))
        : W === AE
        ? E(v(R)).filter(O(p))
        : v(p);
    }
    function gM({ element: e, actionItem: t }) {
      if (!Ge.IS_BROWSER_ENV) return {};
      let { actionTypeId: r } = t;
      switch (r) {
        case _r:
        case yr:
        case mr:
        case Ir:
        case pi:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var CE = /px/,
      _M = (e, t) =>
        t.reduce(
          (r, n) => (r[n.type] == null && (r[n.type] = wM[n.type]), r),
          e || {}
        ),
      yM = (e, t) =>
        t.reduce(
          (r, n) => (
            r[n.type] == null &&
              (r[n.type] = RM[n.type] || n.defaultValue || 0),
            r
          ),
          e || {}
        );
    function mM(e, t = {}, r = {}, n, i) {
      let { getStyle: o } = i,
        { actionTypeId: a } = n;
      if ((0, pt.isPluginType)(a)) return (0, pt.getPluginOrigin)(a)(t[a]);
      switch (n.actionTypeId) {
        case hr:
        case Er:
        case gr:
        case tn:
          return t[n.actionTypeId] || ja[n.actionTypeId];
        case rn:
          return _M(t[n.actionTypeId], n.config.filters);
        case nn:
          return yM(t[n.actionTypeId], n.config.fontVariations);
        case ME:
          return { value: (0, wt.default)(parseFloat(o(e, li)), 1) };
        case _r: {
          let s = o(e, ft),
            c = o(e, dt),
            f,
            g;
          return (
            n.config.widthUnit === Rt
              ? (f = CE.test(s) ? parseFloat(s) : parseFloat(r.width))
              : (f = (0, wt.default)(parseFloat(s), parseFloat(r.width))),
            n.config.heightUnit === Rt
              ? (g = CE.test(c) ? parseFloat(c) : parseFloat(r.height))
              : (g = (0, wt.default)(parseFloat(c), parseFloat(r.height))),
            { widthValue: f, heightValue: g }
          );
        }
        case yr:
        case mr:
        case Ir:
          return UM({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: o,
          });
        case pi:
          return { value: (0, wt.default)(o(e, fi), r.display) };
        case cM:
          return t[n.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var IM = (e, t) => (t && (e[t.type] = t.value || 0), e),
      TM = (e, t) => (t && (e[t.type] = t.value || 0), e),
      OM = (e, t, r) => {
        if ((0, pt.isPluginType)(e)) return (0, pt.getPluginConfig)(e)(r, t);
        switch (e) {
          case rn: {
            let n = (0, Xa.default)(r.filters, ({ type: i }) => i === t);
            return n ? n.value : 0;
          }
          case nn: {
            let n = (0, Xa.default)(r.fontVariations, ({ type: i }) => i === t);
            return n ? n.value : 0;
          }
          default:
            return r[t];
        }
      };
    ge.getItemConfigByKey = OM;
    function bM({ element: e, actionItem: t, elementApi: r }) {
      if ((0, pt.isPluginType)(t.actionTypeId))
        return (0, pt.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case hr:
        case Er:
        case gr:
        case tn: {
          let { xValue: n, yValue: i, zValue: o } = t.config;
          return { xValue: n, yValue: i, zValue: o };
        }
        case _r: {
          let { getStyle: n, setStyle: i, getProperty: o } = r,
            { widthUnit: a, heightUnit: s } = t.config,
            { widthValue: c, heightValue: f } = t.config;
          if (!Ge.IS_BROWSER_ENV) return { widthValue: c, heightValue: f };
          if (a === Rt) {
            let g = n(e, ft);
            i(e, ft, ""), (c = o(e, "offsetWidth")), i(e, ft, g);
          }
          if (s === Rt) {
            let g = n(e, dt);
            i(e, dt, ""), (f = o(e, "offsetHeight")), i(e, dt, g);
          }
          return { widthValue: c, heightValue: f };
        }
        case yr:
        case mr:
        case Ir: {
          let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
          return { rValue: n, gValue: i, bValue: o, aValue: a };
        }
        case rn:
          return t.config.filters.reduce(IM, {});
        case nn:
          return t.config.fontVariations.reduce(TM, {});
        default: {
          let { value: n } = t.config;
          return { value: n };
        }
      }
    }
    function UE(e) {
      if (/^TRANSFORM_/.test(e)) return PE;
      if (/^STYLE_/.test(e)) return Ba;
      if (/^GENERAL_/.test(e)) return Va;
      if (/^PLUGIN_/.test(e)) return DE;
    }
    function AM(e, t) {
      return e === Ba ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function SM(e, t, r, n, i, o, a, s, c) {
      switch (s) {
        case PE:
          return xM(e, t, r, i, a);
        case Ba:
          return XM(e, t, r, i, o, a);
        case Va:
          return WM(e, i, a);
        case DE: {
          let { actionTypeId: f } = i;
          if ((0, pt.isPluginType)(f)) return (0, pt.renderPlugin)(f)(c, t, i);
        }
      }
    }
    var ja = {
        [hr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Er]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [gr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [tn]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      wM = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      RM = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      CM = (e, t) => {
        let r = (0, Xa.default)(t.filters, ({ type: n }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      NM = Object.keys(ja);
    function xM(e, t, r, n, i) {
      let o = NM.map((s) => {
          let c = ja[s],
            {
              xValue: f = c.xValue,
              yValue: g = c.yValue,
              zValue: v = c.zValue,
              xUnit: _ = "",
              yUnit: E = "",
              zUnit: O = "",
            } = t[s] || {};
          switch (s) {
            case hr:
              return `${QD}(${f}${_}, ${g}${E}, ${v}${O})`;
            case Er:
              return `${$D}(${f}${_}, ${g}${E}, ${v}${O})`;
            case gr:
              return `${ZD}(${f}${_}) ${JD}(${g}${E}) ${eM}(${v}${O})`;
            case tn:
              return `${tM}(${f}${_}, ${g}${E})`;
            default:
              return "";
          }
        }).join(" "),
        { setStyle: a } = i;
      Bt(e, Ge.TRANSFORM_PREFIXED, i),
        a(e, Ge.TRANSFORM_PREFIXED, o),
        PM(n, r) && a(e, Ge.TRANSFORM_STYLE_PREFIXED, rM);
    }
    function qM(e, t, r, n) {
      let i = (0, Wa.default)(t, (a, s, c) => `${a} ${c}(${s}${CM(c, r)})`, ""),
        { setStyle: o } = n;
      Bt(e, Zr, n), o(e, Zr, i);
    }
    function LM(e, t, r, n) {
      let i = (0, Wa.default)(
          t,
          (a, s, c) => (a.push(`"${c}" ${s}`), a),
          []
        ).join(", "),
        { setStyle: o } = n;
      Bt(e, Jr, n), o(e, Jr, i);
    }
    function PM({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
      return (
        (e === hr && n !== void 0) ||
        (e === Er && n !== void 0) ||
        (e === gr && (t !== void 0 || r !== void 0))
      );
    }
    var DM = "\\(([^)]+)\\)",
      MM = /^rgb/,
      FM = RegExp(`rgba?${DM}`);
    function GM(e, t) {
      let r = e.exec(t);
      return r ? r[1] : "";
    }
    function UM({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n,
    }) {
      let i = Ha[t],
        o = n(e, i),
        a = MM.test(o) ? o : r[i],
        s = GM(FM, a).split(en);
      return {
        rValue: (0, wt.default)(parseInt(s[0], 10), 255),
        gValue: (0, wt.default)(parseInt(s[1], 10), 255),
        bValue: (0, wt.default)(parseInt(s[2], 10), 255),
        aValue: (0, wt.default)(parseFloat(s[3]), 1),
      };
    }
    function XM(e, t, r, n, i, o) {
      let { setStyle: a } = o;
      switch (n.actionTypeId) {
        case _r: {
          let { widthUnit: s = "", heightUnit: c = "" } = n.config,
            { widthValue: f, heightValue: g } = r;
          f !== void 0 &&
            (s === Rt && (s = "px"), Bt(e, ft, o), a(e, ft, f + s)),
            g !== void 0 &&
              (c === Rt && (c = "px"), Bt(e, dt, o), a(e, dt, g + c));
          break;
        }
        case rn: {
          qM(e, r, n.config, o);
          break;
        }
        case nn: {
          LM(e, r, n.config, o);
          break;
        }
        case yr:
        case mr:
        case Ir: {
          let s = Ha[n.actionTypeId],
            c = Math.round(r.rValue),
            f = Math.round(r.gValue),
            g = Math.round(r.bValue),
            v = r.aValue;
          Bt(e, s, o),
            a(
              e,
              s,
              v >= 1 ? `rgb(${c},${f},${g})` : `rgba(${c},${f},${g},${v})`
            );
          break;
        }
        default: {
          let { unit: s = "" } = n.config;
          Bt(e, i, o), a(e, i, r.value + s);
          break;
        }
      }
    }
    function WM(e, t, r) {
      let { setStyle: n } = r;
      switch (t.actionTypeId) {
        case pi: {
          let { value: i } = t.config;
          i === nM && Ge.IS_BROWSER_ENV
            ? n(e, fi, Ge.FLEX_PREFIXED)
            : n(e, fi, i);
          return;
        }
      }
    }
    function Bt(e, t, r) {
      if (!Ge.IS_BROWSER_ENV) return;
      let n = GE[t];
      if (!n) return;
      let { getStyle: i, setStyle: o } = r,
        a = i(e, vr);
      if (!a) {
        o(e, vr, n);
        return;
      }
      let s = a.split(en).map(FE);
      s.indexOf(n) === -1 && o(e, vr, s.concat(n).join(en));
    }
    function XE(e, t, r) {
      if (!Ge.IS_BROWSER_ENV) return;
      let n = GE[t];
      if (!n) return;
      let { getStyle: i, setStyle: o } = r,
        a = i(e, vr);
      !a ||
        a.indexOf(n) === -1 ||
        o(
          e,
          vr,
          a
            .split(en)
            .map(FE)
            .filter((s) => s !== n)
            .join(en)
        );
    }
    function VM({ store: e, elementApi: t }) {
      let { ixData: r } = e.getState(),
        { events: n = {}, actionLists: i = {} } = r;
      Object.keys(n).forEach((o) => {
        let a = n[o],
          { config: s } = a.action,
          { actionListId: c } = s,
          f = i[c];
        f && NE({ actionList: f, event: a, elementApi: t });
      }),
        Object.keys(i).forEach((o) => {
          NE({ actionList: i[o], elementApi: t });
        });
    }
    function NE({ actionList: e = {}, event: t, elementApi: r }) {
      let { actionItemGroups: n, continuousParameterGroups: i } = e;
      n &&
        n.forEach((o) => {
          xE({ actionGroup: o, event: t, elementApi: r });
        }),
        i &&
          i.forEach((o) => {
            let { continuousActionGroups: a } = o;
            a.forEach((s) => {
              xE({ actionGroup: s, event: t, elementApi: r });
            });
          });
    }
    function xE({ actionGroup: e, event: t, elementApi: r }) {
      let { actionItems: n } = e;
      n.forEach(({ actionTypeId: i, config: o }) => {
        let a;
        (0, pt.isPluginType)(i)
          ? (a = (0, pt.clearPlugin)(i))
          : (a = WE({ effect: HM, actionTypeId: i, elementApi: r })),
          ka({ config: o, event: t, elementApi: r }).forEach(a);
      });
    }
    function BM(e, t, r) {
      let { setStyle: n, getStyle: i } = r,
        { actionTypeId: o } = t;
      if (o === _r) {
        let { config: a } = t;
        a.widthUnit === Rt && n(e, ft, ""), a.heightUnit === Rt && n(e, dt, "");
      }
      i(e, vr) && WE({ effect: XE, actionTypeId: o, elementApi: r })(e);
    }
    var WE =
      ({ effect: e, actionTypeId: t, elementApi: r }) =>
      (n) => {
        switch (t) {
          case hr:
          case Er:
          case gr:
          case tn:
            e(n, Ge.TRANSFORM_PREFIXED, r);
            break;
          case rn:
            e(n, Zr, r);
            break;
          case nn:
            e(n, Jr, r);
            break;
          case ME:
            e(n, li, r);
            break;
          case _r:
            e(n, ft, r), e(n, dt, r);
            break;
          case yr:
          case mr:
          case Ir:
            e(n, Ha[t], r);
            break;
          case pi:
            e(n, fi, r);
            break;
        }
      };
    function HM(e, t, r) {
      let { setStyle: n } = r;
      XE(e, t, r),
        n(e, t, ""),
        t === Ge.TRANSFORM_PREFIXED && n(e, Ge.TRANSFORM_STYLE_PREFIXED, "");
    }
    function VE(e) {
      let t = 0,
        r = 0;
      return (
        e.forEach((n, i) => {
          let { config: o } = n,
            a = o.delay + o.duration;
          a >= t && ((t = a), (r = i));
        }),
        r
      );
    }
    function kM(e, t) {
      let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
        { actionItem: i, verboseTimeElapsed: o = 0 } = t,
        a = 0,
        s = 0;
      return (
        r.forEach((c, f) => {
          if (n && f === 0) return;
          let { actionItems: g } = c,
            v = g[VE(g)],
            { config: _, actionTypeId: E } = v;
          i.id === v.id && (s = a + o);
          let O = UE(E) === Va ? 0 : _.duration;
          a += _.delay + O;
        }),
        a > 0 ? (0, KD.optimizeFloat)(s / a) : 0
      );
    }
    function jM({ actionList: e, actionItemId: t, rawData: r }) {
      let { actionItemGroups: n, continuousParameterGroups: i } = e,
        o = [],
        a = (s) => (
          o.push((0, OE.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
          s.id === t
        );
      return (
        n && n.some(({ actionItems: s }) => s.some(a)),
        i &&
          i.some((s) => {
            let { continuousActionGroups: c } = s;
            return c.some(({ actionItems: f }) => f.some(a));
          }),
        (0, OE.setIn)(r, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
        })
      );
    }
    function KM(e, { basedOn: t }) {
      return (
        (e === Vt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === Vt.EventBasedOn.ELEMENT || t == null)) ||
        (e === Vt.EventTypeConsts.MOUSE_MOVE && t === Vt.EventBasedOn.ELEMENT)
      );
    }
    function zM(e, t) {
      return e + uM + t;
    }
    function YM(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function QM(e, t) {
      return (0, qE.default)(e && e.sort(), t && t.sort());
    }
    function $M(e) {
      if (typeof e == "string") return e;
      let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
      return t + SE + r + SE + n;
    }
  });
  var Ht = u((Ue) => {
    "use strict";
    var Tr = Qt().default;
    Object.defineProperty(Ue, "__esModule", { value: !0 });
    Ue.IX2VanillaUtils =
      Ue.IX2VanillaPlugins =
      Ue.IX2ElementsReducer =
      Ue.IX2Easings =
      Ue.IX2EasingUtils =
      Ue.IX2BrowserSupport =
        void 0;
    var ZM = Tr(ii());
    Ue.IX2BrowserSupport = ZM;
    var JM = Tr(La());
    Ue.IX2Easings = JM;
    var e1 = Tr(Da());
    Ue.IX2EasingUtils = e1;
    var t1 = Tr(Zh());
    Ue.IX2ElementsReducer = t1;
    var r1 = Tr(Fa());
    Ue.IX2VanillaPlugins = r1;
    var n1 = Tr(BE());
    Ue.IX2VanillaUtils = n1;
  });
  var KE = u((hi) => {
    "use strict";
    Object.defineProperty(hi, "__esModule", { value: !0 });
    hi.ixInstances = void 0;
    var HE = Ve(),
      kE = Ht(),
      Or = ir(),
      {
        IX2_RAW_DATA_IMPORTED: i1,
        IX2_SESSION_STOPPED: o1,
        IX2_INSTANCE_ADDED: a1,
        IX2_INSTANCE_STARTED: s1,
        IX2_INSTANCE_REMOVED: u1,
        IX2_ANIMATION_FRAME_CHANGED: c1,
      } = HE.IX2EngineActionTypes,
      {
        optimizeFloat: vi,
        applyEasing: jE,
        createBezierEasing: l1,
      } = kE.IX2EasingUtils,
      { RENDER_GENERAL: f1 } = HE.IX2EngineConstants,
      {
        getItemConfigByKey: Ka,
        getRenderType: d1,
        getStyleProp: p1,
      } = kE.IX2VanillaUtils,
      v1 = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: i,
            destinationKeys: o,
            smoothing: a,
            restingValue: s,
            actionTypeId: c,
            customEasingFn: f,
            skipMotion: g,
            skipToValue: v,
          } = e,
          { parameters: _ } = t.payload,
          E = Math.max(1 - a, 0.01),
          O = _[n];
        O == null && ((E = 1), (O = s));
        let b = Math.max(O, 0) || 0,
          M = vi(b - r),
          A = g ? v : vi(r + M * E),
          w = A * 100;
        if (A === r && e.current) return e;
        let T, q, L, D;
        for (let $ = 0, { length: Z } = i; $ < Z; $++) {
          let { keyframe: ie, actionItems: W } = i[$];
          if (($ === 0 && (T = W[0]), w >= ie)) {
            T = W[0];
            let R = i[$ + 1],
              p = R && w !== ie;
            (q = p ? R.actionItems[0] : null),
              p && ((L = ie / 100), (D = (R.keyframe - ie) / 100));
          }
        }
        let V = {};
        if (T && !q)
          for (let $ = 0, { length: Z } = o; $ < Z; $++) {
            let ie = o[$];
            V[ie] = Ka(c, ie, T.config);
          }
        else if (T && q && L !== void 0 && D !== void 0) {
          let $ = (A - L) / D,
            Z = T.config.easing,
            ie = jE(Z, $, f);
          for (let W = 0, { length: R } = o; W < R; W++) {
            let p = o[W],
              F = Ka(c, p, T.config),
              J = (Ka(c, p, q.config) - F) * ie + F;
            V[p] = J;
          }
        }
        return (0, Or.merge)(e, { position: A, current: V });
      },
      h1 = (e, t) => {
        let {
            active: r,
            origin: n,
            start: i,
            immediate: o,
            renderType: a,
            verbose: s,
            actionItem: c,
            destination: f,
            destinationKeys: g,
            pluginDuration: v,
            instanceDelay: _,
            customEasingFn: E,
            skipMotion: O,
          } = e,
          b = c.config.easing,
          { duration: M, delay: A } = c.config;
        v != null && (M = v),
          (A = _ ?? A),
          a === f1 ? (M = 0) : (o || O) && (M = A = 0);
        let { now: w } = t.payload;
        if (r && n) {
          let T = w - (i + A);
          if (s) {
            let $ = w - i,
              Z = M + A,
              ie = vi(Math.min(Math.max(0, $ / Z), 1));
            e = (0, Or.set)(e, "verboseTimeElapsed", Z * ie);
          }
          if (T < 0) return e;
          let q = vi(Math.min(Math.max(0, T / M), 1)),
            L = jE(b, q, E),
            D = {},
            V = null;
          return (
            g.length &&
              (V = g.reduce(($, Z) => {
                let ie = f[Z],
                  W = parseFloat(n[Z]) || 0,
                  p = (parseFloat(ie) - W) * L + W;
                return ($[Z] = p), $;
              }, {})),
            (D.current = V),
            (D.position = q),
            q === 1 && ((D.active = !1), (D.complete = !0)),
            (0, Or.merge)(e, D)
          );
        }
        return e;
      },
      E1 = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case i1:
            return t.payload.ixInstances || Object.freeze({});
          case o1:
            return Object.freeze({});
          case a1: {
            let {
                instanceId: r,
                elementId: n,
                actionItem: i,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: c,
                groupIndex: f,
                isCarrier: g,
                origin: v,
                destination: _,
                immediate: E,
                verbose: O,
                continuous: b,
                parameterId: M,
                actionGroups: A,
                smoothing: w,
                restingValue: T,
                pluginInstance: q,
                pluginDuration: L,
                instanceDelay: D,
                skipMotion: V,
                skipToValue: $,
              } = t.payload,
              { actionTypeId: Z } = i,
              ie = d1(Z),
              W = p1(ie, Z),
              R = Object.keys(_).filter((F) => _[F] != null),
              { easing: p } = i.config;
            return (0, Or.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: v,
              destination: _,
              destinationKeys: R,
              immediate: E,
              verbose: O,
              current: null,
              actionItem: i,
              actionTypeId: Z,
              eventId: o,
              eventTarget: a,
              eventStateKey: s,
              actionListId: c,
              groupIndex: f,
              renderType: ie,
              isCarrier: g,
              styleProp: W,
              continuous: b,
              parameterId: M,
              actionGroups: A,
              smoothing: w,
              restingValue: T,
              pluginInstance: q,
              pluginDuration: L,
              instanceDelay: D,
              skipMotion: V,
              skipToValue: $,
              customEasingFn:
                Array.isArray(p) && p.length === 4 ? l1(p) : void 0,
            });
          }
          case s1: {
            let { instanceId: r, time: n } = t.payload;
            return (0, Or.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n,
            });
          }
          case u1: {
            let { instanceId: r } = t.payload;
            if (!e[r]) return e;
            let n = {},
              i = Object.keys(e),
              { length: o } = i;
            for (let a = 0; a < o; a++) {
              let s = i[a];
              s !== r && (n[s] = e[s]);
            }
            return n;
          }
          case c1: {
            let r = e,
              n = Object.keys(e),
              { length: i } = n;
            for (let o = 0; o < i; o++) {
              let a = n[o],
                s = e[a],
                c = s.continuous ? v1 : h1;
              r = (0, Or.set)(r, a, c(s, t));
            }
            return r;
          }
          default:
            return e;
        }
      };
    hi.ixInstances = E1;
  });
  var zE = u((Ei) => {
    "use strict";
    Object.defineProperty(Ei, "__esModule", { value: !0 });
    Ei.ixParameters = void 0;
    var g1 = Ve(),
      {
        IX2_RAW_DATA_IMPORTED: _1,
        IX2_SESSION_STOPPED: y1,
        IX2_PARAMETER_CHANGED: m1,
      } = g1.IX2EngineActionTypes,
      I1 = (e = {}, t) => {
        switch (t.type) {
          case _1:
            return t.payload.ixParameters || {};
          case y1:
            return {};
          case m1: {
            let { key: r, value: n } = t.payload;
            return (e[r] = n), e;
          }
          default:
            return e;
        }
      };
    Ei.ixParameters = I1;
  });
  var YE = u((gi) => {
    "use strict";
    Object.defineProperty(gi, "__esModule", { value: !0 });
    gi.default = void 0;
    var T1 = Qo(),
      O1 = Ef(),
      b1 = Df(),
      A1 = Ff(),
      S1 = Ht(),
      w1 = KE(),
      R1 = zE(),
      { ixElements: C1 } = S1.IX2ElementsReducer,
      N1 = (0, T1.combineReducers)({
        ixData: O1.ixData,
        ixRequest: b1.ixRequest,
        ixSession: A1.ixSession,
        ixElements: C1,
        ixInstances: w1.ixInstances,
        ixParameters: R1.ixParameters,
      });
    gi.default = N1;
  });
  var QE = u(($5, on) => {
    function x1(e, t) {
      if (e == null) return {};
      var r = {},
        n = Object.keys(e),
        i,
        o;
      for (o = 0; o < n.length; o++)
        (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
      return r;
    }
    (on.exports = x1),
      (on.exports.__esModule = !0),
      (on.exports.default = on.exports);
  });
  var ZE = u((Z5, $E) => {
    var q1 = bt(),
      L1 = xe(),
      P1 = gt(),
      D1 = "[object String]";
    function M1(e) {
      return typeof e == "string" || (!L1(e) && P1(e) && q1(e) == D1);
    }
    $E.exports = M1;
  });
  var eg = u((J5, JE) => {
    var F1 = wa(),
      G1 = F1("length");
    JE.exports = G1;
  });
  var rg = u((ej, tg) => {
    var U1 = "\\ud800-\\udfff",
      X1 = "\\u0300-\\u036f",
      W1 = "\\ufe20-\\ufe2f",
      V1 = "\\u20d0-\\u20ff",
      B1 = X1 + W1 + V1,
      H1 = "\\ufe0e\\ufe0f",
      k1 = "\\u200d",
      j1 = RegExp("[" + k1 + U1 + B1 + H1 + "]");
    function K1(e) {
      return j1.test(e);
    }
    tg.exports = K1;
  });
  var fg = u((tj, lg) => {
    var ig = "\\ud800-\\udfff",
      z1 = "\\u0300-\\u036f",
      Y1 = "\\ufe20-\\ufe2f",
      Q1 = "\\u20d0-\\u20ff",
      $1 = z1 + Y1 + Q1,
      Z1 = "\\ufe0e\\ufe0f",
      J1 = "[" + ig + "]",
      za = "[" + $1 + "]",
      Ya = "\\ud83c[\\udffb-\\udfff]",
      eF = "(?:" + za + "|" + Ya + ")",
      og = "[^" + ig + "]",
      ag = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      sg = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      tF = "\\u200d",
      ug = eF + "?",
      cg = "[" + Z1 + "]?",
      rF = "(?:" + tF + "(?:" + [og, ag, sg].join("|") + ")" + cg + ug + ")*",
      nF = cg + ug + rF,
      iF = "(?:" + [og + za + "?", za, ag, sg, J1].join("|") + ")",
      ng = RegExp(Ya + "(?=" + Ya + ")|" + iF + nF, "g");
    function oF(e) {
      for (var t = (ng.lastIndex = 0); ng.test(e); ) ++t;
      return t;
    }
    lg.exports = oF;
  });
  var pg = u((rj, dg) => {
    var aF = eg(),
      sF = rg(),
      uF = fg();
    function cF(e) {
      return sF(e) ? uF(e) : aF(e);
    }
    dg.exports = cF;
  });
  var hg = u((nj, vg) => {
    var lF = Yn(),
      fF = Qn(),
      dF = Gt(),
      pF = ZE(),
      vF = pg(),
      hF = "[object Map]",
      EF = "[object Set]";
    function gF(e) {
      if (e == null) return 0;
      if (dF(e)) return pF(e) ? vF(e) : e.length;
      var t = fF(e);
      return t == hF || t == EF ? e.size : lF(e).length;
    }
    vg.exports = gF;
  });
  var gg = u((ij, Eg) => {
    var _F = "Expected a function";
    function yF(e) {
      if (typeof e != "function") throw new TypeError(_F);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Eg.exports = yF;
  });
  var Qa = u((oj, _g) => {
    var mF = At(),
      IF = (function () {
        try {
          var e = mF(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    _g.exports = IF;
  });
  var $a = u((aj, mg) => {
    var yg = Qa();
    function TF(e, t, r) {
      t == "__proto__" && yg
        ? yg(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    mg.exports = TF;
  });
  var Tg = u((sj, Ig) => {
    var OF = $a(),
      bF = Un(),
      AF = Object.prototype,
      SF = AF.hasOwnProperty;
    function sl(e, t, r) {
      var n = e[t];
      (!(SF.call(e, t) && bF(n, r)) || (r === void 0 && !(t in e))) &&
        OF(e, t, r);
    }
    Ig.exports = sl;
  });
  var Ag = u((uj, bg) => {
    var RF = Tg(),
      CF = Yr(),
      NF = kn(),
      Og = lt(),
      xF = dr();
    function qF(e, t, r, n) {
      if (!Og(e)) return e;
      t = CF(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var c = xF(t[i]),
          f = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (i != a) {
          var g = s[c];
          (f = n ? n(g, c, s) : void 0),
            f === void 0 && (f = Og(g) ? g : NF(t[i + 1]) ? [] : {});
        }
        RF(s, c, f), (s = s[c]);
      }
      return e;
    }
    bg.exports = qF;
  });
  var wg = u((cj, Sg) => {
    var LF = Jn(),
      PF = Ag(),
      DF = Yr();
    function MF(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = LF(e, a);
        r(s, a) && PF(o, DF(a, e), s);
      }
      return o;
    }
    Sg.exports = MF;
  });
  var Cg = u((lj, Rg) => {
    var FF = Bn(),
      GF = Fo(),
      UF = da(),
      XF = fa(),
      sl = Object.getOwnPropertySymbols,
      VF = sl
        ? function (e) {
            for (var t = []; e; ) FF(t, UF(e)), (e = GF(e));
            return t;
          }
        : XF;
    Rg.exports = VF;
  });
  var xg = u((fj, Ng) => {
    function BF(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Ng.exports = BF;
  });
  var Lg = u((dj, qg) => {
    var HF = lt(),
      kF = zn(),
      jF = xg(),
      KF = Object.prototype,
      zF = KF.hasOwnProperty;
    function YF(e) {
      if (!HF(e)) return jF(e);
      var t = kF(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !zF.call(e, n))) || r.push(n);
      return r;
    }
    qg.exports = YF;
  });
  var Dg = u((pj, Pg) => {
    var QF = va(),
      $F = Lg(),
      ZF = Gt();
    function JF(e) {
      return ZF(e) ? QF(e, !0) : $F(e);
    }
    Pg.exports = JF;
  });
  var Fg = u((vj, Mg) => {
    var e2 = la(),
      t2 = Cg(),
      r2 = Dg();
    function n2(e) {
      return e2(e, r2, t2);
    }
    Mg.exports = n2;
  });
  var Ug = u((hj, Gg) => {
    var i2 = Sa(),
      o2 = St(),
      a2 = wg(),
      s2 = Fg();
    function u2(e, t) {
      if (e == null) return {};
      var r = i2(s2(e), function (n) {
        return [n];
      });
      return (
        (t = o2(t)),
        a2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    Gg.exports = u2;
  });
  var Wg = u((Ej, Xg) => {
    var c2 = St(),
      l2 = gg(),
      f2 = Ug();
    function d2(e, t) {
      return f2(e, l2(c2(t)));
    }
    Xg.exports = d2;
  });
  var Bg = u((gj, Vg) => {
    var p2 = Yn(),
      v2 = Qn(),
      h2 = Br(),
      E2 = xe(),
      g2 = Gt(),
      _2 = Hn(),
      y2 = zn(),
      m2 = Kn(),
      I2 = "[object Map]",
      T2 = "[object Set]",
      O2 = Object.prototype,
      b2 = O2.hasOwnProperty;
    function A2(e) {
      if (e == null) return !0;
      if (
        g2(e) &&
        (E2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          _2(e) ||
          m2(e) ||
          h2(e))
      )
        return !e.length;
      var t = v2(e);
      if (t == I2 || t == T2) return !e.size;
      if (y2(e)) return !p2(e).length;
      for (var r in e) if (b2.call(e, r)) return !1;
      return !0;
    }
    Vg.exports = A2;
  });
  var kg = u((_j, Hg) => {
    var S2 = $a(),
      w2 = Ga(),
      R2 = St();
    function C2(e, t) {
      var r = {};
      return (
        (t = R2(t, 3)),
        w2(e, function (n, i, o) {
          S2(r, i, t(n, i, o));
        }),
        r
      );
    }
    Hg.exports = C2;
  });
  var Kg = u((yj, jg) => {
    function N2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    jg.exports = N2;
  });
  var Yg = u((mj, zg) => {
    var x2 = ti();
    function q2(e) {
      return typeof e == "function" ? e : x2;
    }
    zg.exports = q2;
  });
  var $g = u((Ij, Qg) => {
    var L2 = Kg(),
      P2 = Ua(),
      D2 = Yg(),
      M2 = xe();
    function F2(e, t) {
      var r = M2(e) ? L2 : P2;
      return r(e, D2(t));
    }
    Qg.exports = F2;
  });
  var Jg = u((Tj, Zg) => {
    var G2 = Je(),
      U2 = function () {
        return G2.Date.now();
      };
    Zg.exports = U2;
  });
  var r_ = u((Oj, t_) => {
    var X2 = lt(),
      Za = Jg(),
      e_ = ri(),
      W2 = "Expected a function",
      V2 = Math.max,
      B2 = Math.min;
    function H2(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        c,
        f = 0,
        g = !1,
        v = !1,
        _ = !0;
      if (typeof e != "function") throw new TypeError(W2);
      (t = e_(t) || 0),
        X2(r) &&
          ((g = !!r.leading),
          (v = "maxWait" in r),
          (o = v ? V2(e_(r.maxWait) || 0, t) : o),
          (_ = "trailing" in r ? !!r.trailing : _));
      function E(D) {
        var V = n,
          $ = i;
        return (n = i = void 0), (f = D), (a = e.apply($, V)), a;
      }
      function O(D) {
        return (f = D), (s = setTimeout(A, t)), g ? E(D) : a;
      }
      function b(D) {
        var V = D - c,
          $ = D - f,
          Z = t - V;
        return v ? B2(Z, o - $) : Z;
      }
      function M(D) {
        var V = D - c,
          $ = D - f;
        return c === void 0 || V >= t || V < 0 || (v && $ >= o);
      }
      function A() {
        var D = Za();
        if (M(D)) return w(D);
        s = setTimeout(A, b(D));
      }
      function w(D) {
        return (s = void 0), _ && n ? E(D) : ((n = i = void 0), a);
      }
      function T() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = c = i = s = void 0);
      }
      function q() {
        return s === void 0 ? a : w(Za());
      }
      function L() {
        var D = Za(),
          V = M(D);
        if (((n = arguments), (i = this), (c = D), V)) {
          if (s === void 0) return O(c);
          if (v) return clearTimeout(s), (s = setTimeout(A, t)), E(c);
        }
        return s === void 0 && (s = setTimeout(A, t)), a;
      }
      return (L.cancel = T), (L.flush = q), L;
    }
    t_.exports = H2;
  });
  var i_ = u((bj, n_) => {
    var k2 = r_(),
      j2 = lt(),
      K2 = "Expected a function";
    function z2(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(K2);
      return (
        j2(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        k2(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    n_.exports = z2;
  });
  var _i = u((ce) => {
    "use strict";
    var Y2 = st().default;
    Object.defineProperty(ce, "__esModule", { value: !0 });
    ce.viewportWidthChanged =
      ce.testFrameRendered =
      ce.stopRequested =
      ce.sessionStopped =
      ce.sessionStarted =
      ce.sessionInitialized =
      ce.rawDataImported =
      ce.previewRequested =
      ce.playbackRequested =
      ce.parameterChanged =
      ce.mediaQueriesDefined =
      ce.instanceStarted =
      ce.instanceRemoved =
      ce.instanceAdded =
      ce.eventStateChanged =
      ce.eventListenerAdded =
      ce.elementStateChanged =
      ce.clearRequested =
      ce.animationFrameChanged =
      ce.actionListPlaybackChanged =
        void 0;
    var o_ = Y2(Gr()),
      a_ = Ve(),
      Q2 = Ht(),
      {
        IX2_RAW_DATA_IMPORTED: $2,
        IX2_SESSION_INITIALIZED: Z2,
        IX2_SESSION_STARTED: J2,
        IX2_SESSION_STOPPED: eG,
        IX2_PREVIEW_REQUESTED: tG,
        IX2_PLAYBACK_REQUESTED: rG,
        IX2_STOP_REQUESTED: nG,
        IX2_CLEAR_REQUESTED: iG,
        IX2_EVENT_LISTENER_ADDED: oG,
        IX2_TEST_FRAME_RENDERED: aG,
        IX2_EVENT_STATE_CHANGED: sG,
        IX2_ANIMATION_FRAME_CHANGED: uG,
        IX2_PARAMETER_CHANGED: cG,
        IX2_INSTANCE_ADDED: lG,
        IX2_INSTANCE_STARTED: fG,
        IX2_INSTANCE_REMOVED: dG,
        IX2_ELEMENT_STATE_CHANGED: pG,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: vG,
        IX2_VIEWPORT_WIDTH_CHANGED: hG,
        IX2_MEDIA_QUERIES_DEFINED: EG,
      } = a_.IX2EngineActionTypes,
      { reifyState: gG } = Q2.IX2VanillaUtils,
      _G = (e) => ({ type: $2, payload: (0, o_.default)({}, gG(e)) });
    ce.rawDataImported = _G;
    var yG = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
      type: Z2,
      payload: { hasBoundaryNodes: e, reducedMotion: t },
    });
    ce.sessionInitialized = yG;
    var mG = () => ({ type: J2 });
    ce.sessionStarted = mG;
    var IG = () => ({ type: eG });
    ce.sessionStopped = IG;
    var TG = ({ rawData: e, defer: t }) => ({
      type: tG,
      payload: { defer: t, rawData: e },
    });
    ce.previewRequested = TG;
    var OG = ({
      actionTypeId: e = a_.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: r,
      eventId: n,
      allowEvents: i,
      immediate: o,
      testManual: a,
      verbose: s,
      rawData: c,
    }) => ({
      type: rG,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: r,
        testManual: a,
        eventId: n,
        allowEvents: i,
        immediate: o,
        verbose: s,
        rawData: c,
      },
    });
    ce.playbackRequested = OG;
    var bG = (e) => ({ type: nG, payload: { actionListId: e } });
    ce.stopRequested = bG;
    var AG = () => ({ type: iG });
    ce.clearRequested = AG;
    var SG = (e, t) => ({
      type: oG,
      payload: { target: e, listenerParams: t },
    });
    ce.eventListenerAdded = SG;
    var wG = (e = 1) => ({ type: aG, payload: { step: e } });
    ce.testFrameRendered = wG;
    var RG = (e, t) => ({ type: sG, payload: { stateKey: e, newState: t } });
    ce.eventStateChanged = RG;
    var CG = (e, t) => ({ type: uG, payload: { now: e, parameters: t } });
    ce.animationFrameChanged = CG;
    var NG = (e, t) => ({ type: cG, payload: { key: e, value: t } });
    ce.parameterChanged = NG;
    var xG = (e) => ({ type: lG, payload: (0, o_.default)({}, e) });
    ce.instanceAdded = xG;
    var qG = (e, t) => ({ type: fG, payload: { instanceId: e, time: t } });
    ce.instanceStarted = qG;
    var LG = (e) => ({ type: dG, payload: { instanceId: e } });
    ce.instanceRemoved = LG;
    var PG = (e, t, r, n) => ({
      type: pG,
      payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
    });
    ce.elementStateChanged = PG;
    var DG = ({ actionListId: e, isPlaying: t }) => ({
      type: vG,
      payload: { actionListId: e, isPlaying: t },
    });
    ce.actionListPlaybackChanged = DG;
    var MG = ({ width: e, mediaQueries: t }) => ({
      type: hG,
      payload: { width: e, mediaQueries: t },
    });
    ce.viewportWidthChanged = MG;
    var FG = () => ({ type: EG });
    ce.mediaQueriesDefined = FG;
  });
  var c_ = u((Le) => {
    "use strict";
    Object.defineProperty(Le, "__esModule", { value: !0 });
    Le.elementContains = YG;
    Le.getChildElements = $G;
    Le.getClosestElement = void 0;
    Le.getProperty = HG;
    Le.getQuerySelector = jG;
    Le.getRefType = eU;
    Le.getSiblingElements = ZG;
    Le.getStyle = BG;
    Le.getValidDocument = KG;
    Le.isSiblingNode = QG;
    Le.matchSelector = kG;
    Le.queryDocument = zG;
    Le.setStyle = VG;
    var GG = Ht(),
      UG = Ve(),
      { ELEMENT_MATCHES: Ja } = GG.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: s_,
        HTML_ELEMENT: XG,
        PLAIN_OBJECT: WG,
        sl_PAGE: u_,
      } = UG.IX2EngineConstants;
    function VG(e, t, r) {
      e.style[t] = r;
    }
    function BG(e, t) {
      return e.style[t];
    }
    function HG(e, t) {
      return e[t];
    }
    function kG(e) {
      return (t) => t[Ja](e);
    }
    function jG({ id: e, selector: t }) {
      if (e) {
        let r = e;
        if (e.indexOf(s_) !== -1) {
          let n = e.split(s_),
            i = n[0];
          if (((r = n[1]), i !== document.documentElement.getAttribute(u_)))
            return null;
        }
        return `[hover-id="${r}"], [hover-id^="${r}_instance"]`;
      }
      return t;
    }
    function KG(e) {
      return e == null || e === document.documentElement.getAttribute(u_)
        ? document
        : null;
    }
    function zG(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function YG(e, t) {
      return e.contains(t);
    }
    function QG(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function $G(e) {
      let t = [];
      for (let r = 0, { length: n } = e || []; r < n; r++) {
        let { children: i } = e[r],
          { length: o } = i;
        if (o) for (let a = 0; a < o; a++) t.push(i[a]);
      }
      return t;
    }
    function ZG(e = []) {
      let t = [],
        r = [];
      for (let n = 0, { length: i } = e; n < i; n++) {
        let { parentNode: o } = e[n];
        if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
          continue;
        r.push(o);
        let a = o.firstElementChild;
        for (; a != null; )
          e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
      }
      return t;
    }
    var JG = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[Ja] && r[Ja](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    Le.getClosestElement = JG;
    function eU(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? XG
          : WG
        : null;
    }
  });
  var es = u((wj, f_) => {
    var tU = lt(),
      l_ = Object.create,
      rU = (function () {
        function e() {}
        return function (t) {
          if (!tU(t)) return {};
          if (l_) return l_(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    f_.exports = rU;
  });
  var yi = u((Rj, d_) => {
    function nU() {}
    d_.exports = nU;
  });
  var Ii = u((Cj, p_) => {
    var iU = es(),
      oU = yi();
    function mi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    mi.prototype = iU(oU.prototype);
    mi.prototype.constructor = mi;
    p_.exports = mi;
  });
  var g_ = u((Nj, E_) => {
    var v_ = er(),
      aU = Br(),
      sU = xe(),
      h_ = v_ ? v_.isConcatSpreadable : void 0;
    function uU(e) {
      return sU(e) || aU(e) || !!(h_ && e && e[h_]);
    }
    E_.exports = uU;
  });
  var m_ = u((xj, y_) => {
    var cU = Bn(),
      lU = g_();
    function __(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = lU), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? __(s, t - 1, r, n, i)
            : cU(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    y_.exports = __;
  });
  var T_ = u((qj, I_) => {
    var fU = m_();
    function dU(e) {
      var t = e == null ? 0 : e.length;
      return t ? fU(e, 1) : [];
    }
    I_.exports = dU;
  });
  var b_ = u((Lj, O_) => {
    function pU(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    O_.exports = pU;
  });
  var w_ = u((Pj, S_) => {
    var vU = b_(),
      A_ = Math.max;
    function hU(e, t, r) {
      return (
        (t = A_(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = A_(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), vU(e, this, s);
        }
      );
    }
    S_.exports = hU;
  });
  var C_ = u((Dj, R_) => {
    function EU(e) {
      return function () {
        return e;
      };
    }
    R_.exports = EU;
  });
  var q_ = u((Mj, x_) => {
    var gU = C_(),
      N_ = Qa(),
      _U = ti(),
      yU = N_
        ? function (e, t) {
            return N_(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: gU(t),
              writable: !0,
            });
          }
        : _U;
    x_.exports = yU;
  });
  var P_ = u((Fj, L_) => {
    var mU = 800,
      IU = 16,
      TU = Date.now;
    function OU(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = TU(),
          i = IU - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= mU) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    L_.exports = OU;
  });
  var M_ = u((Gj, D_) => {
    var bU = q_(),
      AU = P_(),
      SU = AU(bU);
    D_.exports = SU;
  });
  var G_ = u((Uj, F_) => {
    var wU = T_(),
      RU = w_(),
      CU = M_();
    function NU(e) {
      return CU(RU(e, void 0, wU), e + "");
    }
    F_.exports = NU;
  });
  var W_ = u((Xj, X_) => {
    var U_ = ha(),
      xU = U_ && new U_();
    X_.exports = xU;
  });
  var B_ = u((Wj, V_) => {
    function qU() {}
    V_.exports = qU;
  });
  var ts = u((Vj, k_) => {
    var H_ = W_(),
      LU = B_(),
      PU = H_
        ? function (e) {
            return H_.get(e);
          }
        : LU;
    k_.exports = PU;
  });
  var K_ = u((Bj, j_) => {
    var DU = {};
    j_.exports = DU;
  });
  var rs = u((Hj, Y_) => {
    var z_ = K_(),
      MU = Object.prototype,
      FU = MU.hasOwnProperty;
    function GU(e) {
      for (
        var t = e.name + "", r = z_[t], n = FU.call(z_, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    Y_.exports = GU;
  });
  var Oi = u((kj, Q_) => {
    var UU = es(),
      XU = yi(),
      WU = 4294967295;
    function Ti(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = WU),
        (this.__views__ = []);
    }
    Ti.prototype = UU(XU.prototype);
    Ti.prototype.constructor = Ti;
    Q_.exports = Ti;
  });
  var Z_ = u((jj, $_) => {
    function VU(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    $_.exports = VU;
  });
  var ey = u((Kj, J_) => {
    var BU = Oi(),
      HU = Ii(),
      kU = Z_();
    function jU(e) {
      if (e instanceof BU) return e.clone();
      var t = new HU(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = kU(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    J_.exports = jU;
  });
  var ny = u((zj, ry) => {
    var KU = Oi(),
      ty = Ii(),
      zU = yi(),
      YU = xe(),
      QU = gt(),
      $U = ey(),
      ZU = Object.prototype,
      JU = ZU.hasOwnProperty;
    function bi(e) {
      if (QU(e) && !YU(e) && !(e instanceof KU)) {
        if (e instanceof ty) return e;
        if (JU.call(e, "__wrapped__")) return $U(e);
      }
      return new ty(e);
    }
    bi.prototype = zU.prototype;
    bi.prototype.constructor = bi;
    ry.exports = bi;
  });
  var oy = u((Yj, iy) => {
    var eX = Oi(),
      tX = ts(),
      rX = rs(),
      nX = ny();
    function iX(e) {
      var t = rX(e),
        r = nX[t];
      if (typeof r != "function" || !(t in eX.prototype)) return !1;
      if (e === r) return !0;
      var n = tX(r);
      return !!n && e === n[0];
    }
    iy.exports = iX;
  });
  var cy = u((Qj, uy) => {
    var ay = Ii(),
      oX = G_(),
      aX = ts(),
      ns = rs(),
      sX = xe(),
      sy = oy(),
      uX = "Expected a function",
      cX = 8,
      lX = 32,
      fX = 128,
      dX = 256;
    function pX(e) {
      return oX(function (t) {
        var r = t.length,
          n = r,
          i = ay.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(uX);
          if (i && !a && ns(o) == "wrapper") var a = new ay([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = ns(o),
            c = s == "wrapper" ? aX(o) : void 0;
          c &&
          sy(c[0]) &&
          c[1] == (fX | cX | lX | dX) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[ns(c[0])].apply(a, c[3]))
            : (a = o.length == 1 && sy(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            g = f[0];
          if (a && f.length == 1 && sX(g)) return a.plant(g).value();
          for (var v = 0, _ = r ? t[v].apply(this, f) : g; ++v < r; )
            _ = t[v].call(this, _);
          return _;
        };
      });
    }
    uy.exports = pX;
  });
  var fy = u(($j, ly) => {
    var vX = cy(),
      hX = vX();
    ly.exports = hX;
  });
  var py = u((Zj, dy) => {
    function EX(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    dy.exports = EX;
  });
  var hy = u((Jj, vy) => {
    var gX = py(),
      is = ri();
    function _X(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = is(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = is(t)), (t = t === t ? t : 0)),
        gX(is(e), t, r)
      );
    }
    vy.exports = _X;
  });
  var Ly = u((Ci) => {
    "use strict";
    var Ri = st().default;
    Object.defineProperty(Ci, "__esModule", { value: !0 });
    Ci.default = void 0;
    var je = Ri(Gr()),
      yX = Ri(fy()),
      mX = Ri(ei()),
      IX = Ri(hy()),
      kt = Ve(),
      os = cs(),
      Ai = _i(),
      TX = Ht(),
      {
        MOUSE_CLICK: OX,
        MOUSE_SECOND_CLICK: bX,
        MOUSE_DOWN: AX,
        MOUSE_UP: SX,
        MOUSE_OVER: wX,
        MOUSE_OUT: RX,
        DROPDOWN_CLOSE: CX,
        DROPDOWN_OPEN: NX,
        SLIDER_ACTIVE: xX,
        SLIDER_INACTIVE: qX,
        TAB_ACTIVE: LX,
        TAB_INACTIVE: PX,
        NAVBAR_CLOSE: DX,
        NAVBAR_OPEN: MX,
        MOUSE_MOVE: FX,
        PAGE_SCROLL_DOWN: by,
        SCROLL_INTO_VIEW: Ay,
        SCROLL_OUT_OF_VIEW: GX,
        PAGE_SCROLL_UP: UX,
        SCROLLING_IN_VIEW: XX,
        PAGE_FINISH: Sy,
        ECOMMERCE_CART_CLOSE: WX,
        ECOMMERCE_CART_OPEN: VX,
        PAGE_START: wy,
        PAGE_SCROLL: BX,
      } = kt.EventTypeConsts,
      as = "COMPONENT_ACTIVE",
      Ry = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: Ey } = kt.IX2EngineConstants,
      { getNamespacedParameterId: gy } = TX.IX2VanillaUtils,
      Cy = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      sn = Cy(({ element: e, nativeEvent: t }) => e === t.target),
      HX = Cy(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      vt = (0, yX.default)([sn, HX]),
      Ny = (e, t) => {
        if (t) {
          let { ixData: r } = e.getState(),
            { events: n } = r,
            i = n[t];
          if (i && !jX[i.eventTypeId]) return i;
        }
        return null;
      },
      kX = ({ store: e, event: t }) => {
        let { action: r } = t,
          { autoStopEventId: n } = r.config;
        return !!Ny(e, n);
      },
      He = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
        let { action: o, id: a } = t,
          { actionListId: s, autoStopEventId: c } = o.config,
          f = Ny(e, c);
        return (
          f &&
            (0, os.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: r,
              eventStateKey: c + Ey + n.split(Ey)[1],
              actionListId: (0, mX.default)(f, "action.config.actionListId"),
            }),
          (0, os.stopActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          (0, os.startActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          i
        );
      },
      et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      un = { handler: et(vt, He) },
      xy = (0, je.default)({}, un, { types: [as, Ry].join(" ") }),
      ss = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      _y = "mouseover mouseout",
      us = { types: ss },
      jX = { PAGE_START: wy, PAGE_FINISH: Sy },
      an = (() => {
        let e = window.pageXOffset !== void 0,
          r =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, IX.default)(
            e ? window.pageYOffset : r.scrollTop,
            0,
            r.scrollHeight - window.innerHeight
          ),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      KX = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      zX = ({ element: e, nativeEvent: t }) => {
        let { type: r, target: n, relatedTarget: i } = t,
          o = e.contains(n);
        if (r === "mouseover" && o) return !0;
        let a = e.contains(i);
        return !!(r === "mouseout" && o && a);
      },
      YX = (e) => {
        let {
            element: t,
            event: { config: r },
          } = e,
          { clientWidth: n, clientHeight: i } = an(),
          o = r.scrollOffsetValue,
          c = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
        return KX(t.getBoundingClientRect(), {
          left: 0,
          top: c,
          right: n,
          bottom: i - c,
        });
      },
      qy = (e) => (t, r) => {
        let { type: n } = t.nativeEvent,
          i = [as, Ry].indexOf(n) !== -1 ? n === as : r.isActive,
          o = (0, je.default)({}, r, { isActive: i });
        return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
      },
      yy = (e) => (t, r) => {
        let n = { elementHovered: zX(t) };
        return (
          ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
            e(t, n)) ||
          n
        );
      },
      QX = (e) => (t, r) => {
        let n = (0, je.default)({}, r, { elementVisible: YX(t) });
        return (
          ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
            e(t, n)) ||
          n
        );
      },
      my =
        (e) =>
        (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = an(),
            {
              event: { config: a, eventTypeId: s },
            } = t,
            { scrollOffsetValue: c, scrollOffsetUnit: f } = a,
            g = f === "PX",
            v = i - o,
            _ = Number((n / v).toFixed(2));
          if (r && r.percentTop === _) return r;
          let E = (g ? c : (o * (c || 0)) / 100) / v,
            O,
            b,
            M = 0;
          r &&
            ((O = _ > r.percentTop),
            (b = r.scrollingDown !== O),
            (M = b ? _ : r.anchorTop));
          let A = s === by ? _ >= M + E : _ <= M - E,
            w = (0, je.default)({}, r, {
              percentTop: _,
              inBounds: A,
              anchorTop: M,
              scrollingDown: O,
            });
          return (r && A && (b || w.inBounds !== r.inBounds) && e(t, w)) || w;
        },
      $X = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      ZX = (e) => (t, r) => {
        let n = { finished: document.readyState === "complete" };
        return n.finished && !(r && r.finshed) && e(t), n;
      },
      JX = (e) => (t, r) => {
        let n = { started: !0 };
        return r || e(t), n;
      },
      Iy =
        (e) =>
        (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        },
      Si = (e = !0) =>
        (0, je.default)({}, xy, {
          handler: et(
            e ? vt : sn,
            qy((t, r) => (r.isActive ? un.handler(t, r) : r))
          ),
        }),
      wi = (e = !0) =>
        (0, je.default)({}, xy, {
          handler: et(
            e ? vt : sn,
            qy((t, r) => (r.isActive ? r : un.handler(t, r)))
          ),
        }),
      Ty = (0, je.default)({}, us, {
        handler: QX((e, t) => {
          let { elementVisible: r } = t,
            { event: n, store: i } = e,
            { ixData: o } = i.getState(),
            { events: a } = o;
          return !a[n.action.config.autoStopEventId] && t.triggered
            ? t
            : (n.eventTypeId === Ay) === r
            ? (He(e), (0, je.default)({}, t, { triggered: !0 }))
            : t;
        }),
      }),
      Oy = 0.05,
      eW = {
        [xX]: Si(),
        [qX]: wi(),
        [NX]: Si(),
        [CX]: wi(),
        [MX]: Si(!1),
        [DX]: wi(!1),
        [LX]: Si(),
        [PX]: wi(),
        [VX]: { types: "ecommerce-cart-open", handler: et(vt, He) },
        [WX]: { types: "ecommerce-cart-close", handler: et(vt, He) },
        [OX]: {
          types: "click",
          handler: et(
            vt,
            Iy((e, { clickCount: t }) => {
              kX(e) ? t === 1 && He(e) : He(e);
            })
          ),
        },
        [bX]: {
          types: "click",
          handler: et(
            vt,
            Iy((e, { clickCount: t }) => {
              t === 2 && He(e);
            })
          ),
        },
        [AX]: (0, je.default)({}, un, { types: "mousedown" }),
        [SX]: (0, je.default)({}, un, { types: "mouseup" }),
        [wX]: {
          types: _y,
          handler: et(
            vt,
            yy((e, t) => {
              t.elementHovered && He(e);
            })
          ),
        },
        [RX]: {
          types: _y,
          handler: et(
            vt,
            yy((e, t) => {
              t.elementHovered || He(e);
            })
          ),
        },
        [FX]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: r,
              nativeEvent: n,
              eventStateKey: i,
            },
            o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: a,
                selectedAxis: s,
                continuousParameterGroupId: c,
                reverse: f,
                restingState: g = 0,
              } = r,
              {
                clientX: v = o.clientX,
                clientY: _ = o.clientY,
                pageX: E = o.pageX,
                pageY: O = o.pageY,
              } = n,
              b = s === "X_AXIS",
              M = n.type === "mouseout",
              A = g / 100,
              w = c,
              T = !1;
            switch (a) {
              case kt.EventBasedOn.VIEWPORT: {
                A = b
                  ? Math.min(v, window.innerWidth) / window.innerWidth
                  : Math.min(_, window.innerHeight) / window.innerHeight;
                break;
              }
              case kt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: q,
                  scrollTop: L,
                  scrollWidth: D,
                  scrollHeight: V,
                } = an();
                A = b ? Math.min(q + E, D) / D : Math.min(L + O, V) / V;
                break;
              }
              case kt.EventBasedOn.ELEMENT:
              default: {
                w = gy(i, c);
                let q = n.type.indexOf("mouse") === 0;
                if (q && vt({ element: t, nativeEvent: n }) !== !0) break;
                let L = t.getBoundingClientRect(),
                  { left: D, top: V, width: $, height: Z } = L;
                if (!q && !$X({ left: v, top: _ }, L)) break;
                (T = !0), (A = b ? (v - D) / $ : (_ - V) / Z);
                break;
              }
            }
            return (
              M && (A > 1 - Oy || A < Oy) && (A = Math.round(A)),
              (a !== kt.EventBasedOn.ELEMENT || T || T !== o.elementHovered) &&
                ((A = f ? 1 - A : A),
                e.dispatch((0, Ai.parameterChanged)(w, A))),
              { elementHovered: T, clientX: v, clientY: _, pageX: E, pageY: O }
            );
          },
        },
        [BX]: {
          types: ss,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: r, reverse: n } = t,
              { scrollTop: i, scrollHeight: o, clientHeight: a } = an(),
              s = i / (o - a);
            (s = n ? 1 - s : s), e.dispatch((0, Ai.parameterChanged)(r, s));
          },
        },
        [XX]: {
          types: ss,
          handler: (
            { element: e, store: t, eventConfig: r, eventStateKey: n },
            i = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: o,
                scrollTop: a,
                scrollWidth: s,
                scrollHeight: c,
                clientHeight: f,
              } = an(),
              {
                basedOn: g,
                selectedAxis: v,
                continuousParameterGroupId: _,
                startsEntering: E,
                startsExiting: O,
                addEndOffset: b,
                addStartOffset: M,
                addOffsetValue: A = 0,
                endOffsetValue: w = 0,
              } = r,
              T = v === "X_AXIS";
            if (g === kt.EventBasedOn.VIEWPORT) {
              let q = T ? o / s : a / c;
              return (
                q !== i.scrollPercent &&
                  t.dispatch((0, Ai.parameterChanged)(_, q)),
                { scrollPercent: q }
              );
            } else {
              let q = gy(n, _),
                L = e.getBoundingClientRect(),
                D = (M ? A : 0) / 100,
                V = (b ? w : 0) / 100;
              (D = E ? D : 1 - D), (V = O ? V : 1 - V);
              let $ = L.top + Math.min(L.height * D, f),
                ie = L.top + L.height * V - $,
                W = Math.min(f + ie, c),
                p = Math.min(Math.max(0, f - $), W) / W;
              return (
                p !== i.scrollPercent &&
                  t.dispatch((0, Ai.parameterChanged)(q, p)),
                { scrollPercent: p }
              );
            }
          },
        },
        [Ay]: Ty,
        [GX]: Ty,
        [by]: (0, je.default)({}, us, {
          handler: my((e, t) => {
            t.scrollingDown && He(e);
          }),
        }),
        [UX]: (0, je.default)({}, us, {
          handler: my((e, t) => {
            t.scrollingDown || He(e);
          }),
        }),
        [Sy]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: et(sn, ZX(He)),
        },
        [wy]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: et(sn, JX(He)),
        },
      };
    Ci.default = eW;
  });
  var cs = u((Nt) => {
    "use strict";
    var rt = st().default,
      tW = Qt().default;
    Object.defineProperty(Nt, "__esModule", { value: !0 });
    Nt.observeRequests = NW;
    Nt.startActionGroup = Es;
    Nt.startEngine = Li;
    Nt.stopActionGroup = hs;
    Nt.stopAllActionGroups = Vy;
    Nt.stopEngine = Pi;
    var rW = rt(Gr()),
      nW = rt(QE()),
      iW = rt(xa()),
      Ct = rt(ei()),
      oW = rt(hg()),
      aW = rt(Wg()),
      sW = rt(Bg()),
      uW = rt(kg()),
      cn = rt($g()),
      cW = rt(i_()),
      tt = Ve(),
      My = Ht(),
      be = _i(),
      Re = tW(c_()),
      lW = rt(Ly()),
      fW = ["store", "computedStyle"],
      dW = Object.keys(tt.QuickEffectIds),
      ls = (e) => dW.includes(e),
      {
        COLON_DELIMITER: fs,
        BOUNDARY_SELECTOR: Ni,
        HTML_ELEMENT: Fy,
        RENDER_GENERAL: pW,
        W_MOD_IX: Py,
      } = tt.IX2EngineConstants,
      {
        getAffectedElements: xi,
        getElementId: vW,
        getDestinationValues: ds,
        observeStore: jt,
        getInstanceId: hW,
        renderHTMLElement: EW,
        clearAllStyles: Gy,
        getMaxDurationItemIndex: gW,
        getComputedStyle: _W,
        getInstanceOrigin: yW,
        reduceListToGroup: mW,
        shouldNamespaceEventParameter: IW,
        getNamespacedParameterId: TW,
        shouldAllowMediaQuery: qi,
        cleanupHTMLElement: OW,
        stringifyTarget: bW,
        mediaQueriesEqual: AW,
        shallowEqual: SW,
      } = My.IX2VanillaUtils,
      {
        isPluginType: ps,
        createPluginInstance: vs,
        getPluginDuration: wW,
      } = My.IX2VanillaPlugins,
      Dy = navigator.userAgent,
      RW = Dy.match(/iPad/i) || Dy.match(/iPhone/),
      CW = 12;
    function NW(e) {
      jt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: LW }),
        jt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: PW,
        }),
        jt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: DW }),
        jt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: MW });
    }
    function xW(e) {
      jt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          Pi(e),
            Gy({ store: e, elementApi: Re }),
            Li({ store: e, allowEvents: !0 }),
            Uy();
        },
      });
    }
    function qW(e, t) {
      let r = jt({
        store: e,
        select: ({ ixSession: n }) => n.tick,
        onChange: (n) => {
          t(n), r();
        },
      });
    }
    function LW({ rawData: e, defer: t }, r) {
      let n = () => {
        Li({ store: r, rawData: e, allowEvents: !0 }), Uy();
      };
      t ? setTimeout(n, 0) : n();
    }
    function Uy() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function PW(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: i,
          eventId: o,
          allowEvents: a,
          immediate: s,
          testManual: c,
          verbose: f = !0,
        } = e,
        { rawData: g } = e;
      if (n && i && g && s) {
        let v = g.actionLists[n];
        v && (g = mW({ actionList: v, actionItemId: i, rawData: g }));
      }
      if (
        (Li({ store: t, rawData: g, allowEvents: a, testManual: c }),
        (n && r === tt.ActionTypeConsts.GENERAL_START_ACTION) || ls(r))
      ) {
        hs({ store: t, actionListId: n }),
          Wy({ store: t, actionListId: n, eventId: o });
        let v = Es({
          store: t,
          eventId: o,
          actionListId: n,
          immediate: s,
          verbose: f,
        });
        f &&
          v &&
          t.dispatch(
            (0, be.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !s,
            })
          );
      }
    }
    function DW({ actionListId: e }, t) {
      e ? hs({ store: t, actionListId: e }) : Vy({ store: t }), Pi(t);
    }
    function MW(e, t) {
      Pi(t), Gy({ store: t, elementApi: Re });
    }
    function Li({ store: e, rawData: t, allowEvents: r, testManual: n }) {
      let { ixSession: i } = e.getState();
      t && e.dispatch((0, be.rawDataImported)(t)),
        i.active ||
          (e.dispatch(
            (0, be.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(Ni),
              reducedMotion:
                document.body.hasAttribute("data-sl-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            (VW(e),
            FW(),
            e.getState().ixSession.hasDefinedMediaQueries && xW(e)),
          e.dispatch((0, be.sessionStarted)()),
          GW(e, n));
    }
    function FW() {
      let { documentElement: e } = document;
      e.className.indexOf(Py) === -1 && (e.className += ` ${Py}`);
    }
    function GW(e, t) {
      let r = (n) => {
        let { ixSession: i, ixParameters: o } = e.getState();
        i.active &&
          (e.dispatch((0, be.animationFrameChanged)(n, o)),
          t ? qW(e, r) : requestAnimationFrame(r));
      };
      r(window.performance.now());
    }
    function Pi(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: r } = t;
        r.forEach(UW), e.dispatch((0, be.sessionStopped)());
      }
    }
    function UW({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function XW({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: i,
      actionListId: o,
      parameterGroup: a,
      smoothing: s,
      restingValue: c,
    }) {
      let { ixData: f, ixSession: g } = e.getState(),
        { events: v } = f,
        _ = v[n],
        { eventTypeId: E } = _,
        O = {},
        b = {},
        M = [],
        { continuousActionGroups: A } = a,
        { id: w } = a;
      IW(E, i) && (w = TW(t, w));
      let T = g.hasBoundaryNodes && r ? Re.getClosestElement(r, Ni) : null;
      A.forEach((q) => {
        let { keyframe: L, actionItems: D } = q;
        D.forEach((V) => {
          let { actionTypeId: $ } = V,
            { target: Z } = V.config;
          if (!Z) return;
          let ie = Z.boundaryMode ? T : null,
            W = bW(Z) + fs + $;
          if (((b[W] = WW(b[W], L, V)), !O[W])) {
            O[W] = !0;
            let { config: R } = V;
            xi({
              config: R,
              event: _,
              eventTarget: r,
              elementRoot: ie,
              elementApi: Re,
            }).forEach((p) => {
              M.push({ element: p, key: W });
            });
          }
        });
      }),
        M.forEach(({ element: q, key: L }) => {
          let D = b[L],
            V = (0, Ct.default)(D, "[0].actionItems[0]", {}),
            { actionTypeId: $ } = V,
            Z = ps($) ? vs($)(q, V) : null,
            ie = ds({ element: q, actionItem: V, elementApi: Re }, Z);
          gs({
            store: e,
            element: q,
            eventId: n,
            actionListId: o,
            actionItem: V,
            destination: ie,
            continuous: !0,
            parameterId: w,
            actionGroups: D,
            smoothing: s,
            restingValue: c,
            pluginInstance: Z,
          });
        });
    }
    function WW(e = [], t, r) {
      let n = [...e],
        i;
      return (
        n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
        i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
        n[i].actionItems.push(r),
        n
      );
    }
    function VW(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: r } = t;
      Xy(e),
        (0, cn.default)(r, (i, o) => {
          let a = lW.default[o];
          if (!a) {
            console.warn(`IX2 event type not configured: ${o}`);
            return;
          }
          zW({ logic: a, store: e, events: i });
        });
      let { ixSession: n } = e.getState();
      n.eventListeners.length && HW(e);
    }
    var BW = ["resize", "orientationchange"];
    function HW(e) {
      let t = () => {
        Xy(e);
      };
      BW.forEach((r) => {
        window.addEventListener(r, t),
          e.dispatch((0, be.eventListenerAdded)(window, [r, t]));
      }),
        t();
    }
    function Xy(e) {
      let { ixSession: t, ixData: r } = e.getState(),
        n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let { mediaQueries: i } = r;
        e.dispatch((0, be.viewportWidthChanged)({ width: n, mediaQueries: i }));
      }
    }
    var kW = (e, t) => (0, aW.default)((0, uW.default)(e, t), sW.default),
      jW = (e, t) => {
        (0, cn.default)(e, (r, n) => {
          r.forEach((i, o) => {
            let a = n + fs + o;
            t(i, n, a);
          });
        });
      },
      KW = (e) => {
        let t = { target: e.target, targets: e.targets };
        return xi({ config: t, elementApi: Re });
      };
    function zW({ logic: e, store: t, events: r }) {
      YW(r);
      let { types: n, handler: i } = e,
        { ixData: o } = t.getState(),
        { actionLists: a } = o,
        s = kW(r, KW);
      if (!(0, oW.default)(s)) return;
      (0, cn.default)(s, (v, _) => {
        let E = r[_],
          { action: O, id: b, mediaQueries: M = o.mediaQueryKeys } = E,
          { actionListId: A } = O.config;
        AW(M, o.mediaQueryKeys) || t.dispatch((0, be.mediaQueriesDefined)()),
          O.actionTypeId === tt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(E.config) ? E.config : [E.config]).forEach((T) => {
              let { continuousParameterGroupId: q } = T,
                L = (0, Ct.default)(a, `${A}.continuousParameterGroups`, []),
                D = (0, iW.default)(L, ({ id: Z }) => Z === q),
                V = (T.smoothing || 0) / 100,
                $ = (T.restingState || 0) / 100;
              D &&
                v.forEach((Z, ie) => {
                  let W = b + fs + ie;
                  XW({
                    store: t,
                    eventStateKey: W,
                    eventTarget: Z,
                    eventId: b,
                    eventConfig: T,
                    actionListId: A,
                    parameterGroup: D,
                    smoothing: V,
                    restingValue: $,
                  });
                });
            }),
          (O.actionTypeId === tt.ActionTypeConsts.GENERAL_START_ACTION ||
            ls(O.actionTypeId)) &&
            Wy({ store: t, actionListId: A, eventId: b });
      });
      let c = (v) => {
          let { ixSession: _ } = t.getState();
          jW(s, (E, O, b) => {
            let M = r[O],
              A = _.eventState[b],
              { action: w, mediaQueries: T = o.mediaQueryKeys } = M;
            if (!qi(T, _.mediaQueryKey)) return;
            let q = (L = {}) => {
              let D = i(
                {
                  store: t,
                  element: E,
                  event: M,
                  eventConfig: L,
                  nativeEvent: v,
                  eventStateKey: b,
                },
                A
              );
              SW(D, A) || t.dispatch((0, be.eventStateChanged)(b, D));
            };
            w.actionTypeId === tt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(M.config) ? M.config : [M.config]).forEach(q)
              : q();
          });
        },
        f = (0, cW.default)(c, CW),
        g = ({ target: v = document, types: _, throttle: E }) => {
          _.split(" ")
            .filter(Boolean)
            .forEach((O) => {
              let b = E ? f : c;
              v.addEventListener(O, b),
                t.dispatch((0, be.eventListenerAdded)(v, [O, b]));
            });
        };
      Array.isArray(n) ? n.forEach(g) : typeof n == "string" && g(e);
    }
    function YW(e) {
      if (!RW) return;
      let t = {},
        r = "";
      for (let n in e) {
        let { eventTypeId: i, target: o } = e[n],
          a = Re.getQuerySelector(o);
        t[a] ||
          ((i === tt.EventTypeConsts.MOUSE_CLICK ||
            i === tt.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[a] = !0),
            (r += a + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (r) {
        let n = document.createElement("style");
        (n.textContent = r), document.body.appendChild(n);
      }
    }
    function Wy({ store: e, actionListId: t, eventId: r }) {
      let { ixData: n, ixSession: i } = e.getState(),
        { actionLists: o, events: a } = n,
        s = a[r],
        c = o[t];
      if (c && c.useFirstGroupAsInitialState) {
        let f = (0, Ct.default)(c, "actionItemGroups[0].actionItems", []),
          g = (0, Ct.default)(s, "mediaQueries", n.mediaQueryKeys);
        if (!qi(g, i.mediaQueryKey)) return;
        f.forEach((v) => {
          var _;
          let { config: E, actionTypeId: O } = v,
            b =
              (E == null || (_ = E.target) === null || _ === void 0
                ? void 0
                : _.useEventTarget) === !0
                ? { target: s.target, targets: s.targets }
                : E,
            M = xi({ config: b, event: s, elementApi: Re }),
            A = ps(O);
          M.forEach((w) => {
            let T = A ? vs(O)(w, v) : null;
            gs({
              destination: ds({ element: w, actionItem: v, elementApi: Re }, T),
              immediate: !0,
              store: e,
              element: w,
              eventId: r,
              actionItem: v,
              actionListId: t,
              pluginInstance: T,
            });
          });
        });
      }
    }
    function Vy({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, cn.default)(t, (r) => {
        if (!r.continuous) {
          let { actionListId: n, verbose: i } = r;
          _s(r, e),
            i &&
              e.dispatch(
                (0, be.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function hs({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
    }) {
      let { ixInstances: o, ixSession: a } = e.getState(),
        s = a.hasBoundaryNodes && r ? Re.getClosestElement(r, Ni) : null;
      (0, cn.default)(o, (c) => {
        let f = (0, Ct.default)(c, "actionItem.config.target.boundaryMode"),
          g = n ? c.eventStateKey === n : !0;
        if (c.actionListId === i && c.eventId === t && g) {
          if (s && f && !Re.elementContains(s, c.element)) return;
          _s(c, e),
            c.verbose &&
              e.dispatch(
                (0, be.actionListPlaybackChanged)({
                  actionListId: i,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Es({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
      groupIndex: o = 0,
      immediate: a,
      verbose: s,
    }) {
      var c;
      let { ixData: f, ixSession: g } = e.getState(),
        { events: v } = f,
        _ = v[t] || {},
        { mediaQueries: E = f.mediaQueryKeys } = _,
        O = (0, Ct.default)(f, `actionLists.${i}`, {}),
        { actionItemGroups: b, useFirstGroupAsInitialState: M } = O;
      if (!b || !b.length) return !1;
      o >= b.length && (0, Ct.default)(_, "config.loop") && (o = 0),
        o === 0 && M && o++;
      let w =
          (o === 0 || (o === 1 && M)) &&
          ls((c = _.action) === null || c === void 0 ? void 0 : c.actionTypeId)
            ? _.config.delay
            : void 0,
        T = (0, Ct.default)(b, [o, "actionItems"], []);
      if (!T.length || !qi(E, g.mediaQueryKey)) return !1;
      let q = g.hasBoundaryNodes && r ? Re.getClosestElement(r, Ni) : null,
        L = gW(T),
        D = !1;
      return (
        T.forEach((V, $) => {
          let { config: Z, actionTypeId: ie } = V,
            W = ps(ie),
            { target: R } = Z;
          if (!R) return;
          let p = R.boundaryMode ? q : null;
          xi({
            config: Z,
            event: _,
            eventTarget: r,
            elementRoot: p,
            elementApi: Re,
          }).forEach((x, U) => {
            let J = W ? vs(ie)(x, V) : null,
              re = W ? wW(ie)(x, V) : null;
            D = !0;
            let G = L === $ && U === 0,
              j = _W({ element: x, actionItem: V }),
              Q = ds({ element: x, actionItem: V, elementApi: Re }, J);
            gs({
              store: e,
              element: x,
              actionItem: V,
              eventId: t,
              eventTarget: r,
              eventStateKey: n,
              actionListId: i,
              groupIndex: o,
              isCarrier: G,
              computedStyle: j,
              destination: Q,
              immediate: a,
              verbose: s,
              pluginInstance: J,
              pluginDuration: re,
              instanceDelay: w,
            });
          });
        }),
        D
      );
    }
    function gs(e) {
      var t;
      let { store: r, computedStyle: n } = e,
        i = (0, nW.default)(e, fW),
        {
          element: o,
          actionItem: a,
          immediate: s,
          pluginInstance: c,
          continuous: f,
          restingValue: g,
          eventId: v,
        } = i,
        _ = !f,
        E = hW(),
        { ixElements: O, ixSession: b, ixData: M } = r.getState(),
        A = vW(O, o),
        { refState: w } = O[A] || {},
        T = Re.getRefType(o),
        q = b.reducedMotion && tt.ReducedMotionTypes[a.actionTypeId],
        L;
      if (q && f)
        switch (
          (t = M.events[v]) === null || t === void 0 ? void 0 : t.eventTypeId
        ) {
          case tt.EventTypeConsts.MOUSE_MOVE:
          case tt.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            L = g;
            break;
          default:
            L = 0.5;
            break;
        }
      let D = yW(o, w, n, a, Re, c);
      if (
        (r.dispatch(
          (0, be.instanceAdded)(
            (0, rW.default)(
              {
                instanceId: E,
                elementId: A,
                origin: D,
                refType: T,
                skipMotion: q,
                skipToValue: L,
              },
              i
            )
          )
        ),
        By(document.body, "ix2-animation-started", E),
        s)
      ) {
        QW(r, E);
        return;
      }
      jt({ store: r, select: ({ ixInstances: V }) => V[E], onChange: Hy }),
        _ && r.dispatch((0, be.instanceStarted)(E, b.tick));
    }
    function _s(e, t) {
      By(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: r, actionItem: n } = e,
        { ixElements: i } = t.getState(),
        { ref: o, refType: a } = i[r] || {};
      a === Fy && OW(o, n, Re), t.dispatch((0, be.instanceRemoved)(e.id));
    }
    function By(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function QW(e, t) {
      let { ixParameters: r } = e.getState();
      e.dispatch((0, be.instanceStarted)(t, 0)),
        e.dispatch((0, be.animationFrameChanged)(performance.now(), r));
      let { ixInstances: n } = e.getState();
      Hy(n[t], e);
    }
    function Hy(e, t) {
      let {
          active: r,
          continuous: n,
          complete: i,
          elementId: o,
          actionItem: a,
          actionTypeId: s,
          renderType: c,
          current: f,
          groupIndex: g,
          eventId: v,
          eventTarget: _,
          eventStateKey: E,
          actionListId: O,
          isCarrier: b,
          styleProp: M,
          verbose: A,
          pluginInstance: w,
        } = e,
        { ixData: T, ixSession: q } = t.getState(),
        { events: L } = T,
        D = L[v] || {},
        { mediaQueries: V = T.mediaQueryKeys } = D;
      if (qi(V, q.mediaQueryKey) && (n || r || i)) {
        if (f || (c === pW && i)) {
          t.dispatch((0, be.elementStateChanged)(o, s, f, a));
          let { ixElements: $ } = t.getState(),
            { ref: Z, refType: ie, refState: W } = $[o] || {},
            R = W && W[s];
          switch (ie) {
            case Fy: {
              EW(Z, W, R, v, a, M, Re, c, w);
              break;
            }
          }
        }
        if (i) {
          if (b) {
            let $ = Es({
              store: t,
              eventId: v,
              eventTarget: _,
              eventStateKey: E,
              actionListId: O,
              groupIndex: g + 1,
              verbose: A,
            });
            A &&
              !$ &&
              t.dispatch(
                (0, be.actionListPlaybackChanged)({
                  actionListId: O,
                  isPlaying: !1,
                })
              );
          }
          _s(e, t);
        }
      }
    }
  });
  var jy = u((mt) => {
    "use strict";
    var $W = Qt().default,
      ZW = st().default;
    Object.defineProperty(mt, "__esModule", { value: !0 });
    mt.actions = void 0;
    mt.destroy = ky;
    mt.init = nV;
    mt.setEnv = rV;
    mt.store = void 0;
    Ll();
    var JW = Qo(),
      eV = ZW(YE()),
      ys = cs(),
      tV = $W(_i());
    mt.actions = tV;
    var Di = (0, JW.createStore)(eV.default);
    mt.store = Di;
    function rV(e) {
      e() && (0, ys.observeRequests)(Di);
    }
    function nV(e) {
      ky(), (0, ys.startEngine)({ store: Di, rawData: e, allowEvents: !0 });
    }
    function ky() {
      (0, ys.stopEngine)(Di);
    }
  });
  var Qy = u((nK, Yy) => {
    var Ky = We(),
      zy = jy();
    zy.setEnv(Ky.env);
    Ky.define(
      "ix2",
      (Yy.exports = function () {
        return zy;
      })
    );
  });
  var Zy = u((iK, $y) => {
    var br = We();
    br.define(
      "links",
      ($y.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = br.env(),
          a = window.location,
          s = document.createElement("a"),
          c = "d--current",
          f = /index\.(html|php)$/,
          g = /\/$/,
          v,
          _;
        r.ready = r.design = r.preview = E;
        function E() {
          (i = o && br.env("design")),
            (_ = br.env("slug") || a.pathname || ""),
            br.scroll.off(b),
            (v = []);
          for (var A = document.links, w = 0; w < A.length; ++w) O(A[w]);
          v.length && (br.scroll.on(b), b());
        }
        function O(A) {
          var w =
            (i && A.getAttribute("href-disabled")) || A.getAttribute("href");
          if (((s.href = w), !(w.indexOf(":") >= 0))) {
            var T = e(A);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var q = e(s.hash);
              q.length && v.push({ link: T, sec: q, active: !1 });
              return;
            }
            if (!(w === "#" || w === "")) {
              var L = s.href === a.href || w === _ || (f.test(w) && g.test(_));
              M(T, c, L);
            }
          }
        }
        function b() {
          var A = n.scrollTop(),
            w = n.height();
          t.each(v, function (T) {
            var q = T.link,
              L = T.sec,
              D = L.offset().top,
              V = L.outerHeight(),
              $ = w * 0.5,
              Z = L.is(":visible") && D + V - $ >= A && D + $ <= A + w;
            T.active !== Z && ((T.active = Z), M(q, c, Z));
          });
        }
        function M(A, w, T) {
          var q = A.hasClass(w);
          (T && q) || (!T && !q) || (T ? A.addClass(w) : A.removeClass(w));
        }
        return r;
      })
    );
  });
  var em = u((oK, Jy) => {
    var Mi = We();
    Mi.define(
      "scroll",
      (Jy.exports = function (e) {
        var t = {
            sl_CLICK_EMPTY: "click.sl-empty-link",
            sl_CLICK_SCROLL: "click.sl-scroll",
          },
          r = window.location,
          n = O() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (R) {
              window.setTimeout(R, 15);
            },
          c = Mi.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .d-nav:not([data-no-scroll])",
          g = 'a[href="#"]',
          v = 'a[href*="#"]:not(.d-inline-block):not(' + g + ")",
          _ = '.sl-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(_));
        function O() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var b = /^#[a-zA-Z0-9][\w:.-]*$/;
        function M(R) {
          return b.test(R.hash) && R.host + R.pathname === r.host + r.pathname;
        }
        let A =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function w() {
          return (
            document.body.getAttribute("data-sl-scroll-motion") === "none" ||
            A.matches
          );
        }
        function T(R, p) {
          var F;
          switch (p) {
            case "add":
              (F = R.attr("tabindex")),
                F
                  ? R.attr("data-sl-tabindex-swap", F)
                  : R.attr("tabindex", "-1");
              break;
            case "remove":
              (F = R.attr("data-sl-tabindex-swap")),
                F
                  ? (R.attr("tabindex", F),
                    R.removeAttr("data-sl-tabindex-swap"))
                  : R.removeAttr("tabindex");
              break;
          }
          R.toggleClass("sl-force-outline-none", p === "add");
        }
        function q(R) {
          var p = R.currentTarget;
          if (
            !(
              Mi.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(p.className))
            )
          ) {
            var F = M(p) ? p.hash : "";
            if (F !== "") {
              var x = e(F);
              x.length &&
                (R && (R.preventDefault(), R.stopPropagation()),
                L(F, R),
                window.setTimeout(
                  function () {
                    D(x, function () {
                      T(x, "add"),
                        x.get(0).focus({ preventScroll: !0 }),
                        T(x, "remove");
                    });
                  },
                  R ? 0 : 300
                ));
            }
          }
        }
        function L(R) {
          if (
            r.hash !== R &&
            n &&
            n.pushState &&
            !(Mi.env.chrome && r.protocol === "file:")
          ) {
            var p = n.state && n.state.hash;
            p !== R && n.pushState({ hash: R }, "", R);
          }
        }
        function D(R, p) {
          var F = i.scrollTop(),
            x = V(R);
          if (F !== x) {
            var U = $(R, F, x),
              J = Date.now(),
              re = function () {
                var G = Date.now() - J;
                window.scroll(0, Z(F, x, G, U)),
                  G <= U ? s(re) : typeof p == "function" && p();
              };
            s(re);
          }
        }
        function V(R) {
          var p = e(f),
            F = p.css("position") === "fixed" ? p.outerHeight() : 0,
            x = R.offset().top - F;
          if (R.data("scroll") === "mid") {
            var U = i.height() - F,
              J = R.outerHeight();
            J < U && (x -= Math.round((U - J) / 2));
          }
          return x;
        }
        function $(R, p, F) {
          if (w()) return 0;
          var x = 1;
          return (
            a.add(R).each(function (U, J) {
              var re = parseFloat(J.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (x = re);
            }),
            (472.143 * Math.log(Math.abs(p - F) + 125) - 2e3) * x
          );
        }
        function Z(R, p, F, x) {
          return F > x ? p : R + (p - R) * ie(F / x);
        }
        function ie(R) {
          return R < 0.5
            ? 4 * R * R * R
            : (R - 1) * (2 * R - 2) * (2 * R - 2) + 1;
        }
        function W() {
          var { sl_CLICK_EMPTY: R, sl_CLICK_SCROLL: p } = t;
          o.on(p, v, q),
            o.on(R, g, function (F) {
              F.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return { ready: W };
      })
    );
  });
  var rm = u((aK, tm) => {
    var iV = We();
    iV.define(
      "touch",
      (tm.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            g;
          o.addEventListener("touchstart", v, !1),
            o.addEventListener("touchmove", _, !1),
            o.addEventListener("touchend", E, !1),
            o.addEventListener("touchcancel", O, !1),
            o.addEventListener("mousedown", v, !1),
            o.addEventListener("mousemove", _, !1),
            o.addEventListener("mouseup", E, !1),
            o.addEventListener("mouseout", O, !1);
          function v(M) {
            var A = M.touches;
            (A && A.length > 1) ||
              ((a = !0),
              A ? ((s = !0), (f = A[0].clientX)) : (f = M.clientX),
              (g = f));
          }
          function _(M) {
            if (a) {
              if (s && M.type === "mousemove") {
                M.preventDefault(), M.stopPropagation();
                return;
              }
              var A = M.touches,
                w = A ? A[0].clientX : M.clientX,
                T = w - g;
              (g = w),
                Math.abs(T) > c &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", M, { direction: T > 0 ? "right" : "left" }), O());
            }
          }
          function E(M) {
            if (a && ((a = !1), s && M.type === "mouseup")) {
              M.preventDefault(), M.stopPropagation(), (s = !1);
              return;
            }
          }
          function O() {
            a = !1;
          }
          function b() {
            o.removeEventListener("touchstart", v, !1),
              o.removeEventListener("touchmove", _, !1),
              o.removeEventListener("touchend", E, !1),
              o.removeEventListener("touchcancel", O, !1),
              o.removeEventListener("mousedown", v, !1),
              o.removeEventListener("mousemove", _, !1),
              o.removeEventListener("mouseup", E, !1),
              o.removeEventListener("mouseout", O, !1),
              (o = null);
          }
          this.destroy = b;
        }
        function i(o, a, s) {
          var c = e.Event(o, { originalEvent: a });
          e(a.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var om = u((sK, im) => {
    var Kt = We(),
      oV = Sr(),
      nt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      nm = !0,
      aV = /^#[a-zA-Z0-9\-_]+$/;
    Kt.define(
      "dropdown",
      (im.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = Kt.env(),
          o = !1,
          a,
          s = Kt.env.touch,
          c = ".d-dropdown",
          f = "d--open",
          g = oV.triggers,
          v = 900,
          _ = "focusout" + c,
          E = "keydown" + c,
          O = "mouseenter" + c,
          b = "mousemove" + c,
          M = "mouseleave" + c,
          A = (s ? "click" : "mouseup") + c,
          w = "w-close" + c,
          T = "setting" + c,
          q = e(document),
          L;
        (n.ready = D),
          (n.design = function () {
            o && p(), (o = !1), D();
          }),
          (n.preview = function () {
            (o = !0), D();
          });
        function D() {
          (a = i && Kt.env("design")), (L = q.find(c)), L.each(V);
        }
        function V(d, H) {
          var K = e(H),
            N = e.data(H, c);
          N ||
            (N = e.data(H, c, {
              open: !1,
              el: K,
              config: {},
              selectedIdx: -1,
            })),
            (N.toggle = N.el.children(".d-dropdown-toggle")),
            (N.list = N.el.children(".d-dropdown-list")),
            (N.links = N.list.find("a:not(.d-dropdown .d-dropdown a)")),
            (N.complete = U(N)),
            (N.mouseLeave = re(N)),
            (N.mouseUpOutside = x(N)),
            (N.mouseMoveOutside = G(N)),
            $(N);
          var se = N.toggle.attr("id"),
            Oe = N.list.attr("id");
          se || (se = "d-dropdown-toggle-" + d),
            Oe || (Oe = "d-dropdown-list-" + d),
            N.toggle.attr("id", se),
            N.toggle.attr("aria-controls", Oe),
            N.toggle.attr("aria-haspopup", "menu"),
            N.toggle.attr("aria-expanded", "false"),
            N.toggle
              .find(".d-icons-dropdown-toggle")
              .attr("aria-hidden", "true"),
            N.toggle.prop("tagName") !== "BUTTON" &&
              (N.toggle.attr("role", "button"),
              N.toggle.attr("tabindex") || N.toggle.attr("tabindex", "0")),
            N.list.attr("id", Oe),
            N.list.attr("aria-labelledby", se),
            N.links.each(function (h, k) {
              k.hasAttribute("tabindex") || k.setAttribute("tabindex", "0"),
                aV.test(k.hash) && k.addEventListener("click", R.bind(null, N));
            }),
            N.el.off(c),
            N.toggle.off(c),
            N.nav && N.nav.off(c);
          var fe = ie(N, nm);
          a && N.el.on(T, Z(N)),
            a ||
              (i && ((N.hovering = !1), R(N)),
              N.config.hover && N.toggle.on(O, J(N)),
              N.el.on(w, fe),
              N.el.on(E, j(N)),
              N.el.on(_, X(N)),
              N.toggle.on(A, fe),
              N.toggle.on(E, B(N)),
              (N.nav = N.el.closest(".d-nav")),
              N.nav.on(w, fe));
        }
        function $(d) {
          var H = Number(d.el.css("z-index"));
          (d.manageZ = H === v || H === v + 1),
            (d.config = {
              hover: d.el.attr("data-hover") === "true" && !s,
              delay: d.el.attr("data-delay"),
            });
        }
        function Z(d) {
          return function (H, K) {
            (K = K || {}),
              $(d),
              K.open === !0 && W(d, !0),
              K.open === !1 && R(d, { immediate: !0 });
          };
        }
        function ie(d, H) {
          return r(function (K) {
            if (d.open || (K && K.type === "w-close"))
              return R(d, { forceClose: H });
            W(d);
          });
        }
        function W(d) {
          if (!d.open) {
            F(d),
              (d.open = !0),
              d.list.addClass(f),
              d.toggle.addClass(f),
              d.toggle.attr("aria-expanded", "true"),
              g.intro(0, d.el[0]),
              Kt.redraw.up(),
              d.manageZ && d.el.css("z-index", v + 1);
            var H = Kt.env("editor");
            a || q.on(A, d.mouseUpOutside),
              d.hovering && !H && d.el.on(M, d.mouseLeave),
              d.hovering && H && q.on(b, d.mouseMoveOutside),
              window.clearTimeout(d.delayId);
          }
        }
        function R(d, { immediate: H, forceClose: K } = {}) {
          if (d.open && !(d.config.hover && d.hovering && !K)) {
            d.toggle.attr("aria-expanded", "false"), (d.open = !1);
            var N = d.config;
            if (
              (g.outro(0, d.el[0]),
              q.off(A, d.mouseUpOutside),
              q.off(b, d.mouseMoveOutside),
              d.el.off(M, d.mouseLeave),
              window.clearTimeout(d.delayId),
              !N.delay || H)
            )
              return d.complete();
            d.delayId = window.setTimeout(d.complete, N.delay);
          }
        }
        function p() {
          q.find(c).each(function (d, H) {
            e(H).triggerHandler(w);
          });
        }
        function F(d) {
          var H = d.el[0];
          L.each(function (K, N) {
            var se = e(N);
            se.is(H) || se.has(H).length || se.triggerHandler(w);
          });
        }
        function x(d) {
          return (
            d.mouseUpOutside && q.off(A, d.mouseUpOutside),
            r(function (H) {
              if (d.open) {
                var K = e(H.target);
                if (!K.closest(".d-dropdown-toggle").length) {
                  var N = e.inArray(d.el[0], K.parents(c)) === -1,
                    se = Kt.env("editor");
                  if (N) {
                    if (se) {
                      var Oe =
                          K.parents().length === 1 &&
                          K.parents("svg").length === 1,
                        fe = K.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (Oe || fe) return;
                    }
                    R(d);
                  }
                }
              }
            })
          );
        }
        function U(d) {
          return function () {
            d.list.removeClass(f),
              d.toggle.removeClass(f),
              d.manageZ && d.el.css("z-index", "");
          };
        }
        function J(d) {
          return function () {
            (d.hovering = !0), W(d);
          };
        }
        function re(d) {
          return function () {
            (d.hovering = !1), d.links.is(":focus") || R(d);
          };
        }
        function G(d) {
          return r(function (H) {
            if (d.open) {
              var K = e(H.target),
                N = e.inArray(d.el[0], K.parents(c)) === -1;
              if (N) {
                var se = K.parents(".w-editor-bem-EditorHoverControls").length,
                  Oe = K.parents(".w-editor-bem-RTToolbar").length,
                  fe = e(".w-editor-bem-EditorOverlay"),
                  h =
                    fe.find(".w-editor-edit-outline").length ||
                    fe.find(".w-editor-bem-RTToolbar").length;
                if (se || Oe || h) return;
                (d.hovering = !1), R(d);
              }
            }
          });
        }
        function j(d) {
          return function (H) {
            if (!(a || !d.open))
              switch (
                ((d.selectedIdx = d.links.index(document.activeElement)),
                H.keyCode)
              ) {
                case nt.HOME:
                  return d.open
                    ? ((d.selectedIdx = 0), Q(d), H.preventDefault())
                    : void 0;
                case nt.END:
                  return d.open
                    ? ((d.selectedIdx = d.links.length - 1),
                      Q(d),
                      H.preventDefault())
                    : void 0;
                case nt.ESCAPE:
                  return R(d), d.toggle.focus(), H.stopPropagation();
                case nt.ARROW_RIGHT:
                case nt.ARROW_DOWN:
                  return (
                    (d.selectedIdx = Math.min(
                      d.links.length - 1,
                      d.selectedIdx + 1
                    )),
                    Q(d),
                    H.preventDefault()
                  );
                case nt.ARROW_LEFT:
                case nt.ARROW_UP:
                  return (
                    (d.selectedIdx = Math.max(-1, d.selectedIdx - 1)),
                    Q(d),
                    H.preventDefault()
                  );
              }
          };
        }
        function Q(d) {
          d.links[d.selectedIdx] && d.links[d.selectedIdx].focus();
        }
        function B(d) {
          var H = ie(d, nm);
          return function (K) {
            if (!a) {
              if (!d.open)
                switch (K.keyCode) {
                  case nt.ARROW_UP:
                  case nt.ARROW_DOWN:
                    return K.stopPropagation();
                }
              switch (K.keyCode) {
                case nt.SPACE:
                case nt.ENTER:
                  return H(), K.stopPropagation(), K.preventDefault();
              }
            }
          };
        }
        function X(d) {
          return r(function (H) {
            var { relatedTarget: K, target: N } = H,
              se = d.el[0],
              Oe = se.contains(K) || se.contains(N);
            return Oe || R(d), H.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var am = u((ms) => {
    "use strict";
    Object.defineProperty(ms, "__esModule", { value: !0 });
    ms.default = sV;
    function sV(e, t, r, n, i, o, a, s, c, f, g, v, _) {
      return function (E) {
        e(E);
        var O = E.form,
          b = {
            name: O.attr("data-name") || O.attr("name") || "Untitled Form",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              O.html()
            ),
            trackingCookies: n(),
          };
        let M = O.attr("data-sl-flow");
        M && (b.slFlow = M), i(E);
        var A = o(O, b.fields);
        if (A) return a(A);
        if (((b.fileUploads = s(O)), c(E), !f)) {
          g(E);
          return;
        }
        v.ajax({
          url: _,
          type: "POST",
          data: b,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (w) {
            w && w.code === 200 && (E.success = !0), g(E);
          })
          .fail(function () {
            g(E);
          });
      };
    }
  });
  var um = u((cK, sm) => {
    var Fi = We();
 
  });
  var lm = u((lK, cm) => {
    var xt = We(),
      uV = Sr(),
      Pe = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    xt.define(
      "navbar",
      (cm.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          c,
          f,
          g,
          v = xt.env(),
          _ = '<div class="d-nav-overlay" data-sl-ignore />',
          E = ".d-nav",
          O = "d--open",
          b = "d--nav-dropdown-open",
          M = "d--nav-dropdown-toggle-open",
          A = "d--nav-dropdown-list-open",
          w = "d--nav-link-open",
          T = uV.triggers,
          q = e();
        (r.ready = r.design = r.preview = L),
          (r.destroy = function () {
            (q = e()), D(), c && c.length && c.each(ie);
          });
        function L() {
          (f = v && xt.env("design")),
            (g = xt.env("editor")),
            (s = e(document.body)),
            (c = o.find(E)),
            c.length && (c.each(Z), D(), V());
        }
        function D() {
          xt.resize.off($);
        }
        function V() {
          xt.resize.on($);
        }
        function $() {
          c.each(X);
        }
        function Z(h, k) {
          var ee = e(k),
            Y = e.data(k, E);
          Y ||
            (Y = e.data(k, E, {
              open: !1,
              el: ee,
              config: {},
              selectedIdx: -1,
            })),
            (Y.menu = ee.find(".d-nav-menu")),
            (Y.links = Y.menu.find(".d-nav-link")),
            (Y.dropdowns = Y.menu.find(".d-dropdown")),
            (Y.dropdownToggle = Y.menu.find(".d-dropdown-toggle")),
            (Y.dropdownList = Y.menu.find(".d-dropdown-list")),
            (Y.button = ee.find(".d-nav-button")),
            (Y.container = ee.find(".d-container")),
            (Y.overlayContainerId = "d-nav-overlay-" + h),
            (Y.outside = Q(Y));
          var _e = ee.find(".d-nav-brand");
          _e &&
            _e.attr("href") === "/" &&
            _e.attr("aria-label") == null &&
            _e.attr("aria-label", "home"),
            Y.button.attr("style", "-webkit-user-select: text;"),
            Y.button.attr("aria-label") == null &&
              Y.button.attr("aria-label", "menu"),
            Y.button.attr("role", "button"),
            Y.button.attr("tabindex", "0"),
            Y.button.attr("aria-controls", Y.overlayContainerId),
            Y.button.attr("aria-haspopup", "menu"),
            Y.button.attr("aria-expanded", "false"),
            Y.el.off(E),
            Y.button.off(E),
            Y.menu.off(E),
            p(Y),
            f
              ? (W(Y), Y.el.on("setting" + E, F(Y)))
              : (R(Y),
                Y.button.on("click" + E, G(Y)),
                Y.menu.on("click" + E, "a", j(Y)),
                Y.button.on("keydown" + E, x(Y)),
                Y.el.on("keydown" + E, U(Y))),
            X(h, k);
        }
        function ie(h, k) {
          var ee = e.data(k, E);
          ee && (W(ee), e.removeData(k, E));
        }
        function W(h) {
          h.overlay && (fe(h, !0), h.overlay.remove(), (h.overlay = null));
        }
        function R(h) {
          h.overlay ||
            ((h.overlay = e(_).appendTo(h.el)),
            h.overlay.attr("id", h.overlayContainerId),
            (h.parent = h.menu.parent()),
            fe(h, !0));
        }
        function p(h) {
          var k = {},
            ee = h.config || {},
            Y = (k.animation = h.el.attr("data-animation") || "default");
          (k.animOver = /^over/.test(Y)),
            (k.animDirect = /left$/.test(Y) ? -1 : 1),
            ee.animation !== Y && h.open && t.defer(re, h),
            (k.easing = h.el.attr("data-easing") || "ease"),
            (k.easing2 = h.el.attr("data-easing2") || "ease");
          var _e = h.el.attr("data-duration");
          (k.duration = _e != null ? Number(_e) : 400),
            (k.docHeight = h.el.attr("data-doc-height")),
            (h.config = k);
        }
        function F(h) {
          return function (k, ee) {
            ee = ee || {};
            var Y = i.width();
            p(h),
              ee.open === !0 && se(h, !0),
              ee.open === !1 && fe(h, !0),
              h.open &&
                t.defer(function () {
                  Y !== i.width() && re(h);
                });
          };
        }
        function x(h) {
          return function (k) {
            switch (k.keyCode) {
              case Pe.SPACE:
              case Pe.ENTER:
                return G(h)(), k.preventDefault(), k.stopPropagation();
              case Pe.ESCAPE:
                return fe(h), k.preventDefault(), k.stopPropagation();
              case Pe.ARROW_RIGHT:
              case Pe.ARROW_DOWN:
              case Pe.HOME:
              case Pe.END:
                return h.open
                  ? (k.keyCode === Pe.END
                      ? (h.selectedIdx = h.links.length - 1)
                      : (h.selectedIdx = 0),
                    J(h),
                    k.preventDefault(),
                    k.stopPropagation())
                  : (k.preventDefault(), k.stopPropagation());
            }
          };
        }
        function U(h) {
          return function (k) {
            if (h.open)
              switch (
                ((h.selectedIdx = h.links.index(document.activeElement)),
                k.keyCode)
              ) {
                case Pe.HOME:
                case Pe.END:
                  return (
                    k.keyCode === Pe.END
                      ? (h.selectedIdx = h.links.length - 1)
                      : (h.selectedIdx = 0),
                    J(h),
                    k.preventDefault(),
                    k.stopPropagation()
                  );
                case Pe.ESCAPE:
                  return (
                    fe(h),
                    h.button.focus(),
                    k.preventDefault(),
                    k.stopPropagation()
                  );
                case Pe.ARROW_LEFT:
                case Pe.ARROW_UP:
                  return (
                    (h.selectedIdx = Math.max(-1, h.selectedIdx - 1)),
                    J(h),
                    k.preventDefault(),
                    k.stopPropagation()
                  );
                case Pe.ARROW_RIGHT:
                case Pe.ARROW_DOWN:
                  return (
                    (h.selectedIdx = Math.min(
                      h.links.length - 1,
                      h.selectedIdx + 1
                    )),
                    J(h),
                    k.preventDefault(),
                    k.stopPropagation()
                  );
              }
          };
        }
        function J(h) {
          if (h.links[h.selectedIdx]) {
            var k = h.links[h.selectedIdx];
            k.focus(), j(k);
          }
        }
        function re(h) {
          h.open && (fe(h, !0), se(h, !0));
        }
        function G(h) {
          return a(function () {
            h.open ? fe(h) : se(h);
          });
        }
        function j(h) {
          return function (k) {
            var ee = e(this),
              Y = ee.attr("href");
            if (!xt.validClick(k.currentTarget)) {
              k.preventDefault();
              return;
            }
            Y && Y.indexOf("#") === 0 && h.open && fe(h);
          };
        }
        function Q(h) {
          return (
            h.outside && o.off("click" + E, h.outside),
            function (k) {
              var ee = e(k.target);
              (g && ee.closest(".w-editor-bem-EditorOverlay").length) ||
                B(h, ee);
            }
          );
        }
        var B = a(function (h, k) {
          if (h.open) {
            var ee = k.closest(".d-nav-menu");
            h.menu.is(ee) || fe(h);
          }
        });
        function X(h, k) {
          var ee = e.data(k, E),
            Y = (ee.collapsed = ee.button.css("display") !== "none");
          if ((ee.open && !Y && !f && fe(ee, !0), ee.container.length)) {
            var _e = H(ee);
            ee.links.each(_e), ee.dropdowns.each(_e);
          }
          ee.open && Oe(ee);
        }
        var d = "max-width";
        function H(h) {
          var k = h.container.css(d);
          return (
            k === "none" && (k = ""),
            function (ee, Y) {
              (Y = e(Y)), Y.css(d, ""), Y.css(d) === "none" && Y.css(d, k);
            }
          );
        }
        function K(h, k) {
          k.setAttribute("data-nav-menu-open", "");
        }
        function N(h, k) {
          k.removeAttribute("data-nav-menu-open");
        }
        function se(h, k) {
          if (h.open) return;
          (h.open = !0),
            h.menu.each(K),
            h.links.addClass(w),
            h.dropdowns.addClass(b),
            h.dropdownToggle.addClass(M),
            h.dropdownList.addClass(A),
            h.button.addClass(O);
          var ee = h.config,
            Y = ee.animation;
          (Y === "none" || !n.support.transform || ee.duration <= 0) &&
            (k = !0);
          var _e = Oe(h),
            Lt = h.menu.outerHeight(!0),
            ht = h.menu.outerWidth(!0),
            l = h.el.height(),
            y = h.el[0];
          if (
            (X(0, y),
            T.intro(0, y),
            xt.redraw.up(),
            f || o.on("click" + E, h.outside),
            k)
          ) {
            m();
            return;
          }
          var I = "transform " + ee.duration + "ms " + ee.easing;
          if (
            (h.overlay &&
              ((q = h.menu.prev()), h.overlay.show().append(h.menu)),
            ee.animOver)
          ) {
            n(h.menu)
              .add(I)
              .set({ x: ee.animDirect * ht, height: _e })
              .start({ x: 0 })
              .then(m),
              h.overlay && h.overlay.width(ht);
            return;
          }
          var S = l + Lt;
          n(h.menu).add(I).set({ y: -S }).start({ y: 0 }).then(m);
          function m() {
            h.button.attr("aria-expanded", "true");
          }
        }
        function Oe(h) {
          var k = h.config,
            ee = k.docHeight ? o.height() : s.height();
          return (
            k.animOver
              ? h.menu.height(ee)
              : h.el.css("position") !== "fixed" &&
                (ee -= h.el.outerHeight(!0)),
            h.overlay && h.overlay.height(ee),
            ee
          );
        }
        function fe(h, k) {
          if (!h.open) return;
          (h.open = !1), h.button.removeClass(O);
          var ee = h.config;
          if (
            ((ee.animation === "none" ||
              !n.support.transform ||
              ee.duration <= 0) &&
              (k = !0),
            T.outro(0, h.el[0]),
            o.off("click" + E, h.outside),
            k)
          ) {
            n(h.menu).stop(), y();
            return;
          }
          var Y = "transform " + ee.duration + "ms " + ee.easing2,
            _e = h.menu.outerHeight(!0),
            Lt = h.menu.outerWidth(!0),
            ht = h.el.height();
          if (ee.animOver) {
            n(h.menu)
              .add(Y)
              .start({ x: Lt * ee.animDirect })
              .then(y);
            return;
          }
          var l = ht + _e;
          n(h.menu).add(Y).start({ y: -l }).then(y);
          function y() {
            h.menu.height(""),
              n(h.menu).set({ x: 0, y: 0 }),
              h.menu.each(N),
              h.links.removeClass(w),
              h.dropdowns.removeClass(b),
              h.dropdownToggle.removeClass(M),
              h.dropdownList.removeClass(A),
              h.overlay &&
                h.overlay.children().length &&
                (q.length ? h.menu.insertAfter(q) : h.menu.prependTo(h.parent),
                h.overlay.attr("style", "").hide()),
              h.el.triggerHandler("w-close"),
              h.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var dm = u((fK, fm) => {
    var qt = We(),
      cV = Sr();
    qt.define(
      "tabs",
      (fm.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = qt.env,
          s = a.safari,
          c = a(),
          f = "d-tab",
          g = "d--pane",
          v = ".d-tabs",
          _ = "d--current",
          E = "d--tab-active",
          O = cV.triggers,
          b = !1;
        (t.ready = t.design = t.preview = M),
          (t.redraw = function () {
            (b = !0), M(), (b = !1);
          }),
          (t.destroy = function () {
            (i = n.find(v)), i.length && (i.each(T), A());
          });
        function M() {
          (o = c && qt.env("design")),
            (i = n.find(v)),
            i.length &&
              (i.each(q), qt.env("preview") && !b && i.each(T), A(), w());
        }
        function A() {
          qt.redraw.off(t.redraw);
        }
        function w() {
          qt.redraw.on(t.redraw);
        }
        function T(W, R) {
          var p = e.data(R, v);
          p &&
            (p.links && p.links.each(O.reset),
            p.panes && p.panes.each(O.reset));
        }
        function q(W, R) {
          var p = v.substr(1) + "-" + W,
            F = e(R),
            x = e.data(R, v);
          if (
            (x || (x = e.data(R, v, { el: F, config: {} })),
            (x.current = null),
            (x.tabIdentifier = p + "-" + f),
            (x.paneIdentifier = p + "-" + g),
            (x.menu = F.children(".d-tab-menu")),
            (x.links = x.menu.children(".d-inline-block")),
            (x.content = F.children(".d-tab-content")),
            (x.panes = x.content.children(".d-tab-pane")),
            x.el.off(v),
            x.links.off(v),
            x.menu.attr("role", "tablist"),
            x.links.attr("tabindex", "-1"),
            L(x),
            !o)
          ) {
            x.links.on("click" + v, V(x)), x.links.on("keydown" + v, $(x));
            var U = x.links.filter("." + _),
              J = U.attr(f);
            J && Z(x, { tab: J, immediate: !0 });
          }
        }
        function L(W) {
          var R = {};
          R.easing = W.el.attr("data-easing") || "ease";
          var p = parseInt(W.el.attr("data-duration-in"), 10);
          p = R.intro = p === p ? p : 0;
          var F = parseInt(W.el.attr("data-duration-out"), 10);
          (F = R.outro = F === F ? F : 0),
            (R.immediate = !p && !F),
            (W.config = R);
        }
        function D(W) {
          var R = W.current;
          return Array.prototype.findIndex.call(
            W.links,
            (p) => p.getAttribute(f) === R,
            null
          );
        }
        function V(W) {
          return function (R) {
            R.preventDefault();
            var p = R.currentTarget.getAttribute(f);
            p && Z(W, { tab: p });
          };
        }
        function $(W) {
          return function (R) {
            var p = D(W),
              F = R.key,
              x = {
                ArrowLeft: p - 1,
                ArrowUp: p - 1,
                ArrowRight: p + 1,
                ArrowDown: p + 1,
                End: W.links.length - 1,
                Home: 0,
              };
            if (F in x) {
              R.preventDefault();
              var U = x[F];
              U === -1 && (U = W.links.length - 1),
                U === W.links.length && (U = 0);
              var J = W.links[U],
                re = J.getAttribute(f);
              re && Z(W, { tab: re });
            }
          };
        }
        function Z(W, R) {
          R = R || {};
          var p = W.config,
            F = p.easing,
            x = R.tab;
          if (x !== W.current) {
            W.current = x;
            var U;
            W.links.each(function (X, d) {
              var H = e(d);
              if (R.immediate || p.immediate) {
                var K = W.panes[X];
                d.id || (d.id = W.tabIdentifier + "-" + X),
                  K.id || (K.id = W.paneIdentifier + "-" + X),
                  (d.href = "#" + K.id),
                  d.setAttribute("role", "tab"),
                  d.setAttribute("aria-controls", K.id),
                  d.setAttribute("aria-selected", "false"),
                  K.setAttribute("role", "tabpanel"),
                  K.setAttribute("aria-labelledby", d.id);
              }
              d.getAttribute(f) === x
                ? ((U = d),
                  H.addClass(_)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(O.intro))
                : H.hasClass(_) &&
                  H.removeClass(_)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(O.outro);
            });
            var J = [],
              re = [];
            W.panes.each(function (X, d) {
              var H = e(d);
              d.getAttribute(f) === x ? J.push(d) : H.hasClass(E) && re.push(d);
            });
            var G = e(J),
              j = e(re);
            if (R.immediate || p.immediate) {
              G.addClass(E).each(O.intro),
                j.removeClass(E),
                b || qt.redraw.up();
              return;
            } else {
              var Q = window.scrollX,
                B = window.scrollY;
              U.focus(), window.scrollTo(Q, B);
            }
            j.length && p.outro
              ? (j.each(O.outro),
                r(j)
                  .add("opacity " + p.outro + "ms " + F, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => ie(p, j, G)))
              : ie(p, j, G);
          }
        }
        function ie(W, R, p) {
          if (
            (R.removeClass(E).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            p.addClass(E).each(O.intro),
            qt.redraw.up(),
            !W.intro)
          )
            return r(p).set({ opacity: 1 });
          r(p)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + W.intro + "ms " + W.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Ls();
  Ds();
  Fs();
  Xs();
  Sr();
  Qy();
  Zy();
  em();
  rm();
  om();
  um();
  lm();
  dm();
})();

spacelDevelopment.require("ix2").init({
  events: {
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676370525248,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".system-icon-wrapper",
        originalId: "43b7d6db-1138-4d57-a861-e7895d94117a",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".system-icon-wrapper",
          originalId: "43b7d6db-1138-4d57-a861-e7895d94117a",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676378465757,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".system-icon-wrapper",
        originalId: "43b7d6db-1138-4d57-a861-e7895d94117a",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".system-icon-wrapper",
          originalId: "43b7d6db-1138-4d57-a861-e7895d94117a",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676378465757,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "43b7d6db-1138-4d57-a861-e7895d941186",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "43b7d6db-1138-4d57-a861-e7895d941186",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676379084922,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "43b7d6db-1138-4d57-a861-e7895d941186",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "43b7d6db-1138-4d57-a861-e7895d941186",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676379084922,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".faq",
        originalId: "a89538ab-10c6-31bb-9952-738ff77295a5",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".faq",
          originalId: "a89538ab-10c6-31bb-9952-738ff77295a5",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676445881955,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-17",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".faq",
        originalId: "a89538ab-10c6-31bb-9952-738ff77295a5",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".faq",
          originalId: "a89538ab-10c6-31bb-9952-738ff77295a5",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676445881955,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-21",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac6b27705d70094d80e0",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac6b27705d70094d80e0",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676535346819,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac7e1796c3392887d071|6d0f6c79-041c-90f9-ad5c-eacf24d26297",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac7e1796c3392887d071|6d0f6c79-041c-90f9-ad5c-eacf24d26297",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1600235063090,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac7e1796c3392887d071|6d0f6c79-041c-90f9-ad5c-eacf24d26297",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac7e1796c3392887d071|6d0f6c79-041c-90f9-ad5c-eacf24d26297",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1600235063090,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".tab-link",
        originalId:
          "macielDevRoom|a5ab68ec-dd89-a83b-ac88-c94c433aaaef",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tab-link",
          originalId:
            "macielDevRoom|a5ab68ec-dd89-a83b-ac88-c94c433aaaef",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676882043647,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".tab-link",
        originalId:
          "macielDevRoom|a5ab68ec-dd89-a83b-ac88-c94c433aaaef",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tab-link",
          originalId:
            "macielDevRoom|a5ab68ec-dd89-a83b-ac88-c94c433aaaef",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676882043648,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".testimonial-tab-link",
        originalId: "164d513c-6991-b29c-42d0-a045bd1250ad",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".testimonial-tab-link",
          originalId: "164d513c-6991-b29c-42d0-a045bd1250ad",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676884663279,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-31",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".testimonial-tab-link",
        originalId: "164d513c-6991-b29c-42d0-a045bd1250ad",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".testimonial-tab-link",
          originalId: "164d513c-6991-b29c-42d0-a045bd1250ad",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676884663279,
    },
    "e-34": {
      id: "e-34",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-33",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f225c0466e62bac25f101a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f225c0466e62bac25f101a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676967694282,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f225c0466e62bac25f101a|900f43e2-340e-f826-8fb8-05a81aebeed9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f225c0466e62bac25f101a|900f43e2-340e-f826-8fb8-05a81aebeed9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676969643441,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63e4ac538738ce8fe6c7b293|b3587bd8-0d65-a16c-67ca-e03480910d1e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac538738ce8fe6c7b293|b3587bd8-0d65-a16c-67ca-e03480910d1e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676984115896,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63e4ac538738ce8fe6c7b293|b3587bd8-0d65-a16c-67ca-e03480910d1e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac538738ce8fe6c7b293|b3587bd8-0d65-a16c-67ca-e03480910d1e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676984115896,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        selector: ".tab-link",
        originalId:
          "macielDevRoom|a5ab68ec-dd89-a83b-ac88-c94c433aaaf2",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tab-link",
          originalId:
            "macielDevRoom|a5ab68ec-dd89-a83b-ac88-c94c433aaaf2",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676985893528,
    },
    "e-40": {
      id: "e-40",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        selector: ".tab-link",
        originalId:
          "macielDevRoom|a5ab68ec-dd89-a83b-ac88-c94c433aaaf2",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tab-link",
          originalId:
            "macielDevRoom|a5ab68ec-dd89-a83b-ac88-c94c433aaaf2",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676985893529,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-42",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|regionalTransition",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|regionalTransition",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676993770357,
    },
    "e-44": {
      id: "e-44",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-45",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|h1Transition",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|h1Transition",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677063694669,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-47",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|btnTransitions",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|btnTransitions",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677063700381,
    },
    "e-48": {
      id: "e-48",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|descTransition",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|descTransition",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677063706200,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-51",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|dashTransition",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|dashTransition",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677063713835,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|wideHover",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|wideHover",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677064525948,
    },
    "e-60": {
      id: "e-60",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-61",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|waitingForTransition",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|waitingForTransition",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677064532689,
    },
    "e-62": {
      id: "e-62",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-63",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|regionalTransition",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|regionalTransition",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677064548330,
    },
    "e-64": {
      id: "e-64",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-65",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|23a76b24-7c6b-52d4-355f-c679e3b61884",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|23a76b24-7c6b-52d4-355f-c679e3b61884",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677064584965,
    },
    "e-66": {
      id: "e-66",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-67",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "testCardTransition",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "testCardTransition",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677064643008,
    },
    "e-68": {
      id: "e-68",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-69",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|23a76b24-7c6b-52d4-355f-c679e3b61884",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|23a76b24-7c6b-52d4-355f-c679e3b61884",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677065607270,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-68",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|23a76b24-7c6b-52d4-355f-c679e3b61884",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|23a76b24-7c6b-52d4-355f-c679e3b61884",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677065607271,
    },
    "e-70": {
      id: "e-70",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-71",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac538738ce8fe6c7b293|348a92a7-61eb-0071-2bec-394bc00222de",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac538738ce8fe6c7b293|348a92a7-61eb-0071-2bec-394bc00222de",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677065871515,
    },
    "e-72": {
      id: "e-72",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-73",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac538738ce8fe6c7b293|6aed74d6-40f3-83dd-e65f-e3549500fe87",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac538738ce8fe6c7b293|6aed74d6-40f3-83dd-e65f-e3549500fe87",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677065881973,
    },
    "e-74": {
      id: "e-74",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-75",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac538738ce8fe6c7b293|e9101152-8c1d-b163-d3a9-db9f63258e19",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac538738ce8fe6c7b293|e9101152-8c1d-b163-d3a9-db9f63258e19",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677065889623,
    },
    "e-76": {
      id: "e-76",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-77",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac538738ce8fe6c7b293|b9894c69-6631-8e42-65b0-10caf9a38bce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac538738ce8fe6c7b293|b9894c69-6631-8e42-65b0-10caf9a38bce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677065920218,
    },
    "e-78": {
      id: "e-78",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-79",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac538738ce8fe6c7b293|b3587bd8-0d65-a16c-67ca-e03480910d1e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac538738ce8fe6c7b293|b3587bd8-0d65-a16c-67ca-e03480910d1e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677065943873,
    },
    "e-80": {
      id: "e-80",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-81",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac538738ce8fe6c7b293|2b787e0d-75be-a795-a606-9241a607f3e7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac538738ce8fe6c7b293|2b787e0d-75be-a795-a606-9241a607f3e7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677065952955,
    },
    "e-82": {
      id: "e-82",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-83",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac538738ce8fe6c7b293|465de88d-6ca2-9217-eb04-68e62da74128",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac538738ce8fe6c7b293|465de88d-6ca2-9217-eb04-68e62da74128",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677065958210,
    },
    "e-84": {
      id: "e-84",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-85",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac538738ce8fe6c7b293|6dcbbc96-1ebb-6c7a-8f1f-c307bb4b172a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac538738ce8fe6c7b293|6dcbbc96-1ebb-6c7a-8f1f-c307bb4b172a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677065964077,
    },
    "e-86": {
      id: "e-86",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-87",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac538738ce8fe6c7b293|f51ce949-58e0-3020-b2bf-c79e9a9f44f9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac538738ce8fe6c7b293|f51ce949-58e0-3020-b2bf-c79e9a9f44f9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677065976263,
    },
    "e-88": {
      id: "e-88",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-89",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac538738ce8fe6c7b293|506bc41e-e4eb-08d4-869c-aa648c9c03e0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac538738ce8fe6c7b293|506bc41e-e4eb-08d4-869c-aa648c9c03e0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677065982496,
    },
    "e-90": {
      id: "e-90",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-91",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "contactTransitions",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "contactTransitions",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677065991841,
    },
    "e-92": {
      id: "e-92",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-93",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac538738ce8fe6c7b293|a519678c-a64d-215e-b519-0f542aa12420",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac538738ce8fe6c7b293|a519678c-a64d-215e-b519-0f542aa12420",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066027649,
    },
    "e-94": {
      id: "e-94",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-95",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac538738ce8fe6c7b293|80750d1b-45c8-0947-3849-dcbc43cac5eb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac538738ce8fe6c7b293|80750d1b-45c8-0947-3849-dcbc43cac5eb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066038723,
    },
    "e-96": {
      id: "e-96",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-97",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac6b27705d70094d80e0|fa0971a1-8dd9-b1bd-3cad-a58951b40282",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac6b27705d70094d80e0|fa0971a1-8dd9-b1bd-3cad-a58951b40282",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066092606,
    },
    "e-98": {
      id: "e-98",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-99",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac6b27705d70094d80e0|fa0971a1-8dd9-b1bd-3cad-a58951b4026c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac6b27705d70094d80e0|fa0971a1-8dd9-b1bd-3cad-a58951b4026c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066162941,
    },
    "e-100": {
      id: "e-100",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-101",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "43b7d6db-1138-4d57-a861-e7895d941179",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "43b7d6db-1138-4d57-a861-e7895d941179",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066174484,
    },
    "e-102": {
      id: "e-102",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-103",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "517ed1f9-18bb-4c01-e14c-5548471d3b7b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "517ed1f9-18bb-4c01-e14c-5548471d3b7b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066247929,
    },
    "e-104": {
      id: "e-104",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-105",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac6b27705d70094d80e0|def71437-afa0-8c0d-8fe1-d41933fbd7f3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac6b27705d70094d80e0|def71437-afa0-8c0d-8fe1-d41933fbd7f3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066262232,
    },
    "e-106": {
      id: "e-106",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-107",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac6b27705d70094d80e0|f6946d3b-d007-957b-6775-40e3566ea131",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac6b27705d70094d80e0|f6946d3b-d007-957b-6775-40e3566ea131",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066270588,
    },
    "e-108": {
      id: "e-108",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-109",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac6b27705d70094d80e0|088f97e1-1085-4bff-5e01-6ce3aafaf526",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac6b27705d70094d80e0|088f97e1-1085-4bff-5e01-6ce3aafaf526",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066277630,
    },
    "e-110": {
      id: "e-110",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-111",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac6b27705d70094d80e0|abb80731-9d1a-29b5-c6ff-f7e7ae6c74a6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac6b27705d70094d80e0|abb80731-9d1a-29b5-c6ff-f7e7ae6c74a6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066285929,
    },
    "e-112": {
      id: "e-112",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-113",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac6b27705d70094d80e0|ce882a69-b8cf-ee42-8e94-bd08ad9d8544",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac6b27705d70094d80e0|ce882a69-b8cf-ee42-8e94-bd08ad9d8544",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066295595,
    },
    "e-114": {
      id: "e-114",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-115",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac6b27705d70094d80e0|cdfa4185-3835-533c-16ac-74ce1b977d97",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac6b27705d70094d80e0|cdfa4185-3835-533c-16ac-74ce1b977d97",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066307662,
    },
    "e-116": {
      id: "e-116",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-117",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "a89538ab-10c6-31bb-9952-738ff7729599",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "a89538ab-10c6-31bb-9952-738ff7729599",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066324634,
    },
    "e-118": {
      id: "e-118",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-119",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac7e1796c3392887d071|d13efaa0-a4bc-ac83-f23d-ae71d4ceddb6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac7e1796c3392887d071|d13efaa0-a4bc-ac83-f23d-ae71d4ceddb6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066347939,
    },
    "e-120": {
      id: "e-120",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-121",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac7e1796c3392887d071|28ccd1a2-a98a-c4c8-68fd-842c2bdb3daa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac7e1796c3392887d071|28ccd1a2-a98a-c4c8-68fd-842c2bdb3daa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066356415,
    },
    "e-122": {
      id: "e-122",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-123",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac7e1796c3392887d071|27121c84-2ec5-29c1-dd05-ad2f2d0d2d8d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac7e1796c3392887d071|27121c84-2ec5-29c1-dd05-ad2f2d0d2d8d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066364131,
    },
    "e-124": {
      id: "e-124",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-125",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac7e1796c3392887d071|f79290be-b9c8-83ee-b6f2-2465c2a4ab6f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac7e1796c3392887d071|f79290be-b9c8-83ee-b6f2-2465c2a4ab6f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066377348,
    },
    "e-126": {
      id: "e-126",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-127",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac7e1796c3392887d071|c2f12900-64b5-944d-57d4-7b22e6888a11",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac7e1796c3392887d071|c2f12900-64b5-944d-57d4-7b22e6888a11",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066384105,
    },
    "e-128": {
      id: "e-128",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-129",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac7305949af17f5003a1|d05afe1d-281a-4a6f-0d4f-ee16e9ca13aa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac7305949af17f5003a1|d05afe1d-281a-4a6f-0d4f-ee16e9ca13aa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066405142,
    },
    "e-130": {
      id: "e-130",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-131",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac7305949af17f5003a1|831e7a79-8b17-e1a0-17fd-f594748f6172",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac7305949af17f5003a1|831e7a79-8b17-e1a0-17fd-f594748f6172",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066430978,
    },
    "e-132": {
      id: "e-132",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-133",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac7305949af17f5003a1|fd787376-2465-95a5-621c-4d20defe6d2b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac7305949af17f5003a1|fd787376-2465-95a5-621c-4d20defe6d2b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066441887,
    },
    "e-134": {
      id: "e-134",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-135",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac7305949af17f5003a1|2ce2fa59-f9b0-0a69-970a-8770c16fd04a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac7305949af17f5003a1|2ce2fa59-f9b0-0a69-970a-8770c16fd04a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066446008,
    },
    "e-136": {
      id: "e-136",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-137",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac7305949af17f5003a1|218817ac-9c90-290c-4da6-0555bad45aad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac7305949af17f5003a1|218817ac-9c90-290c-4da6-0555bad45aad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066451135,
    },
    "e-138": {
      id: "e-138",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-139",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac7305949af17f5003a1|efce96bc-d360-f054-4db3-18e7428362bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac7305949af17f5003a1|efce96bc-d360-f054-4db3-18e7428362bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066456548,
    },
    "e-140": {
      id: "e-140",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-141",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac7305949af17f5003a1|b16907d2-4fef-a399-29d0-603d1132779b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac7305949af17f5003a1|b16907d2-4fef-a399-29d0-603d1132779b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066487426,
    },
    "e-142": {
      id: "e-142",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-143",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac7305949af17f5003a1|e113e786-6bbc-6eb9-1ad2-93c67fe1fe5a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac7305949af17f5003a1|e113e786-6bbc-6eb9-1ad2-93c67fe1fe5a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066500721,
    },
    "e-144": {
      id: "e-144",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-39",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-145",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4ac7305949af17f5003a1|634ddf10-031c-a08b-84c9-529041833250",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4ac7305949af17f5003a1|634ddf10-031c-a08b-84c9-529041833250",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066514180,
    },
    "e-146": {
      id: "e-146",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-147",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f0b9ab63ea22f9ce1dd168|dda36109-f286-a002-d1b1-c8d29984249d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f0b9ab63ea22f9ce1dd168|dda36109-f286-a002-d1b1-c8d29984249d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066569590,
    },
    "e-148": {
      id: "e-148",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-149",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f0b9ab63ea22f9ce1dd168|022d421a-8b63-529a-4f97-a134e1dd3791",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f0b9ab63ea22f9ce1dd168|022d421a-8b63-529a-4f97-a134e1dd3791",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066574412,
    },
    "e-150": {
      id: "e-150",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-151",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f0b9ab63ea22f9ce1dd168|f7830a16-6748-d30f-8e25-6d90c8275283",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f0b9ab63ea22f9ce1dd168|f7830a16-6748-d30f-8e25-6d90c8275283",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066594537,
    },
    "e-152": {
      id: "e-152",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-153",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f0b9ab63ea22f9ce1dd168|4a50095d-ff8c-c3ea-f0bb-b42b3b825c1f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f0b9ab63ea22f9ce1dd168|4a50095d-ff8c-c3ea-f0bb-b42b3b825c1f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066599586,
    },
    "e-154": {
      id: "e-154",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-155",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f0b9ab63ea22f9ce1dd168|81bfb144-0210-b098-b1c1-0ee8a9178ee4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f0b9ab63ea22f9ce1dd168|81bfb144-0210-b098-b1c1-0ee8a9178ee4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066622077,
    },
    "e-156": {
      id: "e-156",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-157",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f0b9ab63ea22f9ce1dd168|81bfb144-0210-b098-b1c1-0ee8a9178eef",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f0b9ab63ea22f9ce1dd168|81bfb144-0210-b098-b1c1-0ee8a9178eef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066629037,
    },
    "e-158": {
      id: "e-158",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-159",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".form-wrapper",
        originalId:
          "63f210757d75411e91b6067f|bcdd36f7-66da-5ad1-fc73-c8e04e74c8ba",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".form-wrapper",
          originalId:
            "63f210757d75411e91b6067f|bcdd36f7-66da-5ad1-fc73-c8e04e74c8ba",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066648600,
    },
    "e-160": {
      id: "e-160",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-161",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".account-wrapper",
        originalId:
          "63f210757d75411e91b6067f|f8a51b9d-0ec9-b3b5-3f4a-b061e54fbc8c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".account-wrapper",
          originalId:
            "63f210757d75411e91b6067f|f8a51b9d-0ec9-b3b5-3f4a-b061e54fbc8c",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066653378,
    },
    "e-162": {
      id: "e-162",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-163",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f225c0466e62bac25f101a|89921828-cc05-aede-a9b8-2207ba28405a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f225c0466e62bac25f101a|89921828-cc05-aede-a9b8-2207ba28405a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066680535,
    },
    "e-164": {
      id: "e-164",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-165",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f225c0466e62bac25f101a|89921828-cc05-aede-a9b8-2207ba284069",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f225c0466e62bac25f101a|89921828-cc05-aede-a9b8-2207ba284069",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066692465,
    },
    "e-166": {
      id: "e-166",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-167",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f225c0466e62bac25f101a|0f0eb087-4313-4d2b-dedb-0324e14d31b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f225c0466e62bac25f101a|0f0eb087-4313-4d2b-dedb-0324e14d31b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066705446,
    },
    "e-168": {
      id: "e-168",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-169",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f225c0466e62bac25f101a|c9f435c1-bc6f-1390-05b5-7db20d6c049b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f225c0466e62bac25f101a|c9f435c1-bc6f-1390-05b5-7db20d6c049b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066728714,
    },
    "e-170": {
      id: "e-170",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-171",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f225c0466e62bac25f101a|1a1ac377-221e-a917-d90a-5c9114dff27f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f225c0466e62bac25f101a|1a1ac377-221e-a917-d90a-5c9114dff27f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066736993,
    },
    "e-172": {
      id: "e-172",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-173",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f225c0466e62bac25f101a|b4d98a77-fec9-0d3e-3404-407dc77b4a75",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f225c0466e62bac25f101a|b4d98a77-fec9-0d3e-3404-407dc77b4a75",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066741812,
    },
    "e-174": {
      id: "e-174",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-175",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f225c0466e62bac25f101a|dd5d72f1-46aa-b0d2-acb6-e35cacf1f816",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f225c0466e62bac25f101a|dd5d72f1-46aa-b0d2-acb6-e35cacf1f816",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066750777,
    },
    "e-176": {
      id: "e-176",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-177",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f2259159fff88893b9c6b6|34c15dc4-c0ea-0e18-447a-41e2564e6fb2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f2259159fff88893b9c6b6|34c15dc4-c0ea-0e18-447a-41e2564e6fb2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066793849,
    },
    "e-178": {
      id: "e-178",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-179",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f2259159fff88893b9c6b6|cd42720f-4b00-6075-a334-2c53e4044555",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f2259159fff88893b9c6b6|cd42720f-4b00-6075-a334-2c53e4044555",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066798437,
    },
    "e-180": {
      id: "e-180",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-181",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f0b8fb0a6a4d0b95f0970a|560094a1-8697-58b3-947d-5f45bfdeb6bc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f0b8fb0a6a4d0b95f0970a|560094a1-8697-58b3-947d-5f45bfdeb6bc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066834049,
    },
    "e-182": {
      id: "e-182",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-183",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f0b8fb0a6a4d0b95f0970a|515824af-1cb3-4f1a-806d-9c1439235634",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f0b8fb0a6a4d0b95f0970a|515824af-1cb3-4f1a-806d-9c1439235634",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066845981,
    },
    "e-184": {
      id: "e-184",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-185",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|dashFeaturesHover",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|dashFeaturesHover",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066868288,
    },
    "e-186": {
      id: "e-186",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-187",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|5e19c0e5-ef1f-ba37-9862-14f89ca299eb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|5e19c0e5-ef1f-ba37-9862-14f89ca299eb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066881154,
    },
    "e-188": {
      id: "e-188",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-189",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|a5ab68ec-dd89-a83b-ac88-c94c433aaaed",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|a5ab68ec-dd89-a83b-ac88-c94c433aaaed",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066887984,
    },
    "e-190": {
      id: "e-190",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-191",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|e2e50513-12cc-cb1a-7f1d-c1f7ac0f1a98",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|e2e50513-12cc-cb1a-7f1d-c1f7ac0f1a98",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677066893469,
    },
    "e-228": {
      id: "e-228",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-229",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|primImgHover",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|primImgHover",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677726074929,
    },
    "e-230": {
      id: "e-230",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-231",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|bolhaHover",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|bolhaHover",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677726098581,
    },
    "e-233": {
      id: "e-233",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-232",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678934036690,
    },
    "e-234": {
      id: "e-234",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-235",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|oneFeatureHover",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|oneFeatureHover",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678962161621,
    },
    "e-236": {
      id: "e-236",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-237",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|secFeatureHover",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|secFeatureHover",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678962165967,
    },
    "e-238": {
      id: "e-238",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-239",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "macielDevRoom|terFeatureHover",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "macielDevRoom|terFeatureHover",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678962170130,
    },
  },
  actionLists: {
    "a-7": {
      id: "a-7",
      title: "Application Card Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "macielDevRoom|miniSvgsHover",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "macielDevRoom|anotherSvgsHover",
                },
                xValue: -50,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 22000,
                target: {
                  id: "macielDevRoom|miniSvgsHover",
                },
                xValue: -50,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 22000,
                target: {
                  id: "macielDevRoom|anotherSvgsHover",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "macielDevRoom|miniSvgsHover",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "macielDevRoom|anotherSvgsHover",
                },
                xValue: -50,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1676370528269,
    },
    "a-8": {
      id: "a-8",
      title: "Integration Icon -> Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".system-dot",
                  selectorGuids: ["f2ca7609-155f-ead3-4580-92e15f60b4b3"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".system-dot-active",
                  selectorGuids: ["00ed135a-de18-c0ed-696b-fae1570e1912"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-8-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".system-icon-active",
                  selectorGuids: ["254eeec9-396a-53ea-8a4b-fe816623d269"],
                },
                yValue: -18,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".system-icon",
                  selectorGuids: ["40b38e4e-3f6c-b6c3-1239-5cf4fba94fe9"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.6, 0.6, 0, 1],
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".system-dot",
                  selectorGuids: ["f2ca7609-155f-ead3-4580-92e15f60b4b3"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-8-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.6, 0.6, 0, 1],
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".system-icon",
                  selectorGuids: ["40b38e4e-3f6c-b6c3-1239-5cf4fba94fe9"],
                },
                yValue: -18,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.6, 0.6, 0, 1],
                duration: 400,
                target: {
                  selector: ".system-dot-active",
                  selectorGuids: ["00ed135a-de18-c0ed-696b-fae1570e1912"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.6, 0.6, 0, 1],
                duration: 400,
                target: {
                  selector: ".system-icon-active",
                  selectorGuids: ["254eeec9-396a-53ea-8a4b-fe816623d269"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1676378468171,
    },
    "a-9": {
      id: "a-9",
      title: "Integration Icon -> Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.6, 0.6, 0, 1],
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".system-dot",
                  selectorGuids: ["f2ca7609-155f-ead3-4580-92e15f60b4b3"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.6, 0.6, 0, 1],
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".system-icon",
                  selectorGuids: ["40b38e4e-3f6c-b6c3-1239-5cf4fba94fe9"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676378468171,
    },
    "a-10": {
      id: "a-10",
      title: "Integration Icon Active -> Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.6, 0.6, 0, 1],
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".system-icon-active",
                  selectorGuids: ["254eeec9-396a-53ea-8a4b-fe816623d269"],
                },
                yValue: -18,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.6, 0.6, 0, 1],
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".system-dot-active",
                  selectorGuids: ["00ed135a-de18-c0ed-696b-fae1570e1912"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676379097471,
    },
    "a-11": {
      id: "a-11",
      title: "Integration Icon Active -> Hover In 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.6, 0.6, 0, 1],
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".system-icon-active",
                  selectorGuids: ["254eeec9-396a-53ea-8a4b-fe816623d269"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.6, 0.6, 0, 1],
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".system-dot-active",
                  selectorGuids: ["00ed135a-de18-c0ed-696b-fae1570e1912"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676379097471,
    },
    "a-12": {
      id: "a-12",
      title: "FAQ -> Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-content",
                  selectorGuids: ["b5e3e8b7-ffb9-2a5c-ab26-6f11a3b402f3"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".icon-small",
                  selectorGuids: ["f862939a-6af6-7d4f-effa-cb540eea314b"],
                },
                xValue: 0,
                zValue: null,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-12-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-tab",
                  selectorGuids: ["ff14fa17-4cf8-e734-48c3-937ca0691661"],
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-tab",
                  selectorGuids: ["ff14fa17-4cf8-e734-48c3-937ca0691661"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-5",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-content",
                  selectorGuids: ["b5e3e8b7-ffb9-2a5c-ab26-6f11a3b402f3"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-12-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-tab",
                  selectorGuids: ["ff14fa17-4cf8-e734-48c3-937ca0691661"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-12-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-tab",
                  selectorGuids: ["ff14fa17-4cf8-e734-48c3-937ca0691661"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".icon-small",
                  selectorGuids: ["f862939a-6af6-7d4f-effa-cb540eea314b"],
                },
                xValue: 180,
                zValue: null,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1676445884244,
    },
    "a-13": {
      id: "a-13",
      title: "FAQ -> Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-content",
                  selectorGuids: ["b5e3e8b7-ffb9-2a5c-ab26-6f11a3b402f3"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-13-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".icon-small",
                  selectorGuids: ["f862939a-6af6-7d4f-effa-cb540eea314b"],
                },
                xValue: 0,
                zValue: null,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-13-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-tab",
                  selectorGuids: ["ff14fa17-4cf8-e734-48c3-937ca0691661"],
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-tab",
                  selectorGuids: ["ff14fa17-4cf8-e734-48c3-937ca0691661"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676445884244,
    },
    "a-16": {
      id: "a-16",
      title: "Logo Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".circle-outside",
                  selectorGuids: ["51a7f4d8-9d3e-de14-ebae-b2b748eac31a"],
                },
                xValue: 0.96,
                yValue: 0.96,
                locked: true,
              },
            },
            {
              id: "a-16-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".circle-middle",
                  selectorGuids: ["8c69e11d-0cb0-2b6b-3faa-5867f73e047a"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".circle-middle",
                  selectorGuids: ["8c69e11d-0cb0-2b6b-3faa-5867f73e047a"],
                },
                xValue: 0.96,
                yValue: 0.96,
                locked: true,
              },
            },
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".circle-outside",
                  selectorGuids: ["51a7f4d8-9d3e-de14-ebae-b2b748eac31a"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 800,
                target: {
                  selector: ".circle-middle",
                  selectorGuids: ["8c69e11d-0cb0-2b6b-3faa-5867f73e047a"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 800,
                target: {
                  selector: ".circle-middle",
                  selectorGuids: ["8c69e11d-0cb0-2b6b-3faa-5867f73e047a"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-16-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  selector: ".circle-outside",
                  selectorGuids: ["51a7f4d8-9d3e-de14-ebae-b2b748eac31a"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-16-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 800,
                target: {
                  selector: ".circle-outside",
                  selectorGuids: ["51a7f4d8-9d3e-de14-ebae-b2b748eac31a"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 800,
                target: {
                  selector: ".circle-middle",
                  selectorGuids: ["8c69e11d-0cb0-2b6b-3faa-5867f73e047a"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "",
                duration: 800,
                target: {
                  selector: ".circle-outside",
                  selectorGuids: ["51a7f4d8-9d3e-de14-ebae-b2b748eac31a"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-10",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 1500,
                easing: "",
                duration: 0,
                target: {
                  selector: ".circle-outside",
                  selectorGuids: ["51a7f4d8-9d3e-de14-ebae-b2b748eac31a"],
                },
                xValue: 0.9,
                yValue: 0.9,
                locked: true,
              },
            },
            {
              id: "a-16-n-12",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 1500,
                easing: "",
                duration: 0,
                target: {
                  selector: ".circle-middle",
                  selectorGuids: ["8c69e11d-0cb0-2b6b-3faa-5867f73e047a"],
                },
                xValue: 0.9,
                yValue: 0.9,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1676535350237,
    },
    "a-17": {
      id: "a-17",
      title: "Pricing Toggle -> Monthly Active",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".price-monthly",
                  selectorGuids: ["1a19e946-8e0a-9ffa-1cb1-241163237367"],
                },
                value: "none",
              },
            },
            {
              id: "a-17-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".toggle-text-monthly",
                  selectorGuids: ["c8b56df4-0658-6de7-afee-9f6c3e21c0a2"],
                },
                globalSwatchId: "3297fd9f",
                rValue: 156,
                bValue: 171,
                gValue: 160,
                aValue: 1,
              },
            },
            {
              id: "a-17-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".toggle-text-yearly",
                  selectorGuids: ["227b4774-f955-e3f4-3a7d-9e449d51f8fd"],
                },
                globalSwatchId: "63bbfca7",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 240,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".toggle-round",
                  selectorGuids: ["48504aef-52d7-6e98-ad0e-64d4c9a39d22"],
                },
                xValue: -16,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  selector: ".price-monthly",
                  selectorGuids: ["1a19e946-8e0a-9ffa-1cb1-241163237367"],
                },
                value: "flex",
              },
            },
            {
              id: "a-17-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  selector: ".price-yearly",
                  selectorGuids: ["1a19e946-8e0a-9ffa-1cb1-241163237370"],
                },
                value: "none",
              },
            },
            {
              id: "a-17-n-8",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 240,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".toggle-text-monthly",
                  selectorGuids: ["c8b56df4-0658-6de7-afee-9f6c3e21c0a2"],
                },
                globalSwatchId: "63bbfca7",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-17-n-9",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 240,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".toggle-text-yearly",
                  selectorGuids: ["227b4774-f955-e3f4-3a7d-9e449d51f8fd"],
                },
                globalSwatchId: "3297fd9f",
                rValue: 156,
                bValue: 171,
                gValue: 160,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1600234540795,
    },
    "a-18": {
      id: "a-18",
      title: "Pricing Toggle -> Yearly Active",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 240,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".toggle-round",
                  selectorGuids: ["48504aef-52d7-6e98-ad0e-64d4c9a39d22"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  selector: ".price-monthly",
                  selectorGuids: ["1a19e946-8e0a-9ffa-1cb1-241163237367"],
                },
                value: "none",
              },
            },
            {
              id: "a-18-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  selector: ".price-yearly",
                  selectorGuids: ["1a19e946-8e0a-9ffa-1cb1-241163237370"],
                },
                value: "flex",
              },
            },
            {
              id: "a-18-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 240,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".toggle-text-monthly",
                  selectorGuids: ["c8b56df4-0658-6de7-afee-9f6c3e21c0a2"],
                },
                globalSwatchId: "3297fd9f",
                rValue: 156,
                bValue: 171,
                gValue: 160,
                aValue: 1,
              },
            },
            {
              id: "a-18-n-8",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 240,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".toggle-text-yearly",
                  selectorGuids: ["227b4774-f955-e3f4-3a7d-9e449d51f8fd"],
                },
                globalSwatchId: "63bbfca7",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1600234540795,
    },
    "a-23": {
      id: "a-23",
      title: "Tab Line -> Active",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-23-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-line",
                  selectorGuids: ["fdeefc0f-7626-4ccf-ad37-5923567ffc5d"],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-23-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-line",
                  selectorGuids: ["fdeefc0f-7626-4ccf-ad37-5923567ffc5d"],
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1676882318614,
    },
    "a-24": {
      id: "a-24",
      title: "Tab Line -> Inactive",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-line",
                  selectorGuids: ["fdeefc0f-7626-4ccf-ad37-5923567ffc5d"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-24-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-line",
                  selectorGuids: ["fdeefc0f-7626-4ccf-ad37-5923567ffc5d"],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-24-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-line",
                  selectorGuids: ["fdeefc0f-7626-4ccf-ad37-5923567ffc5d"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676882318614,
    },
    "a-25": {
      id: "a-25",
      title: "Testimonial -> Active",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-author",
                  selectorGuids: ["9e988919-5a9c-b8f1-b8d2-dd3afa4f1cf2"],
                },
                widthValue: 56,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-25-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["1ba6e803-551b-5bf7-f2d0-651f2d9570c0"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-25-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".author-detail",
                  selectorGuids: ["7ee078a4-eb4b-f89f-725f-7ee26d9efb3d"],
                },
                xValue: -16,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".author-detail",
                  selectorGuids: ["7ee078a4-eb4b-f89f-725f-7ee26d9efb3d"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-25-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-author",
                  selectorGuids: ["9e988919-5a9c-b8f1-b8d2-dd3afa4f1cf2"],
                },
                widthUnit: "AUTO",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-25-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["1ba6e803-551b-5bf7-f2d0-651f2d9570c0"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-25-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".author-detail",
                  selectorGuids: ["7ee078a4-eb4b-f89f-725f-7ee26d9efb3d"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-25-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".author-detail",
                  selectorGuids: ["7ee078a4-eb4b-f89f-725f-7ee26d9efb3d"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1676884670988,
    },
    "a-26": {
      id: "a-26",
      title: "Testimonial -> Active 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-author",
                  selectorGuids: ["9e988919-5a9c-b8f1-b8d2-dd3afa4f1cf2"],
                },
                widthValue: 56,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-26-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["1ba6e803-551b-5bf7-f2d0-651f2d9570c0"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".author-detail",
                  selectorGuids: ["7ee078a4-eb4b-f89f-725f-7ee26d9efb3d"],
                },
                xValue: -16,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".author-detail",
                  selectorGuids: ["7ee078a4-eb4b-f89f-725f-7ee26d9efb3d"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676884670988,
    },
    a: {
      id: "a",
      title: "Scroll View -> 01",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                yValue: 44,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1665929437809,
    },
    "a-27": {
      id: "a-27",
      title: "Team Card -> Hove In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-image",
                  selectorGuids: ["48f8e332-0d17-4786-6fc4-748f4dc8e0a3"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-image",
                  selectorGuids: ["48f8e332-0d17-4786-6fc4-748f4dc8e0a3"],
                },
                xValue: 1.05,
                yValue: 1.05,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1676983858673,
    },
    "a-28": {
      id: "a-28",
      title: "Team Card -> Hove Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-image",
                  selectorGuids: ["48f8e332-0d17-4786-6fc4-748f4dc8e0a3"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676983858673,
    },
    "a-29": {
      id: "a-29",
      title: "Tab Link -> Active / Mobile",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-parapragh",
                  selectorGuids: ["f8111362-d99d-d202-a7e5-6b54a16ce082"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-29-n-11",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "macielDevRoom|a5ab68ec-dd89-a83b-ac88-c94c433aaaf2",
                },
                widthValue: 40,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-29-n-9",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-line",
                  selectorGuids: ["fdeefc0f-7626-4ccf-ad37-5923567ffc5d"],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-29-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-link-heading",
                  selectorGuids: ["bd0fc587-a25f-22f7-c4de-4c03b6be8ee5"],
                },
                widthValue: 40,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-parapragh",
                  selectorGuids: ["f8111362-d99d-d202-a7e5-6b54a16ce082"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-29-n-12",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "macielDevRoom|a5ab68ec-dd89-a83b-ac88-c94c433aaaf2",
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-29-n-10",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-line",
                  selectorGuids: ["fdeefc0f-7626-4ccf-ad37-5923567ffc5d"],
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-29-n-8",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-link-heading",
                  selectorGuids: ["bd0fc587-a25f-22f7-c4de-4c03b6be8ee5"],
                },
                widthUnit: "AUTO",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1676985896331,
    },
    "a-30": {
      id: "a-30",
      title: "Tab Link -> Inactive / Mobile",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-30-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-parapragh",
                  selectorGuids: ["f8111362-d99d-d202-a7e5-6b54a16ce082"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-30-n-8",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "macielDevRoom|a5ab68ec-dd89-a83b-ac88-c94c433aaaf2",
                },
                widthValue: 40,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-30-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-link-heading",
                  selectorGuids: ["bd0fc587-a25f-22f7-c4de-4c03b6be8ee5"],
                },
                widthValue: 40,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-30-n-7",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tab-line",
                  selectorGuids: ["fdeefc0f-7626-4ccf-ad37-5923567ffc5d"],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676985896331,
    },
    "a-31": {
      id: "a-31",
      title: "Location Tag -> Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-31-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".country._01",
                  selectorGuids: [
                    "3fa803ce-f2d4-dff4-12f5-c09b6f5ab07a",
                    "4d2c4271-55b4-5bcf-6b7f-32a21ad5e163",
                  ],
                },
                yValue: 22,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".country._04",
                  selectorGuids: [
                    "3fa803ce-f2d4-dff4-12f5-c09b6f5ab07a",
                    "e6f7d825-4702-3717-4f5a-5ace4d571c32",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-31-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".country._04",
                  selectorGuids: [
                    "3fa803ce-f2d4-dff4-12f5-c09b6f5ab07a",
                    "e6f7d825-4702-3717-4f5a-5ace4d571c32",
                  ],
                },
                yValue: 22,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".country._03",
                  selectorGuids: [
                    "3fa803ce-f2d4-dff4-12f5-c09b6f5ab07a",
                    "1842092c-241d-98c3-ff15-ee6bc1a72575",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-31-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".country._03",
                  selectorGuids: [
                    "3fa803ce-f2d4-dff4-12f5-c09b6f5ab07a",
                    "1842092c-241d-98c3-ff15-ee6bc1a72575",
                  ],
                },
                yValue: 22,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".country._02",
                  selectorGuids: [
                    "3fa803ce-f2d4-dff4-12f5-c09b6f5ab07a",
                    "d7824736-4663-34eb-3b73-fa5e1f784c54",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-31-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".country._02",
                  selectorGuids: [
                    "3fa803ce-f2d4-dff4-12f5-c09b6f5ab07a",
                    "d7824736-4663-34eb-3b73-fa5e1f784c54",
                  ],
                },
                yValue: 22,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".country._01",
                  selectorGuids: [
                    "3fa803ce-f2d4-dff4-12f5-c09b6f5ab07a",
                    "4d2c4271-55b4-5bcf-6b7f-32a21ad5e163",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".country._01",
                  selectorGuids: [
                    "3fa803ce-f2d4-dff4-12f5-c09b6f5ab07a",
                    "4d2c4271-55b4-5bcf-6b7f-32a21ad5e163",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".country._01",
                  selectorGuids: [
                    "3fa803ce-f2d4-dff4-12f5-c09b6f5ab07a",
                    "4d2c4271-55b4-5bcf-6b7f-32a21ad5e163",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".country._04",
                  selectorGuids: [
                    "3fa803ce-f2d4-dff4-12f5-c09b6f5ab07a",
                    "e6f7d825-4702-3717-4f5a-5ace4d571c32",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".country._04",
                  selectorGuids: [
                    "3fa803ce-f2d4-dff4-12f5-c09b6f5ab07a",
                    "e6f7d825-4702-3717-4f5a-5ace4d571c32",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".country._03",
                  selectorGuids: [
                    "3fa803ce-f2d4-dff4-12f5-c09b6f5ab07a",
                    "1842092c-241d-98c3-ff15-ee6bc1a72575",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".country._03",
                  selectorGuids: [
                    "3fa803ce-f2d4-dff4-12f5-c09b6f5ab07a",
                    "1842092c-241d-98c3-ff15-ee6bc1a72575",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".country._02",
                  selectorGuids: [
                    "3fa803ce-f2d4-dff4-12f5-c09b6f5ab07a",
                    "d7824736-4663-34eb-3b73-fa5e1f784c54",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".country._02",
                  selectorGuids: [
                    "3fa803ce-f2d4-dff4-12f5-c09b6f5ab07a",
                    "d7824736-4663-34eb-3b73-fa5e1f784c54",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1676993773138,
    },
    "a-2": {
      id: "a-2",
      title: "Scroll View -> 02",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                yValue: 44,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1665929437809,
    },
    "a-3": {
      id: "a-3",
      title: "Scroll View -> 03",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                yValue: 44,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-3-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1665929437809,
    },
    "a-33": {
      id: "a-33",
      title: "Dashboard Scroll View",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-33-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "macielDevRoom|dashTransition",
                },
                yValue: 44,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-33-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "macielDevRoom|boardingTransition",
                },
                xValue: 10,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-33-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "macielDevRoom|dashTransition",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-33-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "macielDevRoom|dashTransition",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-33-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "macielDevRoom|dashTransition",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-33-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 600,
                easing: "ease",
                duration: 1200,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "macielDevRoom|boardingTransition",
                },
                xValue: 0,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1677064045126,
    },
    "a-34": {
      id: "a-34",
      title: "Integration Card -> Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "macielDevRoom|23a76b24-7c6b-52d4-355f-c679e3b61884",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-34-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: true,
                  id: "macielDevRoom|23a76b24-7c6b-52d4-355f-c679e3b61884",
                },
                yValue: -8,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1677065609271,
    },
    "a-35": {
      id: "a-35",
      title: "Integration Card -> Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: true,
                  id: "macielDevRoom|23a76b24-7c6b-52d4-355f-c679e3b61884",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1677065609271,
    },
    "a-36": {
      id: "a-36",
      title: "Scroll From Right -> 01",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-36-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                xValue: 44,
                yValue: null,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-36-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-36-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-36-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                xValue: 0,
                yValue: null,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1665929437809,
    },
    "a-37": {
      id: "a-37",
      title: "Scroll From Right -> 02",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-37-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                xValue: 44,
                yValue: null,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-37-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                xValue: 0,
                yValue: null,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1665929437809,
    },
    "a-38": {
      id: "a-38",
      title: "Scroll From Right -> 03",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-38-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                xValue: 44,
                yValue: null,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-38-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-38-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-38-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                xValue: 0,
                yValue: null,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1665929437809,
    },
    "a-39": {
      id: "a-39",
      title: "Scroll From Right -> 04",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-39-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                xValue: 44,
                yValue: null,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-39-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-39-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-39-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a",
                },
                xValue: 0,
                yValue: null,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1665929437809,
    },
    "a-41": {
      id: "a-41",
      title: "Page Load / Lights",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-41-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 3000,
                target: {
                  selector: ".light-l",
                  selectorGuids: ["cfe45c3c-ee95-d30e-411a-e3fa3b7a1036"],
                },
                xValue: 1.5,
                yValue: 1.5,
                locked: true,
              },
            },
            {
              id: "a-41-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 3000,
                target: {
                  selector: ".light-r",
                  selectorGuids: ["8db80976-009b-efef-4a27-addf305829d3"],
                },
                xValue: 1.5,
                yValue: 1.5,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-41-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 3000,
                target: {
                  selector: ".light-l",
                  selectorGuids: ["cfe45c3c-ee95-d30e-411a-e3fa3b7a1036"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-41-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 3000,
                target: {
                  selector: ".light-r",
                  selectorGuids: ["8db80976-009b-efef-4a27-addf305829d3"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1678934040985,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
