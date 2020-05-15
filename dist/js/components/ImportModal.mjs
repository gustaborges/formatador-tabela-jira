import { HtmlHelper, MarkdownHelper } from "./CodeHelpers.mjs";
import DataNavigator from "./DataNavigator.mjs";
import CodeEditor from "./CodeEditor.mjs";
import {tableDataSet} from "../common/common.mjs";

let c;

const ImportModal = {
    components: {
        body: $("#importModalBody"),
        continueButton: $("#btnImportModalContinue"),
        warningMessage: $("#warningMessageModal"),
        theModalItself: $('#importModal')
    },

    /**
     * Initializes the modal component.
     */
    init() {
        this.bindUIActions();
    },

    /**
     * This method is called by init() function and binds event listeners to interface elements.
     */
    bindUIActions() {
        
        c.continueButton.click(function() {
            let markedCheckboxes = ImportModal.getSelectedCheckBoxes();

            if (markedCheckboxes.length === 0) {
                displayWarningMessage("Selecione pelo menos um dos itens");
                return;
            }

            // Gets the index of the columns to be considered for exportation
            let indexOfColumnsToImport = getValueAttributes(markedCheckboxes);
            tableDataSet.markColumnsForExportation(indexOfColumnsToImport);            
            const exportedDataSet = tableDataSet.exportMarkedColumns();

            // Converts the reduced dataset to a markdown table
            const markdownCode = MarkdownHelper.convertFromTableDataSet(exportedDataSet);
            CodeEditor.setTextAreaContent(markdownCode);
            
            DataNavigator.loadTableDataSet();
            
            ImportModal.toggle();
        });

        c.theModalItself.on('hide.bs.modal', function () {
            hideWarningMessage();
        });
    },

    /**
     * Sets the options to be displayed as checkboxes in the modal.
     * @param {Array<string>} options The options to be displayed in the modal as checkboxes
     */
    setImportOptions(options) {
        this.clearOptions();

        if(!options) { // then no header was found to display as an import option
            displayWarningMessage('Nenhum header encontrado');
            return;
        }
    
        let i = 0, checkboxHtml;

        // Adds a checkbox to the modal for each option provided
        options.forEach(option => {
            checkboxHtml = HtmlHelper.newCheckBox({
                label: option,
                id: `option${i}`,
                value: `${i++}`,
                name: `import-options-checkbox`
            });

            appendHtmlToModalBody(checkboxHtml);
        });
    },

    /**
     * Clears all options that are currently being displayed in the modal.
     */
    clearOptions: function() {
        c.body.html('');
    },

    /**
     * @returns The result of a selection of checked inputs
     */
    getSelectedCheckBoxes: function() {
        return $("input[name='import-options-checkbox']:checked");
    },

    /**
     * @description Opens or closes the Import Modal
     */
    toggle() {
        $('#importModal').modal('toggle');
    },
}

/**
 * Appends HTML code to the body of the modal
 * @param {string} html The HTML code to be appended to the modal's body
 */
function appendHtmlToModalBody(html) {
    c.body.html(c.body.html() + html);
}

/**
 * Retrieves the value attribute from a collection of inputs.
 * @param {Array<JQuery<HTMLElement>>} inputs A collection of inputs from where to retrieve the values.
 */
function getValueAttributes(inputs) {
    let values = [], valueAttribute;

    inputs.each((index, input)  => {
        valueAttribute = parseInt(input.getAttribute('value'));
        values.push(valueAttribute);
    });

    return values;
}

function displayWarningMessage(text) {
    c.warningMessage.html(text);
    c.warningMessage.addClass('show');
}

function hideWarningMessage() {
    c.warningMessage.removeClass('show');
}

c = ImportModal.components;




export default ImportModal;