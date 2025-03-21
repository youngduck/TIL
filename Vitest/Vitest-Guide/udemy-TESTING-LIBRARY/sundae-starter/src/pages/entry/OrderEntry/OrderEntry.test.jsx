import { server } from "../../../mocks/server";
import { http, HttpResponse } from "msw";
import { screen, render } from "@testing-library/react";
import OrderEntry from "./OrderEntry";

test.only("scoops and toppoing routes 에러 처리", async () => {
  server.resetHandlers(
    http.get("http://localhost:3030/scoops", () => {
      return new HttpResponse(null, { status: 500 });
    }),
    http.get("http://localhost:3030/toppings", () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<OrderEntry />);

  const alerts = await screen.findAllByRole("alert");

  expect(alerts).toHaveLength(2);
});

test.skip("이거는스킵됨", () => {
  expect(1).toBe(1);
});

test("이것만실행함", () => {
  expect(2).toBe(2);
});
