<script>
    /*const navLinks = document.querySelectorAll('.nav-item');
    const menuToggle = document.getElementById('collapseNav');
    const checkbox = document.getElementById('check');
    const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            bsCollapse.toggle();
            checkbox.checked = false;
        });
    });*/
    import { onMount } from 'svelte';
    import { slugify } from '$lib/utils';
    import { getPosts } from '$lib/blogServices';
    
    let posts = [];

    onMount(async () => {
        posts = await getPosts();
        console.log(posts);
    });
</script>

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
    h1, h3 {
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
    .no-webp .header, .header {
        max-height: 85vh;
        background-image: url("/images/header3.png");
        background-size: cover;
        background-position: center;
    }
    .webp .header {
        max-height: 85vh;
        background-image: url("/images/webp/header.webp");
        background-size: cover;
        background-position: center;
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
    .header-content {
        padding-top: 8rem;
    }
    .header-content h1 {
        line-height: 150%;
        color: #fff;
        font-weight: 700;
        font-size: 3rem;
    }
    .header-content p {
        line-height: 150%;
        color: #fff;
        font-size: 1.6rem;
        width: 80%;
    }
    .header-content button {
        background-color: #fff;
        font-family: "Oswald";
        border-radius: 50px;
        border: none;
        padding: .8rem 2rem;
        text-transform: uppercase;
    }
    .header-content button:hover {
        background-color: #e5ecf3;
    }
    .mockup-container {
        text-align: right;
    }
    #mockup {
        height: 80%;
    }
    .title {
        color: #02498B;
        font-weight: 800;
        letter-spacing: 2px;
    }
    .subtitle {
        text-transform: capitalize;
        letter-spacing: 2px;
        font-weight: 700;
    }
    #about p {
        width: 50%;
        line-height: 150%; /* 36px */
        letter-spacing: 2.4px;
        font-size: 1.2rem;
        margin-top: 2rem;
    }
    .services, .valprop {
        text-align: center;
        margin-top: 4rem;
    }
    .services img, .valprop img {
        height: 100px;
        width: 100px;
        margin: 2rem 0;
    }
    .services h3 {
        font-weight: 700;
        font-size: calc(1.275rem + .3vw);
    }
    .services p {
        width: 80%;
        margin: 0 auto;
        letter-spacing: 2px;
        margin-top: 1rem;
    }
    .valprop p {
        font-family: "Oswald";
        font-weight: 700;
        width: 60%;
        margin: 0 auto;
    }
    .mission {
        background-color: #F1F1F1;
        margin-top: 5rem;
        padding: 1rem;
    }
    .mission-container {
        width: 80%;
        margin: 0 auto;
    }
    .mission-content {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
    }
    #mission-img {
        width: 100%;
    }
    .mission p {
        line-height: 175%; /* 63px */
        letter-spacing: 2px;
        font-size: 1.6rem;
        width: 90%;
    }
    .state {
        width: 80%;
        margin: 2rem auto;
    }
    .state p, .state li {
        font-size: 1.2rem;
    }
    .solutions {
        margin-top: 5rem;
    }
    #disinf img {
        width: 100%;
        margin: 2rem 0;
    }
    .img-detection {
        background-color: #333;
        margin-top: 5rem;
        padding: 3rem;
        text-align: center;
    }
    .img-detection img {
        width: 60%;
        margin: 2rem 0;
        box-shadow: 0px 0px 45px 17px rgba(0, 0, 0, 0.25);
    }
    .img-detection p, .img-detection h3 {
        color: #fff;
    }
    .img-detection p {
        width: 80%;
        margin: 1rem auto;
    }
    .style-wrapper-4 {
        position: absolute;
        right: 0;
        z-index: -1;
    }
    .contact {
        padding-top: 10rem;
        margin-bottom: 10rem;
    }
    .contact form {
        width: 70%;
    }
    .contact button {
        background-color: #02498B;
        font-family: "Oswald";
        border-radius: 50px;
        border: none;
        padding: .5rem 2rem;
        text-transform: uppercase;
    }
    .posts-wrapper {
        width: 75vw;
        margin: 0 auto;
    }
    .posts-wrapper a:hover {
        text-decoration: none;
    }
    .post {
        padding: 0;
        overflow: hidden;
        transition: .3s ease-in-out;
    }
    .post img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
    .post-content {
        padding-top: 1rem;
    }
    .post-content a {
        font-family: "Oswald";
        font-weight: bold;
    }
    .post-date {
        color: #757575;
    }
    /* Animations */

    .animate-reveal-y {
        opacity: 0;
        -webkit-animation: revealY 1.8s cubic-bezier(0, 1, 0.5, 1) 1 normal forwards;
        -moz-animation: revealY 1.8s ease-in 1 normal forwards;
        -o-animation: revealY 1.8s cubic-bezier(0, 1, 0.5, 1) 1 normal forwards;
        animation: revealY 1.8s cubic-bezier(0, 1, 0.5, 1) 1 normal forwards;
        -webkit-animation-delay: 200ms;
        -moz-animation-delay: 200ms;
        -o-animation-delay: 200ms;
        animation-delay: 200ms;
    }
    .delay {
        -webkit-animation-delay: 500ms;
        -moz-animation-delay: 500ms;
        -o-animation-delay: 500ms;
        animation-delay: 500ms;
    }
    @-webkit-keyframes revealY {
        0% {
        opacity: 0;
        -webkit-transform: translateY(100%);
            -moz-transform: translateY(100%);
            -o-transform: translateY(100%);
                transform: translateY(100%);
        }
        100% {
        opacity: 1;
        -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -o-transform: translateY(0);
                transform: translateY(0);
        }
    }
    @-moz-keyframes revealY {
        0% {
        opacity: 0;
        -webkit-transform: translateY(100%);
            -moz-transform: translateY(100%);
            -o-transform: translateY(100%);
                transform: translateY(100%);
        }
        100% {
        opacity: 1;
        -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -o-transform: translateY(0);
                transform: translateY(0);
        }
    }
    @-o-keyframes revealY {
        0% {
        opacity: 0;
        -webkit-transform: translateY(100%);
            -moz-transform: translateY(100%);
            -o-transform: translateY(100%);
                transform: translateY(100%);
        }
        100% {
        opacity: 1;
        -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -o-transform: translateY(0);
                transform: translateY(0);
        }
    }
    @keyframes revealY {
        0% {
        opacity: 0;
        -webkit-transform: translateY(100%);
            -moz-transform: translateY(100%);
            -o-transform: translateY(100%);
                transform: translateY(100%);
        }
        100% {
        opacity: 1;
        -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -o-transform: translateY(0);
                transform: translateY(0);
        }
    }
    
    /* Media Queries */
    @media screen and (max-width: 1172px) {
        .header-content p {
            font-size: 1.2rem;
        }
        .header-content h1 {
            font-size: 2.8rem;
        }
    }
    @media screen and (max-width: 992px) {
        #mockup {
            height: 60%;
        }
        .mission {
            text-align: center;
        }
        .mission p {
            font-size: 1.4rem;
            width: 100%;
        }
        #mission-img {
            width: 80%;
        }
    }
    @media screen  and (max-width: 800px) {
        .mockup-container {
            text-align: center;
            margin-top: 3rem;
        }
        #mockup {
            height: 50%;
        }
        #about p {
            width: 100%;
        }
        #about {
            margin-top: 32rem;
        }
        .img-detection img {
            width: 100%;
            margin-bottom: 1.5rem;
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
    @media screen and (max-width: 576px) {
        .header-content {
            padding-top: 3rem;
        }
        #about p {
            font-size: 1rem;
        }
        .contact form {
            width: 100%;
        }
    }
    @media screen and (max-width: 496px) {
        .header-content p {
            width: 100%;
        }
        .header-content h1 {
            font-size: 2.2rem;
        }
        #about {
            margin-top: 28rem;
        }
        .img-detection p {
            width: 100%;
        }
    }
    @media screen and (max-width: 425px) {
        #about {
            margin-top: 28rem;
        }
        .header-content h1 {
            font-size: 1.8rem;
        }
        .header-content p {
            font-size: 1.1rem;
        }
        .logo {
            max-width: 4rem;
        }
        .logo-title {
            margin-left: 0;
        }
        .mission p {
            font-size: 1.2rem;
        }
        .valprop p {
            width: 100%;
        }
        .services img, .valprop img {
            height: 80px;
            width: 80px;
        }
    }
    @media screen and (min-width: 768px) {
        .menu-toggle {
            opacity: 0;
            display: none;
        }
    }
    @media screen and (max-height: 768px) {
        .no-webp .header, .webp .header {
            max-height: 130vh;
        }
        #about {
            margin-top: 18rem;
        }
    }
    @media screen and (max-height: 635px) {
        .no-webp .header, .webp .header {
            max-height: 150vh;
        }
    }
    @media screen and (max-height: 548px) {
        .no-webp .header, .webp .header {
            max-height: 180vh;
        }
    }
    @media screen and (max-height: 420px) {
        #mockup {
            height: 30%;
        }
    }
