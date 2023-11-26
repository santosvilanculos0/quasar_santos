<script setup>
import {
  QBtn,
  QForm,
  QIcon,
  QInput,
  QLayout,
  QPage,
  QPageContainer,
  QSpinner,
  useQuasar
} from 'quasar';
import { validateEmail, validateStrMin } from 'src/helpers/validation';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const $q = useQuasar();
const router = useRouter();

const input = reactive({ name: '', email: '', password: '' });
const error = reactive({});
const password_visibility = ref(true);
const submitting = ref(false);

const simulateSubmit = () => {
  submitting.value = true;
  setTimeout(() => {
    submitting.value = false;

    router.push({ name: 'explore' });
    $q.notify({ message: 'Bem vindo!', type: 'positive' });
  }, 3000);
};
</script>

<template>
  <QLayout view="lHr lpR lFr">
    <QPageContainer>
      <QPage class="window-height flex no-wrap items-center">
        <QForm
          @submit.prevent="simulateSubmit"
          class="form | q-mx-auto q-pa-md column"
        >
          <div class="q-mb-md column">
            <label>Nome</label>
            <QInput
              v-model="input.name"
              :rules="[
                val => !!val || 'O campo nome é obrigatório.',
                val =>
                  validateStrMin(val, 3) ||
                  'O campo nome deve ter o minimo de 3 caracteres.'
              ]"
              :error="error?.name"
              :error-message="error?.name"
              outlined
              dense
              square
              hide-bottom-space
              autofocus
              autocomplete="name"
              lazy-rules
              type="text"
              input-style="color: rgb(51, 50, 56) !important; font-size: 0.875rem !important; line-height: 1rem !important;"
            ></QInput>
          </div>
          <div class="q-mb-md column">
            <label>Endereço de email</label>
            <QInput
              v-model="input.email"
              :rules="[
                val => !!val || 'O campo email é obrigatório.',
                val => validateEmail(val) || 'O email é inválido.'
              ]"
              :error="error?.email"
              :error-message="error?.email"
              outlined
              dense
              square
              hide-bottom-space
              lazy-rules
              type="email"
              autocomplete="ëmail"
              input-style="color: rgb(51, 50, 56) !important; font-size: 0.875rem !important; line-height: 1rem !important;"
            ></QInput>
          </div>
          <div class="q-mb-md column">
            <label>Palavra-passe</label>
            <QInput
              v-model="input.password"
              :rules="[
                val => !!val || 'O campo palavra-passe é obrigatório.',
                val =>
                  validateStrMin(val, 8) ||
                  'A palavra-passe deve ter o minimo de 8 caracteres.'
              ]"
              minlength="8"
              :error="error?.password"
              :error-message="error?.password"
              autocomplete="new-password"
              outlined
              dense
              square
              hint="O comprimento mínimo é de 8 caracteres."
              hide-bottom-space
              lazy-rules
              :type="password_visibility ? 'password' : 'text'"
              input-style="color: rgb(51, 50, 56) !important; font-size: 0.875rem !important; line-height: 1rem !important;"
            >
              <template v-slot:append>
                <QIcon
                  :name="password_visibility ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  tag="span"
                  @click="password_visibility = !password_visibility"
                />
              </template>
            </QInput>
          </div>
          <div class="q-mb-md column">
            <QBtn
              type="submit"
              :disabled="submitting"
              :loading="submitting"
              label="Registrar"
              no-caps
              text-color="white"
              flat
              class="form__button | q-mt-md"
            >
              <template v-slot:loading>
                <QSpinner size="24px" />
              </template>
            </QBtn>
          </div>

          <p class="q-mb-md">
            Ao clicar em Registrar ou registrar-se através de terceiros, você
            aceita os
            <a href="#" class="form__link">
              Termos de Uso e reconhece a Política de Privacidade e Cookies
              Política </a
            >.
          </p>
          <p class="q-mb-md q-mt-xs text-center">
            Já tem uma conta?
            <RouterLink class="form__link" :to="{ name: 'sign_in' }">
              Faça login
            </RouterLink>
          </p>
        </QForm>
      </QPage>
    </QPageContainer>
  </QLayout>
</template>

<style lang="scss" scoped>
.form {
  width: min(100%, 312px);
  font-size: 13px;
  color: rgb(51, 50, 56);
  &__link {
    color: #1f75cb;
    text-decoration: none;
    background-color: transparent;
    &:hover {
      color: #1f75cb;
      text-decoration: underline;
    }
  }
  &__button {
    box-shadow: rgb(16, 104, 191) 0px 0px 0px 1px inset;
    background: #1068bf;
    &:hover {
      box-shadow: inset 0 0 0 2px #064787, 0 2px 2px 0 rgba(0, 0, 0, 0.08);
      background: #1068bf;
    }
  }
}
.q-field__control {
  height: 48px !important;
}

.form__input {
}
label {
  display: inline-block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333238;
}
</style>
