---
path: "/content-0"
date: "2018-10-06T13:35:13.234Z"
title: "Styling React Components"
tags: ["React", "CSS", "styles", "styling"]
---

How do you style your React components?  I am currently torn between
two approaches.  Separate `.css` files seem to defeat the modularity of 
styled components.  Yet, including a `styles` function in each file
can have drawbacks as well.  When is inline styling the best choice
and why isn't it always the best choice?  I recently merged two projects, 
one which uses separate style sheets and some inline assignments.  The
other project is a template from Material-UI's documentation which uses
a very encapsulated single file format and the previously mentioned
`styles` function.  