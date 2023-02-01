import { createApp } from 'vue';
import BaseCard from './components/UI/BaseCard'
import BaseButton from './components/UI/BaseButton'
import App from './App.vue';
import BaseDialog from './components/UI/BaseDialog'

const app =createApp(App)

app.component('base-card',BaseCard)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)

app.mount('#app');
