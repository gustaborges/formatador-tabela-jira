"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function (t) {
  var e = {};function n(o) {
    if (e[o]) return e[o].exports;var s = e[o] = { i: o, l: !1, exports: {} };return t[o].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
  }n.m = t, n.c = e, n.d = function (t, e, o) {
    n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;if (4 & e && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.__esModule) return t;var o = Object.create(null);if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var s in t) {
      n.d(o, s, function (e) {
        return t[e];
      }.bind(null, s));
    }return o;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 0);
}([function (t, e, n) {
  "use strict";
  n.r(e);
  var o = function () {
    function o() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [""];
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [[""]];

      _classCallCheck(this, o);

      this._header, this._rows, this._testResultHeader = [], this._testResultRows = [], this.settings = { markedColumns: void 0 }, this.setHeaderCollection(t), this.setRowsCollection(e);
    }

    _createClass(o, [{
      key: "setHeaderCollection",
      value: function setHeaderCollection(t) {
        this._header = t;
      }
    }, {
      key: "setRowsCollection",
      value: function setRowsCollection(t) {
        this._rows = t;
      }
    }, {
      key: "getHeaderCollection",
      value: function getHeaderCollection() {
        if (this._header) return this._header.slice(0);
      }
    }, {
      key: "getRowsCollection",
      value: function getRowsCollection() {
        if (this._rows) return this._rows.slice(0);
      }
    }, {
      key: "_getTestResultHeader",
      value: function _getTestResultHeader() {
        if (this._testResultHeader) return this._testResultHeader.slice(0);
      }
    }, {
      key: "_getTestResultRows",
      value: function _getTestResultRows() {
        if (this._testResultRows) return this._testResultRows.slice(0);
      }
    }, {
      key: "countRows",
      value: function countRows() {
        return this._rows ? this._rows.length : 0;
      }
    }, {
      key: "exportMarkedColumns",
      value: function exportMarkedColumns() {
        if (!this.settings.markedColumns || !this._header || !this._rows) return;if (this.settings.markedColumns.reduce(function (t, e) {
          return e > t ? e : t;
        }, 0) > this._header.length) return;var t = this._getHeaderExportVersion(),
            e = this._getRowsExportVersion();return new o(t, e);
      }
    }, {
      key: "clear",
      value: function clear() {
        this._header = [""], this._rows = [[""]], this._testResultHeader = [], this._testResultRows = [];
      }
    }, {
      key: "markColumnsForExportation",
      value: function markColumnsForExportation(t) {
        this.settings.markedColumns = t;
      }
    }, {
      key: "appendTestResultColumns",
      value: function appendTestResultColumns(t) {
        var e = [].concat(_toConsumableArray(t));this._testResultHeader = e;var n = e.map(function (t) {
          return "";
        });this._testResultRows = Array(this.countRows()).fill([]), this._testResultRows = this._testResultRows.map(function (t) {
          return [].concat(_toConsumableArray(n));
        });
      }
    }, {
      key: "addTestResult",
      value: function addTestResult(_ref) {
        var t = _ref.resultColumnIdentifier,
            e = _ref.result,
            n = _ref.itemIndex;
        if (void 0 === n) return;var o = this._getTestResultHeader().indexOf(t);this._testResultRows[n][o] = e;
      }
    }, {
      key: "fetchTestResult",
      value: function fetchTestResult(_ref2) {
        var t = _ref2.resultColumnIdentifier,
            e = _ref2.itemIndex;
        if (void 0 === e) return;var n = this._getTestResultHeader().indexOf(t);return this._testResultRows[e][n];
      }
    }, {
      key: "_getHeaderExportVersion",
      value: function _getHeaderExportVersion() {
        var t = [];var e = this.getHeaderCollection(),
            n = this.settings.markedColumns;if (!e || !n) return;n.forEach(function (n) {
          t.push(e[n]);
        });var o = this._getTestResultHeader();return t = [].concat(_toConsumableArray(t), _toConsumableArray(o)), t;
      }
    }, {
      key: "_getRowsExportVersion",
      value: function _getRowsExportVersion() {
        var _this = this;

        var t = this.getRowsCollection(),
            e = this.settings.markedColumns;if (!t || !e) return;var n = void 0,
            o = [],
            s = 0;return t.forEach(function (t) {
          n = [], e.forEach(function (e) {
            n.push(t[e]);
          });var r = _this._getTestResultRows();n = [].concat(_toConsumableArray(n), _toConsumableArray(r[s++])), o.push(n);
        }), o;
      }
    }]);

    return o;
  }();

  var s = Object.freeze({ STATUS: "Status", EVIDENCE: "Evidência" }),
      r = Object.freeze({ FAILED: "failed", SUCCESS: "success", ALERT: "alert", PENDING: "pending" });var i = new o();
  var a = function () {
    function a() {
      _classCallCheck(this, a);
    }

    _createClass(a, null, [{
      key: "newTableHeader",
      value: function newTableHeader(t) {
        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref3$displayBadge = _ref3.displayBadge,
            e = _ref3$displayBadge === undefined ? !1 : _ref3$displayBadge,
            _ref3$badgeConfig = _ref3.badgeConfig;

        _ref3$badgeConfig = _ref3$badgeConfig === undefined ? {} : _ref3$badgeConfig;
        var _ref3$badgeConfig$col = _ref3$badgeConfig.columns,
            n = _ref3$badgeConfig$col === undefined ? [] : _ref3$badgeConfig$col,
            _ref3$badgeConfig$tex = _ref3$badgeConfig.text,
            o = _ref3$badgeConfig$tex === undefined ? "" : _ref3$badgeConfig$tex;
        t || (t = ["Empty"]);var s = "",
            r = "",
            i = 0;return e && (r = "<span class=\"badge badge-pill badge-pale\">" + o + "</span>"), t.forEach(function (t) {
          n.includes(i++) ? s += "<th>" + t + " " + r + "</th>" : s += "<th>" + t + "</th>";
        }), s;
      }
    }, {
      key: "newTableRow",
      value: function newTableRow(t) {
        t || (t = ["Empty"]);var e = "";return t.forEach(function (t) {
          e += "<td>" + t + "</td>";
        }), e.split("\n").join("<br>");
      }
    }, {
      key: "newCheckBox",
      value: function newCheckBox(_ref4) {
        var _ref4$label = _ref4.label,
            t = _ref4$label === undefined ? "" : _ref4$label,
            _ref4$id = _ref4.id,
            e = _ref4$id === undefined ? "" : _ref4$id,
            _ref4$value = _ref4.value,
            n = _ref4$value === undefined ? "" : _ref4$value,
            _ref4$name = _ref4.name,
            o = _ref4$name === undefined ? "" : _ref4$name;
        var s = [];return s.push('<div class="custom-control custom-checkbox mb-2">'), s.push("<input type=\"checkbox\" class=\"custom-control-input\" id=\"" + e + "\" value=\"" + n + "\" name=\"" + o + "\">"), s.push("<label class=\"custom-control-label\" for=\"" + e + "\">" + t + "</label>"), s.push("</div>"), s.join("");
      }
    }]);

    return a;
  }();

  var l = function () {
    function l() {
      _classCallCheck(this, l);
    }

    _createClass(l, null, [{
      key: "readTableHeader",
      value: function readTableHeader(t) {
        var e = t.indexOf("||"),
            n = t.indexOf("||\n", e + 2);if (-1 === n && (n = t.lastIndexOf("||")), -1 === e || -1 === n || e === n) return;return t.substring(e + 2, n).split("||").map(function (t) {
          return t.trim();
        });
      }
    }, {
      key: "readTableRows",
      value: function readTableRows(t) {
        var e = [];var n = [],
            o = 0,
            s = 0;for (;;) {
          if (s = t.indexOf("\n|", o), o = t.indexOf("|\n", s), -1 === s) break;-1 === o && (o = t.lastIndexOf("|")), n = t.substring(s + 2, o).split("|").map(function (t) {
            return t.trim();
          }), e.push(n);
        }return 0 === e.length ? [["No rows"]] : e;
      }
    }, {
      key: "convertFromTableDataSet",
      value: function convertFromTableDataSet(t) {
        var e = [],
            n = t.getHeaderCollection(),
            o = t.getRowsCollection();if (n && (e.push("|"), n.forEach(function (t) {
          e.push("| " + t + " |");
        }), e.push("|"), o && e.push("\n")), o) {
          var _t = 0;o.forEach(function (n) {
            e.push("|"), n.forEach(function (t) {
              e.push(" " + t + " |");
            }), o[++_t] && e.push("\n");
          });
        }return e.join("");
      }
    }, {
      key: "convertToImageFormat",
      value: function convertToImageFormat(t, e) {
        return "!" + t + "." + e + "|thumbnail!";
      }
    }, {
      key: "convertFromImageFormat",
      value: function convertFromImageFormat(t) {
        if (t) return t.substring(1, t.lastIndexOf("."));
      }
    }, {
      key: "getStatusSymbol",
      value: function getStatusSymbol(t) {
        switch (t) {case r.SUCCESS:
            return "(/)";case r.FAILED:
            return "(x)";case r.ALERT:
            return "(!)";case r.PENDING:default:
            return "(?)";}
      }
    }]);

    return l;
  }();

  var u = {
    init: function init() {
      var t = document.createElement("audio");t.setAttribute("src", "https://www.mboxdrive.com/bubble_pop.mp3"), u.sounds.bubbleSound = t, t = document.createElement("audio"), t.setAttribute("src", "https://www.mboxdrive.com/glup_effect.mp3"), u.sounds.glubSound = t, t = document.createElement("audio"), t.setAttribute("src", "https://www.mboxdrive.com/open_pop.mp3"), u.sounds.poppingSound = t;
    },
    sounds: { bubbleSound: void 0, glubSound: void 0, poppingSound: void 0 }, playBubbleSound: function playBubbleSound() {
      u.sounds.bubbleSound.play();
    },
    playGlupSound: function playGlupSound() {
      u.sounds.glubSound.play();
    },
    playPoppingSound: function playPoppingSound() {
      u.sounds.poppingSound.play();
    }
  };var c = u;var d = void 0,
      p = void 0;var m = { settings: { currentItem: 0, totalItems: 0, tableDataSet: i }, components: { counter: $("#navigationCounter"), previousButton: $("#btnPrevious"), nextButton: $("#btnNext"), evidenceTextInput: $("#inputFieldResult"), evidenceTypeSelectInput: $("#inputSelectResultType"), statusSelectInput: $("#inputSelectStatus"), observationTextInput: $("#inputFieldObservation"), resetButton: $("#btnReset"), generateMarkdownButton: $("#btnGenerateTable"), form: $("#formDataNavigator"), fieldSet: $("#fieldSetDataNavigator"), tableTestInfo: $("#tableTestInfo"), headRow: $("#dataHeadRow"), row: $("#dataRow") }, init: function init() {
      this.bindUIActions();
    },
    bindUIActions: function bindUIActions() {
      var _this2 = this;

      d.resetButton.click(function () {
        c.playPoppingSound(), d.headRow.html(a.newTableHeader(["Nenhum dado"])), d.row.html(a.newTableRow(["Importe dados de uma tabela markdown"])), _this2.resetFields(), x.clear(), _this2.disableDataNavigator(!0);
      }), d.nextButton.click(function () {
        c.playBubbleSound(), h(), p.currentItem = p.currentItem === p.totalItems ? 1 : p.currentItem + 1, b();
      }), d.previousButton.click(function () {
        c.playBubbleSound(), h(), p.currentItem = 1 === p.currentItem ? p.totalItems : p.currentItem - 1, b();
      }), d.generateMarkdownButton.click(function () {
        c.playGlupSound(), h();var t = i.exportMarkedColumns(),
            e = l.convertFromTableDataSet(t);x.setTextAreaContent(e);
      });
    },
    loadTableDataSet: function loadTableDataSet() {
      p.currentItem = 1, p.totalItems = p.tableDataSet.countRows(), function () {
        var t = p.tableDataSet.getHeaderCollection();d.headRow.html(a.newTableHeader(t, { displayBadge: !0, badgeConfig: { columns: p.tableDataSet.settings.markedColumns, text: "export" } })), b();
      }(), this.disableDataNavigator(!1);
    },
    disableDataNavigator: function disableDataNavigator(t) {
      d.fieldSet.prop("disabled", t);
    },
    resetFields: function resetFields() {
      d.form.trigger("reset");
    }
  };function h() {
    var t = d.statusSelectInput.val();t = l.getStatusSymbol(t);var e = function () {
      var t = [],
          e = d.evidenceTypeSelectInput.val(),
          n = d.evidenceTextInput.val().trim(),
          o = d.observationTextInput.val().trim();n && (t.push(l.convertToImageFormat(n, e)), o && t.push("\n"));return t.push(o), t.join("");
    }();i.addTestResult({ resultColumnIdentifier: s.STATUS, result: t, itemIndex: p.currentItem - 1 }), i.addTestResult({ resultColumnIdentifier: s.EVIDENCE, result: e, itemIndex: p.currentItem - 1 });
  }function b() {
    var t = p.tableDataSet.getRowsCollection();d.row.html(a.newTableRow(t[p.currentItem - 1]));
    var _ref5 = function () {
      var t = void 0,
          e = i.fetchTestResult({ resultColumnIdentifier: s.EVIDENCE, itemIndex: p.currentItem - 1 }),
          n = "",
          o = e.indexOf("|thumbnail!");if (r = o, -1 !== r) {
        o += 11;var _s = e.substring(0, o);n = l.convertFromImageFormat(_s), t = e.substring(o).replace("\n", "");
      } else t = e;var r;return { evidenceFilename: n, evidenceObservation: t };
    }(),
        e = _ref5.evidenceFilename,
        n = _ref5.evidenceObservation,
        o = function () {
      var t = i.fetchTestResult({ resultColumnIdentifier: s.STATUS, itemIndex: p.currentItem - 1 });return t ? function (t) {
        switch (t) {case "(/)":
            return r.SUCCESS;case "(x)":
            return r.FAILED;case "(!)":
            return r.ALERT;case "(?)":default:
            return r.PENDING;}
      }(t) : r.PENDING;
    }();

    d.statusSelectInput.val(o), d.evidenceTextInput.val(e), d.observationTextInput.val(n), function (t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : p.totalItems;
      d.counter.html(t + " / " + e);
    }(p.currentItem);
  }d = m.components, p = m.settings;var f = m;var g = void 0;var w = { components: { body: $("#importModalBody"), continueButton: $("#btnImportModalContinue"), warningMessage: $("#warningMessageModal"), theModalItself: $("#importModal") }, init: function init() {
      this.bindUIActions();
    },
    bindUIActions: function bindUIActions() {
      g.continueButton.click(function () {
        c.playGlupSound();var t = w.getSelectedCheckBoxes();if (0 === t.length) return void I("Selecione pelo menos um dos itens");var e = function (t) {
          var e = void 0,
              n = [];return t.each(function (t, o) {
            e = parseInt(o.getAttribute("value")), n.push(e);
          }), n;
        }(t);i.markColumnsForExportation(e);var n = i.exportMarkedColumns(),
            o = l.convertFromTableDataSet(n);x.setTextAreaContent(o), f.loadTableDataSet(), w.toggle();
      }), g.theModalItself.on("hide.bs.modal", function () {
        g.warningMessage.removeClass("show");
      });
    },
    setImportOptions: function setImportOptions(t) {
      if (this.clearOptions(), !t) return void I("Nenhum header encontrado");var e = void 0,
          n = 0;t.forEach(function (t) {
        var o;e = a.newCheckBox({ label: t, id: "option" + n, value: "" + n++, name: "import-options-checkbox" }), o = e, g.body.html(g.body.html() + o);
      });
    },
    clearOptions: function clearOptions() {
      g.body.html("");
    }, getSelectedCheckBoxes: function getSelectedCheckBoxes() {
      return $("input[name='import-options-checkbox']:checked");
    }, toggle: function toggle() {
      $("#importModal").modal("toggle");
    }
  };function I(t) {
    g.warningMessage.html(t), g.warningMessage.addClass("show");
  }g = w.components;var v = w;var S = void 0;var R = { components: { textArea: $("#codeEditor"), importButton: $("#btnImport"), copyButton: $("#btnCopy") }, init: function init() {
      S = this.components, this.bindUIActions();
    },
    bindUIActions: function bindUIActions() {
      S.importButton.click(function () {
        c.playGlupSound();var t = S.textArea.val();if (!t) return;var e = l.readTableHeader(t),
            n = l.readTableRows(t);i.clear(), i.setHeaderCollection(e), i.setRowsCollection(n), i.appendTestResultColumns([s.STATUS, s.EVIDENCE]), v.setImportOptions(i.getHeaderCollection()), v.toggle();
      }), S.copyButton.click(function () {
        c.playGlupSound(), S.textArea.select(), document.execCommand("copy");
      });
    },
    setTextAreaContent: function setTextAreaContent(t) {
      S.textArea.val(t);
    },
    clear: function clear() {
      this.components.textArea.val("");
    }
  };S = R.components;var x = R;window.onload = function () {
    c.init(), v.init(), x.init(), f.init(), $('[data-toggle="tooltip"]').tooltip({ delay: { show: 800 } });
  };
}]);
