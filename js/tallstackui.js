import './globals/globals';
import banner from './components/banner/banner';
import color from './components/form/color';
import clipboard from './components/clipboard/clipboard';
import darkTheme from './helpers/dark-theme';
import dialog from './components/dialog/dialog';
import dropdown from './components/dropdown/dropdown';
import loading from './components/loading/loading';
import modal from './components/modal/modal';
import number from './components/form/number';
import select from './components/select/select';
import slide from './components/slide/slide';
import password from './components/form/password';
import pin from './components/form/pin';
import reaction from './components/reaction/reaction';
import tab from './components/tab/tab';
import tag from './components/form/tag';
import textArea from './components/form/textarea';
import toastBase from './components/toast/toast-base';
import toastLoop from './components/toast/toast-loop';
import tooltip from './components/tooltip/tooltip';
import upload from './components/form/upload';

document.addEventListener('alpine:init', () => {
  Alpine.plugin(tooltip);
  Alpine.data('tallstackui_banner', banner);
  Alpine.data('tallstackui_clipboard', clipboard);
  Alpine.data('tallstackui_formColor', color);
  Alpine.data('tallstackui_formNumber', number);
  Alpine.data('tallstackui_formPassword', password);
  Alpine.data('tallstackui_formPin', pin);
  Alpine.data('tallstackui_formTag', tag);
  Alpine.data('tallstackui_formUpload', upload);
  Alpine.data('tallstackui_darkTheme', darkTheme);
  Alpine.data('tallstackui_dialog', dialog);
  Alpine.data('tallstackui_dropdown', dropdown);
  Alpine.data('tallstackui_loading', loading);
  Alpine.data('tallstackui_modal', modal);
  Alpine.data('tallstackui_reaction', reaction);
  Alpine.data('tallstackui_select', select);
  Alpine.data('tallstackui_slide', slide);
  Alpine.data('tallstackui_tab', tab);
  Alpine.data('tallstackui_formTextArea', textArea);
  Alpine.data('tallstackui_toastBase', toastBase);
  Alpine.data('tallstackui_toastLoop', toastLoop);
});
