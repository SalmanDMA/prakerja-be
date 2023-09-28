let code = 200;
let message = null;

switch (code) {
 case 200:
  message = 'OK';
  break;
 case 400:
  message = 'Bad Request';
  break;
 default:
  message = 'Unknown';
}
