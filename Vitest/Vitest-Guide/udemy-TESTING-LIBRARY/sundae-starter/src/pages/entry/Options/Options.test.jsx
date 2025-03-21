import { render, screen } from "@testing-library/react";
import Options from "./Options";

test("모킹서버로부터 각각의 스쿱 옵션에 대한 이미지를 표시 여부", async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(3);

  const altText = scoopImages.map((item) => item.alt);

  expect(altText).toEqual([
    "Mint chip scoop",
    "Vanilla scoop",
    "Chocolate scoop",
  ]);
});

test("모킹서버에서 가져온 토핑 이미지 표시여부", async () => {
  render(<Options optionType="toppings" />);

  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);
});
