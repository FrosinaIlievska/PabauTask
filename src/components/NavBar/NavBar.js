import React, { useRef } from 'react';
import { gql, useQuery } from '@apollo/client';
// components
import Error from './../Error';
import Loader from './../Loader';
import TopMenu from './../TopMenu';
// hooks
import useNavigation from './../../hooks/useNavigation';
// style
import './style.scss';

const GET_ROCKETS_NAMES = gql`
    {
        rockets {
            id
            name
        }
    }
`;

const NavBar = () => {
    const navRef = useRef(null);
    const { setIsMenuOpen } = useNavigation(navRef);

    const { data, loading, error } = useQuery(GET_ROCKETS_NAMES);

    if (loading) return <Loader />;
    if (error) return <Error error={error} />;

    return (
        <div className="container-fluid" ref={navRef}>
            <div className="row">
                <TopMenu
                    toggleMenu={setIsMenuOpen}
                    rockets={data.rockets}
                />
            </div>
        </div>
    );
};

export default NavBar;
