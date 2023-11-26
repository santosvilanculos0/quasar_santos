<script setup>
import {
  QBtn,
  QForm,
  QInput,
  QLayout,
  QPage,
  QPageContainer,
  QSpinner,
  useQuasar
} from 'quasar';
import { validateEmail } from 'src/helpers/validation';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const $q = useQuasar();
const router = useRouter();

const input = reactive({ email: '' });
const error = reactive({});
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
            <label for="email">Endereço de email</label>
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
              autofocus
              lazy-rules
              type="text"
              hint="você receberá um e-mail de verificação de nossa equipe"
              input-style="color: rgb(51, 50, 56) !important; font-size: 0.875rem !important; line-height: 1rem !important;"
            ></QInput>
          </div>
          <div class="q-mb-md column">
            <QBtn
              type="submit"
              :disabled="submitting"
              :loading="submitting"
              label="Enviar"
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
