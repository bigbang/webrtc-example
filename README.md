#webrtc-example
Signaling with Big Bang and WebRTC
Draw an underline under: this is how you use presence, a big bang feature

#Who will read this
- Hasn't necessarily used WebRTC before
- Had used WebRTC and ran into challenges running backend components
- Have an interest in peer to peer real time communications
- Maybe has seen SimpleWebRTC before

#What do they need to know
- What is webRTC
- Why doesn't it work for 15% of people
- How connections are initiated using WebRTC

#Outline
##Background
- webRTC defines the connection between two peers
- it does not define how those two peers find one another
- signaling is the term of art for the way two peers find one another
-- basis in telephony
 
##Technical
- we are going to use BB channels (and the presence feature) to handle signaling
- simplewebRTC is used as our demo library
-- wrapper for the low-level webRTC API
###Steps/concepts
1. setup a channel
2. join channel
3. create channeldata directory
4. provide info that we can pass to the simplewebRTC to initiate p2p connection
5. users connect directly and info is no longer passed through bb
6. unless you wanted to pass something else
7. simplewebRTC will not address stun/turn
