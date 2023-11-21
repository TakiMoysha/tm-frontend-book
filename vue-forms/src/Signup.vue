<template>
  <section >
    <form @submit.prevent class="form w-100">
      <div>
        <label for="validationUserName" class="form-label">Username</label>
        <div class="input-group">
          <span class="input-group-text"> @</span>
          <input type="text" class="form-control" id="validationUserName" placeholder="Full Name" autocomplete="off"
            v-model="validUserName" required />
        </div>
        <div class="text-danger" v-if="error">
          {{ error }}
        </div>
      </div>

      <div>
        <label for="validationUserName2" class="form-label">Username 2</label>
        <div class="input-group">
          <span class="input-group-text"> @</span>
          <input type="text" class="form-control" id="validationUserName2" placeholder="Full Name" autocomplete="off"
            v-model="validUserName2" required @keyup="validateUserName2" @blur="validateUserName2" />
        </div>
        <div class="text-danger" v-if="error2">
          {{ error2 }}
        </div>
      </div>

      <div>
        <label for="validationUsername3" class="form-label">Username 3</label>
        <div class="input-group">
          <span class="input-group-text"> @</span>
          <input type="text" class="form-control" id="validationUsername3" placeholder="Full Name" autocomplete="off"
            v-model="validUserName3" required @keyup="validateUserName3" @blur="validateUserName3" />
        </div>
        <div class="text-danger" v-if="errors3?.username3">
          {{ errors3.username3 }}
        </div>
      </div>

      <div>
        <label for="validationEmail" class="form-label">Email</label>
        <div class="input-group">
          <span class="input-group-text" id="inputGroupPrepend2">@</span>
          <input type="text" class="form-control" id="validationEmail" placeholder="Email" autocomplete="off"
            v-model="validUserEmail4" required @keyup="validateUserName4" @blur="validateUserName4" />
        </div>
        <div class="text-danger" v-if="errors4.email4">
          {{ errors4.email4 }}
        </div>
      </div>

      <div class="p-2">
        <button class="w-100" :disabled="isDisabled" type="submit">Submit</button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const validUserName = ref(null);
const error = computed(() => {
  return validUserName.value === "" ? "The name field is required" : null;
});

const validUserName2 = ref(null);
const error2 = ref<String | null>(null);
const validateUserName2 = () => {
  if (validUserName2.value === "") {
    error2.value = "The name field is required";
  } else if (validUserName2.value && validUserName2.value.length < 3) {
    error2.value = "The name must be at least 3 characters long";
  } else {
    error2.value = null;
  }
};

import useSignupForm from "@/composables/useSignupForm";
const validUserName3 = ref(null);
const { errors: errors3, validateNameField: _validateUserName3 } =
  useSignupForm();
const validateUserName3 = () => {
  if (validUserName3.value === null) return;
  _validateUserName3("username3", validUserName3.value);
};

const validUserEmail4 = ref(null);
const { errors: errors4, validateEmailField: _validateUserEmail4 } =
  useSignupForm();
const validateUserName4 = () => {
  if (validUserEmail4.value === null) return;
  _validateUserEmail4("email4", validUserEmail4.value);
};

const isDisabled = computed(() => {
  return (
    validUserName.value === null ||
    validUserName2.value === null ||
    validUserName3.value === null ||
    validUserEmail4.value === null
  );
});
</script>
