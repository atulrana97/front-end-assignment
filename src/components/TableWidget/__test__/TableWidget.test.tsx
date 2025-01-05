import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import TableWidget from "../TableWidget";

const mockProps: any = {
  formatListData: [
    {
      "s.no": 0,
      "amt.pledged": 15823,
      blurb:
        "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
      by: "Museum of Science Fiction",
      country: "US",
      currency: "usd",
      "end.time": "2016-11-01T23:59:00-04:00",
      location: "Washington, DC",
      "percentage.funded": 186,
      "num.backers": "219382",
      state: "DC",
      title: "Catalysts, Explorers & Secret Keepers: Women of SF",
      type: "Town",
      url: "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery",
    },
    {
      "s.no": 1,
      "amt.pledged": 15823,
      blurb:
        "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
      by: "Museum of Science Fiction",
      country: "US",
      currency: "usd",
      "end.time": "2016-11-01T23:59:00-04:00",
      location: "Washington, DC",
      "percentage.funded": 186,
      "num.backers": "219382",
      state: "DC",
      title: "Catalysts, Explorers & Secret Keepers: Women of SF",
      type: "Town",
      url: "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery",
    },
    {
      "s.no": 2,
      "amt.pledged": 15823,
      blurb:
        "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
      by: "Museum of Science Fiction",
      country: "US",
      currency: "usd",
      "end.time": "2016-11-01T23:59:00-04:00",
      location: "Washington, DC",
      "percentage.funded": 186,
      "num.backers": "219382",
      state: "DC",
      title: "Catalysts, Explorers & Secret Keepers: Women of SF",
      type: "Town",
      url: "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery",
    },
    {
      "s.no": 3,
      "amt.pledged": 15823,
      blurb:
        "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
      by: "Museum of Science Fiction",
      country: "US",
      currency: "usd",
      "end.time": "2016-11-01T23:59:00-04:00",
      location: "Washington, DC",
      "percentage.funded": 186,
      "num.backers": "219382",
      state: "DC",
      title: "Catalysts, Explorers & Secret Keepers: Women of SF",
      type: "Town",
      url: "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery",
    },
    {
      "s.no": 4,
      "amt.pledged": 15823,
      blurb:
        "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
      by: "Museum of Science Fiction",
      country: "US",
      currency: "usd",
      "end.time": "2016-11-01T23:59:00-04:00",
      location: "Washington, DC",
      "percentage.funded": 186,
      "num.backers": "219382",
      state: "DC",
      title: "Catalysts, Explorers & Secret Keepers: Women of SF",
      type: "Town",
      url: "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery",
    },
    {
      "s.no": 5,
      "amt.pledged": 15823,
      blurb:
        "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
      by: "Museum of Science Fiction",
      country: "US",
      currency: "usd",
      "end.time": "2016-11-01T23:59:00-04:00",
      location: "Washington, DC",
      "percentage.funded": 186,
      "num.backers": "219382",
      state: "DC",
      title: "Catalysts, Explorers & Secret Keepers: Women of SF",
      type: "Town",
      url: "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery",
    },
  ],
};

const mockPropsFailure: any = {
  formatListData: [],
};

describe("<TableWidget /> Success Case", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<TableWidget {...mockProps} />);
  });

  it("should check if table component is rendering properly", () => {
    const element = screen.queryByTestId("table-component");
    expect(element).toBeInTheDocument();
  });

  it("should check is table header is rendering properly", () => {
    const element = screen.getByText("Saas Project");
    expect(element).toBeInTheDocument();
  });
});

describe("<TableWidget /> Failure cases", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<TableWidget {...mockPropsFailure} />);
  });

  it("should check if table component is rendering properly", () => {
    const element = screen.queryByTestId("table-component");
    expect(element).toBeInTheDocument();
  });

  it("should check if failure condition when no data is available", () => {
    const element = screen.getByText("No Data Available");
    expect(element).toBeInTheDocument();
  });
});
