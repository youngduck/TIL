import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

export const Header = styled.div`
  color: red;
`;

export const DatePickerContainer = styled.div`
  width: "15rem";
  border: "0.1rem solid #d1d1d1";
  height: 4rem;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;

  .react-datepicker {
    border: 0.1rem solid #d1d1d1;
    width: 23.9rem;
    height: auto;
    border-radius: 0 0 0.4rem 0.4rem;
    top: 0rem;

    left: "2.1rem";

    .react-datepicker__header {
      background-color: transparent;
      width: 23.9rem;
      padding-top: 1.2rem;
      border: none;
    }
    .react-datepicker__week {
      margin: 0.5rem 0;
    }

    .react-datepicker__current-month {
      font-size: 1.8rem;
      font-weight: 300;
      font-family: "esamanru";
    }

    .react-datepicker__day-name {
      font-size: 1.3rem !important;
      width: 2.45rem;
      line-height: 2.6rem;
      height: 2.45rem;
      font-family: "esamanru";
      font-weight: 300;
    }

    .react-datepicker__day {
      color: black;
      font-size: 1.3rem !important;
      line-height: 2.6rem;
      width: 2.45rem;
      height: 2.45rem;
      font-family: "esamanru";
      font-weight: 300;
      font-family: "esamanru";
    }
    .react-datepicker__day--keyboard-selected {
      background-color: white;
      color: black !important;
    }

    .react-datepicker__day--range-end {
      background-color: #f6ad55;
      color: black !important;
    }

    .react-datepicker__day--in-selecting-range {
      background-color: #f6ad55;
      color: black !important;
    }

    .react-datepicker__day--range-start {
      color: black !important;
    }

    .react-datepicker__day--in-range {
      background-color: #f6ad55;
      color: black !important;
    }

    .react-datepicker__triangle {
      display: none;
      &:before {
        top: 3rem;
      }
    }

    .react-datepicker__day--selected {
      background-color: #ec6800;
      color: white;
    }
    .react-datepicker__triangle::before {
      display: none;
    }
    .react-datepicker__triangle::after {
      display: none;
    }

    .react-datepicker__navigation-icon--next {
      &::before {
        border-color: #ccc;
        border-style: solid;
        border-width: 0.3rem 0.3rem 0 0;
        content: "";
        display: block;
        height: 0.5rem;
        position: absolute;
        top: 1rem;
        width: 0.5rem;
      }
    }
    .react-datepicker__navigation-icon--previous {
      &::before {
        border-color: #ccc;
        border-style: solid;
        border-width: 0.3rem 0.3rem 0 0;
        content: "";
        display: block;
        height: 0.5rem;
        position: absolute;
        top: 1rem;
        width: 0.5rem;
      }
    }

    .react-datepicker__day--outside-month {
      color: #a8a8a8 !important;
      pointer-events: none;
    }
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  display: block;
  height: 4rem;
  border: none;
  font-size: 1.8rem;
  padding-left: 0.7rem;
  background-color: transparent;
  font-weight: 500;
`;

export const TestA = styled(DatePicker)`
  color: red;
`;
