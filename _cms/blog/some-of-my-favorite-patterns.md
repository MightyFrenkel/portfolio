---
title: CSS patern collection
description: A collection of my favorite CSS patterns
date: 2023-06-24
---

<Sandpack template="static" files={{
"/index.html": `

<head>
    <link rel="stylesheet" href="/styles.css">
</head>
        `,
"/styles.css": `
body {
background-color: #e5e5f7;
opacity: 0.8;
background-image: linear-gradient(135deg, #444cf7 25%, transparent 25%), linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%);
background-position: 10px 0, 10px 0, 0 0, 0 0;
background-size: 80px 80px;
background-repeat: repeat;
}
`,
}}
/>
<Sandpack template="static" files={{
"/index.html": `

<head>
    <link rel="stylesheet" href="/styles.css">
</head>
        `,
"/styles.css": `
body {
  background-color: #fff;
  background-image: radial-gradient(#000 10%, transparent 11%),
    radial-gradient(#000 10%, transparent 11%);
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
  background-repeat: repeat;
}
`,
}}
/>
