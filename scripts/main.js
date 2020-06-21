import CodeEditor from './components/code-editor.js';
import ImportModal from './components/import-modal.js';
import DataNavigator from './components/data-navigator.js';
import SoundEffects from './common/sound-effects.js';


window.onload = () => {
    SoundEffects.init();
    ImportModal.init();
    CodeEditor.init();
    DataNavigator.init();
    
    enableBootstrapToolTips();
}

function enableBootstrapToolTips() {
    $('[data-toggle="tooltip"]').tooltip({ delay: { show: 800 }});
}
