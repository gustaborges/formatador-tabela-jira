import CodeEditor from "./CodeEditor.js";
import { HtmlHelper, MarkdownHelper } from "../common/CodeHelpers.js";
import { tableDataSet, TestResultColumnsEnum, TestStatusEnum, getStatusFromSymbol, found } from "../common/common.js";
import SoundEffects from "../common/SoundEffects.js";

let c, s;

const DataNavigator = {

    /**
     * @property {number} settings.currentItem
     * @property {number} settings.totalItems
     * @property {TableDataSet} settings.tableDataSet
     */
    settings: {
        currentItem: 0,
        totalItems: 0,
        tableDataSet: tableDataSet
    },

    components: {
        counter: $("#navigationCounter"),
        previousButton: $("#btnPrevious"),
        nextButton: $("#btnNext"),
        evidenceTextInput: $('#inputFieldResult'),
        evidenceTypeSelectInput: $('#inputSelectResultType'),
        statusSelectInput: $("#inputSelectStatus"),
        statusLabel: $("#statusLabel"),
        observationTextInput: $('#inputFieldObservation'),
        resetButton: $("#btnReset"),
        generateMarkdownButton: $("#btnGenerateTable"),
        form: $("#formDataNavigator"),
        fieldSet: $("#fieldSetDataNavigator"),
        tableTestInfo: $("#tableTestInfo"),
        /** 
         * The <th></th> element of the table
         */
        headRow: $("#dataHeadRow"),
        /** 
         * The <tr></tr> element of the table
         */
        row: $("#dataRow")
    },


    init() {
        this.bindUIActions();
    },

    /**
    * This method is called by init() function and binds event listeners to interface elements.
    */
    bindUIActions(){
        c.resetButton.click(() => {
            SoundEffects.playPoppingSound();

            c.headRow.html(HtmlHelper.newTableHeader(['Nenhum dado']));
            c.row.html(HtmlHelper.newTableRow(['Importe dados de uma tabela markdown']));
            this.resetFields();
            CodeEditor.clear();
            this.disableDataNavigator(true);
        })

        c.nextButton.click(() => {
            SoundEffects.playBubbleSound();
            saveChangesCurrentItem();

            s.currentItem = (s.currentItem === s.totalItems) ? 1 : s.currentItem + 1;
            displayCurrentItem();
        });

        c.previousButton.click(() => {
            SoundEffects.playBubbleSound();
            saveChangesCurrentItem();
            s.currentItem = (s.currentItem === 1) ? s.totalItems : s.currentItem - 1;

            displayCurrentItem();
        });

        c.generateMarkdownButton.click(() => {
            SoundEffects.playGlupSound();
            saveChangesCurrentItem();
            const exportedDataSet = tableDataSet.exportMarkedColumns();
            const markdownCode = MarkdownHelper.convertFromTableDataSet(exportedDataSet);
            CodeEditor.setTextAreaContent(markdownCode);
        });

        c.statusSelectInput.change(() => {
            const selectedValue = c.statusSelectInput.val();
            c.statusLabel.removeClass(['bgStatusSuccess', 'bgStatusAlert', 'bgStatusFailed']);

            switch(selectedValue) {
                case TestStatusEnum.SUCCESS : c.statusLabel.addClass('bgStatusSuccess'); return;
                case TestStatusEnum.ALERT : c.statusLabel.addClass('bgStatusAlert'); return;
                case TestStatusEnum.FAILED : c.statusLabel.addClass('bgStatusFailed'); return;
                default : return;
            }
        });
    },

    /**
     * Loads the data stored in TableDataSet into the DataNavigator component.
     * @param {TableDataSet} tableDataSet The dataset to be loaded into the component.
     */
    loadTableDataSet() {
        s.currentItem = 1;
        s.totalItems = s.tableDataSet.countRows();

        displayCurrentItemFirstTime();

        this.disableDataNavigator(false);
    },

    /**
     * Disables or enables the data navigator and its inputs.
     * @param {boolean} bool 
     */
    disableDataNavigator(bool) {
        c.fieldSet.prop('disabled', bool); // Disables the fieldset with all inputs
    },

    resetFields() {
        c.form.trigger('reset');
        c.statusSelectInput.change(); // updates status' label color
    }
}

