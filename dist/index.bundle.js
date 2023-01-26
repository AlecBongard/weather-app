(() => {
  "use strict";
  var n = {
      426: (n, t, e) => {
        e.d(t, { Z: () => v });
        var o = e(81),
          a = e.n(o),
          i = e(645),
          r = e.n(i),
          c = e(667),
          s = e.n(c),
          d = new URL(e(747), e.b),
          l = new URL(e(550), e.b),
          p = new URL(e(629), e.b),
          u = new URL(e(570), e.b),
          f = new URL(e(813), e.b),
          m = r()(a()),
          h = s()(d),
          g = s()(l),
          b = s()(p),
          x = s()(u),
          y = s()(f);
        m.push([
          n.id,
          "@font-face {\n  font-family: Roboto;\n  src: url(" +
            h +
            ");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(" +
            g +
            ");\n  font-weight: 500;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(" +
            b +
            ");\n  font-weight: 300;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(" +
            x +
            ");\n  font-weight: 300;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(" +
            y +
            ');\n  font-weight: 700;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.page-title {\n  font-size: 36px;\n  color: white;\n  align-self: flex-start;\n  padding: 0 0 0 15px;\n}\n\nbutton {\n  border: none;\n  display: inline-block;\n}\n\nbody {\n  font-family: Roboto;\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #d6d3d1;\n  overflow: hidden;\n}\n\n.hidden {\n  opacity: 0;\n}\n\n.visible {\n  opacity: 1;\n}\n\n.bg-img {\n  transition: opacity 1s linear;\n  min-height: 100vh;\n  max-width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 0;\n}\n\n.content-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 33%;\n}\n\n.content {\n  color: rgb(255, 255, 255);\n  width: 515px;\n  box-sizing: border-box;\n  visibility: hidden;\n  background-color: #ffffff22;\n  border-radius: 10px;\n  padding: 10px;\n  backdrop-filter: blur(8px) invert(15%);\n}\n\n.location-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.location-container {\n  animation: fadeIn 1s;\n  margin: 8px;\n  padding: 8px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.location-container:hover {\n  background-color: #dadad5aa;\n}\n\n.city-name {\n  height: 100%;\n  grid-area: name;\n  font-size: 18px;\n}\n\n.city-location {\n  align-self: end;\n  height: 100%;\n  grid-area: location;\n  font-size: 14px;\n}\n\n.weather-wrap {\n  display: grid;\n  justify-content: center;\n\n  grid-template:\n    "temp main-wrap" 1fr\n    "desc ." 1fr / 1fr 1fr;\n}\n\n.city-lat {\n  grid-area: lat;\n  font-size: 14px;\n  align-self: end;\n}\n\n.city-lon {\n  grid-area: lon;\n  font-size: 14px;\n  align-self: start;\n}\n\n.location-container {\n  padding-bottom: 13px;\n  height: 36px;\n  display: grid;\n  justify-items: stretch;\n  gap: 4px;\n  grid-template:\n    "name . lat" 1fr\n    "location . lon" 1fr / 1fr 1fr 1fr;\n}\n\n.weather-title {\n  font-size: 28px;\n  margin-left: 10px;\n  margin: 0 0 10px 10px;\n}\n\n.other-info {\n  font-weight: 300;\n  height: min-content;\n  border-left: 3px solid rgba(255, 255, 255, 0.4);\n  padding-left: 7px;\n}\n\n.desc-wrap {\n  grid-area: desc;\n  display: grid;\n  grid-template:\n    "icon main-weather" 8fr\n    "icon detail" 7fr / 1fr 2fr;\n}\n\n.weather-icon {\n  grid-area: icon;\n  height: 75px;\n  width: 75px;\n  align-self: center;\n}\n\n.desc-main {\n  grid-area: main-weather;\n  align-self: end;\n  font-size: 24px;\n}\n\n.desc-detail {\n  grid-area: detail;\n  align-self: start;\n  font-size: 14px;\n}\n\n.main-wrap {\n  font-weight: 300;\n  grid-area: main-wrap;\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n  justify-content: center;\n  font-size: 16px;\n  padding-left: 10px;\n}\n\n.temp {\n  grid-area: temp;\n  margin-left: 8px;\n  font-size: 64px;\n  align-self: center;\n  justify-self: start;\n  font-weight: 700;\n}\n\n.min-temp {\n  grid-area: min;\n}\n\n.max-temp {\n  grid-area: max;\n}\n\nform {\n  display: flex;\n  margin: 10px;\n}\n\n#search {\n  border: none;\n  padding: 15px;\n  width: 440px;\n  height: 32px;\n  box-sizing: border-box;\n  margin: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n#search:focus {\n  box-sizing: border-box;\n  border: 1px solid #f25d45;\n  outline: none;\n}\n\n#submit {\n  cursor: pointer;\n  font-size: 14px;\n  height: 32px;\n  width: 75px;\n  margin: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: #f25d45;\n  color: #ffeaea;\n}\n\n#submit:hover {\n  background-color: #ff6d57;\n}\n\n.attribution {\n  font-size: 14px;\n  color: white;\n  position: absolute;\n  right: 2px;\n  bottom: 0px;\n  backdrop-filter: blur(10px) invert(15%);\n  padding: 3px;\n}\n\n.attribution a {\n  color: white;\n}\n\n.error-text {\n  font-weight: 400;\n  font-style: italic;\n}\n\n.error-wrap {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n',
          "",
        ]);
        const v = m;
      },
      645: (n) => {
        n.exports = function (n) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = "",
                  o = void 0 !== t[5];
                return (
                  t[4] && (e += "@supports (".concat(t[4], ") {")),
                  t[2] && (e += "@media ".concat(t[2], " {")),
                  o &&
                    (e += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (e += n(t)),
                  o && (e += "}"),
                  t[2] && (e += "}"),
                  t[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (t.i = function (n, e, o, a, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var r = {};
              if (o)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (r[s] = !0);
                }
              for (var d = 0; d < n.length; d++) {
                var l = [].concat(n[d]);
                (o && r[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  e &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = e))
                      : (l[2] = e)),
                  a &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = a))
                      : (l[4] = "".concat(a))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      667: (n) => {
        n.exports = function (n, t) {
          return (
            t || (t = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                t.hash && (n += t.hash),
                /["'() \t\n]|(%20)/.test(n) || t.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : n)
              : n
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var t = [];
        function e(n) {
          for (var e = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === n) {
              e = o;
              break;
            }
          return e;
        }
        function o(n, o) {
          for (var i = {}, r = [], c = 0; c < n.length; c++) {
            var s = n[c],
              d = o.base ? s[0] + o.base : s[0],
              l = i[d] || 0,
              p = "".concat(d, " ").concat(l);
            i[d] = l + 1;
            var u = e(p),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== u) t[u].references++, t[u].updater(f);
            else {
              var m = a(f, o);
              (o.byIndex = c),
                t.splice(c, 0, { identifier: p, updater: m, references: 1 });
            }
            r.push(p);
          }
          return r;
        }
        function a(n, t) {
          var e = t.domAPI(t);
          return (
            e.update(n),
            function (t) {
              if (t) {
                if (
                  t.css === n.css &&
                  t.media === n.media &&
                  t.sourceMap === n.sourceMap &&
                  t.supports === n.supports &&
                  t.layer === n.layer
                )
                  return;
                e.update((n = t));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, a) {
          var i = o((n = n || []), (a = a || {}));
          return function (n) {
            n = n || [];
            for (var r = 0; r < i.length; r++) {
              var c = e(i[r]);
              t[c].references--;
            }
            for (var s = o(n, a), d = 0; d < i.length; d++) {
              var l = e(i[d]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            i = s;
          };
        };
      },
      569: (n) => {
        var t = {};
        n.exports = function (n, e) {
          var o = (function (n) {
            if (void 0 === t[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              t[n] = e;
            }
            return t[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(e);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var t = document.createElement("style");
          return n.setAttributes(t, n.attributes), n.insert(t, n.options), t;
        };
      },
      565: (n, t, e) => {
        n.exports = function (n) {
          var t = e.nc;
          t && n.setAttribute("nonce", t);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          var t = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, t, e) {
                var o = "";
                e.supports && (o += "@supports (".concat(e.supports, ") {")),
                  e.media && (o += "@media ".concat(e.media, " {"));
                var a = void 0 !== e.layer;
                a &&
                  (o += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {"
                  )),
                  (o += e.css),
                  a && (o += "}"),
                  e.media && (o += "}"),
                  e.supports && (o += "}");
                var i = e.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  t.styleTagTransform(o, n, t.options);
              })(t, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(t);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, t) {
          if (t.styleSheet) t.styleSheet.cssText = n;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n));
          }
        };
      },
      87: (n, t, e) => {
        e.d(t, { Z: () => o });
        const o = (function () {
          function n(n) {
            return n.replaceAll(" ", "+");
          }
          return {
            searchLocation: async function (t, e = "", o = "") {
              const a = n(e),
                i = n(o),
                r = await fetch(
                  `https://api.openweathermap.org/geo/1.0/direct?q=${t},${a},${i}&limit=5&appid=aa3bdc99b7b7ee6fdc385d21b7b3fe99`,
                  { mode: "cors" }
                );
              return r.ok ? await r.json() : "Please enter a valid search term";
            },
            getWeather: async function (n) {
              const { lat: t, lon: e } = n,
                o = await fetch(
                  `https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${e}&appid=aa3bdc99b7b7ee6fdc385d21b7b3fe99&units=imperial`,
                  { mode: "cors" }
                );
              return await o.json();
            },
          };
        })();
      },
      813: (n, t, e) => {
        n.exports = e.p + "f80816a5455d171f948d.ttf";
      },
      570: (n, t, e) => {
        n.exports = e.p + "333da16a3f3cc391d087.ttf";
      },
      629: (n, t, e) => {
        n.exports = e.p + "c590382422f2742d788b.ttf";
      },
      550: (n, t, e) => {
        n.exports = e.p + "7c8d04cd831df3033c8a.ttf";
      },
      747: (n, t, e) => {
        n.exports = e.p + "fc2b5060f7accec5cf74.ttf";
      },
    },
    t = {};
  function e(o) {
    var a = t[o];
    if (void 0 !== a) return a.exports;
    var i = (t[o] = { id: o, exports: {} });
    return n[o](i, i.exports, e), i.exports;
  }
  (e.m = n),
    (e.n = (n) => {
      var t = n && n.__esModule ? () => n.default : () => n;
      return e.d(t, { a: t }), t;
    }),
    (e.d = (n, t) => {
      for (var o in t)
        e.o(t, o) &&
          !e.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: t[o] });
    }),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (() => {
      var n;
      e.g.importScripts && (n = e.g.location + "");
      var t = e.g.document;
      if (!n && t && (t.currentScript && (n = t.currentScript.src), !n)) {
        var o = t.getElementsByTagName("script");
        o.length && (n = o[o.length - 1].src);
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (e.p = n);
    })(),
    (e.b = document.baseURI || self.location.href),
    (e.nc = void 0),
    (() => {
      var n = e(379),
        t = e.n(n),
        o = e(795),
        a = e.n(o),
        i = e(569),
        r = e.n(i),
        c = e(565),
        s = e.n(c),
        d = e(216),
        l = e.n(d),
        p = e(589),
        u = e.n(p),
        f = e(426),
        m = {};
      (m.styleTagTransform = u()),
        (m.setAttributes = s()),
        (m.insert = r().bind(null, "head")),
        (m.domAPI = a()),
        (m.insertStyleElement = l()),
        t()(f.Z, m),
        f.Z && f.Z.locals && f.Z.locals;
      var h = e(87);
      const g = e.p + "b3dcd1be902bca6d4301acab0f525cb6.jpg",
        b = e.p + "6a2d652bba920c28881f0cd892819a82.jpg",
        x = e.p + "ce0ba4829022032e076aa2b27b2f4244.jpg",
        y = e.p + "16654a8a3dfcf3a9da8fabf70f67ac7c.jpg",
        v = e.p + "f7ea80092ba02e09780a5b29a9843271.jpg",
        w = e.p + "37f694523e14045b1322a090651e1055.jpg",
        C = document.querySelector(".content"),
        L = document.querySelector(".attribution"),
        E = (function () {
          function n(n, t, e) {
            const o = document.createElement("a");
            (o.href = t), (o.textContent = n);
            const a = document.createElement("a");
            (a.href = e), (a.textContent = "Unsplash");
            const i = document.createElement("span");
            (i.textContent = " on "),
              (L.textContent = "Photo by "),
              L.appendChild(o),
              L.appendChild(i),
              L.appendChild(a);
          }
          function t(n) {
            const t = document.querySelector("img.visible"),
              e = document.querySelector("img.hidden");
            (e.src = n),
              t.classList.add("hidden"),
              t.classList.remove("visible"),
              e.classList.add("visible"),
              e.classList.remove("hidden");
          }
          return {
            bgChange: t,
            choosePhoto: function (e) {
              e >= 200 && e <= 232
                ? (t(y),
                  n(
                    "Cooper Baumgartner",
                    "https://unsplash.com/@cooper_baumgartner",
                    "https://unsplash.com/photos/1N8iqSsn7ls"
                  ))
                : e >= 300 && e <= 531
                ? (t(b),
                  n(
                    "Osman Rana",
                    "https://unsplash.com/@osmanrana",
                    "https://unsplash.com/photos/GXEZuWo5m4I"
                  ))
                : e >= 600 && e <= 622
                ? (t(v),
                  n(
                    "Ant Rozetsky",
                    "https://unsplash.com/@rozetsky",
                    "https://unsplash.com/photos/H9m6mfeeakU"
                  ))
                : e >= 701 && e <= 781
                ? (t(x),
                  n(
                    "Damon Lam",
                    "https://unsplash.com/@dayday95",
                    "https://unsplash.com/photos/M6PJrAd26M0"
                  ))
                : 800 === e
                ? (t(g),
                  n(
                    "Cate Bligh",
                    "https://unsplash.com/@catebligh",
                    "https://unsplash.com/photos/lX5wMeZUidA"
                  ))
                : e >= 801 &&
                  e <= 804 &&
                  (t(w),
                  n(
                    "Chaz McGregor",
                    "https://unsplash.com/@chazmcgregor",
                    "https://unsplash.com/photos/GKN6rpDr0EI"
                  ));
            },
          };
        })(),
        $ = function (n) {
          const t = document.createElement("ul");
          t.classList.add("location-list"),
            (C.style.visibility = "visible"),
            C.appendChild(t),
            n.forEach((e) => {
              const o = (function (n, t) {
                const e = document.createElement("li");
                e.classList.add("list-item");
                const o = document.createElement("div");
                o.classList.add("location-container"),
                  o.setAttribute("data-index", t);
                const a = document.createElement("div");
                a.classList.add("city-name"), (a.textContent = n.name);
                const i = document.createElement("div");
                i.classList.add("city-location"),
                  n.state
                    ? (i.textContent = `${n.state}, ${n.country}`)
                    : (i.textContent = n.country);
                const r = n.lat.toFixed(4),
                  c = document.createElement("div");
                c.classList.add("city-lat"), (c.textContent = `lat: ${r}`);
                const s = n.lon.toFixed(2),
                  d = document.createElement("div");
                return (
                  d.classList.add("city-lon"),
                  (d.textContent = `lon: ${s}`),
                  e.appendChild(o),
                  o.appendChild(a),
                  o.appendChild(c),
                  o.appendChild(i),
                  o.appendChild(d),
                  e
                );
              })(e, n.indexOf(e));
              t.appendChild(o);
            });
        },
        S = function (n, t) {
          (C.textContent = ""), (C.style.visibility = "visible");
          const e = n.weather[0],
            o = n.main,
            a = document.createElement("div");
          a.classList.add("weather-title"),
            t.state
              ? (a.textContent = `${t.name}, ${t.state}, ${t.country}`)
              : (a.textContent = `${t.name}, ${t.country}`);
          const i = document.createElement("div");
          i.classList.add("weather-wrap");
          const r = document.createElement("div");
          r.classList.add("desc-wrap");
          const c = document.createElement("img");
          c.classList.add("weather-icon"),
            (c.src = `http://openweathermap.org/img/wn/${e.icon}@2x.png`);
          const s = document.createElement("p");
          s.classList.add("desc-main"), (s.textContent = e.main);
          const d = document.createElement("p");
          d.classList.add("desc-detail"),
            (d.textContent = e.description),
            r.appendChild(c),
            r.appendChild(s),
            r.appendChild(d);
          const l = document.createElement("div");
          l.classList.add("main-wrap");
          const p = document.createElement("p");
          p.classList.add("temp"), (p.textContent = `${o.temp.toFixed(1)}°F`);
          const u = document.createElement("p");
          u.classList.add("min-temp"),
            (u.textContent = `Low: ${o.temp_min.toFixed(1)}°F`);
          const f = document.createElement("p");
          f.classList.add("max-temp"),
            (f.textContent = `Max: ${o.temp_max.toFixed(1)}°F`);
          const m = document.createElement("p");
          m.classList.add("feels-like"),
            (m.textContent = `Feels like: ${o.feels_like}°F`);
          const h = document.createElement("div");
          h.classList.add("other-info");
          const g = document.createElement("p");
          g.classList.add("wind-speed"),
            (g.textContent = `Wind Speed: ${n.wind.speed} mph`);
          const b = document.createElement("p");
          b.classList.add("pressure"),
            (b.textContent = `Pressure: ${o.pressure} hPa`);
          const x = document.createElement("p");
          x.classList.add("humidity"),
            (x.textContent = `Humidity: ${o.humidity}%`),
            h.appendChild(g),
            h.appendChild(b),
            h.appendChild(x),
            l.appendChild(u),
            l.appendChild(f),
            l.appendChild(m),
            C.appendChild(a),
            C.appendChild(i),
            i.appendChild(p),
            i.appendChild(l),
            i.appendChild(r),
            i.appendChild(h),
            E.choosePhoto(e.id);
        },
        j = function (n) {
          const t = document.createElement("p"),
            e = document.createElement("div");
          e.classList.add("error-wrap"),
            t.classList.add("error-text"),
            (t.textContent = n),
            C.appendChild(e),
            e.appendChild(t),
            (C.style.visibility = "visible");
        },
        k = document.querySelector("#search"),
        z = document.querySelector("#submit"),
        R = document.querySelector(".content");
      (document.querySelector("img.visible").src = g),
        z.addEventListener("click", (n) => {
          n.preventDefault(), (R.textContent = "");
          const t = k.value;
          h.Z.searchLocation(t).then((n) => {
            "string" == typeof n
              ? j(n)
              : 0 === n.length
              ? j("No data for that location.")
              : ($(n),
                document
                  .querySelectorAll(".location-container")
                  .forEach((t) => {
                    t.addEventListener("click", () => {
                      const { index: e } = t.dataset,
                        o = n[e];
                      h.Z.getWeather(o).then((n) => {
                        S(n, o);
                      });
                    });
                  }));
          });
        });
    })();
})();
