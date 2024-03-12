import {  QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import styled from "styled-components";
import Navbar from "./Components/Navbar";
import { Select } from "./Components/Select";
import { Input } from "./Components/Input";
import { Clear } from "./Components/Clear";
import validator from "validator";

const StyledApp = styled.div`
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  display: grid;
  place-items: center;
  width: 350px;
  margin: 0 auto;
`;
const Option = styled.option`
  font-size: 1.2rem;
  margin: 1rem;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 1.2rem;
  padding: 1rem 1.3rem;
  border-radius: 4px;
  background-color: #0108e1a3;
  color: #e5e5e9;
  outline: none;
  border-width: 0;
  margin: 2rem 0;
  width: 100%;
`;
const Form = styled.form`
  width: 100%;
`;

export default function App() {
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const [link, setLink] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState(128);
  function handleGenerateCode(e) {
    e.preventDefault();
    if (!input) return;
    setError("");
    if (!validator.isURL(input)) {
      setError("This Url is invalid");
      setLink("");
      return;
    }
    setLink(input);
  }
  function handleClearCode() {
    setInput("");
    setLink("");
  }

  return (
    <>
      <Navbar />
      <StyledApp>
        <Form onSubmit={(e) => handleGenerateCode(e)}>
          <p>Select the Color of your QR Code</p>
          <Select onChange={(e) => setColor(e.target.value)}>
            <Option value="red">Red</Option>
            <Option value="black">Black</Option>
            <Option value="green">Green</Option>
          </Select>
          <Select onChange={(e) => setSize(e.target.value)}>
            <Option value={128}>128</Option>
            <option value={256}>256</option>
            <option value={512}>512</option>
          </Select>
          <Input
            type="text"
            placeholder="Enter Your Qr Code here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {error && (
            <p style={{ fontStyle: "italic", marginTop: "10px", color: "red" }}>
              {error}
            </p>
          )}

          <Button type="submit">Generate The QR Code </Button>
        </Form>
        {link && (
          <QRCodeSVG
            value={link}
            renderAs="canvas"
            fgColor={color}
            size={size}
            onClick={(e) => console.log(e.target)}
          />
        )}
        {link && (
          <Clear id="code" type="clear" onClick={handleClearCode}>
            Clear The QR Code{" "}
          </Clear>
        )}
        <div></div>
      </StyledApp>
    </>
  );
}
