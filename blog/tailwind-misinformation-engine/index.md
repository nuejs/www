---
date: 2024-02-16
og: /img/tw-marketing-og.png
include: [ext/glow]
title: Tailwind marketing and misinformation engine
desc: The origins and technological validity of utility classes and  Catalyst UI library in contrast to semantic HTML and CSS
thumb: glow-thumb.jpg
draft: true
---


# Tailwind marketing and misinformation engine

[author]


Tailwind CSS was born out of this sentence:


[image.tall "/img/adam-keynote.jpg"]
  caption: "Adam's [keynote speech](//www.youtube.com/watch?v=CLkxRnRQtDE) in Tailwind Connect 2023"


The sentence is from *Nicolas Gallagher*'s article about [HTML semantics and front-end architecture][nicolas]. It was a turning point for *Adam Wathan*, the creator of Tailwind CSS. After reading the article he was "fully convinced that optimizing for reusable CSS was going to be the right choice for the sorts of projects".


[nicolas]: //nicolasgallagher.com/about-html-semantics-front-end-architecture/
[keynote]: //www.youtube.com/watch?v=CLkxRnRQtDE



## Phase 1: The origin of utility classes

Nicholas points out in the article that scalable HTML/CSS must "rely on classes within the HTML to allow for the creation of reusable components". So instead of using a content-dependent class name like "news", one should use a content-independent name like "uilist" or "uilist-item":

```
<nav class="uilist">
  <span class="uilist-item">
    ...
  </span>
</nav>
```

The more generic the name, the more reusable it is. He used the famous [media object][media] as a prime example of re-usable CSS.


[media]: //www.stubbornella.org/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/


Adam, however, interpreted the article quite differently. Instead of moving towards more generic semantic names, he went in the opposite direction and created a whole new styling language to be stuffed inside the class attribute:

[code]
  <!-- "uilist" -->
  <div class="
    sticky top-0 z-40 w-full backdrop-blur flex-none
    transition-colors duration-500 lg:z-50 lg:border-b
    bg-white/95 supports-backdrop-blur:bg-white/60
    dark:bg-transparent">

    <!-- "uilist-item" -->
    <span class="
      py-4 border-b border-slate-900/10 lg:px-8
      lg:border-0 dark:border-slate-300/10 px-4">
      ...
    </span>
  </div>

This kind of syntax was never heard of. Nicholas never suggested adding visual information directly to the element, let alone building a styling language like this. On the contrary: inline/atomic styling is the polar opposite of re-usable CSS.

But Adam used the article to amplify his agenda. He made us believe that the language he created was a prime example of Nicholas' thinking. And because Nicolas is working at Twitter, "you know a huge site", his take on CSS works for everyone, right? ¯\\_(ツ)_/¯

That was out of the ordinary in the open-source community where people tend to respect others' work.

Adam started looking for more proof and validity to his straw-man argument. He wrote an article called [CSS utility classes and "Separation of Concerns"][adam] to demonstrate how this new obscure syntax leads to more maintainable CSS.

[adam]: //adamwathan.me/css-utility-classes-and-separation-of-concerns/

But there was a challenge: to make such an absurdly misleading statement, he needed to debunk all the current CSS best practices and invent new terminology to support his reasoning. This new playbook was called:

[image.tall "/img/tailwind-practises.png" width="570"]
  caption: Tailwind brand messaging pillars

One by one, everything old was bad, and Tailwind stuff was good.

And now, with all the new terms and practices in front of everybody, it is time to announce __The New Truth__, which will cancel all the prior work and study about CSS:

> "Semantic class names” are the reason CSS is hard to maintain

To strengthen the message, Adam emphasized the contrast between the old and the new by introducing a villain (semantic CSS), and a hero (Tailwind).

The villain is painted with harsh words ranging from "unmaintainable" to "fucking bullshit" in his keynote speech. And the word "semantic" is always quoted to make it look like useless, academic jargon. Tailwind is obviously described in the most positive light possible:

[image.tall "/img/villain-and-hero.png" width="570"]
  caption: Brand voice examples

This marketing scheme worked like a charm. Developers took the new rules and terms for granted and started tweeting and blogging the new truth. It was a gold mine for Tailwind. Every converted user resulted in more users, preachers, and license sales.

But no amount of money is enough for a businessman so it was time for another truth.




