# Run the pip install command below if you don't already have the library
# !pip install git+https://github.com/JustAnotherArchivist/snscrape.git

# Run the below command if you don't already have Pandas
# !pip install pandas

# Imports
import snscrape.modules.twitter as sntwitter
import pandas as pd
from datetime import datetime

# Setting variables to be used below
maxTweets = 500

# Creating list to append tweet data to
tweets_list2 = []
category = 'REDT'
group = '00'
collector = 'John Wick'
topic = 'Redtagging of rallyists'
keywords = 'rally ng rally since:2016-01-01 until:2023-03-17'

# Using TwitterSearchScraper to scrape data and append tweets to list
for i, tweet in enumerate(sntwitter.TwitterSearchScraper(keywords).get_items()):
    if i > maxTweets:
        break

    now = datetime.now()
    tweets_list2.append([
        now,
        tweet,
        group,
        collector,
        category,
        topic,
        keywords,
        f"@{tweet.user.username}",
        tweet.user.displayname,
        tweet.user.rawDescription,
        tweet.user.verified,
        tweet.user.created,
        tweet.user.friendsCount,
        tweet.user.followersCount,
        tweet.user.location,
        tweet.rawContent,
        '',
        'text',
        tweet.date,
        '',
        '',
        tweet.user.favouritesCount,
        tweet.replyCount,
        tweet.retweetCount,
        tweet.quoteCount,
        tweet.viewCount
    ])

# Creating a dataframe from the tweets list above
tweets_df2 = pd.DataFrame(
    tweets_list2,
    columns=[
        "Timestamp",
        "Tweet URL",
        "Group",
        "Collector",
        "Category",
        "Topic",
        "Keywords",
        "Account handle",
        "Account name",
        "Account bio",
        "Account type",
        "Joined",
        "Following",
        "Followers",
        "Location",
        "Tweet",
        "Tweet Translated",
        "Tweet Type",
        "Date posted",
        "Screenshot",
        "Content type",
        "Likes",
        "Replies",
        "Retweets",
        "Quote Tweets",
        "Views"
    ])

# Display first 5 entries from dataframe
tweets_df2.head()

# Export dataframe into a CSV
tweets_df2.to_csv('text-query-tweets.csv', sep=',', index=False)
