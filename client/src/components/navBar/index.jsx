import React from 'react';
import { useNavigate } from 'react-router-dom';
import GhostButton from '../../components/buttons/ghostButton';
import FilledButton from '../../components/buttons/filledButton';
import style from './index.module.css';

const NavBar = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className={style.mainContainer}>
            <div className={style.container}>
                <div className={style.logo}>
                    <p>TheBlog</p>
                </div>
                <div className={style.menuItems}>
                    <p>Blog</p>
                    <p>Projects</p>
                    <p>About Us</p>
                    <p>Newsletter</p>
                </div>
                <div className={style.containerBtn}>
                    <GhostButton
                        text={'Log in'}
                        color={'black'}
                        cursor={'pointer'}
                        padding={'10px 20px'}
                        fontFamily={'switzer'}
                        fontSize={'small'}
                        onClick={handleLoginClick}
                    />
                    <FilledButton
                        text={'Join Now'}
                        padding={'10px 20px'}
                        borderRadius={'15px'}
                        border={'none'}
                        color={'black'}
                        fontFamily={'switzer'}
                        cursor={'pointer'}
                        onClick={handleRegisterClick}
                    />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default NavBar;
