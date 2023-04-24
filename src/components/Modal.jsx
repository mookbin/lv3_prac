import styled from "styled-components";

function Modal({ isOpen, closeModal }) {
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
  return (
    <div
      style={{
        display: isOpen ? "block" : "none",
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
      ></div>
      {/* 요소는 모달 내용을 담고 있으며, position: absolute 속성으로 화면 중앙에 위치합니다. */}
      <div
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
          <div>
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
            않아요.
          </div>
          <Modalbutton>
            <Buttons
              bordercolor="#55EFC4"
              backgroundcolor="#55EFC4"
              fontcolor="black"
              fontwidth="100px"
              fontheight="30px"
            >
              확인
            </Buttons>
            <Buttons
              onClick={closeModal}
              bordercolor="#FAB1A0"
              backgroundcolor="#FAB1A0"
              fontcolor="red"
              fontwidth="100px"
              fontheight="30px"
            >
              닫기
            </Buttons>
          </Modalbutton>
        </Modalstyle>
      </div>
    </div>
  );
}

export default Modal;
