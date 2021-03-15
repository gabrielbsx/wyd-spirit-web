<template>
  <div>
    <div class="menu">
      <div class="wrapper">
        <a class="navi-button" onclick="toggleNavi();"><span></span></a>
        <ul class="navi">
          <li>
            <a href="/">
              <span>INÍCIO</span>
              <p>Página Inicial</p>
            </a>
          </li>
          <li>
            <a class="about" href="/">
              <span>COMUNIDADE</span>
              <p>Guias e Tutoriais</p>
            </a>
          </li>
          <li>
            <a class="account" href="/">
              <span>REGISTRE-SE</span>
              <p>Criar nova conta</p>
            </a>
          </li>
          <li>
            <a class="download" href="/">
              <span>RANKING</span>
              <p>Players & Cidades</p>
            </a>
          </li>
          <li>
            <a class="forum" href="/">
              <span>SUPORTE</span>
              <p>Comunidade</p>
            </a>
          </li>
          <li>
            <a href="/">
              <span>PAINEL</span>
              <p>Painel do usuári o</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Header",
  methods: {
    createMenu() {
      let menu = 'teste';
    }
  }
};
</script>

<style scoped>
</style>
