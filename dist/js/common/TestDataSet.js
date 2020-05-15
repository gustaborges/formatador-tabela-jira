
/**
 * @description An class that encapsulates data from a Test, such as header and rows.
 */
export default class TableDataSet {
    /**
     * Initializes a new instance of the class TestDataSet
     * @param {Array<string>} header A collection of strings with header values
     * @param {Array<Array<string>>} rows A collection of arrays of strings. Each array represents the row and each string the column value.
     */
    constructor(header = [''], rows = [['']]) {
        this._header;
        this._rows;
        this._testResultHeader = [];
        this._testResultRows = [];

        /**
         * This property stores settings and definitions of this object
         */
        this.settings = {
            markedColumns: undefined
        }
        
        this.setHeaderCollection(header);
        this.setRowsCollection(rows);
    }



    /**
     * @param {Array<string>} header A string array with the header values.
     */
    setHeaderCollection(header) {
        this._header = header;
    }
    

    /**
     * @param {Array<Array<string>>} rows A collection of arrays of strings. Each array represents the row and each string the column value.
     */
    setRowsCollection(rows) {
        this._rows = rows;
    }

    getHeaderCollection() {
        if(!this._header) 
            return undefined;

        return this._header.slice(0);
    }

    getRowsCollection() {
        if(!this._rows)
            return undefined;

        return this._rows.slice(0);
    }

    _getTestResultHeader() {
        if(!this._testResultHeader) 
            return undefined;

        return this._testResultHeader.slice(0);
    }

    _getTestResultRows() {
        if(!this._testResultRows) 
            return undefined;

        return this._testResultRows.slice(0);
    }

    countRows() {
        if(!this._rows)
            return 0;
            
        return this._rows.length;
    }

    /**
     * Exports the marked columns, returning a new instance of TestDataSet with just the columns specified by the index array.
     * This object suffers no change.
     * @param {Array<number>} indexes Indexes of the columns the TestDataSet should stick with.
     */
    exportMarkedColumns() {
        if(!this.settings['markedColumns'] || !this._header || !this._rows)
            return;
        
        let maxIndex = getMaxValue(this.settings['markedColumns']);

        if(maxIndex > this._header.length)
            return;

        // TO-DO avaliar se maxIndex > que length de alguma row. se sim, dar return

        const newHeaderArray = this._getHeaderExportVersion();
        const newRowsCollection = this._getRowsExportVersion();

        return new TableDataSet(newHeaderArray, newRowsCollection);
    }

    clear() {        
        this._header = [''];
        this._rows = [['']];
        this._testResultHeader = []
        this._testResultRows = []
    }

    /**
     * Sets a group of columns for exportation when exportMarkedColumns() . Each call to this method replaces the previously set of marked columns.
     * @param {Array<number> indexes The index of each column to be exported.
     */
    markColumnsForExportation(indexes) {
        this.settings['markedColumns'] = indexes;
    }

    /**
     * 
     * @param {Array<string>} headerValues The test result columns to append. These columns are hidden and are marked for exportation by default.
     */
    appendTestResultColumns(headerValues){
        const header = [...headerValues];
        this._testResultHeader = header;

        let emptyColumns = header.map(value => '');
        this._testResultRows = Array(this.countRows()).fill([]);
        this._testResultRows = this._testResultRows.map(row => {
            return [...emptyColumns];
        });
    }

    /**
     * 
     * @param {String} resultColumnIdentifier 
     * @param {String} result 
     * @param {number} itemIndex 
     */
    addTestResult({resultColumnIdentifier, result, itemIndex}) {
        if(itemIndex===undefined) return;

        const columnIndex = this._getTestResultHeader().indexOf(resultColumnIdentifier);
        const resultRow = this._testResultRows[itemIndex];

        resultRow[columnIndex] = result;
    }

    /**
     * @param {string} param.resultColumnIdentifier An option from TestResultColumnsEnum, which identifies the column to be fetched
     * @param {number} param.itemIndex The index of the item in rows collection.
     */
    fetchTestResult({resultColumnIdentifier, itemIndex}) {
        if(itemIndex===undefined) return;

        const columnIndex = this._getTestResultHeader().indexOf(resultColumnIdentifier);
        const resultRow = this._testResultRows[itemIndex];

        return resultRow[columnIndex];
    }
    /**
     *  Reduces the header columns to the ones specified by the index array.
     * @returns A new array with the reduced version of the header.
     */
    _getHeaderExportVersion() {
        let newHeaderArray = [];
        const header = this.getHeaderCollection();
        const indexes = this.settings['markedColumns'];

        if(!header || !indexes) return;

        indexes.forEach(index => {
            newHeaderArray.push(header[index]);
        });

        let testResultHeader = this._getTestResultHeader();
        newHeaderArray = [...newHeaderArray, ...testResultHeader];
        
        return newHeaderArray;
    }

    /**
     *  Reduces the rows columns to the ones specified by the index array.
     * @returns A new array with the reduced version of the rows.
     */
    _getRowsExportVersion() {
        const rows = this.getRowsCollection();
        const indexes = this.settings['markedColumns'];

        if(!rows || !indexes) return;

        let newRowsCollection = [];
        let newRow, i = 0;

        rows.forEach(row => {
            newRow = [];
            indexes.forEach(index => {
                newRow.push(row[index]);
            });
            
            let testResultRows = this._getTestResultRows();
            newRow = [...newRow, ...testResultRows[i++]];

            newRowsCollection.push(newRow);
        });
        


        return newRowsCollection;
    }
}


/**
 * Returns the biggest value of the array.
 * @param {Array<number>} array
 */
function getMaxValue(array) {
    return array.reduce((max, current) => {
        return (current > max) ? current : max;
    }, 0);
}