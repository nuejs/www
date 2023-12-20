
---
title: Content collections / Nue docs
---

# Content collections
A content collection is an array of content files, where each entry holds information about the content such as the title, description, and URL. These collections are used to render content lists such as this one on the [blog example](/@simple-blog)

[media]
  small: /img/content-collection.png
  large: /img/content-collection-big.png
  caption: Blog index implemented with content collections
  class: bordered
  href: /@simple-blog

## Content entries
Content information is stored in the "front matter" of each Markdown file. For example:

``` yaml
 ---
 title: My Blog Post
 thumb: /img/my-thumb.png
 author: John Doe
 date: 2023-12-11
 ---
```

In addition to these user-defined properties, Nue provides the following system properties for each content entry:

[.reference]
  * *`url`* "/docs/glossary/copyleft.html" (example)
  * *`dir`* "docs/glossary"
  * *`slug`* "copyleft.html"
  * *`appdir`* "docs"

// Note: if you enable [pretty_urls]() configuration variable the URL will be "/docs/glossary/copyleft" and the slug will be "copyleft".


## Defining a collecion
Content collection is enabled on your Markdown front matter section as follows:

``` yaml
# create a collection from all the pages inside the "posts" directory
content_collection: posts

# assign a name for the collection. The default name is the directory name
collection_name: posts
```

Just like any other configuration option, you can also define the collection globally in `site.yaml` in which case you have the collection available on all your pages or you can define it inside your app on `app.yaml` in which case the collection is available on all pages inside the application directory.


## Rendering collections
After the collection is defined you can render it on your `layout.html` file:


```
<main>
  <div :for="post in posts">
    <img :src="post.thumb">
    <h3>{ post.title }</h3>
    <p>{ post.description }</p>
  </div>
</div>
```

The `posts` variable is a regular JavasSript Array instance so you can slice, map, and filter it as you please:

```
<div :for="post in posts.slice(0, 10)"> ... </div>
```

More complex manipulations are better implemented inside the server component's constructor method:

```
<ul>
  <li :for="post in posts"> ... </li>

  <script>
    constructor({ posts }) {
      this.items = posts.filter(el => el.tags.includes('styling'))
    }
  </script>
</ul>
```

By default, collections are sorted by `date` property so the the newest will be rendered first.


