import styled from "styled-components";
import React, { useRef, useEffect } from "react";

const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 3px solid ${(props) => props.bordercolor};
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.fontcolor};
  font-weight: ${(props) => props.fontweight};
  width: ${(props) => props.fontwidth};
  height: ${(props) => props.fontheight};
  margin-right: 10px;
  cursor: pointer;
`;

const Modalstyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 250px;
  z-index: 100;
`;

const Modalbutton = styled.div`
  display: flex;
  justify-content: right;
  margin: 10px 10px 10px 10px;
`;

function Modal2({ isOpen2, closeModal2 }) {
  const modalRef = useRef(); // 모달의 바깥 부분을 참조할 변수 생성

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal2();
      }
    }

    if (isOpen2) {
      document.addEventListener("mousedown", handleClickOutside);
      //mousedown은 마우스 버튼을 누르는 이벤트를 나타낸다. 이벤트가 발생하는 시점은 마우스 버튼이 눌렸을 때이다.
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen2, closeModal2]);
  return (
    <div
      style={{
        display: isOpen2 ? "block" : "none",
      }}
    >
      {/* 모달 배경을 나타내며, position: fixed 속성으로 화면 전체를 가리는 역할을 합니다. */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        }}
        onClick={closeModal2}
      ></div>
      {/* 요소는 모달 내용을 담고 있으며, position: absolute 속성으로 화면 중앙에 위치합니다. */}
      <div
        ref={modalRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 550,
          maxWidth: "90%",
          maxHeight: "90%",
          overflowY: "auto",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <Modalstyle>
          <div>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</div>
          <Modalbutton>
            <Buttons
              onClick={closeModal2}
              bordercolor="#FAB1A0"
              backgroundcolor="#FAB1A0"
              fontcolor="red"
              fontwidth="30px"
              fontheight="30px"
            >
              X
            </Buttons>
          </Modalbutton>
        </Modalstyle>
      </div>
    </div>
  );
}

export default Modal2;
