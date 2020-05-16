import TableDataSet from './TestDataSet.mjs'
import { TestStatusEnum } from './common.mjs';

/**
 * @description Provides static methods for creating HTML content.
 */
export class HtmlHelper {

    /**
     * Returns a HTML string with each value surrounded by <th> tag
     * @param {Array<string>} headers Each value of the string array represents a header value.
     * @param {}
     */
    static newTableHeader(headers, {displayBadge = false, badgeConfig:{ columns=[], text=''} = {}} = {}) {
        if(!headers)
            headers = ['Empty']
        
        let html = '', badge='', i=0;

        if(displayBadge) 
            badge = `<span class="badge badge-pill badge-pale">${text}</span>`

        headers.forEach(header => {
            if(columns.includes(i++))
                html += (`<th>${header} ${badge}</th>`);
            else
                html += (`<th>${header}</th>`);
        });
        return html;
    }

    /**
     * Returns a HTML string with each value surrounded by <td> tag
     * @param {*} columnValues Each value of the string array represents a column value. 
     */
    static newTableRow(columnValues) {
        if(!columnValues)
            columnValues = ['Empty']

        let html = '';
        columnValues.forEach(value => {
            html += (`<td>${value}</td>`);
        });

        return html.split('\n').join('<br>');
    }

/**
 * Returns a HTML string of a checkbox set with the provided values
 * @param {object} obj An object with values for the checkbox
 * @param {string} obj.label The text to be visually displayed
 * @param {string} obj.id The HTML id attribute of the element
 * @param {string} obj.value The HTML value attribute of the element
 * @param {string} obj.name The HTML name attribute of the element
 */
    static newCheckBox({label = "", id = "", value="", name = ""}) {
        const html = [];
        html.push('<div class="custom-control custom-checkbox mb-2">');
        html.push(`<input type="checkbox" class="custom-control-input" id="${id}" value="${value}" name="${name}">`)
        html.push(`<label class="custom-control-label" for="${id}">${label}</label>`);
        html.push('</div>');

        return html.join('');
    }
}


/**
 * @description Provides static methods for manipulating Markdown syntax content.
 */
export class MarkdownHelper {
    /**
     * Returns a string array of the header values.
     * @param {string} markdownCode The code in which to read the header
     * @returns 'undefined' if no header was found
     */
    static readTableHeader(markdownCode) {
        let headerStart = markdownCode.indexOf('||');
        let headerEnd = markdownCode.indexOf('||\n', headerStart+2);

        if(headerEnd === -1)
            headerEnd = markdownCode.lastIndexOf('||');

        if(headerStart === -1 || headerEnd === -1 || headerStart === headerEnd) // then did not find a header
            return undefined;

        const headerArray = markdownCode
                                .substring(headerStart+2, headerEnd)
                                .split('||')
                                .map(x => x.trim());

        return headerArray;
    }

    /**
     * Returns an array of string array. Each string arrntent row was found
     */
    static readTableRows(markdownCode) {
        const rows = [];
        let rowContent = [], rowEnd = 0, rowStart = 0;
        
        do {
            rowStart = markdownCode.indexOf('\n|', rowEnd);
            rowEnd = markdownCode.indexOf('|\n', rowStart);

            if(rowStart === -1) break;
            
            if(rowEnd === -1) // then no line break was found and reached the end of table
                rowEnd = markdownCode.lastIndexOf('|');

            rowContent = markdownCode
                                .substring(rowStart+2, rowEnd)
                                .split('|')
                                .map(str => str.trim());
            rows.push(rowContent);

        } while(true);

        if(rows.length === 0) return [['No rows']];

        return rows;
    }

    /**
     * Converts a TableDataSet to a markdown code table.
     * @param {TableDataSet} tableDataSet The populated dataset to be converted to markdown code.
     */
    static convertFromTableDataSet(tableDataSet) {
        let markdownCode = [];
        let header = tableDataSet.getHeaderCollection();
        let rowsCollection = tableDataSet.getRowsCollection();
        // Generates header code
        if(header) {
            markdownCode.push('|');
            header.forEach(columnValue => {
                markdownCode.push(`| ${columnValue} |`);
            });

            markdownCode.push('|');

            if(rowsCollection)
                markdownCode.push('\n');
        }
        
        // Generates rows code
        if(rowsCollection) {
            let i = 0;
            rowsCollection.forEach(row => {
                markdownCode.push('|');
                row.forEach(columnValue => {
                    markdownCode.push(` ${columnValue} |`);
                });

                if(rowsCollection[++i])
                    markdownCode.push('\n');
            });
        }

        return markdownCode.join('');
    }
    
    static convertToImageFormat(filename, fileformat) {
        return `!${filename}.${fileformat}|thumbnail!`;
    }

    /**
     * Retrieves the filename from an image markdown code. For Example:
     * !filename.png|thumbnail!   =>   filename
     * @param {string} filename 
     */
    static convertFromImageFormat(filename) {
        if(!filename) return;

        return filename.substring(1, filename.lastIndexOf('.'));
    }

    /**
     * Gets the correspondent symbol from a given status
     * @param {TestStatusEnum} testStatus 
     */
    static getStatusSymbol(testStatus) {
        switch(testStatus) {
            case TestStatusEnum.SUCCESS: return "(/)";
            case TestStatusEnum.FAILED: return "(x)";
            case TestStatusEnum.ALERT: return "(!)";
            case TestStatusEnum.PENDING: return "(?)";
            default: return "(?)";
        }
    }
}