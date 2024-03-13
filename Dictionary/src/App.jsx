/* eslint-disable react/prop-types */
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Meaning } from "./Meaning";
import styled from "styled-components";
import Navbar from "./Header";
import Footer from "./Footer";
import { Form } from "./Form";
import { Input } from "./Input";
import { Button } from "./Button";
const StyledApp = styled.div`
  font-size: 1.2rem;
 
  max-width: 500px;
  box-shadow: 1px 0 3px gray;
  padding: 2rem;
  margin: 0 auto;
  max-height: 90vh;
  overflow-y: scroll;
  margin-bottom: 2rem;
`;

// const API = "https://api.dictionaryapi.dev/api/v2/entries/en/<word>";
export default function App() {
  const [label, setLabel] = useState("");
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState();

  async function hadleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    console.log(query);
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
      );
      const data = await res.json();
      setResponse(data["0"]);
      setLabel(query);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Navbar />
      <StyledApp>
        <Form action="">
          <Input
            type="text"
            value={query}
            placeholder="Enter the word here"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={(e) => hadleSubmit(e)}>
            <HiOutlineSearch />
          </Button>
        </Form>

        <div>
          <h2>{label}</h2>
          {label && <h3>Meanings</h3>}

          <div>
            {response?.meanings?.map((res, i) => (
              <Meaning data={res} key={i} />
            ))}
          </div>
        </div>
      </StyledApp>
      <Footer />
    </>
  );
}
