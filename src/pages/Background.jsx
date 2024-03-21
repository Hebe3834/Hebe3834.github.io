import "../styles/background.scss";

export default function Background() {
    return (
        <div className="background">
            <svg className="blob0" xmlns="http://www.w3.org/2000/svg" width="404" height="512" viewBox="0 0 404 512" fill="none">
                <path d="M100.269 343.519L0 0H301.642L266.966 108.169L404 309.429L327.127 512L100.269 343.519Z" fill="#6F6480"/>
            </svg>
            <svg className="blob1" xmlns="http://www.w3.org/2000/svg" width="590" height="511" viewBox="0 0 590 511" fill="none">
                <path d="M0 206.851L30.8497 411.102L118.386 511H590V199.795L348.216 25.2529L222.889 0L212.092 226.162L0 206.851Z" fill="#6F6480"/>
            </svg>
            {/* <svg className="blob0" xmlns="http://www.w3.org/2000/svg" width="484" height="199" viewBox="0 0 484 199" fill="none">
                <path d="M120 133.212L0 0H361L319.5 41.9464L483.5 119.992L391.5 198.546L120 133.212Z" fill="#6F6480"/>
            </svg>
            <svg className="blob1" xmlns="http://www.w3.org/2000/svg" width="765" height="350" viewBox="0 0 765 350" fill="none">
                <path d="M0 142.285L40 282.106L153.5 350.491H765V137.455L451.5 17.9711L289 0.684082L275 155.504L0 142.285Z" fill="#6F6480"/>
            </svg> */}
            <div className="blur"></div>
        </div>
    );
}