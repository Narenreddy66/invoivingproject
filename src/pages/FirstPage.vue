<template>
    <div class="container-fluid ">
        <div v-if="onlyTin" class="mt-2">
            <div class="d-flex gap-2 m-0 align-items-center mt-1">
                <img src="../assets/simple-icons_marriott.svg" />
                <p class="font-16 m-0 text-dark fw-medium">Marriott E-Invoicing</p>
            </div>
            <div class="bgcolor ps-1 pt-2 mt-2 pb-2 m-auto">
                <div>
                    <p class="font-12 m-0 fw-light p-1 "><span class="me-2">
                            <i class="bi bi-info-circle-fill text-warning"></i>

                        </span> Your
                        details will be used to generate a tax invoice per LHDN E-invoice requirements. Ensure the
                        information is accurate and up-to-date. Contact us for any queries.</p>
                </div>
            </div>
            <div class="tinnumber m-auto">
                <div class="mt-2 mb-2">
                    <label class="font-13 ps-1 fw-light" for="Requested">TIN (Tax identification number):</label>
                    <FormFields class="mb-3" tag="input" type="text" name="Requested" id="Requested" :icon=false
                        placeholder="Enter your TIN" v-model="form.gst_number" @input="validateTIN "
                        :class="{ 'is-invalid': tinError }" @change="(event) => handleInputChange(event, 'gst_number')" />
                    <div class="invalid-feedback font-13" v-if="tinError">
                        {{ tinError }}
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <ButtonComp class="font-13 btn" name="Clear form" @click="clearForm" />

                        <ButtonComp :disabled="!isFormValid" class="font-13 btn btn-dark text-white" @click="submitForm()"
                            name="Submit" />

                    </div>
                </div>
            </div>
            <div class="footer m-auto position-absolute bottom-0 start-0 end-0 pt-2 pb-2">
                <div class=" mt-3">
                    <p class="font-12 m-0 text-center ">This content is neither created nor<br> endorsed by
                        Ezyinvoicing.
                    </p>
                </div>
                <div class="d-flex justify-content-center mt-3">
                    <img src="../assets//EzyInvoicelogo 1.svg" />
                </div>

            </div>
        </div>
        <div v-if="detailsComplete" class="mt-2">
            <h1 class="font-14 fw-bold m-0" @click="backMove()">
                <i class="bi bi-arrow-left"></i><span class="ms-2">Back to fetch TIN</span>
            </h1>
            <div class="maindiv m-auto">
                <div class="d-flex justify-content-center align-items-center mt-2">
                    <img src="../assets/White reception desk.svg" />

                </div>
                <p class="font-11 fw-medium m-0 text-center">Thank you for visiting again :)</p>
                <div class="mt-3 mb-2">
                    <p class="font-12 m-0 fw-normal">TIN (Tax identification number)</p>
                    
                    <p class="font-12  fw-bold">{{ taxpayerData[0].gst_number || '-' }}</p>

                </div>
                <div class="mt-3 mb-2">
                    <p class="font-12 m-0 fw-normal">Legal name</p>
                    <p class="font-12  fw-bold">{{ taxpayerData[0].legal_name || '-' }}</p>

                </div>
               
                <div class="mt-3 mb-2">
                    <p class="font-12 m-0 fw-normal">Business registration number</p>
                    <p class="font-12  fw-bold">{{ taxpayerData[0].business_registration_number || '-' }}</p>

                </div>
                <div class="mt-3 mb-2">
                    <p class="font-12 m-0 fw-normal">SST Registration number</p>
                    <p class="font-12  fw-bold">{{ taxpayerData[0].sst_registration_number || '-' }}</p>

                </div>
                <div class="mt-3 mb-2">
                    <p class="font-12 m-0 fw-normal">Contact number</p>
                    <p class="font-12  fw-bold">{{ taxpayerData[0].phone_number || '-' }}</p>

                </div>
                <div class="mt-3 mb-2">
                    <p class="font-12 m-0 fw-normal">E-mail ID</p>
                    <p class="font-12  fw-bold">{{ taxpayerData[0].email || '-'}}</p>

                </div>
                <div class="mt-3 mb-2">
                    <p class="font-12 m-0 fw-normal">Address</p>
                    <p class="font-12  fw-bold">{{ taxpayerData[0].address_street || '-' }}</p>

                </div>
                <div class="mt-3 mb-2">
                    <ButtonComp class="font-13 fw-bold w-100  btn btn-dark text-white"
                        name="Submit with current details " />

                </div>
                <div class="mt-3 mb-2">
                    <p class="text-center font-12 m-0 fw-light ">----------------(or)----------------</p>

                </div>

                <div class="mt-3 mb-2">
                    <p class="text-center m-0  font-12 fw-bold " @click="modifyDetails()">Modify details?</p>

                </div>



            </div>
        </div>
        <div v-if="editDetails" class="mt-2">
            <div class="d-flex gap-2 m-0 align-items-center mt-1">
                <img src="../assets/simple-icons_marriott.svg" />
                <p class="font-16 m-0 text-dark fw-medium">Marriott E-Invoicing</p>
            </div>
            <div class="bgcolor ps-1 pt-2 mt-2 pb-2 m-auto">
                <div>
                    <p class="font-12 m-0 fw-light p-1 "><span class="me-2">
                            <i class="bi bi-info-circle-fill text-warning"></i>

                        </span> Your
                        details will be used to generate a tax invoice per LHDN E-invoice requirements. Ensure the
                        information is accurate and up-to-date. Contact us for any queries.</p>
                </div>
            </div>
            <div class="borderdata m-auto">
                <div class="accordion " id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button font-13 fw-bold" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span class="me-2"><i class="bi bi-card-text"></i></span> Basic information
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="toggle-buttons mt-1 mb-2 p-0">
                                    <label class="font-13 ps-1 fw-medium" for="Requested">Entity type<span
                                            class="ms-3"><i class="bi bi-question-circle"></i></span></label><br>
                                    <button class="btn btn-dark text-white font-12 ms-1 me-1 mt-2"
                                        v-for="option in options" :key="option"
                                        :class="{ active: selectedActiveOption === option }"
                                        @click="toggleOption(option)">
                                        {{ option }}
                                    </button>
                                </div>
                                <label class="font-13 ps-1 fw-medium" for="tinNo">
                                    TIN (Tax identification number)
                                    <span class="ms-3">
                                        <i class="bi bi-question-circle"></i>
                                    </span>
                                </label>
                                <FormFields class="mb-3" tag="input" type="text" name="tinNo" id="tinNo"
                                    placeholder="Enter TIN no" v-model="form.gst_number" :icon="true"
                                    :is-valid="validateField(form.gst_number)"  @change="(event) => handleInputChange(event, 'gst_number')" />
                                <label class="font-13 ps-1 fw-medium" for="legalName">
                                    Legal Name
                                    <span class="ms-3">
                                        <i class="bi bi-question-circle"></i>
                                    </span>
                                </label>
                                <FormFields class="mb-3" tag="input" type="text" name="legalName" id="legalName"
                                    placeholder="Enter legal name" v-model="form.legal_name"
                                    :is-valid="validateField(form.legal_name)" />

                                <label class="font-13 ps-1 fw-medium" for="businessRegNo">
                                    Business registration number
                                    <span class="ms-3">
                                        <i class="bi bi-question-circle"></i>
                                    </span>
                                </label>
                                <FormFields class="mb-3" tag="input" type="text" name="businessRegNo" id="businessRegNo"
                                    placeholder="Enter registration no" v-model="form.business_registration_number"
                                    :is-valid="validateField(form.business_registration_number)" />

                                <label class="font-13 ps-1 fw-medium" for="sstRegNo">
                                    SST registration number
                                    <span class="ms-3">
                                        <i class="bi bi-question-circle"></i>
                                    </span>
                                </label>
                                <FormFields class="mb-3" tag="input" type="text" name="sstRegNo" id="sstRegNo"
                                    placeholder="Enter SST no" v-model="form.sst_registration_number" :icon="true"
                                    :is-valid="validateField(form.sst_registration_number)" />


                            </div>


                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed font-13 fw-bold" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo">
                                <span class="me-2"><i class="bi bi-person-lines-fill"></i></span> Contact Information
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <label class="font-13 ps-1 fw-medium" for="Requested">Contact Number<span
                                        class="ms-3"><i class="bi bi-question-circle"></i></span></label>
                                <FormFields class="mb-3" tag="input" type="text" name="Requested" id="Requested"
                                    placeholder="Enter contact no" v-model="form.phone_number" :icon=false />
                                <label class="font-13 ps-1 fw-medium" for="Requested">E-mail Id<span class="ms-3"><i
                                            class="bi bi-question-circle"></i></span></label>
                                <FormFields class="mb-3" tag="input" type="text" name="Requested" id="Requested"
                                    placeholder="Enter email id" v-model="form.email" :icon=false />
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed font-13 fw-bold" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                aria-controls="collapseThree">
                                <span class="me-2"><i class="bi bi-geo-alt"></i></span>Billing address
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                

                                <label class="font-13 ps-1 fw-medium" for="Requested">Street<span class="ms-3"><i
                                            class="bi bi-question-circle"></i></span></label>
                                <FormFields class="mb-3" tag="input" type="textarea" name="Requested" id="Requested"
                                    placeholder="Address" v-model="form.address_street" :icon=false />
                                <label class="font-13 ps-1 fw-medium" for="Requested">City<span class="ms-3"><i
                                            class="bi bi-question-circle"></i></span></label>
                                <FormFields class="mb-3" tag="input" type="text" name="Requested" id="Requested"
                                    placeholder="Name of city" v-model="form.city" :icon=false />
                                <label class="font-13 ps-1 fw-medium" for="Requested">Post Code<span class="ms-3"><i
                                            class="bi bi-question-circle"></i></span></label>
                                <FormFields class="mb-3" tag="input" type="text" name="Requested" id="Requested"
                                    placeholder="Enter post code" v-model="form.pincode" :icon=false />
                                <label class="font-13 ps-1 fw-medium" for="Requested">State<span class="ms-3"><i
                                            class="bi bi-question-circle"></i></span></label>
                                <!-- <FormFields tag="select" placeholder="states" class="mb-3"
                                            name="dept" v-model="form.state" id="dept" :Required="false"
                                            :options="states" /> -->
                                <Multiselect :options="states" v-model="form.state_name" placeholder="State"
                                    :multiple="false" :searchable="true" class=" font-11" @update:modelValue="updateStateCode" />
                                <label class="font-13 ps-1 fw-medium" for="Requested">Country<span class="ms-3"><i
                                            class="bi bi-question-circle"></i></span></label>
                                <!-- <FormFields tag="select" placeholder="Country" class="mb-3"
                                            name="dept" v-model="form.country" id="dept" :Required="false"
                                            :options="countries" /> -->
                                <Multiselect :options="countries" v-model="form.country" placeholder="Country"
                                    :multiple="false" :searchable="true" class=" font-11"  @update:modelValue="updateCountryCode"/>
                                <div class="mt-3 mb-2">
                                    <ButtonComp class="font-13 fw-bold w-100  btn-outline-dark  text-dark"
                                        name="Add more addresses " />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 mb-2">

                        <div class=" d-flex justify-content-between  align-items-center mt-3">
                            <ButtonComp class="font-13  btn" name="Clear form " />
                            <ButtonComp class="font-13  btn btn-dark text-white" @click="submitDta()" name="Submit " />
                        </div>
                    </div>
                </div>
                <div class="footer m-auto  bg-white bottom-0 pt-2 pb-2">
                    <div class=" mt-3">
                        <p class="font-12 m-0 text-center ">This content is neither created nor<br> endorsed by
                            Ezyinvoicing.</p>
                    </div>
                    <div class="d-flex justify-content-center mt-3">
                        <img src="../assets//EzyInvoicelogo 1.svg" />
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import FormFields from '@/Components/FormFields.vue';
import ButtonComp from '../Components/ButtonComp.vue'
import {  ref,toRaw,computed, reactive } from 'vue';
import countriesdata from '../assets/countrycode.json';
import statecodedata from '../assets/statecode.json';
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import axiosInstance from '@/shared/services/interceptor';
import { apis, doctypes } from '@/shared/apiurls';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";


