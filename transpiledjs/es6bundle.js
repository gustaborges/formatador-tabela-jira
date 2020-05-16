!function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);class s{constructor(t=[""],e=[[""]]){this._header,this._rows,this._testResultHeader=[],this._testResultRows=[],this.settings={markedColumns:void 0},this.setHeaderCollection(t),this.setRowsCollection(e)}setHeaderCollection(t){this._header=t}setRowsCollection(t){this._rows=t}getHeaderCollection(){if(this._header)return this._header.slice(0)}getRowsCollection(){if(this._rows)return this._rows.slice(0)}_getTestResultHeader(){if(this._testResultHeader)return this._testResultHeader.slice(0)}_getTestResultRows(){if(this._testResultRows)return this._testResultRows.slice(0)}countRows(){return this._rows?this._rows.length:0}exportMarkedColumns(){if(!this.settings.markedColumns||!this._header||!this._rows)return;if(this.settings.markedColumns.reduce((t,e)=>e>t?e:t,0)>this._header.length)return;const t=this._getHeaderExportVersion(),e=this._getRowsExportVersion();return new s(t,e)}clear(){this._header=[""],this._rows=[[""]],this._testResultHeader=[],this._testResultRows=[]}markColumnsForExportation(t){this.settings.markedColumns=t}appendTestResultColumns(t){const e=[...t];this._testResultHeader=e;let n=e.map(t=>"");this._testResultRows=Array(this.countRows()).fill([]),this._testResultRows=this._testResultRows.map(t=>[...n])}addTestResult({resultColumnIdentifier:t,result:e,itemIndex:n}){if(void 0===n)return;const s=this._getTestResultHeader().indexOf(t);this._testResultRows[n][s]=e}fetchTestResult({resultColumnIdentifier:t,itemIndex:e}){if(void 0===e)return;const n=this._getTestResultHeader().indexOf(t);return this._testResultRows[e][n]}_getHeaderExportVersion(){let t=[];const e=this.getHeaderCollection(),n=this.settings.markedColumns;if(!e||!n)return;n.forEach(n=>{t.push(e[n])});let s=this._getTestResultHeader();return t=[...t,...s],t}_getRowsExportVersion(){const t=this.getRowsCollection(),e=this.settings.markedColumns;if(!t||!e)return;let n,s=[],o=0;return t.forEach(t=>{n=[],e.forEach(e=>{n.push(t[e])});let r=this._getTestResultRows();n=[...n,...r[o++]],s.push(n)}),s}}const o=Object.freeze({STATUS:"Status",EVIDENCE:"Evidência"}),r=Object.freeze({FAILED:"failed",SUCCESS:"success",PENDING:"pending"});const i=new s;class a{static newTableHeader(t,{displayBadge:e=!1,badgeConfig:{columns:n=[],text:s=""}={}}={}){t||(t=["Empty"]);let o="",r="",i=0;return e&&(r=`<span class="badge badge-pill badge-pale">${s}</span>`),t.forEach(t=>{n.includes(i++)?o+=`<th>${t} ${r}</th>`:o+=`<th>${t}</th>`}),o}static newTableRow(t){t||(t=["Empty"]);let e="";return t.forEach(t=>{e+=`<td>${t}</td>`}),e.split("\n").join("<br>")}static newCheckBox({label:t="",id:e="",value:n="",name:s=""}){const o=[];return o.push('<div class="custom-control custom-checkbox mb-2">'),o.push(`<input type="checkbox" class="custom-control-input" id="${e}" value="${n}" name="${s}">`),o.push(`<label class="custom-control-label" for="${e}">${t}</label>`),o.push("</div>"),o.join("")}}class l{static readTableHeader(t){let e=t.indexOf("||"),n=t.indexOf("||\n",e+2);if(-1===n&&(n=t.lastIndexOf("||")),-1===e||-1===n||e===n)return;return t.substring(e+2,n).split("||").map(t=>t.trim())}static readTableRows(t){const e=[];let n=[],s=0,o=0;for(;;){if(o=t.indexOf("\n|",s),s=t.indexOf("|\n",o),-1===o)break;-1===s&&(s=t.lastIndexOf("|")),n=t.substring(o+2,s).split("|").map(t=>t.trim()),e.push(n)}return 0===e.length?[["No rows"]]:e}static convertFromTableDataSet(t){let e=[],n=t.getHeaderCollection(),s=t.getRowsCollection();if(n&&(e.push("|"),n.forEach(t=>{e.push(`| ${t} |`)}),e.push("|"),s&&e.push("\n")),s){let t=0;s.forEach(n=>{e.push("|"),n.forEach(t=>{e.push(` ${t} |`)}),s[++t]&&e.push("\n")})}return e.join("")}static convertToImageFormat(t,e){return`!${t}.${e}|thumbnail!`}static convertFromImageFormat(t){if(t)return t.substring(1,t.lastIndexOf("."))}static getStatusSymbol(t){switch(t){case r.SUCCESS:return"(/)";case r.FAILED:return"(x)";case r.PENDING:default:return"(?)"}}}let u,c;const d={settings:{currentItem:0,totalItems:0,tableDataSet:i},components:{counter:$("#navigationCounter"),previousButton:$("#btnPrevious"),nextButton:$("#btnNext"),evidenceTextInput:$("#inputFieldResult"),evidenceTypeSelectInput:$("#inputSelectResultType"),statusSelectInput:$("#inputSelectStatus"),observationTextInput:$("#inputFieldObservation"),resetButton:$("#btnReset"),generateMarkdownButton:$("#btnGenerateTable"),form:$("#formDataNavigator"),fieldSet:$("#fieldSetDataNavigator"),tableTestInfo:$("#tableTestInfo"),headRow:$("#dataHeadRow"),row:$("#dataRow")},init(){this.bindUIActions()},bindUIActions(){u.resetButton.click(()=>{u.headRow.html(a.newTableHeader(["Nenhum dado"])),u.row.html(a.newTableRow(["Importe dados de uma tabela markdown"])),this.resetFields(),R.clear(),this.disableDataNavigator(!0)}),u.nextButton.click(()=>{m(),c.currentItem=c.currentItem===c.totalItems?1:c.currentItem+1,h()}),u.previousButton.click(()=>{m(),c.currentItem=1===c.currentItem?c.totalItems:c.currentItem-1,h()}),u.generateMarkdownButton.click(()=>{m();const t=i.exportMarkedColumns(),e=l.convertFromTableDataSet(t);R.setTextAreaContent(e)})},loadTableDataSet(){c.currentItem=1,c.totalItems=c.tableDataSet.countRows(),function(){const t=c.tableDataSet.getHeaderCollection();u.headRow.html(a.newTableHeader(t,{displayBadge:!0,badgeConfig:{columns:c.tableDataSet.settings.markedColumns,text:"export"}})),h()}(),this.disableDataNavigator(!1)},disableDataNavigator(t){u.fieldSet.prop("disabled",t)},resetFields(){u.form.trigger("reset")}};function m(){let t=u.statusSelectInput.val();t=l.getStatusSymbol(t);const e=function(){const t=[],e=u.evidenceTypeSelectInput.val(),n=u.evidenceTextInput.val().trim(),s=u.observationTextInput.val().trim();n&&(t.push(l.convertToImageFormat(n,e)),s&&t.push("\n"));return t.push(s),t.join("")}();i.addTestResult({resultColumnIdentifier:o.STATUS,result:t,itemIndex:c.currentItem-1}),i.addTestResult({resultColumnIdentifier:o.EVIDENCE,result:e,itemIndex:c.currentItem-1})}function h(){const t=c.tableDataSet.getRowsCollection();u.row.html(a.newTableRow(t[c.currentItem-1]));const{evidenceFilename:e,evidenceObservation:n}=function(){let t,e=i.fetchTestResult({resultColumnIdentifier:o.EVIDENCE,itemIndex:c.currentItem-1}),n="",s=e.indexOf("|thumbnail!");if(r=s,-1!==r){s+=11;const o=e.substring(0,s);n=l.convertFromImageFormat(o),t=e.substring(s).replace("\n","")}else t=e;var r;return{evidenceFilename:n,evidenceObservation:t}}(),s=function(){let t=i.fetchTestResult({resultColumnIdentifier:o.STATUS,itemIndex:c.currentItem-1});return t?function(t){switch(t){case"(/)":return r.SUCCESS;case"(x)":return r.FAILED;case"(?)":default:return r.PENDING}}(t):r.PENDING}();u.statusSelectInput.val(s),u.evidenceTextInput.val(e),u.observationTextInput.val(n),function(t,e=c.totalItems){u.counter.html(`${t} / ${e}`)}(c.currentItem)}u=d.components,c=d.settings;var p=d;let f;const b={components:{body:$("#importModalBody"),continueButton:$("#btnImportModalContinue"),warningMessage:$("#warningMessageModal"),theModalItself:$("#importModal")},init(){this.bindUIActions()},bindUIActions(){f.continueButton.click((function(){let t=b.getSelectedCheckBoxes();if(0===t.length)return void g("Selecione pelo menos um dos itens");let e=function(t){let e,n=[];return t.each((t,s)=>{e=parseInt(s.getAttribute("value")),n.push(e)}),n}(t);i.markColumnsForExportation(e);const n=i.exportMarkedColumns(),s=l.convertFromTableDataSet(n);R.setTextAreaContent(s),p.loadTableDataSet(),b.toggle()})),f.theModalItself.on("hide.bs.modal",(function(){f.warningMessage.removeClass("show")}))},setImportOptions(t){if(this.clearOptions(),!t)return void g("Nenhum header encontrado");let e,n=0;t.forEach(t=>{var s;e=a.newCheckBox({label:t,id:"option"+n,value:""+n++,name:"import-options-checkbox"}),s=e,f.body.html(f.body.html()+s)})},clearOptions:function(){f.body.html("")},getSelectedCheckBoxes:function(){return $("input[name='import-options-checkbox']:checked")},toggle(){$("#importModal").modal("toggle")}};function g(t){f.warningMessage.html(t),f.warningMessage.addClass("show")}f=b.components;var I=b;let w;const v={components:{textArea:$("#codeEditor"),importButton:$("#btnImport"),copyButton:$("#btnCopy")},init(){w=this.components,this.bindUIActions()},bindUIActions(){w.importButton.click((function(){const t=w.textArea.val();if(!t)return;const e=l.readTableHeader(t),n=l.readTableRows(t);i.clear(),i.setHeaderCollection(e),i.setRowsCollection(n),i.appendTestResultColumns([o.STATUS,o.EVIDENCE]),I.setImportOptions(i.getHeaderCollection()),I.toggle()})),w.copyButton.click((function(){w.textArea.select(),document.execCommand("copy")}))},setTextAreaContent(t){w.textArea.val(t)},clear(){this.components.textArea.val("")}};w=v.components;var R=v;window.onload=()=>{I.init(),R.init(),p.init(),$('[data-toggle="tooltip"]').tooltip({delay:{show:800}})}}]);