import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "./contacts.module.css";
import homecss from "@/styles/Home.module.css";
import Button from "../../components/atoms/Button/Button";
import LogMessages from "@/components/molecules/LogMessages/LogMessages";
import Input from "@/components/atoms/ContactInputs/Input/Input";
import Textarea from "@/components/atoms/ContactInputs/Textarea/Textarea";

import CheckboxInput from "@/components/atoms/ContactInputs/Checkbox/Checkbox";
import Error from "@/components/atoms/Error/Error";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

function contacts() {
  const [error, setError] = useState(null);
  const [logMessages, setLogMessages] = useState([]);
  const [letterTitle, setLetterTitle] = useState("");
  const [letterContent, setLetterContent] = useState("");
  const [senderName, setSenderName] = useState("");
  const [checkbox, setCheckbox] = useState("");

  const inputTitle = useRef(null);
  const inputContent = useRef(null);
  const inputSender = useRef(null);

  const checkInputs = () => {
    if (!letterTitle) {
      setError("Please fill letter title");
      inputTitle.current.focus();
      return false;
    } else if (!senderName) {
      setError("Please fill letter sender");
      inputSender.current.focus();
      return false;
    } else if (!letterContent) {
      setError("Please fill letter content");
      inputContent.current.focus();
      return false;
    } else if (!checkbox) {
      setError("Please check if you agree");
      return false;
    } else {
      setError("Message Sent");
      return true;
    }
  };

  const sendMessage = () => {
    const isValid = checkInputs();
    if (isValid) {
      const title = letterTitle;
      const content = letterContent;
      const name = senderName;
      const toScreen = (
        <>
          <p>Title: {title}</p>
          <p>Content: {content}</p>
          <p>Name: {name}</p>
        </>
      );
      setLogMessages([...logMessages, toScreen]);
    }
  };

  return (
    <>
      <Header />
      <main className={`${homecss.main} ${inter.className}`}>
        <div className={homecss.heading}>
          <h2>Give us Call</h2>
        </div>
        <div className={styles.contacts}>
          <h3 className={styles.subheading}>
            If you want consultation please tell us know we ready to help you
          </h3>
          <div className={styles.contactInner}>
            <Input
              ref={inputTitle}
              placeholder="Title"
              value={letterTitle}
              onChange={(e) => setLetterTitle(e.target.value)}
            />
            <Input
              ref={inputSender}
              placeholder="Sender Name"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
            <Textarea
              ref={inputContent}
              placeholder="Content"
              value={letterContent}
              onChange={(e) => setLetterContent(e.target.value)}
            />
            <CheckboxInput
              checked={checkbox}
              onChange={() => setCheckbox(!checkbox)}
            />
            <Button onClick={sendMessage} text="Send" />
            <Error error={error} />
            <LogMessages logMessages={logMessages} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default contacts;
