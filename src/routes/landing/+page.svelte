<style>
    @font-face {
        font-family: "Montserrat";
        src: url("/fonts/Montserrat-Regular.ttf");
        font-display: swap;
    }
    @font-face {
        font-family: "Oswald";
        src: url("/fonts/Oswald-Regular.ttf");
        font-display: swap;
    }
    * {
        font-family: "Montserrat";
    }
    a {
        color: #000;
        text-decoration: none;
    }
    h1 {
        font-family: "Oswald";
        text-transform: uppercase;
    }
    .nav-link {
        color: #fff !important;
    }
    .nav-link:hover {
        color: #fff;
    }
    a:hover {
        color: #000;
        text-decoration: underline;
    }
    #page {
        padding: 0;
    }
    .page-content {
        width: 100%;
        max-width: 80vw;
        margin: 0 auto;
    }
    .logo {
        max-width: 5rem;
    }
    .logo-title {
        font-family: "Oswald";
        letter-spacing: 9.6px;
        font-weight: 700;
        color: #fff;
        margin-left: 1.5rem;
    }
    .nav-item {
        margin: 0 1rem 0 1rem;
    }
    .landing-nav {
        background-image: url("/images/header3.png");
    }
    .hamburger,
    .hamburger::before,
    .hamburger::after {
        content: "";
        display: block;
        background: #fff;
        width: 1.5rem;
        height: 0.25rem;
    }
    .hamburger::before {
        transform: translateY(-0.5rem);
        transition: all 0.5s;
    }
    .hamburger::after {
        transform: translateY(-0.1rem);
        transition: all 0.5s;
    }
    .hamburger {
        background: none;
        transition: all 0.5s;
        z-index: 2;
        position: relative;
    }
    input[type="checkbox"] {
        display: none;
    }
    input[type="checkbox"]:checked ~ .hamburger::before {
        transform: rotate(45deg) translateX(0rem) translateY(-0rem);
    }
    input[type="checkbox"]:checked ~ .hamburger::after {
        transform: rotate(-45deg) translateX(0.15rem) translateY(-0.2rem);
    }
    input[type="checkbox"]:checked ~ .hamburger {
        transform: translateY(-0.1rem);
    }
    .title {
        color: #02498B;
        font-weight: 800;
        letter-spacing: 2px;
    }
    .landing-form button {
        background-color: #02498B;
        font-family: "Oswald";
        border-radius: 50px;
        border: none;
        padding: .5rem 2rem;
        text-transform: uppercase;
    }
    .landing-content {
        width: 100%;
        max-width: 60vw;
        margin: 0 auto;
        text-align: center;
    }
    .landing-content iframe {
        margin: 2rem 0;
        height: 36vw;
        width: 64vw;
    }
    .landing-form {
        width: 100%;
        max-width: 40vw;
        margin: 0 auto;
        margin-bottom: 10rem;
    }
    
    @media screen and (max-width: 992px) {
        .landing-form {
            max-width: 60vw;
        }
    }
    @media screen and (max-width: 768px) {
        .navbar-nav {
            flex-direction: row;
            flex-wrap: wrap;
        }
        .navbar-collapse {
            justify-content: center !important;
        }
    }
    @media screen and (min-width: 768px) {
        .menu-toggle {
            opacity: 0;
            display: none;
        }
    }
</style>

<div class="container-fluid" id="page">
    <div class="landing-content">
        <h1 class="title mt-3">Have you seen what Mitify+ does?</h1>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4d04FytZBQ0?si=yb2MjT9v06Ry5fGW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>Fake news, disinformation and propaganda are the most pressing issues of our time that affect both citizens and corporations.</p>
        <p>Compounding this threat is the democratisation of powerful AI software and the pervasive nature of social media platforms to disseminate disinformation.</p>
        <p>We are building innovative solutions to help news consumers and organisations mitigate against the harmful effects of disinformation and propaganda in a seamless and elegant way.</p>
        <p>We are conducting qualitative analysis to gather insights into how news consumers and organisations consume content.</p>
        <p>To be included in our survey please fill out your details below.</p>
        <p>Together, let's stem the flow of disinformation!</p>
    </div>
    <div class="landing-form">
        <h1 class="title mb-4">Join Us</h1>
        <form name="landing-form" method="POST" data-netlify="true" >
            <div class="form-group mb-4">
                <input required type="text" class="form-control" id="fname" placeholder="First Name" name="fname">
            </div>
            <div class="form-group mb-4">
                <input required type="text" class="form-control" id="lname" placeholder="Last Name" name="lname">
            </div>
            <div class="form-group mb-4">
                <input required type="text" class="form-control" id="company" placeholder="Company" name="company">
            </div>
            <div class="form-group mb-4">
                <input required type="text" class="form-control" id="position" placeholder="Position" name="position">
            </div>
            <button type="submit" class="btn btn-primary mt-2">Submit</button>
        </form>
    </div>
</div>