## Phase 2: Utility-first workflow
Once people started pouring in, Adam wanted to make sure they were properly onboarded and locked inside the system. This locking scheme is called ["utility-first workflow"](https://tailwindcss.com/docs/reusing-styles)

> Tailwind encourages a utility-first workflow, where designs are implemented using only low-level utility classes. This is a powerful way to avoid premature abstraction and the pain points that come with it.

Here's how the flow works:


### Step 1: Onboarding
In the utility-first approach, the idea is to build everything out of utilities, and later extract repeating patterns as they emerge. Adam persuades you to the scheme with this compelling proposition:

> If you give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.

Sounds great, so let's do this:

Once installed, you quickly start to see what the fuzz is all about. The joy of writing everything in the same place, without switching between HTML and CSS, and never thinking about naming things. It's like crack cocaine: you feel immensely productive with all the handy shortcuts together with hot-module replacement.


### Step 2: "Premature abstraction"
After the initial rush, the euphoria starts to fade out: the code you've spitted out doesn't look very pretty. You start wondering what comes next after the utility-first step. How to clean up the mess?

Turns out there is no next step. Or it kind of exists, but it's called "premature abstraction". The [exit plan](//tailwindcss.com/docs/reusing-styles) focuses solely on keeping you inside the system and never to leave. If I want to clean up my code with `@apply`, the [documentation says](https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction):

> Whatever you do, don’t use @apply just to make things look “cleaner”

Of course. A semantic class name like "primary" is the reason CSS is hard to maintain. Literally their business model. Then what should I use @apply for? The documentation does not say, because they want to lock me in. The documentation focuses solely on convincing me why @apply is a bad practice and comes with multiple pain points.


### Step 3: Vendor lock-in
Once you take the first step, there is no way out. The only meaningful exit is a semantic class name, but that will spiral you down the rabbit hole. This is the prime idea of the utility-first workflow:

[image.tall "/img/utility-first-loop.png"]
  caption: Utility-first workflow


So I keep coming back to the first step resulting in more and more utility classes. Because I need to avoid the pain points.

This utility-first loop, with no escape to semantic CSS — is a clever way to increase loyalty and bring more users, evangelists, and money to Tailwind.




## Phase 3: Catalyst UI kit
In December 2023, Tailwind introduced their utility-first masterpiece: *Catalyst*. It's the ultimate showcase of maintainable and scaleable CSS.


### Domain-specific language (DSL)
To keep users in the loop Tailwind attempts to jam as many CSS features as it is possible inside the space-separated class attribute. So Tailwind has grown from a simple set of classes to a full-blown vendor-specific language with nested expressions, operators, and method calls. Let's look at the source code of the first button on Catalyst [demo page](//catalyst.tailwindui.com/):

[image.tall "/img/tailwind-button.png" width="500"]

[.small]
  The black button source code. The expressions are sorted alphabetically:

[code.small]
  <button class="
    [&amp;>[data-slot=icon]]:-mx-0.5
    [&amp;>[data-slot=icon]]:my-0.5
    [&amp;>[data-slot=icon]]:shrink-0
    [&amp;>[data-slot=icon]]:size-5
    [&amp;>[data-slot=icon]]:sm:my-1
    [&amp;>[data-slot=icon]]:sm:size-4
    [&amp;>[data-slot=icon]]:text-[--btn-icon]
    [--btn-bg:theme(colors.zinc.900)]
    [--btn-border:theme(colors.zinc.950/90%)]
    [--btn-hover-overlay:theme(colors.white/10%)]
    [--btn-icon:theme(colors.zinc.400)]
    after:-z-10
    after:absolute
    after:data-[active]:bg-[--btn-hover-overlay]
    after:data-[disabled]:shadow-none
    after:data-[hover]:bg-[--btn-hover-overlay]
    after:inset-0
    after:rounded-[calc(theme(borderRadius.lg)-1px)]
    after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)]
    before:-z-10
    before:absolute
    before:bg-[--btn-bg]
    before:data-[disabled]:shadow-none
    before:inset-0
    before:rounded-[calc(theme(borderRadius.lg)-1px)]
    before:shadow
    bg-[--btn-border]
    border
    border-transparent
    dark:[--btn-bg:theme(colors.zinc.600)]
    dark:[--btn-hover-overlay:theme(colors.white/5%)]
    dark:after:-inset-px
    dark:after:rounded-lg
    dark:before:hidden
    dark:bg-[--btn-bg]
    dark:border-white/5
    dark:text-white
    data-[active]:[--btn-icon:theme(colors.zinc.300)]
    data-[disabled]:opacity-50
    data-[focus]:outline
    data-[focus]:outline-2
    data-[focus]:outline-blue-500
    data-[focus]:outline-offset-2
    data-[hover]:[--btn-icon:theme(colors.zinc.300)]
    focus:outline-none
    font-semibold
    forced-colors:[--btn-icon:ButtonText]
    forced-colors:data-[hover]:[--btn-icon:ButtonText]
    gap-x-2
    inline-flex
    isolate
    items-center
    justify-center
    px-[calc(theme(spacing[3.5])-1px)]
    py-[calc(theme(spacing[2.5])-1px)]
    relative
    rounded-lg
    sm:px-[calc(theme(spacing.3)-1px)]
    sm:py-[calc(theme(spacing[1.5])-1px)]
    sm:text-sm/6
    text-base/6
    text-white"> Button </button>


