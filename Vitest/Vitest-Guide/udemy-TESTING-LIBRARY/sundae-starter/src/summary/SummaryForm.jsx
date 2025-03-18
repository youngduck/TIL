/**
 * 작성자: KYD
 * 기능:
 * 프로세스 설명: 프로세스 복잡시 노션링크 첨부권장
 */
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const SummaryForm = () => {
  //SECTION HOOK호출 영역
  const [tcChecked, setTcChecked] = useState(false);
  //!SECTION HOOK호출 영역

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>no ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  //SECTION 상태값 영역
  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  //!SECTION 상태값 영역

  //SECTION 메서드 영역

  //!SECTION 메서드 영역

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
        />

        <Button variant="primary" type="submit" disabled={!tcChecked}>
          Confirm Order
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SummaryForm;
