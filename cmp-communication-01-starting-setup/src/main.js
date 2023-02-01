import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewContact from './components/NewContact.vue'

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('new-contact', NewContact);

app.mount('#app');
