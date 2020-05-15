import CodeEditor from './components/CodeEditor.mjs';
import ImportModal from './components/ImportModal.mjs';
import DataNavigator from './components/DataNavigator.mjs';


window.onload = () => {
    ImportModal.init();
    CodeEditor.init();
    DataNavigator.init();
    enableBootstrapToolTips();
}

function enableBootstrapToolTips() {
    $('[data-toggle="tooltip"]').tooltip({ delay: { show: 800 }});
}
