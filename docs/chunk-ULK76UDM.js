import { b as z } from "./chunk-DNOQGVMG.js";
import { c as A, d as b, f as C, g as _, h as y } from "./chunk-ZSSD5RUB.js";
import { a as j, b as T } from "./browser/chunk-Z4NBKBPH.js";
import "./chunk-2KGD3LIW.js";
import "./chunk-D63QER6G.js";
import {
  Bb as i,
  Bc as p,
  Cb as o,
  Db as c,
  Gb as k,
  Jb as f,
  Kb as x,
  Ub as u,
  W as S,
  Wb as F,
  Xa as B,
  Za as l,
  db as d,
  ha as O,
  ia as P,
  k as M,
  kb as a,
  ob as m,
  vb as s,
  xb as h,
  yc as D,
  zc as I,
} from "./chunk-OQHZ6M44.js";
function $(e, w) {
  if (e & 1) {
    let t = k();
    i(0, "button", 6),
      f("click", function () {
        let r = O(t).index,
          E = x();
        return P(E.goToSlide(r));
      }),
      o();
  }
  if (e & 2) {
    let t = w.index,
      n = x();
    h("active", t === n.currentIndex);
  }
}
var R = A("fadeInOut", [
    _("open", C({ opacity: 1 })),
    _("close", C({ opacity: 0 })),
    y("open => close", [b("1s ease-out")]),
    y("close => open", [b("1s ease-out")]),
  ]),
  U = (() => {
    class e {
      constructor() {
        (this.slides = [
          {
            description:
              "What did you do, when you saw the Trojan on your computer",
            img: "assets/img/smile-face.jpg",
          },
          {
            description: "Youre after taking a cybersecurity course",
            img: "assets/img/chacker.jpg",
          },
          {
            description: "\u0418\u043B\u0438 \u0442\u0430\u043A\u0438\u043C ",
            img: "assets/img/matrix.png",
          },
        ]),
          (this.currentIndex = 0),
          (this.isShowU = !0);
      }
      changeSlide(t) {
        (this.isShowU = !1),
          setTimeout(() => {
            (this.currentIndex = t), (this.isShowU = !0);
          }, 500);
      }
      goToSlide(t) {
        t !== this.currentIndex && this.changeSlide(t);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵcmp = a({
          type: e,
          selectors: [["sliders"]],
          decls: 7,
          vars: 6,
          consts: [
            [1, "sliders-container"],
            [1, "photo", 3, "src"],
            [1, "container_text"],
            [1, "sliders_text"],
            [1, "dots-container"],
            ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"],
            [1, "dot", 3, "click"],
          ],
          template: function (n, r) {
            n & 1 &&
              (i(0, "div", 0),
              c(1, "img", 1),
              i(2, "div", 2)(3, "h1", 3),
              u(4),
              o(),
              i(5, "div", 4),
              m(6, $, 1, 2, "button", 5),
              o()()()),
              n & 2 &&
                (l(),
                h("fade", !0),
                s("src", r.slides[r.currentIndex].img, B),
                l(2),
                s("@fadeInOut", r.isShowU ? "open" : "close"),
                l(),
                F(" ", r.slides[r.currentIndex].description, " "),
                l(2),
                s("ngForOf", r.slides));
          },
          dependencies: [p, D],
          styles: [
            '@charset "UTF-8";.sliders-container[_ngcontent-%COMP%]{position:relative;width:100%;height:600px;overflow:hidden;display:flex}.photo[_ngcontent-%COMP%]{position:absolute;right:0;height:100%;width:60%}.container_text[_ngcontent-%COMP%]{position:relative;background-color:#483d8b;width:40%;height:100%;flex-wrap:wrap}.sliders_text[_ngcontent-%COMP%]{margin-top:200px;margin-left:20px;font-family:Monaco,sans-serif;font-size:25px;align-items:center;color:#fff}.sliders-button[_ngcontent-%COMP%]{border:none;text-decoration:none;height:30px;width:60px;position:absolute;top:70%;left:50%}.dots-container[_ngcontent-%COMP%]{position:absolute;bottom:20px;left:50%;transform:translate(-50%);display:flex;gap:40px}.dot[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;background-color:gray;border:none;cursor:pointer;transition:background-color .3s}.dot.active[_ngcontent-%COMP%]{background-color:#fff}',
          ],
          data: { animation: [R] },
        });
      }
    }
    return e;
  })();
