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
  {% if next_is_spoken %}
    <div class="spoken">{{ item }}</div>
    <br />
    {% assign next_is_spoken = false %}
  {% elsif site.data.the_sword.characters contains item %}
    <div class="speaker">{{ item }}</div>
    {% assign next_is_spoken = true %}
  {% else %}
    <div class="narrated">{{ item }}</div>
    <br />
  {% endif %}
{% endfor %}
