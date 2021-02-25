<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<style>

body {
  font-family: 'Montserrat', sans-serif !important;
}

section {
  height: 100vh;
}

.full-width {
  width: 100% !important;
}

.full-height {
  height: 100% !important;
}

.login {
  background-image: url('./assets/movie.png');
  background-position: left;
  background-repeat: no-repeat;
  background-size: 600px;
}

h1 {
  font-size: 80px !important;
  font-weight: 900 !important;
}

h2 {
  font-size: 40px !important;
  font-weight: 800 !important;
}

.hero-text {
  text-align: right !important;
  width: 40%;
}

.hero-text img {
  width: 200px !important;
}

.form-custom {
  height: 50px !important;
  border-radius: 50px !important;
  padding: 0 30px !important;
  border: #495DFF solid 1px !important;
}

.btn-custom {
  min-width: 140px;
  height: 55px;
  padding: 0 40px !important;
  background-color: #495DFF !important;
  border-radius: 50px !important;
  color: #D0FDF9 !important;
  font-size: 20px !important;
  font-weight: 700 !important;
}

.btn-fullwidth {
  width: 100% !important;
}

.btn-custom:hover {
  color: #495DFF !important;
  background-color: #D0FDF9 !important;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.022),
  0 6.7px 5.3px rgba(0, 0, 0, 0.033),
  0 12.5px 10px rgba(0, 0, 0, 0.04),
  0 22.3px 17.9px rgba(0, 0, 0, 0.045),
  0 41.8px 33.4px rgba(0, 0, 0, 0.052),
  0 100px 80px rgba(0, 0, 0, 0.07);
}

.quiz-card {
  width: 80%;
  height: 40%;
}

h1.emoji {
  font-size: 100px !important;
}

h3.score {
  font-size: 24px;
  font-weight: 800;
  color: #D0FDF9;
  margin-bottom: 0 !important;
}

.color-fading {
animation: colorchange 20s infinite;
}

@keyframes colorchange {
  0% {background-color:#e74c3c;}
  10% {background-color:#ff5252;}
  20%{background-color:#ffda79;}
  30%{background-color:#f1c40f;}
  40%{background-color:#16a085;}
  50%{background-color:#227093;}
  60%{background-color:#e67e22;}
  70%{background-color:#2c2c54;}
  80% {background-color:#8e44ad;}
  90% {background-color:#2980b9;}
  100% {background-color:#e74c3c;}
}

/* FOOTER BAR */

.footer-bar {
  background-color: #000;
  height: 80px;
  bottom: 0 !important;
}

/* PEDESTAL */

.pedestal {
  width: 800px;
  position: absolute !important;
  bottom: 0 !important;
}

.pedestal div {
  position: relative;
  width: 150px;
  background-color: #2980b9;
  height: 100px;
  text-align: center;
  word-wrap: break-word;
}

.pedestal img {
  position: absolute !important;
  top: 0;
  left: 40px;
  width: 70px;
}

.pedestal div h4 {
  font-size: 20px;
  font-weight: 700;
  margin-top: -50px;
}

.pedestal div.first {
  height: 250px;
}

.pedestal div.second {
  height: 200px;
}

.pedestal div.third {
  height: 150px;
}

.floating-button {
  top: 15px;
  right: 15px;
}

.floating-button button {
  background-color: #e74c3c !important;
  font-size: 16px !important;
}

.floating-tagname {
  top: 25px;
  left: 50px;
}

.tagname-card {
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 500;
  background-color: #D0FDF9;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.022),
  0 6.7px 5.3px rgba(0, 0, 0, 0.033),
  0 12.5px 10px rgba(0, 0, 0, 0.04),
  0 22.3px 17.9px rgba(0, 0, 0, 0.045),
  0 41.8px 33.4px rgba(0, 0, 0, 0.052),
  0 100px 80px rgba(0, 0, 0, 0.07);
}

.tagname-card h4 {
  font-size: 18px;
  font-weight: 500;
  margin: 0 !important;
}
</style>
