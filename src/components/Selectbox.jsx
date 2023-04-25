import styled from "styled-components";

const SelectBoxWrapper = styled.div`
  position: absolute;
`;

const Select = styled.select`
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
`;

const SelectBox = (props) => {
  return (
    <SelectBoxWrapper>
      <Select>
        {props.options.map((option) => (
          <option
            key={option.id}
            value={option.value}
            defaultValue={props.defaultValue === option.value}
          >
            {option.name}
          </option>
        ))}
      </Select>
    </SelectBoxWrapper>
  );
};
export default SelectBox;
