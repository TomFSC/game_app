import React from "react"
import styled from "styled-components"
import theme from "../../../utils/theme"

function Profile({ user }: any) {
  return (
    <ProfileStyled>
      <div className="profile-infos">
        <div className="pseudo">
          Hello <span>{user}</span>
        </div>
        <p>logout</p>
      </div>
      <div className="profile-picture">
        <img src="#" alt="" />
      </div>
    </ProfileStyled>
  )
}

const { colors, fonts, spacing, dimensions, radius } = theme

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: ${dimensions.percent.max};
  width: ${dimensions.percent.max};

  .profile-infos {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    height: ${dimensions.pixels.l};
    justify-content: space-between;
    padding: 0 ${spacing.xs};
    color: ${colors.lapisLazuli};
    .pseudo {
      font-size: ${fonts.size.P2};
      span {
        text-transform: uppercase;
      }
    }
    p {
      align-self: flex-end;
      font-size: ${fonts.size.P0};
      color: ${colors.glaucous};
      text-decoration: underline;
      &:hover {
        cursor: pointer;
        font-weight: bold;
      }
    }
  }

  .profile-picture {
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${dimensions.pixels.l};
    img {
      height: ${dimensions.pixels.l};
      width: ${dimensions.pixels.l};
      border-radius: ${radius.circle};
      background-color: aquamarine;
    }
  }
`

export default Profile
