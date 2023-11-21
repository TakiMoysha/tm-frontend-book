<template>
  <section>
    <form @submit.prevent="handleSubmit" class="form w-100">
      <div>
        <label for="validationUserName" class="form-label">Username</label>
        <div class="input-group">
          <span class="input-group-text"> @</span>
          <input type="text" class="form-control" id="validationUserName" placeholder="Full Name" autocomplete="off"
            v-model="user.username" required />
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
            v-model="user.username2" required @keyup="validateUserName2" @blur="validateUserName2" />
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
            v-model="user.username3" required @keyup="validateUserName3" @blur="validateUserName3" />
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
            v-model="user.email" required @keyup="validateUserName4" @blur="validateUserName4" />
        </div>
        <div class="text-danger" v-if="errors4.email4">
          {{ errors4.email4 }}
        </div>
      </div>

      <div class="p-2">
        <button class="w-100" :disabled="isDisabled" type="submit">
          Submit
        </button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, reactive } from "vue";

const user = reactive({
  username: "",
  username2: "",
  username3: "",
  email: "",
});

// [comment]: bound to the child components
const result = ref(null);
const handleSubmit = () => (result.value = user);


//
const error = computed(() => {
  return user.username === "" ? "The name field is required" : null;
});

const error2 = ref<String | null>(null);
const validateUserName2 = () => {
  if (user.username2 === "") {
    error2.value = "The name field is required";
  } else if (user.username2 && user.username2.length < 3) {
    error2.value = "The name must be at least 3 characters long";
  } else {
    error2.value = null;
  }
};

import useSignupForm from "@/composables/useSignupForm";
const { errors: errors3, validateNameField: _validateUserName3 } =
  useSignupForm();
const validateUserName3 = () => {
  _validateUserName3("username3", user.username3);
};

const { errors: errors4, validateEmailField: _validateUserEmail4 } =
  useSignupForm();
const validateUserName4 = () => {
  _validateUserEmail4("email4", user.email);
};

const isDisabled = computed(() => {
  return (
    user.username === null ||
    user.username2 === null ||
    user.username3 === null ||
    user.email === null
  );
});
</script>
