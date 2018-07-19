---
layout: "default"
---

<div class="title">
  {{  site.data.the_sword.title }}
</div>
<br />
<div class="author">
  {{  site.data.the_sword.author }}
</div>
<br />
<br />
{% for item in site.data.the_sword.lines %}
  <div>{{ item }}</div>
{% endfor %}
