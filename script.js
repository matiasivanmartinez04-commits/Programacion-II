/* Datos de las láminas del teórico (Pitch).
   Cada enlace corresponde a una diapositiva publicada por la cátedra.
   La clave coincide con el data-deck de cada pestaña. */

const DECKS = {
  "turing": {
    "base": "https://pitch.com/v/programacin-ii---mquinas-de-turing-ifu26j",
    "slides": [
      "02b8e652-92f2-480b-a14b-e586f5a867ea",
      "dfd52159-4560-48f9-9210-2f28263d05f8",
      "a344eb01-bd19-48a3-b74f-edc509e2e267",
      "3b353726-1e58-4a55-8d75-adb6b7db7758",
      "af39bb22-b3c6-42f9-bc0d-d705a49e77ae",
      "fb90d72a-aca1-4adc-b7e2-b833ae5424b8",
      "f026967e-fd36-44f5-b1b9-60328b19d118",
      "d8656173-175a-4372-bb0b-c113d0caf871",
      "cde5c01d-2233-4da8-bebe-317dc23d41bc",
      "8b1fd16e-de8f-45aa-9bbf-f798418392a2",
      "03ae0e1b-965b-45f0-b2c7-80823a7f3f36",
      "ea26ffee-fa14-4ff0-a333-fcd83243e4ef",
      "767d6c69-ba7d-4a25-b110-ab6d1c0a4305",
      "dcc6108a-ca9b-4346-9456-3e081df74efa",
      "209d3195-aff4-4970-9b2d-40e38f9d2783",
      "a5a67aec-37ea-4676-a482-5f09204bdec1",
      "e0ae9cfe-9bf0-4339-a5c6-abb4037972ea",
      "d0824b91-50a4-4e42-8f50-5f1bd68e9023"
    ]
  },
  "eficiencia": {
    "base": "https://pitch.com/v/programacin-ii---eficiencia-de-algoritmos-64eh5v",
    "slides": [
      "65e4d692-0f45-4543-9f30-3d77e8052780",
      "0a97427f-b265-4808-a536-ddc20426bb6c",
      "66251bd8-dc2e-4656-970a-5a5d4631a555",
      "7feb9786-f286-499d-8991-38f3ee513127",
      "6ae24b0c-1251-4e47-813b-ee23c7015cc9",
      "45c2ead7-3b40-4d4b-8a53-7c64791689c5",
      "3de7d5be-a80d-456a-82c6-905f3174122e",
      "0f9d0066-51ff-4633-915e-e12b92e0d83c",
      "89554b51-d91a-4b13-81f0-77e221d357cb",
      "0ac12305-2fd0-48fa-a44e-2b3c3a92e266",
      "5b778575-b0c4-4b27-b537-8c58cb8aa994",
      "1fab54ea-ccc0-4683-855c-31b5a4b51dc6",
      "03817bb8-01ed-4105-a761-3725ee58e75e",
      "b3b0da4b-2372-452d-aebe-f7aa93477402",
      "75ca3465-085d-45e9-977a-3eee345012c4",
      "7cd307fc-6eaa-4e11-b1ba-7d21d0794082",
      "33f37205-4d22-4f2d-954d-918893c3326e",
      "248c1b96-9573-4c9a-ad0f-dc8df180a27a",
      "9c588695-62d7-4e5d-85f0-fabc93201796",
      "c50c5143-fd88-488f-8fc0-e54201dcf697",
      "37ebbed2-7e1b-4de5-bb33-a499b28b0049",
      "7d183d98-27a8-4651-a81d-b046f1fe2eac",
      "56897cb4-a293-45af-890b-a338b0a30e29",
      "519cb6e4-d8f9-4467-aa59-df718e594d20",
      "522eb4a4-564a-4185-921b-013ff7531753",
      "d4c6af21-a90f-4859-9c69-6612f1fda362",
      "9d29eda4-7c7f-4221-bfdb-bae6d96e3910",
      "da67187d-1046-42dc-8c44-3e38d24fa456",
      "021e9833-67b7-4b3e-ad16-534fc2ab4c0a",
      "7eed0122-343e-4661-91f8-4695fbe70147",
      "f591d8d4-b59f-42b0-9894-4d0c733cf448",
      "67f119f7-08f7-44dc-97f2-945704216987",
      "6373a3a9-5e70-4310-9296-075954bd4120",
      "dcf44366-76c3-4bdd-b15b-c54e5e7dcb48",
      "1df2a831-4912-4044-9397-f255df608468"
    ]
  },
  "automatas": {
    "base": "https://pitch.com/v/programacin-ii---autmatas-finitos-b4jb55",
    "slides": [
      "699d544b-9a57-423b-a120-0e4a4cf49952",
      "20dc7fae-f02c-4564-9e0c-17092ac892fc",
      "fe52a5e7-1406-42ad-ba1b-0e70e16b1ffd",
      "f76f6548-7e85-4a85-9688-ef8e66312605",
      "fc701b15-21e3-4bb8-8b31-2f9f63b581da",
      "8b491157-0393-400f-b407-2fa6a25e291e",
      "530d5336-7ed3-4555-9c55-d543f7b06959",
      "93852844-01d4-43f5-b0df-345d6280aacc",
      "49f1e95e-6294-405a-9f1c-64145d195557",
      "c501e65c-a444-4821-b103-e735bd305cc6",
      "c902c8e8-7b03-4226-90ba-80bd6c0d2af7",
      "10196a83-3cae-4239-b8ab-b17bb5da7ae9",
      "82c403a6-66af-49de-8c4b-c5c011301409",
      "c9e659b3-ce7f-40c1-a72a-8fc790cbfec7",
      "d4338309-3265-4d8f-ba08-916fb1a00b11",
      "c46d0b0c-67d4-4298-8aa0-20f9d3f4b323",
      "b99c2629-bdda-4769-858f-36d5d76a9efd",
      "3bebdb9d-3901-4893-9f52-225617ed4a6f",
      "237da193-0234-431e-a5cf-cc79ae4595b1",
      "be55a53e-a6ef-48d1-bfc9-ad5e6874612b",
      "498fcb13-3c16-4a4a-9c12-60344736bc83",
      "58783f38-128c-4347-a337-c65c33fff4d2",
      "2ba29960-f8fb-4606-a021-4a767eab0953",
      "d2c1afa8-9140-48c8-a998-ead50eb20e74",
      "978c5221-b2f8-4409-b127-43e95ec08998",
      "e268baf2-b523-4628-8e40-b91c90e821ae",
      "f2546c88-d672-46bf-8fdc-314524d85f05",
      "0705b0af-7e7e-4c1b-85ac-1b576f938cec",
      "de852fce-fc36-43ef-b8b7-46cb6cf2e15e",
      "7e05e186-a244-4697-b83a-b3ec1290e448",
      "d3ab8ce5-fb7a-43b5-a298-9a100844ae19",
      "bf5adbd5-9d95-45fe-adab-696bdd102fa3"
    ]
  },
  "gramaticas": {
    "base": "https://pitch.com/v/programacin-ii---gramticas-qrinp7",
    "slides": [
      "4c7d2fa8-6fe3-4120-a496-25605d9421cc",
      "23812348-da52-48c5-aefb-ae8e7817e933",
      "3a985e65-1be7-4148-b1ba-ee0ea35b6523",
      "208faaa7-2e25-4152-9eab-bfc4e94dabb2",
      "0180d1e4-9caa-408c-a5bd-3434206e3f80",
      "36f46fd3-3beb-4452-871f-e18a33fa21fa",
      "656d2100-6160-4178-88d5-771a8d9f9ac9",
      "4d482dea-d262-47d9-a383-80b8fae7d598",
      "e64e1b92-0400-4486-83e4-eed5444ed69f",
      "49513003-e108-4749-89d3-69ce9faf30e1",
      "b1cf82a5-3ab0-4126-b4c5-1fea0188edae",
      "32aeb0eb-204b-417e-9da4-0b304340be88",
      "6f3b6ed7-4acc-4a84-a6a2-4e9bca0e8306",
      "31992afd-9ceb-42a6-ad90-8e9199e60efb",
      "19918536-9547-434b-8ad5-5b74c6e334a9",
      "95473793-1752-4739-82b7-c2d22dca90be",
      "197fc20f-cb57-4383-a7bd-bd08becfc44f",
      "2f1dca66-d101-4187-a6eb-a65074a86763",
      "7c0f40ad-023c-472e-8c20-d99fd294b732",
      "16fb40c6-f7ce-42ac-9bc8-f848125eb748",
      "8f898860-4ccd-4f06-8134-c87edb0f8b3a",
      "518e141f-ebc1-4468-a730-d5178937634e",
      "3ee61392-41f7-4c2b-a483-c8dc2a2ea05b",
      "186c82e9-33f2-4564-95d2-24d219b6edfd",
      "e3532155-50e8-4ac6-9871-d7dfa1540d7c",
      "aaf069e0-6fea-4980-8f0a-93f532c86079",
      "32fab90e-ce0a-42bc-a3ce-c94fb8e9a918",
      "a6916358-bcbc-4959-9024-853ef1149d09",
      "8a7bfdb7-4e27-4530-8a97-99605ae71077",
      "5d9ff5d1-6060-45c5-b32f-f3f7bdd277bd",
      "97f433e7-fb09-43d2-af12-287b127ae20c"
    ]
  }
};

