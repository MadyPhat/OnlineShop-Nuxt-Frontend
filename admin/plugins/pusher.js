export default ({app}, inject) => {
  inject('pusher', () => {
    // Pusher.logToConsole = true;  // uncomment this line to show pusher log in the browser console
    return new Pusher(process.env.PUSHER_APP_KEY, {
      cluster: 'ap1'
    });
  });
}
