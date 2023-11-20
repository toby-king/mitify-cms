<script>
    import { onMount } from 'svelte';
    
    let posts = [];
    let content;
    let error = null;
    
    onMount(async () => {
        const parseJSON = (resp) => (resp.json ? resp.json() : resp);
        const checkStatus = (resp) => {
        if (resp.status >= 200 && resp.status < 300) {
          return resp;
        }
        return parseJSON(resp).then((resp) => {
          throw resp;
        });
      };
      const headers = {
        'Content-Type': 'application/json',
      };

      const query = new URLSearchParams({
        populate: '*',
        fields: '*',
        publicationState: 'live',
        locale: 'en'
      });
      
      const url = `${'http://localhost:1337'}/api/posts?${query}`;
    
        try {
            const res = await fetch(url, {
              method: "GET",
              headers: {
                 'Content-Type': 'application/json'
              },
            }).then(checkStatus)
          .then(parseJSON);
            posts = res.data;

            posts.forEach(element => {
              const dateObject = new Date(element.attributes.publishedAt);

              const options = { 
                year: "numeric", 
                month: "short", 
                day: "numeric"
              }

              element.attributes.publishedAt = dateObject.toLocaleDateString("en-gb", options)
            });
            console.log(posts)
        } catch (e) {
            error = e
        }
    });
</script>
    
    {#if error !== null}
      {error}
    {:else}
      <ul>
      {#each posts as post}
        <li>
            {post.attributes.title}
        </li>
        <ul>
            <li>{post.attributes.description}</li>
            <li><date>{post.attributes.publishedAt}</date></li>
            <li><img src="http://localhost:1337{post.attributes.thumbnail.data.attributes.url}" alt="thumbnail" /></li>
            <li>{@html post.attributes.content}</li>
        </ul>
      {/each}
      </ul>
    {/if}