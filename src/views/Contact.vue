<template>
  <q-page class="q-pa-xl q-px-md q-px-sm-xs bg-white contact-page">
    <div class="watermark"></div>
    <div class="row q-col-gutter-xl content-wrapper">

      <!-- Columna izquierda: Información de contacto -->
      <div class="col-12 col-md-4 column q-gutter-lg" style="margin-top: 0; margin-left: -68px; margin-right: 42px;">
        <h2 class="contact mobile-title q-mb-md" v-show="$q.screen.xs">CONTACT US</h2>
        <div class="row no-wrap items-center q-gutter-md">
          <div class="phoneContainer">
            <q-icon class="iconContact">
              <font-awesome-icon :icon="['fas', 'phone-volume']" />
            </q-icon>
          </div>
          <div>
            <h3 class="text-subtitle1 q-mb-xs subtitle-call">Call Us</h3>
            <p class="text-body2 q-mb-none description">+1 (562) 822-6564</p>
          </div>
        </div>

        <div class="row no-wrap items-center q-gutter-md" style="margin-right: 65px;">
          <div class="emailContainer">
            <q-icon class="iconContact">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </q-icon>
          </div>
          <div>
            <h3 class="text-subtitle1 q-mb-xs subtitle-email">Email Us</h3>
            <p class="text-body2 q-mb-none description">catwell@seafloorgeotech.com </p>
          </div>
        </div>
      </div>

      <!-- Columna derecha: Formulario -->
      <div class="col-12 col-md-8 column q-gutter-md" style="margin-right: -50px;">
        <h2 class="contact q-mb-md" v-show="!$q.screen.xs">CONTACT US</h2>

        <q-form :key="formKey" ref="formRef" @submit.prevent="sendEmail" class="q-gutter-md">
          <!-- Fila para nombre y email -->
          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
              <q-input borderless v-model="form.name" label="Your Name" class="input"
                :rules="[val => !!val || 'Name is required']" />
            </div>
            <div class="col-12 col-md-6">
              <q-input borderless v-model="form.email" label="Your Email" type="email" class="input" :rules="[
                val => !!val || 'Email is required',
                val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Invalid email format'
              ]" />
            </div>
          </div>

          <!-- Campo subject alineado -->
          <div class="row q-col-gutter-md" style="margin-top: 0;">
            <div class="col-12">
              <q-input borderless v-model="form.subject" label="Subject" class="input" :rules="[
                val => !!val || 'Subject is required',
                val => val.length <= 100 || 'Subject too long'
              ]" />
            </div>
          </div>

          <!-- Campo message alineado -->
          <div class="row q-col-gutter-md" style="margin-top: 0;">
            <div class="col-12">
              <q-input borderless v-model="form.message" label="Message" type="textarea" autogrow class="textarea"
                :rules="[
                  val => !!val || 'Message is required',
                  val => val.length <= 500 || 'Message too long'
                ]" />
            </div>
          </div>

          <!-- Botón enviar -->
          <div class="form-btn-wrapper">
            <q-btn type="submit" label="Send Message" class="btn-form" :loading="sending" :disable="sending" />
          </div>
        </q-form>

      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import emailjs from '@emailjs/browser'

const $q = useQuasar()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const formRef = ref(null)
const sending = ref(false)

function validateForm() {
  const { name, email, subject, message } = form.value
  return name.trim() && email.trim() && subject.trim() && message.trim()
}

const formKey = ref(0)

function resetForm() {
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  formKey.value++
}

async function sendEmail() {
  const valid = await formRef.value.validate()
  if (!valid) {
    $q.notify({
      type: 'negative',
      message: 'Por favor completa todos los campos del formulario.'
    })
    return
  }

  sending.value = true

  emailjs
    .send('service_z5jiy7r', 'template_87vtd6f', form.value, 'qt3c9fZXwr3TqbbhC')
    .then(() => {
      $q.notify({
        type: 'positive',
        message: 'Mensaje enviado correctamente.'
      })
      formRef.value.resetValidation()
      resetForm()
    })
    .catch((error) => {
      console.error('Error sending email:', error)
      $q.notify({
        type: 'negative',
        message: 'Error al enviar el mensaje. Intenta nuevamente.'
      })
    })
    .finally(() => {
      sending.value = false
    })
}
</script>

<style scoped>
.contact-section {
  position: relative;
  overflow: hidden;
}

.content-wrapper {
  max-width: 1200px;
  margin: auto;
  position: relative;
  z-index: 1;
}

.watermark {
  content: "";
  position: absolute;
  width: 900px;
  height: 500px;
  background-image: url('/public/SGI.svg');
  background-repeat: no-repeat;
  opacity: 0.05;
  z-index: 0;
}

.phoneContainer {
  width: 50px;
  height: 50px;
  background-color: #8F1313;
  align-content: center;
  text-align: center;
  border-radius: 10px;
}

.emailContainer {
  width: 50px;
  height: 50px;
  background-color: #206988;
  align-content: center;
  text-align: center;
  border-radius: 10px;
}

.iconContact {
  font-size: 28px;
  color: white;
}

.contact {
  font-family: 'Roboto', sans-serif;
  font-size: 50pt;
  font-weight: 900;
  color: #666666;
  opacity: 40%;
  margin-top: -40px;
  margin-bottom: 10px;
  margin-left: 250px;
}

.subtitle-call {
  color: #8F1313;
  font-size: 20pt;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

.subtitle-email {
  color: #1F6887;
  font-size: 20pt;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

.description {
  color: #666666;
  font-size: 16pt;
  /* según lo que comentaste para párrafos */
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

.input {
  font-family: 'Roboto', sans-serif;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px 8px;
}

.textarea {
  font-family: 'Roboto', sans-serif;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px 8px;
  height: 150px;
}

.form-btn-wrapper {
  display: flex;
  justify-content: flex-end;
}

.btn-form {
  background-color: #8F1313;
  color: white;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  border-radius: 10px;
  box-shadow: none;
  text-transform: none;
}

@media (max-width: 600px) {
  .content-wrapper {
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: column;
  }

  .contact {
    font-size: 35pt;
    margin-top: 0;
    margin-left: 0;
    text-align: left;
  }

  .subtitle-call,
  .subtitle-email {
    font-size: 16pt;
    text-align: left;
  }

  .description {
    font-size: 13pt;
    text-align: left;
  }

  .input,
  .textarea {
    font-size: 14px;
    padding: 8px;
  }

  .form-btn-wrapper {
    justify-content: center;
  }

  .btn-form {
    width: 60%;
    font-size: 16px;
  }

  .phoneContainer,
  .emailContainer {
    width: 44px;
    height: 44px;
  }

  .iconContact {
    font-size: 24px;
  }

  .col-12.col-md-4.column,
  .col-12.col-md-8.column {
    margin-top: 12px;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding: 0 8px;
  }

  .row.no-wrap.items-center.q-gutter-md {
    gap: 12px;
    margin-top: -10px;
  }

  .watermark {
    width: 400px;
    background-size: contain;
  }

  .contact-section {
    padding-top: 24px;
  }
}
</style>
