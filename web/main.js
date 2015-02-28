console.log("starting!");

//Create an instance of the BigBangClient
var client = new BigBang.Client();

//Demo application.
var host = "http://demo.bigbang.io";

client.connect(host, function (err) {

  if (err) {
    alert("Failed to connect to " + host);
    return;
  }

  client.subscribe("helloWebRTC", function (err, channel) {
    if (err) {
      alert("Unable to subscribe to channel");
      return;
    }
    console.log('subscribed!');
    var webrtc = new SimpleWebRTC({
      // the id/element dom element that will hold "our" video
      localVideoEl: 'localVideo',
      // the id/element dom element that will hold remote videos
      remoteVideosEl: 'remotesVideos',
      // immediately ask for camera access
      autoRequestMedia: true
    });


// we have to wait until it's ready
    webrtc.on('readyToCall', function () {
      console.log('ready!');
      // you can name it anything
      webrtc.joinRoom('yargladfj24r8a');
    });


    //beginChat(channel);

  });
});



