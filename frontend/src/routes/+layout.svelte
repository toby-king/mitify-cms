<style>
    footer {
        background-color: #02498B;
    }
    .footer-content {
        width: 80%;
        margin: 0 auto;
    }
    footer img {
        height: 60px;
        width: 60px;
    }
    footer p {
        font-family: "Oswald";
        color: #fff;
        display: inline;
        letter-spacing: 1px;
    }
    @media screen and (max-width: 425px) {
        footer p {
            font-size: 0.8rem;
        }
        footer img {
            height: 45px;
            width: 45px;
        }
    }
</style>

<slot></slot>
<footer>
    <div class="footer-content">
        <img src="/images/icon.png" alt="Mitify+ Logo">
        <p>&copy DTF Media Group Ltd. 2023.</p>
    </div>
</footer>