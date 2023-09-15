import React, { useRef, useEffect } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { ActiveRoom } from "../../utils/api";
import { useNavigate } from "react-router";
import logo from "../../assets/images/logo.png"

// get token
function generateToken(tokenServerUrl, userID) {
  // Obtain the token interface provided by the App Server
  return fetch(
    `${tokenServerUrl}/access_token?userID=${userID}&expired_ts=7200`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
}

function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
  const navigate = useNavigate()
  const roomID = getUrlParams().get("roomID") || randomID(5);
  const myMeetingRef = useRef(null);

  const user = JSON.parse(localStorage.getItem("store"))?.user?.userData
  
  useEffect(() => {
    let myMeeting = async (element) => {
      const userID = user._id;
      const userName = user.name;
     
      console.error("fff",userID);

      // generate token
      generateToken("https://nextjs-token.vercel.app/api", userID).then(
        (res) => {
          const token = ZegoUIKitPrebuilt.generateKitTokenForProduction(
            1484647939,
            res.token,
            roomID,
            userID,
            userName
          );
          // create instance object from token
          const zp = ZegoUIKitPrebuilt.create(token);

          // start the call
          zp.joinRoom({
            container: element,
            // showPreJoinView: false,
            // showRemoveUserButton:roomID===userID,
            // turnOnCameraWhenJoining:false,
            // turnOnMicrophoneWhenJoining:false,
            // branding: {
            //   logoURL: logo 
            // },
            onJoinRoom: () => {ActiveRoom({userID,roomID,state: true})},
            onLeaveRoom: () => {
              ActiveRoom({userID,roomID, state:false})
              navigate("/rooms")
            },
            onYouRemovedFromRoom: () => {
              ActiveRoom({userID,roomID, state:false})
              navigate("/rooms")
            },
            sharedLinks: [
              {
                name: "Personal link",
                url:
                  window.location.origin +
                  window.location.pathname +
                  "?roomID=" +
                  roomID,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.VideoConference,
            },

          });
          
        }
      );
    };
    
    if (myMeetingRef.current) {
      myMeeting(myMeetingRef.current);
    }
  }, [roomID]);

  return (
    <div
      className="myCallContainer"
      ref={myMeetingRef}
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
