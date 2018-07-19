---
layout: "default"
---

{% assign next_is_spoken = false %}

<div class="title">
  {{  site.data.the_sword.title }}
</div>

<div class="author">
  {{  site.data.the_sword.author }}
</div>

{% for item in site.data.the_sword.lines %}
{{ product.title | replace: 'Awesome', 'Mega' }}
{% capture next_location %}
{{ item | replace: 'INT. ', '' | replace: 'EXT. ', '' | replace: '- DAY', '' | replace: '- NIGHT', '' }}
{% endcapture %}
{% if next_is_spoken == true %}
<div class="spoken">
  {{ item }}
</div>
{% assign next_is_spoken = false %}
{% elsif site.data.the_sword.locations contains next_location %}
<div class="located location-name" title="{{ site.data.the_sword.locations[next_location] }}">
  {{ item }}
</div>
{% elsif site.data.the_sword.characters contains item %}
<div class="speaker character-name" title="{{ site.data.the_sword.characters[item] }}">
  {{ item }}
</div>
{% assign next_is_spoken = true %}
{% else %}
<div class="narrated">
  {{ item }}
</div>
{% endif %}
{% endfor %}
