<script>
  import { getPosts } from '$lib/blogServices';
  import { onMount } from 'svelte';
  import { slugify } from '$lib/utils';
  import { error } from '@sveltejs/kit';

  export let data;
  let posts = [];
  let post;
  let postFound = false;

  onMount(async () => {
    posts = await getPosts();
  });

  $: {
    if (posts.length > 0) {
      postFound = false;
      posts.forEach((element, index) => {
        if (slugify(element.attributes.title) === data.slug) {
          post = element.attributes;
          postFound = true;
        }
      });

      if (!postFound) {
        throw error(404, 'Not found here');
      }
    }
  }
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
  a {
    color: #000;
    text-decoration: none;
  }
  p, li, a {
    font-family: "Montserrat"
  }
  .container-fluid {
    min-height: 90vh;
  }
  .blog-post {
    width: 85%;
    margin: 0 auto;
    max-width: 800px;
  }
  .blog-post img {
    max-width: 100%;
  }
  .blog-post p {
    font-size: 1.2rem;
  }
  .post-title {
    font-family: "Oswald";
    font-weight: 700;
  }
  .post-date {
    color: #757575
  }
  .loading {
    text-align: center;
    color: #02498B;
    padding-top: 20rem;
  }
  .post {
    padding: 0;
    overflow: hidden;
    transition: .3s ease-in-out;
  }
  .post img {
    width: 100%;
    height: 180px;
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
</style>

<div class="container-fluid">
  <div class="blog-post">
    {#await posts}
      <h1>Loading...</h1>
      
    {:then}
      {#if postFound}
          <h1 class="text-center mt-3 post-title">{post.title}</h1>
          <p class="post-date text-center">{post.publishedAt}</p>
          <div class="thumbnail-wrapper text-center mb-5">
              <img src="http://localhost:1337{post.thumbnail.data.attributes.url}" alt="Post Thumbnail">
          </div>
          <div class="mb-5">
            {@html post.content}
          </div>
      {:else}
        <div class="loading">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      {/if}
    {/await}
    <div class="row mt-5">
      <h2 class="post-title">You Might Also Like</h2>
      {#each [...posts].reverse() as post}
        <div class="col-lg-4">
          <a href="{slugify(post.attributes.title)}">
            <div class="post mb-4">
                <img src="http://localhost:1337{ post.attributes.thumbnail.data.attributes.url }" alt="Post Thumbnail">
                <div class="post-content">
                    <h3>
                        <a href="{slugify(post.attributes.title)}">
                            {post.attributes.title}
                        </a>
                    </h3>
                    <p>
                        <time class="post-date">
                            {post.attributes.publishedAt}
                        </time>
                    </p>
                    <p>
                        <a href="{slugify(post.attributes.title)}" style="color:#02498B;">
                            Read more →
                        </a>
                    </p>
                </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>

