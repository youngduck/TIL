import React, { useState } from "react";
import PropTypes from "prop-types";
import { ko } from "date-fns/locale";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as S from "./style";

export default function Dtpk1001({ dateFormat, autoFocus }) {
  const [meetDate, setMeetDate] = useState(new Date());
  return (
    <>
      <S.DatePickerContainer>
        {/* @ts-ignore */}
        <S.StyledDatePicker
          locale={ko}
          dateFormat={dateFormat}
          dateFormatCalendar="yyyy년 MM월"
          selected={meetDate}
          closeOnScroll={true}
          onChange={(date: Date | null) => {
            if (date) setMeetDate(date);
          }}
          autoFocus={autoFocus}
        />
      </S.DatePickerContainer>
    </>
  );
}
