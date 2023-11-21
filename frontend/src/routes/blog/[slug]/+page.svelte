<script>
  import { getPosts } from '$lib/blogServices';
  import { onMount } from 'svelte';
  import { slugify } from '$lib/utils';
  import { error } from '@sveltejs/kit';

  export let data;
  let posts = [];
  let post;
  let postFound = false;

  console.log(data.slug)

  onMount(async () => {
    posts = await getPosts();

    posts.forEach((element, index) => {
      if (slugify(element.attributes.title) == data.slug) {
        post = posts[index].attributes;
        console.log(post.title);
        postFound = true;
      }
    })
    if (!postFound) {
      throw error(404, 'Not found here');
    }
  });
</script>
  
  <main>
    {#await post}
      <h1>Hello</h1>
    {:then} 
      <h2>{post.title}</h2>
    {/await}
    <!-- Add more HTML to display the blog post content -->
  </main>