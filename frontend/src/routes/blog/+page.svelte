<script>
    import { onMount } from 'svelte';
    import { slugify } from '$lib/utils';
    import { getPosts } from '$lib/blogServices';
    
    let posts = [];

    onMount(async () => {
        posts = await getPosts();
        console.log(posts);
    });
    let content;
    let error = null;
    
    
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
        min-height: 100vh;
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
    .blog-nav {
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
        padding: 1rem;
    }
    .post-content a {
        font-family: "Oswald";
    }
    .post-date {
        color: #757575;
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
  <div class="nav-wrapper blog-nav" id="top">
      <nav class="navbar navbar-expand-md page-content" id="banner">
          <a href="/">
              <img src="images/icon.png" alt="Mitify+ Logo" class="logo">
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
                  <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                  <li class="nav-item"><a class="nav-link" href="/#about">About</a></li>
                  <li class="nav-item"><a class="nav-link" href="/#solutions">Solutions</a></li>
                  <li class="nav-item"><a class="nav-link" href="/#contact">Contact</a></li>
              </ul>
          </div>
      </nav>
  </div>

  <div class="posts-wrapper w-100 page-content mt-5">
    <div class="row w-100">
      {#if error !== null}
        {error}
      {:else}
        {#each [...posts].reverse() as post}
          <div class="col-lg-4">
            <a href="">
              <div class="post mb-4">
                  <img src="http://localhost:1337{ post.attributes.thumbnail.data.attributes.url }" alt="Post Thumbnail">
                  <div class="post-content">
                      <h3>
                          <a href="">
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
      {/if}
    </div>
  </div>
</div>