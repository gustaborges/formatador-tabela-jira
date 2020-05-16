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
      r = Object.freeze({ FAILED: "failed", SUCCESS: "success", ALERT: "alert", PENDING: "pending" });var a = new o();
  var i = function () {
    function i() {
      _classCallCheck(this, i);
    }

    _createClass(i, null, [{
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
            a = 0;return e && (r = "<span class=\"badge badge-pill badge-pale\">" + o + "</span>"), t.forEach(function (t) {
          n.includes(a++) ? s += "<th>" + t + " " + r + "</th>" : s += "<th>" + t + "</th>";
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

    return i;
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
    playBubbleSound: function playBubbleSound() {
      document.getElementById("bubbleSoundPlayer").play();
    },
    playGlupSound: function playGlupSound() {
      document.getElementById("glupSoundPlayer").play();
    }
  };var c = void 0,
      d = void 0;var m = { settings: { currentItem: 0, totalItems: 0, tableDataSet: a }, components: { counter: $("#navigationCounter"), previousButton: $("#btnPrevious"), nextButton: $("#btnNext"), evidenceTextInput: $("#inputFieldResult"), evidenceTypeSelectInput: $("#inputSelectResultType"), statusSelectInput: $("#inputSelectStatus"), observationTextInput: $("#inputFieldObservation"), resetButton: $("#btnReset"), generateMarkdownButton: $("#btnGenerateTable"), form: $("#formDataNavigator"), fieldSet: $("#fieldSetDataNavigator"), tableTestInfo: $("#tableTestInfo"), headRow: $("#dataHeadRow"), row: $("#dataRow") }, init: function init() {
      this.bindUIActions();
    },
    bindUIActions: function bindUIActions() {
      var _this2 = this;

      c.resetButton.click(function () {
        c.headRow.html(i.newTableHeader(["Nenhum dado"])), c.row.html(i.newTableRow(["Importe dados de uma tabela markdown"])), _this2.resetFields(), x.clear(), _this2.disableDataNavigator(!0);
      }), c.nextButton.click(function () {
        u.playBubbleSound(), p(), d.currentItem = d.currentItem === d.totalItems ? 1 : d.currentItem + 1, h();
      }), c.previousButton.click(function () {
        u.playBubbleSound(), p(), d.currentItem = 1 === d.currentItem ? d.totalItems : d.currentItem - 1, h();
      }), c.generateMarkdownButton.click(function () {
        u.playGlupSound(), p();var t = a.exportMarkedColumns(),
            e = l.convertFromTableDataSet(t);x.setTextAreaContent(e);
      });
    },
    loadTableDataSet: function loadTableDataSet() {
      d.currentItem = 1, d.totalItems = d.tableDataSet.countRows(), function () {
        var t = d.tableDataSet.getHeaderCollection();c.headRow.html(i.newTableHeader(t, { displayBadge: !0, badgeConfig: { columns: d.tableDataSet.settings.markedColumns, text: "export" } })), h();
      }(), this.disableDataNavigator(!1);
    },
    disableDataNavigator: function disableDataNavigator(t) {
      c.fieldSet.prop("disabled", t);
    },
    resetFields: function resetFields() {
      c.form.trigger("reset");
    }
  };function p() {
    var t = c.statusSelectInput.val();t = l.getStatusSymbol(t);var e = function () {
      var t = [],
          e = c.evidenceTypeSelectInput.val(),
          n = c.evidenceTextInput.val().trim(),
          o = c.observationTextInput.val().trim();n && (t.push(l.convertToImageFormat(n, e)), o && t.push("\n"));return t.push(o), t.join("");
    }();a.addTestResult({ resultColumnIdentifier: s.STATUS, result: t, itemIndex: d.currentItem - 1 }), a.addTestResult({ resultColumnIdentifier: s.EVIDENCE, result: e, itemIndex: d.currentItem - 1 });
  }function h() {
    var t = d.tableDataSet.getRowsCollection();c.row.html(i.newTableRow(t[d.currentItem - 1]));
    var _ref5 = function () {
      var t = void 0,
          e = a.fetchTestResult({ resultColumnIdentifier: s.EVIDENCE, itemIndex: d.currentItem - 1 }),
          n = "",
          o = e.indexOf("|thumbnail!");if (r = o, -1 !== r) {
        o += 11;var _s = e.substring(0, o);n = l.convertFromImageFormat(_s), t = e.substring(o).replace("\n", "");
      } else t = e;var r;return { evidenceFilename: n, evidenceObservation: t };
    }(),
        e = _ref5.evidenceFilename,
        n = _ref5.evidenceObservation,
        o = function () {
      var t = a.fetchTestResult({ resultColumnIdentifier: s.STATUS, itemIndex: d.currentItem - 1 });return t ? function (t) {
        switch (t) {case "(/)":
            return r.SUCCESS;case "(x)":
            return r.FAILED;case "(!)":
            return r.ALERT;case "(?)":default:
            return r.PENDING;}
      }(t) : r.PENDING;
    }();

    c.statusSelectInput.val(o), c.evidenceTextInput.val(e), c.observationTextInput.val(n), function (t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : d.totalItems;
      c.counter.html(t + " / " + e);
    }(d.currentItem);
  }c = m.components, d = m.settings;var f = m;var b = void 0;var g = { components: { body: $("#importModalBody"), continueButton: $("#btnImportModalContinue"), warningMessage: $("#warningMessageModal"), theModalItself: $("#importModal") }, init: function init() {
      this.bindUIActions();
    },
    bindUIActions: function bindUIActions() {
      b.continueButton.click(function () {
        var t = g.getSelectedCheckBoxes();if (0 === t.length) return void I("Selecione pelo menos um dos itens");var e = function (t) {
          var e = void 0,
              n = [];return t.each(function (t, o) {
            e = parseInt(o.getAttribute("value")), n.push(e);
          }), n;
        }(t);a.markColumnsForExportation(e);var n = a.exportMarkedColumns(),
            o = l.convertFromTableDataSet(n);x.setTextAreaContent(o), f.loadTableDataSet(), g.toggle();
      }), b.theModalItself.on("hide.bs.modal", function () {
        b.warningMessage.removeClass("show");
      });
    },
    setImportOptions: function setImportOptions(t) {
      if (this.clearOptions(), !t) return void I("Nenhum header encontrado");var e = void 0,
          n = 0;t.forEach(function (t) {
        var o;e = i.newCheckBox({ label: t, id: "option" + n, value: "" + n++, name: "import-options-checkbox" }), o = e, b.body.html(b.body.html() + o);
      });
    },
    clearOptions: function clearOptions() {
      b.body.html("");
    }, getSelectedCheckBoxes: function getSelectedCheckBoxes() {
      return $("input[name='import-options-checkbox']:checked");
    }, toggle: function toggle() {
      $("#importModal").modal("toggle");
    }
  };function I(t) {
    b.warningMessage.html(t), b.warningMessage.addClass("show");
  }b = g.components;var w = g;var v = void 0;var R = { components: { textArea: $("#codeEditor"), importButton: $("#btnImport"), copyButton: $("#btnCopy") }, init: function init() {
      v = this.components, this.bindUIActions();
    },
    bindUIActions: function bindUIActions() {
      v.importButton.click(function () {
        var t = v.textArea.val();if (!t) return;var e = l.readTableHeader(t),
            n = l.readTableRows(t);a.clear(), a.setHeaderCollection(e), a.setRowsCollection(n), a.appendTestResultColumns([s.STATUS, s.EVIDENCE]), w.setImportOptions(a.getHeaderCollection()), w.toggle();
      }), v.copyButton.click(function () {
        u.playGlupSound(), v.textArea.select(), document.execCommand("copy");
      });
    },
    setTextAreaContent: function setTextAreaContent(t) {
      v.textArea.val(t);
    },
    clear: function clear() {
      this.components.textArea.val("");
    }
  };v = R.components;var x = R;window.onload = function () {
    w.init(), x.init(), f.init(), $('[data-toggle="tooltip"]').tooltip({ delay: { show: 800 } });
  };
}]);
