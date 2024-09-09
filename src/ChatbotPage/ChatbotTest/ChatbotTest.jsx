import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import CloseIcon from "@mui/icons-material/Close";
import MessageIcon from "@mui/icons-material/Message";
import ChatBot from "react-simple-chatbot";

import { Box, Typography } from "@mui/material";
import styles from "../ChatbotPage.module.scss";

const SimpleForm = ({steps}) => {
  // const steps = [
  //   {
  //     id: "greet",
  //     message: "How can I help you",
  //     trigger: "query",
  //   },
  //   {
  //     id: "query",
  //     options: [
  //       {
  //         value: "CodePrism Technologies",
  //         label: "About CodePrism",
  //         trigger: "CodePrism",
  //       },
  //       {
  //         value: "Founder and CEO",
  //         label: "Founder & CEO",
  //         trigger: "Founder",
  //       },
  //       { value: "Contact US", label: "Contact US", trigger: "Contact US" },
  //     ],
  //   },
  //   {
  //     id: "CodePrism",
  //     message:
  //       "Codeprism Technologies Private Limited is a Private incorporated on 27 March 2019. It is classified as Non-govt company and is registered at Registrar of Companies, Hyderabad. Its authorized share capital is Rs. 1,000,000 and its paid up capital is Rs. 100,000. It is inolved in Business activities n.e.c.",
  //     trigger: "query2",
  //   },
  //   {
  //     id: "Founder",
  //     message:
  //       "The company was founded by VINNY CAROLE GODWIN KATI and ANUPAM GUPTA in the year 2019. The company has 2 directors on board at the time of inception and they were appointed on the dates 2019-03-27 and 2019-03-27 respectively",
  //     trigger: "query1",
  //   },
  //   {
  //     id: "Contact US",
  //     message: "Let's Talk with us",
  //     trigger: "query3",
  //   },
  //   {
  //     id: "query1",
  //     options: [
  //       {
  //         value: "Anupam Gupta",
  //         label: "Anupam Gupta",
  //         trigger: "Anupam Gupta",
  //       },
  //       {
  //         value: "Godwin Carole",
  //         label: "Godwin Carole",
  //         trigger: "Godwin Carole",
  //       },
  //       { value: "Back", label: "Back", trigger: "Back" },
  //     ],
  //   },
  //   {
  //     id: "Anupam Gupta",
  //     message:
  //       "Anupam is a senior program manager with experience in customer-facing delivery of solutions and managing complex projects in embedded software technologies. He is currently delivering scalable web applications with the latest web technologies. He will love to meet interesting people from the tech field.",
  //     trigger: "query1",
  //   },
  //   {
  //     id: "Godwin Carole",
  //     message:
  //       "Godwin Vinny Carole Kati is registered with the Ministry of Corporate Affairs as a Director in Indian Companies. The DIN (Director Identification Number) of Godwin Vinny Carole Kati is 08401398. Currently, he/she serves as a director in 1 company in India. The company he/she is associated with is from Business Services.",
  //     trigger: "query1",
  //   },
  //   {
  //     id: "Back",
  //     message: "How can I help you...!",
  //     trigger: "query",
  //   },
  //   {
  //     id: "query2",
  //     options: [
  //       { value: "Services", label: "Services", trigger: "Services" },
  //       { value: "Products", label: "Products", trigger: "Products" },
  //       { value: "Back", label: "Back", trigger: "Back" },
  //     ],
  //   },
  //   {
  //     id: "Services",
  //     message:
  //       "Services: 1. Mobile Apps 2. Web Development 3. Server Development 4. Blockchain - Turning your ideas into solutions. Let's make your app glow on the internet.",
  //     trigger: "query2",
  //   },
  //   {
  //     id: "Products",
  //     message:
  //       "Our Products: 1. Health Journal (iOS & Android) 2. PrismLMS - We are proud to work with truly innovative clients. Here are just a few of the companies we’ve had the privilege to work with.",
  //     trigger: "query2",
  //   },
  //   {
  //     id: "query3",
  //     options: [
  //       { value: "INDIA", label: "INDIA", trigger: "INDIA" },
  //       { value: "USA", label: "USA", trigger: "USA" },
  //       { value: "Back", label: "Back", trigger: "Back" },
  //     ],
  //   },
  //   {
  //     id: "INDIA",
  //     message:
  //       "Mobile: +91 8919366435, Email: anupam.gupta@codeprism.in, Address: 3rd floor, Jubilee Square building, Jubilee Hills, Rd No 36, Hyderabad, Website: codeprism.in",
  //     trigger: "query3",
  //   },
  //   {
  //     id: "USA",
  //     message:
  //       "Mobile: +1 307 275 9436, Email: anupam.gupta@codeprism.in, Address: 1309, Coffeen Avenue STE 1200 Sheridan, Wyoming 82801, Website: codeprismtechnologies.com",
  //     trigger: "query3",
  //   },
  //   {
  //     id: "Back",
  //     message: "How can I help you...!",
  //     trigger: "query",
  //   },
  // ];

  const [showChat, setShowChat] = useState(false);

  const handleChat = () => {
    setShowChat(!showChat);
  };

  const handleClose = () => {
    setShowChat(!showChat);
  };

  const HeaderComponent = () => {
    return (
      <Box
        display={"flex"}
        alignItems={"center"}
        style={{
          position: "relative",
          top: "30px",
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
              right: "10px",
            },
          }}
        >
          <CloseIcon onClick={handleClose} fontSize="small" />
        </Box>
        <img src="./shah_pic.png" className={styles.logo} alt="cp_logo" />
        <Typography variant="body1">
        Welcome...! know more<br/>
        about me and my work
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
          zIndex: 9999,
        }}
      >
        <Segment>
          <Box
            onClick={handleChat}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              width: 60,
              height: 60,
              backgroundColor: "#007CFA",
              borderRadius: "50%",
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
              bubbleStyle={{ backgroundColor: "white", color: "black" }}
              style={{
                position: "fixed",
                bottom: "6rem",
                right: "2rem",
                fontStyle: "normal",
                fontFamily: "Arial",
                borderRadius: 0,
                height: window.innerWidth > 599 ? "34rem" : "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              steps={steps}
              hideBotAvatar={true}
              headerComponent={<HeaderComponent />}
              contentStyle={{
                height: "calc(100% - 112px)",
                marginTop: "30px",
                background: "#EBE5DE",
              }}
              avatarStyle={{ background: "yellow" }}
              bubbleOptionStyle={{ background: "#59CE72" }}
            />
          ) : null}
        </Segment>
      </div>
    </div>
  );
};

export default SimpleForm;
