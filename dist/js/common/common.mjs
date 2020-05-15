import TableDataSet from "./TestDataSet.mjs";


/**
  * Enum for test result column values
 */
const TestResultColumnsEnum = Object.freeze({
    "STATUS": "Status",
    "EVIDENCE":"Evidência"
}
);

/**
  * Enum for test status values.
 */
const TestStatusEnum = Object.freeze({
    "FAILED": 'failed',
    "SUCCESS": 'success',
    "PENDING": 'pending'
});

/**
  * Retrieves the status value from a symbol
 */
function getStatusFromSymbol(symbol) {
  
  switch(symbol) {
    case "(/)": return TestStatusEnum.SUCCESS;
    case "(x)": return TestStatusEnum.FAILED;
    case "(?)": return TestStatusEnum.PENDING;
    default: return TestStatusEnum.PENDING;
  }
}

function found(index) {
    return index !== -1;
}

function didNotFind(index) {
  return index === -1;
}

/**
 * An instance of TableDataSet class that is shared among all application.
 */
const tableDataSet = new TableDataSet();
    


export {tableDataSet, TestResultColumnsEnum, TestStatusEnum, getStatusFromSymbol, found, didNotFind};