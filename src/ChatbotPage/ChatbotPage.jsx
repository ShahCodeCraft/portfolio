import React, { useState } from "react";
import {Segment } from "semantic-ui-react";
import CloseIcon from "@mui/icons-material/Close";
import MessageIcon from "@mui/icons-material/Message";
import ChatBot from "react-simple-chatbot";

import { Box, Typography } from "@mui/material";
import styles from "./ChatbotPage.module.scss";
import { steps } from "./chatSteps";

const ChatbotPage = () => {
  const [showChat, setShowChat] = useState(false);
  const toggleChat = () => {
    setShowChat(!showChat);
  };
 const HeaderComponent = () => {
    return (
      <Box
        display={"flex"}
        alignItems={"center"}
        style={{
          position: "relative",
          background: "#007CFA",
          color: "white",
          padding: "17px 12px",
        }}
      >
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "none",
              position: "absolute",
              top: "10px",
              right: " 10px",
            },
          }}
        >
      <CloseIcon onClick={toggleChat} fontSize="small" />
        </Box>
        <img src="./logo_cp.png" className={styles.logo} alt="cp_logo" />
        <Typography variant="body1">
          Welcome to CodePrism Technologies
        </Typography>
      </Box>
    );
  };
  return (
    <div>
      <div
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          fontSize: "18px",
          zIndex: 9999
        }}
      >
        <Segment>
          <Box
            onClick={toggleChat}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              width: 60,
              height: 60,
              backgroundColor: "#007CFA",
              borderRadius: "50%"
            }}
            className={styles.chatBox}
          >
            {showChat ? (
              <CloseIcon sx={{ color: "#fff", fontSize: 34 }} />
            ) : (
              <MessageIcon
                sx={{ color: "#fff", fontSize: 32, marginTop: 0.5 }}
              />
            )}
          </Box>
          {showChat ? (        
            <ChatBot
              bubbleStyle={{ backgroundColor: "white",color:'black'}}
              style={{
                position: "fixed",
                bottom: "6rem",
                right: "2rem",
                fontStyle:'normal',
                fontFamily:'Arial',
                borderRadius:0,
                height:screen.width>599 ?"34rem":'100vh',
                display: 'flex',
                flexDirection:'column',
                justifyContent:'space-between'
              }}
              steps={steps}
              hideBotAvatar={true}
              headerComponent={<HeaderComponent />}
              contentStyle={{
              height:'calc(100% - 112px)',
              background:'#EBE5DE',
              }}
              avatarStyle={{background:'yellow'}}   
              bubbleOptionStyle={{background:'#007CFA'}}      
            />

          ) : null}
        </Segment>
      </div>
    </div>
  );
};
export default ChatbotPage;