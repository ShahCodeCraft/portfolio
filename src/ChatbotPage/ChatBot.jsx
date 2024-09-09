import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { Box, Typography } from "@mui/material";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { postPrompt } from "../backend/api";
import React from "react";
import styles from "./ChatbotPage.module.scss";

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      message:
        "Hello, I'm here to help you Ask me anything about our CodePrism Technology!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    //console.log("handleSend");
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT() {
    //console.log("processMessageToChatGPT");
    const lastUserMessage = chatMessages[chatMessages.length - 1].message;
    const cleanedUserMessage = lastUserMessage.toLowerCase().replace(/\?/g, ""); // Remove question marks
    var prompt = {
      prompt: cleanedUserMessage,
    };
    try {
      var res = await postPrompt(prompt);
      //console.log("res.data", res.data);
      const newMessages = [
        ...chatMessages,
        { message: res.response, sender: "ChatGPT" },
      ];
      setMessages(newMessages);
      setIsTyping(false);
    } catch (e) {
      //console.log("error", e);
    }

    return;
  }

  const [chats, setChats] = useState(false);
  const handleChat = () => {
    setChats(!chats);
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
          padding: "12px 12px",
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
          <CloseIcon onClick={handleChat} fontSize="small" />
        </Box>
        {/*  */}
        <img src="./logo_cp.png" className={styles.logo} alt="cp_logo" />
        <Typography variant="body1">
          Welcome! know more about me and my work
        </Typography>
      </Box>
    );
  };

  return (
    <>
      <Box
        onClick={handleChat}
        sx={{
          position: "fixed",
          bottom: "100px",
          right: "33px",
          background: "#fff",
          borderRadius: "50%",
          height: "60px",
          width: "60px",
          boxShadow: "0 0 5px #888888",
          zIndex: 999,
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {chats ? (
          <CloseIcon sx={{ color: "primary", fontSize: 34 }} />
        ) : (
          <img
            src="/assets/images/chatbot-icon.png"
            alt="chatbot"
            style={{ width: 45, height: 45 }}
          />
        )}
      </Box>
      {chats ? (
        <Box
          sx={{
            position: "fixed",
            bottom: "240px",
            right: "33px",
            fontSize: "18px",
            height: "450px",
            width: "350px",
            zIndex: 999,
          }}
        >
          {HeaderComponent()}
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator content="PrismBot is typing" />
                  ) : null
                }
              >
                {messages.map((i) => {
                  // console.log(message);
                  return <Message key={i} model={messages} />;
                })}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
        </Box>
      ) : null}
    </>
  );
}

export default ChatBot;
