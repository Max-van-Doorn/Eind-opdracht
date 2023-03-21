import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import './Profile.css'

function Profile() {
    const [profileData, setProfileData] = useState({});
    const { user } = useContext(AuthContext);
    const { isAuth, logout } = useContext(AuthContext);

    useEffect(() => {
        async function fetchProfileData() {
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
            <h1 className="profile-title">Profielpagina</h1>
            {Object.keys(profileData).length > 0 &&
                <section>
                    <h1 className="profile-text" >Hallo "{profileData.username}" ! Je bent ingelogd :)</h1>
                </section>
            }
            {Object.keys(profileData).length > 0 &&
                <section>
                    <h2 className="registreren-fieldset">Gegevens: </h2>
                    <p><strong>Username:</strong> {profileData.username}</p>
                    <p><strong>Email:</strong> {profileData.email}</p>
                </section>
            }
            {Object.keys(profileData).length > 0 &&
                <div className="logout-button-container">
                    <button className="registreren-button"
                            type="button"
                            onClick={logout}
                    >
                        Logout
                    </button>
                </div>
            }
        </div>
            </>
    )
}

export default Profile