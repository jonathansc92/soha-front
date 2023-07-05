<template>
    <div class="grid login background h-screen">
        <div class="container border-round flex align-content-center justify-content-center flex-wrap">
            <div class="col-12 text-center">
                <div class="description font-medium text-xl uppercase"></div>
            </div>
            <div class="col-12 p-6">
                <Form @submit.prevent="onSubmit">
                    <div class="col-12 flex align-items-center justify-content-center">
                        <span class="p-float-label w-full">
                            <InputText class="w-full" id="value" aria-describedby="text-error" />
                            <ErrorMessage name="value" />

                            <label for="value">
                                Email
                            </label>
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
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
import { Form, ErrorMessage } from 'vee-validate';

import ButtonComponent from 'primevue/button';
import InputText from 'primevue/inputtext';
import Image from 'primevue/image';

export default {
    name: 'LoginIndex',
    components: {
        ButtonComponent,
        InputText,
        Image,
        Form,
    },
    methods: {
        onSubmit() {
            console.log('Submitted');
        },
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