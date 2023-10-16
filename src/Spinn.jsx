import { MutatingDots, Oval, Vortex } from "react-loader-spinner";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const Spin = (props) => {
  const spinner = useSelector((state) => state.appReducer.loading);
  console.log(spinner);
  return (
    <MainLoader hidden={spinner}>
      <Oval
        height={150}
        width={150}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </MainLoader>
  );
};

const MainLoader = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  bottom: 0;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  background: #000;
  display: ${(props) => (!props.hidden ? "none" : "flex")};
`;
