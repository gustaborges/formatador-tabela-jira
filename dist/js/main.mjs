import CodeEditor from './components/CodeEditor.js';
import ImportModal from './components/ImportModal.js';
import DataNavigator from './components/DataNavigator.js';


window.onload = () => {
    ImportModal.init();
    CodeEditor.init();
    DataNavigator.init();
    enableBootstrapToolTips();
}

function enableBootstrapToolTips() {
    $('[data-toggle="tooltip"]').tooltip({ delay: { show: 800 }});
}
