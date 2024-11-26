<template>
    <div class="container-fluid header">
        <div class="row mt-2">
            <div class="col-2 p-0">
                <div class="d-flex p-2 align-items-center">
                              
                                <div class="m-0">
                                    <p class="font-13 m-0 text-danger">EZY | POS</p>
                                </div>
                            </div>
            </div>
            <div class="col-8 p-0">
                <div class="mt-2">
                                <TabsComp :tabs="tabsData" @changeTab="handleTabChange" />
                            </div>
            </div>
            <div class="col-2 p-0">
                <FormFields tag="select" placeholder="" class="mb-3" name="roles" id="roles"
                                        :Required="false" v-model="business_unit" :options="['Caratred','CrTech']" />
            </div>
        </div>

        
       
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'; // Import useRouter
import FormFields from '../Components/FormFields.vue';
import TabsComp from './TabsComp.vue';


const router = useRouter(); // Initialize router
const business_unit=ref('')
// Define reactive variables
const tabsData = ref([
    { name: 'Tables',  route: '/main/table' },
    { name: 'Opened Checks',  route: '/open/opencheck' },
    { name: 'Closed Checks',  route: '/closed' },
    { name: 'Supporting documents', route: '/supporting' },
    { name: 'Settings',  route: '/settings' },
    
]);



const route = useRoute(); // Initialize route to access route parameters



const handleTabChange = (tab) => {
    activeTab.value = tab.route; // Update the active tab
    router.push(tab.route);
};




</script>

<style scoped>
.header{
    border-bottom: 1px solid #EEEEEE;
    box-shadow: 0px 4px 24px 0px #0000000D;
    height: 56px;

}


</style>
