console.log("hello world\nayub.dev");

window.onload = function () {
  document.getElementById('port1').onclick = () => {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('modal-title').innerHTML = '💡 Smart Street Light';
    document.getElementById('modal-main').innerHTML = `
	<img src="/assets/portfolio/detail/port1/port1-1.png" class="image-det">
  <img src="/assets/portfolio/port2.png" class="image-det">
	<img src="/assets/portfolio/detail/port1/port1-3.png" class="image-det">
	<img src="/assets/portfolio/detail/port1/port1-4.png" class="image-det">
  <img src="/assets/portfolio/detail/port1/port1-5.png" class="image-det">`;
    document.getElementById('modal-desc').innerHTML = `
  Lectro app was developed to integrate the smart street light (PJU - Penerangan Jalan Umum)
	that able to receive the battery usage to the client with using the Lectro app.
	Client can see their street light condition, location, and all the smart street light data
  from the app.<br><br><i>On this app, I do fullstack developer</i> 💪`;
    document.getElementById('modal-tech').innerHTML = `
  This app uses:
  <img class="tech-det" src="/assets/icons/react-icon.png" />
  <img class="tech-det" src="/assets/icons/redux-icon.png" />
  <img class="tech-det" src="/assets/icons/angular-icon.png" />
  <img class="tech-det" src="/assets/icons/html-icon.png" />
  <img class="tech-det" src="/assets/icons/css-icon.png" />
  <img class="tech-det" src="/assets/icons/php-icon.png" />
  <img class="tech-det" src="/assets/icons/mysql-icon.png" />
  <img class="tech-det" src="/assets/icons/bootstrap-icon.png" />
  <img class="tech-det" src="/assets/icons/github-icon.png" />
  <img class="tech-det" src="/assets/icons/figma-icon.png" />`;
  };

  document.getElementById('port2').onclick = () => {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('modal-title').innerHTML =
      '💧 Irigation Water Quality Monitoring';
    document.getElementById('modal-main').innerHTML = `
  <img src="/assets/portfolio/port1.png" class="image-det">
  <img src="/assets/portfolio/detail/port2/port2-3.png" class="image-det">
  <img src="/assets/portfolio/detail/port2/port2-2.png" class="image-det">
  <img src="/assets/portfolio/detail/port2/port2-1.png" class="image-det-web">`;
    document.getElementById('modal-desc').innerHTML = `
  Irigation Water Quality Monitoring app builds to give the client better interfaces to monitor
  their water quality that supply to their agricultural field. This app connected to the hardware
  through bluetooth connection and access able with internet connection for better interface such as
  a graph line and tables to display the data. We can set our requirement for each sensor with some
  settings in the app.<br><br><i>On this app, I do fullstack developer</i> 💪`;
    document.getElementById('modal-tech').innerHTML = `
  This app uses:
  <img class="tech-det" src="/assets/icons/androidstudio-icon.png" />
  <img class="tech-det" src="/assets/icons/html-icon.png" />
  <img class="tech-det" src="/assets/icons/css-icon.png" />
  <img class="tech-det" src="/assets/icons/php-icon.png" />
  <img class="tech-det" src="/assets/icons/mysql-icon.png" />
  <img class="tech-det" src="/assets/icons/github-icon.png" />
  <img class="tech-det" src="/assets/icons/figma-icon.png" />`;
  };

  document.getElementById('port3').onclick = () => {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('modal-title').innerHTML = '🚴‍♀️ Batex Ride';
    document.getElementById('modal-main').innerHTML = `
  <img src="/assets/portfolio/port3.png" class="image-det">
  <img src="/assets/portfolio/detail/port3/port3-1.png" class="image-det">
  <img src="/assets/portfolio/detail/port3/port3-2.png" class="image-det">
  <img src="/assets/portfolio/detail/port3/port3-3.png" class="image-det">`;
    document.getElementById('modal-desc').innerHTML = `
  Batex ride app is user side service for bike sharing technology to give bike rent service, in this app 
  user can scan the bike's QR code and rent it with some charge than the app could save user's ride data.
  Battery and bike location can be monitor to provide more accurate data to each business owner and the user.
  <br><br><i>On this app, I do front-end developer</i> 💪`;
    document.getElementById('modal-tech').innerHTML = `
  This app uses:
  <img class="tech-det" src="/assets/icons/react-icon.png" />
  <img class="tech-det" src="/assets/icons/redux-icon.png" />
  <img class="tech-det" src="/assets/icons/github-icon.png" />
  <img class="tech-det" src="/assets/icons/figma-icon.png" />`;
  };

  document.getElementById('modal-close').onclick = () => {
    document.getElementById('myModal').style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == document.getElementById('myModal')) {
      document.getElementById('myModal').style.display = 'none';
    }
  };
  document.getElementById('port4').onclick = () => {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('modal-title').innerHTML = '😷 Covid-19';
    document.getElementById('modal-main').innerHTML = `
  <img src="/assets/portfolio/port4-front.png" class="image-det">
  <img src="/assets/portfolio/detail/port4/port4-5.png" class="image-det">
  <img src="/assets/portfolio/detail/port4/port4-6.png" class="image-det">
  <img src="/assets/portfolio/detail/port4/port4-7.png" class="image-det">
  <img src="/assets/portfolio/detail/port4/port4-4.gif" class="image-det">`;
    document.getElementById('modal-desc').innerHTML = `
  Covid-19 app is data monitoring application that monitor covid-19 cases and you can diagnose your covid-19
  symptoms with prixa.ai. Case data showed on the graph visualisation and the maps visualisation for better
  experience while using this app. For Indonesia data cases, this app use official data on data.covid19.go.id,
  and for other country cases, i am currently working on it.<br><br>
  To see my progress on this app, see my github <a target="_blank" rel="noopener noreferrer" href="https://github.com/azzzub/covid-app"><b>here</b></a><br>
  To directly download this app (Version 1.1), click <a target="_blank" rel="noopener noreferrer" href="https://github.com/azzzub/covid-app/releases/download/v1.1/Covid-19_v1.1.apk"><b>here</b></a>
  <br><br><i>On this app, I do front-end developer</i> 💪`;
    document.getElementById('modal-tech').innerHTML = `
  This app uses:
  <img class="tech-det" src="/assets/icons/androidstudio-icon.png" />
  <img class="tech-det" src="/assets/icons/github-icon.png" />
  <img class="tech-det" src="/assets/icons/dribbble-icon.png" />`;
  };

  document.getElementById('modal-close').onclick = () => {
    document.getElementById('myModal').style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == document.getElementById('myModal')) {
      document.getElementById('myModal').style.display = 'none';
    }
  };
};
