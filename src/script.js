const MyUserId = "MY_USER_ID";

class MyApp {
  constructor() {
    window.analytics.ready(() => {
      // wire up track event
      const btn = document.getElementById("btn");
      btn.addEventListener("click", this.onTrackClick);

      // wire up login event
      const login = document.getElementById("login");
      login.addEventListener("click", this.onLoginClick);

      // label page
      window.analytics.page({
        name: "Home",
      });

      // show key
      const writeKey = document.getElementById("key");
      writeKey.innerHTML = window.analyticsWriteKey;

      console.log("Loaded: window.app");
    });
  }

  onLoginClick = () => {
    window.analytics
      .identify(MyUserId, {
        logins: "5",
      })
      .then(console.log);
  };

  onTrackClick = () => {
    window.analytics
      .track("Thing Completed", {
        title: "How to Create a Tracking Plan",
        course: "Intro to Analytics",
      })
      .then(console.log);
  };
}

window.app = new MyApp();
