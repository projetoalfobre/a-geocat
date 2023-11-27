---
layout: page
permalink: /general/
title: General
---


{% assign date_format = site.date_format | default: "%B %-d, %Y" %}
<div class="post-list">
    {% for post in site.categories.General %}
    <div class="tag-entry post-preview card shadow-sm p-3 mb-5">
              <a href="{{ post.url | absolute_url }}">
        <h2 class="post-title">{{ post.title | strip_html }}</h2>

        {% if post.subtitle %}
          <h3 class="post-subtitle">
          {{ post.subtitle | strip_html }}
          </h3>
        {% endif %}
      </a>
            <div class="entry-date post-meta">
                <time datetime="{{- post.date | date_to_xmlschema -}}">{{- post.date | date: date_format -}}</time>
            </div>


      {% if site.feed_show_tags != false and post.tags.size > 0 %}
      <div class="blog-tags d-flex justify-content-end">
        <span>Tags:</span>
        <!-- role="list" needed so that `list-style: none` in Safari doesn't remove the list semantics -->
        <ul class="d-inline list-inline" role="list">
          {% for tag in post.tags %}
          <li class="list-inline-item">
            <a href="{{ '/tags' | absolute_url }}#{{- tag -}}">{{- tag -}}</a>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
        
        
        
        </div>
    {%- endfor -%}
</div>



