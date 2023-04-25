import "./App.css";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { useState } from "react";
import Modal from "./components/Modal";
import Modal2 from "./components/Modal2";
import SelectBox from "./components/Selectbox";

const OPTIONS = [
  { id: 1, value: "react", name: "리엑트" },
  { id: 2, value: "java", name: "자바" },
  { id: 3, value: "spring", name: "스프링" },
  { id: 4, value: "reactnative", name: "리엑트네이티브" },
];

const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px 30px;
  border: 3px solid ${(props) => props.bordercolor};
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.fontcolor};
  font-weight: ${(props) => props.fontweight};
  width: ${(props) => props.fontwidth};
  height: ${(props) => props.fontheight};
  cursor: pointer;
`;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputName, setInputName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(!isModalOpen);

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(!isModalOpen2);

  const handleChange = (event) => {
    const { value } = event.target;
    // 사용자가 입력한 문자열에서 숫자만 추출합니다.
    const numericValue = value.replace(/[^0-9]/g, "");
    // 추출한 숫자에 컴마를 추가합니다.
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, "$&,");
    setInputValue(formattedValue);
  };

  const nameHandler = (event) => {
    const nameValue = event.target.value;
    setInputName(nameValue);
  };

  const result = () =>
    alert(`이름 : ${inputName} 가격 : ${inputValue.replace(/[^0-9]/g, "")}`);

  return (
    <div className="App">
      <div>
        <h2>Button</h2>
        <div className="buttoncontainer">
          <Buttons
            bordercolor="#55EFC4"
            backgroundcolor="white"
            fontcolor="black"
            fontweight="bold"
          >
            Large Primary Button &nbsp;
            <IoChevronForward style={{ fontSize: "20px" }} />{" "}
          </Buttons>
          <Buttons
            bordercolor="#55EFC4"
            backgroundcolor="#55EFC4"
            fontcolor="black"
            fontwidth="150px"
            fontheight="40px"
          >
            Medium
          </Buttons>
          <Buttons
            bordercolor="#55EFC4"
            backgroundcolor="#55EFC4"
            fontcolor="black"
            fontwidth="100px"
            fontheight="30px"
          >
            Small
          </Buttons>
        </div>
        <div className="buttoncontainer">
          <Buttons
            bordercolor="#FAB1A0"
            backgroundcolor="white"
            fontcolor="red"
            fontweight="bold"
          >
            Large Negative Button &nbsp;
            <HiOutlineBellAlert
              style={{ fontSize: "20px", color: "black" }}
            />{" "}
          </Buttons>
          <Buttons
            bordercolor="#FAB1A0"
            backgroundcolor="#FAB1A0"
            fontcolor="red"
            fontwidth="150px"
            fontheight="40px"
          >
            Medium
          </Buttons>
          <Buttons
            bordercolor="#FAB1A0"
            backgroundcolor="#FAB1A0"
            fontcolor="red"
            fontwidth="100px"
            fontheight="30px"
          >
            Small
          </Buttons>
        </div>
      </div>
      <div>
        <h2>Input</h2>
        <div className="inputcontainer">
          이름{" "}
          <input
            type="text"
            value={inputName}
            onChange={nameHandler}
            style={{
              borderRadius: "10px",
              border: "1px solid black",
              height: "40px",
            }}
          />
          가격{" "}
          <input
            style={{
              borderRadius: "10px",
              border: "1px solid black",
              height: "40px",
            }}
            type="text"
            value={inputValue}
            onChange={handleChange}
          />
          <Buttons
            onClick={result}
            bordercolor="#55EFC4"
            backgroundcolor="#55EFC4"
            fontcolor="black"
            fontwidth="100px"
            fontheight="30px"
          >
            {" "}
            저장{" "}
          </Buttons>
        </div>
      </div>
      <div>
        <h2>Modal</h2>
        <div className="modalcontainer">
          <Buttons
            onClick={openModal}
            bordercolor="#55EFC4"
            backgroundcolor="#55EFC4"
            fontcolor="black"
            fontwidth="100px"
            fontheight="30px"
          >
            open modal
          </Buttons>
          <Modal isOpen={isModalOpen} closeModal={closeModal} />

          <Buttons
            onClick={openModal2}
            bordercolor="#FAB1A0"
            backgroundcolor="white"
            fontcolor="red"
            fontweight="bold"
          >
            open Modal &nbsp;
          </Buttons>
          <Modal2 isOpen2={isModalOpen2} closeModal2={closeModal2} />
        </div>
      </div>
      <div>
        <h2>Select</h2>
        <div className="selectcontainer">
          <SelectBox options={OPTIONS} defaultValue="react"></SelectBox>
          {/* dropbtn USD< 자리에 {useState}가 들어가서 하단 버튼onclick -> useState 바뀌면됨*/}
        </div>
      </div>
    </div>
  );
}

export default App;
