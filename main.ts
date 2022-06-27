import blog, { redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  links: [
    { title: "Email", url: "mailto:johan@lindskogen.se" },
    { title: "GitHub", url: "https://github.com/lindskogen" },
    { title: "Twitter", url: "https://twitter.com/jlindsk" }
  ],
  background: "#002f75",
});
