---
layout: "default"
---

{% assign next_is_spoken = false %}
{% assign next_location = "" %}

<div class="title">
  {{  site.data.the_sword.title }}
</div>

<div class="author">
  {{  site.data.the_sword.author }}
</div>

<br />

{% for item in site.data.the_sword.lines %}
{% for location in site.data.the_sword.locations %}
{% if item contains location %}
{% capture next_location %}{{location}}{% endcapture %}
{% break %}
{% else %}
{% assign next_location = "" %}
{% endif %}
{% endfor %}
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
