import moment from "moment";
import styled from "styled-components";

const UserWrapper = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 6px 24px;

  color: #fff;
  a {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    color: #fff;
    .infos {
      color: #fff;
    }
  }
`;

const User = ({ userData }) => {
  const {
    name,
    location,
    email,
    registered: { date },
    picture,
  } = userData;

  const formattedDate = moment(date).format("dddd, MMMM Do YYYY");

  return (
    <UserWrapper data-testid="user-element">
      <div className="infos">
        <div>{name?.first ?? "No name"}</div>
        <div>{name?.last ?? "No surname"}</div>
        <div>{location?.street.name ?? "no adress"}</div>
        <div>{location?.city}</div>
        <div>{email}</div>
        <div>{formattedDate}</div>
      </div>
      <div>
        <img src={picture.large} alt={`profile pic of ${name?.first}`} />
      </div>
    </UserWrapper>
  );
};

export default User;
