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
    // useEffect 훅을 사용해서 모달이 열리거나 닫힐 때 handleClickOutside 함수 호출
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal2();
      }
      // handleClickOutside 함수는 modalRef 변수가 존재하고 클릭된 이벤트가 모달 바깥쪽에 속해있지 않으면 closeModal2 함수 호출
    }

    if (isOpen2) {
      document.addEventListener("mousedown", handleClickOutside);
      //isOpen2가 true일 때 document 객체에 mousedown 이벤트를 등록
      //mousedown은 마우스 버튼을 누르는 이벤트를 나타낸다. 이벤트가 발생하는 시점은 마우스 버튼이 눌렸을 때이다.
      //문서 객체 내부에서 마우스 클릭 이벤트가 발생했을 때, 문서 객체 외부를 클릭한 경우에 실행되는 함수(handleClickOutside)를 등록하는 코드
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // 모달이 열릴 때만 이벤트 등록, 닫힐 때는 이벤트 제거
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
      <div
        // 모달 배경을 나타냄
        style={{
          position: "fixed",
          //  position: fixed 속성으로 화면 전체를 가리는 역할.
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          // 모달 열릴 때 배경 약간 어둡게 표시. (투명도 35%)
        }}
        onClick={closeModal2}
      ></div>

      <div
        //  모달 내용.

        ref={modalRef}
        //ref 속성 사용. 모달 바깥 부분을 참조할 수 있는 modalRef 변수
        style={{
          position: "absolute",
          //position: absolute 속성으로 화면 중앙에 위치.
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
