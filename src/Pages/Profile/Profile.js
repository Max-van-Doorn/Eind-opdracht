import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import './Profile.css'
import myGif from '../../Assets/empty-shelves-john-travolta.gif'

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
                {Object.keys(profileData) >= 0 &&
                    <h1 className="profile-title">Profielpagina</h1>
                }
                {Object.keys(profileData) >= 0 &&
                    <h3 className="Login-required"> Whoops! Je bent niet ingelogd. Log in om gegevens te zien!</h3>
                }
                {Object.keys(profileData) >= 0 &&
                    <img className="empty-gif" src={myGif} alt="gif"/>
                }
                {Object.keys(profileData).length > 0 &&
                    <h1 className="profile-title">Profielpagina</h1>
                }

            {Object.keys(profileData).length > 0 &&
                <section>
                    <h2 className="profile-text" >Hallo "{profileData.username}" ! Je bent ingelogd :)</h2>
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