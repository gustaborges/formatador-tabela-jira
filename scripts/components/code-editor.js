import ImportModal from "./import-modal.js";
import { MarkdownHelper } from "../common/code-helpers.js";
import { TestResultColumnsEnum, tableDataSet } from "../common/common.js";
import SoundEffects from "../common/sound-effects.js";

let c;

const CodeEditor = {
    components: {
        textArea: $('#codeEditor'),
        importButton: $('#btnImport'),
        copyButton: $('#btnCopy')
    },

    /**
     * Initializes CodeEditor component.
     * @param { TableDataSet } dataSet
     */
    init() {
        c = this.components;
        this.bindUIActions();
    },

    /**
      *This method is called by init() function and binds event listeners to interface elements.
    */
    bindUIActions() {

        c.importButton.click(function() {
            SoundEffects.playGlupSound();
            const markdownCode = c.textArea.val();
        
            if(!markdownCode) // then code editor is empty
                return;

            // Reads data from markdown code
            const tableHeader = MarkdownHelper.readTableHeader(markdownCode);
            const tableRows = MarkdownHelper.readTableRows(markdownCode);
            tableDataSet.clear();
            tableDataSet.setHeaderCollection(tableHeader);
            tableDataSet.setRowsCollection(tableRows);
            tableDataSet.appendTestResultColumns([TestResultColumnsEnum.STATUS, TestResultColumnsEnum.EVIDENCE]);

            ImportModal.setImportOptions(tableDataSet.getHeaderCollection());          
            ImportModal.toggle();
        });

        c.copyButton.click(function() {
            SoundEffects.playSwipingSound();
            c.textArea.select();
            document.execCommand("copy");
        });
    },

    setTextAreaContent(markdownCode) {
        c.textArea.val(markdownCode);
    },

    /**
     * Sets the text are value to an empty string
     */
    clear() {
        this.components.textArea.val('');
    }
}

c = CodeEditor.components;

export default CodeEditor;