const tinNumber = ref('');
const tinError = ref('');
const options = ['Company', 'Individual', 'Foreign company', 'Foreign Individual', 'Exempted Person'];
const selectedActiveOption = ref(null)
const onlyTin = ref(true);
const detailsComplete = ref(false);
const editDetails = ref(false);
const countries = countriesdata.map(country => country.country);
const states = statecodedata.map(state => state.state)
const taxpayerData=ref(null)
const isFormValid = computed(() => {
      return form.gst_number.trim() !== ""; 
    });
const form = reactive({
    legal_name: "",
    business_registration_number: "",
    sst_registration_number: "",
    gst_number: "",
    company:"JWMHKL-01",
    doctype:"TaxPayerDetail",
    country: '',
    country_code:'',
    state_name: '',
    state_code:'',
    phone_number:'',
    email:'',
    pincode:'',
    address_street:'',
    entity_type:null,
    city:'',
})


function updateCountryCode(selectedCountry) {
  const selectedCountryData = countriesdata.find(
    (country) => country.country === selectedCountry
  );
  form.country_code = selectedCountryData ? selectedCountryData.countrycode : "";
  console.log(selectedCountryData,"-------------------------")
}
function updateStateCode(selectedState) {
  const selectedStateData = statecodedata.find(
    (state) => state.state === selectedState
  );
  form.state_code = selectedStateData ? selectedStateData.statecode : "";
  console.log(selectedStateData,"-------------------------")
}
function toggleOption(option) {
    selectedActiveOption.value = selectedActiveOption.value === option ? null : option;
    form.entity_type = selectedActiveOption.value
}
function submitForm() {
   if(taxpayerData.value.length >0){
    detailsComplete.value=true;
    onlyTin.value=false;
    editDetails.value=false;
   }
   else{
    editDetails.value=true;
    onlyTin.value=false;
    detailsComplete.value=false
   }
    
    // onlyTin.value = false;
    // detailsComplete.value = true
    // editDetails.value = false
}
const submitDta = async () => {
  try {
    const rawForm = toRaw(form);
    console.log("Submitting form:", rawForm);

    const formData = new FormData();
    formData.append("doc", JSON.stringify(rawForm));
    formData.append("action", "Save");

    if (taxpayerData.value.length > 0) {
     
      const taxpayerName = taxpayerData.value[0]?.name; 
      if (!taxpayerName) {
        throw new Error("Taxpayer name is missing in the data.");
      }

      const response = await axiosInstance.put(
        `${apis.resource}${doctypes.taxpayerdetails}/${taxpayerName}`,
        {
          ...form,
        }
      );
      toast.success("Successfullly Data Updated",500)

      console.log("Form updated successfully (PUT):", response.data);
    } else {
     
      const response = await axiosInstance.post(apis.savedocs, formData);
      toast.success("Successfullly Data Saved",500)
      console.log("Form submitted successfully (POST):", response.data);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};


function handleInputChange(event, fieldType) {
    const inputValue = event.target.value;
    console.log(`${fieldType} input change === `, inputValue);

    const filters = [[fieldType, "like", `%${inputValue}%`]];
    const queryParams = {
        fields: JSON.stringify(["*"]),
        filters: JSON.stringify(filters),
    };

    axiosInstance
        .get(`${apis.resource}${doctypes.taxpayerdetails}`, { params: queryParams })
        .then((res) => {
            console.log(`${fieldType} response === `, res.data);
            taxpayerData.value = res.data; 
            console.log(`output-taxpayerData.value`,taxpayerData.value)
        })
        .catch((error) => {
            console.error("Error fetching taxpayer data:", error);
        });
}

function modifyDetails() {
    if (!taxpayerData.value || taxpayerData.value.length === 0) {
        console.warn("No taxpayer data available to bind to the form.");
        return;
    }

    // Use the first object in the taxpayerData array
    const taxpayer = taxpayerData.value[0]; // Assuming you're using the first item in the array

    onlyTin.value = false;
    detailsComplete.value = false;
    editDetails.value = true;

    console.log("Received taxpayer data:", taxpayer);

    // Bind data from the first taxpayer object to the form
    Object.keys(form).forEach((key) => {
        if (taxpayer[key] !== undefined) {
            form[key] = taxpayer[key];  // Assign taxpayer data to form field
        } else {
            console.warn(`No value found for ${key} in taxpayer data.`);
        }
    });

    console.log("Form after binding:", form);
}


function backMove() {
    onlyTin.value = true;
    detailsComplete.value = false
    editDetails.value = false
}
function validateField(value) {
    return value && value.trim().length > 10;
}

// function validateTIN() {
//     const tin = tinNumber.value;

//     if (/^IG\d{10}$/.test(tin)) {
//         tinError.value = ""; // Individual (new)
//     } else if (/^(SG|OG)\d{9}$/.test(tin)) {
//         tinError.value = ""; // Individual (old)
//     } else if (/^[CDEF]\d{10}$/.test(tin)) {
//         tinError.value = ""; // Non-individual (new)
//     } else if (/^[CDEF]\d{9}$/.test(tin)) {
//         tinError.value = ""; // Non-individual (old)
//     } else if (/^EI\d{10}$/.test(tin)) {
//         tinError.value = ""; // General TIN
//     } else {
//         tinError.value =
//             " Individual (new): IG+10 digits, Individual (old): SG/OG+9 digits, Non-individual (new): C/D/E/F+10 digits, Non-individual (old): C/D/E/F+9 digits, General TIN: EI+10 digits.";
//     }
// }
function clearForm() {

    tinNumber.value = ''
    tinError.value = ''
}
</script>
<style scoped>
.fw-bold {
    font-weight: 600 !important;
}

.maindiv {
    max-width: 380px;
}

.bgcolor {
    background: #FFFDEA;
    max-width: 380px;
}

.btn-dark {
    padding: 6px 18px;
    border-radius: 6px;
}

.tinnumber {
    max-width: 380px;
}

.footer {
    background-color: #fafafa;
    max-width: 380px;

}

.is-invalid {
    border: 1px solid red;
    border-radius: 6px;
}

.invalid-feedback {
    color: red;
    margin-top: 5px;
}

.bgcolor {
    background: #FFFDEA;
    max-width: 380px;
}

.borderdata {
    border: 1px solid #EEEEEE;
    max-width: 380px;

}

.btn-outline-dark {
    border: 1px solid #000000 !important;
    border-radius: 6px;
    background-color: #fafafa;
}

.btn-dark {
    padding: 6px 18px;
    border-radius: 10px;
}

.accordion-button:not(.collapsed) {

    background-color: white !important;

}

.toggle-buttons button {
    padding: 10px 11px;
    margin-right: 10px;
    border: none;
    cursor: pointer;
    background-color: white;
    color: black !important;
    border-radius: 24px;
    font-size: 11px;
    transition: background-color 0.3s;
    box-shadow: 0px 0px 4px 0px #00000040;

}

.toggle-buttons button.active {
    background-color: black;
    color: white !important;
    font-size: 11px;
    /* padding: 7px 19px 6px 19px; */

}

.accordion-button:focus {
    z-index: 3;
    outline: 0;
    box-shadow: none;
}

.multiselect-option {
    font-size: 11px !important;
}

.multiselect {
    margin: initial;
    font-size: 11px !important;
    border: 1px solid #e2e2e2 !important;
    min-height: 35px !important;

    .multiselect-wrapper {
        min-height: 35px !important;
    }

    .multiselect-dropdown {
        .multiselect-options {
            font-size: 11px;

            li.multiselect-option span {
                font-size: 11px !important;
            }

            li.multiselect-option .is-selected {
                background-color: grey !important;
                font-size: 11px;
            }
        }
    }
}

.multiselect__option span {
    font-size: 11px;
    /* Change this value to whatever size you need */
}

.multiselect .multiselect-option {
    font-size: 11px;
}

.multiselect .multiselect-wrapper {
    min-height: 35px !important;
}

.multiselect .multiselect--above {
    min-height: 35px !important;
}

.multiselect .multiselect__tags {
    min-height: 35px;
    font-size: 11px !important;
}

.multiselect .multiselect__placeholder {
    font-size: 11px;
}

.multiselect .multiselect__single {
    font-size: 11px;
}

.multiselect .multiselect__tags .multiselect__placeholder {
    font-size: 11px;
}
</style>