</style>

<div class="container-fluid" id="page">
    <div class="header">
        <div class="nav-wrapper" id="top">
            <nav class="navbar navbar-expand-md page-content" id="banner">
                <a href="/">
                    <img src="/images/icon.png" alt="Mitify+ Logo" class="logo"/>
                </a>
                <h1 class="logo-title">MITIFY+</h1>
        
                <div class=menu-toggle>
                    <label for="check" onclick="checkCheck()">
                        <input type="checkbox" id="check" data-toggle="collapse" data-target="#collapseNav">
                        <div class="hamburger"></div>
                    </label>
                </div>
        
                <div class="collapse navbar-collapse justify-content-end" id="collapseNav">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="/blog">Blog</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#solutions">Solutions</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="header-content page-content row">
            <div class="col-lg-6 animate-reveal-y">
                <h1>We are on the cusp of a disinformation epidemic</h1>
                <p class="my-4">With so much fake news, propaganda, and disinformation people need access to quality content from trusted sources.</p>
                <a href="#solutions"><button>Disover our Solution</button></a>
            </div>
            <div class="col-lg-6 mockup-container animate-reveal-y delay">
                <picture>
                    <source type="image/webp" srcset="/images/webp/mockup.webp">
                    <source type="image/png" srcset="/images/mockup.png">
                    <img src="/images/mockup.png" alt="Phone Mockup" id="mockup">
                </picture>
            </div>
        </div>
    </div>
    <div class="page-content mt-5">
        <div id="about">
            <h1 class="title animate-reveal-y delay">What We Do</h1>
            <p>Mitify+ is a disinformation detection and threat intelligence platform that empowers news consumers to break out of echo chambers by providing them with disinformation and bias-free content, which then helps them make better sense of the world around them.</p>
        </div>
        <div class="services row">
            <div class="col-md-4">
                <picture>
                    <source type="image/webp" srcset="/images/webp/dd.webp">
                    <source type="image/png" srcset="/images/dd.png">
                    <img src="/images/dd.png" alt="Disinformation Detection">
                </picture>
                <h3>Disinformation Detection</h3>
                <p>Disinformation is the single greatest threat to democracy and presents one of the most pressing challenges of our time! This will only worsen with the acceleration and availability of artificial intelligence.</p>
            </div>
            <div class="col-md-4">
                <picture>
                    <source type="image/webp" srcset="/images/webp/bias.webp">
                    <source type="image/png" srcset="/images/bias.png">
                    <img src="/images/bias.png" alt="Political Bias">
                </picture>
                <h3>Political Bias</h3>
                <p>News bias can create inequitable outcomes for society's most vulnerable people when leveraged by those with power and privilege!</p>
            </div>
            <div class="col-md-4">
                <picture>
                    <source type="image/webp" srcset="/images/webp/echo.webp">
                    <source type="image/png" srcset="/images/echo.png">
                    <img src="/images/echo.png" alt="Anti-Echo">
                </picture>
                <h3>Anti-Echo</h3>
                <p>Digital media has become a battleground of hearts and minds, creating echo chambers that reinforce society's views and prohibit objective opinion.</p>
            </div>
        </div>
    </div>
    <div class="mission">
        <div class="mission-container row">
            <div class="col-lg-6">
                <picture>
                    <source type="image/webp" srcset="/images/webp/mission.webp">
                    <source type="image/png" srcset="/images/mission.png">
                    <img src="/images/mission.png" alt="Our Mission" id="mission-img">
                </picture>
            </div>
            <div class="col-lg-6 mission-content">
                <h1 class="title">Our Mission</h1>
                <p>To empower people and organizations to identify disinformation and mitigate its harmful effects in a seamless and elegant way.</p>
            </div>
        </div>
    </div>
    <div class="state row">
        <h1 class="title">State of Online Media</h1>
        <p>The digitization of media has lowered the barriers of entry to publishing and distribution, whilst algorithms, data and dynamic media have provided tools that increase its potency and addictiveness. This has led society to become increasingly less confident in information sources and more susceptible to influence.</p>
        <div class="col-md-6">
            <h3 class="subtitle">Problems</h3>
            <ol>
                <li>Disinformation and misinformation have increased exponentially</li>
                <li>Media Bias Drives Polarisation</li>
                <li>Platforms Encourage Echo Chambers</li>
            </ol>
        </div>
        <div class="col-md-6">
            <h3 class="subtitle">Solutions</h3>
            <ol>
                <li>Detecting the percentage of disinformation</li>
                <li>Media Bias detection</li>
                <li>Anti-Echo Chambers - Alternative opinion-based content recommendations</li>
            </ol>
        </div>
    </div>
    <div class="page-content">
        <h1 class="title text-center mt-5">Value Propositions</h1>
        <div class="valprop row">
            <div class="col-md-6">
                <div class="row">
                    <div class="col-6">
                        <picture>
                            <source type="image/webp" srcset="/images/webp/target.webp">
                            <source type="image/png" srcset="/images/target.png">
                            <img src="/images/target.png" alt="Target">
                        </picture>
                        <p>Reducing efficacy of polarizing content</p>
                    </div>
                    <div class="col-6">
                        <picture>
                            <source type="image/webp" srcset="/images/webp/check.webp">
                            <source type="image/png" srcset="/images/check.png">
                            <img src="/images/check.png" alt="Check Mark">
                        </picture>
                        <p>Heightens trust in content through labelling</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-6">
                        <picture>
                            <source type="image/webp" srcset="/images/webp/educate.webp">
                            <source type="image/png" srcset="/images/educate.png">
                            <img src="/images/educate.png" alt="Educate">
                        </picture>
                        <p>Educates users as to the political bias of content</p>
                    </div>
                    <div class="col-6">
                        <picture>
                            <source type="image/webp" srcset="/images/webp/balance.webp">
                            <source type="image/png" srcset="/images/balance.png">
                            <img src="/images/balance.png" alt="Balance">
                        </picture>
                        <p>Develops better media literacy among users</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="page-content solutions" id="solutions">
        <h1 class="title">Solutions</h1>
        <div class="row" id="disinf">
            <div class="col-lg-6">
                <h3 class="subtitle">Disinformation Detection</h3>
                <p>Disinformation is the single greatest threat to democracy and presents one of the most pressing challenges of our time! This will only worsen with the acceleration and availability of artificial intelligence.</p>
                <p>Our platform helps identify three key areas of disinformation:</p>
                <picture>
                    <source type="image/webp" srcset="/images/webp/disinf.webp">
                    <source type="image/png" srcset="/images/disinf.png">
                    <img src="/images/disinf.png" alt="Disinformation">
                </picture>
            </div>
            <div class="col-lg-6">
                <picture>
                    <source type="image/webp" srcset="/images/webp/mockup2.webp">
                    <source type="image/png" srcset="/images/mockup2.png">
                    <img src="/images/mockup2.png" alt="Laptop Mockup">
                </picture>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <h3 class="subtitle">Political Bias Detection</h3>
                <p>News bias can create inequitable outcomes for society's most vulnerable people when leveraged by those with power and privilege!</p>
                <p>Our political bias detection solution helps users get a transparent view of the news they consume, in turn enabling healthier news consumption habits and a balanced media diet. We use ML models that predict content bias attributing to the source, and sampling-binning methodology which incorporates factors such as political ideologies, geography, and culture.</p>
            </div>
            <div class="col-lg-6">
                <h3 class="subtitle">Anti-Echo</h3>
                <p>Digital media has become a battleground of hearts and minds, creating echo chambers that reinforce society's views and prohibit objective opinion.</p>
                <p>Our “anti-echo” solution enables the discovery of alternate views and opinions from our content partner relationships.</p>
            </div>
        </div>
    </div>
    <div class="img-detection">
        <h3 class="subtitle">Fake Image Detection</h3>
        <picture>
            <source type="image/webp" srcset="/images/webp/fakeimg2.webp">
            <source type="image/png" srcset="/images/fakeimg2.png">
            <img src="/images/fakeimg2.png" alt="Fake Image Detection Example">
        </picture>
        <p>The use of fake images to spread propaganda by augmenting the past or manipulating the present is as old as photography, but the rise of AI technology has made it easy for anyone with a laptop and an internet connection to create and distribute utra-realistic deep fakes.</p>
        <p>We have built a solution that identifies manipulated objects, checks image authenticity, and verifies political figures to make sure we're serving society with real and trustworthy sources.</p>
    </div>
    <div class="row posts-wrapper mt-5">
        <h1 class="title">Latest Posts</h1>
        {#each [...posts].reverse() as post}
            <div class="col-lg-4">
                <a href="blog/{slugify(post.attributes.title)}">
                    <div class="post mb-4">
                        <img src="http://localhost:1337{ post.attributes.thumbnail.data.attributes.url }" alt="Post Thumbnail">
                        <div class="post-content">
                            <h3>
                                <a href="blog/{slugify(post.attributes.title)}">
                                    {post.attributes.title}
                                </a>
                            </h3>
                            <p>
                                <time class="post-date">
                                    {post.attributes.publishedAt}
                                </time>
                            </p>
                            <p>
                                { post.attributes.description }
                            </p>
                            <p>
                                <a href="blog/{slugify(post.attributes.title)}" style="color:#02498B;">
                                    Read more →
                                </a>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        {/each}
    </div>
    <div class="page-content">
        <div class="style-wrapper-4">
            <picture>
                <source type="image/webp" srcset="/images/webp/m4.webp">
                <source type="image/png" srcset="/images/m4.png">
                <img src="/images/m4.png" alt="">
            </picture>
        </div>
        <div class="contact" id="contact">
            <h1 class="title mb-5">Get In Touch</h1>
            <form name="contact" method="POST" data-netlify="true" >
                <div class="form-group mb-4">
                    <input required type="text" class="form-control" id="name" placeholder="Your Name" name="name">
                </div>
                <div class="form-group mb-4">
                    <input required type="email" class="form-control" id="email" placeholder="Your Email" name="email">
                </div>
                <div class="form-group mb-4">
                    <input required type="text" class="form-control" id="company" placeholder="Your Company" name="company">
                </div>
                <div class="form-group mb-4">
                    <input required type="text" class="form-control" id="occupation" placeholder="Your Occupation" name="occupation">
                </div>
                <div class="form-group mb-4">
                    <textarea required class="form-control" id="message" placeholder="Your Message" rows="5" name="message"></textarea>
                </div>
                <button type="submit" class="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    </div>
</div>