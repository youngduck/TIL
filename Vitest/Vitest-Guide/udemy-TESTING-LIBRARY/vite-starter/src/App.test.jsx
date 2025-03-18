import { render, screen } from "@testing-library/react";
import App from "./App";
import { logRoles } from "@testing-library/dom";

test("버튼이 올바른 색상으로 렌더링 되는지", () => {
  const { container } = render(<App />);
  logRoles(container);

  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");
});

test("버튼이 올바른 문구로 렌더링 되는지", () => {});
test("버튼 클릭후 올바른 색상으로 렌더링 되는지", () => {});
test("버튼이 클릭후 올바른 문구로 렌더링 되는지", () => {});
