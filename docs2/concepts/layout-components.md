
# Layout components
Nue comes with a flexible layout system that works as follows:

- Global layout is defined in `layout.html` file on the project root
- Application layout is defined in `<appdir>/layout.html`, which can override the modules on the global layout
- Layouts are [HTML-based](../reference/template-syntax.html) and they utilize YAML data, which can be defined in root-, application-, and page level.



## Headers and footers
The simplest form of layout is to define global headers and footers on the root level `layout.html` and call it a day. For example:

```
<!-- global, site-wide header -->
<header>
  <!-- logo with link to front page -->
  <a href="/"><img :src="logo"></a>

  <!-- master navigation -->
  <nav>
    <a :for="name in areas" href="/{ name.toLowerCase() }/">{ name }</a>
  </nav>
</header>

<!-- global footer -->
<footer>
  <p>© { name } • { new Date().getFullYear() }</p>
  <q>{ slogan }</q>

  <!-- Google Tag Manager :) -->
  <script>
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start' ...
    })(window, document,'script','dataLayer','{ gtm_id }')
  </script>
</footer>
```

In above the template data is defined in root-level `site.yaml` file as follows:

```
areas: [ Features, Docs, Blog, About ]
logo: /img/logo.svg
name: Emma Bennet
slogan: Less is more
gtm_id: GTM-TZNM36
```


## Main layout
Main layout is the HTML5 `<main>` element between header and footer that typically varies between applications. You may have a sidebar under the documentation area and a "hero" area on your blog entries. Here's an example main layout for a blog entry:

```
<main>
  <!-- hero area -->
  <section class="hero" style="background-image:url({ hero })">
    <h1>{ title }</h1>
    <p>{ description }</p>
  </section>

  <!-- slot for content -->
  <article>
    <slot for="content"/>
  </article>

</main>
```

Again, you can specify the main element on the root level and override it on each application if needed.


## Head element
By default Nue generates the basic head elements from the data stored on your [data files](../reference/seo-and-metadata.html) plus auto-conifugures all `script`, `link`, and `style` tags based on your configuration and [directory structure](files-and-directories.html). You can extend this system data with a custom head module:

```
<!-- custom head settings -->
<head>
  <meta name="theme-color" content="#837cde">
</head>
```


## Root layout
Sometimes you may want to take full control of the layout instead of specifying the individual layout component like the header and footer. Here's an example custom layout:


```
<html>
  <head>
    <!-- system meta elements -->
    <slot for="head"/>

    <!-- custom meta elements -->
    <meta property="og:description" :content="og_description">
  </head>

  <!-- custom body layout -->
  <body>
    <main>
      <h1>{ title }</h1>
      <slot for="content"/>
    </main>
  </body>

</html>
```


## Single-page applications
With single page applications you can simply start with the tag name of your main application on your `index.html` file:

```
<crm-dashboard/>
```

You can freely customize the layout, for example:

```
<main>
  <h1>Acme CRM</h1>
  <crm-dashboard/>
</main>
```

Or you can take full control of the layout with a root level `html` element. For example:

```
<html>
  <head>
    <!-- add this slot to keep things working  -->
    <slot for="head"/>

    <!-- any custom metadata here -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'">
  </head>

  <body>
    <!-- render data (server side) -->
    <h3>{ title }</h3>

    <!-- mount the app here -->
    <crm-dashboard/>

  </body>
</html>
```










