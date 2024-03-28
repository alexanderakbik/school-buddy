<!-- frontend/src/views/LoginPage.vue -->

<template>
  <div class="login">
    <select @change="changeLanguage($event.target.value)" class="language-switcher">
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="lv">Latviešu</option>
    </select>
    <h2>{{ $t('login') }}</h2>
    <form>
      <input type="text" :placeholder="$t('usernameEmail')">
      <input type="password" :placeholder="$t('password')">
      <button type="submit" class="button">{{ $t('login') }}</button>
    </form>
    <router-link to="/signup">{{ $t('dontHaveAccount') }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language;
    }
  }
}
</script>

<style scoped>
.login {
  max-inline-size: 400px;
  margin: 0 auto;
}

input {
  display: block;
  inline-size: 100%;
  margin-block-end: 20px;
  padding: 10px;
}

a {
  display: block;
  margin-block-start: 20px;
  text-align: center;
}
</style>
