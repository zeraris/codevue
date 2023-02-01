<template>
  <base-card>
    <base-button @click="setSelect('stored-resources')" :mode="btnModeStored"
      >Stored Resources</base-button
    >
    <base-button @click="setSelect('add-resource')" :mode="btnModeAdd"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive> <component :is="selected"></component> </keep-alive>
</template>

<script>
import StoredResources from './StoredResource.vue';
import AddResource from './AddResource.vue';
export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selected: 'stored-resources',
      storedResource: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'this is official guide made by me',
          link: 'https://vuejs.org/',
        },
        {
          id: 'unofficial-guide',
          title: 'Unofficial Guide',
          description: 'this is unofficial guide made by me',
          link: 'https://vuejs.org/',
        },
      ],
    };
  },
  computed: {
    btnModeStored() {
      return this.selected === 'stored-resources' ? null : 'flat';
    },
    btnModeAdd() {
      return this.selected === 'add-resource' ? null : 'flat';
    },
  },
  provide() {
    return {
      resources: this.storedResource,
      addResource: this.addResource,
      deleteRes: this.removeRes
    };
  },
  methods: {
    setSelect(tab) {
      this.selected = tab;
    },
    addResource(title, desc, url) {
      const NewRes = {
        id: new Date().toISOString(),
        title: title,
        description: desc,
        link: url,
      };
      this.storedResource.unshift(NewRes);
      this.selected = 'stored-resources';
    },
    removeRes(resId) {
        const resIndex = this.storedResource.findIndex(res => res.id === resId);
        this.storedResource.splice(resIndex, 1);
    }
  },
};
</script>