/**
 * Updates the tableDataSet with the values set in DataNavigator inputs for the current item.
 */
function saveChangesCurrentItem() {
    let testStatus = c.statusSelectInput.val();
    testStatus = MarkdownHelper.getStatusSymbol(testStatus);
    const evidence = buildEvidence();
    
    tableDataSet.addTestResult({
        resultColumnIdentifier: TestResultColumnsEnum.STATUS,
        result: testStatus, 
        itemIndex: s.currentItem-1
    });

    tableDataSet.addTestResult({
        resultColumnIdentifier: TestResultColumnsEnum.EVIDENCE,
        result: evidence, 
        itemIndex: s.currentItem-1
    });
}


function displayCurrentItemFirstTime() {
    const headerCollection = s.tableDataSet.getHeaderCollection();

    c.headRow.html(HtmlHelper.newTableHeader(
        headerCollection,
        {
            displayBadge:true,            
            badgeConfig: {
                columns: s.tableDataSet.settings.markedColumns,
                text: "result."
            }
        }));

    displayCurrentItem();
}


function displayCurrentItem() {
    const rowsCollection = s.tableDataSet.getRowsCollection();
    c.row.html(HtmlHelper.newTableRow(rowsCollection[s.currentItem - 1]));

    const {evidenceFilename, evidenceObservation} = getDestructuredEvidenceColumnValues();
    const status = getSelectValueFromCurrentItemStatus();

    c.statusSelectInput.val(status);
    c.evidenceTextInput.val(evidenceFilename);
    c.observationTextInput.val(evidenceObservation);

    c.statusSelectInput.change();

    updateCounter(s.currentItem);
}

/**
 * @param {number} currentItem 
 * @param {number} totalItems 
 */
function updateCounter(currentItem, totalItems = s.totalItems) {
    c.counter.html(`${currentItem} / ${totalItems}`);
}

/**
 * Retrieves the correspondent status value to be displayed in select input from the tableDataSet.
 */
function getSelectValueFromCurrentItemStatus() {
    let statusSymbol = tableDataSet.fetchTestResult({
        resultColumnIdentifier: TestResultColumnsEnum.STATUS,
        itemIndex: s.currentItem-1
    });

    if(!statusSymbol)
        return TestStatusEnum.PENDING;

    return getStatusFromSymbol(statusSymbol);
}

/**
 * Retrieves the evidence's filename from tableDataSet's evidence column
 */
function getDestructuredEvidenceColumnValues() {
    let evidenceColumnValue = tableDataSet.fetchTestResult({
         resultColumnIdentifier: TestResultColumnsEnum.EVIDENCE,
         itemIndex: s.currentItem-1
    });

    let evidenceObservation;
    let evidenceFilename = '';
    let evidenceImageEndIndex = evidenceColumnValue.indexOf('|thumbnail!');

    if(found(evidenceImageEndIndex)) {
        evidenceImageEndIndex += 11;
        
        // Extracts the image's filename
        const evidenceImage = evidenceColumnValue.substring(0, evidenceImageEndIndex);
        evidenceFilename = MarkdownHelper.convertFromImageFormat(evidenceImage);

        // Extracts the observation
        evidenceObservation = evidenceColumnValue.substring(evidenceImageEndIndex).replace('\n', '');
    }
    else {
        evidenceObservation = evidenceColumnValue;
    }

    return {evidenceFilename, evidenceObservation};
}

/**
 * Build the evidence value from inputs in interface.
 */
function buildEvidence() {
    const evidenceBuilder = [];
    const evidenceFileFormat = c.evidenceTypeSelectInput.val();
    const evidenceFilename = c.evidenceTextInput.val().trim();
    const observation = c.observationTextInput.val().trim();

    if(evidenceFilename) {
        evidenceBuilder.push(MarkdownHelper.convertToImageFormat(evidenceFilename, evidenceFileFormat));
        if(observation) evidenceBuilder.push('\n');
    }
    evidenceBuilder.push(observation);

    return evidenceBuilder.join('');
}

c = DataNavigator.components;
s = DataNavigator.settings;


export default DataNavigator;