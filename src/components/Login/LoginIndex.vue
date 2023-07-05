<template>
    <div class="grid login background h-screen">
        <div class="container border-round flex align-content-center justify-content-center flex-wrap">
            <div class="col-12 text-center">
                <div class="description font-medium text-xl uppercase"></div>
            </div>
            <div class="col-12 p-6">
                <form @submit.prevent="handleSubmit(!v$.$invalid)">
                    <div class="col-12 flex align-items-center justify-content-center">
                        <span class="p-float-label w-full">
                            <InputText v-model="v$.email.$model" class="w-full" id="email" aria-describedby="text-error" />
                            <label for="email">
                                Email
                            </label>
                            <span v-if="v$.email.$error && submitted">
                                <span id="email-error" v-for="(error, index) of v$.email.$errors" :key="index">
                                    <small class="p-error">{{ error.$message }}</small>
                                </span>
                            </span>
                            <small v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response"
                                class="p-error">{{ v$.email.required.$message.replace('Value', 'Email') }}</small>
                        </span>
                    </div>
                    <div class="col-12 flex align-items-center justify-content-center">
                        <span class="p-float-label w-full">
                            <InputText class="w-full" id="value" aria-describedby="text-error" />
                            <label for="value">
                                Senha
                            </label>
                        </span>
                    </div>
                    <div class="col-12 flex align-items-center justify-content-center">
                        <ButtonComponent class="w-full" type="submit" label="ENTRAR" :disabled="false" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { email, required, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import ButtonComponent from 'primevue/button';
import InputText from 'primevue/inputtext';

export default {
    setup: () => ({ v$: useVuelidate() }),
    components: {
        ButtonComponent,
        InputText,
    },
    data() {
        return {
            email: '',
            password: '',
            submitted: false,
        }
    },
    validations() {
        return {
            email: {
                required: helpers.withMessage("Email é obrigatório!", required),
                email: helpers.withMessage('messages.INVALID_MAIL', email)
            },
            password: {
                required: helpers.withMessage('messages.REQUIRED', required),
            },
        }
    },
    methods: {
        async handleSubmit(isFormValid) {
            this.submitted = true;

            console.log(isFormValid)
            if (!isFormValid) {
                return;
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.login {
    &.background {
        background-color: var(--color-primary);
    }

    .container {
        background: var(--color-white) none repeat scroll 0 0;
        margin: 133px auto 129px;
    }

    .logo {
        margin-right: 5px;
    }

    .description {
        color: var(--color-primary);
    }

    .description::after {
        content: 'SOHA - LOGIN';
        background: url(http://www.soha.com.br/images/icone-roxo.svg) no-repeat center left;
        background-size: 24px 24px;
        padding-left: 30px;
    }
}
</style>