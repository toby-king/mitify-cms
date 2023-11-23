export async function getPosts() {
  const query = new URLSearchParams({
    populate: '*',
    fields: '*',
    publicationState: 'live',
    locale: 'en'
  });
  
  const url = `${'http://139.162.234.32:1337'}/api/posts?${query}`;

  const response = await fetch(url);
  let data = await response.json();
  data = data.data;

  data.forEach(element => {
    const dateObject = new Date(element.attributes.publishedAt);

    const options = { 
      year: "numeric", 
      month: "short", 
      day: "numeric"
    }

    element.attributes.publishedAt = dateObject.toLocaleDateString("en-gb", options)
  });

  return data;
}