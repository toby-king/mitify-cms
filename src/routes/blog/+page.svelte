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
    .title {
        color: #02498B;
        font-weight: 800;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-family: "Oswald";
    }
    .page-content {
        width: 100%;
        max-width: 80vw;
        margin: 0 auto;
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
    .container-fluid {
        min-height: 82vh;
    }
</style>

<svelte:head>
    <title>Latest Posts | Mitify+</title>
</svelte:head>

<div class="container-fluid" id="page">
  <div class="posts-wrapper w-100 page-content mt-5">
    <h1 class="title">Latest Posts</h1>
    <div class="row w-100">
      {#if error !== null}
        {error}
      {:else}
        {#each [...posts].reverse() as post}
          <div class="col-lg-4">
            <a href="blog/{slugify(post.attributes.title)}">
              <div class="post mb-4">
                  <img src="http://139.162.234.32:1337{ post.attributes.thumbnail.data.attributes.url }" alt="Post Thumbnail">
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
      {/if}
    </div>
  </div>
</div>