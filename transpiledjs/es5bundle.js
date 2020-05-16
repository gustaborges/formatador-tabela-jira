"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function (t) {
  var e = {};function n(s) {
    if (e[s]) return e[s].exports;var o = e[s] = { i: s, l: !1, exports: {} };return t[s].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }n.m = t, n.c = e, n.d = function (t, e, s) {
    n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;if (4 & e && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.__esModule) return t;var s = Object.create(null);if (n.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var o in t) {
      n.d(s, o, function (e) {
        return t[e];
      }.bind(null, o));
    }return s;
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
  var s = function () {
    function s() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [""];
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [[""]];

      _classCallCheck(this, s);

      this._header, this._rows, this._testResultHeader = [], this._testResultRows = [], this.settings = { markedColumns: void 0 }, this.setHeaderCollection(t), this.setRowsCollection(e);
    }

    _createClass(s, [{
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
            e = this._getRowsExportVersion();return new s(t, e);
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
        if (void 0 === n) return;var s = this._getTestResultHeader().indexOf(t);this._testResultRows[n][s] = e;
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
        });var s = this._getTestResultHeader();return t = [].concat(_toConsumableArray(t), _toConsumableArray(s)), t;
      }
    }, {
      key: "_getRowsExportVersion",
      value: function _getRowsExportVersion() {
        var _this = this;

        var t = this.getRowsCollection(),
            e = this.settings.markedColumns;if (!t || !e) return;var n = void 0,
            s = [],
            o = 0;return t.forEach(function (t) {
          n = [], e.forEach(function (e) {
            n.push(t[e]);
          });var r = _this._getTestResultRows();n = [].concat(_toConsumableArray(n), _toConsumableArray(r[o++])), s.push(n);
        }), s;
      }
    }]);

    return s;
  }();

  var o = Object.freeze({ STATUS: "Status", EVIDENCE: "Evidência" }),
      r = Object.freeze({ FAILED: "failed", SUCCESS: "success", ALERT: "alert", PENDING: "pending" });var i = new s();
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
            s = _ref3$badgeConfig$tex === undefined ? "" : _ref3$badgeConfig$tex;
        t || (t = ["Empty"]);var o = "",
            r = "",
            i = 0;return e && (r = "<span class=\"badge badge-pill badge-pale\">" + s + "</span>"), t.forEach(function (t) {
          n.includes(i++) ? o += "<th>" + t + " " + r + "</th>" : o += "<th>" + t + "</th>";
        }), o;
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
            s = _ref4$name === undefined ? "" : _ref4$name;
        var o = [];return o.push('<div class="custom-control custom-checkbox mb-2">'), o.push("<input type=\"checkbox\" class=\"custom-control-input\" id=\"" + e + "\" value=\"" + n + "\" name=\"" + s + "\">"), o.push("<label class=\"custom-control-label\" for=\"" + e + "\">" + t + "</label>"), o.push("</div>"), o.join("");
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
            s = 0,
            o = 0;for (;;) {
          if (o = t.indexOf("\n|", s), s = t.indexOf("|\n", o), -1 === o) break;-1 === s && (s = t.lastIndexOf("|")), n = t.substring(o + 2, s).split("|").map(function (t) {
            return t.trim();
          }), e.push(n);
        }return 0 === e.length ? [["No rows"]] : e;
      }
    }, {
      key: "convertFromTableDataSet",
      value: function convertFromTableDataSet(t) {
        var e = [],
            n = t.getHeaderCollection(),
            s = t.getRowsCollection();if (n && (e.push("|"), n.forEach(function (t) {
          e.push("| " + t + " |");
        }), e.push("|"), s && e.push("\n")), s) {
          var _t = 0;s.forEach(function (n) {
            e.push("|"), n.forEach(function (t) {
              e.push(" " + t + " |");
            }), s[++_t] && e.push("\n");
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

  var u = void 0,
      c = void 0;var d = { settings: { currentItem: 0, totalItems: 0, tableDataSet: i }, components: { counter: $("#navigationCounter"), previousButton: $("#btnPrevious"), nextButton: $("#btnNext"), evidenceTextInput: $("#inputFieldResult"), evidenceTypeSelectInput: $("#inputSelectResultType"), statusSelectInput: $("#inputSelectStatus"), observationTextInput: $("#inputFieldObservation"), resetButton: $("#btnReset"), generateMarkdownButton: $("#btnGenerateTable"), form: $("#formDataNavigator"), fieldSet: $("#fieldSetDataNavigator"), tableTestInfo: $("#tableTestInfo"), headRow: $("#dataHeadRow"), row: $("#dataRow") }, init: function init() {
      this.bindUIActions();
    },
    bindUIActions: function bindUIActions() {
      var _this2 = this;

      u.resetButton.click(function () {
        u.headRow.html(a.newTableHeader(["Nenhum dado"])), u.row.html(a.newTableRow(["Importe dados de uma tabela markdown"])), _this2.resetFields(), R.clear(), _this2.disableDataNavigator(!0);
      }), u.nextButton.click(function () {
        m(), c.currentItem = c.currentItem === c.totalItems ? 1 : c.currentItem + 1, h();
      }), u.previousButton.click(function () {
        m(), c.currentItem = 1 === c.currentItem ? c.totalItems : c.currentItem - 1, h();
      }), u.generateMarkdownButton.click(function () {
        m();var t = i.exportMarkedColumns(),
            e = l.convertFromTableDataSet(t);R.setTextAreaContent(e);
      });
    },
    loadTableDataSet: function loadTableDataSet() {
      c.currentItem = 1, c.totalItems = c.tableDataSet.countRows(), function () {
        var t = c.tableDataSet.getHeaderCollection();u.headRow.html(a.newTableHeader(t, { displayBadge: !0, badgeConfig: { columns: c.tableDataSet.settings.markedColumns, text: "export" } })), h();
      }(), this.disableDataNavigator(!1);
    },
    disableDataNavigator: function disableDataNavigator(t) {
      u.fieldSet.prop("disabled", t);
    },
    resetFields: function resetFields() {
      u.form.trigger("reset");
    }
  };function m() {
    var t = u.statusSelectInput.val();t = l.getStatusSymbol(t);var e = function () {
      var t = [],
          e = u.evidenceTypeSelectInput.val(),
          n = u.evidenceTextInput.val().trim(),
          s = u.observationTextInput.val().trim();n && (t.push(l.convertToImageFormat(n, e)), s && t.push("\n"));return t.push(s), t.join("");
    }();i.addTestResult({ resultColumnIdentifier: o.STATUS, result: t, itemIndex: c.currentItem - 1 }), i.addTestResult({ resultColumnIdentifier: o.EVIDENCE, result: e, itemIndex: c.currentItem - 1 });
  }function h() {
    var t = c.tableDataSet.getRowsCollection();u.row.html(a.newTableRow(t[c.currentItem - 1]));
    var _ref5 = function () {
      var t = void 0,
          e = i.fetchTestResult({ resultColumnIdentifier: o.EVIDENCE, itemIndex: c.currentItem - 1 }),
          n = "",
          s = e.indexOf("|thumbnail!");if (r = s, -1 !== r) {
        s += 11;var _o = e.substring(0, s);n = l.convertFromImageFormat(_o), t = e.substring(s).replace("\n", "");
      } else t = e;var r;return { evidenceFilename: n, evidenceObservation: t };
    }(),
        e = _ref5.evidenceFilename,
        n = _ref5.evidenceObservation,
        s = function () {
      var t = i.fetchTestResult({ resultColumnIdentifier: o.STATUS, itemIndex: c.currentItem - 1 });return t ? function (t) {
        switch (t) {case "(/)":
            return r.SUCCESS;case "(x)":
            return r.FAILED;case "(!)":
            return r.ALERT;case "(?)":default:
            return r.PENDING;}
      }(t) : r.PENDING;
    }();

    u.statusSelectInput.val(s), u.evidenceTextInput.val(e), u.observationTextInput.val(n), function (t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : c.totalItems;
      u.counter.html(t + " / " + e);
    }(c.currentItem);
  }u = d.components, c = d.settings;var p = d;var f = void 0;var b = { components: { body: $("#importModalBody"), continueButton: $("#btnImportModalContinue"), warningMessage: $("#warningMessageModal"), theModalItself: $("#importModal") }, init: function init() {
      this.bindUIActions();
    },
    bindUIActions: function bindUIActions() {
      f.continueButton.click(function () {
        var t = b.getSelectedCheckBoxes();if (0 === t.length) return void g("Selecione pelo menos um dos itens");var e = function (t) {
          var e = void 0,
              n = [];return t.each(function (t, s) {
            e = parseInt(s.getAttribute("value")), n.push(e);
          }), n;
        }(t);i.markColumnsForExportation(e);var n = i.exportMarkedColumns(),
            s = l.convertFromTableDataSet(n);R.setTextAreaContent(s), p.loadTableDataSet(), b.toggle();
      }), f.theModalItself.on("hide.bs.modal", function () {
        f.warningMessage.removeClass("show");
      });
    },
    setImportOptions: function setImportOptions(t) {
      if (this.clearOptions(), !t) return void g("Nenhum header encontrado");var e = void 0,
          n = 0;t.forEach(function (t) {
        var s;e = a.newCheckBox({ label: t, id: "option" + n, value: "" + n++, name: "import-options-checkbox" }), s = e, f.body.html(f.body.html() + s);
      });
    },
    clearOptions: function clearOptions() {
      f.body.html("");
    }, getSelectedCheckBoxes: function getSelectedCheckBoxes() {
      return $("input[name='import-options-checkbox']:checked");
    }, toggle: function toggle() {
      $("#importModal").modal("toggle");
    }
  };function g(t) {
    f.warningMessage.html(t), f.warningMessage.addClass("show");
  }f = b.components;var I = b;var w = void 0;var v = { components: { textArea: $("#codeEditor"), importButton: $("#btnImport"), copyButton: $("#btnCopy") }, init: function init() {
      w = this.components, this.bindUIActions();
    },
    bindUIActions: function bindUIActions() {
      w.importButton.click(function () {
        var t = w.textArea.val();if (!t) return;var e = l.readTableHeader(t),
            n = l.readTableRows(t);i.clear(), i.setHeaderCollection(e), i.setRowsCollection(n), i.appendTestResultColumns([o.STATUS, o.EVIDENCE]), I.setImportOptions(i.getHeaderCollection()), I.toggle();
      }), w.copyButton.click(function () {
        w.textArea.select(), document.execCommand("copy");
      });
    },
    setTextAreaContent: function setTextAreaContent(t) {
      w.textArea.val(t);
    },
    clear: function clear() {
      this.components.textArea.val("");
    }
  };w = v.components;var R = v;window.onload = function () {
    I.init(), R.init(), p.init(), $('[data-toggle="tooltip"]').tooltip({ delay: { show: 800 } });
  };
}]);
