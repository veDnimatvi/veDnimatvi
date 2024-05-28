export function getNumFromDateString(date) {
  let dateNums = date.split(" ");
  let month = dateNums[1];
  let nMonth = 0;
  switch (month) {
    case "January":
      nMonth = 1;
      break;
    case "Febuary":
      nMonth = 2;
      break;
    case "March":
      nMonth = 3;
      break;
    case "April":
      nMonth = 4;
      break;
    case "May":
      nMonth = 5;
      break;
    case "June":
      nMonth = 6;
      break;
    case "July":
      nMonth = 7;
      break;
    case "August":
      nMonth = 8;
      break;
    case "September":
      nMonth = 9;
      break;
    case "October":
      nMonth = 10;
      break;
    case "November":
      nMonth = 11;
      break;
    case "December":
      nMonth = 12;
      break;
    default:
      throw Error("Invalid Date");
  }
  return Number(dateNums[2] + nMonth + dateNums[0]);
}

export const initFacebookSDK = () => {
  if (window.FB) {
    window.FB.XFBML.parse();
  }
  let locale = "vi_VN";
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: "1039695453955007", // You App ID
      cookie: true, // enable cookies to allow the server to access
      // the session
      xfbml: true, // parse social plugins on this page
      version: "v2.1", // use version 2.1
    });
  };
  // Load the SDK asynchronously
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = `//connect.facebook.net/${locale}/sdk.js`;
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
};
