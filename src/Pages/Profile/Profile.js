import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import './Profile.css'

function Profile() {
    const [profileData, setProfileData] = useState({});
    const {user} = useContext(AuthContext);
    const { isAuth, logout } = useContext(AuthContext);

    useEffect(() => {
        // we halen de pagina-content op in de mounting-cycle
        async function fetchProfileData() {
            // haal de token uit de Local Storage om in het GET-request te bewijzen dat we geauthoriseerd zijn
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get(' https://frontend-educational-backend.herokuapp.com/api/user', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    "id": 3,
                    "username": "piet",
                    "email": "piet@novi.nl",
                    "info": "Ik woon in Utrecht",
                    "roles": [
                    "ROLE_USER"
                ]

            },
                });
                setProfileData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchProfileData();
    }, [])

    return (
        <>
        <div className="profile-container">
        <h1 className="profile-text" >Welkom! Je bent nu ingelogd :)</h1>
            <div className="logout-button-container">
                <button className="logout-button"
                        type="button"
                        onClick={logout}
                >
                    Logout
                </button>
            </div>
        </div>
        <h1>Profielpagina</h1>
    <section>
        <h2>Gegevens</h2>

        {/*Waarom werkt dit niet???*/}

        {/*<p><strong>Gebruikersnaam:</strong> {user.username}</p>*/}
        {/*<p><strong>Email:</strong> {user.email}</p>*/}

    </section>
            </>
    )
}

export default Profile