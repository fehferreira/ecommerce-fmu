import React from 'react';
import { ImgIcon, ProfileButton, CartButton, ProfileFunctionContainer } from './style';
import userPic from '../../assets/images/userPic.png';

const ProfileMenu: React.FC = () => {
    return (
        <ProfileFunctionContainer>
            <ProfileButton>Sign in</ProfileButton>
            <CartButton>My cart</CartButton>
            <ImgIcon src={userPic}/>
        </ProfileFunctionContainer>
    );
};

export default ProfileMenu;
