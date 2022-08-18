import { render, screen } from "@testing-library/react";
import { getData } from "./services";
import UserList from "./UserList";

jest.mock("./services", () => ({
  getData: jest.fn(),
}));

const responseData = [
  {
    login: {
      uuid: "06d6db82-f326-407d-b181-8bc96427ce15",
    },
    name: {
      first: "Andrzej",
      last: "Kopytko",
      title: "Mr",
    },
    location: {
      city: "gdansk",
      street: {
        name: "osmiornicza",
      },
    },
    registered: {
      date: "2018-01-05T02:05:13.687Z",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/58.jpg",
    },
  },
  {
    login: {
      uuid: "06d2d482-f326-664d-b121-8kf8227ce15",
    },
    name: {
      first: "Rafal",
      last: "Pierzyna",
      title: "Mrs",
    },
    location: {
      city: "osiel",
      street: {
        name: "dziwna",
      },
    },
    registered: {
      date: "2018-01-05T02:05:13.687Z",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/58.jpg",
    },
  },
  {
    login: {
      uuid: "06d6db82-f326-407d-b181-8bc96427ce15",
    },
    name: {
      first: "Pawel",
      last: "Kopytko",
      title: "Mr",
    },
    location: {
      city: "szczyrk",
      street: {
        name: "obrotowa",
      },
    },
    registered: {
      date: "2018-01-05T02:05:13.687Z",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/58.jpg",
    },
  },
];

describe("UserList tests", () => {
  const renderComp = () => render(<UserList />);

  it(`should display ${responseData.length} results`, async () => {
    getData.mockResolvedValue(responseData);
    const counterVal = screen.findAllByTestId("user-element");

    renderComp();

    expect(await counterVal).toHaveLength(3);
  });

  it("should display some users data", async () => {
    getData.mockResolvedValue(responseData);

    renderComp();

    expect(await screen.findByText("Andrzej")).toBeInTheDocument();
    expect(await screen.findByText("gdansk")).toBeInTheDocument();
    expect(await screen.findByText("dziwna")).toBeInTheDocument();
    expect(
      await screen.findByAltText(`profile pic of ${responseData[0].name.first}`)
    ).toHaveAttribute("src", "https://randomuser.me/api/portraits/men/58.jpg");
  });

  it("should display info that list is empty", async () => {
    getData.mockResolvedValue([]);

    renderComp();

    expect(await screen.findByText("User list is empty")).toBeInTheDocument();
  });
});
