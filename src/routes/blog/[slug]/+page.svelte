<script>
  import { getPosts } from '$lib/blogServices';
  import { onMount } from 'svelte';
  import { slugify } from '$lib/utils';
  import { error } from '@sveltejs/kit';

  export let data;
  let posts = [];
  let post;
  let postFound = false;
  let postTitle;

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
          postTitle = post.title;
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
    color: #02498B;
    font-weight: 800;
    letter-spacing: 2px;
    font-family: "Oswald";
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
    padding-top: 1rem;
  }
  .post-content a {
    font-family: "Oswald";
    font-weight: bold;
  }
  .post-date {
    color: #757575;
  }
</style>

<svelte:head>
    <title>{postTitle} | Mitify+</title>
</svelte:head>

<div class="container-fluid">
  <div class="blog-post">
    {#await posts}
      <h1>Loading...</h1>
      
    {:then}
      {#if postFound}
          <nav aria-label="breadcrumb" class="mt-3">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/blog">Blog</a></li>
              <li class="breadcrumb-item active" aria-current="page">{post.title}</li>
            </ol>
          </nav>
          <h1 class="text-center mt-3 post-title">{post.title}</h1>
          <p class="post-date text-center">{post.publishedAt}</p>
          <div class="thumbnail-wrapper text-center mb-5">
              <img src="http://139.162.234.32:1337{post.thumbnail.data.attributes.url}" alt="Post Thumbnail">
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
        {#if post.attributes.title != postTitle}
          <div class="col-lg-4">
            <a href="{slugify(post.attributes.title)}">
              <div class="post mb-4">
                  <img src="http://139.162.234.32:1337{ post.attributes.thumbnail.data.attributes.url }" alt="Post Thumbnail">
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
        {/if}
      {/each}
    </div>
  </div>
</div>

