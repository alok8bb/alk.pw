import Parser from 'rss-parser';

const parser = new Parser();

const feedURL = 'https://blog.alk.pw/feed.xml';

export type Post = { 
    title: string;
    link : string;
    pubDate: Date;
    description: string;
}

export async function fetchLatestPosts(feedUrl = feedURL, limit = 3): Promise<Post[]> {
  const feed = await parser.parseURL(feedUrl);
  return feed.items.slice(0, limit).map(item => ({
    title: item.title || ' ',
    link: item.link || '',
    pubDate: new Date(item.pubDate || "") || new Date(),
    description: item.contentSnippet || item.content || '',
  }));
}