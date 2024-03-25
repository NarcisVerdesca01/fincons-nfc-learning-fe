import { useEffect, useState } from 'react';
import imgLogo from '../../assets/logoHeader.png';
import './Header.css';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router';
import LoginRegistrationService from '../../services/LoginRegistrationService';
import ButtonProfile from '../profile/ButtonProfile';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("jwt-token");
        console.log("sono appena uscito");
        navigate("/authentication");
        window.location.reload(); // Reload the page to ensure that the old token is removed
    };

    const goToCourses = () => {
        navigate("/courses")
    }
    const goToHomePage = () => {
        navigate("/homePage")
    }
    const goToPageDedicatedCourses = () => {
        navigate("/page_dedicated_courses")
    }
    const goToSettingsTutor = () => {
        navigate("/settings_tutor")
    }
    const goToSettingsAdmin = () => {
        navigate("/settings_admin")
    }
    const goToProfile = () => {
        navigate("/profile")
    }

    const auth = Cookies.get("jwt-token")
    const decodedJwt = jwtDecode(auth!)
    const userEmail = decodedJwt.sub

    const [adminNavBar, setAdminNavBar] = useState<boolean>(false);
    const [tutorNavBar, setTutorNavBar] = useState<boolean>(false);
    const token = Cookies.get("jwt-token");

    useEffect(() => {
        LoginRegistrationService.getUserDetails().then((res) => {
            console.log(res.data.roles[0].name, "get userDetails");
            console.log(res.data.email, "get userDetails");
            if (res.data.roles[0].name === "ROLE_ADMIN") {
                console.log(res.data.roles[0].name, "getUserDetails res.data.roles[0].name");
                setAdminNavBar(true);
            } else if (res.data.roles[0].name === "ROLE_TUTOR") {
                setTutorNavBar(true);
            }
        });

    });

    return (
        <Navbar className={`bodyHeader`}>
            <div className={`firstComponentHeader`}>
                <div className={`containerImageHeader`}>
                    <img src={imgLogo} alt="logo" className={`imageHeader`}/>
                </div>
                <div className={`containerTitleHeader`}>
                    <h4 className={`titleHeader lead`}>NFC E-Learning web site</h4>
                </div>
                <div className={`navbarHeader`}>
                    <div className={`containerNavBarHeader`}>
                        <div className={`containerButtonNavBar`}>
                            <button className={`buttonNavBar`} onClick={goToHomePage}>
                                <p className={`nameButton lead`}>Home Page</p>
                            </button>
                        </div>
                        <div className={`containerButtonNavBar`}>
                            <button className={`buttonNavBar`} onClick={goToCourses}>
                                <p className={`nameButton lead`}>Courses</p>
                            </button>
                        </div>
                        <div className={`containerButtonNavBar`}>
                            <button className={`buttonNavBar`} onClick={goToPageDedicatedCourses}>
                                <p className={`nameButton lead`}>Our courses</p>
                            </button>
                        </div>
                        {tutorNavBar && (
                            <div className={`containerButtonNavBar`}>
                                <button className={`buttonNavBar`} onClick={goToSettingsTutor}>
                                    <p className={`nameButton lead`}>Settings</p>
                                </button>
                            </div>
                        )}
                        {adminNavBar && (
                            <div className={`containerButtonNavBar`}>
                                <button className={`buttonNavBar`} onClick={goToSettingsAdmin}>
                                    <p className={`nameButton lead`}>Settings</p>
                                </button>
                            </div>
                        )}
                        <div className={`containerButtonNavBar`}>
                            <button className={`buttonNavBar`} onClick={handleLogout}>
                                <p className={`nameButton lead`}>Logout</p>
                            </button>
                        </div>
                        <div className={`containerButtonNavBar`}>
                            {/*<button className={`buttonNavBar`} onClick={goToProfile}>
                                <p className={`nameButton`}>Profile</p>
                        </button>*/}
                            <p className={`nameButton`}><ButtonProfile /></p>
                        </div>
                    </div>

                </div>
            </div>
        </Navbar>
    );
};

export default Header;