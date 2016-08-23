/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

var path = require('path');
var React = require('react');

var BlogRss = React.createClass({
  render: function() {
    var site = this.props.site;
    var posts = site.files.blog
      .filter(file => !file.draft && path.extname(file.relPath) === '.md')
      .sort((a, b) => a.date < b.date);
    return (
      <feed xmlns="http://www.w3.org/2005/Atom">
        <title>Blog | GraphQL</title>
        <link href="http://graphql.org/blog/"/>

        {posts.map(post =>
          <entry>
            <title>{post.title}</title>
            <link href={'http://graphql.org' + post.url}/>
            <id>{post.permalink}</id>
            <updated>{new Date(post.date).toISOString()}</updated>
            <summary>{post.title}</summary>
            <content>{post.title}</content>
            <author>
              <name>{post.byline}</name>
            </author>
          </entry>
        )}
      </feed>
    );
  }
});

module.exports = BlogRss;
