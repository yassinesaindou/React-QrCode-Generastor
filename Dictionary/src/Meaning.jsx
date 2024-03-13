/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const StyledMeaning = styled.div`
  font-size: 1.2rem;
`;
const StyledH3 = styled.h3`
  display: inline;
  font-weight:700;
  margin-right: 1rem;
`;

const partStyles = {
  background: "dodgerblue",
  padding: "0.5rem 1rem",
  borderRadius: "5px",
  marginTop: "3rem",
};
export function Meaning({ data }) {
  if (data) {
    console.log(data);
    // console.log(meaning.meaning.definitions['0'].definition);
  }
  return (
    <StyledMeaning>
      <div>
        <h3 style={partStyles}>{data?.partOfSpeech}</h3>
      </div>
      <StyledH3>Definition:</StyledH3>
      <span className="definition">{data.definitions[0].definition}</span>
      {data.synonyms.length > 0 && (
        <div>
          <StyledH3>Synonyms:</StyledH3>
          <span>
            (
            {data.synonyms?.map((s, i) => (
              <span key={i}>{s} {data.synonyms.length -1 > i? ',':''} </span>
            ))}
            )
          </span>
        </div>
      )}
    </StyledMeaning>
  );
}