/* ==========================================================================
   Programación II — Guía de estudio
   Comportamiento: pestañas, autoevaluación, enlaces a las láminas y extras.
   Sin dependencias. Funciona abriendo index.html directamente o en GitHub Pages.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------ tabs */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  var panels = Array.prototype.slice.call(document.querySelectorAll(".panel"));

  function activate(id, pushHash) {
    var target = document.getElementById("panel-" + id);
    if (!target) return;

    tabs.forEach(function (t) {
      var on = t.dataset.target === id;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });

    panels.forEach(function (p) {
      var on = p.id === "panel-" + id;
      p.classList.toggle("is-active", on);
      if (on) {
        p.removeAttribute("hidden");
      } else {
        p.setAttribute("hidden", "");
      }
    });

    if (pushHash && history.replaceState) {
      history.replaceState(null, "", "#" + id);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      activate(tab.dataset.target, true);
    });

    // Navegación con flechas dentro de la barra de pestañas.
    tab.addEventListener("keydown", function (e) {
      var i = tabs.indexOf(tab);
      var next = null;
      if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
      if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (next) { e.preventDefault(); next.focus(); activate(next.dataset.target, true); }
    });
  });

  // Enlaces del encabezado (#eficiencia, #gramaticas, ...) abren la pestaña.
  document.querySelectorAll('.chips a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href").slice(1);
      if (document.getElementById("panel-" + id)) {
        e.preventDefault();
        activate(id, true);
      }
    });
  });

  // Si se entra con un hash en la URL, abrir esa pestaña.
  var initial = (location.hash || "").replace("#", "");
  if (initial && document.getElementById("panel-" + initial)) {
    activate(initial, false);
  }

  /* --------------------------------------------------------------- láminas */
  var deckHosts = document.querySelectorAll(".slides-list[data-deck]");

  if (typeof DECKS !== "undefined") {
    deckHosts.forEach(function (host) {
      var key = host.dataset.deck;
      var deck = DECKS[key];
      if (!deck) return;

      var intro = document.createElement("p");
      intro.textContent =
        "Las " + deck.slides.length + " láminas del teórico, una por una. " +
        "Si preferís verlas en orden, abrí la presentación completa.";
      host.appendChild(intro);

      var grid = document.createElement("div");
      grid.className = "slides-grid";

      deck.slides.forEach(function (uuid, i) {
        var a = document.createElement("a");
        a.href = deck.base + "/" + uuid;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = String(i + 1).padStart(2, "0");
        a.title = "Lámina " + (i + 1) + " de " + deck.slides.length;
        grid.appendChild(a);
      });

      host.appendChild(grid);

      var full = document.createElement("a");
      full.className = "deck-link";
      full.href = deck.base;
      full.target = "_blank";
      full.rel = "noopener";
      full.textContent = "Abrir la presentación completa en Pitch ↗";
      host.appendChild(full);
    });
  }

  /* ------------------------------------------------------------------ quiz */
  document.querySelectorAll(".quiz").forEach(function (quiz) {
    var btn = quiz.querySelector("[data-check]");
    var out = quiz.querySelector(".score");
    if (!btn) return;

    btn.addEventListener("click", function () {
      var qs = Array.prototype.slice.call(quiz.querySelectorAll(".q"));
      var total = qs.length;
      var hits = 0;

      qs.forEach(function (q) {
        var answer = q.dataset.answer;
        var picked = q.querySelector("input:checked");

        q.classList.remove("ok", "bad");
        q.querySelectorAll("label").forEach(function (l) {
          l.classList.remove("is-ok", "is-bad");
        });

        if (!picked) return;
        q.classList.add("answered");

        var labels = q.querySelectorAll("label");
        var pickedLabel = picked.parentNode;
        var correctLabel = null;

        Array.prototype.forEach.call(labels, function (l) {
          var input = l.querySelector("input");
          if (input && input.value === answer) correctLabel = l;
        });

        if (picked.value === answer) {
          hits++;
          q.classList.add("ok");
          pickedLabel.classList.add("is-ok");
        } else {
          q.classList.add("bad");
          pickedLabel.classList.add("is-bad");
          if (correctLabel) correctLabel.classList.add("is-ok");
        }
      });

      var answered = qs.filter(function (q) { return q.querySelector("input:checked"); }).length;

      if (answered === 0) {
        out.textContent = "Elegí al menos una opción para corregir.";
        return;
      }

      var msg = hits + " de " + total + " correctas";
      if (hits === total) msg += " — perfecto.";
      else if (hits >= Math.ceil(total * 0.6)) msg += " — vas bien, revisá las marcadas en rojo.";
      else msg += " — repasá la teoría de esta unidad y volvé a intentar.";

      out.textContent = msg;
    });
  });

  /* ------------------------------------------------------- volver arriba -- */
  var top = document.querySelector(".to-top");
  if (top) {
    top.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
      top.classList.toggle("show", window.scrollY > 700);
    }, { passive: true });
  }

  /* ---------------------------------------------------------------- print -- */
  document.querySelectorAll("[data-print]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      // Para imprimir todo el material, no sólo la pestaña visible.
      document.querySelectorAll(".panel").forEach(function (p) {
        p.removeAttribute("hidden");
      });
      window.print();
    });
  });

})();
