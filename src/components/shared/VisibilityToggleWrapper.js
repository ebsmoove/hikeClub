import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ST1 } from "./typeography";
import expandMore from "../assets/expand_more.svg";
import expandLess from "../assets/expand_less.svg";

const Container = styled.div`
  ${({ isVisible }) => !isVisible && "height: 0px; overflow: hidden;"};
  transition: height 200ms;
`;

const VisibilityBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 3px;
  width: 100%;
`;

const Button = styled.button`
  background-color: white;
`;

const VisibiltyToggleWrapper = (WrappedComponent) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      const { isVisible } = props;

      this.state = {
        isVisible: isVisible || true,
      };
    }

    toggleIsVisible() {
      const { isVisible } = this.state;
      this.setState({ isVisible: !isVisible });
    }

    render() {
      const {
        state: { isVisible },
        props: { elementName },
      } = this;
      return (
        <>
          <Container isVisible={isVisible}>
            <WrappedComponent {...this.props} />
          </Container>
          <VisibilityBar>
            {!isVisible && <ST1> Click to see {elementName} </ST1>}
            <Button
              type="button"
              onClick={() => {
                this.toggleIsVisible(!isVisible);
              }}
            >
              <img
                src={isVisible ? expandLess : expandMore}
                alt="downward facing error"
              />
            </Button>
          </VisibilityBar>
        </>
      );
    }
  };

VisibiltyToggleWrapper.propTypes = {
  elementName: PropTypes.string,
};

VisibiltyToggleWrapper.defaultProps = {
  elementName: "to toggle",
};

export default VisibiltyToggleWrapper;