The obvious question, one shall not ask: How is this wall of code more maintainable than a single semantic class name like "primary"?

Do I need another wall of code for the white button? YES. This one I knew myself, because a semantic class name like "secondary" is hard to maintain.

Also: is there a limit to this? When can I use @apply to clean that up? After 100 statements? Is 1000 statements per element still legit?

Anyone?


### "Modeled after HTML"
To blur the line between semantic HTML and the utility-first workflow, Catalyst introduced a new markup language that separates ("dependency directs") the class soup behind React components. Here's an example:

[code numbered="1"]
  <Dialog>
    <DialogTitle>Join mailing list</DialogTitle>
    <DialogDescription>
      Expect <Strong>no spamming</Strong>
    </DialogDescription>

    <DialogBody>
      <Field>
        <Label>Email</Label>
        <Input name="email" />
      </Field>
    </DialogBody>

    <DialogActions>
  -   <button class="plain">Cancel</button>
  +   <Button plain>Cancel</Button>
      <Button>Join</Button>
    </DialogActions>
  </Dialog>


Never confuse this to semantic HTML! That will spiral you down the rabbit hole again. Instead, you must use the correct phrase called "Modeled after HTML", which is a whole different game:

[image.tall "/img/catalyst-markup.png"]
  caption: From semantic to more semantic

So the standard HTML `<dialog>` is bad, but `<Dialog>` is good, because semantic naming makes CSS hard to maintain?

And the semantic class name "plain" is hard to maintain, but "plain" as an attribute name is easy to maintain?

Obviously `<p>` is bad, but adding more semantic information about the content is the best practice of Catalyst?

```
<!-- Catalyst <p> tags -->
<Text>
<Description>
<DialogDescription>
<AlertDescription>
...
```


Is separation of concerns suddenly okay with Catalyst but we should never use it with vanilla HTML and CSS? Or am I confusing this to "dependency direction"?

I'm completely lost. We need a new set of truths and quick. Otherwise, we might forget which one is bullshit and which one is legit.

Tailwind or the web standards?




## Phase 4: Web standards
Here's the missing escape path for utility-first developers who want to switch to standard CSS, and stay relevant for years to come.


### Learn CSS
The first step is to learn CSS.

1. Start from the [Nicholas's post][nicolas] and learn the benefits of semantic naming. See how Adam used the article to validate the contradictory ideas of Tailwind.

2. Study MDN documentation on web standards. There's a lot, so start with the basics of CSS: [the cascade][cascade], [nesting][nesting], and [specifity][specifity]. Learn to build scaleable CSS architectures, and see how atomic class names fit into the bigger picture.

3. Take inspiration. CSS is a powerful language that far surpasses Tailwind. Learn how the best developers in the game like [Ryan Mulligan](//ryanmulligan.dev/blog/), [Ahmad Shadeed](//ishadeed.com/), and [Josh Comeau](//www.joshwcomeau.com/) use CSS in more stylish, and creative ways.

[nicolas]: //nicolasgallagher.com/about-html-semantics-front-end-architecture/
[cascade]: //developer.mozilla.org/en-US/docs/Web/CSS/Cascade
[nesting]: //developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting
[specifity]: //developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Nesting_and_specificity



### Standards first
Here's a new workflow. I'm calling it "standards-first". It outdrives everyone stuck in the utility-first loop. It follows Nicholas's best practices for writing maintainable CSS:

[image.tall "/img/standards-first.png" width="600"]
  caption: Standards first model


You start with a pure, semantic layout and figure out all the reusable pieces of CSS. At times, especially when building new components, you might want to prototype quickly with inline styling. But that's part of the system, and there is a way out. It is highly recommended to use a semantic class name to make things look cleaner. There are no pain points, only benefits. Here's a new best practice:

> Clean code is easier to maintain

This is the loop you want to go with.



### Stay relevant
It's only a matter of time before Tailwind collapses. The obscure domain-specific language fueled with disinformation and dirty marketing tactics cannot hold water very long. All the utility-first code we produce today will eventually turn into technical dept.

Learn to write clean HTML and CSS and stay relevant for years to come.

[image.tall "/img/tw-switch.png" width="600"]