var g = (() => {
  class e {
    constructor() {
      (this.genershow = new M(!1)),
        sessionStorage.getItem("") ||
          (this.showbanner(), sessionStorage.setItem("", ""));
    }
    get state$() {
      return this.genershow.asObservable();
    }
    showbanner() {
      this.genershow.next(!0),
        setTimeout(() => {
          this.genershow.next(!1);
        }, 1e4);
    }
    static {
      this.ɵfac = function (n) {
        return new (n || e)();
      };
    }
    static {
      this.ɵprov = S({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
function W(e, w) {
  e & 1 &&
    (i(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1"),
    u(4, "\u043F\u0440\u0438\u0432\u0435\u0442 mazafucker"),
    o(),
    i(5, "h1"),
    u(
      6,
      "\u0434\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u043C\u043E\u0439 \u0441\u0430\u0439\u0442"
    ),
    o()()()());
}
var H = (() => {
  class e {
    constructor(t) {
      (this.banner = t), (this.showme = !1);
    }
    ngOnInit() {
      this.banner.state$.subscribe((t) => {
        this.showme = t;
      });
    }
    static {
      this.ɵfac = function (n) {
        return new (n || e)(d(g));
      };
    }
    static {
      this.ɵcmp = a({
        type: e,
        selectors: [["sayhi-message"]],
        decls: 1,
        vars: 1,
        consts: [
          ["class", "sayhi-banner", 4, "ngIf"],
          [1, "sayhi-banner"],
          [1, "sayhi-wrapper"],
          [1, "good_wishes"],
        ],
        template: function (n, r) {
          n & 1 && m(0, W, 7, 0, "div", 0), n & 2 && s("ngIf", r.showme);
        },
        dependencies: [p, I],
        styles: [
          ".sayhi-banner[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;background-color:#2c2c2c;box-shadow:0 2px 8px #0000004d;z-index:1000;animation:_ngcontent-%COMP%_fadeIn .3s ease}.good_wishes[_ngcontent-%COMP%]{font-size:40px;color:#fff}.sayhi-wrapper[_ngcontent-%COMP%]{position:fixed;z-index:1000;width:100%;text-align:center;align-items:center;height:100%;display:flex;justify-content:center}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translate(-50%,-10px)}to{opacity:1;transform:translate(-50%)}}",
        ],
      });
    }
  }
  return e;
})();
var ie = (() => {
  class e {
    constructor(t, n) {
      (this.router = t), (this.banner = n);
    }
    Application() {
      this.router.navigate(["/application"]);
    }
    static {
      this.ɵfac = function (n) {
        return new (n || e)(d(z), d(g));
      };
    }
    static {
      this.ɵcmp = a({
        type: e,
        selectors: [["app-home"]],
        decls: 33,
        vars: 0,
        consts: [
          [1, "back"],
          [1, "glav_text"],
          [1, "neglav_text"],
          [
            "preload",
            "auto",
            "loop",
            "",
            "autoplay",
            "",
            "muted",
            "",
            "src",
            "assets/img/around_world.mp4",
            "type",
            "myVideo",
            1,
            "video-bg",
          ],
          [1, "back-fon"],
          [1, "wrapper-container"],
          [1, "wrapper-inner"],
          [1, "card"],
          [1, "otziv"],
          [1, "text_card"],
          [1, "application-container"],
          [1, "application-inner"],
          [1, "application_recomindation"],
          [1, "app-lication"],
          ["mat-flat-button", "", 1, "application-button", 3, "click"],
        ],
        template: function (n, r) {
          n & 1 &&
            (c(0, "sayhi-message"),
            i(1, "div", 0)(2, "h1", 1),
            u(3, "Skillbox incorporated"),
            o(),
            i(4, "h2", 2),
            u(
              5,
              " \u041C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043A\u0443\u0440\u0441\u044B \u043F\u043E \u043A\u0438\u0431\u0435\u0440\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044E \u043A\u0430\u043A \u043D\u0435 \u043E\u0442\u0434\u0430\u0442\u044C \u0437\u043B\u043E\u0443\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0438\u043A\u0430\u043C \u0434\u043E\u043C \u043D\u0430 \u0440\u0443\u0431\u043B\u0435\u0432\u043A\u0435 \u043A\u0430\u043A \u044D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u043B\u0430 \u0414\u043E\u043B\u0438\u043D\u0430 \u0435\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0442\u0430\u043A\u043E\u0432\u043E\u0439 \u0438\u043C\u0435\u0435\u0442\u0441\u044F "
            ),
            o(),
            c(6, "video", 3)(7, "div", 4),
            i(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "h1", 8),
            u(12, "\u0411\u043E\u043B\u0435\u0435 1000"),
            o(),
            i(13, "div", 9),
            u(
              14,
              "\u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0437\u044B\u0432\u043E\u0432"
            ),
            o()(),
            i(15, "div", 7)(16, "h1", 8),
            u(17, "\u0411\u043E\u043B\u0435\u0435 5"),
            o(),
            i(18, "div", 9),
            u(
              19,
              "\u043B\u0435\u0442 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435"
            ),
            o()(),
            i(20, "div", 7)(21, "h1", 8),
            u(22, "\u0421\u0432\u044B\u0448\u0435 10000"),
            o(),
            i(23, "div", 9),
            u(
              24,
              "\u043F\u043E\u043A\u0443\u043F\u043E\u043A \u043A\u0443\u0440\u0441\u0430"
            ),
            o()()()()(),
            c(25, "sliders"),
            i(26, "div", 10)(27, "div", 11)(28, "h1", 12),
            u(
              29,
              " \u041D\u0435 \u043E\u0441\u0442\u0430\u0432\u0430\u0439\u0441\u044F \u0432 \u0434\u0443\u0440\u0430\u043A\u0430\u0445 \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0439 \u0441\u0432\u043E\u044E \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u043A\u0438\u0431\u0435\u0440\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u043F\u043E\u0441\u043B\u0435 \u0442\u044B \u0441\u043C\u043E\u0436\u0435\u0448\u044C \u0432\u0437\u043B\u0430\u043C\u044B\u0432\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B \u043D\u0435\u0434\u0440\u0443\u0433\u043E\u0432 "
            ),
            o()(),
            i(30, "div", 13)(31, "button", 14),
            f("click", function () {
              return r.Application();
            }),
            u(32, " \u0417\u0430\u044F\u0432\u043A\u0430 "),
            o()()());
        },
        dependencies: [p, U, T, j, H],
        styles: [
          ".back[_ngcontent-%COMP%]{display:flex;width:100%;height:1200px;position:relative}.video-bg[_ngcontent-%COMP%]{width:100%;top:0;left:0;position:absolute;object-fit:cover;height:100%;z-index:1}.back-fon[_ngcontent-%COMP%]{background-color:#00000080;position:absolute;top:0;left:0;z-index:2;width:100%;height:100%}.glav_text[_ngcontent-%COMP%]{display:flex;white-space:nowrap;margin-top:100px;margin-left:30px;z-index:3;color:#fff;font-family:Monaco,sans-serif}.neglav_text[_ngcontent-%COMP%]{margin-top:250px;z-index:3;display:flex;color:#fff;font-family:Monaco,sans-serif}.wrapper-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:20px;position:absolute;bottom:0;width:100%;z-index:3}.wrapper-inner[_ngcontent-%COMP%]{display:contents;justify-content:center}.card[_ngcontent-%COMP%]{margin-right:30px;margin-bottom:60px;-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px);display:inline-block;width:25%;height:130px}.text_card[_ngcontent-%COMP%]{text-align:center;font-size:25px;color:#fff;z-index:3;margin-bottom:40px}.otziv[_ngcontent-%COMP%]{text-align:center;color:#fff}.application-container[_ngcontent-%COMP%]{width:100%;height:400px}.application-inner[_ngcontent-%COMP%]{display:flex;justify-content:center}.application_recomindation[_ngcontent-%COMP%]{font-family:Monaco,sans-serif;font-size:30px;color:#000}.application-button[_ngcontent-%COMP%]{margin-top:50px;font-size:18px;width:450px;height:80px;border:#000000 2px solid;border-radius:15px;transition:1s}.application-button[_ngcontent-%COMP%]:hover{font-size:25px;color:#fff;background-color:#6200ea}.app-lication[_ngcontent-%COMP%]{display:flex;justify-content:center}",
        ],
      });
    }
  }
  return e;
})();
export { ie as HomeComponent };
