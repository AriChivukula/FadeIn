---
layout: "default"
---

{% increment next_is_spoken %}

<div class="title">
  {{  site.data.the_sword.title }}
</div>

<div class="author">
  {{  site.data.the_sword.author }}
</div>

{% for item in site.data.the_sword.lines %}
  {% if next_is_spoken == 1 %}
    <div class="spoken">
      {{ item }}
    </div>
    {% decrement next_is_spoken %}
  {% elsif site.data.the_sword.characters contains item %}
    <div class="speaker">
      {{ item }}
    </div>
    {% increment next_is_spoken %}
  {% else %}
    <div class="narrated">
      {{ item }}
    </div>
  {% endif %}
{% endfor %}
