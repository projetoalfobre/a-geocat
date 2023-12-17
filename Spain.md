---
layout: page
permalink: /spain/
title: Spain
subtitle: Datasets related to Spain or spanish context
cover-img: /assets/img/spain.jpg
---


{% assign date_format = site.date_format | default: "%B %-d, %Y" %}
<div class="post-list">
    {% for post in site.categories.Spain %}
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
            <div class="post-meta">
                {% if post.last-updated %}
                    Last updated: {{ post.last-updated | date: date_format }}
                {% endif %}
                {% if post.status %}
                <br><span class="post-meta">Status: {{ post.status | strip_html }}</span>
                {% endif%}
                {% if post.version %}
                <br><span class="post-meta">Version: {{ post.version | strip_html }}</span>
                {% endif%}             
          </div>

      {% if site.feed_show_tags != false and post.tags.size > 0 %}
      <div class="blog-tags d-flex">
        
        <!-- role="list" needed so that `list-style: none` in Safari doesn't remove the list semantics -->
        <ul class="d-inline list-inline" role="list">
          {% for tag in post.tags %}
          <li class="list-in-line-item badge">
            <a href="{{ '/tags' | absolute_url }}#{{- tag -}}">{{- tag -}}</a>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
        
        
        
        </div>
    {%- endfor -%}
</div>

